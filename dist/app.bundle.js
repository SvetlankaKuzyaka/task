!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,u=0,l=[],d=n(4);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function m(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),m(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=c||(c=v(e)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),m(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){f(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(h(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b,w=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"body {\n  margin: 0;\n  padding: 0;\n  white-space: normal;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n\ninput {\n  margin-right: 20px;\n  height: 5vh;\n  width: 30vw;\n  font-size: 1.5rem;\n  font-weight: bold;\n  box-shadow: inset 0px 0px 10px rgba(182, 179, 179, 0.9);\n  color: #1b0c27;\n}\n\n.upcontainer {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n}\n\nbutton:active, button:focus {\n  outline: none;\n}\n\nbutton:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n}\n\nbutton {\n  color: #fff;\n  font-size: 1rem;\n  width: 90px;\n  height: 40px;\n  border: none;\n  border-radius: 15px / 20px;\n  background: linear-gradient(to right bottom, #582c7e, #6379d0);\n  box-shadow: 0px 15px 50px -5px #6379d0;\n}\n\n.main_container {\n  background-color: rgb(107, 102, 102);\n  --w: 70vw;\n  width: var(--w);\n  height: 50vh;\n  overflow: hidden;\n  margin: 1rem auto;\n  box-shadow: 10px 5px 10px rgba(48, 47, 47, 0.9);\n}\n\n.container {\n  --n: 1;\n  --i: 0;\n  --m: 4;\n  --tx: 0px;\n  --f: 1;\n  height: 100%;\n  width: calc(var(--w)*var(--n)/var(--m));\n  display: flex;\n  align-items: center;\n  transform: translate(calc(var(--tx) + var(--i)*-1*(var(--w))));\n}\n\n.smooth {\n  transition: transform calc(var(--f)*2s) ease-out;\n}\n\n.main_container:hover {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n}\n\n.item_container {\n  height: 100%;\n  width: calc(var(--w)/var(--m));\n  min-width: calc(var(--w)/var(--m));\n  pointer-events: none;\n  background-color: rgb(107, 102, 102);\n  padding: 10px 20px;\n  box-sizing: border-box;\n}\n\n.subcontainer {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.subcontainer span {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 0 10px;\n}\n\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  width: 90%;\n  margin: 1rem 0;\n}\n\n.title {\n  position: absolute;\n  top: 1.5rem;\n  text-align: center;\n  background: rgba(144, 39, 179, 0.8);\n  padding: 1rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.title a {\n  color: #fff;\n  pointer-events: auto;\n}\n\n.item {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: top;\n  position: relative;\n  background-color: #fff;\n  border-radius: 3%;\n}\n\n.info {\n  width: 100%;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.info i {\n  margin-right: 1rem;\n  color: rgb(107, 102, 102);\n}\n\n.info span {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n.description {\n  width: 90%;\n  margin-bottom: 1rem;\n}\n\n/* .author {\n  position: relative;\n}\n.author::before {\n  content: '';\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  left: 1rem;\n  background-image: url('./image/user.png');\n} */\n",""])},function(t,e,n){"use strict";n.r(e);class r{constructor(t){this.baselink="https://www.googleapis.com/youtube/v3/",this.apiKey="AIzaSyBmpEGVVJp5qh2mUgW1glJDcHqXptW-9C8",this.options=t,this.data=[],this.nextPage=""}makeUrlSearch(){const{searchRequest:t,maxResults:e}=this.options;return`${this.baselink}search?key=${this.apiKey}&type=video&part=snippet&maxResults=${e}&q=${t}&pageToken=${this.nextPage}`}makeUrlStatistic(t){return`${this.baselink}videos?key=${this.apiKey}&id=${t}&part=snippet,statistics`}async getData(){try{const t=await fetch(this.makeUrlSearch()),e=await t.json(),n=[];this.nextPage=e.nextPageToken;const r=e.items.map(t=>{const{id:{videoId:e},snippet:{publishedAt:r,title:o,description:i,thumbnails:{high:{url:a}},channelTitle:s}}=t;return n.push(e),{title:o,publishedAt:r,videoId:e,channelTitle:s,description:i,url:a}});this.data=r;const o=await fetch(this.makeUrlStatistic(n.join(","))),i=(await o.json()).items.map(t=>{const{statistics:{viewCount:e}}=t;return e});this.data.forEach((t,e)=>{t.statistics=i[e]})}catch(t){console.log("Error",t)}return this.data}}class o{constructor(t){this.itemData=t}renderItem(){const t=document.querySelector(".container"),e=document.createElement("div");e.classList.add("item_container");const n=`\n      <div class = "item">\n        <div class="title">\n          <a href="https://www.youtube.com/watch?v=${this.itemData.videoId}" target="_blank">${this.itemData.title}</a>\n        </div>\n        <img src="${this.itemData.url}">\n        <div class="info">\n          <ul>\n            <li class="author"><span>channel:</span> ${this.itemData.channelTitle}</li>\n            <li class="data_item"><span>data:</span> ${this.itemData.publishedAt.substr(0,10)}</li>\n            <li class="quantity_view"><span>view:</span> ${this.itemData.statistics}</li>\n          </ul>\n        </div>\n        <div class="description">\n          <span class="description">${this.itemData.description}</span>\n        </div>\n      </div>\n    `;e.innerHTML=n,t.appendChild(e)}}class i{static renderInitialPage(){const t=document.createElement("div");t.classList.add("upcontainer");const e=document.createElement("input"),n=document.createElement("button"),r=document.createElement("div");r.classList.add("main_container"),e.setAttribute("name","search"),n.setAttribute("name","send"),n.textContent="SEND",t.appendChild(e),t.appendChild(n),document.body.appendChild(t),document.body.appendChild(r);const o=document.createElement("div");o.classList.add("container"),r.appendChild(o),i.M=4,i.count=0;const a=document.createElement("div");a.classList.add("subcontainer"),a.innerHTML='\n      <button class="prev"><</button>\n      <span class="page"></span>\n      <button class="next">></button>',document.body.appendChild(a),document.querySelector(".page").textContent=i.count}static clear(){const t=document.querySelector(".container");i.count=0,t.style.setProperty("--i",i.count),document.querySelector(".page").textContent=i.count,document.querySelector(".next").setAttribute("title",i.count+1),document.querySelector(".prev").setAttribute("title",i.count-1),t.innerHTML=""}static renderData(t){t.forEach(t=>{new o(t).renderItem()})}}class a{constructor(){this.state={searchRequest:"",maxResults:15}}static eventListeners(t){let e=document.querySelector(".container"),n=e.children.length;const{M:r}=i;e.style.setProperty("--n",n),e.style.setProperty("--m",r);let o,a=null,s=!1,c=i.count;function u(){(o=window.innerWidth)<=1400&&o>800?(i.M=2,document.querySelector(".container").style.setProperty("--m",i.M),document.querySelector(".main_container").style.setProperty("height","70vh"),document.querySelector(".main_container").style.setProperty("--w","80vw")):o<=800?(i.M=1,document.querySelector(".container").style.setProperty("--m",i.M),document.querySelector(".main_container").style.setProperty("height","90vh"),document.querySelector(".main_container").style.setProperty("--w","90vw")):(i.M=4,document.querySelector(".container").style.setProperty("--m",i.M),document.querySelector(".main_container").style.setProperty("height","50vh"),document.querySelector(".main_container").style.setProperty("--w","70vw"))}function l(t){return t.changedTouches?t.changedTouches[0]:t}function d(t){a=l(t).clientX,s=!0,e.classList.toggle("smooth",!(s=!0))}function p(t){t.preventDefault(),s&&e.style.setProperty("--tx",`${Math.round(l(t).clientX-a)}px`)}async function h(u){if(s){const m=l(u).clientX-a,f=Math.sign(m);let v=+(f*m/o).toFixed(2);if((c>0||f<0)&&(c<n/r-1||f>0)&&v>.05&&(e.style.setProperty("--i",c-=f),v=1-v),e.style.setProperty("--f",v),e.style.setProperty("--tx","0px"),e.classList.toggle("smooth",!(s=!1)),a=null,i.count=c,document.querySelector(".page").textContent=i.count,document.querySelector(".next").setAttribute("title",i.count+1),document.querySelector(".prev").setAttribute("title",i.count-1),i.count===Math.floor(n/r)-1){const r=await t.getData();i.renderData(r),e=document.querySelector(".container"),n=e.children.length,e.style.setProperty("--n",n),a=null,s=!1,c=i.count,e.addEventListener("mousemove",p,!1),e.addEventListener("touchmove",p,!1),e.addEventListener("mousedown",d,!1),e.addEventListener("touchstart",d,!1),e.addEventListener("mouseup",h,!1),e.addEventListener("touchend",h,!1)}}}u(),e.addEventListener("mousemove",p,!1),e.addEventListener("touchmove",p,!1),e.addEventListener("mousedown",d,!1),e.addEventListener("touchstart",d,!1),e.addEventListener("mouseup",h,!1),e.addEventListener("touchend",h,!1),window.addEventListener("resize",u,!1),document.querySelector(".prev").addEventListener("click",async()=>{let o=.2;if(c>0&&o>.05&&(e.style.setProperty("--i",c-=1),o=1-o),e.style.setProperty("--f",o),e.style.setProperty("--tx","0px"),e.classList.toggle("smooth",!(s=!1)),i.count=c,document.querySelector(".page").textContent=i.count,document.querySelector(".next").setAttribute("title",i.count+1),document.querySelector(".prev").setAttribute("title",i.count-1),i.count===Math.floor(n/r)-1){const r=await t.getData();i.renderData(r),e=document.querySelector(".container"),n=e.children.length,e.style.setProperty("--n",n),a=null,s=!1,c=i.count,e.addEventListener("mousemove",p,!1),e.addEventListener("touchmove",p,!1),e.addEventListener("mousedown",d,!1),e.addEventListener("touchstart",d,!1),e.addEventListener("mouseup",h,!1),e.addEventListener("touchend",h,!1)}}),document.querySelector(".next").addEventListener("click",async()=>{let o=.2;if(c<n/r-1&&o>.05&&(e.style.setProperty("--i",c-=-1),o=1-o),e.style.setProperty("--f",o),e.style.setProperty("--tx","0px"),e.classList.toggle("smooth",!(s=!1)),i.count=c,document.querySelector(".page").textContent=i.count,document.querySelector(".next").setAttribute("title",i.count+1),document.querySelector(".prev").setAttribute("title",i.count-1),i.count===Math.floor(n/r)-1){const r=await t.getData();i.renderData(r),e=document.querySelector(".container"),n=e.children.length,e.style.setProperty("--n",n),a=null,s=!1,c=i.count,e.addEventListener("mousemove",p,!1),e.addEventListener("touchmove",p,!1),e.addEventListener("mousedown",d,!1),e.addEventListener("touchstart",d,!1),e.addEventListener("mouseup",h,!1),e.addEventListener("touchend",h,!1)}})}start(){i.renderInitialPage(),document.querySelector('button[name="send"]').addEventListener("click",async()=>{const{value:t}=document.querySelector('input[name="search"]');if(t.trim()){document.querySelector('input[name="search"]').value="",i.clear(),this.state.searchRequest=t;const e=new r(this.state),n=await e.getData();i.renderData(n),a.eventListeners(e)}}),document.querySelector('input[name="search"]').addEventListener("keydown",async t=>{if(13===t.keyCode){const{value:t}=document.querySelector('input[name="search"]');if(t.trim()){document.querySelector('input[name="search"]').value="",i.clear(),this.state.searchRequest=t;const e=new r(this.state),n=await e.getData();i.renderData(n),a.eventListeners(e)}}})}}n(2),n(5),(new a).start()}]);
//# sourceMappingURL=app.bundle.js.map