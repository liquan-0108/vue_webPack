!function(e){function t(t){for(var n,o,i=t[0],s=t[1],c=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&f.push(u[o][0]),u[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(p&&p(t);f.length;)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==u[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},u={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{home:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about",home:"home"}[e]||e)+"."+{about:"31d6cfe0",home:"98d9474d"}[e]+".css",u=i.p+n,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=(p=a[s]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(c===n||c===u))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){var p;if((c=(p=l[s]).getAttribute("data-href"))===n||c===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],f.parentNode.removeChild(f),r(a)},f.href=u,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+"js/"+({about:"about",home:"home"}[e]||e)+"."+{about:"d38c33b4",home:"1a094926"}[e]+".js"}(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var r=u[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}u[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/production-sub-path/",i.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=c;a.push([0,"chunk-vendors"]),r()}({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("8756"),r("2903"),r("8623"),r("ec0c");var n=r("8bbf"),o=r.n(n),u=r("cba8"),a=Object(u.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[this._v("Home")]),this._v(" | "),t("router-link",{attrs:{to:"/about"}},[this._v("About")])],1),t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1),this.$route.meta.keepAlive?this._e():t("router-view")],1)}),[],!1,null,null,null).exports,i=r("6389"),s=r.n(i),c=(r("8798"),r("f5aa"),r("2f9e"),[{path:"/",name:"Home",component:function(){return Promise.all([r.e("chunk-vendors"),r.e("home")]).then(r.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))},meta:{keepAlive:!0}}]);o.a.use(s.a);var l=new s.a({mode:"history",base:"/production-sub-path/",routes:c}),p=r("5880"),f=r.n(p);o.a.use(f.a);var d=new f.a.Store({state:{},mutations:{},actions:{},modules:{}});o.a.config.productionTip=!1,new o.a({router:l,store:d,render:function(e){return e(a)}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},6389:function(e,t){e.exports=VueRouter},"8bbf":function(e,t){e.exports=Vue}});