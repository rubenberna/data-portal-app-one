/*! For license information please see main.a3eba932.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-switch-app-one-example"]=this["webpackJsonpreact-switch-app-one-example"]||[]).push([[0],{13:function(e,t,r){e.exports=r(46)},14:function(e,t,r){},44:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);r(14);var n=r(0),o=r.n(n),a=r(10),c=r.n(a),i=r(11),s=r.n(i),l=r(12),u=r.n(l);function p(e,t){return e(t={exports:{}},t.exports),t.exports}var f="function"===typeof Symbol&&Symbol.for,m=f?Symbol.for("react.element"):60103,y=f?Symbol.for("react.portal"):60106,b=f?Symbol.for("react.fragment"):60107,d=f?Symbol.for("react.strict_mode"):60108,h=f?Symbol.for("react.profiler"):60114,g=f?Symbol.for("react.provider"):60109,x=f?Symbol.for("react.context"):60110,v=f?Symbol.for("react.async_mode"):60111,E=f?Symbol.for("react.concurrent_mode"):60111,S=f?Symbol.for("react.forward_ref"):60112,O=f?Symbol.for("react.suspense"):60113,w=f?Symbol.for("react.suspense_list"):60120,j=f?Symbol.for("react.memo"):60115,$=f?Symbol.for("react.lazy"):60116,_=f?Symbol.for("react.block"):60121,C=f?Symbol.for("react.fundamental"):60117,P=f?Symbol.for("react.responder"):60118,I=f?Symbol.for("react.scope"):60119;function T(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case m:switch(e=e.type){case v:case E:case b:case h:case d:case O:return e;default:switch(e=e&&e.$$typeof){case x:case S:case $:case j:case g:return e;default:return t}}case y:return t}}}function z(e){return T(e)===E}var k={AsyncMode:v,ConcurrentMode:E,ContextConsumer:x,ContextProvider:g,Element:m,ForwardRef:S,Fragment:b,Lazy:$,Memo:j,Portal:y,Profiler:h,StrictMode:d,Suspense:O,isAsyncMode:function(e){return z(e)||T(e)===v},isConcurrentMode:z,isContextConsumer:function(e){return T(e)===x},isContextProvider:function(e){return T(e)===g},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===m},isForwardRef:function(e){return T(e)===S},isFragment:function(e){return T(e)===b},isLazy:function(e){return T(e)===$},isMemo:function(e){return T(e)===j},isPortal:function(e){return T(e)===y},isProfiler:function(e){return T(e)===h},isStrictMode:function(e){return T(e)===d},isSuspense:function(e){return T(e)===O},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===b||e===E||e===h||e===d||e===O||e===w||"object"===typeof e&&null!==e&&(e.$$typeof===$||e.$$typeof===j||e.$$typeof===g||e.$$typeof===x||e.$$typeof===S||e.$$typeof===C||e.$$typeof===P||e.$$typeof===I||e.$$typeof===_)},typeOf:T},M=(p((function(e,t){0})),p((function(e){e.exports=k})),Object.getOwnPropertySymbols),R=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;function D(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}})()&&Object.assign;var F="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function W(e,t,r,n,o){}W.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function N(){}function B(){}B.resetWarningCache=N;var L=p((function(e){e.exports=function(){function e(e,t,r,n,o,a){if(a!==F){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:B,resetWarningCache:N};return r.PropTypes=r,r}()})),q={display:"flex",flexDirection:"row",margin:"50px",border:"1px solid cadetblue",padding:"24px",borderRadius:"5px"},J={width:"90px",height:"auto",borderRadius:"50%",marginRight:"10px"},U={fontWeight:600},V={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},G={display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},H={textAlign:"center"},Y={fontStyle:"italic"},K={marginRight:"5px"},Q={color:"cadetblue",fontWeight:200,fontSize:"30px",width:"100%",textAlign:"center"},X=function(e){var t=e.text;return o.a.createElement("div",{style:H},o.a.createElement("h2",{style:Q},"App One"),o.a.createElement("p",null,t))};function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var ee=function(e){return o.a.createElement("svg",Z({"aria-hidden":"true","data-prefix":"fab","data-icon":"github",className:"prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16",viewBox:"0 0 496 512",width:25},e),o.a.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))},te=function(e){var t=e.searchInput,r=Object(n.useState)(),a=r[0],c=r[1],i=Object(n.useState)(!1),l=i[0],p=i[1];return o.a.createElement("div",{style:V},t&&o.a.createElement("p",null,"Search input: ",o.a.createElement("span",{style:Y},t)),o.a.createElement("button",{onClick:function(e){try{return e.preventDefault(),p(!0),Promise.resolve(s.a.get("https://api.github.com/users/"+t)).then((function(e){console.log(e.data),p(!1),c(e.data)}))}catch(e){return Promise.reject(e)}},type:"submit",style:G},o.a.createElement(ee,{style:K}),"Search Github profiles"),o.a.createElement(u.a,{size:70,color:"#399D8B",loading:l}),a&&o.a.createElement("div",{style:q},o.a.createElement("img",{style:J,src:a.avatar_url,alt:"github avatar"}),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("span",{style:U},"Name: "),o.a.createElement("span",null,a.name)),o.a.createElement("p",null,o.a.createElement("span",{style:U},"Repos: "),o.a.createElement("span",null,a.public_repos)))))};te.propTypes={searchInput:L.string};var re=function(e){var t=e.text,r=e.searchInput;return o.a.createElement("div",{style:V},o.a.createElement(X,{text:t}),o.a.createElement(te,{searchInput:r}))};re.propTypes={searchInput:L.string,text:L.string};re.propTypes={searchInput:L.string,text:L.string,state:L.shape({isAuthenticated:L.bool,token:L.string,username:L.string,role:L.string,errorMessage:L.string})};var ne=function(e){var t=e.text,r=e.searchInput;return o.a.createElement(re,{text:t,searchInput:r})},oe=(r(44),function(){return o.a.createElement(ne,null)});c.a.render(o.a.createElement(oe,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a3eba932.chunk.js.map