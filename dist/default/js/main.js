!function(e){function t(t){for(var r,a,u=t[0],c=t[1],l=t[2],f=0,d=[];f<u.length;f++)a=u[f],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);d.length;)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={main:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var i,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+"js/"+({}[e]||e)+".js"}(e),i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,u.appendChild(c)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./",a.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;i.push([116,"vendor"]),n()}([,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r;t.MessageBus=(r={},{on:function(e,t,n){!1===r.hasOwnProperty(e)&&(r[e]=[]),r[e].push({callback:t,callbackObj:n})},off:function(e,t,n){var o=void 0,i=void 0,a=void 0;if(!0===r.hasOwnProperty(e))for(o=(i=r[e]).length,a=0;a<o;a+=1)if(t===i[a].callback&&n===i[a].callbackObj){i.splice(a,1);break}},trigger:function(e,t){var n=void 0,o=void 0,i=void 0;if(!0===r.hasOwnProperty(e))for(n=(o=r[e]).length,i=0;i<n;i+=1)void 0===o[i].callbackObj?"function"==typeof o[i].callback&&o[i].callback(t):"function"==typeof o[i].callback&&o[i].callback.call(o[i].callbackObj,t)}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(111);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(110);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var i=n(109);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(45);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=t.removeInstance=t.createInstance=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(21),a=n(33),u=(r=a)&&r.__esModule?r:{default:r},c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(12)),l=n(11);var s={},f={},d=function(e){return!(0,i.isEmpty)(e)},_=function(e){return(0,i.has)(s,e)},p=function(e,t){f[e]=t},m=(t.createInstance=function(e,t,n){var r=void 0,o=null;if(!d(e))throw new Error(c.CONTROLLER_NAME_UNKNOWN_ERROR);if(!_(e))throw new Error(c.CONTROLLER_ALREADY_REGISTERED_ERROR+" : "+e);if(!e||!t)throw new Error(c.TOO_FEW_PARAMETERS);return(o=(r="string"==typeof t?(0,u.default)("#"+t):void 0!==t.jquery?t:(0,u.default)(t)).data("instance"))&&o.length&&o in f?o=f[o]:(o=new s[e](t,n),f[o.objectID]=o,r.data("instance",o.objectID)),o},t.removeInstance=function(e){var t=f[e];"function"==typeof t.unbind&&t.unbind(),"function"==typeof t.remove&&t.remove(),"function"==typeof t.onClose&&t.onClose(),delete t.data,delete t.cache,delete t.selectors,delete f[e]});t.Controller=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var o=this.constructor;this.controllerName=r,"string"==typeof t?this.el=document.getElementById(t):void 0!==t.jquery?this.el=t.get(0):this.el=t,o.instanceCount=void 0===o.instanceCount?1:o.instanceCount+1,this.objectID=this.controllerName+"__"+o.instanceCount,this.$el=(0,u.default)(this.el),this.attr=(0,i.clone)(n),this.cache={},this.data={},this.selectors={},p(this.objectID,this),"function"==typeof this.onInit&&this.onInit(),"function"==typeof this.onReady&&l.MessageBus.on(c.EVENT_BOOTSTRAP_COMPLETED,this.onReady,this)}return o(e,[{key:"close",value:function(){m(this.objectID)}},{key:"remove",value:function(){this.$el.remove()}}],[{key:"setName",value:function(e){return this.controllerName=e,this}},{key:"register",value:function(){var e=this.controllerName;if(!d(e))throw new Error(c.CONTROLLER_NAME_UNKNOWN_ERROR);if(_(e))throw new Error(c.CONTROLLER_ALREADY_REGISTERED_ERROR+" : "+e);s[e]=this}}]),e}()},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RouterOutlet=void 0;var r=n(91),o=n(87);t.RouterOutlet=(0,r.routerOutlet)(o.routes)},,function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.TYPE_SAVE_HOSTS="SAVE_HOSTS";t.saveHostsAction=function(e){return{type:r,payload:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hostsReducer=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(22);t.hostsReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=t.type,i=t.payload;switch(n){case o.TYPE_SAVE_HOSTS:return r({},e,i);default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(46);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.combinedReducer=void 0;var r=n(9),o=n(47);t.combinedReducer=(0,r.combineReducers)({hosts:o.hostsReducer})},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStore=void 0;var r,o=n(9),i=n(49),a=(r=i)&&r.__esModule?r:{default:r},u=n(48);var c=null;t.getStore=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c||(c=(0,o.createStore)(u.combinedReducer,e,(0,o.applyMiddleware)(a.default))),c}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withStore=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=(r=i)&&r.__esModule?r:{default:r},u=n(40);t.withStore=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(r){function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(i.__proto__||Object.getPrototypeOf(i)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a.default.Component),o(i,[{key:"render",value:function(){return a.default.createElement(u.Provider,{store:t},a.default.createElement(e,n))}}]),i}()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withBrowserRouter=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=(r=i)&&r.__esModule?r:{default:r},u=n(6);t.withBrowserRouter=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,a.default.Component),o(r,[{key:"render",value:function(){return a.default.createElement(u.BrowserRouter,null,a.default.createElement(e,t))}}]),r}()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.siteFooterView=void 0;var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};t.siteFooterView=function(){return i.default.createElement("div",{className:"site-footer"},i.default.createElement("div",{className:"site-footer__content"},i.default.createElement("div",{className:"site-footer__content__left"},i.default.createElement("ul",{className:"site-footer__menu"},i.default.createElement("li",{className:"site-footer__menu__item"},i.default.createElement("a",{className:"site-footer__menu__item__link",href:"https://gitlab.com/avizva"},"GitLab")),i.default.createElement("li",{className:"site-footer__menu__item"},i.default.createElement("a",{className:"site-footer__menu__item__link",href:"http://npm.avizva.com"},"NPM Registry")),i.default.createElement("li",{className:"site-footer__menu__item"},i.default.createElement("a",{className:"site-footer__menu__item__link",href:"https://avizva.com"},"About Avizva"))),i.default.createElement("div",{className:"site-footer__content__left__contact"},"For framework and CLI related queries, contact ",i.default.createElement("b",null,"Avizva UI")," team.")),i.default.createElement("div",{className:"site-footer__content__right"},"You are using non-public confidential property of Avizva Solutions Pvt. Ltd. All Rights Reserved. Unauthorized copying of this software or any code it contains, via any medium is strictly prohibited. Please consult ",i.default.createElement("b",null,"Avizva Frontend Team")," before distributing or making changes to this software or any file it contains.")))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.siteHeaderView=void 0;var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r},a=n(6);t.siteHeaderView=function(){return i.default.createElement("div",{className:"site-header"},i.default.createElement("div",{className:"site-header__content"},i.default.createElement("div",{className:"site-header__content__left"},i.default.createElement(a.NavLink,{exact:!0,to:"/"},i.default.createElement("img",{className:"site-header__content__left__logo",src:"/assets/images/logo.png",alt:"logo"}))),i.default.createElement("div",{className:"site-header__content__right"},i.default.createElement("ul",{className:"site-header__menu"},i.default.createElement("li",{className:"site-header__menu__item"},i.default.createElement(a.NavLink,{exact:!0,className:"site-header__menu__item__link",to:"/",activeClassName:"site-header__menu__item__link--active"},"Home")),i.default.createElement("li",{className:"site-header__menu__item"},i.default.createElement(a.NavLink,{className:"site-header__menu__item__link",to:"/documentation",activeClassName:"site-header__menu__item__link--active"},"Documentation")),i.default.createElement("li",{className:"site-header__menu__item"},i.default.createElement(a.NavLink,{className:"site-header__menu__item__link",to:"/best-practices",activeClassName:"site-header__menu__item__link--active"},"Best Practices"))))))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotFoundContainer=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=(r=i)&&r.__esModule?r:{default:r};t.NotFoundContainer=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"render",value:function(){return a.default.createElement("h1",null,"404 Not Found")}}]),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.homeView=void 0;var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};t.homeView=function(){return i.default.createElement("div",{className:"view-index-home"},i.default.createElement("div",{className:"view-index-home__title"},"Ui Framework"),i.default.createElement("div",{className:"view-index-home__motivation"},"Motivation behind creating Avizva's very own UI framework are based on following points",i.default.createElement("ul",{className:"view-index-home__motivation__list"},i.default.createElement("li",{className:"view-index-home__motivation__list__item"},"Keep a standard project structure"),i.default.createElement("li",{className:"view-index-home__motivation__list__item"},"Implement standard coding practices (using linting)"),i.default.createElement("li",{className:"view-index-home__motivation__list__item"},"Capable of multi-platform deployment"),i.default.createElement("li",{className:"view-index-home__motivation__list__item"},"Immune to single-page or multi-page application choice"),i.default.createElement("li",{className:"view-index-home__motivation__list__item"},"Easy to upgrade with newer version of core dependencies"),i.default.createElement("li",{className:"view-index-home__motivation__list__item"},"Works with Avizva UI CLI interface to provide easy entity creation and rapid deployment"))))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HomeContainer=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=(r=i)&&r.__esModule?r:{default:r},u=n(83);t.HomeContainer=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"render",value:function(){return a.default.createElement(u.homeView,this.props)}}]),t}()},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withAsyncComponent=void 0;var r=i(n(1)),o=i(n(85));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement("div",{className:"hourglass-spinner"})};t.withAsyncComponent=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return(0,o.default)({loader:e,loading:t})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r},a=n(6),u=n(86),c=n(84),l=n(82);t.routes={INDEX:{HOME:{path:"/",exact:!0,component:c.HomeContainer},DOCUMENTATION:{path:"/documentation",exact:!1,component:(0,u.withAsyncComponent)(function(){return n.e("chunks/b1m0vgusfq.chunk").then(n.t.bind(null,123,7)).then(function(e){return e.DocumentationContainer})}),routes:{DOCUMENTATION_FRAMEWORK:{path:"/documentation",exact:!0,component:(0,u.withAsyncComponent)(function(){return Promise.all([n.e("vendor"),n.e("chunks/hy-awgujzq.chunk")]).then(n.t.bind(null,122,7)).then(function(e){return e.FrameworkContainer})})},DOCUMENTATION_CLI:{path:"/documentation/cli",exact:!0,component:(0,u.withAsyncComponent)(function(){return Promise.all([n.e("vendor"),n.e("chunks/h1gcdeismm.chunk")]).then(n.t.bind(null,121,7)).then(function(e){return e.CliContainer})})},DOCUMENTATION_GIT:{path:"/documentation/git",exact:!0,component:(0,u.withAsyncComponent)(function(){return Promise.all([n.e("vendor"),n.e("chunks/b1cpeuizm.chunk")]).then(n.t.bind(null,120,7)).then(function(e){return e.GitContainer})})}}},NOT_FOUND:{path:"/not-found",exact:!1,component:l.NotFoundContainer},CONTACT:{path:"",exact:!1,render:function(){return i.default.createElement(a.Redirect,{to:"/not-found"})}}}}},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.routerOutlet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(1)),u=l(n(21)),c=n(6);function l(e){return e&&e.__esModule?e:{default:e}}t.routerOutlet=function(e){return function(t){function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a.default.Component),i(n,[{key:"render",value:function(){var t=this;return this.props.path?a.default.createElement(c.Switch,null,Object.entries(u.default.get(e,this.props.page+"."+this.props.path+".routes",[])).map(function(e){var n=o(e,2),i=n[0],u=n[1];return u.render&&"function"==typeof u.render?a.default.createElement(c.Route,{key:i,exact:u.exact,path:u.path,render:u.render}):a.default.createElement(c.Route,{key:i,exact:u.exact,path:u.path,render:function(e){return a.default.createElement(u.component,r({},e,{page:t.props.page,path:i}))}})})):a.default.createElement(c.Switch,null,Object.entries(u.default.get(e,this.props.page,[])).map(function(e){var n=o(e,2),i=n[0],u=n[1];return u.render&&"function"==typeof u.render?a.default.createElement(c.Route,{key:i,exact:u.exact,path:u.path,render:u.render}):a.default.createElement(c.Route,{key:i,exact:u.exact,path:u.path,render:function(e){return a.default.createElement(u.component,r({},e,{page:t.props.page,path:i}))}})}))}}]),n}()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.indexPageView=void 0;var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r},a=n(42),u=n(54),c=n(53);t.indexPageView=function(e){return i.default.createElement("div",{className:"view-index"+(!0===e.loading?" loading":"")},i.default.createElement(u.siteHeaderView,null),i.default.createElement("div",{className:"view-index__content"},i.default.createElement(a.RouterOutlet,{page:"INDEX"})),i.default.createElement(c.siteFooterView,null))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IndexPageContainer=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),u=(r=a)&&r.__esModule?r:{default:r},c=n(92),l=n(11),s=n(12);t.IndexPageContainer=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.pendingRequests=new Set,n.state={httpReqInProgress:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),i(t,[{key:"componentDidMount",value:function(){l.MessageBus.on(s.HTTP_REQUEST_TRANSACTION,this.handleHttpReqTransaction,this)}},{key:"handleHttpReqTransaction",value:function(e){"SENT"===e.type?this.pendingRequests.add(e.id):this.pendingRequests.delete(e.id),log(e),this.setState(o({},this.state,{httpReqInProgress:0<this.pendingRequests.size}))}},{key:"render",value:function(){return u.default.createElement(c.indexPageView,{loading:this.state.httpReqInProgress})}},{key:"componentWillUnmount",value:function(){l.MessageBus.off(s.HTTP_REQUEST_TRANSACTION,this.handleHttpReqTransaction,this)}}]),t}()},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return!(!window||"function"!=typeof window.decodeURIComponent)&&decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))},r="true"===n("debug")&&"false"!==n("debug"),o=function(){var e;r&&(e=console).log.apply(e,arguments)};o.info=function(){var e;r&&(e=console).info.apply(e,arguments)},o.warn=function(){var e;r&&(e=console).warn.apply(e,arguments)},o.error=function(){var e;r&&(e=console).error.apply(e,arguments)},e.log=o,t.log=o}).call(this,n(8))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getEmbeddedJSON=function(e,t){t||(t=document.body);var n={};return t.querySelectorAll('script[name="'+e+'"]').forEach(function(e){try{var t=JSON.parse(e.textContent)||{};Object.assign(n,t)}catch(e){window.console.log(e)}}),n}},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reactRender=void 0;var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r},a=n(103);t.reactRender=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var u=i.default.createElement.apply(i.default,[e,t].concat(r));return function(e){(0,a.render)(u,e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(105);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(95);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var i=n(94);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IndexController=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(32),i=n(106),a=n(93),u=n(52),c=n(51),l=n(50),s=n(22);var f=(0,l.getStore)();(t.IndexController=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Controller),r(t,[{key:"onInit",value:function(){var e=(0,i.getEmbeddedJSON)("hosts",this.el);f.dispatch((0,s.saveHostsAction)(e))}},{key:"onReady",value:function(){this.render()}},{key:"render",value:function(){(0,i.reactRender)((0,c.withStore)((0,u.withBrowserRouter)(a.IndexPageContainer),f))(this.el)}}]),t}()).setName("IndexController").register()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(107);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.HTTP_REQUEST_TRANSACTION="HTTP_REQUEST_TRANSACTION"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.TOO_FEW_PARAMETERS="TOO_FEW_PARAMETERS",t.INVALID_PARAMETERS="INVALID_PARAMETERS",t.COMP_NOT_REGISTERED="COMP_NOT_REGISTERED",t.DOM_CONTEXT_MISSING="DOM_CONTEXT_MISSING",t.SERVER_ERROR="SERVER_ERROR"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CONTROLLER_ELEM_ATTR="data-controller",t.CONTROLLER_ALREADY_REGISTERED_ERROR="CONTROLLER ALREADY REGISTERED",t.CONTROLLER_NOT_REGISTERED_ERROR="CONTROLLER NOT REGISTERED",t.CONTROLLER_NAME_UNKNOWN_ERROR="CONTROLLER NAME UNKNOWN",t.JSON_NOT_ERROR="JSON is not present on the page",t.BOOTSTRAP_RUN="BOOTSTRAP_RUN"},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resume=t.pause=t.initialize=t.run=void 0;var r,o=n(33),i=(r=o)&&r.__esModule?r:{default:r},a=n(32),u=n(12);n(108);var c=!1,l=[],s=0,f=!1,d=[],_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body";"string"!=typeof e&&void 0!==e.jquery||(e=(0,i.default)(e)),function(e){l=e.find("["+u.CONTROLLER_ELEM_ATTR+"]")}(e),function(){for(s=0;s<l.length&&!f;s+=1){var e=l.eq(s).attr(u.CONTROLLER_ELEM_ATTR);(0,a.createInstance)(e,l.eq(s))}}()},p=function(){0<d.length&&m(d.splice(0,1)[0])},m=t.run=function(e){!0===c?d.push(e):(c=!0,void 0===e||void 0===e.context?_():_(e.context),c=!1,p())};t.initialize=function(e){m(e)},t.pause=function(){f=!0},t.resume=function(){for(f=!1;s<l.length&&!f;s+=1){var e=l.eq(s).attr(u.CONTROLLER_ELEM_ATTR);(0,a.createInstance)(e,l.eq(s))}}},function(e,t,n){"use strict"},function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(114)),o=n(113),i=n(11);document.addEventListener("DOMContentLoaded",function(){(0,o.initialize)(),i.MessageBus.trigger(r.EVENT_BOOTSTRAP_COMPLETED)})},function(e,t,n){n(115),e.exports=n(44)}]);
//# sourceMappingURL=main.js.map