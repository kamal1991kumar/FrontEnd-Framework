!function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],f=0,d=[];f<u.length;f++)i=u[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={main:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"js/"+({common:"common"}[e]||e)+".js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,u.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;a.push([149,"vendor"]),n()}({101:function(e,t,n){(e.exports=n(100)(!1)).push([e.i,"body,html{font-size:24px;color:#111;background-color:#eaeae4;padding:0;margin:0;-webkit-transform:translateZ(0);transform:translateZ(0);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}.nav{display:flex;justify-content:center;align-items:center}.nav__link{flex:0;display:block;font-size:.5rem;padding:.4rem .8rem;margin:0 .5rem;text-transform:uppercase;color:#fff;text-decoration:none;background-color:#92bf9f;transition:all .3s ease-in-out;border-radius:.1rem;letter-spacing:.025rem;white-space:nowrap}.nav__link--active{text-shadow:0 .15rem .1rem rgba(0,0,0,.3);background-color:#b982b4;font-weight:700;box-shadow:0 .3rem .5rem .05rem rgba(0,0,0,.15)}.nav--dark .nav__link{background-color:#7d776a}.nav--dark .nav__link--active{background-color:#f38230}.block__title{font-size:2rem;font-weight:700;margin-bottom:1rem}.block__content{font-weight:300;font-size:.5rem;color:#333;max-width:800px;margin:0 auto}.site-header{display:block;margin-bottom:2rem;padding:1rem;box-shadow:0 0 5px rgba(0,0,0,.3);background-color:#fafafa}.site-header__logo-section{text-align:center;margin-bottom:1rem}.site-header__logo-section__logo{vertical-align:middle;max-height:1.5rem;-webkit-filter:grayscale(1);filter:grayscale(1);transition:all .3s cubic-bezier(.755,.05,.855,.06)}.site-header__logo-section__logo:hover{-webkit-filter:grayscale(0);filter:grayscale(0)}.site-footer{display:block;margin-top:2rem;border-top:1px dashed #ccc;padding:1rem 0;text-align:center;font-size:.5rem;color:#000;font-weight:700;text-transform:uppercase;background-color:#92bf9f}.home-component{max-width:1200px;margin:0 auto;min-height:500px;text-align:center}.home-component__title{text-transform:uppercase;font-size:5rem;color:#b982b4}.home-component__content{font-weight:300;color:#333;line-height:1.5}.about-component{max-width:1200px;margin:0 auto;min-height:500px;text-align:center}.about-component__title{text-transform:uppercase;font-size:5rem;color:#b982b4}.about-component__content{font-weight:300;color:#333;line-height:1.5}.contact-component{max-width:1200px;margin:0 auto;min-height:500px;text-align:center}.contact-component__title{text-transform:uppercase;font-size:5rem;color:#b982b4}.contact-component__content{font-weight:300;color:#333;line-height:1.5}",""])},102:function(e,t,n){var r=n(101);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(99)(r,o);r.locals&&(e.exports=r.locals)},123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Http=void 0;var r=a(n(122)),o=a(n(87));function a(e){return e&&e.__esModule?e:{default:e}}var i="http://localhost:8080",u=t.Http={},c=function(e,t){return e.next({data:t.data,status:t.status,headers:t.headers,timestamp:Date.now()}),e.complete()},l=function(e,t){return e.error({type:o.default.get(t,"response.status")?"HTTP_ERROR":"NETWORK_ERROR",error:o.default.get(t,"response.data",t.message),status:o.default.get(t,"response.status",0),headers:o.default.get(t,"response.headers",{}),timestamp:Date.now()}),e.complete()};u.get=function(e,t){var n=t.path,o=void 0===n?"/":n,a=t.timeout,u=void 0===a?1e4:a,s=t.headers,f=void 0===s?{}:s;return(0,r.default)({method:"get",url:i+o,headers:f,timeout:u}).then(function(t){return c(e,t)}).catch(function(t){return l(e,t)})},u.post=function(e,t){var n=t.path,o=void 0===n?"/":n,a=t.timeout,u=void 0===a?1e4:a,s=t.headers,f=void 0===s?{}:s,d=t.data,p=void 0===d?{}:d;return(0,r.default)({method:"post",url:i+o,data:p,headers:f,timeout:u}).then(function(t){return c(e,t)}).catch(function(t){return l(e,t)})},u.put=function(e,t){var n=t.path,o=void 0===n?"/":n,a=t.timeout,u=void 0===a?1e4:a,s=t.headers,f=void 0===s?{}:s,d=t.data,p=void 0===d?{}:d;return(0,r.default)({method:"put",url:i+o,data:p,headers:f,timeout:u}).then(function(t){return c(e,t)}).catch(function(t){return l(e,t)})},u.patch=function(e,t){var n=t.path,o=void 0===n?"/":n,a=t.timeout,u=void 0===a?1e4:a,s=t.headers,f=void 0===s?{}:s,d=t.data,p=void 0===d?{}:d;return(0,r.default)({method:"patch",url:i+o,data:p,headers:f,timeout:u}).then(function(t){return c(e,t)}).catch(function(t){return l(e,t)})},u.delete=function(e,t){var n=t.path,o=void 0===n?"/":n,a=t.timeout,u=void 0===a?1e4:a,s=t.headers,f=void 0===s?{}:s;return(0,r.default)({method:"delete",url:i+o,headers:f,timeout:u}).then(function(t){return c(e,t)}).catch(function(t){return l(e,t)})}},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UserService=void 0;var r=n(81),o=n(123);t.UserService={getAllUsers:function(){return r.Observable.create(function(e){o.Http.get(e,{path:"/users"})})},addUser:function(e){return r.Observable.create(function(t){o.Http.post(t,{path:"/users/",data:Object.assign(e,{id:"2"})})})},deleteUser:function(e){return r.Observable.create(function(t){o.Http.Put(t,{path:"/users/"+e})})}}},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessageBus=t.off=t.on=t.emitError=t.emit=void 0;var r=n(81),o=n(97);var a=new r.Subject,i=t.emit=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||"string"!=typeof e)throw new Error("[MessageBus] 'emit' method requires 'eventName' as argument, "+e+" was given.");a.next({payload:t,__MB_EVENT__:e,__MB_ERROR__:!0===n})},u=t.emitError=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];i.apply(void 0,t.concat([!0]))},c=t.on=function(e,t,n){if(!e||"string"!=typeof e)throw new Error("[MessageBus] 'on' method requires 'event' name as argument, "+event+" was given.");return a.pipe((0,o.filter)(function(t){return e===t.__MB_EVENT__}),(0,o.map)(function(e){var t=e.__MB_ERROR__,n=e.payload;if(t)throw new(function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.payload=n,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Error),t}());return n})).subscribe(t,n)},l=t.off=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=!0,a=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;if(!(l instanceof r.Subscription))throw new Error("[MessageBus] `off` method requires `subscription` argument of type RxJS `Subscription`.");l.unsubscribe()}}catch(e){a=!0,i=e}finally{try{!o&&c.return&&c.return()}finally{if(a)throw i}}};t.MessageBus={on:c,emit:i,emitError:u,off:l}},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(6),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("div",{className:"site-footer"},"Welcome to AVIZVA Solutions Pvt. Ltd. All rights reserved 2011-2018.")}},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(6),a=(r=o)&&r.__esModule?r:{default:r},i=n(73);t.default=function(){return a.default.createElement("div",{className:"site-header"},a.default.createElement("div",{className:"site-header__logo-section"},a.default.createElement("img",{className:"site-header__logo-section__logo",src:"/assets/images/logo.png",alt:""})),a.default.createElement("div",{className:"site-header__nav-section nav"},a.default.createElement(i.NavLink,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active"},"Home"),a.default.createElement(i.NavLink,{to:"/about",exact:!1,className:"nav__link",activeClassName:"nav__link--active"},"About"),a.default.createElement(i.NavLink,{to:"/contact",exact:!1,className:"nav__link",activeClassName:"nav__link--active"},"Contact")))}},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(6),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("div",{className:"block"},a.default.createElement("h1",{className:"block__title"},"Avizva Integration Platforms"),a.default.createElement("p",{className:"block__content"},"With IBM stack of technologies at the foundation, our integration practice offers highly scalable and robust solutions. Our expertise in bringing together Enterprise Service Bus (ESB), IBM MQ and Business Rules has delivered sophisticated integration solutions for complex enterprise systems and applications."))}},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(6),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("div",{className:"block"},a.default.createElement("h1",{className:"block__title"},"Avizva Portal Solutions"),a.default.createElement("p",{className:"block__content"},"Our portal solutions combine content, collaboration and self service with defined workflows that allows business to build seamless user experience. We have executed Business Application and Web Content driven projects on IBM WebSphere Portal and Liferay Platforms."))}},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(6),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("div",{className:"block"},a.default.createElement("h1",{className:"block__title"},"Avizva Digital Design"),a.default.createElement("p",{className:"block__content"},"Our expertise in merging technology and creativity allows us to redefine consumer engagement. From Information architecture to high fidelity click through prototypes, each element of our digital design process stands as a testimony to our focus on design."))}},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var r=c(n(6)),o=c(n(131)),a=c(n(130)),i=c(n(129)),u=c(n(128));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("h1",null,"loading...")};t.routes={INDEX:{HOME:{path:"/",exact:!0,component:(0,o.default)({loader:function(){return Promise.all([n.e("common"),n.e("chunks/sjbt5j12lq.chunk")]).then(n.t.bind(null,152,7))},loading:l})},ABOUT:{path:"/about",exact:!1,component:(0,o.default)({loader:function(){return Promise.all([n.e("common"),n.e("chunks/hkepqkj3xq.chunk")]).then(n.t.bind(null,151,7))},loading:l}),routes:{ABOUT_DIGITAL:{path:"/about",exact:!0,component:a.default},ABOUT_PORTAL:{path:"/about/portal",exact:!0,component:i.default},ABOUT_PLATFORMS:{path:"/about/platforms",exact:!0,component:u.default}}},CONTACT:{path:"/contact",exact:!1,component:(0,o.default)({loader:function(){return Promise.all([n.e("common"),n.e("chunks/hkt5jk3gx.chunk")]).then(n.t.bind(null,150,7))},loading:l})}}}},135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(6)),a=n(96),i=s(n(127)),u=s(n(126)),c=n(125),l=n(124);function s(e){return e&&e.__esModule?e:{default:e}}t.App=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentWillMount",value:function(){this.sub=l.UserService.getAllUsers().subscribe(function(e){window.console.log("[UserService getAllUsers]",e)}),this.messageBusSubscription=c.MessageBus.on("CHAT_MESSAGE",function(e){window.console.log("[MessageBus CHAT_MESSAGE]",e)})}},{key:"componentDidMount",value:function(){var e=1,t=setInterval(function(){c.MessageBus.emit("CHAT_MESSAGE",{fromUserId:1,toUserId:2,message:"["+e+"] Hey User Two, I am user One."}),3<(e+=1)&&clearInterval(t)},3e3)}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement(i.default,null),o.default.createElement(a.RenderRoutes,{page:"INDEX"}),o.default.createElement(u.default,null))}},{key:"componentWillUnmount",value:function(){c.MessageBus.off(this.messageBusSubscription),this.sub.subscribe()}}]),t}()},148:function(e,t,n){"use strict";var r=u(n(6)),o=u(n(146)),a=n(73),i=n(135);function u(e){return e&&e.__esModule?e:{default:e}}o.default.render(r.default.createElement(a.BrowserRouter,null,r.default.createElement(i.App,null)),document.getElementById("app-root"))},149:function(e,t,n){n(148),e.exports=n(102)},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RenderRoutes=void 0;var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(6)),i=l(n(87)),u=n(73),c=n(132);function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"render",value:function(){return this.props.currentRoute?a.default.createElement(u.Switch,null,Object.entries(i.default.get(c.routes,this.props.page+"."+this.props.currentRoute+".routes",[])).map(function(e){var t=r(e,2),n=t[0],o=t[1];return a.default.createElement(u.Route,{key:n,exact:o.exact,path:o.path,component:o.component})})):a.default.createElement(u.Switch,null,Object.entries(i.default.get(c.routes,this.props.page,[])).map(function(e){var t=r(e,2),n=t[0],o=t[1];return a.default.createElement(u.Route,{key:n,exact:o.exact,path:o.path,component:o.component})}))}}]),t}();t.RenderRoutes=s}});
//# sourceMappingURL=main.js.map