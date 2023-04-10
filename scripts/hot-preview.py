#!/usr/bin/env python
#
# This script is used to hot-reload the preview page when a file in ./people is changed.
# Please run this script in the source directory, not the ./scripts directory where this file is located.
#
# Please make sure to install python dependencies:
# > pip install watchdog
#
# Tested on Python 3.11 but should work on Python >3.9
#
# By Azalea on 2023-04-10
#
import os
import socketserver
import sys
import threading
import time
from http.server import SimpleHTTPRequestHandler
from subprocess import check_output

from watchdog.events import FileSystemEventHandler
from watchdog.observers import Observer


PORT = 8094

should_update = False


class MyHandler(FileSystemEventHandler):
    def on_modified(self, event):
        global should_update
        print(f"File {event.src_path} has been modified")
        if not event.is_directory:
            should_update = True


def server():
    class Handler(SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory="dist", **kwargs)

        def send_error(self, code, message=None, explain=None):
            # Serve 404.html for 404 errors
            if code == 404:
                path = self.translate_path('404.html')
                try:
                    with open(path, 'rb') as file:
                        content = file.read()
                        self.send_response(200)
                        self.send_header('Content-type', 'text/html')
                        self.end_headers()
                        self.wfile.write(content)
                except IOError:
                    self.send_error(404, 'File Not Found: %s' % self.path)
            else:
                super().send_error(code, message, explain)

    print(f"Serving on http://localhost:{PORT} ...")
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()


if __name__ == '__main__':
    event_handler = MyHandler()
    observer = Observer()
    observer.schedule(event_handler, path='people', recursive=True)
    observer.start()

    assert os.path.isdir("people") and os.path.isfile("package.json")

    # Build preview once
    print("Initial build...")
    check_output("yarn build-preview", shell=True)

    # Start server on new thread
    httpd = threading.Thread(target=server)
    httpd.start()

    # Start watching
    print("Start watching")
    try:
        while True:
            # Update build only once per second because many IDEs use many file operations for one update
            print("Watching...")
            time.sleep(1)

            if should_update:
                print("Rebuilding...")
                os.system("yarn build")
                should_update = False

    except KeyboardInterrupt:
        print("Stopping watcher...")
        observer.stop()
        print("Stopping server...")
        os._exit(0)

