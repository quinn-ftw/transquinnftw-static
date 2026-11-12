const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TourMap-BhHu4ul3.js","assets/index.es-trzSlf0J.js","assets/tourColors-PTRzFvk1.js","assets/format-BShlYbJy.js","assets/GalleryPage-CuaeaoTT.js","assets/base-url-DlJmJWiP.js","assets/RatesPage-B8zzIF-7.js","assets/RatesTable-DcudmeaE.js","assets/TourPage-DnluV7Wj.js","assets/TouringOptIn-5QarZln9.js","assets/client-Cjg1XvbA.js","assets/WriteOutageNotice-CT8Bjivk.js","assets/circle-alert-2nX0nLA0.js","assets/loader-DC59dBk5.js","assets/ContactModal-Cqt7IcAj.js","assets/ActivityChecklist-DhCuM_OY.js","assets/phone-BQxk50ay.js","assets/arrow-left-C_IAQEAv.js","assets/parseISO-DcdnS0v5.js","assets/plane-BkwP_VVo.js","assets/AboutPage-DxxarOKJ.js","assets/useSpecialtiesData--QG6i0D4.js","assets/BookingPage-CWbg4L5c.js","assets/MessageCircleIcon-CaVWE6wK.js","assets/BookingForm-CeSxZfob.js","assets/ContactPage-Bt23RS79.js","assets/LinksPage-QXou8Dc_.js","assets/external-link-BFE3082O.js","assets/DestinationsPage-By-JLb7m.js","assets/useDestinationsData-DqOIe6C9.js","assets/usePageIllustrations-D3P9Ia7w.js","assets/DestinationPage-BREQ-zjU.js","assets/PageIllustration-BELAFJXe.js","assets/calendar-DM8FF6sa.js","assets/SpecialtiesPage-BIhI27tl.js","assets/sparkles-Bu3F7pi2.js","assets/SpecialtyCategoryPage-SAzjJG9d.js","assets/SpecialtyPage-CMgOCZHU.js","assets/EtiquettePage-TV4DVh7E.js","assets/DuosPage-CCvitADy.js","assets/ShopPage-C5_Svdg_.js","assets/SoldOverlay-iWNDzoi1.js","assets/ShopDetailPage-CQ2ejWqJ.js","assets/FmtyPage-CJR1wLFi.js","assets/MySchedulePage-BrOR1PY5.js","assets/TourCincinnatiPage-BW23IBXH.js","assets/TourLandingPage-DAlSabCd.js","assets/useStructuredData-DB2DA_6P.js","assets/PseoEscortsDispatcher-Dq8vK5sC.js","assets/PseoPageShell-BUR7zHuf.js","assets/PseoTermPage-CS1hSgS5.js","assets/PseoSitemapPage-DPVBcbmx.js"])))=>i.map(i=>d[i]);
var _k=Object.defineProperty;var $k=(e,a,i)=>a in e?_k(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i;var Dn=(e,a,i)=>$k(e,typeof a!="symbol"?a+"":a,i);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Tk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uf={exports:{}},rs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky;function jk(){if(ky)return rs;ky=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(o,l,u){var m=null;if(u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:e,type:o,key:m,ref:l!==void 0?l:null,props:u}}return rs.Fragment=a,rs.jsx=i,rs.jsxs=i,rs}var _y;function Ck(){return _y||(_y=1,Uf.exports=jk()),Uf.exports}var c=Ck(),Ff={exports:{}},is={},Hf={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $y;function Ak(){return $y||($y=1,(function(e){function a(I,re){var ue=I.length;I.push(re);e:for(;0<ue;){var he=ue-1>>>1,ke=I[he];if(0<l(ke,re))I[he]=re,I[ue]=ke,ue=he;else break e}}function i(I){return I.length===0?null:I[0]}function o(I){if(I.length===0)return null;var re=I[0],ue=I.pop();if(ue!==re){I[0]=ue;e:for(var he=0,ke=I.length,N=ke>>>1;he<N;){var V=2*(he+1)-1,ne=I[V],se=V+1,Te=I[se];if(0>l(ne,ue))se<ke&&0>l(Te,ne)?(I[he]=Te,I[se]=ue,he=se):(I[he]=ne,I[V]=ue,he=V);else if(se<ke&&0>l(Te,ue))I[he]=Te,I[se]=ue,he=se;else break e}}return re}function l(I,re){var ue=I.sortIndex-re.sortIndex;return ue!==0?ue:I.id-re.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var m=Date,p=m.now();e.unstable_now=function(){return m.now()-p}}var g=[],h=[],v=1,x=null,S=3,_=!1,C=!1,T=!1,A=!1,$=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function B(I){for(var re=i(h);re!==null;){if(re.callback===null)o(h);else if(re.startTime<=I)o(h),re.sortIndex=re.expirationTime,a(g,re);else break;re=i(h)}}function j(I){if(T=!1,B(I),!C)if(i(g)!==null)C=!0,R||(R=!0,ie());else{var re=i(h);re!==null&&_e(j,re.startTime-I)}}var R=!1,z=-1,U=5,ae=-1;function Y(){return A?!0:!(e.unstable_now()-ae<U)}function Q(){if(A=!1,R){var I=e.unstable_now();ae=I;var re=!0;try{e:{C=!1,T&&(T=!1,M(z),z=-1),_=!0;var ue=S;try{t:{for(B(I),x=i(g);x!==null&&!(x.expirationTime>I&&Y());){var he=x.callback;if(typeof he=="function"){x.callback=null,S=x.priorityLevel;var ke=he(x.expirationTime<=I);if(I=e.unstable_now(),typeof ke=="function"){x.callback=ke,B(I),re=!0;break t}x===i(g)&&o(g),B(I)}else o(g);x=i(g)}if(x!==null)re=!0;else{var N=i(h);N!==null&&_e(j,N.startTime-I),re=!1}}break e}finally{x=null,S=ue,_=!1}re=void 0}}finally{re?ie():R=!1}}}var ie;if(typeof E=="function")ie=function(){E(Q)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,X=ve.port2;ve.port1.onmessage=Q,ie=function(){X.postMessage(null)}}else ie=function(){$(Q,0)};function _e(I,re){z=$(function(){I(e.unstable_now())},re)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_next=function(I){switch(S){case 1:case 2:case 3:var re=3;break;default:re=S}var ue=S;S=re;try{return I()}finally{S=ue}},e.unstable_requestPaint=function(){A=!0},e.unstable_runWithPriority=function(I,re){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ue=S;S=I;try{return re()}finally{S=ue}},e.unstable_scheduleCallback=function(I,re,ue){var he=e.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?he+ue:he):ue=he,I){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=ue+ke,I={id:v++,callback:re,priorityLevel:I,startTime:ue,expirationTime:ke,sortIndex:-1},ue>he?(I.sortIndex=ue,a(h,I),i(g)===null&&I===i(h)&&(T?(M(z),z=-1):T=!0,_e(j,ue-he))):(I.sortIndex=ke,a(g,I),C||_||(C=!0,R||(R=!0,ie()))),I},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(I){var re=S;return function(){var ue=S;S=re;try{return I.apply(this,arguments)}finally{S=ue}}}})(Pf)),Pf}var Ty;function Ek(){return Ty||(Ty=1,Hf.exports=Ak()),Hf.exports}var Gf={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function Rk(){if(jy)return Ce;jy=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),m=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function $(N,V,ne){this.props=N,this.context=V,this.refs=A,this.updater=ne||C}$.prototype.isReactComponent={},$.prototype.setState=function(N,V){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,V,"setState")},$.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function M(){}M.prototype=$.prototype;function E(N,V,ne){this.props=N,this.context=V,this.refs=A,this.updater=ne||C}var B=E.prototype=new M;B.constructor=E,T(B,$.prototype),B.isPureReactComponent=!0;var j=Array.isArray;function R(){}var z={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function ae(N,V,ne){var se=ne.ref;return{$$typeof:e,type:N,key:V,ref:se!==void 0?se:null,props:ne}}function Y(N,V){return ae(N.type,V,N.props)}function Q(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function ie(N){var V={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ne){return V[ne]})}var ve=/\/+/g;function X(N,V){return typeof N=="object"&&N!==null&&N.key!=null?ie(""+N.key):V.toString(36)}function _e(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(R,R):(N.status="pending",N.then(function(V){N.status==="pending"&&(N.status="fulfilled",N.value=V)},function(V){N.status==="pending"&&(N.status="rejected",N.reason=V)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function I(N,V,ne,se,Te){var je=typeof N;(je==="undefined"||je==="boolean")&&(N=null);var le=!1;if(N===null)le=!0;else switch(je){case"bigint":case"string":case"number":le=!0;break;case"object":switch(N.$$typeof){case e:case a:le=!0;break;case v:return le=N._init,I(le(N._payload),V,ne,se,Te)}}if(le)return Te=Te(N),le=se===""?"."+X(N,0):se,j(Te)?(ne="",le!=null&&(ne=le.replace(ve,"$&/")+"/"),I(Te,V,ne,"",function(Et){return Et})):Te!=null&&(Q(Te)&&(Te=Y(Te,ne+(Te.key==null||N&&N.key===Te.key?"":(""+Te.key).replace(ve,"$&/")+"/")+le)),V.push(Te)),1;le=0;var De=se===""?".":se+":";if(j(N))for(var Re=0;Re<N.length;Re++)se=N[Re],je=De+X(se,Re),le+=I(se,V,ne,je,Te);else if(Re=_(N),typeof Re=="function")for(N=Re.call(N),Re=0;!(se=N.next()).done;)se=se.value,je=De+X(se,Re++),le+=I(se,V,ne,je,Te);else if(je==="object"){if(typeof N.then=="function")return I(_e(N),V,ne,se,Te);throw V=String(N),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return le}function re(N,V,ne){if(N==null)return N;var se=[],Te=0;return I(N,se,"","",function(je){return V.call(ne,je,Te++)}),se}function ue(N){if(N._status===-1){var V=N._result;V=V(),V.then(function(ne){(N._status===0||N._status===-1)&&(N._status=1,N._result=ne)},function(ne){(N._status===0||N._status===-1)&&(N._status=2,N._result=ne)}),N._status===-1&&(N._status=0,N._result=V)}if(N._status===1)return N._result.default;throw N._result}var he=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ke={map:re,forEach:function(N,V,ne){re(N,function(){V.apply(this,arguments)},ne)},count:function(N){var V=0;return re(N,function(){V++}),V},toArray:function(N){return re(N,function(V){return V})||[]},only:function(N){if(!Q(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return Ce.Activity=x,Ce.Children=ke,Ce.Component=$,Ce.Fragment=i,Ce.Profiler=l,Ce.PureComponent=E,Ce.StrictMode=o,Ce.Suspense=g,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(N){return z.H.useMemoCache(N)}},Ce.cache=function(N){return function(){return N.apply(null,arguments)}},Ce.cacheSignal=function(){return null},Ce.cloneElement=function(N,V,ne){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var se=T({},N.props),Te=N.key;if(V!=null)for(je in V.key!==void 0&&(Te=""+V.key),V)!U.call(V,je)||je==="key"||je==="__self"||je==="__source"||je==="ref"&&V.ref===void 0||(se[je]=V[je]);var je=arguments.length-2;if(je===1)se.children=ne;else if(1<je){for(var le=Array(je),De=0;De<je;De++)le[De]=arguments[De+2];se.children=le}return ae(N.type,Te,se)},Ce.createContext=function(N){return N={$$typeof:m,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},Ce.createElement=function(N,V,ne){var se,Te={},je=null;if(V!=null)for(se in V.key!==void 0&&(je=""+V.key),V)U.call(V,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(Te[se]=V[se]);var le=arguments.length-2;if(le===1)Te.children=ne;else if(1<le){for(var De=Array(le),Re=0;Re<le;Re++)De[Re]=arguments[Re+2];Te.children=De}if(N&&N.defaultProps)for(se in le=N.defaultProps,le)Te[se]===void 0&&(Te[se]=le[se]);return ae(N,je,Te)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(N){return{$$typeof:p,render:N}},Ce.isValidElement=Q,Ce.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:ue}},Ce.memo=function(N,V){return{$$typeof:h,type:N,compare:V===void 0?null:V}},Ce.startTransition=function(N){var V=z.T,ne={};z.T=ne;try{var se=N(),Te=z.S;Te!==null&&Te(ne,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(R,he)}catch(je){he(je)}finally{V!==null&&ne.types!==null&&(V.types=ne.types),z.T=V}},Ce.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Ce.use=function(N){return z.H.use(N)},Ce.useActionState=function(N,V,ne){return z.H.useActionState(N,V,ne)},Ce.useCallback=function(N,V){return z.H.useCallback(N,V)},Ce.useContext=function(N){return z.H.useContext(N)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(N,V){return z.H.useDeferredValue(N,V)},Ce.useEffect=function(N,V){return z.H.useEffect(N,V)},Ce.useEffectEvent=function(N){return z.H.useEffectEvent(N)},Ce.useId=function(){return z.H.useId()},Ce.useImperativeHandle=function(N,V,ne){return z.H.useImperativeHandle(N,V,ne)},Ce.useInsertionEffect=function(N,V){return z.H.useInsertionEffect(N,V)},Ce.useLayoutEffect=function(N,V){return z.H.useLayoutEffect(N,V)},Ce.useMemo=function(N,V){return z.H.useMemo(N,V)},Ce.useOptimistic=function(N,V){return z.H.useOptimistic(N,V)},Ce.useReducer=function(N,V,ne){return z.H.useReducer(N,V,ne)},Ce.useRef=function(N){return z.H.useRef(N)},Ce.useState=function(N){return z.H.useState(N)},Ce.useSyncExternalStore=function(N,V,ne){return z.H.useSyncExternalStore(N,V,ne)},Ce.useTransition=function(){return z.H.useTransition()},Ce.version="19.2.7",Ce}var Cy;function pp(){return Cy||(Cy=1,Gf.exports=Rk()),Gf.exports}var Yf={exports:{}},Ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function zk(){if(Ay)return Ft;Ay=1;var e=pp();function a(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(g,h,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:g,containerInfo:h,implementation:v}}var m=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ft.createPortal=function(g,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(a(299));return u(g,h,null,v)},Ft.flushSync=function(g){var h=m.T,v=o.p;try{if(m.T=null,o.p=2,g)return g()}finally{m.T=h,o.p=v,o.d.f()}},Ft.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(g,h))},Ft.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},Ft.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin),S=typeof h.integrity=="string"?h.integrity:void 0,_=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?o.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:_}):v==="script"&&o.d.X(g,{crossOrigin:x,integrity:S,fetchPriority:_,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ft.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);o.d.M(g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(g)},Ft.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin);o.d.L(g,v,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ft.preloadModule=function(g,h){if(typeof g=="string")if(h){var v=p(h.as,h.crossOrigin);o.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(g)},Ft.requestFormReset=function(g){o.d.r(g)},Ft.unstable_batchedUpdates=function(g,h){return g(h)},Ft.useFormState=function(g,h,v){return m.H.useFormState(g,h,v)},Ft.useFormStatus=function(){return m.H.useHostTransitionStatus()},Ft.version="19.2.7",Ft}var Ey;function Sx(){if(Ey)return Yf.exports;Ey=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),Yf.exports=zk(),Yf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry;function Mk(){if(Ry)return is;Ry=1;var e=Ek(),a=pp(),i=Sx();function o(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function m(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(u(t)!==t)throw Error(o(188))}function h(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(o(188));return n!==t?null:t}for(var r=t,s=n;;){var d=r.return;if(d===null)break;var f=d.alternate;if(f===null){if(s=d.return,s!==null){r=s;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===r)return g(d),t;if(f===s)return g(d),n;f=f.sibling}throw Error(o(188))}if(r.return!==s.return)r=d,s=f;else{for(var y=!1,k=d.child;k;){if(k===r){y=!0,r=d,s=f;break}if(k===s){y=!0,s=d,r=f;break}k=k.sibling}if(!y){for(k=f.child;k;){if(k===r){y=!0,r=f,s=d;break}if(k===s){y=!0,s=f,r=d;break}k=k.sibling}if(!y)throw Error(o(189))}}if(r.alternate!==s)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),E=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),Q=Symbol.iterator;function ie(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Symbol.for("react.client.reference");function X(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ve?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case $:return"Profiler";case A:return"StrictMode";case j:return"Suspense";case R:return"SuspenseList";case ae:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case E:return t.displayName||"Context";case M:return(t._context.displayName||"Context")+".Consumer";case B:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:X(t.type)||"Memo";case U:n=t._payload,t=t._init;try{return X(t(n))}catch{}}return null}var _e=Array.isArray,I=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},he=[],ke=-1;function N(t){return{current:t}}function V(t){0>ke||(t.current=he[ke],he[ke]=null,ke--)}function ne(t,n){ke++,he[ke]=t.current,t.current=n}var se=N(null),Te=N(null),je=N(null),le=N(null);function De(t,n){switch(ne(je,n),ne(Te,t),ne(se,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Yb(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Yb(n),t=Ib(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(se),ne(se,t)}function Re(){V(se),V(Te),V(je)}function Et(t){t.memoizedState!==null&&ne(le,t);var n=se.current,r=Ib(n,t.type);n!==r&&(ne(Te,t),ne(se,r))}function Jn(t){Te.current===t&&(V(se),V(Te)),le.current===t&&(V(le),es._currentValue=ue)}var ln,Wr;function kn(t){if(ln===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);ln=n&&n[1]||"",Wr=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ln+t+Wr}var ea=!1;function _u(t,n){if(!t||ea)return"";ea=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(G){var P=G}Reflect.construct(t,[],ee)}else{try{ee.call()}catch(G){P=G}t.call(ee.prototype)}}else{try{throw Error()}catch(G){P=G}(ee=t())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(G){if(G&&P&&typeof G.stack=="string")return[G.stack,P.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),y=f[0],k=f[1];if(y&&k){var D=y.split(`
`),H=k.split(`
`);for(d=s=0;s<D.length&&!D[s].includes("DetermineComponentFrameRoot");)s++;for(;d<H.length&&!H[d].includes("DetermineComponentFrameRoot");)d++;if(s===D.length||d===H.length)for(s=D.length-1,d=H.length-1;1<=s&&0<=d&&D[s]!==H[d];)d--;for(;1<=s&&0<=d;s--,d--)if(D[s]!==H[d]){if(s!==1||d!==1)do if(s--,d--,0>d||D[s]!==H[d]){var K=`
`+D[s].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=s&&0<=d);break}}}finally{ea=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?kn(r):""}function tw(t,n){switch(t.tag){case 26:case 27:case 5:return kn(t.type);case 16:return kn("Lazy");case 13:return t.child!==n&&n!==null?kn("Suspense Fallback"):kn("Suspense");case 19:return kn("SuspenseList");case 0:case 15:return _u(t.type,!1);case 11:return _u(t.type.render,!1);case 1:return _u(t.type,!0);case 31:return kn("Activity");default:return""}}function kh(t){try{var n="",r=null;do n+=tw(t,r),r=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var $u=Object.prototype.hasOwnProperty,Tu=e.unstable_scheduleCallback,ju=e.unstable_cancelCallback,nw=e.unstable_shouldYield,aw=e.unstable_requestPaint,cn=e.unstable_now,rw=e.unstable_getCurrentPriorityLevel,_h=e.unstable_ImmediatePriority,$h=e.unstable_UserBlockingPriority,Ys=e.unstable_NormalPriority,iw=e.unstable_LowPriority,Th=e.unstable_IdlePriority,ow=e.log,sw=e.unstable_setDisableYieldValue,fo=null,un=null;function Na(t){if(typeof ow=="function"&&sw(t),un&&typeof un.setStrictMode=="function")try{un.setStrictMode(fo,t)}catch{}}var dn=Math.clz32?Math.clz32:uw,lw=Math.log,cw=Math.LN2;function uw(t){return t>>>=0,t===0?32:31-(lw(t)/cw|0)|0}var Is=256,Xs=262144,Ks=4194304;function xr(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ws(t,n,r){var s=t.pendingLanes;if(s===0)return 0;var d=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var k=s&134217727;return k!==0?(s=k&~f,s!==0?d=xr(s):(y&=k,y!==0?d=xr(y):r||(r=k&~t,r!==0&&(d=xr(r))))):(k=s&~f,k!==0?d=xr(k):y!==0?d=xr(y):r||(r=s&~t,r!==0&&(d=xr(r)))),d===0?0:n!==0&&n!==d&&(n&f)===0&&(f=d&-d,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:d}function mo(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function dw(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jh(){var t=Ks;return Ks<<=1,(Ks&62914560)===0&&(Ks=4194304),t}function Cu(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function po(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function fw(t,n,r,s,d,f){var y=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var k=t.entanglements,D=t.expirationTimes,H=t.hiddenUpdates;for(r=y&~r;0<r;){var K=31-dn(r),ee=1<<K;k[K]=0,D[K]=-1;var P=H[K];if(P!==null)for(H[K]=null,K=0;K<P.length;K++){var G=P[K];G!==null&&(G.lane&=-536870913)}r&=~ee}s!==0&&Ch(t,s,0),f!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function Ch(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-dn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|r&261930}function Ah(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var s=31-dn(r),d=1<<s;d&n|t[s]&n&&(t[s]|=n),r&=~d}}function Eh(t,n){var r=n&-n;return r=(r&42)!==0?1:Au(r),(r&(t.suspendedLanes|n))!==0?0:r}function Au(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Eu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Rh(){var t=re.p;return t!==0?t:(t=window.event,t===void 0?32:gy(t.type))}function zh(t,n){var r=re.p;try{return re.p=t,n()}finally{re.p=r}}var La=Math.random().toString(36).slice(2),Lt="__reactFiber$"+La,Zt="__reactProps$"+La,Zr="__reactContainer$"+La,Ru="__reactEvents$"+La,mw="__reactListeners$"+La,pw="__reactHandles$"+La,Mh="__reactResources$"+La,ho="__reactMarker$"+La;function zu(t){delete t[Lt],delete t[Zt],delete t[Ru],delete t[mw],delete t[pw]}function Qr(t){var n=t[Lt];if(n)return n;for(var r=t.parentNode;r;){if(n=r[Zr]||r[Lt]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=ey(t);t!==null;){if(r=t[Lt])return r;t=ey(t)}return n}t=r,r=t.parentNode}return null}function Jr(t){if(t=t[Lt]||t[Zr]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function go(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(o(33))}function ei(t){var n=t[Mh];return n||(n=t[Mh]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Rt(t){t[ho]=!0}var Dh=new Set,Oh={};function vr(t,n){ti(t,n),ti(t+"Capture",n)}function ti(t,n){for(Oh[t]=n,t=0;t<n.length;t++)Dh.add(n[t])}var hw=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nh={},Lh={};function gw(t){return $u.call(Lh,t)?!0:$u.call(Nh,t)?!1:hw.test(t)?Lh[t]=!0:(Nh[t]=!0,!1)}function Zs(t,n,r){if(gw(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Qs(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function ua(t,n,r,s){if(s===null)t.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+s)}}function _n(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bh(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function bw(t,n,r){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return d.call(this)},set:function(y){r=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Mu(t){if(!t._valueTracker){var n=Bh(t)?"checked":"value";t._valueTracker=bw(t,n,""+t[n])}}function qh(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),s="";return t&&(s=Bh(t)?t.checked?"true":"false":t.value),t=s,t!==r?(n.setValue(t),!0):!1}function Js(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var yw=/[\n"\\]/g;function $n(t){return t.replace(yw,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Du(t,n,r,s,d,f,y,k){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+_n(n)):t.value!==""+_n(n)&&(t.value=""+_n(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Ou(t,y,_n(n)):r!=null?Ou(t,y,_n(r)):s!=null&&t.removeAttribute("value"),d==null&&f!=null&&(t.defaultChecked=!!f),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?t.name=""+_n(k):t.removeAttribute("name")}function Vh(t,n,r,s,d,f,y,k){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Mu(t);return}r=r!=null?""+_n(r):"",n=n!=null?""+_n(n):r,k||n===t.value||(t.value=n),t.defaultValue=n}s=s??d,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=k?t.checked:!!s,t.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Mu(t)}function Ou(t,n,r){n==="number"&&Js(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function ni(t,n,r,s){if(t=t.options,n){n={};for(var d=0;d<r.length;d++)n["$"+r[d]]=!0;for(r=0;r<t.length;r++)d=n.hasOwnProperty("$"+t[r].value),t[r].selected!==d&&(t[r].selected=d),d&&s&&(t[r].defaultSelected=!0)}else{for(r=""+_n(r),n=null,d=0;d<t.length;d++){if(t[d].value===r){t[d].selected=!0,s&&(t[d].defaultSelected=!0);return}n!==null||t[d].disabled||(n=t[d])}n!==null&&(n.selected=!0)}}function Uh(t,n,r){if(n!=null&&(n=""+_n(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+_n(r):""}function Fh(t,n,r,s){if(n==null){if(s!=null){if(r!=null)throw Error(o(92));if(_e(s)){if(1<s.length)throw Error(o(93));s=s[0]}r=s}r==null&&(r=""),n=r}r=_n(n),t.defaultValue=r,s=t.textContent,s===r&&s!==""&&s!==null&&(t.value=s),Mu(t)}function ai(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var xw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hh(t,n,r){var s=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,r):typeof r!="number"||r===0||xw.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Ph(t,n,r){if(n!=null&&typeof n!="object")throw Error(o(62));if(t=t.style,r!=null){for(var s in r)!r.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var d in n)s=n[d],n.hasOwnProperty(d)&&r[d]!==s&&Hh(t,d,s)}else for(var f in n)n.hasOwnProperty(f)&&Hh(t,f,n[f])}function Nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ww=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(t){return ww.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function da(){}var Lu=null;function Bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ri=null,ii=null;function Gh(t){var n=Jr(t);if(n&&(t=n.stateNode)){var r=t[Zt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Du(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+$n(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var s=r[n];if(s!==t&&s.form===t.form){var d=s[Zt]||null;if(!d)throw Error(o(90));Du(s,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(n=0;n<r.length;n++)s=r[n],s.form===t.form&&qh(s)}break e;case"textarea":Uh(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&ni(t,!!r.multiple,n,!1)}}}var qu=!1;function Yh(t,n,r){if(qu)return t(n,r);qu=!0;try{var s=t(n);return s}finally{if(qu=!1,(ri!==null||ii!==null)&&(Ul(),ri&&(n=ri,t=ii,ii=ri=null,Gh(n),t)))for(n=0;n<t.length;n++)Gh(t[n])}}function bo(t,n){var r=t.stateNode;if(r===null)return null;var s=r[Zt]||null;if(s===null)return null;r=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(o(231,n,typeof r));return r}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=!1;if(fa)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Vu=!1}var Ba=null,Uu=null,tl=null;function Ih(){if(tl)return tl;var t,n=Uu,r=n.length,s,d="value"in Ba?Ba.value:Ba.textContent,f=d.length;for(t=0;t<r&&n[t]===d[t];t++);var y=r-t;for(s=1;s<=y&&n[r-s]===d[f-s];s++);return tl=d.slice(t,1<s?1-s:void 0)}function nl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function Xh(){return!1}function Qt(t){function n(r,s,d,f,y){this._reactName=r,this._targetInst=d,this.type=s,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(r=t[k],this[k]=r?r(f):f[k]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:Xh,this.isPropagationStopped=Xh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Qt(wr),xo=x({},wr,{view:0,detail:0}),Sw=Qt(xo),Fu,Hu,vo,il=x({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(Fu=t.screenX-vo.screenX,Hu=t.screenY-vo.screenY):Hu=Fu=0,vo=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),Kh=Qt(il),kw=x({},il,{dataTransfer:0}),_w=Qt(kw),$w=x({},xo,{relatedTarget:0}),Pu=Qt($w),Tw=x({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),jw=Qt(Tw),Cw=x({},wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Aw=Qt(Cw),Ew=x({},wr,{data:0}),Wh=Qt(Ew),Rw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dw(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Mw[t])?!!n[t]:!1}function Gu(){return Dw}var Ow=x({},xo,{key:function(t){if(t.key){var n=Rw[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nw=Qt(Ow),Lw=x({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=Qt(Lw),Bw=x({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),qw=Qt(Bw),Vw=x({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uw=Qt(Vw),Fw=x({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hw=Qt(Fw),Pw=x({},wr,{newState:0,oldState:0}),Gw=Qt(Pw),Yw=[9,13,27,32],Yu=fa&&"CompositionEvent"in window,wo=null;fa&&"documentMode"in document&&(wo=document.documentMode);var Iw=fa&&"TextEvent"in window&&!wo,Qh=fa&&(!Yu||wo&&8<wo&&11>=wo),Jh=" ",e0=!1;function t0(t,n){switch(t){case"keyup":return Yw.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oi=!1;function Xw(t,n){switch(t){case"compositionend":return n0(n);case"keypress":return n.which!==32?null:(e0=!0,Jh);case"textInput":return t=n.data,t===Jh&&e0?null:t;default:return null}}function Kw(t,n){if(oi)return t==="compositionend"||!Yu&&t0(t,n)?(t=Ih(),tl=Uu=Ba=null,oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qh&&n.locale!=="ko"?null:n.data;default:return null}}var Ww={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function a0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ww[t.type]:n==="textarea"}function r0(t,n,r,s){ri?ii?ii.push(s):ii=[s]:ri=s,n=Xl(n,"onChange"),0<n.length&&(r=new rl("onChange","change",null,r,s),t.push({event:r,listeners:n}))}var So=null,ko=null;function Zw(t){Vb(t,0)}function ol(t){var n=go(t);if(qh(n))return t}function i0(t,n){if(t==="change")return n}var o0=!1;if(fa){var Iu;if(fa){var Xu="oninput"in document;if(!Xu){var s0=document.createElement("div");s0.setAttribute("oninput","return;"),Xu=typeof s0.oninput=="function"}Iu=Xu}else Iu=!1;o0=Iu&&(!document.documentMode||9<document.documentMode)}function l0(){So&&(So.detachEvent("onpropertychange",c0),ko=So=null)}function c0(t){if(t.propertyName==="value"&&ol(ko)){var n=[];r0(n,ko,t,Bu(t)),Yh(Zw,n)}}function Qw(t,n,r){t==="focusin"?(l0(),So=n,ko=r,So.attachEvent("onpropertychange",c0)):t==="focusout"&&l0()}function Jw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(ko)}function eS(t,n){if(t==="click")return ol(n)}function tS(t,n){if(t==="input"||t==="change")return ol(n)}function nS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fn=typeof Object.is=="function"?Object.is:nS;function _o(t,n){if(fn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),s=Object.keys(n);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var d=r[s];if(!$u.call(n,d)||!fn(t[d],n[d]))return!1}return!0}function u0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function d0(t,n){var r=u0(t);t=0;for(var s;r;){if(r.nodeType===3){if(s=t+r.textContent.length,t<=n&&s>=n)return{node:r,offset:n-t};t=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=u0(r)}}function f0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?f0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function m0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Js(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=Js(t.document)}return n}function Ku(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var aS=fa&&"documentMode"in document&&11>=document.documentMode,si=null,Wu=null,$o=null,Zu=!1;function p0(t,n,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Zu||si==null||si!==Js(s)||(s=si,"selectionStart"in s&&Ku(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),$o&&_o($o,s)||($o=s,s=Xl(Wu,"onSelect"),0<s.length&&(n=new rl("onSelect","select",null,n,r),t.push({event:n,listeners:s}),n.target=si)))}function Sr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var li={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},Qu={},h0={};fa&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function kr(t){if(Qu[t])return Qu[t];if(!li[t])return t;var n=li[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in h0)return Qu[t]=n[r];return t}var g0=kr("animationend"),b0=kr("animationiteration"),y0=kr("animationstart"),rS=kr("transitionrun"),iS=kr("transitionstart"),oS=kr("transitioncancel"),x0=kr("transitionend"),v0=new Map,Ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ju.push("scrollEnd");function qn(t,n){v0.set(t,n),vr(n,[t])}var sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Tn=[],ci=0,ed=0;function ll(){for(var t=ci,n=ed=ci=0;n<t;){var r=Tn[n];Tn[n++]=null;var s=Tn[n];Tn[n++]=null;var d=Tn[n];Tn[n++]=null;var f=Tn[n];if(Tn[n++]=null,s!==null&&d!==null){var y=s.pending;y===null?d.next=d:(d.next=y.next,y.next=d),s.pending=d}f!==0&&w0(r,d,f)}}function cl(t,n,r,s){Tn[ci++]=t,Tn[ci++]=n,Tn[ci++]=r,Tn[ci++]=s,ed|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function td(t,n,r,s){return cl(t,n,r,s),ul(t)}function _r(t,n){return cl(t,null,null,n),ul(t)}function w0(t,n,r){t.lanes|=r;var s=t.alternate;s!==null&&(s.lanes|=r);for(var d=!1,f=t.return;f!==null;)f.childLanes|=r,s=f.alternate,s!==null&&(s.childLanes|=r),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(d=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,d&&n!==null&&(d=31-dn(r),t=f.hiddenUpdates,s=t[d],s===null?t[d]=[n]:s.push(n),n.lane=r|536870912),f):null}function ul(t){if(50<Io)throw Io=0,df=null,Error(o(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ui={};function sS(t,n,r,s){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,n,r,s){return new sS(t,n,r,s)}function nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,n){var r=t.alternate;return r===null?(r=mn(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function S0(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,r,s,d,f){var y=0;if(s=t,typeof t=="function")nd(t)&&(y=1);else if(typeof t=="string")y=fk(t,r,se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case ae:return t=mn(31,r,n,d),t.elementType=ae,t.lanes=f,t;case T:return $r(r.children,d,f,n);case A:y=8,d|=24;break;case $:return t=mn(12,r,n,d|2),t.elementType=$,t.lanes=f,t;case j:return t=mn(13,r,n,d),t.elementType=j,t.lanes=f,t;case R:return t=mn(19,r,n,d),t.elementType=R,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:y=10;break e;case M:y=9;break e;case B:y=11;break e;case z:y=14;break e;case U:y=16,s=null;break e}y=29,r=Error(o(130,t===null?"null":typeof t,"")),s=null}return n=mn(y,r,n,d),n.elementType=t,n.type=s,n.lanes=f,n}function $r(t,n,r,s){return t=mn(7,t,s,n),t.lanes=r,t}function ad(t,n,r){return t=mn(6,t,null,n),t.lanes=r,t}function k0(t){var n=mn(18,null,null,0);return n.stateNode=t,n}function rd(t,n,r){return n=mn(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var _0=new WeakMap;function jn(t,n){if(typeof t=="object"&&t!==null){var r=_0.get(t);return r!==void 0?r:(n={value:t,source:n,stack:kh(n)},_0.set(t,n),n)}return{value:t,source:n,stack:kh(n)}}var di=[],fi=0,fl=null,To=0,Cn=[],An=0,qa=null,ta=1,na="";function pa(t,n){di[fi++]=To,di[fi++]=fl,fl=t,To=n}function $0(t,n,r){Cn[An++]=ta,Cn[An++]=na,Cn[An++]=qa,qa=t;var s=ta;t=na;var d=32-dn(s)-1;s&=~(1<<d),r+=1;var f=32-dn(n)+d;if(30<f){var y=d-d%5;f=(s&(1<<y)-1).toString(32),s>>=y,d-=y,ta=1<<32-dn(n)+d|r<<d|s,na=f+t}else ta=1<<f|r<<d|s,na=t}function id(t){t.return!==null&&(pa(t,1),$0(t,1,0))}function od(t){for(;t===fl;)fl=di[--fi],di[fi]=null,To=di[--fi],di[fi]=null;for(;t===qa;)qa=Cn[--An],Cn[An]=null,na=Cn[--An],Cn[An]=null,ta=Cn[--An],Cn[An]=null}function T0(t,n){Cn[An++]=ta,Cn[An++]=na,Cn[An++]=qa,ta=n.id,na=n.overflow,qa=t}var Bt=null,st=null,Ue=!1,Va=null,En=!1,sd=Error(o(519));function Ua(t){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jo(jn(n,t)),sd}function j0(t){var n=t.stateNode,r=t.type,s=t.memoizedProps;switch(n[Lt]=t,n[Zt]=s,r){case"dialog":Be("cancel",n),Be("close",n);break;case"iframe":case"object":case"embed":Be("load",n);break;case"video":case"audio":for(r=0;r<Ko.length;r++)Be(Ko[r],n);break;case"source":Be("error",n);break;case"img":case"image":case"link":Be("error",n),Be("load",n);break;case"details":Be("toggle",n);break;case"input":Be("invalid",n),Vh(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Be("invalid",n);break;case"textarea":Be("invalid",n),Fh(n,s.value,s.defaultValue,s.children)}r=s.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||s.suppressHydrationWarning===!0||Pb(n.textContent,r)?(s.popover!=null&&(Be("beforetoggle",n),Be("toggle",n)),s.onScroll!=null&&Be("scroll",n),s.onScrollEnd!=null&&Be("scrollend",n),s.onClick!=null&&(n.onclick=da),n=!0):n=!1,n||Ua(t,!0)}function C0(t){for(Bt=t.return;Bt;)switch(Bt.tag){case 5:case 31:case 13:En=!1;return;case 27:case 3:En=!0;return;default:Bt=Bt.return}}function mi(t){if(t!==Bt)return!1;if(!Ue)return C0(t),Ue=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Tf(t.type,t.memoizedProps)),r=!r),r&&st&&Ua(t),C0(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));st=Jb(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));st=Jb(t)}else n===27?(n=st,tr(t.type)?(t=Rf,Rf=null,st=t):st=n):st=Bt?zn(t.stateNode.nextSibling):null;return!0}function Tr(){st=Bt=null,Ue=!1}function ld(){var t=Va;return t!==null&&(nn===null?nn=t:nn.push.apply(nn,t),Va=null),t}function jo(t){Va===null?Va=[t]:Va.push(t)}var cd=N(null),jr=null,ha=null;function Fa(t,n,r){ne(cd,n._currentValue),n._currentValue=r}function ga(t){t._currentValue=cd.current,V(cd)}function ud(t,n,r){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===r)break;t=t.return}}function dd(t,n,r,s){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var f=d.dependencies;if(f!==null){var y=d.child;f=f.firstContext;e:for(;f!==null;){var k=f;f=d;for(var D=0;D<n.length;D++)if(k.context===n[D]){f.lanes|=r,k=f.alternate,k!==null&&(k.lanes|=r),ud(f.return,r,t),s||(y=null);break e}f=k.next}}else if(d.tag===18){if(y=d.return,y===null)throw Error(o(341));y.lanes|=r,f=y.alternate,f!==null&&(f.lanes|=r),ud(y,r,t),y=null}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===t){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}}function pi(t,n,r,s){t=null;for(var d=n,f=!1;d!==null;){if(!f){if((d.flags&524288)!==0)f=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var y=d.alternate;if(y===null)throw Error(o(387));if(y=y.memoizedProps,y!==null){var k=d.type;fn(d.pendingProps.value,y.value)||(t!==null?t.push(k):t=[k])}}else if(d===le.current){if(y=d.alternate,y===null)throw Error(o(387));y.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(es):t=[es])}d=d.return}t!==null&&dd(n,t,r,s),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){jr=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qt(t){return A0(jr,t)}function pl(t,n){return jr===null&&Cr(t),A0(t,n)}function A0(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},ha===null){if(t===null)throw Error(o(308));ha=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ha=ha.next=n;return r}var lS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},cS=e.unstable_scheduleCallback,uS=e.unstable_NormalPriority,vt={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fd(){return{controller:new lS,data:new Map,refCount:0}}function Co(t){t.refCount--,t.refCount===0&&cS(uS,function(){t.controller.abort()})}var Ao=null,md=0,hi=0,gi=null;function dS(t,n){if(Ao===null){var r=Ao=[];md=0,hi=bf(),gi={status:"pending",value:void 0,then:function(s){r.push(s)}}}return md++,n.then(E0,E0),n}function E0(){if(--md===0&&Ao!==null){gi!==null&&(gi.status="fulfilled");var t=Ao;Ao=null,hi=0,gi=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fS(t,n){var r=[],s={status:"pending",value:null,reason:null,then:function(d){r.push(d)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var d=0;d<r.length;d++)(0,r[d])(n)},function(d){for(s.status="rejected",s.reason=d,d=0;d<r.length;d++)(0,r[d])(void 0)}),s}var R0=I.S;I.S=function(t,n){pb=cn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&dS(t,n),R0!==null&&R0(t,n)};var Ar=N(null);function pd(){var t=Ar.current;return t!==null?t:rt.pooledCache}function hl(t,n){n===null?ne(Ar,Ar.current):ne(Ar,n.pool)}function z0(){var t=pd();return t===null?null:{parent:vt._currentValue,pool:t}}var bi=Error(o(460)),hd=Error(o(474)),gl=Error(o(542)),bl={then:function(){}};function M0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function D0(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(da,da),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,N0(t),t;default:if(typeof n.status=="string")n.then(da,da);else{if(t=rt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var d=n;d.status="fulfilled",d.value=s}},function(s){if(n.status==="pending"){var d=n;d.status="rejected",d.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,N0(t),t}throw Rr=n,bi}}function Er(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Rr=r,bi):r}}var Rr=null;function O0(){if(Rr===null)throw Error(o(459));var t=Rr;return Rr=null,t}function N0(t){if(t===bi||t===gl)throw Error(o(483))}var yi=null,Eo=0;function yl(t){var n=Eo;return Eo+=1,yi===null&&(yi=[]),D0(yi,t,n)}function Ro(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function xl(t,n){throw n.$$typeof===S?Error(o(525)):(t=Object.prototype.toString.call(n),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function L0(t){function n(q,L){if(t){var F=q.deletions;F===null?(q.deletions=[L],q.flags|=16):F.push(L)}}function r(q,L){if(!t)return null;for(;L!==null;)n(q,L),L=L.sibling;return null}function s(q){for(var L=new Map;q!==null;)q.key!==null?L.set(q.key,q):L.set(q.index,q),q=q.sibling;return L}function d(q,L){return q=ma(q,L),q.index=0,q.sibling=null,q}function f(q,L,F){return q.index=F,t?(F=q.alternate,F!==null?(F=F.index,F<L?(q.flags|=67108866,L):F):(q.flags|=67108866,L)):(q.flags|=1048576,L)}function y(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function k(q,L,F,J){return L===null||L.tag!==6?(L=ad(F,q.mode,J),L.return=q,L):(L=d(L,F),L.return=q,L)}function D(q,L,F,J){var xe=F.type;return xe===T?K(q,L,F.props.children,J,F.key):L!==null&&(L.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===U&&Er(xe)===L.type)?(L=d(L,F.props),Ro(L,F),L.return=q,L):(L=dl(F.type,F.key,F.props,null,q.mode,J),Ro(L,F),L.return=q,L)}function H(q,L,F,J){return L===null||L.tag!==4||L.stateNode.containerInfo!==F.containerInfo||L.stateNode.implementation!==F.implementation?(L=rd(F,q.mode,J),L.return=q,L):(L=d(L,F.children||[]),L.return=q,L)}function K(q,L,F,J,xe){return L===null||L.tag!==7?(L=$r(F,q.mode,J,xe),L.return=q,L):(L=d(L,F),L.return=q,L)}function ee(q,L,F){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=ad(""+L,q.mode,F),L.return=q,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case _:return F=dl(L.type,L.key,L.props,null,q.mode,F),Ro(F,L),F.return=q,F;case C:return L=rd(L,q.mode,F),L.return=q,L;case U:return L=Er(L),ee(q,L,F)}if(_e(L)||ie(L))return L=$r(L,q.mode,F,null),L.return=q,L;if(typeof L.then=="function")return ee(q,yl(L),F);if(L.$$typeof===E)return ee(q,pl(q,L),F);xl(q,L)}return null}function P(q,L,F,J){var xe=L!==null?L.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return xe!==null?null:k(q,L,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case _:return F.key===xe?D(q,L,F,J):null;case C:return F.key===xe?H(q,L,F,J):null;case U:return F=Er(F),P(q,L,F,J)}if(_e(F)||ie(F))return xe!==null?null:K(q,L,F,J,null);if(typeof F.then=="function")return P(q,L,yl(F),J);if(F.$$typeof===E)return P(q,L,pl(q,F),J);xl(q,F)}return null}function G(q,L,F,J,xe){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return q=q.get(F)||null,k(L,q,""+J,xe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case _:return q=q.get(J.key===null?F:J.key)||null,D(L,q,J,xe);case C:return q=q.get(J.key===null?F:J.key)||null,H(L,q,J,xe);case U:return J=Er(J),G(q,L,F,J,xe)}if(_e(J)||ie(J))return q=q.get(F)||null,K(L,q,J,xe,null);if(typeof J.then=="function")return G(q,L,F,yl(J),xe);if(J.$$typeof===E)return G(q,L,F,pl(L,J),xe);xl(L,J)}return null}function fe(q,L,F,J){for(var xe=null,Pe=null,pe=L,ze=L=0,Ve=null;pe!==null&&ze<F.length;ze++){pe.index>ze?(Ve=pe,pe=null):Ve=pe.sibling;var Ge=P(q,pe,F[ze],J);if(Ge===null){pe===null&&(pe=Ve);break}t&&pe&&Ge.alternate===null&&n(q,pe),L=f(Ge,L,ze),Pe===null?xe=Ge:Pe.sibling=Ge,Pe=Ge,pe=Ve}if(ze===F.length)return r(q,pe),Ue&&pa(q,ze),xe;if(pe===null){for(;ze<F.length;ze++)pe=ee(q,F[ze],J),pe!==null&&(L=f(pe,L,ze),Pe===null?xe=pe:Pe.sibling=pe,Pe=pe);return Ue&&pa(q,ze),xe}for(pe=s(pe);ze<F.length;ze++)Ve=G(pe,q,ze,F[ze],J),Ve!==null&&(t&&Ve.alternate!==null&&pe.delete(Ve.key===null?ze:Ve.key),L=f(Ve,L,ze),Pe===null?xe=Ve:Pe.sibling=Ve,Pe=Ve);return t&&pe.forEach(function(or){return n(q,or)}),Ue&&pa(q,ze),xe}function Se(q,L,F,J){if(F==null)throw Error(o(151));for(var xe=null,Pe=null,pe=L,ze=L=0,Ve=null,Ge=F.next();pe!==null&&!Ge.done;ze++,Ge=F.next()){pe.index>ze?(Ve=pe,pe=null):Ve=pe.sibling;var or=P(q,pe,Ge.value,J);if(or===null){pe===null&&(pe=Ve);break}t&&pe&&or.alternate===null&&n(q,pe),L=f(or,L,ze),Pe===null?xe=or:Pe.sibling=or,Pe=or,pe=Ve}if(Ge.done)return r(q,pe),Ue&&pa(q,ze),xe;if(pe===null){for(;!Ge.done;ze++,Ge=F.next())Ge=ee(q,Ge.value,J),Ge!==null&&(L=f(Ge,L,ze),Pe===null?xe=Ge:Pe.sibling=Ge,Pe=Ge);return Ue&&pa(q,ze),xe}for(pe=s(pe);!Ge.done;ze++,Ge=F.next())Ge=G(pe,q,ze,Ge.value,J),Ge!==null&&(t&&Ge.alternate!==null&&pe.delete(Ge.key===null?ze:Ge.key),L=f(Ge,L,ze),Pe===null?xe=Ge:Pe.sibling=Ge,Pe=Ge);return t&&pe.forEach(function(kk){return n(q,kk)}),Ue&&pa(q,ze),xe}function nt(q,L,F,J){if(typeof F=="object"&&F!==null&&F.type===T&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case _:e:{for(var xe=F.key;L!==null;){if(L.key===xe){if(xe=F.type,xe===T){if(L.tag===7){r(q,L.sibling),J=d(L,F.props.children),J.return=q,q=J;break e}}else if(L.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===U&&Er(xe)===L.type){r(q,L.sibling),J=d(L,F.props),Ro(J,F),J.return=q,q=J;break e}r(q,L);break}else n(q,L);L=L.sibling}F.type===T?(J=$r(F.props.children,q.mode,J,F.key),J.return=q,q=J):(J=dl(F.type,F.key,F.props,null,q.mode,J),Ro(J,F),J.return=q,q=J)}return y(q);case C:e:{for(xe=F.key;L!==null;){if(L.key===xe)if(L.tag===4&&L.stateNode.containerInfo===F.containerInfo&&L.stateNode.implementation===F.implementation){r(q,L.sibling),J=d(L,F.children||[]),J.return=q,q=J;break e}else{r(q,L);break}else n(q,L);L=L.sibling}J=rd(F,q.mode,J),J.return=q,q=J}return y(q);case U:return F=Er(F),nt(q,L,F,J)}if(_e(F))return fe(q,L,F,J);if(ie(F)){if(xe=ie(F),typeof xe!="function")throw Error(o(150));return F=xe.call(F),Se(q,L,F,J)}if(typeof F.then=="function")return nt(q,L,yl(F),J);if(F.$$typeof===E)return nt(q,L,pl(q,F),J);xl(q,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,L!==null&&L.tag===6?(r(q,L.sibling),J=d(L,F),J.return=q,q=J):(r(q,L),J=ad(F,q.mode,J),J.return=q,q=J),y(q)):r(q,L)}return function(q,L,F,J){try{Eo=0;var xe=nt(q,L,F,J);return yi=null,xe}catch(pe){if(pe===bi||pe===gl)throw pe;var Pe=mn(29,pe,null,q.mode);return Pe.lanes=J,Pe.return=q,Pe}finally{}}}var zr=L0(!0),B0=L0(!1),Ha=!1;function gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bd(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ga(t,n,r){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ye&2)!==0){var d=s.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),s.pending=n,n=ul(t),w0(t,null,r),n}return cl(t,s,n,r),ul(t)}function zo(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,r|=s,n.lanes=r,Ah(t,r)}}function yd(t,n){var r=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var d=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?d=f=y:f=f.next=y,r=r.next}while(r!==null);f===null?d=f=n:f=f.next=n}else d=f=n;r={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var xd=!1;function Mo(){if(xd){var t=gi;if(t!==null)throw t}}function Do(t,n,r,s){xd=!1;var d=t.updateQueue;Ha=!1;var f=d.firstBaseUpdate,y=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var D=k,H=D.next;D.next=null,y===null?f=H:y.next=H,y=D;var K=t.alternate;K!==null&&(K=K.updateQueue,k=K.lastBaseUpdate,k!==y&&(k===null?K.firstBaseUpdate=H:k.next=H,K.lastBaseUpdate=D))}if(f!==null){var ee=d.baseState;y=0,K=H=D=null,k=f;do{var P=k.lane&-536870913,G=P!==k.lane;if(G?(qe&P)===P:(s&P)===P){P!==0&&P===hi&&(xd=!0),K!==null&&(K=K.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var fe=t,Se=k;P=n;var nt=r;switch(Se.tag){case 1:if(fe=Se.payload,typeof fe=="function"){ee=fe.call(nt,ee,P);break e}ee=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=Se.payload,P=typeof fe=="function"?fe.call(nt,ee,P):fe,P==null)break e;ee=x({},ee,P);break e;case 2:Ha=!0}}P=k.callback,P!==null&&(t.flags|=64,G&&(t.flags|=8192),G=d.callbacks,G===null?d.callbacks=[P]:G.push(P))}else G={lane:P,tag:k.tag,payload:k.payload,callback:k.callback,next:null},K===null?(H=K=G,D=ee):K=K.next=G,y|=P;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;G=k,k=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);K===null&&(D=ee),d.baseState=D,d.firstBaseUpdate=H,d.lastBaseUpdate=K,f===null&&(d.shared.lanes=0),Wa|=y,t.lanes=y,t.memoizedState=ee}}function q0(t,n){if(typeof t!="function")throw Error(o(191,t));t.call(n)}function V0(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)q0(r[t],n)}var xi=N(null),vl=N(0);function U0(t,n){t=$a,ne(vl,t),ne(xi,n),$a=t|n.baseLanes}function vd(){ne(vl,$a),ne(xi,xi.current)}function wd(){$a=vl.current,V(xi),V(vl)}var pn=N(null),Rn=null;function Ya(t){var n=t.alternate;ne(yt,yt.current&1),ne(pn,t),Rn===null&&(n===null||xi.current!==null||n.memoizedState!==null)&&(Rn=t)}function Sd(t){ne(yt,yt.current),ne(pn,t),Rn===null&&(Rn=t)}function F0(t){t.tag===22?(ne(yt,yt.current),ne(pn,t),Rn===null&&(Rn=t)):Ia()}function Ia(){ne(yt,yt.current),ne(pn,pn.current)}function hn(t){V(pn),Rn===t&&(Rn=null),V(yt)}var yt=N(0);function wl(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Af(r)||Ef(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ba=0,Ee=null,et=null,wt=null,Sl=!1,vi=!1,Mr=!1,kl=0,Oo=0,wi=null,mS=0;function pt(){throw Error(o(321))}function kd(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!fn(t[r],n[r]))return!1;return!0}function _d(t,n,r,s,d,f){return ba=f,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?$g:qd,Mr=!1,f=r(s,d),Mr=!1,vi&&(f=P0(n,r,s,d)),H0(t),f}function H0(t){I.H=Bo;var n=et!==null&&et.next!==null;if(ba=0,wt=et=Ee=null,Sl=!1,Oo=0,wi=null,n)throw Error(o(300));t===null||St||(t=t.dependencies,t!==null&&ml(t)&&(St=!0))}function P0(t,n,r,s){Ee=t;var d=0;do{if(vi&&(wi=null),Oo=0,vi=!1,25<=d)throw Error(o(301));if(d+=1,wt=et=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Tg,f=n(r,s)}while(vi);return f}function pS(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?No(n):n,t=t.useState()[0],(et!==null?et.memoizedState:null)!==t&&(Ee.flags|=1024),n}function $d(){var t=kl!==0;return kl=0,t}function Td(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function jd(t){if(Sl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Sl=!1}ba=0,wt=et=Ee=null,vi=!1,Oo=kl=0,wi=null}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ee.memoizedState=wt=t:wt=wt.next=t,wt}function xt(){if(et===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var n=wt===null?Ee.memoizedState:wt.next;if(n!==null)wt=n,et=t;else{if(t===null)throw Ee.alternate===null?Error(o(467)):Error(o(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},wt===null?Ee.memoizedState=wt=t:wt=wt.next=t}return wt}function _l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(t){var n=Oo;return Oo+=1,wi===null&&(wi=[]),t=D0(wi,t,n),n=Ee,(wt===null?n.memoizedState:wt.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?$g:qd),t}function $l(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return No(t);if(t.$$typeof===E)return qt(t)}throw Error(o(438,String(t)))}function Cd(t){var n=null,r=Ee.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var s=Ee.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(d){return d.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=_l(),Ee.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),s=0;s<t;s++)r[s]=Y;return n.index++,r}function ya(t,n){return typeof n=="function"?n(t):n}function Tl(t){var n=xt();return Ad(n,et,t)}function Ad(t,n,r){var s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=r;var d=t.baseQueue,f=s.pending;if(f!==null){if(d!==null){var y=d.next;d.next=f.next,f.next=y}n.baseQueue=d=f,s.pending=null}if(f=t.baseState,d===null)t.memoizedState=f;else{n=d.next;var k=y=null,D=null,H=n,K=!1;do{var ee=H.lane&-536870913;if(ee!==H.lane?(qe&ee)===ee:(ba&ee)===ee){var P=H.revertLane;if(P===0)D!==null&&(D=D.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),ee===hi&&(K=!0);else if((ba&P)===P){H=H.next,P===hi&&(K=!0);continue}else ee={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},D===null?(k=D=ee,y=f):D=D.next=ee,Ee.lanes|=P,Wa|=P;ee=H.action,Mr&&r(f,ee),f=H.hasEagerState?H.eagerState:r(f,ee)}else P={lane:ee,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},D===null?(k=D=P,y=f):D=D.next=P,Ee.lanes|=ee,Wa|=ee;H=H.next}while(H!==null&&H!==n);if(D===null?y=f:D.next=k,!fn(f,t.memoizedState)&&(St=!0,K&&(r=gi,r!==null)))throw r;t.memoizedState=f,t.baseState=y,t.baseQueue=D,s.lastRenderedState=f}return d===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ed(t){var n=xt(),r=n.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=t;var s=r.dispatch,d=r.pending,f=n.memoizedState;if(d!==null){r.pending=null;var y=d=d.next;do f=t(f,y.action),y=y.next;while(y!==d);fn(f,n.memoizedState)||(St=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,s]}function G0(t,n,r){var s=Ee,d=xt(),f=Ue;if(f){if(r===void 0)throw Error(o(407));r=r()}else r=n();var y=!fn((et||d).memoizedState,r);if(y&&(d.memoizedState=r,St=!0),d=d.queue,Md(X0.bind(null,s,d,t),[t]),d.getSnapshot!==n||y||wt!==null&&wt.memoizedState.tag&1){if(s.flags|=2048,Si(9,{destroy:void 0},I0.bind(null,s,d,r,n),null),rt===null)throw Error(o(349));f||(ba&127)!==0||Y0(s,n,r)}return r}function Y0(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=Ee.updateQueue,n===null?(n=_l(),Ee.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function I0(t,n,r,s){n.value=r,n.getSnapshot=s,K0(n)&&W0(t)}function X0(t,n,r){return r(function(){K0(n)&&W0(t)})}function K0(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!fn(t,r)}catch{return!0}}function W0(t){var n=_r(t,2);n!==null&&an(n,t,2)}function Rd(t){var n=Xt();if(typeof t=="function"){var r=t;if(t=r(),Mr){Na(!0);try{r()}finally{Na(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},n}function Z0(t,n,r,s){return t.baseState=r,Ad(t,et,typeof s=="function"?s:ya)}function hS(t,n,r,s,d){if(Al(t))throw Error(o(485));if(t=n.action,t!==null){var f={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};I.T!==null?r(!0):f.isTransition=!1,s(f),r=n.pending,r===null?(f.next=n.pending=f,Q0(n,f)):(f.next=r.next,n.pending=r.next=f)}}function Q0(t,n){var r=n.action,s=n.payload,d=t.state;if(n.isTransition){var f=I.T,y={};I.T=y;try{var k=r(d,s),D=I.S;D!==null&&D(y,k),J0(t,n,k)}catch(H){zd(t,n,H)}finally{f!==null&&y.types!==null&&(f.types=y.types),I.T=f}}else try{f=r(d,s),J0(t,n,f)}catch(H){zd(t,n,H)}}function J0(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(s){eg(t,n,s)},function(s){return zd(t,n,s)}):eg(t,n,r)}function eg(t,n,r){n.status="fulfilled",n.value=r,tg(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Q0(t,r)))}function zd(t,n,r){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=r,tg(n),n=n.next;while(n!==s)}t.action=null}function tg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ng(t,n){return n}function ag(t,n){if(Ue){var r=rt.formState;if(r!==null){e:{var s=Ee;if(Ue){if(st){t:{for(var d=st,f=En;d.nodeType!==8;){if(!f){d=null;break t}if(d=zn(d.nextSibling),d===null){d=null;break t}}f=d.data,d=f==="F!"||f==="F"?d:null}if(d){st=zn(d.nextSibling),s=d.data==="F!";break e}}Ua(s)}s=!1}s&&(n=r[0])}}return r=Xt(),r.memoizedState=r.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ng,lastRenderedState:n},r.queue=s,r=Sg.bind(null,Ee,s),s.dispatch=r,s=Rd(!1),f=Bd.bind(null,Ee,!1,s.queue),s=Xt(),d={state:n,dispatch:null,action:t,pending:null},s.queue=d,r=hS.bind(null,Ee,d,f,r),d.dispatch=r,s.memoizedState=t,[n,r,!1]}function rg(t){var n=xt();return ig(n,et,t)}function ig(t,n,r){if(n=Ad(t,n,ng)[0],t=Tl(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=No(n)}catch(y){throw y===bi?gl:y}else s=n;n=xt();var d=n.queue,f=d.dispatch;return r!==n.memoizedState&&(Ee.flags|=2048,Si(9,{destroy:void 0},gS.bind(null,d,r),null)),[s,f,t]}function gS(t,n){t.action=n}function og(t){var n=xt(),r=et;if(r!==null)return ig(n,r,t);xt(),n=n.memoizedState,r=xt();var s=r.queue.dispatch;return r.memoizedState=t,[n,s,!1]}function Si(t,n,r,s){return t={tag:t,create:r,deps:s,inst:n,next:null},n=Ee.updateQueue,n===null&&(n=_l(),Ee.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(s=r.next,r.next=t,t.next=s,n.lastEffect=t),t}function sg(){return xt().memoizedState}function jl(t,n,r,s){var d=Xt();Ee.flags|=t,d.memoizedState=Si(1|n,{destroy:void 0},r,s===void 0?null:s)}function Cl(t,n,r,s){var d=xt();s=s===void 0?null:s;var f=d.memoizedState.inst;et!==null&&s!==null&&kd(s,et.memoizedState.deps)?d.memoizedState=Si(n,f,r,s):(Ee.flags|=t,d.memoizedState=Si(1|n,f,r,s))}function lg(t,n){jl(8390656,8,t,n)}function Md(t,n){Cl(2048,8,t,n)}function bS(t){Ee.flags|=4;var n=Ee.updateQueue;if(n===null)n=_l(),Ee.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function cg(t){var n=xt().memoizedState;return bS({ref:n,nextImpl:t}),function(){if((Ye&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function ug(t,n){return Cl(4,2,t,n)}function dg(t,n){return Cl(4,4,t,n)}function fg(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function mg(t,n,r){r=r!=null?r.concat([t]):null,Cl(4,4,fg.bind(null,n,t),r)}function Dd(){}function pg(t,n){var r=xt();n=n===void 0?null:n;var s=r.memoizedState;return n!==null&&kd(n,s[1])?s[0]:(r.memoizedState=[t,n],t)}function hg(t,n){var r=xt();n=n===void 0?null:n;var s=r.memoizedState;if(n!==null&&kd(n,s[1]))return s[0];if(s=t(),Mr){Na(!0);try{t()}finally{Na(!1)}}return r.memoizedState=[s,n],s}function Od(t,n,r){return r===void 0||(ba&1073741824)!==0&&(qe&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=gb(),Ee.lanes|=t,Wa|=t,r)}function gg(t,n,r,s){return fn(r,n)?r:xi.current!==null?(t=Od(t,r,s),fn(t,n)||(St=!0),t):(ba&42)===0||(ba&1073741824)!==0&&(qe&261930)===0?(St=!0,t.memoizedState=r):(t=gb(),Ee.lanes|=t,Wa|=t,n)}function bg(t,n,r,s,d){var f=re.p;re.p=f!==0&&8>f?f:8;var y=I.T,k={};I.T=k,Bd(t,!1,n,r);try{var D=d(),H=I.S;if(H!==null&&H(k,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var K=fS(D,s);Lo(t,n,K,yn(t))}else Lo(t,n,s,yn(t))}catch(ee){Lo(t,n,{then:function(){},status:"rejected",reason:ee},yn())}finally{re.p=f,y!==null&&k.types!==null&&(y.types=k.types),I.T=y}}function yS(){}function Nd(t,n,r,s){if(t.tag!==5)throw Error(o(476));var d=yg(t).queue;bg(t,d,n,ue,r===null?yS:function(){return xg(t),r(s)})}function yg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:ue},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function xg(t){var n=yg(t);n.next===null&&(n=t.alternate.memoizedState),Lo(t,n.next.queue,{},yn())}function Ld(){return qt(es)}function vg(){return xt().memoizedState}function wg(){return xt().memoizedState}function xS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=yn();t=Pa(r);var s=Ga(n,t,r);s!==null&&(an(s,n,r),zo(s,n,r)),n={cache:fd()},t.payload=n;return}n=n.return}}function vS(t,n,r){var s=yn();r={lane:s,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Al(t)?kg(n,r):(r=td(t,n,r,s),r!==null&&(an(r,t,s),_g(r,n,s)))}function Sg(t,n,r){var s=yn();Lo(t,n,r,s)}function Lo(t,n,r,s){var d={lane:s,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Al(t))kg(n,d);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,k=f(y,r);if(d.hasEagerState=!0,d.eagerState=k,fn(k,y))return cl(t,n,d,0),rt===null&&ll(),!1}catch{}finally{}if(r=td(t,n,d,s),r!==null)return an(r,t,s),_g(r,n,s),!0}return!1}function Bd(t,n,r,s){if(s={lane:2,revertLane:bf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Al(t)){if(n)throw Error(o(479))}else n=td(t,r,s,2),n!==null&&an(n,t,2)}function Al(t){var n=t.alternate;return t===Ee||n!==null&&n===Ee}function kg(t,n){vi=Sl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function _g(t,n,r){if((r&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,r|=s,n.lanes=r,Ah(t,r)}}var Bo={readContext:qt,use:$l,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt};Bo.useEffectEvent=pt;var $g={readContext:qt,use:$l,useCallback:function(t,n){return Xt().memoizedState=[t,n===void 0?null:n],t},useContext:qt,useEffect:lg,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,jl(4194308,4,fg.bind(null,n,t),r)},useLayoutEffect:function(t,n){return jl(4194308,4,t,n)},useInsertionEffect:function(t,n){jl(4,2,t,n)},useMemo:function(t,n){var r=Xt();n=n===void 0?null:n;var s=t();if(Mr){Na(!0);try{t()}finally{Na(!1)}}return r.memoizedState=[s,n],s},useReducer:function(t,n,r){var s=Xt();if(r!==void 0){var d=r(n);if(Mr){Na(!0);try{r(n)}finally{Na(!1)}}}else d=n;return s.memoizedState=s.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},s.queue=t,t=t.dispatch=vS.bind(null,Ee,t),[s.memoizedState,t]},useRef:function(t){var n=Xt();return t={current:t},n.memoizedState=t},useState:function(t){t=Rd(t);var n=t.queue,r=Sg.bind(null,Ee,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Dd,useDeferredValue:function(t,n){var r=Xt();return Od(r,t,n)},useTransition:function(){var t=Rd(!1);return t=bg.bind(null,Ee,t.queue,!0,!1),Xt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var s=Ee,d=Xt();if(Ue){if(r===void 0)throw Error(o(407));r=r()}else{if(r=n(),rt===null)throw Error(o(349));(qe&127)!==0||Y0(s,n,r)}d.memoizedState=r;var f={value:r,getSnapshot:n};return d.queue=f,lg(X0.bind(null,s,f,t),[t]),s.flags|=2048,Si(9,{destroy:void 0},I0.bind(null,s,f,r,n),null),r},useId:function(){var t=Xt(),n=rt.identifierPrefix;if(Ue){var r=na,s=ta;r=(s&~(1<<32-dn(s)-1)).toString(32)+r,n="_"+n+"R_"+r,r=kl++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=mS++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ld,useFormState:ag,useActionState:ag,useOptimistic:function(t){var n=Xt();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Bd.bind(null,Ee,!0,r),r.dispatch=n,[t,n]},useMemoCache:Cd,useCacheRefresh:function(){return Xt().memoizedState=xS.bind(null,Ee)},useEffectEvent:function(t){var n=Xt(),r={impl:t};return n.memoizedState=r,function(){if((Ye&2)!==0)throw Error(o(440));return r.impl.apply(void 0,arguments)}}},qd={readContext:qt,use:$l,useCallback:pg,useContext:qt,useEffect:Md,useImperativeHandle:mg,useInsertionEffect:ug,useLayoutEffect:dg,useMemo:hg,useReducer:Tl,useRef:sg,useState:function(){return Tl(ya)},useDebugValue:Dd,useDeferredValue:function(t,n){var r=xt();return gg(r,et.memoizedState,t,n)},useTransition:function(){var t=Tl(ya)[0],n=xt().memoizedState;return[typeof t=="boolean"?t:No(t),n]},useSyncExternalStore:G0,useId:vg,useHostTransitionStatus:Ld,useFormState:rg,useActionState:rg,useOptimistic:function(t,n){var r=xt();return Z0(r,et,t,n)},useMemoCache:Cd,useCacheRefresh:wg};qd.useEffectEvent=cg;var Tg={readContext:qt,use:$l,useCallback:pg,useContext:qt,useEffect:Md,useImperativeHandle:mg,useInsertionEffect:ug,useLayoutEffect:dg,useMemo:hg,useReducer:Ed,useRef:sg,useState:function(){return Ed(ya)},useDebugValue:Dd,useDeferredValue:function(t,n){var r=xt();return et===null?Od(r,t,n):gg(r,et.memoizedState,t,n)},useTransition:function(){var t=Ed(ya)[0],n=xt().memoizedState;return[typeof t=="boolean"?t:No(t),n]},useSyncExternalStore:G0,useId:vg,useHostTransitionStatus:Ld,useFormState:og,useActionState:og,useOptimistic:function(t,n){var r=xt();return et!==null?Z0(r,et,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Cd,useCacheRefresh:wg};Tg.useEffectEvent=cg;function Vd(t,n,r,s){n=t.memoizedState,r=r(s,n),r=r==null?n:x({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ud={enqueueSetState:function(t,n,r){t=t._reactInternals;var s=yn(),d=Pa(s);d.payload=n,r!=null&&(d.callback=r),n=Ga(t,d,s),n!==null&&(an(n,t,s),zo(n,t,s))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var s=yn(),d=Pa(s);d.tag=1,d.payload=n,r!=null&&(d.callback=r),n=Ga(t,d,s),n!==null&&(an(n,t,s),zo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=yn(),s=Pa(r);s.tag=2,n!=null&&(s.callback=n),n=Ga(t,s,r),n!==null&&(an(n,t,r),zo(n,t,r))}};function jg(t,n,r,s,d,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,y):n.prototype&&n.prototype.isPureReactComponent?!_o(r,s)||!_o(d,f):!0}function Cg(t,n,r,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,s),n.state!==t&&Ud.enqueueReplaceState(n,n.state,null)}function Dr(t,n){var r=n;if("ref"in n){r={};for(var s in n)s!=="ref"&&(r[s]=n[s])}if(t=t.defaultProps){r===n&&(r=x({},r));for(var d in t)r[d]===void 0&&(r[d]=t[d])}return r}function Ag(t){sl(t)}function Eg(t){console.error(t)}function Rg(t){sl(t)}function El(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function zg(t,n,r){try{var s=t.onCaughtError;s(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Fd(t,n,r){return r=Pa(r),r.tag=3,r.payload={element:null},r.callback=function(){El(t,n)},r}function Mg(t){return t=Pa(t),t.tag=3,t}function Dg(t,n,r,s){var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var f=s.value;t.payload=function(){return d(f)},t.callback=function(){zg(n,r,s)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){zg(n,r,s),typeof d!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var k=s.stack;this.componentDidCatch(s.value,{componentStack:k!==null?k:""})})}function wS(t,n,r,s,d){if(r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=r.alternate,n!==null&&pi(n,r,d,!0),r=pn.current,r!==null){switch(r.tag){case 31:case 13:return Rn===null?Fl():r.alternate===null&&ht===0&&(ht=3),r.flags&=-257,r.flags|=65536,r.lanes=d,s===bl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([s]):n.add(s),pf(t,s,d)),!1;case 22:return r.flags|=65536,s===bl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([s]):r.add(s)),pf(t,s,d)),!1}throw Error(o(435,r.tag))}return pf(t,s,d),Fl(),!1}if(Ue)return n=pn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=d,s!==sd&&(t=Error(o(422),{cause:s}),jo(jn(t,r)))):(s!==sd&&(n=Error(o(423),{cause:s}),jo(jn(n,r))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,s=jn(s,r),d=Fd(t.stateNode,s,d),yd(t,d),ht!==4&&(ht=2)),!1;var f=Error(o(520),{cause:s});if(f=jn(f,r),Yo===null?Yo=[f]:Yo.push(f),ht!==4&&(ht=2),n===null)return!0;s=jn(s,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=d&-d,r.lanes|=t,t=Fd(r.stateNode,s,t),yd(r,t),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Za===null||!Za.has(f))))return r.flags|=65536,d&=-d,r.lanes|=d,d=Mg(d),Dg(d,t,r,s),yd(r,d),!1}r=r.return}while(r!==null);return!1}var Hd=Error(o(461)),St=!1;function Vt(t,n,r,s){n.child=t===null?B0(n,null,r,s):zr(n,t.child,r,s)}function Og(t,n,r,s,d){r=r.render;var f=n.ref;if("ref"in s){var y={};for(var k in s)k!=="ref"&&(y[k]=s[k])}else y=s;return Cr(n),s=_d(t,n,r,y,f,d),k=$d(),t!==null&&!St?(Td(t,n,d),xa(t,n,d)):(Ue&&k&&id(n),n.flags|=1,Vt(t,n,s,d),n.child)}function Ng(t,n,r,s,d){if(t===null){var f=r.type;return typeof f=="function"&&!nd(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,Lg(t,n,f,s,d)):(t=dl(r.type,null,s,n,n.mode,d),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Zd(t,d)){var y=f.memoizedProps;if(r=r.compare,r=r!==null?r:_o,r(y,s)&&t.ref===n.ref)return xa(t,n,d)}return n.flags|=1,t=ma(f,s),t.ref=n.ref,t.return=n,n.child=t}function Lg(t,n,r,s,d){if(t!==null){var f=t.memoizedProps;if(_o(f,s)&&t.ref===n.ref)if(St=!1,n.pendingProps=s=f,Zd(t,d))(t.flags&131072)!==0&&(St=!0);else return n.lanes=t.lanes,xa(t,n,d)}return Pd(t,n,r,s,d)}function Bg(t,n,r,s){var d=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|r:r,t!==null){for(s=n.child=t.child,d=0;s!==null;)d=d|s.lanes|s.childLanes,s=s.sibling;s=d&~f}else s=0,n.child=null;return qg(t,n,f,r,s)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&hl(n,f!==null?f.cachePool:null),f!==null?U0(n,f):vd(),F0(n);else return s=n.lanes=536870912,qg(t,n,f!==null?f.baseLanes|r:r,r,s)}else f!==null?(hl(n,f.cachePool),U0(n,f),Ia(),n.memoizedState=null):(t!==null&&hl(n,null),vd(),Ia());return Vt(t,n,d,r),n.child}function qo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qg(t,n,r,s,d){var f=pd();return f=f===null?null:{parent:vt._currentValue,pool:f},n.memoizedState={baseLanes:r,cachePool:f},t!==null&&hl(n,null),vd(),F0(n),t!==null&&pi(t,n,s,!0),n.childLanes=d,null}function Rl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vg(t,n,r){return zr(n,t.child,null,r),t=Rl(n,n.pendingProps),t.flags|=2,hn(n),n.memoizedState=null,t}function SS(t,n,r){var s=n.pendingProps,d=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ue){if(s.mode==="hidden")return t=Rl(n,s),n.lanes=536870912,qo(null,t);if(Sd(n),(t=st)?(t=Qb(t,En),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},r=k0(t),r.return=n,n.child=r,Bt=n,st=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Rl(n,s)}var f=t.memoizedState;if(f!==null){var y=f.dehydrated;if(Sd(n),d)if(n.flags&256)n.flags&=-257,n=Vg(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(o(558));else if(St||pi(t,n,r,!1),d=(r&t.childLanes)!==0,St||d){if(s=rt,s!==null&&(y=Eh(s,r),y!==0&&y!==f.retryLane))throw f.retryLane=y,_r(t,y),an(s,t,y),Hd;Fl(),n=Vg(t,n,r)}else t=f.treeContext,st=zn(y.nextSibling),Bt=n,Ue=!0,Va=null,En=!1,t!==null&&T0(n,t),n=Rl(n,s),n.flags|=4096;return n}return t=ma(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function zl(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(o(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function Pd(t,n,r,s,d){return Cr(n),r=_d(t,n,r,s,void 0,d),s=$d(),t!==null&&!St?(Td(t,n,d),xa(t,n,d)):(Ue&&s&&id(n),n.flags|=1,Vt(t,n,r,d),n.child)}function Ug(t,n,r,s,d,f){return Cr(n),n.updateQueue=null,r=P0(n,s,r,d),H0(t),s=$d(),t!==null&&!St?(Td(t,n,f),xa(t,n,f)):(Ue&&s&&id(n),n.flags|=1,Vt(t,n,r,f),n.child)}function Fg(t,n,r,s,d){if(Cr(n),n.stateNode===null){var f=ui,y=r.contextType;typeof y=="object"&&y!==null&&(f=qt(y)),f=new r(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ud,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},gd(n),y=r.contextType,f.context=typeof y=="object"&&y!==null?qt(y):ui,f.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Vd(n,r,y,s),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Ud.enqueueReplaceState(f,f.state,null),Do(n,s,f,d),Mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var k=n.memoizedProps,D=Dr(r,k);f.props=D;var H=f.context,K=r.contextType;y=ui,typeof K=="object"&&K!==null&&(y=qt(K));var ee=r.getDerivedStateFromProps;K=typeof ee=="function"||typeof f.getSnapshotBeforeUpdate=="function",k=n.pendingProps!==k,K||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(k||H!==y)&&Cg(n,f,s,y),Ha=!1;var P=n.memoizedState;f.state=P,Do(n,s,f,d),Mo(),H=n.memoizedState,k||P!==H||Ha?(typeof ee=="function"&&(Vd(n,r,ee,s),H=n.memoizedState),(D=Ha||jg(n,r,D,s,P,H,y))?(K||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=H),f.props=s,f.state=H,f.context=y,s=D):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,bd(t,n),y=n.memoizedProps,K=Dr(r,y),f.props=K,ee=n.pendingProps,P=f.context,H=r.contextType,D=ui,typeof H=="object"&&H!==null&&(D=qt(H)),k=r.getDerivedStateFromProps,(H=typeof k=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==ee||P!==D)&&Cg(n,f,s,D),Ha=!1,P=n.memoizedState,f.state=P,Do(n,s,f,d),Mo();var G=n.memoizedState;y!==ee||P!==G||Ha||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof k=="function"&&(Vd(n,r,k,s),G=n.memoizedState),(K=Ha||jg(n,r,K,s,P,G,D)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(H||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,G,D),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,G,D)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=G),f.props=s,f.state=G,f.context=D,s=K):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&P===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,zl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,r=s&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=zr(n,t.child,null,d),n.child=zr(n,null,r,d)):Vt(t,n,r,d),n.memoizedState=f.state,t=n.child):t=xa(t,n,d),t}function Hg(t,n,r,s){return Tr(),n.flags|=256,Vt(t,n,r,s),n.child}var Gd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yd(t){return{baseLanes:t,cachePool:z0()}}function Id(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=bn),t}function Pg(t,n,r){var s=n.pendingProps,d=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(yt.current&2)!==0),y&&(d=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ue){if(d?Ya(n):Ia(),(t=st)?(t=Qb(t,En),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},r=k0(t),r.return=n,n.child=r,Bt=n,st=null)):t=null,t===null)throw Ua(n);return Ef(t)?n.lanes=32:n.lanes=536870912,null}var k=s.children;return s=s.fallback,d?(Ia(),d=n.mode,k=Ml({mode:"hidden",children:k},d),s=$r(s,d,r,null),k.return=n,s.return=n,k.sibling=s,n.child=k,s=n.child,s.memoizedState=Yd(r),s.childLanes=Id(t,y,r),n.memoizedState=Gd,qo(null,s)):(Ya(n),Xd(n,k))}var D=t.memoizedState;if(D!==null&&(k=D.dehydrated,k!==null)){if(f)n.flags&256?(Ya(n),n.flags&=-257,n=Kd(t,n,r)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,n=null):(Ia(),k=s.fallback,d=n.mode,s=Ml({mode:"visible",children:s.children},d),k=$r(k,d,r,null),k.flags|=2,s.return=n,k.return=n,s.sibling=k,n.child=s,zr(n,t.child,null,r),s=n.child,s.memoizedState=Yd(r),s.childLanes=Id(t,y,r),n.memoizedState=Gd,n=qo(null,s));else if(Ya(n),Ef(k)){if(y=k.nextSibling&&k.nextSibling.dataset,y)var H=y.dgst;y=H,s=Error(o(419)),s.stack="",s.digest=y,jo({value:s,source:null,stack:null}),n=Kd(t,n,r)}else if(St||pi(t,n,r,!1),y=(r&t.childLanes)!==0,St||y){if(y=rt,y!==null&&(s=Eh(y,r),s!==0&&s!==D.retryLane))throw D.retryLane=s,_r(t,s),an(y,t,s),Hd;Af(k)||Fl(),n=Kd(t,n,r)}else Af(k)?(n.flags|=192,n.child=t.child,n=null):(t=D.treeContext,st=zn(k.nextSibling),Bt=n,Ue=!0,Va=null,En=!1,t!==null&&T0(n,t),n=Xd(n,s.children),n.flags|=4096);return n}return d?(Ia(),k=s.fallback,d=n.mode,D=t.child,H=D.sibling,s=ma(D,{mode:"hidden",children:s.children}),s.subtreeFlags=D.subtreeFlags&65011712,H!==null?k=ma(H,k):(k=$r(k,d,r,null),k.flags|=2),k.return=n,s.return=n,s.sibling=k,n.child=s,qo(null,s),s=n.child,k=t.child.memoizedState,k===null?k=Yd(r):(d=k.cachePool,d!==null?(D=vt._currentValue,d=d.parent!==D?{parent:D,pool:D}:d):d=z0(),k={baseLanes:k.baseLanes|r,cachePool:d}),s.memoizedState=k,s.childLanes=Id(t,y,r),n.memoizedState=Gd,qo(t.child,s)):(Ya(n),r=t.child,t=r.sibling,r=ma(r,{mode:"visible",children:s.children}),r.return=n,r.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=r,n.memoizedState=null,r)}function Xd(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=mn(22,t,null,n),t.lanes=0,t}function Kd(t,n,r){return zr(n,t.child,null,r),t=Xd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Gg(t,n,r){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ud(t.return,n,r)}function Wd(t,n,r,s,d,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:d,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=s,y.tail=r,y.tailMode=d,y.treeForkCount=f)}function Yg(t,n,r){var s=n.pendingProps,d=s.revealOrder,f=s.tail;s=s.children;var y=yt.current,k=(y&2)!==0;if(k?(y=y&1|2,n.flags|=128):y&=1,ne(yt,y),Vt(t,n,s,r),s=Ue?To:0,!k&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gg(t,r,n);else if(t.tag===19)Gg(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(r=n.child,d=null;r!==null;)t=r.alternate,t!==null&&wl(t)===null&&(d=r),r=r.sibling;r=d,r===null?(d=n.child,n.child=null):(d=r.sibling,r.sibling=null),Wd(n,!1,d,r,f,s);break;case"backwards":case"unstable_legacy-backwards":for(r=null,d=n.child,n.child=null;d!==null;){if(t=d.alternate,t!==null&&wl(t)===null){n.child=d;break}t=d.sibling,d.sibling=r,r=d,d=t}Wd(n,!0,r,null,f,s);break;case"together":Wd(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function xa(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Wa|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(pi(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(o(153));if(n.child!==null){for(t=n.child,r=ma(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=ma(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function Zd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function kS(t,n,r){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Fa(n,vt,t.memoizedState.cache),Tr();break;case 27:case 5:Et(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Sd(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ya(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Pg(t,n,r):(Ya(n),t=xa(t,n,r),t!==null?t.sibling:null);Ya(n);break;case 19:var d=(t.flags&128)!==0;if(s=(r&n.childLanes)!==0,s||(pi(t,n,r,!1),s=(r&n.childLanes)!==0),d){if(s)return Yg(t,n,r);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ne(yt,yt.current),s)break;return null;case 22:return n.lanes=0,Bg(t,n,r,n.pendingProps);case 24:Fa(n,vt,t.memoizedState.cache)}return xa(t,n,r)}function Ig(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)St=!0;else{if(!Zd(t,r)&&(n.flags&128)===0)return St=!1,kS(t,n,r);St=(t.flags&131072)!==0}else St=!1,Ue&&(n.flags&1048576)!==0&&$0(n,To,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=Er(n.elementType),n.type=t,typeof t=="function")nd(t)?(s=Dr(t,s),n.tag=1,n=Fg(null,n,t,s,r)):(n.tag=0,n=Pd(null,n,t,s,r));else{if(t!=null){var d=t.$$typeof;if(d===B){n.tag=11,n=Og(null,n,t,s,r);break e}else if(d===z){n.tag=14,n=Ng(null,n,t,s,r);break e}}throw n=X(t)||t,Error(o(306,n,""))}}return n;case 0:return Pd(t,n,n.type,n.pendingProps,r);case 1:return s=n.type,d=Dr(s,n.pendingProps),Fg(t,n,s,d,r);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(o(387));s=n.pendingProps;var f=n.memoizedState;d=f.element,bd(t,n),Do(n,s,null,r);var y=n.memoizedState;if(s=y.cache,Fa(n,vt,s),s!==f.cache&&dd(n,[vt],r,!0),Mo(),s=y.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Hg(t,n,s,r);break e}else if(s!==d){d=jn(Error(o(424)),n),jo(d),n=Hg(t,n,s,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(st=zn(t.firstChild),Bt=n,Ue=!0,Va=null,En=!0,r=B0(n,null,s,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Tr(),s===d){n=xa(t,n,r);break e}Vt(t,n,s,r)}n=n.child}return n;case 26:return zl(t,n),t===null?(r=ry(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ue||(r=n.type,t=n.pendingProps,s=Kl(je.current).createElement(r),s[Lt]=n,s[Zt]=t,Ut(s,r,t),Rt(s),n.stateNode=s):n.memoizedState=ry(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Et(n),t===null&&Ue&&(s=n.stateNode=ty(n.type,n.pendingProps,je.current),Bt=n,En=!0,d=st,tr(n.type)?(Rf=d,st=zn(s.firstChild)):st=d),Vt(t,n,n.pendingProps.children,r),zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ue&&((d=s=st)&&(s=JS(s,n.type,n.pendingProps,En),s!==null?(n.stateNode=s,Bt=n,st=zn(s.firstChild),En=!1,d=!0):d=!1),d||Ua(n)),Et(n),d=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,s=f.children,Tf(d,f)?s=null:y!==null&&Tf(d,y)&&(n.flags|=32),n.memoizedState!==null&&(d=_d(t,n,pS,null,null,r),es._currentValue=d),zl(t,n),Vt(t,n,s,r),n.child;case 6:return t===null&&Ue&&((t=r=st)&&(r=ek(r,n.pendingProps,En),r!==null?(n.stateNode=r,Bt=n,st=null,t=!0):t=!1),t||Ua(n)),null;case 13:return Pg(t,n,r);case 4:return De(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=zr(n,null,s,r):Vt(t,n,s,r),n.child;case 11:return Og(t,n,n.type,n.pendingProps,r);case 7:return Vt(t,n,n.pendingProps,r),n.child;case 8:return Vt(t,n,n.pendingProps.children,r),n.child;case 12:return Vt(t,n,n.pendingProps.children,r),n.child;case 10:return s=n.pendingProps,Fa(n,n.type,s.value),Vt(t,n,s.children,r),n.child;case 9:return d=n.type._context,s=n.pendingProps.children,Cr(n),d=qt(d),s=s(d),n.flags|=1,Vt(t,n,s,r),n.child;case 14:return Ng(t,n,n.type,n.pendingProps,r);case 15:return Lg(t,n,n.type,n.pendingProps,r);case 19:return Yg(t,n,r);case 31:return SS(t,n,r);case 22:return Bg(t,n,r,n.pendingProps);case 24:return Cr(n),s=qt(vt),t===null?(d=pd(),d===null&&(d=rt,f=fd(),d.pooledCache=f,f.refCount++,f!==null&&(d.pooledCacheLanes|=r),d=f),n.memoizedState={parent:s,cache:d},gd(n),Fa(n,vt,d)):((t.lanes&r)!==0&&(bd(t,n),Do(n,null,null,r),Mo()),d=t.memoizedState,f=n.memoizedState,d.parent!==s?(d={parent:s,cache:s},n.memoizedState=d,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=d),Fa(n,vt,s)):(s=f.cache,Fa(n,vt,s),s!==d.cache&&dd(n,[vt],r,!0))),Vt(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function va(t){t.flags|=4}function Qd(t,n,r,s,d){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(vb())t.flags|=8192;else throw Rr=bl,hd}else t.flags&=-16777217}function Xg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!cy(n))if(vb())t.flags|=8192;else throw Rr=bl,hd}function Dl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?jh():536870912,t.lanes|=n,Ti|=n)}function Vo(t,n){if(!Ue)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function lt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,s=0;if(n)for(var d=t.child;d!==null;)r|=d.lanes|d.childLanes,s|=d.subtreeFlags&65011712,s|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)r|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=s,t.childLanes=r,n}function _S(t,n,r){var s=n.pendingProps;switch(od(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(n),null;case 1:return lt(n),null;case 3:return r=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ga(vt),Re(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mi(n)?va(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ld())),lt(n),null;case 26:var d=n.type,f=n.memoizedState;return t===null?(va(n),f!==null?(lt(n),Xg(n,f)):(lt(n),Qd(n,d,null,s,r))):f?f!==t.memoizedState?(va(n),lt(n),Xg(n,f)):(lt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&va(n),lt(n),Qd(n,d,t,s,r)),null;case 27:if(Jn(n),r=je.current,d=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&va(n);else{if(!s){if(n.stateNode===null)throw Error(o(166));return lt(n),null}t=se.current,mi(n)?j0(n):(t=ty(d,s,r),n.stateNode=t,va(n))}return lt(n),null;case 5:if(Jn(n),d=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&va(n);else{if(!s){if(n.stateNode===null)throw Error(o(166));return lt(n),null}if(f=se.current,mi(n))j0(n);else{var y=Kl(je.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?y.createElement("select",{is:s.is}):y.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?y.createElement(d,{is:s.is}):y.createElement(d)}}f[Lt]=n,f[Zt]=s;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(Ut(f,d,s),d){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&va(n)}}return lt(n),Qd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&va(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(o(166));if(t=je.current,mi(n)){if(t=n.stateNode,r=n.memoizedProps,s=null,d=Bt,d!==null)switch(d.tag){case 27:case 5:s=d.memoizedProps}t[Lt]=n,t=!!(t.nodeValue===r||s!==null&&s.suppressHydrationWarning===!0||Pb(t.nodeValue,r)),t||Ua(n,!0)}else t=Kl(t).createTextNode(s),t[Lt]=n,n.stateNode=t}return lt(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(s=mi(n),r!==null){if(t===null){if(!s)throw Error(o(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[Lt]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;lt(n),t=!1}else r=ld(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(hn(n),n):(hn(n),null);if((n.flags&128)!==0)throw Error(o(558))}return lt(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=mi(n),s!==null&&s.dehydrated!==null){if(t===null){if(!d)throw Error(o(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Lt]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;lt(n),d=!1}else d=ld(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return n.flags&256?(hn(n),n):(hn(n),null)}return hn(n),(n.flags&128)!==0?(n.lanes=r,n):(r=s!==null,t=t!==null&&t.memoizedState!==null,r&&(s=n.child,d=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(d=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==d&&(s.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),Dl(n,n.updateQueue),lt(n),null);case 4:return Re(),t===null&&wf(n.stateNode.containerInfo),lt(n),null;case 10:return ga(n.type),lt(n),null;case 19:if(V(yt),s=n.memoizedState,s===null)return lt(n),null;if(d=(n.flags&128)!==0,f=s.rendering,f===null)if(d)Vo(s,!1);else{if(ht!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=wl(t),f!==null){for(n.flags|=128,Vo(s,!1),t=f.updateQueue,n.updateQueue=t,Dl(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)S0(r,t),r=r.sibling;return ne(yt,yt.current&1|2),Ue&&pa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&cn()>ql&&(n.flags|=128,d=!0,Vo(s,!1),n.lanes=4194304)}else{if(!d)if(t=wl(f),t!==null){if(n.flags|=128,d=!0,t=t.updateQueue,n.updateQueue=t,Dl(n,t),Vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Ue)return lt(n),null}else 2*cn()-s.renderingStartTime>ql&&r!==536870912&&(n.flags|=128,d=!0,Vo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=cn(),t.sibling=null,r=yt.current,ne(yt,d?r&1|2:r&1),Ue&&pa(n,s.treeForkCount),t):(lt(n),null);case 22:case 23:return hn(n),wd(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(r&536870912)!==0&&(n.flags&128)===0&&(lt(n),n.subtreeFlags&6&&(n.flags|=8192)):lt(n),r=n.updateQueue,r!==null&&Dl(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==r&&(n.flags|=2048),t!==null&&V(Ar),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ga(vt),lt(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function $S(t,n){switch(od(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ga(vt),Re(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Jn(n),null;case 31:if(n.memoizedState!==null){if(hn(n),n.alternate===null)throw Error(o(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(hn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(o(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return V(yt),null;case 4:return Re(),null;case 10:return ga(n.type),null;case 22:case 23:return hn(n),wd(),t!==null&&V(Ar),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ga(vt),null;case 25:return null;default:return null}}function Kg(t,n){switch(od(n),n.tag){case 3:ga(vt),Re();break;case 26:case 27:case 5:Jn(n);break;case 4:Re();break;case 31:n.memoizedState!==null&&hn(n);break;case 13:hn(n);break;case 19:V(yt);break;case 10:ga(n.type);break;case 22:case 23:hn(n),wd(),t!==null&&V(Ar);break;case 24:ga(vt)}}function Uo(t,n){try{var r=n.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var d=s.next;r=d;do{if((r.tag&t)===t){s=void 0;var f=r.create,y=r.inst;s=f(),y.destroy=s}r=r.next}while(r!==d)}}catch(k){Ze(n,n.return,k)}}function Xa(t,n,r){try{var s=n.updateQueue,d=s!==null?s.lastEffect:null;if(d!==null){var f=d.next;s=f;do{if((s.tag&t)===t){var y=s.inst,k=y.destroy;if(k!==void 0){y.destroy=void 0,d=n;var D=r,H=k;try{H()}catch(K){Ze(d,D,K)}}}s=s.next}while(s!==f)}}catch(K){Ze(n,n.return,K)}}function Wg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{V0(n,r)}catch(s){Ze(t,t.return,s)}}}function Zg(t,n,r){r.props=Dr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(s){Ze(t,n,s)}}function Fo(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof r=="function"?t.refCleanup=r(s):r.current=s}}catch(d){Ze(t,n,d)}}function aa(t,n){var r=t.ref,s=t.refCleanup;if(r!==null)if(typeof s=="function")try{s()}catch(d){Ze(t,n,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(d){Ze(t,n,d)}else r.current=null}function Qg(t){var n=t.type,r=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&s.focus();break e;case"img":r.src?s.src=r.src:r.srcSet&&(s.srcset=r.srcSet)}}catch(d){Ze(t,t.return,d)}}function Jd(t,n,r){try{var s=t.stateNode;IS(s,t.type,r,n),s[Zt]=n}catch(d){Ze(t,t.return,d)}}function Jg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&tr(t.type)||t.tag===4}function ef(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&tr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,n,r){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=da));else if(s!==4&&(s===27&&tr(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(tf(t,n,r),t=t.sibling;t!==null;)tf(t,n,r),t=t.sibling}function Ol(t,n,r){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(s!==4&&(s===27&&tr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Ol(t,n,r),t=t.sibling;t!==null;)Ol(t,n,r),t=t.sibling}function eb(t){var n=t.stateNode,r=t.memoizedProps;try{for(var s=t.type,d=n.attributes;d.length;)n.removeAttributeNode(d[0]);Ut(n,s,r),n[Lt]=t,n[Zt]=r}catch(f){Ze(t,t.return,f)}}var wa=!1,kt=!1,nf=!1,tb=typeof WeakSet=="function"?WeakSet:Set,zt=null;function TS(t,n){if(t=t.containerInfo,_f=nc,t=m0(t),Ku(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var d=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var y=0,k=-1,D=-1,H=0,K=0,ee=t,P=null;t:for(;;){for(var G;ee!==r||d!==0&&ee.nodeType!==3||(k=y+d),ee!==f||s!==0&&ee.nodeType!==3||(D=y+s),ee.nodeType===3&&(y+=ee.nodeValue.length),(G=ee.firstChild)!==null;)P=ee,ee=G;for(;;){if(ee===t)break t;if(P===r&&++H===d&&(k=y),P===f&&++K===s&&(D=y),(G=ee.nextSibling)!==null)break;ee=P,P=ee.parentNode}ee=G}r=k===-1||D===-1?null:{start:k,end:D}}else r=null}r=r||{start:0,end:0}}else r=null;for($f={focusedElem:t,selectionRange:r},nc=!1,zt=n;zt!==null;)if(n=zt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,zt=t;else for(;zt!==null;){switch(n=zt,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)d=t[r],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,r=n,d=f.memoizedProps,f=f.memoizedState,s=r.stateNode;try{var fe=Dr(r.type,d);t=s.getSnapshotBeforeUpdate(fe,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Se){Ze(r,r.return,Se)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)Cf(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Cf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=n.sibling,t!==null){t.return=n.return,zt=t;break}zt=n.return}}function nb(t,n,r){var s=r.flags;switch(r.tag){case 0:case 11:case 15:ka(t,r),s&4&&Uo(5,r);break;case 1:if(ka(t,r),s&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(y){Ze(r,r.return,y)}else{var d=Dr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(d,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Ze(r,r.return,y)}}s&64&&Wg(r),s&512&&Fo(r,r.return);break;case 3:if(ka(t,r),s&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{V0(t,n)}catch(y){Ze(r,r.return,y)}}break;case 27:n===null&&s&4&&eb(r);case 26:case 5:ka(t,r),n===null&&s&4&&Qg(r),s&512&&Fo(r,r.return);break;case 12:ka(t,r);break;case 31:ka(t,r),s&4&&ib(t,r);break;case 13:ka(t,r),s&4&&ob(t,r),s&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=OS.bind(null,r),tk(t,r))));break;case 22:if(s=r.memoizedState!==null||wa,!s){n=n!==null&&n.memoizedState!==null||kt,d=wa;var f=kt;wa=s,(kt=n)&&!f?_a(t,r,(r.subtreeFlags&8772)!==0):ka(t,r),wa=d,kt=f}break;case 30:break;default:ka(t,r)}}function ab(t){var n=t.alternate;n!==null&&(t.alternate=null,ab(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zu(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ut=null,Jt=!1;function Sa(t,n,r){for(r=r.child;r!==null;)rb(t,n,r),r=r.sibling}function rb(t,n,r){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(fo,r)}catch{}switch(r.tag){case 26:kt||aa(r,n),Sa(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:kt||aa(r,n);var s=ut,d=Jt;tr(r.type)&&(ut=r.stateNode,Jt=!1),Sa(t,n,r),Zo(r.stateNode),ut=s,Jt=d;break;case 5:kt||aa(r,n);case 6:if(s=ut,d=Jt,ut=null,Sa(t,n,r),ut=s,Jt=d,ut!==null)if(Jt)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(r.stateNode)}catch(f){Ze(r,n,f)}else try{ut.removeChild(r.stateNode)}catch(f){Ze(r,n,f)}break;case 18:ut!==null&&(Jt?(t=ut,Wb(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Di(t)):Wb(ut,r.stateNode));break;case 4:s=ut,d=Jt,ut=r.stateNode.containerInfo,Jt=!0,Sa(t,n,r),ut=s,Jt=d;break;case 0:case 11:case 14:case 15:Xa(2,r,n),kt||Xa(4,r,n),Sa(t,n,r);break;case 1:kt||(aa(r,n),s=r.stateNode,typeof s.componentWillUnmount=="function"&&Zg(r,n,s)),Sa(t,n,r);break;case 21:Sa(t,n,r);break;case 22:kt=(s=kt)||r.memoizedState!==null,Sa(t,n,r),kt=s;break;default:Sa(t,n,r)}}function ib(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Di(t)}catch(r){Ze(n,n.return,r)}}}function ob(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Di(t)}catch(r){Ze(n,n.return,r)}}function jS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new tb),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new tb),n;default:throw Error(o(435,t.tag))}}function Nl(t,n){var r=jS(t);n.forEach(function(s){if(!r.has(s)){r.add(s);var d=NS.bind(null,t,s);s.then(d,d)}})}function en(t,n){var r=n.deletions;if(r!==null)for(var s=0;s<r.length;s++){var d=r[s],f=t,y=n,k=y;e:for(;k!==null;){switch(k.tag){case 27:if(tr(k.type)){ut=k.stateNode,Jt=!1;break e}break;case 5:ut=k.stateNode,Jt=!1;break e;case 3:case 4:ut=k.stateNode.containerInfo,Jt=!0;break e}k=k.return}if(ut===null)throw Error(o(160));rb(f,y,d),ut=null,Jt=!1,f=d.alternate,f!==null&&(f.return=null),d.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)sb(n,t),n=n.sibling}var Vn=null;function sb(t,n){var r=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:en(n,t),tn(t),s&4&&(Xa(3,t,t.return),Uo(3,t),Xa(5,t,t.return));break;case 1:en(n,t),tn(t),s&512&&(kt||r===null||aa(r,r.return)),s&64&&wa&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?s:r.concat(s))));break;case 26:var d=Vn;if(en(n,t),tn(t),s&512&&(kt||r===null||aa(r,r.return)),s&4){var f=r!==null?r.memoizedState:null;if(s=t.memoizedState,r===null)if(s===null)if(t.stateNode===null){e:{s=t.type,r=t.memoizedProps,d=d.ownerDocument||d;t:switch(s){case"title":f=d.getElementsByTagName("title")[0],(!f||f[ho]||f[Lt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=d.createElement(s),d.head.insertBefore(f,d.querySelector("head > title"))),Ut(f,s,r),f[Lt]=t,Rt(f),s=f;break e;case"link":var y=sy("link","href",d).get(s+(r.href||""));if(y){for(var k=0;k<y.length;k++)if(f=y[k],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(k,1);break t}}f=d.createElement(s),Ut(f,s,r),d.head.appendChild(f);break;case"meta":if(y=sy("meta","content",d).get(s+(r.content||""))){for(k=0;k<y.length;k++)if(f=y[k],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(k,1);break t}}f=d.createElement(s),Ut(f,s,r),d.head.appendChild(f);break;default:throw Error(o(468,s))}f[Lt]=t,Rt(f),s=f}t.stateNode=s}else ly(d,t.type,t.stateNode);else t.stateNode=oy(d,s,t.memoizedProps);else f!==s?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,s===null?ly(d,t.type,t.stateNode):oy(d,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Jd(t,t.memoizedProps,r.memoizedProps)}break;case 27:en(n,t),tn(t),s&512&&(kt||r===null||aa(r,r.return)),r!==null&&s&4&&Jd(t,t.memoizedProps,r.memoizedProps);break;case 5:if(en(n,t),tn(t),s&512&&(kt||r===null||aa(r,r.return)),t.flags&32){d=t.stateNode;try{ai(d,"")}catch(fe){Ze(t,t.return,fe)}}s&4&&t.stateNode!=null&&(d=t.memoizedProps,Jd(t,d,r!==null?r.memoizedProps:d)),s&1024&&(nf=!0);break;case 6:if(en(n,t),tn(t),s&4){if(t.stateNode===null)throw Error(o(162));s=t.memoizedProps,r=t.stateNode;try{r.nodeValue=s}catch(fe){Ze(t,t.return,fe)}}break;case 3:if(Ql=null,d=Vn,Vn=Wl(n.containerInfo),en(n,t),Vn=d,tn(t),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Di(n.containerInfo)}catch(fe){Ze(t,t.return,fe)}nf&&(nf=!1,lb(t));break;case 4:s=Vn,Vn=Wl(t.stateNode.containerInfo),en(n,t),tn(t),Vn=s;break;case 12:en(n,t),tn(t);break;case 31:en(n,t),tn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 13:en(n,t),tn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Bl=cn()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 22:d=t.memoizedState!==null;var D=r!==null&&r.memoizedState!==null,H=wa,K=kt;if(wa=H||d,kt=K||D,en(n,t),kt=K,wa=H,tn(t),s&8192)e:for(n=t.stateNode,n._visibility=d?n._visibility&-2:n._visibility|1,d&&(r===null||D||wa||kt||Or(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){D=r=n;try{if(f=D.stateNode,d)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{k=D.stateNode;var ee=D.memoizedProps.style,P=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;k.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(fe){Ze(D,D.return,fe)}}}else if(n.tag===6){if(r===null){D=n;try{D.stateNode.nodeValue=d?"":D.memoizedProps}catch(fe){Ze(D,D.return,fe)}}}else if(n.tag===18){if(r===null){D=n;try{var G=D.stateNode;d?Zb(G,!0):Zb(D.stateNode,!1)}catch(fe){Ze(D,D.return,fe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(r=s.retryQueue,r!==null&&(s.retryQueue=null,Nl(t,r))));break;case 19:en(n,t),tn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 30:break;case 21:break;default:en(n,t),tn(t)}}function tn(t){var n=t.flags;if(n&2){try{for(var r,s=t.return;s!==null;){if(Jg(s)){r=s;break}s=s.return}if(r==null)throw Error(o(160));switch(r.tag){case 27:var d=r.stateNode,f=ef(t);Ol(t,f,d);break;case 5:var y=r.stateNode;r.flags&32&&(ai(y,""),r.flags&=-33);var k=ef(t);Ol(t,k,y);break;case 3:case 4:var D=r.stateNode.containerInfo,H=ef(t);tf(t,H,D);break;default:throw Error(o(161))}}catch(K){Ze(t,t.return,K)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function lb(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;lb(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ka(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)nb(t,n.alternate,n),n=n.sibling}function Or(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Or(n);break;case 1:aa(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Zg(n,n.return,r),Or(n);break;case 27:Zo(n.stateNode);case 26:case 5:aa(n,n.return),Or(n);break;case 22:n.memoizedState===null&&Or(n);break;case 30:Or(n);break;default:Or(n)}t=t.sibling}}function _a(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,d=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:_a(d,f,r),Uo(4,f);break;case 1:if(_a(d,f,r),s=f,d=s.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(H){Ze(s,s.return,H)}if(s=f,d=s.updateQueue,d!==null){var k=s.stateNode;try{var D=d.shared.hiddenCallbacks;if(D!==null)for(d.shared.hiddenCallbacks=null,d=0;d<D.length;d++)q0(D[d],k)}catch(H){Ze(s,s.return,H)}}r&&y&64&&Wg(f),Fo(f,f.return);break;case 27:eb(f);case 26:case 5:_a(d,f,r),r&&s===null&&y&4&&Qg(f),Fo(f,f.return);break;case 12:_a(d,f,r);break;case 31:_a(d,f,r),r&&y&4&&ib(d,f);break;case 13:_a(d,f,r),r&&y&4&&ob(d,f);break;case 22:f.memoizedState===null&&_a(d,f,r),Fo(f,f.return);break;case 30:break;default:_a(d,f,r)}n=n.sibling}}function af(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Co(r))}function rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Co(t))}function Un(t,n,r,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)cb(t,n,r,s),n=n.sibling}function cb(t,n,r,s){var d=n.flags;switch(n.tag){case 0:case 11:case 15:Un(t,n,r,s),d&2048&&Uo(9,n);break;case 1:Un(t,n,r,s);break;case 3:Un(t,n,r,s),d&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Co(t)));break;case 12:if(d&2048){Un(t,n,r,s),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,k=f.onPostCommit;typeof k=="function"&&k(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(D){Ze(n,n.return,D)}}else Un(t,n,r,s);break;case 31:Un(t,n,r,s);break;case 13:Un(t,n,r,s);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Un(t,n,r,s):Ho(t,n):f._visibility&2?Un(t,n,r,s):(f._visibility|=2,ki(t,n,r,s,(n.subtreeFlags&10256)!==0||!1)),d&2048&&af(y,n);break;case 24:Un(t,n,r,s),d&2048&&rf(n.alternate,n);break;default:Un(t,n,r,s)}}function ki(t,n,r,s,d){for(d=d&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,y=n,k=r,D=s,H=y.flags;switch(y.tag){case 0:case 11:case 15:ki(f,y,k,D,d),Uo(8,y);break;case 23:break;case 22:var K=y.stateNode;y.memoizedState!==null?K._visibility&2?ki(f,y,k,D,d):Ho(f,y):(K._visibility|=2,ki(f,y,k,D,d)),d&&H&2048&&af(y.alternate,y);break;case 24:ki(f,y,k,D,d),d&&H&2048&&rf(y.alternate,y);break;default:ki(f,y,k,D,d)}n=n.sibling}}function Ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,s=n,d=s.flags;switch(s.tag){case 22:Ho(r,s),d&2048&&af(s.alternate,s);break;case 24:Ho(r,s),d&2048&&rf(s.alternate,s);break;default:Ho(r,s)}n=n.sibling}}var Po=8192;function _i(t,n,r){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)ub(t,n,r),t=t.sibling}function ub(t,n,r){switch(t.tag){case 26:_i(t,n,r),t.flags&Po&&t.memoizedState!==null&&mk(r,Vn,t.memoizedState,t.memoizedProps);break;case 5:_i(t,n,r);break;case 3:case 4:var s=Vn;Vn=Wl(t.stateNode.containerInfo),_i(t,n,r),Vn=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Po,Po=16777216,_i(t,n,r),Po=s):_i(t,n,r));break;default:_i(t,n,r)}}function db(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];zt=s,mb(s,t)}db(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fb(t),t=t.sibling}function fb(t){switch(t.tag){case 0:case 11:case 15:Go(t),t.flags&2048&&Xa(9,t,t.return);break;case 3:Go(t);break;case 12:Go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ll(t)):Go(t);break;default:Go(t)}}function Ll(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];zt=s,mb(s,t)}db(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),Ll(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Ll(n));break;default:Ll(n)}t=t.sibling}}function mb(t,n){for(;zt!==null;){var r=zt;switch(r.tag){case 0:case 11:case 15:Xa(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var s=r.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Co(r.memoizedState.cache)}if(s=r.child,s!==null)s.return=r,zt=s;else e:for(r=t;zt!==null;){s=zt;var d=s.sibling,f=s.return;if(ab(s),s===r){zt=null;break e}if(d!==null){d.return=f,zt=d;break e}zt=f}}}var CS={getCacheForType:function(t){var n=qt(vt),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return qt(vt).controller.signal}},AS=typeof WeakMap=="function"?WeakMap:Map,Ye=0,rt=null,Le=null,qe=0,We=0,gn=null,Ka=!1,$i=!1,of=!1,$a=0,ht=0,Wa=0,Nr=0,sf=0,bn=0,Ti=0,Yo=null,nn=null,lf=!1,Bl=0,pb=0,ql=1/0,Vl=null,Za=null,$t=0,Qa=null,ji=null,Ta=0,cf=0,uf=null,hb=null,Io=0,df=null;function yn(){return(Ye&2)!==0&&qe!==0?qe&-qe:I.T!==null?bf():Rh()}function gb(){if(bn===0)if((qe&536870912)===0||Ue){var t=Xs;Xs<<=1,(Xs&3932160)===0&&(Xs=262144),bn=t}else bn=536870912;return t=pn.current,t!==null&&(t.flags|=32),bn}function an(t,n,r){(t===rt&&(We===2||We===9)||t.cancelPendingCommit!==null)&&(Ci(t,0),Ja(t,qe,bn,!1)),po(t,r),((Ye&2)===0||t!==rt)&&(t===rt&&((Ye&2)===0&&(Nr|=r),ht===4&&Ja(t,qe,bn,!1)),ra(t))}function bb(t,n,r){if((Ye&6)!==0)throw Error(o(327));var s=!r&&(n&127)===0&&(n&t.expiredLanes)===0||mo(t,n),d=s?zS(t,n):mf(t,n,!0),f=s;do{if(d===0){$i&&!s&&Ja(t,n,0,!1);break}else{if(r=t.current.alternate,f&&!ES(r)){d=mf(t,n,!1),f=!1;continue}if(d===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var k=t;d=Yo;var D=k.current.memoizedState.isDehydrated;if(D&&(Ci(k,y).flags|=256),y=mf(k,y,!1),y!==2){if(of&&!D){k.errorRecoveryDisabledLanes|=f,Nr|=f,d=4;break e}f=nn,nn=d,f!==null&&(nn===null?nn=f:nn.push.apply(nn,f))}d=y}if(f=!1,d!==2)continue}}if(d===1){Ci(t,0),Ja(t,n,0,!0);break}e:{switch(s=t,f=d,f){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:Ja(s,n,bn,!Ka);break e;case 2:nn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(d=Bl+300-cn(),10<d)){if(Ja(s,n,bn,!Ka),Ws(s,0,!0)!==0)break e;Ta=n,s.timeoutHandle=Xb(yb.bind(null,s,r,nn,Vl,lf,n,bn,Nr,Ti,Ka,f,"Throttled",-0,0),d);break e}yb(s,r,nn,Vl,lf,n,bn,Nr,Ti,Ka,f,null,-0,0)}}break}while(!0);ra(t)}function yb(t,n,r,s,d,f,y,k,D,H,K,ee,P,G){if(t.timeoutHandle=-1,ee=n.subtreeFlags,ee&8192||(ee&16785408)===16785408){ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},ub(n,f,ee);var fe=(f&62914560)===f?Bl-cn():(f&4194048)===f?pb-cn():0;if(fe=pk(ee,fe),fe!==null){Ta=f,t.cancelPendingCommit=fe(Tb.bind(null,t,n,f,r,s,d,y,k,D,K,ee,null,P,G)),Ja(t,f,y,!H);return}}Tb(t,n,f,r,s,d,y,k,D)}function ES(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var s=0;s<r.length;s++){var d=r[s],f=d.getSnapshot;d=d.value;try{if(!fn(f(),d))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(t,n,r,s){n&=~sf,n&=~Nr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var d=n;0<d;){var f=31-dn(d),y=1<<f;s[f]=-1,d&=~y}r!==0&&Ch(t,r,n)}function Ul(){return(Ye&6)===0?(Xo(0),!1):!0}function ff(){if(Le!==null){if(We===0)var t=Le.return;else t=Le,ha=jr=null,jd(t),yi=null,Eo=0,t=Le;for(;t!==null;)Kg(t.alternate,t),t=t.return;Le=null}}function Ci(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,WS(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Ta=0,ff(),rt=t,Le=r=ma(t.current,null),qe=n,We=0,gn=null,Ka=!1,$i=mo(t,n),of=!1,Ti=bn=sf=Nr=Wa=ht=0,nn=Yo=null,lf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var d=31-dn(s),f=1<<d;n|=t[d],s&=~f}return $a=n,ll(),r}function xb(t,n){Ee=null,I.H=Bo,n===bi||n===gl?(n=O0(),We=3):n===hd?(n=O0(),We=4):We=n===Hd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,gn=n,Le===null&&(ht=1,El(t,jn(n,t.current)))}function vb(){var t=pn.current;return t===null?!0:(qe&4194048)===qe?Rn===null:(qe&62914560)===qe||(qe&536870912)!==0?t===Rn:!1}function wb(){var t=I.H;return I.H=Bo,t===null?Bo:t}function Sb(){var t=I.A;return I.A=CS,t}function Fl(){ht=4,Ka||(qe&4194048)!==qe&&pn.current!==null||($i=!0),(Wa&134217727)===0&&(Nr&134217727)===0||rt===null||Ja(rt,qe,bn,!1)}function mf(t,n,r){var s=Ye;Ye|=2;var d=wb(),f=Sb();(rt!==t||qe!==n)&&(Vl=null,Ci(t,n)),n=!1;var y=ht;e:do try{if(We!==0&&Le!==null){var k=Le,D=gn;switch(We){case 8:ff(),y=6;break e;case 3:case 2:case 9:case 6:pn.current===null&&(n=!0);var H=We;if(We=0,gn=null,Ai(t,k,D,H),r&&$i){y=0;break e}break;default:H=We,We=0,gn=null,Ai(t,k,D,H)}}RS(),y=ht;break}catch(K){xb(t,K)}while(!0);return n&&t.shellSuspendCounter++,ha=jr=null,Ye=s,I.H=d,I.A=f,Le===null&&(rt=null,qe=0,ll()),y}function RS(){for(;Le!==null;)kb(Le)}function zS(t,n){var r=Ye;Ye|=2;var s=wb(),d=Sb();rt!==t||qe!==n?(Vl=null,ql=cn()+500,Ci(t,n)):$i=mo(t,n);e:do try{if(We!==0&&Le!==null){n=Le;var f=gn;t:switch(We){case 1:We=0,gn=null,Ai(t,n,f,1);break;case 2:case 9:if(M0(f)){We=0,gn=null,_b(n);break}n=function(){We!==2&&We!==9||rt!==t||(We=7),ra(t)},f.then(n,n);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:M0(f)?(We=0,gn=null,_b(n)):(We=0,gn=null,Ai(t,n,f,7));break;case 5:var y=null;switch(Le.tag){case 26:y=Le.memoizedState;case 5:case 27:var k=Le;if(y?cy(y):k.stateNode.complete){We=0,gn=null;var D=k.sibling;if(D!==null)Le=D;else{var H=k.return;H!==null?(Le=H,Hl(H)):Le=null}break t}}We=0,gn=null,Ai(t,n,f,5);break;case 6:We=0,gn=null,Ai(t,n,f,6);break;case 8:ff(),ht=6;break e;default:throw Error(o(462))}}MS();break}catch(K){xb(t,K)}while(!0);return ha=jr=null,I.H=s,I.A=d,Ye=r,Le!==null?0:(rt=null,qe=0,ll(),ht)}function MS(){for(;Le!==null&&!nw();)kb(Le)}function kb(t){var n=Ig(t.alternate,t,$a);t.memoizedProps=t.pendingProps,n===null?Hl(t):Le=n}function _b(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=Ug(r,n,n.pendingProps,n.type,void 0,qe);break;case 11:n=Ug(r,n,n.pendingProps,n.type.render,n.ref,qe);break;case 5:jd(n);default:Kg(r,n),n=Le=S0(n,$a),n=Ig(r,n,$a)}t.memoizedProps=t.pendingProps,n===null?Hl(t):Le=n}function Ai(t,n,r,s){ha=jr=null,jd(n),yi=null,Eo=0;var d=n.return;try{if(wS(t,d,n,r,qe)){ht=1,El(t,jn(r,t.current)),Le=null;return}}catch(f){if(d!==null)throw Le=d,f;ht=1,El(t,jn(r,t.current)),Le=null;return}n.flags&32768?(Ue||s===1?t=!0:$i||(qe&536870912)!==0?t=!1:(Ka=t=!0,(s===2||s===9||s===3||s===6)&&(s=pn.current,s!==null&&s.tag===13&&(s.flags|=16384))),$b(n,t)):Hl(n)}function Hl(t){var n=t;do{if((n.flags&32768)!==0){$b(n,Ka);return}t=n.return;var r=_S(n.alternate,n,$a);if(r!==null){Le=r;return}if(n=n.sibling,n!==null){Le=n;return}Le=n=t}while(n!==null);ht===0&&(ht=5)}function $b(t,n){do{var r=$S(t.alternate,t);if(r!==null){r.flags&=32767,Le=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){Le=t;return}Le=t=r}while(t!==null);ht=6,Le=null}function Tb(t,n,r,s,d,f,y,k,D){t.cancelPendingCommit=null;do Pl();while($t!==0);if((Ye&6)!==0)throw Error(o(327));if(n!==null){if(n===t.current)throw Error(o(177));if(f=n.lanes|n.childLanes,f|=ed,fw(t,r,f,y,k,D),t===rt&&(Le=rt=null,qe=0),ji=n,Qa=t,Ta=r,cf=f,uf=d,hb=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,LS(Ys,function(){return Rb(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=I.T,I.T=null,d=re.p,re.p=2,y=Ye,Ye|=4;try{TS(t,n,r)}finally{Ye=y,re.p=d,I.T=s}}$t=1,jb(),Cb(),Ab()}}function jb(){if($t===1){$t=0;var t=Qa,n=ji,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=I.T,I.T=null;var s=re.p;re.p=2;var d=Ye;Ye|=4;try{sb(n,t);var f=$f,y=m0(t.containerInfo),k=f.focusedElem,D=f.selectionRange;if(y!==k&&k&&k.ownerDocument&&f0(k.ownerDocument.documentElement,k)){if(D!==null&&Ku(k)){var H=D.start,K=D.end;if(K===void 0&&(K=H),"selectionStart"in k)k.selectionStart=H,k.selectionEnd=Math.min(K,k.value.length);else{var ee=k.ownerDocument||document,P=ee&&ee.defaultView||window;if(P.getSelection){var G=P.getSelection(),fe=k.textContent.length,Se=Math.min(D.start,fe),nt=D.end===void 0?Se:Math.min(D.end,fe);!G.extend&&Se>nt&&(y=nt,nt=Se,Se=y);var q=d0(k,Se),L=d0(k,nt);if(q&&L&&(G.rangeCount!==1||G.anchorNode!==q.node||G.anchorOffset!==q.offset||G.focusNode!==L.node||G.focusOffset!==L.offset)){var F=ee.createRange();F.setStart(q.node,q.offset),G.removeAllRanges(),Se>nt?(G.addRange(F),G.extend(L.node,L.offset)):(F.setEnd(L.node,L.offset),G.addRange(F))}}}}for(ee=[],G=k;G=G.parentNode;)G.nodeType===1&&ee.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<ee.length;k++){var J=ee[k];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}nc=!!_f,$f=_f=null}finally{Ye=d,re.p=s,I.T=r}}t.current=n,$t=2}}function Cb(){if($t===2){$t=0;var t=Qa,n=ji,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=I.T,I.T=null;var s=re.p;re.p=2;var d=Ye;Ye|=4;try{nb(t,n.alternate,n)}finally{Ye=d,re.p=s,I.T=r}}$t=3}}function Ab(){if($t===4||$t===3){$t=0,aw();var t=Qa,n=ji,r=Ta,s=hb;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?$t=5:($t=0,ji=Qa=null,Eb(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Za=null),Eu(r),n=n.stateNode,un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(fo,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=I.T,d=re.p,re.p=2,I.T=null;try{for(var f=t.onRecoverableError,y=0;y<s.length;y++){var k=s[y];f(k.value,{componentStack:k.stack})}}finally{I.T=n,re.p=d}}(Ta&3)!==0&&Pl(),ra(t),d=t.pendingLanes,(r&261930)!==0&&(d&42)!==0?t===df?Io++:(Io=0,df=t):Io=0,Xo(0)}}function Eb(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Co(n)))}function Pl(){return jb(),Cb(),Ab(),Rb()}function Rb(){if($t!==5)return!1;var t=Qa,n=cf;cf=0;var r=Eu(Ta),s=I.T,d=re.p;try{re.p=32>r?32:r,I.T=null,r=uf,uf=null;var f=Qa,y=Ta;if($t=0,ji=Qa=null,Ta=0,(Ye&6)!==0)throw Error(o(331));var k=Ye;if(Ye|=4,fb(f.current),cb(f,f.current,y,r),Ye=k,Xo(0,!1),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(fo,f)}catch{}return!0}finally{re.p=d,I.T=s,Eb(t,n)}}function zb(t,n,r){n=jn(r,n),n=Fd(t.stateNode,n,2),t=Ga(t,n,2),t!==null&&(po(t,2),ra(t))}function Ze(t,n,r){if(t.tag===3)zb(t,t,r);else for(;n!==null;){if(n.tag===3){zb(n,t,r);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Za===null||!Za.has(s))){t=jn(r,t),r=Mg(2),s=Ga(n,r,2),s!==null&&(Dg(r,s,n,t),po(s,2),ra(s));break}}n=n.return}}function pf(t,n,r){var s=t.pingCache;if(s===null){s=t.pingCache=new AS;var d=new Set;s.set(n,d)}else d=s.get(n),d===void 0&&(d=new Set,s.set(n,d));d.has(r)||(of=!0,d.add(r),t=DS.bind(null,t,n,r),n.then(t,t))}function DS(t,n,r){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,rt===t&&(qe&r)===r&&(ht===4||ht===3&&(qe&62914560)===qe&&300>cn()-Bl?(Ye&2)===0&&Ci(t,0):sf|=r,Ti===qe&&(Ti=0)),ra(t)}function Mb(t,n){n===0&&(n=jh()),t=_r(t,n),t!==null&&(po(t,n),ra(t))}function OS(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),Mb(t,r)}function NS(t,n){var r=0;switch(t.tag){case 31:case 13:var s=t.stateNode,d=t.memoizedState;d!==null&&(r=d.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(n),Mb(t,r)}function LS(t,n){return Tu(t,n)}var Gl=null,Ei=null,hf=!1,Yl=!1,gf=!1,er=0;function ra(t){t!==Ei&&t.next===null&&(Ei===null?Gl=Ei=t:Ei=Ei.next=t),Yl=!0,hf||(hf=!0,qS())}function Xo(t,n){if(!gf&&Yl){gf=!0;do for(var r=!1,s=Gl;s!==null;){if(t!==0){var d=s.pendingLanes;if(d===0)var f=0;else{var y=s.suspendedLanes,k=s.pingedLanes;f=(1<<31-dn(42|t)+1)-1,f&=d&~(y&~k),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,Lb(s,f))}else f=qe,f=Ws(s,s===rt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||mo(s,f)||(r=!0,Lb(s,f));s=s.next}while(r);gf=!1}}function BS(){Db()}function Db(){Yl=hf=!1;var t=0;er!==0&&KS()&&(t=er);for(var n=cn(),r=null,s=Gl;s!==null;){var d=s.next,f=Ob(s,n);f===0?(s.next=null,r===null?Gl=d:r.next=d,d===null&&(Ei=r)):(r=s,(t!==0||(f&3)!==0)&&(Yl=!0)),s=d}$t!==0&&$t!==5||Xo(t),er!==0&&(er=0)}function Ob(t,n){for(var r=t.suspendedLanes,s=t.pingedLanes,d=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-dn(f),k=1<<y,D=d[y];D===-1?((k&r)===0||(k&s)!==0)&&(d[y]=dw(k,n)):D<=n&&(t.expiredLanes|=k),f&=~k}if(n=rt,r=qe,r=Ws(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,r===0||t===n&&(We===2||We===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ju(s),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||mo(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(s!==null&&ju(s),Eu(r)){case 2:case 8:r=$h;break;case 32:r=Ys;break;case 268435456:r=Th;break;default:r=Ys}return s=Nb.bind(null,t),r=Tu(r,s),t.callbackPriority=n,t.callbackNode=r,n}return s!==null&&s!==null&&ju(s),t.callbackPriority=2,t.callbackNode=null,2}function Nb(t,n){if($t!==0&&$t!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Pl()&&t.callbackNode!==r)return null;var s=qe;return s=Ws(t,t===rt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(bb(t,s,n),Ob(t,cn()),t.callbackNode!=null&&t.callbackNode===r?Nb.bind(null,t):null)}function Lb(t,n){if(Pl())return null;bb(t,n,!0)}function qS(){ZS(function(){(Ye&6)!==0?Tu(_h,BS):Db()})}function bf(){if(er===0){var t=hi;t===0&&(t=Is,Is<<=1,(Is&261888)===0&&(Is=256)),er=t}return er}function Bb(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:el(""+t)}function qb(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function VS(t,n,r,s,d){if(n==="submit"&&r&&r.stateNode===d){var f=Bb((d[Zt]||null).action),y=s.submitter;y&&(n=(n=y[Zt]||null)?Bb(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var k=new rl("action","action",null,s,d);t.push({event:k,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(er!==0){var D=y?qb(d,y):new FormData(d);Nd(r,{pending:!0,data:D,method:d.method,action:f},null,D)}}else typeof f=="function"&&(k.preventDefault(),D=y?qb(d,y):new FormData(d),Nd(r,{pending:!0,data:D,method:d.method,action:f},f,D))},currentTarget:d}]})}}for(var yf=0;yf<Ju.length;yf++){var xf=Ju[yf],US=xf.toLowerCase(),FS=xf[0].toUpperCase()+xf.slice(1);qn(US,"on"+FS)}qn(g0,"onAnimationEnd"),qn(b0,"onAnimationIteration"),qn(y0,"onAnimationStart"),qn("dblclick","onDoubleClick"),qn("focusin","onFocus"),qn("focusout","onBlur"),qn(rS,"onTransitionRun"),qn(iS,"onTransitionStart"),qn(oS,"onTransitionCancel"),qn(x0,"onTransitionEnd"),ti("onMouseEnter",["mouseout","mouseover"]),ti("onMouseLeave",["mouseout","mouseover"]),ti("onPointerEnter",["pointerout","pointerover"]),ti("onPointerLeave",["pointerout","pointerover"]),vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vr("onBeforeInput",["compositionend","keypress","textInput","paste"]),vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function Vb(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var s=t[r],d=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var y=s.length-1;0<=y;y--){var k=s[y],D=k.instance,H=k.currentTarget;if(k=k.listener,D!==f&&d.isPropagationStopped())break e;f=k,d.currentTarget=H;try{f(d)}catch(K){sl(K)}d.currentTarget=null,f=D}else for(y=0;y<s.length;y++){if(k=s[y],D=k.instance,H=k.currentTarget,k=k.listener,D!==f&&d.isPropagationStopped())break e;f=k,d.currentTarget=H;try{f(d)}catch(K){sl(K)}d.currentTarget=null,f=D}}}}function Be(t,n){var r=n[Ru];r===void 0&&(r=n[Ru]=new Set);var s=t+"__bubble";r.has(s)||(Ub(n,t,2,!1),r.add(s))}function vf(t,n,r){var s=0;n&&(s|=4),Ub(r,t,s,n)}var Il="_reactListening"+Math.random().toString(36).slice(2);function wf(t){if(!t[Il]){t[Il]=!0,Dh.forEach(function(r){r!=="selectionchange"&&(HS.has(r)||vf(r,!1,t),vf(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Il]||(n[Il]=!0,vf("selectionchange",!1,n))}}function Ub(t,n,r,s){switch(gy(n)){case 2:var d=bk;break;case 8:d=yk;break;default:d=Nf}r=d.bind(null,n,r,t),d=void 0,!Vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),s?d!==void 0?t.addEventListener(n,r,{capture:!0,passive:d}):t.addEventListener(n,r,!0):d!==void 0?t.addEventListener(n,r,{passive:d}):t.addEventListener(n,r,!1)}function Sf(t,n,r,s,d){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var k=s.stateNode.containerInfo;if(k===d)break;if(y===4)for(y=s.return;y!==null;){var D=y.tag;if((D===3||D===4)&&y.stateNode.containerInfo===d)return;y=y.return}for(;k!==null;){if(y=Qr(k),y===null)return;if(D=y.tag,D===5||D===6||D===26||D===27){s=f=y;continue e}k=k.parentNode}}s=s.return}Yh(function(){var H=f,K=Bu(r),ee=[];e:{var P=v0.get(t);if(P!==void 0){var G=rl,fe=t;switch(t){case"keypress":if(nl(r)===0)break e;case"keydown":case"keyup":G=Nw;break;case"focusin":fe="focus",G=Pu;break;case"focusout":fe="blur",G=Pu;break;case"beforeblur":case"afterblur":G=Pu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=_w;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=qw;break;case g0:case b0:case y0:G=jw;break;case x0:G=Uw;break;case"scroll":case"scrollend":G=Sw;break;case"wheel":G=Hw;break;case"copy":case"cut":case"paste":G=Aw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Zh;break;case"toggle":case"beforetoggle":G=Gw}var Se=(n&4)!==0,nt=!Se&&(t==="scroll"||t==="scrollend"),q=Se?P!==null?P+"Capture":null:P;Se=[];for(var L=H,F;L!==null;){var J=L;if(F=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||F===null||q===null||(J=bo(L,q),J!=null&&Se.push(Wo(L,J,F))),nt)break;L=L.return}0<Se.length&&(P=new G(P,fe,null,r,K),ee.push({event:P,listeners:Se}))}}if((n&7)===0){e:{if(P=t==="mouseover"||t==="pointerover",G=t==="mouseout"||t==="pointerout",P&&r!==Lu&&(fe=r.relatedTarget||r.fromElement)&&(Qr(fe)||fe[Zr]))break e;if((G||P)&&(P=K.window===K?K:(P=K.ownerDocument)?P.defaultView||P.parentWindow:window,G?(fe=r.relatedTarget||r.toElement,G=H,fe=fe?Qr(fe):null,fe!==null&&(nt=u(fe),Se=fe.tag,fe!==nt||Se!==5&&Se!==27&&Se!==6)&&(fe=null)):(G=null,fe=H),G!==fe)){if(Se=Kh,J="onMouseLeave",q="onMouseEnter",L="mouse",(t==="pointerout"||t==="pointerover")&&(Se=Zh,J="onPointerLeave",q="onPointerEnter",L="pointer"),nt=G==null?P:go(G),F=fe==null?P:go(fe),P=new Se(J,L+"leave",G,r,K),P.target=nt,P.relatedTarget=F,J=null,Qr(K)===H&&(Se=new Se(q,L+"enter",fe,r,K),Se.target=F,Se.relatedTarget=nt,J=Se),nt=J,G&&fe)t:{for(Se=PS,q=G,L=fe,F=0,J=q;J;J=Se(J))F++;J=0;for(var xe=L;xe;xe=Se(xe))J++;for(;0<F-J;)q=Se(q),F--;for(;0<J-F;)L=Se(L),J--;for(;F--;){if(q===L||L!==null&&q===L.alternate){Se=q;break t}q=Se(q),L=Se(L)}Se=null}else Se=null;G!==null&&Fb(ee,P,G,Se,!1),fe!==null&&nt!==null&&Fb(ee,nt,fe,Se,!0)}}e:{if(P=H?go(H):window,G=P.nodeName&&P.nodeName.toLowerCase(),G==="select"||G==="input"&&P.type==="file")var Pe=i0;else if(a0(P))if(o0)Pe=tS;else{Pe=Jw;var pe=Qw}else G=P.nodeName,!G||G.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?H&&Nu(H.elementType)&&(Pe=i0):Pe=eS;if(Pe&&(Pe=Pe(t,H))){r0(ee,Pe,r,K);break e}pe&&pe(t,P,H),t==="focusout"&&H&&P.type==="number"&&H.memoizedProps.value!=null&&Ou(P,"number",P.value)}switch(pe=H?go(H):window,t){case"focusin":(a0(pe)||pe.contentEditable==="true")&&(si=pe,Wu=H,$o=null);break;case"focusout":$o=Wu=si=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,p0(ee,r,K);break;case"selectionchange":if(aS)break;case"keydown":case"keyup":p0(ee,r,K)}var ze;if(Yu)e:{switch(t){case"compositionstart":var Ve="onCompositionStart";break e;case"compositionend":Ve="onCompositionEnd";break e;case"compositionupdate":Ve="onCompositionUpdate";break e}Ve=void 0}else oi?t0(t,r)&&(Ve="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Ve="onCompositionStart");Ve&&(Qh&&r.locale!=="ko"&&(oi||Ve!=="onCompositionStart"?Ve==="onCompositionEnd"&&oi&&(ze=Ih()):(Ba=K,Uu="value"in Ba?Ba.value:Ba.textContent,oi=!0)),pe=Xl(H,Ve),0<pe.length&&(Ve=new Wh(Ve,t,null,r,K),ee.push({event:Ve,listeners:pe}),ze?Ve.data=ze:(ze=n0(r),ze!==null&&(Ve.data=ze)))),(ze=Iw?Xw(t,r):Kw(t,r))&&(Ve=Xl(H,"onBeforeInput"),0<Ve.length&&(pe=new Wh("onBeforeInput","beforeinput",null,r,K),ee.push({event:pe,listeners:Ve}),pe.data=ze)),VS(ee,t,H,r,K)}Vb(ee,n)})}function Wo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Xl(t,n){for(var r=n+"Capture",s=[];t!==null;){var d=t,f=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||f===null||(d=bo(t,r),d!=null&&s.unshift(Wo(t,d,f)),d=bo(t,n),d!=null&&s.push(Wo(t,d,f))),t.tag===3)return s;t=t.return}return[]}function PS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fb(t,n,r,s,d){for(var f=n._reactName,y=[];r!==null&&r!==s;){var k=r,D=k.alternate,H=k.stateNode;if(k=k.tag,D!==null&&D===s)break;k!==5&&k!==26&&k!==27||H===null||(D=H,d?(H=bo(r,f),H!=null&&y.unshift(Wo(r,H,D))):d||(H=bo(r,f),H!=null&&y.push(Wo(r,H,D)))),r=r.return}y.length!==0&&t.push({event:n,listeners:y})}var GS=/\r\n?/g,YS=/\u0000|\uFFFD/g;function Hb(t){return(typeof t=="string"?t:""+t).replace(GS,`
`).replace(YS,"")}function Pb(t,n){return n=Hb(n),Hb(t)===n}function tt(t,n,r,s,d,f){switch(r){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||ai(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&ai(t,""+s);break;case"className":Qs(t,"class",s);break;case"tabIndex":Qs(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Qs(t,r,s);break;case"style":Ph(t,s,f);break;case"data":if(n!=="object"){Qs(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(r);break}s=el(""+s),t.setAttribute(r,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&tt(t,n,"name",d.name,d,null),tt(t,n,"formEncType",d.formEncType,d,null),tt(t,n,"formMethod",d.formMethod,d,null),tt(t,n,"formTarget",d.formTarget,d,null)):(tt(t,n,"encType",d.encType,d,null),tt(t,n,"method",d.method,d,null),tt(t,n,"target",d.target,d,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(r);break}s=el(""+s),t.setAttribute(r,s);break;case"onClick":s!=null&&(t.onclick=da);break;case"onScroll":s!=null&&Be("scroll",t);break;case"onScrollEnd":s!=null&&Be("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(r=s.__html,r!=null){if(d.children!=null)throw Error(o(60));t.innerHTML=r}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}r=el(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(r,""+s):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":s===!0?t.setAttribute(r,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(r,s):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(r,s):t.removeAttribute(r);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(r):t.setAttribute(r,s);break;case"popover":Be("beforetoggle",t),Be("toggle",t),Zs(t,"popover",s);break;case"xlinkActuate":ua(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ua(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ua(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ua(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ua(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ua(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ua(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ua(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ua(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Zs(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=vw.get(r)||r,Zs(t,r,s))}}function kf(t,n,r,s,d,f){switch(r){case"style":Ph(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(r=s.__html,r!=null){if(d.children!=null)throw Error(o(60));t.innerHTML=r}}break;case"children":typeof s=="string"?ai(t,s):(typeof s=="number"||typeof s=="bigint")&&ai(t,""+s);break;case"onScroll":s!=null&&Be("scroll",t);break;case"onScrollEnd":s!=null&&Be("scrollend",t);break;case"onClick":s!=null&&(t.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oh.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(d=r.endsWith("Capture"),n=r.slice(2,d?r.length-7:void 0),f=t[Zt]||null,f=f!=null?f[r]:null,typeof f=="function"&&t.removeEventListener(n,f,d),typeof s=="function")){typeof f!="function"&&f!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,s,d);break e}r in t?t[r]=s:s===!0?t.setAttribute(r,""):Zs(t,r,s)}}}function Ut(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",t),Be("load",t);var s=!1,d=!1,f;for(f in r)if(r.hasOwnProperty(f)){var y=r[f];if(y!=null)switch(f){case"src":s=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:tt(t,n,f,y,r,null)}}d&&tt(t,n,"srcSet",r.srcSet,r,null),s&&tt(t,n,"src",r.src,r,null);return;case"input":Be("invalid",t);var k=f=y=d=null,D=null,H=null;for(s in r)if(r.hasOwnProperty(s)){var K=r[s];if(K!=null)switch(s){case"name":d=K;break;case"type":y=K;break;case"checked":D=K;break;case"defaultChecked":H=K;break;case"value":f=K;break;case"defaultValue":k=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(o(137,n));break;default:tt(t,n,s,K,r,null)}}Vh(t,f,k,D,H,y,d,!1);return;case"select":Be("invalid",t),s=y=f=null;for(d in r)if(r.hasOwnProperty(d)&&(k=r[d],k!=null))switch(d){case"value":f=k;break;case"defaultValue":y=k;break;case"multiple":s=k;default:tt(t,n,d,k,r,null)}n=f,r=y,t.multiple=!!s,n!=null?ni(t,!!s,n,!1):r!=null&&ni(t,!!s,r,!0);return;case"textarea":Be("invalid",t),f=d=s=null;for(y in r)if(r.hasOwnProperty(y)&&(k=r[y],k!=null))switch(y){case"value":s=k;break;case"defaultValue":d=k;break;case"children":f=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(o(91));break;default:tt(t,n,y,k,r,null)}Fh(t,s,d,f);return;case"option":for(D in r)if(r.hasOwnProperty(D)&&(s=r[D],s!=null))switch(D){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:tt(t,n,D,s,r,null)}return;case"dialog":Be("beforetoggle",t),Be("toggle",t),Be("cancel",t),Be("close",t);break;case"iframe":case"object":Be("load",t);break;case"video":case"audio":for(s=0;s<Ko.length;s++)Be(Ko[s],t);break;case"image":Be("error",t),Be("load",t);break;case"details":Be("toggle",t);break;case"embed":case"source":case"link":Be("error",t),Be("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in r)if(r.hasOwnProperty(H)&&(s=r[H],s!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:tt(t,n,H,s,r,null)}return;default:if(Nu(n)){for(K in r)r.hasOwnProperty(K)&&(s=r[K],s!==void 0&&kf(t,n,K,s,r,void 0));return}}for(k in r)r.hasOwnProperty(k)&&(s=r[k],s!=null&&tt(t,n,k,s,r,null))}function IS(t,n,r,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,f=null,y=null,k=null,D=null,H=null,K=null;for(G in r){var ee=r[G];if(r.hasOwnProperty(G)&&ee!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":D=ee;default:s.hasOwnProperty(G)||tt(t,n,G,null,s,ee)}}for(var P in s){var G=s[P];if(ee=r[P],s.hasOwnProperty(P)&&(G!=null||ee!=null))switch(P){case"type":f=G;break;case"name":d=G;break;case"checked":H=G;break;case"defaultChecked":K=G;break;case"value":y=G;break;case"defaultValue":k=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,n));break;default:G!==ee&&tt(t,n,P,G,s,ee)}}Du(t,y,k,D,H,K,f,d);return;case"select":G=y=k=P=null;for(f in r)if(D=r[f],r.hasOwnProperty(f)&&D!=null)switch(f){case"value":break;case"multiple":G=D;default:s.hasOwnProperty(f)||tt(t,n,f,null,s,D)}for(d in s)if(f=s[d],D=r[d],s.hasOwnProperty(d)&&(f!=null||D!=null))switch(d){case"value":P=f;break;case"defaultValue":k=f;break;case"multiple":y=f;default:f!==D&&tt(t,n,d,f,s,D)}n=k,r=y,s=G,P!=null?ni(t,!!r,P,!1):!!s!=!!r&&(n!=null?ni(t,!!r,n,!0):ni(t,!!r,r?[]:"",!1));return;case"textarea":G=P=null;for(k in r)if(d=r[k],r.hasOwnProperty(k)&&d!=null&&!s.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:tt(t,n,k,null,s,d)}for(y in s)if(d=s[y],f=r[y],s.hasOwnProperty(y)&&(d!=null||f!=null))switch(y){case"value":P=d;break;case"defaultValue":G=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:d!==f&&tt(t,n,y,d,s,f)}Uh(t,P,G);return;case"option":for(var fe in r)if(P=r[fe],r.hasOwnProperty(fe)&&P!=null&&!s.hasOwnProperty(fe))switch(fe){case"selected":t.selected=!1;break;default:tt(t,n,fe,null,s,P)}for(D in s)if(P=s[D],G=r[D],s.hasOwnProperty(D)&&P!==G&&(P!=null||G!=null))switch(D){case"selected":t.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:tt(t,n,D,P,s,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in r)P=r[Se],r.hasOwnProperty(Se)&&P!=null&&!s.hasOwnProperty(Se)&&tt(t,n,Se,null,s,P);for(H in s)if(P=s[H],G=r[H],s.hasOwnProperty(H)&&P!==G&&(P!=null||G!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(o(137,n));break;default:tt(t,n,H,P,s,G)}return;default:if(Nu(n)){for(var nt in r)P=r[nt],r.hasOwnProperty(nt)&&P!==void 0&&!s.hasOwnProperty(nt)&&kf(t,n,nt,void 0,s,P);for(K in s)P=s[K],G=r[K],!s.hasOwnProperty(K)||P===G||P===void 0&&G===void 0||kf(t,n,K,P,s,G);return}}for(var q in r)P=r[q],r.hasOwnProperty(q)&&P!=null&&!s.hasOwnProperty(q)&&tt(t,n,q,null,s,P);for(ee in s)P=s[ee],G=r[ee],!s.hasOwnProperty(ee)||P===G||P==null&&G==null||tt(t,n,ee,P,s,G)}function Gb(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),s=0;s<r.length;s++){var d=r[s],f=d.transferSize,y=d.initiatorType,k=d.duration;if(f&&k&&Gb(y)){for(y=0,k=d.responseEnd,s+=1;s<r.length;s++){var D=r[s],H=D.startTime;if(H>k)break;var K=D.transferSize,ee=D.initiatorType;K&&Gb(ee)&&(D=D.responseEnd,y+=K*(D<k?1:(k-H)/(D-H)))}if(--s,n+=8*(f+y)/(d.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var _f=null,$f=null;function Kl(t){return t.nodeType===9?t:t.ownerDocument}function Yb(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ib(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Tf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jf=null;function KS(){var t=window.event;return t&&t.type==="popstate"?t===jf?!1:(jf=t,!0):(jf=null,!1)}var Xb=typeof setTimeout=="function"?setTimeout:void 0,WS=typeof clearTimeout=="function"?clearTimeout:void 0,Kb=typeof Promise=="function"?Promise:void 0,ZS=typeof queueMicrotask=="function"?queueMicrotask:typeof Kb<"u"?function(t){return Kb.resolve(null).then(t).catch(QS)}:Xb;function QS(t){setTimeout(function(){throw t})}function tr(t){return t==="head"}function Wb(t,n){var r=n,s=0;do{var d=r.nextSibling;if(t.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"||r==="/&"){if(s===0){t.removeChild(d),Di(n);return}s--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")s++;else if(r==="html")Zo(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Zo(r);for(var f=r.firstChild;f;){var y=f.nextSibling,k=f.nodeName;f[ho]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&f.rel.toLowerCase()==="stylesheet"||r.removeChild(f),f=y}}else r==="body"&&Zo(t.ownerDocument.body);r=d}while(r);Di(n)}function Zb(t,n){var r=t;t=0;do{var s=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=s}while(r)}function Cf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Cf(r),zu(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function JS(t,n,r,s){for(;t.nodeType===1;){var d=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ho])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=zn(t.nextSibling),t===null)break}return null}function ek(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=zn(t.nextSibling),t===null))return null;return t}function Qb(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=zn(t.nextSibling),t===null))return null;return t}function Af(t){return t.data==="$?"||t.data==="$~"}function Ef(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function tk(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var s=function(){n(),r.removeEventListener("DOMContentLoaded",s)};r.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function zn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Rf=null;function Jb(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return zn(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function ey(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function ty(t,n,r){switch(n=Kl(r),t){case"html":if(t=n.documentElement,!t)throw Error(o(452));return t;case"head":if(t=n.head,!t)throw Error(o(453));return t;case"body":if(t=n.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Zo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zu(t)}var Mn=new Map,ny=new Set;function Wl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ja=re.d;re.d={f:nk,r:ak,D:rk,C:ik,L:ok,m:sk,X:ck,S:lk,M:uk};function nk(){var t=ja.f(),n=Ul();return t||n}function ak(t){var n=Jr(t);n!==null&&n.tag===5&&n.type==="form"?xg(n):ja.r(t)}var Ri=typeof document>"u"?null:document;function ay(t,n,r){var s=Ri;if(s&&typeof n=="string"&&n){var d=$n(n);d='link[rel="'+t+'"][href="'+d+'"]',typeof r=="string"&&(d+='[crossorigin="'+r+'"]'),ny.has(d)||(ny.add(d),t={rel:t,crossOrigin:r,href:n},s.querySelector(d)===null&&(n=s.createElement("link"),Ut(n,"link",t),Rt(n),s.head.appendChild(n)))}}function rk(t){ja.D(t),ay("dns-prefetch",t,null)}function ik(t,n){ja.C(t,n),ay("preconnect",t,n)}function ok(t,n,r){ja.L(t,n,r);var s=Ri;if(s&&t&&n){var d='link[rel="preload"][as="'+$n(n)+'"]';n==="image"&&r&&r.imageSrcSet?(d+='[imagesrcset="'+$n(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(d+='[imagesizes="'+$n(r.imageSizes)+'"]')):d+='[href="'+$n(t)+'"]';var f=d;switch(n){case"style":f=zi(t);break;case"script":f=Mi(t)}Mn.has(f)||(t=x({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Mn.set(f,t),s.querySelector(d)!==null||n==="style"&&s.querySelector(Qo(f))||n==="script"&&s.querySelector(Jo(f))||(n=s.createElement("link"),Ut(n,"link",t),Rt(n),s.head.appendChild(n)))}}function sk(t,n){ja.m(t,n);var r=Ri;if(r&&t){var s=n&&typeof n.as=="string"?n.as:"script",d='link[rel="modulepreload"][as="'+$n(s)+'"][href="'+$n(t)+'"]',f=d;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Mi(t)}if(!Mn.has(f)&&(t=x({rel:"modulepreload",href:t},n),Mn.set(f,t),r.querySelector(d)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Jo(f)))return}s=r.createElement("link"),Ut(s,"link",t),Rt(s),r.head.appendChild(s)}}}function lk(t,n,r){ja.S(t,n,r);var s=Ri;if(s&&t){var d=ei(s).hoistableStyles,f=zi(t);n=n||"default";var y=d.get(f);if(!y){var k={loading:0,preload:null};if(y=s.querySelector(Qo(f)))k.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Mn.get(f))&&zf(t,r);var D=y=s.createElement("link");Rt(D),Ut(D,"link",t),D._p=new Promise(function(H,K){D.onload=H,D.onerror=K}),D.addEventListener("load",function(){k.loading|=1}),D.addEventListener("error",function(){k.loading|=2}),k.loading|=4,Zl(y,n,s)}y={type:"stylesheet",instance:y,count:1,state:k},d.set(f,y)}}}function ck(t,n){ja.X(t,n);var r=Ri;if(r&&t){var s=ei(r).hoistableScripts,d=Mi(t),f=s.get(d);f||(f=r.querySelector(Jo(d)),f||(t=x({src:t,async:!0},n),(n=Mn.get(d))&&Mf(t,n),f=r.createElement("script"),Rt(f),Ut(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(d,f))}}function uk(t,n){ja.M(t,n);var r=Ri;if(r&&t){var s=ei(r).hoistableScripts,d=Mi(t),f=s.get(d);f||(f=r.querySelector(Jo(d)),f||(t=x({src:t,async:!0,type:"module"},n),(n=Mn.get(d))&&Mf(t,n),f=r.createElement("script"),Rt(f),Ut(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(d,f))}}function ry(t,n,r,s){var d=(d=je.current)?Wl(d):null;if(!d)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=zi(r.href),r=ei(d).hoistableStyles,s=r.get(n),s||(s={type:"style",instance:null,count:0,state:null},r.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=zi(r.href);var f=ei(d).hoistableStyles,y=f.get(t);if(y||(d=d.ownerDocument||d,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=d.querySelector(Qo(t)))&&!f._p&&(y.instance=f,y.state.loading=5),Mn.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Mn.set(t,r),f||dk(d,t,r,y.state))),n&&s===null)throw Error(o(528,""));return y}if(n&&s!==null)throw Error(o(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mi(r),r=ei(d).hoistableScripts,s=r.get(n),s||(s={type:"script",instance:null,count:0,state:null},r.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function zi(t){return'href="'+$n(t)+'"'}function Qo(t){return'link[rel="stylesheet"]['+t+"]"}function iy(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function dk(t,n,r,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Ut(n,"link",r),Rt(n),t.head.appendChild(n))}function Mi(t){return'[src="'+$n(t)+'"]'}function Jo(t){return"script[async]"+t}function oy(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+$n(r.href)+'"]');if(s)return n.instance=s,Rt(s),s;var d=x({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Rt(s),Ut(s,"style",d),Zl(s,r.precedence,t),n.instance=s;case"stylesheet":d=zi(r.href);var f=t.querySelector(Qo(d));if(f)return n.state.loading|=4,n.instance=f,Rt(f),f;s=iy(r),(d=Mn.get(d))&&zf(s,d),f=(t.ownerDocument||t).createElement("link"),Rt(f);var y=f;return y._p=new Promise(function(k,D){y.onload=k,y.onerror=D}),Ut(f,"link",s),n.state.loading|=4,Zl(f,r.precedence,t),n.instance=f;case"script":return f=Mi(r.src),(d=t.querySelector(Jo(f)))?(n.instance=d,Rt(d),d):(s=r,(d=Mn.get(f))&&(s=x({},r),Mf(s,d)),t=t.ownerDocument||t,d=t.createElement("script"),Rt(d),Ut(d,"link",s),t.head.appendChild(d),n.instance=d);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Zl(s,r.precedence,t));return n.instance}function Zl(t,n,r){for(var s=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=s.length?s[s.length-1]:null,f=d,y=0;y<s.length;y++){var k=s[y];if(k.dataset.precedence===n)f=k;else if(f!==d)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ql=null;function sy(t,n,r){if(Ql===null){var s=new Map,d=Ql=new Map;d.set(r,s)}else d=Ql,s=d.get(r),s||(s=new Map,d.set(r,s));if(s.has(t))return s;for(s.set(t,null),r=r.getElementsByTagName(t),d=0;d<r.length;d++){var f=r[d];if(!(f[ho]||f[Lt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var k=s.get(y);k?k.push(f):s.set(y,[f])}}return s}function ly(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function fk(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function cy(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function mk(t,n,r,s){if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=zi(s.href),f=n.querySelector(Qo(d));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Jl.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=f,Rt(f);return}f=n.ownerDocument||n,s=iy(s),(d=Mn.get(d))&&zf(s,d),f=f.createElement("link"),Rt(f);var y=f;y._p=new Promise(function(k,D){y.onload=k,y.onerror=D}),Ut(f,"link",s),r.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Jl.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var Df=0;function pk(t,n){return t.stylesheets&&t.count===0&&tc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var s=setTimeout(function(){if(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Df===0&&(Df=62500*XS());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Df?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(d)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ec=null;function tc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ec=new Map,n.forEach(hk,t),ec=null,Jl.call(t))}function hk(t,n){if(!(n.state.loading&4)){var r=ec.get(t);if(r)var s=r.get(null);else{r=new Map,ec.set(t,r);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<d.length;f++){var y=d[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),s=y)}s&&r.set(null,s)}d=n.instance,y=d.getAttribute("data-precedence"),f=r.get(y)||s,f===s&&r.set(null,d),r.set(y,d),this.count++,s=Jl.bind(this),d.addEventListener("load",s),d.addEventListener("error",s),f?f.parentNode.insertBefore(d,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),n.state.loading|=4}}var es={$$typeof:E,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function gk(t,n,r,s,d,f,y,k,D){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cu(0),this.hiddenUpdates=Cu(null),this.identifierPrefix=s,this.onUncaughtError=d,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function uy(t,n,r,s,d,f,y,k,D,H,K,ee){return t=new gk(t,n,r,y,D,H,K,ee,k),n=1,f===!0&&(n|=24),f=mn(3,null,null,n),t.current=f,f.stateNode=t,n=fd(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:r,cache:n},gd(f),t}function dy(t){return t?(t=ui,t):ui}function fy(t,n,r,s,d,f){d=dy(d),s.context===null?s.context=d:s.pendingContext=d,s=Pa(n),s.payload={element:r},f=f===void 0?null:f,f!==null&&(s.callback=f),r=Ga(t,s,n),r!==null&&(an(r,t,n),zo(r,t,n))}function my(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Of(t,n){my(t,n),(t=t.alternate)&&my(t,n)}function py(t){if(t.tag===13||t.tag===31){var n=_r(t,67108864);n!==null&&an(n,t,67108864),Of(t,67108864)}}function hy(t){if(t.tag===13||t.tag===31){var n=yn();n=Au(n);var r=_r(t,n);r!==null&&an(r,t,n),Of(t,n)}}var nc=!0;function bk(t,n,r,s){var d=I.T;I.T=null;var f=re.p;try{re.p=2,Nf(t,n,r,s)}finally{re.p=f,I.T=d}}function yk(t,n,r,s){var d=I.T;I.T=null;var f=re.p;try{re.p=8,Nf(t,n,r,s)}finally{re.p=f,I.T=d}}function Nf(t,n,r,s){if(nc){var d=Lf(s);if(d===null)Sf(t,n,s,ac,r),by(t,s);else if(vk(d,t,n,r,s))s.stopPropagation();else if(by(t,s),n&4&&-1<xk.indexOf(t)){for(;d!==null;){var f=Jr(d);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=xr(f.pendingLanes);if(y!==0){var k=f;for(k.pendingLanes|=2,k.entangledLanes|=2;y;){var D=1<<31-dn(y);k.entanglements[1]|=D,y&=~D}ra(f),(Ye&6)===0&&(ql=cn()+500,Xo(0))}}break;case 31:case 13:k=_r(f,2),k!==null&&an(k,f,2),Ul(),Of(f,2)}if(f=Lf(s),f===null&&Sf(t,n,s,ac,r),f===d)break;d=f}d!==null&&s.stopPropagation()}else Sf(t,n,s,null,r)}}function Lf(t){return t=Bu(t),Bf(t)}var ac=null;function Bf(t){if(ac=null,t=Qr(t),t!==null){var n=u(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=m(n),t!==null)return t;t=null}else if(r===31){if(t=p(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function gy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rw()){case _h:return 2;case $h:return 8;case Ys:case iw:return 32;case Th:return 268435456;default:return 32}default:return 32}}var qf=!1,nr=null,ar=null,rr=null,ts=new Map,ns=new Map,ir=[],xk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function by(t,n){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":ts.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(n.pointerId)}}function as(t,n,r,s,d,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:r,eventSystemFlags:s,nativeEvent:f,targetContainers:[d]},n!==null&&(n=Jr(n),n!==null&&py(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),t)}function vk(t,n,r,s,d){switch(n){case"focusin":return nr=as(nr,t,n,r,s,d),!0;case"dragenter":return ar=as(ar,t,n,r,s,d),!0;case"mouseover":return rr=as(rr,t,n,r,s,d),!0;case"pointerover":var f=d.pointerId;return ts.set(f,as(ts.get(f)||null,t,n,r,s,d)),!0;case"gotpointercapture":return f=d.pointerId,ns.set(f,as(ns.get(f)||null,t,n,r,s,d)),!0}return!1}function yy(t){var n=Qr(t.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=m(r),n!==null){t.blockedOn=n,zh(t.priority,function(){hy(r)});return}}else if(n===31){if(n=p(r),n!==null){t.blockedOn=n,zh(t.priority,function(){hy(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Lf(t.nativeEvent);if(r===null){r=t.nativeEvent;var s=new r.constructor(r.type,r);Lu=s,r.target.dispatchEvent(s),Lu=null}else return n=Jr(r),n!==null&&py(n),t.blockedOn=r,!1;n.shift()}return!0}function xy(t,n,r){rc(t)&&r.delete(n)}function wk(){qf=!1,nr!==null&&rc(nr)&&(nr=null),ar!==null&&rc(ar)&&(ar=null),rr!==null&&rc(rr)&&(rr=null),ts.forEach(xy),ns.forEach(xy)}function ic(t,n){t.blockedOn===n&&(t.blockedOn=null,qf||(qf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wk)))}var oc=null;function vy(t){oc!==t&&(oc=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var r=t[n],s=t[n+1],d=t[n+2];if(typeof s!="function"){if(Bf(s||r)===null)continue;break}var f=Jr(r);f!==null&&(t.splice(n,3),n-=3,Nd(f,{pending:!0,data:d,method:r.method,action:s},s,d))}}))}function Di(t){function n(D){return ic(D,t)}nr!==null&&ic(nr,t),ar!==null&&ic(ar,t),rr!==null&&ic(rr,t),ts.forEach(n),ns.forEach(n);for(var r=0;r<ir.length;r++){var s=ir[r];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ir.length&&(r=ir[0],r.blockedOn===null);)yy(r),r.blockedOn===null&&ir.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(s=0;s<r.length;s+=3){var d=r[s],f=r[s+1],y=d[Zt]||null;if(typeof f=="function")y||vy(r);else if(y){var k=null;if(f&&f.hasAttribute("formAction")){if(d=f,y=f[Zt]||null)k=y.formAction;else if(Bf(d)!==null)continue}else k=y.action;typeof k=="function"?r[s+1]=k:(r.splice(s,3),s-=3),vy(r)}}}function wy(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return d=y})},focusReset:"manual",scroll:"manual"})}function n(){d!==null&&(d(),d=null),s||setTimeout(r,20)}function r(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),d!==null&&(d(),d=null)}}}function Vf(t){this._internalRoot=t}sc.prototype.render=Vf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(o(409));var r=n.current,s=yn();fy(r,s,t,n,null,null)},sc.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;fy(t.current,2,null,t,null,null),Ul(),n[Zr]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Rh();t={blockedOn:null,target:t,priority:n};for(var r=0;r<ir.length&&n!==0&&n<ir[r].priority;r++);ir.splice(r,0,t),r===0&&yy(t)}};var Sy=a.version;if(Sy!=="19.2.7")throw Error(o(527,Sy,"19.2.7"));re.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=h(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Sk={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{fo=lc.inject(Sk),un=lc}catch{}}return is.createRoot=function(t,n){if(!l(t))throw Error(o(299));var r=!1,s="",d=Ag,f=Eg,y=Rg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=uy(t,1,!1,null,null,r,s,null,d,f,y,wy),t[Zr]=n.current,wf(t),new Vf(n)},is.hydrateRoot=function(t,n,r){if(!l(t))throw Error(o(299));var s=!1,d="",f=Ag,y=Eg,k=Rg,D=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(k=r.onRecoverableError),r.formState!==void 0&&(D=r.formState)),n=uy(t,1,!0,n,r??null,s,d,D,f,y,k,wy),n.context=dy(null),r=n.current,s=yn(),s=Au(s),d=Pa(s),d.callback=null,Ga(r,d,s),r=s,n.current.lanes=r,po(n,r),ra(n),t[Zr]=n.current,wf(t),new sc(n)},is.version="19.2.7",is}var zy;function Dk(){if(zy)return Ff.exports;zy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),Ff.exports=Mk(),Ff.exports}var Ok=Dk(),b=pp();const Ct=Tk(b);var Mt=function(){return Mt=Object.assign||function(a){for(var i,o=1,l=arguments.length;o<l;o++){i=arguments[o];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(a[u]=i[u])}return a},Mt.apply(this,arguments)};function Gi(e,a,i){if(i||arguments.length===2)for(var o=0,l=a.length,u;o<l;o++)(u||!(o in a))&&(u||(u=Array.prototype.slice.call(a,0,o)),u[o]=a[o]);return e.concat(u||Array.prototype.slice.call(a))}var ct="-ms-",ws="-moz-",Ie="-webkit-",kx="comm",eu="rule",hp="decl",Nk="@import",Lk="@namespace",_x="@keyframes",Bk="@layer",$x=Math.abs,gp=String.fromCharCode,Am=Object.assign;function qk(e,a){return jt(e,0)^45?(((a<<2^jt(e,0))<<2^jt(e,1))<<2^jt(e,2))<<2^jt(e,3):0}function Tx(e){return e.trim()}function Aa(e,a){return(e=a.exec(e))?e[0]:e}function Oe(e,a,i){return e.replace(a,i)}function yc(e,a,i){return e.indexOf(a,i)}function jt(e,a){return e.charCodeAt(a)|0}function Pr(e,a,i){return e.slice(a,i)}function Hn(e){return e.length}function jx(e){return e.length}function ps(e,a){return a.push(e),e}function Vk(e,a){return e.map(a).join("")}function My(e,a){return e.filter(function(i){return!Aa(i,a)})}var tu=1,Yi=1,Cx=0,Ln=0,_t=0,to="";function nu(e,a,i,o,l,u,m,p){return{value:e,root:a,parent:i,type:o,props:l,children:u,line:tu,column:Yi,length:m,return:"",siblings:p}}function cr(e,a){return Am(nu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function Oi(e){for(;e.root;)e=cr(e.root,{children:[e]});ps(e,e.siblings)}function Uk(){return _t}function Fk(){return _t=Ln>0?jt(to,--Ln):0,Yi--,_t===10&&(Yi=1,tu--),_t}function Gn(){return _t=Ln<Cx?jt(to,Ln++):0,Yi++,_t===10&&(Yi=1,tu++),_t}function dr(){return jt(to,Ln)}function xc(){return Ln}function au(e,a){return Pr(to,e,a)}function Rs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hk(e){return tu=Yi=1,Cx=Hn(to=e),Ln=0,[]}function Pk(e){return to="",e}function If(e){return Tx(au(Ln-1,Em(e===91?e+2:e===40?e+1:e)))}function Gk(e){for(;(_t=dr())&&_t<33;)Gn();return Rs(e)>2||Rs(_t)>3?"":" "}function Yk(e,a){for(;--a&&Gn()&&!(_t<48||_t>102||_t>57&&_t<65||_t>70&&_t<97););return au(e,xc()+(a<6&&dr()==32&&Gn()==32))}function Em(e){for(;Gn();)switch(_t){case e:return Ln;case 34:case 39:e!==34&&e!==39&&Em(_t);break;case 40:e===41&&Em(e);break;case 92:Gn();break}return Ln}function Ik(e,a){for(;Gn()&&e+_t!==57;)if(e+_t===84&&dr()===47)break;return"/*"+au(a,Ln-1)+"*"+gp(e===47?e:Gn())}function Xk(e){for(;!Rs(dr());)Gn();return au(e,Ln)}function Kk(e){return Pk(vc("",null,null,null,[""],e=Hk(e),0,[0],e))}function vc(e,a,i,o,l,u,m,p,g){for(var h=0,v=0,x=m,S=0,_=0,C=0,T=1,A=1,$=1,M=0,E="",B=l,j=u,R=o,z=E;A;)switch(C=M,M=Gn()){case 40:if(C!=108&&jt(z,x-1)==58){yc(z+=Oe(If(M),"&","&\f"),"&\f",$x(h?p[h-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:z+=If(M);break;case 9:case 10:case 13:case 32:z+=Gk(C);break;case 92:z+=Yk(xc()-1,7);continue;case 47:switch(dr()){case 42:case 47:ps(Wk(Ik(Gn(),xc()),a,i,g),g),(Rs(C||1)==5||Rs(dr()||1)==5)&&Hn(z)&&Pr(z,-1,void 0)!==" "&&(z+=" ");break;default:z+="/"}break;case 123*T:p[h++]=Hn(z)*$;case 125*T:case 59:case 0:switch(M){case 0:case 125:A=0;case 59+v:$==-1&&(z=Oe(z,/\f/g,"")),_>0&&(Hn(z)-x||T===0&&C===47)&&ps(_>32?Oy(z+";",o,i,x-1,g):Oy(Oe(z," ","")+";",o,i,x-2,g),g);break;case 59:z+=";";default:if(ps(R=Dy(z,a,i,h,v,l,p,E,B=[],j=[],x,u),u),M===123)if(v===0)vc(z,a,R,R,B,u,x,p,j);else{switch(S){case 99:if(jt(z,3)===110)break;case 108:if(jt(z,2)===97)break;default:v=0;case 100:case 109:case 115:}v?vc(e,R,R,o&&ps(Dy(e,R,R,0,0,l,p,E,l,B=[],x,j),j),l,j,x,p,o?B:j):vc(z,R,R,R,[""],j,0,p,j)}}h=v=_=0,T=$=1,E=z="",x=m;break;case 58:x=1+Hn(z),_=C;default:if(T<1){if(M==123)--T;else if(M==125&&T++==0&&Fk()==125)continue}switch(z+=gp(M),M*T){case 38:$=v>0?1:(z+="\f",-1);break;case 44:p[h++]=(Hn(z)-1)*$,$=1;break;case 64:dr()===45&&(z+=If(Gn())),S=dr(),v=x=Hn(E=z+=Xk(xc())),M++;break;case 45:C===45&&Hn(z)==2&&(T=0)}}return u}function Dy(e,a,i,o,l,u,m,p,g,h,v,x){for(var S=l-1,_=l===0?u:[""],C=jx(_),T=0,A=0,$=0;T<o;++T)for(var M=0,E=Pr(e,S+1,S=$x(A=m[T])),B=e;M<C;++M)(B=Tx(A>0?_[M]+" "+E:Oe(E,/&\f/g,_[M])))&&(g[$++]=B);return nu(e,a,i,l===0?eu:p,g,h,v,x)}function Wk(e,a,i,o){return nu(e,a,i,kx,gp(Uk()),Pr(e,2,-2),0,o)}function Oy(e,a,i,o,l){return nu(e,a,i,hp,Pr(e,0,o),Pr(e,o+1,-1),o,l)}function Ax(e,a,i){switch(qk(e,a)){case 5103:return Ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ie+e+e;case 4855:return Ie+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ws+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ie+e+ws+e+ct+e+e;case 5936:switch(jt(e,a+11)){case 114:return Ie+e+ct+Oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ie+e+ct+Oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ie+e+ct+Oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ie+e+ct+e+e;case 6165:return Ie+e+ct+"flex-"+e+e;case 5187:return Ie+e+Oe(e,/(\w+).+(:[^]+)/,Ie+"box-$1$2"+ct+"flex-$1$2")+e;case 5443:return Ie+e+ct+"flex-item-"+Oe(e,/flex-|-self/g,"")+(Aa(e,/flex-|baseline/)?"":ct+"grid-row-"+Oe(e,/flex-|-self/g,""))+e;case 4675:return Ie+e+ct+"flex-line-pack"+Oe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ie+e+ct+Oe(e,"shrink","negative")+e;case 5292:return Ie+e+ct+Oe(e,"basis","preferred-size")+e;case 6060:return Ie+"box-"+Oe(e,"-grow","")+Ie+e+ct+Oe(e,"grow","positive")+e;case 4554:return Ie+Oe(e,/([^-])(transform)/g,"$1"+Ie+"$2")+e;case 6187:return Oe(Oe(Oe(e,/(zoom-|grab)/,Ie+"$1"),/(image-set)/,Ie+"$1"),e,"")+e;case 5495:case 3959:return Oe(e,/(image-set\([^]*)/,Ie+"$1$`$1");case 4968:return Oe(Oe(e,/(.+:)(flex-)?(.*)/,Ie+"box-pack:$3"+ct+"flex-pack:$3"),/space-between/,"justify")+Ie+e+e;case 4200:if(!Aa(e,/flex-|baseline/))return ct+"grid-column-align"+Pr(e,a)+e;break;case 2592:case 3360:return ct+Oe(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(o,l){return a=l,Aa(o.props,/grid-\w+-end/)})?~yc(e+(i=i[a].value),"span",0)?e:ct+Oe(e,"-start","")+e+ct+"grid-row-span:"+(~yc(i,"span",0)?Aa(i,/\d+/):+Aa(i,/\d+/)-+Aa(e,/\d+/))+";":ct+Oe(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(o){return Aa(o.props,/grid-\w+-start/)})?e:ct+Oe(Oe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Oe(e,/(.+)-inline(.+)/,Ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hn(e)-1-a>6)switch(jt(e,a+1)){case 109:if(jt(e,a+4)!==45)break;case 102:return Oe(e,/(.+:)(.+)-([^]+)/,"$1"+Ie+"$2-$3$1"+ws+(jt(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~yc(e,"stretch",0)?Ax(Oe(e,"stretch","fill-available"),a,i)+e:e}break;case 5152:case 5920:return Oe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,l,u,m,p,g,h){return ct+l+":"+u+h+(m?ct+l+"-span:"+(p?g:+g-+u)+h:"")+e});case 4949:if(jt(e,a+6)===121)return Oe(e,":",":"+Ie)+e;break;case 6444:switch(jt(e,jt(e,14)===45?18:11)){case 120:return Oe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ie+(jt(e,14)===45?"inline-":"")+"box$3$1"+Ie+"$2$3$1"+ct+"$2box$3")+e;case 100:return Oe(e,":",":"+ct)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(e,"scroll-","scroll-snap-")+e}return e}function zc(e,a){for(var i="",o=0;o<e.length;o++)i+=a(e[o],o,e,a)||"";return i}function Zk(e,a,i,o){switch(e.type){case Bk:if(e.children.length)break;case Nk:case Lk:case hp:return e.return=e.return||e.value;case kx:return"";case _x:return e.return=e.value+"{"+zc(e.children,o)+"}";case eu:if(!Hn(e.value=e.props.join(",")))return""}return Hn(i=zc(e.children,o))?e.return=e.value+"{"+i+"}":""}function Qk(e){var a=jx(e);return function(i,o,l,u){for(var m="",p=0;p<a;p++)m+=e[p](i,o,l,u)||"";return m}}function Jk(e){return function(a){a.root||(a=a.return)&&e(a)}}function e4(e,a,i,o){if(e.length>-1&&!e.return)switch(e.type){case hp:e.return=Ax(e.value,e.length,i);return;case _x:return zc([cr(e,{value:Oe(e.value,"@","@"+Ie)})],o);case eu:if(e.length)return Vk(i=e.props,function(l){switch(Aa(l,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Oi(cr(e,{props:[Oe(l,/:(read-\w+)/,":"+ws+"$1")]})),Oi(cr(e,{props:[l]})),Am(e,{props:My(i,o)});break;case"::placeholder":Oi(cr(e,{props:[Oe(l,/:(plac\w+)/,":"+Ie+"input-$1")]})),Oi(cr(e,{props:[Oe(l,/:(plac\w+)/,":"+ws+"$1")]})),Oi(cr(e,{props:[Oe(l,/:(plac\w+)/,ct+"input-$1")]})),Oi(cr(e,{props:[l]})),Am(e,{props:My(i,o)});break}return""})}}var t4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xn={},Ii=typeof process<"u"&&xn!==void 0&&(xn.REACT_APP_SC_ATTR||xn.SC_ATTR)||"data-styled",Ex="active",Rx="data-styled-version",ru="6.3.8",bp=`/*!sc*/
`,Mc=typeof window<"u"&&typeof document<"u",Yn=Ct.createContext===void 0,n4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xn!==void 0&&xn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xn.REACT_APP_SC_DISABLE_SPEEDY!==""?xn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xn!==void 0&&xn.SC_DISABLE_SPEEDY!==void 0&&xn.SC_DISABLE_SPEEDY!==""&&xn.SC_DISABLE_SPEEDY!=="false"&&xn.SC_DISABLE_SPEEDY),a4={},iu=Object.freeze([]),Xi=Object.freeze({});function zx(e,a,i){return i===void 0&&(i=Xi),e.theme!==i.theme&&e.theme||a||i.theme}var Mx=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),r4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,i4=/(^-|-$)/g;function Ny(e){return e.replace(r4,"-").replace(i4,"")}var o4=/(a)(d)/gi,Ly=function(e){return String.fromCharCode(e+(e>25?39:97))};function Rm(e){var a,i="";for(a=Math.abs(e);a>52;a=a/52|0)i=Ly(a%52)+i;return(Ly(a%52)+i).replace(o4,"$1-$2")}var Xf,Vi=function(e,a){for(var i=a.length;i;)e=33*e^a.charCodeAt(--i);return e},Dx=function(e){return Vi(5381,e)};function yp(e){return Rm(Dx(e)>>>0)}function s4(e){return e.displayName||e.name||"Component"}function Kf(e){return typeof e=="string"&&!0}var Ox=typeof Symbol=="function"&&Symbol.for,Nx=Ox?Symbol.for("react.memo"):60115,l4=Ox?Symbol.for("react.forward_ref"):60112,c4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d4=((Xf={})[l4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xf[Nx]=Lx,Xf);function By(e){return("type"in(a=e)&&a.type.$$typeof)===Nx?Lx:"$$typeof"in e?d4[e.$$typeof]:c4;var a}var f4=Object.defineProperty,m4=Object.getOwnPropertyNames,qy=Object.getOwnPropertySymbols,p4=Object.getOwnPropertyDescriptor,h4=Object.getPrototypeOf,Vy=Object.prototype;function Bx(e,a,i){if(typeof a!="string"){if(Vy){var o=h4(a);o&&o!==Vy&&Bx(e,o,i)}var l=m4(a);qy&&(l=l.concat(qy(a)));for(var u=By(e),m=By(a),p=0;p<l.length;++p){var g=l[p];if(!(g in u4||i&&i[g]||m&&g in m||u&&g in u)){var h=p4(a,g);try{f4(e,g,h)}catch{}}}}return e}function Gr(e){return typeof e=="function"}function xp(e){return typeof e=="object"&&"styledComponentId"in e}function Ur(e,a){return e&&a?"".concat(e," ").concat(a):e||a||""}function Dc(e,a){if(e.length===0)return"";for(var i=e[0],o=1;o<e.length;o++)i+=e[o];return i}function zs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function zm(e,a,i){if(i===void 0&&(i=!1),!i&&!zs(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(var o=0;o<a.length;o++)e[o]=zm(e[o],a[o]);else if(zs(a))for(var o in a)e[o]=zm(e[o],a[o]);return e}function vp(e,a){Object.defineProperty(e,"toString",{value:a})}function gr(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var g4=(function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return e.prototype.indexOfGroup=function(a){for(var i=0,o=0;o<a;o++)i+=this.groupSizes[o];return i},e.prototype.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var o=this.groupSizes,l=o.length,u=l;a>=u;)if((u<<=1)<0)throw gr(16,"".concat(a));this.groupSizes=new Uint32Array(u),this.groupSizes.set(o),this.length=u;for(var m=l;m<u;m++)this.groupSizes[m]=0}for(var p=this.indexOfGroup(a+1),g=(m=0,i.length);m<g;m++)this.tag.insertRule(p,i[m])&&(this.groupSizes[a]++,p++)},e.prototype.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],o=this.indexOfGroup(a),l=o+i;this.groupSizes[a]=0;for(var u=o;u<l;u++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var o=this.groupSizes[a],l=this.indexOfGroup(a),u=l+o,m=l;m<u;m++)i+="".concat(this.tag.getRule(m)).concat(bp);return i},e})(),wc=new Map,Oc=new Map,Sc=1,Ui=function(e){if(wc.has(e))return wc.get(e);for(;Oc.has(Sc);)Sc++;var a=Sc++;return wc.set(e,a),Oc.set(a,e),a},b4=function(e,a){Sc=a+1,wc.set(e,a),Oc.set(a,e)},y4="style[".concat(Ii,"][").concat(Rx,'="').concat(ru,'"]'),x4=new RegExp("^".concat(Ii,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),v4=function(e,a,i){for(var o,l=i.split(","),u=0,m=l.length;u<m;u++)(o=l[u])&&e.registerName(a,o)},w4=function(e,a){for(var i,o=((i=a.textContent)!==null&&i!==void 0?i:"").split(bp),l=[],u=0,m=o.length;u<m;u++){var p=o[u].trim();if(p){var g=p.match(x4);if(g){var h=0|parseInt(g[1],10),v=g[2];h!==0&&(b4(v,h),v4(e,v,g[3]),e.getTag().insertRules(h,l)),l.length=0}else l.push(p)}}},Uy=function(e){for(var a=document.querySelectorAll(y4),i=0,o=a.length;i<o;i++){var l=a[i];l&&l.getAttribute(Ii)!==Ex&&(w4(e,l),l.parentNode&&l.parentNode.removeChild(l))}};function S4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qx=function(e){var a=document.head,i=e||a,o=document.createElement("style"),l=(function(p){var g=Array.from(p.querySelectorAll("style[".concat(Ii,"]")));return g[g.length-1]})(i),u=l!==void 0?l.nextSibling:null;o.setAttribute(Ii,Ex),o.setAttribute(Rx,ru);var m=S4();return m&&o.setAttribute("nonce",m),i.insertBefore(o,u),o},k4=(function(){function e(a){this.element=qx(a),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,u=o.length;l<u;l++){var m=o[l];if(m.ownerNode===i)return m}throw gr(17)})(this.element),this.length=0}return e.prototype.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},e.prototype.getRule=function(a){var i=this.sheet.cssRules[a];return i&&i.cssText?i.cssText:""},e})(),_4=(function(){function e(a){this.element=qx(a),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(a,i){if(a<=this.length&&a>=0){var o=document.createTextNode(i);return this.element.insertBefore(o,this.nodes[a]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},e.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e})(),$4=(function(){function e(a){this.rules=[],this.length=0}return e.prototype.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},e.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},e.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},e})(),Fy=Mc,T4={isServer:!Mc,useCSSOMInjection:!n4},Nc=(function(){function e(a,i,o){a===void 0&&(a=Xi),i===void 0&&(i={});var l=this;this.options=Mt(Mt({},T4),a),this.gs=i,this.names=new Map(o),this.server=!!a.isServer,!this.server&&Mc&&Fy&&(Fy=!1,Uy(this)),vp(this,function(){return(function(u){for(var m=u.getTag(),p=m.length,g="",h=function(x){var S=(function($){return Oc.get($)})(x);if(S===void 0)return"continue";var _=u.names.get(S),C=m.getGroup(x);if(_===void 0||!_.size||C.length===0)return"continue";var T="".concat(Ii,".g").concat(x,'[id="').concat(S,'"]'),A="";_!==void 0&&_.forEach(function($){$.length>0&&(A+="".concat($,","))}),g+="".concat(C).concat(T,'{content:"').concat(A,'"}').concat(bp)},v=0;v<p;v++)h(v);return g})(l)})}return e.registerId=function(a){return Ui(a)},e.prototype.rehydrate=function(){!this.server&&Mc&&Uy(this)},e.prototype.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new e(Mt(Mt({},this.options),a),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(a=(function(i){var o=i.useCSSOMInjection,l=i.target;return i.isServer?new $4(l):o?new k4(l):new _4(l)})(this.options),new g4(a)));var a},e.prototype.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},e.prototype.registerName=function(a,i){if(Ui(a),this.names.has(a))this.names.get(a).add(i);else{var o=new Set;o.add(i),this.names.set(a,o)}},e.prototype.insertRules=function(a,i,o){this.registerName(a,i),this.getTag().insertRules(Ui(a),o)},e.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},e.prototype.clearRules=function(a){this.getTag().clearGroup(Ui(a)),this.clearNames(a)},e.prototype.clearTag=function(){this.tag=void 0},e})(),j4=/&/g,Fi=47;function Hy(e){if(e.indexOf("}")===-1)return!1;for(var a=e.length,i=0,o=0,l=!1,u=0;u<a;u++){var m=e.charCodeAt(u);if(o!==0||l||m!==Fi||e.charCodeAt(u+1)!==42)if(l)m===42&&e.charCodeAt(u+1)===Fi&&(l=!1,u++);else if(m!==34&&m!==39||u!==0&&e.charCodeAt(u-1)===92){if(o===0){if(m===123)i++;else if(m===125&&--i<0)return!0}}else o===0?o=m:o===m&&(o=0);else l=!0,u++}return i!==0||o!==0}function Vx(e,a){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(a," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(a," ")),i.props=i.props.map(function(o){return"".concat(a," ").concat(o)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Vx(i.children,a)),i})}function C4(e){var a,i,o,l=Xi,u=l.options,m=u===void 0?Xi:u,p=l.plugins,g=p===void 0?iu:p,h=function(S,_,C){return C.startsWith(i)&&C.endsWith(i)&&C.replaceAll(i,"").length>0?".".concat(a):S},v=g.slice();v.push(function(S){S.type===eu&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(j4,i).replace(o,h))}),m.prefix&&v.push(e4),v.push(Zk);var x=function(S,_,C,T){_===void 0&&(_=""),C===void 0&&(C=""),T===void 0&&(T="&"),a=T,i=_,o=new RegExp("\\".concat(i,"\\b"),"g");var A=(function(E){if(!Hy(E))return E;for(var B=E.length,j="",R=0,z=0,U=0,ae=!1,Y=0;Y<B;Y++){var Q=E.charCodeAt(Y);if(U!==0||ae||Q!==Fi||E.charCodeAt(Y+1)!==42)if(ae)Q===42&&E.charCodeAt(Y+1)===Fi&&(ae=!1,Y++);else if(Q!==34&&Q!==39||Y!==0&&E.charCodeAt(Y-1)===92){if(U===0)if(Q===123)z++;else if(Q===125){if(--z<0){for(var ie=Y+1;ie<B;){var ve=E.charCodeAt(ie);if(ve===59||ve===10)break;ie++}ie<B&&E.charCodeAt(ie)===59&&ie++,z=0,Y=ie-1,R=ie;continue}z===0&&(j+=E.substring(R,Y+1),R=Y+1)}else Q===59&&z===0&&(j+=E.substring(R,Y+1),R=Y+1)}else U===0?U=Q:U===Q&&(U=0);else ae=!0,Y++}if(R<B){var X=E.substring(R);Hy(X)||(j+=X)}return j})((function(E){if(E.indexOf("//")===-1)return E;for(var B=E.length,j=[],R=0,z=0,U=0,ae=0;z<B;){var Y=E.charCodeAt(z);if(Y!==34&&Y!==39||z!==0&&E.charCodeAt(z-1)===92)if(U===0)if(Y===40&&z>=3&&(32|E.charCodeAt(z-1))==108&&(32|E.charCodeAt(z-2))==114&&(32|E.charCodeAt(z-3))==117)ae=1,z++;else if(ae>0)Y===41?ae--:Y===40&&ae++,z++;else if(Y===Fi&&z+1<B&&E.charCodeAt(z+1)===Fi){for(z>R&&j.push(E.substring(R,z));z<B&&E.charCodeAt(z)!==10;)z++;R=z}else z++;else z++;else U===0?U=Y:U===Y&&(U=0),z++}return R===0?E:(R<B&&j.push(E.substring(R)),j.join(""))})(S)),$=Kk(C||_?"".concat(C," ").concat(_," { ").concat(A," }"):A);m.namespace&&($=Vx($,m.namespace));var M=[];return zc($,Qk(v.concat(Jk(function(E){return M.push(E)})))),M};return x.hash=g.length?g.reduce(function(S,_){return _.name||gr(15),Vi(S,_.name)},5381).toString():"",x}var A4=new Nc,Mm=C4(),Dm={shouldForwardProp:void 0,styleSheet:A4,stylis:Mm},Ux=Yn?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(Dm)}}:Ct.createContext(Dm);Ux.Consumer;Yn||Ct.createContext(void 0);function Om(){return Yn?Dm:Ct.useContext(Ux)}var Fx=(function(){function e(a,i){var o=this;this.inject=function(l,u){u===void 0&&(u=Mm);var m=o.name+u.hash;l.hasNameForId(o.id,m)||l.insertRules(o.id,m,u(o.rules,m,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=i,vp(this,function(){throw gr(12,String(o.name))})}return e.prototype.getName=function(a){return a===void 0&&(a=Mm),this.name+a.hash},e})();function E4(e,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||e in t4||e.startsWith("--")?String(a).trim():"".concat(a,"px")}var R4=function(e){return e>="A"&&e<="Z"};function Py(e){for(var a="",i=0;i<e.length;i++){var o=e[i];if(i===1&&o==="-"&&e[0]==="-")return e;R4(o)?a+="-"+o.toLowerCase():a+=o}return a.startsWith("ms-")?"-"+a:a}var Hx=function(e){return e==null||e===!1||e===""},Px=function(e){var a=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Hx(o)&&(Array.isArray(o)&&o.isCss||Gr(o)?a.push("".concat(Py(i),":"),o,";"):zs(o)?a.push.apply(a,Gi(Gi(["".concat(i," {")],Px(o),!1),["}"],!1)):a.push("".concat(Py(i),": ").concat(E4(i,o),";")))}return a};function fr(e,a,i,o){if(Hx(e))return[];if(xp(e))return[".".concat(e.styledComponentId)];if(Gr(e)){if(!Gr(u=e)||u.prototype&&u.prototype.isReactComponent||!a)return[e];var l=e(a);return fr(l,a,i,o)}var u;return e instanceof Fx?i?(e.inject(i,o),[e.getName(o)]):[e]:zs(e)?Px(e):Array.isArray(e)?Array.prototype.concat.apply(iu,e.map(function(m){return fr(m,a,i,o)})):[e.toString()]}function Gx(e){for(var a=0;a<e.length;a+=1){var i=e[a];if(Gr(i)&&!xp(i))return!1}return!0}var z4=Dx(ru),M4=(function(){function e(a,i,o){this.rules=a,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Gx(a),this.componentId=i,this.baseHash=Vi(z4,i),this.baseStyle=o,Nc.registerId(i)}return e.prototype.generateAndInjectStyles=function(a,i,o){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,o).className:"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))l=Ur(l,this.staticRulesId);else{var u=Dc(fr(this.rules,a,i,o)),m=Rm(Vi(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,m)){var p=o(u,".".concat(m),void 0,this.componentId);i.insertRules(this.componentId,m,p)}l=Ur(l,m),this.staticRulesId=m}else{for(var g=Vi(this.baseHash,o.hash),h="",v=0;v<this.rules.length;v++){var x=this.rules[v];if(typeof x=="string")h+=x;else if(x){var S=Dc(fr(x,a,i,o));g=Vi(g,S+v),h+=S}}if(h){var _=Rm(g>>>0);if(!i.hasNameForId(this.componentId,_)){var C=o(h,".".concat(_),void 0,this.componentId);i.insertRules(this.componentId,_,C)}l=Ur(l,_)}}return{className:l,css:typeof window>"u"?i.getTag().getGroup(Ui(this.componentId)):""}},e})(),Ki=Yn?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:Ct.createContext(void 0);Ki.Consumer;function qN(){var e=Yn?void 0:Ct.useContext(Ki);if(!e)throw gr(18);return e}function wp(e){if(Yn)return e.children;var a=Ct.useContext(Ki),i=Ct.useMemo(function(){return(function(o,l){if(!o)throw gr(14);if(Gr(o)){var u=o(l);return u}if(Array.isArray(o)||typeof o!="object")throw gr(8);return l?Mt(Mt({},l),o):o})(e.theme,a)},[e.theme,a]);return e.children?Ct.createElement(Ki.Provider,{value:i},e.children):null}var Wf={};function D4(e,a,i){var o=xp(e),l=e,u=!Kf(e),m=a.attrs,p=m===void 0?iu:m,g=a.componentId,h=g===void 0?(function(B,j){var R=typeof B!="string"?"sc":Ny(B);Wf[R]=(Wf[R]||0)+1;var z="".concat(R,"-").concat(yp(ru+R+Wf[R]));return j?"".concat(j,"-").concat(z):z})(a.displayName,a.parentComponentId):g,v=a.displayName,x=v===void 0?(function(B){return Kf(B)?"styled.".concat(B):"Styled(".concat(s4(B),")")})(e):v,S=a.displayName&&a.componentId?"".concat(Ny(a.displayName),"-").concat(a.componentId):a.componentId||h,_=o&&l.attrs?l.attrs.concat(p).filter(Boolean):p,C=a.shouldForwardProp;if(o&&l.shouldForwardProp){var T=l.shouldForwardProp;if(a.shouldForwardProp){var A=a.shouldForwardProp;C=function(B,j){return T(B,j)&&A(B,j)}}else C=T}var $=new M4(i,S,o?l.componentStyle:void 0);function M(B,j){return(function(R,z,U){var ae=R.attrs,Y=R.componentStyle,Q=R.defaultProps,ie=R.foldedComponentIds,ve=R.styledComponentId,X=R.target,_e=Yn?void 0:Ct.useContext(Ki),I=Om(),re=R.shouldForwardProp||I.shouldForwardProp,ue=zx(z,_e,Q)||Xi,he=(function(De,Re,Et){for(var Jn,ln=Mt(Mt({},Re),{className:void 0,theme:Et}),Wr=0;Wr<De.length;Wr+=1){var kn=Gr(Jn=De[Wr])?Jn(ln):Jn;for(var ea in kn)ea==="className"?ln.className=Ur(ln.className,kn[ea]):ea==="style"?ln.style=Mt(Mt({},ln.style),kn[ea]):ln[ea]=kn[ea]}return"className"in Re&&typeof Re.className=="string"&&(ln.className=Ur(ln.className,Re.className)),ln})(ae,z,ue),ke=he.as||X,N={};for(var V in he)he[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&he.theme===ue||(V==="forwardedAs"?N.as=he.forwardedAs:re&&!re(V,ke)||(N[V]=he[V]));var ne=(function(De,Re){var Et=Om(),Jn=De.generateAndInjectStyles(Re,Et.styleSheet,Et.stylis);return Jn})(Y,he),se=ne.className,Te=ne.css,je=Ur(ie,ve);se&&(je+=" "+se),he.className&&(je+=" "+he.className),N[Kf(ke)&&!Mx.has(ke)?"class":"className"]=je,U&&(N.ref=U);var le=b.createElement(ke,N);return Yn&&Te?Ct.createElement(Ct.Fragment,null,Ct.createElement("style",{precedence:"styled-components",href:"sc-".concat(ve,"-").concat(se),children:Te}),le):le})(E,B,j)}M.displayName=x;var E=Ct.forwardRef(M);return E.attrs=_,E.componentStyle=$,E.displayName=x,E.shouldForwardProp=C,E.foldedComponentIds=o?Ur(l.foldedComponentIds,l.styledComponentId):"",E.styledComponentId=S,E.target=o?l.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(B){this._foldedDefaultProps=o?(function(j){for(var R=[],z=1;z<arguments.length;z++)R[z-1]=arguments[z];for(var U=0,ae=R;U<ae.length;U++)zm(j,ae[U],!0);return j})({},l.defaultProps,B):B}}),vp(E,function(){return".".concat(E.styledComponentId)}),u&&Bx(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function Gy(e,a){for(var i=[e[0]],o=0,l=a.length;o<l;o+=1)i.push(a[o],e[o+1]);return i}var Yy=function(e){return Object.assign(e,{isCss:!0})};function W(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];if(Gr(e)||zs(e))return Yy(fr(Gy(iu,Gi([e],a,!0))));var o=e;return a.length===0&&o.length===1&&typeof o[0]=="string"?fr(o):Yy(fr(Gy(o,a)))}function Nm(e,a,i){if(i===void 0&&(i=Xi),!a)throw gr(1,a);var o=function(l){for(var u=[],m=1;m<arguments.length;m++)u[m-1]=arguments[m];return e(a,i,W.apply(void 0,Gi([l],u,!1)))};return o.attrs=function(l){return Nm(e,a,Mt(Mt({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o.withConfig=function(l){return Nm(e,a,Mt(Mt({},i),l))},o}var Yx=function(e){return Nm(D4,e)},w=Yx;Mx.forEach(function(e){w[e]=Yx(e)});var O4=(function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=Gx(a),Nc.registerId(this.componentId+1)}return e.prototype.createStyles=function(a,i,o,l){var u=l(Dc(fr(this.rules,i,o,l)),""),m=this.componentId+a;o.insertRules(m,m,u)},e.prototype.removeStyles=function(a,i){i.clearRules(this.componentId+a)},e.prototype.renderStyles=function(a,i,o,l){a>2&&Nc.registerId(this.componentId+a);var u=this.componentId+a;this.isStatic?o.hasNameForId(u,u)||this.createStyles(a,i,o,l):(this.removeStyles(a,o),this.createStyles(a,i,o,l))},e})();function Sp(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];var o=W.apply(void 0,Gi([e],a,!1)),l="sc-global-".concat(yp(JSON.stringify(o))),u=new O4(o,l),m=new WeakMap,p=function(g){var h=Om(),v=Yn?void 0:Ct.useContext(Ki),x=m.get(h.styleSheet);if(x===void 0&&(x=h.styleSheet.allocateGSInstance(l),m.set(h.styleSheet,x)),(typeof window>"u"||!h.styleSheet.server)&&(function(A,$,M,E,B){if(u.isStatic)u.renderStyles(A,a4,M,B);else{var j=Mt(Mt({},$),{theme:zx($,E,p.defaultProps)});u.renderStyles(A,j,M,B)}})(x,g,h.styleSheet,v,h.stylis),!Yn){var S=Ct.useRef(!0);Ct.useLayoutEffect(function(){return S.current=!1,function(){S.current=!0,queueMicrotask(function(){S.current&&(u.removeStyles(x,h.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(l,'"]')).forEach(function(A){return A.remove()}))})}},[x,h.styleSheet])}if(Yn){var _=l+x,C=typeof window>"u"?h.styleSheet.getTag().getGroup(Ui(_)):"";if(C){var T="".concat(l,"-").concat(x);return Ct.createElement("style",{key:T,"data-styled-global":l,precedence:"styled-components",href:T,children:C})}}return null};return Ct.memo(p)}function te(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];var o=Dc(W.apply(void 0,Gi([e],a,!1))),l=yp(o);return new Fx(l,o)}const N4=["quadrant-hover-nw","quadrant-hover-ne","quadrant-hover-sw","quadrant-hover-se","center-hover","button-hover","nav-hover"],L4=["quadrant-click","button-click"],Iy=["registration-success","form-error"],cc=(e,a)=>{const i=e.createOscillator(),o=e.createGain(),l=e.createBiquadFilter();i.type="sine",i.frequency.setValueAtTime(400,e.currentTime),i.frequency.exponentialRampToValueAtTime(200,e.currentTime+.15),l.type="lowpass",l.frequency.setValueAtTime(800,e.currentTime),o.gain.setValueAtTime(.15,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.15),i.connect(l).connect(o).connect(a),i.start(),i.stop(e.currentTime+.15)},uc=(e,a)=>{const i=e.createOscillator(),o=e.createOscillator(),l=e.createGain();i.type="sine",i.frequency.setValueAtTime(1047,e.currentTime),i.frequency.exponentialRampToValueAtTime(2093,e.currentTime+.1),o.type="sine",o.frequency.setValueAtTime(1568,e.currentTime),o.frequency.exponentialRampToValueAtTime(3136,e.currentTime+.1),l.gain.setValueAtTime(.2,e.currentTime),l.gain.exponentialRampToValueAtTime(.01,e.currentTime+.1),i.connect(l),o.connect(l),l.connect(a),i.start(),o.start(),i.stop(e.currentTime+.1),o.stop(e.currentTime+.1)},B4={human:{name:"Human",sounds:{"quadrant-hover-nw":cc,"quadrant-hover-ne":cc,"quadrant-hover-sw":cc,"quadrant-hover-se":cc,"quadrant-click":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="triangle",i.frequency.setValueAtTime(800,e.currentTime),i.frequency.exponentialRampToValueAtTime(100,e.currentTime+.08),o.gain.setValueAtTime(.25,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.08),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.08)},"center-hover":(e,a)=>{const i=e.createOscillator(),o=e.createOscillator(),l=e.createGain();i.type="sine",i.frequency.setValueAtTime(523.25,e.currentTime),o.type="sine",o.frequency.setValueAtTime(659.25,e.currentTime),l.gain.setValueAtTime(.2,e.currentTime),l.gain.exponentialRampToValueAtTime(.01,e.currentTime+.3),i.connect(l),o.connect(l),l.connect(a),i.start(),o.start(),i.stop(e.currentTime+.3),o.stop(e.currentTime+.3)},"registration-success":(e,a)=>{const i=[0,.15,.3],o=[523.25,659.25,783.99];i.forEach((l,u)=>{const m=o[u];if(!m)return;const p=e.createOscillator(),g=e.createGain();p.type="triangle",p.frequency.setValueAtTime(m,e.currentTime+l),g.gain.setValueAtTime(0,e.currentTime+l),g.gain.linearRampToValueAtTime(.3,e.currentTime+l+.02),g.gain.exponentialRampToValueAtTime(.01,e.currentTime+l+.4),p.connect(g).connect(a),p.start(e.currentTime+l),p.stop(e.currentTime+l+.4)})},"button-hover":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(600,e.currentTime),o.gain.setValueAtTime(.05,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.05),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.05)},"button-click":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="triangle",i.frequency.setValueAtTime(400,e.currentTime),i.frequency.exponentialRampToValueAtTime(200,e.currentTime+.06),o.gain.setValueAtTime(.15,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.06),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.06)},"panel-open":(e,a)=>{const i=e.createOscillator(),o=e.createGain(),l=e.createBiquadFilter();i.type="sawtooth",i.frequency.setValueAtTime(200,e.currentTime),i.frequency.exponentialRampToValueAtTime(400,e.currentTime+.25),l.type="lowpass",l.frequency.setValueAtTime(400,e.currentTime),l.frequency.exponentialRampToValueAtTime(1e3,e.currentTime+.25),o.gain.setValueAtTime(.1,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.25),i.connect(l).connect(o).connect(a),i.start(),i.stop(e.currentTime+.25)},"panel-close":(e,a)=>{const i=e.createOscillator(),o=e.createGain(),l=e.createBiquadFilter();i.type="sawtooth",i.frequency.setValueAtTime(400,e.currentTime),i.frequency.exponentialRampToValueAtTime(200,e.currentTime+.2),l.type="lowpass",l.frequency.setValueAtTime(1e3,e.currentTime),l.frequency.exponentialRampToValueAtTime(400,e.currentTime+.2),o.gain.setValueAtTime(.1,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.2),i.connect(l).connect(o).connect(a),i.start(),i.stop(e.currentTime+.2)},"form-input":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="square",i.frequency.setValueAtTime(1200,e.currentTime),o.gain.setValueAtTime(.03,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.03),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.03)},"form-error":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="triangle",i.frequency.setValueAtTime(220,e.currentTime),i.frequency.exponentialRampToValueAtTime(180,e.currentTime+.15),o.gain.setValueAtTime(.2,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.15),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.15)},"modal-open":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(400,e.currentTime),i.frequency.exponentialRampToValueAtTime(800,e.currentTime+.2),o.gain.setValueAtTime(.15,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.2),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.2)},"modal-close":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(800,e.currentTime),i.frequency.exponentialRampToValueAtTime(400,e.currentTime+.15),o.gain.setValueAtTime(.15,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.15),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.15)},"nav-hover":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(1e3,e.currentTime),o.gain.setValueAtTime(.08,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.04),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.04)},"page-transition":(e,a)=>{const i=e.createOscillator(),o=e.createGain(),l=e.createBiquadFilter();i.type="sine",i.frequency.setValueAtTime(300,e.currentTime),i.frequency.exponentialRampToValueAtTime(600,e.currentTime+.3),l.type="lowpass",l.frequency.setValueAtTime(600,e.currentTime),o.gain.setValueAtTime(.12,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.3),i.connect(l).connect(o).connect(a),i.start(),i.stop(e.currentTime+.3)}}},anime:{name:"Anime/UwU",sounds:{"quadrant-hover-nw":uc,"quadrant-hover-ne":uc,"quadrant-hover-sw":uc,"quadrant-hover-se":uc,"quadrant-click":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="square",i.frequency.setValueAtTime(880,e.currentTime),i.frequency.exponentialRampToValueAtTime(440,e.currentTime+.05),i.frequency.exponentialRampToValueAtTime(660,e.currentTime+.12),o.gain.setValueAtTime(.25,e.currentTime),o.gain.linearRampToValueAtTime(.15,e.currentTime+.05),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.12),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.12)},"center-hover":(e,a)=>{const i=[0,.05,.1],o=[1047,1319,1568];i.forEach((l,u)=>{const m=o[u];if(!m)return;const p=e.createOscillator(),g=e.createGain();p.type="sine",p.frequency.setValueAtTime(m,e.currentTime+l),p.frequency.exponentialRampToValueAtTime(m*2,e.currentTime+l+.08),g.gain.setValueAtTime(.15,e.currentTime+l),g.gain.exponentialRampToValueAtTime(.01,e.currentTime+l+.08),p.connect(g).connect(a),p.start(e.currentTime+l),p.stop(e.currentTime+l+.08)})},"registration-success":(e,a)=>{[{freq:523.25,time:0},{freq:659.25,time:.1},{freq:783.99,time:.2},{freq:1046.5,time:.3}].forEach(({freq:o,time:l})=>{const u=e.createOscillator(),m=e.createGain();u.type="triangle",u.frequency.setValueAtTime(o,e.currentTime+l),m.gain.setValueAtTime(.25,e.currentTime+l),m.gain.exponentialRampToValueAtTime(.01,e.currentTime+l+.3),u.connect(m).connect(a),u.start(e.currentTime+l),u.stop(e.currentTime+l+.3)});for(let o=0;o<8;o++){const l=o*.05,u=e.createOscillator(),m=e.createGain();u.type="sine",u.frequency.setValueAtTime(2093+Math.random()*1e3,e.currentTime+l),m.gain.setValueAtTime(.08,e.currentTime+l),m.gain.exponentialRampToValueAtTime(.01,e.currentTime+l+.1),u.connect(m).connect(a),u.start(e.currentTime+l),u.stop(e.currentTime+l+.1)}},"button-hover":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(2e3,e.currentTime),i.frequency.exponentialRampToValueAtTime(3e3,e.currentTime+.04),o.gain.setValueAtTime(.06,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.04),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.04)},"button-click":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(1200,e.currentTime),i.frequency.exponentialRampToValueAtTime(800,e.currentTime+.08),o.gain.setValueAtTime(.2,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.08),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.08)},"panel-open":(e,a)=>{const i=[0,.05,.1],o=[800,1200,1600];i.forEach((l,u)=>{const m=o[u];if(!m)return;const p=e.createOscillator(),g=e.createGain();p.type="sine",p.frequency.setValueAtTime(m,e.currentTime+l),p.frequency.exponentialRampToValueAtTime(m*1.5,e.currentTime+l+.15),g.gain.setValueAtTime(.12,e.currentTime+l),g.gain.exponentialRampToValueAtTime(.01,e.currentTime+l+.15),p.connect(g).connect(a),p.start(e.currentTime+l),p.stop(e.currentTime+l+.15)})},"panel-close":(e,a)=>{const i=[0,.05,.1],o=[1600,1200,800];i.forEach((l,u)=>{const m=o[u];if(!m)return;const p=e.createOscillator(),g=e.createGain();p.type="sine",p.frequency.setValueAtTime(m,e.currentTime+l),p.frequency.exponentialRampToValueAtTime(m*.7,e.currentTime+l+.12),g.gain.setValueAtTime(.1,e.currentTime+l),g.gain.exponentialRampToValueAtTime(.01,e.currentTime+l+.12),p.connect(g).connect(a),p.start(e.currentTime+l),p.stop(e.currentTime+l+.12)})},"form-input":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(1800,e.currentTime),o.gain.setValueAtTime(.04,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.02),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.02)},"form-error":(e,a)=>{const i=e.createOscillator(),o=e.createOscillator(),l=e.createGain();i.type="sine",i.frequency.setValueAtTime(600,e.currentTime),i.frequency.exponentialRampToValueAtTime(500,e.currentTime+.1),o.type="sine",o.frequency.setValueAtTime(900,e.currentTime),o.frequency.exponentialRampToValueAtTime(750,e.currentTime+.1),l.gain.setValueAtTime(.18,e.currentTime),l.gain.exponentialRampToValueAtTime(.01,e.currentTime+.1),i.connect(l),o.connect(l),l.connect(a),i.start(),o.start(),i.stop(e.currentTime+.1),o.stop(e.currentTime+.1)},"modal-open":(e,a)=>{for(let i=0;i<4;i++){const o=i*.04,l=e.createOscillator(),u=e.createGain();l.type="sine",l.frequency.setValueAtTime(1e3+i*300,e.currentTime+o),u.gain.setValueAtTime(.15,e.currentTime+o),u.gain.exponentialRampToValueAtTime(.01,e.currentTime+o+.15),l.connect(u).connect(a),l.start(e.currentTime+o),l.stop(e.currentTime+o+.15)}},"modal-close":(e,a)=>{for(let i=0;i<4;i++){const o=i*.03,l=e.createOscillator(),u=e.createGain();l.type="sine",l.frequency.setValueAtTime(1900-i*300,e.currentTime+o),u.gain.setValueAtTime(.12,e.currentTime+o),u.gain.exponentialRampToValueAtTime(.01,e.currentTime+o+.1),l.connect(u).connect(a),l.start(e.currentTime+o),l.stop(e.currentTime+o+.1)}},"nav-hover":(e,a)=>{const i=e.createOscillator(),o=e.createGain();i.type="sine",i.frequency.setValueAtTime(1500,e.currentTime),o.gain.setValueAtTime(.1,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.05),i.connect(o).connect(a),i.start(),i.stop(e.currentTime+.05)},"page-transition":(e,a)=>{const i=e.createOscillator(),o=e.createGain(),l=e.createBiquadFilter();i.type="sawtooth",i.frequency.setValueAtTime(400,e.currentTime),i.frequency.exponentialRampToValueAtTime(800,e.currentTime+.25),l.type="lowpass",l.frequency.setValueAtTime(800,e.currentTime),l.frequency.exponentialRampToValueAtTime(2e3,e.currentTime+.25),o.gain.setValueAtTime(.15,e.currentTime),o.gain.exponentialRampToValueAtTime(.01,e.currentTime+.25),i.connect(l).connect(o).connect(a),i.start(),i.stop(e.currentTime+.25);for(let u=0;u<4;u++){const m=u*.06,p=e.createOscillator(),g=e.createGain();p.type="sine",p.frequency.setValueAtTime(2e3+Math.random()*1e3,e.currentTime+m),g.gain.setValueAtTime(.05,e.currentTime+m),g.gain.exponentialRampToValueAtTime(.01,e.currentTime+m+.08),p.connect(g).connect(a),p.start(e.currentTime+m),p.stop(e.currentTime+m+.08)}}}},uwu:{name:"UwU",sounds:{"quadrant-hover-nw":{type:"file",path:"/assets/uwu/uwu-base-uw.mp3",playbackRate:.95,detune:0},"quadrant-hover-ne":{type:"file",path:"/assets/uwu/uwu-base-uw.mp3",playbackRate:.85,detune:-50},"quadrant-hover-sw":{type:"file",path:"/assets/uwu/uwu-base-wu.mp3",playbackRate:.8,detune:-100},"quadrant-hover-se":{type:"file",path:"/assets/uwu/uwu-base-wu.mp3",playbackRate:1,detune:100},"quadrant-click":{type:"file",path:"/assets/uwu/uwu-base-cropped.mp3",playbackRate:1,detune:50},"nav-hover":{type:"file",path:"/assets/uwu/uwu-base-uw.mp3",playbackRate:.95,detune:0},"page-transition":{type:"file",path:"/assets/uwu/uwu-base-cropped.mp3",playbackRate:.85,detune:-150},"center-hover":{type:"file",path:"/assets/uwu/uwu-base-uw.mp3",playbackRate:.85,detune:-50},"modal-open":{type:"file",path:"/assets/uwu/uwu-base-cropped.mp3",playbackRate:1.1,detune:150},"modal-close":{type:"file",path:"/assets/uwu/uwu-base-cropped.mp3",playbackRate:.9,detune:-100},"panel-open":{type:"file",path:"/assets/uwu/uwu-base-wu.mp3",playbackRate:1,detune:100},"panel-close":{type:"file",path:"/assets/uwu/uwu-base-wu.mp3",playbackRate:.8,detune:-100},"button-hover":{type:"file",path:"/assets/uwu/uwu-base-uw.mp3",playbackRate:1.2,detune:250},"button-click":{type:"file",path:"/assets/uwu/uwu-base-wu.mp3",playbackRate:1.15,detune:250},"form-input":{type:"file",path:"/assets/uwu/uwu-base-wu.mp3",playbackRate:.8,detune:0},"form-error":{type:"file",path:"/assets/uwu/uwu-base-wu.mp3",playbackRate:.7,detune:-150},"registration-success":{type:"file",path:"/assets/uwu/uwu-base-cropped.mp3",playbackRate:1.2,detune:250}}}};class q4{constructor(){Dn(this,"audioContext",null);Dn(this,"masterGainNode",null);Dn(this,"enabled",!1);Dn(this,"currentPack");Dn(this,"volume");Dn(this,"triggerMode");Dn(this,"audioBuffers",new Map);Dn(this,"audioLoadingPromises",new Map);const a=localStorage.getItem("lilith-sounds-enabled");this.enabled=a==="true",this.currentPack=this.getStoredOrRandomPack(),this.volume=this.getStoredVolume(),this.triggerMode=this.getStoredTriggerMode()}getStoredOrRandomPack(){const a=localStorage.getItem("lilith-sound-pack");if(a==="human"||a==="anime"||a==="uwu")return a;const i=["human","anime","uwu"],o=i[Math.floor(Math.random()*i.length)];return o?(localStorage.setItem("lilith-sound-pack",o),o):"human"}getStoredVolume(){const a=localStorage.getItem("lilith-sound-volume");if(a!==null){const i=parseFloat(a);if([0,.25,.5,.75,1].includes(i))return i}return .5}getStoredTriggerMode(){const a=localStorage.getItem("lilith-sound-triggers");return a&&["all","no-hover","clicks","feedback","off"].includes(a)?a:"all"}shouldPlayForMode(a){switch(this.triggerMode){case"off":return!1;case"feedback":return Iy.includes(a);case"clicks":return L4.includes(a)||Iy.includes(a);case"no-hover":return!N4.includes(a);case"all":default:return!0}}initAudioContext(){this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.masterGainNode=this.audioContext.createGain(),this.masterGainNode.gain.value=this.volume,this.masterGainNode.connect(this.audioContext.destination)),this.audioContext.state==="suspended"&&this.audioContext.resume()}async loadAudioFile(a){if(this.audioBuffers.has(a))return this.audioBuffers.get(a);if(this.audioLoadingPromises.has(a))return this.audioLoadingPromises.get(a);const i=(async()=>{if(!this.audioContext)throw new Error("AudioContext not initialized");const o=await fetch(a);if(!o.ok)throw new Error(`Failed to load audio file: ${a}`);const l=await o.arrayBuffer(),u=await this.audioContext.decodeAudioData(l);return this.audioBuffers.set(a,u),this.audioLoadingPromises.delete(a),u})();return this.audioLoadingPromises.set(a,i),i}playAudioFile(a,i=1,o=0){if(!this.audioContext||!this.masterGainNode)return;const l=this.audioContext.createBufferSource();l.buffer=a,l.playbackRate.value=i,l.detune.value=o,l.connect(this.masterGainNode),l.start()}play(a){if(this.enabled&&this.volume!==0&&this.shouldPlayForMode(a)&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches)try{if(this.initAudioContext(),!this.audioContext||!this.masterGainNode)return;const o=B4[this.currentPack].sounds[a];if(!o)return;typeof o=="function"?o(this.audioContext,this.masterGainNode):o.type==="file"?this.loadAudioFile(o.path).then(l=>this.playAudioFile(l,o.playbackRate,o.detune)).catch(l=>console.warn("Failed to load audio file:",o.path,l)):o.type==="synthesized"&&o.generator(this.audioContext,this.masterGainNode)}catch(i){console.warn("Failed to play sound:",i)}}toggle(){return this.enabled=!this.enabled,localStorage.setItem("lilith-sounds-enabled",String(this.enabled)),this.enabled&&this.initAudioContext(),this.enabled}setPack(a){this.currentPack=a,localStorage.setItem("lilith-sound-pack",a)}getPack(){return this.currentPack}isEnabled(){return this.enabled}setEnabled(a){this.enabled=a,localStorage.setItem("lilith-sounds-enabled",String(a)),a&&this.initAudioContext()}getVolume(){return this.volume}setVolume(a){this.volume=a,localStorage.setItem("lilith-sound-volume",String(a)),this.masterGainNode&&(this.masterGainNode.gain.value=a)}getTriggerMode(){return this.triggerMode}setTriggerMode(a){this.triggerMode=a,localStorage.setItem("lilith-sound-triggers",a)}}const Wi=new q4;var za={navigation:100,overlay:1e3,modal:2e3,"high-priority":9e3},Ix={base:0,content:1,tooltip:50};const Xx=b.createContext({});function kp(e){const a=b.useRef(null);return a.current===null&&(a.current=e()),a.current}const ou=b.createContext(null),_p=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class V4 extends b.Component{getSnapshotBeforeUpdate(a){const i=this.props.childRef.current;if(i&&a.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=i.offsetHeight||0,o.width=i.offsetWidth||0,o.top=i.offsetTop,o.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function U4({children:e,isPresent:a}){const i=b.useId(),o=b.useRef(null),l=b.useRef({width:0,height:0,top:0,left:0}),{nonce:u}=b.useContext(_p);return b.useInsertionEffect(()=>{const{width:m,height:p,top:g,left:h}=l.current;if(a||!o.current||!m||!p)return;o.current.dataset.motionPopId=i;const v=document.createElement("style");return u&&(v.nonce=u),document.head.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${p}px !important;
            top: ${g}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(v)}},[a]),c.jsx(V4,{isPresent:a,childRef:o,sizeRef:l,children:b.cloneElement(e,{ref:o})})}const F4=({children:e,initial:a,isPresent:i,onExitComplete:o,custom:l,presenceAffectsLayout:u,mode:m})=>{const p=kp(H4),g=b.useId(),h=b.useCallback(x=>{p.set(x,!0);for(const S of p.values())if(!S)return;o&&o()},[p,o]),v=b.useMemo(()=>({id:g,initial:a,isPresent:i,custom:l,onExitComplete:h,register:x=>(p.set(x,!1),()=>p.delete(x))}),u?[Math.random(),h]:[i,h]);return b.useMemo(()=>{p.forEach((x,S)=>p.set(S,!1))},[i]),b.useEffect(()=>{!i&&!p.size&&o&&o()},[i]),m==="popLayout"&&(e=c.jsx(U4,{isPresent:i,children:e})),c.jsx(ou.Provider,{value:v,children:e})};function H4(){return new Map}function P4(e=!0){const a=b.useContext(ou);if(a===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:l}=a,u=b.useId();b.useEffect(()=>{e&&l(u)},[e]);const m=b.useCallback(()=>e&&o&&o(u),[u,o,e]);return!i&&o?[!1,m]:[!0]}const dc=e=>e.key||"";function Xy(e){const a=[];return b.Children.forEach(e,i=>{b.isValidElement(i)&&a.push(i)}),a}const $p=typeof window<"u",Kx=$p?b.useLayoutEffect:b.useEffect,Wx=({children:e,custom:a,initial:i=!0,onExitComplete:o,presenceAffectsLayout:l=!0,mode:u="sync",propagate:m=!1})=>{const[p,g]=P4(m),h=b.useMemo(()=>Xy(e),[e]),v=m&&!p?[]:h.map(dc),x=b.useRef(!0),S=b.useRef(h),_=kp(()=>new Map),[C,T]=b.useState(h),[A,$]=b.useState(h);Kx(()=>{x.current=!1,S.current=h;for(let B=0;B<A.length;B++){const j=dc(A[B]);v.includes(j)?_.delete(j):_.get(j)!==!0&&_.set(j,!1)}},[A,v.length,v.join("-")]);const M=[];if(h!==C){let B=[...h];for(let j=0;j<A.length;j++){const R=A[j],z=dc(R);v.includes(z)||(B.splice(j,0,R),M.push(R))}u==="wait"&&M.length&&(B=M),$(Xy(B)),T(h);return}const{forceRender:E}=b.useContext(Xx);return c.jsx(c.Fragment,{children:A.map(B=>{const j=dc(B),R=m&&!p?!1:h===A||v.includes(j),z=()=>{if(_.has(j))_.set(j,!0);else return;let U=!0;_.forEach(ae=>{ae||(U=!1)}),U&&(E==null||E(),$(S.current),m&&(g==null||g()),o&&o())};return c.jsx(F4,{isPresent:R,initial:!x.current||i?void 0:!1,custom:R?void 0:a,presenceAffectsLayout:l,mode:u,onExitComplete:R?void 0:z,children:B},j)})})},Yr=e=>e;let Zx=Yr;function Tp(e){let a;return()=>(a===void 0&&(a=e()),a)}const jp=(e,a,i)=>{const o=a-e;return o===0?1:(i-e)/o},mr=e=>e*1e3,pr=e=>e/1e3,G4={useManualTiming:!1};function Y4(e){let a=new Set,i=new Set,o=!1,l=!1;const u=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function p(h){u.has(h)&&(g.schedule(h),e()),h(m)}const g={schedule:(h,v=!1,x=!1)=>{const _=x&&o?a:i;return v&&u.add(h),_.has(h)||_.add(h),h},cancel:h=>{i.delete(h),u.delete(h)},process:h=>{if(m=h,o){l=!0;return}o=!0,[a,i]=[i,a],a.forEach(p),a.clear(),o=!1,l&&(l=!1,g.process(h))}};return g}const fc=["read","resolveKeyframes","update","preRender","render","postRender"],I4=40;function Qx(e,a){let i=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,m=fc.reduce(($,M)=>($[M]=Y4(u),$),{}),{read:p,resolveKeyframes:g,update:h,preRender:v,render:x,postRender:S}=m,_=()=>{const $=performance.now();i=!1,l.delta=o?1e3/60:Math.max(Math.min($-l.timestamp,I4),1),l.timestamp=$,l.isProcessing=!0,p.process(l),g.process(l),h.process(l),v.process(l),x.process(l),S.process(l),l.isProcessing=!1,i&&a&&(o=!1,e(_))},C=()=>{i=!0,o=!0,l.isProcessing||e(_)};return{schedule:fc.reduce(($,M)=>{const E=m[M];return $[M]=(B,j=!1,R=!1)=>(i||C(),E.schedule(B,j,R)),$},{}),cancel:$=>{for(let M=0;M<fc.length;M++)m[fc[M]].cancel($)},state:l,steps:m}}const{schedule:wn,cancel:Lm,state:Lc}=Qx(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yr,!0),Cp=b.createContext({strict:!1}),Ky={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Zi={};for(const e in Ky)Zi[e]={isEnabled:a=>Ky[e].some(i=>!!a[i])};function Wy(e){for(const a in e)Zi[a]={...Zi[a],...e[a]}}function X4({children:e,features:a,strict:i=!1}){const[,o]=b.useState(!Zf(a)),l=b.useRef(void 0);if(!Zf(a)){const{renderer:u,...m}=a;l.current=u,Wy(m)}return b.useEffect(()=>{Zf(a)&&a().then(({renderer:u,...m})=>{Wy(m),l.current=u,o(!0)})},[]),c.jsx(Cp.Provider,{value:{renderer:l.current,strict:i},children:e})}function Zf(e){return typeof e=="function"}const K4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Bc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||K4.has(e)}let Jx=e=>!Bc(e);function W4(e){e&&(Jx=a=>a.startsWith("on")?!Bc(a):e(a))}try{W4(require("@emotion/is-prop-valid").default)}catch{}function Z4(e,a,i){const o={};for(const l in e)l==="values"&&typeof e.values=="object"||(Jx(l)||i===!0&&Bc(l)||!a&&!Bc(l)||e.draggable&&l.startsWith("onDrag"))&&(o[l]=e[l]);return o}function Q4(e){if(typeof Proxy>"u")return e;const a=new Map,i=(...o)=>e(...o);return new Proxy(i,{get:(o,l)=>l==="create"?e:(a.has(l)||a.set(l,e(l)),a.get(l))})}const su=b.createContext({});function Ms(e){return typeof e=="string"||Array.isArray(e)}function lu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Ap=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ep=["initial",...Ap];function cu(e){return lu(e.animate)||Ep.some(a=>Ms(e[a]))}function e5(e){return!!(cu(e)||e.variants)}function J4(e,a){if(cu(e)){const{initial:i,animate:o}=e;return{initial:i===!1||Ms(i)?i:void 0,animate:Ms(o)?o:void 0}}return e.inherit!==!1?a:{}}function e_(e){const{initial:a,animate:i}=J4(e,b.useContext(su));return b.useMemo(()=>({initial:a,animate:i}),[Zy(a),Zy(i)])}function Zy(e){return Array.isArray(e)?e.join(" "):e}const t_=Symbol.for("motionComponentSymbol");function t5(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function n_(e,a,i){return b.useCallback(o=>{o&&e.onMount&&e.onMount(o),a&&(o?a.mount(o):a.unmount()),i&&(typeof i=="function"?i(o):t5(i)&&(i.current=o))},[a])}const Rp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),a_="framerAppearId",n5="data-"+Rp(a_),{schedule:r_}=Qx(queueMicrotask,!1),i_=b.createContext({});function o_(e,a,i,o,l){var u,m;const{visualElement:p}=b.useContext(su),g=b.useContext(Cp),h=b.useContext(ou),v=b.useContext(_p).reducedMotion,x=b.useRef(null);o=o||g.renderer,!x.current&&o&&(x.current=o(e,{visualState:a,parent:p,props:i,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:v}));const S=x.current,_=b.useContext(i_);S&&!S.projection&&l&&(S.type==="html"||S.type==="svg")&&s_(x.current,i,l,_);const C=b.useRef(!1);b.useInsertionEffect(()=>{S&&C.current&&S.update(i,h)});const T=i[n5],A=b.useRef(!!T&&!(!((u=window.MotionHandoffIsComplete)===null||u===void 0)&&u.call(window,T))&&((m=window.MotionHasOptimisedAnimation)===null||m===void 0?void 0:m.call(window,T)));return Kx(()=>{S&&(C.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),r_.render(S.render),A.current&&S.animationState&&S.animationState.animateChanges())}),b.useEffect(()=>{S&&(!A.current&&S.animationState&&S.animationState.animateChanges(),A.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)===null||$===void 0||$.call(window,T)}),A.current=!1))}),S}function s_(e,a,i,o){const{layoutId:l,layout:u,drag:m,dragConstraints:p,layoutScroll:g,layoutRoot:h}=a;e.projection=new i(e.latestValues,a["data-framer-portal-id"]?void 0:a5(e.parent)),e.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!m||p&&t5(p),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:g,layoutRoot:h})}function a5(e){if(e)return e.options.allowProjection!==!1?e.projection:a5(e.parent)}function l_({preloadedFeatures:e,createVisualElement:a,useRender:i,useVisualState:o,Component:l}){var u,m;function p(h,v){let x;const S={...b.useContext(_p),...h,layoutId:c_(h)},{isStatic:_}=S,C=e_(h),T=o(h,_);if(!_&&$p){u_();const A=d_(S);x=A.MeasureLayout,C.visualElement=o_(l,T,S,a,A.ProjectionNode)}return c.jsxs(su.Provider,{value:C,children:[x&&C.visualElement?c.jsx(x,{visualElement:C.visualElement,...S}):null,i(l,h,n_(T,C.visualElement,v),T,_,C.visualElement)]})}p.displayName=`motion.${typeof l=="string"?l:`create(${(m=(u=l.displayName)!==null&&u!==void 0?u:l.name)!==null&&m!==void 0?m:""})`}`;const g=b.forwardRef(p);return g[t_]=l,g}function c_({layoutId:e}){const a=b.useContext(Xx).id;return a&&e!==void 0?a+"-"+e:e}function u_(e,a){b.useContext(Cp).strict}function d_(e){const{drag:a,layout:i}=Zi;if(!a&&!i)return{};const o={...a,...i};return{MeasureLayout:a!=null&&a.isEnabled(e)||i!=null&&i.isEnabled(e)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}const f_=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function zp(e){return typeof e!="string"||e.includes("-")?!1:!!(f_.indexOf(e)>-1||/[A-Z]/u.test(e))}function Qy(e){const a=[{},{}];return e==null||e.values.forEach((i,o)=>{a[0][o]=i.get(),a[1][o]=i.getVelocity()}),a}function Mp(e,a,i,o){if(typeof a=="function"){const[l,u]=Qy(o);a=a(i!==void 0?i:e.custom,l,u)}if(typeof a=="string"&&(a=e.variants&&e.variants[a]),typeof a=="function"){const[l,u]=Qy(o);a=a(i!==void 0?i:e.custom,l,u)}return a}const Bm=e=>Array.isArray(e),m_=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),p_=e=>Bm(e)?e[e.length-1]||0:e,Kt=e=>!!(e&&e.getVelocity);function h_(e){const a=Kt(e)?e.get():e;return m_(a)?a.toValue():a}function g_({scrapeMotionValuesFromProps:e,createRenderState:a,onUpdate:i},o,l,u){const m={latestValues:b_(o,l,u,e),renderState:a()};return i&&(m.onMount=p=>i({props:o,current:p,...m}),m.onUpdate=p=>i(p)),m}const r5=e=>(a,i)=>{const o=b.useContext(su),l=b.useContext(ou),u=()=>g_(e,a,o,l);return i?u():kp(u)};function b_(e,a,i,o){const l={},u=o(e,{});for(const S in u)l[S]=h_(u[S]);let{initial:m,animate:p}=e;const g=cu(e),h=e5(e);a&&h&&!g&&e.inherit!==!1&&(m===void 0&&(m=a.initial),p===void 0&&(p=a.animate));let v=i?i.initial===!1:!1;v=v||m===!1;const x=v?p:m;if(x&&typeof x!="boolean"&&!lu(x)){const S=Array.isArray(x)?x:[x];for(let _=0;_<S.length;_++){const C=Mp(e,S[_]);if(C){const{transitionEnd:T,transition:A,...$}=C;for(const M in $){let E=$[M];if(Array.isArray(E)){const B=v?E.length-1:0;E=E[B]}E!==null&&(l[M]=E)}for(const M in T)l[M]=T[M]}}}return l}const no=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xr=new Set(no),i5=e=>a=>typeof a=="string"&&a.startsWith(e),o5=i5("--"),y_=i5("var(--"),Dp=e=>y_(e)?x_.test(e.split("/*")[0].trim()):!1,x_=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,s5=(e,a)=>a&&typeof e=="number"?a.transform(e):e,Ir=(e,a,i)=>i>a?a:i<e?e:i,ao={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ds={...ao,transform:e=>Ir(0,1,e)},mc={...ao,default:1},Bs=e=>({test:a=>typeof a=="string"&&a.endsWith(e)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${e}`}),ur=Bs("deg"),Pi=Bs("%"),$e=Bs("px"),v_=Bs("vh"),w_=Bs("vw"),Jy={...Pi,parse:e=>Pi.parse(e)/100,transform:e=>Pi.transform(e*100)},S_={borderWidth:$e,borderTopWidth:$e,borderRightWidth:$e,borderBottomWidth:$e,borderLeftWidth:$e,borderRadius:$e,radius:$e,borderTopLeftRadius:$e,borderTopRightRadius:$e,borderBottomRightRadius:$e,borderBottomLeftRadius:$e,width:$e,maxWidth:$e,height:$e,maxHeight:$e,top:$e,right:$e,bottom:$e,left:$e,padding:$e,paddingTop:$e,paddingRight:$e,paddingBottom:$e,paddingLeft:$e,margin:$e,marginTop:$e,marginRight:$e,marginBottom:$e,marginLeft:$e,backgroundPositionX:$e,backgroundPositionY:$e},k_={rotate:ur,rotateX:ur,rotateY:ur,rotateZ:ur,scale:mc,scaleX:mc,scaleY:mc,scaleZ:mc,skew:ur,skewX:ur,skewY:ur,distance:$e,translateX:$e,translateY:$e,translateZ:$e,x:$e,y:$e,z:$e,perspective:$e,transformPerspective:$e,opacity:Ds,originX:Jy,originY:Jy,originZ:$e},e1={...ao,transform:Math.round},Op={...S_,...k_,zIndex:e1,size:$e,fillOpacity:Ds,strokeOpacity:Ds,numOctaves:e1},__={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},$_=no.length;function T_(e,a,i){let o="",l=!0;for(let u=0;u<$_;u++){const m=no[u],p=e[m];if(p===void 0)continue;let g=!0;if(typeof p=="number"?g=p===(m.startsWith("scale")?1:0):g=parseFloat(p)===0,!g||i){const h=s5(p,Op[m]);if(!g){l=!1;const v=__[m]||m;o+=`${v}(${h}) `}i&&(a[m]=h)}}return o=o.trim(),i?o=i(a,l?"":o):l&&(o="none"),o}function Np(e,a,i){const{style:o,vars:l,transformOrigin:u}=e;let m=!1,p=!1;for(const g in a){const h=a[g];if(Xr.has(g)){m=!0;continue}else if(o5(g)){l[g]=h;continue}else{const v=s5(h,Op[g]);g.startsWith("origin")?(p=!0,u[g]=v):o[g]=v}}if(a.transform||(m||i?o.transform=T_(a,e.transform,i):o.transform&&(o.transform="none")),p){const{originX:g="50%",originY:h="50%",originZ:v=0}=u;o.transformOrigin=`${g} ${h} ${v}`}}const j_={offset:"stroke-dashoffset",array:"stroke-dasharray"},C_={offset:"strokeDashoffset",array:"strokeDasharray"};function A_(e,a,i=1,o=0,l=!0){e.pathLength=1;const u=l?j_:C_;e[u.offset]=$e.transform(-o);const m=$e.transform(a),p=$e.transform(i);e[u.array]=`${m} ${p}`}function t1(e,a,i){return typeof e=="string"?e:$e.transform(a+i*e)}function E_(e,a,i){const o=t1(a,e.x,e.width),l=t1(i,e.y,e.height);return`${o} ${l}`}function Lp(e,{attrX:a,attrY:i,attrScale:o,originX:l,originY:u,pathLength:m,pathSpacing:p=1,pathOffset:g=0,...h},v,x){if(Np(e,h,x),v){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:S,style:_,dimensions:C}=e;S.transform&&(C&&(_.transform=S.transform),delete S.transform),C&&(l!==void 0||u!==void 0||_.transform)&&(_.transformOrigin=E_(C,l!==void 0?l:.5,u!==void 0?u:.5)),a!==void 0&&(S.x=a),i!==void 0&&(S.y=i),o!==void 0&&(S.scale=o),m!==void 0&&A_(S,m,p,g,!1)}const Bp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),l5=()=>({...Bp(),attrs:{}}),qp=e=>typeof e=="string"&&e.toLowerCase()==="svg";function c5(e,{style:a,vars:i},o,l){Object.assign(e.style,a,l&&l.getProjectionStyles(o));for(const u in i)e.style.setProperty(u,i[u])}const u5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function d5(e,a,i,o){c5(e,a,void 0,o);for(const l in a.attrs)e.setAttribute(u5.has(l)?l:Rp(l),a.attrs[l])}const R_={};function f5(e,{layout:a,layoutId:i}){return Xr.has(e)||e.startsWith("origin")||(a||i!==void 0)&&(!!R_[e]||e==="opacity")}function Vp(e,a,i){var o;const{style:l}=e,u={};for(const m in l)(Kt(l[m])||a.style&&Kt(a.style[m])||f5(m,e)||((o=i==null?void 0:i.getValue(m))===null||o===void 0?void 0:o.liveStyle)!==void 0)&&(u[m]=l[m]);return u}function m5(e,a,i){const o=Vp(e,a,i);for(const l in e)if(Kt(e[l])||Kt(a[l])){const u=no.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;o[u]=e[l]}return o}function z_(e,a){try{a.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{a.dimensions={x:0,y:0,width:0,height:0}}}const n1=["x","y","width","height","cx","cy","r"],M_={useVisualState:r5({scrapeMotionValuesFromProps:m5,createRenderState:l5,onUpdate:({props:e,prevProps:a,current:i,renderState:o,latestValues:l})=>{if(!i)return;let u=!!e.drag;if(!u){for(const p in l)if(Xr.has(p)){u=!0;break}}if(!u)return;let m=!a;if(a)for(let p=0;p<n1.length;p++){const g=n1[p];e[g]!==a[g]&&(m=!0)}m&&wn.read(()=>{z_(i,o),wn.render(()=>{Lp(o,l,qp(i.tagName),e.transformTemplate),d5(i,o)})})}})},D_={useVisualState:r5({scrapeMotionValuesFromProps:Vp,createRenderState:Bp})};function p5(e,a,i){for(const o in a)!Kt(a[o])&&!f5(o,i)&&(e[o]=a[o])}function O_({transformTemplate:e},a){return b.useMemo(()=>{const i=Bp();return Np(i,a,e),Object.assign({},i.vars,i.style)},[a])}function N_(e,a){const i=e.style||{},o={};return p5(o,i,e),Object.assign(o,O_(e,a)),o}function L_(e,a){const i={},o=N_(e,a);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=o,i}function B_(e,a,i,o){const l=b.useMemo(()=>{const u=l5();return Lp(u,a,qp(o),e.transformTemplate),{...u.attrs,style:{...u.style}}},[a]);if(e.style){const u={};p5(u,e.style,e),l.style={...u,...l.style}}return l}function q_(e=!1){return(i,o,l,{latestValues:u},m)=>{const g=(zp(i)?B_:L_)(o,u,m,i),h=Z4(o,typeof i=="string",e),v=i!==b.Fragment?{...h,...g,ref:l}:{},{children:x}=o,S=b.useMemo(()=>Kt(x)?x.get():x,[x]);return b.createElement(i,{...v,children:S})}}function V_(e,a){return function(o,{forwardMotionProps:l}={forwardMotionProps:!1}){const m={...zp(o)?M_:D_,preloadedFeatures:e,useRender:q_(l),createVisualElement:a,Component:o};return l_(m)}}const U_=V_(),Xn=Q4(U_);function h5(e,a){if(!Array.isArray(a))return!1;const i=a.length;if(i!==e.length)return!1;for(let o=0;o<i;o++)if(a[o]!==e[o])return!1;return!0}function uu(e,a,i){const o=e.getProps();return Mp(o,a,i!==void 0?i:o.custom,e)}const F_=Tp(()=>window.ScrollTimeline!==void 0);class H_{constructor(a){this.stop=()=>this.runAll("stop"),this.animations=a.filter(Boolean)}get finished(){return Promise.all(this.animations.map(a=>"finished"in a?a.finished:a))}getAll(a){return this.animations[0][a]}setAll(a,i){for(let o=0;o<this.animations.length;o++)this.animations[o][a]=i}attachTimeline(a,i){const o=this.animations.map(l=>{if(F_()&&l.attachTimeline)return l.attachTimeline(a);if(typeof i=="function")return i(l)});return()=>{o.forEach((l,u)=>{l&&l(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(a){this.setAll("time",a)}get speed(){return this.getAll("speed")}set speed(a){this.setAll("speed",a)}get startTime(){return this.getAll("startTime")}get duration(){let a=0;for(let i=0;i<this.animations.length;i++)a=Math.max(a,this.animations[i].duration);return a}runAll(a){this.animations.forEach(i=>i[a]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class P_ extends H_{then(a,i){return Promise.all(this.animations).then(a).catch(i)}}function g5(e,a){return e?e[a]||e.default||e:void 0}const qm=2e4;function b5(e){let a=0;const i=50;let o=e.next(a);for(;!o.done&&a<qm;)a+=i,o=e.next(a);return a>=qm?1/0:a}function Up(e){return typeof e=="function"}function a1(e,a){e.timeline=a,e.onfinish=null}const Fp=e=>Array.isArray(e)&&typeof e[0]=="number",G_={linearEasing:void 0};function Y_(e,a){const i=Tp(e);return()=>{var o;return(o=G_[a])!==null&&o!==void 0?o:i()}}const qc=Y_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),y5=(e,a,i=10)=>{let o="";const l=Math.max(Math.round(a/i),2);for(let u=0;u<l;u++)o+=e(jp(0,l-1,u))+", ";return`linear(${o.substring(0,o.length-2)})`};function x5(e){return!!(typeof e=="function"&&qc()||!e||typeof e=="string"&&(e in Vm||qc())||Fp(e)||Array.isArray(e)&&e.every(x5))}const hs=([e,a,i,o])=>`cubic-bezier(${e}, ${a}, ${i}, ${o})`,Vm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hs([0,.65,.55,1]),circOut:hs([.55,0,1,.45]),backIn:hs([.31,.01,.66,-.59]),backOut:hs([.33,1.53,.69,.99])};function v5(e,a){if(e)return typeof e=="function"&&qc()?y5(e,a):Fp(e)?hs(e):Array.isArray(e)?e.map(i=>v5(i,a)||Vm.easeOut):Vm[e]}const I_={y:!1};function X_(){return I_.y}function K_(e,a,i){var o;if(e instanceof Element)return[e];if(typeof e=="string"){let l=document;const u=(o=void 0)!==null&&o!==void 0?o:l.querySelectorAll(e);return u?Array.from(u):[]}return Array.from(e)}function w5(e,a){const i=K_(e),o=new AbortController,l={passive:!0,...a,signal:o.signal};return[i,l,()=>o.abort()]}function r1(e){return a=>{a.pointerType==="touch"||X_()||e(a)}}function W_(e,a,i={}){const[o,l,u]=w5(e,i),m=r1(p=>{const{target:g}=p,h=a(p);if(typeof h!="function"||!g)return;const v=r1(x=>{h(x),g.removeEventListener("pointerleave",v)});g.addEventListener("pointerleave",v,l)});return o.forEach(p=>{p.addEventListener("pointerenter",m,l)}),u}const S5=(e,a)=>a?e===a?!0:S5(e,a.parentElement):!1,Z_=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Q_=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function J_(e){return Q_.has(e.tagName)||e.tabIndex!==-1}const gs=new WeakSet;function i1(e){return a=>{a.key==="Enter"&&e(a)}}function Qf(e,a){e.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const e$=(e,a)=>{const i=e.currentTarget;if(!i)return;const o=i1(()=>{if(gs.has(i))return;Qf(i,"down");const l=i1(()=>{Qf(i,"up")}),u=()=>Qf(i,"cancel");i.addEventListener("keyup",l,a),i.addEventListener("blur",u,a)});i.addEventListener("keydown",o,a),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),a)};function o1(e){return Z_(e)&&!0}function t$(e,a,i={}){const[o,l,u]=w5(e,i),m=p=>{const g=p.currentTarget;if(!o1(p)||gs.has(g))return;gs.add(g);const h=a(p),v=(_,C)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",S),!(!o1(_)||!gs.has(g))&&(gs.delete(g),typeof h=="function"&&h(_,{success:C}))},x=_=>{v(_,i.useGlobalTarget||S5(g,_.target))},S=_=>{v(_,!1)};window.addEventListener("pointerup",x,l),window.addEventListener("pointercancel",S,l)};return o.forEach(p=>{!J_(p)&&p.getAttribute("tabindex")===null&&(p.tabIndex=0),(i.useGlobalTarget?window:p).addEventListener("pointerdown",m,l),p.addEventListener("focus",h=>e$(h,l),l)}),u}const k5=new Set(["width","height","top","left","right","bottom",...no]);let kc;function n$(){kc=void 0}const hr={now:()=>(kc===void 0&&hr.set(Lc.isProcessing||G4.useManualTiming?Lc.timestamp:performance.now()),kc),set:e=>{kc=e,queueMicrotask(n$)}};function a$(e,a){e.indexOf(a)===-1&&e.push(a)}function r$(e,a){const i=e.indexOf(a);i>-1&&e.splice(i,1)}class _5{constructor(){this.subscriptions=[]}add(a){return a$(this.subscriptions,a),()=>r$(this.subscriptions,a)}notify(a,i,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](a,i,o);else for(let u=0;u<l;u++){const m=this.subscriptions[u];m&&m(a,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function $5(e,a){return a?e*(1e3/a):0}const s1=30,i$=e=>!isNaN(parseFloat(e));class o${constructor(a,i={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,l=!0)=>{const u=hr.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),l&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(a),this.owner=i.owner}setCurrent(a){this.current=a,this.updatedAt=hr.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=i$(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,i){this.events[a]||(this.events[a]=new _5);const o=this.events[a].add(i);return a==="change"?()=>{o(),wn.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,i){this.passiveEffect=a,this.stopPassiveEffect=i}set(a,i=!0){!i||!this.passiveEffect?this.updateAndNotify(a,i):this.passiveEffect(a,this.updateAndNotify)}setWithVelocity(a,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-o}jump(a,i=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const a=hr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>s1)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,s1);return $5(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(a){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=a(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Vc(e,a){return new o$(e,a)}function s$(e,a,i){e.hasValue(a)?e.getValue(a).set(i):e.addValue(a,Vc(i))}function l$(e,a){const i=uu(e,a);let{transitionEnd:o={},transition:l={},...u}=i||{};u={...u,...o};for(const m in u){const p=p_(u[m]);s$(e,m,p)}}function c$(e){return!!(Kt(e)&&e.add)}function u$(e,a){const i=e.getValue("willChange");if(c$(i))return i.add(a)}function d$(e){return e.props[n5]}const T5=(e,a,i)=>(((1-3*i+3*a)*e+(3*i-6*a))*e+3*a)*e,f$=1e-7,m$=12;function p$(e,a,i,o,l){let u,m,p=0;do m=a+(i-a)/2,u=T5(m,o,l)-e,u>0?i=m:a=m;while(Math.abs(u)>f$&&++p<m$);return m}function qs(e,a,i,o){if(e===a&&i===o)return Yr;const l=u=>p$(u,0,1,e,i);return u=>u===0||u===1?u:T5(l(u),a,o)}const j5=e=>a=>a<=.5?e(2*a)/2:(2-e(2*(1-a)))/2,C5=e=>a=>1-e(1-a),A5=qs(.33,1.53,.69,.99),Hp=C5(A5),E5=j5(Hp),R5=e=>(e*=2)<1?.5*Hp(e):.5*(2-Math.pow(2,-10*(e-1))),Pp=e=>1-Math.sin(Math.acos(e)),h$=C5(Pp),z5=j5(Pp),M5=e=>/^0[^.\s]+$/u.test(e);function g$(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||M5(e):!0}const Ss=e=>Math.round(e*1e5)/1e5,Gp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function b$(e){return e==null}const y$=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yp=(e,a)=>i=>!!(typeof i=="string"&&y$.test(i)&&i.startsWith(e)||a&&!b$(i)&&Object.prototype.hasOwnProperty.call(i,a)),D5=(e,a,i)=>o=>{if(typeof o!="string")return o;const[l,u,m,p]=o.match(Gp);return{[e]:parseFloat(l),[a]:parseFloat(u),[i]:parseFloat(m),alpha:p!==void 0?parseFloat(p):1}},x$=e=>Ir(0,255,e),Jf={...ao,transform:e=>Math.round(x$(e))},Fr={test:Yp("rgb","red"),parse:D5("red","green","blue"),transform:({red:e,green:a,blue:i,alpha:o=1})=>"rgba("+Jf.transform(e)+", "+Jf.transform(a)+", "+Jf.transform(i)+", "+Ss(Ds.transform(o))+")"};function v$(e){let a="",i="",o="",l="";return e.length>5?(a=e.substring(1,3),i=e.substring(3,5),o=e.substring(5,7),l=e.substring(7,9)):(a=e.substring(1,2),i=e.substring(2,3),o=e.substring(3,4),l=e.substring(4,5),a+=a,i+=i,o+=o,l+=l),{red:parseInt(a,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Um={test:Yp("#"),parse:v$,transform:Fr.transform},Hi={test:Yp("hsl","hue"),parse:D5("hue","saturation","lightness"),transform:({hue:e,saturation:a,lightness:i,alpha:o=1})=>"hsla("+Math.round(e)+", "+Pi.transform(Ss(a))+", "+Pi.transform(Ss(i))+", "+Ss(Ds.transform(o))+")"},It={test:e=>Fr.test(e)||Um.test(e)||Hi.test(e),parse:e=>Fr.test(e)?Fr.parse(e):Hi.test(e)?Hi.parse(e):Um.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Fr.transform(e):Hi.transform(e)},w$=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function S$(e){var a,i;return isNaN(e)&&typeof e=="string"&&(((a=e.match(Gp))===null||a===void 0?void 0:a.length)||0)+(((i=e.match(w$))===null||i===void 0?void 0:i.length)||0)>0}const O5="number",N5="color",k$="var",_$="var(",l1="${}",$$=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Os(e){const a=e.toString(),i=[],o={color:[],number:[],var:[]},l=[];let u=0;const p=a.replace($$,g=>(It.test(g)?(o.color.push(u),l.push(N5),i.push(It.parse(g))):g.startsWith(_$)?(o.var.push(u),l.push(k$),i.push(g)):(o.number.push(u),l.push(O5),i.push(parseFloat(g))),++u,l1)).split(l1);return{values:i,split:p,indexes:o,types:l}}function L5(e){return Os(e).values}function B5(e){const{split:a,types:i}=Os(e),o=a.length;return l=>{let u="";for(let m=0;m<o;m++)if(u+=a[m],l[m]!==void 0){const p=i[m];p===O5?u+=Ss(l[m]):p===N5?u+=It.transform(l[m]):u+=l[m]}return u}}const T$=e=>typeof e=="number"?0:e;function j$(e){const a=L5(e);return B5(e)(a.map(T$))}const ro={test:S$,parse:L5,createTransformer:B5,getAnimatableNone:j$},C$=new Set(["brightness","contrast","saturate","opacity"]);function A$(e){const[a,i]=e.slice(0,-1).split("(");if(a==="drop-shadow")return e;const[o]=i.match(Gp)||[];if(!o)return e;const l=i.replace(o,"");let u=C$.has(a)?1:0;return o!==i&&(u*=100),a+"("+u+l+")"}const E$=/\b([a-z-]*)\(.*?\)/gu,Fm={...ro,getAnimatableNone:e=>{const a=e.match(E$);return a?a.map(A$).join(" "):e}},R$={...Op,color:It,backgroundColor:It,outlineColor:It,fill:It,stroke:It,borderColor:It,borderTopColor:It,borderRightColor:It,borderBottomColor:It,borderLeftColor:It,filter:Fm,WebkitFilter:Fm},Ip=e=>R$[e];function q5(e,a){let i=Ip(e);return i!==Fm&&(i=ro),i.getAnimatableNone?i.getAnimatableNone(a):void 0}const z$=new Set(["auto","none","0"]);function M$(e,a,i){let o=0,l;for(;o<e.length&&!l;){const u=e[o];typeof u=="string"&&!z$.has(u)&&Os(u).values.length&&(l=e[o]),o++}if(l&&i)for(const u of a)e[u]=q5(i,l)}const c1=e=>e===ao||e===$e,u1=(e,a)=>parseFloat(e.split(", ")[a]),d1=(e,a)=>(i,{transform:o})=>{if(o==="none"||!o)return 0;const l=o.match(/^matrix3d\((.+)\)$/u);if(l)return u1(l[1],a);{const u=o.match(/^matrix\((.+)\)$/u);return u?u1(u[1],e):0}},D$=new Set(["x","y","z"]),O$=no.filter(e=>!D$.has(e));function N$(e){const a=[];return O$.forEach(i=>{const o=e.getValue(i);o!==void 0&&(a.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),a}const Qi={width:({x:e},{paddingLeft:a="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(a)-parseFloat(i),height:({y:e},{paddingTop:a="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(a)-parseFloat(i),top:(e,{top:a})=>parseFloat(a),left:(e,{left:a})=>parseFloat(a),bottom:({y:e},{top:a})=>parseFloat(a)+(e.max-e.min),right:({x:e},{left:a})=>parseFloat(a)+(e.max-e.min),x:d1(4,13),y:d1(5,14)};Qi.translateX=Qi.x;Qi.translateY=Qi.y;const Hr=new Set;let Hm=!1,Pm=!1;function V5(){if(Pm){const e=Array.from(Hr).filter(o=>o.needsMeasurement),a=new Set(e.map(o=>o.element)),i=new Map;a.forEach(o=>{const l=N$(o);l.length&&(i.set(o,l),o.render())}),e.forEach(o=>o.measureInitialState()),a.forEach(o=>{o.render();const l=i.get(o);l&&l.forEach(([u,m])=>{var p;(p=o.getValue(u))===null||p===void 0||p.set(m)})}),e.forEach(o=>o.measureEndState()),e.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Pm=!1,Hm=!1,Hr.forEach(e=>e.complete()),Hr.clear()}function U5(){Hr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Pm=!0)})}function L$(){U5(),V5()}class Xp{constructor(a,i,o,l,u,m=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...a],this.onComplete=i,this.name=o,this.motionValue=l,this.element=u,this.isAsync=m}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Hr.add(this),Hm||(Hm=!0,wn.read(U5),wn.resolveKeyframes(V5))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:i,element:o,motionValue:l}=this;for(let u=0;u<a.length;u++)if(a[u]===null)if(u===0){const m=l==null?void 0:l.get(),p=a[a.length-1];if(m!==void 0)a[0]=m;else if(o&&i){const g=o.readValue(i,p);g!=null&&(a[0]=g)}a[0]===void 0&&(a[0]=p),l&&m===void 0&&l.set(a[0])}else a[u]=a[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Hr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Hr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const F5=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),B$=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function q$(e){const a=B$.exec(e);if(!a)return[,];const[,i,o,l]=a;return[`--${i??o}`,l]}function H5(e,a,i=1){const[o,l]=q$(e);if(!o)return;const u=window.getComputedStyle(a).getPropertyValue(o);if(u){const m=u.trim();return F5(m)?parseFloat(m):m}return Dp(l)?H5(l,a,i+1):l}const P5=e=>a=>a.test(e),V$={test:e=>e==="auto",parse:e=>e},G5=[ao,$e,Pi,ur,w_,v_,V$],f1=e=>G5.find(P5(e));class Y5 extends Xp{constructor(a,i,o,l,u){super(a,i,o,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<a.length;g++){let h=a[g];if(typeof h=="string"&&(h=h.trim(),Dp(h))){const v=H5(h,i.current);v!==void 0&&(a[g]=v),g===a.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!k5.has(o)||a.length!==2)return;const[l,u]=a,m=f1(l),p=f1(u);if(m!==p)if(c1(m)&&c1(p))for(let g=0;g<a.length;g++){const h=a[g];typeof h=="string"&&(a[g]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:i}=this,o=[];for(let l=0;l<a.length;l++)g$(a[l])&&o.push(l);o.length&&M$(a,o,i)}measureInitialState(){const{element:a,unresolvedKeyframes:i,name:o}=this;if(!a||!a.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qi[o](a.measureViewportBox(),window.getComputedStyle(a.current)),i[0]=this.measuredOrigin;const l=i[i.length-1];l!==void 0&&a.getValue(o,l).jump(l,!1)}measureEndState(){var a;const{element:i,name:o,unresolvedKeyframes:l}=this;if(!i||!i.current)return;const u=i.getValue(o);u&&u.jump(this.measuredOrigin,!1);const m=l.length-1,p=l[m];l[m]=Qi[o](i.measureViewportBox(),window.getComputedStyle(i.current)),p!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=p),!((a=this.removedTransforms)===null||a===void 0)&&a.length&&this.removedTransforms.forEach(([g,h])=>{i.getValue(g).set(h)}),this.resolveNoneKeyframes()}}const m1=(e,a)=>a==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ro.test(e)||e==="0")&&!e.startsWith("url("));function U$(e){const a=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==a)return!0}function F$(e,a,i,o){const l=e[0];if(l===null)return!1;if(a==="display"||a==="visibility")return!0;const u=e[e.length-1],m=m1(l,a),p=m1(u,a);return!m||!p?!1:U$(e)||(i==="spring"||Up(i))&&o}const H$=e=>e!==null;function du(e,{repeat:a,repeatType:i="loop"},o){const l=e.filter(H$),u=a&&i!=="loop"&&a%2===1?0:l.length-1;return!u||o===void 0?l[u]:o}const P$=40;class I5{constructor({autoplay:a=!0,delay:i=0,type:o="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:m="loop",...p}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=hr.now(),this.options={autoplay:a,delay:i,type:o,repeat:l,repeatDelay:u,repeatType:m,...p},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>P$?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&L$(),this._resolved}onKeyframesResolved(a,i){this.resolvedAt=hr.now(),this.hasAttemptedResolve=!0;const{name:o,type:l,velocity:u,delay:m,onComplete:p,onUpdate:g,isGenerator:h}=this.options;if(!h&&!F$(a,o,l,u))if(m)this.options.duration=0;else{g&&g(du(a,this.options,i)),p&&p(),this.resolveFinishedPromise();return}const v=this.initPlayback(a,i);v!==!1&&(this._resolved={keyframes:a,finalKeyframe:i,...v},this.onPostResolved())}onPostResolved(){}then(a,i){return this.currentFinishedPromise.then(a,i)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(a=>{this.resolveFinishedPromise=a})}}const fu=(e,a,i)=>e+(a-e)*i;function em(e,a,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(a-e)*6*i:i<1/2?a:i<2/3?e+(a-e)*(2/3-i)*6:e}function G$({hue:e,saturation:a,lightness:i,alpha:o}){e/=360,a/=100,i/=100;let l=0,u=0,m=0;if(!a)l=u=m=i;else{const p=i<.5?i*(1+a):i+a-i*a,g=2*i-p;l=em(g,p,e+1/3),u=em(g,p,e),m=em(g,p,e-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(m*255),alpha:o}}function Uc(e,a){return i=>i>0?a:e}const tm=(e,a,i)=>{const o=e*e,l=i*(a*a-o)+o;return l<0?0:Math.sqrt(l)},Y$=[Um,Fr,Hi],I$=e=>Y$.find(a=>a.test(e));function p1(e){const a=I$(e);if(!a)return!1;let i=a.parse(e);return a===Hi&&(i=G$(i)),i}const h1=(e,a)=>{const i=p1(e),o=p1(a);if(!i||!o)return Uc(e,a);const l={...i};return u=>(l.red=tm(i.red,o.red,u),l.green=tm(i.green,o.green,u),l.blue=tm(i.blue,o.blue,u),l.alpha=fu(i.alpha,o.alpha,u),Fr.transform(l))},X$=(e,a)=>i=>a(e(i)),mu=(...e)=>e.reduce(X$),Gm=new Set(["none","hidden"]);function K$(e,a){return Gm.has(e)?i=>i<=0?e:a:i=>i>=1?a:e}function W$(e,a){return i=>fu(e,a,i)}function Kp(e){return typeof e=="number"?W$:typeof e=="string"?Dp(e)?Uc:It.test(e)?h1:J$:Array.isArray(e)?X5:typeof e=="object"?It.test(e)?h1:Z$:Uc}function X5(e,a){const i=[...e],o=i.length,l=e.map((u,m)=>Kp(u)(u,a[m]));return u=>{for(let m=0;m<o;m++)i[m]=l[m](u);return i}}function Z$(e,a){const i={...e,...a},o={};for(const l in i)e[l]!==void 0&&a[l]!==void 0&&(o[l]=Kp(e[l])(e[l],a[l]));return l=>{for(const u in o)i[u]=o[u](l);return i}}function Q$(e,a){var i;const o=[],l={color:0,var:0,number:0};for(let u=0;u<a.values.length;u++){const m=a.types[u],p=e.indexes[m][l[m]],g=(i=e.values[p])!==null&&i!==void 0?i:0;o[u]=g,l[m]++}return o}const J$=(e,a)=>{const i=ro.createTransformer(a),o=Os(e),l=Os(a);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?Gm.has(e)&&!l.values.length||Gm.has(a)&&!o.values.length?K$(e,a):mu(X5(Q$(o,l),l.values),i):Uc(e,a)};function K5(e,a,i){return typeof e=="number"&&typeof a=="number"&&typeof i=="number"?fu(e,a,i):Kp(e)(e,a)}const e3=5;function W5(e,a,i){const o=Math.max(a-e3,0);return $5(i-e(o),a-o)}const bt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},nm=.001;function t3({duration:e=bt.duration,bounce:a=bt.bounce,velocity:i=bt.velocity,mass:o=bt.mass}){let l,u,m=1-a;m=Ir(bt.minDamping,bt.maxDamping,m),e=Ir(bt.minDuration,bt.maxDuration,pr(e)),m<1?(l=h=>{const v=h*m,x=v*e,S=v-i,_=Ym(h,m),C=Math.exp(-x);return nm-S/_*C},u=h=>{const x=h*m*e,S=x*i+i,_=Math.pow(m,2)*Math.pow(h,2)*e,C=Math.exp(-x),T=Ym(Math.pow(h,2),m);return(-l(h)+nm>0?-1:1)*((S-_)*C)/T}):(l=h=>{const v=Math.exp(-h*e),x=(h-i)*e+1;return-nm+v*x},u=h=>{const v=Math.exp(-h*e),x=(i-h)*(e*e);return v*x});const p=5/e,g=a3(l,u,p);if(e=mr(e),isNaN(g))return{stiffness:bt.stiffness,damping:bt.damping,duration:e};{const h=Math.pow(g,2)*o;return{stiffness:h,damping:m*2*Math.sqrt(o*h),duration:e}}}const n3=12;function a3(e,a,i){let o=i;for(let l=1;l<n3;l++)o=o-e(o)/a(o);return o}function Ym(e,a){return e*Math.sqrt(1-a*a)}const r3=["duration","bounce"],i3=["stiffness","damping","mass"];function g1(e,a){return a.some(i=>e[i]!==void 0)}function o3(e){let a={velocity:bt.velocity,stiffness:bt.stiffness,damping:bt.damping,mass:bt.mass,isResolvedFromDuration:!1,...e};if(!g1(e,i3)&&g1(e,r3))if(e.visualDuration){const i=e.visualDuration,o=2*Math.PI/(i*1.2),l=o*o,u=2*Ir(.05,1,1-(e.bounce||0))*Math.sqrt(l);a={...a,mass:bt.mass,stiffness:l,damping:u}}else{const i=t3(e);a={...a,...i,mass:bt.mass},a.isResolvedFromDuration=!0}return a}function Z5(e=bt.visualDuration,a=bt.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:a}:e;let{restSpeed:o,restDelta:l}=i;const u=i.keyframes[0],m=i.keyframes[i.keyframes.length-1],p={done:!1,value:u},{stiffness:g,damping:h,mass:v,duration:x,velocity:S,isResolvedFromDuration:_}=o3({...i,velocity:-pr(i.velocity||0)}),C=S||0,T=h/(2*Math.sqrt(g*v)),A=m-u,$=pr(Math.sqrt(g/v)),M=Math.abs(A)<5;o||(o=M?bt.restSpeed.granular:bt.restSpeed.default),l||(l=M?bt.restDelta.granular:bt.restDelta.default);let E;if(T<1){const j=Ym($,T);E=R=>{const z=Math.exp(-T*$*R);return m-z*((C+T*$*A)/j*Math.sin(j*R)+A*Math.cos(j*R))}}else if(T===1)E=j=>m-Math.exp(-$*j)*(A+(C+$*A)*j);else{const j=$*Math.sqrt(T*T-1);E=R=>{const z=Math.exp(-T*$*R),U=Math.min(j*R,300);return m-z*((C+T*$*A)*Math.sinh(U)+j*A*Math.cosh(U))/j}}const B={calculatedDuration:_&&x||null,next:j=>{const R=E(j);if(_)p.done=j>=x;else{let z=0;T<1&&(z=j===0?mr(C):W5(E,j,R));const U=Math.abs(z)<=o,ae=Math.abs(m-R)<=l;p.done=U&&ae}return p.value=p.done?m:R,p},toString:()=>{const j=Math.min(b5(B),qm),R=y5(z=>B.next(j*z).value,j,30);return j+"ms "+R}};return B}function b1({keyframes:e,velocity:a=0,power:i=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:m,min:p,max:g,restDelta:h=.5,restSpeed:v}){const x=e[0],S={done:!1,value:x},_=U=>p!==void 0&&U<p||g!==void 0&&U>g,C=U=>p===void 0?g:g===void 0||Math.abs(p-U)<Math.abs(g-U)?p:g;let T=i*a;const A=x+T,$=m===void 0?A:m(A);$!==A&&(T=$-x);const M=U=>-T*Math.exp(-U/o),E=U=>$+M(U),B=U=>{const ae=M(U),Y=E(U);S.done=Math.abs(ae)<=h,S.value=S.done?$:Y};let j,R;const z=U=>{_(S.value)&&(j=U,R=Z5({keyframes:[S.value,C(S.value)],velocity:W5(E,U,S.value),damping:l,stiffness:u,restDelta:h,restSpeed:v}))};return z(0),{calculatedDuration:null,next:U=>{let ae=!1;return!R&&j===void 0&&(ae=!0,B(U),z(U)),j!==void 0&&U>=j?R.next(U-j):(!ae&&B(U),S)}}}const s3=qs(.42,0,1,1),l3=qs(0,0,.58,1),Q5=qs(.42,0,.58,1),c3=e=>Array.isArray(e)&&typeof e[0]!="number",u3={linear:Yr,easeIn:s3,easeInOut:Q5,easeOut:l3,circIn:Pp,circInOut:z5,circOut:h$,backIn:Hp,backInOut:E5,backOut:A5,anticipate:R5},y1=e=>{if(Fp(e)){Zx(e.length===4);const[a,i,o,l]=e;return qs(a,i,o,l)}else if(typeof e=="string")return u3[e];return e};function d3(e,a,i){const o=[],l=i||K5,u=e.length-1;for(let m=0;m<u;m++){let p=l(e[m],e[m+1]);if(a){const g=Array.isArray(a)?a[m]||Yr:a;p=mu(g,p)}o.push(p)}return o}function f3(e,a,{clamp:i=!0,ease:o,mixer:l}={}){const u=e.length;if(Zx(u===a.length),u===1)return()=>a[0];if(u===2&&a[0]===a[1])return()=>a[1];const m=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),a=[...a].reverse());const p=d3(a,o,l),g=p.length,h=v=>{if(m&&v<e[0])return a[0];let x=0;if(g>1)for(;x<e.length-2&&!(v<e[x+1]);x++);const S=jp(e[x],e[x+1],v);return p[x](S)};return i?v=>h(Ir(e[0],e[u-1],v)):h}function m3(e,a){const i=e[e.length-1];for(let o=1;o<=a;o++){const l=jp(0,a,o);e.push(fu(i,1,l))}}function p3(e){const a=[0];return m3(a,e.length-1),a}function h3(e,a){return e.map(i=>i*a)}function g3(e,a){return e.map(()=>a||Q5).splice(0,e.length-1)}function Fc({duration:e=300,keyframes:a,times:i,ease:o="easeInOut"}){const l=c3(o)?o.map(y1):y1(o),u={done:!1,value:a[0]},m=h3(i&&i.length===a.length?i:p3(a),e),p=f3(m,a,{ease:Array.isArray(l)?l:g3(a,l)});return{calculatedDuration:e,next:g=>(u.value=p(g),u.done=g>=e,u)}}const b3=e=>{const a=({timestamp:i})=>e(i);return{start:()=>wn.update(a,!0),stop:()=>Lm(a),now:()=>Lc.isProcessing?Lc.timestamp:hr.now()}},y3={decay:b1,inertia:b1,tween:Fc,keyframes:Fc,spring:Z5},x3=e=>e/100;class Wp extends I5{constructor(a){super(a),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:g}=this.options;g&&g()};const{name:i,motionValue:o,element:l,keyframes:u}=this.options,m=(l==null?void 0:l.KeyframeResolver)||Xp,p=(g,h)=>this.onKeyframesResolved(g,h);this.resolver=new m(u,p,i,o,l),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(a){const{type:i="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u,velocity:m=0}=this.options,p=Up(i)?i:y3[i]||Fc;let g,h;p!==Fc&&typeof a[0]!="number"&&(g=mu(x3,K5(a[0],a[1])),a=[0,100]);const v=p({...this.options,keyframes:a});u==="mirror"&&(h=p({...this.options,keyframes:[...a].reverse(),velocity:-m})),v.calculatedDuration===null&&(v.calculatedDuration=b5(v));const{calculatedDuration:x}=v,S=x+l,_=S*(o+1)-l;return{generator:v,mirroredGenerator:h,mapPercentToKeyframes:g,calculatedDuration:x,resolvedDuration:S,totalDuration:_}}onPostResolved(){const{autoplay:a=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!a?this.pause():this.state=this.pendingPlayState}tick(a,i=!1){const{resolved:o}=this;if(!o){const{keyframes:U}=this.options;return{done:!0,value:U[U.length-1]}}const{finalKeyframe:l,generator:u,mirroredGenerator:m,mapPercentToKeyframes:p,keyframes:g,calculatedDuration:h,totalDuration:v,resolvedDuration:x}=o;if(this.startTime===null)return u.next(0);const{delay:S,repeat:_,repeatType:C,repeatDelay:T,onUpdate:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-v/this.speed,this.startTime)),i?this.currentTime=a:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(a-this.startTime)*this.speed;const $=this.currentTime-S*(this.speed>=0?1:-1),M=this.speed>=0?$<0:$>v;this.currentTime=Math.max($,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let E=this.currentTime,B=u;if(_){const U=Math.min(this.currentTime,v)/x;let ae=Math.floor(U),Y=U%1;!Y&&U>=1&&(Y=1),Y===1&&ae--,ae=Math.min(ae,_+1),!!(ae%2)&&(C==="reverse"?(Y=1-Y,T&&(Y-=T/x)):C==="mirror"&&(B=m)),E=Ir(0,1,Y)*x}const j=M?{done:!1,value:g[0]}:B.next(E);p&&(j.value=p(j.value));let{done:R}=j;!M&&h!==null&&(R=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&R);return z&&l!==void 0&&(j.value=du(g,this.options,l)),A&&A(j.value),z&&this.finish(),j}get duration(){const{resolved:a}=this;return a?pr(a.calculatedDuration):0}get time(){return pr(this.currentTime)}set time(a){a=mr(a),this.currentTime=a,this.holdTime!==null||this.speed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.speed)}get speed(){return this.playbackSpeed}set speed(a){const i=this.playbackSpeed!==a;this.playbackSpeed=a,i&&(this.time=pr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:a=b3,onPlay:i,startTime:o}=this.options;this.driver||(this.driver=a(u=>this.tick(u))),i&&i();const l=this.driver.now();this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=l):this.startTime=o??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var a;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(a=this.currentTime)!==null&&a!==void 0?a:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:a}=this.options;a&&a()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}}const v3=new Set(["opacity","clipPath","filter","transform"]);function w3(e,a,i,{delay:o=0,duration:l=300,repeat:u=0,repeatType:m="loop",ease:p="easeInOut",times:g}={}){const h={[a]:i};g&&(h.offset=g);const v=v5(p,l);return Array.isArray(v)&&(h.easing=v),e.animate(h,{delay:o,duration:l,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:u+1,direction:m==="reverse"?"alternate":"normal"})}const S3=Tp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Hc=10,k3=2e4;function _3(e){return Up(e.type)||e.type==="spring"||!x5(e.ease)}function $3(e,a){const i=new Wp({...a,keyframes:e,repeat:0,delay:0,isGenerator:!0});let o={done:!1,value:e[0]};const l=[];let u=0;for(;!o.done&&u<k3;)o=i.sample(u),l.push(o.value),u+=Hc;return{times:void 0,keyframes:l,duration:u-Hc,ease:"linear"}}const J5={anticipate:R5,backInOut:E5,circInOut:z5};function T3(e){return e in J5}class x1 extends I5{constructor(a){super(a);const{name:i,motionValue:o,element:l,keyframes:u}=this.options;this.resolver=new Y5(u,(m,p)=>this.onKeyframesResolved(m,p),i,o,l),this.resolver.scheduleResolve()}initPlayback(a,i){let{duration:o=300,times:l,ease:u,type:m,motionValue:p,name:g,startTime:h}=this.options;if(!p.owner||!p.owner.current)return!1;if(typeof u=="string"&&qc()&&T3(u)&&(u=J5[u]),_3(this.options)){const{onComplete:x,onUpdate:S,motionValue:_,element:C,...T}=this.options,A=$3(a,T);a=A.keyframes,a.length===1&&(a[1]=a[0]),o=A.duration,l=A.times,u=A.ease,m="keyframes"}const v=w3(p.owner.current,g,a,{...this.options,duration:o,times:l,ease:u});return v.startTime=h??this.calcStartTime(),this.pendingTimeline?(a1(v,this.pendingTimeline),this.pendingTimeline=void 0):v.onfinish=()=>{const{onComplete:x}=this.options;p.set(du(a,this.options,i)),x&&x(),this.cancel(),this.resolveFinishedPromise()},{animation:v,duration:o,times:l,type:m,ease:u,keyframes:a}}get duration(){const{resolved:a}=this;if(!a)return 0;const{duration:i}=a;return pr(i)}get time(){const{resolved:a}=this;if(!a)return 0;const{animation:i}=a;return pr(i.currentTime||0)}set time(a){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.currentTime=mr(a)}get speed(){const{resolved:a}=this;if(!a)return 1;const{animation:i}=a;return i.playbackRate}set speed(a){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.playbackRate=a}get state(){const{resolved:a}=this;if(!a)return"idle";const{animation:i}=a;return i.playState}get startTime(){const{resolved:a}=this;if(!a)return null;const{animation:i}=a;return i.startTime}attachTimeline(a){if(!this._resolved)this.pendingTimeline=a;else{const{resolved:i}=this;if(!i)return Yr;const{animation:o}=i;a1(o,a)}return Yr}play(){if(this.isStopped)return;const{resolved:a}=this;if(!a)return;const{animation:i}=a;i.playState==="finished"&&this.updateFinishedPromise(),i.play()}pause(){const{resolved:a}=this;if(!a)return;const{animation:i}=a;i.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:a}=this;if(!a)return;const{animation:i,keyframes:o,duration:l,type:u,ease:m,times:p}=a;if(i.playState==="idle"||i.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:v,onComplete:x,element:S,..._}=this.options,C=new Wp({..._,keyframes:o,duration:l,type:u,ease:m,times:p,isGenerator:!0}),T=mr(this.time);h.setWithVelocity(C.sample(T-Hc).value,C.sample(T).value,Hc)}const{onStop:g}=this.options;g&&g(),this.cancel()}complete(){const{resolved:a}=this;a&&a.animation.finish()}cancel(){const{resolved:a}=this;a&&a.animation.cancel()}static supports(a){const{motionValue:i,name:o,repeatDelay:l,repeatType:u,damping:m,type:p}=a;if(!i||!i.owner||!(i.owner.current instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:h}=i.owner.getProps();return S3()&&o&&v3.has(o)&&!g&&!h&&!l&&u!=="mirror"&&m!==0&&p!=="inertia"}}const j3={type:"spring",stiffness:500,damping:25,restSpeed:10},C3=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),A3={type:"keyframes",duration:.8},E3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},R3=(e,{keyframes:a})=>a.length>2?A3:Xr.has(e)?e.startsWith("scale")?C3(a[1]):j3:E3;function z3({when:e,delay:a,delayChildren:i,staggerChildren:o,staggerDirection:l,repeat:u,repeatType:m,repeatDelay:p,from:g,elapsed:h,...v}){return!!Object.keys(v).length}const M3=(e,a,i,o={},l,u)=>m=>{const p=g5(o,e)||{},g=p.delay||o.delay||0;let{elapsed:h=0}=o;h=h-mr(g);let v={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:a.getVelocity(),...p,delay:-h,onUpdate:S=>{a.set(S),p.onUpdate&&p.onUpdate(S)},onComplete:()=>{m(),p.onComplete&&p.onComplete()},name:e,motionValue:a,element:u?void 0:l};z3(p)||(v={...v,...R3(e,v)}),v.duration&&(v.duration=mr(v.duration)),v.repeatDelay&&(v.repeatDelay=mr(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let x=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(x=!0)),x&&!u&&a.get()!==void 0){const S=du(v.keyframes,p);if(S!==void 0)return wn.update(()=>{v.onUpdate(S),v.onComplete()}),new P_([])}return!u&&x1.supports(v)?new x1(v):new Wp(v)};function D3({protectedKeys:e,needsAnimating:a},i){const o=e.hasOwnProperty(i)&&a[i]!==!0;return a[i]=!1,o}function ev(e,a,{delay:i=0,transitionOverride:o,type:l}={}){var u;let{transition:m=e.getDefaultTransition(),transitionEnd:p,...g}=a;o&&(m=o);const h=[],v=l&&e.animationState&&e.animationState.getState()[l];for(const x in g){const S=e.getValue(x,(u=e.latestValues[x])!==null&&u!==void 0?u:null),_=g[x];if(_===void 0||v&&D3(v,x))continue;const C={delay:i,...g5(m||{},x)};let T=!1;if(window.MotionHandoffAnimation){const $=d$(e);if($){const M=window.MotionHandoffAnimation($,x,wn);M!==null&&(C.startTime=M,T=!0)}}u$(e,x),S.start(M3(x,S,_,e.shouldReduceMotion&&k5.has(x)?{type:!1}:C,e,T));const A=S.animation;A&&h.push(A)}return p&&Promise.all(h).then(()=>{wn.update(()=>{p&&l$(e,p)})}),h}function Im(e,a,i={}){var o;const l=uu(e,a,i.type==="exit"?(o=e.presenceContext)===null||o===void 0?void 0:o.custom:void 0);let{transition:u=e.getDefaultTransition()||{}}=l||{};i.transitionOverride&&(u=i.transitionOverride);const m=l?()=>Promise.all(ev(e,l,i)):()=>Promise.resolve(),p=e.variantChildren&&e.variantChildren.size?(h=0)=>{const{delayChildren:v=0,staggerChildren:x,staggerDirection:S}=u;return O3(e,a,v+h,x,S,i)}:()=>Promise.resolve(),{when:g}=u;if(g){const[h,v]=g==="beforeChildren"?[m,p]:[p,m];return h().then(()=>v())}else return Promise.all([m(),p(i.delay)])}function O3(e,a,i=0,o=0,l=1,u){const m=[],p=(e.variantChildren.size-1)*o,g=l===1?(h=0)=>h*o:(h=0)=>p-h*o;return Array.from(e.variantChildren).sort(N3).forEach((h,v)=>{h.notify("AnimationStart",a),m.push(Im(h,a,{...u,delay:i+g(v)}).then(()=>h.notify("AnimationComplete",a)))}),Promise.all(m)}function N3(e,a){return e.sortNodePosition(a)}function L3(e,a,i={}){e.notify("AnimationStart",a);let o;if(Array.isArray(a)){const l=a.map(u=>Im(e,u,i));o=Promise.all(l)}else if(typeof a=="string")o=Im(e,a,i);else{const l=typeof a=="function"?uu(e,a,i.custom):a;o=Promise.all(ev(e,l,i))}return o.then(()=>{e.notify("AnimationComplete",a)})}const B3=Ep.length;function tv(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?tv(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const a={};for(let i=0;i<B3;i++){const o=Ep[i],l=e.props[o];(Ms(l)||l===!1)&&(a[o]=l)}return a}const q3=[...Ap].reverse(),V3=Ap.length;function U3(e){return a=>Promise.all(a.map(({animation:i,options:o})=>L3(e,i,o)))}function F3(e){let a=U3(e),i=v1(),o=!0;const l=g=>(h,v)=>{var x;const S=uu(e,v,g==="exit"?(x=e.presenceContext)===null||x===void 0?void 0:x.custom:void 0);if(S){const{transition:_,transitionEnd:C,...T}=S;h={...h,...T,...C}}return h};function u(g){a=g(e)}function m(g){const{props:h}=e,v=tv(e.parent)||{},x=[],S=new Set;let _={},C=1/0;for(let A=0;A<V3;A++){const $=q3[A],M=i[$],E=h[$]!==void 0?h[$]:v[$],B=Ms(E),j=$===g?M.isActive:null;j===!1&&(C=A);let R=E===v[$]&&E!==h[$]&&B;if(R&&o&&e.manuallyAnimateOnMount&&(R=!1),M.protectedKeys={..._},!M.isActive&&j===null||!E&&!M.prevProp||lu(E)||typeof E=="boolean")continue;const z=H3(M.prevProp,E);let U=z||$===g&&M.isActive&&!R&&B||A>C&&B,ae=!1;const Y=Array.isArray(E)?E:[E];let Q=Y.reduce(l($),{});j===!1&&(Q={});const{prevResolvedValues:ie={}}=M,ve={...ie,...Q},X=re=>{U=!0,S.has(re)&&(ae=!0,S.delete(re)),M.needsAnimating[re]=!0;const ue=e.getValue(re);ue&&(ue.liveStyle=!1)};for(const re in ve){const ue=Q[re],he=ie[re];if(_.hasOwnProperty(re))continue;let ke=!1;Bm(ue)&&Bm(he)?ke=!h5(ue,he):ke=ue!==he,ke?ue!=null?X(re):S.add(re):ue!==void 0&&S.has(re)?X(re):M.protectedKeys[re]=!0}M.prevProp=E,M.prevResolvedValues=Q,M.isActive&&(_={..._,...Q}),o&&e.blockInitialAnimation&&(U=!1),U&&(!(R&&z)||ae)&&x.push(...Y.map(re=>({animation:re,options:{type:$}})))}if(S.size){const A={};S.forEach($=>{const M=e.getBaseTarget($),E=e.getValue($);E&&(E.liveStyle=!0),A[$]=M??null}),x.push({animation:A})}let T=!!x.length;return o&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(T=!1),o=!1,T?a(x):Promise.resolve()}function p(g,h){var v;if(i[g].isActive===h)return Promise.resolve();(v=e.variantChildren)===null||v===void 0||v.forEach(S=>{var _;return(_=S.animationState)===null||_===void 0?void 0:_.setActive(g,h)}),i[g].isActive=h;const x=m(g);for(const S in i)i[S].protectedKeys={};return x}return{animateChanges:m,setActive:p,setAnimateFunction:u,getState:()=>i,reset:()=>{i=v1(),o=!0}}}function H3(e,a){return typeof a=="string"?a!==e:Array.isArray(a)?!h5(a,e):!1}function Lr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function v1(){return{animate:Lr(!0),whileInView:Lr(),whileHover:Lr(),whileTap:Lr(),whileDrag:Lr(),whileFocus:Lr(),exit:Lr()}}class io{constructor(a){this.isMounted=!1,this.node=a}update(){}}class P3 extends io{constructor(a){super(a),a.animationState||(a.animationState=F3(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();lu(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:i}=this.node.prevProps||{};a!==i&&this.updateAnimationControlsSubscription()}unmount(){var a;this.node.animationState.reset(),(a=this.unmountControls)===null||a===void 0||a.call(this)}}let G3=0;class Y3 extends io{constructor(){super(...arguments),this.id=G3++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===o)return;const l=this.node.animationState.setActive("exit",!a);i&&!a&&l.then(()=>i(this.id))}mount(){const{register:a}=this.node.presenceContext||{};a&&(this.unmount=a(this.id))}unmount(){}}const I3={animation:{Feature:P3},exit:{Feature:Y3}};function w1(e,a,i,o={passive:!0}){return e.addEventListener(a,i,o),()=>e.removeEventListener(a,i)}function nv(e){return{point:{x:e.pageX,y:e.pageY}}}const S1=()=>({min:0,max:0}),av=()=>({x:S1(),y:S1()});function X3({top:e,left:a,right:i,bottom:o}){return{x:{min:a,max:i},y:{min:e,max:o}}}function K3(e,a){if(!a)return e;const i=a({x:e.left,y:e.top}),o=a({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function W3(e,a){return X3(K3(e.getBoundingClientRect(),a))}function k1(e,a,i){const{props:o}=e;e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",i==="Start");const l="onHover"+i,u=o[l];u&&wn.postRender(()=>u(a,nv(a)))}class Z3 extends io{mount(){const{current:a}=this.node;a&&(this.unmount=W_(a,i=>(k1(this.node,i,"Start"),o=>k1(this.node,o,"End"))))}unmount(){}}class Q3 extends io{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=mu(w1(this.node.current,"focus",()=>this.onFocus()),w1(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function _1(e,a,i){const{props:o}=e;e.animationState&&o.whileTap&&e.animationState.setActive("whileTap",i==="Start");const l="onTap"+(i==="End"?"":i),u=o[l];u&&wn.postRender(()=>u(a,nv(a)))}class J3 extends io{mount(){const{current:a}=this.node;a&&(this.unmount=t$(a,i=>(_1(this.node,i,"Start"),(o,{success:l})=>_1(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Xm=new WeakMap,am=new WeakMap,e6=e=>{const a=Xm.get(e.target);a&&a(e)},t6=e=>{e.forEach(e6)};function n6({root:e,...a}){const i=e||document;am.has(i)||am.set(i,{});const o=am.get(i),l=JSON.stringify(a);return o[l]||(o[l]=new IntersectionObserver(t6,{root:e,...a})),o[l]}function a6(e,a,i){const o=n6(a);return Xm.set(e,i),o.observe(e),()=>{Xm.delete(e),o.unobserve(e)}}const r6={some:0,all:1};class i6 extends io{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:i,margin:o,amount:l="some",once:u}=a,m={root:i?i.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:r6[l]},p=g=>{const{isIntersecting:h}=g;if(this.isInView===h||(this.isInView=h,u&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:v,onViewportLeave:x}=this.node.getProps(),S=h?v:x;S&&S(g)};return a6(this.node.current,m,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:i}=this.node;["amount","margin","root"].some(o6(a,i))&&this.startObserver()}unmount(){}}function o6({viewport:e={}},{viewport:a={}}={}){return i=>e[i]!==a[i]}const s6={inView:{Feature:i6},tap:{Feature:J3},focus:{Feature:Q3},hover:{Feature:Z3}},Km={current:null},rv={current:!1};function l6(){if(rv.current=!0,!!$p)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),a=()=>Km.current=e.matches;e.addListener(a),a()}else Km.current=!1}const c6=[...G5,It,ro],u6=e=>c6.find(P5(e)),$1=new WeakMap;function d6(e,a,i){for(const o in a){const l=a[o],u=i[o];if(Kt(l))e.addValue(o,l);else if(Kt(u))e.addValue(o,Vc(l,{owner:e}));else if(u!==l)if(e.hasValue(o)){const m=e.getValue(o);m.liveStyle===!0?m.jump(l):m.hasAnimated||m.set(l)}else{const m=e.getStaticValue(o);e.addValue(o,Vc(m!==void 0?m:l,{owner:e}))}}for(const o in i)a[o]===void 0&&e.removeValue(o);return a}const T1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class f6{scrapeMotionValuesFromProps(a,i,o){return{}}constructor({parent:a,props:i,presenceContext:o,reducedMotionConfig:l,blockInitialAnimation:u,visualState:m},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Xp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=hr.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,wn.render(this.render,!1,!0))};const{latestValues:g,renderState:h,onUpdate:v}=m;this.onUpdate=v,this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=h,this.parent=a,this.props=i,this.presenceContext=o,this.depth=a?a.depth+1:0,this.reducedMotionConfig=l,this.options=p,this.blockInitialAnimation=!!u,this.isControllingVariants=cu(i),this.isVariantNode=e5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:x,...S}=this.scrapeMotionValuesFromProps(i,{},this);for(const _ in S){const C=S[_];g[_]!==void 0&&Kt(C)&&C.set(g[_],!1)}}mount(a){this.current=a,$1.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),rv.current||l6(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Km.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){$1.delete(this.current),this.projection&&this.projection.unmount(),Lm(this.notifyUpdate),Lm(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const i=this.features[a];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(a,i){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const o=Xr.has(a),l=i.on("change",p=>{this.latestValues[a]=p,this.props.onUpdate&&wn.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),u=i.on("renderRequest",this.scheduleRender);let m;window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,a,i)),this.valueSubscriptions.set(a,()=>{l(),u(),m&&m(),i.owner&&i.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in Zi){const i=Zi[a];if(!i)continue;const{isEnabled:o,Feature:l}=i;if(!this.features[a]&&l&&o(this.props)&&(this.features[a]=new l(this)),this.features[a]){const u=this.features[a];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):av()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,i){this.latestValues[a]=i}update(a,i){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<T1.length;o++){const l=T1[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,m=a[u];m&&(this.propEventSubscriptions[l]=this.on(l,m))}this.prevMotionValues=d6(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(a),()=>i.variantChildren.delete(a)}addValue(a,i){const o=this.values.get(a);i!==o&&(o&&this.removeValue(a),this.bindToMotionValue(a,i),this.values.set(a,i),this.latestValues[a]=i.get())}removeValue(a){this.values.delete(a);const i=this.valueSubscriptions.get(a);i&&(i(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,i){if(this.props.values&&this.props.values[a])return this.props.values[a];let o=this.values.get(a);return o===void 0&&i!==void 0&&(o=Vc(i===null?void 0:i,{owner:this}),this.addValue(a,o)),o}readValue(a,i){var o;let l=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:(o=this.getBaseTargetFromProps(this.props,a))!==null&&o!==void 0?o:this.readValueFromInstance(this.current,a,this.options);return l!=null&&(typeof l=="string"&&(F5(l)||M5(l))?l=parseFloat(l):!u6(l)&&ro.test(i)&&(l=q5(a,i)),this.setBaseTarget(a,Kt(l)?l.get():l)),Kt(l)?l.get():l}setBaseTarget(a,i){this.baseTarget[a]=i}getBaseTarget(a){var i;const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const m=Mp(this.props,o,(i=this.presenceContext)===null||i===void 0?void 0:i.custom);m&&(l=m[a])}if(o&&l!==void 0)return l;const u=this.getBaseTargetFromProps(this.props,a);return u!==void 0&&!Kt(u)?u:this.initialValues[a]!==void 0&&l===void 0?void 0:this.baseTarget[a]}on(a,i){return this.events[a]||(this.events[a]=new _5),this.events[a].add(i)}notify(a,...i){this.events[a]&&this.events[a].notify(...i)}}class iv extends f6{constructor(){super(...arguments),this.KeyframeResolver=Y5}sortInstanceNodePosition(a,i){return a.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(a,i){return a.style?a.style[i]:void 0}removeValueFromRenderState(a,{vars:i,style:o}){delete i[a],delete o[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;Kt(a)&&(this.childSubscription=a.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function m6(e){return window.getComputedStyle(e)}class p6 extends iv{constructor(){super(...arguments),this.type="html",this.renderInstance=c5}readValueFromInstance(a,i){if(Xr.has(i)){const o=Ip(i);return o&&o.default||0}else{const o=m6(a),l=(o5(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(a,{transformPagePoint:i}){return W3(a,i)}build(a,i,o){Np(a,i,o.transformTemplate)}scrapeMotionValuesFromProps(a,i,o){return Vp(a,i,o)}}class h6 extends iv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=av}getBaseTargetFromProps(a,i){return a[i]}readValueFromInstance(a,i){if(Xr.has(i)){const o=Ip(i);return o&&o.default||0}return i=u5.has(i)?i:Rp(i),a.getAttribute(i)}scrapeMotionValuesFromProps(a,i,o){return m5(a,i,o)}build(a,i,o){Lp(a,i,this.isSVGTag,o.transformTemplate)}renderInstance(a,i,o,l){d5(a,i,o,l)}mount(a){this.isSVGTag=qp(a.tagName),super.mount(a)}}const g6=(e,a)=>zp(e)?new h6(a):new p6(a,{allowProjection:e!==b.Fragment}),b6={renderer:g6,...I3,...s6};/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x6=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,i,o)=>o?o.toUpperCase():i.toLowerCase()),j1=e=>{const a=x6(e);return a.charAt(0).toUpperCase()+a.slice(1)},ov=(...e)=>e.filter((a,i,o)=>!!a&&a.trim()!==""&&o.indexOf(a)===i).join(" ").trim(),v6=e=>{for(const a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=b.forwardRef(({color:e="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,iconNode:m,...p},g)=>b.createElement("svg",{ref:g,...w6,width:a,height:a,stroke:e,strokeWidth:o?Number(i)*24/Number(a):i,className:ov("lucide",l),...!u&&!v6(p)&&{"aria-hidden":"true"},...p},[...m.map(([h,v])=>b.createElement(h,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=(e,a)=>{const i=b.forwardRef(({className:o,...l},u)=>b.createElement(S6,{ref:u,iconNode:a,className:ov(`lucide-${y6(j1(e))}`,`lucide-${e}`,o),...l}));return i.displayName=j1(e),i};/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],_c=At("arrow-right",k6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],$6=At("banknote",_6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],j6=At("calendar-days",T6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],A6=At("circle-check-big",C6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],sv=At("eye",E6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],z6=At("instagram",R6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],D6=At("link-2",M6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],N6=At("mail",O6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],B6=At("map-pin",L6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],V6=At("menu",q6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],F6=At("message-circle",U6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],P6=At("message-square",H6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Y6=At("moon",G6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],X6=At("share-2",I6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],W6=At("sun",K6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Q6=At("twitter",Z6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],eT=At("volume-2",J6);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],nT=At("volume-x",tT);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rT=At("x",aT);w.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: ${za.navigation};

  @media (max-width: 480px) {
    bottom: 1rem;
    right: 1rem;
  }
`;w(Xn.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid
    ${e=>e.$enabled?"rgba(100, 255, 100, 0.3)":"rgba(255, 100, 100, 0.3)"};
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  color: ${e=>e.$enabled?"rgba(100, 255, 100, 0.9)":"rgba(255, 100, 100, 0.9)"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    border-color: ${e=>e.$enabled?"rgba(100, 255, 100, 0.5)":"rgba(255, 100, 100, 0.5)"};
    background: rgba(0, 0, 0, 0.8);
    box-shadow: ${e=>e.$enabled?"0 6px 20px rgba(100, 255, 100, 0.2)":"0 6px 20px rgba(255, 100, 100, 0.2)"};
  }

  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;w(Xn.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: ${za.navigation-1};
`;w(Xn.div)`
  position: fixed;
  bottom: 5rem;
  right: 1.5rem;
  width: 280px;
  background: linear-gradient(135deg, #1a1a2a 0%, #0a0a15 100%);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
  z-index: ${za.navigation};
  overflow: hidden;

  @media (max-width: 480px) {
    bottom: 4rem;
    right: 1rem;
    width: calc(100vw - 2rem);
    max-width: 280px;
  }
`;w.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;w.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
`;w.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;w(Xn.button)`
  padding: 0.75rem 1rem;
  background: ${e=>e.$active?"rgba(100, 255, 100, 0.15)":"rgba(255, 255, 255, 0.05)"};
  border: 2px solid
    ${e=>e.$active?"rgba(100, 255, 100, 0.5)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  box-shadow: ${e=>e.$active?"0 0 20px rgba(100, 255, 100, 0.2)":"none"};

  &:hover {
    background: ${e=>e.$active?"rgba(100, 255, 100, 0.15)":"rgba(255, 255, 255, 0.1)"};
    border-color: ${e=>e.$active?"rgba(100, 255, 100, 0.5)":"rgba(255, 255, 255, 0.3)"};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;w.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${e=>e.$active?"rgba(100, 255, 100, 1)":"rgba(255, 255, 255, 0.9)"};
`;w.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${e=>e.$active?"rgba(100, 255, 100, 0.8)":"rgba(255, 255, 255, 0.5)"};
`;w.button`
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function iT(){return b.useCallback(a=>{Wi.play(a)},[])}function oT(e=100){const a=b.useRef({});return b.useCallback(o=>{const l=Date.now(),u=a.current[o]||0;l-u>=e&&(Wi.play(o),a.current[o]=l)},[e])}const la={luxe:{white:"#FFFFFF",cream:"#FAF9F6",lightGray:"#F5F5F5",gray:"#E0E0E0",mediumGray:"#9E9E9E",darkGray:"#616161",charcoal:"#2C2C2C",black:"#000000",gold:"#D4AF37",rose:"#C9ADA7"},lilith:{deepRed:"#8B0000",crimson:"#DC143C",burgundy:"#6B0F1A",royalPurple:"#4B0082",darkPurple:"#2E1A47",plum:"#8B008B",creatorGold:"#D4AF37",bronze:"#CD7F32",amberGold:"#FFBF00",offWhite:"#F8F6F0",warmCream:"#F5F1E8",warmGray:"#B8B0A8",charcoalGray:"#36342F",deepBlack:"#1A1816",roseGold:"#B76E79"},cyberpunk:{black:"#000000",darkBg:"#1a1a1a",electricMagenta:"#ff00ff",magentaDark:"#cc00cc",magentaLight:"#ff66ff",neonCyan:"#00ffff",cyanDark:"#00cccc",cyanLight:"#66ffff",neonGreen:"#00ff00",greenDark:"#00cc00",greenLight:"#66ff66",electricOrange:"#ffaa00",neonRed:"#ff4444",white:"#ffffff"},synthwave:{black:"#0e0e0e",darkerBg:"#1a1a2e",darkBg:"#16213e",neonPink:"#ff00c6",pinkDark:"#d30cb8",pinkLight:"#ff66d9",neonCyan:"#00f3ff",cyanDark:"#00b8cc",cyanLight:"#6df1d8",neonPurple:"#8a2be2",purpleDark:"#5c2c6d",purpleLight:"#a855f7",neonYellow:"#ffef00",neonGreen:"#00ff8e",neonRed:"#ff007b",white:"#ffffff",lightBg:"#f3fcfb",lightBgAlt:"#f6d1d9",lightBgAccent:"#8ed5ec",mutedPink:"#c9388f",mutedCyan:"#0891b2",mutedPurple:"#7c3aed",lightText:"#1b052b"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#111111"},semantic:{success:"#16a34a",successDark:"#15803d",warning:"#f59e0b",warningDark:"#d97706",error:"#ef4444",errorDark:"#dc2626",info:"#3b82f6",infoLight:"#60a5fa",infoDark:"#2563eb"}},O={fonts:{heading:{luxe:'"Playfair Display", "Georgia", "Times New Roman", serif',lilith:'"Cinzel", "Playfair Display", "Georgia", serif',cyberpunk:'"Courier New", "Consolas", monospace',synthwave:'"Orbitron", "Rajdhani", "Courier New", monospace'},body:{luxe:'"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',lilith:'"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',cyberpunk:'"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',synthwave:'"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},mono:'"Fira Code", "Courier New", monospace'},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",md:"1.125rem",lg:"1.25rem",xl:"1.5rem","2xl":"2rem"},fontSizesFluid:{xs:"clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",sm:"clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",base:"clamp(1rem, 0.95rem + 0.25vw, 1.125rem)",md:"clamp(1.125rem, 1rem + 0.625vw, 1.5rem)",lg:"clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)",xl:"clamp(2rem, 1.5rem + 2.5vw, 3.5rem)","2xl":"clamp(2.5rem, 2rem + 2.5vw, 4.5rem)","3xl":"clamp(3rem, 2.5rem + 2.5vw, 5.5rem)"},fontWeights:{light:300,regular:400,medium:500,semibold:600,bold:700},lineHeights:{tight:1.2,base:1.5,relaxed:1.75,loose:2}},ce={1:"0.25rem",2:"0.5rem",4:"1rem",6:"1.5rem",8:"2rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem"},me={none:"0",xs:"0.125rem",sm:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem",full:"9999px"},ye={light:{none:"none",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},dark:{none:"none",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.5)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.5)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.5)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.5)"},neon:{magenta:"0 0 10px #ff00ff",cyan:"0 0 10px #00ffff",green:"0 0 10px #00ff00",large:"0 0 15px"},mystical:{crimson:"0 0 20px rgba(220, 20, 60, 0.4)",purple:"0 0 20px rgba(75, 0, 130, 0.4)",gold:"0 0 15px rgba(212, 175, 55, 0.3)"}},Z={timing:{fast:"150ms",base:"300ms",slow:"500ms",slower:"700ms"},easing:{linear:"linear",ease:"ease",easeIn:"cubic-bezier(0.4, 0, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.2, 1)",easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)"},luxe:{fast:"150ms cubic-bezier(0.4, 0, 0.2, 1)",base:"300ms cubic-bezier(0.4, 0, 0.2, 1)",slow:"500ms cubic-bezier(0.4, 0, 0.2, 1)"},lilith:{fast:"200ms cubic-bezier(0.4, 0, 0.2, 1)",base:"350ms cubic-bezier(0.4, 0, 0.2, 1)",slow:"550ms cubic-bezier(0.4, 0, 0.2, 1)"},cyberpunk:{fast:"all 0.2s ease",base:"all 0.3s ease",slow:"all 0.5s ease"},synthwave:{fast:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",base:"all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",slow:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"}},oe={base:0,dropdown:1e3,sticky:1100,fixed:1200,modal:1400,popover:1500,toast:1600,tooltip:1700},ge={xs:"0px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},ca={0:0,5:.05,10:.1,20:.2,25:.25,30:.3,40:.4,50:.5,60:.6,70:.7,75:.75,80:.8,90:.9,95:.95,100:1},sr={colors:{primary:{},gray:{},success:{},error:{},warning:{},info:{},white:"#ffffff",black:"#000000"}};sr.colors.primary,sr.colors.gray,sr.colors.success,sr.colors.error,sr.colors.warning,sr.colors.info,sr.colors.white,sr.colors.black;function Xe(e,a,i){var u,m,p,g,h,v,x,S,_,C,T;const o=typeof e=="string"?{main:e,dark:a,light:i}:e;return{main:o.main,dark:o.dark,light:o.light,500:((u=o.numeric)==null?void 0:u[500])??o.main,50:(m=o.numeric)==null?void 0:m[50],100:(p=o.numeric)==null?void 0:p[100],200:(g=o.numeric)==null?void 0:g[200],300:((h=o.numeric)==null?void 0:h[300])??o.light,400:(v=o.numeric)==null?void 0:v[400],600:(x=o.numeric)==null?void 0:x[600],700:((S=o.numeric)==null?void 0:S[700])??o.dark,800:(_=o.numeric)==null?void 0:_[800],900:(C=o.numeric)==null?void 0:C[900],950:(T=o.numeric)==null?void 0:T[950],toString:()=>o.main}}function Me(e,a,i,o){var m,p,g,h,v,x,S,_,C,T,A;const l=typeof e=="string"?{main:e,background:a,border:i,text:o}:e;return{main:l.main,background:l.background,border:l.border,text:l.text,500:((m=l.numeric)==null?void 0:m[500])??l.main,50:(p=l.numeric)==null?void 0:p[50],100:(g=l.numeric)==null?void 0:g[100],200:(h=l.numeric)==null?void 0:h[200],300:(v=l.numeric)==null?void 0:v[300],400:(x=l.numeric)==null?void 0:x[400],600:(S=l.numeric)==null?void 0:S[600],700:(_=l.numeric)==null?void 0:_[700],800:(C=l.numeric)==null?void 0:C[800],900:(T=l.numeric)==null?void 0:T[900],950:(A=l.numeric)==null?void 0:A[950],toString:()=>l.main}}function Kn(e,a){return{default:e,hover:a,toString:()=>e}}const{cyberpunk:we}=la,{gray:lr}=la,sT={colors:{primary:Xe({main:we.electricMagenta,dark:we.magentaDark,light:we.magentaLight,numeric:{50:"#fff0f7",100:"#ffe0ef",200:"#ffc0df",300:we.magentaLight,400:"#ff3399",500:we.electricMagenta,600:"#e0005f",700:we.magentaDark,800:"#990044",900:"#660033",950:"#330019"}}),secondary:Xe({main:we.neonCyan,dark:we.cyanDark,light:we.cyanLight,numeric:{50:"#f0ffff",100:"#e0ffff",200:"#c0ffff",300:we.cyanLight,400:"#33f7ff",500:we.neonCyan,600:"#00d4dd",700:we.cyanDark,800:"#008899",900:"#005566",950:"#002233"}}),accent:Xe({main:we.neonGreen,dark:we.greenDark,light:we.greenLight,numeric:{50:"#f0fff0",100:"#e0ffe0",200:"#c0ffc0",300:we.greenLight,400:"#50e050",500:we.neonGreen,600:"#28b428",700:we.greenDark,800:"#147014",900:"#0a3a0a",950:"#051a05"}}),accentColors:{magenta:we.electricMagenta,cyan:we.neonCyan,gold:"#FFD700",green:we.neonGreen},background:{primary:we.black,secondary:we.darkBg,tertiary:lr[800]},surface:we.darkBg,text:{primary:we.white,secondary:lr[400],muted:lr[500],tertiary:lr[400]},border:Kn(lr[700],lr[600]),success:Me({main:"#1B9E3E",background:`${we.neonGreen}15`,border:`${we.neonGreen}40`,text:we.neonGreen,numeric:{50:"#f0fff0",100:"#e0ffe0",200:"#c0ffc0",300:we.greenLight,400:"#50e050",500:we.neonGreen,600:"#28b428",700:we.greenDark,800:"#147014",900:"#0a3a0a",950:"#051a05"}}),warning:Me({main:we.electricOrange,background:`${we.electricOrange}15`,border:`${we.electricOrange}40`,text:we.electricOrange,numeric:{50:"#fff7f0",100:"#ffefe0",200:"#ffdfc0",300:"#ffcfa0",400:"#ffbf80",500:we.electricOrange,600:"#e08000",700:"#b36600",800:"#864d00",900:"#5a3300",950:"#2d1a00"}}),error:Me({main:we.neonRed,background:`${we.neonRed}15`,border:`${we.neonRed}40`,text:we.neonRed,numeric:{50:"#fff0f0",100:"#ffe0e0",200:"#ffc0c0",300:"#ff8080",400:"#ff4040",500:we.neonRed,600:"#e00000",700:"#b30000",800:"#860000",900:"#5a0000",950:"#2d0000"}}),info:Me({main:we.neonCyan,background:`${we.neonCyan}15`,border:`${we.neonCyan}40`,text:we.neonCyan,numeric:{50:"#f0ffff",100:"#e0ffff",200:"#c0ffff",300:we.cyanLight,400:"#33f7ff",500:we.neonCyan,600:"#00d4dd",700:we.cyanDark,800:"#008899",900:"#005566",950:"#002233"}}),hover:{primary:we.magentaLight,secondary:we.cyanLight,surface:we.darkBg},active:{primary:we.magentaDark,secondary:we.cyanDark},disabled:{background:lr[800],text:lr[500]}},spacing:{xxxs:"1px",xxs:"2px",xs:ce[1],sm:ce[2],md:ce[4],lg:ce[6],xl:ce[8],xxl:ce[12],xxxl:ce[16],xxxxl:ce[20],xxxxxl:ce[24]},typography:{fontFamily:{heading:O.fonts.heading.cyberpunk,body:O.fonts.body.cyberpunk,mono:O.fonts.mono},fontSize:{xxs:"10px",xs:O.fontSizes.xs,sm:O.fontSizes.sm,md:O.fontSizes.sm,base:O.fontSizes.base,lg:O.fontSizes.md,xl:O.fontSizes.lg,"2xl":O.fontSizes.xl,"3xl":O.fontSizes["2xl"],"4xl":"36px","5xl":"48px"},fontWeight:{light:O.fontWeights.light,normal:O.fontWeights.regular,medium:O.fontWeights.medium,semibold:O.fontWeights.semibold,bold:O.fontWeights.bold},lineHeight:{tight:O.lineHeights.tight,normal:O.lineHeights.base,relaxed:O.lineHeights.relaxed,loose:O.lineHeights.loose}},letterSpacing:{tight:"-0.025em",normal:"0",wide:"0.025em"},borderWidth:{thin:"1px",medium:"2px",thick:"3px"},shadows:{none:ye.dark.none,sm:ye.dark.sm,md:ye.dark.md,lg:ye.dark.lg,xl:ye.dark.xl},borderRadius:{none:me.none,xs:me.xs,sm:me.sm,md:me.md,lg:me.lg,xl:me.xl,full:me.full},transitions:{fast:Z.cyberpunk.fast,normal:Z.cyberpunk.base,slow:Z.cyberpunk.slow},duration:{instant:"0ms",fast:Z.timing.fast,normal:Z.timing.base,slow:Z.timing.slow,slower:Z.timing.slower},easing:{linear:Z.easing.linear,ease:Z.easing.ease,easeIn:Z.easing.easeIn,easeOut:Z.easing.easeOut,easeInOut:Z.easing.easeInOut},zIndex:{base:oe.base,dropdown:oe.dropdown,sticky:oe.sticky,fixed:oe.fixed,modal:oe.modal,popover:oe.popover,tooltip:oe.tooltip,toast:oe.toast},breakpoints:{xs:ge.xs,sm:ge.sm,md:ge.md,lg:ge.lg,xl:ge.xl,"2xl":ge["2xl"]},opacity:ca,extensions:{cyberpunk:{neonGlow:{magenta:ye.neon.magenta,cyan:ye.neon.cyan,green:ye.neon.green,large:ye.neon.large},scanlines:"repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)",glitchEffect:"drop-shadow(2px 0 0 #ff00ff) drop-shadow(-2px 0 0 #00ffff)"}}},{luxe:dt,semantic:Ht}=la,lT={colors:{primary:Xe(dt.charcoal,dt.black,dt.darkGray),secondary:Xe("#A88C24","#8A7318",dt.gold),accent:Xe(dt.rose,"#A89089","#D9C9C3"),accentColors:{magenta:dt.rose,cyan:"#87CEEB",gold:dt.gold,green:"#8FBC8F"},background:{primary:dt.white,secondary:dt.lightGray,tertiary:dt.cream},surface:dt.lightGray,text:{primary:dt.charcoal,secondary:dt.darkGray,muted:dt.mediumGray,tertiary:dt.darkGray},border:Kn(dt.mediumGray,dt.darkGray),success:Me(Ht.success,`${Ht.success}15`,`${Ht.success}40`,Ht.successDark),warning:Me(Ht.warning,`${Ht.warning}15`,`${Ht.warning}40`,Ht.warningDark),error:Me(Ht.error,`${Ht.error}15`,`${Ht.error}40`,Ht.errorDark),info:Me(Ht.info,`${Ht.info}15`,`${Ht.info}40`,Ht.infoDark),hover:{primary:"rgba(44, 44, 44, 0.12)",secondary:"rgba(212, 175, 55, 0.12)",surface:"rgba(44, 44, 44, 0.04)"},active:{primary:"rgba(44, 44, 44, 0.08)",secondary:"rgba(212, 175, 55, 0.20)"},disabled:{background:dt.gray,text:dt.darkGray}},spacing:{xs:ce[1],sm:ce[2],md:ce[4],lg:ce[6],xl:ce[8],xxl:ce[12]},typography:{fontFamily:{heading:O.fonts.heading.luxe,body:O.fonts.body.luxe,mono:O.fonts.mono},fontSize:{xs:O.fontSizesFluid.xs,sm:O.fontSizesFluid.sm,md:O.fontSizesFluid.sm,base:O.fontSizesFluid.base,lg:O.fontSizesFluid.md,xl:O.fontSizesFluid.lg,"2xl":O.fontSizesFluid.xl,"3xl":O.fontSizesFluid["2xl"],"4xl":"36px","5xl":"48px"},fontWeight:{light:O.fontWeights.light,normal:O.fontWeights.regular,medium:O.fontWeights.medium,semibold:O.fontWeights.semibold,bold:O.fontWeights.bold},lineHeight:{tight:O.lineHeights.tight,normal:O.lineHeights.base,relaxed:O.lineHeights.relaxed,loose:O.lineHeights.loose},fontSizeFluid:{xs:O.fontSizesFluid.xs,sm:O.fontSizesFluid.sm,base:O.fontSizesFluid.base,md:O.fontSizesFluid.md,lg:O.fontSizesFluid.lg,xl:O.fontSizesFluid.xl,"2xl":O.fontSizesFluid["2xl"],"3xl":O.fontSizesFluid["3xl"]}},shadows:{none:ye.light.none,sm:ye.light.sm,md:ye.light.md,lg:ye.light.lg,xl:ye.light.xl},borderRadius:{none:me.none,sm:me.xs,md:me.md,lg:me.lg,full:me.full},transitions:{fast:Z.luxe.fast,normal:Z.luxe.base,slow:Z.luxe.slow},duration:{instant:"0ms",fast:Z.timing.fast,normal:Z.timing.base,slow:Z.timing.slow,slower:Z.timing.slower},easing:{linear:Z.easing.linear,ease:Z.easing.ease,easeIn:Z.easing.easeIn,easeOut:Z.easing.easeOut,easeInOut:Z.easing.easeInOut},zIndex:{base:oe.base,dropdown:oe.dropdown,sticky:oe.sticky,fixed:oe.fixed,modal:oe.modal,popover:oe.popover,tooltip:oe.tooltip,toast:oe.toast},breakpoints:{xs:ge.xs,sm:ge.sm,md:ge.md,lg:ge.lg,xl:ge.xl,"2xl":ge["2xl"]},opacity:ca,extensions:{luxe:{goldShimmer:`linear-gradient(135deg, ${dt.gold} 0%, ${dt.gold} 50%, ${dt.gold} 100%)`,elegantShadow:"0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)",subtleGradient:`linear-gradient(to bottom, ${dt.white}, ${dt.cream})`}}},{lilith:He,semantic:Pt}=la,cT={colors:{primary:Xe(He.crimson,He.burgundy,He.roseGold),secondary:Xe("#A88C24",He.bronze,He.creatorGold),accent:Xe(He.royalPurple,He.darkPurple,He.plum),accentColors:{magenta:He.crimson,cyan:"#9D4EDD",gold:He.creatorGold,green:"#6A994E"},background:{primary:He.offWhite,secondary:He.warmCream,tertiary:"#E8E4DB"},surface:He.warmCream,text:{primary:He.deepBlack,secondary:He.charcoalGray,muted:He.warmGray,tertiary:"#706A63"},border:Kn("#ADA59D",He.charcoalGray),success:Me(Pt.success,`${Pt.success}15`,`${Pt.success}40`,Pt.successDark),warning:Me(Pt.warning,`${Pt.warning}15`,`${Pt.warning}40`,Pt.warningDark),error:Me(Pt.error,`${Pt.error}15`,`${Pt.error}40`,Pt.errorDark),info:Me(Pt.info,`${Pt.info}15`,`${Pt.info}40`,Pt.infoDark),hover:{primary:"rgba(220, 20, 60, 0.12)",secondary:"rgba(212, 175, 55, 0.15)",surface:"rgba(54, 52, 47, 0.04)"},active:{primary:"rgba(220, 20, 60, 0.20)",secondary:"rgba(212, 175, 55, 0.25)"},disabled:{background:He.warmGray,text:He.charcoalGray}},spacing:{xs:ce[1],sm:ce[2],md:ce[4],lg:ce[6],xl:ce[8],xxl:ce[12]},typography:{fontFamily:{heading:O.fonts.heading.lilith,body:O.fonts.body.lilith,mono:O.fonts.mono},fontSize:{xs:O.fontSizesFluid.xs,sm:O.fontSizesFluid.sm,md:O.fontSizesFluid.sm,base:O.fontSizesFluid.base,lg:O.fontSizesFluid.md,xl:O.fontSizesFluid.lg,"2xl":O.fontSizesFluid.xl,"3xl":O.fontSizesFluid["2xl"],"4xl":"36px","5xl":"48px"},fontWeight:{light:O.fontWeights.light,normal:O.fontWeights.regular,medium:O.fontWeights.medium,semibold:O.fontWeights.semibold,bold:O.fontWeights.bold},lineHeight:{tight:O.lineHeights.tight,normal:O.lineHeights.base,relaxed:O.lineHeights.relaxed,loose:O.lineHeights.loose},fontSizeFluid:{xs:O.fontSizesFluid.xs,sm:O.fontSizesFluid.sm,base:O.fontSizesFluid.base,md:O.fontSizesFluid.md,lg:O.fontSizesFluid.lg,xl:O.fontSizesFluid.xl,"2xl":O.fontSizesFluid["2xl"],"3xl":O.fontSizesFluid["3xl"]}},shadows:{none:ye.light.none,sm:ye.light.sm,md:ye.light.md,lg:ye.light.lg,xl:ye.light.xl},borderRadius:{none:me.none,sm:me.xs,md:me.md,lg:me.lg,full:me.full},transitions:{fast:Z.lilith.fast,normal:Z.lilith.base,slow:Z.lilith.slow},duration:{instant:"0ms",fast:Z.timing.fast,normal:Z.timing.base,slow:Z.timing.slow,slower:Z.timing.slower},easing:{linear:Z.easing.linear,ease:Z.easing.ease,easeIn:Z.easing.easeIn,easeOut:Z.easing.easeOut,easeInOut:Z.easing.easeInOut},zIndex:{base:oe.base,dropdown:oe.dropdown,sticky:oe.sticky,fixed:oe.fixed,modal:oe.modal,popover:oe.popover,tooltip:oe.tooltip,toast:oe.toast},breakpoints:{xs:ge.xs,sm:ge.sm,md:ge.md,lg:ge.lg,xl:ge.xl,"2xl":ge["2xl"]},opacity:ca,extensions:{lilith:{crimsonGradient:`linear-gradient(135deg, ${He.burgundy} 0%, ${He.crimson} 50%, ${He.deepRed} 100%)`,purpleGradient:`linear-gradient(135deg, ${He.darkPurple} 0%, ${He.royalPurple} 50%, ${He.plum} 100%)`,goldShimmer:`linear-gradient(135deg, ${He.bronze} 0%, ${He.creatorGold} 50%, ${He.amberGold} 100%)`,crimsonGlow:ye.mystical.crimson,purpleGlow:ye.mystical.purple,goldGlow:ye.mystical.gold,warmBackground:`linear-gradient(to bottom, ${He.offWhite}, ${He.warmCream})`,darkVariant:{background:He.deepBlack,surface:He.charcoalGray,text:He.offWhite}}}},{synthwave:de,gray:os}=la,uT={colors:{primary:Xe({main:de.neonPink,dark:de.pinkDark,light:de.pinkLight,numeric:{50:"#fff0f8",100:"#ffe0f0",200:"#ffc0e0",300:de.pinkLight,400:"#ff33cc",500:de.neonPink,600:"#e000b0",700:de.pinkDark,800:"#990080",900:"#660055",950:"#33002a"}}),secondary:Xe({main:de.neonCyan,dark:de.cyanDark,light:de.cyanLight,numeric:{50:"#f0ffff",100:"#e0ffff",200:"#c0ffff",300:de.cyanLight,400:"#33f0ff",500:de.neonCyan,600:"#00d0e0",700:de.cyanDark,800:"#008099",900:"#005066",950:"#002833"}}),accent:Xe({main:de.neonPurple,dark:de.purpleDark,light:de.purpleLight,numeric:{50:"#f5f0ff",100:"#ebe0ff",200:"#d6c0ff",300:de.purpleLight,400:"#9945ff",500:de.neonPurple,600:"#7020c0",700:de.purpleDark,800:"#401a60",900:"#200d30",950:"#100618"}}),accentColors:{magenta:de.neonPink,cyan:de.neonCyan,gold:de.neonYellow,green:de.neonGreen},background:{primary:de.black,secondary:de.darkerBg,tertiary:de.darkBg},surface:de.darkerBg,text:{primary:de.white,secondary:os[400],muted:os[500],tertiary:os[400]},border:Kn(de.neonPurple,de.purpleLight),success:Me({main:"#059669",background:`${de.neonGreen}15`,border:`${de.neonGreen}40`,text:de.neonGreen,numeric:{50:"#f0fff5",100:"#e0ffea",200:"#c0ffd5",300:"#80ffb0",400:"#40ff90",500:de.neonGreen,600:"#00cc70",700:"#009955",800:"#006640",900:"#003320",950:"#001a10"}}),warning:Me({main:de.neonYellow,background:`${de.neonYellow}15`,border:`${de.neonYellow}40`,text:de.neonYellow,numeric:{50:"#fffef0",100:"#fffce0",200:"#fff9c0",300:"#fff580",400:"#fff240",500:de.neonYellow,600:"#ccbf00",700:"#998f00",800:"#666000",900:"#333000",950:"#1a1800"}}),error:Me({main:de.neonRed,background:`${de.neonRed}15`,border:`${de.neonRed}40`,text:de.neonRed,numeric:{50:"#fff0f5",100:"#ffe0ea",200:"#ffc0d5",300:"#ff80b0",400:"#ff4090",500:de.neonRed,600:"#cc0062",700:"#99004a",800:"#660031",900:"#330019",950:"#1a000c"}}),info:Me({main:de.neonCyan,background:`${de.neonCyan}15`,border:`${de.neonCyan}40`,text:de.neonCyan,numeric:{50:"#f0ffff",100:"#e0ffff",200:"#c0ffff",300:de.cyanLight,400:"#33f0ff",500:de.neonCyan,600:"#00d0e0",700:de.cyanDark,800:"#008099",900:"#005066",950:"#002833"}}),hover:{primary:de.pinkLight,secondary:de.cyanLight,surface:de.darkBg},active:{primary:de.pinkDark,secondary:de.cyanDark},disabled:{background:os[800],text:os[500]}},spacing:{xxxs:"1px",xxs:"2px",xs:ce[1],sm:ce[2],md:ce[4],lg:ce[6],xl:ce[8],xxl:ce[12],xxxl:ce[16],xxxxl:ce[20],xxxxxl:ce[24]},typography:{fontFamily:{heading:O.fonts.heading.synthwave,body:O.fonts.body.synthwave,mono:O.fonts.mono},fontSize:{xxs:"10px",xs:O.fontSizes.xs,sm:O.fontSizes.sm,md:O.fontSizes.sm,base:O.fontSizes.base,lg:O.fontSizes.md,xl:O.fontSizes.lg,"2xl":O.fontSizes.xl,"3xl":O.fontSizes["2xl"],"4xl":"36px","5xl":"48px"},fontWeight:{light:O.fontWeights.light,normal:O.fontWeights.regular,medium:O.fontWeights.medium,semibold:O.fontWeights.semibold,bold:O.fontWeights.bold},lineHeight:{tight:O.lineHeights.tight,normal:O.lineHeights.base,relaxed:O.lineHeights.relaxed,loose:O.lineHeights.loose}},letterSpacing:{tight:"-0.025em",normal:"0",wide:"0.05em"},borderWidth:{thin:"1px",medium:"2px",thick:"3px"},shadows:{none:ye.dark.none,sm:ye.dark.sm,md:ye.dark.md,lg:ye.dark.lg,xl:ye.dark.xl},borderRadius:{none:me.none,xs:me.xs,sm:me.sm,md:me.md,lg:me.lg,xl:me.xl,full:me.full},transitions:{fast:Z.synthwave.fast,normal:Z.synthwave.base,slow:Z.synthwave.slow},duration:{instant:"0ms",fast:Z.timing.fast,normal:Z.timing.base,slow:Z.timing.slow,slower:Z.timing.slower},easing:{linear:Z.easing.linear,ease:Z.easing.ease,easeIn:Z.easing.easeIn,easeOut:Z.easing.easeOut,easeInOut:Z.easing.easeInOut},zIndex:{base:oe.base,dropdown:oe.dropdown,sticky:oe.sticky,fixed:oe.fixed,modal:oe.modal,popover:oe.popover,tooltip:oe.tooltip,toast:oe.toast},breakpoints:{xs:ge.xs,sm:ge.sm,md:ge.md,lg:ge.lg,xl:ge.xl,"2xl":ge["2xl"]},opacity:ca,extensions:{synthwave:{neonGlow:{magenta:`0 0 15px ${de.neonPink}, 0 0 30px ${de.neonPink}80`,cyan:`0 0 15px ${de.neonCyan}, 0 0 30px ${de.neonCyan}80`,purple:`0 0 15px ${de.neonPurple}, 0 0 30px ${de.neonPurple}80`,yellow:`0 0 15px ${de.neonYellow}, 0 0 30px ${de.neonYellow}80`},sunsetGradient:`linear-gradient(180deg, ${de.darkerBg} 0%, ${de.darkBg} 30%, #0f3460 50%, ${de.neonPink}40 80%, ${de.neonRed}40 100%)`,gridPattern:`
        linear-gradient(transparent 0%, transparent 94%, ${de.neonPink}20 94%, ${de.neonPink}20 100%),
        linear-gradient(90deg, transparent 0%, transparent 94%, ${de.neonPink}20 94%, ${de.neonPink}20 100%)
      `.trim(),chromaShift:`drop-shadow(2px 0 0 ${de.neonPink}) drop-shadow(-2px 0 0 ${de.neonCyan})`,horizonLine:`linear-gradient(90deg, transparent 0%, ${de.neonPink} 50%, transparent 100%)`,sunGradient:`linear-gradient(180deg, ${de.neonPink} 0%, #ff6600 50%, ${de.neonYellow} 100%)`}}},{synthwave:Ke,gray:ss}=la,dT={colors:{primary:Xe({main:Ke.mutedPink,dark:"#a12870",light:"#e991c0",numeric:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:Ke.mutedPink,600:"#a12870",700:"#831d5a",800:"#6b1548",900:"#500f36",950:"#2d0a1e"}}),secondary:Xe({main:Ke.mutedCyan,dark:"#0e7490",light:"#67e8f9",numeric:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:Ke.mutedCyan,600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344",950:"#042f2e"}}),accent:Xe({main:Ke.mutedPurple,dark:"#5b21b6",light:"#a78bfa",numeric:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:Ke.mutedPurple,600:"#6d28d9",700:"#5b21b6",800:"#4c1d95",900:"#3b0d74",950:"#1e0a3c"}}),accentColors:{magenta:Ke.mutedPink,cyan:Ke.mutedCyan,gold:"#d4a000",green:"#059669"},background:{primary:Ke.lightBg,secondary:Ke.lightBgAlt,tertiary:Ke.lightBgAccent},surface:"#ffffff",text:{primary:Ke.lightText,secondary:"#4a2c4a",muted:"#6b5c6b",tertiary:ss[500]},border:Kn(ss[400],ss[500]),success:Me({main:"#059669",background:"#05966915",border:"#05966940",text:"#047857",numeric:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"}}),warning:Me({main:"#d97706",background:"#d9770615",border:"#d9770640",text:"#b45309",numeric:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"}}),error:Me({main:"#dc2626",background:"#dc262615",border:"#dc262640",text:"#b91c1c",numeric:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"}}),info:Me({main:Ke.mutedCyan,background:`${Ke.mutedCyan}15`,border:`${Ke.mutedCyan}40`,text:"#0e7490",numeric:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:Ke.mutedCyan,600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344",950:"#042f2e"}}),hover:{primary:"#e991c0",secondary:"#67e8f9",surface:"#fce4ec"},active:{primary:"#a12870",secondary:"#0e7490"},disabled:{background:ss[200],text:ss[400]}},spacing:{xxxs:"1px",xxs:"2px",xs:ce[1],sm:ce[2],md:ce[4],lg:ce[6],xl:ce[8],xxl:ce[12],xxxl:ce[16],xxxxl:ce[20],xxxxxl:ce[24]},typography:{fontFamily:{heading:O.fonts.heading.synthwave,body:O.fonts.body.synthwave,mono:O.fonts.mono},fontSize:{xxs:"10px",xs:O.fontSizes.xs,sm:O.fontSizes.sm,md:O.fontSizes.sm,base:O.fontSizes.base,lg:O.fontSizes.md,xl:O.fontSizes.lg,"2xl":O.fontSizes.xl,"3xl":O.fontSizes["2xl"],"4xl":"36px","5xl":"48px"},fontWeight:{light:O.fontWeights.light,normal:O.fontWeights.regular,medium:O.fontWeights.medium,semibold:O.fontWeights.semibold,bold:O.fontWeights.bold},lineHeight:{tight:O.lineHeights.tight,normal:O.lineHeights.base,relaxed:O.lineHeights.relaxed,loose:O.lineHeights.loose}},letterSpacing:{tight:"-0.025em",normal:"0",wide:"0.05em"},borderWidth:{thin:"1px",medium:"2px",thick:"3px"},shadows:{none:ye.light.none,sm:ye.light.sm,md:ye.light.md,lg:ye.light.lg,xl:ye.light.xl},borderRadius:{none:me.none,xs:me.xs,sm:me.sm,md:me.md,lg:me.lg,xl:me.xl,full:me.full},transitions:{fast:Z.luxe.fast,normal:Z.luxe.base,slow:Z.luxe.slow},duration:{instant:"0ms",fast:Z.timing.fast,normal:Z.timing.base,slow:Z.timing.slow,slower:Z.timing.slower},easing:{linear:Z.easing.linear,ease:Z.easing.ease,easeIn:Z.easing.easeIn,easeOut:Z.easing.easeOut,easeInOut:Z.easing.easeInOut},zIndex:{base:oe.base,dropdown:oe.dropdown,sticky:oe.sticky,fixed:oe.fixed,modal:oe.modal,popover:oe.popover,tooltip:oe.tooltip,toast:oe.toast},breakpoints:{xs:ge.xs,sm:ge.sm,md:ge.md,lg:ge.lg,xl:ge.xl,"2xl":ge["2xl"]},opacity:ca,extensions:{synthwave:{neonGlow:{magenta:`0 0 10px ${Ke.mutedPink}60`,cyan:`0 0 10px ${Ke.mutedCyan}60`,purple:`0 0 10px ${Ke.mutedPurple}60`,yellow:"0 0 10px #d4a00060"},sunsetGradient:`linear-gradient(180deg, ${Ke.lightBg} 0%, ${Ke.lightBgAlt} 50%, ${Ke.lightBgAccent} 100%)`,gridPattern:`
        linear-gradient(transparent 0%, transparent 94%, ${Ke.mutedPink}15 94%, ${Ke.mutedPink}15 100%),
        linear-gradient(90deg, transparent 0%, transparent 94%, ${Ke.mutedPink}15 94%, ${Ke.mutedPink}15 100%)
      `.trim(),chromaShift:`drop-shadow(1px 0 0 ${Ke.mutedPink}40) drop-shadow(-1px 0 0 ${Ke.mutedCyan}40)`,horizonLine:`linear-gradient(90deg, transparent 0%, ${Ke.mutedPink}60 50%, transparent 100%)`,sunGradient:`linear-gradient(180deg, ${Ke.mutedPink} 0%, #ff9966 50%, #ffcc66 100%)`}}},{gray:gt,semantic:Tt}=la,fT={colors:{primary:Xe(gt[900],gt[950],gt[800]),secondary:Xe(gt[600],gt[700],gt[500]),accent:Xe(Tt.info,Tt.infoDark,Tt.infoLight),accentColors:{magenta:"#FF006E",cyan:"#00F5FF",gold:"#FFD700",green:"#32CD32"},background:{primary:"#FFFFFF",secondary:gt[50],tertiary:gt[100]},surface:gt[50],text:{primary:gt[900],secondary:gt[600],muted:gt[500],tertiary:gt[500]},border:Kn(gt[400],gt[500]),success:Me(Tt.success,`${Tt.success}15`,`${Tt.success}40`,Tt.successDark),warning:Me(Tt.warning,`${Tt.warning}15`,`${Tt.warning}40`,Tt.warningDark),error:Me(Tt.error,`${Tt.error}15`,`${Tt.error}40`,Tt.errorDark),info:Me(Tt.info,`${Tt.info}15`,`${Tt.info}40`,Tt.infoDark),hover:{primary:gt[800],secondary:gt[500],surface:gt[100]},active:{primary:gt[700],secondary:gt[400]},disabled:{background:gt[100],text:gt[400]}},spacing:{xxxs:"1px",xxs:"2px",xs:ce[1],sm:ce[2],md:ce[4],lg:ce[6],xl:ce[8],xxl:ce[12],xxxl:ce[16],xxxxl:ce[20],xxxxxl:ce[24]},typography:{fontFamily:{heading:O.fonts.body.luxe,body:O.fonts.body.luxe,mono:O.fonts.mono},fontSize:{xxs:"10px",xs:O.fontSizes.xs,sm:O.fontSizes.sm,md:O.fontSizes.sm,base:O.fontSizes.base,lg:O.fontSizes.md,xl:O.fontSizes.lg,"2xl":O.fontSizes.xl,"3xl":O.fontSizes["2xl"],"4xl":"36px","5xl":"48px"},fontWeight:{light:O.fontWeights.light,normal:O.fontWeights.regular,medium:O.fontWeights.medium,semibold:O.fontWeights.semibold,bold:O.fontWeights.bold},lineHeight:{tight:O.lineHeights.tight,normal:O.lineHeights.base,relaxed:O.lineHeights.relaxed,loose:O.lineHeights.loose}},letterSpacing:{tight:"-0.025em",normal:"0",wide:"0.025em"},borderWidth:{thin:"1px",medium:"2px",thick:"3px"},shadows:{none:ye.light.none,sm:ye.light.sm,md:ye.light.md,lg:ye.light.lg,xl:ye.light.xl},borderRadius:{none:me.none,xs:me.xs,sm:me.sm,md:me.md,lg:me.lg,xl:me.xl,full:me.full},transitions:{fast:Z.luxe.fast,normal:Z.luxe.base,slow:Z.luxe.slow},duration:{instant:"0ms",fast:Z.timing.fast,normal:Z.timing.base,slow:Z.timing.slow,slower:Z.timing.slower},easing:{linear:Z.easing.linear,ease:Z.easing.ease,easeIn:Z.easing.easeIn,easeOut:Z.easing.easeOut,easeInOut:Z.easing.easeInOut},zIndex:{base:oe.base,dropdown:oe.dropdown,sticky:oe.sticky,fixed:oe.fixed,modal:oe.modal,popover:oe.popover,tooltip:oe.tooltip,toast:oe.toast},breakpoints:{xs:ge.xs,sm:ge.sm,md:ge.md,lg:ge.lg,xl:ge.xl,"2xl":ge["2xl"]},opacity:ca,extensions:{}},{gray:On,semantic:Gt}=la,mT={colors:{primary:Xe("#1a365d","#0d1a2d","#2c5282"),secondary:Xe("#2b6cb0","#1e4e7e","#4299e1"),accent:Xe("#3182ce","#2563eb","#60a5fa"),accentColors:{magenta:"#9333EA",cyan:"#3182ce",gold:"#F59E0B",green:"#10B981"},background:{primary:"#FFFFFF",secondary:On[50],tertiary:On[100]},surface:On[50],text:{primary:On[900],secondary:On[600],muted:On[500],tertiary:On[500]},border:Kn(On[400],On[500]),success:Me(Gt.success,`${Gt.success}15`,`${Gt.success}40`,Gt.successDark),warning:Me(Gt.warning,`${Gt.warning}15`,`${Gt.warning}40`,Gt.warningDark),error:Me(Gt.error,`${Gt.error}15`,`${Gt.error}40`,Gt.errorDark),info:Me(Gt.info,`${Gt.info}15`,`${Gt.info}40`,Gt.infoDark),hover:{primary:"#2c5282",secondary:"#2b6cb0",surface:On[100]},active:{primary:"#1a365d",secondary:"#2b6cb0"},disabled:{background:On[100],text:On[400]}},spacing:{xxxs:"1px",xxs:"2px",xs:ce[1],sm:ce[2],md:ce[4],lg:ce[6],xl:ce[8],xxl:ce[12],xxxl:ce[16],xxxxl:ce[20],xxxxxl:ce[24]},typography:{fontFamily:{heading:O.fonts.body.luxe,body:O.fonts.body.luxe,mono:O.fonts.mono},fontSize:{xxs:"10px",xs:O.fontSizes.xs,sm:O.fontSizes.sm,md:O.fontSizes.sm,base:O.fontSizes.base,lg:O.fontSizes.md,xl:O.fontSizes.lg,"2xl":O.fontSizes.xl,"3xl":O.fontSizes["2xl"],"4xl":"36px","5xl":"48px"},fontWeight:{light:O.fontWeights.light,normal:O.fontWeights.regular,medium:O.fontWeights.medium,semibold:O.fontWeights.semibold,bold:O.fontWeights.bold},lineHeight:{tight:O.lineHeights.tight,normal:O.lineHeights.base,relaxed:O.lineHeights.relaxed,loose:O.lineHeights.loose}},letterSpacing:{tight:"-0.025em",normal:"0",wide:"0.025em"},borderWidth:{thin:"1px",medium:"2px",thick:"3px"},shadows:{none:ye.light.none,sm:ye.light.sm,md:ye.light.md,lg:ye.light.lg,xl:ye.light.xl},borderRadius:{none:me.none,xs:me.xs,sm:me.sm,md:me.md,lg:me.lg,xl:me.xl,full:me.full},transitions:{fast:Z.luxe.fast,normal:Z.luxe.base,slow:Z.luxe.slow},duration:{instant:"0ms",fast:Z.timing.fast,normal:Z.timing.base,slow:Z.timing.slow,slower:Z.timing.slower},easing:{linear:Z.easing.linear,ease:Z.easing.ease,easeIn:Z.easing.easeIn,easeOut:Z.easing.easeOut,easeInOut:Z.easing.easeInOut},zIndex:{base:oe.base,dropdown:oe.dropdown,sticky:oe.sticky,fixed:oe.fixed,modal:oe.modal,popover:oe.popover,tooltip:oe.tooltip,toast:oe.toast},breakpoints:{xs:ge.xs,sm:ge.sm,md:ge.md,lg:ge.lg,xl:ge.xl,"2xl":ge["2xl"]},opacity:ca,extensions:{}},{luxe:ft,gray:pT,semantic:Yt}=la,hT={colors:{primary:Xe(ft.charcoal,ft.black,ft.darkGray),secondary:Xe("#A88C24","#8A7318",ft.gold),accent:Xe(ft.rose,"#A89089","#D9C9C3"),accentColors:{magenta:ft.rose,cyan:"#60A5FA",gold:ft.gold,green:"#34D399"},background:{primary:ft.white,secondary:ft.cream,tertiary:ft.lightGray},surface:ft.cream,text:{primary:ft.charcoal,secondary:ft.darkGray,muted:ft.mediumGray,tertiary:pT[500]},border:Kn(ft.mediumGray,ft.darkGray),success:Me(Yt.success,`${Yt.success}15`,`${Yt.success}40`,Yt.successDark),warning:Me(Yt.warning,`${Yt.warning}15`,`${Yt.warning}40`,Yt.warningDark),error:Me(Yt.error,`${Yt.error}15`,`${Yt.error}40`,Yt.errorDark),info:Me(Yt.info,`${Yt.info}15`,`${Yt.info}40`,Yt.infoDark),hover:{primary:"rgba(44, 44, 44, 0.08)",secondary:"rgba(212, 175, 55, 0.15)",surface:ft.lightGray},active:{primary:"rgba(44, 44, 44, 0.12)",secondary:"rgba(212, 175, 55, 0.25)"},disabled:{background:ft.lightGray,text:ft.darkGray}},spacing:{xxxs:"1px",xxs:"2px",xs:ce[1],sm:ce[2],md:ce[4],lg:ce[6],xl:ce[8],xxl:ce[12],xxxl:ce[16],xxxxl:ce[20],xxxxxl:ce[24]},typography:{fontFamily:{heading:O.fonts.heading.luxe,body:O.fonts.body.luxe,mono:O.fonts.mono},fontSize:{xxs:"10px",xs:O.fontSizesFluid.xs,sm:O.fontSizesFluid.sm,md:O.fontSizesFluid.sm,base:O.fontSizesFluid.base,lg:O.fontSizesFluid.md,xl:O.fontSizesFluid.lg,"2xl":O.fontSizesFluid.xl,"3xl":O.fontSizesFluid["2xl"],"4xl":"36px","5xl":"48px"},fontWeight:{light:O.fontWeights.light,normal:O.fontWeights.regular,medium:O.fontWeights.medium,semibold:O.fontWeights.semibold,bold:O.fontWeights.bold},lineHeight:{tight:O.lineHeights.tight,normal:O.lineHeights.base,relaxed:O.lineHeights.relaxed,loose:O.lineHeights.loose},fontSizeFluid:{xs:O.fontSizesFluid.xs,sm:O.fontSizesFluid.sm,base:O.fontSizesFluid.base,md:O.fontSizesFluid.md,lg:O.fontSizesFluid.lg,xl:O.fontSizesFluid.xl,"2xl":O.fontSizesFluid["2xl"],"3xl":O.fontSizesFluid["3xl"]}},letterSpacing:{tight:"-0.025em",normal:"0",wide:"0.025em"},borderWidth:{thin:"1px",medium:"2px",thick:"3px"},shadows:{none:ye.light.none,sm:ye.light.sm,md:ye.light.md,lg:ye.light.lg,xl:ye.light.xl},borderRadius:{none:me.none,xs:me.xs,sm:me.sm,md:me.md,lg:me.lg,xl:me.xl,full:me.full},transitions:{fast:Z.luxe.fast,normal:Z.luxe.base,slow:Z.luxe.slow},duration:{instant:"0ms",fast:Z.timing.fast,normal:Z.timing.base,slow:Z.timing.slow,slower:Z.timing.slower},easing:{linear:Z.easing.linear,ease:Z.easing.ease,easeIn:Z.easing.easeIn,easeOut:Z.easing.easeOut,easeInOut:Z.easing.easeInOut},zIndex:{base:oe.base,dropdown:oe.dropdown,sticky:oe.sticky,fixed:oe.fixed,modal:oe.modal,popover:oe.popover,tooltip:oe.tooltip,toast:oe.toast},breakpoints:{xs:ge.xs,sm:ge.sm,md:ge.md,lg:ge.lg,xl:ge.xl,"2xl":ge["2xl"]},opacity:ca,extensions:{luxe:{goldShimmer:`linear-gradient(135deg, ${ft.gold} 0%, ${ft.gold} 50%, ${ft.gold} 100%)`,elegantShadow:"0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)",subtleGradient:`linear-gradient(to bottom, ${ft.white}, ${ft.cream})`}}},{gray:oa}=la,Qe={primary:"#9333ea",primaryDark:"#7e22ce",primaryLight:"#a855f7",accent:"#d4af37",accentDark:"#b8941f",accentLight:"#f0d574",secondary:"#c4837a",secondaryDark:"#a56960",secondaryLight:"#e0b0a8",background:"#0a0a0a",surface:"#161616",surfaceLight:"#1f1f1f",white:"#ffffff",textMuted:"#b8b8b8",textSubtle:"#808080"},Je={primary:"#9333ea",primaryDark:"#7e22ce",primaryLight:"#a855f7",accent:"#d4af37",accentDark:"#b8941f",accentLight:"#f0d574",secondary:"#c4837a",secondaryDark:"#a56960",secondaryLight:"#e0b0a8",background:"#ffffff",surface:"#f8f8f8",surfaceLight:"#f0f0f0",textPrimary:"#1a1a1a",textSecondary:"#4a4a4a",textMuted:"#6a6a6a"},gT={colors:{primary:Xe(Qe.primary,Qe.primaryDark,Qe.primaryLight),secondary:Xe(Qe.secondary,Qe.secondaryDark,Qe.secondaryLight),accent:Xe(Qe.accent,Qe.accentDark,Qe.accentLight),accentColors:{magenta:Qe.primary,cyan:"#06b6d4",gold:Qe.accent,green:"#10b981"},background:{primary:Qe.background,secondary:Qe.surface,tertiary:Qe.surfaceLight},surface:Qe.surface,text:{primary:Qe.white,secondary:Qe.textMuted,muted:Qe.textSubtle,tertiary:oa[400]},border:Kn(oa[600],oa[500]),success:Me("#16a34a","#16a34a15","#16a34a40","#15803d"),warning:Me("#f59e0b","#f59e0b15","#f59e0b40","#d97706"),error:Me("#ef4444","#ef444415","#ef444440","#dc2626"),info:Me(Qe.accent,`${Qe.accent}15`,`${Qe.accent}40`,Qe.accentDark),hover:{primary:Qe.primaryLight,secondary:Qe.secondaryLight,surface:Qe.surfaceLight},active:{primary:Qe.primaryDark,secondary:Qe.secondaryDark},disabled:{background:oa[800],text:oa[500]}},spacing:{xs:ce[1],sm:ce[2],md:ce[4],lg:ce[6],xl:ce[8],xxl:ce[12]},typography:{fontFamily:{heading:O.fonts.body.luxe,body:O.fonts.body.luxe,mono:O.fonts.mono},fontSize:{xxs:"10px",xs:O.fontSizes.xs,sm:O.fontSizes.sm,md:O.fontSizes.sm,base:O.fontSizes.base,lg:O.fontSizes.md,xl:O.fontSizes.lg,"2xl":O.fontSizes.xl,"3xl":O.fontSizes["2xl"],"4xl":"36px","5xl":"48px"},fontWeight:{light:O.fontWeights.light,normal:O.fontWeights.regular,medium:O.fontWeights.medium,semibold:O.fontWeights.semibold,bold:O.fontWeights.bold},lineHeight:{tight:O.lineHeights.tight,normal:O.lineHeights.base,relaxed:O.lineHeights.relaxed,loose:O.lineHeights.loose}},shadows:{none:ye.dark.none,sm:ye.dark.sm,md:ye.dark.md,lg:ye.dark.lg,xl:ye.dark.xl},borderRadius:{none:me.none,sm:me.sm,md:me.md,lg:me.lg,full:me.full},transitions:{fast:Z.luxe.fast,normal:Z.luxe.base,slow:Z.luxe.slow},duration:{instant:"0ms",fast:Z.timing.fast,normal:Z.timing.base,slow:Z.timing.slow,slower:Z.timing.slower},easing:{linear:Z.easing.linear,ease:Z.easing.ease,easeIn:Z.easing.easeIn,easeOut:Z.easing.easeOut,easeInOut:Z.easing.easeInOut},zIndex:{base:oe.base,dropdown:oe.dropdown,sticky:oe.sticky,fixed:oe.fixed,modal:oe.modal,popover:oe.popover,tooltip:oe.tooltip,toast:oe.toast},breakpoints:{xs:ge.xs,sm:ge.sm,md:ge.md,lg:ge.lg,xl:ge.xl,"2xl":ge["2xl"]},opacity:ca,extensions:{cyberpunk:{neonGlow:{magenta:`0 0 10px ${Qe.secondary}`,cyan:`0 0 10px ${Qe.accent}`,green:"0 0 10px #22c55e",large:"0 0 20px"},scanlines:"none",glitchEffect:"none"}}},bT={colors:{primary:Xe(Je.primary,Je.primaryDark,Je.primaryLight),secondary:Xe(Je.secondary,Je.secondaryDark,Je.secondaryLight),accent:Xe(Je.accent,Je.accentDark,Je.accentLight),accentColors:{magenta:Je.primary,cyan:"#06b6d4",gold:Je.accent,green:"#10b981"},background:{primary:Je.background,secondary:Je.surface,tertiary:Je.surfaceLight},surface:Je.surface,text:{primary:Je.textPrimary,secondary:Je.textSecondary,muted:Je.textMuted,tertiary:oa[500]},border:Kn(oa[400],oa[500]),success:Me("#16a34a","#16a34a15","#16a34a40","#15803d"),warning:Me("#f59e0b","#f59e0b15","#f59e0b40","#d97706"),error:Me("#ef4444","#ef444415","#ef444440","#dc2626"),info:Me(Je.accent,`${Je.accent}15`,`${Je.accent}40`,Je.accentDark),hover:{primary:Je.primaryLight,secondary:Je.secondaryLight,surface:Je.surfaceLight},active:{primary:Je.primaryDark,secondary:Je.secondaryDark},disabled:{background:oa[200],text:oa[400]}},spacing:{xs:ce[1],sm:ce[2],md:ce[4],lg:ce[6],xl:ce[8],xxl:ce[12]},typography:{fontFamily:{heading:O.fonts.body.luxe,body:O.fonts.body.luxe,mono:O.fonts.mono},fontSize:{xxs:"10px",xs:O.fontSizes.xs,sm:O.fontSizes.sm,md:O.fontSizes.sm,base:O.fontSizes.base,lg:O.fontSizes.md,xl:O.fontSizes.lg,"2xl":O.fontSizes.xl,"3xl":O.fontSizes["2xl"],"4xl":"36px","5xl":"48px"},fontWeight:{light:O.fontWeights.light,normal:O.fontWeights.regular,medium:O.fontWeights.medium,semibold:O.fontWeights.semibold,bold:O.fontWeights.bold},lineHeight:{tight:O.lineHeights.tight,normal:O.lineHeights.base,relaxed:O.lineHeights.relaxed,loose:O.lineHeights.loose}},shadows:{none:ye.light.none,sm:ye.light.sm,md:ye.light.md,lg:ye.light.lg,xl:ye.light.xl},borderRadius:{none:me.none,sm:me.sm,md:me.md,lg:me.lg,full:me.full},transitions:{fast:Z.luxe.fast,normal:Z.luxe.base,slow:Z.luxe.slow},duration:{instant:"0ms",fast:Z.timing.fast,normal:Z.timing.base,slow:Z.timing.slow,slower:Z.timing.slower},easing:{linear:Z.easing.linear,ease:Z.easing.ease,easeIn:Z.easing.easeIn,easeOut:Z.easing.easeOut,easeInOut:Z.easing.easeInOut},zIndex:{base:oe.base,dropdown:oe.dropdown,sticky:oe.sticky,fixed:oe.fixed,modal:oe.modal,popover:oe.popover,tooltip:oe.tooltip,toast:oe.toast},breakpoints:{xs:ge.xs,sm:ge.sm,md:ge.md,lg:ge.lg,xl:ge.xl,"2xl":ge["2xl"]},opacity:ca,extensions:{cyberpunk:{neonGlow:{magenta:`0 0 10px ${Je.secondary}`,cyan:`0 0 10px ${Je.accent}`,green:"0 0 10px #22c55e",large:"0 0 20px"},scanlines:"none",glitchEffect:"none"}}},yT=new Set(["primary","secondary","accent"]),xT=new Set(["success","warning","error","info"]);function vT(e){return typeof e=="object"&&e!==null&&"main"in e}function wT(e){return typeof e=="object"&&e!==null&&"main"in e}function ST(e,a){return Xe({main:a.main??e.main,dark:a.dark??e.dark,light:a.light??e.light,numeric:{50:a[50]??e[50],100:a[100]??e[100],200:a[200]??e[200],300:a[300]??e[300],400:a[400]??e[400],500:a[500]??a.main??e[500],600:a[600]??e[600],700:a[700]??e[700],800:a[800]??e[800],900:a[900]??e[900],950:a[950]??e[950]}})}function kT(e,a){return Me({main:a.main??e.main,background:a.background??e.background,border:a.border??e.border,text:a.text??e.text,numeric:{50:a[50]??e[50],100:a[100]??e[100],200:a[200]??e[200],300:a[300]??e[300],400:a[400]??e[400],500:a[500]??a.main??e[500],600:a[600]??e[600],700:a[700]??e[700],800:a[800]??e[800],900:a[900]??e[900],950:a[950]??e[950]}})}function _T(e,a){return Kn(a.default??e.default,a.hover??e.hover)}function Zp(e,a){const i={...e};for(const o of Object.keys(a)){const l=e[o],u=a[o];u!==void 0&&(typeof l=="object"&&l!==null&&!Array.isArray(l)&&typeof u=="object"&&u!==null&&!Array.isArray(u)?i[o]=Zp(l,u):i[o]=u)}return i}function $T(e,a){const i={...e};for(const o of Object.keys(a)){const l=a[o];if(l!==void 0)if(yT.has(o)&&vT(l))i[o]=ST(e[o],l);else if(xT.has(o)&&wT(l))i[o]=kT(e[o],l);else if(o==="border"&&typeof l=="object")i.border=_T(e.border,l);else if(typeof l=="object"&&l!==null){const u=e[o];typeof u=="object"&&u!==null?i[o]=Zp(u,l):i[o]=l}else i[o]=l}return i}function TT(e,a){const i={...e};for(const o of Object.keys(a)){const l=a[o];if(l!==void 0)if(o==="colors")i.colors=$T(e.colors,l);else if(typeof l=="object"&&l!==null){const u=e[o];typeof u=="object"&&u!==null?i[o]=Zp(u,l):i[o]=l}else i[o]=l}return i}const jT={colors:"color",shadows:"shadow",borderRadius:"radius",transitions:"transition",typography:"type",spacing:"spacing",zIndex:"z",duration:"duration",easing:"easing",opacity:"opacity",letterSpacing:"letter-spacing",borderWidth:"border-width"},lv=new Set(["extensions","breakpoints"]);function cv(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function uv(e,a,i){for(const[o,l]of Object.entries(e)){if(l==null||typeof l=="function"||lv.has(o))continue;const u=cv(o),m=`${a}-${u}`;typeof l=="string"?i[m]=l:typeof l=="number"?i[m]=String(l):typeof l=="object"&&!Array.isArray(l)&&uv(l,m,i)}}function CT(e,a="theme"){const i={};for(const[o,l]of Object.entries(e)){if(l==null||typeof l=="function"||lv.has(o))continue;const u=jT[o]??cv(o),m=`--${a}-${u}`;typeof l=="string"?i[m]=l:typeof l=="number"?i[m]=String(l):typeof l=="object"&&!Array.isArray(l)&&uv(l,m,i)}return i}const AT=Sp`
  :root {
    ${({theme:e})=>{const a=CT(e);return Object.entries(a).map(([i,o])=>`${i}: ${o};`).join(`
    `)}}
  }
`,Wm={cyberpunk:sT,luxe:lT,lilith:cT,synthwave:uT,"synthwave-light":dT,neutral:fT,corporate:mT,"creator-portal":hT,"pitch-deck":gT,"pitch-deck-light":bT},ET=Object.keys(Wm);function RT(e){return Wm[e]??Wm.cyberpunk}const dv=b.createContext(void 0),zT=({children:e,themeName:a,defaultTheme:i="cyberpunk",storageKey:o="app-theme",cssVariables:l=!1,customTheme:u})=>{const[m,p]=b.useState(()=>{if(typeof window<"u"){const S=localStorage.getItem(o);if(S&&ET.includes(S))return S}return i}),g=a??m,h=RT(g),v=u?TT(h,u):h;b.useEffect(()=>{typeof window<"u"&&localStorage.setItem(o,g)},[g,o]);const x={theme:v,themeName:g,setTheme:p};return c.jsx(dv.Provider,{value:x,children:c.jsxs(wp,{theme:v,children:[l&&c.jsx(AT,{}),e]})})};function Ma(){const e=b.useContext(dv);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e}w.div`
  padding: ${({theme:e})=>e.spacing.xl};
  background: ${({theme:e})=>e.colors.background.primary};
  min-height: 100vh;
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
`;w.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  color: ${({theme:e})=>e.colors.primary.main};
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;w.section`
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
`;w.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  border-bottom: 2px solid ${({theme:e})=>e.colors.primary.main};
  padding-bottom: ${({theme:e})=>e.spacing.sm};
`;w.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`;w.div`
  height: 100px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({$color:e})=>e};
  box-shadow: ${({$glow:e})=>e||"none"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: ${({theme:e})=>e.spacing.sm};
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    transform: translateY(-2px);
  }
`;w.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.primary};
  background: ${({theme:e})=>e.colors.background.secondary}dd;
  padding: 4px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`;w.span`
  font-size: 10px;
  color: ${({theme:e})=>e.colors.text.muted};
  background: ${({theme:e})=>e.colors.background.secondary}dd;
  padding: 2px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  margin-top: 4px;
`;w.div`
  height: 200px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({$gradient:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
`;w.div`
  height: 200px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background-color: ${({theme:e})=>e.colors.background.primary};
  background-image: ${({$pattern:e})=>e};
  background-size: 50px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;w.span`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: ${({theme:e})=>e.colors.text.primary};
  background: ${({theme:e})=>e.colors.background.secondary}cc;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`;w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`;w.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`;w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;w.code`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.secondary.main};
  background: ${({theme:e})=>e.colors.background.secondary};
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
`;w.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  flex-wrap: wrap;
`;w.button`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.lg};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: none;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  ${({theme:e,$variant:a="primary"})=>{const o={primary:e.colors.primary,secondary:e.colors.secondary,accent:e.colors.accent}[a];return`
      background: ${o.main};
      color: ${e.colors.text.primary};

      &:hover {
        background: ${o.light};
        box-shadow: 0 0 20px ${o.main}80;
      }

      &:active {
        background: ${o.dark};
      }
    `}}
`;w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  color: ${({theme:e})=>e.colors.primary.main};
  text-shadow: ${({$glow:e})=>e||"none"};
`;Sp`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: ${({theme:e})=>e.typography.fontFamily.body};
    font-size: 1rem;
    line-height: 1.5;
    color: ${({theme:e})=>e.colors.text.primary};
    background: ${({theme:e})=>e.colors.background.primary};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-weight: 600;
    line-height: 1.2;
    color: ${({theme:e})=>e.colors.text.primary};
  }

  a {
    color: ${({theme:e})=>e.colors.primary.main};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  code, pre {
    font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  }

  :root {
    --density-scale: 1.0;
  }

  [data-reduce-motion="true"] * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.background.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border.default};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.text.muted};
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({theme:e})=>`${e.colors.border.default} ${e.colors.background.primary}`};
  }
`;const MT=(e={})=>{const{width:a=8,radius:i=4,autoHide:o=!1}=e;return W`
    scrollbar-width: thin;
    scrollbar-color: ${({theme:l})=>`${l.colors.border.default} ${l.colors.background.primary}`};

    &::-webkit-scrollbar {
      width: ${a}px;
      height: ${a}px;
    }

    &::-webkit-scrollbar-track {
      background: ${({theme:l})=>l.colors.background.primary};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({theme:l})=>l.colors.border.default};
      border-radius: ${i}px;
      ${o?"opacity: 0; transition: opacity 0.2s;":""}
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${({theme:l})=>l.colors.text.muted};
    }

    ${o?"&:hover::-webkit-scrollbar-thumb { opacity: 1; }":""}
  `};MT({width:6,radius:3});Sp`
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({theme:e})=>`${e.colors.border.default} ${e.colors.background.primary}`};
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.background.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border.default};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.text.muted};
  }
`;class DT extends Array{constructor(i){super(i.main);Dn(this,"main");Dn(this,"dark");Dn(this,"light");this.main=i.main,this.dark=i.dark,this.light=i.light}toString(){return this.main}}function rm(e){return e==null||typeof e=="string"?e:new DT(e)}const OT={baseTheme:"luxe",colors:{primary:"#D4AF37",secondary:"#E8C4A0",accent:"#C77DBA",background:{main:"#0a0a0f",card:"#141420",elevated:"#1a1a2e"},text:{primary:"#f0e6d3",secondary:"#b8a99a",muted:"#6b6170"}},typography:{headingFont:'"Playfair Display", Georgia, serif',bodyFont:"'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},NT={colors:{primary:{main:"#D4AF37",dark:"#B8941F",light:"#E8C4A0"},secondary:{main:"#E8C4A0",dark:"#C4A07C",light:"#F2D9B8"},accent:{main:"#C77DBA",dark:"#A55F9A",light:"#D499C8"},accentColors:{gold:"#D4AF37",magenta:"#C77DBA",cyan:"#87CEEB",green:"#8FBC8F"},background:{primary:"#0a0a0f",secondary:"#141420",tertiary:"#1a1a2e"},surface:"#141420",text:{primary:"#f0e6d3",secondary:"#b8a99a",muted:"#6b6170",tertiary:"#b8a99a"},border:{default:"rgba(212, 175, 55, 0.12)",hover:"rgba(212, 175, 55, 0.30)"},hover:{primary:"rgba(212, 175, 55, 0.06)",secondary:"rgba(212, 175, 55, 0.12)",surface:"rgba(212, 175, 55, 0.04)"},active:{primary:"rgba(212, 175, 55, 0.10)",secondary:"rgba(212, 175, 55, 0.18)"},disabled:{background:"#2a2a38",text:"#6b6170"},onPrimary:"#0a0a0f"},typography:{fontFamily:{heading:'"Playfair Display", Georgia, serif',body:"'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},shadows:{none:"none",sm:"0 2px 8px rgba(0, 0, 0, 0.3)",md:"0 4px 16px rgba(0, 0, 0, 0.4)",lg:"0 8px 32px rgba(0, 0, 0, 0.5)",xl:"0 16px 48px rgba(0, 0, 0, 0.6)"},extensions:{luxe:{goldShimmer:"linear-gradient(135deg, #D4AF37 0%, #E8C4A0 50%, #D4AF37 100%)",elegantShadow:"0 10px 40px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)",subtleGradient:"linear-gradient(to bottom, #0a0a0f, #141420)"}}},LT=e=>{const a=e;return{...a,colors:{...a.colors,primary:rm(a.colors.primary),secondary:rm(a.colors.secondary),accent:rm(a.colors.accent)}}},BT=({children:e,defaultTheme:a,customTheme:i})=>c.jsx(zT,{defaultTheme:a,customTheme:i,children:c.jsx(wp,{theme:LT,children:e})}),qT=e=>({...e});function VT(){return typeof document>"u"?null:document.documentElement.getAttribute("data-site-theme")}const Ae={pink:"#FF2E97",pinkGlow:"#FF268A",pinkBright:"#FF6FB5",pinkDeep:"#C71E72",black:"#08080C",surface:"#15151C",elevated:"#1C1C26",white:"#F5F5F7",body:"#E8E8EC",muted:"#9A9AA8",borderDefault:"rgba(255, 46, 151, 0.18)",borderHover:"rgba(255, 46, 151, 0.45)"},Qp="'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",Jp={primary:{main:Ae.pink,dark:Ae.pinkDeep,light:Ae.pinkBright},secondary:{main:Ae.pinkBright,dark:Ae.pink,light:"#FFA8D4"},accent:{main:Ae.pink,dark:Ae.pinkDeep,light:Ae.pinkBright},accentColors:{magenta:Ae.pink,gold:Ae.pinkBright,cyan:"#7FD7FF",green:"#7FE3B0"},background:{primary:Ae.black,secondary:Ae.surface,tertiary:Ae.elevated},surface:Ae.surface,text:{primary:Ae.white,secondary:Ae.body,muted:Ae.muted,tertiary:Ae.body},border:{default:Ae.borderDefault,hover:Ae.borderHover},hover:{primary:"rgba(255, 46, 151, 0.08)",secondary:"rgba(255, 111, 181, 0.14)",surface:"rgba(255, 46, 151, 0.05)"},active:{primary:"rgba(255, 46, 151, 0.12)",secondary:"rgba(255, 46, 151, 0.20)"},disabled:{background:"#2a2330",text:"#6b6170"},onPrimary:Ae.black},UT={colors:Jp,typography:{fontFamily:{heading:'"Audiowide", "Playfair Display", system-ui, sans-serif',body:Qp}},shadows:{none:"none",sm:"0 2px 10px rgba(0, 0, 0, 0.5), 0 0 8px rgba(255, 46, 151, 0.12)",md:"0 4px 18px rgba(0, 0, 0, 0.55), 0 0 16px rgba(255, 46, 151, 0.18)",lg:"0 8px 32px rgba(0, 0, 0, 0.6), 0 0 28px rgba(255, 46, 151, 0.25)",xl:"0 16px 48px rgba(0, 0, 0, 0.7), 0 0 40px rgba(255, 46, 151, 0.32)"},extensions:{luxe:{goldShimmer:`linear-gradient(135deg, ${Ae.pinkBright} 0%, ${Ae.pink} 45%, ${Ae.pinkGlow} 100%)`,elegantShadow:"0 0 28px rgba(255, 46, 151, 0.35), 0 12px 40px rgba(0, 0, 0, 0.6)",subtleGradient:`linear-gradient(to bottom, ${Ae.black}, ${Ae.surface})`}}},FT={colors:Jp,typography:{fontFamily:{heading:'"Orbitron", "Audiowide", system-ui, sans-serif',body:Qp}},borderRadius:{none:"0",sm:"2px",md:"3px",lg:"4px",full:"9999px"},shadows:{none:"none",sm:"0 0 0 1px rgba(255, 46, 151, 0.35), 0 2px 8px rgba(0, 0, 0, 0.6)",md:"0 0 0 1px rgba(255, 46, 151, 0.45), 0 6px 18px rgba(0, 0, 0, 0.65)",lg:"0 0 0 1px rgba(255, 46, 151, 0.55), 0 10px 28px rgba(0, 0, 0, 0.7)",xl:"0 0 0 2px rgba(255, 46, 151, 0.6), 0 16px 40px rgba(0, 0, 0, 0.75)"},extensions:{luxe:{goldShimmer:`linear-gradient(135deg, ${Ae.pink} 0%, ${Ae.pink} 100%)`,elegantShadow:"0 0 0 1px rgba(255, 46, 151, 0.5), 0 14px 36px rgba(0, 0, 0, 0.7)",subtleGradient:`linear-gradient(180deg, ${Ae.black}, ${Ae.black})`}}},HT={colors:{...Jp,background:{primary:"#0c070e",secondary:"#181019",tertiary:"#201522"},surface:"#181019"},typography:{fontFamily:{heading:'"Playfair Display", Georgia, serif',body:Qp}},shadows:{none:"none",sm:"0 2px 10px rgba(0, 0, 0, 0.4)",md:"0 6px 22px rgba(0, 0, 0, 0.45), 0 0 12px rgba(255, 46, 151, 0.08)",lg:"0 12px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 46, 151, 0.10)",xl:"0 18px 52px rgba(0, 0, 0, 0.55), 0 0 30px rgba(255, 46, 151, 0.12)"},extensions:{luxe:{goldShimmer:`linear-gradient(135deg, ${Ae.pinkBright} 0%, ${Ae.pink} 100%)`,elegantShadow:"0 16px 48px rgba(255, 46, 151, 0.10), 0 4px 16px rgba(0, 0, 0, 0.5)",subtleGradient:"linear-gradient(to bottom, #0c070e, #181019)"}}},be={pink:"#FF2E93",pinkBright:"#FF7FC2",pinkDeep:"#C81E73",sunshine:"#FFC93C",sunshineBright:"#FFE08A",sunshineDeep:"#D99A1C",sunshineInk:"#8A5A08",malibu:"#36C5F0",malibuDeep:"#1789B0",darkBg:"#240A18",darkSurface:"#34122A",darkElevated:"#3F1733",darkText:"#FFF0F7",darkBody:"#F4D9E8",darkMuted:"#C79DB4",darkBorder:"rgba(255, 46, 147, 0.28)",darkBorderHover:"rgba(54, 197, 240, 0.50)",lightBg:"#FFF4FA",lightSurface:"#FFFFFF",lightElevated:"#FFFBFE",lightText:"#3A0E24",lightBody:"#5A1E3E",lightMuted:"#7E4A64",lightBorder:"rgba(255, 46, 147, 0.22)",lightBorderHover:"rgba(255, 46, 147, 0.45)"},Pc="'Quinn Heart', 'Poppins', ui-rounded, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",Gc="'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",PT={colors:{primary:{main:be.pinkDeep,dark:"#A2155C",light:be.pink},secondary:{main:be.sunshineDeep,dark:"#B57E14",light:be.sunshine},accent:{main:be.malibuDeep,dark:"#106A8A",light:be.malibu},accentColors:{magenta:be.pinkDeep,gold:be.sunshineDeep,cyan:be.malibuDeep,green:"#1E9E6E"},background:{primary:be.lightBg,secondary:be.lightSurface,tertiary:be.lightElevated},surface:be.lightSurface,text:{primary:be.lightText,secondary:be.lightBody,muted:be.lightMuted,tertiary:be.lightBody},border:{default:be.lightBorder,hover:be.lightBorderHover},hover:{primary:"rgba(255, 46, 147, 0.06)",secondary:"rgba(255, 201, 60, 0.16)",surface:"rgba(255, 46, 147, 0.04)"},active:{primary:"rgba(255, 46, 147, 0.10)",secondary:"rgba(255, 46, 147, 0.16)"},disabled:{background:"#F0DDE8",text:"#B89AAA"},onPrimary:"#FFFFFF"},typography:{fontFamily:{heading:Pc,body:Gc}},shadows:{none:"none",sm:"0 2px 10px rgba(200, 30, 115, 0.10), 0 1px 3px rgba(58, 14, 36, 0.06)",md:"0 6px 22px rgba(200, 30, 115, 0.14), 0 2px 8px rgba(58, 14, 36, 0.08)",lg:"0 12px 36px rgba(200, 30, 115, 0.18), 0 4px 14px rgba(58, 14, 36, 0.10)",xl:"0 18px 52px rgba(200, 30, 115, 0.22), 0 8px 24px rgba(58, 14, 36, 0.12)"},extensions:{luxe:{goldShimmer:`linear-gradient(135deg, ${be.pinkDeep} 0%, ${be.pink} 50%, ${be.sunshineDeep} 100%)`,elegantShadow:"0 16px 48px rgba(200, 30, 115, 0.16), 0 4px 16px rgba(58, 14, 36, 0.10)",subtleGradient:`linear-gradient(to bottom, ${be.lightBg}, ${be.lightSurface})`}}},GT={colors:{primary:{main:be.pink,dark:be.pinkDeep,light:be.pinkBright},secondary:{main:be.sunshine,dark:be.sunshineDeep,light:be.sunshineBright},accent:{main:be.malibu,dark:be.malibuDeep,light:"#9EE6FB"},accentColors:{magenta:be.pink,gold:be.sunshine,cyan:be.malibu,green:"#7FE3B5"},background:{primary:be.darkBg,secondary:be.darkSurface,tertiary:be.darkElevated},surface:be.darkSurface,text:{primary:be.darkText,secondary:be.darkBody,muted:be.darkMuted,tertiary:be.darkBody},border:{default:be.darkBorder,hover:be.darkBorderHover},hover:{primary:"rgba(255, 46, 147, 0.10)",secondary:"rgba(54, 197, 240, 0.14)",surface:"rgba(255, 46, 147, 0.06)"},active:{primary:"rgba(255, 46, 147, 0.16)",secondary:"rgba(255, 46, 147, 0.24)"},disabled:{background:"#3a2230",text:"#8a6076"},onPrimary:"#280A1A"},typography:{fontFamily:{heading:Pc,body:Gc}},shadows:{none:"none",sm:"0 2px 10px rgba(0, 0, 0, 0.45), 0 0 8px rgba(255, 46, 147, 0.14)",md:"0 6px 22px rgba(0, 0, 0, 0.5), 0 0 16px rgba(255, 46, 147, 0.20)",lg:"0 12px 36px rgba(0, 0, 0, 0.55), 0 0 28px rgba(255, 46, 147, 0.26)",xl:"0 18px 52px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 46, 147, 0.32)"},extensions:{luxe:{goldShimmer:`linear-gradient(135deg, ${be.pink} 0%, ${be.pinkBright} 45%, ${be.sunshine} 100%)`,elegantShadow:"0 0 28px rgba(255, 46, 147, 0.34), 0 12px 40px rgba(20, 4, 14, 0.55)",subtleGradient:`linear-gradient(to bottom, ${be.darkBg}, ${be.darkSurface})`}}},im="'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",YT='"Audiowide", "Playfair Display", system-ui, sans-serif',IT='"Orbitron", "Audiowide", system-ui, sans-serif',XT='"Playfair Display", Georgia, serif',Ni="#08080C",on={"luxe-dark":{name:"luxe-dark",label:"Dark Luxe (current)",customTheme:NT,appBackground:null,themeColor:null,aiBgPreset:null,aiBgOpacity:null,staticVars:{textPrimary:null,surface:null,accent:null,accentContrast:null,ageGateScrim:null,warning:null,fontHeading:null,fontBody:null}},"kuromi-neon":{name:"kuromi-neon",label:"Kuromi · Neon",customTheme:UT,appBackground:`radial-gradient(circle at 18% 0%, rgba(255, 46, 151, 0.18), transparent 45%), radial-gradient(circle at 100% 100%, rgba(255, 38, 138, 0.14), transparent 50%), linear-gradient(135deg, ${Ni} 0%, #120a14 50%, ${Ni} 100%)`,themeColor:Ni,aiBgPreset:"cosmic-nebula",aiBgOpacity:.35,staticVars:{textPrimary:Ae.white,surface:Ae.surface,accent:Ae.pink,accentContrast:Ae.black,ageGateScrim:null,warning:null,fontHeading:YT,fontBody:im}},"kuromi-stark":{name:"kuromi-stark",label:"Kuromi · Stark",customTheme:FT,appBackground:`linear-gradient(135deg, ${Ni} 0%, #0e0810 55%, ${Ni} 100%)`,themeColor:Ni,aiBgPreset:"cosmic-nebula",aiBgOpacity:.18,staticVars:{textPrimary:Ae.white,surface:Ae.surface,accent:Ae.pink,accentContrast:Ae.black,ageGateScrim:null,warning:null,fontHeading:IT,fontBody:im}},"kuromi-duo":{name:"kuromi-duo",label:"Kuromi · Duotone",customTheme:HT,appBackground:"radial-gradient(circle at 50% -10%, rgba(255, 46, 151, 0.12), transparent 55%), linear-gradient(135deg, #0c070e 0%, #181019 50%, #0c070e 100%)",themeColor:"#0c070e",aiBgPreset:"cosmic-nebula",aiBgOpacity:.4,staticVars:{textPrimary:Ae.white,surface:"#181019",accent:Ae.pink,accentContrast:Ae.black,ageGateScrim:null,warning:null,fontHeading:XT,fontBody:im}},"barbie-light":{name:"barbie-light",label:"Cali Barbie · Malibu",customTheme:PT,appBackground:"radial-gradient(circle at 50% -8%, rgba(255, 46, 147, 0.18), transparent 55%), radial-gradient(circle at 90% 6%, rgba(255, 201, 60, 0.28), transparent 42%), radial-gradient(circle at 6% 100%, rgba(54, 197, 240, 0.16), transparent 50%), linear-gradient(160deg, #FFF4FA 0%, #FFE8F4 42%, #FFF8E9 100%)",themeColor:"#FFF4FA",aiBgPreset:"sunset-fire",aiBgOpacity:0,staticVars:{textPrimary:be.lightText,surface:be.lightSurface,accent:be.pinkDeep,accentContrast:"#FFFFFF",ageGateScrim:"rgba(255, 244, 250, 0.92)",warning:be.sunshineInk,fontHeading:Pc,fontBody:Gc}},"barbie-dark":{name:"barbie-dark",label:"Cali Barbie · Sunset",customTheme:GT,appBackground:"radial-gradient(circle at 50% -10%, rgba(255, 46, 147, 0.40), transparent 60%), radial-gradient(circle at 88% 108%, rgba(255, 79, 168, 0.26), transparent 55%), radial-gradient(circle at 6% 12%, rgba(255, 201, 60, 0.12), transparent 45%), linear-gradient(160deg, #240A18 0%, #3A0F24 52%, #240A18 100%)",themeColor:"#240A18",aiBgPreset:"sunset-fire",aiBgOpacity:.45,staticVars:{textPrimary:be.darkText,surface:be.darkSurface,accent:be.pink,accentContrast:"#280A1A",ageGateScrim:null,warning:null,fontHeading:Pc,fontBody:Gc}}},KT="kuromi-neon",WT={kuromi:"kuromi-neon",neon:"kuromi-neon",stark:"kuromi-stark",duo:"kuromi-duo",duotone:"kuromi-duo",barbie:"barbie-light",cali:"barbie-light",malibu:"barbie-light","barbie-night":"barbie-dark",sunset:"barbie-dark",luxe:"luxe-dark",default:"luxe-dark"},ks="quinn-www:preview-theme";function ZT(e){return e!=null&&e in on}function Ji(e){if(!e)return null;const a=e.trim().toLowerCase();return ZT(a)?a:WT[a]??null}function QT(){if(typeof window>"u")return null;let e=null;try{e=new URLSearchParams(window.location.search).get("theme")}catch{e=null}if(e&&["reset","default","clear"].includes(e.trim().toLowerCase())){try{window.localStorage.removeItem(ks)}catch{}return null}const a=Ji(e);if(a){try{window.localStorage.setItem(ks,a)}catch{}return a}try{return Ji(window.localStorage.getItem(ks))}catch{return null}}function JT(){var e,a;return typeof window>"u"?null:Ji((a=(e=window.__PROVIDER_CONFIG__)==null?void 0:e.theme)==null?void 0:a.activeTheme)}const fv="quinn-www:live-theme",e8="quinn-www:boot-chrome";let mv=!1;function t8(e){if(typeof window>"u")return null;const a=Ji(e);if(!a)return null;mv=!0;try{window.localStorage.setItem(fv,a)}catch{}return a}function n8(){if(typeof window>"u")return null;try{return Ji(window.localStorage.getItem(fv))}catch{return null}}function a8(e){try{window.localStorage.setItem(e8,JSON.stringify({name:e.name,themeColor:e.themeColor}))}catch{}}const br={light:"barbie-light",dark:"kuromi-neon"},pv="quinn-www:visitor-theme",r8="quinn-www:visit-chrome-choices",i8="quinn-www:pending-visit-theme",C1="quinn-www:last-shown-theme";function om(e){return e===br.light||e===br.dark}function $c(e){try{return window.localStorage.getItem(e)}catch{return null}}function pu(e,a){try{window.localStorage.setItem(e,a)}catch{}}function o8(){return Math.random()<.5?br.light:br.dark}function s8(){const e=[br.light,br.dark].map(a=>({name:a,themeColor:on[a].themeColor}));pu(r8,JSON.stringify(e))}let ls=null,hv=!1;function gv(){const e=$c(pv);if(om(e))return e;if(ls===null){const a=$c(i8);ls=om(a)?a:o8();const i=$c(C1);hv=om(i)&&i!==ls,pu(C1,ls),s8()}return ls}const bv="quinn-www:theme-toggle-used";function l8(){return typeof window>"u"?!1:(gv(),hv)}function c8(){return typeof window>"u"?!1:$c(bv)!=="1"}function u8(){typeof window>"u"||pu(bv,"1")}function d8(e){return e===br.dark}function f8(e){const a=br[e];pu(pv,a),yv();const i=new URL(window.location.href);return i.searchParams.has("theme")&&(i.searchParams.delete("theme"),window.history.replaceState(window.history.state,"",i.toString())),a}function Vs(){eh();const e=QT();if(e&&on[e])return Wt&&(Wt=null),on[e];if(typeof window<"u")return on[gv()];const a=JT(),i=n8(),o=mv?a:i??a;return o&&on[o]?on[o]:Wt?wv():on[KT]}function hu(e){if(typeof document>"u")return;const a=document.documentElement;if(a.setAttribute("data-site-theme",e.name),a8(e),e.appBackground!==null&&(a.style.setProperty("--app-bg",e.appBackground),document.body.style.backgroundColor=e.themeColor??"#08080C"),e.themeColor!==null){const o=document.querySelector('meta[name="theme-color"]');o&&o.setAttribute("content",e.themeColor)}e.aiBgPreset!==null&&a.style.setProperty("--ai-bg-preset",e.aiBgPreset),e.aiBgOpacity!==null&&a.style.setProperty("--ai-bg-opacity",String(e.aiBgOpacity));const{staticVars:i}=e;if(i.textPrimary!==null&&a.style.setProperty("--text-primary",i.textPrimary),i.surface!==null&&a.style.setProperty("--surface",i.surface),i.accent!==null&&a.style.setProperty("--accent",i.accent),i.accentContrast!==null&&a.style.setProperty("--on-accent",i.accentContrast),i.ageGateScrim!==null&&a.style.setProperty("--age-gate-scrim",i.ageGateScrim),i.warning!==null&&a.style.setProperty("--warning",i.warning),i.textPrimary!==null){const o=i.textPrimary;a.style.setProperty("--protected-image-placeholder",`color-mix(in srgb, ${o} 6%, transparent)`),a.style.setProperty("--protected-image-placeholder-mid",`color-mix(in srgb, ${o} 10%, transparent)`),a.style.setProperty("--protected-image-placeholder-shine",`color-mix(in srgb, ${o} 14%, transparent)`)}i.fontHeading!==null&&a.style.setProperty("--font-heading",i.fontHeading),i.fontBody!==null&&a.style.setProperty("--font-body",i.fontBody)}const bs=Object.keys(on);function m8(e){if(typeof window>"u")return null;const a=Ji(e);if(!a)return null;try{window.localStorage.setItem(ks,a)}catch{}return a}function yv(){if(!(typeof window>"u"))try{window.localStorage.removeItem(ks)}catch{}}let Wt=null;function pc(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function xv(e,a){if(!a)return e;const i={...e};return pc(e)&&pc(a)&&Object.keys(a).forEach(o=>{const l=a[o];pc(l)?!(o in e)||!pc(e[o])?i[o]=l:i[o]=xv(e[o],l):i[o]=l}),i}function _s(e){try{return JSON.parse(JSON.stringify(e))}catch{return{...e}}}function p8(e){try{const a=JSON.stringify(e);return btoa(unescape(encodeURIComponent(a)))}catch{return""}}function h8(e){if(!e)return null;try{const a=decodeURIComponent(escape(atob(e)));return JSON.parse(a)}catch{return null}}function vv(){if(typeof window>"u")return null;try{const e=new URLSearchParams(window.location.search),a=e.get("mod")||e.get("theme-mod")||e.get("custom-mod");if(a){const o=h8(a);if(o){Wt=o;try{localStorage.setItem("quinn-www:custom-mod",JSON.stringify(o))}catch{}return o}}const i=localStorage.getItem("quinn-www:custom-mod");if(i){const o=JSON.parse(i);return Wt=o,o}}catch{}return null}function eh(){Wt===null&&typeof window<"u"&&vv()}function g8(e){var p,g,h;const a=e.colors||{},i=((p=a.background)==null?void 0:p.primary)||((g=a.background)==null?void 0:g.main)||"#0a0a0f",o=a.primary&&(a.primary.main||a.primary)||"#D4AF37",l=a.accent&&(a.accent.main||a.accent)||"#C77DBA",u=a.text&&(a.text.primary||a.text)||"#f0e6d3",m=a.surface||((h=a.background)==null?void 0:h.secondary)||"#141420";if(typeof document<"u"){const v=document.documentElement;v.setAttribute("data-site-theme","custom-mod"),v.style.setProperty("--app-bg",`linear-gradient(160deg, ${i} 0%, ${m} 100%)`),document.body.style.background=i;const x=document.querySelector('meta[name="theme-color"]');x&&o&&x.setAttribute("content",o),v.style.setProperty("--text-primary",u),v.style.setProperty("--surface",m),v.style.setProperty("--accent",l),v.style.setProperty("--on-accent",i)}}function wv(){eh();const e=on["luxe-dark"],a=Wt?xv(e.customTheme,Wt):e.customTheme;return g8(Wt||e.customTheme),{name:"custom-mod",label:"Custom Mod (live)",customTheme:a,appBackground:null,themeColor:null,aiBgPreset:e.aiBgPreset,aiBgOpacity:e.aiBgOpacity,staticVars:{textPrimary:null,surface:null,accent:null,accentContrast:null,ageGateScrim:null,warning:null,fontHeading:null,fontBody:null}}}function Sv(e,a={}){const{persist:i=!0,updateUrl:o=!0}=a;if(Wt=_s(e),typeof window>"u")return;if(i)try{localStorage.setItem("quinn-www:custom-mod",JSON.stringify(Wt))}catch{}if(o)try{const u=new URL(window.location.href);u.searchParams.set("mod",p8(Wt)),u.searchParams.set("theme","custom-mod"),window.history.replaceState({},"",u.toString())}catch{}try{window.dispatchEvent(new CustomEvent("quinn:site-theme-default",{detail:"custom-mod"}))}catch{}const l=wv();hu(l)}function Yc(e={}){const{updateUrl:a=!0}=e;if(Wt=null,typeof window>"u")return;try{localStorage.removeItem("quinn-www:custom-mod")}catch{}if(a)try{const o=new URL(window.location.href);o.searchParams.delete("mod"),o.searchParams.delete("theme-mod"),o.searchParams.delete("custom-mod"),o.searchParams.get("theme")==="custom-mod"&&o.searchParams.delete("theme"),window.history.replaceState({},"",o.toString())}catch{}const i=Vs();hu(i)}function Tc(){return eh(),Wt?_s(Wt):null}typeof window<"u"&&setTimeout(()=>vv(),0);function Li(e,a){return a.split(".").reduce((i,o)=>i!=null?i[o]:void 0,e)}function A1(e,a,i){const o=JSON.parse(JSON.stringify(e||{})),l=a.split(".");let u=o;for(let m=0;m<l.length-1;m++){const p=l[m];(!u[p]||typeof u[p]!="object")&&(u[p]={}),u=u[p]}return u[l[l.length-1]]=i,o}const b8=[{label:"Primary main",path:"colors.primary.main"},{label:"Primary dark",path:"colors.primary.dark"},{label:"Primary light",path:"colors.primary.light"},{label:"Secondary main",path:"colors.secondary.main"},{label:"Accent main",path:"colors.accent.main"},{label:"Accent dark",path:"colors.accent.dark"},{label:"Background main",path:"colors.background.primary"},{label:"Background card",path:"colors.background.secondary"},{label:"Background elevated",path:"colors.background.tertiary"},{label:"Surface",path:"colors.surface"},{label:"Text primary",path:"colors.text.primary"},{label:"Text secondary",path:"colors.text.secondary"},{label:"Text muted",path:"colors.text.muted"},{label:"Border default",path:"colors.border.default"},{label:"Hover primary",path:"colors.hover.primary"},{label:"Luxe goldShimmer (base)",path:"extensions.luxe.goldShimmer"}],y8=[{label:"Heading font",path:"typography.fontFamily.heading"},{label:"Body font",path:"typography.fontFamily.body"}],kv="quinn-www:saved-mods";function x8(){try{const e=localStorage.getItem(kv);return e?JSON.parse(e):[]}catch{return[]}}function E1(e){try{localStorage.setItem(kv,JSON.stringify(e))}catch{}}function v8(){const[e,a]=b.useState(()=>{if(typeof window>"u")return!1;const R=new URLSearchParams(window.location.search);return R.has("theme-viewer")||R.has("tv")||R.has("themes")||R.has("theme-lab")}),[i,o]=b.useState(()=>Tc()||{}),[l,u]=b.useState(()=>x8()),[m,p]=b.useState(""),g=b.useCallback(()=>{const R=Tc();o(R||{})},[]);b.useEffect(()=>{const R=()=>g();window.addEventListener("quinn:site-theme-default",R);const z=window.setInterval(g,1500);return()=>{window.removeEventListener("quinn:site-theme-default",R),clearInterval(z)}},[g]),b.useEffect(()=>{if(typeof window>"u")return;const R=new URLSearchParams(window.location.search);(R.has("theme-viewer")||R.has("tv")||R.has("themes")||R.has("theme-lab"))&&a(!0)},[]);const h=Vs(),v=h.name==="custom-mod"||!!Tc(),x=R=>{o(R),Sv(R,{persist:!0,updateUrl:!0}),p("Live update applied — URL updated for sharing"),setTimeout(()=>p(""),1600)},S=(R,z)=>{const U=A1(i,R,z);x(U)},_=(R,z)=>{const U=A1(i,R,z);x(U)},C=R=>{const z=on[R];if(!z)return;const U=_s(z.customTheme);x(U),p(`Forked from ${z.label}`),setTimeout(()=>p(""),1400)},T=()=>{Yc({updateUrl:!0}),o({}),p("Cleared — back to configured / luxe-dark"),setTimeout(()=>p(""),1400)},A=()=>{const R=window.prompt('Name this mod (e.g. "hot-pink-2026")',"my-mod-"+Date.now());if(!R||!R.trim())return;const z=R.trim(),U={name:z,mod:_s(i)},ae=[...l.filter(Y=>Y.name!==z),U];u(ae),E1(ae),p(`Saved as "${z}"`),setTimeout(()=>p(""),1400)},$=R=>{x(_s(R.mod)),p(`Loaded "${R.name}"`),setTimeout(()=>p(""),1400)},M=R=>{const z=l.filter(U=>U.name!==R);u(z),E1(z)},E=async()=>{try{const R=window.location.href;await navigator.clipboard.writeText(R),p("Shareable URL copied! (contains the ?mod= live overrides)"),setTimeout(()=>p(""),2200)}catch{p("Could not copy — the current URL already encodes your mod")}},B=async()=>{const z=`// Generated by the Quinn Theme Lab — drop into deployments/@domains/quinn.www/root/src/themes/ and register
import type { DeepPartial, ThemeInterface } from '@cocotte/ui-theme';

export const myCustomTheme: DeepPartial<ThemeInterface> = ${JSON.stringify(i,null,2)};

// Then in registry.ts: import it, add to THEME_REGISTRY as e.g. 'my-hot-mod', add to SITE_THEME_NAMES, update aliases if desired.
`;try{await navigator.clipboard.writeText(z),p("TS snippet copied — ready to paste into a new theme file")}catch{window.prompt("Copy this TS:",z)}setTimeout(()=>p(""),2200)},j=c.jsxs("button",{onClick:()=>a(!e),title:e?"Close Theme Lab":"Open Theme Lab (color picker, fork, mods, URL sharing)",style:{position:"fixed",bottom:18,right:18,zIndex:2147483640,background:"rgba(20, 20, 30, 0.92)",color:"#f0e6d3",border:"1px solid rgba(212,175,55,0.4)",borderRadius:999,padding:"8px 14px",fontSize:13,fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",boxShadow:"0 4px 16px rgba(0,0,0,0.5)",display:"flex",alignItems:"center",gap:6},children:["🎨 ",c.jsx("span",{style:{fontSize:12,opacity:.9},children:e?"Close lab":"Theme Lab"})]});return e?c.jsxs(c.Fragment,{children:[j,c.jsxs("div",{style:{position:"fixed",top:12,right:12,width:360,maxHeight:"calc(100vh - 24px)",overflow:"auto",zIndex:2147483641,background:"rgba(10,10,15,0.96)",color:"#f0e6d3",border:"1px solid rgba(212,175,55,0.35)",borderRadius:12,boxShadow:"0 10px 40px rgba(0,0,0,0.7)",fontFamily:'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:13,lineHeight:1.4},children:[c.jsxs("div",{style:{padding:"10px 14px",borderBottom:"1px solid rgba(212,175,55,0.2)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(0,0,0,0.3)"},children:[c.jsxs("div",{children:[c.jsx("strong",{style:{fontSize:15,letterSpacing:"0.3px"},children:"Theme Lab"}),c.jsx("div",{style:{fontSize:10,opacity:.6,marginTop:1},children:"URL-powered • live • forkable"})]}),c.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[c.jsx("button",{onClick:E,style:{fontSize:11,padding:"2px 8px",borderRadius:6,border:"1px solid rgba(212,175,55,0.3)",background:"transparent",color:"inherit",cursor:"pointer"},children:"Share URL"}),c.jsx("button",{onClick:()=>a(!1),style:{fontSize:16,lineHeight:1,padding:"0 6px",background:"transparent",border:"none",color:"#f0e6d3",cursor:"pointer"},children:"×"})]})]}),c.jsxs("div",{style:{padding:12},children:[c.jsx("div",{style:{fontSize:11,minHeight:16,color:"#c9b38a",marginBottom:8},children:m||(v?"Editing live custom mod":`Active: ${h.label}`)}),c.jsxs("div",{style:{marginBottom:12},children:[c.jsx("div",{style:{fontSize:11,fontWeight:600,marginBottom:6,opacity:.7},children:"START FROM / FORK"}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:6},children:bs.map(R=>{const z=on[R],U=Li(z.customTheme,"colors.primary.main")||"#D4AF37",ae=Li(z.customTheme,"colors.accent.main")||"#C77DBA",Y=Li(z.customTheme,"colors.background.primary")||"#0a0a0f";return c.jsxs("button",{onClick:()=>C(R),style:{textAlign:"left",padding:6,borderRadius:8,border:"1px solid rgba(212,175,55,0.25)",background:Y,color:"#f0e6d3",cursor:"pointer",fontSize:10},title:`Fork ${z.label}`,children:[c.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center",marginBottom:3},children:[c.jsx("div",{style:{width:14,height:14,borderRadius:3,background:U,border:"1px solid rgba(255,255,255,0.2)"}}),c.jsx("div",{style:{width:14,height:14,borderRadius:3,background:ae,border:"1px solid rgba(255,255,255,0.2)"}})]}),c.jsx("div",{style:{fontSize:10,fontWeight:500,lineHeight:1.1},children:z.label})]},R)})})]}),c.jsxs("div",{style:{marginBottom:10},children:[c.jsx("div",{style:{fontSize:11,fontWeight:600,marginBottom:6,opacity:.7},children:"LIVE COLOR TWEAKS (instant on site)"}),b8.map(({label:R,path:z})=>{const U=Li(i,z)||Li(on["luxe-dark"].customTheme,z)||"#888888";return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[c.jsx("div",{style:{width:128,fontSize:11,opacity:.85,flexShrink:0},children:R}),c.jsx("input",{type:"color",value:U.startsWith("#")?U:"#888888",onChange:ae=>S(z,ae.target.value),style:{width:36,height:22,padding:0,border:"none",background:"transparent",cursor:"pointer"}}),c.jsx("input",{type:"text",value:U,onChange:ae=>S(z,ae.target.value),style:{flex:1,fontSize:11,fontFamily:"monospace",background:"rgba(255,255,255,0.06)",color:"inherit",border:"1px solid rgba(212,175,55,0.2)",borderRadius:4,padding:"2px 6px"}})]},z)})]}),c.jsxs("div",{style:{marginBottom:10},children:[c.jsx("div",{style:{fontSize:11,fontWeight:600,marginBottom:4,opacity:.7},children:"TYPOGRAPHY"}),y8.map(({label:R,path:z})=>{const U=Li(i,z)||"";return c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:3},children:[c.jsx("div",{style:{width:128,fontSize:11,opacity:.85},children:R}),c.jsx("input",{type:"text",value:U,placeholder:"font stack...",onChange:ae=>_(z,ae.target.value),style:{flex:1,fontSize:11,fontFamily:"monospace",background:"rgba(255,255,255,0.06)",color:"inherit",border:"1px solid rgba(212,175,55,0.2)",borderRadius:4,padding:"2px 6px"}})]},z)}),c.jsx("div",{style:{fontSize:9,opacity:.5,marginTop:2},children:'Example: "Playfair Display, Georgia, serif" or "system-ui, sans-serif"'})]}),c.jsxs("div",{style:{marginBottom:8},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[c.jsx("div",{style:{fontSize:11,fontWeight:600,opacity:.7},children:"MY MODS (local)"}),c.jsx("button",{onClick:A,style:{fontSize:10,padding:"1px 6px",borderRadius:4,border:"1px solid rgba(212,175,55,0.3)",background:"rgba(212,175,55,0.1)",color:"inherit",cursor:"pointer"},children:"+ Save current"})]}),l.length===0&&c.jsx("div",{style:{fontSize:10,opacity:.5},children:'No saved mods yet. Fork a base then "Save current".'}),l.map((R,z)=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3,fontSize:11},children:[c.jsx("button",{onClick:()=>$(R),style:{flex:1,textAlign:"left",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(212,175,55,0.15)",borderRadius:4,padding:"2px 6px",color:"inherit",cursor:"pointer"},children:R.name}),c.jsx("button",{onClick:()=>M(R.name),style:{fontSize:10,opacity:.6,background:"transparent",border:"none",color:"inherit",cursor:"pointer"},children:"del"})]},z))]}),c.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:6},children:[c.jsx("button",{onClick:T,style:{fontSize:11,padding:"4px 8px",borderRadius:6,border:"1px solid rgba(212,175,55,0.3)",background:"transparent",color:"inherit",cursor:"pointer"},children:"Reset mod"}),c.jsx("button",{onClick:B,style:{fontSize:11,padding:"4px 8px",borderRadius:6,border:"1px solid rgba(212,175,55,0.3)",background:"transparent",color:"inherit",cursor:"pointer"},children:"Export TS snippet"}),c.jsx("button",{onClick:E,style:{fontSize:11,padding:"4px 8px",borderRadius:6,border:"1px solid rgba(212,175,55,0.3)",background:"transparent",color:"inherit",cursor:"pointer"},children:"Copy share URL"}),c.jsx("button",{onClick:()=>{Yc({updateUrl:!0}),o({})},style:{fontSize:11,padding:"4px 8px",borderRadius:6,border:"1px solid rgba(212,175,55,0.3)",background:"transparent",color:"inherit",cursor:"pointer"},children:"Clear everything"})]}),c.jsxs("div",{style:{marginTop:10,fontSize:9,opacity:.55,borderTop:"1px solid rgba(212,175,55,0.15)",paddingTop:6},children:["Edits are client-only previews. To persist a new named theme, use Export TS and add it to ",c.jsx("code",{children:"registry.ts"}),". The admin ",c.jsx("strong",{children:"Site Theme"})," setting controls the default for normal visitors."]})]})]})]}):j}function yr(){const e=iT(),a=oT(80);return b.useMemo(()=>({button:{hover:()=>e("button-hover"),click:()=>e("button-click")},nav:{hover:()=>e("nav-hover"),click:()=>e("button-click")},modal:{open:()=>e("modal-open"),close:()=>e("modal-close")},panel:{open:()=>e("panel-open"),close:()=>e("panel-close")},form:{input:()=>a("form-input"),error:()=>e("form-error"),success:()=>e("registration-success")},page:{transition:()=>e("page-transition")},quadrant:{click:()=>e("quadrant-click")}}),[e,a])}const w8="modulepreload",S8=function(e){return"/"+e},R1={},Ne=function(a,i,o){let l=Promise.resolve();if(i&&i.length>0){let m=function(h){return Promise.all(h.map(v=>Promise.resolve(v).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),g=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));l=m(i.map(h=>{if(h=S8(h),h in R1)return;R1[h]=!0;const v=h.endsWith(".css"),x=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${x}`))return;const S=document.createElement("link");if(S.rel=v?"stylesheet":w8,v||(S.as="script"),S.crossOrigin="",S.href=h,g&&S.setAttribute("nonce",g),document.head.appendChild(S),v)return new Promise((_,C)=>{S.addEventListener("load",_),S.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${h}`)))})}))}function u(m){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=m,window.dispatchEvent(p),!p.defaultPrevented)throw m}return l.then(m=>{for(const p of m||[])p.status==="rejected"&&u(p.reason);return a().catch(u)})};/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var th=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,_v=/^[\\/]{2}/;function k8(e,a){return a+e.replace(/\\/g,"/")}var z1="popstate";function M1(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function _8(e={}){function a(o,l){var h;let u=(h=l.state)==null?void 0:h.masked,{pathname:m,search:p,hash:g}=u||o.location;return Zm("",{pathname:m,search:p,hash:g},l.state&&l.state.usr||null,l.state&&l.state.key||"default",u?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function i(o,l){return typeof l=="string"?l:Ns(l)}return T8(a,i,null,e)}function mt(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function Bn(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function $8(){return Math.random().toString(36).substring(2,10)}function D1(e,a){return{usr:e.state,key:e.key,idx:a,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Zm(e,a,i=null,o,l){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof a=="string"?oo(a):a,state:i,key:a&&a.key||o||$8(),mask:l}}function Ns({pathname:e="/",search:a="",hash:i=""}){return a&&a!=="?"&&(e+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function oo(e){let a={};if(e){let i=e.indexOf("#");i>=0&&(a.hash=e.substring(i),e=e.substring(0,i));let o=e.indexOf("?");o>=0&&(a.search=e.substring(o),e=e.substring(0,o)),e&&(a.pathname=e)}return a}function T8(e,a,i,o={}){let{window:l=document.defaultView,v5Compat:u=!1}=o,m=l.history,p="POP",g=null,h=v();h==null&&(h=0,m.replaceState({...m.state,idx:h},""));function v(){return(m.state||{idx:null}).idx}function x(){p="POP";let A=v(),$=A==null?null:A-h;h=A,g&&g({action:p,location:T.location,delta:$})}function S(A,$){p="PUSH";let M=M1(A)?A:Zm(T.location,A,$);h=v()+1;let E=D1(M,h),B=T.createHref(M.mask||M);try{m.pushState(E,"",B)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;l.location.assign(B)}u&&g&&g({action:p,location:T.location,delta:1})}function _(A,$){p="REPLACE";let M=M1(A)?A:Zm(T.location,A,$);h=v();let E=D1(M,h),B=T.createHref(M.mask||M);m.replaceState(E,"",B),u&&g&&g({action:p,location:T.location,delta:0})}function C(A){return j8(l,A)}let T={get action(){return p},get location(){return e(l,m)},listen(A){if(g)throw new Error("A history only accepts one active listener");return l.addEventListener(z1,x),g=A,()=>{l.removeEventListener(z1,x),g=null}},createHref(A){return a(l,A)},createURL:C,encodeLocation(A){let $=C(A);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:S,replace:_,go(A){return m.go(A)}};return T}function j8(e,a,i=!1){let o="http://localhost";e&&(o=e.location.origin!=="null"?e.location.origin:e.location.href),mt(o,"No window.location.(origin|href) available to create URL");let l=typeof a=="string"?a:Ns(a);return l=l.replace(/ $/,"%20"),!i&&_v.test(l)&&(l=o+l),new URL(l,o)}function $v(e,a,i="/"){return C8(e,a,i,!1)}function C8(e,a,i,o,l){let u=typeof a=="string"?oo(a):a,m=Ea(u.pathname||"/",i);if(m==null)return null;let p=A8(e),g=null,h=V8(m);for(let v=0;g==null&&v<p.length;++v)g=q8(p[v],h,o);return g}function A8(e){let a=Tv(e);return E8(a),a}function Tv(e,a=[],i=[],o="",l=!1){let u=(m,p,g=l,h)=>{let v={relativePath:h===void 0?m.path||"":h,caseSensitive:m.caseSensitive===!0,childrenIndex:p,route:m};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(o)&&g)return;mt(v.relativePath.startsWith(o),`Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(o.length)}let x=In([o,v.relativePath]),S=i.concat(v);m.children&&m.children.length>0&&(mt(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Tv(m.children,a,S,x,g)),!(m.path==null&&!m.index)&&a.push({path:x,score:L8(x,m.index),routesMeta:S.map((_,C)=>{let[T,A]=Av(_.relativePath,_.caseSensitive,C===S.length-1);return{..._,matcher:T,compiledParams:A}})})};return e.forEach((m,p)=>{var g;if(m.path===""||!((g=m.path)!=null&&g.includes("?")))u(m,p);else for(let h of jv(m.path))u(m,p,!0,h)}),a}function jv(e){let a=e.split("/");if(a.length===0)return[];let[i,...o]=a,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(o.length===0)return l?[u,""]:[u];let m=jv(o.join("/")),p=[];return p.push(...m.map(g=>g===""?u:[u,g].join("/"))),l&&p.push(...m),p.map(g=>e.startsWith("/")&&g===""?"/":g)}function E8(e){e.sort((a,i)=>a.score!==i.score?i.score-a.score:B8(a.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var R8=/^:[\w-]+$/,z8=3,M8=2,D8=1,O8=10,N8=-2,O1=e=>e==="*";function L8(e,a){let i=e.split("/"),o=i.length;return i.some(O1)&&(o+=N8),a&&(o+=M8),i.filter(l=>!O1(l)).reduce((l,u)=>l+(R8.test(u)?z8:u===""?D8:O8),o)}function B8(e,a){return e.length===a.length&&e.slice(0,-1).every((o,l)=>o===a[l])?e[e.length-1]-a[a.length-1]:0}function q8(e,a,i=!1){let{routesMeta:o}=e,l={},u="/",m=[];for(let p=0;p<o.length;++p){let g=o[p],h=p===o.length-1,v=u==="/"?a:a.slice(u.length)||"/",x={path:g.relativePath,caseSensitive:g.caseSensitive,end:h},S=g.matcher&&g.compiledParams?Cv(x,v,g.matcher,g.compiledParams):Ic(x,v),_=g.route;if(!S&&h&&i&&!o[o.length-1].route.index&&(S=Ic({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},v)),!S)return null;Object.assign(l,S.params),m.push({params:l,pathname:In([u,S.pathname]),pathnameBase:H8(In([u,S.pathnameBase])),route:_}),S.pathnameBase!=="/"&&(u=In([u,S.pathnameBase]))}return m}function Ic(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,o]=Av(e.path,e.caseSensitive,e.end);return Cv(e,a,i,o)}function Cv(e,a,i,o){let l=a.match(i);if(!l)return null;let u=l[0],m=u.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:o.reduce((h,{paramName:v,isOptional:x},S)=>{if(v==="*"){let C=p[S]||"";m=u.slice(0,u.length-C.length).replace(/(.)\/+$/,"$1")}const _=p[S];return x&&!_?h[v]=void 0:h[v]=(_||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:m,pattern:e}}function Av(e,a=!1,i=!0){Bn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,p,g,h,v)=>{if(o.push({paramName:p,isOptional:g!=null}),g){let x=v.charAt(h+m.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,a?void 0:"i"),o]}function V8(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Bn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),e}}function Ea(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,o=e.charAt(i);return o&&o!=="/"?null:e.slice(i)||"/"}function U8(e,a="/"){let{pathname:i,search:o="",hash:l=""}=typeof e=="string"?oo(e):e,u;return i?(i=Ev(i),i.startsWith("/")?u=N1(i.substring(1),"/"):u=N1(i,a)):u=a,{pathname:u,search:P8(o),hash:G8(l)}}function N1(e,a){let i=Xc(a).split("/");return e.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function sm(e,a,i,o){return`Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function F8(e){return e.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function nh(e){let a=F8(e);return a.map((i,o)=>o===a.length-1?i.pathname:i.pathnameBase)}function gu(e,a,i,o=!1){let l;typeof e=="string"?l=oo(e):(l={...e},mt(!l.pathname||!l.pathname.includes("?"),sm("?","pathname","search",l)),mt(!l.pathname||!l.pathname.includes("#"),sm("#","pathname","hash",l)),mt(!l.search||!l.search.includes("#"),sm("#","search","hash",l)));let u=e===""||l.pathname==="",m=u?"/":l.pathname,p;if(m==null)p=i;else{let x=a.length-1;if(!o&&m.startsWith("..")){let S=m.split("/");for(;S[0]==="..";)S.shift(),x-=1;l.pathname=S.join("/")}p=x>=0?a[x]:"/"}let g=U8(l,p),h=m&&m!=="/"&&m.endsWith("/"),v=(u||m===".")&&i.endsWith("/");return!g.pathname.endsWith("/")&&(h||v)&&(g.pathname+="/"),g}var Ev=e=>e.replace(/[\\/]{2,}/g,"/"),In=e=>Ev(e.join("/")),Xc=e=>e.replace(/\/+$/,""),H8=e=>Xc(e).replace(/^\/*/,"/"),P8=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,G8=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Y8=class{constructor(e,a,i,o=!1){this.status=e,this.statusText=a||"",this.internal=o,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function I8(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function X8(e){let a=e.map(i=>i.route.path).filter(Boolean);return In(a)||"/"}var Rv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function zv(e,a){let i=e;if(typeof i!="string"||!th.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let o=i,l=!1;if(Rv)try{let u=new URL(window.location.href),m=_v.test(i)?new URL(k8(i,u.protocol)):new URL(i),p=Ea(m.pathname,a);m.origin===u.origin&&p!=null?i=p+m.search+m.hash:l=!0}catch{Bn(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mv=["POST","PUT","PATCH","DELETE"];new Set(Mv);var K8=["GET",...Mv];new Set(K8);var W8=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Z8(e){try{return W8.includes(new URL(e).protocol)}catch{return!1}}var so=b.createContext(null);so.displayName="DataRouter";var bu=b.createContext(null);bu.displayName="DataRouterState";var Dv=b.createContext(!1);function Q8(){return b.useContext(Dv)}var Ov=b.createContext({isTransitioning:!1});Ov.displayName="ViewTransition";var J8=b.createContext(new Map);J8.displayName="Fetchers";var ej=b.createContext(null);ej.displayName="Await";var Sn=b.createContext(null);Sn.displayName="Navigation";var Us=b.createContext(null);Us.displayName="Location";var Wn=b.createContext({outlet:null,matches:[],isDataRoute:!1});Wn.displayName="Route";var ah=b.createContext(null);ah.displayName="RouteError";var Nv="REACT_ROUTER_ERROR",tj="REDIRECT",nj="ROUTE_ERROR_RESPONSE";function aj(e){if(e.startsWith(`${Nv}:${tj}:{`))try{let a=JSON.parse(e.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function rj(e){if(e.startsWith(`${Nv}:${nj}:{`))try{let a=JSON.parse(e.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new Y8(a.status,a.statusText,a.data)}catch{}}function ij(e,{relative:a}={}){mt(lo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=b.useContext(Sn),{hash:l,pathname:u,search:m}=Fs(e,{relative:a}),p=u;return i!=="/"&&(p=u==="/"?i:In([i,u])),o.createHref({pathname:p,search:m,hash:l})}function lo(){return b.useContext(Us)!=null}function Nt(){return mt(lo(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Us).location}var Lv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bv(e){b.useContext(Sn).static||b.useLayoutEffect(e)}function co(){let{isDataRoute:e}=b.useContext(Wn);return e?xj():oj()}function oj(){mt(lo(),"useNavigate() may be used only in the context of a <Router> component.");let e=b.useContext(so),{basename:a,navigator:i}=b.useContext(Sn),{matches:o}=b.useContext(Wn),{pathname:l}=Nt(),u=JSON.stringify(nh(o)),m=b.useRef(!1);return Bv(()=>{m.current=!0}),b.useCallback((g,h={})=>{if(Bn(m.current,Lv),!m.current)return;if(typeof g=="number"){i.go(g);return}let v=gu(g,JSON.parse(u),l,h.relative==="path");e==null&&a!=="/"&&(v.pathname=v.pathname==="/"?a:In([a,v.pathname])),(h.replace?i.replace:i.push)(v,h.state,h)},[a,i,u,l,e])}b.createContext(null);function sj(){let{matches:e}=b.useContext(Wn),a=e[e.length-1];return(a==null?void 0:a.params)??{}}function Fs(e,{relative:a}={}){let{matches:i}=b.useContext(Wn),{pathname:o}=Nt(),l=JSON.stringify(nh(i));return b.useMemo(()=>gu(e,JSON.parse(l),o,a==="path"),[e,l,o,a])}function lj(e,a){return qv(e,a)}function qv(e,a,i){var A;mt(lo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=b.useContext(Sn),{matches:l}=b.useContext(Wn),u=l[l.length-1],m=u?u.params:{},p=u?u.pathname:"/",g=u?u.pathnameBase:"/",h=u&&u.route;{let $=h&&h.path||"";Uv(p,!h||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let v=Nt(),x;if(a){let $=typeof a=="string"?oo(a):a;mt(g==="/"||((A=$.pathname)==null?void 0:A.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${$.pathname}" was given in the \`location\` prop.`),x=$}else x=v;let S=x.pathname||"/",_=S;if(g!=="/"){let $=g.replace(/^\//,"").split("/");_="/"+S.replace(/^\//,"").split("/").slice($.length).join("/")}let C=i&&i.state.matches.length?i.state.matches.map($=>Object.assign($,{route:i.manifest[$.route.id]||$.route})):$v(e,{pathname:_});Bn(h||C!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Bn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=mj(C&&C.map($=>Object.assign({},$,{params:Object.assign({},m,$.params),pathname:In([g,o.encodeLocation?o.encodeLocation($.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?g:In([g,o.encodeLocation?o.encodeLocation($.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:$.pathnameBase])})),l,i);return a&&T?b.createElement(Us.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...x},navigationType:"POP"}},T):T}function cj(){let e=yj(),a=I8(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},m=null;return console.error("Error handled by React Router default ErrorBoundary:",e),m=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:u},"ErrorBoundary")," or"," ",b.createElement("code",{style:u},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},a),i?b.createElement("pre",{style:l},i):null,m)}var uj=b.createElement(cj,null),Vv=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location||a.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:a.error,location:a.location,revalidation:e.revalidation||a.revalidation}}componentDidCatch(e,a){this.props.onError?this.props.onError(e,a):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const i=rj(e.digest);i&&(e=i)}let a=e!==void 0?b.createElement(Wn.Provider,{value:this.props.routeContext},b.createElement(ah.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?b.createElement(dj,{error:e},a):a}};Vv.contextType=Dv;var lm=new WeakMap;function dj({children:e,error:a}){let{basename:i}=b.useContext(Sn);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let o=aj(a.digest);if(o){let l=lm.get(a);if(l)throw l;let u=zv(o.location,i),m=u.absoluteURL||u.to;if(Z8(m))throw new Error("Invalid redirect location");if(Rv&&!lm.get(a))if(u.isExternal||o.reloadDocument)window.location.href=m;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:o.replace}));throw lm.set(a,p),p}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m}`})}}return e}function fj({routeContext:e,match:a,children:i}){let o=b.useContext(so);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),b.createElement(Wn.Provider,{value:e},i)}function mj(e,a=[],i){let o=i==null?void 0:i.state;if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let l=e,u=o==null?void 0:o.errors;if(u!=null){let v=l.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);mt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,v+1))}let m=!1,p=-1;if(i&&o){m=o.renderFallback;for(let v=0;v<l.length;v++){let x=l[v];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=v),x.route.id){let{loaderData:S,errors:_}=o,C=x.route.loader&&!S.hasOwnProperty(x.route.id)&&(!_||_[x.route.id]===void 0);if(x.route.lazy||C){i.isStatic&&(m=!0),p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}}let g=i==null?void 0:i.onError,h=o&&g?(v,x)=>{var S,_;g(v,{location:o.location,params:((_=(S=o.matches)==null?void 0:S[0])==null?void 0:_.params)??{},pattern:X8(o.matches),errorInfo:x})}:void 0;return l.reduceRight((v,x,S)=>{let _,C=!1,T=null,A=null;o&&(_=u&&x.route.id?u[x.route.id]:void 0,T=x.route.errorElement||uj,m&&(p<0&&S===0?(Uv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,A=null):p===S&&(C=!0,A=x.route.hydrateFallbackElement||null)));let $=a.concat(l.slice(0,S+1)),M=()=>{let E;return _?E=T:C?E=A:x.route.Component?E=b.createElement(x.route.Component,null):x.route.element?E=x.route.element:E=v,b.createElement(fj,{match:x,routeContext:{outlet:v,matches:$,isDataRoute:o!=null},children:E})};return o&&(x.route.ErrorBoundary||x.route.errorElement||S===0)?b.createElement(Vv,{location:o.location,revalidation:o.revalidation,component:T,error:_,children:M(),routeContext:{outlet:null,matches:$,isDataRoute:!0},onError:h}):M()},null)}function rh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pj(e){let a=b.useContext(so);return mt(a,rh(e)),a}function hj(e){let a=b.useContext(bu);return mt(a,rh(e)),a}function gj(e){let a=b.useContext(Wn);return mt(a,rh(e)),a}function ih(e){let a=gj(e),i=a.matches[a.matches.length-1];return mt(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function bj(){return ih("useRouteId")}function yj(){var o;let e=b.useContext(ah),a=hj("useRouteError"),i=ih("useRouteError");return e!==void 0?e:(o=a.errors)==null?void 0:o[i]}function xj(){let{router:e}=pj("useNavigate"),a=ih("useNavigate"),i=b.useRef(!1);return Bv(()=>{i.current=!0}),b.useCallback(async(l,u={})=>{Bn(i.current,Lv),i.current&&(typeof l=="number"?await e.navigate(l):await e.navigate(l,{fromRouteId:a,...u}))},[e,a])}var L1={};function Uv(e,a,i){!a&&!L1[e]&&(L1[e]=!0,Bn(!1,i))}b.memo(vj);function vj({routes:e,manifest:a,future:i,state:o,isStatic:l,onError:u}){return qv(e,void 0,{manifest:a,state:o,isStatic:l,onError:u})}function VN({to:e,replace:a,state:i,relative:o}){mt(lo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=b.useContext(Sn);Bn(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=b.useContext(Wn),{pathname:m}=Nt(),p=co(),g=gu(e,nh(u),m,o==="path"),h=JSON.stringify(g);return b.useEffect(()=>{p(JSON.parse(h),{replace:a,state:i,relative:o})},[p,h,o,a,i]),null}function Pn(e){mt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wj({basename:e="/",children:a=null,location:i,navigationType:o="POP",navigator:l,static:u=!1,useTransitions:m}){mt(!lo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=e.replace(/^\/*/,"/"),g=b.useMemo(()=>({basename:p,navigator:l,static:u,useTransitions:m,future:{}}),[p,l,u,m]);typeof i=="string"&&(i=oo(i));let{pathname:h="/",search:v="",hash:x="",state:S=null,key:_="default",mask:C}=i,T=b.useMemo(()=>{let A=Ea(h,p);return A==null?null:{location:{pathname:A,search:v,hash:x,state:S,key:_,mask:C},navigationType:o}},[p,h,v,x,S,_,o,C]);return Bn(T!=null,`<Router basename="${p}"> is not able to match the URL "${h}${v}${x}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:b.createElement(Sn.Provider,{value:g},b.createElement(Us.Provider,{children:a,value:T}))}function Fv({children:e,location:a}){return lj(Qm(e),a)}function Qm(e,a=[]){let i=[];return b.Children.forEach(e,(o,l)=>{if(!b.isValidElement(o))return;let u=[...a,l];if(o.type===b.Fragment){i.push.apply(i,Qm(o.props.children,u));return}mt(o.type===Pn,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),mt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let m={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(m.children=Qm(o.props.children,u)),i.push(m)}),i}var jc="get",Cc="application/x-www-form-urlencoded";function yu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Sj(e){return yu(e)&&e.tagName.toLowerCase()==="button"}function kj(e){return yu(e)&&e.tagName.toLowerCase()==="form"}function _j(e){return yu(e)&&e.tagName.toLowerCase()==="input"}function $j(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Tj(e,a){return e.button===0&&(!a||a==="_self")&&!$j(e)}function Jm(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((a,i)=>{let o=e[i];return a.concat(Array.isArray(o)?o.map(l=>[i,l]):[[i,o]])},[]))}function jj(e,a){let i=Jm(e);return a&&a.forEach((o,l)=>{i.has(l)||a.getAll(l).forEach(u=>{i.append(l,u)})}),i}var hc=null;function Cj(){if(hc===null)try{new FormData(document.createElement("form"),0),hc=!1}catch{hc=!0}return hc}var Aj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function cm(e){return e!=null&&!Aj.has(e)?(Bn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cc}"`),null):e}function Ej(e,a){let i,o,l,u,m;if(kj(e)){let p=e.getAttribute("action");o=p?Ea(p,a):null,i=e.getAttribute("method")||jc,l=cm(e.getAttribute("enctype"))||Cc,u=new FormData(e)}else if(Sj(e)||_j(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=e.getAttribute("formaction")||p.getAttribute("action");if(o=g?Ea(g,a):null,i=e.getAttribute("formmethod")||p.getAttribute("method")||jc,l=cm(e.getAttribute("formenctype"))||cm(p.getAttribute("enctype"))||Cc,u=new FormData(p,e),!Cj()){let{name:h,type:v,value:x}=e;if(v==="image"){let S=h?`${h}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else h&&u.append(h,x)}}else{if(yu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=jc,o=null,l=Cc,m=e}return u&&l==="text/plain"&&(m=u,u=void 0),{action:o,method:i.toLowerCase(),encType:l,formData:u,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function oh(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function Hv(e,a,i,o){let l=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${o}`:l.pathname=`${l.pathname}.${o}`:l.pathname==="/"?l.pathname=`_root.${o}`:a&&Ea(l.pathname,a)==="/"?l.pathname=`${Xc(a)}/_root.${o}`:l.pathname=`${Xc(l.pathname)}.${o}`,l}async function Rj(e,a){if(e.id in a)return a[e.id];try{let i=await import(e.module);return a[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zj(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Mj(e,a,i){let o=await Promise.all(e.map(async l=>{let u=a.routes[l.route.id];if(u){let m=await Rj(u,i);return m.links?m.links():[]}return[]}));return Lj(o.flat(1).filter(zj).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function B1(e,a,i,o,l,u){let m=(g,h)=>i[h]?g.route.id!==i[h].route.id:!0,p=(g,h)=>{var v;return i[h].pathname!==g.pathname||((v=i[h].route.path)==null?void 0:v.endsWith("*"))&&i[h].params["*"]!==g.params["*"]};return u==="assets"?a.filter((g,h)=>m(g,h)||p(g,h)):u==="data"?a.filter((g,h)=>{var x;let v=o.routes[g.route.id];if(!v||!v.hasLoader)return!1;if(m(g,h)||p(g,h))return!0;if(g.route.shouldRevalidate){let S=g.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Dj(e,a,{includeHydrateFallback:i}={}){return Oj(e.map(o=>{let l=a.routes[o.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Oj(e){return[...new Set(e)]}function Nj(e){let a={},i=Object.keys(e).sort();for(let o of i)a[o]=e[o];return a}function Lj(e,a){let i=new Set;return new Set(a),e.reduce((o,l)=>{let u=JSON.stringify(Nj(l));return i.has(u)||(i.add(u),o.push({key:u,link:l})),o},[])}function sh(){let e=b.useContext(so);return oh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Bj(){let e=b.useContext(bu);return oh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var lh=b.createContext(void 0);lh.displayName="FrameworkContext";function xu(){let e=b.useContext(lh);return oh(e,"You must render this element inside a <HydratedRouter> element"),e}function qj(e,a){let i=b.useContext(lh),[o,l]=b.useState(!1),[u,m]=b.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:h,onMouseLeave:v,onTouchStart:x}=a,S=b.useRef(null);b.useEffect(()=>{if(e==="render"&&m(!0),e==="viewport"){let T=$=>{$.forEach(M=>{m(M.isIntersecting)})},A=new IntersectionObserver(T,{threshold:.5});return S.current&&A.observe(S.current),()=>{A.disconnect()}}},[e]),b.useEffect(()=>{if(o){let T=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(T)}}},[o]);let _=()=>{l(!0)},C=()=>{l(!1),m(!1)};return i?e!=="intent"?[u,S,{}]:[u,S,{onFocus:cs(p,_),onBlur:cs(g,C),onMouseEnter:cs(h,_),onMouseLeave:cs(v,C),onTouchStart:cs(x,_)}]:[!1,S,{}]}function cs(e,a){return i=>{e&&e(i),i.defaultPrevented||a(i)}}function Vj({page:e,...a}){let i=Q8(),{nonce:o}=xu(),{router:l}=sh(),u=b.useMemo(()=>$v(l.routes,e,l.basename),[l.routes,e,l.basename]);return u?(a.nonce==null&&o&&(a={...a,nonce:o}),i?b.createElement(Fj,{page:e,matches:u,...a}):b.createElement(Hj,{page:e,matches:u,...a})):null}function Uj(e){let{manifest:a,routeModules:i}=xu(),[o,l]=b.useState([]);return b.useEffect(()=>{let u=!1;return Mj(e,a,i).then(m=>{u||l(m)}),()=>{u=!0}},[e,a,i]),o}function Fj({page:e,matches:a,...i}){let o=Nt(),{future:l}=xu(),{basename:u}=sh(),m=b.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let p=Hv(e,u,l.v8_trailingSlashAwareDataRequests,"rsc"),g=!1,h=[];for(let v of a)typeof v.route.shouldRevalidate=="function"?g=!0:h.push(v.route.id);return g&&h.length>0&&p.searchParams.set("_routes",h.join(",")),[p.pathname+p.search]},[u,l.v8_trailingSlashAwareDataRequests,e,o,a]);return b.createElement(b.Fragment,null,m.map(p=>b.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...i})))}function Hj({page:e,matches:a,...i}){let o=Nt(),{future:l,manifest:u,routeModules:m}=xu(),{basename:p}=sh(),{loaderData:g,matches:h}=Bj(),v=b.useMemo(()=>B1(e,a,h,u,o,"data"),[e,a,h,u,o]),x=b.useMemo(()=>B1(e,a,h,u,o,"assets"),[e,a,h,u,o]),S=b.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let T=new Set,A=!1;if(a.forEach(M=>{var B;let E=u.routes[M.route.id];!E||!E.hasLoader||(!v.some(j=>j.route.id===M.route.id)&&M.route.id in g&&((B=m[M.route.id])!=null&&B.shouldRevalidate)||E.hasClientLoader?A=!0:T.add(M.route.id))}),T.size===0)return[];let $=Hv(e,p,l.v8_trailingSlashAwareDataRequests,"data");return A&&T.size>0&&$.searchParams.set("_routes",a.filter(M=>T.has(M.route.id)).map(M=>M.route.id).join(",")),[$.pathname+$.search]},[p,l.v8_trailingSlashAwareDataRequests,g,o,u,v,a,e,m]),_=b.useMemo(()=>Dj(x,u),[x,u]),C=Uj(x);return b.createElement(b.Fragment,null,S.map(T=>b.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),_.map(T=>b.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),C.map(({key:T,link:A})=>b.createElement("link",{key:T,nonce:i.nonce,...A,crossOrigin:A.crossOrigin??i.crossOrigin})))}function Pj(...e){return a=>{e.forEach(i=>{typeof i=="function"?i(a):i!=null&&(i.current=a)})}}var Gj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gj&&(window.__reactRouterVersion="7.18.1")}catch{}function Pv({basename:e,children:a,useTransitions:i,window:o}){let l=b.useRef();l.current==null&&(l.current=_8({window:o,v5Compat:!0}));let u=l.current,[m,p]=b.useState({action:u.action,location:u.location}),g=b.useCallback(h=>{i===!1?p(h):b.startTransition(()=>p(h))},[i]);return b.useLayoutEffect(()=>u.listen(g),[u,g]),b.createElement(wj,{basename:e,children:a,location:m.location,navigationType:m.action,navigator:u,useTransitions:i})}var it=b.forwardRef(function({onClick:a,discover:i="render",prefetch:o="none",relative:l,reloadDocument:u,replace:m,mask:p,state:g,target:h,to:v,preventScrollReset:x,viewTransition:S,defaultShouldRevalidate:_,...C},T){let{basename:A,navigator:$,useTransitions:M}=b.useContext(Sn),E=typeof v=="string"&&th.test(v),B=zv(v,A);v=B.to;let j=ij(v,{relative:l}),R=Nt(),z=null;if(p){let _e=gu(p,[],R.mask?R.mask.pathname:"/",!0);A!=="/"&&(_e.pathname=_e.pathname==="/"?A:In([A,_e.pathname])),z=$.createHref(_e)}let[U,ae,Y]=qj(o,C),Q=Kj(v,{replace:m,mask:p,state:g,target:h,preventScrollReset:x,relative:l,viewTransition:S,defaultShouldRevalidate:_,useTransitions:M});function ie(_e){a&&a(_e),_e.defaultPrevented||Q(_e)}let ve=!(B.isExternal||u),X=b.createElement("a",{...C,...Y,href:(ve?z:void 0)||B.absoluteURL||j,onClick:ve?ie:a,ref:Pj(T,ae),target:h,"data-discover":!E&&i==="render"?"true":void 0});return U&&!E?b.createElement(b.Fragment,null,X,b.createElement(Vj,{page:j})):X});it.displayName="Link";var Yj=b.forwardRef(function({"aria-current":a="page",caseSensitive:i=!1,className:o="",end:l=!1,style:u,to:m,viewTransition:p,children:g,...h},v){let x=Fs(m,{relative:h.relative}),S=Nt(),_=b.useContext(bu),{navigator:C,basename:T}=b.useContext(Sn),A=_!=null&&tC(x)&&p===!0,$=C.encodeLocation?C.encodeLocation(x).pathname:x.pathname,M=S.pathname,E=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;i||(M=M.toLowerCase(),E=E?E.toLowerCase():null,$=$.toLowerCase()),E&&T&&(E=Ea(E,T)||E);const B=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let j=M===$||!l&&M.startsWith($)&&M.charAt(B)==="/",R=E!=null&&(E===$||!l&&E.startsWith($)&&E.charAt($.length)==="/"),z={isActive:j,isPending:R,isTransitioning:A},U=j?a:void 0,ae;typeof o=="function"?ae=o(z):ae=[o,j?"active":null,R?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let Y=typeof u=="function"?u(z):u;return b.createElement(it,{...h,"aria-current":U,className:ae,ref:v,style:Y,to:m,viewTransition:p},typeof g=="function"?g(z):g)});Yj.displayName="NavLink";var Ij=b.forwardRef(({discover:e="render",fetcherKey:a,navigate:i,reloadDocument:o,replace:l,state:u,method:m=jc,action:p,onSubmit:g,relative:h,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:S,..._},C)=>{let{useTransitions:T}=b.useContext(Sn),A=Jj(),$=eC(p,{relative:h}),M=m.toLowerCase()==="get"?"get":"post",E=typeof p=="string"&&th.test(p),B=j=>{if(g&&g(j),j.defaultPrevented)return;j.preventDefault();let R=j.nativeEvent.submitter,z=(R==null?void 0:R.getAttribute("formmethod"))||m,U=()=>A(R||j.currentTarget,{fetcherKey:a,method:z,navigate:i,replace:l,state:u,relative:h,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:S});T&&i!==!1?b.startTransition(()=>U()):U()};return b.createElement("form",{ref:C,method:M,action:$,onSubmit:o?g:B,..._,"data-discover":!E&&e==="render"?"true":void 0})});Ij.displayName="Form";function Xj(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gv(e){let a=b.useContext(so);return mt(a,Xj(e)),a}function Kj(e,{target:a,replace:i,mask:o,state:l,preventScrollReset:u,relative:m,viewTransition:p,defaultShouldRevalidate:g,useTransitions:h}={}){let v=co(),x=Nt(),S=Fs(e,{relative:m});return b.useCallback(_=>{if(Tj(_,a)){_.preventDefault();let C=i!==void 0?i:Ns(x)===Ns(S),T=()=>v(e,{replace:C,mask:o,state:l,preventScrollReset:u,relative:m,viewTransition:p,defaultShouldRevalidate:g});h?b.startTransition(()=>T()):T()}},[x,v,S,i,o,l,a,e,u,m,p,g,h])}function Wj(e){Bn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let a=b.useRef(Jm(e)),i=b.useRef(!1),o=Nt(),l=b.useMemo(()=>jj(o.search,i.current?null:a.current),[o.search]),u=co(),m=b.useCallback((p,g)=>{const h=Jm(typeof p=="function"?p(new URLSearchParams(l)):p);i.current=!0,u("?"+h,g)},[u,l]);return[l,m]}var Zj=0,Qj=()=>`__${String(++Zj)}__`;function Jj(){let{router:e}=Gv("useSubmit"),{basename:a}=b.useContext(Sn),i=bj(),o=e.fetch,l=e.navigate;return b.useCallback(async(u,m={})=>{let{action:p,method:g,encType:h,formData:v,body:x}=Ej(u,a);if(m.navigate===!1){let S=m.fetcherKey||Qj();await o(S,i,m.action||p,{defaultShouldRevalidate:m.defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:v,body:x,formMethod:m.method||g,formEncType:m.encType||h,flushSync:m.flushSync})}else await l(m.action||p,{defaultShouldRevalidate:m.defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:v,body:x,formMethod:m.method||g,formEncType:m.encType||h,replace:m.replace,state:m.state,fromRouteId:i,flushSync:m.flushSync,viewTransition:m.viewTransition})},[o,l,a,i])}function eC(e,{relative:a}={}){let{basename:i}=b.useContext(Sn),o=b.useContext(Wn);mt(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),u={...Fs(e||".",{relative:a})},m=Nt();if(e==null){u.search=m.search;let p=new URLSearchParams(u.search),g=p.getAll("index");if(g.some(v=>v==="")){p.delete("index"),g.filter(x=>x).forEach(x=>p.append("index",x));let v=p.toString();u.search=v?`?${v}`:""}}return(!e||e===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:In([i,u.pathname])),Ns(u)}function tC(e,{relative:a}={}){let i=b.useContext(Ov);mt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Gv("useViewTransitionState"),l=Fs(e,{relative:a});if(!i.isTransitioning)return!1;let u=Ea(i.currentLocation.pathname,o)||i.currentLocation.pathname,m=Ea(i.nextLocation.pathname,o)||i.nextLocation.pathname;return Ic(l.pathname,m)!=null||Ic(l.pathname,u)!=null}var Yv=Sx();class um extends Error{constructor(a){super(`ProtectedRoute: ${a}`),this.name="ProtectedRouteError"}}var q1;(function(e){function a(l){if(l.unauthenticatedRedirect&&l.unauthenticatedFallback)throw new um("Cannot provide both unauthenticatedRedirect and unauthenticatedFallback");if(l.unauthorizedRedirect&&l.unauthorizedFallback)throw new um("Cannot provide both unauthorizedRedirect and unauthorizedFallback")}e.validateMutualExclusivity=a;function i(l){return!(l.requiredRoles&&!l.authState.roles)}e.validateRoleBasedAccess=i;function o(l){if(a(l),!i(l))throw new um("requiredRoles provided but authState.roles is undefined. Role check will always fail.")}e.validateProps=o})(q1||(q1={}));const Iv=b.createContext(null);function nC(e){if((e==null?void 0:e.enabled)===!1)return!1;if((e==null?void 0:e.enabled)===!0)return!0;if(typeof window>"u")return!1;const a=window.location.hostname;return!(a==="localhost"||a==="127.0.0.1"||a.endsWith(".local"))}function aC(){try{const e="usc-analytics-sid";let a=sessionStorage.getItem(e);return a||(a=`s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,10)}`,sessionStorage.setItem(e,a)),a}catch{return`s_${Date.now().toString(36)}`}}function dm(e,a){const i=(e.startsWith("http"),e);try{fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),keepalive:!0,credentials:"same-origin"}).catch(()=>{})}catch{}}function rC({children:e,config:a}){const i=nC(a),o=(a==null?void 0:a.appName)||void 0||"user-site-content",l="production",u=((a==null?void 0:a.apiBaseUrl)??"").replace(/\/$/,""),m=b.useMemo(()=>{const p=(S,_)=>({eventType:S,timestamp:new Date().toISOString(),sessionId:aC(),app:o,appName:o,environment:l,source:{app:o,environment:l},pageUrl:typeof window<"u"?window.location.href:"",path:typeof window<"u"?window.location.pathname:"",themeVariant:VT(),..._});return{track:(S,_)=>{!i||!S||dm(`${u}/analytics/track/${encodeURIComponent(S)}`,p(S,_??{}))},trackInteraction:S=>{if(!i)return;const _=S&&typeof S=="object"?S:{data:S};dm(`${u}/analytics/track/interaction`,p("interaction",_))},trackPageView:S=>{if(!i)return;const _=S??(typeof window<"u"?window.location.pathname:"/");dm(`${u}/analytics/track/pageview`,p("pageview",{path:_,title:typeof document<"u"?document.title:""}))},identify:S=>{}}},[i,o,l,u]);return c.jsx(Iv.Provider,{value:m,children:e})}function Zn(){const e=b.useContext(Iv);return e||{track:()=>{},trackInteraction:()=>{},trackPageView:()=>{},identify:()=>{}}}function iC(){const{trackPageView:e}=Zn(),a=Nt(),i=b.useRef("");b.useEffect(()=>{const o=a.pathname+a.search;o!==i.current&&(i.current=o,e(a.pathname))},[a.pathname,a.search,e])}function UN(e){const{track:a}=Zn(),i=b.useRef({started:!1,completed:!1,fields:new Set}),o=b.useCallback(()=>{i.current.started=!0},[]),l=b.useCallback(()=>{i.current.completed=!0},[]),u=b.useCallback(v=>{v&&i.current.fields.add(v)},[]),m=u,p=b.useCallback(v=>{},[]),g=b.useCallback(()=>({formName:e,fields:Array.from(i.current.fields),started:i.current.started,completed:i.current.completed}),[e]),h=b.useCallback(()=>{i.current={started:!1,completed:!1,fields:new Set}},[]);return b.useEffect(()=>()=>{i.current.started&&!i.current.completed&&a("form_abandon",g())},[a,g]),{markStarted:o,markCompleted:l,markField:u,touchField:m,reachStep:p,buildSnapshot:g,reset:h}}var Xv={AED:2,AFN:2,ALL:2,AMD:2,ANG:2,AOA:2,ARS:2,AUD:2,AWG:2,AZN:2,BAM:2,BBD:2,BDT:2,BGN:2,BHD:3,BIF:0,BMD:2,BND:2,BOB:2,BRL:2,BSD:2,BTN:2,BWP:2,BYN:2,BZD:2,CAD:2,CDF:2,CHF:2,CLP:0,CNY:2,COP:2,CRC:2,CUC:2,CUP:2,CVE:2,CZK:2,DJF:0,DKK:2,DOP:2,DZD:2,EGP:2,ERN:2,ETB:2,EUR:2,FJD:2,FKP:2,GBP:2,GEL:2,GHS:2,GIP:2,GMD:2,GNF:0,GTQ:2,GYD:2,HKD:2,HNL:2,HTG:2,HUF:2,IDR:2,ILS:2,INR:2,IQD:3,IRR:2,ISK:0,JMD:2,JOD:3,JPY:0,KES:2,KGS:2,KHR:2,KMF:0,KPW:2,KRW:0,KWD:3,KYD:2,KZT:2,LAK:2,LBP:2,LKR:2,LRD:2,LSL:2,LYD:3,MAD:2,MDL:2,MGA:2,MKD:2,MMK:2,MNT:2,MOP:2,MRU:2,MUR:2,MVR:2,MWK:2,MXN:2,MYR:2,MZN:2,NAD:2,NGN:2,NIO:2,NOK:2,NPR:2,NZD:2,OMR:3,PAB:2,PEN:2,PGK:2,PHP:2,PKR:2,PLN:2,PYG:0,QAR:2,RON:2,RSD:2,RUB:2,RWF:0,SAR:2,SBD:2,SCR:2,SDG:2,SEK:2,SGD:2,SHP:2,SLE:2,SOS:2,SRD:2,SSP:2,STN:2,SVC:2,SYP:2,SZL:2,THB:2,TJS:2,TMT:2,TND:3,TOP:2,TRY:2,TTD:2,TWD:2,TZS:2,UAH:2,UGX:0,USD:2,UYU:2,UZS:2,VED:2,VES:2,VND:0,VUV:0,WST:2,XAF:0,XCD:2,XCG:2,XOF:0,XPF:0,YER:2,ZAR:2,ZMW:2,ZWG:2},Kv=1e8;function Wv(e){return typeof e=="string"&&Object.hasOwn(Xv,e)}function Zv(e){if(!Wv(e))throw new TypeError(`not an ISO 4217 currency: ${e}`);return Xv[e]}function oC(e){if(!Number.isSafeInteger(e)||e<0)throw new TypeError(`minor must be a non-negative safe integer, got ${e}`)}function sC(e,a){oC(e);const i=Zv(a);if(i===0)return`${e}`;const o=String(e).padStart(i+1,"0"),l=o.length-i;return`${Number(o.slice(0,l))}.${o.slice(l)}`}function FN(e,a,i){const o=sC(e,a),l=Zv(a);return new Intl.NumberFormat(i,{style:"currency",currency:a,minimumFractionDigits:l,maximumFractionDigits:l}).format(o)}String(Kv).length;const lC=new Set(["new","like_new","good","fair"]),cC=new Set(["clothing","accessories","lingerie","other"]),uC=new Set(["available","on_hold","sold"]),Kc=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),$s=e=>typeof e=="string"&&e.trim()!=="",fm=e=>e===null||typeof e=="string",V1=e=>typeof e=="number"&&Number.isFinite(e)&&e>0,dC=e=>$s(e)&&!Number.isNaN(Date.parse(e));function fC(e){return Kc(e)&&Number.isSafeInteger(e.minor)&&e.minor>=0&&e.minor<=Kv&&Wv(e.currency)}function mC(e){return Kc(e)&&$s(e.src)&&typeof e.webpSrc=="string"&&V1(e.width)&&V1(e.height)}function pC(e){return $s(e.id)?$s(e.slug)?$s(e.title)?typeof e.description!="string"?"description":fC(e.price)?lC.has(e.condition)?cC.has(e.category)?fm(e.size)?uC.has(e.status)?(e.status==="on_hold"?!dC(e.holdUntil):!fm(e.holdUntil))?"holdUntil":fm(e.shipsFrom)?!Array.isArray(e.photos)||!e.photos.every(mC)?"photos":null:"shipsFrom":"status":"size":"category":"condition":"price":"title":"slug":"id"}function hC(e){const a=[],i=[];if(!Array.isArray(e))return{listings:a,dropped:i};for(const o of e){const l=Kc(o)?pC(o):"row";if(l===null)a.push(o);else{const u=Kc(o)&&typeof o.slug=="string"&&o.slug!==""?o.slug:null;i.push({slug:u,field:l})}}return{listings:a,dropped:i}}function sn(e){return Array.isArray(e)?e:[]}function gC(e){if(!e||typeof e!="object")return{bio:"",personality:[],availableFor:[],availableTo:[],activities:[]};const a=e;return{bio:typeof a.bio=="string"?a.bio:"",personality:sn(a.personality),availableFor:sn(a.availableFor),availableTo:sn(a.availableTo),activities:bC(a.activities)}}function bC(e){return Array.isArray(e)?e.filter(a=>a&&typeof a=="object").map(a=>({category:typeof a.category=="string"?a.category:"Uncategorized",items:sn(a.items)})):[]}function yC(e){return!e||typeof e!="object"?{phone:"",communicationNote:"",responseTime:"",paymentMethods:[]}:{...e,paymentMethods:sn(e.paymentMethods)}}function gc(e){return!e||typeof e!="object"?{entries:[]}:{...e,entries:sn(e.entries)}}function xC(e){return Array.isArray(e)?e.filter(a=>!!a&&typeof a=="object").map(a=>{const i=a,o={...a,entries:sn(i.entries)};return i.includeInSummary===!0?o.includeInSummary=!0:i.includeInSummary===!1&&(o.includeInSummary=!1),o}):[]}function U1(e){return Array.isArray(e)?e.filter(a=>!!a&&typeof a=="object").map(a=>({...a,items:sn(a.items)})):[]}function vC(e){if(!e||typeof e!="object")throw new Error("Invalid provider data: expected object");const a=e,i=hC(a.shop);return{identity:a.identity||{name:"Unknown",pronouns:"",gender:"",location:"",secondaryLocations:[],languages:[],tagline:""},physical:a.physical||{age:"",height:"",bodyType:"",ethnicity:"",hairColor:"",hairLength:"",eyeColor:"",cupSize:"",additional:{}},rates:xC(a.rates),addOns:gc(a.addOns),travelFees:gc(a.travelFees),touringPackages:gc(a.touringPackages),onlineServices:gc(a.onlineServices),fmtyTariff:a.fmtyTariff,fmtyExamples:a.fmtyExamples,tour:sn(a.tour),currentLocation:a.currentLocation||null,gallery:sn(a.gallery),galleryOrdering:a.galleryOrdering==="unsorted"?"unsorted":"curated",contact:yC(a.contact),etiquette:U1(a.etiquette),policies:U1(a.policies),about:gC(a.about),destinations:sn(a.destinations),specialties:sn(a.specialties),siteText:typeof a.siteText=="object"&&a.siteText?a.siteText:void 0,shop:i.listings,shopDropped:i.dropped,verifiedProfiles:sn(a.verifiedProfiles).map(o=>{const l=o&&typeof o=="object"?o:{},u=String(l.href??l.url??"").trim();return{platform:String(l.platform??""),href:u,imgSrc:String(l.imgSrc??""),imgAlt:String(l.imgAlt??""),description:String(l.description??l.handle??"")}}),heroStrip:sn(a.heroStrip),defaultSiteTheme:typeof a.defaultSiteTheme=="string"?a.defaultSiteTheme:void 0}}const wC=3,SC=500,kC=8e3;function _C(e){return e===429||e>=500}function $C(e){return!(e instanceof DOMException&&e.name==="AbortError")}function TC(e,a=Math.random){const i=Math.min(SC*2**Math.max(0,e-1),kC);return Math.round(a()*i)}const Qv=3e4,jC=2e3;function CC(e,a=0){return e<wC&&a<Qv}function AC(e,a=Date.now()){if(!e)return null;const i=e.trim();if(/^\d+$/.test(i)){const u=Number(i)*1e3;return u>0?u:null}const o=Date.parse(i);if(Number.isNaN(o))return null;const l=o-a;return l>0?l:null}function EC(e,a,i=Math.random,o=Date.now()){const l=AC(a,o)??0;return Math.min(l+TC(e,i),Qv)}const Jv=b.createContext(null);function RC(e,a){return{...e,gallery:e.gallery.map(i=>({...i,src:a(i.src),...i.webpSrc?{webpSrc:a(i.webpSrc)}:{}})),...e.shop?{shop:e.shop.map(i=>({...i,photos:i.photos.map(o=>({...o,src:a(o.src),webpSrc:a(o.webpSrc)}))}))}:{}}}function zC({children:e}){const a=window.__PROVIDER_CONFIG__;if(!a)throw new Error("Provider config not found. Ensure window.__PROVIDER_CONFIG__ is set by the deployment entry point.");const[i,o]=b.useState(a.provider),[l,u]=b.useState(!!a.apiBaseUrl),[m,p]=b.useState(!1),[g,h]=b.useState(!1),v=b.useRef(!1),x=b.useRef(!1),S=a.apiBaseUrl,_=a.apiToken,C=a.rewritePhotoSrc;return b.useEffect(()=>{if(!S)return;let T=new AbortController,A,$=!1;const M=Date.now();let E;function B(){E!==void 0&&(clearTimeout(E),E=void 0),h(!1)}function j(){$||x.current||(B(),p(!0),v.current=!0,u(!1))}function R(Y,Q){if($)return;const ie=Date.now()-M;if(!CC(Y,ie)||x.current){j();return}A=setTimeout(()=>void z(Y+1),EC(Y,Q))}async function z(Y=1){T.abort(),T=new AbortController;try{const Q=await fetch(`${S}/www/provider-config`,{signal:T.signal,headers:_?{Authorization:`Bearer ${_}`}:{}});if(!Q.ok){if(_C(Q.status)&&!x.current){R(Y,Q.headers.get("Retry-After"));return}j();return}const ie=await Q.json(),ve=vC(ie);x.current=!0,B(),p(!1),o(C?RC(ve,C):ve);const X=ve.defaultSiteTheme;if(typeof X=="string"&&X&&typeof window<"u"){const _e=window.__PROVIDER_CONFIG__||(window.__PROVIDER_CONFIG__={});_e.theme||(_e.theme={}),_e.theme.activeTheme=X,t8(X);try{window.dispatchEvent(new CustomEvent("quinn:site-theme-default",{detail:X}))}catch{}}}catch(Q){if(!$C(Q))return;if(!x.current){R(Y);return}}finally{!v.current&&(x.current||A===void 0)&&(v.current=!0,u(!1))}}function U(){document.visibilityState==="visible"&&z()}z(),E=setTimeout(()=>{$||x.current||h(!0)},jC),document.addEventListener("visibilitychange",U);const ae=setInterval(z,3e4);return()=>{$=!0,T.abort(),A!==void 0&&clearTimeout(A),E!==void 0&&clearTimeout(E),document.removeEventListener("visibilitychange",U),clearInterval(ae)}},[S,_,C]),c.jsx(Jv.Provider,{value:{data:i,isLoading:l,loadFailed:m,queued:g},children:e})}function vu(){const e=b.useContext(Jv);if(!e)throw new Error("useProviderData must be used within ProviderDataProvider");return e}function Kr(){return vu().data}function e2(){return vu().isLoading}function HN(){return vu().loadFailed}function PN(){return vu().queued}function t2(){const e=window.__PROVIDER_CONFIG__;if(!e)throw new Error("Provider config not found on window.__PROVIDER_CONFIG__");return e}const n2=b.createContext({t:e=>e,i18n:{language:"en"}});function MC({children:e}){return c.jsx(n2.Provider,{value:{t:(a,i)=>i&&typeof i.defaultValue=="string"?i.defaultValue:a,i18n:{language:"en"}},children:e})}function ch(e){return b.useContext(n2)}const Ac="en";function Wc(e,a,i,o,l,u){var h,v;const p=((v=(h=e==null?void 0:e.siteText)==null?void 0:h[o])==null?void 0:v[l])??u;if(i===Ac)return p;const g=a(l);return!g||g===l?p:g}function Fe(e,a,i){var g,h;const o=Kr(),u=((h=(g=o==null?void 0:o.siteText)==null?void 0:g[e])==null?void 0:h[a])??i;let m="",p=Ac;try{const{t:v,i18n:x}=ch(e);p=x.language,p!==Ac&&(m=v(a))}catch{return u}return p===Ac||!m||m===a?u:m}const ys=new Intl.DateTimeFormat("en-US",{month:"short"}),DC=new Intl.DateTimeFormat("en-US",{month:"long"}),Vr=new Intl.DateTimeFormat("en-US",{day:"numeric"});function ep(e){return new Date(`${e}T00:00:00`)}function uh(e,a,i={}){const o=ep(e);if(!a){const m=`${ys.format(o)} ${Vr.format(o)}`;return i.openEnded==="plus"?`${m}+`:`${m} onwards`}const l=ep(a);return o.getFullYear()===l.getFullYear()&&o.getMonth()===l.getMonth()?`${ys.format(o)} ${Vr.format(o)}–${Vr.format(l)}`:`${ys.format(o)} ${Vr.format(o)} – ${ys.format(l)} ${Vr.format(l)}`}function GN(e,a={}){const i=ep(e);return a.style==="long"?`${DC.format(i)} ${Vr.format(i)}, ${i.getFullYear()}`:`${ys.format(i)} ${Vr.format(i)}`}function dh(){const e=new Date,a=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${a}-${i}-${o}`}function a2(e,a=dh()){const i=[],o=[];for(const l of e)(l.endDate!==null&&l.endDate<a?o:i).push(l);return i.sort((l,u)=>l.startDate.localeCompare(u.startDate)),o.sort((l,u)=>(u.endDate??"").localeCompare(l.endDate??"")),{upcoming:i,past:o}}function OC(e,a=3,i=dh()){if(a<0)throw new Error(`teaserUpcomingStops count must be >= 0, got ${a}`);return a2(e,i).upcoming.slice(0,a)}function NC(e,a=dh()){const{upcoming:i}=a2(e,a),o=i.find(u=>u.startDate<=a),l=i.find(u=>u.startDate>a);return{activeStop:o,nextStop:l}}function tp(e){return e.toLowerCase().replace(/\s+/g,"-")}function wu(){const e=Kr(),a=e2(),{activeStop:i,nextStop:o}=b.useMemo(()=>NC(e.tour??[]),[e.tour]);return{activeStop:i,nextStop:o,loading:a,error:null}}const LC={"/":{namespace:"home"},"/tour":{namespace:"tour",title:"Tour Schedule",description:"Upcoming cities and dates."},"/about":{namespace:"about",title:"About",description:"Meet Quinn — pink-and-UV-orange-haired transfem game dev and Cali bimbo. Sweet, submissive, a lot of fun. Her story, her vibe, and what to expect."},"/gallery":{namespace:"gallery",title:"Gallery",description:"Photos and looks."},"/rates":{namespace:"rates",title:"Rates",description:"Service menu and rates."},"/destinations":{namespace:"destinations",title:"Destinations",description:"Quinn is an upscale trans escort available worldwide via Fly Me To You. Browse cities and book your destination."},"/booking":{namespace:"booking",title:"Booking",description:"Reserve a date with Quinn."},"/fmty":{namespace:"fmty",title:"Fly Me To You",description:"Commission a private visit. You arrange the travel, Quinn arrives."},"/etiquette":{namespace:"etiquette",title:"Etiquette",description:"Etiquette guidelines for booking with Quinn."},"/shop":{namespace:"shop",title:"Shop",description:"Browse pre-loved clothing, accessories, and more."},"/links":{namespace:"links",title:"Links",description:"All links."},"/get-in-touch":{namespace:"contact",title:"Contact",description:"Get in touch."},"/contact":{namespace:"contact",title:"Contact",description:"Get in touch."},"/banners":{title:"Verified Profiles",description:"Quinn is a verified independent escort on trusted platforms. View her verified profiles."},"/specialties":{namespace:"specialties",title:"Specialties",description:"Browse Quinn's full menu of services — GFE, overnight sessions, kink-friendly experiences, and more. Upscale trans escort in San Francisco."},"/duos":{title:"Duo Sessions",description:"Duo sessions with Quinn — two-person experiences, carefully arranged. Upscale trans escort in San Francisco, touring nationwide."},"/my-schedule":{title:"My Schedule",description:"See upcoming tour stops and register your interest in booking during Quinn's next visit to your city."}};function BC(e){const a=e.length>1?e.replace(/\/$/,""):e;return{routePattern:a,meta:LC[a]}}const r2="https://transquinnftw.com",qC=`${r2}/og-image.jpg`,VC="Cali Bimbo Trans Escort & Game Dev",UC="Pink-and-UV-orange-haired transfem game dev and Cali bimbo — sweet, submissive, a lot of fun. Trans companion from San Francisco, touring nationwide. Bookings by text only.",FC=new Set(["/","/tour"]);function HC(e,a){const i=(e??"").trim();return i?i.includes(a)?i:`${i} — ${a}`:""}function np(e){return e.state?`${e.city}, ${e.state}`:e.city}function ap(e){return FC.has(e.routePattern??e.pathname)}function PC(e,a){var o;if((o=e.titleFull)!=null&&o.trim())return e.titleFull.trim();if(ap(a)&&a.activeStop)return`${a.providerName} — Now in ${np(a.activeStop)}`;const i=HC(e.title,a.providerName);return i||`${a.providerName} — ${VC}`}function GC(e,a){var i;if((i=e.description)!=null&&i.trim()){if(ap(a)&&a.activeStop){const o=np(a.activeStop),l=e.description.trim();return l.startsWith("Currently in")?l:`Currently in ${o}. ${l}`}return e.description.trim()}return ap(a)&&a.activeStop?`Currently in ${np(a.activeStop)}. Cali bimbo trans escort and game dev — sweet, submissive, a lot of fun. Bookings by text only.`:UC}function YC(e,a){var i,o;return{title:PC(e,a),description:GC(e,a),ogImage:((i=e.ogImage)==null?void 0:i.trim())||qC,ogType:((o=e.ogType)==null?void 0:o.trim())||"website",canonical:`${r2}${a.pathname}`,noindex:e.noindex??!1}}function Fn(e,a){const i=Object.entries(e).map(([l,u])=>`[${l}="${u}"]`).join("");let o=document.head.querySelector(`meta${i}`);if(!o){o=document.createElement("meta");for(const[l,u]of Object.entries(e))o.setAttribute(l,u);document.head.appendChild(o)}o.setAttribute("content",a)}function IC(e,a){let i=document.head.querySelector(`link[rel="${e}"]`);i||(i=document.createElement("link"),i.setAttribute("rel",e),document.head.appendChild(i)),i.setAttribute("href",a)}function XC(e){document.title=e.title,Fn({name:"description"},e.description),Fn({name:"robots"},e.noindex?"noindex, noai, noimageai":"index, follow, noai, noimageai"),Fn({property:"og:type"},e.ogType),Fn({property:"og:title"},e.title),Fn({property:"og:description"},e.description),Fn({property:"og:url"},e.canonical),Fn({property:"og:image"},e.ogImage),Fn({name:"twitter:card"},"summary_large_image"),Fn({name:"twitter:title"},e.title),Fn({name:"twitter:description"},e.description),Fn({name:"twitter:image"},e.ogImage),IC("canonical",e.canonical)}function i2(e={}){var j,R,z,U,ae,Y;const a=Nt(),i=Kr(),{activeStop:o}=wu(),l=BC(a.pathname),u=((j=l==null?void 0:l.meta)==null?void 0:j.namespace)??"__meta",m=Fe(u,"meta_title",((R=l==null?void 0:l.meta)==null?void 0:R.title)??""),p=Fe(u,"meta_description",((z=l==null?void 0:l.meta)==null?void 0:z.description)??""),g=a.pathname,h=l==null?void 0:l.routePattern,v=i.identity.name||"Quinn",x=(o==null?void 0:o.city)??"",S=(o==null?void 0:o.state)??"",_=e.title??m,C=e.titleFull,T=e.description??p,A=(U=i.gallery)==null?void 0:U.find(Q=>Q.metaFeatured),$=A!=null&&A.src?A.src.startsWith("http")?A.src:`https://transquinftw.com${A.src}`:void 0,M=e.ogImage??((ae=l==null?void 0:l.meta)==null?void 0:ae.ogImage)??$,E=e.ogType,B=e.noindex??((Y=l==null?void 0:l.meta)==null?void 0:Y.noindex);b.useEffect(()=>{const Q=YC({title:_,titleFull:C,description:T,ogImage:M,ogType:E,noindex:B},{pathname:g,routePattern:h,providerName:v,activeStop:x?{city:x,state:S||void 0}:null});XC(Q)},[_,C,T,M,E,B,g,h,v,x,S])}const KC=new Set(["fans","clients"]),o2=b.createContext(null);function WC({children:e}){const[a,i]=Wj(),o=Nt(),[l]=b.useState(()=>{const u=a.get("for");return KC.has(u??"")?u:null});return b.useEffect(()=>{!l||new URLSearchParams(o.search).get("for")===l||i(m=>(m.set("for",l),m),{replace:!0})},[o.pathname,o.search,l,i]),c.jsx(o2.Provider,{value:l,children:e})}function s2(){return b.useContext(o2)}const fh="site-revealed";function mh(){try{return sessionStorage}catch{return null}}function ZC(e=mh()){try{return(e==null?void 0:e.getItem(fh))??null}catch{return null}}function QC(e=mh()){try{e==null||e.setItem(fh,"1")}catch{}}function JC(e,a){var l;const i=new URLSearchParams(e.startsWith("?")?e.slice(1):e);if(i.get("reveal")!=="reset")return{reset:!1,nextSearch:e.startsWith("?")?e:e?`?${e}`:""};try{(l=a??mh())==null||l.removeItem(fh)}catch{}i.delete("reveal");const o=i.toString();return{reset:!0,nextSearch:o?`?${o}`:""}}const l2=b.createContext(null);function eA({children:e}){const[a,i]=b.useState(()=>{const{reset:l,nextSearch:u}=JC(window.location.search);return l&&u!==window.location.search&&window.history.replaceState(null,"",`${window.location.pathname}${u}${window.location.hash}`),ZC()==="1"}),o=b.useCallback(()=>{i(!0),QC()},[]);return c.jsx(l2,{value:{revealed:a,triggerReveal:o},children:e})}function ph(){const e=b.useContext(l2);if(!e)throw new Error("useBlurReveal must be used inside BlurRevealProvider");return e}const hh="data-blur-item";function tA(e){const a=[...document.querySelectorAll(`[${hh}]`)].filter(i=>{const o=i.getBoundingClientRect();return o.top<window.innerHeight&&o.bottom>0}).sort((i,o)=>i.getBoundingClientRect().top-o.getBoundingClientRect().top);return Math.max(0,a.indexOf(e))*50}function F1(e){var a;return((a=e.split("/").pop())==null?void 0:a.replace(/\.[^.]+$/,""))??e}function H1(){return typeof document>"u"?null:document.documentElement.getAttribute("data-site-theme")}function c2(){const[e,a]=b.useState(H1);return b.useEffect(()=>{a(H1());const i=document.documentElement,o=new MutationObserver(()=>{a(i.getAttribute("data-site-theme"))});return o.observe(i,{attributes:!0,attributeFilter:["data-site-theme"]}),()=>o.disconnect()},[]),e}function nA(e){return e==="barbie-light"||e==="barbie-dark"}const u2=5,aA=te`
  0%, 100% { transform: translate(0); filter: none; }
  20% { transform: translate(-2px, 1px) skewX(-1.5deg); }
  40% { transform: translate(2px, -1px) skewX(1deg); }
  60% { transform: translate(-1px, 0) skewX(0.5deg); }
  80% { transform: translate(1px, 1px); }
`,rA=te`
  0%, 100% {
    box-shadow:
      0 0 0 1px color-mix(in srgb, var(--magic-accent, #00e5ff) 35%, transparent),
      2px 0 0 color-mix(in srgb, #ff2e97 40%, transparent),
      -2px 0 0 color-mix(in srgb, #7df9ff 35%, transparent);
  }
  50% {
    box-shadow:
      0 0 14px 1px color-mix(in srgb, var(--magic-accent, #00e5ff) 25%, transparent),
      3px 0 0 color-mix(in srgb, #ff2e97 55%, transparent),
      -3px 0 0 color-mix(in srgb, #7df9ff 45%, transparent);
  }
`,iA=te`
  0%, 100% { opacity: 1; }
  8% { opacity: 0.82; }
  16% { opacity: 1; }
  48% { opacity: 0.9; }
  52% { opacity: 1; }
`,P1=te`
  0%, 100% { text-shadow: 0 0 0 transparent, 0 0 0 transparent; }
  25% {
    text-shadow:
      2px 0 0 color-mix(in srgb, #ff2e97 70%, transparent),
      -2px 0 0 color-mix(in srgb, #7df9ff 70%, transparent);
  }
  50% {
    text-shadow:
      -1px 1px 0 color-mix(in srgb, #00e5ff 65%, transparent),
      1px -1px 0 color-mix(in srgb, #ff2e97 65%, transparent);
  }
  75% {
    text-shadow:
      1px 0 0 color-mix(in srgb, #7df9ff 60%, transparent),
      -1px 0 0 color-mix(in srgb, #ff2e97 60%, transparent);
  }
`,oA=te`
  0%, 100% { transform: perspective(500px) rotateX(0deg); }
  35% { transform: perspective(500px) rotateX(2.5deg) scale(1.01); }
  70% { transform: perspective(500px) rotateX(-1.5deg); }
`,d2=[{target:"box",durationMs:520,box:W`animation: ${aA} 480ms steps(4, end);`},{target:"title",durationMs:560,title:W`animation: ${P1} 540ms steps(3, end);`},{target:"box",durationMs:500,box:W`animation: ${iA} 460ms linear, ${rA} 500ms ease;`},{target:"title",durationMs:480,title:W`letter-spacing: 0.02em; animation: ${P1} 460ms steps(5, end);`},{target:"box",durationMs:580,box:W`animation: ${oA} 560ms ease-in-out;`}],G1=te`
  0% { background-position: 120% 50%; }
  100% { background-position: -40% 50%; }
`,sA=te`
  0%, 100% {
    box-shadow: 0 0 0 0 transparent;
    border-color: color-mix(in srgb, var(--magic-accent, #ff2e97) 22%, transparent);
  }
  50% {
    box-shadow:
      0 0 18px 3px color-mix(in srgb, var(--magic-accent, #ff2e97) 32%, transparent),
      0 0 32px 6px color-mix(in srgb, #ffc93c 18%, transparent);
    border-color: color-mix(in srgb, var(--magic-accent, #ff2e97) 55%, transparent);
  }
`,lA=te`
  0%, 100% { transform: scale(1); filter: brightness(1); }
  45% { transform: scale(1.04); filter: brightness(1.12); }
  70% { transform: scale(0.99); filter: brightness(1.05); }
`,cA=te`
  0%, 100% { filter: drop-shadow(0 0 0 transparent); }
  50% {
    filter: drop-shadow(0 0 8px color-mix(in srgb, var(--magic-accent, #ff2e97) 55%, transparent))
      drop-shadow(0 0 14px color-mix(in srgb, #ffc93c 35%, transparent));
  }
`,f2=[{target:"box",durationMs:720,box:W`
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        inset: -40% -60%;
        background: linear-gradient(
          105deg,
          transparent 38%,
          color-mix(in srgb, #fff 55%, transparent) 48%,
          color-mix(in srgb, var(--magic-accent, #ff2e97) 40%, transparent) 50%,
          color-mix(in srgb, #ffc93c 45%, transparent) 52%,
          transparent 62%
        );
        background-size: 200% 100%;
        pointer-events: none;
        animation: ${G1} 680ms ease-out;
      }
    `},{target:"title",durationMs:640,title:W`
      background: linear-gradient(
        90deg,
        currentColor 0%,
        color-mix(in srgb, var(--magic-accent, #ff2e97) 85%, white) 45%,
        color-mix(in srgb, #ffc93c 80%, white) 55%,
        currentColor 100%
      );
      background-size: 220% auto;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: ${G1} 620ms ease;
    `},{target:"box",durationMs:680,box:W`animation: ${sA} 660ms ease-in-out;`},{target:"box",durationMs:560,box:W`animation: ${lA} 540ms ease;`},{target:"title",durationMs:600,title:W`animation: ${cA} 580ms ease-in-out;`}];function uA(e){return nA(e)?"sparkle":"geek"}function dA(e,a){const i=e==="sparkle"?f2:d2;return i[a%u2]??i[0]}function fA(e){return Math.max(...(e==="sparkle"?f2:d2).map(i=>i.durationMs))+80}const m2=b.createContext(null);function mA(e){return[...e].sort((a,i)=>a-i)}function pA(e,a){const i=b.useRef(0),[o,l]=b.useState(null),u=b.useRef(void 0),m=fA(a),p=b.useCallback(()=>{const g=mA(e.current),h=g.length;if(h<=0)return;i.current===0&&(i.current=Math.floor(Math.random()*h));const v=Math.floor(Math.random()*37)+1;i.current+=v;const x=g[i.current%h],S=Math.floor(i.current/h)%u2;l({cardIndex:x,effectIndex:S}),clearTimeout(u.current),u.current=setTimeout(()=>l(null),m)},[e,m]);return b.useEffect(()=>()=>clearTimeout(u.current),[]),{bump:p,pick:o}}function hA({children:e,observeRef:a}){const i=c2(),o=b.useMemo(()=>uA(i),[i]),l=b.useRef(0),u=b.useRef(new Set),[m,p]=b.useState(0),g=b.useCallback(()=>{p(T=>{const A=u.current.size;return T===A?T:A})},[]),h=b.useCallback(()=>{const T=l.current;return l.current+=1,u.current.add(T),g(),T},[g]),v=b.useCallback(T=>{u.current.delete(T)&&g()},[g]),{bump:x,pick:S}=pA(u,o),_=b.useRef(!1);b.useEffect(()=>{const T=a==null?void 0:a.current;if(!T)return;let A,$;const M=()=>{_.current||u.current.size<=0||A||(A=new IntersectionObserver(([E])=>{E!=null&&E.isIntersecting&&!_.current&&u.current.size>0&&(_.current=!0,x())},{threshold:.2}),A.observe(T),$!==void 0&&(clearInterval($),$=void 0))};return M(),$=setInterval(M,100),()=>{$!==void 0&&clearInterval($),A==null||A.disconnect()}},[a,m,x]);const C=b.useMemo(()=>({registerCard:h,unregisterCard:v,bump:x,pick:S,family:o,cardCount:m}),[h,v,x,S,o,m]);return c.jsx(m2.Provider,{value:C,children:e})}function p2(){const e=b.useContext(m2);if(!e)throw new Error("useMagicCardContext must be used within MagicCardProvider");return e}function gA(){const{registerCard:e,unregisterCard:a}=p2(),i=b.useRef(null),[o,l]=b.useState(null);return b.useLayoutEffect(()=>{const u=e();return i.current=u,l(u),()=>{a(u),i.current=null}},[e,a]),o??-1}const bA=W`
  --magic-accent: ${e=>e.theme.colors.primary};

  ${e=>e.$magicBoxActive&&e.$magicBoxFx&&W`
      @media (prefers-reduced-motion: no-preference) {
        ${e.$magicBoxFx};
      }
    `}

  ${e=>e.$magicTitleActive&&e.$magicTitleFx&&W`
      @media (prefers-reduced-motion: no-preference) {
        & :is(h1, h2, h3, h4):first-of-type,
        & [data-magic-title] {
          ${e.$magicTitleFx};
        }
      }
    `}
`,Hs=bA;W`
  ${e=>e.$magicTitleActive&&e.$magicTitleFx&&W`
      @media (prefers-reduced-motion: no-preference) {
        ${e.$magicTitleFx};
      }
    `}
`;function yA(e){const{bump:a,pick:i,family:o}=p2(),l=(i==null?void 0:i.cardIndex)===e,u=l&&i?dA(o,i.effectIndex):null;return{surfaceProps:{onMouseEnter:b.useCallback(()=>{a()},[a]),$magicBoxActive:l&&(u==null?void 0:u.target)==="box",$magicBoxFx:u==null?void 0:u.box,$magicTitleActive:l&&(u==null?void 0:u.target)==="title",$magicTitleFx:u==null?void 0:u.title},titleProps:{$magicTitleActive:l&&(u==null?void 0:u.target)==="title",$magicTitleFx:u==null?void 0:u.title}}}const xA=w.div`
  ${Hs}
`;function Ts({as:e,children:a,...i}){const o=gA(),{surfaceProps:l}=yA(o),{onMouseEnter:u,...m}=l,p=i.onMouseEnter,g=v=>{u==null||u(v),p==null||p(v)},h={...m,"data-magic-card":o,onMouseEnter:g,onMouseOver:g};return e?b.createElement(e,{...i,...h},a):c.jsx(xA,{...i,...h,children:a})}function Su(){const{trackInteraction:e}=Zn();return b.useCallback((a,i,o,l)=>{e({type:"click",data:{elementType:"link",eventName:a,eventLabel:i,pageUrl:window.location.href,...o!==void 0?{conversionGoal:o}:{},...l!==void 0?{segment:`value:${l}`}:{}}})},[e])}function vA(e){const a=e.toLowerCase();return{onlyfans:10,onlyfans_free:4,tryst:8,fansly:7,transfans:7,loyalfans:6,fancentro:6,fantime:6,manyvids:5,whatsapp:6,instagram:3,twitter:3,"x / twitter":3,threads:3,snapchat:2,youtube:2,bluesky:2,linktree:2,email:1,sms:1}[a]??1}function Ps(e){return e.colors.onPrimary??e.colors.text.primary}function wA(e){const a=e.activeStop?{kind:"active",stop:e.activeStop}:{kind:"home",location:e.homeLocation};return e.nextStop?{primary:a,secondary:{kind:"next",stop:e.nextStop}}:{primary:a}}function rp(e){return e.state?`${e.city}, ${e.state}`:e.city}function SA(e,a){return e!=null&&e.city?rp(e):a}function kA(e){const{targetSelector:a,initialFontPx:i,scrollThreshold:o}=e,l=b.useRef(null),[u,m]=b.useState(0),[p,g]=b.useState(null);b.useEffect(()=>{const A=()=>m(window.scrollY);return window.addEventListener("scroll",A,{passive:!0}),()=>window.removeEventListener("scroll",A)},[]),b.useEffect(()=>{var M,E;const A=()=>{const B=l.current,j=document.querySelector(a);if(B&&j){const R=B.getBoundingClientRect(),z=j.getBoundingClientRect();g({initialTop:R.top+window.scrollY,initialLeft:R.left,targetTop:z.top,targetLeft:z.left,targetFontPx:parseFloat(window.getComputedStyle(j).fontSize)})}};A(),(E=(M=document.fonts)==null?void 0:M.ready)==null||E.then(A);const $=new ResizeObserver(A);return $.observe(document.documentElement),l.current&&$.observe(l.current),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A),$.disconnect()}},[a]);const h=Math.min(1,Math.max(0,u/o)),v=(p==null?void 0:p.targetFontPx)??i,x=i+(v-i)*h,S=h>=1;let _=0,C=0;p&&(_=p.initialTop+(p.targetTop-p.initialTop)*h,C=p.initialLeft+(p.targetLeft-p.initialLeft)*h);const T={top:`${_}px`,left:`${C}px`,fontSize:`${x}px`,opacity:S?0:1,transition:"none",willChange:"top, left, font-size",...p?{}:{visibility:"hidden"}};return{anchorRef:l,style:T,isComplete:S,progress:h,targetFontPx:v}}var _A=te`
  0%   { background-position: -800px 0; }
  100% { background-position:  800px 0; }
`,$A=w.div`
  position: relative;
  overflow: hidden;
  border-radius: ${e=>e.$borderRadius??"8px"};
  border: ${e=>e.$noBorder?"none":"1px solid var(--protected-image-border-color, rgba(255, 255, 255, 0.1))"};
  line-height: 0;
  ${e=>e.$aspectRatio?`aspect-ratio: ${e.$aspectRatio};`:""}
`,TA=w.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    var(--protected-image-placeholder, rgba(20, 20, 25, 0.8)) 0%,
    var(--protected-image-placeholder-mid, rgba(40, 40, 52, 0.7)) 40%,
    var(--protected-image-placeholder-shine, rgba(55, 55, 68, 0.7)) 50%,
    var(--protected-image-placeholder-mid, rgba(40, 40, 52, 0.7)) 60%,
    var(--protected-image-placeholder, rgba(20, 20, 25, 0.8)) 100%
  );
  background-size: 800px 100%;
  animation: ${_A} 1.8s infinite linear;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 300ms ease;
  pointer-events: none;
  z-index: 2;
`,jA=w.picture`
  display: block;
  width: 100%;
`,CA=w.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: ${e=>e.$objectFit};
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  pointer-events: none;
`,AA=w.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
`;function EA(e){return e.replace(/\.(jpe?g|png)$/i,".webp")}function RA({src:e,alt:a,webpSrc:i,intrinsicWidth:o,intrinsicHeight:l,width:u,height:m,objectFit:p="cover",borderRadius:g,noBorder:h=!1,loading:v="lazy",fetchPriority:x}){const S=i??EA(e),[_,C]=b.useState(!1),T=o&&l?`${o} / ${l}`:void 0;return c.jsxs($A,{$borderRadius:g,$aspectRatio:T,$noBorder:h,style:{width:u,height:m},onContextMenu:A=>A.preventDefault(),children:[c.jsx(TA,{$visible:!_}),c.jsxs(jA,{children:[c.jsx("source",{srcSet:S,type:"image/webp"}),c.jsx(CA,{src:e,alt:a,$objectFit:p,loading:v,fetchPriority:x,draggable:!1,width:o,height:l,onLoad:()=>C(!0)})]}),c.jsx(AA,{})]})}function h2({restoreKey:e,restoreKeyJpeg:a,...i}){return c.jsx(RA,{...i})}const zA=te`
  0%   { background-position: -800px 0; }
  100% { background-position:  800px 0; }
`,gh=w.div`
  height: ${e=>e.$height??"300px"};
  width: ${e=>e.$width??"auto"};
  border-radius: ${e=>e.$radius??"12px"};
  background: linear-gradient(
    90deg,
    color-mix(in srgb, ${e=>e.theme.colors.text.primary} 6%, transparent) 0%,
    color-mix(in srgb, ${e=>e.theme.colors.text.primary} 10%, transparent) 40%,
    color-mix(in srgb, ${e=>e.theme.colors.text.primary} 14%, transparent) 50%,
    color-mix(in srgb, ${e=>e.theme.colors.text.primary} 10%, transparent) 60%,
    color-mix(in srgb, ${e=>e.theme.colors.text.primary} 6%, transparent) 100%
  );
  background-size: 800px 100%;
  animation: ${zA} 1.8s infinite linear;
`;function MA(e){if(e.type!=="idle"||!e.delayMs)return e.initialDelayMs||0;let a=e.delayMs+(e.initialDelayMs||0);if(e.randomMs&&e.randomMs>0){const i=e.randomVariance||{},o=Math.random()*e.randomMs;i.plusMinus?a+=Math.random()>.5?o:-o:i.minus?a-=o:a+=o,a=Math.max(0,a)}return a}function DA(e){return(e==null?void 0:e.type)==="hover"}function Y1(e){return(e==null?void 0:e.type)==="idle"}function OA(e){return(e==null?void 0:e.type)==="always"}function NA(e){return(e==null?void 0:e.type)==="never"}const g2="(prefers-reduced-motion: reduce)";function LA(e){const a=window.matchMedia(g2);return a.addEventListener("change",e),()=>a.removeEventListener("change",e)}function BA(){return window.matchMedia(g2).matches}function qA(){return!1}function Da(){return b.useSyncExternalStore(LA,BA,qA)}const VA=te`
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 transparent);
  }
  25% {
    transform: scale(1.15);
    filter: drop-shadow(0 0 8px rgba(220, 20, 60, 0.6));
  }
  50% {
    transform: scale(1.05);
    filter: drop-shadow(0 0 4px rgba(220, 20, 60, 0.4));
  }
  75% {
    transform: scale(1.12);
    filter: drop-shadow(0 0 6px rgba(220, 20, 60, 0.5));
  }
`,UA=te`
  0%, 100% {
    transform: scale(1) rotate(0deg);
    filter: drop-shadow(0 0 0 transparent);
  }
  25% {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.7));
  }
  50% {
    transform: scale(1.05) rotate(-3deg);
    filter: drop-shadow(0 0 4px rgba(212, 175, 55, 0.5));
  }
  75% {
    transform: scale(1.08) rotate(2deg);
    filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.6));
  }
`;te`
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
    filter: drop-shadow(0 0 4px rgba(75, 0, 130, 0.6));
  }
`;te`
  0%, 100% {
    opacity: 0.4;
    filter: blur(0px);
  }
  50% {
    opacity: 0.8;
    filter: blur(1px);
  }
`;const mm=te`
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: scale(1.08);
  }
`,FA=te`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,HA=te`
  0% {
    transform: rotate(0deg);
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: rotate(90deg);
    filter: drop-shadow(0 0 12px rgba(75, 0, 130, 0.8));
  }
  100% {
    transform: rotate(180deg);
    filter: drop-shadow(0 0 2px rgba(75, 0, 130, 0.3));
  }
`;te`
  0%, 100% {
    transform: scale(1) rotate(0deg);
    filter: drop-shadow(0 0 0 transparent);
  }
  25% {
    transform: scale(1.15) rotate(-5deg);
    filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.8));
  }
  50% {
    transform: scale(1.05) rotate(2deg);
    filter: drop-shadow(0 0 4px rgba(212, 175, 55, 0.5));
  }
  75% {
    transform: scale(1.12) rotate(-3deg);
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.7));
  }
`;const PA=te`
  0%, 100% {
    transform: translateX(0);
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: translateX(3px);
    filter: drop-shadow(0 0 6px rgba(220, 20, 60, 0.6));
  }
`,GA=te`
  0%, 100% {
    transform: translateX(0);
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: translateX(-3px);
    filter: drop-shadow(0 0 6px rgba(220, 20, 60, 0.6));
  }
`,YA=te`
  0%, 100% {
    transform: translateY(0);
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: translateY(-3px);
    filter: drop-shadow(0 0 6px rgba(220, 20, 60, 0.6));
  }
`,IA=te`
  0%, 100% {
    transform: translateY(0);
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: translateY(3px);
    filter: drop-shadow(0 0 6px rgba(220, 20, 60, 0.6));
  }
`,XA=te`
  0%, 100% {
    transform: scale(1) rotate(0deg);
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: scale(1.1) rotate(90deg);
    filter: drop-shadow(0 0 6px rgba(220, 20, 60, 0.7));
  }
`,KA=te`
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 transparent);
  }
  25% {
    transform: scale(1.2);
    filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.7));
  }
  50% {
    transform: scale(0.95);
  }
  75% {
    transform: scale(1.05);
  }
`,WA=te`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
`,ZA=te`
  0%, 100% {
    opacity: 1;
    filter: brightness(1);
  }
  50% {
    opacity: 1;
    filter: brightness(1.15);
  }
`;te`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`;const QA=te`
  0%, 100% {
    transform: translateY(0);
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  }
  50% {
    transform: translateY(-1px);
    filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.15));
  }
`,JA=te`
  0%, 100% {
    opacity: 1;
    filter: brightness(1);
  }
  50% {
    opacity: 1;
    filter: brightness(1.12);
  }
`,eE=te`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,tE=te`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`,nE=te`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
`,aE=te`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2px);
  }
`,rE=te`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-2px);
  }
`,iE=te`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
`,oE=te`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
`,sE=te`
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.05) rotate(90deg);
  }
`,lE=te`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
`,cE=te`
  0%, 100% {
    transform: scaleY(1);
    filter: drop-shadow(0 0 0 transparent);
  }
  5% {
    transform: scaleY(0.1);
    filter: drop-shadow(0 0 4px rgba(220, 20, 60, 0.3));
  }
  15% {
    transform: scaleY(1);
    filter: drop-shadow(0 0 8px rgba(220, 20, 60, 0.6));
  }
  20% {
    filter: drop-shadow(0 0 4px rgba(220, 20, 60, 0.3));
  }
`,uE=te`
  0%, 100% {
    transform: translateX(0);
    filter: drop-shadow(0 0 0 transparent);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-4px);
    filter: drop-shadow(0 0 6px rgba(220, 20, 60, 0.7));
  }
  20%, 40%, 60%, 80% {
    transform: translateX(4px);
    filter: drop-shadow(0 0 8px rgba(220, 20, 60, 0.9));
  }
`,dE=te`
  0%, 100% {
    transform: rotate(0deg);
    filter: drop-shadow(0 0 0 transparent);
  }
  25% {
    transform: rotate(15deg);
    filter: drop-shadow(2px 0 6px rgba(75, 0, 130, 0.6));
  }
  75% {
    transform: rotate(-15deg);
    filter: drop-shadow(-2px 0 6px rgba(212, 175, 55, 0.6));
  }
`,fE=te`
  0% {
    transform: scale(0.9);
    opacity: 1;
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: scale(1.15);
    opacity: 0.7;
    filter: drop-shadow(0 0 8px rgba(75, 0, 130, 0.7));
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
    filter: drop-shadow(0 0 12px rgba(75, 0, 130, 0.4));
  }
`,mE=te`
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: scale(1.4) rotate(180deg);
    opacity: 0.6;
    filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.8));
  }
  100% {
    transform: scale(1.8) rotate(360deg);
    opacity: 0;
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.4));
  }
`,pE=te`
  0% {
    transform: translateY(-20px);
    opacity: 0;
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: translateY(0);
    opacity: 1;
    filter: drop-shadow(0 4px 8px rgba(220, 20, 60, 0.8));
  }
  65% {
    transform: translateY(-5px);
  }
  80% {
    transform: translateY(0);
    filter: drop-shadow(0 2px 4px rgba(220, 20, 60, 0.4));
  }
  100% {
    transform: translateY(0);
    filter: drop-shadow(0 0 0 transparent);
  }
`,hE=te`
  0% {
    transform: translateY(20px);
    opacity: 0;
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: translateY(-5px);
    opacity: 1;
    filter: drop-shadow(0 -4px 8px rgba(75, 0, 130, 0.7));
  }
  100% {
    transform: translateY(0);
    filter: drop-shadow(0 -2px 4px rgba(212, 175, 55, 0.5));
  }
`,gE=te`
  0%, 100% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 0 transparent);
  }
  50% {
    opacity: 1;
    filter: brightness(2.5) drop-shadow(0 0 12px rgba(212, 175, 55, 0.9));
  }
  75% {
    filter: brightness(1.3) drop-shadow(0 0 6px rgba(212, 175, 55, 0.5));
  }
`,bE=te`
  0% {
    transform: rotate(0deg);
    filter: drop-shadow(0 0 0 transparent);
  }
  10% {
    filter: drop-shadow(0 0 6px rgba(75, 0, 130, 0.6));
  }
  100% {
    transform: rotate(6deg);
    filter: drop-shadow(0 0 2px rgba(75, 0, 130, 0.3));
  }
`,yE=te`
  0% {
    transform: scaleX(0) rotateY(-90deg);
    opacity: 0;
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: scaleX(0.5) rotateY(-45deg);
    opacity: 0.7;
    filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.7));
  }
  100% {
    transform: scaleX(1) rotateY(0deg);
    opacity: 1;
    filter: drop-shadow(0 0 4px rgba(212, 175, 55, 0.4));
  }
`,xE=te`
  0%, 100% {
    transform: scale(1) rotate(0deg);
    filter: drop-shadow(0 0 0 transparent);
  }
  33% {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 0 6px rgba(220, 20, 60, 0.6));
  }
  66% {
    transform: scale(0.9) rotate(-5deg);
    filter: drop-shadow(0 0 6px rgba(75, 0, 130, 0.6));
  }
`,vE=te`
  0%, 100% {
    transform: rotate(0deg);
    filter: drop-shadow(0 0 0 transparent);
  }
  25% {
    transform: rotate(8deg);
    filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.5));
  }
  50% {
    transform: rotate(0deg);
    filter: drop-shadow(0 0 3px rgba(212, 175, 55, 0.3));
  }
  75% {
    transform: rotate(-8deg);
    filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.5));
  }
`,wE=te`
  0%, 100% {
    transform: scaleY(1);
  }
  5% {
    transform: scaleY(0.2);
  }
  15% {
    transform: scaleY(1);
  }
`,SE=te`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-3px);
  }
  75% {
    transform: translateX(3px);
  }
`,kE=te`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
`,_E=te`
  0% {
    transform: scale(0.95);
    opacity: 1;
  }
  100% {
    transform: scale(1.1);
    opacity: 0.3;
  }
`,$E=te`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
`,TE=te`
  0% {
    transform: translateY(-15px);
    opacity: 0;
  }
  60% {
    transform: translateY(0);
    opacity: 1;
  }
  80% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
`,jE=te`
  0% {
    transform: translateY(15px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,CE=te`
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.4);
  }
`,AE=te`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(6deg);
  }
`,EE=te`
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
`,RE=te`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`,zE=te`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
`,ME=te`
  0% {
    transform: rotate(0deg) translateY(0);
    filter: drop-shadow(0 0 0 transparent);
  }
  40% {
    transform: rotate(-5deg) translateY(-3px);
    filter: drop-shadow(2px 2px 6px rgba(75, 0, 130, 0.7));
  }
  100% {
    transform: rotate(0deg) translateY(0);
    filter: drop-shadow(0 0 2px rgba(75, 0, 130, 0.3));
  }
`,DE=te`
  0% {
    transform: rotate(0deg) translateY(0);
    filter: brightness(1);
  }
  40% {
    transform: rotate(-3deg) translateY(-2px);
    filter: brightness(1.15);
  }
  100% {
    transform: rotate(0deg) translateY(0);
    filter: brightness(1);
  }
`,OE=te`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.03);
    opacity: 0.95;
  }
`,NE=te`
  0%, 100% {
    filter: brightness(1) drop-shadow(0 0 0 transparent);
  }
  50% {
    filter: brightness(1.15) drop-shadow(0 0 2px currentColor);
  }
`,LE=te`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(2deg);
  }
  75% {
    transform: rotate(-2deg);
  }
`,BE=te`
  0%, 100% {
    filter: brightness(1);
  }
  25% {
    filter: brightness(1.1);
  }
  50% {
    filter: brightness(1.2);
  }
  75% {
    filter: brightness(1.1);
  }
`,qE=te`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
`,VE=te`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`,UE=te`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1px);
  }
`,FE=te`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`,HE=te`
  0%, 100% {
    transform: scaleY(1);
    opacity: 1;
  }
  25% {
    transform: scaleY(1.15);
    opacity: 0.9;
  }
  50% {
    transform: scaleY(0.95);
    opacity: 1;
  }
  75% {
    transform: scaleY(1.08);
    opacity: 0.95;
  }
`,Oa={pulse:OE,glow:NE,wiggle:LE,shimmer:BE,bounce:qE,breathe:VE,lift:UE,flash:FE,flicker:HE,none:null},Dt={pulse:"0.4s",glow:"0.3s",wiggle:"0.3s",shimmer:"0.5s",bounce:"0.3s",breathe:"0.4s",lift:"0.3s",flash:"0.2s",flicker:"0.4s"},ip={fast:"0.3s",slow:"0.8s",pulse:"0.6s"},ot={easeOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeInOut:"cubic-bezier(0.4, 0, 0.6, 1)",bounce:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Ra={crimson:{start:"#6B0F1A",mid:"#DC143C",end:"#8B0000"},gold:{start:"#CD7F32",mid:"#D4AF37",end:"#FFBF00"},purple:{start:"#2E1A47",mid:"#4B0082",end:"#8B008B"},warning:{start:"#D97706",mid:"#F59E0B",end:"#FBBF24"},info:{start:"#1D4ED8",mid:"#3B82F6",end:"#60A5FA"},success:{start:"#059669",mid:"#10B981",end:"#34D399"},error:{start:"#B91C1C",mid:"#EF4444",end:"#F87171"}},vn={charcoal:"#2C2C2C",gold:"#D4AF37",warning:"#D97706",success:"#059669"};function Ot({trigger:e,animationDurationMs:a=800,enabled:i=!0}){const[o,l]=b.useState(!1),u=b.useRef(null),m=b.useRef(null);b.useEffect(()=>()=>{u.current&&clearTimeout(u.current),m.current&&clearTimeout(m.current)},[]);const p=b.useCallback(()=>{if(!e||!i||!Y1(e))return;u.current&&clearTimeout(u.current);const _=MA(e);u.current=setTimeout(()=>{l(!0),m.current=setTimeout(()=>{l(!1),p()},a)},_)},[e,i,a]);b.useEffect(()=>{if(!i){l(!1);return}if(!e||NA(e)){l(!1);return}if(OA(e)){l(!0);return}if(Y1(e)){p();return}l(!1)},[e,i,p]);const g=b.useCallback(()=>{i&&(m.current&&clearTimeout(m.current),l(!0),m.current=setTimeout(()=>{l(!1)},a))},[i,a]),h=b.useCallback(()=>{i&&(m.current&&clearTimeout(m.current),l(!0))},[i]),v=b.useCallback(()=>{m.current&&clearTimeout(m.current),l(!1)},[]),x=b.useCallback(()=>{l(!1),u.current&&clearTimeout(u.current),m.current&&clearTimeout(m.current)},[]),S=i&&(!e||DA(e));return{isPlaying:o,wantsHover:S,hoverEnabled:S,trigger:g,activate:h,deactivate:v,reset:x}}const PE=te`
  0% {
    stroke-dashoffset: 1;
    filter: drop-shadow(0 0 0 transparent);
  }
  60% {
    stroke-dashoffset: 0;
    filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.8));
  }
  100% {
    stroke-dashoffset: 0;
    filter: drop-shadow(0 0 3px rgba(245, 158, 11, 0.4));
  }
`,GE=te`
  0%, 40% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    transform: scale(1.4);
    opacity: 1;
    filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.8));
  }
  100% {
    transform: scale(1);
    opacity: 1;
    filter: drop-shadow(0 0 2px rgba(245, 158, 11, 0.4));
  }
`,YE=te`
  0% {
    stroke-dashoffset: 1;
    filter: brightness(1);
  }
  60% {
    stroke-dashoffset: 0;
    filter: brightness(1.3);
  }
  100% {
    stroke-dashoffset: 0;
    filter: brightness(1);
  }
`,IE=te`
  0%, 40% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    transform: scale(1.3);
    opacity: 1;
    filter: brightness(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
    filter: brightness(1);
  }
`,I1="0.6s",XE=w.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .alert-body {
    transform-origin: center;
  }

  .alert-stem {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
  }

  .alert-dot {
    transform-origin: 12px 17px;
  }

  /* Full animation: exclamation draws in */
  ${({$fullPlaying:e,$isLuxe:a})=>e&&W`
      .alert-stem {
        animation: ${a?YE:PE}
          ${I1} ${ot.easeOut} both;
      }
      .alert-dot {
        animation: ${a?IE:GE}
          ${I1} ${ot.easeOut} both;
      }
    `}

  /* Subtle animation: body breathe (only when full is NOT playing) */
  ${({$subtlePlaying:e,$fullPlaying:a})=>e&&!a&&W`
      .alert-body {
        animation: ${Oa.breathe} ${Dt.breathe}
          ${ot.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .alert-body,
    .alert-stem,
    .alert-dot {
      animation: none !important;
    }
  }
`,op=b.forwardRef(({size:e=24,color:a,animated:i=!0,showFullAnimation:o,showSubtleAnimation:l,"aria-label":u,...m},p)=>{const{themeName:g}=Ma(),h=Da(),v=i&&!h,x=g==="luxe",S=Ot({trigger:o,animationDurationMs:600,enabled:v}),_=Ot({trigger:l,animationDurationMs:parseInt(Dt.breathe,10)*1e3||400,enabled:v}),C=b.useMemo(()=>Math.random().toString(36).slice(2,9),[]),T=`alerttriangle-gradient-${C}`,A=`alerttriangle-glow-${C}`,$=Ra.warning,M=x?"none":a||`url(#${T})`,E=x?a||vn.warning:"none",B=x?1.5:0,j=x?a||vn.warning:a||"rgba(0,0,0,0.8)",R=x?a||vn.warning:a||"rgba(0,0,0,0.8)",z=x?1.5:2,U=v?()=>{S.wantsHover&&S.trigger(),_.wantsHover&&_.trigger()}:void 0,ae=v?()=>{S.wantsHover&&S.trigger(),_.wantsHover&&_.trigger()}:void 0;return c.jsxs(XE,{ref:p,width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$fullPlaying:S.isPlaying,$subtlePlaying:_.isPlaying,$isLuxe:x,onMouseEnter:U,onFocus:ae,role:"img","aria-label":u??"Warning",tabIndex:v?0:void 0,...m,children:[!x&&c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:T,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"24",y2:"24",children:[c.jsx("stop",{offset:"0%",stopColor:$.start}),c.jsx("stop",{offset:"50%",stopColor:$.mid}),c.jsx("stop",{offset:"100%",stopColor:$.end})]}),c.jsxs("filter",{id:A,children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"blur"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),c.jsxs("g",{className:"alert-body",filter:x?void 0:`url(#${A})`,children:[c.jsx("g",{className:"alert-container",children:c.jsx("path",{d:"M10.29 3.86L1.82 18C1.64 18.3 1.55 18.65 1.55 19C1.55 19.35 1.64 19.7 1.82 20C2 20.3 2.26 20.56 2.56 20.74C2.86 20.92 3.21 21.01 3.56 21H20.49C20.84 21.01 21.19 20.92 21.49 20.74C21.79 20.56 22.05 20.3 22.23 20C22.41 19.7 22.5 19.35 22.5 19C22.5 18.65 22.41 18.3 22.23 18L13.76 3.86C13.58 3.56 13.32 3.32 13.02 3.15C12.72 2.98 12.38 2.89 12.03 2.89C11.68 2.89 11.34 2.98 11.04 3.15C10.74 3.32 10.48 3.56 10.29 3.86Z",fill:M,stroke:E,strokeWidth:B,strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("path",{className:"alert-stem",d:"M12 9v4",pathLength:1,fill:"none",stroke:j,strokeWidth:z,strokeLinecap:"round"}),c.jsx("circle",{className:"alert-dot",cx:12,cy:17,r:1,fill:R})]})]})});op.displayName="AlertTriangleIcon";function KE(e="top-left"){switch(e){case"top-left":return{cx:"30%",cy:"30%"};case"top-right":return{cx:"70%",cy:"30%"};case"top-center":return{cx:"50%",cy:"25%"};default:return{cx:"30%",cy:"30%"}}}function WE(e={}){const{cx:a,cy:i}=KE(e.lightSource);return{cx:a,cy:i,r:"70%",fx:a,fy:i}}const bh={purple:{top:"#7B3FA0",left:"#4B0082",right:"#2E1A47"},gold:{top:"#FFD700",left:"#D4AF37",right:"#996515"},crimson:{top:"#FF4D6A",left:"#DC143C",right:"#8B0000"}},Nn={layer1:{dx:1,dy:1,blur:1,opacity:.2},layer2:{dx:1.5,dy:2,blur:1.5,opacity:.25},layer3:{dx:2,dy:3,blur:2,opacity:.3}};function ZE(){return{x:"-20%",y:"-20%",width:"140%",height:"140%"}}W`
  transform-style: preserve-3d;
  perspective: 1000px;
`;W`
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;te`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;te`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;te`
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: rotateX(90deg) rotateY(90deg);
  }
  50% {
    transform: rotateX(180deg) rotateY(180deg);
  }
  75% {
    transform: rotateX(270deg) rotateY(270deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;te`
  0%, 100% {
    transform: rotateY(0deg);
  }
  25% {
    transform: rotateY(15deg);
  }
  75% {
    transform: rotateY(-15deg);
  }
`;function pm(e="top-left",a=24){const i=a/24;switch(e){case"top-left":return{cx:8*i,cy:6*i,rx:3*i,ry:2*i};case"top-right":return{cx:16*i,cy:6*i,rx:3*i,ry:2*i};case"top-center":return{cx:12*i,cy:5*i,rx:2.5*i,ry:1.5*i};default:return{cx:8*i,cy:6*i,rx:3*i,ry:2*i}}}const QE={sphereGlow:{color:"rgba(75, 0, 130, 0.6)"},highlightColor:"rgba(255, 255, 255, 0.9)"},JE={pulse:VA,scale:mm,spin:FA,halfSpin:HA,shimmer:UA,lift:mm,brightness:mm,slideRight:PA,slideLeft:GA,slideUp:YA,slideDown:IA,xRotate:XA,bounce:KA,blink:cE,shake:uE,swing:dE,wave:fE,scatter:mE,drop:pE,rise:hE,flash:gE,tick:bE,unfold:yE,morph:xE,wiggle:vE,tilt:ME,custom:null,none:null},e9={pulse:WA,scale:nE,spin:eE,halfSpin:tE,shimmer:ZA,lift:QA,brightness:JA,slideRight:aE,slideLeft:rE,slideUp:iE,slideDown:oE,xRotate:sE,bounce:lE,blink:wE,shake:SE,swing:kE,wave:_E,scatter:$E,drop:TE,rise:jE,flash:CE,tick:AE,unfold:EE,morph:RE,wiggle:zE,tilt:DE,custom:null,none:null},t9=()=>w.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
  transition: transform ${ip.fast} ${ot.easeOut};

  .icon-element {
    transform-origin: center;
  }

  /* Full animation when playing (trigger-agnostic — could be hover, idle, click, etc.) */
  ${e=>e.$fullPlaying&&e.$fullAnimation&&W`
      .icon-element {
        animation: ${e.$fullAnimation} ${e.$fullDuration} ${e.$easing} ${e.$continuous?"infinite":""};
      }
    `}

  /* Subtle animation when playing (trigger-agnostic) */
  ${e=>e.$subtlePlaying&&e.$subtleAnimation&&W`
      .icon-element {
        animation: ${e.$subtleAnimation} ${e.$subtleDuration} ${e.$easing};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .icon-element {
      animation: none !important;
    }
  }
`,n9=t9();function a9(e){return Ra[e]||Ra.crimson}function r9(e,a,i){const o=a9(i);return c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:e,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:o.start}),c.jsx("stop",{offset:"50%",stopColor:o.mid}),c.jsx("stop",{offset:"100%",stopColor:o.end})]}),c.jsxs("filter",{id:a,children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"blur"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})}function i9(e){const{name:a,lilith:i,luxe:o,viewBox:l="0 0 24 24"}=e,u=b.forwardRef(({size:m=24,color:p,animated:g=!0,showFullAnimation:h,showSubtleAnimation:v,"aria-label":x,...S},_)=>{const{themeName:C}=Ma(),T=Da(),A=g&&!T,$=Ot({trigger:h,animationDurationMs:800,enabled:A}),M=C==="luxe"?o.subtleAnimation||"pulse":i.subtleAnimation||"pulse",E=parseInt(Dt[M]||"400",10)*1e3||400,B=Ot({trigger:v,animationDurationMs:E,enabled:A}),j=b.useMemo(()=>Math.random().toString(36).slice(2,9),[]),R=`${a.toLowerCase()}-gradient-${j}`,z=`${a.toLowerCase()}-glow-${j}`,U=C==="luxe",ae=U?o:i,Q=(U?e9:JE)[ae.animation],ie=Oa[M]||null,ve=i.gradient||"crimson",X=U?"none":p||`url(#${R})`,_e=U?p||vn.gold:p||`url(#${R})`,I={fill:X,stroke:_e,gradientId:R,glowId:z},re=ae.animation==="spin"?"1s":ae.animation==="shimmer"||ae.animation==="slideRight"||ae.animation==="slideLeft"||ae.animation==="halfSpin"?ip.slow:ip.pulse,ue=Dt[M]||"0.4s",he=ae.animation==="spin",ke=A?()=>{$.wantsHover&&(he?$.activate():$.trigger()),B.wantsHover&&B.trigger()}:void 0,N=A&&he?()=>{$.wantsHover&&$.deactivate()}:void 0,V=A?()=>{$.wantsHover&&$.trigger(),B.wantsHover&&B.trigger()}:void 0;return c.jsxs(n9,{ref:_,width:m,height:m,viewBox:l,fill:"none",xmlns:"http://www.w3.org/2000/svg",$fullPlaying:$.isPlaying,$subtlePlaying:B.isPlaying,$fullAnimation:Q,$subtleAnimation:ie,$fullDuration:re,$subtleDuration:ue,$easing:ot.easeInOut,$continuous:he,onMouseEnter:ke,onMouseLeave:N,onFocus:V,role:x?"img":"presentation","aria-label":x,"aria-hidden":!x,tabIndex:A?0:void 0,...S,children:[!U&&r9(R,z,ve),c.jsx("g",{className:"icon-element",filter:U?void 0:`url(#${z})`,children:ae.render(I)})]})});return u.displayName=`${a}Icon`,u}const X1=i9({name:"Ban",lilith:{animation:"shake",subtleAnimation:"pulse",gradient:"error",render:({fill:e})=>c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"none",stroke:e,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"m4.9 4.9 14.2 14.2",fill:"none",stroke:e,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})]})},luxe:{animation:"shake",subtleAnimation:"glow",render:({stroke:e})=>c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"none",stroke:e,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"m4.9 4.9 14.2 14.2",fill:"none",stroke:e,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})]})}}),o9=te`
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 transparent);
  }
  20% {
    transform: scale(1.25);
    filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.8));
  }
  40% {
    transform: scale(0.95);
    filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.6));
  }
  60% {
    transform: scale(1.1);
    filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.7));
  }
  80% {
    transform: scale(0.98);
    filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.5));
  }
`,s9=te`
  0%, 100% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.12);
  }
  60% {
    transform: scale(0.98);
  }
`,l9=w.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .check-group {
    transform-origin: center;
  }

  /* Full animation on hover/focus when hoverEnabled */
  ${({$hoverEnabled:e,$isLuxe:a})=>e&&W`
      &:hover .check-group,
      &:focus-visible .check-group {
        animation: ${a?s9:o9} 0.7s
          ${ot.bounce};
      }
    `}

  /* Subtle animation when triggered by idle timer */
  ${({$subtlePlaying:e})=>e&&W`
      .check-group {
        animation: ${Oa.pulse} ${Dt.pulse}
          ${ot.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .check-group {
      animation: none !important;
    }
  }
`,Zc=b.forwardRef(({size:e=24,color:a,animated:i=!0,showFullAnimation:o,showSubtleAnimation:l,"aria-label":u,...m},p)=>{const{themeName:g}=Ma(),h=Da(),v=i&&!h,x=g==="luxe",S=Ot({trigger:o,animationDurationMs:700,enabled:v}),_=parseInt(Dt.pulse,10)*1e3||400,C=Ot({trigger:l,animationDurationMs:_,enabled:v}),T=Math.random().toString(36).slice(2,9),A=`check-circle-gradient-${T}`,$=`check-circle-glow-${T}`,M=Ra.success,E=x?"none":a||`url(#${A})`,B=x?a||vn.success:a||`url(#${A})`;return c.jsxs(l9,{ref:p,width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$hoverEnabled:S.hoverEnabled,$subtlePlaying:C.isPlaying,$isLuxe:x,role:u?"img":"presentation","aria-label":u,"aria-hidden":!u,tabIndex:v?0:void 0,...m,children:[!x&&c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:A,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"24",y2:"24",children:[c.jsx("stop",{offset:"0%",stopColor:M.start}),c.jsx("stop",{offset:"50%",stopColor:M.mid}),c.jsx("stop",{offset:"100%",stopColor:M.end})]}),c.jsxs("filter",{id:$,children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"blur"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),c.jsxs("g",{className:"check-group",filter:x?void 0:`url(#${$})`,children:[c.jsx("circle",{cx:"12",cy:"12",r:"10",fill:E,stroke:x?B:"none",strokeWidth:x?1.5:0}),c.jsx("path",{d:"M9 12l2 2 4-4",stroke:x?B:"rgba(255,255,255,0.95)",strokeWidth:x?1.5:2,strokeLinecap:"round",strokeLinejoin:"round"})]})]})});Zc.displayName="CheckCircleIcon";const c9=te`
  0% {
    transform: perspective(100px) rotateY(-60deg);
    filter: brightness(1.1);
  }
  40% {
    transform: perspective(100px) rotateY(-30deg);
  }
  70% {
    transform: perspective(100px) rotateY(-5deg);
    filter: brightness(0.9);
  }
  85% {
    transform: perspective(100px) rotateY(-8deg);
  }
  100% {
    transform: perspective(100px) rotateY(0deg);
    filter: brightness(0.7);
  }
`,u9=te`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  60% {
    transform: translateX(6px);
    opacity: 0.7;
  }
  100% {
    transform: translateX(10px);
    opacity: 0;
  }
`,d9=te`
  0% {
    transform: perspective(100px) rotateY(-45deg);
  }
  100% {
    transform: perspective(100px) rotateY(0deg);
  }
`,f9=te`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(6px);
    opacity: 0.4;
  }
`,m9=w.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .door-panel {
    transform-origin: left center;
    /* Default: door is closed */
    transform: perspective(100px) rotateY(0deg);
  }

  .exit-figure {
    transform-origin: center;
  }

  /* Full animation on hover/focus when hoverEnabled */
  ${({$hoverEnabled:e,$isLuxe:a})=>e&&W`
      &:hover .door-panel,
      &:focus-visible .door-panel {
        animation: ${a?d9:c9} 0.7s
          ${ot.easeOut} forwards;
      }

      &:hover .exit-figure,
      &:focus-visible .exit-figure {
        animation: ${a?f9:u9} 0.5s
          ${ot.easeOut} forwards;
        animation-delay: 0.1s;
      }
    `}

  /* Subtle animation when triggered by idle timer */
  ${({$subtlePlaying:e})=>e&&W`
      .door-panel {
        animation: ${Oa.wiggle} ${Dt.wiggle}
          ${ot.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .door-panel,
    .exit-figure {
      animation: none !important;
    }
  }
`,b2=b.forwardRef(({size:e=24,color:a,animated:i=!0,showFullAnimation:o,showSubtleAnimation:l,"aria-label":u,...m},p)=>{const{themeName:g}=Ma(),h=Da(),v=i&&!h,x=g==="luxe",S=Ot({trigger:o,animationDurationMs:700,enabled:v}),_=parseInt(Dt.wiggle,10)*1e3||300,C=Ot({trigger:l,animationDurationMs:_,enabled:v}),T=Math.random().toString(36).slice(2,9),A=`logout-glow-${T}`,$=`logout-depth-shadow-${T}`,M=bh.purple,E=x?a||vn.gold:void 0;return c.jsxs(m9,{ref:p,width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$hoverEnabled:S.hoverEnabled,$subtlePlaying:C.isPlaying,$isLuxe:x,role:u?"img":"presentation","aria-label":u,"aria-hidden":!u,tabIndex:v?0:void 0,...m,children:[!x&&c.jsxs("defs",{children:[c.jsxs("filter",{id:A,children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"blur"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),c.jsx("filter",{id:$,x:"-20%",y:"-20%",width:"140%",height:"140%",children:c.jsx("feDropShadow",{dx:"1",dy:"1.5",stdDeviation:"1",floodOpacity:"0.35",floodColor:"#2E1A47"})})]}),x?c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M4 3 L4 21 M4 3 L12 3 M4 21 L12 21",stroke:E,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.jsxs("g",{className:"door-panel",children:[c.jsx("rect",{x:"4",y:"4",width:"7",height:"16",fill:"none",stroke:E,strokeWidth:1.5}),c.jsx("circle",{cx:"9",cy:"12",r:"1",fill:"none",stroke:E,strokeWidth:1})]}),c.jsxs("g",{className:"exit-figure",children:[c.jsx("circle",{cx:"17",cy:"8",r:"2",fill:"none",stroke:E,strokeWidth:1.5}),c.jsx("path",{d:"M17 10 L17 15 M15 12 L19 12 M17 15 L15 19 M17 15 L19 19",stroke:E,strokeWidth:1.5,strokeLinecap:"round"}),c.jsx("path",{d:"M20 12 L22 12 M21 10 L23 12 L21 14",stroke:E,strokeWidth:1.5,strokeLinecap:"round"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("rect",{x:"2",y:"3",width:"2",height:"18",fill:M.left,filter:`url(#${$})`}),c.jsx("rect",{x:"2",y:"2",width:"10",height:"2",fill:M.top,filter:`url(#${A})`}),c.jsx("rect",{x:"2",y:"20",width:"10",height:"2",fill:M.left}),c.jsxs("g",{className:"door-panel",children:[c.jsx("rect",{x:"4",y:"4",width:"7",height:"16",fill:M.right,filter:`url(#${A})`}),c.jsx("circle",{cx:"9",cy:"12",r:"1",fill:M.top}),c.jsx("rect",{x:"5",y:"6",width:"5",height:"5",rx:"0.5",fill:"rgba(0, 0, 0, 0.15)"}),c.jsx("rect",{x:"5",y:"13",width:"5",height:"5",rx:"0.5",fill:"rgba(0, 0, 0, 0.15)"})]}),c.jsxs("g",{className:"exit-figure",children:[c.jsx("circle",{cx:"17",cy:"8",r:"2",fill:M.top,filter:`url(#${A})`}),c.jsx("path",{d:"M17 10 L17 15 M14 12 L20 12 M17 15 L15 19 M17 15 L19 19",stroke:M.top,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M20 12 L22 12 M21 10 L23 12 L21 14",stroke:"rgba(220, 20, 60, 0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})});b2.displayName="LogOutIcon";const p9=te`
  0% {
    transform: translateY(-20px);
    opacity: 0;
    filter: drop-shadow(0 0 0 transparent);
  }
  40% {
    transform: translateY(0);
    opacity: 1;
    filter: drop-shadow(0 4px 8px rgba(220, 20, 60, 0.8));
  }
  55% {
    transform: translateY(-6px);
    filter: drop-shadow(0 2px 4px rgba(220, 20, 60, 0.5));
  }
  70% {
    transform: translateY(0);
    filter: drop-shadow(0 4px 6px rgba(220, 20, 60, 0.6));
  }
  85% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
    filter: drop-shadow(0 0 8px rgba(220, 20, 60, 0.7));
  }
`,h9=te`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  30% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
    transform: scale(2.5);
  }
`,g9=te`
  0% {
    transform: translateY(-15px);
    opacity: 0;
  }
  60% {
    transform: translateY(0);
    opacity: 1;
  }
  80% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
`,b9=w.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .pin-body {
    transform-origin: bottom center;
  }

  .location-pulse {
    opacity: 0;
    transform-origin: center bottom;
  }

  /* Full animation on hover/focus when hoverEnabled */
  ${({$hoverEnabled:e,$isLuxe:a})=>e&&W`
      &:hover .pin-body,
      &:focus-visible .pin-body {
        animation: ${a?g9:p9} 0.8s
          ${ot.easeOut};
      }

      ${!a&&W`
        &:hover .location-pulse,
        &:focus-visible .location-pulse {
          animation: ${h9} 0.8s ease-out 0.4s;
        }

        &:hover .location-pulse:nth-child(2),
        &:focus-visible .location-pulse:nth-child(2) {
          animation-delay: 0.5s;
        }

        &:hover .location-pulse:nth-child(3),
        &:focus-visible .location-pulse:nth-child(3) {
          animation-delay: 0.6s;
        }
      `}
    `}

  /* Subtle animation when triggered by idle timer */
  ${({$subtlePlaying:e})=>e&&W`
      .pin-body {
        animation: ${Oa.bounce} ${Dt.bounce}
          ${ot.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .pin-body,
    .location-pulse {
      animation: none !important;
    }
  }
`,Qc=b.forwardRef(({size:e=24,color:a,animated:i=!0,showFullAnimation:o,showSubtleAnimation:l,"aria-label":u,...m},p)=>{const{themeName:g}=Ma(),h=Da(),v=i&&!h,x=g==="luxe",S=Ot({trigger:o,animationDurationMs:800,enabled:v}),_=parseInt(Dt.bounce,10)*1e3||300,C=Ot({trigger:l,animationDurationMs:_,enabled:v}),T=Math.random().toString(36).slice(2,9),A=`mappin-gradient-${T}`,$=`mappin-glow-${T}`,M=`mappin-shadow-1-${T}`,E=`mappin-shadow-2-${T}`,B=`mappin-shadow-3-${T}`,j=Ra.crimson,R=x?"none":a||`url(#${A})`,z=x?a||vn.gold:a||`url(#${A})`,U=ZE();return c.jsxs(b9,{ref:p,width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$hoverEnabled:S.hoverEnabled,$subtlePlaying:C.isPlaying,$isLuxe:x,role:u?"img":"presentation","aria-label":u,"aria-hidden":!u,tabIndex:v?0:void 0,...m,children:[c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:A,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"24",y2:"24",children:[c.jsx("stop",{offset:"0%",stopColor:j.start}),c.jsx("stop",{offset:"50%",stopColor:j.mid}),c.jsx("stop",{offset:"100%",stopColor:j.end})]}),!x&&c.jsxs(c.Fragment,{children:[c.jsx("filter",{id:M,...U,children:c.jsx("feDropShadow",{dx:Nn.layer1.dx,dy:Nn.layer1.dy,stdDeviation:Nn.layer1.blur,floodColor:"rgba(46, 26, 71, 1)",floodOpacity:Nn.layer1.opacity})}),c.jsx("filter",{id:E,...U,children:c.jsx("feDropShadow",{dx:Nn.layer2.dx,dy:Nn.layer2.dy,stdDeviation:Nn.layer2.blur,floodColor:"rgba(46, 26, 71, 1)",floodOpacity:Nn.layer2.opacity})}),c.jsxs("filter",{id:B,...U,children:[c.jsx("feDropShadow",{dx:Nn.layer3.dx,dy:Nn.layer3.dy,stdDeviation:Nn.layer3.blur,floodColor:"rgba(46, 26, 71, 1)",floodOpacity:Nn.layer3.opacity}),c.jsx("feGaussianBlur",{stdDeviation:"0.6",result:"blur"}),c.jsx("feColorMatrix",{in:"blur",type:"matrix",values:`1 0 0 0 0
                          0.11 0 0 0 0
                          0.24 0 0 0 0
                          0 0 0 0.3 0`,result:"shadowGlow"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"shadowGlow"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),c.jsxs("filter",{id:$,children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"blur"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})]}),!x&&c.jsxs(c.Fragment,{children:[c.jsx("circle",{className:"location-pulse",cx:"12",cy:"21",r:"6",fill:"none",stroke:"rgba(220, 20, 60, 0.4)",strokeWidth:"0.5"}),c.jsx("circle",{className:"location-pulse",cx:"12",cy:"21",r:"4",fill:"none",stroke:"rgba(220, 20, 60, 0.5)",strokeWidth:"0.5"}),c.jsx("circle",{className:"location-pulse",cx:"12",cy:"21",r:"2",fill:"none",stroke:"rgba(220, 20, 60, 0.6)",strokeWidth:"0.5"})]}),x?c.jsxs("g",{className:"pin-body",children:[c.jsx("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",fill:"none",stroke:z,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("circle",{cx:"12",cy:"10",r:"3",fill:vn.charcoal})]}):c.jsxs("g",{className:"pin-body",children:[c.jsxs("g",{opacity:.3,filter:`url(#${B})`,children:[c.jsx("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",fill:R}),c.jsx("circle",{cx:"12",cy:"10",r:"3",fill:"#6B0F1A"})]}),c.jsxs("g",{opacity:.5,filter:`url(#${E})`,children:[c.jsx("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",fill:R}),c.jsx("circle",{cx:"12",cy:"10",r:"3",fill:"#6B0F1A"})]}),c.jsxs("g",{opacity:.7,filter:`url(#${M})`,children:[c.jsx("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",fill:R}),c.jsx("circle",{cx:"12",cy:"10",r:"3",fill:"#6B0F1A"})]}),c.jsxs("g",{filter:`url(#${$})`,children:[c.jsx("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",fill:R}),c.jsx("circle",{cx:"12",cy:"10",r:"3",fill:"#6B0F1A"})]})]})]})});Qc.displayName="MapPinIcon";const y9=te`
  0%, 100% {
    transform: rotate(0deg);
    filter: drop-shadow(0 0 2px rgba(212, 175, 55, 0.3));
  }
  10%, 30%, 50%, 70%, 90% {
    transform: rotate(-8deg);
    filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.8));
  }
  20%, 40%, 60%, 80% {
    transform: rotate(8deg);
    filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.9));
  }
`,hm=te`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  30% {
    opacity: 0.6;
  }
  100% {
    opacity: 0;
    transform: scale(1.8);
  }
`,x9=te`
  0%, 100% {
    transform: rotate(0deg);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: rotate(-5deg);
  }
  20%, 40%, 60%, 80% {
    transform: rotate(5deg);
  }
`,v9=w.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .phone-body {
    transform-origin: center;
  }

  .ring-wave {
    opacity: 0;
    transform-origin: center;
  }

  /* Full animation on hover/focus when hoverEnabled */
  ${({$hoverEnabled:e,$isLuxe:a})=>e&&W`
      &:hover .phone-body,
      &:focus-visible .phone-body {
        animation: ${a?x9:y9} 0.8s
          ${ot.easeInOut};
      }

      ${!a&&W`
        &:hover .ring-wave:nth-child(1),
        &:focus-visible .ring-wave:nth-child(1) {
          animation: ${hm} 1s ${ot.easeOut};
        }

        &:hover .ring-wave:nth-child(2),
        &:focus-visible .ring-wave:nth-child(2) {
          animation: ${hm} 1s ${ot.easeOut};
          animation-delay: 0.2s;
        }

        &:hover .ring-wave:nth-child(3),
        &:focus-visible .ring-wave:nth-child(3) {
          animation: ${hm} 1s ${ot.easeOut};
          animation-delay: 0.4s;
        }
      `}
    `}

  /* Subtle animation when triggered by idle timer */
  ${({$subtlePlaying:e})=>e&&W`
      .phone-body {
        animation: ${Oa.wiggle} ${Dt.wiggle}
          ${ot.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .phone-body,
    .ring-wave {
      animation: none !important;
    }
  }
`,y2=b.forwardRef(({size:e=24,color:a,animated:i=!0,showFullAnimation:o,showSubtleAnimation:l,"aria-label":u,...m},p)=>{const{themeName:g}=Ma(),h=Da(),v=i&&!h,x=g==="luxe",S=Ot({trigger:o,animationDurationMs:800,enabled:v}),_=parseInt(Dt.wiggle,10)*1e3||300,C=Ot({trigger:l,animationDurationMs:_,enabled:v}),T=Math.random().toString(36).slice(2,9),A=`phone-gradient-${T}`,$=`phone-depth-shadow-${T}`,M=bh.gold,E=Ra.gold,B=x?"none":a||`url(#${A})`,j=x?a||vn.charcoal:a||`url(#${A})`;return c.jsxs(v9,{ref:p,width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$hoverEnabled:S.hoverEnabled,$subtlePlaying:C.isPlaying,$isLuxe:x,role:u?"img":"presentation","aria-label":u,"aria-hidden":!u,tabIndex:v?0:void 0,...m,children:[x?null:c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:A,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"24",y2:"24",children:[c.jsx("stop",{offset:"0%",stopColor:E.start}),c.jsx("stop",{offset:"50%",stopColor:E.mid}),c.jsx("stop",{offset:"100%",stopColor:E.end})]}),c.jsx("filter",{id:$,x:"-20%",y:"-20%",width:"140%",height:"140%",children:c.jsx("feDropShadow",{dx:"1.5",dy:"2",stdDeviation:"1.5",floodOpacity:"0.3",floodColor:"#2E1A47"})})]}),!x&&c.jsxs(c.Fragment,{children:[c.jsx("ellipse",{className:"ring-wave",cx:"12",cy:"12",rx:"10",ry:"10",fill:"none",stroke:"rgba(212, 175, 55, 0.3)",strokeWidth:"0.5"}),c.jsx("ellipse",{className:"ring-wave",cx:"12",cy:"12",rx:"10",ry:"10",fill:"none",stroke:"rgba(212, 175, 55, 0.4)",strokeWidth:"0.5"}),c.jsx("ellipse",{className:"ring-wave",cx:"12",cy:"12",rx:"10",ry:"10",fill:"none",stroke:"rgba(212, 175, 55, 0.5)",strokeWidth:"0.5"})]}),c.jsx("g",{className:"phone-body",filter:x?void 0:`url(#${$})`,children:x?c.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",fill:B,stroke:j,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}):c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M13 4 L13 20 L17 18 L17 6 Z",fill:M.right}),c.jsx("path",{d:"M7 6 L7 18 L13 20 L13 4 Z",fill:M.left}),c.jsx("path",{d:"M8 6.5 C8 5.5 8.5 5 9 5 L11 5 C11.5 5 12 5.5 12 6.5 L12 17.5 C12 18.5 11.5 19 11 19 L9 19 C8.5 19 8 18.5 8 17.5 Z",fill:M.top}),c.jsx("rect",{x:"9",y:"7",width:"2",height:"1",rx:"0.5",fill:"rgba(0, 0, 0, 0.2)"}),c.jsx("rect",{x:"9",y:"16",width:"2",height:"1",rx:"0.5",fill:"rgba(0, 0, 0, 0.2)"})]})})]})});y2.displayName="PhoneIcon";const K1=te`
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.8));
  }
`,w9=te`
  0% {
    transform: scale(0.8) rotate(0deg);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2) rotate(20deg);
    opacity: 1;
    filter: drop-shadow(0 0 4px rgba(139, 92, 246, 0.7));
  }
  100% {
    transform: scale(0.8) rotate(0deg);
    opacity: 0.5;
  }
`,gm=te`
  0%, 100% {
    opacity: 0.6;
    transform: scale(0.95);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
`,S9=w.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .sparkle-1,
  .sparkle-2,
  .sparkle-3 {
    transform-origin: center;
  }

  /* Full animation on hover/focus when hoverEnabled */
  ${({$hoverEnabled:e,$isLuxe:a})=>e&&W`
      /* Main large sparkle */
      &:hover .sparkle-1,
      &:focus-visible .sparkle-1 {
        animation: ${a?gm:K1} 0.6s
          ${ot.easeInOut};
      }

      /* Top-right medium sparkle - delayed */
      &:hover .sparkle-2,
      &:focus-visible .sparkle-2 {
        animation: ${a?gm:w9} 0.6s
          ${ot.easeInOut};
        animation-delay: 0.15s;
      }

      /* Bottom-left small sparkle - more delayed */
      &:hover .sparkle-3,
      &:focus-visible .sparkle-3 {
        animation: ${a?gm:K1} 0.6s
          ${ot.easeInOut};
        animation-delay: 0.3s;
      }
    `}

  /* Subtle animation when triggered by idle timer */
  ${({$subtlePlaying:e})=>e&&W`
      .sparkle-1,
      .sparkle-2,
      .sparkle-3 {
        animation: ${Oa.shimmer} ${Dt.shimmer}
          ${ot.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .sparkle-1,
    .sparkle-2,
    .sparkle-3 {
      animation: none !important;
    }
  }
`,x2=b.forwardRef(({size:e=24,color:a,animated:i=!0,showFullAnimation:o,showSubtleAnimation:l,"aria-label":u,...m},p)=>{const{themeName:g}=Ma(),h=Da(),v=i&&!h,x=g==="luxe",S=Ot({trigger:o,animationDurationMs:600,enabled:v}),_=parseInt(Dt.shimmer,10)*1e3||500,C=Ot({trigger:l,animationDurationMs:_,enabled:v}),T=Math.random().toString(36).slice(2,9),A=`sparkles-sphere-${T}`,$=`sparkles-glow-${T}`,M=`sparkle-clip-1-${T}`,E=`sparkle-clip-2-${T}`,B=`sparkle-clip-3-${T}`,j=Ra.gold,R=WE({lightSource:"top-left"}),z=pm("top-left",24),U=pm("top-left",16),ae=pm("top-left",12),Y=x?"none":a||`url(#${A})`,Q=x?a||vn.gold:"none";return c.jsxs(S9,{ref:p,width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$hoverEnabled:S.hoverEnabled,$subtlePlaying:C.isPlaying,$isLuxe:x,role:u?"img":"presentation","aria-label":u,"aria-hidden":!u,tabIndex:v?0:void 0,...m,children:[c.jsxs("defs",{children:[c.jsx("clipPath",{id:M,children:c.jsx("path",{d:"M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"})}),c.jsx("clipPath",{id:E,children:c.jsx("path",{d:"M19 14l0.75 2.25L22 17l-2.25 0.75L19 20l-0.75-2.25L16 17l2.25-0.75L19 14z"})}),c.jsx("clipPath",{id:B,children:c.jsx("path",{d:"M6 16l0.5 1.5L8 18l-1.5 0.5L6 20l-0.5-1.5L4 18l1.5-0.5L6 16z"})}),!x&&c.jsxs(c.Fragment,{children:[c.jsxs("radialGradient",{id:A,cx:R.cx,cy:R.cy,r:R.r,fx:R.fx,fy:R.fy,children:[c.jsx("stop",{offset:"0%",stopColor:"rgba(200, 180, 255, 0.95)"}),c.jsx("stop",{offset:"20%",stopColor:j.mid}),c.jsx("stop",{offset:"100%",stopColor:"#8B008B"})]}),c.jsxs("filter",{id:$,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[c.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"1",result:"blur"}),c.jsx("feFlood",{floodColor:QE.sphereGlow.color,result:"glowColor"}),c.jsx("feComposite",{in:"glowColor",in2:"blur",operator:"in",result:"glow"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"glow"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})]}),c.jsxs("g",{className:"sparkle-1",children:[c.jsx("path",{d:"M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z",fill:Y,stroke:Q,strokeWidth:x?1.5:0,strokeLinecap:"round",strokeLinejoin:"round",filter:x?void 0:`url(#${$})`}),!x&&!a&&c.jsx("g",{clipPath:`url(#${M})`,children:c.jsx("ellipse",{cx:z.cx,cy:z.cy,rx:z.rx,ry:z.ry,fill:"rgba(255, 255, 255, 0.7)"})})]}),c.jsxs("g",{className:"sparkle-2",children:[c.jsx("path",{d:"M19 14l0.75 2.25L22 17l-2.25 0.75L19 20l-0.75-2.25L16 17l2.25-0.75L19 14z",fill:Y,stroke:Q,strokeWidth:x?1:0,strokeLinecap:"round",strokeLinejoin:"round",filter:x?void 0:`url(#${$})`}),!x&&!a&&c.jsx("g",{clipPath:`url(#${E})`,children:c.jsx("ellipse",{cx:19-(U.cx-12),cy:17-(U.cy-12),rx:U.rx*.7,ry:U.ry*.7,fill:"rgba(255, 255, 255, 0.6)"})})]}),c.jsxs("g",{className:"sparkle-3",children:[c.jsx("path",{d:"M6 16l0.5 1.5L8 18l-1.5 0.5L6 20l-0.5-1.5L4 18l1.5-0.5L6 16z",fill:Y,stroke:Q,strokeWidth:x?1:0,strokeLinecap:"round",strokeLinejoin:"round",filter:x?void 0:`url(#${$})`}),!x&&!a&&c.jsx("g",{clipPath:`url(#${B})`,children:c.jsx("ellipse",{cx:6-(ae.cx-12),cy:18-(ae.cy-12),rx:ae.rx*.5,ry:ae.ry*.5,fill:"rgba(255, 255, 255, 0.5)"})})]})]})});x2.displayName="SparklesIcon";const k9=te`
  0%, 100% {
    transform: scale(1) rotateY(0deg);
    filter: drop-shadow(0 0 0 transparent);
  }
  25% {
    transform: scale(1.05) rotateY(-5deg);
    filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.8));
  }
  50% {
    transform: scale(1.1) rotateY(-8deg);
    filter: drop-shadow(0 0 14px rgba(255, 191, 0, 1));
  }
  75% {
    transform: scale(1.05) rotateY(-5deg);
    filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.8));
  }
`,_9=te`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
`,$9=w.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .wallet-body {
    transform-origin: center;
  }

  /* Full animation on hover/focus when hoverEnabled */
  ${({$hoverEnabled:e,$isLuxe:a})=>e&&W`
      &:hover .wallet-body,
      &:focus-visible .wallet-body {
        animation: ${a?_9:k9} 0.8s
          ${ot.easeInOut};
      }
    `}

  /* Subtle animation when triggered by idle timer */
  ${({$subtlePlaying:e})=>e&&W`
      .wallet-body {
        animation: ${Oa.pulse} ${Dt.pulse}
          ${ot.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .wallet-body {
      animation: none !important;
    }
  }
`,v2=b.forwardRef(({size:e=24,color:a,animated:i=!0,showFullAnimation:o,showSubtleAnimation:l,"aria-label":u,...m},p)=>{const{themeName:g}=Ma(),h=Da(),v=i&&!h,x=g==="luxe",S=Ot({trigger:o,animationDurationMs:800,enabled:v}),_=parseInt(Dt.pulse,10)*1e3||400,C=Ot({trigger:l,animationDurationMs:_,enabled:v}),T=Math.random().toString(36).slice(2,9),A=`wallet-gradient-${T}`,$=`wallet-glow-${T}`,M=`wallet-depth-shadow-${T}`,E=bh.gold,B=Ra.gold,j=x?"none":a||`url(#${A})`,R=x?a||vn.gold:a||`url(#${A})`;return c.jsxs($9,{ref:p,width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$hoverEnabled:S.hoverEnabled,$subtlePlaying:C.isPlaying,$isLuxe:x,role:u?"img":"presentation","aria-label":u,"aria-hidden":!u,tabIndex:v?0:void 0,...m,children:[x?c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:A,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"24",y2:"24",children:[c.jsx("stop",{offset:"0%",stopColor:B.start}),c.jsx("stop",{offset:"50%",stopColor:B.mid}),c.jsx("stop",{offset:"100%",stopColor:B.end})]}),c.jsxs("filter",{id:$,children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"blur"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}):c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:A,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"24",y2:"24",children:[c.jsx("stop",{offset:"0%",stopColor:B.start}),c.jsx("stop",{offset:"50%",stopColor:B.mid}),c.jsx("stop",{offset:"100%",stopColor:B.end})]}),c.jsxs("filter",{id:$,children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"blur"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),c.jsx("filter",{id:M,x:"-20%",y:"-20%",width:"140%",height:"140%",children:c.jsx("feDropShadow",{dx:"1.5",dy:"2",stdDeviation:"1.5",floodOpacity:"0.3",floodColor:"#2E1A47"})})]}),c.jsx("g",{className:"wallet-body",filter:x?void 0:`url(#${M})`,children:x?c.jsxs(c.Fragment,{children:[c.jsx("rect",{x:"2",y:"6",width:"20",height:"14",rx:"2",fill:j,stroke:R,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M2 10C2 8.9 2.9 8 4 8H20C21.1 8 22 8.9 22 10",fill:"none",stroke:R,strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("rect",{x:"16",y:"12",width:"4",height:"4",rx:"0.5",fill:"none",stroke:R,strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("circle",{cx:"18",cy:"14",r:"0.8",fill:R}),c.jsx("line",{x1:"6",y1:"10",x2:"6",y2:"20",stroke:R,strokeWidth:.8}),c.jsx("line",{x1:"10",y1:"10",x2:"10",y2:"20",stroke:R,strokeWidth:.8})]}):c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M12 8 L12 20 L22 18 L22 10 Z",fill:E.right}),c.jsx("path",{d:"M2 10 L2 18 L12 20 L12 8 Z",fill:E.left}),c.jsx("path",{d:"M2 10 L12 6 L22 10 L12 8 Z",fill:E.top}),c.jsx("rect",{x:"10.5",y:"6.5",width:"3",height:"2",rx:"0.5",fill:B.start,filter:`url(#${$})`}),c.jsx("rect",{x:"16",y:"12",width:"4",height:"3",rx:"0.5",fill:"rgba(46, 26, 71, 0.5)"}),c.jsx("circle",{cx:"18",cy:"13.5",r:"0.6",fill:"rgba(255, 191, 0, 0.7)",filter:`url(#${$})`}),c.jsx("line",{x1:"6",y1:"10",x2:"7",y2:"19",stroke:"rgba(255, 255, 255, 0.2)",strokeWidth:"0.5"}),c.jsx("line",{x1:"9",y1:"9",x2:"10",y2:"19.5",stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"0.5"}),c.jsx("path",{d:"M3 10 L21 10",stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"0.5",strokeDasharray:"1,1"})]})})]})});v2.displayName="WalletIcon";const T9=te`
  0% {
    stroke-dashoffset: 1;
    filter: drop-shadow(0 0 0 transparent);
  }
  60% {
    stroke-dashoffset: 0;
    filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.8));
  }
  100% {
    stroke-dashoffset: 0;
    filter: drop-shadow(0 0 3px rgba(245, 158, 11, 0.4));
  }
`,j9=te`
  0%, 40% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    transform: scale(1.4);
    opacity: 1;
    filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.8));
  }
  100% {
    transform: scale(1);
    opacity: 1;
    filter: drop-shadow(0 0 2px rgba(245, 158, 11, 0.4));
  }
`,C9=te`
  0% {
    stroke-dashoffset: 1;
    filter: brightness(1);
  }
  60% {
    stroke-dashoffset: 0;
    filter: brightness(1.3);
  }
  100% {
    stroke-dashoffset: 0;
    filter: brightness(1);
  }
`,A9=te`
  0%, 40% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    transform: scale(1.3);
    opacity: 1;
    filter: brightness(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
    filter: brightness(1);
  }
`,W1="0.6s",E9=w.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .shield-body {
    transform-origin: center;
  }

  .shield-stem {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
  }

  .shield-dot {
    transform-origin: 12px 16px;
  }

  /* Full animation: exclamation draws in */
  ${({$fullPlaying:e,$isLuxe:a})=>e&&W`
      .shield-stem {
        animation: ${a?C9:T9}
          ${W1} ${ot.easeOut} both;
      }
      .shield-dot {
        animation: ${a?A9:j9}
          ${W1} ${ot.easeOut} both;
      }
    `}

  /* Subtle animation: body glow (only when full is NOT playing) */
  ${({$subtlePlaying:e,$fullPlaying:a})=>e&&!a&&W`
      .shield-body {
        animation: ${Oa.glow} ${Dt.glow}
          ${ot.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .shield-body,
    .shield-stem,
    .shield-dot {
      animation: none !important;
    }
  }
`,w2=b.forwardRef(({size:e=24,color:a,animated:i=!0,showFullAnimation:o,showSubtleAnimation:l,"aria-label":u,...m},p)=>{const{themeName:g}=Ma(),h=Da(),v=i&&!h,x=g==="luxe",S=Ot({trigger:o,animationDurationMs:600,enabled:v}),_=Ot({trigger:l,animationDurationMs:parseInt(Dt.glow,10)*1e3||300,enabled:v}),C=b.useMemo(()=>Math.random().toString(36).slice(2,9),[]),T=`shieldalert-gradient-${C}`,A=`shieldalert-glow-${C}`,$=Ra.warning,M=x?a||vn.warning:a||`url(#${T})`,E=x?1.5:2,B=v?()=>{S.wantsHover&&S.trigger(),_.wantsHover&&_.trigger()}:void 0,j=v?()=>{S.wantsHover&&S.trigger(),_.wantsHover&&_.trigger()}:void 0;return c.jsxs(E9,{ref:p,width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$fullPlaying:S.isPlaying,$subtlePlaying:_.isPlaying,$isLuxe:x,onMouseEnter:B,onFocus:j,role:"img","aria-label":u??"Shield warning",tabIndex:v?0:void 0,...m,children:[!x&&c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:T,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"24",y2:"24",children:[c.jsx("stop",{offset:"0%",stopColor:$.start}),c.jsx("stop",{offset:"50%",stopColor:$.mid}),c.jsx("stop",{offset:"100%",stopColor:$.end})]}),c.jsxs("filter",{id:A,children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"blur"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"blur"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),c.jsxs("g",{className:"shield-body",filter:x?void 0:`url(#${A})`,children:[c.jsx("g",{className:"shield-container",children:c.jsx("path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",fill:"none",stroke:M,strokeWidth:E,strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("path",{className:"shield-stem",d:"M12 8v4",pathLength:1,fill:"none",stroke:M,strokeWidth:E,strokeLinecap:"round"}),c.jsx("circle",{className:"shield-dot",cx:12,cy:16,r:1,fill:x?a||vn.warning:a||`url(#${T})`})]})]})});w2.displayName="ShieldAlertIcon";const S2={upcoming:"#f59e0b",active:"#22c55e",completed:"muted",confirmed:"#22c55e",conditional:"#f59e0b","sold-out":"#ef4444",available:"#22c55e",touring:"primary",neutral:"muted"};function bm(e,a){const i=S2[a];return i==="primary"?e.colors.primary:i==="muted"?e.colors.text.muted:i}const R9={upcoming:op,active:Qc,completed:X1,confirmed:Zc,conditional:op,"sold-out":X1,available:Zc,touring:Qc,neutral:null},z9=w.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  text-transform: ${e=>e.$variant==="neutral"?"none":"uppercase"};
  letter-spacing: ${e=>e.$variant==="neutral"?"normal":"0.05em"};
  border-radius: 9999px;
  background: ${e=>`color-mix(in srgb, ${bm(e.theme,e.$variant)} 16%, transparent)`};
  color: ${e=>{const a=S2[e.$variant];return a==="primary"||a==="muted"?bm(e.theme,e.$variant):`color-mix(in srgb, ${a} 62%, ${e.theme.colors.text.primary})`}};
  border: 1px solid ${e=>`color-mix(in srgb, ${bm(e.theme,e.$variant)} 32%, transparent)`};
`;function xs({variant:e,children:a}){const i=R9[e];return c.jsxs(z9,{$variant:e,children:[i&&c.jsx(i,{size:11}),a]})}const M9=1e3,Z1=2e3;function D9(e,a){const i=document.createElement("div"),o=Math.max(window.innerWidth,window.innerHeight)*.8;Object.assign(i.style,{position:"fixed",left:`${e-o/2}px`,top:`${a-o/2}px`,width:`${o}px`,height:`${o}px`,borderRadius:"50%",background:"radial-gradient(circle, rgba(212,175,55,0.55) 0%, rgba(212,175,55,0) 70%)",pointerEvents:"none",zIndex:"9990",animation:`logo-ripple ${M9}ms ease-out forwards`});const l="logo-ripple-keyframes";if(!document.getElementById(l)){const u=document.createElement("style");u.id=l,u.textContent=`
      @keyframes logo-ripple {
        from { transform: scale(0.05); opacity: 0.6; }
        to   { transform: scale(1);    opacity: 0; }
      }
    `,document.head.appendChild(u)}document.body.appendChild(i),i.addEventListener("animationend",()=>i.remove(),{once:!0})}function O9({children:e}){const a=b.useRef([]),i=b.useRef(!1),o=b.useCallback(l=>{const u=Date.now();a.current=[...a.current.filter(p=>u-p<=Z1),u],a.current.filter(p=>u-p<=Z1).length>=3&&!i.current&&(i.current=!0,D9(l.clientX,l.clientY))},[]);return c.jsx("span",{onClick:o,style:{pointerEvents:"auto",cursor:"default"},children:e})}const sp="64px",Qn="900px",lp="1.5rem",vs="1rem",k2="768px",N9=200,L9=te`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,B9=w.section`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${e=>e.theme.spacing.xl};
  align-items: center;
  min-height: 80vh;
  padding: ${e=>e.theme.spacing.xl} 0;

  @media (max-width: 1100px) {
    grid-template-columns: 1.3fr 1fr;
  }

  @media (max-width: ${Qn}) {
    /* Photo-led canvas: full-bleed out of the page gutter, under the header. */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* The desktop grid's align-items:center would otherwise carry over and
       CENTRE the text block horizontally in this column flex — a short block
       (the pre-data shell) sat shrink-wrapped mid-screen and jumped to the
       left gutter once the tagline arrived and forced full width. */
    align-items: stretch;
    position: relative;
    min-height: 100vh;
    min-height: 100svh;
    margin: -${sp} calc(-1 * ${lp}) 0;
    padding: ${sp} ${lp} max(1.25rem, env(safe-area-inset-bottom));
    gap: 0;
  }

  @media (max-width: ${k2}) {
    margin-left: calc(-1 * ${vs});
    margin-right: calc(-1 * ${vs});
    padding-left: ${vs};
    padding-right: ${vs};
  }
`,q9=w.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  min-width: 0;

  @media (max-width: ${Qn}) {
    position: relative;
    z-index: 1;
    gap: ${e=>e.theme.spacing.md};
    align-items: flex-start;
    text-align: left;
  }
`,V9=w.h1`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: clamp(3rem, 12vw, 8rem);
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  background: ${e=>{var a,i;return((i=(a=e.theme.extensions)==null?void 0:a.luxe)==null?void 0:i.goldShimmer)??e.theme.colors.primary}};
  background-size: 200% 200%;
  animation: ${L9} 6s ease infinite;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  position: fixed;
  z-index: ${e=>e.theme.zIndex.sticky+1};
  margin: 0;
  pointer-events: none;
`,U9=w.p`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  margin-top: ${e=>e.theme.spacing.lg};

  @media (max-width: ${Qn}) {
    margin-top: ${e=>e.theme.spacing.sm};
  }
`,F9=w.p`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  color: ${e=>e.theme.colors.text.secondary};
  line-height: ${e=>e.theme.typography.lineHeight.relaxed};
  max-width: 100%;
  margin: 0;

  @media (max-width: ${Qn}) {
    font-size: ${e=>e.theme.typography.fontSize.md};
    line-height: ${e=>e.theme.typography.lineHeight.normal};
  }
`,H9=w.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  flex-wrap: wrap;
`,Q1=w(it)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: ${e=>e.theme.transitions.fast};
  opacity: 0.9;

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }
`,P9=w.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.xs};

  @media (max-width: ${Qn}) {
    /* One row, always: the primary gets the wider cell. */
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: ${e=>e.theme.spacing.sm};
    width: 100%;
    margin-top: ${e=>e.theme.spacing.sm};
  }
`,yh=W`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
  text-decoration: none;
  border-radius: ${e=>e.theme.borderRadius.sm};
  transition: ${e=>e.theme.transitions.fast};

  @media (max-width: ${Qn}) {
    padding: 0.8rem 0.5rem;
    letter-spacing: 0.06em;
  }

  ${e=>e.$primary?`
    background: linear-gradient(135deg, ${e.theme.colors.primary}, ${e.theme.colors.primary.dark});
    color: ${Ps(e.theme)};
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 20px ${e.theme.colors.primary}4D;
    }
  `:`
    background: ${e.theme.colors.primary}14;
    color: ${e.theme.colors.primary};
    border: 1px solid ${e.theme.colors.primary}4D;
    &:hover {
      border-color: ${e.theme.colors.primary}99;
      background: ${e.theme.colors.primary}0D;
    }
  `}
`,G9=w(it)`
  ${yh}
`,J1=w.a`
  ${yh}
`,ex=w.span`
  ${yh}
  color: transparent;
  pointer-events: none;
  user-select: none;
`,bc=w(gh)`
  display: inline-block;
  height: 1em;
  vertical-align: middle;
`,Y9=w.div`
  min-width: 0;
  max-height: min(60vh, 550px);
  overflow: hidden;
  border-radius: 12px;
  position: relative;

  @media (max-width: ${Qn}) {
    position: absolute;
    inset: 0;
    z-index: 0;
    max-height: none;
    border-radius: 0;

    /* Scrim: a short band under the header for the menu glyph, clear through
       the middle so the photo reads, solid toward the text block. */
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      background: linear-gradient(
        to bottom,
        color-mix(in srgb, ${e=>e.theme.colors.background.primary} 70%, transparent) 0%,
        transparent 18%,
        transparent 42%,
        color-mix(in srgb, ${e=>e.theme.colors.background.primary} 82%, transparent) 72%,
        ${e=>e.theme.colors.background.primary} 100%
      );
    }
  }
`,I9=w.div`
  filter: ${e=>e.$blurred?"blur(8px)":"none"};
  opacity: ${e=>e.$blurred?"0.82":"1"};
  transition: filter 300ms ease, opacity 300ms ease;
  cursor: ${e=>e.$blurred?"pointer":"default"};

  @media (max-width: ${Qn}) {
    position: absolute;
    inset: 0;

    /*
     * ProtectedImage nests <div><picture><img>, and the <picture> is
     * auto-height — so height:100% on the outer div alone still lets the img
     * settle at its intrinsic ratio and cover only the top of the canvas.
     * Stretch the whole chain, then bias the crop upward: these frames put
     * the face in the top third, and a full-height cover crop is deep.
     */
    > div,
    picture {
      display: block;
      height: 100%;
    }

    img {
      height: 100%;
      object-position: center 25%;
    }
  }
`,X9=te`
  0%, 100% { transform: scale(1); opacity: 0.92; }
  50% { transform: scale(1.05); opacity: 1; }
`,K9=w.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;

  @media (max-width: ${Qn}) {
    /* Sit in the clear band of the photo, above the text block. */
    align-items: flex-start;
    padding-top: 36vh;
    padding-top: 36svh;
  }
`,W9=w.span`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  padding: 0.625rem 1.25rem;
  background: color-mix(in srgb, ${e=>e.theme.colors.surface} 88%, transparent);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid ${e=>e.theme.colors.primary}66;
  border-radius: 999px;
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: 0 4px 20px ${e=>e.theme.colors.background.primary}99;
  animation: ${X9} 2.4s ease-in-out infinite;
`,Z9="min(60vh, 550px)";function Q9(){const e=Kr(),a=t2(),i=s2(),{activeStop:o,nextStop:l}=wu(),{primary:u,secondary:m}=wA({homeLocation:SA(e.currentLocation,e.identity.location),activeStop:o,nextStop:l}),p=Fe("hero","badge_here_now","Here Now"),g=Fe("hero","badge_next_stop","Next Stop"),h=Fe("hero","cta_text","Text Me"),v=Fe("hero","cta_rates","Rates"),x=Fe("hero","cta_onlyfans","OnlyFans"),S=Fe("hero","reveal_hint","Tap to reveal"),_=e.gallery.find(he=>he.featured),C=e2(),T=[e.identity.pronouns,e.identity.gender].filter(Boolean).join(" · "),[A,$]=b.useState(window.innerWidth),M=yr(),{trackInteraction:E}=Zn(),B=Su(),{revealed:j,triggerReveal:R}=ph(),z=(e.contact.phone??"").trim(),U=(e.contact.onlyfans??"").replace("@","").trim(),ae=i==="fans",Y=b.useCallback(()=>{j||R()},[j,R]),Q=b.useCallback((he,ke)=>{M.button.click(),E({type:"click",data:{elementType:"button",eventName:"hero_cta",eventLabel:he,pageUrl:window.location.href,...ke?{conversionGoal:ke}:{}}})},[M,E]),ie=b.useCallback((he,ke)=>{M.button.click(),B("hero_cta",he,ke,vA(he))},[M,B]);b.useEffect(()=>{const he=()=>$(window.innerWidth);return window.addEventListener("resize",he,{passive:!0}),()=>window.removeEventListener("resize",he)},[]);const ve=16,_e=A<=768?Math.max(3*ve,Math.min(A*.18,6*ve)):Math.max(3*ve,Math.min(A*.12,8*ve)),{anchorRef:I,style:re}=kA({targetSelector:"[data-header-brand]",initialFontPx:_e,scrollThreshold:window.innerHeight*.35}),ue=A<=Number.parseInt(Qn,10);return c.jsxs(B9,{children:[c.jsxs(q9,{children:[c.jsxs("div",{style:{alignSelf:"stretch"},children:[c.jsx("div",{ref:I,style:{height:`${_e*1.15}px`,lineHeight:1}}),c.jsx(V9,{style:re,children:c.jsx(O9,{children:a.brand.displayName})}),c.jsx(U9,{children:C&&!T?c.jsx(bc,{$width:"12ch",$radius:"4px","aria-hidden":"true"}):T})]}),c.jsx(F9,{children:C&&!e.identity.tagline?c.jsxs(c.Fragment,{children:[c.jsx(bc,{$width:"100%",$radius:"4px","aria-hidden":"true"}),c.jsx("br",{}),c.jsx(bc,{$width:"55%",$radius:"4px","aria-hidden":"true"})]}):e.identity.tagline}),c.jsxs(H9,{"data-testid":"hero-location",children:[C&&u.kind==="home"&&!u.location?c.jsxs(xs,{variant:"active",children:[p," · ",c.jsx(bc,{$width:"9ch",$radius:"4px","aria-hidden":"true"})]}):u.kind==="active"?c.jsx(Q1,{to:`/tour?city=${tp(u.stop.city)}`,children:c.jsxs(xs,{variant:"active",children:[p," · ",rp(u.stop)]})}):c.jsx(xs,{variant:"active",children:u.location?`${p} · ${u.location}`:p}),m&&c.jsx(Q1,{to:`/tour?city=${tp(m.stop.city)}`,children:c.jsxs(xs,{variant:"touring",children:[g," · ",rp(m.stop)]})})]}),c.jsxs(P9,{"data-testid":"hero-cta-row",children:[!z&&C&&c.jsx(ex,{$primary:!ae,"aria-hidden":"true",children:h}),z&&c.jsx(J1,{href:`sms:${z}`,$primary:!ae,onClick:()=>ie("sms","contact"),onMouseEnter:()=>M.button.hover(),children:h}),c.jsx(G9,{to:"/rates",onClick:()=>Q("rates"),onMouseEnter:()=>M.button.hover(),children:v}),!U&&C&&c.jsx(ex,{$primary:ae,"aria-hidden":"true",children:x}),U&&c.jsx(J1,{href:`https://onlyfans.com/${U}`,target:"_blank",rel:"noopener noreferrer",$primary:ae,onClick:()=>ie("onlyfans","fans"),onMouseEnter:()=>M.button.hover(),children:x})]})]}),c.jsx(Y9,{"data-testid":"hero-photo",...j?{}:{[hh]:""},onClick:j?void 0:Y,children:_?c.jsxs(c.Fragment,{children:[c.jsx(I9,{$blurred:!j,children:c.jsx(h2,{src:_.src,webpSrc:_.webpSrc,alt:_.alt,...ue?{width:"100%",height:"100%",noBorder:!0}:{intrinsicWidth:_.intrinsicWidth,intrinsicHeight:_.intrinsicHeight},borderRadius:ue?"0":"12px",loading:"eager",fetchPriority:"high"})}),!j&&c.jsx(K9,{"aria-hidden":"true",children:c.jsxs(W9,{children:[c.jsx(sv,{size:16,"aria-hidden":"true"}),S]})})]}):c.jsx(gh,{$height:ue?"100%":Z9,$radius:ue?"0":"12px"})})]})}const J9=te`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,e7=w.div`
  width: 100%;
  overflow: hidden;
  margin: ${e=>e.theme.spacing.lg} 0;
`,t7=w.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  overflow-x: auto;
  padding: ${e=>e.theme.spacing.sm} 0 ${e=>e.theme.spacing.md};
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* hide scrollbar visually */
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,_2=w.div`
  ${Hs}
  flex: 0 0 auto;
  scroll-snap-align: start;
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  background: ${e=>e.theme.colors.background.secondary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.lg};
  min-width: 220px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  animation: ${J9} 0.3s ease both;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary}60;
    background: ${e=>e.theme.colors.background.tertiary};
  }
`,n7=w.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
`,a7=w.div`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: ${e=>e.theme.typography.fontSize.md};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  color: ${e=>e.theme.colors.text.primary};
`,r7=w.div`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.secondary};
`,ym=e=>e==="confirmed"?"#22c55e":e==="sold-out"?"#ef4444":"#f59e0b",i7=w.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: ${e=>`color-mix(in srgb, ${ym(e.$status)} 16%, transparent)`};
  color: ${e=>`color-mix(in srgb, ${ym(e.$status)} 62%, ${e.theme.colors.text.primary})`};
  border: 1px solid ${e=>`color-mix(in srgb, ${ym(e.$status)} 32%, transparent)`};
`,o7=w.div`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  font-style: italic;
`,s7=w.div`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: ${e=>e.theme.typography.fontSize.md};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  color: ${e=>e.theme.colors.primary};
`,l7=w.div`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.secondary};
  line-height: ${e=>e.theme.typography.lineHeight.relaxed};
`,c7=w(it)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  margin-top: auto;

  &:hover { text-decoration: underline; }
`;function u7({item:e}){return c.jsxs(Ts,{as:_2,children:[c.jsxs(n7,{children:[c.jsx(B6,{size:12}),"Tour Stop"]}),c.jsxs(a7,{"data-magic-title":!0,children:[e.city,", ",e.state]}),c.jsxs(r7,{children:[c.jsx(j6,{size:11,style:{display:"inline",marginRight:4,verticalAlign:"middle"}}),uh(e.startDate,e.endDate)]}),e.bookingStatus&&c.jsx(i7,{$status:e.bookingStatus,children:e.bookingStatus}),e.availabilityNote&&c.jsx(o7,{children:e.availabilityNote})]})}function d7({item:e}){return c.jsxs(Ts,{as:_2,children:[c.jsx(s7,{"data-magic-title":!0,children:e.label}),e.subtitle&&c.jsx(l7,{children:e.subtitle}),c.jsxs(c7,{to:e.href,children:["Learn more ",c.jsx(_c,{size:12})]})]})}function f7({items:e}){return e.length===0?null:c.jsx(e7,{children:c.jsx(t7,{children:e.map(a=>a.type==="tour_stop"?c.jsx(u7,{item:a},a.id):c.jsx(d7,{item:a},a.id))})})}const m7=w.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
`,p7=w.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.colors.text.muted};
`,h7=w.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.secondary};
  background: ${e=>e.theme.colors.background.secondary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 999px;
  transition: ${e=>e.theme.transitions.fast};

  svg {
    color: ${e=>e.theme.colors.primary};
  }

  &:hover {
    border-color: ${e=>e.theme.colors.border.hover};
    color: ${e=>e.theme.colors.text.primary};
  }
`,g7=w.a`
  display: inline-flex;
  text-decoration: none;
`,b7=w(it)`
  display: inline-flex;
  text-decoration: none;
`,y7=w(it)`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
  color: ${e=>e.theme.colors.primary};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`,x7=3;function v7({profiles:e}){const a=Su(),i=b.useCallback(u=>{a("verified_strip_click",u,"verified_profile")},[a]);if(e.length===0)return null;const o=e.slice(0,x7),l=e.length-o.length;return c.jsxs(m7,{"aria-label":"Verified profiles",children:[c.jsx(p7,{children:"Verified on"}),o.map(u=>{const m=u.href??u.url??"",p=typeof m=="string"?m.trim():"",g=c.jsxs(h7,{children:[c.jsx(A6,{size:13}),u.platform]});return p.length>0?c.jsx(g7,{href:p,rel:"noopener",target:"_blank",onClick:()=>i(u.platform),children:g},u.platform):c.jsx(b7,{to:"/banners",children:g},u.platform)}),c.jsx(y7,{to:"/banners",children:l>0?`+${l} more — see all →`:"All verified profiles →"})]})}w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${e=>e.$zIndex??za.modal};
  padding: ${e=>e.theme.spacing.lg};
`;w.div`
  background: ${e=>e.theme.colors.surface||e.theme.colors.background};
  border: 2px solid ${e=>e.theme.colors.primary.main};
  border-radius: ${e=>e.theme.borderRadius.md};
  max-width: ${e=>e.$maxWidth||"600px"};
  width: 100%;
  max-height: ${e=>e.$maxHeight||"90vh"};
  display: flex;
  flex-direction: column;
  box-shadow: ${e=>e.theme.shadows.xl};

  /* Cyberpunk neon glow effect */
  ${e=>{var a;return((a=e.theme.extensions)==null?void 0:a.cyberpunk)&&W`
      box-shadow:
        0 0 30px ${e.theme.colors.primary.main}40,
        ${e.theme.shadows.xl};
    `}}
`;w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing.xl};
  border-bottom: 1px solid ${e=>e.theme.colors.border.default};
  flex-shrink: 0;
`;w.h2`
  color: ${e=>e.theme.colors.primary.main};
  margin: 0;
  font-size: ${e=>e.theme.typography.fontSize["2xl"]};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};

  /* Cyberpunk text glow */
  ${e=>{var a;return((a=e.theme.extensions)==null?void 0:a.cyberpunk)&&W`
      text-shadow: 0 0 10px ${e.theme.colors.primary.main};
    `}}
`;w.button`
  background: none;
  border: none;
  color: ${e=>e.theme.colors.accent.main||e.theme.colors.secondary.main};
  font-size: ${e=>e.theme.typography.fontSize["2xl"]};
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${e=>e.theme.transitions.normal};

  &:hover {
    color: ${e=>e.theme.colors.primary.main};
  }
`;w.div`
  padding: ${e=>e.theme.spacing.xl};
  overflow-y: auto;
  flex: 1;
`;w.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.xl};
  justify-content: flex-end;
`;w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${e=>{var a;return((a=e.theme.zIndex)==null?void 0:a.modal)||9999}};
  padding: ${e=>e.theme.spacing.md};
  font-family: ${e=>e.theme.typography.fontFamily.mono||"monospace"};
`;w.div`
  background-color: ${e=>e.theme.colors.surface||e.theme.colors.background};
  border: 2px solid ${e=>e.$borderColor};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.lg};
  max-width: 400px;
  width: 100%;
  box-shadow: 0 0 20px ${e=>e.$borderColor};
  animation: fadeInScale 0.3s ease-out;

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(-10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;w.h2`
  color: ${e=>e.$titleColor};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  margin: 0 0 ${e=>e.theme.spacing.md} 0;
  font-family: ${e=>e.theme.typography.fontFamily.mono||"monospace"};

  /* Cyberpunk text glow */
  ${e=>{var a;return((a=e.theme.extensions)==null?void 0:a.cyberpunk)&&W`
      text-shadow: 0 0 10px ${e.$titleColor};
    `}}
`;w.p`
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.base};
  margin: 0 0 ${e=>e.theme.spacing.lg} 0;
  line-height: 1.5;
  font-family: ${e=>e.theme.typography.fontFamily.mono||"monospace"};
`;w.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
`;w.button`
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.lg};
  font-size: ${e=>e.theme.typography.fontSize.base};
  font-family: ${e=>e.theme.typography.fontFamily.mono||"monospace"};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  border: 2px solid
    ${e=>{switch(e.$variant){case"danger":return e.theme.colors.error.main;case"warning":return e.theme.colors.warning.main;case"success":return e.theme.colors.success.main;case"secondary":return e.theme.colors.border.default;default:return e.theme.colors.primary.main}}};
  background: ${e=>{switch(e.$variant){case"secondary":return"transparent";case"danger":return e.theme.colors.error.main;case"warning":return e.theme.colors.warning.main;case"success":return e.theme.colors.success.main;default:return e.theme.colors.primary.main}}};
  color: ${e=>{switch(e.$variant){case"secondary":return e.theme.colors.text.primary;default:return"#000"}}};
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${e=>e.theme.transitions.normal};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  /* Cyberpunk neon glow on hover */
  ${e=>{var a;return((a=e.theme.extensions)==null?void 0:a.cyberpunk)&&W`
      &:hover {
        box-shadow: 0 0 10px
          ${(()=>{switch(e.$variant){case"danger":return e.theme.colors.error.main;case"warning":return e.theme.colors.warning.main;case"success":return e.theme.colors.success.main;case"secondary":return e.theme.colors.border.default;default:return e.theme.colors.primary.main}})()};
      }
    `}}
`;b.createContext(void 0);var w7=te`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;w.div`
  width: 100%;
  height: ${e=>e.$height}px;
  background: ${e=>e.theme.colors.background||"#1a1a1a"};
  border-radius: ${e=>e.theme.borderRadius.sm};
  overflow: hidden;
  position: relative;
  border: 1px solid ${e=>e.theme.colors.border.default};
`;w.div`
  height: 100%;
  width: ${e=>e.$progress}%;
  transition: width 0.3s ease-out;
  position: relative;

  /* Base background color based on variant */
  background: ${e=>{switch(e.$variant){case"success":return e.theme.colors.success.main;case"error":return e.theme.colors.error.main;case"warning":return e.theme.colors.warning.main;case"info":return e.theme.colors.primary.main;case"loading":return e.theme.colors.accent.main||e.theme.colors.secondary.main;default:return e.theme.colors.primary.main}}};

  /* Animated gradient for loading state */
  ${e=>e.$animated&&W`
      background: linear-gradient(
        90deg,
        ${(()=>{switch(e.$variant){case"success":return e.theme.colors.success.main;case"error":return e.theme.colors.error.main;case"warning":return e.theme.colors.warning.main;case"info":return e.theme.colors.primary.main;case"loading":return e.theme.colors.accent.main||e.theme.colors.secondary.main;default:return e.theme.colors.primary.main}})()},
        ${(()=>{switch(e.$variant){case"success":return`${e.theme.colors.success.main}88`;case"error":return`${e.theme.colors.error.main}88`;case"warning":return`${e.theme.colors.warning.main}88`;case"info":return`${e.theme.colors.primary.main}88`;case"loading":return`${e.theme.colors.accent.main||e.theme.colors.secondary.main}88`;default:return`${e.theme.colors.primary.main}88`}})()},
        ${(()=>{switch(e.$variant){case"success":return e.theme.colors.success.main;case"error":return e.theme.colors.error.main;case"warning":return e.theme.colors.warning.main;case"info":return e.theme.colors.primary.main;case"loading":return e.theme.colors.accent.main||e.theme.colors.secondary.main;default:return e.theme.colors.primary.main}})()}
      );
      background-size: 200% 100%;
      animation: ${w7} 2s linear infinite;
    `}

  /* Cyberpunk neon glow */
  ${e=>{var a;return((a=e.theme.extensions)==null?void 0:a.cyberpunk)&&W`
      box-shadow: ${(()=>{var i,o,l,u,m,p,g,h,v,x,S,_;switch(e.$variant){case"success":return((l=(o=(i=e.theme.extensions)==null?void 0:i.cyberpunk)==null?void 0:o.neonGlow)==null?void 0:l.green)||`0 0 10px ${e.theme.colors.success.main}`;case"error":return`0 0 10px ${e.theme.colors.error.main}`;case"warning":return`0 0 10px ${e.theme.colors.warning.main}`;case"info":return((p=(m=(u=e.theme.extensions)==null?void 0:u.cyberpunk)==null?void 0:m.neonGlow)==null?void 0:p.cyan)||`0 0 10px ${e.theme.colors.primary.main}`;case"loading":return((v=(h=(g=e.theme.extensions)==null?void 0:g.cyberpunk)==null?void 0:h.neonGlow)==null?void 0:v.magenta)||`0 0 10px ${e.theme.colors.accent.main||e.theme.colors.secondary.main}`;default:return((_=(S=(x=e.theme.extensions)==null?void 0:x.cyberpunk)==null?void 0:S.neonGlow)==null?void 0:_.cyan)||`0 0 10px ${e.theme.colors.primary.main}`}})()};
    `}}
`;w.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: 600;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
  z-index: ${Ix.content};
`;b.createContext(void 0);w.div`
  position: fixed;
  top: ${e=>e.theme.spacing.lg};
  right: ${e=>e.theme.spacing.lg};
  z-index: ${e=>{var a;return((a=e.theme.zIndex)==null?void 0:a.toast)||1e4}};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  pointer-events: none;

  @media (max-width: ${e=>{var a;return((a=e.theme.breakpoints)==null?void 0:a.sm)||"640px"}}) {
    left: ${e=>e.theme.spacing.sm};
    right: ${e=>e.theme.spacing.sm};
  }
`;w.div`
  background: ${e=>e.theme.colors.surface||e.theme.colors.background};
  border: 1px solid
    ${e=>{switch(e.$type){case"success":return e.theme.colors.success.main;case"error":return e.theme.colors.error.main;case"warning":return e.theme.colors.warning.main;case"info":return e.theme.colors.primary.main;case"loading":return e.theme.colors.border.default;default:return e.theme.colors.border.default}}};
  border-left: 4px solid
    ${e=>{switch(e.$type){case"success":return e.theme.colors.success.main;case"error":return e.theme.colors.error.main;case"warning":return e.theme.colors.warning.main;case"info":return e.theme.colors.primary.main;case"loading":return e.theme.colors.accent.main||e.theme.colors.secondary.main;default:return e.theme.colors.primary.main}}};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.lg};
  padding: ${e=>e.theme.spacing.md};
  min-width: 300px;
  max-width: 600px;
  pointer-events: auto;
  cursor: pointer;
  animation: slideInRight 0.3s ease-out;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Cyberpunk neon glow based on type */
  ${e=>{var a;return((a=e.theme.extensions)==null?void 0:a.cyberpunk)&&W`
      box-shadow:
        ${(()=>{var i,o,l,u,m,p,g,h,v,x,S,_;switch(e.$type){case"success":return((l=(o=(i=e.theme.extensions)==null?void 0:i.cyberpunk)==null?void 0:o.neonGlow)==null?void 0:l.green)||`0 0 10px ${e.theme.colors.success.main}`;case"error":return`0 0 10px ${e.theme.colors.error.main}`;case"warning":return`0 0 10px ${e.theme.colors.warning.main}`;case"info":return((p=(m=(u=e.theme.extensions)==null?void 0:u.cyberpunk)==null?void 0:m.neonGlow)==null?void 0:p.cyan)||`0 0 10px ${e.theme.colors.primary.main}`;case"loading":return((v=(h=(g=e.theme.extensions)==null?void 0:g.cyberpunk)==null?void 0:h.neonGlow)==null?void 0:v.magenta)||`0 0 10px ${e.theme.colors.accent.main||e.theme.colors.secondary.main}`;default:return((_=(S=(x=e.theme.extensions)==null?void 0:x.cyberpunk)==null?void 0:S.neonGlow)==null?void 0:_.cyan)||`0 0 10px ${e.theme.colors.primary.main}`}})()},
        ${e.theme.shadows.lg};
    `}}
`;w.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  width: 100%;
`;w.span`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  flex-shrink: 0;
`;w.p`
  margin: 0;
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  flex: 1;
`;w.button`
  background: transparent;
  border: none;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  line-height: 1;
  flex-shrink: 0;
  transition: color 0.2s ease;

  &:hover {
    color: ${e=>e.theme.colors.text.primary};
  }
`;w.div`
  position: relative;
  display: inline-block;
`;w.div`
  position: absolute;
  top: calc(100% + ${e=>e.theme.spacing.xs});
  ${e=>e.$align==="right"?"right: 0;":"left: 0;"}
  z-index: ${e=>{var a;return((a=e.theme.zIndex)==null?void 0:a.dropdown)||1e3}};
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.lg};
  min-width: 200px;
  opacity: ${e=>e.$isOpen?1:0};
  pointer-events: ${e=>e.$isOpen?"auto":"none"};
  transform: ${e=>e.$isOpen?"translateY(0)":"translateY(-8px)"};
  transition: all ${e=>e.theme.transitions.fast};

  /* Cyberpunk neon effect */
  ${e=>{var i;const a=e.theme;return((i=a.extensions)==null?void 0:i.cyberpunk)&&W`
        border-color: ${a.colors.primary.main};
        box-shadow: ${a.extensions.cyberpunk.neonGlow.cyan};
      `}}
`;w.button`
  width: 100%;
  padding: ${e=>e.theme.spacing.sm}
    ${e=>e.theme.spacing.md};
  text-align: left;
  border: none;
  background: transparent;
  color: ${e=>e.theme.colors.text.primary};
  cursor: pointer;
  transition: background ${e=>e.theme.transitions.fast};
  font-family: ${e=>e.theme.typography.fontFamily.body};
  font-size: ${e=>e.theme.typography.fontSize.base};

  &:first-child {
    border-top-left-radius: ${e=>e.theme.borderRadius.md};
    border-top-right-radius: ${e=>e.theme.borderRadius.md};
  }

  &:last-child {
    border-bottom-left-radius: ${e=>e.theme.borderRadius.md};
    border-bottom-right-radius: ${e=>e.theme.borderRadius.md};
  }

  &:hover {
    background: ${e=>{var i;const a=e.theme;return((i=a.colors.hover)==null?void 0:i.surface)||a.colors.secondary.main}};
  }

  &:focus {
    outline: 2px solid ${e=>e.theme.colors.primary.main};
    outline-offset: -2px;
  }

  &:active {
    background: ${e=>e.theme.colors.hover.surface};
  }
`;var S7=w.div`
  display: inline-block;
`,k7=w.div`
  position: fixed;
  z-index: ${e=>{var a;return((a=e.theme.zIndex)==null?void 0:a.tooltip)||9999}};
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.xs}
    ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.sm};
  box-shadow: ${e=>e.theme.shadows.md};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-family: ${e=>e.theme.typography.fontFamily.body};
  max-width: 300px;
  opacity: ${e=>e.$isVisible?1:0};
  pointer-events: ${e=>e.$isVisible?"auto":"none"};
  transition: opacity ${e=>e.theme.transitions.fast};
  border: 1px solid ${e=>e.theme.colors.border.default};

  /* Position-specific styling */
  ${e=>{switch(e.$position){case"top":return W`
          left: ${e.$x}px;
          bottom: calc(100vh - ${e.$y}px + 8px);
          transform: translateX(-50%);
        `;case"bottom":return W`
          left: ${e.$x}px;
          top: ${e.$y+8}px;
          transform: translateX(-50%);
        `;case"left":return W`
          right: calc(100vw - ${e.$x}px + 8px);
          top: ${e.$y}px;
          transform: translateY(-50%);
        `;case"right":return W`
          left: ${e.$x+8}px;
          top: ${e.$y}px;
          transform: translateY(-50%);
        `}}}

  /* Cyberpunk neon border and glow */
  ${e=>{var i;const a=e.theme;return((i=a.extensions)==null?void 0:i.cyberpunk)&&W`
        border-color: ${a.colors.primary.main};
        box-shadow: ${a.extensions.cyberpunk.neonGlow.cyan};
        backdrop-filter: blur(4px);
      `}}
`,_7=w.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;

  ${e=>{var o;const a=e.theme,i=(o=a.extensions)!=null&&o.cyberpunk?a.colors.primary.main:a.colors.border.default;switch(e.$position){case"top":return W`
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 6px 6px 0 6px;
          border-color: ${i} transparent transparent transparent;
        `;case"bottom":return W`
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 0 6px 6px 6px;
          border-color: transparent transparent ${i} transparent;
        `;case"left":return W`
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px 0 6px 6px;
          border-color: transparent transparent transparent ${i};
        `;case"right":return W`
          left: -6px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px 6px 6px 0;
          border-color: transparent ${i} transparent transparent;
        `}}}
`,ku=({children:e,content:a,delay:i=500,position:o="top"})=>{const[l,u]=b.useState(!1),[m,p]=b.useState({x:0,y:0}),g=b.useRef(void 0),h=b.useRef(null),v=b.useId(),x=b.useRef(!1),S=b.useCallback(()=>{if(h.current){const j=h.current.getBoundingClientRect();p({x:j.left+j.width/2,y:o==="bottom"?j.bottom:j.top})}},[o]),_=b.useCallback(()=>{S(),u(!0)},[S]),C=b.useCallback(()=>{g.current&&(clearTimeout(g.current),g.current=void 0),setTimeout(()=>{x.current||u(!1)},100)},[]),T=b.useCallback(()=>{g.current&&clearTimeout(g.current),g.current=setTimeout(_,i)},[_,i]),A=b.useCallback(()=>{g.current&&(clearTimeout(g.current),g.current=void 0),C()},[C]),$=b.useCallback(()=>{x.current=!0},[]),M=b.useCallback(()=>{x.current=!1,u(!1)},[]),E=b.useCallback(j=>{j.key==="Enter"||j.key===" "?(j.preventDefault(),l?(x.current=!1,u(!1)):_()):j.key==="Escape"&&l&&(j.preventDefault(),x.current=!1,u(!1))},[l,_]),B=b.useCallback(()=>{l?(x.current=!1,u(!1)):_()},[l,_]);return b.useEffect(()=>{if(!l)return;const j=z=>{const U=z.target;h.current&&!h.current.contains(U)&&(x.current=!1,u(!1))},R=setTimeout(()=>{document.addEventListener("click",j)},0);return()=>{clearTimeout(R),document.removeEventListener("click",j)}},[l]),b.useEffect(()=>{if(!l)return;const j=R=>{R.key==="Escape"&&(x.current=!1,u(!1))};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[l]),b.useEffect(()=>()=>{g.current&&clearTimeout(g.current)},[]),c.jsxs(c.Fragment,{children:[c.jsx(S7,{ref:h,tabIndex:0,onMouseEnter:T,onMouseLeave:A,onKeyDown:E,onClick:B,"aria-describedby":l?v:void 0,children:e}),l&&Yv.createPortal(c.jsxs(k7,{id:v,role:"tooltip",$isVisible:l,$position:o,$x:m.x,$y:m.y,onMouseEnter:$,onMouseLeave:M,children:[a,c.jsx(_7,{$position:o})]}),document.body)]})};w.span`
  cursor: help;
  border-bottom: 1px dotted ${e=>e.theme.colors.text.secondary};

  &:hover {
    border-bottom-color: ${e=>e.theme.colors.primary.main};
  }
`;w.div`
  position: fixed;
  z-index: ${e=>{var a;return((a=e.theme.zIndex)==null?void 0:a.tooltip)||9999}};
  max-width: 320px;
  opacity: ${e=>e.$isVisible?1:0};
  pointer-events: ${e=>e.$isVisible?"auto":"none"};
  transition: opacity ${e=>e.theme.transitions.fast};

  ${e=>{switch(e.$position){case"top":return W`
          left: ${e.$x}px;
          bottom: calc(100vh - ${e.$y}px + 12px);
          transform: translateX(-50%);
        `;case"bottom":return W`
          left: ${e.$x}px;
          top: ${e.$y+12}px;
          transform: translateX(-50%);
        `}}}
`;w.div`
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.lg};
  overflow: hidden;
  font-family: ${e=>e.theme.typography.fontFamily.body};

  /* Cyberpunk enhancement */
  ${e=>{var i;const a=e.theme;return((i=a.extensions)==null?void 0:i.cyberpunk)&&W`
        border-color: ${a.colors.secondary.main};
        box-shadow: ${a.extensions.cyberpunk.neonGlow.magenta};
        backdrop-filter: blur(8px);

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            ${a.colors.secondary.main},
            transparent
          );
        }
      `}}
`;w.div`
  padding: ${e=>e.theme.spacing.sm};
  background: ${e=>{var i;const a=e.theme;return(i=a.extensions)!=null&&i.cyberpunk?`${a.colors.background.primary}ee`:a.colors.background.secondary||a.colors.background.primary}};
  border-bottom: 1px solid ${e=>e.theme.colors.border.default};
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
`;w.span`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  opacity: 0.7;
`;w.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;w.div`
  padding: ${e=>e.theme.spacing.sm};
`;w.p`
  margin: 0 0 ${e=>e.theme.spacing.sm} 0;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.primary};
  line-height: 1.5;
`;w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.sm};
`;w.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`;w.a`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.primary.main};
  text-decoration: none;
  font-weight: ${e=>e.theme.typography.fontWeight.medium};

  &:hover {
    text-decoration: underline;
  }

  /* External link icon */
  &::after {
    content: '↗';
    font-size: 0.8em;
  }
`;w.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  left: 50%;
  transform: translateX(-50%);

  ${e=>{var o;const a=e.theme,i=(o=a.extensions)!=null&&o.cyberpunk?a.colors.secondary.main:a.colors.border.default;switch(e.$position){case"top":return W`
          bottom: -8px;
          border-width: 8px 8px 0 8px;
          border-color: ${i} transparent transparent transparent;
        `;case"bottom":return W`
          top: -8px;
          border-width: 0 8px 8px 8px;
          border-color: transparent transparent ${i} transparent;
        `}}}
`;w.div`
  border-bottom: 2px solid ${e=>e.theme.colors.border.default};
  margin-bottom: ${e=>e.theme.spacing.lg};
`;w.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
  overflow-x: auto;

  /* Hide scrollbar for cleaner appearance */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;w.button`
  padding: ${e=>e.theme.spacing.md}
    ${e=>e.theme.spacing.lg};
  background: none;
  border: none;
  border-bottom: 2px solid
    ${e=>{const a=e.theme;return e.$isActive?a.colors.primary.main:"transparent"}};
  color: ${e=>{const a=e.theme;return e.$isActive?a.colors.primary.main:a.colors.text.secondary}};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>{const a=e.theme;return e.$isActive?a.typography.fontWeight.semibold:a.typography.fontWeight.normal}};
  font-family: ${e=>e.theme.typography.fontFamily.body};
  margin-bottom: -2px;
  cursor: pointer;
  transition: color ${e=>e.theme.transitions.fast};
  white-space: nowrap;

  &:hover {
    color: ${e=>e.theme.colors.primary.main};
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary.main};
    outline-offset: 2px;
  }

  /* Cyberpunk neon effect on active tab */
  ${e=>{var i;const a=e.theme;return e.$isActive&&((i=a.extensions)==null?void 0:i.cyberpunk)&&W`
        text-shadow: ${a.extensions.cyberpunk.neonGlow.magenta};
        box-shadow: 0 0 10px ${a.colors.primary.main}50;
      `}}
`;w.div`
  padding: ${e=>e.theme.spacing.md} 0;
`;w.div`
  position: relative;
  display: inline-block;
`;w.div`
  position: absolute;
  z-index: ${e=>{var a;return((a=e.theme.zIndex)==null?void 0:a.popover)||1100}};
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.xl};
  padding: ${e=>e.theme.spacing.md};
  min-width: 200px;
  max-width: 400px;
  opacity: ${e=>e.$isOpen?1:0};
  pointer-events: ${e=>e.$isOpen?"auto":"none"};
  transition: all ${e=>e.theme.transitions.fast};

  /* Position-based offset */
  ${e=>{const i=e.theme.spacing.sm;switch(e.$position){case"top":return W`
          bottom: calc(100% + ${i});
          ${e.$align==="start"&&"left: 0;"}
          ${e.$align==="center"&&"left: 50%; transform: translateX(-50%);"}
          ${e.$align==="end"&&"right: 0;"}
          transform: ${e.$align==="center"?e.$isOpen?"translateX(-50%) translateY(0)":"translateX(-50%) translateY(8px)":e.$isOpen?"translateY(0)":"translateY(8px)"};
        `;case"bottom":return W`
          top: calc(100% + ${i});
          ${e.$align==="start"&&"left: 0;"}
          ${e.$align==="center"&&"left: 50%; transform: translateX(-50%);"}
          ${e.$align==="end"&&"right: 0;"}
          transform: ${e.$align==="center"?e.$isOpen?"translateX(-50%) translateY(0)":"translateX(-50%) translateY(-8px)":e.$isOpen?"translateY(0)":"translateY(-8px)"};
        `;case"left":return W`
          right: calc(100% + ${i});
          ${e.$align==="start"&&"top: 0;"}
          ${e.$align==="center"&&"top: 50%; transform: translateY(-50%);"}
          ${e.$align==="end"&&"bottom: 0;"}
          transform: ${e.$align==="center"?e.$isOpen?"translateY(-50%) translateX(0)":"translateY(-50%) translateX(8px)":e.$isOpen?"translateX(0)":"translateX(8px)"};
        `;case"right":return W`
          left: calc(100% + ${i});
          ${e.$align==="start"&&"top: 0;"}
          ${e.$align==="center"&&"top: 50%; transform: translateY(-50%);"}
          ${e.$align==="end"&&"bottom: 0;"}
          transform: ${e.$align==="center"?e.$isOpen?"translateY(-50%) translateX(0)":"translateY(-50%) translateX(-8px)":e.$isOpen?"translateX(0)":"translateX(-8px)"};
        `}}}

  /* Cyberpunk neon effect */
  ${e=>{var i;const a=e.theme;return((i=a.extensions)==null?void 0:i.cyberpunk)&&W`
        border-color: ${a.colors.primary.main};
        box-shadow: ${a.extensions.cyberpunk.neonGlow.magenta};
        backdrop-filter: blur(4px);
      `}}
`;w.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;

  ${e=>{var l;const a=e.theme,i=(l=a.extensions)!=null&&l.cyberpunk?a.colors.primary.main:a.colors.border.default,o="8px";switch(e.$position){case"top":return W`
          bottom: -${o};
          ${e.$align==="start"&&`left: ${a.spacing.md};`}
          ${e.$align==="center"&&"left: 50%; transform: translateX(-50%);"}
          ${e.$align==="end"&&`right: ${a.spacing.md};`}
          border-width: ${o} ${o} 0 ${o};
          border-color: ${i} transparent transparent transparent;
        `;case"bottom":return W`
          top: -${o};
          ${e.$align==="start"&&`left: ${a.spacing.md};`}
          ${e.$align==="center"&&"left: 50%; transform: translateX(-50%);"}
          ${e.$align==="end"&&`right: ${a.spacing.md};`}
          border-width: 0 ${o} ${o} ${o};
          border-color: transparent transparent ${i} transparent;
        `;case"left":return W`
          right: -${o};
          ${e.$align==="start"&&`top: ${a.spacing.md};`}
          ${e.$align==="center"&&"top: 50%; transform: translateY(-50%);"}
          ${e.$align==="end"&&`bottom: ${a.spacing.md};`}
          border-width: ${o} 0 ${o} ${o};
          border-color: transparent transparent transparent ${i};
        `;case"right":return W`
          left: -${o};
          ${e.$align==="start"&&`top: ${a.spacing.md};`}
          ${e.$align==="center"&&"top: 50%; transform: translateY(-50%);"}
          ${e.$align==="end"&&`bottom: ${a.spacing.md};`}
          border-width: ${o} ${o} ${o} 0;
          border-color: transparent ${i} transparent transparent;
        `}}}
`;var $7=te`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`,T7=te`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
`,j7=e=>{switch(e){case"pulse":return W`
        animation: ${$7} 1.5s ease-in-out 0.5s infinite;
      `;case"wave":return W`
        overflow: hidden;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: ${T7} 1.6s linear 0.5s infinite;
        }
      `;default:return""}},C7=(e,a)=>{switch(e){case"circular":return W`
        border-radius: 50%;
      `;case"rounded":return W`
        border-radius: ${typeof a=="number"?`${a}px`:a||"8px"};
      `;case"text":return W`
        border-radius: 4px;
        transform: scale(1, 0.6);
        margin-top: 0;
        margin-bottom: 0;
        transform-origin: 0 60%;

        &:empty::before {
          content: '\\00a0';
        }
      `;default:return W`
        border-radius: 0;
      `}};w.span`
  display: block;
  background-color: rgba(255, 255, 255, 0.11);
  width: ${({$width:e})=>e?typeof e=="number"?`${e}px`:e:"100%"};
  height: ${({$height:e,$variant:a})=>e?typeof e=="number"?`${e}px`:e:a==="circular"?"40px":a==="text"?"1em":"100px"};

  ${({$variant:e,$borderRadius:a})=>C7(e,a)}
  ${({$animation:e})=>j7(e)}
`;w.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>e||8}px;
`;w.div`
  position: relative;
  width: ${({$width:e})=>e?typeof e=="number"?`${e}px`:e:"100%"};
  height: ${({$height:e})=>e?typeof e=="number"?`${e}px`:e:"auto"};
  aspect-ratio: ${({$aspectRatio:e})=>e||"auto"};
  border-radius: ${({$borderRadius:e})=>e?typeof e=="number"?`${e}px`:e:"0"};
  overflow: hidden;
`;w.img`
  width: 100%;
  height: 100%;
  object-fit: ${({$objectFit:e})=>e||"cover"};
  opacity: ${({$loaded:e})=>e?1:0};
  transition: opacity 0.3s ease-in-out;
`;w.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
`;w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100px;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
`;w.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;var $2={h1:W`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
  `,h2:W`
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
  `,h3:W`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
  `,h4:W`
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.4;
  `,body:W`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  `,caption:W`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.4;
  `,label:W`
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.4;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  `};w.span`
  display: inline-block;
  color: ${({$color:e})=>e||"inherit"};
  text-align: ${({$align:e})=>e||"inherit"};

  ${({$variant:e})=>$2[e||"body"]}

  ${({$truncate:e,$maxLines:a})=>e&&W`
      overflow: hidden;
      text-overflow: ellipsis;
      ${a&&a>1?W`
            display: -webkit-box;
            -webkit-line-clamp: ${a};
            -webkit-box-orient: vertical;
          `:W`
            white-space: nowrap;
          `}
    `}
`;w.span`
  display: inline-block;
  width: 100%;
  ${({$variant:e})=>$2[e||"body"]}
`;function A7(e=!0,a=!1){const i=b.useRef(null);b.useEffect(()=>{if(!e)return;a&&(i.current=document.activeElement);const o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=o,a&&i.current&&i.current.focus()}},[e,a])}function E7(e,a=!0){b.useEffect(()=>{if(!a)return;const i=o=>{o.key==="Escape"&&e()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[e,a])}function R7(e,a=!0){b.useEffect(()=>{if(!a)return;const i=o=>{if(o.key!=="Tab"||!e.current)return;const l=e.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(!l.length)return;const u=l[0],m=l[l.length-1];!u||!m||(o.shiftKey&&document.activeElement===u?(o.preventDefault(),m.focus()):!o.shiftKey&&document.activeElement===m&&(o.preventDefault(),u.focus()))};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[e,a])}w(Xn.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: ${za.overlay};
`;w(Xn.div)`
  position: fixed;
  top: 0;
  ${e=>e.$side==="right"?"right: 0":"left: 0"};
  bottom: 0;
  width: ${e=>e.$width};
  max-width: 90vw;
  background: rgba(15, 15, 20, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-${e=>e.$side==="right"?"left":"right"}: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: ${e=>e.$side==="right"?"-10px 0 40px rgba(0, 0, 0, 0.5)":"10px 0 40px rgba(0, 0, 0, 0.5)"};
  display: flex;
  flex-direction: column;
  z-index: ${za.modal};
`;w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;w.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;w.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.95);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.4);
    outline-offset: 2px;
  }
`;w.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;w.div`
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;w.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: ${e=>e.tabIndex!==void 0?"help":"default"};
  user-select: none;
  transition: all 0.2s ease;

  /* Version-specific colors */
  ${e=>{switch(e.$version){case"v1":return`
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.3);
        `;case"v2":return`
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.3);
        `;case"v3":case"v4":case"v5":case"v6":case"v7":case"v8":case"v9":return`
          background: rgba(168, 85, 247, 0.2);
          color: #a855f7;
          border: 1px solid rgba(168, 85, 247, 0.3);
        `;case"v10":return`
          background: rgba(20, 184, 166, 0.2);
          color: #14b8a6;
          border: 1px solid rgba(20, 184, 166, 0.3);
        `;case"v11":return`
          background: rgba(245, 158, 11, 0.2);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.3);
        `;case"tbd":return`
          background: rgba(100, 116, 139, 0.2);
          color: #94a3b8;
          border: 1px solid rgba(100, 116, 139, 0.3);
        `;default:return`
          background: rgba(100, 116, 139, 0.2);
          color: #94a3b8;
          border: 1px solid rgba(100, 116, 139, 0.3);
        `}}}

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;w(Xn.div)`
  position: fixed;
  transform: translate(-50%, calc(-100% - 12px));
  padding: 0.75rem 1rem;
  background: rgba(15, 15, 20, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  max-width: 250px;
  z-index: ${za["high-priority"]};
  pointer-events: none;
`;w.span`
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;w.span`
  display: block;
  font-size: 0.85rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
`;w.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: rgba(15, 15, 20, 0.95);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;w.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
  padding: ${e=>e.theme.spacing.xs};
  background-color: ${e=>e.theme.colors.surface};
  border-radius: ${e=>e.theme.borderRadius.md};
  overflow-x: auto;

  /* Hide scrollbar for cleaner appearance */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;w.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
  padding: ${e=>e.theme.spacing.sm}
    ${e=>e.theme.spacing.md};
  background-color: ${e=>{const a=e.theme;return e.$active?a.colors.background.primary:"transparent"}};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.sm};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>{const a=e.theme;return e.$active?a.typography.fontWeight.medium:a.typography.fontWeight.normal}};
  font-family: ${e=>e.theme.typography.fontFamily.body};
  color: ${e=>{const a=e.theme;return e.$active?a.colors.text.primary:a.colors.text.secondary}};
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  white-space: nowrap;
  transition: all ${e=>e.theme.transitions.fast};
  opacity: ${e=>e.$disabled?.5:1};

  &:hover:not(:disabled) {
    color: ${e=>e.theme.colors.text.primary};
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary.main};
    outline-offset: 2px;
  }
`;w.span`
  padding: 2px ${e=>e.theme.spacing.xs};
  background-color: ${e=>{const a=e.theme;return e.$active?a.colors.primary.main:`${a.colors.text.secondary}20`}};
  border-radius: ${e=>e.theme.borderRadius.full};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>{const a=e.theme;return e.$active?a.colors.background.primary:a.colors.text.secondary}};
  min-width: 18px;
  text-align: center;
`;b.createContext(null);w.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`;w.div`
  border-radius: ${e=>e.theme.borderRadius.md};
  overflow: hidden;
  transition: all 0.2s ease;

  ${e=>e.$disabled&&W`
    opacity: 0.5;
    pointer-events: none;
  `}

  ${e=>{const a=e.theme;switch(e.$variant){case"bordered":return W`
          border: 1px solid ${a.colors.border.default};
          background: ${a.colors.background.secondary};

          &:hover {
            border-color: ${a.colors.primary.main};
          }
        `;case"ghost":return W`
          background: transparent;
          border: none;
        `;default:return W`
          background: ${a.colors.background.secondary};
          border: 1px solid transparent;

          &:hover {
            background: ${a.colors.background.tertiary||a.colors.background.secondary};
          }
        `}}}
`;w.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${e=>e.theme.spacing.md}
    ${e=>e.theme.spacing.lg};
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${e=>e.theme.typography.fontFamily.body};
  font-size: ${e=>e.theme.typography.fontSize.base};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.primary};
  transition: color 0.2s ease;
  gap: ${e=>e.theme.spacing.md};

  &:hover {
    color: ${e=>e.theme.colors.primary.main};
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary.main};
    outline-offset: -2px;
  }

  ${e=>{var i;const a=e.theme;return e.$isOpen&&((i=a.extensions)==null?void 0:i.cyberpunk)&&W`
        color: ${a.colors.primary.main};
        text-shadow: ${a.extensions.cyberpunk.neonGlow.magenta};
      `}}
`;w.span`
  flex: 1;
  line-height: 1.5;
`;w(Xn.span)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${e=>e.theme.colors.primary.main};

  svg {
    width: 20px;
    height: 20px;
  }
`;w(Xn.div)`
  overflow: hidden;
`;w.div`
  padding: 0 ${e=>e.theme.spacing.lg}
    ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  line-height: 1.7;
`;w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: ${e=>e.theme.spacing.xl};
  font-family: ${e=>e.theme.typography.fontFamily.mono||"monospace"};
`;w.div`
  max-width: 520px;
  text-align: center;
`;w.div`
  font-size: 48px;
  margin-bottom: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.error.main};

  ${e=>{var a;return((a=e.theme.extensions)==null?void 0:a.cyberpunk)&&W`
      text-shadow: 0 0 20px ${e.theme.colors.error.main}66;
    `}}
`;w.h2`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.primary};
  margin: 0 0 ${e=>e.theme.spacing.lg};
  font-family: ${e=>e.theme.typography.fontFamily.mono||"monospace"};
`;w.details`
  text-align: left;
  margin-bottom: ${e=>e.theme.spacing.lg};

  summary {
    font-size: ${e=>e.theme.typography.fontSize.xs};
    color: ${e=>e.theme.colors.text.secondary};
    cursor: pointer;
    margin-bottom: ${e=>e.theme.spacing.sm};
  }

  pre {
    font-size: ${e=>e.theme.typography.fontSize.xs};
    color: ${e=>e.theme.colors.error.main};
    background: ${e=>e.theme.colors.background};
    border: 1px solid ${e=>e.theme.colors.border.default};
    border-radius: ${e=>e.theme.borderRadius.sm};
    padding: ${e=>e.theme.spacing.md};
    overflow-x: auto;
    max-height: 200px;
    margin: 0;
  }
`;w.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: center;
`;w.button`
  padding: ${e=>e.theme.spacing.sm}
    ${e=>e.theme.spacing.lg};
  border-radius: ${e=>e.theme.borderRadius.sm};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-family: ${e=>e.theme.typography.fontFamily.mono||"monospace"};
  cursor: pointer;
  transition: all ${e=>e.theme.transitions.normal};

  ${e=>e.$primary?W`
          background: ${e.theme.colors.primary.main}22;
          border: 1px solid ${e.theme.colors.primary.main};
          color: ${e.theme.colors.primary.main};
          &:hover {
            background: ${e.theme.colors.primary.main}33;
          }
        `:W`
          background: transparent;
          border: 1px solid ${e.theme.colors.border.default};
          color: ${e.theme.colors.text.secondary};
          &:hover {
            border-color: ${e.theme.colors.text.primary};
            color: ${e.theme.colors.text.primary};
          }
        `}

  ${e=>{var a;return((a=e.theme.extensions)==null?void 0:a.cyberpunk)&&e.$primary&&W`
      &:hover {
        box-shadow: 0 0 10px ${e.theme.colors.primary.main};
      }
    `}}
`;const T2=b.createContext({showToast:()=>{}});function j2(){return b.useContext(T2)}const z7=te`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,M7=w.div`
  position: fixed;
  bottom: max(5.5rem, calc(env(safe-area-inset-bottom) + 5rem));
  left: 50%;
  transform: translateX(-50%);
  z-index: 300;
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 95%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 40%, transparent);
  color: ${e=>e.theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.5),
    0 0 20px color-mix(in srgb, ${e=>e.theme.colors.primary} 10%, transparent);
  max-width: calc(100vw - 2rem);
  text-align: center;
  pointer-events: none;
  animation: ${z7} 180ms ease both;
`;function D7({children:e}){const[a,i]=b.useState(null),o=yr(),l=b.useCallback(u=>{o.panel.open(),i(u),setTimeout(()=>i(null),2e3)},[o]);return c.jsxs(T2.Provider,{value:{showToast:l},children:[e,a&&c.jsx(M7,{role:"status","aria-live":"polite",children:a})]})}function tx(e){const a=document.createElement("textarea");a.value=e,a.style.cssText="position:fixed;opacity:0;pointer-events:none",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)}function cp(e){navigator.clipboard?navigator.clipboard.writeText(e).catch(()=>tx(e)):tx(e)}function O7(e,a){navigator.share?navigator.share({url:e}).catch(()=>{cp(e),a()}):(cp(e),a())}const N7=w.section`
  padding: 2.5rem 0;
  scroll-margin-top: 5rem;

  @media (max-width: 768px) {
    padding: 1.75rem 0;
    scroll-margin-top: 4rem;
  }
`,C2=W`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 2.25rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`,L7=w.h1`${C2}`,B7=w.h2`${C2}`,q7=w.p`
  font-size: 1rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 2rem;
`,A2=w.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,V7=w.a`
  color: ${e=>e.theme.colors.primary}59;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0.25rem;
  border-radius: 4px;
  transition: color 200ms, opacity 200ms;
  opacity: 0;

  ${A2}:hover & {
    opacity: 1;
  }

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`;function xm({title:e,subtitle:a,children:i,id:o,headingLevel:l=2}){const{showToast:u}=j2(),m=yr(),p=l===1?L7:B7,g=b.useCallback(h=>{if(h.preventDefault(),!o)return;m.button.click();const v=`${window.location.origin}${window.location.pathname}#${o}`;window.history.pushState(null,"",`#${o}`),cp(v),u("Link copied!")},[m,o,u]);return c.jsxs(N7,{id:o,children:[e&&c.jsxs(A2,{children:[c.jsx(p,{children:e}),o&&c.jsx(ku,{content:`Copy link to §${e}`,children:c.jsx(V7,{href:`#${o}`,onClick:g,"aria-label":`Copy link to ${e}`,children:c.jsx(D6,{size:18})})})]}),a&&c.jsx(q7,{children:a}),!e&&!a?i:c.jsx("div",{style:{marginTop:a?0:"1.5rem"},children:i})]})}function nx(e){const a=e.replace(/\D/g,"");return a.length===10?`1${a}`:a}function U7(e){const a=uh(e.startDate,e.endDate);return`Hi! I'm interested in booking while you're in ${e.city} (${a}). What's your availability?`}function F7(e,a){const i=U7(a),o={};if(e.phone){const l=nx(e.phone);o.sms=`sms:+${l}?body=${encodeURIComponent(i)}`}if(e.whatsapp){const l=nx(e.whatsapp);o.whatsapp=`https://wa.me/${l}?text=${encodeURIComponent(i)}`}if(e.email){const l=encodeURIComponent(`Booking inquiry — ${a.city}`);o.email=`mailto:${e.email}?subject=${l}&body=${encodeURIComponent(i)}`}return o}const H7=w.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
  flex-wrap: wrap;
`,vm=w.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.4rem 0.75rem;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-radius: ${e=>e.theme.borderRadius.sm};
  background: ${e=>e.theme.colors.primary}14;
  color: ${e=>e.theme.colors.primary};
  border: 1px solid ${e=>e.theme.colors.primary}4D;
  transition: ${e=>e.theme.transitions.fast};
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    border-color: ${e=>e.theme.colors.primary}99;
    background: ${e=>e.theme.colors.primary}0D;
    transform: translateY(-1px);
  }
`;function P7({stop:e,contact:a}){const i=yr(),o=Su(),l=b.useCallback(m=>{i.button.click(),o("tour_contact",`${m}:${e.city}`,"booking")},[i,o,e.city]),u=F7(a,e);return!u.sms&&!u.whatsapp&&!u.email?null:c.jsxs(H7,{children:[u.sms&&c.jsxs(vm,{href:u.sms,"aria-label":`Text about ${e.city}`,onClick:()=>l("sms"),onMouseEnter:()=>i.button.hover(),children:[c.jsx(P6,{size:13}),"Text"]}),u.whatsapp&&c.jsxs(vm,{href:u.whatsapp,target:"_blank",rel:"noopener noreferrer","aria-label":`WhatsApp about ${e.city}`,onClick:()=>l("whatsapp"),onMouseEnter:()=>i.button.hover(),children:[c.jsx(F6,{size:13}),"WhatsApp"]}),u.email&&c.jsxs(vm,{href:u.email,"aria-label":`Email about ${e.city}`,onClick:()=>l("email"),onMouseEnter:()=>i.button.hover(),children:[c.jsx(N6,{size:13}),"Email"]})]})}function E2(e){return(e==null?void 0:e.length)??0}const G7=new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1});function up(e){return!Number.isFinite(e)||e<=0?"0":G7.format(e).toLowerCase()}function Y7(e,a){return e>0?`🌶️ ${up(e)} ${a}`:`🌶️ ${a}`}const I7=w(it)`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
  margin-top: ${e=>e.theme.spacing.lg};
  padding: 0.7rem ${e=>e.theme.spacing.xl};
  border-radius: ${e=>e.theme.borderRadius.full};
  background: ${e=>e.theme.colors.primary};
  color: ${e=>Ps(e.theme)};
  font-size: ${e=>e.theme.typography.fontSize.base};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  letter-spacing: 0.02em;
  min-height: 44px;
  transition: transform 150ms ease, box-shadow 150ms ease, opacity 150ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 35%, transparent)`};
  }

  &:active {
    transform: none;
  }
`;function X7({to:e,count:a,noun:i,onClick:o}){return c.jsx(I7,{to:e,onClick:o,"data-testid":"spicy-pics-cta",children:Y7(a,i)})}const K7=b.lazy(()=>Ne(()=>import("./TourMap-BhHu4ul3.js"),__vite__mapDeps([0,1,2,3])).then(e=>({default:e.TourMap}))),W7=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${e=>e.theme.spacing.md};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Z7=w(it)`
  ${Hs}
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
  padding: ${e=>e.theme.spacing.lg};
  background: ${e=>e.theme.colors.background.secondary}99;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  text-decoration: none;
  transition: ${e=>e.theme.transitions.fast};

  &:hover {
    border-color: ${e=>e.theme.colors.border.hover};
    background: ${e=>e.theme.colors.background.secondary};
  }
`,Q7=w.div`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.theme.colors.text.muted};
`,J7=w.div`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  color: ${e=>e.theme.colors.primary};
`,eR=w.div`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
`,tR=w.div`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.secondary};
  margin-top: ${e=>e.theme.spacing.xs};
  line-height: ${e=>e.theme.typography.lineHeight.relaxed};
`,nR=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,aR=w.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,rR=w.div`
  ${Hs}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.background.secondary}99;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${e=>e.theme.spacing.sm};
  }
`,iR=w(it)`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  text-decoration: none;
  flex: 1;
  min-width: 0;

  &:hover > * {
    color: ${e=>e.theme.colors.primary};
  }
`,oR=w.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,sR=w.span`
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.primary};
`,lR=w.span`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.secondary};
`,cR=w.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${e=>e.theme.spacing.sm};

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,uR=w.div`
  ${Hs}
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 250ms, box-shadow 250ms;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 30px ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 18%, transparent)`};
  }
`,dR=w.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  backdrop-filter: ${e=>e.$revealed?"blur(0px)":"blur(14px)"};
  background: ${e=>e.$revealed?"transparent":"rgba(0, 0, 0, 0.25)"};
  transition: backdrop-filter 600ms ease, background 600ms ease;
  pointer-events: ${e=>e.$revealed?"none":"auto"};
  display: flex;
  align-items: center;
  justify-content: center;
`,fR=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: ${e=>e.$revealed?0:1};
  transition: opacity 300ms ease;
  text-shadow: 0 1px 4px rgba(0,0,0,0.6);
  pointer-events: none;
  user-select: none;
`,ax=w(it)`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
  color: ${e=>e.theme.colors.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  margin-top: ${e=>e.theme.spacing.lg};
  transition: ${e=>e.theme.transitions.fast};

  &:hover {
    opacity: 0.8;
  }
`;function mR(){const{activeStop:e,nextStop:a}=wu(),i=e??a,o=Kr(),l=s2(),u=Fe("home","section_rates","Rates"),m=Fe("home","section_gallery","Gallery"),p=Fe("home","cta_full_rates","Full rates & services"),g=Fe("home","cta_full_schedule","Full schedule & availability"),h=Fe("home","cta_spicy_pics","pics"),v=Fe("home","cta_book_session","Book a session"),x=Fe("home","reveal_hint","Tap to reveal");i2();const S=co(),_=yr(),{trackInteraction:C}=Zn(),T=b.useCallback(()=>{_.button.click()},[_]),A=o.gallery.slice(0,4),$=E2(o.gallery),{revealed:M,triggerReveal:E}=ph(),B=b.useCallback(ie=>{if(!l)return ie;const ve=ie.includes("?")?"&":"?";return`${ie}${ve}for=${l}`},[l]),j=b.useCallback(ie=>{if(M){_.button.click();const ve={elementType:"other",eventName:"photo_open",eventLabel:F1(ie),pageUrl:window.location.href,segment:l??"default"};C({type:"click",data:ve}),S(B(`/gallery?photo=${F1(ie)}`))}else{_.quadrant.click(),E();const ve={elementType:"other",eventName:"gallery_reveal",pageUrl:window.location.href,segment:l??"default"};C({type:"click",data:ve})}},[M,E,_,S,C,l,B]),R=OC(o.tour,3),z=R.length>0?c.jsxs(xm,{title:e?`Currently in ${e.city}, ${e.state}`:i?`Next Stop: ${i.city}, ${i.state}`:"Tour",id:"touring",children:[c.jsxs(nR,{children:[c.jsx(aR,{children:R.map(ie=>c.jsxs(Ts,{as:rR,children:[c.jsxs(iR,{to:B(`/tour?city=${tp(ie.city)}`),onClick:T,children:[c.jsx(xs,{variant:ie.status,children:ie.status}),c.jsxs(oR,{children:[c.jsxs(sR,{children:[ie.city,", ",ie.state]}),c.jsx(lR,{children:uh(ie.startDate,ie.endDate)})]})]}),c.jsx(P7,{stop:ie,contact:o.contact})]},`${ie.city}-${ie.startDate}`))}),c.jsx(b.Suspense,{fallback:c.jsx(gh,{$height:"220px"}),children:c.jsx(K7,{stops:o.tour})})]}),c.jsxs(ax,{to:B("/tour"),onClick:T,children:[g," ",c.jsx(_c,{size:16})]})]},"touring"):null,U=c.jsxs(xm,{title:u,id:"rates",children:[c.jsx(W7,{children:o.rates.map(ie=>{const ve=ie.entries[0];return ve?c.jsxs(Ts,{as:Z7,to:B("/rates"),onClick:T,children:[c.jsx(Q7,{"data-magic-title":!0,children:ie.title}),c.jsxs(J7,{children:["$",ve.price.toLocaleString(),ve.priceMax?`–${ve.priceMax.toLocaleString()}`:""]}),c.jsx(eR,{children:ve.duration}),c.jsx(tR,{children:ie.description})]},ie.title):null})}),c.jsx(ax,{to:B("/rates"),onClick:T,children:l==="clients"?c.jsxs(c.Fragment,{children:[v," ",c.jsx(_c,{size:16})]}):c.jsxs(c.Fragment,{children:[p," ",c.jsx(_c,{size:16})]})})]},"rates"),ae=c.jsxs(xm,{title:m,id:"gallery",children:[c.jsx(cR,{children:A.map(ie=>c.jsxs(Ts,{as:uR,onClick:()=>j(ie.src),children:[c.jsx(h2,{src:ie.src,webpSrc:ie.webpSrc,alt:ie.alt,intrinsicWidth:ie.intrinsicWidth,intrinsicHeight:ie.intrinsicHeight,width:"100%",height:"250px",objectFit:"cover",borderRadius:"0"}),c.jsx(dR,{$revealed:M,"data-testid":"teaser-blur-veil",children:c.jsxs(fR,{$revealed:M,children:[c.jsx(sv,{size:20}),x]})})]},ie.src))}),c.jsx(X7,{to:B("/gallery"),count:$,noun:h,onClick:T})]},"gallery"),Y=l==="fans"?[ae,z,U]:[z,U,ae],Q=o.heroStrip&&o.heroStrip.length>0?o.heroStrip:[];return c.jsxs(c.Fragment,{children:[c.jsx(Q9,{}),Q.length>0&&c.jsx(f7,{items:Q}),c.jsx(v7,{profiles:o.verifiedProfiles??[]}),Y]})}const pR=b.lazy(()=>Ne(()=>import("./GalleryPage-CuaeaoTT.js"),__vite__mapDeps([4,5]))),hR=b.lazy(()=>Ne(()=>import("./RatesPage-B8zzIF-7.js"),__vite__mapDeps([6,7]))),gR=b.lazy(()=>Ne(()=>import("./TourPage-DnluV7Wj.js").then(e=>e.T),__vite__mapDeps([8,9,10,11,12,13,14,15,16,17,2,3,18,19]))),bR=b.lazy(()=>Ne(()=>import("./AboutPage-DxxarOKJ.js"),__vite__mapDeps([20,21]))),yR=b.lazy(()=>Ne(()=>import("./BookingPage-CWbg4L5c.js"),__vite__mapDeps([22,23,24,15,16,11,12]))),rx=b.lazy(()=>Ne(()=>import("./ContactPage-Bt23RS79.js"),__vite__mapDeps([25,14,11,12,15,16,10,13,17]))),xR=b.lazy(()=>Ne(()=>import("./LinksPage-QXou8Dc_.js"),__vite__mapDeps([26,27]))),vR=b.lazy(()=>Ne(()=>import("./DestinationsPage-By-JLb7m.js"),__vite__mapDeps([28,29,30,19]))),wR=b.lazy(()=>Ne(()=>import("./DestinationPage-BREQ-zjU.js"),__vite__mapDeps([31,29,9,10,11,12,13,24,15,16,32,30,14,17,19,33]))),SR=b.lazy(()=>Ne(()=>import("./SpecialtiesPage-BIhI27tl.js"),__vite__mapDeps([34,21,30,35]))),kR=b.lazy(()=>Ne(()=>import("./SpecialtyCategoryPage-SAzjJG9d.js"),__vite__mapDeps([36,21,35]))),_R=b.lazy(()=>Ne(()=>import("./SpecialtyPage-CMgOCZHU.js"),__vite__mapDeps([37,21,7,32,30,35,16]))),$R=b.lazy(()=>Ne(()=>import("./EtiquettePage-TV4DVh7E.js"),__vite__mapDeps([38,23]))),TR=b.lazy(()=>Ne(()=>import("./DuosPage-CCvitADy.js"),__vite__mapDeps([39,30,27]))),jR=b.lazy(()=>Ne(()=>import("./ShopPage-C5_Svdg_.js"),__vite__mapDeps([40,11,12,41]))),CR=b.lazy(()=>Ne(()=>import("./ShopDetailPage-CQ2ejWqJ.js"),__vite__mapDeps([42,41,17]))),AR=b.lazy(()=>Ne(()=>import("./BannersPage-Bfy6f0QG.js"),[])),ER=b.lazy(()=>Ne(()=>import("./FmtyPage-CJR1wLFi.js"),__vite__mapDeps([43,9,10,11,12,13,14,15,16,17,19]))),RR=b.lazy(()=>Ne(()=>import("./MySchedulePage-BrOR1PY5.js"),__vite__mapDeps([44,10,5,3,18,33,12]))),zR=b.lazy(()=>Ne(()=>import("./TourCincinnatiPage-BW23IBXH.js"),__vite__mapDeps([45,33,19]))),MR=b.lazy(()=>Ne(()=>import("./TourLandingPage-DAlSabCd.js"),__vite__mapDeps([46,47,9,10,11,12,13,33,16,19,5]))),ix=b.lazy(()=>Ne(()=>import("./PseoEscortsDispatcher-Dq8vK5sC.js"),__vite__mapDeps([48,49,10,5,47,16]))),DR=b.lazy(()=>Ne(()=>import("./PseoTermPage-CS1hSgS5.js"),__vite__mapDeps([50,49,10,5,47]))),wm=b.lazy(()=>Ne(()=>import("./PseoSitemapPage-DPVBcbmx.js"),__vite__mapDeps([51,49,10,5,47])));function at({children:e}){return c.jsx(b.Suspense,{fallback:c.jsx("div",{style:{minHeight:"100vh"}}),children:e})}const uo=[{path:"/",element:c.jsx(mR,{}),maintenance:!0},{path:"/about",element:c.jsx(at,{children:c.jsx(bR,{})}),prefetchImport:()=>Ne(()=>import("./AboutPage-DxxarOKJ.js"),__vite__mapDeps([20,21])),navLabel:{namespace:"nav",key:"about",fallback:"About"},nav:{group:"primary",order:1},maintenance:!0},{path:"/gallery",element:c.jsx(at,{children:c.jsx(pR,{})}),prefetchImport:()=>Ne(()=>import("./GalleryPage-CuaeaoTT.js"),__vite__mapDeps([4,5])),navLabel:{namespace:"nav",key:"gallery",fallback:"Gallery"},nav:{group:"primary",order:2},maintenance:!0},{path:"/rates",element:c.jsx(at,{children:c.jsx(hR,{})}),prefetchImport:()=>Ne(()=>import("./RatesPage-B8zzIF-7.js"),__vite__mapDeps([6,7])),navLabel:{namespace:"nav",key:"rates",fallback:"Rates"},nav:{group:"primary",order:3},maintenance:!0},{path:"/tour",element:c.jsx(at,{children:c.jsx(gR,{})}),prefetchImport:()=>Ne(()=>import("./TourPage-DnluV7Wj.js").then(e=>e.T),__vite__mapDeps([8,9,10,11,12,13,14,15,16,17,2,3,18,19])),navLabel:{namespace:"nav",key:"tour",fallback:"Tour"},footerLabel:{namespace:"footer",key:"cta_tour_schedule",fallback:"Tour Schedule"},nav:{group:"primary",order:4},footer:{section:"touring",order:1},maintenance:!0},{path:"/destinations",element:c.jsx(at,{children:c.jsx(vR,{})}),prefetchImport:()=>Ne(()=>import("./DestinationsPage-By-JLb7m.js"),__vite__mapDeps([28,29,30,19])),navLabel:{namespace:"nav",key:"destinations",fallback:"Destinations"},footerLabel:{namespace:"footer",key:"cta_destinations",fallback:"Destinations"},nav:{group:"primary",order:5},footer:{section:"touring",order:2},maintenance:!0},{path:"/booking",element:c.jsx(at,{children:c.jsx(yR,{})}),prefetchImport:()=>Ne(()=>import("./BookingPage-CWbg4L5c.js"),__vite__mapDeps([22,23,24,15,16,11,12])),navLabel:{namespace:"nav",key:"book",fallback:"Book"},nav:{group:"primary",order:6},maintenance:!1},{path:"/fmty",element:c.jsx(at,{children:c.jsx(ER,{})}),prefetchImport:()=>Ne(()=>import("./FmtyPage-CJR1wLFi.js"),__vite__mapDeps([43,9,10,11,12,13,14,15,16,17,19])),navLabel:{namespace:"nav",key:"fmty",fallback:"Fly Me To You"},footerLabel:{namespace:"footer",key:"cta_fmty",fallback:"Fly Me To You"},nav:{group:"more",order:1},footer:{section:"touring",order:3},maintenance:!1},{path:"/etiquette",element:c.jsx(at,{children:c.jsx($R,{})}),prefetchImport:()=>Ne(()=>import("./EtiquettePage-TV4DVh7E.js"),__vite__mapDeps([38,23])),navLabel:{namespace:"nav",key:"etiquette",fallback:"Etiquette"},nav:{group:"more",order:2},maintenance:!1},{path:"/shop",element:c.jsx(at,{children:c.jsx(jR,{})}),prefetchImport:()=>Ne(()=>import("./ShopPage-C5_Svdg_.js"),__vite__mapDeps([40,11,12,41])),navLabel:{namespace:"nav",key:"shop",fallback:"Shop"},nav:{group:"more",order:3},maintenance:!1},{path:"/shop/:slug",element:c.jsx(at,{children:c.jsx(CR,{})}),maintenance:!1},{path:"/links",element:c.jsx(at,{children:c.jsx(xR,{})}),prefetchImport:()=>Ne(()=>import("./LinksPage-QXou8Dc_.js"),__vite__mapDeps([26,27])),navLabel:{namespace:"nav",key:"links",fallback:"Links"},nav:{group:"more",order:4},maintenance:!1},{path:"/get-in-touch",element:c.jsx(at,{children:c.jsx(rx,{})}),prefetchImport:()=>Ne(()=>import("./ContactPage-Bt23RS79.js"),__vite__mapDeps([25,14,11,12,15,16,10,13,17])),navLabel:{namespace:"nav",key:"contact",fallback:"Contact"},footerLabel:{namespace:"footer",key:"cta_send_message",fallback:"Send a message →"},nav:{group:"more",order:5},footer:{section:"contact",order:1},maintenance:!1},{path:"/banners",element:c.jsx(at,{children:c.jsx(AR,{})}),prefetchImport:()=>Ne(()=>import("./BannersPage-Bfy6f0QG.js"),[]),navLabel:{namespace:"nav",key:"banners",fallback:"Banners"},nav:{group:"more",order:6},maintenance:!1},{path:"/contact",element:c.jsx(at,{children:c.jsx(rx,{})}),prefetchImport:()=>Ne(()=>import("./ContactPage-Bt23RS79.js"),__vite__mapDeps([25,14,11,12,15,16,10,13,17])),maintenance:!1},{path:"/destinations/:city",element:c.jsx(at,{children:c.jsx(wR,{})}),maintenance:!0},{path:"/specialties",element:c.jsx(at,{children:c.jsx(SR,{})}),maintenance:!1},{path:"/specialties/:category",element:c.jsx(at,{children:c.jsx(kR,{})}),maintenance:!1},{path:"/specialties/:category/:item",element:c.jsx(at,{children:c.jsx(_R,{})}),maintenance:!1},{path:"/duos",element:c.jsx(at,{children:c.jsx(TR,{})}),prefetchImport:()=>Ne(()=>import("./DuosPage-CCvitADy.js"),__vite__mapDeps([39,30,27])),maintenance:!1},{path:"/my-schedule",element:c.jsx(at,{children:c.jsx(RR,{})}),maintenance:!1},{path:"/tours/cincinnati-2026-april-may",element:c.jsx(at,{children:c.jsx(zR,{})}),maintenance:!1},{path:"/tours/:slug",element:c.jsx(at,{children:c.jsx(MR,{})}),maintenance:!1},{path:"/_",element:c.jsx(at,{children:c.jsx(wm,{})}),maintenance:!1},{path:"/_/",element:c.jsx(at,{children:c.jsx(wm,{})}),maintenance:!1},{path:"/_/sitemap",element:c.jsx(at,{children:c.jsx(wm,{})}),maintenance:!1},{path:"/_/escorts/:segment",element:c.jsx(at,{children:c.jsx(ix,{variant:"generic"})}),maintenance:!1},{path:"/_/trans-escorts/:segment",element:c.jsx(at,{children:c.jsx(ix,{variant:"demographic"})}),maintenance:!1},{path:"/_/what-is/:slug",element:c.jsx(at,{children:c.jsx(DR,{})}),maintenance:!1}],OR=uo,NR=uo.filter(e=>e.maintenance),LR=uo.filter(e=>{var a;return((a=e.nav)==null?void 0:a.group)==="primary"}).slice().sort((e,a)=>e.nav.order-a.nav.order),BR=uo.filter(e=>{var a;return((a=e.nav)==null?void 0:a.group)==="more"}).slice().sort((e,a)=>e.nav.order-a.nav.order),ox=e=>uo.filter(a=>{var i;return((i=a.footer)==null?void 0:i.section)===e}).slice().sort((a,i)=>a.footer.order-i.footer.order),Ec=Object.fromEntries(uo.filter(e=>typeof e.prefetchImport=="function").map(e=>[e.path,e.prefetchImport])),Jc=new Set;function us(e){var a;Jc.has(e)||(Jc.add(e),(a=Ec[e])==null||a.call(Ec))}function sx(){for(const[e,a]of Object.entries(Ec))Jc.has(e)||(Jc.add(e),a())}const Sm="lilith-age-verified",qR="https://www.google.com",VR={title:"Age Verification Required",description:"This website contains adult content intended for viewers 18 years of age or older.",warning:"By entering, you confirm that you are at least 18 years old.",confirmButton:"I am 18 or older — Enter",exitButton:"Exit",legalNote:"By entering this site you confirm you are of legal age to view adult content in your jurisdiction."},UR=({isOpen:e,onConfirm:a,onExit:i,exitUrl:o=qR,animate:l=!0,loginComponent:u,text:m})=>{const p={...VR,...m},g=b.useRef(null),h=b.useRef(null);b.useEffect(()=>{var _;return e&&(document.body.style.overflow="hidden",(_=h.current)==null||_.focus()),()=>{document.body.style.overflow=""}},[e]);const v=b.useCallback(()=>{i==null||i(),window.location.href=o},[i,o]);b.useEffect(()=>{if(!e)return;const _=C=>{C.key==="Enter"&&(C.preventDefault(),a()),C.key==="Escape"&&(C.preventDefault(),v())};return document.addEventListener("keydown",_),()=>document.removeEventListener("keydown",_)},[e,a,v]);const x=l?{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}}:{},S=l?{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",damping:25,stiffness:300}}:{};return c.jsx(Wx,{children:e&&c.jsx(Xn.div,{ref:g,className:"age-gate-overlay",role:"alertdialog","aria-modal":"true","aria-labelledby":"age-gate-title","aria-describedby":"age-gate-description","data-testid":"age-gate",...x,children:c.jsxs(Xn.div,{className:"age-gate-container",...S,children:[c.jsx("div",{className:"age-gate-icon",children:c.jsx(w2,{size:48})}),c.jsx("h1",{id:"age-gate-title",className:"age-gate-title",children:p.title}),c.jsx("p",{id:"age-gate-description",className:"age-gate-description",children:p.description}),c.jsx("p",{className:"age-gate-warning",children:p.warning}),c.jsxs("div",{className:"age-gate-actions",children:[c.jsxs("button",{ref:h,type:"button",className:"age-gate-button age-gate-button-confirm",onClick:a,"data-testid":"age-gate-confirm",children:[c.jsx(Zc,{size:20}),c.jsx("span",{children:p.confirmButton})]}),c.jsxs("button",{type:"button",className:"age-gate-button age-gate-button-exit",onClick:v,"data-testid":"age-gate-exit",children:[c.jsx(b2,{size:20}),c.jsx("span",{children:p.exitButton})]})]}),c.jsx("p",{className:"age-gate-legal",children:p.legalNote}),u!=null&&c.jsx("div",{className:"age-gate-login",children:u})]})})})},js={isVerified:!1,method:null,tier:0,verifiedAt:null};function FR(e){if(!e)return js;try{const a=JSON.parse(e);if(typeof a.isVerified=="boolean"&&(a.method===null||typeof a.method=="string")&&typeof a.tier=="number")return{isVerified:a.isVerified,method:a.method,tier:a.tier,verifiedAt:a.verifiedAt??null};if(a===!0||a.verified===!0)return{isVerified:!0,method:"self-declaration",tier:1,verifiedAt:null}}catch{}return js}function HR(e={}){const{useSessionStorage:a=!1,persistVerification:i=!0}=e,o=a?sessionStorage:localStorage,[l,u]=b.useState(()=>{if(!i)return js;try{return FR(o.getItem(Sm))}catch{return js}}),m=!0,p=b.useCallback(()=>{const h={isVerified:!0,method:"self-declaration",tier:1,verifiedAt:new Date().toISOString()};u(h),i&&o.setItem(Sm,JSON.stringify(h))},[o,i]),g=b.useCallback(()=>{u(js),i&&o.removeItem(Sm)},[o,i]);return{status:l,isVerified:l.isVerified,verifySelfDeclaration:p,reset:g,isLoaded:m}}const km=b.createContext(void 0),PR=({children:e,enabled:a=!0,exitUrl:i,animate:o=!0,loginComponent:l,useSessionStorage:u=!1,persistVerification:m=!0})=>{const p=HR({useSessionStorage:u,persistVerification:m});return a?p.isLoaded?p.isVerified?c.jsx(km.Provider,{value:p,children:e}):c.jsx(km.Provider,{value:p,children:c.jsx(X4,{features:b6,children:c.jsx(UR,{isOpen:!0,onConfirm:p.verifySelfDeclaration,exitUrl:i,animate:o,loginComponent:l})})}):null:c.jsx(km.Provider,{value:p,children:e})},GR=w.header`
  position: sticky;
  top: 0;
  z-index: ${e=>e.theme.zIndex.sticky};
  background: ${e=>e.theme.colors.background.primary}D9;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  transition: background 200ms ease, border-color 200ms ease;

  /* On the phone-sized home page the hero photo runs under the header until
     the name has scrolled into the brand slot — the bar is glass until then. */
  @media (max-width: ${Qn}) {
    ${e=>e.$overHero?`
      background: transparent;
      backdrop-filter: none;
      border-bottom-color: transparent;
    `:""}
  }
`,YR=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${e=>e.theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${sp};
`,IR=w(it)`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: ${e=>e.theme.typography.fontSize["2xl"]};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary};
  letter-spacing: 0.02em;
  &:hover {
    opacity: 0.9;
  }
`,XR=w.nav`
  display: flex;
  gap: ${e=>e.theme.spacing.xl};
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`,KR=w.div`
  display: ${e=>e.$open?"flex":"none"};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${e=>e.theme.spacing.xxl};
  padding-left: ${e=>e.theme.spacing.xl};
  padding-right: ${e=>e.theme.spacing.xl};
  padding-bottom: max(${e=>e.theme.spacing.xxl}, env(safe-area-inset-bottom));
  gap: ${e=>e.theme.spacing.xl};
  background: ${e=>e.theme.colors.background.primary};
  z-index: ${e=>e.theme.zIndex.fixed};
  overflow-y: auto;

  @media (min-width: 769px) {
    display: none;
  }
`,WR=w(it)`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.$active?e.theme.colors.primary:e.theme.colors.text.secondary};
  transition: ${e=>e.theme.transitions.fast};
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 1px;
    background: ${e=>e.theme.colors.primary};
    opacity: ${e=>e.$active?1:0};
    transition: ${e=>e.theme.transitions.fast};
  }
`,ZR=w.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.primary};
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.75); }
  }
`,lx=w.span`
  /* The nav labels are uppercased; the badge opts out so a compact count
     renders as "1.5k" rather than "1.5K". */
  text-transform: none;
  font-size: 0.75em;
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  letter-spacing: 0.04em;
  color: ${e=>e.theme.colors.primary};
  opacity: 0.85;
`,QR=w(it)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.$active?e.theme.colors.primary:e.theme.colors.text.secondary};
  transition: ${e=>e.theme.transitions.fast};

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,JR=w.button`
  display: none;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.primary};
  /* Legible on the photo when the bar is glass. */
  filter: ${e=>e.$overHero?"drop-shadow(0 1px 4px rgba(0, 0, 0, 0.7))":"none"};
  cursor: pointer;
  padding: ${e=>e.theme.spacing.xs};
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }
`,ez=w.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,tz=w.div`
  position: relative;
`,nz=w.button`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.$active?e.theme.colors.primary:e.theme.colors.text.secondary};
  transition: ${e=>e.theme.transitions.fast};
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 1px;
    background: ${e=>e.theme.colors.primary};
    opacity: ${e=>e.$active?1:0};
    transition: ${e=>e.theme.transitions.fast};
  }
`,az=w.div`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  min-width: 160px;
  background: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.xs} 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  z-index: ${e=>e.theme.zIndex.sticky+1};
`,rz=w(it)`
  display: block;
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.lg};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.$active?e.theme.colors.primary:e.theme.colors.text.secondary};
  transition: ${e=>e.theme.transitions.fast};
  white-space: nowrap;

  &:hover {
    color: ${e=>e.theme.colors.primary};
    /* Theme-aware row highlight so the hovered item is visible on light AND
       dark surfaces (a white overlay was invisible on the Cali light theme). */
    background: ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 12%, transparent)`};
  }
`;function iz(){const[e,a]=b.useState(!1),[i,o]=b.useState(!1),[l,u]=b.useState(0),[m,p]=b.useState(64),g=b.useRef(null),h=b.useRef(null),v=Nt(),x=t2(),S=Kr(),{activeStop:_,nextStop:C}=wu(),T=_??C,A=E2(S.gallery),$=yr(),{trackInteraction:M}=Zn();let E=X=>X,B="en";try{const{t:X,i18n:_e}=ch("nav");E=I=>X(I),B=_e.language}catch{}const j=LR.map(X=>({path:X.path,label:X.navLabel?Wc(S,E,B,X.navLabel.namespace,X.navLabel.key,X.navLabel.fallback):X.path,active:v.pathname===X.path})),R=BR.map(X=>({path:X.path,label:X.navLabel?Wc(S,E,B,X.navLabel.namespace,X.navLabel.key,X.navLabel.fallback):X.path,active:v.pathname===X.path})),z=R.some(X=>X.active)||v.pathname==="/contact",U=b.useCallback(X=>{$.nav.click(),M({type:"click",data:{elementType:"link",eventName:"nav_click",eventLabel:X,pageUrl:window.location.href}})},[$,M]),ae=b.useCallback(()=>{$.button.click(),M({type:"click",data:{elementType:"button",eventName:"mobile_menu_toggle",eventLabel:e?"close":"open",pageUrl:window.location.href}}),a(X=>{var _e;return X||p(((_e=g.current)==null?void 0:_e.getBoundingClientRect().bottom)??64),!X})},[$,M,e]),Y=b.useCallback(()=>{$.button.click(),o(X=>!X)},[$]);b.useEffect(()=>{const X=()=>u(window.scrollY);return window.addEventListener("scroll",X,{passive:!0}),()=>window.removeEventListener("scroll",X)},[]),b.useEffect(()=>{if(!i)return;const X=_e=>{h.current&&!h.current.contains(_e.target)&&o(!1)};return document.addEventListener("mousedown",X),()=>document.removeEventListener("mousedown",X)},[i]);const Q=v.pathname==="/",ie=Q?l>=window.innerHeight*.35:!0,ve=Q&&!ie&&!e;return c.jsxs(c.Fragment,{children:[c.jsx(GR,{ref:g,$overHero:ve,children:c.jsxs(YR,{children:[c.jsx(IR,{to:"/","data-header-brand":!0,style:{opacity:ie?1:0,pointerEvents:ie?"auto":"none",transition:"none"},children:x.brand.displayName}),c.jsxs(ez,{children:[c.jsxs(XR,{children:[j.map(X=>c.jsxs(WR,{to:X.path,$active:X.active,onClick:()=>U(X.label),onMouseEnter:()=>{us(X.path),$.nav.hover()},onTouchStart:()=>us(X.path),children:[X.label,X.path==="/gallery"&&A>0&&c.jsx(lx,{"data-testid":"nav-gallery-count",children:up(A)}),X.path==="/tour"&&T&&c.jsx(ZR,{})]},X.path)),c.jsxs(tz,{ref:h,children:[c.jsx(nz,{onClick:Y,$active:z,"aria-haspopup":"true","aria-expanded":i,children:"More ▾"}),i&&c.jsx(az,{role:"menu",children:R.map(X=>c.jsx(rz,{to:X.path,$active:X.active,role:"menuitem",onClick:()=>{U(X.label),o(!1)},onMouseEnter:()=>{us(X.path),$.nav.hover()},onTouchStart:()=>us(X.path),children:X.label},X.path))})]})]}),c.jsx(JR,{onClick:ae,"aria-label":"Toggle menu",$overHero:ve,children:e?c.jsx(rT,{size:24}):c.jsx(V6,{size:24})})]})]})}),c.jsx(KR,{$open:e,style:{top:`${m}px`},children:[...j,...R].map(X=>c.jsxs(QR,{to:X.path,$active:X.active,onClick:()=>{U(X.label),a(!1)},onTouchStart:()=>us(X.path),children:[X.label,X.path==="/gallery"&&A>0&&c.jsx(lx,{"data-testid":"nav-gallery-count",children:up(A)})]},X.path))})]})}const cx={"Cash App":c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[c.jsx("rect",{width:"24",height:"24",rx:"5",fill:"#00D632"}),c.jsx("text",{x:"12",y:"17",textAnchor:"middle",fontSize:"14",fontWeight:"700",fill:"white",fontFamily:"sans-serif",children:"$"})]}),"Apple Pay":c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:c.jsx("path",{d:"M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.29.07 2.18.74 2.93.78 1.12-.23 2.2-.93 3.37-.84 1.42.12 2.49.68 3.19 1.74-2.93 1.74-2.44 5.56.51 6.64-.57 1.64-1.33 3.26-2 4.54zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"})}),Zelle:c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[c.jsx("rect",{width:"24",height:"24",rx:"12",fill:"#6D1ED4"}),c.jsx("text",{x:"12",y:"17",textAnchor:"middle",fontSize:"13",fontWeight:"700",fill:"white",fontFamily:"sans-serif",children:"Z"})]}),Venmo:c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[c.jsx("rect",{width:"24",height:"24",rx:"5",fill:"#3D95CE"}),c.jsx("path",{d:"M6 7h3l3 9 3-9h3L13.5 18h-3Z",fill:"white"})]}),Cash:c.jsx($6,{size:14})},oz=w.span`
  filter: ${e=>e.$revealed?"none":"blur(5px)"};
  opacity: ${e=>e.$revealed?"1":"0.7"};
  cursor: ${e=>e.$revealed?"inherit":"pointer"};
  user-select: ${e=>e.$revealed?"text":"none"};
  transition: filter 0.3s ease, opacity 0.3s ease;
`;function _m({children:e}){const{revealed:a,triggerReveal:i}=ph(),[o,l]=b.useState(a),u=b.useRef(null);return b.useEffect(()=>{if(!a){l(!1);return}if(o||!u.current)return;const m=u.current,p=tA(m),g=setTimeout(()=>l(!0),p);return()=>clearTimeout(g)},[a,o]),c.jsx(oz,{ref:u,...o?{}:{[hh]:""},$revealed:o,onClick:o?void 0:m=>{m.preventDefault(),m.stopPropagation(),i()},children:e})}function ux(e){const a=(e??"").trim().replace(/^@/,"");return a?`https://onlyfans.com/${a}`:null}const sz=w.footer`
  border-top: 1px solid ${e=>e.theme.colors.border};
  padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
  margin-top: ${e=>e.theme.spacing.xxl};
`,lz=w.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.xl};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`,ds=w.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,fs=w.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.theme.colors.text.muted};
`,dx=w.span`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,cz=w.span`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,uz=w.a`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.primary};
  transition: ${e=>e.theme.transitions.fast};

  &:hover {
    opacity: 0.8;
  }
`,$m=w(it)`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.primary};
  transition: ${e=>e.theme.transitions.fast};

  &:hover {
    opacity: 0.8;
  }
`,fx=w.a`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.primary};
  transition: ${e=>e.theme.transitions.fast};

  &:hover {
    opacity: 0.8;
  }
`;function mx({size:e=14}){return c.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[c.jsx("circle",{cx:"12",cy:"12",r:"11",fill:"#00ACEA"}),c.jsx("circle",{cx:"12",cy:"12",r:"6.5",fill:"none",stroke:"white",strokeWidth:"2"}),c.jsx("circle",{cx:"12",cy:"12",r:"2.5",fill:"white"}),c.jsx("circle",{cx:"16.5",cy:"7.5",r:"1.3",fill:"white"})]})}function dz({size:e=14}){return c.jsx("svg",{width:e,height:e,viewBox:"0 0 192 192",fill:"currentColor","aria-hidden":"true",children:c.jsx("path",{d:"M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.917 0-27.33 6.368-35.004 17.965l13.244 9.1c5.744-8.712 14.762-10.568 21.76-10.568h.23c8.404.054 14.746 2.49 18.845 7.237 2.99 3.427 4.992 8.188 5.986 14.2a104.784 104.784 0 0 0-24.16-2.038c-24.233 0-39.831 13.605-38.853 31.584.494 9.067 5.158 16.867 13.14 21.94 6.72 4.294 15.388 6.384 24.415 5.875 11.88-.672 21.232-5.176 27.79-13.38 5.015-6.314 8.194-14.49 9.608-24.734 5.764 3.478 10.025 8.005 12.416 13.37 4.084 9.278 4.33 24.533-8.42 37.188-11.185 11.083-24.659 15.893-44.977 16.043-22.565-.168-39.647-7.404-50.78-21.503C34.566 134.05 29.75 117.3 29.583 96c.167-21.3 4.983-38.05 14.308-49.902 11.133-14.1 28.215-21.335 50.78-21.503 22.718.17 40.139 7.44 51.785 21.604 5.702 6.98 9.987 15.913 12.74 26.476l15.383-4.1c-3.335-12.532-8.63-23.394-15.853-32.404C146.097 19.88 125.033 10.1 97 9.908h-.44C68.647 10.1 47.952 19.908 34.577 36.332 22.643 50.967 16.504 71.58 16.29 96c.214 24.42 6.353 45.033 18.287 59.668 13.375 16.424 34.07 26.232 61.903 26.424h.44c24.969-.169 42.538-6.72 57.008-21.036 18.963-18.756 18.404-42.246 12.148-56.583-4.391-9.976-12.757-18.087-24.539-23.485Z"})})}const fz=w.p`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  text-align: center;
  margin-top: ${e=>e.theme.spacing.xl};
  padding-top: ${e=>e.theme.spacing.lg};
  border-top: 1px solid ${e=>e.theme.colors.border}80;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`,mz={GFE:"/specialties/gfe-sensual/girlfriend-experience",Overnight:"/specialties/gfe-sensual/overnight-sessions","Dinner companion":"/specialties/gfe-sensual/dinner-companion",Incall:"/rates",Outcall:"/rates",Touring:"/tour",FMTY:"/fmty","Duo sessions":"/duos",Online:"/rates"};function pz(){var B;const e=Kr(),{contact:a}=e,i=Su();let o=j=>j,l="en";try{const{t:j,i18n:R}=ch("footer");o=z=>j(z),l=R.language}catch{}const u=Fe("footer","label_contact","Contact"),m=Fe("footer","label_payment","Payment"),p=Fe("footer","label_social","Social"),g=Fe("footer","label_touring","Touring"),h=Fe("footer","label_specialties","Specialties"),v=Fe("footer","label_onlyfans_vip","VIP"),x=Fe("footer","label_onlyfans_free","Free"),S=Fe("footer","disclaimer_copyright","All content is the property of {name}. Unauthorized reproduction prohibited.").replace("{name}",e.identity.name),_=Fe("footer","disclaimer_analytics","This site uses cookieless analytics — no personal data collected."),C=Fe("footer","disclaimer_independent","{name} is an independent contractor. All fees are for her time and companionship only; anything else that may occur is the choice of consenting adults.").replace("{name}",e.identity.name),T=ox("contact").map(j=>({path:j.path,label:j.footerLabel?Wc(e,o,l,j.footerLabel.namespace,j.footerLabel.key,j.footerLabel.fallback):j.path})),A=ox("touring").map(j=>({path:j.path,label:j.footerLabel?Wc(e,o,l,j.footerLabel.namespace,j.footerLabel.key,j.footerLabel.fallback):j.path})),$=j=>j,M=[a.instagram?{href:`https://instagram.com/${a.instagram}`,label:`@${a.instagram}`,Icon:$(z6)}:void 0,a.twitter?{href:`https://x.com/${a.twitter}`,label:`@${a.twitter}`,Icon:$(Q6)}:void 0,a.threads?{href:`https://threads.net/@${a.threads}`,label:`@${a.threads}`,Icon:$(dz)}:void 0,...E()].filter(j=>j!==void 0);function E(){const j=ux(a.onlyfans),R=ux(a.onlyfansFree),z=U=>`@${(U??"").trim().replace(/^@/,"")}`;return[j?{href:j,label:R?`${z(a.onlyfans)} · ${v}`:z(a.onlyfans),Icon:$(mx)}:void 0,R?{href:R,label:`${z(a.onlyfansFree)} · ${x}`,Icon:$(mx)}:void 0]}return c.jsxs(sz,{children:[c.jsxs(lz,{children:[c.jsxs(ds,{children:[c.jsxs(fs,{children:[c.jsx(y2,{size:11}),u]}),c.jsx(uz,{href:`sms:${a.phone}`,onClick:()=>i("footer_contact","sms","contact"),children:c.jsx(_m,{children:a.phone})}),c.jsx(dx,{children:a.communicationNote}),T.map(j=>c.jsx($m,{to:j.path,onClick:()=>i("footer_link","contact"),children:j.label},j.path))]}),c.jsxs(ds,{children:[c.jsxs(fs,{children:[c.jsx(v2,{size:11}),m]}),a.paymentMethods.map(j=>{const R=j.handle?c.jsx(c.Fragment,{children:c.jsx(_m,{children:j.handle})}):null;return j.url?c.jsxs(fx,{href:j.url,target:"_blank",rel:"noopener noreferrer",onClick:()=>i("footer_payment",j.method.toLowerCase(),"payment"),children:[cx[j.method]??null,j.method,R?c.jsxs(c.Fragment,{children:[" ",R]}):null]},j.method):c.jsxs(cz,{children:[cx[j.method]??null,j.method,R?c.jsxs(c.Fragment,{children:[" ",R]}):null]},j.method)})]}),M.length>0&&c.jsxs(ds,{children:[c.jsx(fs,{children:p}),M.map(({href:j,label:R,Icon:z})=>c.jsxs(fx,{href:j,target:"_blank",rel:"noopener noreferrer",onClick:()=>i("footer_social",R),children:[c.jsx(z,{size:14}),c.jsx(_m,{children:R})]},j))]}),c.jsxs(ds,{children:[c.jsxs(fs,{children:[c.jsx(Qc,{size:11}),g]}),c.jsx(dx,{children:e.identity.location}),A.map(j=>c.jsx($m,{to:j.path,onClick:()=>i("footer_link",j.path.replace("/","")),children:j.label},j.path))]}),((B=e.about)==null?void 0:B.availableFor)&&e.about.availableFor.length>0&&c.jsxs(ds,{children:[c.jsxs(fs,{children:[c.jsx(x2,{size:11}),h]}),e.about.availableFor.map(j=>c.jsx($m,{to:mz[j]??"/specialties",onClick:()=>i("footer_link",j.toLowerCase()),children:j},j))]})]}),c.jsxs(fz,{children:[C," ",S," ",_]})]})}const hz=te`
  0%, 100% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.15);
    filter: brightness(1.4);
  }
`,gz=te`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,bz=w.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  @media (prefers-reduced-motion: no-preference) {
    transition:
      background 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.15s ease;

    &:active {
      transform: scale(0.92);
    }

    ${({$pulsing:e})=>e&&W`
        animation: ${hz} 0.8s ease-in-out 3;
      `}
  }

  @media (prefers-reduced-motion: reduce) {
    ${({$pulsing:e})=>e&&W`
        animation: ${gz} 1s ease-in-out 3;
      `}
  }

  ${({$enabled:e,theme:a})=>e?W`
          background: linear-gradient(
            135deg,
            ${a.colors.primary}CC 0%,
            ${a.colors.primary}99 100%
          );
          box-shadow:
            0 2px 12px rgba(0, 0, 0, 0.5),
            0 0 20px ${a.colors.primary}44;
          color: ${Ps(a)};

          &:hover {
            box-shadow:
              0 4px 16px rgba(0, 0, 0, 0.6),
              0 0 28px ${a.colors.primary}66;
          }
        `:W`
          background: ${a.colors.background.secondary}CC;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
          color: ${a.colors.text.muted};
          border: 1px solid ${a.colors.border};

          &:hover {
            background: ${a.colors.background.tertiary}CC;
            color: ${a.colors.text.secondary};
          }
        `}
`;function yz({enabled:e,pulsing:a=!1,onToggle:i,onPulseComplete:o}){const{trackInteraction:l}=Zn(),u=b.useRef(l);u.current=l;const m=b.useRef(e);b.useEffect(()=>{u.current({type:"click",data:{elementType:"button",eventName:"audio_init",eventLabel:m.current?"enabled":"disabled",pageUrl:window.location.href}})},[]);const p=()=>{const h=!e;Wi.setEnabled(h),h&&Wi.play("button-click");const v={elementType:"button",eventName:"audio_toggle",eventLabel:h?"enable":"disable",feature:"audio",action:"toggle",default_state:m.current?"on":"off",resulting_state:h?"on":"off",pageUrl:window.location.href};l({type:"click",data:v}),o==null||o(),i(h)},g=e?"Disable audio effects":"Enable audio effects";return c.jsx(ku,{content:g,position:"left",children:c.jsx(bz,{$enabled:e,$pulsing:a&&e,onClick:p,onAnimationEnd:o,"aria-label":g,type:"button",children:e?c.jsx(eT,{size:22}):c.jsx(nT,{size:22})})})}const xz=w.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.border.hover};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: ${e=>e.theme.colors.background.secondary}CC;
  color: ${e=>e.theme.colors.primary.main}CC;
  box-shadow: ${e=>e.theme.shadows.sm};

  @media (prefers-reduced-motion: no-preference) {
    transition:
      background 0.2s ease,
      box-shadow 0.2s ease,
      color 0.2s ease,
      transform 0.15s ease;

    &:active {
      transform: scale(0.92);
    }
  }

  &:hover {
    background: ${e=>e.theme.colors.background.tertiary}E6;
    color: ${e=>e.theme.colors.primary.main};
    border-color: ${e=>e.theme.colors.primary.main}80;
    box-shadow:
      ${e=>e.theme.shadows.md},
      0 0 20px ${e=>e.theme.colors.primary.main}33;
  }
`;function vz(){const{showToast:e}=j2(),{trackInteraction:a}=Zn(),i=yr(),o=b.useCallback(()=>{i.button.click(),a({type:"click",data:{elementType:"button",eventName:"share",eventLabel:window.location.pathname,pageUrl:window.location.href}}),O7(window.location.href,()=>e("Link copied!"))},[i,e,a]);return c.jsx(ku,{content:"Share this page",position:"left",children:c.jsx(xz,{onClick:o,onMouseEnter:()=>i.button.hover(),"aria-label":"Share this page",type:"button",children:c.jsx(X6,{size:20})})})}const wz=te`
  0%, 100% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.15); filter: brightness(1.4); }
`,Sz=te`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,kz=w.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: linear-gradient(
    135deg,
    ${e=>e.theme.colors.primary}CC 0%,
    ${e=>e.theme.colors.primary}99 100%
  );
  box-shadow:
    0 2px 12px rgba(0, 0, 0, 0.5),
    0 0 20px ${e=>e.theme.colors.primary}44;
  color: ${e=>Ps(e.theme)};

  &:hover {
    box-shadow:
      0 4px 16px rgba(0, 0, 0, 0.6),
      0 0 28px ${e=>e.theme.colors.primary}66;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      background 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.15s ease;

    &:active {
      transform: scale(0.92);
    }

    ${({$pulsing:e})=>e&&W`
        animation: ${wz} 0.8s ease-in-out 3;
      `}
  }

  @media (prefers-reduced-motion: reduce) {
    ${({$pulsing:e})=>e&&W`
        animation: ${Sz} 1s ease-in-out 3;
      `}
  }
`;function _z(){const{trackInteraction:e}=Zn(),a=c2(),i=d8(a),[o,l]=b.useState(()=>l8()&&c8()),u=()=>{const p=f8(i?"light":"dark");u8(),l(!1),e({type:"click",data:{elementType:"button",eventName:"theme_toggle",eventLabel:p,feature:"theme",action:"pin",resulting_state:p,pageUrl:window.location.href}}),window.dispatchEvent(new CustomEvent("quinn:site-theme-default",{detail:p}))},m=i?"Switch to the light theme":"Switch to the dark theme";return c.jsx(ku,{content:m,position:"left",children:c.jsx(kz,{$pulsing:o,onClick:u,onAnimationEnd:()=>l(!1),"aria-label":m,"data-testid":"theme-toggle-fab",type:"button",children:i?c.jsx(W6,{size:22}):c.jsx(Y6,{size:22})})})}const $z=b.lazy(()=>Ne(()=>import("./index-Dha_-kFy.js"),[]).then(e=>({default:e.AIBackground}))),Tz=w.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* Fallback gradient — shows immediately until AIBackground lazy loads.
   * Themeable via the --app-bg custom property (set per active site theme).
   * When unset (the default dark-luxe theme), the literal fallback below
   * renders, identical to the historical hardcoded value. */
  background: var(--app-bg, linear-gradient(135deg, #0a0a0f 0%, #141420 50%, #0a0a0f 100%));
`,jz=w.main`
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${lp};

  @media (max-width: ${k2}) {
    padding: 0 ${vs};
  }
`,Cz=w.div`
  position: fixed;
  bottom: max(1.5rem, calc(env(safe-area-inset-bottom) + 0.5rem));
  right: max(0.5rem, calc(env(safe-area-inset-right) + 0.5rem));
  z-index: ${N9};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  /* Off the first screen of the home page: the hero fold is photo + identity +
     CTAs only. Opacity (not display) so the audio pulse's animationend still
     fires while hidden. */
  opacity: ${e=>e.$hidden?0:1};
  pointer-events: ${e=>e.$hidden?"none":"auto"};
  transition: opacity 300ms ease;

  /* Invisible must also mean untabbable — an opacity-0 button still takes
     focus and still reads to a screen reader. visibility is animatable
     alongside opacity, so the fade-in is unchanged. */
  visibility: ${e=>e.$hidden?"hidden":"visible"};
`,Az=.6;function Ez(){const{pathname:e}=Nt(),[a,i]=b.useState(!1);return b.useEffect(()=>{const o=()=>i(window.scrollY>=window.innerHeight*Az);return o(),window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]),e==="/"&&!a}function Rz({children:e}){const{pathname:a}=Nt(),i=b.useRef(null);return c.jsx(hA,{observeRef:i,children:c.jsx(jz,{ref:i,children:e})},a)}function zz({children:e}){const[a,i]=b.useState(!1),[o,l]=b.useState(!1),[u,m]=b.useState({preset:"cosmic-nebula"});b.useEffect(()=>{const h=getComputedStyle(document.documentElement),v=h.getPropertyValue("--ai-bg-preset").trim(),x=h.getPropertyValue("--ai-bg-opacity").trim(),S=x?Number.parseFloat(x):void 0;(v||S!==void 0&&!Number.isNaN(S))&&m({preset:v||"cosmic-nebula",...S!==void 0&&!Number.isNaN(S)?{opacity:S}:{}})},[]),b.useEffect(()=>{const h=()=>{Wi.setEnabled(!0),i(!0),l(!0)};return document.addEventListener("pointerdown",h,{once:!0}),()=>document.removeEventListener("pointerdown",h)},[]);const p=h=>{i(h)},g=Ez();return c.jsx(D7,{children:c.jsxs(Tz,{children:[c.jsx(b.Suspense,{fallback:null,children:c.jsx($z,{presetId:u.preset,opacity:u.opacity})}),c.jsx(iz,{}),c.jsx(Rz,{children:e}),c.jsx(pz,{}),c.jsxs(Cz,{$hidden:g,"data-testid":"fab-container","aria-hidden":g||void 0,children:[c.jsx(vz,{}),c.jsx(_z,{}),c.jsx(yz,{enabled:a,pulsing:o,onToggle:p,onPulseComplete:()=>l(!1)})]})]})})}const R2="usc-brand-takeover-seen",Mz=1e4,ia="takeover";function Dz(){try{return window.sessionStorage.getItem(R2)!==null}catch{return!0}}function Oz(){try{window.sessionStorage.setItem(R2,String(Date.now()))}catch{}}function Nz(e,a){const i=e.trim().toLowerCase();if(i==="")return!0;const o=a.trim().toLowerCase();return o===i||o.endsWith(`.${i}`)}function Lz(){const{track:e}=Zn(),a=Fe(ia,"enabled","")==="true",i=Fe(ia,"imageUrl","").trim(),o=Fe(ia,"headline","").trim(),l=Fe(ia,"body","").trim(),u=Fe(ia,"ctaUrl","").trim(),m=Fe(ia,"imageAlt","Photo"),p=Fe(ia,"ctaLabel","Take me there"),g=Fe(ia,"dismissLabel","Stay here for now"),h=Fe(ia,"host",""),v=Fe(ia,"bounceWindowMs",""),x=b.useMemo(()=>{const U=Number(v);return Number.isFinite(U)&&U>0?U:Mz},[v]),S=typeof window>"u"?"":window.location.hostname,_=a&&i!==""&&o!==""&&l!==""&&u!==""&&Nz(h,S),[C,T]=b.useState(!1),A=b.useRef(null),$=b.useRef(!1),M=b.useRef(!1),[E,B]=b.useState(null);b.useEffect(()=>{A.current!==null||!_||Dz()||(Oz(),A.current=Date.now(),B({imageUrl:i,imageAlt:m,headline:o,body:l,ctaLabel:p,ctaUrl:u,dismissLabel:g}),T(!0),e("brand_takeover_impression",{headline:o,hasImage:!0}))},[_,i,m,o,l,p,u,g,e]);const j=b.useCallback(()=>A.current===null?0:Math.max(0,Date.now()-A.current),[]);b.useEffect(()=>{if(!C)return;const U=()=>{if($.current||M.current)return;const Y=j();Y>x||(M.current=!0,e("brand_takeover_bounce",{dwellMs:Y}))},ae=()=>{document.visibilityState==="hidden"&&U()};return window.addEventListener("pagehide",U),document.addEventListener("visibilitychange",ae),()=>{window.removeEventListener("pagehide",U),document.removeEventListener("visibilitychange",ae)}},[C,x,j,e]);const R=b.useCallback(U=>{!C||$.current||($.current=!0,T(!1),e("brand_takeover_dismiss",{dwellMs:j(),method:U}))},[C,j,e]),z=b.useCallback(()=>{$.current||($.current=!0,e("brand_takeover_cta",{dwellMs:j(),target:(E==null?void 0:E.ctaUrl)??u}))},[u,E,j,e]);return{creative:C?E:null,open:C,dismiss:R,recordCta:z}}const Bz="#D4AF37";function Ls(e){const a=e.colors.primary;return typeof a=="string"&&a.trim()!==""?a:a&&typeof a=="object"&&typeof a.main=="string"?a.main:Bz}function YN(e,a){return`color-mix(in srgb, ${Ls(e)} ${a}%, transparent)`}const qz=w.div`
  position: fixed;
  inset: 0;
  /* Portalled to <body> so no ancestor stacking context can trap it, and above
     every z-index in the built bundle (packages included, max 9999): a takeover
     that lets the sticky header paint over it is not a takeover. */
  z-index: 10000;
  display: grid;
  place-items: center;
  padding: clamp(8px, 3vw, 16px);
  padding-top: max(clamp(8px, 3vw, 16px), env(safe-area-inset-top));
  padding-bottom: max(clamp(8px, 3vw, 16px), env(safe-area-inset-bottom));
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(6px);
`,Vz=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(100%, 28rem);
  max-height: calc(100vh - 16px);
  max-height: calc(100dvh - 16px);
  overflow: hidden;
  border-radius: 20px;
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  box-shadow: 0 30px 80px -30px ${e=>Ls(e.theme)};
  text-align: center;

  /* Phones on their side: the viewport is too short for a stacked hero, so
     the photo goes left and the copy + actions right. */
  @media (orientation: landscape) and (max-height: 500px) {
    flex-direction: row;
    width: min(100%, 44rem);
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: takeover-in 260ms ease-out;
    @keyframes takeover-in {
      from { opacity: 0; transform: translateY(12px) scale(0.98); }
      to { opacity: 1; transform: none; }
    }
  }
`,Uz=w.img`
  display: block;
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  max-height: 60vh;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: top;

  @media (orientation: landscape) and (max-height: 500px) {
    flex: 0 0 40%;
    width: 40%;
    max-height: none;
    aspect-ratio: auto;
  }
`,Fz=w.div`
  flex: 0 0 auto;
  padding: clamp(14px, 4vw, 20px) clamp(12px, 4vw, 20px);

  @media (orientation: landscape) and (max-height: 500px) {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    overflow-y: auto;
  }
`,Hz=w.h2`
  margin: 0 0 8px;
  font-size: clamp(1.35rem, 6.5vw, 2.1rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${e=>Ls(e.theme)};
`,Pz=w.p`
  margin: 0 0 clamp(12px, 4vw, 18px);
  font-size: clamp(0.95rem, 4vw, 1.05rem);
  line-height: 1.4;
  color: ${e=>e.theme.colors.text.secondary};
`,Gz=w.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(6px, 2vw, 10px);
`,z2=`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 48px;
  padding: 10px clamp(6px, 2.5vw, 14px);
  border-radius: 999px;
  font: inherit;
  font-size: clamp(0.8rem, 3.9vw, 1rem);
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
`,Yz=w.a`
  ${z2}
  border: 2px solid ${e=>Ls(e.theme)};
  background: ${e=>Ls(e.theme)};
  color: ${e=>Ps(e.theme)};

  &:focus-visible {
    outline: 3px solid ${e=>e.theme.colors.text.primary};
    outline-offset: 3px;
  }
`,Iz=w.button`
  ${z2}
  border: 2px solid ${e=>e.theme.colors.text.secondary};
  background: transparent;
  color: ${e=>e.theme.colors.text.primary};

  &:focus-visible {
    outline: 3px solid ${e=>e.theme.colors.text.primary};
    outline-offset: 3px;
  }
`,Xz=w.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid ${e=>e.theme.colors.text.primary};
    outline-offset: 2px;
  }

  /* In landscape the copy sits right; keep the close control on the photo. */
  @media (orientation: landscape) and (max-height: 500px) {
    right: auto;
    left: 10px;
  }
`;function Kz(){const{creative:e,open:a,dismiss:i,recordCta:o}=Lz(),l=b.useRef(null),u=b.useRef(null),m=b.useCallback(()=>i("escape"),[i]);return E7(m,a),R7(l,a),A7(a,!0),b.useEffect(()=>{var p;a&&((p=u.current)==null||p.focus())},[a]),!a||!e||typeof document>"u"?null:Yv.createPortal(c.jsx(qz,{"data-testid":"brand-takeover",onClick:p=>{p.target===p.currentTarget&&i("backdrop")},children:c.jsxs(Vz,{ref:l,role:"dialog","aria-modal":"true","aria-labelledby":"brand-takeover-title","aria-describedby":"brand-takeover-body",children:[c.jsx(Xz,{type:"button","aria-label":"Close",onClick:()=>i("close"),children:"×"}),c.jsx(Uz,{src:e.imageUrl,alt:e.imageAlt,loading:"eager",decoding:"async"}),c.jsxs(Fz,{children:[c.jsx(Hz,{id:"brand-takeover-title",children:e.headline}),c.jsx(Pz,{id:"brand-takeover-body",children:e.body}),c.jsxs(Gz,{children:[c.jsx(Iz,{ref:u,type:"button",onClick:()=>i("button"),children:e.dismissLabel}),c.jsx(Yz,{href:e.ctaUrl,onClick:o,children:e.ctaLabel})]})]})]})}),document.body)}const M2=b.createContext({status:null,loading:!0}),Wz="/edge/status.json",Zz=6e4,Qz=5*6e4;function Jz(e){if(!e)return!1;const a=Date.parse(e.ts);return Number.isNaN(a)?!1:Date.now()-a<Qz}function eM({children:e}){const[a,i]=b.useState(null),[o,l]=b.useState(!0);return b.useEffect(()=>{let u=!1,m=null;const p=async()=>{m==null||m.abort();const v=new AbortController;m=v;try{const x=await fetch(Wz,{signal:v.signal,cache:"no-store"});if(!x.ok)throw new Error(`edge-status ${x.status}`);const S=await x.json();u||i(S)}catch{}finally{u||l(!1)}};p();const g=setInterval(()=>void p(),Zz),h=()=>void p();return window.addEventListener("focus",h),()=>{u=!0,m==null||m.abort(),clearInterval(g),window.removeEventListener("focus",h)}},[]),c.jsx(M2.Provider,{value:{status:a,loading:o},children:e})}function IN(e){var u;const{status:a,loading:i}=b.useContext(M2),o=Jz(a)?(u=a==null?void 0:a.forms)==null?void 0:u[e]:void 0,l=o?o.enabled:!0;return{enabled:l,loading:i,reason:l?null:"backend_unreachable"}}const tM="/assets/404_lost_adult_01_hero-uhXUOu5n.webp",nM="/assets/404_lost_adult_01_square-CNNZGe2s.webp",aM="/assets/404_searching_files_27_hero-ClZRi-o2.webp",rM="/assets/404_searching_files_27_square-_cn_Mrfc.webp",iM="/assets/404_searching_files_40_hero-Byu1KUsK.webp",oM="/assets/404_searching_files_40_square-BG9srykl.webp",sM="/assets/404_searching_files_41_hero-2DmQ-xfC.webp",lM="/assets/404_searching_files_41_square-c8mQXRtC.webp",cM="/assets/404_searching_files_42_hero-DhNgI1FY.webp",uM="/assets/404_searching_files_42_square-DXVgrzXd.webp",dM="/assets/500_coffee_spill_accident_26_hero-B7F4HF6J.webp",fM="/assets/500_coffee_spill_accident_26_square-e5o9ZkOy.webp",mM="/assets/500_coffee_spill_accident_37_hero-nyIJRxav.webp",pM="/assets/500_coffee_spill_accident_37_square-B4Yxk3N4.webp",hM="/assets/500_coffee_spill_accident_38_hero-GLootald.webp",gM="/assets/500_coffee_spill_accident_38_square-SPm6jJg1.webp",bM="/assets/500_coffee_spill_accident_39_hero-BDUzG251.webp",yM="/assets/500_coffee_spill_accident_39_square-iwJVMVWn.webp",xM="/assets/503_database_connection_lost_25_hero-0kDQP1kY.webp",vM="/assets/503_database_connection_lost_25_square-DJuJhMCO.webp",wM="/assets/503_database_connection_lost_34_hero-BDm3EtAn.webp",SM="/assets/503_database_connection_lost_34_square-DdZBo63d.webp",kM="/assets/503_database_connection_lost_35_hero-BI5h9cee.webp",_M="/assets/503_database_connection_lost_35_square-KeTsU95V.webp",$M="/assets/503_database_connection_lost_36_hero-BKQUdMSz.webp",TM="/assets/503_database_connection_lost_36_square-CX8P0qPs.webp",jM="/assets/error_02_mature_mechanic_hero-BPGHdie9.webp",CM="/assets/error_02_mature_mechanic_square-30HlZuhi.webp",AM="/assets/error_06_mature_professional_hero-CcqNX2kV.webp",EM="/assets/error_06_mature_professional_square-Cq7AIuO7.webp",RM="/assets/error_13_lost_map_hero-R2jqgh5V.webp",zM="/assets/error_13_lost_map_square-B-P4ZzBC.webp",MM="/assets/error_14_detective_search_hero-CC_YQqVO.webp",DM="/assets/error_14_detective_search_square-N84iBDFU.webp",OM="/assets/error_15_emergency_toolbox_hero-CwvBwe3o.webp",NM="/assets/error_15_emergency_toolbox_square-CyYQpzc7.webp",LM="/assets/error_16_frantic_coding_hero-Dd6FIruh.webp",BM="/assets/error_16_frantic_coding_square-DFHUmkLK.webp",qM="/assets/error_17_overloaded_servers_hero-DHomR_n-.webp",VM="/assets/error_17_overloaded_servers_square-B8KbUV-g.webp",UM="/assets/error_18_yawning_nightshift_hero-D4bi4yW9.webp",FM="/assets/error_18_yawning_nightshift_square-Blaebdsh.webp",HM="/assets/error_19_updates_progress_hero-Y9aRfNc0.webp",PM="/assets/error_19_updates_progress_square-BNyuVCfe.webp",GM="/assets/error_20_cleaning_compressed_air_hero-Cz9m5T1_.webp",YM="/assets/error_20_cleaning_compressed_air_square-Cc6qUltT.webp",IM="/assets/error_21_presenting_pointer_hero-BWIfAkrE.webp",XM="/assets/error_21_presenting_pointer_square-DKG15jtY.webp",KM="/assets/error_22_helpless_shrug_hero-BWX85wJ1.webp",WM="/assets/error_22_helpless_shrug_square-Da2zEdGT.webp",ZM="/assets/error_hero_01-CU_a5ghS.webp",QM="/assets/error_hero_03-Di7w6fO8.webp",JM="/assets/error_hero_04-DYM-Aypr.webp",eD="/assets/error_hero_05-BgZQ6ccR.webp",tD="/assets/error_hero_07-DO5r6I35.webp",nD="/assets/error_hero_08-C8th_WVh.webp",aD="/assets/error_hero_09-C2CT5yC4.webp",rD="/assets/error_hero_10-Dkx7orY8.webp",iD="/assets/error_hero_11-BEX-RVMv.webp",oD="/assets/error_hero_12-Cvr7OyP6.webp",sD="/assets/error_network_cables_tangled_24_hero-D0hKU8X2.webp",lD="/assets/error_network_cables_tangled_24_square-B2rGqTeM.webp",cD="/assets/error_network_cables_tangled_31_hero-DEZ_jRRP.webp",uD="/assets/error_network_cables_tangled_31_square-CVgB7F9o.webp",dD="/assets/error_network_cables_tangled_32_hero-CM_N2uiC.webp",fD="/assets/error_network_cables_tangled_32_square-Wz8Jblwj.webp",mD="/assets/error_network_cables_tangled_33_hero-D4JJ-VXj.webp",pD="/assets/error_network_cables_tangled_33_square-CsaXrXp8.webp",hD="/assets/error_square_01-WG8bcvIJ.webp",gD="/assets/error_square_03-DO-ubUy9.webp",bD="/assets/error_square_04-DOyMDXa0.webp",yD="/assets/error_square_05-AmIg_s8W.webp",xD="/assets/error_square_07-BYIGK-gX.webp",vD="/assets/error_square_08-CoKlfvDl.webp",wD="/assets/error_square_09-DYCWoOjI.webp",SD="/assets/error_square_10-DIU7Pcjh.webp",kD="/assets/error_square_11-DYky2a1y.webp",_D="/assets/error_square_12-CNQUobGt.webp",$D="/assets/error_troubleshooting_checklist_23_hero-9xECbFeD.webp",TD="/assets/error_troubleshooting_checklist_23_square-BkDqROyr.webp",jD="/assets/error_troubleshooting_checklist_28_hero-DTeYsA2P.webp",CD="/assets/error_troubleshooting_checklist_28_square-DTZwyjIH.webp",AD="/assets/error_troubleshooting_checklist_29_hero-Ds9kHbbq.webp",ED="/assets/error_troubleshooting_checklist_29_square-CZ1s86BJ.webp",RD="/assets/error_troubleshooting_checklist_30_hero-CcBzXMIO.webp",zD="/assets/error_troubleshooting_checklist_30_square-B1qrvzSU.webp",MD={"./assets/404_lost_adult_01_hero.webp":tM,"./assets/404_lost_adult_01_square.webp":nM,"./assets/404_searching_files_27_hero.webp":aM,"./assets/404_searching_files_27_square.webp":rM,"./assets/404_searching_files_40_hero.webp":iM,"./assets/404_searching_files_40_square.webp":oM,"./assets/404_searching_files_41_hero.webp":sM,"./assets/404_searching_files_41_square.webp":lM,"./assets/404_searching_files_42_hero.webp":cM,"./assets/404_searching_files_42_square.webp":uM,"./assets/500_coffee_spill_accident_26_hero.webp":dM,"./assets/500_coffee_spill_accident_26_square.webp":fM,"./assets/500_coffee_spill_accident_37_hero.webp":mM,"./assets/500_coffee_spill_accident_37_square.webp":pM,"./assets/500_coffee_spill_accident_38_hero.webp":hM,"./assets/500_coffee_spill_accident_38_square.webp":gM,"./assets/500_coffee_spill_accident_39_hero.webp":bM,"./assets/500_coffee_spill_accident_39_square.webp":yM,"./assets/503_database_connection_lost_25_hero.webp":xM,"./assets/503_database_connection_lost_25_square.webp":vM,"./assets/503_database_connection_lost_34_hero.webp":wM,"./assets/503_database_connection_lost_34_square.webp":SM,"./assets/503_database_connection_lost_35_hero.webp":kM,"./assets/503_database_connection_lost_35_square.webp":_M,"./assets/503_database_connection_lost_36_hero.webp":$M,"./assets/503_database_connection_lost_36_square.webp":TM,"./assets/error_02_mature_mechanic_hero.webp":jM,"./assets/error_02_mature_mechanic_square.webp":CM,"./assets/error_06_mature_professional_hero.webp":AM,"./assets/error_06_mature_professional_square.webp":EM,"./assets/error_13_lost_map_hero.webp":RM,"./assets/error_13_lost_map_square.webp":zM,"./assets/error_14_detective_search_hero.webp":MM,"./assets/error_14_detective_search_square.webp":DM,"./assets/error_15_emergency_toolbox_hero.webp":OM,"./assets/error_15_emergency_toolbox_square.webp":NM,"./assets/error_16_frantic_coding_hero.webp":LM,"./assets/error_16_frantic_coding_square.webp":BM,"./assets/error_17_overloaded_servers_hero.webp":qM,"./assets/error_17_overloaded_servers_square.webp":VM,"./assets/error_18_yawning_nightshift_hero.webp":UM,"./assets/error_18_yawning_nightshift_square.webp":FM,"./assets/error_19_updates_progress_hero.webp":HM,"./assets/error_19_updates_progress_square.webp":PM,"./assets/error_20_cleaning_compressed_air_hero.webp":GM,"./assets/error_20_cleaning_compressed_air_square.webp":YM,"./assets/error_21_presenting_pointer_hero.webp":IM,"./assets/error_21_presenting_pointer_square.webp":XM,"./assets/error_22_helpless_shrug_hero.webp":KM,"./assets/error_22_helpless_shrug_square.webp":WM,"./assets/error_hero_01.webp":ZM,"./assets/error_hero_03.webp":QM,"./assets/error_hero_04.webp":JM,"./assets/error_hero_05.webp":eD,"./assets/error_hero_07.webp":tD,"./assets/error_hero_08.webp":nD,"./assets/error_hero_09.webp":aD,"./assets/error_hero_10.webp":rD,"./assets/error_hero_11.webp":iD,"./assets/error_hero_12.webp":oD,"./assets/error_network_cables_tangled_24_hero.webp":sD,"./assets/error_network_cables_tangled_24_square.webp":lD,"./assets/error_network_cables_tangled_31_hero.webp":cD,"./assets/error_network_cables_tangled_31_square.webp":uD,"./assets/error_network_cables_tangled_32_hero.webp":dD,"./assets/error_network_cables_tangled_32_square.webp":fD,"./assets/error_network_cables_tangled_33_hero.webp":mD,"./assets/error_network_cables_tangled_33_square.webp":pD,"./assets/error_square_01.webp":hD,"./assets/error_square_03.webp":gD,"./assets/error_square_04.webp":bD,"./assets/error_square_05.webp":yD,"./assets/error_square_07.webp":xD,"./assets/error_square_08.webp":vD,"./assets/error_square_09.webp":wD,"./assets/error_square_10.webp":SD,"./assets/error_square_11.webp":kD,"./assets/error_square_12.webp":_D,"./assets/error_troubleshooting_checklist_23_hero.webp":$D,"./assets/error_troubleshooting_checklist_23_square.webp":TD,"./assets/error_troubleshooting_checklist_28_hero.webp":jD,"./assets/error_troubleshooting_checklist_28_square.webp":CD,"./assets/error_troubleshooting_checklist_29_hero.webp":AD,"./assets/error_troubleshooting_checklist_29_square.webp":ED,"./assets/error_troubleshooting_checklist_30_hero.webp":RD,"./assets/error_troubleshooting_checklist_30_square.webp":zD},xh={square:{width:1024,height:1024,aspect:"1 / 1",maxWidth:"400px",maxWidthMobile:"300px"},hero:{width:1536,height:768,aspect:"2 / 1",maxWidth:"600px",maxWidthMobile:"100%"},portrait:{width:768,height:1024,aspect:"3 / 4",maxWidth:"350px",maxWidthMobile:"280px"},"og-card":{width:1200,height:630,aspect:"1.91 / 1",maxWidth:"500px",maxWidthMobile:"100%"},thumbnail:{width:256,height:256,aspect:"1 / 1",maxWidth:"128px",maxWidthMobile:"96px"},"mobile-banner":{width:375,height:200,aspect:"1.875 / 1",maxWidth:"375px",maxWidthMobile:"100%"},tall:{width:720,height:1280,aspect:"9 / 16",maxWidth:"300px",maxWidthMobile:"250px"},"ultra-wide":{width:2560,height:1080,aspect:"21 / 9",maxWidth:"800px",maxWidthMobile:"100%"},sidebar:{width:300,height:600,aspect:"1 / 2",maxWidth:"200px",maxWidthMobile:"150px"}},dp=MD,px=Object.keys(xh).join("|");function DD(e){const a=e.split("/").pop().replace(".webp",""),i=a.match(new RegExp(`^(\\d{3}|error|generic|maintenance)_(.+)_(\\d+)_(${px})$`));if(i)return{url:dp[e],filename:a,errorType:i[1],description:i[2],uid:i[3],layout:i[4]};const o=a.match(new RegExp(`(${px})`)),l=(o==null?void 0:o[1])||"square",u=a.match(/error_(?:square|hero)_(\d+)/),m=a.match(/error_(\d+)_(.+)_(square|hero)/);return{url:dp[e],filename:a,uid:(u==null?void 0:u[1])||(m==null?void 0:m[1]),description:m==null?void 0:m[2],layout:l}}const OD=Object.keys(dp).map(DD).sort((e,a)=>e.filename.localeCompare(a.filename)),eo=new Map;OD.forEach(e=>{if(!e.uid)return;const a=parseInt(e.uid,10),i=eo.get(a)||{};eo.set(a,{...i,[e.layout]:e})});const D2=Array.from(eo.keys()).sort((e,a)=>e-a),Ca=e=>D2.map(a=>{var i;return(i=eo.get(a))==null?void 0:i[e]}).filter(a=>!!a),qi={square:Ca("square"),hero:Ca("hero"),portrait:Ca("portrait"),"og-card":Ca("og-card"),thumbnail:Ca("thumbnail"),"mobile-banner":Ca("mobile-banner"),tall:Ca("tall"),"ultra-wide":Ca("ultra-wide"),sidebar:Ca("sidebar"),byUID:eo,sortedUIDs:D2,getAnyShape:e=>{const a=eo.get(e);if(a){for(const i of Object.keys(xh))if(a[i])return a[i]}}},O2=({type:e="square",variation:a,alt:i="Error illustration",className:o})=>{const l=b.useMemo(()=>{if(a!==void 0){const g=a,h=qi.byUID.get(g);if(h!=null&&h[e])return h[e].url;if(h){const x=["square","hero","portrait","og-card","tall","ultra-wide","sidebar","mobile-banner","thumbnail"];for(const S of x)if(S!==e&&h[S])return h[S].url}const v=qi[e];if(v&&a>=1&&a<=v.length){const x=v[a-1];if(x)return x.url}}const m=qi[e];if(m&&m.length>0){const g=Math.floor(Math.random()*m.length),h=m[g];if(h)return h.url}const p=qi.square[0]||qi.hero[0];return p==null?void 0:p.url},[e,a]),u=xh[e];return c.jsx(ND,{className:o,$config:u,children:c.jsx(LD,{src:l,alt:i,loading:"eager",decoding:"async",$config:u})})},ND=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  max-width: ${e=>e.$config.maxWidth};
  width: 100%;

  @media (max-width: 768px) {
    max-width: ${e=>e.$config.maxWidthMobile};
  }
`,LD=w.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  object-fit: contain;
  aspect-ratio: ${e=>e.$config.aspect};

  @media (max-width: 768px) {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,BD=({title:e="Not Found",message:a="The page you're looking for doesn't exist or has been moved.",homeLink:i="/",homeLinkText:o="Go Home",suggestions:l,variation:u,imageType:m="square"})=>c.jsx(qD,{children:c.jsxs(VD,{children:[c.jsx(O2,{type:m,variation:u,alt:"404 - Page not found"}),c.jsx(UD,{children:"404"}),c.jsx(FD,{children:e}),c.jsx(HD,{children:a}),l&&l.length>0&&c.jsxs(PD,{children:[c.jsx(GD,{children:"Suggestions"}),c.jsx(YD,{children:l.map(p=>c.jsx(ID,{children:p},p))})]}),c.jsxs(XD,{children:[c.jsx(KD,{as:it,to:i,children:o}),c.jsx(WD,{onClick:()=>window.history.back(),children:"Go Back"})]})]})}),qD=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh; /* Dynamic viewport for mobile browsers */
  padding: clamp(1rem, 4vw, 2rem);
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 480px) {
    justify-content: flex-start;
    padding-top: 2rem;
  }
`,VD=w.div`
  max-width: min(600px, 100%);
  width: 100%;
  text-align: center;
  padding: 0 clamp(0.5rem, 2vw, 1rem);
`,UD=w.h1`
  font-size: clamp(4rem, 15vw, 8rem);
  font-weight: 800;
  margin: 0;
  line-height: 1;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,FD=w.h2`
  font-size: clamp(1.25rem, 5vw, 2rem);
  font-weight: 600;
  margin: 0.5rem 0;
  color: #ffffff;
`,HD=w.p`
  font-size: clamp(0.875rem, 3vw, 1.1rem);
  color: #a0aec0;
  margin: clamp(0.75rem, 2vw, 1rem) 0 clamp(1.5rem, 4vw, 2rem);
  line-height: 1.6;
`,PD=w.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  margin-bottom: 2rem;
`,GD=w.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 1rem;
`,YD=w.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,ID=w.li`
  font-size: 0.95rem;
  color: #a0aec0;
  margin-bottom: 0.5rem;

  &::before {
    content: '→ ';
    color: #ff6b9d;
  }
`,XD=w.div`
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,N2=w.button`
  padding: clamp(0.75rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 2rem);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  text-decoration: none;
  min-height: 48px; /* Touch-friendly */
  touch-action: manipulation;

  &:focus-visible {
    outline: 2px solid #ff6b9d;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,KD=w(N2)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 107, 157, 0.4);
  }
`,WD=w(N2)`
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  padding: clamp(1rem, 4vw, 2rem);
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 480px) {
    justify-content: flex-start;
    padding-top: 2rem;
  }
`;w.div`
  max-width: min(600px, 100%);
  width: 100%;
  text-align: center;
  padding: 0 clamp(0.5rem, 2vw, 1rem);
`;w.h1`
  font-size: clamp(4rem, 15vw, 6rem);
  font-weight: 800;
  margin: 0;
  line-height: 1;
  background: linear-gradient(135deg, #f39c12 0%, #e74c3c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;w.h2`
  font-size: clamp(1.25rem, 5vw, 2rem);
  font-weight: 600;
  margin: 0.5rem 0;
  color: #ffffff;
`;w.p`
  font-size: clamp(0.875rem, 3vw, 1.1rem);
  color: #a0aec0;
  margin: clamp(0.75rem, 2vw, 1rem) 0 clamp(1.5rem, 4vw, 2rem);
  line-height: 1.6;
`;w.div`
  padding: clamp(1rem, 3vw, 1.5rem);
  background: rgba(243, 156, 18, 0.1);
  border: 1px solid rgba(243, 156, 18, 0.2);
  border-radius: 12px;
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
`;w.p`
  font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  color: #f39c12;
  margin: 0.5rem 0;

  &::before {
    content: '✓ ';
  }
`;w.div`
  padding: 1rem;
  background: rgba(231, 76, 60, 0.1);
  border: 1px solid rgba(231, 76, 60, 0.2);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  text-align: left;
`;w.h4`
  font-size: 0.875rem;
  color: #e74c3c;
  margin: 0 0 0.5rem;
`;w.pre`
  font-size: 0.75rem;
  color: #a0aec0;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: 'Courier New', monospace;
`;w.div`
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;const L2=w.button`
  padding: clamp(0.75rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 2rem);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  min-height: 48px;
  touch-action: manipulation;

  &:focus-visible {
    outline: 2px solid #f39c12;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;w(L2)`
  background: linear-gradient(135deg, #f39c12 0%, #e74c3c 100%);
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(243, 156, 18, 0.4);
  }
`;w(L2)`
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  padding: clamp(1rem, 4vw, 2rem);
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 480px) {
    justify-content: flex-start;
    padding-top: 2rem;
  }
`;w.div`
  max-width: min(600px, 100%);
  width: 100%;
  text-align: center;
  padding: 0 clamp(0.5rem, 2vw, 1rem);
`;w.h1`
  font-size: clamp(4rem, 15vw, 6rem);
  font-weight: 800;
  margin: 0;
  line-height: 1;
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;w.h2`
  font-size: clamp(1.25rem, 5vw, 2rem);
  font-weight: 600;
  margin: 0.5rem 0;
  color: #ffffff;
`;w.p`
  font-size: clamp(0.875rem, 3vw, 1.1rem);
  color: #a0aec0;
  margin: clamp(0.75rem, 2vw, 1rem) 0 clamp(1.5rem, 4vw, 2rem);
  line-height: 1.6;
`;w.div`
  display: inline-block;
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 4vw, 2rem);
  background: rgba(155, 89, 182, 0.1);
  border: 1px solid rgba(155, 89, 182, 0.3);
  border-radius: 12px;
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
`;w.p`
  font-size: clamp(0.65rem, 1.8vw, 0.75rem);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a0aec0;
  margin: 0 0 0.25rem;
`;w.p`
  font-size: clamp(1.1rem, 4vw, 1.5rem);
  font-weight: 700;
  color: #9b59b6;
  margin: 0;
`;w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: ${e=>e.$isScheduled?"rgba(52, 152, 219, 0.1)":"rgba(155, 89, 182, 0.1)"};
  border: 1px solid
    ${e=>e.$isScheduled?"rgba(52, 152, 219, 0.2)":"rgba(155, 89, 182, 0.2)"};
  border-radius: 8px;
  margin-bottom: 2rem;
`;w.span`
  font-size: 1.25rem;
`;w.p`
  font-size: 0.95rem;
  color: #a0aec0;
  margin: 0;
`;w.div`
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
  justify-content: center;
  margin-bottom: clamp(1rem, 3vw, 1.5rem);

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;w.button`
  padding: clamp(0.75rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 2rem);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
  color: white;
  min-height: 48px;
  touch-action: manipulation;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(155, 89, 182, 0.4);
  }

  &:focus-visible {
    outline: 2px solid #9b59b6;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;w.a`
  font-size: 0.875rem;
  color: #9b59b6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  padding: clamp(1rem, 4vw, 2rem);
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 480px) {
    justify-content: flex-start;
    padding-top: 2rem;
  }
`;w.div`
  max-width: min(700px, 100%);
  width: 100%;
  text-align: center;
  padding: 0 clamp(0.5rem, 2vw, 1rem);
`;w.div`
  font-size: clamp(2.5rem, 10vw, 4rem);
  margin-bottom: clamp(0.5rem, 2vw, 1rem);
`;w.h1`
  font-size: clamp(1.5rem, 6vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 0.5rem;
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;w.p`
  font-size: clamp(0.875rem, 3vw, 1.1rem);
  color: #a0aec0;
  margin: clamp(0.75rem, 2vw, 1rem) 0 clamp(1.5rem, 4vw, 2rem);
  line-height: 1.6;
`;w.div`
  padding: clamp(1rem, 3vw, 1.25rem);
  background: rgba(52, 152, 219, 0.1);
  border: 1px solid rgba(52, 152, 219, 0.2);
  border-radius: 12px;
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
`;w.p`
  font-size: clamp(0.65rem, 1.8vw, 0.75rem);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #3498db;
  margin: 0 0 0.5rem;
`;w.p`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  color: #ffffff;
  margin: 0;
`;w.div`
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
`;w.p`
  font-size: clamp(0.65rem, 1.8vw, 0.75rem);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a0aec0;
  margin: 0 0 0.5rem;
`;w.div`
  height: clamp(6px, 1.5vw, 8px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;w.div`
  height: 100%;
  width: ${e=>e.$progress}%;
  background: linear-gradient(90deg, #3498db 0%, #2ecc71 100%);
  border-radius: 4px;
  transition: width 0.5s ease;
`;w.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: #3498db;
  margin: 0;
  font-weight: 600;
`;w.div`
  display: inline-block;
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 4vw, 2rem);
  background: rgba(46, 204, 113, 0.1);
  border: 1px solid rgba(46, 204, 113, 0.3);
  border-radius: 12px;
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
`;w.p`
  font-size: clamp(0.65rem, 1.8vw, 0.75rem);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a0aec0;
  margin: 0 0 0.25rem;
`;w.p`
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: 700;
  color: #2ecc71;
  margin: 0;
`;w.div`
  padding: clamp(1rem, 3vw, 1.5rem);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
`;w.h3`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 clamp(0.75rem, 2vw, 1rem);
`;w.p`
  font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  color: #a0aec0;
  margin: 0.5rem 0;

  &::before {
    content: '✨ ';
  }
`;w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.5rem, 1.5vw, 0.75rem);
  flex-wrap: wrap;
`;w.span`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: #a0aec0;
`;w.a`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: #3498db;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;w.span`
  color: #4a5568;
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
`;w.div`
  max-width: 600px;
  width: 100%;
  text-align: center;
`;w.h1`
  font-size: 6rem;
  font-weight: 800;
  margin: 0;
  color: ${e=>e.$color};
  text-shadow: 0 4px 20px ${e=>e.$color}4d;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;w.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;w.p`
  font-size: 1.1rem;
  color: #a0aec0;
  margin: 1rem 0 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;w.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;const B2=w.button`
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;w(B2)`
  background: ${e=>e.$color};
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${e=>e.$color}66;
  }

  &:focus {
    outline: 2px solid ${e=>e.$color};
    outline-offset: 2px;
  }
`;w(B2)`
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
`;w.div`
  max-width: 600px;
  width: 100%;
  text-align: center;
`;w.h1`
  font-size: clamp(4rem, 15vw, 6rem);
  font-weight: 800;
  margin: 0;
  color: ${e=>e.$color};
  text-shadow: 0 4px 20px ${e=>e.$color}4d;
`;w.h2`
  font-size: clamp(1.25rem, 5vw, 2rem);
  font-weight: 600;
  margin: 0.5rem 0;
  color: #ffffff;
`;w.p`
  font-size: clamp(0.875rem, 3vw, 1.1rem);
  color: #a0aec0;
  margin: 1rem 0 1.5rem;
  line-height: 1.6;
`;w.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${e=>e.$color}33;
  border-radius: 12px;
  padding: clamp(1rem, 3vw, 1.5rem);
  margin-bottom: 1.5rem;
`;w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;w.span`
  font-size: 1.5rem;
`;w.span`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
`;w.div`
  width: 100%;
  height: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.75rem;
`;w.div`
  width: ${e=>e.$percent}%;
  height: 100%;
  background: linear-gradient(90deg, ${e=>e.$color}, ${e=>e.$color}cc);
  border-radius: 6px;
  transition: width 0.3s ease;
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;w.span`
  color: #ffffff;
  font-size: 1rem;

  strong {
    color: #ffffff;
  }
`;w.span`
  color: #a0aec0;
  font-size: 0.75rem;
`;w.span`
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: ${e=>e.$color}1a;
  border: 1px solid ${e=>e.$color}4d;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${e=>e.$color};
`;w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #a0aec0;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;

  strong {
    color: #ffffff;
  }
`;w.span`
  font-size: 1rem;
`;w.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;const q2=w.button`
  padding: clamp(0.75rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 2rem);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  min-height: 48px;

  &:focus-visible {
    outline: 2px solid;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;w(q2)`
  background: linear-gradient(135deg, ${e=>e.$color}, ${e=>e.$color}cc);
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${e=>e.$color}66;
  }

  &:focus-visible {
    outline-color: ${e=>e.$color};
  }
`;w(q2)`
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:focus-visible {
    outline-color: #ffffff;
  }
`;w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;

  svg {
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.02);
  }
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  padding: clamp(1rem, 4vw, 2rem);
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 480px) {
    justify-content: flex-start;
    padding-top: 2rem;
  }
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 4vw, 4rem);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  box-sizing: border-box;
`;w.div`
  max-width: min(500px, 100%);
  width: 100%;
  text-align: center;
  padding: 0 clamp(0.5rem, 2vw, 1rem);
`;w.h2`
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: 700;
  margin: 1rem 0 0.5rem;
  background: linear-gradient(135deg, ${e=>e.$color} 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;w.p`
  font-size: clamp(0.9rem, 3vw, 1.1rem);
  color: #a0aec0;
  margin: 0.5rem 0 1.5rem;
  line-height: 1.6;
`;w.div`
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  text-align: left;
`;w.h3`
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;w.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;w.li`
  font-size: 0.9rem;
  color: #a0aec0;
  margin-bottom: 0.4rem;
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${e=>e.$color};
    opacity: 0.6;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;w.div`
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;const V2=w.button`
  padding: clamp(0.75rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 2rem);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  text-decoration: none;
  min-height: 48px;
  touch-action: manipulation;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;w(V2)`
  background: linear-gradient(135deg, ${e=>e.$color} 0%, #a855f7 100%);
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${e=>e.$color}66;
  }
`;w(V2)`
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
  }
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${e=>e.$minHeight};
  padding: clamp(1.5rem, 3vw, 2.5rem);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  box-sizing: border-box;
`;w.div`
  max-width: 400px;
  width: 100%;
  text-align: center;
`;w.div`
  margin: 0 auto 1rem;
  width: ${e=>e.$size==="sm"?"120px":"180px"};
  height: ${e=>e.$size==="sm"?"120px":"180px"};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px;
    opacity: 0.9;
  }
`;w.h3`
  font-size: clamp(1.1rem, 3vw, 1.35rem);
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: ${e=>e.$color};
`;w.p`
  font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  color: #a0aec0;
  margin: 0 0 1.25rem;
  line-height: 1.5;
`;w.div`
  display: flex;
  justify-content: center;
`;w.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${e=>e.$color}40;
  background: ${e=>e.$color}15;
  color: ${e=>e.$color};
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.$color}25;
    border-color: ${e=>e.$color}60;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.$color};
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }
`;w.div`
  width: ${e=>e.$size==="sm"?"80px":"120px"};
  height: ${e=>e.$size==="sm"?"80px":"120px"};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$color}15;
  border: 2px solid ${e=>e.$color}30;
  border-radius: 50%;
  color: ${e=>e.$color};
`;const ZD=qi.sortedUIDs.length;(ZD*2*150/1024).toFixed(1);w.div`
  min-height: 100vh;
  background: #0f0f23;
  color: #ffffff;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
`;w.header`
  position: sticky;
  top: 0;
  z-index: ${za.navigation};
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem);
  max-width: 1400px;
  margin: 0 auto;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;w.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;w.span`
  font-size: 1.5rem;
`;w.h1`
  font-size: clamp(0.9rem, 2.5vw, 1.25rem);
  font-weight: 600;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;w.div`
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 4px;
`;w.button`
  padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${e=>e.$active?"linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)":"transparent"};
  color: ${e=>e.$active?"#ffffff":"#a0aec0"};

  &:hover {
    color: #ffffff;
  }
`;w.div`
  display: flex;
  gap: clamp(1rem, 3vw, 2rem);

  @media (max-width: 480px) {
    display: none;
  }
`;w.div`
  text-align: center;
`;w.div`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 700;
  color: #ff6b9d;
`;w.div`
  font-size: 0.65rem;
  color: #a0aec0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;w.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: clamp(1rem, 3vw, 2rem);
`;w.div``;w.div`
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 3rem);

  h2 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin: 0 0 0.75rem;
  }

  p {
    color: #a0aec0;
    margin: 0 0 1rem;
    font-size: clamp(0.875rem, 2vw, 1rem);
  }
`;w.button`
  margin-top: 1rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255, 107, 157, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  margin-left: auto;
  margin-right: auto;
`;w.section`
  margin-bottom: clamp(3rem, 6vw, 4rem);
`;w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;w.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;w.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${e=>e.$color};
  min-width: 3rem;
`;w.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 600;
  margin: 0;
  color: #ffffff;
`;w.p`
  font-size: 0.9rem;
  color: #a0aec0;
  margin: 0;

  @media (max-width: 640px) {
    display: none;
  }
`;w.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;w.div`
  padding: 0.5rem 1rem;
  background: ${e=>e.$color}22;
  border: 1px solid ${e=>e.$color}44;
  border-radius: 6px;
  color: ${e=>e.$color};
  font-size: 0.85rem;
  font-weight: 600;
`;w.button`
  padding: 0.5rem 1.25rem;
  background: transparent;
  border: 2px solid ${e=>e.$color};
  border-radius: 6px;
  color: ${e=>e.$color};
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.$color}22;
    transform: translateX(4px);
  }
`;w.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem 0;

  /* Widescreen: Grid layout (no scrolling, use full width) */
  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  /* Tablet and below: Horizontal scroll */
  @media (max-width: 1024px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
    scrollbar-color: #ff6b9d rgba(255, 255, 255, 0.1);

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ff6b9d;
      border-radius: 4px;
    }
  }
`;w.div`
  /* Grid layout: auto-size */
  min-width: 200px;

  /* Scroll layout: fixed width */
  @media (max-width: 1024px) {
    flex-shrink: 0;
    width: 200px;
  }
  width: 200px;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  scroll-snap-align: start;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${e=>e.$color};
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${e=>e.$color}44;
  }

  img {
    border-radius: 8px;
  }
`;w.div`
  margin-top: 0.75rem;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  color: #a0aec0;
`;w.div``;w.div`
  position: sticky;
  top: 72px;
  z-index: ${Ix.tooltip};
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: clamp(0.75rem, 2vw, 1rem);
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;w.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;w.div`
  display: flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 4px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
  }
`;w.button`
  padding: clamp(0.4rem, 1.5vw, 0.5rem) clamp(0.75rem, 2vw, 1rem);
  font-size: clamp(0.7rem, 1.8vw, 0.8rem);
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${e=>e.$active?"#ff6b9d":"transparent"};
  color: ${e=>e.$active?"#ffffff":"#a0aec0"};
  white-space: nowrap;

  &:hover {
    color: #ffffff;
    background: ${e=>e.$active?"#ff6b9d":"rgba(255, 255, 255, 0.05)"};
  }

  @media (max-width: 768px) {
    flex: 1;
  }
`;const QD=w.button`
  padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1.25rem);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;w(QD)`
  background: rgba(255, 107, 157, 0.1);
  border-color: rgba(255, 107, 157, 0.3);

  &:hover {
    background: rgba(255, 107, 157, 0.2);
    border-color: rgba(255, 107, 157, 0.5);
  }
`;w.div`
  padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1.25rem);
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 600;
  background: rgba(52, 152, 219, 0.15);
  border: 1px solid rgba(52, 152, 219, 0.3);
  border-radius: 8px;
  color: #3498db;
  text-transform: capitalize;
  white-space: nowrap;
`;w.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: clamp(1rem, 3vw, 2rem);
  min-height: 80vh;
  overflow-x: auto;
`;w.div`
  width: ${e=>e.$width||"100%"};
  max-width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  background: #0f0f23;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: width 0.3s ease;

  & > div {
    min-height: 80vh;
  }
`;w.div`
  max-width: 800px;
  margin: 0 auto;
`;w.section`
  margin-bottom: clamp(2rem, 4vw, 3rem);

  h2 {
    font-size: clamp(1.1rem, 3vw, 1.25rem);
    margin: 0 0 1rem;
    color: #ff6b9d;
  }

  p {
    color: #a0aec0;
    line-height: 1.6;
  }
`;w.pre`
  margin: 0;
  padding: clamp(1rem, 2.5vw, 1.5rem);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow-x: auto;
  font-size: clamp(0.7rem, 1.8vw, 0.85rem);
  line-height: 1.6;
  color: #a0aec0;
  font-family: 'Fira Code', 'Consolas', monospace;
`;w.div`
  min-height: 100vh;
  background: #0f0f23;
  color: #ffffff;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem);
  max-width: 1400px;
  margin: 0 auto;
`;w.header`
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 3rem);
`;w.a`
  display: inline-block;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateX(-4px);
  }
`;w.h1`
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 0.75rem;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;w.p`
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #a0aec0;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
`;w.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: clamp(2rem, 4vw, 3rem);
`;w.button`
  padding: clamp(0.625rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  font-weight: 600;
  border: 2px solid ${e=>e.$active?"#ff6b9d":"rgba(255, 255, 255, 0.2)"};
  border-radius: 8px;
  cursor: pointer;
  background: ${e=>e.$active?"rgba(255, 107, 157, 0.2)":"transparent"};
  color: ${e=>e.$active?"#ff6b9d":"#a0aec0"};
  transition: all 0.2s ease;

  &:hover {
    border-color: #ff6b9d;
    color: #ff6b9d;
  }
`;w.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${e=>e.$layout==="square"?"200px":"280px"}, 1fr)
  );
  gap: clamp(1rem, 2.5vw, 1.5rem);

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(${e=>e.$layout==="square"?"150px":"100%"}, 1fr)
    );
    gap: 1rem;
  }
`;w.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: clamp(0.75rem, 2vw, 1rem);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(255, 107, 157, 0.5);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(255, 107, 157, 0.2);
  }

  img {
    border-radius: 8px;
  }
`;w.div`
  margin-top: 0.75rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;w.div`
  font-size: clamp(0.875rem, 2vw, 1rem);
  font-weight: 600;
  color: #ff6b9d;
  line-height: 1.3;
`;w.div`
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  font-weight: 500;
  color: #a0aec0;
  line-height: 1.2;
`;w.div`
  font-size: clamp(0.7rem, 1.3vw, 0.8rem);
  font-weight: 400;
  color: #718096;
  line-height: 1.2;
`;w.div`
  font-size: clamp(0.7rem, 1.3vw, 0.8rem);
  font-weight: 600;
  color: #ff6b9d;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.05em;
  margin-top: 0.125rem;
`;w.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: ${za.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(8px);
  cursor: pointer;
`;w.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;w.div`
  max-width: 80vw;
  max-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 16px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
  }
`;w.button`
  position: absolute;
  top: -3rem;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 107, 157, 0.3);
    border-color: #ff6b9d;
  }
`;w.button`
  position: absolute;
  top: 50%;
  ${e=>e.$position}: -4rem;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 107, 157, 0.3);
    border-color: #ff6b9d;
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    ${e=>e.$position}: 0.5rem;
    width: 44px;
    height: 44px;
    font-size: 1.5rem;
  }
`;w.div`
  text-align: center;
  color: #ffffff;
`;w.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: #ff6b9d;
`;w.p`
  font-size: 1rem;
  color: #a0aec0;
  margin: 0 0 0.5rem;
`;w.p`
  font-size: 0.9rem;
  color: #718096;
  margin: 0 0 0.5rem;
`;w.p`
  font-size: 1rem;
  font-weight: 600;
  color: #ff6b9d;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.05em;
  margin: 0 0 1rem;
`;w.p`
  font-size: 0.85rem;
  color: #718096;
  margin: 0;
  opacity: 0.7;
`;w.div`
  min-height: 100vh;
  background: #0f0f23;
  color: #ffffff;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem);
`;w.div`
  max-width: 1400px;
  margin: 0 auto;
`;w.header`
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 3rem);
`;w.a`
  display: inline-block;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateX(-4px);
  }
`;w.h1`
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 0.75rem;
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;w.p`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: #a0aec0;
  margin: 0 0 1rem;
  font-weight: 500;
`;w.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;w.div`
  font-size: 0.9rem;
  color: #718096;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;

  &:nth-child(2) {
    color: #ff6b9d;
    font-weight: 600;
    font-family: 'Courier New', monospace;
    letter-spacing: 0.05em;
  }
`;w.div`
  display: grid;
  grid-template-columns: ${e=>e.$singleLayout?"1fr":"repeat(auto-fit, minmax(300px, 1fr))"};
  gap: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;w.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;w.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: #a0aec0;
  text-align: center;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;w.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: clamp(0.75rem, 2vw, 1rem);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 107, 157, 0.5);
    box-shadow: 0 8px 24px rgba(255, 107, 157, 0.2);
  }

  img {
    border-radius: 8px;
    width: 100%;
    height: auto;
  }
`;w.div`
  padding: 1.5rem;
  background: rgba(255, 193, 7, 0.1);
  border: 1px solid rgba(255, 193, 7, 0.3);
  border-radius: 12px;
  color: #ffc107;
  text-align: center;
  font-weight: 500;
  margin-top: 2rem;
`;w.div`
  font-size: 1.5rem;
  color: #ff6b9d;
  text-align: center;
  margin-bottom: 2rem;
`;const Tm={xs:"320px",sm:"480px",md:"768px"},sa={xs:`@media (max-width: ${Tm.xs})`,sm:`@media (max-width: ${Tm.sm})`,md:`@media (max-width: ${Tm.md})`};w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh; /* Dynamic viewport height for mobile */
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;

  ${sa.md} {
    padding: 1.5rem;
  }

  ${sa.sm} {
    padding: 1rem;
    justify-content: flex-start;
    padding-top: 2rem;
  }

  ${sa.xs} {
    padding: 0.75rem;
  }
`;w.div`
  max-width: 600px;
  width: 100%;
  text-align: center;

  ${sa.md} {
    max-width: 500px;
  }

  ${sa.sm} {
    max-width: 100%;
  }
`;W`
  font-size: clamp(3rem, 15vw, 6rem);
  font-weight: 800;
  margin: 0;
  line-height: 1;
`;W`
  font-size: clamp(1.25rem, 5vw, 2rem);
  font-weight: 600;
  margin: 0.5rem 0;
  color: #ffffff;
`;W`
  font-size: clamp(0.875rem, 3vw, 1.1rem);
  color: #a0aec0;
  margin: 1rem 0 2rem;
  line-height: 1.6;

  ${sa.sm} {
    margin: 0.75rem 0 1.5rem;
  }
`;w.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  ${sa.sm} {
    flex-direction: column;
    gap: 0.75rem;
  }
`;W`
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px; /* Touch-friendly */
  touch-action: manipulation;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  ${sa.sm} {
    width: 100%;
    padding: 1rem;
  }

  ${sa.xs} {
    font-size: 0.9rem;
    padding: 0.875rem;
  }
`;w.div`
  padding: 1.5rem;
  background: ${e=>e.$color?`${e.$color}1a`:"rgba(255, 255, 255, 0.05)"};
  border: 1px solid ${e=>e.$color?`${e.$color}33`:"rgba(255, 255, 255, 0.1)"};
  border-radius: 12px;
  margin-bottom: 2rem;

  ${sa.sm} {
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
  }
`;const JD={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1400px",full:"100%"};w.div`
  width: 100%;
  max-width: ${({$size:e})=>JD[e||"2xl"]};
  margin: ${({$centered:e})=>e?"0 auto":"0"};

  padding: ${({$padding:e,theme:a})=>{switch(e){case"none":return"0";case"sm":return`0 ${a.spacing.sm}`;case"md":return`0 ${a.spacing.md}`;case"lg":return`0 ${a.spacing.lg}`;default:return`0 ${a.spacing.md}`}}};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({$padding:e,theme:a})=>e==="none"?"0":`0 ${a.spacing.sm}`};
  }
`;w.section`
  background-color: ${({$variant:e,theme:a})=>{switch(e){case"alt":return a.colors.surface;case"elevated":return a.colors.surface;case"default":default:return a.colors.background}}};

  padding: ${({$padding:e,theme:a})=>{switch(e){case"none":return"0";case"sm":return`${a.spacing.xl} 0`;case"md":return`${a.spacing.xxl} 0`;case"lg":return`calc(${a.spacing.xxl} * 1.5) 0`;case"xl":return`calc(${a.spacing.xxl} * 2) 0`;default:return`${a.spacing.xxl} 0`}}};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({$padding:e,theme:a})=>{switch(e){case"none":return"0";case"sm":return`${a.spacing.md} 0`;case"md":return`${a.spacing.lg} 0`;case"lg":return`${a.spacing.xl} 0`;case"xl":return`${a.spacing.xxl} 0`;default:return`${a.spacing.lg} 0`}}};
  }
`;w.div`
  display: grid;
  grid-template-columns: ${e=>typeof e.$columns=="number"?`repeat(${e.$columns}, 1fr)`:e.$columns};

  ${e=>{const a=e.theme,i=o=>!o||o==="none"?"0":a.spacing[o];return e.$rowGap||e.$columnGap?W`
        row-gap: ${i(e.$rowGap)};
        column-gap: ${i(e.$columnGap)};
      `:e.$gap?W`
        gap: ${i(e.$gap)};
      `:""}}

  ${e=>e.$autoRows&&W`
      grid-auto-rows: ${e.$autoRows};
    `}

  ${e=>e.$autoColumns&&W`
      grid-auto-columns: ${e.$autoColumns};
    `}

  ${e=>e.$alignItems&&W`
      align-items: ${e.$alignItems};
    `}

  ${e=>e.$justifyItems&&W`
      justify-items: ${e.$justifyItems};
    `}

  /* Responsive breakpoints */
  ${e=>{var a;return((a=e.$responsive)==null?void 0:a.sm)&&W`
      @media (min-width: 640px) {
        grid-template-columns: repeat(${e.$responsive.sm}, 1fr);
      }
    `}}

  ${e=>{var a;return((a=e.$responsive)==null?void 0:a.md)&&W`
      @media (min-width: 768px) {
        grid-template-columns: repeat(${e.$responsive.md}, 1fr);
      }
    `}}

  ${e=>{var a;return((a=e.$responsive)==null?void 0:a.lg)&&W`
      @media (min-width: 1024px) {
        grid-template-columns: repeat(${e.$responsive.lg}, 1fr);
      }
    `}}

  ${e=>{var a;return((a=e.$responsive)==null?void 0:a.xl)&&W`
      @media (min-width: 1280px) {
        grid-template-columns: repeat(${e.$responsive.xl}, 1fr);
      }
    `}}
`;const eO=w.div`
  display: flex;
  flex-direction: ${e=>e.$direction==="horizontal"?"row":"column"};
  gap: ${e=>{const a=e.theme;return e.$gap==="none"?"0":a.spacing[e.$gap]}};
  align-items: ${e=>e.$align};
  justify-content: ${e=>e.$justify};
  flex-wrap: ${e=>e.$wrap?"wrap":"nowrap"};
  width: ${e=>e.$fullWidth?"100%":"auto"};
  height: ${e=>e.$fullHeight?"100%":"auto"};
`,Bi=({children:e,direction:a="vertical",gap:i="md",align:o="stretch",justify:l="flex-start",wrap:u=!1,className:m,fullWidth:p=!1,fullHeight:g=!1})=>c.jsx(eO,{$direction:a,$gap:i,$align:o,$justify:l,$wrap:u,$fullWidth:p,$fullHeight:g,className:m,children:e});w.div`
  ${e=>{if(e.$size==="auto")return W`
        flex: 1;
      `;const i=e.theme.spacing[e.$size];return e.$direction==="horizontal"?W`
        width: ${i};
        flex-shrink: 0;
      `:W`
      height: ${i};
      flex-shrink: 0;
    `}}
`;w.div`
  display: inline-flex;
  gap: ${e=>e.theme.spacing.sm};

  /* First and last button border radius for connected appearance */
  > button:first-child {
    border-top-left-radius: ${e=>e.theme.borderRadius.md};
    border-bottom-left-radius: ${e=>e.theme.borderRadius.md};
  }

  > button:last-child {
    border-top-right-radius: ${e=>e.theme.borderRadius.md};
    border-bottom-right-radius: ${e=>e.theme.borderRadius.md};
  }

  /* Single button in group keeps all rounded corners */
  > button:only-child {
    border-radius: ${e=>e.theme.borderRadius.md};
  }
`;w.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  gap: ${e=>{const a=e.theme;return e.$gap==="none"?"0":a.spacing[e.$gap]}};
  flex-shrink: 0;
  scrollbar-width: thin;
`;const tO={none:0,sm:8,md:16,lg:24,xl:40},nO={transparent:0,whisper:.02,subtle:.04,light:.06,medium:.1,heavy:.15,solid:.92,opaque:.98},aO={none:0,subtle:.06,light:.1,medium:.15,bright:.2},rO={none:"none",sm:"0 4px 16px rgba(0, 0, 0, 0.2)",md:"0 8px 32px rgba(0, 0, 0, 0.3)",lg:"0 16px 48px rgba(0, 0, 0, 0.4)",xl:"0 24px 64px rgba(0, 0, 0, 0.5)"},iO={none:"none",subtle:"inset 0 1px 0 rgba(255, 255, 255, 0.05)",medium:"inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 0 30px rgba(255, 255, 255, 0.03)",strong:"inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 0 60px rgba(255, 255, 255, 0.05)"},oO={subtle:{blur:"sm",opacity:"subtle",mode:"light",border:"subtle",shadow:"none",glow:"none"},light:{blur:"md",opacity:"light",mode:"light",border:"light",shadow:"sm",glow:"subtle"},medium:{blur:"lg",opacity:"medium",mode:"light",border:"medium",shadow:"md",glow:"medium"},heavy:{blur:"xl",opacity:"heavy",mode:"light",border:"bright",shadow:"lg",glow:"strong"},dropdown:{blur:"md",opacity:"solid",mode:"dark",border:"light",shadow:"md",glow:"subtle",saturation:150},nav:{blur:"md",opacity:"solid",mode:"dark",border:"light",shadow:"sm",glow:"subtle",saturation:180},modal:{blur:"xl",opacity:"opaque",mode:"dark",border:"medium",shadow:"xl",glow:"medium",saturation:150},tooltip:{blur:"md",opacity:"solid",mode:"dark",border:"subtle",shadow:"md",glow:"subtle"}};function sO(e,a,i=.15){const{blur:o="md",opacity:l="light",mode:u="light",border:m="light",shadow:p="sm",glow:g="subtle",saturation:h=180}=e,v=u==="dark"?"10, 10, 15":"255, 255, 255",x=nO[l];let S;a?S=`linear-gradient(135deg,
      color-mix(in srgb, ${a} ${i*100}%, rgba(${v}, ${x})),
      rgba(${v}, ${x})
    )`:S=`rgba(${v}, ${x})`;const _=tO[o],C=_>0?`blur(${_}px) saturate(${h}%)`:"none",T=aO[m],A=T>0?`1px solid rgba(255, 255, 255, ${T})`:"none",$=rO[p],M=iO[g],E=[$,M].filter(j=>j!=="none"),B=E.length>0?E.join(", "):"none";return{background:S,backdropFilter:C,WebkitBackdropFilter:C,border:A,boxShadow:B}}function lO(e){const{variant:a,tint:i,tintIntensity:o,...l}=e,{blur:u,opacity:m,mode:p,border:g,shadow:h,glow:v,saturation:x}=l;return b.useMemo(()=>(a&&{...oO[a]},sO({blur:u,opacity:m,mode:p,border:g,shadow:h,glow:v,saturation:x},i,o)),[a,i,o,u,m,p,g,h,v,x])}const cO=w.div`
  ${({$glassStyles:e})=>W`
    background: ${e.background};
    backdrop-filter: ${e.backdropFilter};
    -webkit-backdrop-filter: ${e.WebkitBackdropFilter};
    border: ${e.border};
    box-shadow: ${e.boxShadow};
  `}

  border-radius: ${({$borderRadius:e})=>typeof e=="number"?`${e}px`:e||"12px"};

  padding: ${({$padding:e})=>typeof e=="number"?`${e}px`:e||"0"};

  ${({$hoverable:e})=>e&&W`
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }

      @media (prefers-reduced-motion: reduce) {
        transition: none;

        &:hover {
          transform: none;
        }
      }
    `}

  /* High contrast mode - disable blur for readability */
  @media (prefers-contrast: high) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: rgba(30, 30, 40, 0.98);
    border-color: rgba(255, 255, 255, 0.3);
  }
`,uO=b.forwardRef(({variant:e,blur:a,opacity:i,mode:o,border:l,shadow:u,glow:m,saturation:p,tint:g,tintIntensity:h,hoverable:v=!1,borderRadius:x,padding:S,className:_,as:C,children:T,...A},$)=>{const M=lO({variant:e,blur:a,opacity:i,mode:o,border:l,shadow:u,glow:m,saturation:p,tint:g,tintIntensity:h});return c.jsx(cO,{ref:$,as:C,className:_,$glassStyles:M,$hoverable:v,$borderRadius:x,$padding:S,...A,children:T})});var dO={overlay:1e3};const fO=w(uO)`
  position: absolute;
  z-index: ${dO.overlay};
  min-width: ${({$minWidth:e})=>typeof e=="number"?`${e}px`:e||"180px"};
  max-height: ${({$maxHeight:e})=>typeof e=="number"?`${e}px`:e||"400px"};
  overflow-y: auto;
  overflow-x: hidden;

  /* Scrollbar styling for dark theme */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;b.forwardRef(({minWidth:e,maxHeight:a,padding:i="8px",borderRadius:o=12,children:l,blur:u="md",opacity:m="solid",mode:p="dark",border:g="light",shadow:h="md",glow:v="subtle",saturation:x=150,...S},_)=>c.jsx(fO,{ref:_,$minWidth:e,$maxHeight:a,blur:u,opacity:m,mode:p,border:g,shadow:h,glow:v,saturation:x,padding:i,borderRadius:o,...S,children:l}));w.div`
  padding: 10px 14px;
  border-radius: 6px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.5:1};
  transition: all 0.2s ease;
  margin: 2px 0;
  color: rgba(255, 255, 255, 0.9);

  ${({$active:e})=>e&&`
    background: rgba(255, 255, 255, 0.08);
  `}

  &:hover {
    background: ${({$disabled:e})=>e?"transparent":"rgba(255, 255, 255, 0.06)"};
    transform: ${({$disabled:e})=>e?"none":"translateX(2px)"};
  }

  &:active {
    background: ${({$disabled:e})=>e?"transparent":"rgba(255, 255, 255, 0.1)"};
  }
`;w.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 6px 8px;
`;const U2={"black-crop-top-golden-hour.jpeg":"c460c336c790.jpeg","black-crop-top-golden-hour.webp":"184bb187efdb.webp","black-sweater-warm-smile.jpeg":"0bd4605969e9.jpeg","black-sweater-warm-smile.webp":"a8e0f3e7bfb1.webp","cage-harness-purple.jpeg":"56da20755f16.jpeg","cage-harness-purple.webp":"b4f9a9754d6a.webp","destinations-travel.png":"00993ccda76a.png","destinations-travel.webp":"33fa07c9ca26.webp","duo-session.png":"b3588c5d4fd4.png","duo-session.webp":"4c4830471e8d.webp","fishnet-stockings-in-car.jpeg":"0a8ffaed7b3c.jpeg","fishnet-stockings-in-car.webp":"c7a48ccc5413.webp","floral-bra-lace-panties.jpeg":"7198379a8ed8.jpeg","floral-bra-lace-panties.webp":"9be38983585a.webp","hero-bikini-top.jpeg":"1effd016f99a.jpeg","hero-bikini-top.webp":"6a2829d49294.webp","pink-black-tank-booth.jpeg":"371f4caf2540.jpeg","pink-black-tank-booth.webp":"f23e151b95e1.webp","pink-black-tube-jorts.jpeg":"685e6f249c20.jpeg","pink-black-tube-jorts.webp":"648c623676ce.webp","pink-blue-cropped-shirt.jpeg":"42424e4877cb.jpeg","pink-blue-cropped-shirt.webp":"01dfccdcf74a.webp","pink-bra-fishnets-side.jpeg":"df7d61b269b0.jpeg","pink-bra-fishnets-side.webp":"3d5e806976a1.webp","pink-bra-panties-front.jpeg":"451ab35e099c.jpeg","pink-bra-panties-front.webp":"cb38a9ec7ff7.webp","pink-brat-choker-monster.jpeg":"11b8859087ae.jpeg","pink-brat-choker-monster.webp":"bb2e98c0f96f.webp","pink-brat-choker.jpeg":"9f18fc4ef007.jpeg","pink-brat-choker.webp":"1cb0933b3935.webp","pink-cable-knit-sweater.jpeg":"670f698cf387.jpeg","pink-cable-knit-sweater.webp":"3db9bd3700e4.webp","pink-cocktail-cincy.jpeg":"4c58968b710e.jpeg","pink-cocktail-cincy.webp":"79e8fe39ae75.webp","pink-cowl-sweater-pose.jpeg":"e3550f488a65.jpeg","pink-cowl-sweater-pose.webp":"aa5e4329c87b.webp","pink-cowl-sweater-selfie.jpeg":"c479ef1b126d.jpeg","pink-cowl-sweater-selfie.webp":"649338a0d9b4.webp","pink-hearts-sweater-diner.jpeg":"cb949e172df8.jpeg","pink-hearts-sweater-diner.webp":"9d1ce58c3eb8.webp","pink-hearts-sweater-leather-skirt.jpeg":"bf356d6dcb85.jpeg","pink-hearts-sweater-leather-skirt.webp":"d3ec89de6f4b.webp","pink-hearts-sweater-mirror.jpeg":"7cc1305c2205.jpeg","pink-hearts-sweater-mirror.webp":"9c1dbc859066.webp","pink-hearts-sweater-tongue.jpeg":"a2ec1cd5fa24.jpeg","pink-hearts-sweater-tongue.webp":"77bc2f1a97e0.webp","pink-lace-lollipop.jpeg":"40e712ef4717.jpeg","pink-lace-lollipop.webp":"eed57969d5b2.webp","pink-plaid-miniskirt.jpeg":"9712880eaeff.jpeg","pink-plaid-miniskirt.webp":"93e52ea5da94.webp","pink-plaid-schoolgirl.jpeg":"dcd311b4bff6.jpeg","pink-plaid-schoolgirl.webp":"710d45a2c40a.webp","pink-ruffle-set-bedroom.jpeg":"2039680c1464.jpeg","pink-ruffle-set-bedroom.webp":"629cecba62f8.webp","pink-topless-bed-necklace.jpeg":"ca076301b517.jpeg","pink-topless-bed-necklace.webp":"96a1fde832ad.webp","pink-topless-flex.jpeg":"f9aaf8429188.jpeg","pink-topless-flex.webp":"ca91adb34189.webp","pink-topless-relaxed.jpeg":"73893bc4febf.jpeg","pink-topless-relaxed.webp":"952348a49925.webp","pink-topless-skirt-down.jpeg":"51b84e5a9065.jpeg","pink-topless-skirt-down.webp":"91a2d378789f.webp","plaid-skirt-heart-necklace.jpeg":"4c671913ff13.jpeg","plaid-skirt-heart-necklace.webp":"644d0e15f288.webp","quinn-black-cage-bra-seated.jpeg":"59fd1976f1b5.jpeg","quinn-black-cage-bra-seated.webp":"b4fdfa1ef5de.webp","quinn-black-garter-seated.jpeg":"520c79bb8668.jpeg","quinn-black-garter-seated.webp":"d6ac96f3456f.webp","quinn-black-harness-recline.jpeg":"28d6d24d5480.jpeg","quinn-black-harness-recline.webp":"3890088e9ceb.webp","quinn-black-harness-smiling.jpeg":"6158abebd729.jpeg","quinn-black-harness-smiling.webp":"24300f6d0b9e.webp","quinn-game-over-hoodie-closeup.jpeg":"437bf3018496.jpeg","quinn-game-over-hoodie-closeup.webp":"e61eae7f486e.webp","quinn-game-over-hoodie-selfie.jpeg":"e3ddfa5a4946.jpeg","quinn-game-over-hoodie-selfie.webp":"4839fbb5ca72.webp","quinn-garter-bed-frontal.jpeg":"3ee9d93c25f7.jpeg","quinn-garter-bed-frontal.webp":"a808a7c72747.webp","quinn-garter-bed-parted.jpeg":"7e3b72b52f5f.jpeg","quinn-garter-bed-parted.webp":"804e6553e00e.webp","quinn-garter-bed-recline.jpeg":"91ffe34073ab.jpeg","quinn-garter-bed-recline.webp":"630724f3a7e4.webp","quinn-garter-bed-seated.jpeg":"a24346b8cea1.jpeg","quinn-garter-bed-seated.webp":"6f0e05d0939e.webp","quinn-garter-bright-curtains.jpeg":"eb7525035f72.jpeg","quinn-garter-bright-curtains.webp":"74b4caf63c2b.webp","quinn-garter-cage-chair.jpeg":"86f6f293d171.jpeg","quinn-garter-cage-chair.webp":"c1e26618a8d0.webp","quinn-garter-chair-frontal.jpeg":"802f033795bb.jpeg","quinn-garter-chair-frontal.webp":"92a5e4579105.webp","quinn-garter-chair-pose.jpeg":"f0f3aa2080bd.jpeg","quinn-garter-chair-pose.webp":"61ddb01b7831.webp","quinn-garter-stockings-chair.jpeg":"f2c550c8d081.jpeg","quinn-garter-stockings-chair.webp":"0ed45266e3e1.webp","quinn-nude-bed-closeup.jpeg":"63346327eb97.jpeg","quinn-nude-bed-closeup.webp":"3a1a59c5175b.webp","quinn-nude-bed-frontal.jpeg":"c0f064b3f9b2.jpeg","quinn-nude-bed-frontal.webp":"d179a43e45f8.webp","quinn-nude-bed-hands-hair.jpeg":"bb11fe9f5958.jpeg","quinn-nude-bed-hands-hair.webp":"ba19e5c8b3c0.webp","quinn-nude-bed-intimate.jpeg":"54f4f97b71dd.jpeg","quinn-nude-bed-intimate.webp":"c5885c37c33b.webp","quinn-nude-bed-propped.jpeg":"c7542bb60b61.jpeg","quinn-nude-bed-propped.webp":"3837a992b628.webp","quinn-nude-bed-recline-pink.jpeg":"3c958c443ac4.jpeg","quinn-nude-bed-recline-pink.webp":"1dc4967edc48.webp","quinn-pink-bra-boots-frontal.jpeg":"9e8f972bd443.jpeg","quinn-pink-bra-boots-frontal.webp":"af1f48c72f22.webp","quinn-pink-bra-boots-mural.jpeg":"5fc558cc2d3d.jpeg","quinn-pink-bra-boots-mural.webp":"6e6462e2600e.webp","quinn-pink-bra-topless-recline.jpeg":"a171dedfb082.jpeg","quinn-pink-bra-topless-recline.webp":"41395cc1a5c5.webp","quinn-pink-lace-bra-bed-seated.jpeg":"91f84c96ba41.jpeg","quinn-pink-lace-bra-bed-seated.webp":"70444dd8c00d.webp","quinn-pink-lace-lingerie-reclining.jpeg":"0e7bd4f88287.jpeg","quinn-pink-lace-lingerie-reclining.webp":"1e899662f2c5.webp","quinn-pink-lingerie-boots-smile.jpeg":"47042028166b.jpeg","quinn-pink-lingerie-boots-smile.webp":"61b6f6d84f19.webp","quinn-pink-sheer-boots-mural.jpeg":"079380a7b963.jpeg","quinn-pink-sheer-boots-mural.webp":"6489b9ef6c9a.webp","quinn-pink-thong-closeup-2.jpeg":"9f497d7a2e8f.jpeg","quinn-pink-thong-closeup-2.webp":"68643d48e124.webp","quinn-pink-thong-closeup.jpeg":"d48b29740c38.jpeg","quinn-pink-thong-closeup.webp":"9bfebc21b7d3.webp","quinn-rear-allfours-bed.jpeg":"4ff0880293d0.jpeg","quinn-rear-allfours-bed.webp":"8b7cd799b908.webp","quinn-rear-lowangle-bed.jpeg":"8f1349e250bd.jpeg","quinn-rear-lowangle-bed.webp":"b4de5186cc61.webp","quinn-rear-pink-thong-boots.jpeg":"e7919c6d2f7f.jpeg","quinn-rear-pink-thong-boots.webp":"c36edba44f81.webp","quinn-rear-pink-thong-close.jpeg":"b1d880e834a3.jpeg","quinn-rear-pink-thong-close.webp":"bdac19581902.webp","quinn-topless-hair-play.jpeg":"2d31d44864f0.jpeg","quinn-topless-hair-play.webp":"04d00a4c7121.webp","quinn-topless-kneeling-sunlit.jpeg":"ab4999c21e31.jpeg","quinn-topless-kneeling-sunlit.webp":"dcfacf7951c4.webp","quinn-topless-pink-sheer.jpeg":"1aba9b241c5d.jpeg","quinn-topless-pink-sheer.webp":"2f46199836ce.webp","quinn-treat-yourself-topless.jpeg":"a91d4821df2d.jpeg","quinn-treat-yourself-topless.webp":"ab43b53e9963.webp","specialties-solo.png":"bec2e88f1dea.png","specialties-solo.webp":"fdfc27e0caa0.webp","teal-lace-lingerie.jpeg":"6cc5c12b3ba6.jpeg","teal-lace-lingerie.webp":"149134ddaf8e.webp","white-lace-dress-neon.jpeg":"861256191f0b.jpeg","white-lace-dress-neon.webp":"14181e70061e.webp"};function mO(){return"transquinnftw"}const pO=te`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,hO=w.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.xl};
  align-items: center;
  justify-items: center;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
  padding: ${e=>e.theme.spacing.xl};

  @media (orientation: portrait) {
    grid-template-columns: 1fr;
    gap: ${e=>e.theme.spacing.lg};
    padding: ${e=>e.theme.spacing.lg};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${e=>e.theme.spacing.lg};
    padding: ${e=>e.theme.spacing.lg};
  }
`,hx=w.div`
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);

  @media (orientation: portrait) {
    max-width: 280px;
    margin: 0 auto;
  }
`,gO=w.h1`
  font-size: clamp(2rem, 8vw, 5rem);
  font-weight: 900;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  background-size: 200% 200%;
  animation: ${pO} 6s ease infinite;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  line-height: 1;
  letter-spacing: -1px;
`,bO=w.h2`
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: -0.5px;
`,yO=w.a`
  display: inline-block;
  background: linear-gradient(135deg, #ff006e 0%, #d946ef 100%);
  padding: clamp(12px, 3vw, 16px) clamp(20px, 4vw, 24px);
  border-radius: 12px;
  font-size: clamp(1rem, 3vw, 1.125rem);
  font-weight: 600;
  color: white;
  box-shadow: 0 8px 32px rgba(255, 0, 110, 0.3);
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(255, 0, 110, 0.5);
  }

  &:active {
    transform: translateY(0);
  }
`,xO=w.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  padding: clamp(16px, 4vw, 24px) clamp(28px, 6vw, 48px);
  border-radius: 16px;
  font-weight: 900;
  color: white;
  box-shadow: 0 12px 40px rgba(16, 185, 129, 0.4);
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  width: 100%;
  max-width: 420px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 48px rgba(16, 185, 129, 0.6);
  }

  &:active {
    transform: translateY(0);
  }
`,vO=w.span`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  opacity: 0.95;
`,wO=w.span`
  font-size: clamp(1.75rem, 6vw, 2.5rem);
  letter-spacing: 1px;
  line-height: 1.1;
`,SO=w.span`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  opacity: 0.9;
  font-weight: 600;
`,kO=w.p`
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.6;
`,_O=w.label`
  display: block;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${e=>e.theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,$O=w.input`
  flex: 1;
  min-width: 240px;
  padding: 12px 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 16px;
  transition: all 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    border-color: #ff006e;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(255, 0, 110, 0.1);
  }
`,TO=w.button`
  padding: 12px 32px;
  background: linear-gradient(135deg, #ff006e 0%, #d946ef 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 0, 110, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,gx=w.p`
  font-size: 14px;
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.7);
`,jO=w.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 ${e=>e.theme.spacing.lg} 0;
  font-weight: 600;
`,jm=w.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 24px;

  &:hover {
    background: linear-gradient(135deg, #ff006e 0%, #d946ef 100%);
    transform: translateY(-4px);
  }
`;function CO(){const{trackInteraction:e}=Zn(),a=_=>{e({type:"click",data:{elementType:"link",eventName:_,pageUrl:window.location.href}})},[i,o]=b.useState(""),[l,u]=b.useState(!1),[m,p]=b.useState(!1),[g,h]=b.useState("");b.useEffect(()=>{document.title="Quinn — Coming Back Soon";const _=document.querySelector('meta[name="description"]');_&&_.setAttribute("content","We are temporarily down for maintenance. Subscribe for email alerts when we are back online.");const C=document.querySelector('link[rel="canonical"]');C&&C.setAttribute("href",window.location.origin+"/");const T=document.querySelector('meta[property="og:url"]');T&&T.setAttribute("content",window.location.origin+"/")},[]);const v=async _=>{if(_.preventDefault(),!!i){u(!0),h("");try{(await fetch(`/waitlist?slug=${encodeURIComponent(mO())}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,source:"maintenance_home"})})).ok?(p(!0),o(""),setTimeout(()=>p(!1),4e3)):h("Something went wrong. Try again?")}catch{h("Network error. Try again?")}finally{u(!1)}}},S=`/photos/${U2["cage-harness-purple.webp"]}`;return c.jsxs(hO,{children:[c.jsxs(Bi,{direction:"horizontal",gap:"lg",justify:"center",align:"center",wrap:!0,children:[c.jsx(hx,{children:c.jsx("img",{src:S,alt:"Quinn hero image",style:{width:"100%",height:"100%",objectFit:"cover"}})}),c.jsx(hx,{children:c.jsx("div",{style:{width:"100%",height:"100%",overflow:"hidden"},children:c.jsx(O2,{type:"portrait",variation:2})})})]}),c.jsxs(Bi,{gap:"lg",align:"center",justify:"center",fullWidth:!0,children:[c.jsx(gO,{children:"Quinn"}),c.jsx(bO,{children:"Coming Back Soon"}),c.jsxs(xO,{href:"sms:+14244663669",onClick:()=>a("maintenance_phone_click"),children:[c.jsx(vO,{children:"📱 Text Me Anytime — 24/7"}),c.jsx(wO,{children:"424-466-3669"}),c.jsx(SO,{children:"Bookings · Questions · Right Now"})]}),c.jsx(yO,{href:"https://onlyfans.com/tsquinrose",target:"_blank",rel:"noopener noreferrer",onClick:()=>a("maintenance_onlyfans_click"),children:"🚀 Launching OnlyFans Today! Subscribe Now"}),c.jsx(kO,{children:"We're doing some magic behind the scenes. In the meantime, stay connected and keep up with what's new."}),c.jsxs(Bi,{gap:"xs",align:"center",fullWidth:!0,children:[c.jsx(_O,{children:"Get Email Alerts"}),c.jsxs("form",{onSubmit:v,style:{width:"100%"},children:[c.jsxs(Bi,{direction:"horizontal",gap:"xs",justify:"center",align:"stretch",wrap:!0,children:[c.jsx($O,{type:"email",placeholder:"your@email.com",value:i,onChange:_=>o(_.target.value),disabled:l,required:!0}),c.jsx(TO,{type:"submit",disabled:l,children:l?"Subscribing...":"Subscribe"})]}),m&&c.jsx(gx,{style:{color:"#4ade80"},children:"✓ Thanks for subscribing!"}),g&&c.jsxs(gx,{style:{color:"#ff6b6b"},children:["✗ ",g]})]})]}),c.jsx("div",{style:{marginTop:"60px",paddingTop:"40px",borderTop:"1px solid rgba(255, 255, 255, 0.1)",width:"100%"},children:c.jsxs(Bi,{gap:"lg",align:"center",children:[c.jsx(jO,{children:"Follow Me"}),c.jsxs(Bi,{direction:"horizontal",gap:"lg",justify:"center",align:"center",wrap:!0,children:[c.jsx(jm,{href:"https://instagram.com/transquinnftw",target:"_blank",rel:"noopener noreferrer",title:"Instagram",children:"📸"}),c.jsx(jm,{href:"https://x.com/transquinnftw",target:"_blank",rel:"noopener noreferrer",title:"X (Twitter)",children:"𝕏"}),c.jsx(jm,{href:"https://onlyfans.com/tsquinrose",target:"_blank",rel:"noopener noreferrer",title:"OnlyFans",children:"🔒"})]})]})})]})]})}const AO=w.main`
  max-width: 720px;
  margin: 0 auto;
  padding: ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.body};
`,EO=w.h1`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  color: ${e=>e.theme.colors.primary};
  margin-bottom: ${e=>e.theme.spacing.md};
`,RO=w.p`
  color: ${e=>e.theme.colors.text.secondary};
  line-height: ${e=>e.theme.typography.lineHeight.relaxed};
`,bx=w.section`
  margin-top: ${e=>e.theme.spacing.lg};
  padding: ${e=>e.theme.spacing.lg};
  background: ${e=>e.theme.colors.background.secondary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.lg};
`,ms=w.li`
  margin: ${e=>e.theme.spacing.sm} 0;
  color: ${e=>e.theme.colors.text.secondary};
`;function zO(){return i2({title:"Dev View",noindex:!0}),c.jsxs(AO,{children:[c.jsx(EO,{children:"Dev View"}),c.jsx(RO,{children:"Authenticated settings surface for transquinnftw.com — change public site settings here without opening the full admin panel. You reached this page through SSO, so you're signed in."}),c.jsxs(bx,{"aria-label":"Blur reveal",children:[c.jsx("h2",{style:{marginTop:0},children:"Re-arm the photo blur gate"}),c.jsxs("ol",{children:[c.jsxs(ms,{children:["After anyone taps a photo, ",c.jsx("code",{children:"sessionStorage['site-revealed']"})," stays set for the rest of the tab — the gate is one-way on purpose."]}),c.jsxs(ms,{children:["To see the blur again without incognito: open"," ",c.jsx("code",{children:"/?reveal=reset"})," or ",c.jsx("code",{children:"/gallery?reveal=reset"}),". The param clears the flag and then strips itself from the URL."]})]})]}),c.jsxs(bx,{"aria-label":"Theme",children:[c.jsx("h2",{style:{marginTop:0},children:"Theme"}),c.jsxs("ol",{children:[c.jsxs(ms,{children:["Open the floating ",c.jsx("strong",{children:"🎨 Theme Lab"})," (bottom-right) — it's mounted only here."]}),c.jsx(ms,{children:"Pick a theme (or fork + tweak one) to preview it live across the site."}),c.jsxs(ms,{children:["The brand default every visitor sees is the admin-managed"," ",c.jsx("code",{children:"site_settings.default_theme"})," (served via"," ",c.jsx("code",{children:"/www/provider-config"}),"). A one-click ",c.jsx("strong",{children:"Set as site default"})," ","from this view is the next addition."]})]})]})]})}const F2=c.jsx(Pn,{path:"/admin",element:c.jsx(zO,{})},"/admin");c.Fragment,NR.map(e=>c.jsx(Pn,{path:e.path,element:e.element},e.path));const MO=c.jsxs(c.Fragment,{children:[OR.map(e=>c.jsx(Pn,{path:e.path,element:e.element},e.path)),F2,c.jsx(Pn,{path:"*",element:c.jsx(BD,{homeLink:"/",homeLinkText:"Back to Home"})})]}),DO=new Set(["user-sites.apps.ct.uvlava.com","sites.apps.ct.uvlava.com","apps.ftw.pw","apps.ct.uvlava.com","next-www.transquinnftw.users.ct.uvlava.com","next-www-transquinnftw.sites.ct.uvlava.com"]);function OO(e=typeof window<"u"?window.location.hostname:""){const a=e.toLowerCase();return DO.has(a)||a.startsWith("user-sites.")&&a.endsWith(".uvlava.com")||a.startsWith("next-www.")&&a.endsWith(".uvlava.com")?"portal":"tenant"}const yx=void 0;function NO(e,a){const i=e.trim().toLowerCase(),o=a.trim().toLowerCase();return!i||!o?!1:o==="localhost"||o==="127.0.0.1"?i==="localhost"||i==="127.0.0.1":i===o||i.endsWith(`.${o}`)}function H2(e){return!e||typeof window>"u"?!1:NO(window.location.hostname,e)}const vh="portal-defer-password-change";function wh(){try{return window.sessionStorage}catch{return null}}function fp(){var e;(e=wh())==null||e.setItem(vh,"1")}function Rc(){var e;return((e=wh())==null?void 0:e.getItem(vh))==="1"}function LO(){var e;(e=wh())==null||e.removeItem(vh)}function Cs(e){const a="=".repeat((4-e.length%4)%4),i=(e+a).replace(/-/g,"+").replace(/_/g,"/"),o=atob(i),l=new Uint8Array(o.length);for(let u=0;u<o.length;u++)l[u]=o.charCodeAt(u);return l.buffer}function Br(e){const a=new Uint8Array(e);let i="";for(let o=0;o<a.length;o++)i+=String.fromCharCode(a[o]);return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Sh(){return typeof window<"u"&&!!window.PublicKeyCredential}async function P2(){if(!Sh())return!1;try{const e=PublicKeyCredential;if(typeof e.isUserVerifyingPlatformAuthenticatorAvailable=="function")return!!await e.isUserVerifyingPlatformAuthenticatorAvailable()}catch{}return!1}function BO(e){const a=e.rp,i=e.user,o=e.excludeCredentials||[];return{challenge:Cs(String(e.challenge)),rp:a,user:{id:Cs(i.id),name:i.name,displayName:i.displayName},pubKeyCredParams:e.pubKeyCredParams||[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],timeout:e.timeout,excludeCredentials:o.map(l=>({id:Cs(l.id),type:"public-key",transports:l.transports})),authenticatorSelection:e.authenticatorSelection,attestation:e.attestation||"none",extensions:e.extensions}}function qO(e){const a=e.allowCredentials||[];return{challenge:Cs(String(e.challenge)),timeout:e.timeout,rpId:e.rpId,allowCredentials:a.map(i=>({id:Cs(i.id),type:"public-key",transports:i.transports})),userVerification:e.userVerification||"required",extensions:e.extensions}}function G2(e){const a=e.response,i=e.response,o={id:e.id,rawId:Br(e.rawId),type:e.type,clientExtensionResults:e.getClientExtensionResults()};return"attestationObject"in a&&a.attestationObject?o.response={clientDataJSON:Br(a.clientDataJSON),attestationObject:Br(a.attestationObject),transports:typeof a.getTransports=="function"?a.getTransports():void 0}:o.response={clientDataJSON:Br(i.clientDataJSON),authenticatorData:Br(i.authenticatorData),signature:Br(i.signature),userHandle:i.userHandle?Br(i.userHandle):null},o}async function VO(e){const a=await fetch("/auth/webauthn/register/start",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e})});if(!a.ok){const u=await a.json().catch(()=>({}));throw new Error(u.message||`register start failed (${a.status})`)}const i=await a.json(),o=await navigator.credentials.create({publicKey:BO(i)});if(!o)throw new Error("Passkey registration cancelled");const l=await fetch("/auth/webauthn/register/finish",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(G2(o))});if(!l.ok){const u=await l.json().catch(()=>({}));throw new Error(u.message||`register finish failed (${l.status})`)}return await l.json()}async function UO(e){const a=await fetch("/auth/webauthn/login/start",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e?{login:e}:{})});if(!a.ok){const u=await a.json().catch(()=>({}));throw new Error(u.message||`passkey start failed (${a.status})`)}const i=await a.json(),o=await navigator.credentials.get({publicKey:qO(i)});if(!o)throw new Error("Passkey sign-in cancelled");const l=await fetch("/auth/webauthn/login/finish",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(G2(o))});if(!l.ok){const u=await l.json().catch(()=>({}));throw new Error(u.message||`passkey failed (${l.status})`)}return await l.json()}async function Y2(){const e=await fetch("/auth/webauthn/remove",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:"{}"});if(!e.ok){const a=await e.json().catch(()=>({}));throw new Error(a.message||`remove failed (${e.status})`)}}function I2({disabled:e,buttonClassName:a,title:i,onEnrolled:o,onError:l}){const[u,m]=b.useState(!1),[p,g]=b.useState(""),[h,v]=b.useState(!1);async function x(_){_.preventDefault(),v(!0);try{await VO(p),m(!1),o()}catch(C){l(C instanceof Error?C.message:"Could not enable passkey")}finally{g(""),v(!1)}}function S(){m(!1),g("")}return u?c.jsxs("form",{className:"portal-form",onSubmit:_=>void x(_),children:[c.jsxs("label",{children:["Your password, to add a passkey",c.jsx("input",{type:"password",autoComplete:"current-password",value:p,onChange:_=>g(_.target.value),required:!0,autoFocus:!0})]}),c.jsx("button",{type:"submit",className:a,disabled:h||p==="",children:h?"Please wait…":"Confirm and enable"}),c.jsx("button",{type:"button",className:"portal-secondary",disabled:h,onClick:S,children:"Cancel"})]}):c.jsx("button",{type:"button",className:a,disabled:e,title:i,onClick:()=>m(!0),children:"Enable Face ID / Touch ID"})}function qr(e,a){const i=Object.entries(e).map(([l,u])=>`[${l}="${u}"]`).join("");let o=document.head.querySelector(`meta${i}`);if(!o){o=document.createElement("meta");for(const[l,u]of Object.entries(e))o.setAttribute(l,u);document.head.appendChild(o)}o.setAttribute("content",a)}function Gs(e,a){b.useEffect(()=>{const i=a??"Staff portal sign-in and account management. Not a public entertainment site.";document.title=e,qr({name:"description"},i),qr({name:"robots"},"noindex, nofollow, noai, noimageai"),qr({property:"og:title"},e),qr({property:"og:description"},i),qr({property:"og:type"},"website"),qr({name:"twitter:title"},e),qr({name:"twitter:description"},i)},[e,a])}function FO(e){return(e??[]).includes("owner")}function HO(e){return e==="owner"?"Owner":e==="staff"?"Staff":e==="entertainer"?"Entertainer":e}async function xx(e,a){const i=await fetch(e,{credentials:"same-origin",headers:{"content-type":"application/json",...(a==null?void 0:a.headers)??{}},...a}),o=await i.text();let l={};try{l=o?JSON.parse(o):{}}catch{l={message:o}}if(!i.ok){const u=l.message;return{ok:!1,status:i.status,message:Array.isArray(u)?u.join(", "):String(u||i.status)}}return{ok:!0,data:l}}function PO(){const[e,a]=b.useState(null),[i,o]=b.useState([]),[l,u]=b.useState(!1),[m,p]=b.useState(!0),[g,h]=b.useState(""),[v,x]=b.useState(""),[S,_]=b.useState(!1),[C,T]=b.useState(""),[A,$]=b.useState(""),[M,E]=b.useState(!1),[B,j]=b.useState(!1),[R,z]=b.useState(!1);Gs(e!=null&&e.mustChangePassword?"Portal — set password":"Portal — My account");const U=b.useCallback(async()=>{h(""),p(!0);const X=await xx("/auth/me");if(!X.ok){a(null),o([]),h(X.status===401?"Sign in to manage your account.":X.message),p(!1);return}a(X.data.user),u(!!X.data.hasPasskey),o(Array.isArray(X.data.memberships)?X.data.memberships:[]),X.data.user.mustChangePassword&&x("This account is still on its temporary password. Set a real one now, or skip and do it later."),p(!1)},[]);b.useEffect(()=>{U(),E(Sh()),P2().then(j).catch(()=>j(!1)),fetch("/auth/status",{credentials:"same-origin"}).then(X=>X.json()).then(X=>z(H2(X.webauthnRpId))).catch(()=>z(!1))},[U]);async function ae(X){X.preventDefault(),_(!0),h(""),x("");const _e=await xx("/auth/change-password",{method:"POST",body:JSON.stringify({currentPassword:C,newPassword:A})});if(_(!1),!_e.ok){h(_e.message);return}a(_e.data.user),T(""),$(""),x("Password updated."),_e.data.user.mustChangePassword||LO(),ie&&!_e.data.user.mustChangePassword&&window.location.replace("/")}async function Y(){if(window.confirm("Remove all passkeys from this account?")){_(!0),h(""),x("");try{await Y2(),u(!1),x("Passkeys removed. Password sign-in still works.")}catch(X){h(X instanceof Error?X.message:String(X))}finally{_(!1)}}}async function Q(){await fetch("/auth/logout",{method:"POST",credentials:"same-origin"}),window.location.href="/"}if(m)return c.jsx("div",{className:"portal-root",children:c.jsx("main",{className:"portal-main",children:c.jsx("section",{className:"portal-card",children:c.jsx("p",{className:"portal-lede",children:"Loading…"})})})});if(!e)return c.jsx("div",{className:"portal-root",children:c.jsx("main",{className:"portal-main",children:c.jsxs("section",{className:"portal-card",children:[c.jsx("p",{className:"portal-kicker",children:"My account"}),c.jsx("h1",{children:"Sign in required"}),c.jsx("p",{className:"portal-msg portal-msg-err",role:"alert",children:g||"Not signed in."}),c.jsx(it,{className:"portal-back",to:"/",children:"← Sign in"})]})})});const ie=e.mustChangePassword&&!Rc();function ve(){fp(),window.location.replace("/")}return c.jsxs("div",{className:"portal-root",children:[c.jsxs("header",{className:"portal-top",children:[c.jsx("span",{className:"portal-brand",children:"My account"}),!ie&&c.jsxs("nav",{className:"portal-nav-links","aria-label":"Account navigation",children:[c.jsx(it,{className:"portal-back",to:"/",children:"Portal"}),FO(e.roles)&&c.jsx(it,{className:"portal-back",to:"/team",children:"Team"})]})]}),c.jsx("main",{className:"portal-main",children:c.jsxs("section",{className:"portal-card portal-account-wide","aria-labelledby":"account-title",children:[c.jsx("p",{className:"portal-kicker",children:"Self-service"}),c.jsx("h1",{id:"account-title",children:ie?"Set a new password":"My account"}),c.jsxs("p",{className:"portal-lede",children:["Signed in as ",c.jsx("strong",{children:e.displayName}),!ie&&c.jsxs(c.Fragment,{children:[" ","· ",c.jsx("code",{className:"portal-mono-copy",children:e.username})]})]}),g&&c.jsx("p",{className:"portal-msg portal-msg-err",role:"alert",children:g}),v&&!g&&c.jsx("p",{className:"portal-msg",role:"status",children:v}),c.jsxs("section",{className:"portal-section","aria-labelledby":"sec-identity",children:[c.jsx("h2",{id:"sec-identity",children:"Identity"}),c.jsxs("dl",{className:"portal-dl",children:[c.jsxs("div",{children:[c.jsx("dt",{children:"Username"}),c.jsxs("dd",{children:[c.jsx("code",{children:e.username}),c.jsx("span",{className:"portal-hint",children:" Immutable"})]})]}),c.jsxs("div",{children:[c.jsx("dt",{children:"Display name"}),c.jsx("dd",{children:e.displayName})]}),c.jsxs("div",{children:[c.jsx("dt",{children:"Email"}),c.jsx("dd",{children:e.email||"—"})]})]})]}),c.jsxs("section",{className:"portal-section","aria-labelledby":"sec-security",children:[c.jsx("h2",{id:"sec-security",children:"Security"}),c.jsxs("form",{className:"portal-form",onSubmit:X=>void ae(X),children:[c.jsxs("label",{children:["Current password",c.jsx("input",{type:"password",autoComplete:"current-password",value:C,onChange:X=>T(X.target.value),required:!0})]}),c.jsxs("label",{children:["New password",c.jsx("input",{type:"password",autoComplete:"new-password",value:A,onChange:X=>$(X.target.value),required:!0,minLength:8})]}),c.jsx("button",{type:"submit",className:"portal-submit",disabled:S,children:S?"Please wait…":ie?"Save and continue":"Update password"}),ie&&c.jsx("button",{type:"button",className:"portal-secondary",onClick:ve,disabled:S,"data-testid":"skip-password-change",children:"Not now — take me to the portal"})]}),ie&&c.jsx("p",{className:"portal-hint",children:"Skipping keeps the temporary password for now. You will be asked again the next time you sign in."})]}),!ie&&c.jsxs(c.Fragment,{children:[M&&R&&c.jsxs("section",{className:"portal-section","aria-labelledby":"sec-passkeys",children:[c.jsx("h2",{id:"sec-passkeys",children:"Passkeys"}),c.jsx("p",{className:"portal-lede",children:l?"Passkey enrolled for this origin (apps.ftw.pw / ftw.pw). Older localhost or mesh enrollments do not work here — re-enroll if sign-in fails.":"No passkey on this account yet for this origin."}),l?c.jsx("button",{type:"button",className:"portal-submit danger",disabled:S,onClick:()=>void Y(),children:S?"Please wait…":"Remove passkeys"}):c.jsx(I2,{buttonClassName:"portal-submit secondary",disabled:S||!B,onEnrolled:()=>{h(""),u(!0),x("Passkey enrolled on this device.")},onError:X=>{x(""),h(X)}})]}),M&&!R&&c.jsxs("section",{className:"portal-section","aria-labelledby":"sec-passkeys",children:[c.jsx("h2",{id:"sec-passkeys",children:"Passkeys"}),c.jsxs("p",{className:"portal-lede",children:["Manage Face ID / Touch ID on"," ",c.jsx("a",{href:"https://apps.ftw.pw/account",children:"apps.ftw.pw/account"})," — not on this mesh host."]})]}),c.jsxs("section",{className:"portal-section","aria-labelledby":"sec-access",children:[c.jsx("h2",{id:"sec-access",children:"Access"}),c.jsx("p",{className:"portal-lede",children:"Roles (read-only — owners change roles in Team)"}),c.jsx("span",{className:"portal-role-tags",children:e.roles.map(X=>c.jsx("span",{className:"portal-role-tag",title:X==="owner"?"Team + estate":X==="staff"?"Own data":X,children:HO(X)},X))})]}),c.jsxs("section",{className:"portal-section","aria-labelledby":"sec-orgs",children:[c.jsx("h2",{id:"sec-orgs",children:"Organizations"}),i.length===0?c.jsx("p",{className:"portal-lede",children:"Not in any org yet."}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"portal-lede",children:"Post-auth memberships (read-only). Login never shows orgs."}),c.jsx("ul",{className:"portal-org-list",children:i.map(X=>c.jsxs("li",{children:[c.jsx("strong",{children:X.displayName})," ",c.jsx("code",{children:X.slug}),c.jsx("span",{className:"portal-role-tag",children:X.role})]},X.orgId))})]})]}),c.jsxs("section",{className:"portal-section","aria-labelledby":"sec-session",children:[c.jsx("h2",{id:"sec-session",children:"This browser"}),c.jsx("p",{className:"portal-lede",children:"Signed in on this browser."}),c.jsx("button",{type:"button",className:"portal-submit secondary",onClick:()=>void Q(),children:"Sign out"})]})]})]})})]})}async function X2(e,a){const i=await fetch(e,{credentials:"same-origin",headers:{"content-type":"application/json",...(a==null?void 0:a.headers)??{}},...a}),o=await i.text();let l=null;try{l=o?JSON.parse(o):null}catch{l={message:o}}if(!i.ok){const u=l&&typeof l=="object"&&l!==null&&"message"in l?String(l.message):`${i.status}`;throw new Error(u)}return l}function GO(e){return X2(`/auth/site/${encodeURIComponent(e)}/sections`)}function YO(e,a,i){return X2(`/auth/site/${encodeURIComponent(e)}/sections/${encodeURIComponent(a)}`,{method:"PUT",body:JSON.stringify(i)})}function IO(e,a,i){return(e??[]).some(l=>{const u=l.toLowerCase();return u==="admin"||u==="owner"||u==="manager"||u==="staff"})?!0:a!=null&&a===i}function XO(e,a){return(e??[]).some(o=>{const l=o.toLowerCase();return l==="admin"||l==="owner"||l==="manager"||l==="staff"})||a!=null}const KO={transquinnftw:"https://next-www.transquinnftw.users.ct.uvlava.com/"};function WO(e){return KO[e]??null}function ZO({user:e,onChanged:a,onSkip:i}){const[o,l]=b.useState(""),[u,m]=b.useState(""),[p,g]=b.useState(!1),[h,v]=b.useState(null);b.useEffect(()=>{function _(C){C.key==="Escape"&&(fp(),i())}return document.addEventListener("keydown",_),()=>document.removeEventListener("keydown",_)},[i]);async function x(_){_.preventDefault(),g(!0),v(null);try{const C=await fetch("/auth/change-password",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentPassword:o,newPassword:u})}),T=await C.json().catch(()=>({message:void 0,user:void 0}));if(!C.ok){const A=T.message;v(Array.isArray(A)?A.join(", "):A||`Password change failed (${C.status})`);return}T.user&&a(T.user)}finally{g(!1)}}function S(){fp(),i()}return c.jsx("div",{className:"portal-modal-overlay",role:"presentation",children:c.jsxs("section",{className:"portal-modal",role:"dialog","aria-modal":"true","aria-labelledby":"password-gate-title",children:[c.jsx("span",{className:"portal-modal-badge",children:"Temporary password"}),c.jsx("h1",{id:"password-gate-title",style:{margin:"0 0 0.5rem",fontSize:"1.3rem"},children:"You should change your password"}),c.jsxs("p",{className:"portal-lede",children:["Hi ",e.displayName," — you signed in with a password that's marked temporary (shared, or set by an admin). Set your own now, or skip and you'll be asked again next time you sign in."]}),c.jsxs("form",{className:"portal-form",onSubmit:_=>void x(_),children:[c.jsxs("label",{children:["Current password",c.jsx("input",{type:"password",autoComplete:"current-password",value:o,onChange:_=>l(_.target.value),required:!0,autoFocus:!0})]}),c.jsxs("label",{children:["New password",c.jsx("input",{type:"password",autoComplete:"new-password",value:u,onChange:_=>m(_.target.value),required:!0,minLength:8})]}),c.jsx("button",{type:"submit",className:"portal-submit",disabled:p,children:p?"Please wait…":"Save and continue"}),c.jsx("button",{type:"button",className:"portal-secondary",onClick:S,disabled:p,"data-testid":"skip-password-change",children:"Not now"})]}),h&&c.jsx("p",{className:"portal-msg portal-msg-err",role:"alert",children:h}),c.jsx("p",{className:"portal-hint",children:"Skipping keeps the temporary password for this session only — you'll be asked again next time you sign in."})]})})}const QO={foreignHosts:{exact:["apps.ftw.pw"],suffix:".ftw.pw"},forbiddenPrefixes:[],fallback:null};function vx(e){return e.startsWith("/")&&!e.startsWith("//")&&!e.startsWith("/\\")}function JO(e,a,i){return e===a.hostname.toLowerCase()?!0:i.foreignHosts==="none"?!1:i.foreignHosts.exact.includes(e)||e.endsWith(i.foreignHosts.suffix)}function eN(e,a,i){if(i.foreignHosts==="none"&&!vx(e))return null;let o;try{o=new URL(e,a.origin)}catch{return null}if(o.protocol!=="http:"&&o.protocol!=="https:"||!JO(o.hostname.toLowerCase(),a,i))return null;const l=o.pathname.toLowerCase();if(i.forbiddenPrefixes.some(m=>l.startsWith(m.toLowerCase())))return null;if(i.foreignHosts!=="none")return o.toString();const u=`${o.pathname}${o.search}${o.hash}`;return vx(u)?u:null}function tN(e,a,i){return e?eN(e,a,i)??i.fallback:i.fallback}const nN="content-desk",aN="/content-desk/",K2=new Set(["apps.ftw.pw","apps.ct.uvlava.com"]),rN="https://apps.ftw.pw";function W2(e,a){return tN(new URLSearchParams(e).get("next"),a,QO)}function iN(e){const a=new URL(e);return K2.has(a.hostname.toLowerCase())&&a.pathname==="/"&&a.search===""&&a.hash===""}function oN(e){const a=K2.has(e.hostname.toLowerCase())?e.origin:rN;return new URL(aN,a).toString()}function sN(e,a,i){const o=W2(e,a);return o!==null&&!iN(o)?o:i.includes(nN)?oN(a):o}function mp(){const e=W2(window.location.search,window.location);e!==null&&window.location.replace(e)}async function Cm(){const e=await fetch("/auth/me",{credentials:"same-origin"});if(!e.ok){mp();return}const a=await e.json(),i=sN(window.location.search,window.location,a.apps??[]);i!==null&&window.location.replace(i)}function lN(){var je;const[e,a]=b.useState("login"),[i,o]=b.useState(""),[l,u]=b.useState(""),[m,p]=b.useState(""),[g,h]=b.useState(""),[v,x]=b.useState(null),[S,_]=b.useState(!1),[C,T]=b.useState(null),[A,$]=b.useState(null),[M,E]=b.useState(!1),[B,j]=b.useState(!1),[R,z]=b.useState(!1),[U,ae]=b.useState(!1),Y=b.useRef(!1),[Q,ie]=b.useState(!1),[ve,X]=b.useState(null);Gs(e==="signed-in"?"Portal — home":e==="change-password"?"Portal — set password":e==="register"?"Portal — register":"Portal — sign in");const I=b.useCallback(async()=>{const le=await fetch("/auth/me",{credentials:"same-origin"});if(!le.ok)return x(null),j(!1),!1;const De=await le.json();return x(De.user),j(!!De.hasPasskey),a("signed-in"),De.user.mustChangePassword&&!Rc()?(_(!0),!1):!0},[]);b.useEffect(()=>{I().then(le=>{le&&mp()}).catch(()=>{}),z(Sh()),P2().then(ae).catch(()=>ae(!1)),fetch("/auth/status",{credentials:"same-origin"}).then(le=>le.json()).then(le=>{const De=le.webauthnRpId??null;X(De),ie(H2(De))}).catch(()=>{X(null),ie(!1)})},[I]);async function re(le){le.preventDefault(),E(!0),$(null),T(null);try{const De=await fetch("/auth/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:i,password:l})}),Re=await De.json().catch(()=>({}));if(!De.ok){const Et=Re.message;$(Array.isArray(Et)?Et.join(", "):Et||`Sign-in failed (${De.status})`);return}if(!Re.user){$("Unexpected login response");return}if(x(Re.user),u(""),Y.current=!0,a("signed-in"),T(`Signed in as ${Re.user.displayName}.`),(Re.user.mustChangePassword||Re.mustChangePassword)&&!Rc()){_(!0);return}I(),Cm()}finally{E(!1)}}async function ue(){if(!R){$("This browser does not support passkeys.");return}E(!0),$(null),T(null);try{const le=await UO(i.trim()||void 0);if(!le.user){$("Passkey sign-in failed");return}if(x(le.user),j(!0),Y.current=!0,a("signed-in"),T(`Signed in with Face ID / Touch ID as ${le.user.displayName}.`),(le.user.mustChangePassword||le.mustChangePassword)&&!Rc()){_(!0);return}Cm()}catch(le){$(le instanceof Error?le.message:"Passkey sign-in cancelled or failed")}finally{E(!1)}}async function he(){E(!0),$(null),T(null);try{await Y2(),j(!1),T("Passkeys removed. Use password to sign in.")}catch(le){$(le instanceof Error?le.message:"Could not remove passkeys")}finally{E(!1)}}async function ke(le){le.preventDefault(),E(!0),$(null),T(null);try{const Re=await(await fetch("/auth/register",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({})})).json().catch(()=>({}));$(Re.message||"Registration is closed for this pilot.")}finally{E(!1)}}async function N(le){le.preventDefault(),E(!0),$(null),T(null);try{const De=await fetch("/auth/change-password",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentPassword:m||l,newPassword:g})}),Re=await De.json().catch(()=>({}));if(!De.ok){const Et=Re.message;$(Array.isArray(Et)?Et.join(", "):Et||`Password change failed (${De.status})`);return}Re.user&&x(Re.user),p(""),h(""),a("signed-in"),T("Password updated. You are signed in.")}finally{E(!1)}}async function V(){await fetch("/auth/logout",{method:"POST",credentials:"same-origin"}),x(null),j(!1),a("login"),T("Signed out.")}function ne(){Y.current?Cm():mp()}function se(le){x(De=>De&&{...De,mustChangePassword:le.mustChangePassword}),_(!1),T("Password updated."),ne()}function Te(){_(!1),ne()}return c.jsxs("div",{className:"portal-root",children:[c.jsxs("header",{className:"portal-top",children:[c.jsx("span",{className:"portal-brand",children:"RoseQn"}),yx]}),c.jsx("main",{className:"portal-main",children:c.jsxs("section",{className:"portal-card","aria-labelledby":"portal-title",children:[c.jsx("p",{className:"portal-kicker",children:"FTW portal · staff SSO"}),e==="signed-in"&&v&&c.jsxs(c.Fragment,{children:[c.jsxs("h1",{id:"portal-title",children:["Welcome, ",v.displayName]}),c.jsxs("p",{className:"portal-lede",children:["Signed in as ",c.jsx("strong",{children:v.username}),v.entertainerSlug?c.jsxs(c.Fragment,{children:[" ","· site slug ",c.jsx("code",{children:v.entertainerSlug})]}):" · staff","."]}),c.jsxs("ul",{className:"portal-links",children:[c.jsx("li",{children:c.jsx("a",{href:"/",children:"Apps home"})}),c.jsx("li",{children:c.jsx("a",{href:"/account",children:"My account"})}),((je=v.roles)==null?void 0:je.includes("owner"))&&c.jsx("li",{children:c.jsx("a",{href:"/team",children:"Team — manage staff"})}),XO(v.roles,v.entertainerSlug)&&c.jsx("li",{children:c.jsx("a",{href:"/website",children:"Website — edit content & preview"})}),c.jsx("li",{children:c.jsx("a",{href:"https://user-site-admin.apps.ct.uvlava.com/",children:"Site admin (mesh)"})})]}),R&&Q&&c.jsxs("div",{className:"portal-passkey",style:{margin:"1rem 0"},children:[c.jsxs("p",{className:"portal-lede",style:{marginBottom:"0.5rem"},children:["Passwordless · Face ID / Touch ID",B?" · enabled on this account":" · not set up"]}),B?c.jsx("button",{type:"button",className:"portal-submit",disabled:M,onClick:()=>void he(),children:M?"Please wait…":"Remove passkeys"}):c.jsx(I2,{buttonClassName:"portal-submit",disabled:M||!U,title:U?"Enroll this device biometrics":"Platform authenticator not available in this browser",onEnrolled:()=>{$(null),j(!0),T("Face ID / Touch ID / passkey enabled for this device.")},onError:le=>{T(null),$(le)}})]}),R&&!Q&&c.jsxs("p",{className:"portal-hint",style:{margin:"1rem 0"},children:["Passkeys are enrolled on"," ",c.jsx("a",{href:"https://apps.ftw.pw/login",children:"apps.ftw.pw"}),ve?` (RP ${ve})`:"",". Use that origin for Face ID / Touch ID — not this mesh host."]}),c.jsx("button",{type:"button",className:"portal-submit",onClick:()=>void V(),children:"Sign out"})]}),e==="change-password"&&v&&c.jsxs(c.Fragment,{children:[c.jsx("h1",{id:"portal-title",children:"Change password"}),c.jsxs("p",{className:"portal-lede",children:["Hi ",v.displayName," — set a new password before continuing."]}),c.jsxs("p",{className:"portal-lede",children:["Prefer the dedicated form? ",c.jsx("a",{href:"/account",children:"Open My account"}),"."]}),c.jsxs("form",{className:"portal-form",onSubmit:le=>void N(le),children:[c.jsxs("label",{children:["Current password",c.jsx("input",{type:"password",autoComplete:"current-password",value:m,onChange:le=>p(le.target.value),required:!0})]}),c.jsxs("label",{children:["New password",c.jsx("input",{type:"password",autoComplete:"new-password",value:g,onChange:le=>h(le.target.value),required:!0,minLength:8})]}),c.jsx("button",{type:"submit",className:"portal-submit",disabled:M,children:M?"Please wait…":"Save new password"})]})]}),(e==="login"||e==="register")&&c.jsxs(c.Fragment,{children:[c.jsx("h1",{id:"portal-title",children:e==="login"?"Sign in":"Create account"}),c.jsx("p",{className:"portal-lede",children:"Staff SSO — password or Face ID / Touch ID. Accounts are provisioned by an owner (Team) or platform admin, not self-serve."}),c.jsxs("div",{className:"portal-tabs",role:"tablist",children:[c.jsx("button",{type:"button",role:"tab","aria-selected":e==="login",className:e==="login"?"active":"",onClick:()=>{a("login"),$(null),T(null)},children:"Log in"}),c.jsx("button",{type:"button",role:"tab","aria-selected":e==="register",className:e==="register"?"active":"",onClick:()=>{a("register"),$(null),T(null)},children:"Register"})]}),e==="login"?c.jsxs(c.Fragment,{children:[R&&Q&&c.jsx("button",{type:"button",className:"portal-submit",style:{marginBottom:"1rem"},disabled:M,onClick:()=>void ue(),children:M?"Waiting for Face ID / Touch ID…":"Sign in with Face ID / Touch ID"}),R&&!Q&&c.jsxs("p",{className:"portal-hint",style:{marginBottom:"1rem"},children:["Face ID / Touch ID: sign in at"," ",c.jsx("a",{href:"https://apps.ftw.pw/login",children:"apps.ftw.pw/login"})," (this host is outside the passkey domain)."]}),c.jsxs("form",{className:"portal-form",onSubmit:le=>void re(le),children:[R&&Q&&c.jsx("p",{className:"portal-lede",style:{marginTop:0,fontSize:"0.9rem"},children:"Or use password"}),c.jsxs("label",{children:["Username or email",c.jsx("input",{name:"login",autoComplete:"username webauthn",value:i,onChange:le=>o(le.target.value),required:!0})]}),c.jsxs("label",{children:["Password",c.jsx("input",{name:"password",type:"password",autoComplete:"current-password",value:l,onChange:le=>u(le.target.value),required:!0})]}),c.jsx("button",{type:"submit",className:"portal-submit",disabled:M,children:M?"Please wait…":"Sign in"})]})]}):c.jsxs("form",{className:"portal-form",onSubmit:le=>void ke(le),children:[c.jsx("p",{className:"portal-lede",style:{marginTop:0},children:"Registration is not open. Ask ops for a pilot invite."}),c.jsx("button",{type:"submit",className:"portal-submit",disabled:M,children:"Request access"})]})]}),A&&c.jsx("p",{className:"portal-msg portal-msg-err",role:"alert",children:A}),C&&!A&&c.jsx("p",{className:"portal-msg",role:"status",children:C}),yx]})}),S&&v&&c.jsx(ZO,{user:v,onChanged:se,onSkip:Te})]})}const cN=["owner","staff","entertainer"];function As(e){return(e??[]).includes("owner")}function Z2(e){return e.disabledAt?"Disabled":e.mustChangePassword?"Must change password":"Active"}function uN(e){if(!e)return"—";try{return new Date(e).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}catch{return e.slice(0,16)}}async function rn(e,a){const i=await fetch(e,{credentials:"same-origin",headers:{"content-type":"application/json",...(a==null?void 0:a.headers)??{}},...a}),o=await i.text();let l=null;try{l=o?JSON.parse(o):null}catch{l={message:o}}if(!i.ok){const u=l&&typeof l=="object"&&l!==null&&"message"in l?String(l.message):`${i.status}`;throw new Error(u)}return l}async function dN(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function Q2({password:e,onDismiss:a}){const[i,o]=b.useState(!1);return c.jsx("div",{className:"portal-msg portal-msg-secret",role:"status",children:c.jsxs("div",{children:[c.jsx("strong",{children:"Temporary password"})," — copy once; it will not be shown again.",c.jsxs("div",{className:"portal-secret-row",children:[c.jsx("code",{className:"portal-secret",children:e}),c.jsx("button",{type:"button",className:"portal-submit secondary compact",onClick:()=>{dN(e).then(l=>o(l))},children:i?"Copied":"Copy"}),c.jsx("button",{type:"button",className:"portal-back",onClick:a,children:"Dismiss"})]})]})})}function Es({children:e}){return c.jsx("div",{className:"portal-root",children:c.jsx("main",{className:"portal-main",children:e})})}function fN({value:e,onChange:a,disabled:i}){return c.jsxs("fieldset",{className:"portal-roles",disabled:i,children:[c.jsx("legend",{children:"Roles"}),c.jsx("div",{className:"portal-role-pills",children:cN.map(o=>{const l=e.includes(o);return c.jsxs("label",{className:`portal-role-pill ${l?"on":""}`,children:[c.jsx("input",{type:"checkbox",checked:l,onChange:()=>{a(l?e.filter(u=>u!==o):[...e,o])}}),o==="owner"?"Owner":o==="staff"?"Staff":"Entertainer"]},o)})}),c.jsx("p",{className:"portal-hint",children:"Owner can manage Team. Staff is the default employee role."})]})}function mN(){Gs("Portal — Team");const e=co(),[a,i]=b.useState(null),[o,l]=b.useState([]),[u,m]=b.useState(!0),[p,g]=b.useState(""),[h,v]=b.useState({username:"",displayName:"",email:""}),[x,S]=b.useState(null),[_,C]=b.useState(!1),[T,A]=b.useState(""),[$,M]=b.useState(""),[E,B]=b.useState("all"),[j,R]=b.useState(!1),z=b.useCallback(async()=>{g(""),R(!1),m(!0);try{const Y=await rn("/auth/me");if(i(Y.user),!As(Y.user.roles))return;const Q=await rn("/auth/team");l(Q.items)}catch(Y){const Q=Y instanceof Error?Y.message:String(Y);/not signed in|401|Unauthorized/i.test(Q)?(R(!0),g("Sign in to manage Team.")):g(Q)}finally{m(!1)}},[]);b.useEffect(()=>{z()},[z]);const U=o.filter(Y=>{if(E==="active"&&(Y.disabledAt||Y.mustChangePassword)||E==="disabled"&&!Y.disabledAt||E==="must-change"&&!Y.mustChangePassword)return!1;if(!$.trim())return!0;const Q=$.trim().toLowerCase();return Y.username.toLowerCase().includes(Q)||Y.displayName.toLowerCase().includes(Q)||(Y.email??"").toLowerCase().includes(Q)}).sort((Y,Q)=>Y.displayName.localeCompare(Q.displayName));async function ae(Y){Y.preventDefault(),C(!0),S(null),g(""),A("");try{const Q=await rn("/auth/team",{method:"POST",body:JSON.stringify({username:h.username.trim().toLowerCase(),displayName:(h.displayName||h.username).trim(),email:h.email.trim()||null,roles:["staff"]})});S(Q.temporaryPassword),v({username:"",displayName:"",email:""}),A(`Created @${Q.item.username} — they must change password on first login.`),await z()}catch(Q){g(Q instanceof Error?Q.message:String(Q))}finally{C(!1)}}return!u&&j?c.jsx(Es,{children:c.jsxs("section",{className:"portal-card",children:[c.jsx("p",{className:"portal-kicker",children:"Team"}),c.jsx("h1",{children:"Sign in required"}),c.jsx("p",{className:"portal-msg portal-msg-err",role:"alert",children:p}),c.jsx(it,{className:"portal-back",to:"/",children:"← Sign in"})]})}):!u&&a&&!As(a.roles)?c.jsx(Es,{children:c.jsxs("section",{className:"portal-card",children:[c.jsx("p",{className:"portal-kicker",children:"Team"}),c.jsx("h1",{children:"Owner only"}),c.jsx("p",{className:"portal-msg portal-msg-err",role:"alert",children:"Team is for owners. Staff manage their own profile in My account."}),c.jsxs("div",{className:"portal-actions",children:[c.jsx(it,{className:"portal-submit secondary compact",to:"/account",children:"My account"}),c.jsx(it,{className:"portal-back",to:"/",children:"← Portal"})]})]})}):c.jsx(Es,{children:c.jsxs("section",{className:"portal-card portal-team-wide",children:[c.jsxs("header",{className:"portal-team-head",children:[c.jsxs("div",{children:[c.jsx("p",{className:"portal-kicker",children:"FTW portal"}),c.jsx("h1",{children:"Team"}),c.jsx("p",{className:"portal-lede",children:"Owner-only staff directory. Invite, roles, disable, password reset."})]}),c.jsxs("nav",{className:"portal-nav-links","aria-label":"Team navigation",children:[c.jsx(it,{className:"portal-back",to:"/account",children:"My account"}),c.jsx(it,{className:"portal-back",to:"/",children:"← Portal"})]})]}),u&&c.jsx("p",{className:"portal-lede",children:"Loading…"}),p&&c.jsx("p",{className:"portal-msg portal-msg-err",role:"alert",children:p}),T&&!x&&c.jsx("p",{className:"portal-msg",role:"status",children:T}),x&&c.jsx(Q2,{password:x,onDismiss:()=>S(null)}),!u&&As(a==null?void 0:a.roles)&&c.jsxs(c.Fragment,{children:[c.jsxs("section",{children:[c.jsx("h2",{children:"People"}),c.jsxs("div",{className:"portal-toolbar",children:[c.jsxs("label",{className:"portal-search",children:[c.jsx("span",{className:"sr-only",children:"Search"}),c.jsx("input",{type:"search",placeholder:"Search name or username",value:$,onChange:Y=>M(Y.target.value),"aria-label":"Search roster"})]}),c.jsx("div",{className:"portal-filter-chips",role:"group","aria-label":"Status filter",children:[["all","All"],["active","Active"],["disabled","Disabled"],["must-change","Must change"]].map(([Y,Q])=>c.jsx("button",{type:"button",className:`portal-chip ${E===Y?"on":""}`,"aria-pressed":E===Y,onClick:()=>B(Y),children:Q},Y))})]}),c.jsx("div",{className:"portal-table-wrap",children:c.jsxs("table",{className:"portal-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Name"}),c.jsx("th",{children:"Username"}),c.jsx("th",{children:"Role"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Last login"}),c.jsx("th",{})]})}),c.jsxs("tbody",{children:[U.map(Y=>c.jsxs("tr",{className:Y.disabledAt?"is-disabled":"",tabIndex:0,onKeyDown:Q=>{Q.key==="Enter"&&e(`/team/${Y.id}`)},children:[c.jsxs("td",{children:[c.jsx("strong",{children:Y.displayName}),(a==null?void 0:a.id)===Y.id&&c.jsx("span",{className:"portal-you",children:" you"})]}),c.jsx("td",{children:c.jsx("code",{children:Y.username})}),c.jsx("td",{children:c.jsx("span",{className:"portal-role-tags",children:Y.roles.map(Q=>c.jsx("span",{className:"portal-role-tag",children:Q==="owner"?"Owner":Q==="staff"?"Staff":Q},Q))})}),c.jsx("td",{children:c.jsx("span",{className:`portal-status ${Y.disabledAt?"bad":Y.mustChangePassword?"warn":"ok"}`,children:Z2(Y)})}),c.jsx("td",{className:"mono",children:uN(Y.lastLoginAt)}),c.jsx("td",{children:c.jsx("button",{type:"button",className:"portal-back",onClick:()=>e(`/team/${Y.id}`),children:"Edit"})})]},Y.id)),!o.length&&!p&&c.jsx("tr",{children:c.jsx("td",{colSpan:6,className:"portal-lede",children:"Invite your first staff member below."})}),o.length>0&&!U.length&&c.jsx("tr",{children:c.jsx("td",{colSpan:6,className:"portal-lede",children:"No people match this search/filter."})})]})]})})]}),c.jsxs("section",{className:"portal-invite","aria-labelledby":"invite-title",children:[c.jsx("h2",{id:"invite-title",children:"Invite staff"}),c.jsx("p",{className:"portal-hint",children:"Step 1 — identity (default role Staff). Step 2 — one-time password shown once."}),c.jsxs("form",{className:"portal-form portal-form-grid",onSubmit:Y=>void ae(Y),children:[c.jsxs("label",{children:["Username",c.jsx("input",{value:h.username,onChange:Y=>v(Q=>({...Q,username:Y.target.value})),required:!0,pattern:"[a-zA-Z0-9][a-zA-Z0-9._-]{1,62}",autoComplete:"off",placeholder:"username"})]}),c.jsxs("label",{children:["Display name",c.jsx("input",{value:h.displayName,onChange:Y=>v(Q=>({...Q,displayName:Y.target.value})),placeholder:"Display name"})]}),c.jsxs("label",{children:["Email",c.jsx("input",{type:"email",value:h.email,onChange:Y=>v(Q=>({...Q,email:Y.target.value})),placeholder:"optional"})]}),c.jsx("button",{type:"submit",className:"portal-submit",disabled:_||!!x,children:_?"Creating…":x?"Dismiss temp password first":"Create staff account"})]})]})]})]})})}function wx(e){return e.split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ")}function pN({accountId:e,roles:a}){const[i,o]=b.useState(null),[l,u]=b.useState(null),[m,p]=b.useState([]),[g,h]=b.useState(!0),[v,x]=b.useState(!1),[S,_]=b.useState(""),[C,T]=b.useState(""),A=b.useCallback(async()=>{_(""),h(!0);try{const[B,j]=await Promise.all([rn("/auth/team/apps"),rn(`/auth/team/${encodeURIComponent(e)}/apps`)]);o(B),u(j),p(j.grant??j.effective)}catch(B){_(B instanceof Error?B.message:String(B))}finally{h(!1)}},[e]);b.useEffect(()=>{A()},[A]);const $=i?a.flatMap(B=>i.roles[B.toLowerCase()]??[]):[],M=(l==null?void 0:l.source)==="account";async function E(B){x(!0),_(""),T("");try{const j=await rn(`/auth/team/${encodeURIComponent(e)}/apps`,{method:"PATCH",body:JSON.stringify({appIds:B})});u(j),p(j.grant??j.effective),T(B===null?"Reset to role defaults":"Saved")}catch(j){_(j instanceof Error?j.message:String(j))}finally{x(!1)}}return g?c.jsx("p",{className:"portal-lede",children:"Loading apps…"}):S?c.jsx("p",{className:"portal-msg portal-msg-err",role:"alert",children:S}):!i||!l?null:c.jsxs("section",{className:"portal-section","aria-labelledby":"apps-title",children:[c.jsx("h2",{id:"apps-title",children:"Apps"}),c.jsx("p",{className:"portal-hint",children:M?"Custom for this account — overrides the role default below.":`Using the ${a.join(", ")||"role"} default${$.length?"":" (currently empty)"}.`}),C&&c.jsx("p",{className:"portal-msg",role:"status",children:C}),c.jsx("div",{className:"portal-role-pills",children:i.apps.map(B=>{const j=m.includes(B.id);return c.jsxs("label",{className:`portal-role-pill ${j?"on":""}`,children:[c.jsx("input",{type:"checkbox",checked:j,disabled:v,onChange:()=>{p(R=>j?R.filter(z=>z!==B.id):[...R,B.id])}}),wx(B.id),B.hero&&c.jsx("span",{className:"portal-you",children:" hero"})]},B.id)})}),c.jsxs("div",{className:"portal-actions",style:{marginTop:"0.75rem"},children:[c.jsx("button",{type:"button",className:"portal-submit secondary compact",disabled:v,onClick:()=>void E(m),children:v?"Saving…":"Save apps"}),M&&c.jsx("button",{type:"button",className:"portal-back",disabled:v,onClick:()=>void E(null),children:"Reset to role default"})]}),c.jsxs("p",{className:"portal-hint",children:["Role default for ",a.join(", ")||"(no role)",":"," ",$.length?$.map(wx).join(", "):"none"]})]})}function hN(){Gs("Portal — Team person");const{id:e=""}=sj(),a=co(),[i,o]=b.useState(null),[l,u]=b.useState(null),[m,p]=b.useState(""),[g,h]=b.useState(""),[v,x]=b.useState(["staff"]),[S,_]=b.useState(!0),[C,T]=b.useState(""),[A,$]=b.useState(null),[M,E]=b.useState(!1),[B,j]=b.useState(""),[R,z]=b.useState([]),[U,ae]=b.useState([]),[Y,Q]=b.useState(""),[ie,ve]=b.useState("member"),[X,_e]=b.useState(""),[I,re]=b.useState(""),ue=b.useCallback(async()=>{T(""),_(!0);try{const V=await rn("/auth/me");if(o(V.user),!As(V.user.roles))return;const ne=await rn(`/auth/team/${encodeURIComponent(e)}`);u(ne.item),p(ne.item.displayName),h(ne.item.email??""),x(ne.item.roles.length?ne.item.roles:["staff"]),z(Array.isArray(ne.memberships)?ne.memberships:[]);try{const se=await rn("/auth/team/orgs");ae(se.orgs??[])}catch{ae([])}}catch(V){T(V instanceof Error?V.message:String(V))}finally{_(!1)}},[e]);b.useEffect(()=>{ue()},[ue]);async function he(V){if(V.preventDefault(),!v.length){T("Pick at least one role");return}E(!0),T(""),j("");try{const ne=await rn(`/auth/team/${encodeURIComponent(e)}`,{method:"PATCH",body:JSON.stringify({displayName:m.trim(),email:g.trim()||null,roles:v})});u(ne.item),j("Saved")}catch(ne){T(ne instanceof Error?ne.message:String(ne))}finally{E(!1)}}async function ke(V,ne){if(!(ne&&!window.confirm(ne))){E(!0),T(""),$(null),j("");try{const se=await rn(`/auth/team/${encodeURIComponent(e)}/${V}`,{method:"POST",body:"{}"});se.temporaryPassword?$(se.temporaryPassword):typeof se.revoked=="number"?j(`Revoked ${se.revoked} session(s)`):j(V==="disable"?"Disabled":V==="enable"?"Enabled":"Done"),await ue()}catch(se){T(se instanceof Error?se.message:String(se))}finally{E(!1)}}}if(!S&&i&&!As(i.roles))return c.jsx(Es,{children:c.jsxs("section",{className:"portal-card",children:[c.jsx("h1",{children:"Owner only"}),c.jsx("p",{className:"portal-msg portal-msg-err",role:"alert",children:"Owner role required."}),c.jsxs("div",{className:"portal-actions",children:[c.jsx(it,{className:"portal-submit secondary compact",to:"/account",children:"My account"}),c.jsx(it,{className:"portal-back",to:"/",children:"← Portal"})]})]})});const N=!!(l&&(i==null?void 0:i.id)===l.id);return c.jsx(Es,{children:c.jsxs("section",{className:"portal-card portal-team-wide",children:[c.jsxs("header",{className:"portal-team-head",children:[c.jsxs("div",{children:[c.jsx("p",{className:"portal-kicker",children:"Team"}),c.jsx("h1",{children:(l==null?void 0:l.displayName)??(S?"…":"Person")}),c.jsx("p",{className:"portal-lede",children:l?c.jsxs(c.Fragment,{children:[c.jsx("code",{children:l.username}),N&&c.jsx("span",{className:"portal-you",children:" · you"})]}):"—"})]}),c.jsx("button",{type:"button",className:"portal-back",onClick:()=>a("/team"),children:"← Roster"})]}),S&&c.jsx("p",{className:"portal-lede",children:"Loading…"}),C&&c.jsx("p",{className:"portal-msg portal-msg-err",role:"alert",children:C}),B&&!A&&c.jsx("p",{className:"portal-msg",role:"status",children:B}),A&&c.jsx(Q2,{password:A,onDismiss:()=>$(null)}),l&&c.jsxs("form",{className:"portal-form",onSubmit:V=>void he(V),children:[c.jsxs("label",{children:["Display name",c.jsx("input",{value:m,onChange:V=>p(V.target.value),required:!0})]}),c.jsxs("label",{children:["Email",c.jsx("input",{type:"email",value:g,onChange:V=>h(V.target.value)})]}),c.jsx(fN,{value:v,onChange:x,disabled:M||N}),N&&c.jsx("p",{className:"portal-hint",children:"You cannot demote your own Owner role here (API also blocks it)."}),c.jsxs("p",{className:"portal-lede",children:["Status:"," ",c.jsx("span",{className:`portal-status ${l.disabledAt?"bad":l.mustChangePassword?"warn":"ok"}`,children:Z2(l)})]}),c.jsx("button",{type:"submit",className:"portal-submit",disabled:M,children:M?"Saving…":B==="Saved"?"Saved":"Save"})]}),l&&c.jsx(pN,{accountId:l.id,roles:l.roles}),l&&c.jsxs("section",{className:"portal-section","aria-labelledby":"orgs-title",children:[c.jsx("h2",{id:"orgs-title",children:"Organizations"}),c.jsx("p",{className:"portal-hint",children:"Post-auth memberships only (login stays org-blind). Create org once, then assign."}),R.length===0?c.jsx("p",{className:"portal-lede",children:"Not in any org yet."}):c.jsx("ul",{className:"portal-org-list",children:R.map(V=>c.jsxs("li",{children:[c.jsx("strong",{children:V.displayName})," ",c.jsx("code",{children:V.slug})," ",c.jsx("span",{className:"portal-role-tag",children:V.role})," ",c.jsx("button",{type:"button",className:"portal-back",disabled:M,onClick:()=>{window.confirm(`Remove @${l.username} from ${V.slug}?`)&&(E(!0),T(""),rn(`/auth/team/${encodeURIComponent(e)}/memberships/${encodeURIComponent(V.orgId)}/remove`,{method:"POST",body:"{}"}).then(()=>ue()).catch(ne=>T(ne instanceof Error?ne.message:String(ne))).finally(()=>E(!1)))},children:"Remove"})]},V.orgId))}),c.jsxs("form",{className:"portal-form portal-form-grid",onSubmit:V=>{if(V.preventDefault(),!Y){T("Pick an org");return}E(!0),T(""),j(""),rn(`/auth/team/${encodeURIComponent(e)}/memberships`,{method:"POST",body:JSON.stringify({orgId:Y,role:ie})}).then(()=>(j("Membership saved"),Q(""),ue())).catch(ne=>T(ne instanceof Error?ne.message:String(ne))).finally(()=>E(!1))},children:[c.jsxs("label",{children:["Assign org",c.jsxs("select",{value:Y,onChange:V=>Q(V.target.value),disabled:M||!U.length,children:[c.jsx("option",{value:"",children:U.length?"Select…":"No orgs yet — create below"}),U.map(V=>c.jsxs("option",{value:V.id,children:[V.displayName," (",V.slug,")"]},V.id))]})]}),c.jsxs("label",{children:["Org role",c.jsxs("select",{value:ie,onChange:V=>ve(V.target.value),disabled:M,children:[c.jsx("option",{value:"member",children:"member"}),c.jsx("option",{value:"admin",children:"admin"}),c.jsx("option",{value:"owner",children:"owner"})]})]}),c.jsx("button",{type:"submit",className:"portal-submit secondary",disabled:M||!Y,children:M?"Saving…":"Add membership"})]}),c.jsxs("form",{className:"portal-form portal-form-grid",style:{marginTop:"0.75rem"},onSubmit:V=>{V.preventDefault(),E(!0),T(""),rn("/auth/team/orgs",{method:"POST",body:JSON.stringify({slug:X.trim().toLowerCase(),displayName:(I||X).trim()})}).then(ne=>(j(`Created org ${ne.org.slug}`),_e(""),re(""),Q(ne.org.id),ue())).catch(ne=>T(ne instanceof Error?ne.message:String(ne))).finally(()=>E(!1))},children:[c.jsxs("label",{children:["New org slug",c.jsx("input",{value:X,onChange:V=>_e(V.target.value),required:!0,pattern:"[a-z0-9][a-z0-9-]{1,62}",placeholder:"ftw",autoComplete:"off"})]}),c.jsxs("label",{children:["Display name",c.jsx("input",{value:I,onChange:V=>re(V.target.value),placeholder:"optional"})]}),c.jsx("button",{type:"submit",className:"portal-submit secondary",disabled:M,children:"Create org"})]})]}),l&&c.jsxs("section",{className:"portal-danger-zone","aria-labelledby":"danger-title",children:[c.jsx("h2",{id:"danger-title",children:"Danger zone"}),c.jsx("p",{className:"portal-hint",children:"Confirm before disable or password reset. Temp password is shown once."}),c.jsxs("div",{className:"portal-actions",children:[c.jsx("button",{type:"button",className:"portal-submit secondary",disabled:M,onClick:()=>void ke("reset-password",`Reset password for @${l.username}? Active sessions will be revoked.`),children:"Reset password"}),c.jsx("button",{type:"button",className:"portal-submit secondary",disabled:M,onClick:()=>void ke("revoke-sessions",`Revoke all sessions for @${l.username}?`),children:"Revoke sessions"}),!l.disabledAt&&!N&&c.jsx("button",{type:"button",className:"portal-submit danger",disabled:M,onClick:()=>void ke("disable",`Disable @${l.username}? They will not be able to sign in.`),children:"Disable"}),l.disabledAt&&c.jsx("button",{type:"button",className:"portal-submit secondary",disabled:M,onClick:()=>void ke("enable"),children:"Enable"})]})]})]})})}async function gN(){try{const e=await fetch("/auth/me",{credentials:"same-origin"});return e.ok?(await e.json()).user??null:null}catch{return null}}function bN(e){return Array.isArray(e)?`${e.length} item${e.length===1?"":"s"}`:e&&typeof e=="object"?`${Object.keys(e).length} field${Object.keys(e).length===1?"":"s"}`:e==null?"empty":typeof e}function yN(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Object.values(e).every(a=>a===null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")}function xN(){const[e,a]=b.useState(null),[i,o]=b.useState(""),[l,u]=b.useState(null),[m,p]=b.useState(!0),[g,h]=b.useState("");Gs("Website — RoseQn","Edit your site content and preview the v4 site."),b.useEffect(()=>{(async()=>{const C=await gN();a(C),C?o(C.entertainerSlug||"transquinnftw"):(h("Sign in to manage your website."),p(!1))})()},[]);const v=b.useCallback(async C=>{h(""),p(!0);try{u(await GO(C))}catch(T){u(null),h(T instanceof Error?T.message:String(T))}finally{p(!1)}},[]);b.useEffect(()=>{i&&v(i)},[i,v]);const x=b.useMemo(()=>e?IO(e.roles,e.entertainerSlug,i):!1,[e,i]),S=b.useMemo(()=>((e==null?void 0:e.roles)??[]).some(C=>["admin","owner","manager","staff"].includes(C.toLowerCase())),[e]),_=WO(i);return c.jsxs("main",{className:"portal-wrap",children:[c.jsxs("header",{className:"portal-head",children:[c.jsx("a",{className:"portal-back",href:"/",children:"← Portal"}),c.jsx("h1",{id:"portal-title",children:"Website"})]}),c.jsxs("section",{className:"portal-card",children:[c.jsx("h2",{children:"Preview"}),c.jsx("p",{className:"portal-lede",children:"The v4 site with your current content. Not live — the public domain still serves the old site until cutover."}),_?c.jsx("a",{className:"portal-cta",href:_,target:"_blank",rel:"noopener noreferrer",children:"Preview website (v4 — not live) ↗"}):c.jsxs("p",{className:"portal-msg",children:["No preview host is configured for “",i,"” yet."]})]}),S&&c.jsx("section",{className:"portal-card",children:c.jsxs("label",{children:["Site slug"," ",c.jsx("input",{value:i,onChange:C=>o(C.target.value.trim().toLowerCase()),"aria-label":"site slug"})]})}),g&&c.jsx("p",{className:"portal-msg portal-msg-err",role:"alert",children:g}),m&&c.jsx("p",{className:"portal-lede",children:"Loading…"}),l&&c.jsxs("section",{className:"portal-card",children:[c.jsx("h2",{children:"Content sections"}),c.jsx("p",{className:"portal-lede",children:x?"Edit a section, then Save. Changes appear on the preview immediately.":"Read-only — you do not have edit rights for this site."}),c.jsx("ul",{className:"portal-sections",children:[...l.editable,...l.readOnly].map(C=>c.jsx(vN,{slug:i,name:C,value:l.sections[C],editable:x&&l.editable.includes(C),readOnlySoT:l.readOnly.includes(C),onSaved:()=>void v(i),counted:bN(l.sections[C])},C))})]})]})}function vN(e){const{slug:a,name:i,value:o,editable:l,readOnlySoT:u,counted:m,onSaved:p}=e,g=yN(o),[h,v]=b.useState(!1),[x,S]=b.useState(g?"form":"json"),[_,C]=b.useState({}),[T,A]=b.useState(""),[$,M]=b.useState(!1),[E,B]=b.useState(""),[j,R]=b.useState("");function z(){const Q=o??(Array.isArray(o)?[]:{});A(JSON.stringify(Q,null,2)),g&&C({...o}),S(g?"form":"json"),R(""),B(""),v(!0)}async function U(){let Q;try{Q=JSON.parse(T)}catch{R("Not valid JSON.");return}if(Q===null||typeof Q!="object"){R("A section must be a JSON array or object.");return}await Y(Q)}async function ae(){await Y(_)}async function Y(Q){R(""),B(""),M(!0);try{await YO(a,i,Q),B("Saved."),v(!1),p()}catch(ie){R(ie instanceof Error?ie.message:String(ie))}finally{M(!1)}}return c.jsxs("li",{className:"portal-section-row",children:[c.jsxs("div",{className:"portal-section-head",children:[c.jsx("strong",{children:i}),c.jsx("span",{className:"portal-section-count",children:m}),u&&c.jsx("span",{className:"portal-badge",children:"managed elsewhere"}),l&&!h&&c.jsx("button",{type:"button",onClick:z,children:"Edit"})]}),u&&c.jsx("p",{className:"portal-lede",children:"This section’s source of truth is another app (rates → entertainer app, tour → tour tool). Edit it there."}),h&&c.jsxs("div",{className:"portal-section-edit",children:[g&&c.jsxs("div",{className:"portal-section-mode",children:[c.jsx("button",{type:"button",className:x==="form"?"portal-mode-active":"",onClick:()=>S("form"),children:"Fields"}),c.jsx("button",{type:"button",className:x==="json"?"portal-mode-active":"",onClick:()=>{A(JSON.stringify(_,null,2)),S("json")},children:"Raw JSON"})]}),x==="form"?c.jsxs("div",{className:"portal-section-form",children:[Object.keys(_).length===0&&c.jsx("p",{className:"portal-lede",children:"No fields yet — use Raw JSON to add one."}),Object.entries(_).map(([Q,ie])=>c.jsxs("label",{className:"portal-field-row",children:[c.jsx("span",{className:"portal-field-key",children:Q}),c.jsx("input",{value:ie===null?"":String(ie),onChange:ve=>C(X=>({...X,[Q]:ve.target.value})),"aria-label":Q})]},Q)),c.jsxs("div",{className:"portal-section-actions",children:[c.jsx("button",{type:"button",onClick:()=>void ae(),disabled:$,children:$?"Saving…":"Save"}),c.jsx("button",{type:"button",onClick:()=>v(!1),disabled:$,children:"Cancel"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("textarea",{value:T,onChange:Q=>A(Q.target.value),rows:12,spellCheck:!1,"aria-label":`${i} JSON`}),c.jsxs("div",{className:"portal-section-actions",children:[c.jsx("button",{type:"button",onClick:()=>void U(),disabled:$,children:$?"Saving…":"Save"}),c.jsx("button",{type:"button",onClick:()=>v(!1),disabled:$,children:"Cancel"})]})]})]}),j&&c.jsx("p",{className:"portal-msg portal-msg-err",role:"alert",children:j}),E&&c.jsx("p",{className:"portal-msg",role:"status",children:E})]})}function wN(){return c.jsx(Pv,{children:c.jsxs(Fv,{children:[c.jsx(Pn,{path:"/account",element:c.jsx(PO,{})}),c.jsx(Pn,{path:"/team",element:c.jsx(mN,{})}),c.jsx(Pn,{path:"/team/:id",element:c.jsx(hN,{})}),c.jsx(Pn,{path:"/website",element:c.jsx(xN,{})}),c.jsx(Pn,{path:"*",element:c.jsx(lN,{})})]})})}const SN={apiBaseUrl:"",appName:"user-site-content",enabled:!window.location.hostname.endsWith(".local")&&window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1",scrollTracking:{enabled:!0,thresholds:[25,50,75,100]}};function kN(){return iC(),null}function _N(){const{pathname:e,hash:a}=Nt(),i=yr(),o=b.useRef(i);return o.current=i,b.useEffect(()=>{if(a){const l=document.getElementById(a.slice(1));if(l){l.scrollIntoView({behavior:"smooth",block:"start"});return}const u=requestAnimationFrame(()=>{var m;(m=document.getElementById(a.slice(1)))==null||m.scrollIntoView({behavior:"smooth",block:"start"})});return()=>cancelAnimationFrame(u)}window.scrollTo({top:0,left:0,behavior:"instant"}),o.current.page.transition()},[e,a]),null}function $N(){return b.useEffect(()=>{if("requestIdleCallback"in window){const a=requestIdleCallback(sx);return()=>cancelIdleCallback(a)}const e=setTimeout(sx,2e3);return()=>clearTimeout(e)},[]),null}function TN(){return c.jsx(PR,{enabled:!0,persistVerification:!0,children:c.jsx(zC,{children:c.jsx(eA,{children:c.jsx(Pv,{children:c.jsx(MC,{domain:"landing",app:"quinn-www",apiUrl:"/api/i18n",children:c.jsx(WC,{children:c.jsx(eM,{children:c.jsxs(rC,{config:SN,children:[c.jsx(kN,{}),c.jsx(Kz,{}),c.jsx(_N,{}),c.jsx($N,{}),c.jsx(zz,{children:c.jsx(Wx,{mode:"wait",children:c.jsx(Fv,{children:MO})})})]})})})})})})})})}function jN(){return OO()==="portal"?c.jsx(wN,{}):c.jsx(TN,{})}const CN=e=>{const a=e.lastIndexOf("/"),i=a>=0?e.slice(a+1):e,o=U2[i];return o?`/photos/${o}`:e},AN={identity:{name:"",pronouns:"",gender:"",location:"",secondaryLocations:[],languages:[],tagline:""},physical:{age:"",height:"",bodyType:"",ethnicity:"",hairColor:"",hairLength:"",eyeColor:"",cupSize:"",additional:{}},rates:[],addOns:{entries:[]},travelFees:{entries:[]},touringPackages:{entries:[]},onlineServices:{entries:[]},fmtyTariff:void 0,tour:[],gallery:[],galleryOrdering:"curated",contact:{phone:"",communicationNote:"",responseTime:"",paymentMethods:[]},policies:[],about:{bio:"",personality:[],availableFor:[],availableTo:[]}},EN={id:"quinn",brand:{displayName:"Quinn",tagline:"Upscale Companion — Touring Nationwide",domain:"transquinnftw.com",ogImage:"/www/gallery-media/3/453"},theme:{...OT,activeTheme:"barbie-light"},provider:AN,apiBaseUrl:typeof window<"u"?window.location.origin:"",rewritePhotoSrc:CN},RN=["quinnTheme — runtime theme preview + visual lab (no dev server needed)","  quinnTheme.list()                  every registered theme (with index)","  quinnTheme.current()               active theme name (or custom-mod)","  quinnTheme.set('barbie-light')     switch + reload (name or alias)","  quinnTheme.set(5)                  switch by list() index","  quinnTheme.custom({colors:{...}})  live mod (no reload). See visual below","  quinnTheme.clearCustom()           remove live mod","  quinnTheme.getMod()                current live overrides (for export)","  quinnTheme.reset()                 clear preview + custom mod","","VISUAL THEME VIEWER (recommended for color pickers, fork, mods):","  Open ?theme-viewer=1  (or ?tv) in the URL — launches floating Theme Lab panel.","  Or click the 🎨 launcher (bottom-right). Live edits update the site instantly.","  Features: click any base to fork it, color pickers for primary/accent/bg/text/etc,",'  "Load from..." , "Save as my mod", Share URL (encodes ?mod=... for others),',"  Export TS snippet (paste into registry to make permanent).","  All shareable via URL — the mod lives in ?mod=base64 + ?theme=custom-mod ."].join(`
`);function zN(e){const a=new URL(window.location.href);a.searchParams.set("theme",e),window.location.replace(a.toString())}function MN(){const e=new URL(window.location.href);e.searchParams.delete("theme"),window.location.replace(e.toString())}function DN(){if(typeof window>"u")return;const e={list(){return bs.map((a,i)=>({index:i,name:a,label:on[a].label}))},current(){const a=Vs();return a.name==="custom-mod"?"custom-mod (live)":a.name},set(a){let i;if(typeof a=="number"){const l=bs[a];if(!Number.isInteger(a)||!l)throw new Error(`[quinnTheme] index ${a} out of range (0–${bs.length-1}). See quinnTheme.list().`);i=l}else i=a;const o=m8(i);if(!o)throw new Error(`[quinnTheme] unknown theme "${a}". Available: ${bs.join(", ")} (or use .custom({...}) for live mods)`);return zN(o),o},reset(){yv(),Yc({updateUrl:!0}),MN()},custom(a){return!a||typeof a!="object"?'Usage: quinnTheme.custom({ colors: { primary: { main: "#ffaa00" }, accent: { main: "#cc4499" } }, typography: { fontFamily: { heading: "..." } } }) — live, no reload. Prefer the visual viewer for pickers.':(Sv(a),"Custom mod applied live. Open ?theme-viewer or the 🎨 button for the full color picker UX. Share the URL.")},clearCustom(){return Yc({updateUrl:!0}),"Live custom mod cleared."},getMod(){return Tc()},help(){return RN}};window.quinnTheme=e}Wi.setPack("anime");window.__PROVIDER_CONFIG__=EN;const J2=Vs();hu(J2);DN();const ew=document.getElementById("root");if(!ew)throw new Error("Root element #root not found");function ON(){if(typeof window>"u")return!1;try{const e=window.location.pathname;return e==="/admin"||e.startsWith("/admin/")}catch{return!1}}const NN=ON();function LN({initialCustom:e}){const[a,i]=b.useState(e);return b.useEffect(()=>{function o(l){if(!l.detail)return;const m=Vs();i(m.customTheme),hu(m)}return window.addEventListener("quinn:site-theme-default",o),()=>window.removeEventListener("quinn:site-theme-default",o)},[]),c.jsxs(BT,{defaultTheme:"luxe",customTheme:a,children:[c.jsx(jN,{}),NN&&c.jsx(v8,{})]})}Ok.createRoot(ew).render(c.jsx(wp,{theme:qT,children:c.jsx(LN,{initialCustom:J2.customTheme})}));export{B6 as $,tp as A,hh as B,At as C,qN as D,uh as E,Yv as F,Su as G,_m as H,y2 as I,z6 as J,cx as K,it as L,Ts as M,co as N,ux as O,h2 as P,X6 as Q,vA as R,xm as S,ku as T,F6 as U,Q6 as V,v2 as W,N6 as X,j6 as Y,Ix as Z,Ne as _,w as a,sj as a0,VN as a1,GN as a2,UN as a3,IN as a4,mO as a5,lp as a6,k2 as a7,vs as a8,N9 as a9,P7 as aA,Tk as aB,Ct as aC,Ma as aa,Da as ab,Ot as ac,WE as ad,QE as ae,Ra as af,vn as ag,ot as ah,Oa as ai,Dt as aj,pm as ak,bh as al,Qc as am,x2 as an,Nn as ao,ZE as ap,P6 as aq,rT as ar,RA as as,xs as at,FN as au,A6 as av,_c as aw,za as ax,a2 as ay,BD as az,W as b,Ls as c,YN as d,s2 as e,yr as f,Zn as g,t2 as h,ph as i,c as j,tA as k,te as l,gA as m,yA as n,Hs as o,Fe as p,i2 as q,b as r,Kr as s,e2 as t,Wj as u,HN as v,PN as w,Ps as x,gh as y,wu as z};
//# sourceMappingURL=index-DBvZCzBm.js.map
