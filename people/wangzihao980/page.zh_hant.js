"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:function(){return _default}});function MDXContent(props){if(props===void 0)props={};var _createMdxContent=function _createMdxContent(){var _components=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",br:"br",a:"a"},props.components),PhotoScroll=_components.PhotoScroll;if(!PhotoScroll)_missingMdxReference("PhotoScroll",true);return Vue.h(Vue.Fragment,null,Vue.h(_components.h2,null,"簡介"),"\n",Vue.h(_components.blockquote,null,"\n",Vue.h(_components.p,null,"「跨 les…這輩子不可能有真正的愛的吧……」",Vue.h(_components.br),"\n","「差不多，該離開了吧？」"),"\n"),"\n",Vue.h(_components.p,null,"陳由岐是一個來自北京朝陽的可愛女孩，這點從她發布的照片中可以看出。"),"\n",Vue.h(PhotoScroll,{photos:["${path}/photos/picture1.jpg","${path}/photos/picture2.jpg","${path}/photos/picture3.jpg","${path}/photos/picture4.jpg","${path}/photos/picture5.jpg"]}),"\n",Vue.h(_components.p,null,"在 2023 年 1 月 5 號晚，她於晚上 10:54 發表 ",Vue.h(_components.a,{href:"https://twitter.com/wangzihao980/status/1611013359188709376"},"告別推文")," 後於當天凌晨離開了這個世界。"),"\n",Vue.h(_components.p,null,"在事件發生的第二天，她的朋友登上了她的帳號並發表了 ",Vue.h(_components.a,{href:"https://twitter.com/wangzihao980/status/1611220509890596866"},"聲明")," 證實了她離世的消息。"),"\n",Vue.h(_components.p,null,"這是她留給我們的，",Vue.h(_components.a,{href:"https://twitter.com/wangzihao980/status/1602321958557085697"},"最後的文字"),"。"),"\n",Vue.h(PhotoScroll,{photos:["${path}/photos/Word1.jpg"]}),"\n",Vue.h(_components.p,null,"無論你是否認識她，都請為這位可憐的姑娘哀悼並獻上美好的祝福吧。"))};var _ref=props.components||{},MDXLayout=_ref.wrapper;return MDXLayout?Vue.h(MDXLayout,props,Vue.h(_createMdxContent)):_createMdxContent()}var _default=MDXContent;function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}