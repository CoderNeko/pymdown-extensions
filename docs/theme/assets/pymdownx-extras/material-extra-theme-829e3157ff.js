!function(){"use strict";function l(e){"true"===localStorage.getItem("data-md-prefers-color-scheme")&&document.querySelector("body").setAttribute("data-md-color-scheme",e.matches?"dracula":"default")}new MutationObserver(function(e){e.forEach(function(e){if("childList"===e.type&&e.addedNodes.length)for(var t=0;t<e.addedNodes.length;t++){var a=e.addedNodes[t];if(1===a.nodeType&&"body"===a.tagName.toLowerCase()){r=a,c=o=void 0,d="not all"!==window.matchMedia("(prefers-color-scheme)").media,o=localStorage.getItem("data-md-color-scheme"),c=localStorage.getItem("data-md-prefers-color-scheme"),o=o||"dracula","true"===(c=c||"false")&&d?o=window.matchMedia("(prefers-color-scheme: dark)").matches?"dracula":"default":c="false",r.setAttribute("data-md-prefers-color-scheme",c),r.setAttribute("data-md-color-scheme",o),d&&window.matchMedia("(prefers-color-scheme: dark)").addListener(l);break}}var r,d,o,c})}).observe(document.querySelector("html"),{childList:!0}),window.toggleScheme=function(){var e=document.querySelector("body"),t="not all"!==window.matchMedia("(prefers-color-scheme)").media,a=e.getAttribute("data-md-color-scheme"),r=e.getAttribute("data-md-prefers-color-scheme");t&&"default"===a&&"true"!==r?(r="true",a=window.matchMedia("(prefers-color-scheme: dark)").matches?"dracula":"default"):t&&"true"===r||"default"===a?(r="false",a="dracula"):"dracula"===a&&(r="false",a="default"),localStorage.setItem("data-md-prefers-color-scheme",r),e.setAttribute("data-md-prefers-color-scheme",r),e.setAttribute("data-md-color-scheme",a)}}();
//# sourceMappingURL=material-extra-theme-829e3157ff.js.map