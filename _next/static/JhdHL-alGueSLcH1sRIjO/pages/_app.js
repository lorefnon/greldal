(window.webpackJsonp=window.webpackJsonp||[]).push([["0340"],{"/XES":function(e,t,n){"use strict";n.r(t);var r=n("45mK"),a=n.n(r),o=n("Gozm"),i=n.n(o);function c(e){return(c="function"==typeof i.a&&"symbol"==typeof a.a?function(e){return typeof e}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":typeof e})(e)}function u(e){return(u="function"==typeof i.a&&"symbol"===c(a.a)?function(e){return c(e)}:function(e){return e&&"function"==typeof i.a&&e.constructor===i.a&&e!==i.a.prototype?"symbol":c(e)})(e)}var l=n("vTWr");function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?Object(l.default)(e):t}n.d(t,"default",function(){return s})},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var r=n("k9sC"),a=n.n(r),o=n("yP/C"),i=n("h7sq"),c=n("tS02"),u=n("/XES"),l=n("ztBH"),s=n("Fayl"),f=n("ERkP"),d=n.n(f),p=n("Khd+"),h=n.n(p),m=n("NxFA"),y=function(e){function t(){return Object(i.default)(this,t),Object(u.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.router.route;return r.match(/\/api/)||r.match(/\/playground/)?d.a.createElement(p.Container,null,d.a.createElement(t,n)):d.a.createElement(p.Container,null,d.a.createElement(m.a,null,d.a.createElement(t,n)))}}],[{key:"getInitialProps",value:function(){var e=Object(o.default)(a.a.mark(function e(t){var n,r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,t.router,r=t.ctx,o={},!n.getInitialProps){e.next=6;break}return e.next=5,n.getInitialProps(r);case 5:o=e.sent;case 6:return e.abrupt("return",{pageProps:o});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.a)},"1kx4":function(e,t){e.exports=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}},"5A7e":function(e,t,n){e.exports=n("VAi2")},"9bSt":function(e,t,n){"use strict";var r=n("UwCj"),a=n("jHgz");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},AZcf:function(e,t){e.exports="/greldal/_next/static/images/6f91cdba06813c05d0b3e558d9f749be.png"},CLPb:function(e,t,n){"use strict";n.r(t);var r=n("ysci"),a=n.n(r);var o=n("Td7S"),i=n.n(o),c=n("5A7e"),u=n.n(c);function l(e){return function(e){if(a()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(u()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return i()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return l})},Fayl:function(e,t,n){"use strict";n.r(t);var r=n("Tqks"),a=n.n(r),o=n("U9rZ"),i=n.n(o);function c(e,t){return(c=i.a||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=a()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}n.d(t,"default",function(){return u})},HaU7:function(e,t,n){"use strict";var r=n("lpv4"),a=r(n("Ml6p")),o=r(n("OCF2")),i=r(n("E1+a")),c=r(n("Z05o")),u=r(n("OY2S")),l=r(n("zBsc")),s=r(n("wt0f")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=f(n("ERkP")),h=d(n("aWzz")),m=n("kMDi"),y=n("7xIC"),v=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,c.default)(t,[{key:"getChildContext",value:function(){return{router:y.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=w(t);return p.default.createElement(b,null,p.default.createElement(n,(0,o.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:function(e){var t=e.Component,n=(e.router,e.ctx);try{return a.default.resolve(m.loadGetInitialProps(t,n)).then(function(e){return{pageProps:e}})}catch(r){return a.default.reject(r)}}}]),t}(p.Component);v.childContextTypes={router:h.default.object},t.default=v;var b=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(p.Component);t.Container=b;var g=m.execOnce(function(){0});function w(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return g(),r},get pathname(){return g(),t},get asPath(){return g(),n},back:function(){g(),e.back()},push:function(t,n){return g(),e.push(t,n)},pushTo:function(t,n){g();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return g(),e.replace(t,n)},replaceTo:function(t,n){g();var r=n?t:null,a=n||t;return e.replace(r,a)}}}t.createUrl=w},I9iR:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,i,c){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,i,c],s=0;(u=new Error(t.replace(/%s/g,function(){return l[s++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},"Khd+":function(e,t,n){e.exports=n("HaU7")},NxFA:function(e,t,n){"use strict";var r=n("h7sq"),a=n("tS02"),o=n("/XES"),i=n("ztBH"),c=n("vTWr"),u=n("Fayl"),l=n("znL5"),s=n("ERkP"),f=n.n(s),d=n("j/s1");function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("yVJX");var m=n("I9iR"),y=n.n(m),v=n("Rkrg"),b=n.n(v),g=function(){function e(e,t,n){var r=this;this.nativeMediaQueryList=e.matchMedia(t),this.active=!0,this.cancellableListener=function(){r.matches=r.nativeMediaQueryList.matches,r.active&&n.apply(void 0,arguments)},this.nativeMediaQueryList.addListener(this.cancellableListener),this.matches=this.nativeMediaQueryList.matches}return e.prototype.cancel=function(){this.active=!1,this.nativeMediaQueryList.removeListener(this.cancellableListener)},e}(),w=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return h(p(p(t=e.call.apply(e,[this].concat(r))||this)),"state",{matches:t.props.defaultMatches}),h(p(p(t)),"updateMatches",function(){var e=t.mediaQueryList.matches;t.setState({matches:e});var n=t.props.onChange;n&&n(e)}),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.componentWillMount=function(){if("object"==typeof window){var e=this.props.targetWindow||window;"function"!=typeof e.matchMedia&&y()(!1);var t=this.props.query;"string"!=typeof t&&(t=b()(t)),this.mediaQueryList=new g(e,t,this.updateMatches),this.updateMatches()}},a.componentWillUnmount=function(){this.mediaQueryList.cancel()},a.render=function(){var e=this.props,t=e.children,n=e.render,r=this.state.matches;return n?r?n():null:t?"function"==typeof t?t(r):(!Array.isArray(t)||t.length)&&r?f.a.Children.only(t):null:null},r}(f.a.Component);h(w,"defaultProps",{defaultMatches:!0});var x=w,E=n("hAPS");n("sb3w"),n("16WD"),n("aLGl");n.d(t,"a",function(){return O});var O=function(e){function t(){var e,n;Object(r.default)(this,t);for(var a=arguments.length,u=new Array(a),s=0;s<a;s++)u[s]=arguments[s];return n=Object(o.default)(this,(e=Object(i.default)(t)).call.apply(e,[this].concat(u))),Object(l.a)(Object(c.default)(n),"state",{show:!1,showDrawer:!1}),Object(l.a)(Object(c.default)(n),"containerRef",f.a.createRef()),Object(l.a)(Object(c.default)(n),"toggleDrawer",function(){n.setState({showDrawer:!n.state.showDrawer})}),n}return Object(u.default)(t,e),Object(a.default)(t,[{key:"componentDidMount",value:function(){this.setState({show:!0})}},{key:"componentDidUpdate",value:function(e){if(this.props.children!==e.children){var t=this.containerRef.current;if(!t)return;t.scrollTop=0}}},{key:"render",value:function(){var e=this;if(!this.state.show)return this.renderWideLayout();var t=this.props;t.sidebar,t.children;return f.a.createElement(x,{query:"(max-width: 1000px)"},function(t){return t?e.renderCompactLayout():e.renderWideLayout()})}},{key:"renderCompactLayout",value:function(){var e=this.props,t=e.children,n=e.sidebar;return f.a.createElement(C,{ref:this.containerRef},f.a.createElement(k,null,f.a.createElement(k.Action,null,f.a.createElement(k.Action.Control,{onClick:this.toggleDrawer},"☰")),f.a.createElement(k.Title,null,"GRelDAL")),f.a.createElement(P,{id:"container"},this.state.showDrawer?f.a.createElement(E.d,{onClick:this.toggleDrawer},f.a.createElement(E.c,null,n)):t))}},{key:"renderWideLayout",value:function(){var e=this.props,t=e.children,n=e.sidebar,r=this.state.show;return f.a.createElement("div",{style:{display:r?"block":"none"},ref:this.containerRef},f.a.createElement(E.a,null,f.a.createElement(E.c,null,n)),f.a.createElement(j,{id:"container"},t))}}]),t}(f.a.Component),C=d.a.div.withConfig({displayName:"PageLayout__CompactLayoutContainer",componentId:"ct4rbe-0"})(["position:absolute;top:0;left:0;right:0;bottom:0;overflow:auto;"]),k=d.a.div.withConfig({displayName:"PageLayout__AppHeader",componentId:"ct4rbe-1"})(["background:#acacac;line-height:1rem;border-bottom:2px solid #8a8a8a;display:flex;flex-direction:row;position:sticky;top:0;"]);k.Action=d.a.div.withConfig({displayName:"PageLayout__Action",componentId:"ct4rbe-2"})(["flex-grow:0;flex-shrink:0;flex-basis:3rem;padding:0.4rem;"]),k.Action.Control=d.a.button.withConfig({displayName:"PageLayout__Control",componentId:"ct4rbe-3"})(["padding:0.6rem;line-height:1rem;display:block;border:1px solid #8a8a8a;box-shadow:none;background:#ddd;font-size:1.6rem;"]),k.Title=d.a.div.withConfig({displayName:"PageLayout__Title",componentId:"ct4rbe-4"})(["flex-grow:1;flex-shrink:1;text-align:center;font-size:1.6rem;line-height:3rem;"]);var _=d.a.div.withConfig({displayName:"PageLayout__ContentContainer",componentId:"ct4rbe-5"})(["pre:not(.CodeMirror-line){padding:0 !important;}h1{margin:2.8rem 0;}h2,h3,h4,h5,h6{margin:1.8rem 0;}p,ol,ul{margin:1.8rem 0;}pre:not(.CodeMirror-line) > code{border-left:4px solid #ddd;display:block;margin:0;padding:5px;}pre:not(.CodeMirror-line){max-width:calc(100% - 40px);overflow-x:auto;border:1px solid #ddd;background:#f8f8f8;}a,a:visited,a:hover,a:active{color:#0261cd;font-weight:bold;text-decoration:none;}"]),j=Object(d.a)(_).withConfig({displayName:"PageLayout__DesktopContentContainer",componentId:"ct4rbe-6"})(["max-width:700px;margin:40px 100px 50px 400px;"]),P=Object(d.a)(_).withConfig({displayName:"PageLayout__MobileContentContainer",componentId:"ct4rbe-7"})(["width:calc(100% - 40px);padding:20px;overflow-x:hidden;"])},R6fH:function(e,t,n){var r=n("M25K"),a=n("eD9m")("iterator"),o=n("tReM");e.exports=n("rFq9").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(r(t))}},Rkrg:function(e,t,n){var r=n("1kx4"),a=function(e){var t="",n=Object.keys(e);return n.forEach(function(a,o){var i=e[a];(function(e){return/[height|width]$/.test(e)})(a=r(a))&&"number"==typeof i&&(i+="px"),t+=!0===i?a:!1===i?"not "+a:"("+a+": "+i+")",o<n.length-1&&(t+=" and ")}),t};e.exports=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(n,r){t+=a(n),r<e.length-1&&(t+=", ")}),t):a(e)}},Td7S:function(e,t,n){e.exports=n("d5Ah")},VAi2:function(e,t,n){n("Fk9O"),n("/r3m"),e.exports=n("R6fH")},ZHK4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},d5Ah:function(e,t,n){n("/r3m"),n("qqHg"),e.exports=n("rFq9").Array.from},dMOP:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},hAPS:function(e,t,n){"use strict";var r=n("ERkP"),a=n.n(r),o=n("j/s1"),i=n("YNhk"),c=n("2ewA"),u=n("jvFD"),l=n.n(u),s=n("AZcf"),f=n.n(s);function d(){var e=Object(c.a)(["\n                            font-size: 0.8rem;\n                            font-weight: 100;\n                            color: orange;\n                            background: lemonchiffon;\n                            padding: 4px;\n                            border-radius: 4px;\n                            border: 1px solid orange;\n                            position: relative;\n                            top: -20px;\n                        "]);return d=function(){return e},e}function p(){return a.a.createElement(l.a,{href:"".concat("/greldal","/")},a.a.createElement("div",{style:{paddingBottom:"10px",display:"flex",flexDirection:"row",cursor:"pointer"}},a.a.createElement("img",{src:f.a,style:{height:"50px",width:"50px"}}),a.a.createElement("div",{style:{fontWeight:"600",fontSize:"2rem",lineHeight:"50px",paddingLeft:"10px",color:"#8dd35f"}},"GRelDAL",a.a.createElement(h,null,"Beta"))))}var h=Object(o.a)("span")(d()),m=n("CLPb"),y=n("h7sq"),v=n("tS02"),b=n("/XES"),g=n("ztBH"),w=n("vTWr"),x=n("Fayl"),E=n("znL5"),O=n("nsO7"),C=function(e){function t(){var e,n;Object(y.default)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=Object(b.default)(this,(e=Object(g.default)(t)).call.apply(e,[this].concat(a))),Object(E.a)(Object(w.default)(n),"state",{headers:[]}),n}return Object(x.default)(t,e),Object(v.default)(t,[{key:"render",value:function(){return Object(O.isEmpty)(this.state.headers)?null:a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null,"Page Outline"),this.state.headers.map(function(e){return a.a.createElement("a",{href:"#".concat(e.id)},a.a.createElement("div",{style:{paddingLeft:10*e.level+"px",display:"flex",flexDirection:"row"}},a.a.createElement("div",{style:{marginRight:"5px"}},"►"),a.a.createElement("div",null,e.label)))}))}},{key:"componentDidMount",value:function(){this.updateOutline()}},{key:"componentDidUpdate",value:function(){this.updateOutline()}},{key:"updateOutline",value:function(){var e=Object(O.times)(6).map(function(e){return"#container h".concat(e+1)}).join(","),t=Object(m.default)(document.querySelectorAll(e)).map(function(e){return{level:Number(e.tagName.slice(1))-1,label:e.innerText,id:e.getAttribute("id")}}).filter(function(e){return e.id});Object(O.isEqual)(this.state.headers,t)||this.setState({headers:t})}}]),t}(a.a.Component);n.d(t,"c",function(){return k}),n.d(t,"d",function(){return _}),n.d(t,"a",function(){return j}),n.d(t,"b",function(){return P});var k=function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(p,null),a.a.createElement(i.a,{href:"api",highlighted:!0},a.a.createElement(i.c,null,"⯈"),"API"),a.a.createElement(i.a,{href:"#quick-start"},a.a.createElement(A,null),"Quick Start"),a.a.createElement(i.a,{href:"playground"},a.a.createElement(A,null),"Playground (New)"),a.a.createElement(i.a,{href:"faqs"},a.a.createElement(A,null),"Frequently Asked Questions"),a.a.createElement(i.a,{href:"guides"},a.a.createElement(P,null,"Guides")),a.a.createElement(i.a,{href:"mapping-data-sources"},a.a.createElement(A,null),"Mapping Data Sources"),a.a.createElement(i.a,{href:"mapping-operations"},a.a.createElement(A,null),"Mapping Operations"),a.a.createElement(i.a,{href:"mapping-associations"},a.a.createElement(A,null),"Mapping Associations"),a.a.createElement(i.a,{href:"best-practices"},a.a.createElement(A,null),"Best Practices"),a.a.createElement(P,null,"Additional Topics"),a.a.createElement(i.a,{href:"type-safety"},a.a.createElement(A,null),"Type Safety"),a.a.createElement(i.a,{href:"comparision-with-alternatives"},a.a.createElement(A,null),"Comparision With Alternatives"),a.a.createElement(i.a,{href:"architecture-overview"},a.a.createElement(A,null),"Architecture Overview"),a.a.createElement(C,null),t)},_=o.a.div.withConfig({displayName:"Sidebar__SidebarContainer",componentId:"sc-1bydltt-0"})(["background:#fff;padding:10px 30px 30px 30px;a,a:visited{display:block;color:#000;font-weight:700;margin-top:5px;text-decoration:none;}h1,h2,h3,h4,h5,h6{font-size:0.75rem !important;font-weight:600;}"]),j=Object(o.a)(_).withConfig({displayName:"Sidebar__FixedSidebarContainer",componentId:"sc-1bydltt-1"})(["position:fixed;top:0;left:0;bottom:0;width:300px;overflow-y:auto;overflow-x:auto;border-right:1px solid #bbb;box-shadow:0 0 20px #ccc;border-top:4px solid #8dd35f;"]),P=o.a.h1.withConfig({displayName:"Sidebar__SectionHeader",componentId:"sc-1bydltt-2"})(["background:#dee9d8;padding:5px 10px;text-transform:uppercase;border-radius:4px;color:gray;font-size:0.75rem;margin:1.6rem 0;"]),A=Object(o.a)(function(e){return a.a.createElement("span",e,"⚡")}).withConfig({displayName:"Sidebar__Bolt",componentId:"sc-1bydltt-3"})(["margin-right:5px;"])},qqHg:function(e,t,n){"use strict";var r=n("dWRk"),a=n("IFjL"),o=n("MrWc"),i=n("9vFK"),c=n("fawX"),u=n("MPuG"),l=n("9bSt"),s=n("1sfF");a(a.S+a.F*!n("EWHn")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,f,d=o(e),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,y=void 0!==m,v=0,b=s(d);if(y&&(m=r(m,h>2?arguments[2]:void 0,2)),null==b||p==Array&&c(b))for(n=new p(t=u(d.length));t>v;v++)l(n,v,y?m(d[v],v):d[v]);else for(f=b.call(d),n=new p;!(a=f.next()).done;v++)l(n,v,y?i(f,m,[a.value,v],!0):a.value);return n.length=v,n}})},vTWr:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.r(t),n.d(t,"default",function(){return r})},yVJX:function(e,t,n){e.exports=n("zPGv")()},zPGv:function(e,t,n){"use strict";var r=n("dMOP");function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},znL5:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("LcAa"),a=n.n(r);function o(e,t,n){return t in e?a()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},ztBH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var r=n("jPfo"),a=n.n(r),o=n("U9rZ"),i=n.n(o);function c(e){return(c=i.a?a.a:function(e){return e.__proto__||a()(e)})(e)}}},[["ZHK4","5d41","9da1","ad9d"]]]);