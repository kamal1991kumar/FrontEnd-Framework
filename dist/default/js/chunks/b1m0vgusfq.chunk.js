(window.webpackJsonp=window.webpackJsonp||[]).push([["chunks/b1m0vgusfq.chunk"],{123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentationContainer=void 0;var i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(1),u=(i=o)&&i.__esModule?i:{default:i},r=n(133);t.DocumentationContainer=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),a(t,[{key:"render",value:function(){return u.default.createElement(r.documentationView,this.props)}}]),t}()},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.removeTrailingSlash=function(e){return e.replace(/\/+$/,"")}},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(131);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.documentationView=void 0;var i,a=n(1),o=(i=a)&&i.__esModule?i:{default:i},u=n(6),r=n(42),c=n(132);t.documentationView=function(e){return o.default.createElement("div",{className:"view-index-documentation"},o.default.createElement("div",{className:"view-index-documentation__title"},"Documentation"),o.default.createElement("ul",{className:"view-index-documentation__menu"},o.default.createElement("li",{className:"view-index-documentation__menu__item"},o.default.createElement(u.NavLink,{exact:!0,className:"view-index-documentation__menu__item__link",to:(0,c.removeTrailingSlash)(e.match.url),activeClassName:"view-index-documentation__menu__item__link--active"},"Ui Framework")),o.default.createElement("li",{className:"view-index-documentation__menu__item"},o.default.createElement(u.NavLink,{className:"view-index-documentation__menu__item__link",to:(0,c.removeTrailingSlash)(e.match.url)+"/cli",activeClassName:"view-index-documentation__menu__item__link--active"},"Avizva CLI")),o.default.createElement("li",{className:"view-index-documentation__menu__item"},o.default.createElement(u.NavLink,{className:"view-index-documentation__menu__item__link",to:(0,c.removeTrailingSlash)(e.match.url)+"/git",activeClassName:"view-index-documentation__menu__item__link--active"},"Git VCS"))),o.default.createElement("div",{className:"view-index-documentation__content"},o.default.createElement(r.RouterOutlet,{page:e.page,path:e.path})))}}}]);
//# sourceMappingURL=b1m0vgusfq.chunk.js.map