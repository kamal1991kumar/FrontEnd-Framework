!function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],f=0,d=[];f<u.length;f++)i=u[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={main:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"js/"+({}[e]||e)+".js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,u.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;a.push([116,"vendor"]),n()}([,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r;t.MessageBus=(r={},{on:function(e,t,n){!1===r.hasOwnProperty(e)&&(r[e]=[]),r[e].push({callback:t,callbackObj:n})},off:function(e,t,n){var o=void 0,a=void 0,i=void 0;if(!0===r.hasOwnProperty(e))for(o=(a=r[e]).length,i=0;i<o;i+=1)if(t===a[i].callback&&n===a[i].callbackObj){a.splice(i,1);break}},trigger:function(e,t){var n=void 0,o=void 0,a=void 0;if(!0===r.hasOwnProperty(e))for(n=(o=r[e]).length,a=0;a<n;a+=1)void 0===o[a].callbackObj?"function"==typeof o[a].callback&&o[a].callback(t):"function"==typeof o[a].callback&&o[a].callback.call(o[a].callbackObj,t)}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(111);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(110);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var a=n(109);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(44);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=t.removeInstance=t.createInstance=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(21),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(12)),i=n(11);var u={},c={},l=function(e){return!(0,o.isEmpty)(e)},s=function(e){return(0,o.has)(u,e)},f=function(e,t){c[e]=t},d=(t.createInstance=function(e,t,n){var r=null;if(!l(e))throw new Error(a.CONTROLLER_NAME_UNKNOWN_ERROR);if(!s(e))throw new Error(a.CONTROLLER_ALREADY_REGISTERED_ERROR+" : "+e);if(!e||!t)throw new Error(a.TOO_FEW_PARAMETERS);return(r=t.getAttribute("data-instance"))&&r.length&&r in c?r=c[r]:(r=new u[e](t,n),c[r.objectID]=r,t.setAttribute("data-instance",r.objectID)),log.info(c),r},t.removeInstance=function(e){var t=c[e];"function"==typeof t.unbind&&t.unbind(),"function"==typeof t.remove&&t.remove(),"function"==typeof t.onClose&&t.onClose(),delete t.data,delete t.cache,delete t.selectors,delete c[e]});t.Controller=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=this.constructor;this.controllerName=this.constructor.controllerName,r.instanceCount=void 0===r.instanceCount?1:r.instanceCount+1,this.objectID=this.controllerName+"__"+r.instanceCount,this.el=t,this.attr=(0,o.clone)(n),this.cache={},this.data={},this.selectors={},f(this.objectID,this),"function"==typeof this.onInit&&this.onInit(),"function"==typeof this.onReady&&i.MessageBus.on(a.EVENT_BOOTSTRAP_COMPLETED,this.onReady,this)}return r(e,[{key:"close",value:function(){d(this.objectID)}},{key:"remove",value:function(){this.el.remove()}}],[{key:"setName",value:function(e){return this.controllerName=e,this}},{key:"register",value:function(){var e=this.controllerName;if(!l(e))throw new Error(a.CONTROLLER_NAME_UNKNOWN_ERROR);if(s(e))throw new Error(a.CONTROLLER_ALREADY_REGISTERED_ERROR+" : "+e);u[e]=this}}]),e}()},,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RouterOutlet=void 0;var r=n(91),o=n(87);t.RouterOutlet=(0,r.routerOutlet)(o.routes)},,function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.TYPE_SAVE_HOSTS="SAVE_HOSTS";t.saveHostsAction=function(e){return{type:r,payload:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hostsReducer=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(22);t.hostsReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=t.type,a=t.payload;switch(n){case o.TYPE_SAVE_HOSTS:return r({},e,a);default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(45);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.combinedReducer=void 0;var r=n(9),o=n(46);t.combinedReducer=(0,r.combineReducers)({hosts:o.hostsReducer})},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStore=void 0;var r,o=n(9),a=n(48),i=(r=a)&&r.__esModule?r:{default:r},u=n(47);var c=null;t.getStore=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c||(c=(0,o.createStore)(u.combinedReducer,e,(0,o.applyMiddleware)(i.default))),c}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withStore=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r},u=n(39);t.withStore=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(r){function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,i.default.Component),o(a,[{key:"render",value:function(){return i.default.createElement(u.Provider,{store:t},i.default.createElement(e,n))}}]),a}()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withBrowserRouter=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r},u=n(6);t.withBrowserRouter=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,i.default.Component),o(r,[{key:"render",value:function(){return i.default.createElement(u.BrowserRouter,null,i.default.createElement(e,t))}}]),r}()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.siteFooterView=void 0;var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.siteFooterView=function(){return a.default.createElement("div",{className:"site-footer"},a.default.createElement("div",{className:"site-footer__content"},a.default.createElement("div",{className:"site-footer__content__left"},a.default.createElement("ul",{className:"site-footer__menu"},a.default.createElement("li",{className:"site-footer__menu__item"},a.default.createElement("a",{className:"site-footer__menu__item__link",href:"https://gitlab.com/avizva"},"GitLab")),a.default.createElement("li",{className:"site-footer__menu__item"},a.default.createElement("a",{className:"site-footer__menu__item__link",href:"http://npm.avizva.com"},"NPM Registry")),a.default.createElement("li",{className:"site-footer__menu__item"},a.default.createElement("a",{className:"site-footer__menu__item__link",href:"https://avizva.com"},"About Avizva"))),a.default.createElement("div",{className:"site-footer__content__left__contact"},"For framework and CLI related queries, contact ",a.default.createElement("b",null,"Avizva UI")," team.")),a.default.createElement("div",{className:"site-footer__content__right"},"You are using non-public confidential property of Avizva Solutions Pvt. Ltd. All Rights Reserved. Unauthorized copying of this software or any code it contains, via any medium is strictly prohibited. Please consult ",a.default.createElement("b",null,"Avizva Frontend Team")," before distributing or making changes to this software or any file it contains.")))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.siteHeaderView=void 0;var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r},i=n(6);t.siteHeaderView=function(){return a.default.createElement("div",{className:"site-header"},a.default.createElement("div",{className:"site-header__content"},a.default.createElement("div",{className:"site-header__content__left"},a.default.createElement(i.NavLink,{exact:!0,to:"/"},a.default.createElement("img",{className:"site-header__content__left__logo",src:"/assets/images/logo.png",alt:"logo"}))),a.default.createElement("div",{className:"site-header__content__right"},a.default.createElement("ul",{className:"site-header__menu"},a.default.createElement("li",{className:"site-header__menu__item"},a.default.createElement(i.NavLink,{exact:!0,className:"site-header__menu__item__link",to:"/",activeClassName:"site-header__menu__item__link--active"},"Home")),a.default.createElement("li",{className:"site-header__menu__item"},a.default.createElement(i.NavLink,{className:"site-header__menu__item__link",to:"/documentation",activeClassName:"site-header__menu__item__link--active"},"Documentation")),a.default.createElement("li",{className:"site-header__menu__item"},a.default.createElement(i.NavLink,{className:"site-header__menu__item__link",to:"/best-practices",activeClassName:"site-header__menu__item__link--active"},"Best Practices"))))))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.notFoundView=void 0;var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.notFoundView=function(){return a.default.createElement("div",{className:"view-not-found"},a.default.createElement("h1",null,"Error 404 : Page Not Found!"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotFoundContainer=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r},u=n(81);t.NotFoundContainer=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"render",value:function(){return i.default.createElement(u.notFoundView,null)}}]),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.homeView=void 0;var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.homeView=function(){return a.default.createElement("div",{className:"view-index-home"},a.default.createElement("div",{className:"view-index-home__title"},"Ui Framework"),a.default.createElement("div",{className:"view-index-home__motivation"},"Motivation behind creating Avizva's very own UI framework are based on following points",a.default.createElement("ul",{className:"view-index-home__motivation__list"},a.default.createElement("li",{className:"view-index-home__motivation__list__item"},"Keep a standard project structure"),a.default.createElement("li",{className:"view-index-home__motivation__list__item"},"Implement standard coding practices (using linting)"),a.default.createElement("li",{className:"view-index-home__motivation__list__item"},"Capable of multi-platform deployment"),a.default.createElement("li",{className:"view-index-home__motivation__list__item"},"Immune to single-page or multi-page application choice"),a.default.createElement("li",{className:"view-index-home__motivation__list__item"},"Easy to upgrade with newer version of core dependencies"),a.default.createElement("li",{className:"view-index-home__motivation__list__item"},"Works with Avizva UI CLI interface to provide easy entity creation and rapid deployment"))))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HomeContainer=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=(r=a)&&r.__esModule?r:{default:r},u=n(83);t.HomeContainer=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentWillMount",value:function(){log.tag("HomeContainer").debug("componentDidMount() ==> props: ",this.props)}},{key:"render",value:function(){return log.tag("HomeContainer").info("render()"),i.default.createElement(u.homeView,this.props)}},{key:"componentWillUnmount",value:function(){log.tag("HomeContainer").warn("componentWillUnmount()")}}]),t}()},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withAsyncComponent=void 0;var r=a(n(1)),o=a(n(85));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("div",{className:"hourglass-spinner"})};t.withAsyncComponent=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return(0,o.default)({loader:e,loading:t})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r},i=n(6),u=n(86),c=n(84),l=n(82);t.routes={INDEX:{HOME:{path:"/",exact:!0,component:c.HomeContainer},DOCUMENTATION:{path:"/documentation",exact:!1,component:(0,u.withAsyncComponent)(function(){return n.e("chunks/r1gyeqnqqm.chunk").then(n.t.bind(null,123,7)).then(function(e){return e.DocumentationContainer})}),routes:{DOCUMENTATION_FRAMEWORK:{path:"/documentation",exact:!0,component:(0,u.withAsyncComponent)(function(){return Promise.all([n.e("vendor"),n.e("chunks/hkwygmhxqx.chunk")]).then(n.t.bind(null,122,7)).then(function(e){return e.FrameworkContainer})})},DOCUMENTATION_CLI:{path:"/documentation/cli",exact:!0,component:(0,u.withAsyncComponent)(function(){return Promise.all([n.e("vendor"),n.e("chunks/bjgklmhqmm.chunk")]).then(n.t.bind(null,121,7)).then(function(e){return e.CliContainer})})},DOCUMENTATION_GIT:{path:"/documentation/git",exact:!0,component:(0,u.withAsyncComponent)(function(){return Promise.all([n.e("vendor"),n.e("chunks/bkfxxhmx7.chunk")]).then(n.t.bind(null,120,7)).then(function(e){return e.GitContainer})})}}},NOT_FOUND:{path:"/not-found",exact:!1,component:l.NotFoundContainer},REDIRECT:{path:"",exact:!1,render:function(e){return a.default.createElement(i.Redirect,{to:{pathname:"/not-found",state:{previousURL:e.location.pathname}}})}}}}},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.routerOutlet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(1)),u=l(n(21)),c=n(6);function l(e){return e&&e.__esModule?e:{default:e}}t.routerOutlet=function(e){return function(t){function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,i.default.Component),a(n,[{key:"render",value:function(){var t=this;return this.props.path?i.default.createElement(c.Switch,null,Object.entries(u.default.get(e,this.props.page+"."+this.props.path+".routes",[])).map(function(e){var n=o(e,2),a=n[0],u=n[1];return u.render&&"function"==typeof u.render?i.default.createElement(c.Route,{key:a,exact:u.exact,path:u.path,render:u.render}):i.default.createElement(c.Route,{key:a,exact:u.exact,path:u.path,render:function(e){return i.default.createElement(u.component,r({},e,{page:t.props.page,path:a}))}})})):i.default.createElement(c.Switch,null,Object.entries(u.default.get(e,this.props.page,[])).map(function(e){var n=o(e,2),a=n[0],u=n[1];return u.render&&"function"==typeof u.render?i.default.createElement(c.Route,{key:a,exact:u.exact,path:u.path,render:u.render}):i.default.createElement(c.Route,{key:a,exact:u.exact,path:u.path,render:function(e){return i.default.createElement(u.component,r({},e,{page:t.props.page,path:a}))}})}))}}]),n}()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.indexPageView=void 0;var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r},i=n(41),u=n(53),c=n(52);t.indexPageView=function(e){return a.default.createElement("div",{className:"view-index"+(!0===e.loading?" loading":"")},a.default.createElement(u.siteHeaderView,null),a.default.createElement("div",{className:"view-index__content"},a.default.createElement(i.RouterOutlet,{page:"INDEX"})),a.default.createElement(c.siteFooterView,null))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IndexPageContainer=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=(r=i)&&r.__esModule?r:{default:r},c=n(92),l=n(11),s=n(12);t.IndexPageContainer=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.pendingRequests=new Set,n.state={httpReqInProgress:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),a(t,[{key:"componentDidMount",value:function(){l.MessageBus.on(s.HTTP_REQUEST_TRANSACTION,this.handleHttpReqTransaction,this),l.MessageBus.on("MY_HTTP_EVENT",this.handleHttpReqTransaction,this)}},{key:"handleHttpReqTransaction",value:function(e){log.debug(e),"SENT"===e.type?this.pendingRequests.add(e.id):this.pendingRequests.delete(e.id),this.setState(o({},this.state,{httpReqInProgress:0<this.pendingRequests.size}))}},{key:"render",value:function(){return u.default.createElement(c.indexPageView,{loading:this.state.httpReqInProgress})}},{key:"componentWillUnmount",value:function(){l.MessageBus.off(s.HTTP_REQUEST_TRANSACTION,this.handleHttpReqTransaction,this),l.MessageBus.off("MY_HTTP_EVENT",this.handleHttpReqTransaction,this)}}]),t}()},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=function(e){return!(!window||"function"!=typeof window.decodeURIComponent)&&decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))},a="true"===o("debug")&&"false"!==o("debug"),i=function(e){var t,n,o,i,u=e.tag,c=e.type,l=e.messages;if(a)switch(c){case"info":(t=console).info.apply(t,["%c "+u+" ","background: blue; color: white; font-weight: bold;"].concat(r(l)));break;case"warn":(n=console).warn.apply(n,["%c "+u+" ","background: orange; color: white; font-weight: bold;"].concat(r(l)));break;case"error":(o=console).error.apply(o,["%c "+u+" ","background: red; color: white; font-weight: bold;"].concat(r(l)));break;case"debug":default:(i=console).log.apply(i,["%c "+u+" ","background: green; color: white; font-weight: bold;"].concat(r(l)))}},u=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.LOG_TAG=t}return n(e,[{key:"tag",value:function(e){return new this.constructor(e)}},{key:"debug",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i({tag:this.LOG_TAG,type:"debug",messages:t}),this}},{key:"info",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i({tag:this.LOG_TAG,type:"info",messages:t}),this}},{key:"warn",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i({tag:this.LOG_TAG,type:"warn",messages:t}),this}},{key:"error",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i({tag:this.LOG_TAG,type:"error",messages:t}),this}}]),e}())("PROD");e.log=u,t.log=u}).call(this,n(8))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getEmbeddedJSON=function(e,t){t||(t=document.body);var n={};return t.querySelectorAll('script[name="'+e+'"]').forEach(function(e){try{var t=JSON.parse(e.textContent)||{};Object.assign(n,t)}catch(e){window.console.log(e)}}),n}},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reactRender=void 0;var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r},i=n(103);t.reactRender=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var u=a.default.createElement.apply(a.default,[e,t].concat(r));return function(e){(0,i.render)(u,e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(105);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(95);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var a=n(94);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IndexController=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(32),a=n(106),i=n(93),u=n(51),c=n(50),l=n(49),s=n(22);var f=(0,l.getStore)();(t.IndexController=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Controller),r(t,[{key:"onInit",value:function(){var e=(0,a.getEmbeddedJSON)("hosts",this.el);f.dispatch((0,s.saveHostsAction)(e))}},{key:"onReady",value:function(){this.render()}},{key:"render",value:function(){(0,a.reactRender)((0,c.withStore)((0,u.withBrowserRouter)(i.IndexPageContainer),f))(this.el)}}]),t}()).setName("IndexController").register()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(107);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.HTTP_REQUEST_TRANSACTION="HTTP_REQUEST_TRANSACTION"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.TOO_FEW_PARAMETERS="TOO_FEW_PARAMETERS",t.INVALID_PARAMETERS="INVALID_PARAMETERS",t.COMP_NOT_REGISTERED="COMP_NOT_REGISTERED",t.DOM_CONTEXT_MISSING="DOM_CONTEXT_MISSING",t.SERVER_ERROR="SERVER_ERROR"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CONTROLLER_ELEM_ATTR="data-controller",t.CONTROLLER_ALREADY_REGISTERED_ERROR="CONTROLLER ALREADY REGISTERED",t.CONTROLLER_NOT_REGISTERED_ERROR="CONTROLLER NOT REGISTERED",t.CONTROLLER_NAME_UNKNOWN_ERROR="CONTROLLER NAME UNKNOWN",t.JSON_NOT_ERROR="JSON is not present on the page",t.BOOTSTRAP_RUN="BOOTSTRAP_RUN"},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resume=t.pause=t.initialize=t.run=void 0;var r=n(32),o=n(12);n(108);var a=!1,i=[],u=0,c=!1,l=[],s=function(){!function(e){i=e.querySelectorAll("["+o.CONTROLLER_ELEM_ATTR+"]")}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body),function(){for(u=0;u<i.length&&!c;u+=1){var e=i[u].getAttribute(o.CONTROLLER_ELEM_ATTR);(0,r.createInstance)(e,i[u],{})}}()},f=function(){0<l.length&&d(l.splice(0,1)[0])},d=t.run=function(e){!0===a?l.push(e):(a=!0,void 0===e||void 0===e.context?s():s(e.context),a=!1,f())};t.initialize=function(e){d(e)},t.pause=function(){c=!0},t.resume=function(){for(c=!1;u<i.length&&!c;u+=1){var e=i[u].getAttribute(o.CONTROLLER_ELEM_ATTR);(0,r.createInstance)(e,i[u],{})}}},function(e,t,n){"use strict"},function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(114)),o=n(113),a=n(11);document.addEventListener("DOMContentLoaded",function(){log.debug("[index.js] Bootstrap process started."),(0,o.initialize)(),log.info("[index.js] Bootstrap process completed."),a.MessageBus.trigger(r.EVENT_BOOTSTRAP_COMPLETED)})},function(e,t,n){n(115),e.exports=n(43)}]);
//# sourceMappingURL=main.js.map