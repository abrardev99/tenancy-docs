!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=2)}({2:function(e,t,r){e.exports=r("j7ye")},j7ye:function(e,t,r){"use strict";r.r(t);var n="undefined"!=typeof window,o=[],i=function(){n&&!window.splitbee||(a.track=window.splitbee.track,a.user=window.splitbee.user,a.enableCookie=window.splitbee.enableCookie,a.reset=window.splitbee.reset,o.forEach((function(e){"track"===e.type?window.splitbee.track.apply(null,e.payload):"user"===e.type?window.splitbee.user.set.apply(null,e.payload):"enableCookie"===e.type?window.splitbee.enableCookie.apply(null,e.payload):"reset"===e.type&&window.splitbee.reset()})),o=[])},l=function(e){return function(){try{for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return o.push({type:e,payload:r}),n&&window.splitbee&&i(),Promise.resolve()}catch(e){return Promise.reject(e)}}},a={track:l("track"),user:{set:l("user")},init:function(e){if(n&&!window.splitbee){var t=window.document,r=null!=e&&e.scriptUrl?e.scriptUrl:"https://cdn.splitbee.io/sb.js",o=t.querySelector("script[src='"+r+"']");if(o)o.onload=i;else{var l=t.createElement("script");l.src=r,l.async=!0,e&&(e.apiUrl&&(l.dataset.api=e.apiUrl),e.token&&(l.dataset.token=e.token),e.disableCookie&&(l.dataset.noCookie="1")),l.onload=i,t.head.appendChild(l)}}},enableCookie:l("enableCookie"),reset:l("reset")},s=a;s.init({scriptUrl:"/bee.js",apiUrl:"/_hive"});document.getElementsByClassName("extsb")[0];s.user.set({test:"foo"})}});
//# sourceMappingURL=extsb.js.map