// Run on window ready
let build_time = "";

// Call every second
setInterval(() => {
    console.log("Checking for build time update...")

    // Check if the build time updated
    fetch("/build-time.txt").then(it => it.text()).then(it => {
        if (!build_time) build_time = it;
        else if (build_time !== it) {
            window.location.reload();
        }
        else {
            console.log("> Nothing changed _(:з」∠)_")
        }
    })
}, 1000)
