!function(e){function t(t){for(var a,l,u=t[0],c=t[1],i=t[2],d=0,f=[];d<u.length;d++)l=u[d],o[l]&&f.push(o[l][0]),o[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(s&&s(t);f.length;)f.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={main:0},r=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=a);var r,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=function(e){return l.p+"js/"+({}[e]||e)+".js"}(e),r=function(t){c.onerror=c.onload=null,clearTimeout(i);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");l.type=a,l.request=r,n[1](l)}o[e]=void 0}};var i=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,u.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="./",l.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var s=c;r.push([41,"vendor"]),n()}({21:function(e,t,n){},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(1),r=(a=o)&&a.__esModule?a:{default:a};t.default=function(){return r.default.createElement("div",{className:"contact-component"},r.default.createElement("h1",{className:"contact-component__title"},"Contact US"),r.default.createElement("p",{className:"contact-component__content"},"We believe in an open and connected world. We are always on, at either end of the globe, so it’s always a good time to connect with us. We partner with you to understand your business. Be it your plans for expansion, re-engineering processes, transformation or solving challenging business scenarios - We utilize technology to draw a landscape for your own custom products."))}},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(1),r=(a=o)&&a.__esModule?a:{default:a};t.default=function(){return r.default.createElement("div",{className:"home-component"},r.default.createElement("h1",{className:"home-component__title"},"We are"),r.default.createElement("p",{className:"home-component__content"},"a team of enthusiasts and experts bringing together creativity and technology to provide right consulting, thoughtful design and customised solutions. We are sticklers for engaging and sensible design."))}},24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(1),r=(a=o)&&a.__esModule?a:{default:a};t.default=function(){return r.default.createElement("div",{className:"site-footer"},"Welcome to AVIZVA Solutions Pvt. Ltd. All rights reserved 2011-2018.")}},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(1),r=(a=o)&&a.__esModule?a:{default:a},l=n(11);t.default=function(){return r.default.createElement("div",{className:"site-header"},r.default.createElement("div",{className:"site-header__logo-section"},r.default.createElement("img",{className:"site-header__logo-section__logo",src:"/assets/images/logo.png",alt:""})),r.default.createElement("div",{className:"site-header__nav-section nav"},r.default.createElement(l.NavLink,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active"},"Home"),r.default.createElement(l.NavLink,{to:"/about",exact:!1,className:"nav__link",activeClassName:"nav__link--active"},"About"),r.default.createElement(l.NavLink,{to:"/contact",exact:!1,className:"nav__link",activeClassName:"nav__link--active"},"Contact")))}},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var a=s(n(1)),o=n(11),r=s(n(26)),l=s(n(25)),u=s(n(24)),c=s(n(23)),i=s(n(22));function s(e){return e&&e.__esModule?e:{default:e}}var d=(0,r.default)({loader:function(){return n.e("chunks/byzbciie7.chunk").then(n.t.bind(null,42,7))},loading:function(){return a.default.createElement("h1",null,"loading...")}});t.App=function(){return a.default.createElement(o.BrowserRouter,null,a.default.createElement("div",null,a.default.createElement(l.default,null),a.default.createElement(o.Switch,null,a.default.createElement(o.Route,{exact:!0,path:"/",component:c.default}),a.default.createElement(o.Route,{exact:!1,path:"/about",component:d}),a.default.createElement(o.Route,{exact:!1,path:"/contact",component:i.default})),a.default.createElement(u.default,null)))}},40:function(e,t,n){"use strict";var a=l(n(1)),o=l(n(38)),r=n(30);function l(e){return e&&e.__esModule?e:{default:e}}o.default.render(a.default.createElement(r.App,null),document.getElementById("app-root"))},41:function(e,t,n){n(40),e.exports=n(21)}});
//# sourceMappingURL=main.js.map