(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,t,n){e.exports=n(343)},13:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),i=n(3),u=n(56),c=n(11);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){function t(){var e,n,r,o,a,i,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,f=new Array(c),p=0;p<c;p++)f[p]=arguments[p];return r=this,n=!(o=(e=s(t)).call.apply(e,[this].concat(f)))||"object"!==l(o)&&"function"!=typeof o?h(r):o,a=h(h(n)),u={headers:[]},(i="state")in a?Object.defineProperty(a,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[i]=u,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return Object(c.isEmpty)(this.state.headers)?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null,"Page Outline"),this.state.headers.map(function(e){return o.a.createElement("a",{href:"#".concat(e.id)},o.a.createElement("div",{style:{paddingLeft:10*e.level+"px",display:"flex",flexDirection:"row"}},o.a.createElement("div",{style:{marginRight:"5px"}},"►"),o.a.createElement("div",null,e.label)))}))}},{key:"componentDidMount",value:function(){this.updateOutline()}},{key:"componentDidUpdate",value:function(){this.updateOutline()}},{key:"updateOutline",value:function(){var e=Object(c.times)(6).map(function(e){return"#container h".concat(e+1)}).join(","),t=f(document.querySelectorAll(e)).map(function(e){return{level:Number(e.tagName.slice(1))-1,label:e.innerText,id:e.getAttribute("id")}}).filter(function(e){return e.id});Object(c.isEqual)(this.state.headers,t)||this.setState({headers:t})}}])&&p(n.prototype,r),a&&p(n,a),t}();n.d(t,"b",function(){return m}),n.d(t,"a",function(){return v});var m=function(e){var t=e.children;return o.a.createElement(b,null,o.a.createElement(u.a,null),o.a.createElement(i.a,{href:"api",highlighted:!0},o.a.createElement(i.c,null,"⯈"),"API"),o.a.createElement(i.a,{href:"#quick-start"},"⚡ Quick Start"),o.a.createElement(i.a,{href:"guides"},o.a.createElement(v,null,"Guides")),o.a.createElement(i.a,{href:"mapping-data-sources"},"⚡ Mapping Data Sources"),o.a.createElement(i.a,{href:"mapping-operations"},"⚡ Mapping Operations"),o.a.createElement(i.a,{href:"mapping-associations"},"⚡ Mapping Associations"),o.a.createElement(i.a,{href:"best-practices"},"⚡ Best Practices"),o.a.createElement(v,null,"Additional Topics"),o.a.createElement(i.a,{href:"type-safety"},"⚡ Type Safety"),o.a.createElement(i.a,{href:"comparision-with-alternatives"},"⚡ Comparision With Alternatives"),o.a.createElement(y,null),t)},b=a.a.div.withConfig({displayName:"Sidebar__Container",componentId:"sc-1bydltt-0"})(["background:#fff;position:fixed;top:0;left:0;bottom:0;width:300px;overflow-y:auto;overflow-x:auto;padding:10px 30px 30px 30px;border-right:1px solid #bbb;box-shadow:0 0 20px #ccc;a,a:visited{display:block;color:#000;font-weight:700;margin-top:5px;text-decoration:none;}h1,h2,h3,h4,h5,h6{font-size:0.75rem !important;font-weight:600;}"]),v=a.a.h1.withConfig({displayName:"Sidebar__SectionHeader",componentId:"sc-1bydltt-1"})(["background:#ddd;padding:5px;text-transform:uppercase;border-radius:4px;color:gray;font-size:0.75rem;"])},160:function(e,t,n){e.exports=n(176)},34:function(e,t){e.exports="/greldal/_next/static/images/81342499647d5509de6dd828ff74969e.png"},341:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(342),{page:e.exports.default}})},342:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var r=n(160),o=n.n(r),a=n(0),i=n.n(a),u=n(100),c=n.n(u),l=n(71);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,h(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,c.a),n=t,r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return e.router.route.match(/\/api/)?i.a.createElement(u.Container,null,i.a.createElement(t,n)):i.a.createElement(u.Container,null,i.a.createElement(l.a,null,i.a.createElement(t,n)))}}],a=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var n,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,t.router,r=t.ctx,a={},!n.getInitialProps){e.next=6;break}return e.next=5,n.getInitialProps(r);case 5:a=e.sent;case 6:return e.abrupt("return",{pageProps:a});case 7:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){p(a,r,o,i,u,"next",e)}function u(e){p(a,r,o,i,u,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}],r&&s(n.prototype,r),a&&s(n,a),t}()},343:function(e,t,n){"use strict";var r=n(35),o=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=x,t.Container=t.default=void 0;var a=o(n(79)),i=o(n(80)),u=o(n(344)),c=o(n(15)),l=o(n(16)),f=o(n(29)),p=o(n(30)),s=o(n(31)),d=o(n(25)),h=r(n(0)),y=o(n(2)),m=n(41),b=n(82),v=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}var n;return(0,s.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,b.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=x(t);return h.default.createElement(g,null,h.default.createElement(n,(0,u.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,i.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,m.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(h.Component);t.default=v,(0,d.default)(v,"childContextTypes",{headManager:y.default.object,router:y.default.object});var g=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=g;var w=(0,m.execOnce)(function(){0});function x(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:null,o=n||t;return e.push(r,o)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:null,o=n||t;return e.replace(r,o)}}}},344:function(e,t,n){var r=n(125);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},56:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(4),o=n(0),a=n.n(o),i=n(47),u=n.n(i),c=n(34),l=n.n(c);function f(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n                            font-size: 0.8rem;\n                            font-weight: 100;\n                            color: orange;\n                            background: lemonchiffon;\n                            padding: 4px;\n                            border-radius: 4px;\n                            border: 1px solid orange;\n                            position: relative;\n                            top: -20px;\n                        "]);return f=function(){return e},e}function p(){return a.a.createElement(u.a,{href:"".concat("/greldal","/")},a.a.createElement("div",{style:{paddingBottom:"10px",display:"flex",flexDirection:"row",cursor:"pointer"}},a.a.createElement("img",{src:l.a,style:{height:"50px"}}),a.a.createElement("div",{style:{fontWeight:"600",fontSize:"2rem",lineHeight:"50px",paddingLeft:"10px",color:"#e535ab"}},"GRelDAL",a.a.createElement(s,null,"Beta"))))}var s=Object(r.a)("span")(f())},71:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),o=n.n(r),a=n(4),i=n(13);n(206),n(126),n(207);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,f(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.sidebar,n=e.children;return o.a.createElement("div",null,o.a.createElement(i.b,null,t),o.a.createElement(d,{id:"container"},n))}}])&&c(n.prototype,r),a&&c(n,a),t}(),d=a.a.div.withConfig({displayName:"PageLayout__Container",componentId:"ct4rbe-0"})(["max-width:700px;margin:40px 100px 50px 400px;pre > code{border:1px solid #ddd;border-left:4px solid #ddd;display:block;background:#f8f8f8;padding:0.5em;}a,a:visited,a:hover,a:active{color:#0261cd;font-weight:bold;text-decoration:none;}"])}},[[341,1,0,2]]]);