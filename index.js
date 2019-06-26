!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-native")):"function"==typeof define&&define.amd?define("react-native-web-view",["react","react-native"],t):"object"==typeof exports?exports["react-native-web-view"]=t(require("react"),require("react-native")):e["react-native-web-view"]=t(e.React,e["react-native"])}(window,function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1),i="\n(function() {\n  var EMPTY_STATE = Object.create(null);\n  var escape = function(str) {\n    return str.replace(/'/g, '\\\\'');\n  };\n  var postMessage = window.postMessage;\n  window.postMessage = function() {\n    if (postMessage) {\n      postMessage.apply(window, arguments);\n    }\n    history.pushState(\n      EMPTY_STATE,\n      document.title,\n      location.href +\n      '#window.postMessage(\\'' +\n      escape(arguments[0]) +\n      '\\')'\n    );\n  };\n})();\n";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){return e.replace(/\\'/g,"'")},d=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return y(l(l(n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?l(e):t}(this,(e=p(t)).call.apply(e,[this].concat(o))))),"handleNavigationStateChange",function(e){var t=e.url.match(/\#window\.postMessage\('(.+)'\)$/);if(!t)return!e.loading&&n.ref&&n.ref.injectJavaScript(i),n.props.onNavigationStateChange?n.props.onNavigationStateChange(e):void 0;e.loading&&n.props.onMessage&&n.props.onMessage({nativeEvent:{data:b(t[1])}})}),y(l(l(n)),"handleRef",function(e){n.ref=e,n.props.forwardedRef&&n.props.forwardedRef(e)}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.PureComponent),function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(t,[{key:"render",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}({},this.props);return delete e.forwardedRef,delete e.onMessage,o.a.createElement(a.WebView,c({},this.props,{onNavigationStateChange:this.handleNavigationStateChange,ref:this.handleRef}))}}]),t}();t.default=o.a.forwardRef(function(e,t){return o.a.createElement(d,c({},e,{forwardedRef:t}))})}])});