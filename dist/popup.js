!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.r(t),n.d(t,"angles",(function(){return o})),n.d(t,"zoomType",(function(){return r}));var o={TOP:0,RIGHT:90,BOTTOM:180,LEFT:270},r={IN:"in",OUT:"out"}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=1,u=0,i=function(e){void 0!==e.angle&&(u=e.angle),e.zoomType===o.zoomType.IN&&(r+=.1),e.zoomType===o.zoomType.OUT&&0!==r&&(r-=.1),chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.sendMessage(e[0].id,{angle:u,expansionRate:r})}))};document.getElementById("rotate-btn-right").addEventListener("click",(function(){i({angle:o.angles.RIGHT})})),document.getElementById("rotate-btn-left").addEventListener("click",(function(){i({angle:o.angles.LEFT})})),document.getElementById("rotate-btn-top").addEventListener("click",(function(){i({angle:o.angles.TOP})})),document.getElementById("rotate-btn-bottom").addEventListener("click",(function(){i({angle:o.angles.BOTTOM})})),document.getElementById("zoom-in-btn").addEventListener("click",(function(){i({zoomType:o.zoomType.IN})})),document.getElementById("zoom-out-btn").addEventListener("click",(function(){i({zoomType:o.zoomType.OUT})}))}]);