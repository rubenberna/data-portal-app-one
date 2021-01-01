/*! For license information please see main.b6f6b39e.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-switch-app-one-example"]=this["webpackJsonpreact-switch-app-one-example"]||[]).push([[0],{16:function(e,t,r){e.exports=r(50)},17:function(e,t,r){},48:function(e,t,r){},50:function(e,t,r){"use strict";r.r(t);r(17);var n=r(0),a=r.n(n),o=r(12),c=r.n(o),i=r(3),s=r.n(i),l=r(13),u=r(2),p=r(14),f=r.n(p),m=r(15),y=r.n(m);function d(e,t){return e(t={exports:{}},t.exports),t.exports}var b="function"===typeof Symbol&&Symbol.for,g=b?Symbol.for("react.element"):60103,h=b?Symbol.for("react.portal"):60106,x=b?Symbol.for("react.fragment"):60107,v=b?Symbol.for("react.strict_mode"):60108,E=b?Symbol.for("react.profiler"):60114,O=b?Symbol.for("react.provider"):60109,S=b?Symbol.for("react.context"):60110,j=b?Symbol.for("react.async_mode"):60111,w=b?Symbol.for("react.concurrent_mode"):60111,$=b?Symbol.for("react.forward_ref"):60112,_=b?Symbol.for("react.suspense"):60113,C=b?Symbol.for("react.suspense_list"):60120,P=b?Symbol.for("react.memo"):60115,T=b?Symbol.for("react.lazy"):60116,k=b?Symbol.for("react.block"):60121,z=b?Symbol.for("react.fundamental"):60117,R=b?Symbol.for("react.responder"):60118,M=b?Symbol.for("react.scope"):60119;function I(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case g:switch(e=e.type){case j:case w:case x:case E:case v:case _:return e;default:switch(e=e&&e.$$typeof){case S:case $:case T:case P:case O:return e;default:return t}}case h:return t}}}function A(e){return I(e)===w}var D={AsyncMode:j,ConcurrentMode:w,ContextConsumer:S,ContextProvider:O,Element:g,ForwardRef:$,Fragment:x,Lazy:T,Memo:P,Portal:h,Profiler:E,StrictMode:v,Suspense:_,isAsyncMode:function(e){return A(e)||I(e)===j},isConcurrentMode:A,isContextConsumer:function(e){return I(e)===S},isContextProvider:function(e){return I(e)===O},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===g},isForwardRef:function(e){return I(e)===$},isFragment:function(e){return I(e)===x},isLazy:function(e){return I(e)===T},isMemo:function(e){return I(e)===P},isPortal:function(e){return I(e)===h},isProfiler:function(e){return I(e)===E},isStrictMode:function(e){return I(e)===v},isSuspense:function(e){return I(e)===_},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===x||e===w||e===E||e===v||e===_||e===C||"object"===typeof e&&null!==e&&(e.$$typeof===T||e.$$typeof===P||e.$$typeof===O||e.$$typeof===S||e.$$typeof===$||e.$$typeof===z||e.$$typeof===R||e.$$typeof===M||e.$$typeof===k)},typeOf:I},F=(d((function(e,t){0})),d((function(e){e.exports=D})),Object.getOwnPropertySymbols),W=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;function N(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}})()&&Object.assign;var L="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function q(e,t,r,n,a){}q.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function G(){}function J(){}J.resetWarningCache=G;var U=d((function(e){e.exports=function(){function e(e,t,r,n,a,o){if(o!==L){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:J,resetWarningCache:G};return r.PropTypes=r,r}()})),V={display:"flex",flexDirection:"row",margin:"50px",border:"1px solid cadetblue",padding:"24px",borderRadius:"5px"},H={width:"90px",height:"auto",borderRadius:"50%",marginRight:"10px"},Y={fontWeight:600},K={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},Q={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",padding:"5px",borderRadius:"5px"},X={textAlign:"center"},Z={marginRight:"5px"},ee={color:"cadetblue",fontWeight:200,fontSize:"30px",width:"100%",textAlign:"center"},te={marginBottom:"30px",padding:"10px"},re=function(e){var t=e.text;return a.a.createElement("div",{style:X},a.a.createElement("h2",{style:ee},"App One"),a.a.createElement("p",null,t))},ne=function(e){return a.a.createElement("svg",Object.assign({"aria-hidden":"true","data-prefix":"fab","data-icon":"github",className:"prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16",viewBox:"0 0 496 512",width:25},e),a.a.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))},ae=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),r=t[0],o=t[1],c=Object(n.useState)(!1),i=Object(u.a)(c,2),p=i[0],m=i[1],d=Object(n.useState)(void 0),b=Object(u.a)(d,2),g=b[0],h=b[1],x=function(){var e=Object(l.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),m(!0),e.next=4,f.a.get("https://api.github.com/users/".concat(g));case 4:r=e.sent,m(!1),o(r.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{style:K},a.a.createElement("input",{type:"text",placeholder:"search by Github handler",style:te,onChange:function(e){return h(e.target.value)}}),a.a.createElement("button",{onClick:x,type:"submit",style:Q},a.a.createElement(ne,{style:Z}),"Search Github profiles"),a.a.createElement(y.a,{size:70,color:"#399D8B",loading:p}),r&&a.a.createElement("div",{style:V},a.a.createElement("img",{style:H,src:r.avatar_url,alt:"github avatar"}),a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("span",{style:Y},"Name: "),a.a.createElement("span",null,r.name)),a.a.createElement("p",null,a.a.createElement("span",{style:Y},"Repos: "),a.a.createElement("span",null,r.public_repos)))))};ae.propTypes={searchInput:U.string};var oe=function(e){var t=e.state;return a.a.createElement("div",{style:K},a.a.createElement(re,{text:null===t||void 0===t?void 0:t.username}),a.a.createElement(ae,null))};oe.propTypes={searchInput:U.string,text:U.string};oe.propTypes={state:U.shape({isAuthenticated:U.bool,token:U.string,username:U.string,role:U.string,errorMessage:U.string})};var ce=function(e){var t=e.state;return a.a.createElement(oe,{sate:t})},ie=(r(48),function(){return a.a.createElement(ce,null)});c.a.render(a.a.createElement(ie,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b6f6b39e.chunk.js.map