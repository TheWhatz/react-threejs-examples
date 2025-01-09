(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var Cf={exports:{}},ga={},bf={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Fy(){if(og)return mt;og=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(U,ne,Ue){this.props=U,this.context=ne,this.refs=M,this.updater=Ue||x}S.prototype.isReactComponent={},S.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=S.prototype;function b(U,ne,Ue){this.props=U,this.context=ne,this.refs=M,this.updater=Ue||x}var L=b.prototype=new v;L.constructor=b,E(L,S.prototype),L.isPureReactComponent=!0;var R=Array.isArray,k=Object.prototype.hasOwnProperty,F={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function W(U,ne,Ue){var Q,he={},Ee=null,ye=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ye=ne.ref),ne.key!==void 0&&(Ee=""+ne.key),ne)k.call(ne,Q)&&!N.hasOwnProperty(Q)&&(he[Q]=ne[Q]);var we=arguments.length-2;if(we===1)he.children=Ue;else if(1<we){for(var Ne=Array(we),Qe=0;Qe<we;Qe++)Ne[Qe]=arguments[Qe+2];he.children=Ne}if(U&&U.defaultProps)for(Q in we=U.defaultProps,we)he[Q]===void 0&&(he[Q]=we[Q]);return{$$typeof:s,type:U,key:Ee,ref:ye,props:he,_owner:F.current}}function P(U,ne){return{$$typeof:s,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ue){return ne[Ue]})}var ae=/\/+/g;function te(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):ne.toString(36)}function fe(U,ne,Ue,Q,he){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(Ee){case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case s:case e:ye=!0}}if(ye)return ye=U,he=he(ye),U=Q===""?"."+te(ye,0):Q,R(he)?(Ue="",U!=null&&(Ue=U.replace(ae,"$&/")+"/"),fe(he,ne,Ue,"",function(Qe){return Qe})):he!=null&&(C(he)&&(he=P(he,Ue+(!he.key||ye&&ye.key===he.key?"":(""+he.key).replace(ae,"$&/")+"/")+U)),ne.push(he)),1;if(ye=0,Q=Q===""?".":Q+":",R(U))for(var we=0;we<U.length;we++){Ee=U[we];var Ne=Q+te(Ee,we);ye+=fe(Ee,ne,Ue,Ne,he)}else if(Ne=_(U),typeof Ne=="function")for(U=Ne.call(U),we=0;!(Ee=U.next()).done;)Ee=Ee.value,Ne=Q+te(Ee,we++),ye+=fe(Ee,ne,Ue,Ne,he);else if(Ee==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ye}function pe(U,ne,Ue){if(U==null)return U;var Q=[],he=0;return fe(U,Q,"","",function(Ee){return ne.call(Ue,Ee,he++)}),Q}function oe(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ue)},function(Ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ue)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var ue={current:null},H={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:H,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:pe,forEach:function(U,ne,Ue){pe(U,function(){ne.apply(this,arguments)},Ue)},count:function(U){var ne=0;return pe(U,function(){ne++}),ne},toArray:function(U){return pe(U,function(ne){return ne})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=S,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=b,mt.StrictMode=i,mt.Suspense=d,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,mt.act=re,mt.cloneElement=function(U,ne,Ue){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=E({},U.props),he=U.key,Ee=U.ref,ye=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Ee=ne.ref,ye=F.current),ne.key!==void 0&&(he=""+ne.key),U.type&&U.type.defaultProps)var we=U.type.defaultProps;for(Ne in ne)k.call(ne,Ne)&&!N.hasOwnProperty(Ne)&&(Q[Ne]=ne[Ne]===void 0&&we!==void 0?we[Ne]:ne[Ne])}var Ne=arguments.length-2;if(Ne===1)Q.children=Ue;else if(1<Ne){we=Array(Ne);for(var Qe=0;Qe<Ne;Qe++)we[Qe]=arguments[Qe+2];Q.children=we}return{$$typeof:s,type:U.type,key:he,ref:Ee,props:Q,_owner:ye}},mt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},mt.createElement=W,mt.createFactory=function(U){var ne=W.bind(null,U);return ne.type=U,ne},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:c,render:U}},mt.isValidElement=C,mt.lazy=function(U){return{$$typeof:p,_payload:{_status:-1,_result:U},_init:oe}},mt.memo=function(U,ne){return{$$typeof:h,type:U,compare:ne===void 0?null:ne}},mt.startTransition=function(U){var ne=H.transition;H.transition={};try{U()}finally{H.transition=ne}},mt.unstable_act=re,mt.useCallback=function(U,ne){return ue.current.useCallback(U,ne)},mt.useContext=function(U){return ue.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return ue.current.useDeferredValue(U)},mt.useEffect=function(U,ne){return ue.current.useEffect(U,ne)},mt.useId=function(){return ue.current.useId()},mt.useImperativeHandle=function(U,ne,Ue){return ue.current.useImperativeHandle(U,ne,Ue)},mt.useInsertionEffect=function(U,ne){return ue.current.useInsertionEffect(U,ne)},mt.useLayoutEffect=function(U,ne){return ue.current.useLayoutEffect(U,ne)},mt.useMemo=function(U,ne){return ue.current.useMemo(U,ne)},mt.useReducer=function(U,ne,Ue){return ue.current.useReducer(U,ne,Ue)},mt.useRef=function(U){return ue.current.useRef(U)},mt.useState=function(U){return ue.current.useState(U)},mt.useSyncExternalStore=function(U,ne,Ue){return ue.current.useSyncExternalStore(U,ne,Ue)},mt.useTransition=function(){return ue.current.useTransition()},mt.version="18.3.1",mt}var ag;function fh(){return ag||(ag=1,bf.exports=Fy()),bf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function Oy(){if(lg)return ga;lg=1;var s=fh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,g={},_=null,x=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(x=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(g[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:c,key:_,ref:x,props:g,_owner:o.current}}return ga.Fragment=t,ga.jsx=u,ga.jsxs=u,ga}var ug;function ky(){return ug||(ug=1,Cf.exports=Oy()),Cf.exports}var _n=ky(),se=fh(),Ql={},Pf={exports:{}},Gn={},Lf={exports:{}},Df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function By(){return cg||(cg=1,function(s){function e(H,le){var re=H.length;H.push(le);e:for(;0<re;){var U=re-1>>>1,ne=H[U];if(0<o(ne,le))H[U]=le,H[re]=ne,re=U;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var le=H[0],re=H.pop();if(re!==le){H[0]=re;e:for(var U=0,ne=H.length,Ue=ne>>>1;U<Ue;){var Q=2*(U+1)-1,he=H[Q],Ee=Q+1,ye=H[Ee];if(0>o(he,re))Ee<ne&&0>o(ye,he)?(H[U]=ye,H[Ee]=re,U=Ee):(H[U]=he,H[Q]=re,U=Q);else if(Ee<ne&&0>o(ye,re))H[U]=ye,H[Ee]=re,U=Ee;else break e}}return le}function o(H,le){var re=H.sortIndex-le.sortIndex;return re!==0?re:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();s.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,g=null,_=3,x=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(H){for(var le=t(h);le!==null;){if(le.callback===null)i(h);else if(le.startTime<=H)i(h),le.sortIndex=le.expirationTime,e(d,le);else break;le=t(h)}}function R(H){if(M=!1,L(H),!E)if(t(d)!==null)E=!0,oe(k);else{var le=t(h);le!==null&&ue(R,le.startTime-H)}}function k(H,le){E=!1,M&&(M=!1,v(W),W=-1),x=!0;var re=_;try{for(L(le),g=t(d);g!==null&&(!(g.expirationTime>le)||H&&!z());){var U=g.callback;if(typeof U=="function"){g.callback=null,_=g.priorityLevel;var ne=U(g.expirationTime<=le);le=s.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(d)&&i(d),L(le)}else i(d);g=t(d)}if(g!==null)var Ue=!0;else{var Q=t(h);Q!==null&&ue(R,Q.startTime-le),Ue=!1}return Ue}finally{g=null,_=re,x=!1}}var F=!1,N=null,W=-1,P=5,C=-1;function z(){return!(s.unstable_now()-C<P)}function ae(){if(N!==null){var H=s.unstable_now();C=H;var le=!0;try{le=N(!0,H)}finally{le?te():(F=!1,N=null)}}else F=!1}var te;if(typeof b=="function")te=function(){b(ae)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=ae,te=function(){pe.postMessage(null)}}else te=function(){S(ae,0)};function oe(H){N=H,F||(F=!0,te())}function ue(H,le){W=S(function(){H(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){E||x||(E=!0,oe(k))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(H){switch(_){case 1:case 2:case 3:var le=3;break;default:le=_}var re=_;_=le;try{return H()}finally{_=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var re=_;_=H;try{return le()}finally{_=re}},s.unstable_scheduleCallback=function(H,le,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,H){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,H={id:p++,callback:le,priorityLevel:H,startTime:re,expirationTime:ne,sortIndex:-1},re>U?(H.sortIndex=re,e(h,H),t(d)===null&&H===t(h)&&(M?(v(W),W=-1):M=!0,ue(R,re-U))):(H.sortIndex=ne,e(d,H),E||x||(E=!0,oe(k))),H},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(H){var le=_;return function(){var re=_;_=le;try{return H.apply(this,arguments)}finally{_=re}}}}(Df)),Df}var fg;function zy(){return fg||(fg=1,Lf.exports=By()),Lf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function Hy(){if(dg)return Gn;dg=1;var s=fh(),e=zy();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function _(n){return d.call(g,n)?!0:d.call(p,n)?!1:h.test(n)?g[n]=!0:(p[n]=!0,!1)}function x(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,f){if(r===null||typeof r>"u"||x(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,f,m,y,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=y,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(v,b);S[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(v,b);S[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(v,b);S[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,f){var m=S.hasOwnProperty(r)?S[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,m,f)&&(l=null),f||m===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),F=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,U;function ne(n){if(U===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);U=r&&r[1]||""}return`
`+U+n}var Ue=!1;function Q(n,r){if(!n||Ue)return"";Ue=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ee){var f=ee}Reflect.construct(n,[],r)}else{try{r.call()}catch(ee){f=ee}n.call(r.prototype)}else{try{throw Error()}catch(ee){f=ee}n()}}catch(ee){if(ee&&f&&typeof ee.stack=="string"){for(var m=ee.stack.split(`
`),y=f.stack.split(`
`),T=m.length-1,I=y.length-1;1<=T&&0<=I&&m[T]!==y[I];)I--;for(;1<=T&&0<=I;T--,I--)if(m[T]!==y[I]){if(T!==1||I!==1)do if(T--,I--,0>I||m[T]!==y[I]){var O=`
`+m[T].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=T&&0<=I);break}}}finally{Ue=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function he(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case F:return"Portal";case P:return"Profiler";case W:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ae:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return r=n.displayName||null,r!==null?r:Ee(n.type)||"Memo";case oe:r=n._payload,n=n._init;try{return Ee(n(r))}catch{}}return null}function ye(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(r);case 8:return r===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Qe(n){var r=Ne(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,y=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(T){f=""+T,y.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Dt(n){n._valueTracker||(n._valueTracker=Qe(n))}function vt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Ne(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function Ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function B(n,r){var l=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Rn(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=we(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function gt(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function ht(n,r){gt(n,r);var l=we(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?bt(n,r.type,l):r.hasOwnProperty("defaultValue")&&bt(n,r.type,we(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ye(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function bt(n,r,l){(r!=="number"||Ft(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var We=Array.isArray;function D(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+we(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function w(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(We(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:we(l)}}function me(n,r){var l=we(r.value),f=we(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function _e(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Fe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ft(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){ke.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function Ke(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function et(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=Ke(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var Be=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(n,r){if(r){if(Be[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function rt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,ie=null,de=null;function Le(n){if(n=ta(n)){if(typeof Re!="function")throw Error(t(280));var r=n.stateNode;r&&(r=hl(r),Re(n.stateNode,n.type,r))}}function Pe(n){ie?de?de.push(n):de=[n]:ie=n}function st(){if(ie){var n=ie,r=de;if(de=ie=null,Le(n),r)for(n=0;n<r.length;n++)Le(r[n])}}function kt(n,r){return n(r)}function Jt(){}var Mt=!1;function On(n,r,l){if(Mt)return n(r,l);Mt=!0;try{return kt(n,r,l)}finally{Mt=!1,(ie!==null||de!==null)&&(Jt(),st())}}function Cn(n,r){var l=n.stateNode;if(l===null)return null;var f=hl(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Rs=!1;if(c)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{Rs=!1}function Bi(n,r,l,f,m,y,T,I,O){var ee=Array.prototype.slice.call(arguments,3);try{r.apply(l,ee)}catch(ve){this.onError(ve)}}var zi=!1,$r=null,Zr=!1,pr=null,Xa={onError:function(n){zi=!0,$r=n}};function Cs(n,r,l,f,m,y,T,I,O){zi=!1,$r=null,Bi.apply(Xa,arguments)}function ja(n,r,l,f,m,y,T,I,O){if(Cs.apply(this,arguments),zi){if(zi){var ee=$r;zi=!1,$r=null}else throw Error(t(198));Zr||(Zr=!0,pr=ee)}}function Ei(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ya(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function qa(n){if(Ei(n)!==n)throw Error(t(188))}function $u(n){var r=n.alternate;if(!r){if(r=Ei(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var y=m.alternate;if(y===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===l)return qa(m),n;if(y===f)return qa(m),r;y=y.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=y;else{for(var T=!1,I=m.child;I;){if(I===l){T=!0,l=m,f=y;break}if(I===f){T=!0,f=m,l=y;break}I=I.sibling}if(!T){for(I=y.child;I;){if(I===l){T=!0,l=y,f=m;break}if(I===f){T=!0,f=y,l=m;break}I=I.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Ka(n){return n=$u(n),n!==null?$a(n):null}function $a(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=$a(n);if(r!==null)return r;n=n.sibling}return null}var Za=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,j=e.unstable_shouldYield,J=e.unstable_requestPaint,K=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,ze=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Je=null,Ve=null;function xt(n){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:St,Yt=Math.log,Ht=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(Yt(n)/Ht|0)|0}var qe=64,qt=4194304;function yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vn(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,y=n.pingedLanes,T=l&268435455;if(T!==0){var I=T&~m;I!==0?f=yt(I):(y&=T,y!==0&&(f=yt(y)))}else T=l&~m,T!==0?f=yt(T):y!==0&&(f=yt(y));if(f===0)return 0;if(r!==0&&r!==f&&!(r&m)&&(m=f&-f,y=r&-r,m>=y||m===16&&(y&4194240)!==0))return r;if(f&4&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-at(r),m=1<<l,f|=n[l],r&=~m;return f}function mr(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bn(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,y=n.pendingLanes;0<y;){var T=31-at(y),I=1<<T,O=m[T];O===-1?(!(I&l)||I&f)&&(m[T]=mr(I,r)):O<=r&&(n.expiredLanes|=I),y&=~I}}function Hi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ut(){var n=qe;return qe<<=1,!(qe&4194240)&&(qe=64),n}function yn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function on(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-at(r),n[r]=l}function pn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-at(l),y=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~y}}function an(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-at(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var Tt=0;function Mi(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Bh,Zu,zh,Hh,Vh,Qu=!1,Qa=[],gr=null,_r=null,vr=null,Bo=new Map,zo=new Map,yr=[],s0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gh(n,r){switch(n){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Bo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(r.pointerId)}}function Ho(n,r,l,f,m,y){return n===null||n.nativeEvent!==y?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:y,targetContainers:[m]},r!==null&&(r=ta(r),r!==null&&Zu(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function o0(n,r,l,f,m){switch(r){case"focusin":return gr=Ho(gr,n,r,l,f,m),!0;case"dragenter":return _r=Ho(_r,n,r,l,f,m),!0;case"mouseover":return vr=Ho(vr,n,r,l,f,m),!0;case"pointerover":var y=m.pointerId;return Bo.set(y,Ho(Bo.get(y)||null,n,r,l,f,m)),!0;case"gotpointercapture":return y=m.pointerId,zo.set(y,Ho(zo.get(y)||null,n,r,l,f,m)),!0}return!1}function Wh(n){var r=Qr(n.target);if(r!==null){var l=Ei(r);if(l!==null){if(r=l.tag,r===13){if(r=Ya(l),r!==null){n.blockedOn=r,Vh(n.priority,function(){zh(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ja(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=ec(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);Ct=f,l.target.dispatchEvent(f),Ct=null}else return r=ta(l),r!==null&&Zu(r),n.blockedOn=l,!1;r.shift()}return!0}function Xh(n,r,l){Ja(n)&&l.delete(r)}function a0(){Qu=!1,gr!==null&&Ja(gr)&&(gr=null),_r!==null&&Ja(_r)&&(_r=null),vr!==null&&Ja(vr)&&(vr=null),Bo.forEach(Xh),zo.forEach(Xh)}function Vo(n,r){n.blockedOn===r&&(n.blockedOn=null,Qu||(Qu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,a0)))}function Go(n){function r(m){return Vo(m,n)}if(0<Qa.length){Vo(Qa[0],n);for(var l=1;l<Qa.length;l++){var f=Qa[l];f.blockedOn===n&&(f.blockedOn=null)}}for(gr!==null&&Vo(gr,n),_r!==null&&Vo(_r,n),vr!==null&&Vo(vr,n),Bo.forEach(r),zo.forEach(r),l=0;l<yr.length;l++)f=yr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<yr.length&&(l=yr[0],l.blockedOn===null);)Wh(l),l.blockedOn===null&&yr.shift()}var bs=R.ReactCurrentBatchConfig,el=!0;function l0(n,r,l,f){var m=Tt,y=bs.transition;bs.transition=null;try{Tt=1,Ju(n,r,l,f)}finally{Tt=m,bs.transition=y}}function u0(n,r,l,f){var m=Tt,y=bs.transition;bs.transition=null;try{Tt=4,Ju(n,r,l,f)}finally{Tt=m,bs.transition=y}}function Ju(n,r,l,f){if(el){var m=ec(n,r,l,f);if(m===null)_c(n,r,f,tl,l),Gh(n,f);else if(o0(m,n,r,l,f))f.stopPropagation();else if(Gh(n,f),r&4&&-1<s0.indexOf(n)){for(;m!==null;){var y=ta(m);if(y!==null&&Bh(y),y=ec(n,r,l,f),y===null&&_c(n,r,f,tl,l),y===m)break;m=y}m!==null&&f.stopPropagation()}else _c(n,r,f,null,l)}}var tl=null;function ec(n,r,l,f){if(tl=null,n=G(f),n=Qr(n),n!==null)if(r=Ei(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ya(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return tl=n,null}function jh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Se:return 1;case Ce:return 4;case De:case ze:return 16;case tt:return 536870912;default:return 16}default:return 16}}var xr=null,tc=null,nl=null;function Yh(){if(nl)return nl;var n,r=tc,l=r.length,f,m="value"in xr?xr.value:xr.textContent,y=m.length;for(n=0;n<l&&r[n]===m[n];n++);var T=l-n;for(f=1;f<=T&&r[l-f]===m[y-f];f++);return nl=m.slice(n,1<f?1-f:void 0)}function il(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function rl(){return!0}function qh(){return!1}function jn(n){function r(l,f,m,y,T){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=y,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(l=n[I],this[I]=l?l(y):y[I]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?rl:qh,this.isPropagationStopped=qh,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),r}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=jn(Ps),Wo=re({},Ps,{view:0,detail:0}),c0=jn(Wo),ic,rc,Xo,sl=re({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xo&&(Xo&&n.type==="mousemove"?(ic=n.screenX-Xo.screenX,rc=n.screenY-Xo.screenY):rc=ic=0,Xo=n),ic)},movementY:function(n){return"movementY"in n?n.movementY:rc}}),Kh=jn(sl),f0=re({},sl,{dataTransfer:0}),d0=jn(f0),h0=re({},Wo,{relatedTarget:0}),sc=jn(h0),p0=re({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=jn(p0),g0=re({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_0=jn(g0),v0=re({},Ps,{data:0}),$h=jn(v0),y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=S0[n])?!!r[n]:!1}function oc(){return E0}var M0=re({},Wo,{key:function(n){if(n.key){var r=y0[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?x0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(n){return n.type==="keypress"?il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),T0=jn(M0),w0=re({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=jn(w0),A0=re({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),R0=jn(A0),C0=re({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),b0=jn(C0),P0=re({},sl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),L0=jn(P0),D0=[9,13,27,32],ac=c&&"CompositionEvent"in window,jo=null;c&&"documentMode"in document&&(jo=document.documentMode);var I0=c&&"TextEvent"in window&&!jo,Qh=c&&(!ac||jo&&8<jo&&11>=jo),Jh=" ",ep=!1;function tp(n,r){switch(n){case"keyup":return D0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function N0(n,r){switch(n){case"compositionend":return np(r);case"keypress":return r.which!==32?null:(ep=!0,Jh);case"textInput":return n=r.data,n===Jh&&ep?null:n;default:return null}}function U0(n,r){if(Ls)return n==="compositionend"||!ac&&tp(n,r)?(n=Yh(),nl=tc=xr=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Qh&&r.locale!=="ko"?null:r.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!F0[n.type]:r==="textarea"}function rp(n,r,l,f){Pe(f),r=cl(r,"onChange"),0<r.length&&(l=new nc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var Yo=null,qo=null;function O0(n){Ep(n,0)}function ol(n){var r=Fs(n);if(vt(r))return n}function k0(n,r){if(n==="change")return r}var sp=!1;if(c){var lc;if(c){var uc="oninput"in document;if(!uc){var op=document.createElement("div");op.setAttribute("oninput","return;"),uc=typeof op.oninput=="function"}lc=uc}else lc=!1;sp=lc&&(!document.documentMode||9<document.documentMode)}function ap(){Yo&&(Yo.detachEvent("onpropertychange",lp),qo=Yo=null)}function lp(n){if(n.propertyName==="value"&&ol(qo)){var r=[];rp(r,qo,n,G(n)),On(O0,r)}}function B0(n,r,l){n==="focusin"?(ap(),Yo=r,qo=l,Yo.attachEvent("onpropertychange",lp)):n==="focusout"&&ap()}function z0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ol(qo)}function H0(n,r){if(n==="click")return ol(r)}function V0(n,r){if(n==="input"||n==="change")return ol(r)}function G0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ui=typeof Object.is=="function"?Object.is:G0;function Ko(n,r){if(ui(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(r,m)||!ui(n[m],r[m]))return!1}return!0}function up(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cp(n,r){var l=up(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=up(l)}}function fp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?fp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function dp(){for(var n=window,r=Ft();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Ft(n.document)}return r}function cc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function W0(n){var r=dp(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&fp(l.ownerDocument.documentElement,l)){if(f!==null&&cc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,y=Math.min(f.start,m);f=f.end===void 0?y:Math.min(f.end,m),!n.extend&&y>f&&(m=f,f=y,y=m),m=cp(l,y);var T=cp(l,f);m&&T&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),y>f?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var X0=c&&"documentMode"in document&&11>=document.documentMode,Ds=null,fc=null,$o=null,dc=!1;function hp(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;dc||Ds==null||Ds!==Ft(f)||(f=Ds,"selectionStart"in f&&cc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),$o&&Ko($o,f)||($o=f,f=cl(fc,"onSelect"),0<f.length&&(r=new nc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=Ds)))}function al(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Is={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},hc={},pp={};c&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function ll(n){if(hc[n])return hc[n];if(!Is[n])return n;var r=Is[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in pp)return hc[n]=r[l];return n}var mp=ll("animationend"),gp=ll("animationiteration"),_p=ll("animationstart"),vp=ll("transitionend"),yp=new Map,xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,r){yp.set(n,r),a(r,[n])}for(var pc=0;pc<xp.length;pc++){var mc=xp[pc],j0=mc.toLowerCase(),Y0=mc[0].toUpperCase()+mc.slice(1);Sr(j0,"on"+Y0)}Sr(mp,"onAnimationEnd"),Sr(gp,"onAnimationIteration"),Sr(_p,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(vp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function Sp(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,ja(f,r,void 0,n),n.currentTarget=null}function Ep(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var y=void 0;if(r)for(var T=f.length-1;0<=T;T--){var I=f[T],O=I.instance,ee=I.currentTarget;if(I=I.listener,O!==y&&m.isPropagationStopped())break e;Sp(m,I,ee),y=O}else for(T=0;T<f.length;T++){if(I=f[T],O=I.instance,ee=I.currentTarget,I=I.listener,O!==y&&m.isPropagationStopped())break e;Sp(m,I,ee),y=O}}}if(Zr)throw n=pr,Zr=!1,pr=null,n}function Bt(n,r){var l=r[Mc];l===void 0&&(l=r[Mc]=new Set);var f=n+"__bubble";l.has(f)||(Mp(r,n,2,!1),l.add(f))}function gc(n,r,l){var f=0;r&&(f|=4),Mp(l,n,f,r)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Qo(n){if(!n[ul]){n[ul]=!0,i.forEach(function(l){l!=="selectionchange"&&(q0.has(l)||gc(l,!1,n),gc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ul]||(r[ul]=!0,gc("selectionchange",!1,r))}}function Mp(n,r,l,f){switch(jh(r)){case 1:var m=l0;break;case 4:m=u0;break;default:m=Ju}l=m.bind(null,r,l,n),m=void 0,!Rs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function _c(n,r,l,f,m){var y=f;if(!(r&1)&&!(r&2)&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var I=f.stateNode.containerInfo;if(I===m||I.nodeType===8&&I.parentNode===m)break;if(T===4)for(T=f.return;T!==null;){var O=T.tag;if((O===3||O===4)&&(O=T.stateNode.containerInfo,O===m||O.nodeType===8&&O.parentNode===m))return;T=T.return}for(;I!==null;){if(T=Qr(I),T===null)return;if(O=T.tag,O===5||O===6){f=y=T;continue e}I=I.parentNode}}f=f.return}On(function(){var ee=y,ve=G(l),xe=[];e:{var ge=yp.get(n);if(ge!==void 0){var Ie=nc,He=n;switch(n){case"keypress":if(il(l)===0)break e;case"keydown":case"keyup":Ie=T0;break;case"focusin":He="focus",Ie=sc;break;case"focusout":He="blur",Ie=sc;break;case"beforeblur":case"afterblur":Ie=sc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=R0;break;case mp:case gp:case _p:Ie=m0;break;case vp:Ie=b0;break;case"scroll":Ie=c0;break;case"wheel":Ie=L0;break;case"copy":case"cut":case"paste":Ie=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Zh}var Ge=(r&4)!==0,$t=!Ge&&n==="scroll",q=Ge?ge!==null?ge+"Capture":null:ge;Ge=[];for(var V=ee,$;V!==null;){$=V;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,q!==null&&(Te=Cn(V,q),Te!=null&&Ge.push(Jo(V,Te,$)))),$t)break;V=V.return}0<Ge.length&&(ge=new Ie(ge,He,null,l,ve),xe.push({event:ge,listeners:Ge}))}}if(!(r&7)){e:{if(ge=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ge&&l!==Ct&&(He=l.relatedTarget||l.fromElement)&&(Qr(He)||He[Vi]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(He=l.relatedTarget||l.toElement,Ie=ee,He=He?Qr(He):null,He!==null&&($t=Ei(He),He!==$t||He.tag!==5&&He.tag!==6)&&(He=null)):(Ie=null,He=ee),Ie!==He)){if(Ge=Kh,Te="onMouseLeave",q="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=Zh,Te="onPointerLeave",q="onPointerEnter",V="pointer"),$t=Ie==null?ge:Fs(Ie),$=He==null?ge:Fs(He),ge=new Ge(Te,V+"leave",Ie,l,ve),ge.target=$t,ge.relatedTarget=$,Te=null,Qr(ve)===ee&&(Ge=new Ge(q,V+"enter",He,l,ve),Ge.target=$,Ge.relatedTarget=$t,Te=Ge),$t=Te,Ie&&He)t:{for(Ge=Ie,q=He,V=0,$=Ge;$;$=Ns($))V++;for($=0,Te=q;Te;Te=Ns(Te))$++;for(;0<V-$;)Ge=Ns(Ge),V--;for(;0<$-V;)q=Ns(q),$--;for(;V--;){if(Ge===q||q!==null&&Ge===q.alternate)break t;Ge=Ns(Ge),q=Ns(q)}Ge=null}else Ge=null;Ie!==null&&Tp(xe,ge,Ie,Ge,!1),He!==null&&$t!==null&&Tp(xe,$t,He,Ge,!0)}}e:{if(ge=ee?Fs(ee):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var je=k0;else if(ip(ge))if(sp)je=V0;else{je=z0;var $e=B0}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=H0);if(je&&(je=je(n,ee))){rp(xe,je,l,ve);break e}$e&&$e(n,ge,ee),n==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&bt(ge,"number",ge.value)}switch($e=ee?Fs(ee):window,n){case"focusin":(ip($e)||$e.contentEditable==="true")&&(Ds=$e,fc=ee,$o=null);break;case"focusout":$o=fc=Ds=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,hp(xe,l,ve);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":hp(xe,l,ve)}var Ze;if(ac)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Ls?tp(n,l)&&(nt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(nt="onCompositionStart");nt&&(Qh&&l.locale!=="ko"&&(Ls||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Ls&&(Ze=Yh()):(xr=ve,tc="value"in xr?xr.value:xr.textContent,Ls=!0)),$e=cl(ee,nt),0<$e.length&&(nt=new $h(nt,n,null,l,ve),xe.push({event:nt,listeners:$e}),Ze?nt.data=Ze:(Ze=np(l),Ze!==null&&(nt.data=Ze)))),(Ze=I0?N0(n,l):U0(n,l))&&(ee=cl(ee,"onBeforeInput"),0<ee.length&&(ve=new $h("onBeforeInput","beforeinput",null,l,ve),xe.push({event:ve,listeners:ee}),ve.data=Ze))}Ep(xe,r)})}function Jo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function cl(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,y=m.stateNode;m.tag===5&&y!==null&&(m=y,y=Cn(n,l),y!=null&&f.unshift(Jo(n,y,m)),y=Cn(n,r),y!=null&&f.push(Jo(n,y,m))),n=n.return}return f}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Tp(n,r,l,f,m){for(var y=r._reactName,T=[];l!==null&&l!==f;){var I=l,O=I.alternate,ee=I.stateNode;if(O!==null&&O===f)break;I.tag===5&&ee!==null&&(I=ee,m?(O=Cn(l,y),O!=null&&T.unshift(Jo(l,O,I))):m||(O=Cn(l,y),O!=null&&T.push(Jo(l,O,I)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var K0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function wp(n){return(typeof n=="string"?n:""+n).replace(K0,`
`).replace($0,"")}function fl(n,r,l){if(r=wp(r),wp(n)!==r&&l)throw Error(t(425))}function dl(){}var vc=null,yc=null;function xc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,Q0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(n){return Ap.resolve(null).then(n).catch(J0)}:Sc;function J0(n){setTimeout(function(){throw n})}function Ec(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),Go(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Go(r)}function Er(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Rp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Us,ea="__reactProps$"+Us,Vi="__reactContainer$"+Us,Mc="__reactEvents$"+Us,ey="__reactListeners$"+Us,ty="__reactHandles$"+Us;function Qr(n){var r=n[Ti];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Vi]||l[Ti]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Rp(n);n!==null;){if(l=n[Ti])return l;n=Rp(n)}return r}n=l,l=n.parentNode}return null}function ta(n){return n=n[Ti]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function hl(n){return n[ea]||null}var Tc=[],Os=-1;function Mr(n){return{current:n}}function zt(n){0>Os||(n.current=Tc[Os],Tc[Os]=null,Os--)}function Ot(n,r){Os++,Tc[Os]=n.current,n.current=r}var Tr={},xn=Mr(Tr),kn=Mr(!1),Jr=Tr;function ks(n,r){var l=n.type.contextTypes;if(!l)return Tr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},y;for(y in l)m[y]=r[y];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function Bn(n){return n=n.childContextTypes,n!=null}function pl(){zt(kn),zt(xn)}function Cp(n,r,l){if(xn.current!==Tr)throw Error(t(168));Ot(xn,r),Ot(kn,l)}function bp(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,ye(n)||"Unknown",m));return re({},l,f)}function ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Tr,Jr=xn.current,Ot(xn,n),Ot(kn,kn.current),!0}function Pp(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=bp(n,r,Jr),f.__reactInternalMemoizedMergedChildContext=n,zt(kn),zt(xn),Ot(xn,n)):zt(kn),Ot(kn,l)}var Gi=null,gl=!1,wc=!1;function Lp(n){Gi===null?Gi=[n]:Gi.push(n)}function ny(n){gl=!0,Lp(n)}function wr(){if(!wc&&Gi!==null){wc=!0;var n=0,r=Tt;try{var l=Gi;for(Tt=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}Gi=null,gl=!1}catch(m){throw Gi!==null&&(Gi=Gi.slice(n+1)),Za(Se,wr),m}finally{Tt=r,wc=!1}}return null}var Bs=[],zs=0,_l=null,vl=0,ei=[],ti=0,es=null,Wi=1,Xi="";function ts(n,r){Bs[zs++]=vl,Bs[zs++]=_l,_l=n,vl=r}function Dp(n,r,l){ei[ti++]=Wi,ei[ti++]=Xi,ei[ti++]=es,es=n;var f=Wi;n=Xi;var m=32-at(f)-1;f&=~(1<<m),l+=1;var y=32-at(r)+m;if(30<y){var T=m-m%5;y=(f&(1<<T)-1).toString(32),f>>=T,m-=T,Wi=1<<32-at(r)+m|l<<m|f,Xi=y+n}else Wi=1<<y|l<<m|f,Xi=n}function Ac(n){n.return!==null&&(ts(n,1),Dp(n,1,0))}function Rc(n){for(;n===_l;)_l=Bs[--zs],Bs[zs]=null,vl=Bs[--zs],Bs[zs]=null;for(;n===es;)es=ei[--ti],ei[ti]=null,Xi=ei[--ti],ei[ti]=null,Wi=ei[--ti],ei[ti]=null}var Yn=null,qn=null,Vt=!1,ci=null;function Ip(n,r){var l=si(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Np(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Yn=n,qn=Er(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Yn=n,qn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=es!==null?{id:Wi,overflow:Xi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=si(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Yn=n,qn=null,!0):!1;default:return!1}}function Cc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bc(n){if(Vt){var r=qn;if(r){var l=r;if(!Np(n,r)){if(Cc(n))throw Error(t(418));r=Er(l.nextSibling);var f=Yn;r&&Np(n,r)?Ip(f,l):(n.flags=n.flags&-4097|2,Vt=!1,Yn=n)}}else{if(Cc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Yn=n}}}function Up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function yl(n){if(n!==Yn)return!1;if(!Vt)return Up(n),Vt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!xc(n.type,n.memoizedProps)),r&&(r=qn)){if(Cc(n))throw Fp(),Error(t(418));for(;r;)Ip(n,r),r=Er(r.nextSibling)}if(Up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){qn=Er(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}qn=null}}else qn=Yn?Er(n.stateNode.nextSibling):null;return!0}function Fp(){for(var n=qn;n;)n=Er(n.nextSibling)}function Hs(){qn=Yn=null,Vt=!1}function Pc(n){ci===null?ci=[n]:ci.push(n)}var iy=R.ReactCurrentBatchConfig;function na(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,y=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===y?r.ref:(r=function(T){var I=m.refs;T===null?delete I[y]:I[y]=T},r._stringRef=y,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function xl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Op(n){var r=n._init;return r(n._payload)}function kp(n){function r(q,V){if(n){var $=q.deletions;$===null?(q.deletions=[V],q.flags|=16):$.push(V)}}function l(q,V){if(!n)return null;for(;V!==null;)r(q,V),V=V.sibling;return null}function f(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function m(q,V){return q=Ir(q,V),q.index=0,q.sibling=null,q}function y(q,V,$){return q.index=$,n?($=q.alternate,$!==null?($=$.index,$<V?(q.flags|=2,V):$):(q.flags|=2,V)):(q.flags|=1048576,V)}function T(q){return n&&q.alternate===null&&(q.flags|=2),q}function I(q,V,$,Te){return V===null||V.tag!==6?(V=Ef($,q.mode,Te),V.return=q,V):(V=m(V,$),V.return=q,V)}function O(q,V,$,Te){var je=$.type;return je===N?ve(q,V,$.props.children,Te,$.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&Op(je)===V.type)?(Te=m(V,$.props),Te.ref=na(q,V,$),Te.return=q,Te):(Te=Wl($.type,$.key,$.props,null,q.mode,Te),Te.ref=na(q,V,$),Te.return=q,Te)}function ee(q,V,$,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=Mf($,q.mode,Te),V.return=q,V):(V=m(V,$.children||[]),V.return=q,V)}function ve(q,V,$,Te,je){return V===null||V.tag!==7?(V=us($,q.mode,Te,je),V.return=q,V):(V=m(V,$),V.return=q,V)}function xe(q,V,$){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Ef(""+V,q.mode,$),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case k:return $=Wl(V.type,V.key,V.props,null,q.mode,$),$.ref=na(q,null,V),$.return=q,$;case F:return V=Mf(V,q.mode,$),V.return=q,V;case oe:var Te=V._init;return xe(q,Te(V._payload),$)}if(We(V)||le(V))return V=us(V,q.mode,$,null),V.return=q,V;xl(q,V)}return null}function ge(q,V,$,Te){var je=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return je!==null?null:I(q,V,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case k:return $.key===je?O(q,V,$,Te):null;case F:return $.key===je?ee(q,V,$,Te):null;case oe:return je=$._init,ge(q,V,je($._payload),Te)}if(We($)||le($))return je!==null?null:ve(q,V,$,Te,null);xl(q,$)}return null}function Ie(q,V,$,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get($)||null,I(V,q,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case k:return q=q.get(Te.key===null?$:Te.key)||null,O(V,q,Te,je);case F:return q=q.get(Te.key===null?$:Te.key)||null,ee(V,q,Te,je);case oe:var $e=Te._init;return Ie(q,V,$,$e(Te._payload),je)}if(We(Te)||le(Te))return q=q.get($)||null,ve(V,q,Te,je,null);xl(V,Te)}return null}function He(q,V,$,Te){for(var je=null,$e=null,Ze=V,nt=V=0,cn=null;Ze!==null&&nt<$.length;nt++){Ze.index>nt?(cn=Ze,Ze=null):cn=Ze.sibling;var At=ge(q,Ze,$[nt],Te);if(At===null){Ze===null&&(Ze=cn);break}n&&Ze&&At.alternate===null&&r(q,Ze),V=y(At,V,nt),$e===null?je=At:$e.sibling=At,$e=At,Ze=cn}if(nt===$.length)return l(q,Ze),Vt&&ts(q,nt),je;if(Ze===null){for(;nt<$.length;nt++)Ze=xe(q,$[nt],Te),Ze!==null&&(V=y(Ze,V,nt),$e===null?je=Ze:$e.sibling=Ze,$e=Ze);return Vt&&ts(q,nt),je}for(Ze=f(q,Ze);nt<$.length;nt++)cn=Ie(Ze,q,nt,$[nt],Te),cn!==null&&(n&&cn.alternate!==null&&Ze.delete(cn.key===null?nt:cn.key),V=y(cn,V,nt),$e===null?je=cn:$e.sibling=cn,$e=cn);return n&&Ze.forEach(function(Nr){return r(q,Nr)}),Vt&&ts(q,nt),je}function Ge(q,V,$,Te){var je=le($);if(typeof je!="function")throw Error(t(150));if($=je.call($),$==null)throw Error(t(151));for(var $e=je=null,Ze=V,nt=V=0,cn=null,At=$.next();Ze!==null&&!At.done;nt++,At=$.next()){Ze.index>nt?(cn=Ze,Ze=null):cn=Ze.sibling;var Nr=ge(q,Ze,At.value,Te);if(Nr===null){Ze===null&&(Ze=cn);break}n&&Ze&&Nr.alternate===null&&r(q,Ze),V=y(Nr,V,nt),$e===null?je=Nr:$e.sibling=Nr,$e=Nr,Ze=cn}if(At.done)return l(q,Ze),Vt&&ts(q,nt),je;if(Ze===null){for(;!At.done;nt++,At=$.next())At=xe(q,At.value,Te),At!==null&&(V=y(At,V,nt),$e===null?je=At:$e.sibling=At,$e=At);return Vt&&ts(q,nt),je}for(Ze=f(q,Ze);!At.done;nt++,At=$.next())At=Ie(Ze,q,nt,At.value,Te),At!==null&&(n&&At.alternate!==null&&Ze.delete(At.key===null?nt:At.key),V=y(At,V,nt),$e===null?je=At:$e.sibling=At,$e=At);return n&&Ze.forEach(function(Uy){return r(q,Uy)}),Vt&&ts(q,nt),je}function $t(q,V,$,Te){if(typeof $=="object"&&$!==null&&$.type===N&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case k:e:{for(var je=$.key,$e=V;$e!==null;){if($e.key===je){if(je=$.type,je===N){if($e.tag===7){l(q,$e.sibling),V=m($e,$.props.children),V.return=q,q=V;break e}}else if($e.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&Op(je)===$e.type){l(q,$e.sibling),V=m($e,$.props),V.ref=na(q,$e,$),V.return=q,q=V;break e}l(q,$e);break}else r(q,$e);$e=$e.sibling}$.type===N?(V=us($.props.children,q.mode,Te,$.key),V.return=q,q=V):(Te=Wl($.type,$.key,$.props,null,q.mode,Te),Te.ref=na(q,V,$),Te.return=q,q=Te)}return T(q);case F:e:{for($e=$.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){l(q,V.sibling),V=m(V,$.children||[]),V.return=q,q=V;break e}else{l(q,V);break}else r(q,V);V=V.sibling}V=Mf($,q.mode,Te),V.return=q,q=V}return T(q);case oe:return $e=$._init,$t(q,V,$e($._payload),Te)}if(We($))return He(q,V,$,Te);if(le($))return Ge(q,V,$,Te);xl(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,V!==null&&V.tag===6?(l(q,V.sibling),V=m(V,$),V.return=q,q=V):(l(q,V),V=Ef($,q.mode,Te),V.return=q,q=V),T(q)):l(q,V)}return $t}var Vs=kp(!0),Bp=kp(!1),Sl=Mr(null),El=null,Gs=null,Lc=null;function Dc(){Lc=Gs=El=null}function Ic(n){var r=Sl.current;zt(Sl),n._currentValue=r}function Nc(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function Ws(n,r){El=n,Lc=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(zn=!0),n.firstContext=null)}function ni(n){var r=n._currentValue;if(Lc!==n)if(n={context:n,memoizedValue:r,next:null},Gs===null){if(El===null)throw Error(t(308));Gs=n,El.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return r}var ns=null;function Uc(n){ns===null?ns=[n]:ns.push(n)}function zp(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,Uc(r)):(l.next=m.next,m.next=l),r.interleaved=l,ji(n,f)}function ji(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Ar=!1;function Fc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Rr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,wt&2){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,ji(n,l)}return m=f.interleaved,m===null?(r.next=r,Uc(f)):(r.next=m.next,m.next=r),f.interleaved=r,ji(n,l)}function Ml(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,an(n,l)}}function Vp(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?m=y=T:y=y.next=T,l=l.next}while(l!==null);y===null?m=y=r:y=y.next=r}else m=y=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Tl(n,r,l,f){var m=n.updateQueue;Ar=!1;var y=m.firstBaseUpdate,T=m.lastBaseUpdate,I=m.shared.pending;if(I!==null){m.shared.pending=null;var O=I,ee=O.next;O.next=null,T===null?y=ee:T.next=ee,T=O;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==T&&(I===null?ve.firstBaseUpdate=ee:I.next=ee,ve.lastBaseUpdate=O))}if(y!==null){var xe=m.baseState;T=0,ve=ee=O=null,I=y;do{var ge=I.lane,Ie=I.eventTime;if((f&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=n,Ge=I;switch(ge=r,Ie=l,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){xe=He.call(Ie,xe,ge);break e}xe=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,ge=typeof He=="function"?He.call(Ie,xe,ge):He,ge==null)break e;xe=re({},xe,ge);break e;case 2:Ar=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=m.effects,ge===null?m.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(ee=ve=Ie,O=xe):ve=ve.next=Ie,T|=ge;if(I=I.next,I===null){if(I=m.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,m.lastBaseUpdate=ge,m.shared.pending=null}}while(!0);if(ve===null&&(O=xe),m.baseState=O,m.firstBaseUpdate=ee,m.lastBaseUpdate=ve,r=m.shared.interleaved,r!==null){m=r;do T|=m.lane,m=m.next;while(m!==r)}else y===null&&(m.shared.lanes=0);ss|=T,n.lanes=T,n.memoizedState=xe}}function Gp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var ia={},wi=Mr(ia),ra=Mr(ia),sa=Mr(ia);function is(n){if(n===ia)throw Error(t(174));return n}function Oc(n,r){switch(Ot(sa,r),Ot(ra,n),Ot(wi,ia),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Xe(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Xe(r,n)}zt(wi),Ot(wi,r)}function Xs(){zt(wi),zt(ra),zt(sa)}function Wp(n){is(sa.current);var r=is(wi.current),l=Xe(r,n.type);r!==l&&(Ot(ra,n),Ot(wi,l))}function kc(n){ra.current===n&&(zt(wi),zt(ra))}var Gt=Mr(0);function wl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Bc=[];function zc(){for(var n=0;n<Bc.length;n++)Bc[n]._workInProgressVersionPrimary=null;Bc.length=0}var Al=R.ReactCurrentDispatcher,Hc=R.ReactCurrentBatchConfig,rs=0,Wt=null,en=null,ln=null,Rl=!1,oa=!1,aa=0,ry=0;function Sn(){throw Error(t(321))}function Vc(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!ui(n[l],r[l]))return!1;return!0}function Gc(n,r,l,f,m,y){if(rs=y,Wt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Al.current=n===null||n.memoizedState===null?ly:uy,n=l(f,m),oa){y=0;do{if(oa=!1,aa=0,25<=y)throw Error(t(301));y+=1,ln=en=null,r.updateQueue=null,Al.current=cy,n=l(f,m)}while(oa)}if(Al.current=Pl,r=en!==null&&en.next!==null,rs=0,ln=en=Wt=null,Rl=!1,r)throw Error(t(300));return n}function Wc(){var n=aa!==0;return aa=0,n}function Ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Wt.memoizedState=ln=n:ln=ln.next=n,ln}function ii(){if(en===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var r=ln===null?Wt.memoizedState:ln.next;if(r!==null)ln=r,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},ln===null?Wt.memoizedState=ln=n:ln=ln.next=n}return ln}function la(n,r){return typeof r=="function"?r(n):r}function Xc(n){var r=ii(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=en,m=f.baseQueue,y=l.pending;if(y!==null){if(m!==null){var T=m.next;m.next=y.next,y.next=T}f.baseQueue=m=y,l.pending=null}if(m!==null){y=m.next,f=f.baseState;var I=T=null,O=null,ee=y;do{var ve=ee.lane;if((rs&ve)===ve)O!==null&&(O=O.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),f=ee.hasEagerState?ee.eagerState:n(f,ee.action);else{var xe={lane:ve,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};O===null?(I=O=xe,T=f):O=O.next=xe,Wt.lanes|=ve,ss|=ve}ee=ee.next}while(ee!==null&&ee!==y);O===null?T=f:O.next=I,ui(f,r.memoizedState)||(zn=!0),r.memoizedState=f,r.baseState=T,r.baseQueue=O,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do y=m.lane,Wt.lanes|=y,ss|=y,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function jc(n){var r=ii(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,y=r.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do y=n(y,T.action),T=T.next;while(T!==m);ui(y,r.memoizedState)||(zn=!0),r.memoizedState=y,r.baseQueue===null&&(r.baseState=y),l.lastRenderedState=y}return[y,f]}function Xp(){}function jp(n,r){var l=Wt,f=ii(),m=r(),y=!ui(f.memoizedState,m);if(y&&(f.memoizedState=m,zn=!0),f=f.queue,Yc(Kp.bind(null,l,f,n),[n]),f.getSnapshot!==r||y||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,ua(9,qp.bind(null,l,f,m,r),void 0,null),un===null)throw Error(t(349));rs&30||Yp(l,r,m)}return m}function Yp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function qp(n,r,l,f){r.value=l,r.getSnapshot=f,$p(r)&&Zp(n)}function Kp(n,r,l){return l(function(){$p(r)&&Zp(n)})}function $p(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!ui(n,l)}catch{return!0}}function Zp(n){var r=ji(n,1);r!==null&&pi(r,n,1,-1)}function Qp(n){var r=Ai();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:n},r.queue=n,n=n.dispatch=ay.bind(null,Wt,n),[r.memoizedState,n]}function ua(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function Jp(){return ii().memoizedState}function Cl(n,r,l,f){var m=Ai();Wt.flags|=n,m.memoizedState=ua(1|r,l,void 0,f===void 0?null:f)}function bl(n,r,l,f){var m=ii();f=f===void 0?null:f;var y=void 0;if(en!==null){var T=en.memoizedState;if(y=T.destroy,f!==null&&Vc(f,T.deps)){m.memoizedState=ua(r,l,y,f);return}}Wt.flags|=n,m.memoizedState=ua(1|r,l,y,f)}function em(n,r){return Cl(8390656,8,n,r)}function Yc(n,r){return bl(2048,8,n,r)}function tm(n,r){return bl(4,2,n,r)}function nm(n,r){return bl(4,4,n,r)}function im(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function rm(n,r,l){return l=l!=null?l.concat([n]):null,bl(4,4,im.bind(null,r,n),l)}function qc(){}function sm(n,r){var l=ii();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Vc(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function om(n,r){var l=ii();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Vc(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function am(n,r,l){return rs&21?(ui(l,r)||(l=Ut(),Wt.lanes|=l,ss|=l,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,zn=!0),n.memoizedState=l)}function sy(n,r){var l=Tt;Tt=l!==0&&4>l?l:4,n(!0);var f=Hc.transition;Hc.transition={};try{n(!1),r()}finally{Tt=l,Hc.transition=f}}function lm(){return ii().memoizedState}function oy(n,r,l){var f=Lr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},um(n))cm(r,l);else if(l=zp(n,r,l,f),l!==null){var m=Ln();pi(l,n,f,m),fm(l,r,f)}}function ay(n,r,l){var f=Lr(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(um(n))cm(r,m);else{var y=n.alternate;if(n.lanes===0&&(y===null||y.lanes===0)&&(y=r.lastRenderedReducer,y!==null))try{var T=r.lastRenderedState,I=y(T,l);if(m.hasEagerState=!0,m.eagerState=I,ui(I,T)){var O=r.interleaved;O===null?(m.next=m,Uc(r)):(m.next=O.next,O.next=m),r.interleaved=m;return}}catch{}finally{}l=zp(n,r,m,f),l!==null&&(m=Ln(),pi(l,n,f,m),fm(l,r,f))}}function um(n){var r=n.alternate;return n===Wt||r!==null&&r===Wt}function cm(n,r){oa=Rl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function fm(n,r,l){if(l&4194240){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,an(n,l)}}var Pl={readContext:ni,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},ly={readContext:ni,useCallback:function(n,r){return Ai().memoizedState=[n,r===void 0?null:r],n},useContext:ni,useEffect:em,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Cl(4194308,4,im.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Cl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Cl(4,2,n,r)},useMemo:function(n,r){var l=Ai();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Ai();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=oy.bind(null,Wt,n),[f.memoizedState,n]},useRef:function(n){var r=Ai();return n={current:n},r.memoizedState=n},useState:Qp,useDebugValue:qc,useDeferredValue:function(n){return Ai().memoizedState=n},useTransition:function(){var n=Qp(!1),r=n[0];return n=sy.bind(null,n[1]),Ai().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=Wt,m=Ai();if(Vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),un===null)throw Error(t(349));rs&30||Yp(f,r,l)}m.memoizedState=l;var y={value:l,getSnapshot:r};return m.queue=y,em(Kp.bind(null,f,y,n),[n]),f.flags|=2048,ua(9,qp.bind(null,f,y,l,r),void 0,null),l},useId:function(){var n=Ai(),r=un.identifierPrefix;if(Vt){var l=Xi,f=Wi;l=(f&~(1<<32-at(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=aa++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=ry++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},uy={readContext:ni,useCallback:sm,useContext:ni,useEffect:Yc,useImperativeHandle:rm,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Xc,useRef:Jp,useState:function(){return Xc(la)},useDebugValue:qc,useDeferredValue:function(n){var r=ii();return am(r,en.memoizedState,n)},useTransition:function(){var n=Xc(la)[0],r=ii().memoizedState;return[n,r]},useMutableSource:Xp,useSyncExternalStore:jp,useId:lm,unstable_isNewReconciler:!1},cy={readContext:ni,useCallback:sm,useContext:ni,useEffect:Yc,useImperativeHandle:rm,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:jc,useRef:Jp,useState:function(){return jc(la)},useDebugValue:qc,useDeferredValue:function(n){var r=ii();return en===null?r.memoizedState=n:am(r,en.memoizedState,n)},useTransition:function(){var n=jc(la)[0],r=ii().memoizedState;return[n,r]},useMutableSource:Xp,useSyncExternalStore:jp,useId:lm,unstable_isNewReconciler:!1};function fi(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Kc(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:re({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Ll={isMounted:function(n){return(n=n._reactInternals)?Ei(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Ln(),m=Lr(n),y=Yi(f,m);y.payload=r,l!=null&&(y.callback=l),r=Rr(n,y,m),r!==null&&(pi(r,n,m,f),Ml(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Ln(),m=Lr(n),y=Yi(f,m);y.tag=1,y.payload=r,l!=null&&(y.callback=l),r=Rr(n,y,m),r!==null&&(pi(r,n,m,f),Ml(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Ln(),f=Lr(n),m=Yi(l,f);m.tag=2,r!=null&&(m.callback=r),r=Rr(n,m,f),r!==null&&(pi(r,n,f,l),Ml(r,n,f))}};function dm(n,r,l,f,m,y,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,y,T):r.prototype&&r.prototype.isPureReactComponent?!Ko(l,f)||!Ko(m,y):!0}function hm(n,r,l){var f=!1,m=Tr,y=r.contextType;return typeof y=="object"&&y!==null?y=ni(y):(m=Bn(r)?Jr:xn.current,f=r.contextTypes,y=(f=f!=null)?ks(n,m):Tr),r=new r(l,y),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ll,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=y),r}function pm(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&Ll.enqueueReplaceState(r,r.state,null)}function $c(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},Fc(n);var y=r.contextType;typeof y=="object"&&y!==null?m.context=ni(y):(y=Bn(r)?Jr:xn.current,m.context=ks(n,y)),m.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Kc(n,r,y,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Ll.enqueueReplaceState(m,m.state,null),Tl(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function js(n,r){try{var l="",f=r;do l+=he(f),f=f.return;while(f);var m=l}catch(y){m=`
Error generating stack: `+y.message+`
`+y.stack}return{value:n,source:r,stack:m,digest:null}}function Zc(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Qc(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var fy=typeof WeakMap=="function"?WeakMap:Map;function mm(n,r,l){l=Yi(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){kl||(kl=!0,pf=f),Qc(n,r)},l}function gm(n,r,l){l=Yi(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){Qc(n,r)}}var y=n.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){Qc(n,r),typeof f!="function"&&(br===null?br=new Set([this]):br.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function _m(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new fy;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=wy.bind(null,n,r,l),r.then(n,n))}function vm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function ym(n,r,l,f,m){return n.mode&1?(n.flags|=65536,n.lanes=m,n):(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Yi(-1,1),r.tag=2,Rr(l,r,1))),l.lanes|=1),n)}var dy=R.ReactCurrentOwner,zn=!1;function Pn(n,r,l,f){r.child=n===null?Bp(r,null,l,f):Vs(r,n.child,l,f)}function xm(n,r,l,f,m){l=l.render;var y=r.ref;return Ws(r,m),f=Gc(n,r,l,f,y,m),l=Wc(),n!==null&&!zn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,qi(n,r,m)):(Vt&&l&&Ac(r),r.flags|=1,Pn(n,r,f,m),r.child)}function Sm(n,r,l,f,m){if(n===null){var y=l.type;return typeof y=="function"&&!Sf(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=y,Em(n,r,y,f,m)):(n=Wl(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(y=n.child,!(n.lanes&m)){var T=y.memoizedProps;if(l=l.compare,l=l!==null?l:Ko,l(T,f)&&n.ref===r.ref)return qi(n,r,m)}return r.flags|=1,n=Ir(y,f),n.ref=r.ref,n.return=r,r.child=n}function Em(n,r,l,f,m){if(n!==null){var y=n.memoizedProps;if(Ko(y,f)&&n.ref===r.ref)if(zn=!1,r.pendingProps=f=y,(n.lanes&m)!==0)n.flags&131072&&(zn=!0);else return r.lanes=n.lanes,qi(n,r,m)}return Jc(n,r,l,f,m)}function Mm(n,r,l){var f=r.pendingProps,m=f.children,y=n!==null?n.memoizedState:null;if(f.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(qs,Kn),Kn|=l;else{if(!(l&1073741824))return n=y!==null?y.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ot(qs,Kn),Kn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=y!==null?y.baseLanes:l,Ot(qs,Kn),Kn|=f}else y!==null?(f=y.baseLanes|l,r.memoizedState=null):f=l,Ot(qs,Kn),Kn|=f;return Pn(n,r,m,l),r.child}function Tm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Jc(n,r,l,f,m){var y=Bn(l)?Jr:xn.current;return y=ks(r,y),Ws(r,m),l=Gc(n,r,l,f,y,m),f=Wc(),n!==null&&!zn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,qi(n,r,m)):(Vt&&f&&Ac(r),r.flags|=1,Pn(n,r,l,m),r.child)}function wm(n,r,l,f,m){if(Bn(l)){var y=!0;ml(r)}else y=!1;if(Ws(r,m),r.stateNode===null)Il(n,r),hm(r,l,f),$c(r,l,f,m),f=!0;else if(n===null){var T=r.stateNode,I=r.memoizedProps;T.props=I;var O=T.context,ee=l.contextType;typeof ee=="object"&&ee!==null?ee=ni(ee):(ee=Bn(l)?Jr:xn.current,ee=ks(r,ee));var ve=l.getDerivedStateFromProps,xe=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";xe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==f||O!==ee)&&pm(r,T,f,ee),Ar=!1;var ge=r.memoizedState;T.state=ge,Tl(r,f,T,m),O=r.memoizedState,I!==f||ge!==O||kn.current||Ar?(typeof ve=="function"&&(Kc(r,l,ve,f),O=r.memoizedState),(I=Ar||dm(r,l,I,f,ge,O,ee))?(xe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=O),T.props=f,T.state=O,T.context=ee,f=I):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{T=r.stateNode,Hp(n,r),I=r.memoizedProps,ee=r.type===r.elementType?I:fi(r.type,I),T.props=ee,xe=r.pendingProps,ge=T.context,O=l.contextType,typeof O=="object"&&O!==null?O=ni(O):(O=Bn(l)?Jr:xn.current,O=ks(r,O));var Ie=l.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==xe||ge!==O)&&pm(r,T,f,O),Ar=!1,ge=r.memoizedState,T.state=ge,Tl(r,f,T,m);var He=r.memoizedState;I!==xe||ge!==He||kn.current||Ar?(typeof Ie=="function"&&(Kc(r,l,Ie,f),He=r.memoizedState),(ee=Ar||dm(r,l,ee,f,ge,He,O)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,He,O),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,He,O)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=He),T.props=f,T.state=He,T.context=O,f=ee):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),f=!1)}return ef(n,r,l,f,y,m)}function ef(n,r,l,f,m,y){Tm(n,r);var T=(r.flags&128)!==0;if(!f&&!T)return m&&Pp(r,l,!1),qi(n,r,y);f=r.stateNode,dy.current=r;var I=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&T?(r.child=Vs(r,n.child,null,y),r.child=Vs(r,null,I,y)):Pn(n,r,I,y),r.memoizedState=f.state,m&&Pp(r,l,!0),r.child}function Am(n){var r=n.stateNode;r.pendingContext?Cp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Cp(n,r.context,!1),Oc(n,r.containerInfo)}function Rm(n,r,l,f,m){return Hs(),Pc(m),r.flags|=256,Pn(n,r,l,f),r.child}var tf={dehydrated:null,treeContext:null,retryLane:0};function nf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cm(n,r,l){var f=r.pendingProps,m=Gt.current,y=!1,T=(r.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(m&2)!==0),I?(y=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Ot(Gt,m&1),n===null)return bc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(T=f.children,n=f.fallback,y?(f=r.mode,y=r.child,T={mode:"hidden",children:T},!(f&1)&&y!==null?(y.childLanes=0,y.pendingProps=T):y=Xl(T,f,0,null),n=us(n,f,l,null),y.return=r,n.return=r,y.sibling=n,r.child=y,r.child.memoizedState=nf(l),r.memoizedState=tf,n):rf(r,T));if(m=n.memoizedState,m!==null&&(I=m.dehydrated,I!==null))return hy(n,r,T,f,I,m,l);if(y){y=f.fallback,T=r.mode,m=n.child,I=m.sibling;var O={mode:"hidden",children:f.children};return!(T&1)&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=O,r.deletions=null):(f=Ir(m,O),f.subtreeFlags=m.subtreeFlags&14680064),I!==null?y=Ir(I,y):(y=us(y,T,l,null),y.flags|=2),y.return=r,f.return=r,f.sibling=y,r.child=f,f=y,y=r.child,T=n.child.memoizedState,T=T===null?nf(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},y.memoizedState=T,y.childLanes=n.childLanes&~l,r.memoizedState=tf,f}return y=n.child,n=y.sibling,f=Ir(y,{mode:"visible",children:f.children}),!(r.mode&1)&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function rf(n,r){return r=Xl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Dl(n,r,l,f){return f!==null&&Pc(f),Vs(r,n.child,null,l),n=rf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function hy(n,r,l,f,m,y,T){if(l)return r.flags&256?(r.flags&=-257,f=Zc(Error(t(422))),Dl(n,r,T,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(y=f.fallback,m=r.mode,f=Xl({mode:"visible",children:f.children},m,0,null),y=us(y,m,T,null),y.flags|=2,f.return=r,y.return=r,f.sibling=y,r.child=f,r.mode&1&&Vs(r,n.child,null,T),r.child.memoizedState=nf(T),r.memoizedState=tf,y);if(!(r.mode&1))return Dl(n,r,T,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var I=f.dgst;return f=I,y=Error(t(419)),f=Zc(y,f,void 0),Dl(n,r,T,f)}if(I=(T&n.childLanes)!==0,zn||I){if(f=un,f!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(f.suspendedLanes|T)?0:m,m!==0&&m!==y.retryLane&&(y.retryLane=m,ji(n,m),pi(f,n,m,-1))}return xf(),f=Zc(Error(t(421))),Dl(n,r,T,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=Ay.bind(null,n),m._reactRetry=r,null):(n=y.treeContext,qn=Er(m.nextSibling),Yn=r,Vt=!0,ci=null,n!==null&&(ei[ti++]=Wi,ei[ti++]=Xi,ei[ti++]=es,Wi=n.id,Xi=n.overflow,es=r),r=rf(r,f.children),r.flags|=4096,r)}function bm(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),Nc(n.return,r,l)}function sf(n,r,l,f,m){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=f,y.tail=l,y.tailMode=m)}function Pm(n,r,l){var f=r.pendingProps,m=f.revealOrder,y=f.tail;if(Pn(n,r,f.children,l),f=Gt.current,f&2)f=f&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&bm(n,l,r);else if(n.tag===19)bm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Ot(Gt,f),!(r.mode&1))r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&wl(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),sf(r,!1,m,l,y);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&wl(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}sf(r,!0,l,null,y);break;case"together":sf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Il(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function qi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),ss|=r.lanes,!(l&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Ir(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Ir(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function py(n,r,l){switch(r.tag){case 3:Am(r),Hs();break;case 5:Wp(r);break;case 1:Bn(r.type)&&ml(r);break;case 4:Oc(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;Ot(Sl,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Ot(Gt,Gt.current&1),r.flags|=128,null):l&r.child.childLanes?Cm(n,r,l):(Ot(Gt,Gt.current&1),n=qi(n,r,l),n!==null?n.sibling:null);Ot(Gt,Gt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,n.flags&128){if(f)return Pm(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ot(Gt,Gt.current),f)break;return null;case 22:case 23:return r.lanes=0,Mm(n,r,l)}return qi(n,r,l)}var Lm,of,Dm,Im;Lm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},of=function(){},Dm=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,is(wi.current);var y=null;switch(l){case"input":m=B(n,m),f=B(n,f),y=[];break;case"select":m=re({},m,{value:void 0}),f=re({},f,{value:void 0}),y=[];break;case"textarea":m=w(n,m),f=w(n,f),y=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=dl)}pt(l,f);var T;l=null;for(ee in m)if(!f.hasOwnProperty(ee)&&m.hasOwnProperty(ee)&&m[ee]!=null)if(ee==="style"){var I=m[ee];for(T in I)I.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?y||(y=[]):(y=y||[]).push(ee,null));for(ee in f){var O=f[ee];if(I=m!=null?m[ee]:void 0,f.hasOwnProperty(ee)&&O!==I&&(O!=null||I!=null))if(ee==="style")if(I){for(T in I)!I.hasOwnProperty(T)||O&&O.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in O)O.hasOwnProperty(T)&&I[T]!==O[T]&&(l||(l={}),l[T]=O[T])}else l||(y||(y=[]),y.push(ee,l)),l=O;else ee==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(y=y||[]).push(ee,O)):ee==="children"?typeof O!="string"&&typeof O!="number"||(y=y||[]).push(ee,""+O):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(O!=null&&ee==="onScroll"&&Bt("scroll",n),y||I===O||(y=[])):(y=y||[]).push(ee,O))}l&&(y=y||[]).push("style",l);var ee=y;(r.updateQueue=ee)&&(r.flags|=4)}},Im=function(n,r,l,f){l!==f&&(r.flags|=4)};function ca(n,r){if(!Vt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function En(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function my(n,r,l){var f=r.pendingProps;switch(Rc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(r),null;case 1:return Bn(r.type)&&pl(),En(r),null;case 3:return f=r.stateNode,Xs(),zt(kn),zt(xn),zc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(yl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ci!==null&&(_f(ci),ci=null))),of(n,r),En(r),null;case 5:kc(r);var m=is(sa.current);if(l=r.type,n!==null&&r.stateNode!=null)Dm(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return En(r),null}if(n=is(wi.current),yl(r)){f=r.stateNode,l=r.type;var y=r.memoizedProps;switch(f[Ti]=r,f[ea]=y,n=(r.mode&1)!==0,l){case"dialog":Bt("cancel",f),Bt("close",f);break;case"iframe":case"object":case"embed":Bt("load",f);break;case"video":case"audio":for(m=0;m<Zo.length;m++)Bt(Zo[m],f);break;case"source":Bt("error",f);break;case"img":case"image":case"link":Bt("error",f),Bt("load",f);break;case"details":Bt("toggle",f);break;case"input":Rn(f,y),Bt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!y.multiple},Bt("invalid",f);break;case"textarea":Z(f,y),Bt("invalid",f)}pt(l,y),m=null;for(var T in y)if(y.hasOwnProperty(T)){var I=y[T];T==="children"?typeof I=="string"?f.textContent!==I&&(y.suppressHydrationWarning!==!0&&fl(f.textContent,I,n),m=["children",I]):typeof I=="number"&&f.textContent!==""+I&&(y.suppressHydrationWarning!==!0&&fl(f.textContent,I,n),m=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Bt("scroll",f)}switch(l){case"input":Dt(f),Ye(f,y,!0);break;case"textarea":Dt(f),_e(f);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(f.onclick=dl)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=T.createElement(l,{is:f.is}):(n=T.createElement(l),l==="select"&&(T=n,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):n=T.createElementNS(n,l),n[Ti]=r,n[ea]=f,Lm(n,r,!1,!1),r.stateNode=n;e:{switch(T=rt(l,f),l){case"dialog":Bt("cancel",n),Bt("close",n),m=f;break;case"iframe":case"object":case"embed":Bt("load",n),m=f;break;case"video":case"audio":for(m=0;m<Zo.length;m++)Bt(Zo[m],n);m=f;break;case"source":Bt("error",n),m=f;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),m=f;break;case"details":Bt("toggle",n),m=f;break;case"input":Rn(n,f),m=B(n,f),Bt("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=re({},f,{value:void 0}),Bt("invalid",n);break;case"textarea":Z(n,f),m=w(n,f),Bt("invalid",n);break;default:m=f}pt(l,m),I=m;for(y in I)if(I.hasOwnProperty(y)){var O=I[y];y==="style"?et(n,O):y==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Fe(n,O)):y==="children"?typeof O=="string"?(l!=="textarea"||O!=="")&&ft(n,O):typeof O=="number"&&ft(n,""+O):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?O!=null&&y==="onScroll"&&Bt("scroll",n):O!=null&&L(n,y,O,T))}switch(l){case"input":Dt(n),Ye(n,f,!1);break;case"textarea":Dt(n),_e(n);break;case"option":f.value!=null&&n.setAttribute("value",""+we(f.value));break;case"select":n.multiple=!!f.multiple,y=f.value,y!=null?D(n,!!f.multiple,y,!1):f.defaultValue!=null&&D(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=dl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return En(r),null;case 6:if(n&&r.stateNode!=null)Im(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=is(sa.current),is(wi.current),yl(r)){if(f=r.stateNode,l=r.memoizedProps,f[Ti]=r,(y=f.nodeValue!==l)&&(n=Yn,n!==null))switch(n.tag){case 3:fl(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fl(f.nodeValue,l,(n.mode&1)!==0)}y&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Ti]=r,r.stateNode=f}return En(r),null;case 13:if(zt(Gt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&qn!==null&&r.mode&1&&!(r.flags&128))Fp(),Hs(),r.flags|=98560,y=!1;else if(y=yl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!y)throw Error(t(318));if(y=r.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Ti]=r}else Hs(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;En(r),y=!1}else ci!==null&&(_f(ci),ci=null),y=!0;if(!y)return r.flags&65536?r:null}return r.flags&128?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,r.mode&1&&(n===null||Gt.current&1?tn===0&&(tn=3):xf())),r.updateQueue!==null&&(r.flags|=4),En(r),null);case 4:return Xs(),of(n,r),n===null&&Qo(r.stateNode.containerInfo),En(r),null;case 10:return Ic(r.type._context),En(r),null;case 17:return Bn(r.type)&&pl(),En(r),null;case 19:if(zt(Gt),y=r.memoizedState,y===null)return En(r),null;if(f=(r.flags&128)!==0,T=y.rendering,T===null)if(f)ca(y,!1);else{if(tn!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(T=wl(n),T!==null){for(r.flags|=128,ca(y,!1),f=T.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)y=l,n=f,y.flags&=14680066,T=y.alternate,T===null?(y.childLanes=0,y.lanes=n,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=T.childLanes,y.lanes=T.lanes,y.child=T.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=T.memoizedProps,y.memoizedState=T.memoizedState,y.updateQueue=T.updateQueue,y.type=T.type,n=T.dependencies,y.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ot(Gt,Gt.current&1|2),r.child}n=n.sibling}y.tail!==null&&K()>Ks&&(r.flags|=128,f=!0,ca(y,!1),r.lanes=4194304)}else{if(!f)if(n=wl(T),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ca(y,!0),y.tail===null&&y.tailMode==="hidden"&&!T.alternate&&!Vt)return En(r),null}else 2*K()-y.renderingStartTime>Ks&&l!==1073741824&&(r.flags|=128,f=!0,ca(y,!1),r.lanes=4194304);y.isBackwards?(T.sibling=r.child,r.child=T):(l=y.last,l!==null?l.sibling=T:r.child=T,y.last=T)}return y.tail!==null?(r=y.tail,y.rendering=r,y.tail=r.sibling,y.renderingStartTime=K(),r.sibling=null,l=Gt.current,Ot(Gt,f?l&1|2:l&1),r):(En(r),null);case 22:case 23:return yf(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&r.mode&1?Kn&1073741824&&(En(r),r.subtreeFlags&6&&(r.flags|=8192)):En(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function gy(n,r){switch(Rc(r),r.tag){case 1:return Bn(r.type)&&pl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Xs(),zt(kn),zt(xn),zc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return kc(r),null;case 13:if(zt(Gt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Hs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return zt(Gt),null;case 4:return Xs(),null;case 10:return Ic(r.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var Nl=!1,Mn=!1,_y=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ys(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Kt(n,r,f)}else l.current=null}function af(n,r,l){try{l()}catch(f){Kt(n,r,f)}}var Nm=!1;function vy(n,r){if(vc=el,n=dp(),cc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,y=f.focusNode;f=f.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var T=0,I=-1,O=-1,ee=0,ve=0,xe=n,ge=null;t:for(;;){for(var Ie;xe!==l||m!==0&&xe.nodeType!==3||(I=T+m),xe!==y||f!==0&&xe.nodeType!==3||(O=T+f),xe.nodeType===3&&(T+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)ge=xe,xe=Ie;for(;;){if(xe===n)break t;if(ge===l&&++ee===m&&(I=T),ge===y&&++ve===f&&(O=T),(Ie=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Ie}l=I===-1||O===-1?null:{start:I,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(yc={focusedElem:n,selectionRange:l},el=!1,Oe=r;Oe!==null;)if(r=Oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Oe=n;else for(;Oe!==null;){r=Oe;try{var He=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,$t=He.memoizedState,q=r.stateNode,V=q.getSnapshotBeforeUpdate(r.elementType===r.type?Ge:fi(r.type,Ge),$t);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var $=r.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Kt(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,Oe=n;break}Oe=r.return}return He=Nm,Nm=!1,He}function fa(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var y=m.destroy;m.destroy=void 0,y!==void 0&&af(r,l,y)}m=m.next}while(m!==f)}}function Ul(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function lf(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Um(n){var r=n.alternate;r!==null&&(n.alternate=null,Um(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ti],delete r[ea],delete r[Mc],delete r[ey],delete r[ty])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Fm(n){return n.tag===5||n.tag===3||n.tag===4}function Om(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=dl));else if(f!==4&&(n=n.child,n!==null))for(uf(n,r,l),n=n.sibling;n!==null;)uf(n,r,l),n=n.sibling}function cf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(cf(n,r,l),n=n.sibling;n!==null;)cf(n,r,l),n=n.sibling}var mn=null,di=!1;function Cr(n,r,l){for(l=l.child;l!==null;)km(n,r,l),l=l.sibling}function km(n,r,l){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Je,l)}catch{}switch(l.tag){case 5:Mn||Ys(l,r);case 6:var f=mn,m=di;mn=null,Cr(n,r,l),mn=f,di=m,mn!==null&&(di?(n=mn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):mn.removeChild(l.stateNode));break;case 18:mn!==null&&(di?(n=mn,l=l.stateNode,n.nodeType===8?Ec(n.parentNode,l):n.nodeType===1&&Ec(n,l),Go(n)):Ec(mn,l.stateNode));break;case 4:f=mn,m=di,mn=l.stateNode.containerInfo,di=!0,Cr(n,r,l),mn=f,di=m;break;case 0:case 11:case 14:case 15:if(!Mn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var y=m,T=y.destroy;y=y.tag,T!==void 0&&(y&2||y&4)&&af(l,r,T),m=m.next}while(m!==f)}Cr(n,r,l);break;case 1:if(!Mn&&(Ys(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(I){Kt(l,r,I)}Cr(n,r,l);break;case 21:Cr(n,r,l);break;case 22:l.mode&1?(Mn=(f=Mn)||l.memoizedState!==null,Cr(n,r,l),Mn=f):Cr(n,r,l);break;default:Cr(n,r,l)}}function Bm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new _y),r.forEach(function(f){var m=Ry.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function hi(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var y=n,T=r,I=T;e:for(;I!==null;){switch(I.tag){case 5:mn=I.stateNode,di=!1;break e;case 3:mn=I.stateNode.containerInfo,di=!0;break e;case 4:mn=I.stateNode.containerInfo,di=!0;break e}I=I.return}if(mn===null)throw Error(t(160));km(y,T,m),mn=null,di=!1;var O=m.alternate;O!==null&&(O.return=null),m.return=null}catch(ee){Kt(m,r,ee)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)zm(r,n),r=r.sibling}function zm(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hi(r,n),Ri(n),f&4){try{fa(3,n,n.return),Ul(3,n)}catch(Ge){Kt(n,n.return,Ge)}try{fa(5,n,n.return)}catch(Ge){Kt(n,n.return,Ge)}}break;case 1:hi(r,n),Ri(n),f&512&&l!==null&&Ys(l,l.return);break;case 5:if(hi(r,n),Ri(n),f&512&&l!==null&&Ys(l,l.return),n.flags&32){var m=n.stateNode;try{ft(m,"")}catch(Ge){Kt(n,n.return,Ge)}}if(f&4&&(m=n.stateNode,m!=null)){var y=n.memoizedProps,T=l!==null?l.memoizedProps:y,I=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{I==="input"&&y.type==="radio"&&y.name!=null&&gt(m,y),rt(I,T);var ee=rt(I,y);for(T=0;T<O.length;T+=2){var ve=O[T],xe=O[T+1];ve==="style"?et(m,xe):ve==="dangerouslySetInnerHTML"?Fe(m,xe):ve==="children"?ft(m,xe):L(m,ve,xe,ee)}switch(I){case"input":ht(m,y);break;case"textarea":me(m,y);break;case"select":var ge=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!y.multiple;var Ie=y.value;Ie!=null?D(m,!!y.multiple,Ie,!1):ge!==!!y.multiple&&(y.defaultValue!=null?D(m,!!y.multiple,y.defaultValue,!0):D(m,!!y.multiple,y.multiple?[]:"",!1))}m[ea]=y}catch(Ge){Kt(n,n.return,Ge)}}break;case 6:if(hi(r,n),Ri(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,y=n.memoizedProps;try{m.nodeValue=y}catch(Ge){Kt(n,n.return,Ge)}}break;case 3:if(hi(r,n),Ri(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Go(r.containerInfo)}catch(Ge){Kt(n,n.return,Ge)}break;case 4:hi(r,n),Ri(n);break;case 13:hi(r,n),Ri(n),m=n.child,m.flags&8192&&(y=m.memoizedState!==null,m.stateNode.isHidden=y,!y||m.alternate!==null&&m.alternate.memoizedState!==null||(hf=K())),f&4&&Bm(n);break;case 22:if(ve=l!==null&&l.memoizedState!==null,n.mode&1?(Mn=(ee=Mn)||ve,hi(r,n),Mn=ee):hi(r,n),Ri(n),f&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!ve&&n.mode&1)for(Oe=n,ve=n.child;ve!==null;){for(xe=Oe=ve;Oe!==null;){switch(ge=Oe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:fa(4,ge,ge.return);break;case 1:Ys(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){f=ge,l=ge.return;try{r=f,He.props=r.memoizedProps,He.state=r.memoizedState,He.componentWillUnmount()}catch(Ge){Kt(f,l,Ge)}}break;case 5:Ys(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Gm(xe);continue}}Ie!==null?(Ie.return=ge,Oe=Ie):Gm(xe)}ve=ve.sibling}e:for(ve=null,xe=n;;){if(xe.tag===5){if(ve===null){ve=xe;try{m=xe.stateNode,ee?(y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(I=xe.stateNode,O=xe.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=Ke("display",T))}catch(Ge){Kt(n,n.return,Ge)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(Ge){Kt(n,n.return,Ge)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:hi(r,n),Ri(n),f&4&&Bm(n);break;case 21:break;default:hi(r,n),Ri(n)}}function Ri(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Fm(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(ft(m,""),f.flags&=-33);var y=Om(n);cf(n,y,m);break;case 3:case 4:var T=f.stateNode.containerInfo,I=Om(n);uf(n,I,T);break;default:throw Error(t(161))}}catch(O){Kt(n,n.return,O)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function yy(n,r,l){Oe=n,Hm(n)}function Hm(n,r,l){for(var f=(n.mode&1)!==0;Oe!==null;){var m=Oe,y=m.child;if(m.tag===22&&f){var T=m.memoizedState!==null||Nl;if(!T){var I=m.alternate,O=I!==null&&I.memoizedState!==null||Mn;I=Nl;var ee=Mn;if(Nl=T,(Mn=O)&&!ee)for(Oe=m;Oe!==null;)T=Oe,O=T.child,T.tag===22&&T.memoizedState!==null?Wm(m):O!==null?(O.return=T,Oe=O):Wm(m);for(;y!==null;)Oe=y,Hm(y),y=y.sibling;Oe=m,Nl=I,Mn=ee}Vm(n)}else m.subtreeFlags&8772&&y!==null?(y.return=m,Oe=y):Vm(n)}}function Vm(n){for(;Oe!==null;){var r=Oe;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Mn||Ul(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!Mn)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:fi(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var y=r.updateQueue;y!==null&&Gp(r,y,f);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Gp(r,T,l)}break;case 5:var I=r.stateNode;if(l===null&&r.flags&4){l=I;var O=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&l.focus();break;case"img":O.src&&(l.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ee=r.alternate;if(ee!==null){var ve=ee.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&Go(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||r.flags&512&&lf(r)}catch(ge){Kt(r,r.return,ge)}}if(r===n){Oe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function Gm(n){for(;Oe!==null;){var r=Oe;if(r===n){Oe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function Wm(n){for(;Oe!==null;){var r=Oe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Ul(4,r)}catch(O){Kt(r,l,O)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(O){Kt(r,m,O)}}var y=r.return;try{lf(r)}catch(O){Kt(r,y,O)}break;case 5:var T=r.return;try{lf(r)}catch(O){Kt(r,T,O)}}}catch(O){Kt(r,r.return,O)}if(r===n){Oe=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Oe=I;break}Oe=r.return}}var xy=Math.ceil,Fl=R.ReactCurrentDispatcher,ff=R.ReactCurrentOwner,ri=R.ReactCurrentBatchConfig,wt=0,un=null,Zt=null,gn=0,Kn=0,qs=Mr(0),tn=0,da=null,ss=0,Ol=0,df=0,ha=null,Hn=null,hf=0,Ks=1/0,Ki=null,kl=!1,pf=null,br=null,Bl=!1,Pr=null,zl=0,pa=0,mf=null,Hl=-1,Vl=0;function Ln(){return wt&6?K():Hl!==-1?Hl:Hl=K()}function Lr(n){return n.mode&1?wt&2&&gn!==0?gn&-gn:iy.transition!==null?(Vl===0&&(Vl=Ut()),Vl):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:jh(n.type)),n):1}function pi(n,r,l,f){if(50<pa)throw pa=0,mf=null,Error(t(185));on(n,l,f),(!(wt&2)||n!==un)&&(n===un&&(!(wt&2)&&(Ol|=l),tn===4&&Dr(n,gn)),Vn(n,f),l===1&&wt===0&&!(r.mode&1)&&(Ks=K()+500,gl&&wr()))}function Vn(n,r){var l=n.callbackNode;bn(n,r);var f=vn(n,n===un?gn:0);if(f===0)l!==null&&A(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&A(l),r===1)n.tag===0?ny(jm.bind(null,n)):Lp(jm.bind(null,n)),Q0(function(){!(wt&6)&&wr()}),l=null;else{switch(Mi(f)){case 1:l=Se;break;case 4:l=Ce;break;case 16:l=De;break;case 536870912:l=tt;break;default:l=De}l=eg(l,Xm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Xm(n,r){if(Hl=-1,Vl=0,wt&6)throw Error(t(327));var l=n.callbackNode;if($s()&&n.callbackNode!==l)return null;var f=vn(n,n===un?gn:0);if(f===0)return null;if(f&30||f&n.expiredLanes||r)r=Gl(n,f);else{r=f;var m=wt;wt|=2;var y=qm();(un!==n||gn!==r)&&(Ki=null,Ks=K()+500,as(n,r));do try{My();break}catch(I){Ym(n,I)}while(!0);Dc(),Fl.current=y,wt=m,Zt!==null?r=0:(un=null,gn=0,r=tn)}if(r!==0){if(r===2&&(m=Hi(n),m!==0&&(f=m,r=gf(n,m))),r===1)throw l=da,as(n,0),Dr(n,f),Vn(n,K()),l;if(r===6)Dr(n,f);else{if(m=n.current.alternate,!(f&30)&&!Sy(m)&&(r=Gl(n,f),r===2&&(y=Hi(n),y!==0&&(f=y,r=gf(n,y))),r===1))throw l=da,as(n,0),Dr(n,f),Vn(n,K()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:ls(n,Hn,Ki);break;case 3:if(Dr(n,f),(f&130023424)===f&&(r=hf+500-K(),10<r)){if(vn(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){Ln(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=Sc(ls.bind(null,n,Hn,Ki),r);break}ls(n,Hn,Ki);break;case 4:if(Dr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var T=31-at(f);y=1<<T,T=r[T],T>m&&(m=T),f&=~y}if(f=m,f=K()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*xy(f/1960))-f,10<f){n.timeoutHandle=Sc(ls.bind(null,n,Hn,Ki),f);break}ls(n,Hn,Ki);break;case 5:ls(n,Hn,Ki);break;default:throw Error(t(329))}}}return Vn(n,K()),n.callbackNode===l?Xm.bind(null,n):null}function gf(n,r){var l=ha;return n.current.memoizedState.isDehydrated&&(as(n,r).flags|=256),n=Gl(n,r),n!==2&&(r=Hn,Hn=l,r!==null&&_f(r)),n}function _f(n){Hn===null?Hn=n:Hn.push.apply(Hn,n)}function Sy(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],y=m.getSnapshot;m=m.value;try{if(!ui(y(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Dr(n,r){for(r&=~df,r&=~Ol,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-at(r),f=1<<l;n[l]=-1,r&=~f}}function jm(n){if(wt&6)throw Error(t(327));$s();var r=vn(n,0);if(!(r&1))return Vn(n,K()),null;var l=Gl(n,r);if(n.tag!==0&&l===2){var f=Hi(n);f!==0&&(r=f,l=gf(n,f))}if(l===1)throw l=da,as(n,0),Dr(n,r),Vn(n,K()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ls(n,Hn,Ki),Vn(n,K()),null}function vf(n,r){var l=wt;wt|=1;try{return n(r)}finally{wt=l,wt===0&&(Ks=K()+500,gl&&wr())}}function os(n){Pr!==null&&Pr.tag===0&&!(wt&6)&&$s();var r=wt;wt|=1;var l=ri.transition,f=Tt;try{if(ri.transition=null,Tt=1,n)return n()}finally{Tt=f,ri.transition=l,wt=r,!(wt&6)&&wr()}}function yf(){Kn=qs.current,zt(qs)}function as(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Z0(l)),Zt!==null)for(l=Zt.return;l!==null;){var f=l;switch(Rc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&pl();break;case 3:Xs(),zt(kn),zt(xn),zc();break;case 5:kc(f);break;case 4:Xs();break;case 13:zt(Gt);break;case 19:zt(Gt);break;case 10:Ic(f.type._context);break;case 22:case 23:yf()}l=l.return}if(un=n,Zt=n=Ir(n.current,null),gn=Kn=r,tn=0,da=null,df=Ol=ss=0,Hn=ha=null,ns!==null){for(r=0;r<ns.length;r++)if(l=ns[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,y=l.pending;if(y!==null){var T=y.next;y.next=m,f.next=T}l.pending=f}ns=null}return n}function Ym(n,r){do{var l=Zt;try{if(Dc(),Al.current=Pl,Rl){for(var f=Wt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Rl=!1}if(rs=0,ln=en=Wt=null,oa=!1,aa=0,ff.current=null,l===null||l.return===null){tn=1,da=r,Zt=null;break}e:{var y=n,T=l.return,I=l,O=r;if(r=gn,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=O,ve=I,xe=ve.tag;if(!(ve.mode&1)&&(xe===0||xe===11||xe===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=vm(T);if(Ie!==null){Ie.flags&=-257,ym(Ie,T,I,y,r),Ie.mode&1&&_m(y,ee,r),r=Ie,O=ee;var He=r.updateQueue;if(He===null){var Ge=new Set;Ge.add(O),r.updateQueue=Ge}else He.add(O);break e}else{if(!(r&1)){_m(y,ee,r),xf();break e}O=Error(t(426))}}else if(Vt&&I.mode&1){var $t=vm(T);if($t!==null){!($t.flags&65536)&&($t.flags|=256),ym($t,T,I,y,r),Pc(js(O,I));break e}}y=O=js(O,I),tn!==4&&(tn=2),ha===null?ha=[y]:ha.push(y),y=T;do{switch(y.tag){case 3:y.flags|=65536,r&=-r,y.lanes|=r;var q=mm(y,O,r);Vp(y,q);break e;case 1:I=O;var V=y.type,$=y.stateNode;if(!(y.flags&128)&&(typeof V.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(br===null||!br.has($)))){y.flags|=65536,r&=-r,y.lanes|=r;var Te=gm(y,I,r);Vp(y,Te);break e}}y=y.return}while(y!==null)}$m(l)}catch(je){r=je,Zt===l&&l!==null&&(Zt=l=l.return);continue}break}while(!0)}function qm(){var n=Fl.current;return Fl.current=Pl,n===null?Pl:n}function xf(){(tn===0||tn===3||tn===2)&&(tn=4),un===null||!(ss&268435455)&&!(Ol&268435455)||Dr(un,gn)}function Gl(n,r){var l=wt;wt|=2;var f=qm();(un!==n||gn!==r)&&(Ki=null,as(n,r));do try{Ey();break}catch(m){Ym(n,m)}while(!0);if(Dc(),wt=l,Fl.current=f,Zt!==null)throw Error(t(261));return un=null,gn=0,tn}function Ey(){for(;Zt!==null;)Km(Zt)}function My(){for(;Zt!==null&&!j();)Km(Zt)}function Km(n){var r=Jm(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,r===null?$m(n):Zt=r,ff.current=null}function $m(n){var r=n;do{var l=r.alternate;if(n=r.return,r.flags&32768){if(l=gy(l,r),l!==null){l.flags&=32767,Zt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Zt=null;return}}else if(l=my(l,r,Kn),l!==null){Zt=l;return}if(r=r.sibling,r!==null){Zt=r;return}Zt=r=n}while(r!==null);tn===0&&(tn=5)}function ls(n,r,l){var f=Tt,m=ri.transition;try{ri.transition=null,Tt=1,Ty(n,r,l,f)}finally{ri.transition=m,Tt=f}return null}function Ty(n,r,l,f){do $s();while(Pr!==null);if(wt&6)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var y=l.lanes|l.childLanes;if(pn(n,y),n===un&&(Zt=un=null,gn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Bl||(Bl=!0,eg(De,function(){return $s(),null})),y=(l.flags&15990)!==0,l.subtreeFlags&15990||y){y=ri.transition,ri.transition=null;var T=Tt;Tt=1;var I=wt;wt|=4,ff.current=null,vy(n,l),zm(l,n),W0(yc),el=!!vc,yc=vc=null,n.current=l,yy(l),J(),wt=I,Tt=T,ri.transition=y}else n.current=l;if(Bl&&(Bl=!1,Pr=n,zl=m),y=n.pendingLanes,y===0&&(br=null),xt(l.stateNode),Vn(n,K()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(kl)throw kl=!1,n=pf,pf=null,n;return zl&1&&n.tag!==0&&$s(),y=n.pendingLanes,y&1?n===mf?pa++:(pa=0,mf=n):pa=0,wr(),null}function $s(){if(Pr!==null){var n=Mi(zl),r=ri.transition,l=Tt;try{if(ri.transition=null,Tt=16>n?16:n,Pr===null)var f=!1;else{if(n=Pr,Pr=null,zl=0,wt&6)throw Error(t(331));var m=wt;for(wt|=4,Oe=n.current;Oe!==null;){var y=Oe,T=y.child;if(Oe.flags&16){var I=y.deletions;if(I!==null){for(var O=0;O<I.length;O++){var ee=I[O];for(Oe=ee;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:fa(8,ve,y)}var xe=ve.child;if(xe!==null)xe.return=ve,Oe=xe;else for(;Oe!==null;){ve=Oe;var ge=ve.sibling,Ie=ve.return;if(Um(ve),ve===ee){Oe=null;break}if(ge!==null){ge.return=Ie,Oe=ge;break}Oe=Ie}}}var He=y.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var $t=Ge.sibling;Ge.sibling=null,Ge=$t}while(Ge!==null)}}Oe=y}}if(y.subtreeFlags&2064&&T!==null)T.return=y,Oe=T;else e:for(;Oe!==null;){if(y=Oe,y.flags&2048)switch(y.tag){case 0:case 11:case 15:fa(9,y,y.return)}var q=y.sibling;if(q!==null){q.return=y.return,Oe=q;break e}Oe=y.return}}var V=n.current;for(Oe=V;Oe!==null;){T=Oe;var $=T.child;if(T.subtreeFlags&2064&&$!==null)$.return=T,Oe=$;else e:for(T=V;Oe!==null;){if(I=Oe,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:Ul(9,I)}}catch(je){Kt(I,I.return,je)}if(I===T){Oe=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Oe=Te;break e}Oe=I.return}}if(wt=m,wr(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Je,n)}catch{}f=!0}return f}finally{Tt=l,ri.transition=r}}return!1}function Zm(n,r,l){r=js(l,r),r=mm(n,r,1),n=Rr(n,r,1),r=Ln(),n!==null&&(on(n,1,r),Vn(n,r))}function Kt(n,r,l){if(n.tag===3)Zm(n,n,l);else for(;r!==null;){if(r.tag===3){Zm(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(br===null||!br.has(f))){n=js(l,n),n=gm(r,n,1),r=Rr(r,n,1),n=Ln(),r!==null&&(on(r,1,n),Vn(r,n));break}}r=r.return}}function wy(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Ln(),n.pingedLanes|=n.suspendedLanes&l,un===n&&(gn&l)===l&&(tn===4||tn===3&&(gn&130023424)===gn&&500>K()-hf?as(n,0):df|=l),Vn(n,r)}function Qm(n,r){r===0&&(n.mode&1?(r=qt,qt<<=1,!(qt&130023424)&&(qt=4194304)):r=1);var l=Ln();n=ji(n,r),n!==null&&(on(n,r,l),Vn(n,l))}function Ay(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Qm(n,l)}function Ry(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),Qm(n,l)}var Jm;Jm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||kn.current)zn=!0;else{if(!(n.lanes&l)&&!(r.flags&128))return zn=!1,py(n,r,l);zn=!!(n.flags&131072)}else zn=!1,Vt&&r.flags&1048576&&Dp(r,vl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;Il(n,r),n=r.pendingProps;var m=ks(r,xn.current);Ws(r,l),m=Gc(null,r,f,n,m,l);var y=Wc();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Bn(f)?(y=!0,ml(r)):y=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Fc(r),m.updater=Ll,r.stateNode=m,m._reactInternals=r,$c(r,f,n,l),r=ef(null,r,f,!0,y,l)):(r.tag=0,Vt&&y&&Ac(r),Pn(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(Il(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=by(f),n=fi(f,n),m){case 0:r=Jc(null,r,f,n,l);break e;case 1:r=wm(null,r,f,n,l);break e;case 11:r=xm(null,r,f,n,l);break e;case 14:r=Sm(null,r,f,fi(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:fi(f,m),Jc(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:fi(f,m),wm(n,r,f,m,l);case 3:e:{if(Am(r),n===null)throw Error(t(387));f=r.pendingProps,y=r.memoizedState,m=y.element,Hp(n,r),Tl(r,f,null,l);var T=r.memoizedState;if(f=T.element,y.isDehydrated)if(y={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=y,r.memoizedState=y,r.flags&256){m=js(Error(t(423)),r),r=Rm(n,r,f,l,m);break e}else if(f!==m){m=js(Error(t(424)),r),r=Rm(n,r,f,l,m);break e}else for(qn=Er(r.stateNode.containerInfo.firstChild),Yn=r,Vt=!0,ci=null,l=Bp(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Hs(),f===m){r=qi(n,r,l);break e}Pn(n,r,f,l)}r=r.child}return r;case 5:return Wp(r),n===null&&bc(r),f=r.type,m=r.pendingProps,y=n!==null?n.memoizedProps:null,T=m.children,xc(f,m)?T=null:y!==null&&xc(f,y)&&(r.flags|=32),Tm(n,r),Pn(n,r,T,l),r.child;case 6:return n===null&&bc(r),null;case 13:return Cm(n,r,l);case 4:return Oc(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=Vs(r,null,f,l):Pn(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:fi(f,m),xm(n,r,f,m,l);case 7:return Pn(n,r,r.pendingProps,l),r.child;case 8:return Pn(n,r,r.pendingProps.children,l),r.child;case 12:return Pn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,y=r.memoizedProps,T=m.value,Ot(Sl,f._currentValue),f._currentValue=T,y!==null)if(ui(y.value,T)){if(y.children===m.children&&!kn.current){r=qi(n,r,l);break e}}else for(y=r.child,y!==null&&(y.return=r);y!==null;){var I=y.dependencies;if(I!==null){T=y.child;for(var O=I.firstContext;O!==null;){if(O.context===f){if(y.tag===1){O=Yi(-1,l&-l),O.tag=2;var ee=y.updateQueue;if(ee!==null){ee=ee.shared;var ve=ee.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),ee.pending=O}}y.lanes|=l,O=y.alternate,O!==null&&(O.lanes|=l),Nc(y.return,l,r),I.lanes|=l;break}O=O.next}}else if(y.tag===10)T=y.type===r.type?null:y.child;else if(y.tag===18){if(T=y.return,T===null)throw Error(t(341));T.lanes|=l,I=T.alternate,I!==null&&(I.lanes|=l),Nc(T,l,r),T=y.sibling}else T=y.child;if(T!==null)T.return=y;else for(T=y;T!==null;){if(T===r){T=null;break}if(y=T.sibling,y!==null){y.return=T.return,T=y;break}T=T.return}y=T}Pn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,Ws(r,l),m=ni(m),f=f(m),r.flags|=1,Pn(n,r,f,l),r.child;case 14:return f=r.type,m=fi(f,r.pendingProps),m=fi(f.type,m),Sm(n,r,f,m,l);case 15:return Em(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:fi(f,m),Il(n,r),r.tag=1,Bn(f)?(n=!0,ml(r)):n=!1,Ws(r,l),hm(r,f,m),$c(r,f,m,l),ef(null,r,f,!0,n,l);case 19:return Pm(n,r,l);case 22:return Mm(n,r,l)}throw Error(t(156,r.tag))};function eg(n,r){return Za(n,r)}function Cy(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(n,r,l,f){return new Cy(n,r,l,f)}function Sf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function by(n){if(typeof n=="function")return Sf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===pe)return 14}return 2}function Ir(n,r){var l=n.alternate;return l===null?(l=si(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Wl(n,r,l,f,m,y){var T=2;if(f=n,typeof n=="function")Sf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case N:return us(l.children,m,y,r);case W:T=8,m|=8;break;case P:return n=si(12,l,r,m|2),n.elementType=P,n.lanes=y,n;case te:return n=si(13,l,r,m),n.elementType=te,n.lanes=y,n;case fe:return n=si(19,l,r,m),n.elementType=fe,n.lanes=y,n;case ue:return Xl(l,m,y,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:T=10;break e;case z:T=9;break e;case ae:T=11;break e;case pe:T=14;break e;case oe:T=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=si(T,l,r,m),r.elementType=n,r.type=f,r.lanes=y,r}function us(n,r,l,f){return n=si(7,n,f,r),n.lanes=l,n}function Xl(n,r,l,f){return n=si(22,n,f,r),n.elementType=ue,n.lanes=l,n.stateNode={isHidden:!1},n}function Ef(n,r,l){return n=si(6,n,null,r),n.lanes=l,n}function Mf(n,r,l){return r=si(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Py(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Tf(n,r,l,f,m,y,T,I,O){return n=new Py(n,r,l,I,O),r===1?(r=1,y===!0&&(r|=8)):r=0,y=si(3,null,null,r),n.current=y,y.stateNode=n,y.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fc(y),n}function Ly(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function tg(n){if(!n)return Tr;n=n._reactInternals;e:{if(Ei(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Bn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Bn(l))return bp(n,l,r)}return r}function ng(n,r,l,f,m,y,T,I,O){return n=Tf(l,f,!0,n,m,y,T,I,O),n.context=tg(null),l=n.current,f=Ln(),m=Lr(l),y=Yi(f,m),y.callback=r??null,Rr(l,y,m),n.current.lanes=m,on(n,m,f),Vn(n,f),n}function jl(n,r,l,f){var m=r.current,y=Ln(),T=Lr(m);return l=tg(l),r.context===null?r.context=l:r.pendingContext=l,r=Yi(y,T),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Rr(m,r,T),n!==null&&(pi(n,m,T,y),Ml(n,m,T)),T}function Yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ig(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function wf(n,r){ig(n,r),(n=n.alternate)&&ig(n,r)}var rg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Af(n){this._internalRoot=n}ql.prototype.render=Af.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));jl(n,r,null,null)},ql.prototype.unmount=Af.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;os(function(){jl(null,n,null,null)}),r[Vi]=null}};function ql(n){this._internalRoot=n}ql.prototype.unstable_scheduleHydration=function(n){if(n){var r=Hh();n={blockedOn:null,target:n,priority:r};for(var l=0;l<yr.length&&r!==0&&r<yr[l].priority;l++);yr.splice(l,0,n),l===0&&Wh(n)}};function Rf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Kl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sg(){}function Dy(n,r,l,f,m){if(m){if(typeof f=="function"){var y=f;f=function(){var ee=Yl(T);y.call(ee)}}var T=ng(r,f,n,0,null,!1,!1,"",sg);return n._reactRootContainer=T,n[Vi]=T.current,Qo(n.nodeType===8?n.parentNode:n),os(),T}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var I=f;f=function(){var ee=Yl(O);I.call(ee)}}var O=Tf(n,0,!1,null,null,!1,!1,"",sg);return n._reactRootContainer=O,n[Vi]=O.current,Qo(n.nodeType===8?n.parentNode:n),os(function(){jl(r,O,l,f)}),O}function $l(n,r,l,f,m){var y=l._reactRootContainer;if(y){var T=y;if(typeof m=="function"){var I=m;m=function(){var O=Yl(T);I.call(O)}}jl(r,T,n,m)}else T=Dy(l,r,n,m,f);return Yl(T)}Bh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=yt(r.pendingLanes);l!==0&&(an(r,l|1),Vn(r,K()),!(wt&6)&&(Ks=K()+500,wr()))}break;case 13:os(function(){var f=ji(n,1);if(f!==null){var m=Ln();pi(f,n,1,m)}}),wf(n,1)}},Zu=function(n){if(n.tag===13){var r=ji(n,134217728);if(r!==null){var l=Ln();pi(r,n,134217728,l)}wf(n,134217728)}},zh=function(n){if(n.tag===13){var r=Lr(n),l=ji(n,r);if(l!==null){var f=Ln();pi(l,n,r,f)}wf(n,r)}},Hh=function(){return Tt},Vh=function(n,r){var l=Tt;try{return Tt=n,r()}finally{Tt=l}},Re=function(n,r,l){switch(r){case"input":if(ht(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=hl(f);if(!m)throw Error(t(90));vt(f),ht(f,m)}}}break;case"textarea":me(n,l);break;case"select":r=l.value,r!=null&&D(n,!!l.multiple,r,!1)}},kt=vf,Jt=os;var Iy={usingClientEntryPoint:!1,Events:[ta,Fs,hl,Pe,st,vf]},ma={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ny={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ka(n),n===null?null:n.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Je=Zl.inject(Ny),Ve=Zl}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy,Gn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(r))throw Error(t(200));return Ly(n,r,null,l)},Gn.createRoot=function(n,r){if(!Rf(n))throw Error(t(299));var l=!1,f="",m=rg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=Tf(n,1,!1,null,null,l,!1,f,m),n[Vi]=r.current,Qo(n.nodeType===8?n.parentNode:n),new Af(r)},Gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ka(r),n=n===null?null:n.stateNode,n},Gn.flushSync=function(n){return os(n)},Gn.hydrate=function(n,r,l){if(!Kl(r))throw Error(t(200));return $l(null,n,r,!0,l)},Gn.hydrateRoot=function(n,r,l){if(!Rf(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,y="",T=rg;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=ng(r,null,n,1,l??null,m,!1,y,T),n[Vi]=r.current,Qo(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new ql(r)},Gn.render=function(n,r,l){if(!Kl(r))throw Error(t(200));return $l(null,n,r,!1,l)},Gn.unmountComponentAtNode=function(n){if(!Kl(n))throw Error(t(40));return n._reactRootContainer?(os(function(){$l(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1},Gn.unstable_batchedUpdates=vf,Gn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Kl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return $l(n,r,l,!1,f)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var hg;function Vy(){if(hg)return Pf.exports;hg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pf.exports=Hy(),Pf.exports}var pg;function Gy(){if(pg)return Ql;pg=1;var s=Vy();return Ql.createRoot=s.createRoot,Ql.hydrateRoot=s.hydrateRoot,Ql}var Wy=Gy(),_a={},mg;function Xy(){if(mg)return _a;mg=1,Object.defineProperty(_a,"__esModule",{value:!0}),_a.parse=u,_a.serialize=h;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function u(_,x){const E=new a,M=_.length;if(M<2)return E;const S=(x==null?void 0:x.decode)||p;let v=0;do{const b=_.indexOf("=",v);if(b===-1)break;const L=_.indexOf(";",v),R=L===-1?M:L;if(b>R){v=_.lastIndexOf(";",b-1)+1;continue}const k=c(_,v,b),F=d(_,b,k),N=_.slice(k,F);if(E[N]===void 0){let W=c(_,b+1,R),P=d(_,R,W);const C=S(_.slice(W,P));E[N]=C}v=R+1}while(v<M);return E}function c(_,x,E){do{const M=_.charCodeAt(x);if(M!==32&&M!==9)return x}while(++x<E);return E}function d(_,x,E){for(;x>E;){const M=_.charCodeAt(--x);if(M!==32&&M!==9)return x+1}return E}function h(_,x,E){const M=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(_))throw new TypeError(`argument name is invalid: ${_}`);const S=M(x);if(!e.test(S))throw new TypeError(`argument val is invalid: ${x}`);let v=_+"="+S;if(!E)return v;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);v+="; Max-Age="+E.maxAge}if(E.domain){if(!t.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);v+="; Domain="+E.domain}if(E.path){if(!i.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);v+="; Path="+E.path}if(E.expires){if(!g(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);v+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(v+="; HttpOnly"),E.secure&&(v+="; Secure"),E.partitioned&&(v+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return v}function p(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function g(_){return o.call(_)==="[object Date]"}return _a}Xy();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gg="popstate";function jy(s={}){function e(i,o){let{pathname:a,search:u,hash:c}=i.location;return vd("",{pathname:a,search:u,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Ia(o)}return qy(e,t,null,s)}function Xt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Li(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Yy(){return Math.random().toString(36).substring(2,10)}function _g(s,e){return{usr:s.state,key:s.key,idx:e}}function vd(s,e,t=null,i){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?No(e):e,state:t,key:e&&e.key||i||Yy()}}function Ia({pathname:s="/",search:e="",hash:t=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(s+=t.charAt(0)==="#"?t:"#"+t),s}function No(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substring(t),s=s.substring(0,t));let i=s.indexOf("?");i>=0&&(e.search=s.substring(i),s=s.substring(0,i)),s&&(e.pathname=s)}return e}function qy(s,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,u=o.history,c="POP",d=null,h=p();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function p(){return(u.state||{idx:null}).idx}function g(){c="POP";let S=p(),v=S==null?null:S-h;h=S,d&&d({action:c,location:M.location,delta:v})}function _(S,v){c="PUSH";let b=vd(M.location,S,v);h=p()+1;let L=_g(b,h),R=M.createHref(b);try{u.pushState(L,"",R)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(R)}a&&d&&d({action:c,location:M.location,delta:1})}function x(S,v){c="REPLACE";let b=vd(M.location,S,v);h=p();let L=_g(b,h),R=M.createHref(b);u.replaceState(L,"",R),a&&d&&d({action:c,location:M.location,delta:0})}function E(S){let v=o.location.origin!=="null"?o.location.origin:o.location.href,b=typeof S=="string"?S:Ia(S);return b=b.replace(/ $/,"%20"),Xt(v,`No window.location.(origin|href) available to create URL for href: ${b}`),new URL(b,v)}let M={get action(){return c},get location(){return s(o,u)},listen(S){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(gg,g),d=S,()=>{o.removeEventListener(gg,g),d=null}},createHref(S){return e(o,S)},createURL:E,encodeLocation(S){let v=E(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:_,replace:x,go(S){return u.go(S)}};return M}function Y_(s,e,t="/"){return Ky(s,e,t,!1)}function Ky(s,e,t,i){let o=typeof e=="string"?No(e):e,a=qr(o.pathname||"/",t);if(a==null)return null;let u=q_(s);$y(u);let c=null;for(let d=0;c==null&&d<u.length;++d){let h=ax(a);c=sx(u[d],h,i)}return c}function q_(s,e=[],t=[],i=""){let o=(a,u,c)=>{let d={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};d.relativePath.startsWith("/")&&(Xt(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length));let h=or([i,d.relativePath]),p=t.concat(d);a.children&&a.children.length>0&&(Xt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),q_(a.children,e,p,h)),!(a.path==null&&!a.index)&&e.push({path:h,score:ix(h,a.index),routesMeta:p})};return s.forEach((a,u)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))o(a,u);else for(let d of K_(a.path))o(a,u,d)}),e}function K_(s){let e=s.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let u=K_(i.join("/")),c=[];return c.push(...u.map(d=>d===""?a:[a,d].join("/"))),o&&c.push(...u),c.map(d=>s.startsWith("/")&&d===""?"/":d)}function $y(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:rx(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var Zy=/^:[\w-]+$/,Qy=3,Jy=2,ex=1,tx=10,nx=-2,vg=s=>s==="*";function ix(s,e){let t=s.split("/"),i=t.length;return t.some(vg)&&(i+=nx),e&&(i+=Jy),t.filter(o=>!vg(o)).reduce((o,a)=>o+(Zy.test(a)?Qy:a===""?ex:tx),i)}function rx(s,e){return s.length===e.length&&s.slice(0,-1).every((i,o)=>i===e[o])?s[s.length-1]-e[e.length-1]:0}function sx(s,e,t=!1){let{routesMeta:i}=s,o={},a="/",u=[];for(let c=0;c<i.length;++c){let d=i[c],h=c===i.length-1,p=a==="/"?e:e.slice(a.length)||"/",g=Ou({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},p),_=d.route;if(!g&&h&&t&&!i[i.length-1].route.index&&(g=Ou({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},p)),!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:or([a,g.pathname]),pathnameBase:fx(or([a,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(a=or([a,g.pathnameBase]))}return u}function Ou(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,i]=ox(s.path,s.caseSensitive,s.end),o=e.match(t);if(!o)return null;let a=o[0],u=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:i.reduce((h,{paramName:p,isOptional:g},_)=>{if(p==="*"){let E=c[_]||"";u=a.slice(0,a.length-E.length).replace(/(.)\/+$/,"$1")}const x=c[_];return g&&!x?h[p]=void 0:h[p]=(x||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:u,pattern:s}}function ox(s,e=!1,t=!0){Li(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let i=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,d)=>(i.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(i.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function ax(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Li(!1,`The URL path "${s}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function qr(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=s.charAt(t);return i&&i!=="/"?null:s.slice(t)||"/"}function lx(s,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof s=="string"?No(s):s;return{pathname:t?t.startsWith("/")?t:ux(t,e):e,search:dx(i),hash:hx(o)}}function ux(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function If(s,e,t,i){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cx(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function $_(s){let e=cx(s);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Z_(s,e,t,i=!1){let o;typeof s=="string"?o=No(s):(o={...s},Xt(!o.pathname||!o.pathname.includes("?"),If("?","pathname","search",o)),Xt(!o.pathname||!o.pathname.includes("#"),If("#","pathname","hash",o)),Xt(!o.search||!o.search.includes("#"),If("#","search","hash",o)));let a=s===""||o.pathname==="",u=a?"/":o.pathname,c;if(u==null)c=t;else{let g=e.length-1;if(!i&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),g-=1;o.pathname=_.join("/")}c=g>=0?e[g]:"/"}let d=lx(o,c),h=u&&u!=="/"&&u.endsWith("/"),p=(a||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||p)&&(d.pathname+="/"),d}var or=s=>s.join("/").replace(/\/\/+/g,"/"),fx=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),dx=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,hx=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function px(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Q_=["POST","PUT","PATCH","DELETE"];new Set(Q_);var mx=["GET",...Q_];new Set(mx);var Uo=se.createContext(null);Uo.displayName="DataRouter";var Gu=se.createContext(null);Gu.displayName="DataRouterState";var J_=se.createContext({isTransitioning:!1});J_.displayName="ViewTransition";var gx=se.createContext(new Map);gx.displayName="Fetchers";var _x=se.createContext(null);_x.displayName="Await";var Ni=se.createContext(null);Ni.displayName="Navigation";var ka=se.createContext(null);ka.displayName="Location";var fr=se.createContext({outlet:null,matches:[],isDataRoute:!1});fr.displayName="Route";var dh=se.createContext(null);dh.displayName="RouteError";function vx(s,{relative:e}={}){Xt(Ba(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=se.useContext(Ni),{hash:o,pathname:a,search:u}=za(s,{relative:e}),c=a;return t!=="/"&&(c=a==="/"?t:or([t,a])),i.createHref({pathname:c,search:u,hash:o})}function Ba(){return se.useContext(ka)!=null}function Ts(){return Xt(Ba(),"useLocation() may be used only in the context of a <Router> component."),se.useContext(ka).location}var ev="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tv(s){se.useContext(Ni).static||se.useLayoutEffect(s)}function yx(){let{isDataRoute:s}=se.useContext(fr);return s?Dx():xx()}function xx(){Xt(Ba(),"useNavigate() may be used only in the context of a <Router> component.");let s=se.useContext(Uo),{basename:e,navigator:t}=se.useContext(Ni),{matches:i}=se.useContext(fr),{pathname:o}=Ts(),a=JSON.stringify($_(i)),u=se.useRef(!1);return tv(()=>{u.current=!0}),se.useCallback((d,h={})=>{if(Li(u.current,ev),!u.current)return;if(typeof d=="number"){t.go(d);return}let p=Z_(d,JSON.parse(a),o,h.relative==="path");s==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:or([e,p.pathname])),(h.replace?t.replace:t.push)(p,h.state,h)},[e,t,a,o,s])}se.createContext(null);function za(s,{relative:e}={}){let{matches:t}=se.useContext(fr),{pathname:i}=Ts(),o=JSON.stringify($_(t));return se.useMemo(()=>Z_(s,JSON.parse(o),i,e==="path"),[s,o,i,e])}function Sx(s,e){return nv(s,e)}function nv(s,e,t,i){var v;Xt(Ba(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=se.useContext(Ni),{matches:a}=se.useContext(fr),u=a[a.length-1],c=u?u.params:{},d=u?u.pathname:"/",h=u?u.pathnameBase:"/",p=u&&u.route;{let b=p&&p.path||"";iv(d,!p||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let g=Ts(),_;if(e){let b=typeof e=="string"?No(e):e;Xt(h==="/"||((v=b.pathname)==null?void 0:v.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${b.pathname}" was given in the \`location\` prop.`),_=b}else _=g;let x=_.pathname||"/",E=x;if(h!=="/"){let b=h.replace(/^\//,"").split("/");E="/"+x.replace(/^\//,"").split("/").slice(b.length).join("/")}let M=Y_(s,{pathname:E});Li(p||M!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Li(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Ax(M&&M.map(b=>Object.assign({},b,{params:Object.assign({},c,b.params),pathname:or([h,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?h:or([h,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,t,i);return e&&S?se.createElement(ka.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},S):S}function Ex(){let s=Lx(),e=px(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",s),u=se.createElement(se.Fragment,null,se.createElement("p",null,"💿 Hey developer 👋"),se.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",se.createElement("code",{style:a},"ErrorBoundary")," or"," ",se.createElement("code",{style:a},"errorElement")," prop on your route.")),se.createElement(se.Fragment,null,se.createElement("h2",null,"Unexpected Application Error!"),se.createElement("h3",{style:{fontStyle:"italic"}},e),t?se.createElement("pre",{style:o},t):null,u)}var Mx=se.createElement(Ex,null),Tx=class extends se.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?se.createElement(fr.Provider,{value:this.props.routeContext},se.createElement(dh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function wx({routeContext:s,match:e,children:t}){let i=se.useContext(Uo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),se.createElement(fr.Provider,{value:s},t)}function Ax(s,e=[],t=null,i=null){if(s==null){if(!t)return null;if(t.errors)s=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let o=s,a=t==null?void 0:t.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);Xt(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(t)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:p,errors:g}=t,_=h.route.loader&&!p.hasOwnProperty(h.route.id)&&(!g||g[h.route.id]===void 0);if(h.route.lazy||_){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,p)=>{let g,_=!1,x=null,E=null;t&&(g=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||Mx,u&&(c<0&&p===0?(iv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,E=null):c===p&&(_=!0,E=h.route.hydrateFallbackElement||null)));let M=e.concat(o.slice(0,p+1)),S=()=>{let v;return g?v=x:_?v=E:h.route.Component?v=se.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=d,se.createElement(wx,{match:h,routeContext:{outlet:d,matches:M,isDataRoute:t!=null},children:v})};return t&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?se.createElement(Tx,{location:t.location,revalidation:t.revalidation,component:x,error:g,children:S(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):S()},null)}function hh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rx(s){let e=se.useContext(Uo);return Xt(e,hh(s)),e}function Cx(s){let e=se.useContext(Gu);return Xt(e,hh(s)),e}function bx(s){let e=se.useContext(fr);return Xt(e,hh(s)),e}function ph(s){let e=bx(s),t=e.matches[e.matches.length-1];return Xt(t.route.id,`${s} can only be used on routes that contain a unique "id"`),t.route.id}function Px(){return ph("useRouteId")}function Lx(){var i;let s=se.useContext(dh),e=Cx("useRouteError"),t=ph("useRouteError");return s!==void 0?s:(i=e.errors)==null?void 0:i[t]}function Dx(){let{router:s}=Rx("useNavigate"),e=ph("useNavigate"),t=se.useRef(!1);return tv(()=>{t.current=!0}),se.useCallback(async(o,a={})=>{Li(t.current,ev),t.current&&(typeof o=="number"?s.navigate(o):await s.navigate(o,{fromRouteId:e,...a}))},[s,e])}var yg={};function iv(s,e,t){!e&&!yg[s]&&(yg[s]=!0,Li(!1,t))}se.memo(Ix);function Ix({routes:s,future:e,state:t}){return nv(s,void 0,t,e)}function yd(s){Xt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Nx({basename:s="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1}){Xt(!Ba(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=s.replace(/^\/*/,"/"),c=se.useMemo(()=>({basename:u,navigator:o,static:a,future:{}}),[u,o,a]);typeof t=="string"&&(t=No(t));let{pathname:d="/",search:h="",hash:p="",state:g=null,key:_="default"}=t,x=se.useMemo(()=>{let E=qr(d,u);return E==null?null:{location:{pathname:E,search:h,hash:p,state:g,key:_},navigationType:i}},[u,d,h,p,g,_,i]);return Li(x!=null,`<Router basename="${u}"> is not able to match the URL "${d}${h}${p}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:se.createElement(Ni.Provider,{value:c},se.createElement(ka.Provider,{children:e,value:x}))}function Ux({children:s,location:e}){return Sx(xd(s),e)}function xd(s,e=[]){let t=[];return se.Children.forEach(s,(i,o)=>{if(!se.isValidElement(i))return;let a=[...e,o];if(i.type===se.Fragment){t.push.apply(t,xd(i.props.children,a));return}Xt(i.type===yd,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=xd(i.props.children,a)),t.push(u)}),t}var Cu="get",bu="application/x-www-form-urlencoded";function Wu(s){return s!=null&&typeof s.tagName=="string"}function Fx(s){return Wu(s)&&s.tagName.toLowerCase()==="button"}function Ox(s){return Wu(s)&&s.tagName.toLowerCase()==="form"}function kx(s){return Wu(s)&&s.tagName.toLowerCase()==="input"}function Bx(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function zx(s,e){return s.button===0&&(!e||e==="_self")&&!Bx(s)}var Jl=null;function Hx(){if(Jl===null)try{new FormData(document.createElement("form"),0),Jl=!1}catch{Jl=!0}return Jl}var Vx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nf(s){return s!=null&&!Vx.has(s)?(Li(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bu}"`),null):s}function Gx(s,e){let t,i,o,a,u;if(Ox(s)){let c=s.getAttribute("action");i=c?qr(c,e):null,t=s.getAttribute("method")||Cu,o=Nf(s.getAttribute("enctype"))||bu,a=new FormData(s)}else if(Fx(s)||kx(s)&&(s.type==="submit"||s.type==="image")){let c=s.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=s.getAttribute("formaction")||c.getAttribute("action");if(i=d?qr(d,e):null,t=s.getAttribute("formmethod")||c.getAttribute("method")||Cu,o=Nf(s.getAttribute("formenctype"))||Nf(c.getAttribute("enctype"))||bu,a=new FormData(c,s),!Hx()){let{name:h,type:p,value:g}=s;if(p==="image"){let _=h?`${h}.`:"";a.append(`${_}x`,"0"),a.append(`${_}y`,"0")}else h&&a.append(h,g)}}else{if(Wu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Cu,i=null,o=bu,u=s}return a&&o==="text/plain"&&(u=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:u}}function mh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}async function Wx(s,e){if(s.id in e)return e[s.id];try{let t=await import(s.module);return e[s.id]=t,t}catch(t){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xx(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function jx(s,e,t){let i=await Promise.all(s.map(async o=>{let a=e.routes[o.route.id];if(a){let u=await Wx(a,t);return u.links?u.links():[]}return[]}));return $x(i.flat(1).filter(Xx).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function xg(s,e,t,i,o,a){let u=(d,h)=>t[h]?d.route.id!==t[h].route.id:!0,c=(d,h)=>{var p;return t[h].pathname!==d.pathname||((p=t[h].route.path)==null?void 0:p.endsWith("*"))&&t[h].params["*"]!==d.params["*"]};return a==="assets"?e.filter((d,h)=>u(d,h)||c(d,h)):a==="data"?e.filter((d,h)=>{var g;let p=i.routes[d.route.id];if(!p||!p.hasLoader)return!1;if(u(d,h)||c(d,h))return!0;if(d.route.shouldRevalidate){let _=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((g=t[0])==null?void 0:g.params)||{},nextUrl:new URL(s,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Yx(s,e){return qx(s.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function qx(s){return[...new Set(s)]}function Kx(s){let e={},t=Object.keys(s).sort();for(let i of t)e[i]=s[i];return e}function $x(s,e){let t=new Set;return new Set(e),s.reduce((i,o)=>{let a=JSON.stringify(Kx(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}function Zx(s){let e=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Qx(){let s=se.useContext(Uo);return mh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Jx(){let s=se.useContext(Gu);return mh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var gh=se.createContext(void 0);gh.displayName="FrameworkContext";function rv(){let s=se.useContext(gh);return mh(s,"You must render this element inside a <HydratedRouter> element"),s}function eS(s,e){let t=se.useContext(gh),[i,o]=se.useState(!1),[a,u]=se.useState(!1),{onFocus:c,onBlur:d,onMouseEnter:h,onMouseLeave:p,onTouchStart:g}=e,_=se.useRef(null);se.useEffect(()=>{if(s==="render"&&u(!0),s==="viewport"){let M=v=>{v.forEach(b=>{u(b.isIntersecting)})},S=new IntersectionObserver(M,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[s]),se.useEffect(()=>{if(i){let M=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(M)}}},[i]);let x=()=>{o(!0)},E=()=>{o(!1),u(!1)};return t?s!=="intent"?[a,_,{}]:[a,_,{onFocus:va(c,x),onBlur:va(d,E),onMouseEnter:va(h,x),onMouseLeave:va(p,E),onTouchStart:va(g,x)}]:[!1,_,{}]}function va(s,e){return t=>{s&&s(t),t.defaultPrevented||e(t)}}function tS({page:s,...e}){let{router:t}=Qx(),i=se.useMemo(()=>Y_(t.routes,s,t.basename),[t.routes,s,t.basename]);return i?se.createElement(iS,{page:s,matches:i,...e}):null}function nS(s){let{manifest:e,routeModules:t}=rv(),[i,o]=se.useState([]);return se.useEffect(()=>{let a=!1;return jx(s,e,t).then(u=>{a||o(u)}),()=>{a=!0}},[s,e,t]),i}function iS({page:s,matches:e,...t}){let i=Ts(),{manifest:o,routeModules:a}=rv(),{loaderData:u,matches:c}=Jx(),d=se.useMemo(()=>xg(s,e,c,o,i,"data"),[s,e,c,o,i]),h=se.useMemo(()=>xg(s,e,c,o,i,"assets"),[s,e,c,o,i]),p=se.useMemo(()=>{if(s===i.pathname+i.search+i.hash)return[];let x=new Set,E=!1;if(e.forEach(S=>{var b;let v=o.routes[S.route.id];!v||!v.hasLoader||(!d.some(L=>L.route.id===S.route.id)&&S.route.id in u&&((b=a[S.route.id])!=null&&b.shouldRevalidate)||v.hasClientLoader?E=!0:x.add(S.route.id))}),x.size===0)return[];let M=Zx(s);return E&&x.size>0&&M.searchParams.set("_routes",e.filter(S=>x.has(S.route.id)).map(S=>S.route.id).join(",")),[M.pathname+M.search]},[u,i,o,d,e,s,a]),g=se.useMemo(()=>Yx(h,o),[h,o]),_=nS(h);return se.createElement(se.Fragment,null,p.map(x=>se.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),g.map(x=>se.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),_.map(({key:x,link:E})=>se.createElement("link",{key:x,...E})))}function rS(...s){return e=>{s.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var sv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sv&&(window.__reactRouterVersion="7.1.1")}catch{}function sS({basename:s,children:e,window:t}){let i=se.useRef();i.current==null&&(i.current=jy({window:t,v5Compat:!0}));let o=i.current,[a,u]=se.useState({action:o.action,location:o.location}),c=se.useCallback(d=>{se.startTransition(()=>u(d))},[u]);return se.useLayoutEffect(()=>o.listen(c),[o,c]),se.createElement(Nx,{basename:s,children:e,location:a.location,navigationType:a.action,navigator:o})}var ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,av=se.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:u,state:c,target:d,to:h,preventScrollReset:p,viewTransition:g,..._},x){let{basename:E}=se.useContext(Ni),M=typeof h=="string"&&ov.test(h),S,v=!1;if(typeof h=="string"&&M&&(S=h,sv))try{let P=new URL(window.location.href),C=h.startsWith("//")?new URL(P.protocol+h):new URL(h),z=qr(C.pathname,E);C.origin===P.origin&&z!=null?h=z+C.search+C.hash:v=!0}catch{Li(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let b=vx(h,{relative:o}),[L,R,k]=eS(i,_),F=uS(h,{replace:u,state:c,target:d,preventScrollReset:p,relative:o,viewTransition:g});function N(P){e&&e(P),P.defaultPrevented||F(P)}let W=se.createElement("a",{..._,...k,href:S||b,onClick:v||a?e:N,ref:rS(x,R),target:d,"data-discover":!M&&t==="render"?"true":void 0});return L&&!M?se.createElement(se.Fragment,null,W,se.createElement(tS,{page:b})):W});av.displayName="Link";var oS=se.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:u,viewTransition:c,children:d,...h},p){let g=za(u,{relative:h.relative}),_=Ts(),x=se.useContext(Gu),{navigator:E,basename:M}=se.useContext(Ni),S=x!=null&&pS(g)&&c===!0,v=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,b=_.pathname,L=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(b=b.toLowerCase(),L=L?L.toLowerCase():null,v=v.toLowerCase()),L&&M&&(L=qr(L,M)||L);const R=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let k=b===v||!o&&b.startsWith(v)&&b.charAt(R)==="/",F=L!=null&&(L===v||!o&&L.startsWith(v)&&L.charAt(v.length)==="/"),N={isActive:k,isPending:F,isTransitioning:S},W=k?e:void 0,P;typeof i=="function"?P=i(N):P=[i,k?"active":null,F?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof a=="function"?a(N):a;return se.createElement(av,{...h,"aria-current":W,className:P,ref:p,style:C,to:u,viewTransition:c},typeof d=="function"?d(N):d)});oS.displayName="NavLink";var aS=se.forwardRef(({discover:s="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:u=Cu,action:c,onSubmit:d,relative:h,preventScrollReset:p,viewTransition:g,..._},x)=>{let E=dS(),M=hS(c,{relative:h}),S=u.toLowerCase()==="get"?"get":"post",v=typeof c=="string"&&ov.test(c),b=L=>{if(d&&d(L),L.defaultPrevented)return;L.preventDefault();let R=L.nativeEvent.submitter,k=(R==null?void 0:R.getAttribute("formmethod"))||u;E(R||L.currentTarget,{fetcherKey:e,method:k,navigate:t,replace:o,state:a,relative:h,preventScrollReset:p,viewTransition:g})};return se.createElement("form",{ref:x,method:S,action:M,onSubmit:i?d:b,..._,"data-discover":!v&&s==="render"?"true":void 0})});aS.displayName="Form";function lS(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lv(s){let e=se.useContext(Uo);return Xt(e,lS(s)),e}function uS(s,{target:e,replace:t,state:i,preventScrollReset:o,relative:a,viewTransition:u}={}){let c=yx(),d=Ts(),h=za(s,{relative:a});return se.useCallback(p=>{if(zx(p,e)){p.preventDefault();let g=t!==void 0?t:Ia(d)===Ia(h);c(s,{replace:g,state:i,preventScrollReset:o,relative:a,viewTransition:u})}},[d,c,h,t,i,e,s,o,a,u])}var cS=0,fS=()=>`__${String(++cS)}__`;function dS(){let{router:s}=lv("useSubmit"),{basename:e}=se.useContext(Ni),t=Px();return se.useCallback(async(i,o={})=>{let{action:a,method:u,encType:c,formData:d,body:h}=Gx(i,e);if(o.navigate===!1){let p=o.fetcherKey||fS();await s.fetch(p,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:d,body:h,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await s.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:d,body:h,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[s,e,t])}function hS(s,{relative:e}={}){let{basename:t}=se.useContext(Ni),i=se.useContext(fr);Xt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...za(s||".",{relative:e})},u=Ts();if(s==null){a.search=u.search;let c=new URLSearchParams(a.search),d=c.getAll("index");if(d.some(p=>p==="")){c.delete("index"),d.filter(g=>g).forEach(g=>c.append("index",g));let p=c.toString();a.search=p?`?${p}`:""}}return(!s||s===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:or([t,a.pathname])),Ia(a)}function pS(s,e={}){let t=se.useContext(J_);Xt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=lv("useViewTransitionState"),o=za(s,{relative:e.relative});if(!t.isTransitioning)return!1;let a=qr(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=qr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Ou(o.pathname,u)!=null||Ou(o.pathname,a)!=null}new TextEncoder;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="172",vo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},go={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mS=0,Sg=1,gS=2,uv=1,_S=2,nr=3,ur=0,Xn=1,bi=2,jr=0,yo=1,Eg=2,Mg=3,Tg=4,vS=5,vs=100,yS=101,xS=102,SS=103,ES=104,MS=200,TS=201,wS=202,AS=203,Sd=204,Ed=205,RS=206,CS=207,bS=208,PS=209,LS=210,DS=211,IS=212,NS=213,US=214,Md=0,Td=1,wd=2,Mo=3,Ad=4,Rd=5,Cd=6,bd=7,cv=0,FS=1,OS=2,Yr=0,kS=1,BS=2,zS=3,HS=4,VS=5,GS=6,WS=7,wg="attached",XS="detached",fv=300,To=301,wo=302,Pd=303,Ld=304,Xu=306,Ao=1e3,Wr=1001,ku=1002,Nn=1003,dv=1004,Ca=1005,Qn=1006,Pu=1007,rr=1008,cr=1009,hv=1010,pv=1011,Na=1012,vh=1013,Es=1014,xi=1015,Ha=1016,yh=1017,xh=1018,Ro=1020,mv=35902,gv=1021,_v=1022,li=1023,vv=1024,yv=1025,xo=1026,Co=1027,Sh=1028,Eh=1029,xv=1030,Mh=1031,Th=1033,Lu=33776,Du=33777,Iu=33778,Nu=33779,Dd=35840,Id=35841,Nd=35842,Ud=35843,Fd=36196,Od=37492,kd=37496,Bd=37808,zd=37809,Hd=37810,Vd=37811,Gd=37812,Wd=37813,Xd=37814,jd=37815,Yd=37816,qd=37817,Kd=37818,$d=37819,Zd=37820,Qd=37821,Uu=36492,Jd=36494,eh=36495,Sv=36283,th=36284,nh=36285,ih=36286,Ua=2300,Fa=2301,Uf=2302,Ag=2400,Rg=2401,Cg=2402,jS=2500,YS=0,Ev=1,rh=2,qS=3200,KS=3201,Mv=0,$S=1,Gr="",dn="srgb",Fn="srgb-linear",Bu="linear",It="srgb",Zs=7680,bg=519,ZS=512,QS=513,JS=514,Tv=515,eE=516,tE=517,nE=518,iE=519,sh=35044,Pg="300 es",sr=2e3,zu=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lg=1234567;const Pa=Math.PI/180,bo=180/Math.PI;function Si(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function wh(s,e){return(s%e+e)%e}function rE(s,e,t,i,o){return i+(s-e)*(o-i)/(t-e)}function sE(s,e,t){return s!==e?(t-s)/(e-s):0}function La(s,e,t){return(1-t)*s+t*e}function oE(s,e,t,i){return La(s,e,1-Math.exp(-t*i))}function aE(s,e=1){return e-Math.abs(wh(s,e*2)-e)}function lE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function uE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function cE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function fE(s,e){return s+Math.random()*(e-s)}function dE(s){return s*(.5-Math.random())}function hE(s){s!==void 0&&(Lg=s);let e=Lg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pE(s){return s*Pa}function mE(s){return s*bo}function gE(s){return(s&s-1)===0&&s!==0}function _E(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vE(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yE(s,e,t,i,o){const a=Math.cos,u=Math.sin,c=a(t/2),d=u(t/2),h=a((e+i)/2),p=u((e+i)/2),g=a((e-i)/2),_=u((e-i)/2),x=a((i-e)/2),E=u((i-e)/2);switch(o){case"XYX":s.set(c*p,d*g,d*_,c*h);break;case"YZY":s.set(d*_,c*p,d*g,c*h);break;case"ZXZ":s.set(d*g,d*_,c*p,c*h);break;case"XZX":s.set(c*p,d*E,d*x,c*h);break;case"YXY":s.set(d*x,c*p,d*E,c*h);break;case"ZYZ":s.set(d*E,d*x,c*p,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function vi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const wv={DEG2RAD:Pa,RAD2DEG:bo,generateUUID:Si,clamp:dt,euclideanModulo:wh,mapLinear:rE,inverseLerp:sE,lerp:La,damp:oE,pingpong:aE,smoothstep:lE,smootherstep:uE,randInt:cE,randFloat:fE,randFloatSpread:dE,seededRandom:hE,degToRad:pE,radToDeg:mE,isPowerOfTwo:gE,ceilPowerOfTwo:_E,floorPowerOfTwo:vE,setQuaternionFromProperEuler:yE,normalize:Pt,denormalize:vi};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*o+e.x,this.y=a*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,i,o,a,u,c,d,h){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,d,h)}set(e,t,i,o,a,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[3],d=i[6],h=i[1],p=i[4],g=i[7],_=i[2],x=i[5],E=i[8],M=o[0],S=o[3],v=o[6],b=o[1],L=o[4],R=o[7],k=o[2],F=o[5],N=o[8];return a[0]=u*M+c*b+d*k,a[3]=u*S+c*L+d*F,a[6]=u*v+c*R+d*N,a[1]=h*M+p*b+g*k,a[4]=h*S+p*L+g*F,a[7]=h*v+p*R+g*N,a[2]=_*M+x*b+E*k,a[5]=_*S+x*L+E*F,a[8]=_*v+x*R+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-i*a*p+i*c*d+o*a*h-o*u*d}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=p*u-c*h,_=c*d-p*a,x=h*a-u*d,E=t*g+i*_+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*h-p*i)*M,e[2]=(c*i-o*u)*M,e[3]=_*M,e[4]=(p*t-o*d)*M,e[5]=(o*a-c*t)*M,e[6]=x*M,e[7]=(i*d-h*t)*M,e[8]=(u*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ff.makeScale(e,t)),this}rotate(e){return this.premultiply(Ff.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ff.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ff=new lt;function Av(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xE(){const s=Oa("canvas");return s.style.display="block",s}const Dg={};function mo(s){s in Dg||(Dg[s]=!0,console.warn(s))}function SE(s,e,t){return new Promise(function(i,o){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function EE(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ME(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ig=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ng=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TE(){const s={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(o,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===It&&(o.r=ar(o.r),o.g=ar(o.g),o.b=ar(o.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=So(o.r),o.g=So(o.g),o.b=So(o.b))),o},fromWorkingColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},toWorkingColorSpace:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Gr?Bu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,u){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Fn]:{primaries:e,whitePoint:i,transfer:Bu,toXYZ:Ig,fromXYZ:Ng,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:i,transfer:It,toXYZ:Ig,fromXYZ:Ng,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),s}const Et=TE();function ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function So(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qs;class wE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=Oa("canvas")),Qs.width=e.width,Qs.height=e.height;const i=Qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=ar(a[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ar(t[i]/255)*255):t[i]=ar(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AE=0;class Rv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(Of(o[u].image)):a.push(Of(o[u]))}else a=Of(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Of(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RE=0;class hn extends ws{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=Wr,o=Wr,a=Qn,u=rr,c=li,d=cr,h=hn.DEFAULT_ANISOTROPY,p=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Si(),this.name="",this.source=new Rv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ao:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ao:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=fv;hn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,o=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const d=e.elements,h=d[0],p=d[4],g=d[8],_=d[1],x=d[5],E=d[9],M=d[2],S=d[6],v=d[10];if(Math.abs(p-_)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(h+x+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,R=(x+1)/2,k=(v+1)/2,F=(p+_)/4,N=(g+M)/4,W=(E+S)/4;return L>R&&L>k?L<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(L),o=F/i,a=N/i):R>k?R<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),i=F/o,a=W/o):k<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(k),i=N/a,o=W/a),this.set(i,o,a,t),this}let b=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(_-p)*(_-p));return Math.abs(b)<.001&&(b=1),this.x=(S-E)/b,this.y=(g-M)/b,this.z=(_-p)/b,this.w=Math.acos((h+x+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new hn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Rv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends CE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cv extends hn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bE extends hn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,u,c){let d=i[o+0],h=i[o+1],p=i[o+2],g=i[o+3];const _=a[u+0],x=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=_,e[t+1]=x,e[t+2]=E,e[t+3]=M;return}if(g!==M||d!==_||h!==x||p!==E){let S=1-c;const v=d*_+h*x+p*E+g*M,b=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const k=Math.sqrt(L),F=Math.atan2(k,v*b);S=Math.sin(S*F)/k,c=Math.sin(c*F)/k}const R=c*b;if(d=d*S+_*R,h=h*S+x*R,p=p*S+E*R,g=g*S+M*R,S===1-c){const k=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=k,h*=k,p*=k,g*=k}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,o,a,u){const c=i[o],d=i[o+1],h=i[o+2],p=i[o+3],g=a[u],_=a[u+1],x=a[u+2],E=a[u+3];return e[t]=c*E+p*g+d*x-h*_,e[t+1]=d*E+p*_+h*g-c*x,e[t+2]=h*E+p*x+c*_-d*g,e[t+3]=p*E-c*g-d*_-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(i/2),p=c(o/2),g=c(a/2),_=d(i/2),x=d(o/2),E=d(a/2);switch(u){case"XYZ":this._x=_*p*g+h*x*E,this._y=h*x*g-_*p*E,this._z=h*p*E+_*x*g,this._w=h*p*g-_*x*E;break;case"YXZ":this._x=_*p*g+h*x*E,this._y=h*x*g-_*p*E,this._z=h*p*E-_*x*g,this._w=h*p*g+_*x*E;break;case"ZXY":this._x=_*p*g-h*x*E,this._y=h*x*g+_*p*E,this._z=h*p*E+_*x*g,this._w=h*p*g-_*x*E;break;case"ZYX":this._x=_*p*g-h*x*E,this._y=h*x*g+_*p*E,this._z=h*p*E-_*x*g,this._w=h*p*g+_*x*E;break;case"YZX":this._x=_*p*g+h*x*E,this._y=h*x*g+_*p*E,this._z=h*p*E-_*x*g,this._w=h*p*g-_*x*E;break;case"XZY":this._x=_*p*g-h*x*E,this._y=h*x*g-_*p*E,this._z=h*p*E+_*x*g,this._w=h*p*g+_*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],g=t[10],_=i+c+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(p-d)*x,this._y=(a-h)*x,this._z=(u-o)*x}else if(i>c&&i>g){const x=2*Math.sqrt(1+i-c-g);this._w=(p-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(a+h)/x}else if(c>g){const x=2*Math.sqrt(1+c-i-g);this._w=(a-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+g-i-c);this._w=(u-o)/x,this._x=(a+h)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+u*c+o*h-a*d,this._y=o*p+u*d+a*c-i*h,this._z=a*p+u*h+i*d-o*c,this._w=u*p-i*c-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=o,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*i+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),g=Math.sin((1-t)*p)/h,_=Math.sin(t*p)/h;return this._w=u*g+this._w*_,this._x=i*g+this._x*_,this._y=o*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ug.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ug.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*i),p=2*(c*t-a*o),g=2*(a*i-u*t);return this.x=t+d*h+u*g-c*p,this.y=i+d*p+c*h-a*g,this.z=o+d*g+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-a*c,this.y=a*u-i*d,this.z=i*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kf.copy(this).projectOnVector(e),this.sub(kf)}reflect(e){return this.sub(kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kf=new X,Ug=new Di;class dr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,mi):mi.fromBufferAttribute(a,u),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eu.copy(i.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),tu.subVectors(this.max,ya),Js.subVectors(e.a,ya),eo.subVectors(e.b,ya),to.subVectors(e.c,ya),Ur.subVectors(eo,Js),Fr.subVectors(to,eo),cs.subVectors(Js,to);let t=[0,-Ur.z,Ur.y,0,-Fr.z,Fr.y,0,-cs.z,cs.y,Ur.z,0,-Ur.x,Fr.z,0,-Fr.x,cs.z,0,-cs.x,-Ur.y,Ur.x,0,-Fr.y,Fr.x,0,-cs.y,cs.x,0];return!Bf(t,Js,eo,to,tu)||(t=[1,0,0,0,1,0,0,0,1],!Bf(t,Js,eo,to,tu))?!1:(nu.crossVectors(Ur,Fr),t=[nu.x,nu.y,nu.z],Bf(t,Js,eo,to,tu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new X,new X,new X,new X,new X,new X,new X,new X],mi=new X,eu=new dr,Js=new X,eo=new X,to=new X,Ur=new X,Fr=new X,cs=new X,ya=new X,tu=new X,nu=new X,fs=new X;function Bf(s,e,t,i,o){for(let a=0,u=s.length-3;a<=u;a+=3){fs.fromArray(s,a);const c=o.x*Math.abs(fs.x)+o.y*Math.abs(fs.y)+o.z*Math.abs(fs.z),d=e.dot(fs),h=t.dot(fs),p=i.dot(fs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const PE=new dr,xa=new X,zf=new X;class Ui{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):PE.setFromPoints(e).getCenter(i);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);const t=xa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(xa,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(zf)),this.expandByPoint(xa.copy(e.center).sub(zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new X,Hf=new X,iu=new X,Or=new X,Vf=new X,ru=new X,Gf=new X;class Va{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Hf.copy(e).add(t).multiplyScalar(.5),iu.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(Hf);const a=e.distanceTo(t)*.5,u=-this.direction.dot(iu),c=Or.dot(this.direction),d=-Or.dot(iu),h=Or.lengthSq(),p=Math.abs(1-u*u);let g,_,x,E;if(p>0)if(g=u*d-c,_=u*c-d,E=a*p,g>=0)if(_>=-E)if(_<=E){const M=1/p;g*=M,_*=M,x=g*(g+u*_+2*c)+_*(u*g+_+2*d)+h}else _=a,g=Math.max(0,-(u*_+c)),x=-g*g+_*(_+2*d)+h;else _=-a,g=Math.max(0,-(u*_+c)),x=-g*g+_*(_+2*d)+h;else _<=-E?(g=Math.max(0,-(-u*a+c)),_=g>0?-a:Math.min(Math.max(-a,-d),a),x=-g*g+_*(_+2*d)+h):_<=E?(g=0,_=Math.min(Math.max(-a,-d),a),x=_*(_+2*d)+h):(g=Math.max(0,-(u*a+c)),_=g>0?a:Math.min(Math.max(-a,-d),a),x=-g*g+_*(_+2*d)+h);else _=u>0?-a:a,g=Math.max(0,-(u*_+c)),x=-g*g+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Hf).addScaledVector(iu,_),x}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),o=Zi.dot(Zi)-i*i,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=i-u,d=i+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),p>=0?(a=(e.min.y-_.y)*p,u=(e.max.y-_.y)*p):(a=(e.max.y-_.y)*p,u=(e.min.y-_.y)*p),i>u||a>o||((a>i||isNaN(i))&&(i=a),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||c>o)||((c>i||i!==i)&&(i=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,o,a){Vf.subVectors(t,e),ru.subVectors(i,e),Gf.crossVectors(Vf,ru);let u=this.direction.dot(Gf),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Or.subVectors(this.origin,e);const d=c*this.direction.dot(ru.crossVectors(Or,ru));if(d<0)return null;const h=c*this.direction.dot(Vf.cross(Or));if(h<0||d+h>u)return null;const p=-c*Or.dot(Gf);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,o,a,u,c,d,h,p,g,_,x,E,M,S){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,d,h,p,g,_,x,E,M,S)}set(e,t,i,o,a,u,c,d,h,p,g,_,x,E,M,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=o,v[1]=a,v[5]=u,v[9]=c,v[13]=d,v[2]=h,v[6]=p,v[10]=g,v[14]=_,v[3]=x,v[7]=E,v[11]=M,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/no.setFromMatrixColumn(e,0).length(),a=1/no.setFromMatrixColumn(e,1).length(),u=1/no.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=u*p,x=u*g,E=c*p,M=c*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=x+E*h,t[5]=_-M*h,t[9]=-c*d,t[2]=M-_*h,t[6]=E+x*h,t[10]=u*d}else if(e.order==="YXZ"){const _=d*p,x=d*g,E=h*p,M=h*g;t[0]=_+M*c,t[4]=E*c-x,t[8]=u*h,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=x*c-E,t[6]=M+_*c,t[10]=u*d}else if(e.order==="ZXY"){const _=d*p,x=d*g,E=h*p,M=h*g;t[0]=_-M*c,t[4]=-u*g,t[8]=E+x*c,t[1]=x+E*c,t[5]=u*p,t[9]=M-_*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const _=u*p,x=u*g,E=c*p,M=c*g;t[0]=d*p,t[4]=E*h-x,t[8]=_*h+M,t[1]=d*g,t[5]=M*h+_,t[9]=x*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,x=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-_*g,t[8]=E*g+x,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=x*g+E,t[10]=_-M*g}else if(e.order==="XZY"){const _=u*d,x=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=_*g+M,t[5]=u*p,t[9]=x*g-E,t[2]=E*g-x,t[6]=c*p,t[10]=M*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LE,e,DE)}lookAt(e,t,i){const o=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),kr.crossVectors(i,$n),kr.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),kr.crossVectors(i,$n)),kr.normalize(),su.crossVectors($n,kr),o[0]=kr.x,o[4]=su.x,o[8]=$n.x,o[1]=kr.y,o[5]=su.y,o[9]=$n.y,o[2]=kr.z,o[6]=su.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[4],d=i[8],h=i[12],p=i[1],g=i[5],_=i[9],x=i[13],E=i[2],M=i[6],S=i[10],v=i[14],b=i[3],L=i[7],R=i[11],k=i[15],F=o[0],N=o[4],W=o[8],P=o[12],C=o[1],z=o[5],ae=o[9],te=o[13],fe=o[2],pe=o[6],oe=o[10],ue=o[14],H=o[3],le=o[7],re=o[11],U=o[15];return a[0]=u*F+c*C+d*fe+h*H,a[4]=u*N+c*z+d*pe+h*le,a[8]=u*W+c*ae+d*oe+h*re,a[12]=u*P+c*te+d*ue+h*U,a[1]=p*F+g*C+_*fe+x*H,a[5]=p*N+g*z+_*pe+x*le,a[9]=p*W+g*ae+_*oe+x*re,a[13]=p*P+g*te+_*ue+x*U,a[2]=E*F+M*C+S*fe+v*H,a[6]=E*N+M*z+S*pe+v*le,a[10]=E*W+M*ae+S*oe+v*re,a[14]=E*P+M*te+S*ue+v*U,a[3]=b*F+L*C+R*fe+k*H,a[7]=b*N+L*z+R*pe+k*le,a[11]=b*W+L*ae+R*oe+k*re,a[15]=b*P+L*te+R*ue+k*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],g=e[6],_=e[10],x=e[14],E=e[3],M=e[7],S=e[11],v=e[15];return E*(+a*d*g-o*h*g-a*c*_+i*h*_+o*c*x-i*d*x)+M*(+t*d*x-t*h*_+a*u*_-o*u*x+o*h*p-a*d*p)+S*(+t*h*g-t*c*x-a*u*g+i*u*x+a*c*p-i*h*p)+v*(-o*c*p-t*d*g+t*c*_+o*u*g-i*u*_+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=e[9],_=e[10],x=e[11],E=e[12],M=e[13],S=e[14],v=e[15],b=g*S*h-M*_*h+M*d*x-c*S*x-g*d*v+c*_*v,L=E*_*h-p*S*h-E*d*x+u*S*x+p*d*v-u*_*v,R=p*M*h-E*g*h+E*c*x-u*M*x-p*c*v+u*g*v,k=E*g*d-p*M*d-E*c*_+u*M*_+p*c*S-u*g*S,F=t*b+i*L+o*R+a*k;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=b*N,e[1]=(M*_*a-g*S*a-M*o*x+i*S*x+g*o*v-i*_*v)*N,e[2]=(c*S*a-M*d*a+M*o*h-i*S*h-c*o*v+i*d*v)*N,e[3]=(g*d*a-c*_*a-g*o*h+i*_*h+c*o*x-i*d*x)*N,e[4]=L*N,e[5]=(p*S*a-E*_*a+E*o*x-t*S*x-p*o*v+t*_*v)*N,e[6]=(E*d*a-u*S*a-E*o*h+t*S*h+u*o*v-t*d*v)*N,e[7]=(u*_*a-p*d*a+p*o*h-t*_*h-u*o*x+t*d*x)*N,e[8]=R*N,e[9]=(E*g*a-p*M*a-E*i*x+t*M*x+p*i*v-t*g*v)*N,e[10]=(u*M*a-E*c*a+E*i*h-t*M*h-u*i*v+t*c*v)*N,e[11]=(p*c*a-u*g*a-p*i*h+t*g*h+u*i*x-t*c*x)*N,e[12]=k*N,e[13]=(p*M*o-E*g*o+E*i*_-t*M*_-p*i*S+t*g*S)*N,e[14]=(E*c*o-u*M*o-E*i*d+t*M*d+u*i*S-t*c*S)*N,e[15]=(u*g*o-p*c*o+p*i*d-t*g*d-u*i*_+t*c*_)*N,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,u=e.x,c=e.y,d=e.z,h=a*u,p=a*c;return this.set(h*u+i,h*c-o*d,h*d+o*c,0,h*c+o*d,p*c+i,p*d-o*u,0,h*d-o*c,p*d+o*u,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,u){return this.set(1,i,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,p=u+u,g=c+c,_=a*h,x=a*p,E=a*g,M=u*p,S=u*g,v=c*g,b=d*h,L=d*p,R=d*g,k=i.x,F=i.y,N=i.z;return o[0]=(1-(M+v))*k,o[1]=(x+R)*k,o[2]=(E-L)*k,o[3]=0,o[4]=(x-R)*F,o[5]=(1-(_+v))*F,o[6]=(S+b)*F,o[7]=0,o[8]=(E+L)*N,o[9]=(S-b)*N,o[10]=(1-(_+M))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=no.set(o[0],o[1],o[2]).length();const u=no.set(o[4],o[5],o[6]).length(),c=no.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],gi.copy(this);const h=1/a,p=1/u,g=1/c;return gi.elements[0]*=h,gi.elements[1]*=h,gi.elements[2]*=h,gi.elements[4]*=p,gi.elements[5]*=p,gi.elements[6]*=p,gi.elements[8]*=g,gi.elements[9]*=g,gi.elements[10]*=g,t.setFromRotationMatrix(gi),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,o,a,u,c=sr){const d=this.elements,h=2*a/(t-e),p=2*a/(i-o),g=(t+e)/(t-e),_=(i+o)/(i-o);let x,E;if(c===sr)x=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===zu)x=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=p,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,o,a,u,c=sr){const d=this.elements,h=1/(t-e),p=1/(i-o),g=1/(u-a),_=(t+e)*h,x=(i+o)*p;let E,M;if(c===sr)E=(u+a)*g,M=-2*g;else if(c===zu)E=a*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const no=new X,gi=new ut,LE=new X(0,0,0),DE=new X(1,1,1),kr=new X,su=new X,$n=new X,Fg=new ut,Og=new Di;class Ii{constructor(e=0,t=0,i=0,o=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],d=o[1],h=o[5],p=o[9],g=o[2],_=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-dt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Og.setFromEuler(this),this.setFromQuaternion(Og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IE=0;const kg=new X,io=new Di,Qi=new ut,ou=new X,Sa=new X,NE=new X,UE=new Di,Bg=new X(1,0,0),zg=new X(0,1,0),Hg=new X(0,0,1),Vg={type:"added"},FE={type:"removed"},ro={type:"childadded",child:null},Wf={type:"childremoved",child:null};class jt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new X,t=new Ii,i=new Di,o=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ut},normalMatrix:{value:new lt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(zg,e)}rotateZ(e){return this.rotateOnAxis(Hg,e)}translateOnAxis(e,t){return kg.copy(e).applyQuaternion(this.quaternion),this.position.add(kg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(zg,e)}translateZ(e){return this.translateOnAxis(Hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ou.copy(e):ou.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Sa,ou,this.up):Qi.lookAt(ou,Sa,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),io.setFromRotationMatrix(Qi),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vg),ro.child=e,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(FE),Wf.child=e,this.dispatchEvent(Wf),Wf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vg),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,NE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,UE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),g=u(e.shapes),_=u(e.skeletons),x=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=o,i;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}jt.DEFAULT_UP=new X(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new X,Ji=new X,Xf=new X,er=new X,so=new X,oo=new X,Gg=new X,jf=new X,Yf=new X,qf=new X,Kf=new Rt,$f=new Rt,Zf=new Rt;class yi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),_i.subVectors(e,t),o.cross(_i);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){_i.subVectors(o,t),Ji.subVectors(i,t),Xf.subVectors(e,t);const u=_i.dot(_i),c=_i.dot(Ji),d=_i.dot(Xf),h=Ji.dot(Ji),p=Ji.dot(Xf),g=u*h-c*c;if(g===0)return a.set(0,0,0),null;const _=1/g,x=(h*d-c*p)*_,E=(u*p-c*d)*_;return a.set(1-x-E,E,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,i,o,a,u,c,d){return this.getBarycoord(e,t,i,o,er)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,er.x),d.addScaledVector(u,er.y),d.addScaledVector(c,er.z),d)}static getInterpolatedAttribute(e,t,i,o,a,u){return Kf.setScalar(0),$f.setScalar(0),Zf.setScalar(0),Kf.fromBufferAttribute(e,t),$f.fromBufferAttribute(e,i),Zf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Kf,a.x),u.addScaledVector($f,a.y),u.addScaledVector(Zf,a.z),u}static isFrontFacing(e,t,i,o){return _i.subVectors(i,t),Ji.subVectors(e,t),_i.cross(Ji).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),_i.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return yi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let u,c;so.subVectors(o,i),oo.subVectors(a,i),jf.subVectors(e,i);const d=so.dot(jf),h=oo.dot(jf);if(d<=0&&h<=0)return t.copy(i);Yf.subVectors(e,o);const p=so.dot(Yf),g=oo.dot(Yf);if(p>=0&&g<=p)return t.copy(o);const _=d*g-p*h;if(_<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(i).addScaledVector(so,u);qf.subVectors(e,a);const x=so.dot(qf),E=oo.dot(qf);if(E>=0&&x<=E)return t.copy(a);const M=x*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(i).addScaledVector(oo,c);const S=p*E-x*g;if(S<=0&&g-p>=0&&x-E>=0)return Gg.subVectors(a,o),c=(g-p)/(g-p+(x-E)),t.copy(o).addScaledVector(Gg,c);const v=1/(S+M+_);return u=M*v,c=_*v,t.copy(i).addScaledVector(so,u).addScaledVector(oo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},au={h:0,s:0,l:0};function Qf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Et.workingColorSpace){if(e=wh(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Qf(u,a,e+1/3),this.g=Qf(u,a,e),this.b=Qf(u,a,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,t=dn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const i=Pv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Et.fromWorkingColorSpace(wn.copy(this),e),Math.round(dt(wn.r*255,0,255))*65536+Math.round(dt(wn.g*255,0,255))*256+Math.round(dt(wn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,o=wn.g,a=wn.b,u=Math.max(i,o,a),c=Math.min(i,o,a);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=p<=.5?g/(u+c):g/(2-u-c),u){case i:d=(o-a)/g+(o<a?6:0);break;case o:d=(a-i)/g+2;break;case a:d=(i-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=dn){Et.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,i=wn.g,o=wn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(au);const i=La(Br.h,au.h,t),o=La(Br.s,au.s,t),a=La(Br.l,au.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new ot;ot.NAMES=Pv;let OE=0;class Pi extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=yo,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Ed,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ed&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xs extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new X,lu=new it;class Un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sh,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lu.fromBufferAttribute(this,t),lu.applyMatrix3(e),this.setXY(t,lu.x,lu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),o=Pt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),o=Pt(o,this.array),a=Pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sh&&(e.usage=this.usage),e}}class Lv extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dv extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lr extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kE=0;const oi=new ut,Jf=new jt,ao=new X,Zn=new dr,Ea=new dr,fn=new X;class Fi extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Dv:Lv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new lt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,i){return oi.makeTranslation(e,t,i),this.applyMatrix4(oi),this}scale(e,t,i){return oi.makeScale(e,t,i),this.applyMatrix4(oi),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const u=e[o];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new lr(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];Ea.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(Zn.min,Ea.min),Zn.expandByPoint(fn),fn.addVectors(Zn.max,Ea.max),Zn.expandByPoint(fn)):(Zn.expandByPoint(Ea.min),Zn.expandByPoint(Ea.max))}Zn.getCenter(i);let o=0;for(let a=0,u=e.count;a<u;a++)fn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(fn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)fn.fromBufferAttribute(c,h),d&&(ao.fromBufferAttribute(e,h),fn.add(ao)),o=Math.max(o,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let W=0;W<i.count;W++)c[W]=new X,d[W]=new X;const h=new X,p=new X,g=new X,_=new it,x=new it,E=new it,M=new X,S=new X;function v(W,P,C){h.fromBufferAttribute(i,W),p.fromBufferAttribute(i,P),g.fromBufferAttribute(i,C),_.fromBufferAttribute(a,W),x.fromBufferAttribute(a,P),E.fromBufferAttribute(a,C),p.sub(h),g.sub(h),x.sub(_),E.sub(_);const z=1/(x.x*E.y-E.x*x.y);isFinite(z)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(z),S.copy(g).multiplyScalar(x.x).addScaledVector(p,-E.x).multiplyScalar(z),c[W].add(M),c[P].add(M),c[C].add(M),d[W].add(S),d[P].add(S),d[C].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let W=0,P=b.length;W<P;++W){const C=b[W],z=C.start,ae=C.count;for(let te=z,fe=z+ae;te<fe;te+=3)v(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new X,R=new X,k=new X,F=new X;function N(W){k.fromBufferAttribute(o,W),F.copy(k);const P=c[W];L.copy(P),L.sub(k.multiplyScalar(k.dot(P))).normalize(),R.crossVectors(F,P);const z=R.dot(d[W])<0?-1:1;u.setXYZW(W,L.x,L.y,L.z,z)}for(let W=0,P=b.length;W<P;++W){const C=b[W],z=C.start,ae=C.count;for(let te=z,fe=z+ae;te<fe;te+=3)N(e.getX(te+0)),N(e.getX(te+1)),N(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const o=new X,a=new X,u=new X,c=new X,d=new X,h=new X,p=new X,g=new X;if(e)for(let _=0,x=e.count;_<x;_+=3){const E=e.getX(_+0),M=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),p.subVectors(u,a),g.subVectors(o,a),p.cross(g),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),c.add(p),d.add(p),h.add(p),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,x=t.count;_<x;_+=3)o.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),p.subVectors(u,a),g.subVectors(o,a),p.cross(g),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,g=c.normalized,_=new h.constructor(d.length*p);let x=0,E=0;for(let M=0,S=d.length;M<S;M++){c.isInterleavedBufferAttribute?x=d[M]*c.data.stride+c.offset:x=d[M]*p;for(let v=0;v<p;v++)_[E++]=h[x++]}return new Un(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fi,i=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,i);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,g=h.length;p<g;p++){const _=h[p],x=e(_,i);d.push(x)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,_=h.length;g<_;g++){const x=h[g];p.push(x.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],g=a[h];for(let _=0,x=g.length;_<x;_++)p.push(g[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wg=new ut,ds=new Va,uu=new Ui,Xg=new X,cu=new X,fu=new X,du=new X,ed=new X,hu=new X,jg=new X,pu=new X;class Jn extends jt{constructor(e=new Fi,t=new xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){hu.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],g=a[d];p!==0&&(ed.fromBufferAttribute(g,e),u?hu.addScaledVector(ed,p):hu.addScaledVector(ed.sub(t),p))}t.add(hu)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uu.copy(i.boundingSphere),uu.applyMatrix4(a),ds.copy(e.ray).recast(e.near),!(uu.containsPoint(ds.origin)===!1&&(ds.intersectSphere(uu,Xg)===null||ds.origin.distanceToSquared(Xg)>(e.far-e.near)**2))&&(Wg.copy(a).invert(),ds.copy(e.ray).applyMatrix4(Wg),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let o;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,_=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=_.length;E<M;E++){const S=_[E],v=u[S.materialIndex],b=Math.max(S.start,x.start),L=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let R=b,k=L;R<k;R+=3){const F=c.getX(R),N=c.getX(R+1),W=c.getX(R+2);o=mu(this,v,e,i,h,p,g,F,N,W),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),M=Math.min(c.count,x.start+x.count);for(let S=E,v=M;S<v;S+=3){const b=c.getX(S),L=c.getX(S+1),R=c.getX(S+2);o=mu(this,u,e,i,h,p,g,b,L,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=_.length;E<M;E++){const S=_[E],v=u[S.materialIndex],b=Math.max(S.start,x.start),L=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let R=b,k=L;R<k;R+=3){const F=R,N=R+1,W=R+2;o=mu(this,v,e,i,h,p,g,F,N,W),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),M=Math.min(d.count,x.start+x.count);for(let S=E,v=M;S<v;S+=3){const b=S,L=S+1,R=S+2;o=mu(this,u,e,i,h,p,g,b,L,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function BE(s,e,t,i,o,a,u,c){let d;if(e.side===Xn?d=i.intersectTriangle(u,a,o,!0,c):d=i.intersectTriangle(o,a,u,e.side===ur,c),d===null)return null;pu.copy(c),pu.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(pu);return h<t.near||h>t.far?null:{distance:h,point:pu.clone(),object:s}}function mu(s,e,t,i,o,a,u,c,d,h){s.getVertexPosition(c,cu),s.getVertexPosition(d,fu),s.getVertexPosition(h,du);const p=BE(s,e,t,i,cu,fu,du,jg);if(p){const g=new X;yi.getBarycoord(jg,cu,fu,du,g),o&&(p.uv=yi.getInterpolatedAttribute(o,c,d,h,g,new it)),a&&(p.uv1=yi.getInterpolatedAttribute(a,c,d,h,g,new it)),u&&(p.normal=yi.getInterpolatedAttribute(u,c,d,h,g,new X),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:d,c:h,normal:new X,materialIndex:0};yi.getNormal(cu,fu,du,_.normal),p.face=_,p.barycoord=g}return p}class Ga extends Fi{constructor(e=1,t=1,i=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],p=[],g=[];let _=0,x=0;E("z","y","x",-1,-1,i,t,e,u,a,0),E("z","y","x",1,-1,i,t,-e,u,a,1),E("x","z","y",1,1,e,i,t,o,u,2),E("x","z","y",1,-1,e,i,-t,o,u,3),E("x","y","z",1,-1,e,t,i,o,a,4),E("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(d),this.setAttribute("position",new lr(h,3)),this.setAttribute("normal",new lr(p,3)),this.setAttribute("uv",new lr(g,2));function E(M,S,v,b,L,R,k,F,N,W,P){const C=R/N,z=k/W,ae=R/2,te=k/2,fe=F/2,pe=N+1,oe=W+1;let ue=0,H=0;const le=new X;for(let re=0;re<oe;re++){const U=re*z-te;for(let ne=0;ne<pe;ne++){const Ue=ne*C-ae;le[M]=Ue*b,le[S]=U*L,le[v]=fe,h.push(le.x,le.y,le.z),le[M]=0,le[S]=0,le[v]=F>0?1:-1,p.push(le.x,le.y,le.z),g.push(ne/N),g.push(1-re/W),ue+=1}}for(let re=0;re<W;re++)for(let U=0;U<N;U++){const ne=_+U+pe*re,Ue=_+U+pe*(re+1),Q=_+(U+1)+pe*(re+1),he=_+(U+1)+pe*re;d.push(ne,Ue,he),d.push(Ue,Q,he),H+=6}c.addGroup(x,H,P),x+=H,_+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Po(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function In(s){const e={};for(let t=0;t<s.length;t++){const i=Po(s[t]);for(const o in i)e[o]=i[o]}return e}function zE(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Iv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const HE={clone:Po,merge:In};var VE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kr extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VE,this.fragmentShader=GE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=zE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Nv extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zr=new X,Yg=new it,qg=new it;class An extends Nv{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,Yg,qg),t.subVectors(qg,Yg)}setViewOffset(e,t,i,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*o/d,t-=u.offsetY*i/h,o*=u.width/d,i*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lo=-90,uo=1;class WE extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new An(lo,uo,e,t);o.layers=this.layers,this.add(o);const a=new An(lo,uo,e,t);a.layers=this.layers,this.add(a);const u=new An(lo,uo,e,t);u.layers=this.layers,this.add(u);const c=new An(lo,uo,e,t);c.layers=this.layers,this.add(c);const d=new An(lo,uo,e,t);d.layers=this.layers,this.add(d);const h=new An(lo,uo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===sr)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===zu)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,p]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,c),e.setRenderTarget(i,3,o),e.render(t,d),e.setRenderTarget(i,4,o),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(g,_,x),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Ah extends hn{constructor(e,t,i,o,a,u,c,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:To,super(e,t,i,o,a,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class XE extends Ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Ah(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ga(5,5,5),a=new Kr({name:"CubemapFromEquirect",uniforms:Po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:jr});a.uniforms.tEquirect.value=t;const u=new Jn(o,a),c=t.minFilter;return t.minFilter===rr&&(t.minFilter=Qn),new WE(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(a)}}class ju{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=t}clone(){return new ju(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uv extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sh,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dn=new X;class Rh{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),o=Pt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),o=Pt(o,this.array),a=Pt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kg=new X,$g=new Rt,Zg=new Rt,YE=new X,Qg=new ut,gu=new X,td=new Ui,Jg=new ut,nd=new Va;class qE extends Jn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wg,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,gu),this.boundingBox.expandByPoint(gu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ui),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,gu),this.boundingSphere.expandByPoint(gu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,o=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),td.copy(this.boundingSphere),td.applyMatrix4(o),e.ray.intersectsSphere(td)!==!1&&(Jg.copy(o).invert(),nd.copy(e.ray).applyMatrix4(Jg),!(this.boundingBox!==null&&nd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Rt,t=this.geometry.attributes.skinWeight;for(let i=0,o=t.count;i<o;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===XS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,o=this.geometry;$g.fromBufferAttribute(o.attributes.skinIndex,e),Zg.fromBufferAttribute(o.attributes.skinWeight,e),Kg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const u=Zg.getComponent(a);if(u!==0){const c=$g.getComponent(a);Qg.multiplyMatrices(i.bones[c].matrixWorld,i.boneInverses[c]),t.addScaledVector(YE.copy(Kg).applyMatrix4(Qg),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Fv extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ov extends hn{constructor(e=null,t=1,i=1,o,a,u,c,d,h=Nn,p=Nn,g,_){super(null,u,c,d,h,p,o,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const e_=new ut,KE=new ut;class Ch{constructor(e=[],t=[]){this.uuid=Si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,o=this.bones.length;i<o;i++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ut;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,o=this.boneTexture;for(let a=0,u=e.length;a<u;a++){const c=e[a]?e[a].matrixWorld:KE;e_.multiplyMatrices(c,t[a]),e_.toArray(i,a*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new Ch(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ov(t,e,e,li,xi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const o=this.bones[t];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,o=e.bones.length;i<o;i++){const a=e.bones[i];let u=t[a];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),u=new Fv),this.bones.push(u),this.boneInverses.push(new ut().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let o=0,a=t.length;o<a;o++){const u=t[o];e.bones.push(u.uuid);const c=i[o];e.boneInverses.push(c.toArray())}return e}}class oh extends Un{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const co=new ut,t_=new ut,_u=[],n_=new dr,$E=new ut,Ma=new Jn,Ta=new Ui;class ZE extends Jn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,$E)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,co),n_.copy(e.boundingBox).applyMatrix4(co),this.boundingBox.union(n_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,co),Ta.copy(e.boundingSphere).applyMatrix4(co),this.boundingSphere.union(Ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,u=e*a+1;for(let c=0;c<i.length;c++)i[c]=o[u+c]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(i),e.ray.intersectsSphere(Ta)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,co),t_.multiplyMatrices(i,co),Ma.matrixWorld=t_,Ma.raycast(e,_u);for(let u=0,c=_u.length;u<c;u++){const d=_u[u];d.instanceId=a,d.object=this,t.push(d)}_u.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ov(new Float32Array(o*this.count),o,this.count,Sh,xi));const a=this.morphTexture.source.data.data;let u=0;for(let h=0;h<i.length;h++)u+=i[h];const c=this.geometry.morphTargetsRelative?1:1-u,d=o*e;a[d]=c,a.set(i,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const id=new X,QE=new X,JE=new lt;class Vr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=id.subVectors(i,t).cross(QE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(id),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||JE.getNormalMatrix(e),o=this.coplanarPoint(id).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Ui,vu=new X;class bh{constructor(e=new Vr,t=new Vr,i=new Vr,o=new Vr,a=new Vr,u=new Vr){this.planes=[e,t,i,o,a,u]}set(e,t,i,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=sr){const i=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],d=o[3],h=o[4],p=o[5],g=o[6],_=o[7],x=o[8],E=o[9],M=o[10],S=o[11],v=o[12],b=o[13],L=o[14],R=o[15];if(i[0].setComponents(d-a,_-h,S-x,R-v).normalize(),i[1].setComponents(d+a,_+h,S+x,R+v).normalize(),i[2].setComponents(d+u,_+p,S+E,R+b).normalize(),i[3].setComponents(d-u,_-p,S-E,R-b).normalize(),i[4].setComponents(d-c,_-g,S-M,R-L).normalize(),t===sr)i[5].setComponents(d+c,_+g,S+M,R+L).normalize();else if(t===zu)i[5].setComponents(c,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(vu.x=o.normal.x>0?e.max.x:e.min.x,vu.y=o.normal.y>0?e.max.y:e.min.y,vu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(vu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kv extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hu=new X,Vu=new X,i_=new ut,wa=new Va,yu=new Ui,rd=new X,r_=new X;class Ph extends jt{constructor(e=new Fi,t=new kv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)Hu.fromBufferAttribute(t,o-1),Vu.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=Hu.distanceTo(Vu);e.setAttribute("lineDistance",new lr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yu.copy(i.boundingSphere),yu.applyMatrix4(o),yu.radius+=a,e.ray.intersectsSphere(yu)===!1)return;i_.copy(o).invert(),wa.copy(e.ray).applyMatrix4(i_);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=this.isLineSegments?2:1,p=i.index,_=i.attributes.position;if(p!==null){const x=Math.max(0,u.start),E=Math.min(p.count,u.start+u.count);for(let M=x,S=E-1;M<S;M+=h){const v=p.getX(M),b=p.getX(M+1),L=xu(this,e,wa,d,v,b);L&&t.push(L)}if(this.isLineLoop){const M=p.getX(E-1),S=p.getX(x),v=xu(this,e,wa,d,M,S);v&&t.push(v)}}else{const x=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let M=x,S=E-1;M<S;M+=h){const v=xu(this,e,wa,d,M,M+1);v&&t.push(v)}if(this.isLineLoop){const M=xu(this,e,wa,d,E-1,x);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function xu(s,e,t,i,o,a){const u=s.geometry.attributes.position;if(Hu.fromBufferAttribute(u,o),Vu.fromBufferAttribute(u,a),t.distanceSqToSegment(Hu,Vu,rd,r_)>i)return;rd.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(rd);if(!(d<e.near||d>e.far))return{distance:d,point:r_.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const s_=new X,o_=new X;class eM extends Ph{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)s_.fromBufferAttribute(t,o),o_.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+s_.distanceTo(o_);e.setAttribute("lineDistance",new lr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tM extends Ph{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Bv extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const a_=new ut,ah=new Va,Su=new Ui,Eu=new X;class nM extends jt{constructor(e=new Fi,t=new Bv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Su.copy(i.boundingSphere),Su.applyMatrix4(o),Su.radius+=a,e.ray.intersectsSphere(Su)===!1)return;a_.copy(o).invert(),ah.copy(e.ray).applyMatrix4(a_);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=i.index,g=i.attributes.position;if(h!==null){const _=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let E=_,M=x;E<M;E++){const S=h.getX(E);Eu.fromBufferAttribute(g,S),l_(Eu,S,d,o,e,t,this)}}else{const _=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let E=_,M=x;E<M;E++)Eu.fromBufferAttribute(g,E),l_(Eu,E,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function l_(s,e,t,i,o,a,u){const c=ah.distanceSqToPoint(s);if(c<t){const d=new X;ah.closestPointToPoint(s,d),d.applyMatrix4(i);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Ss extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class zv extends hn{constructor(e,t,i,o,a,u,c,d,h,p=xo){if(p!==xo&&p!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===xo&&(i=Es),i===void 0&&p===Co&&(i=Ro),super(null,o,a,u,c,d,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Nn,this.minFilter=d!==void 0?d:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yu extends Fi{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(i),d=Math.floor(o),h=c+1,p=d+1,g=e/c,_=t/d,x=[],E=[],M=[],S=[];for(let v=0;v<p;v++){const b=v*_-u;for(let L=0;L<h;L++){const R=L*g-a;E.push(R,-b,0),M.push(0,0,1),S.push(L/c),S.push(1-v/d)}}for(let v=0;v<d;v++)for(let b=0;b<c;b++){const L=b+h*v,R=b+h*(v+1),k=b+1+h*(v+1),F=b+1+h*v;x.push(L,R,F),x.push(R,k,F)}this.setIndex(x),this.setAttribute("position",new lr(E,3)),this.setAttribute("normal",new lr(M,3)),this.setAttribute("uv",new lr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lh extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mv,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oi extends Lh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class iM extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rM extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Mu(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function sM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function oM(s){function e(o,a){return s[o]-s[a]}const t=s.length,i=new Array(t);for(let o=0;o!==t;++o)i[o]=o;return i.sort(e),i}function u_(s,e,t){const i=s.length,o=new s.constructor(i);for(let a=0,u=0;u!==i;++a){const c=t[a]*e;for(let d=0;d!==e;++d)o[u++]=s[c+d]}return o}function Hv(s,e,t,i){let o=1,a=s[0];for(;a!==void 0&&a[i]===void 0;)a=s[o++];if(a===void 0)return;let u=a[i];if(u!==void 0)if(Array.isArray(u))do u=a[i],u!==void 0&&(e.push(a.time),t.push.apply(t,u)),a=s[o++];while(a!==void 0);else if(u.toArray!==void 0)do u=a[i],u!==void 0&&(e.push(a.time),u.toArray(t,t.length)),a=s[o++];while(a!==void 0);else do u=a[i],u!==void 0&&(e.push(a.time),t.push(u)),a=s[o++];while(a!==void 0)}class Wa{constructor(e,t,i,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,o=t[i],a=t[i-1];e:{t:{let u;n:{i:if(!(e<o)){for(let c=i+2;;){if(o===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(a=o,o=t[++i],e<o)break t}u=t.length;break n}if(!(e>=a)){const c=t[1];e<c&&(i=2,a=c);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(o=a,a=t[--i-1],e>=a)break t}u=i,i=0;break n}break e}for(;i<u;){const c=i+u>>>1;e<t[c]?u=c:i=c+1}if(o=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,o)}return this.interpolate_(i,a,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o;for(let u=0;u!==o;++u)t[u]=i[a+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class aM extends Wa{constructor(e,t,i,o){super(e,t,i,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ag,endingEnd:Ag}}intervalChanged_(e,t,i){const o=this.parameterPositions;let a=e-2,u=e+1,c=o[a],d=o[u];if(c===void 0)switch(this.getSettings_().endingStart){case Rg:a=e,c=2*t-i;break;case Cg:a=o.length-2,c=t+o[a]-o[a+1];break;default:a=e,c=i}if(d===void 0)switch(this.getSettings_().endingEnd){case Rg:u=e,d=2*i-t;break;case Cg:u=1,d=i+o[1]-o[0];break;default:u=e-1,d=t}const h=(i-t)*.5,p=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(d-i),this._offsetPrev=a*p,this._offsetNext=u*p}interpolate_(e,t,i,o){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,p=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,x=this._weightNext,E=(i-t)/(o-t),M=E*E,S=M*E,v=-_*S+2*_*M-_*E,b=(1+_)*S+(-1.5-2*_)*M+(-.5+_)*E+1,L=(-1-x)*S+(1.5+x)*M+.5*E,R=x*S-x*M;for(let k=0;k!==c;++k)a[k]=v*u[p+k]+b*u[h+k]+L*u[d+k]+R*u[g+k];return a}}class lM extends Wa{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=e*c,h=d-c,p=(i-t)/(o-t),g=1-p;for(let _=0;_!==c;++_)a[_]=u[h+_]*g+u[d+_]*p;return a}}class uM extends Wa{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class ki{constructor(e,t,i,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mu(t,this.TimeBufferType),this.values=Mu(i,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Mu(e.times,Array),values:Mu(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(i.interpolation=o)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new uM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new aM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case Uf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Uf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]*=e}return this}trim(e,t){const i=this.times,o=i.length;let a=0,u=o-1;for(;a!==o&&i[a]<e;)++a;for(;u!==-1&&i[u]>t;)--u;if(++u,a!==0||u!==o){a>=u&&(u=Math.max(u,1),a=u-1);const c=this.getValueSize();this.times=i.slice(a,u),this.values=this.values.slice(a*c,u*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,o=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let c=0;c!==a;c++){const d=i[c];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,d),e=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,d,u),e=!1;break}u=d}if(o!==void 0&&sM(o))for(let c=0,d=o.length;c!==d;++c){const h=o[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),o=this.getInterpolation()===Uf,a=e.length-1;let u=1;for(let c=1;c<a;++c){let d=!1;const h=e[c],p=e[c+1];if(h!==p&&(c!==1||h!==e[0]))if(o)d=!0;else{const g=c*i,_=g-i,x=g+i;for(let E=0;E!==i;++E){const M=t[g+E];if(M!==t[_+E]||M!==t[x+E]){d=!0;break}}}if(d){if(c!==u){e[u]=e[c];const g=c*i,_=u*i;for(let x=0;x!==i;++x)t[_+x]=t[g+x]}++u}}if(a>0){e[u]=e[a];for(let c=a*i,d=u*i,h=0;h!==i;++h)t[d+h]=t[c+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,o=new i(this.name,e,t);return o.createInterpolant=this.createInterpolant,o}}ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=Fa;class Fo extends ki{constructor(e,t,i){super(e,t,i)}}Fo.prototype.ValueTypeName="bool";Fo.prototype.ValueBufferType=Array;Fo.prototype.DefaultInterpolation=Ua;Fo.prototype.InterpolantFactoryMethodLinear=void 0;Fo.prototype.InterpolantFactoryMethodSmooth=void 0;class Vv extends ki{}Vv.prototype.ValueTypeName="color";class Lo extends ki{}Lo.prototype.ValueTypeName="number";class cM extends Wa{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=(i-t)/(o-t);let h=e*c;for(let p=h+c;h!==p;h+=4)Di.slerpFlat(a,0,u,h-c,u,h,d);return a}}class Do extends ki{InterpolantFactoryMethodLinear(e){return new cM(this.times,this.values,this.getValueSize(),e)}}Do.prototype.ValueTypeName="quaternion";Do.prototype.InterpolantFactoryMethodSmooth=void 0;class Oo extends ki{constructor(e,t,i){super(e,t,i)}}Oo.prototype.ValueTypeName="string";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=Ua;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;class Io extends ki{}Io.prototype.ValueTypeName="vector";class fM{constructor(e="",t=-1,i=[],o=jS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=o,this.uuid=Si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,o=1/(e.fps||1);for(let u=0,c=i.length;u!==c;++u)t.push(hM(i[u]).scale(o));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,o={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,u=i.length;a!==u;++a)t.push(ki.toJSON(i[a]));return o}static CreateFromMorphTargetSequence(e,t,i,o){const a=t.length,u=[];for(let c=0;c<a;c++){let d=[],h=[];d.push((c+a-1)%a,c,(c+1)%a),h.push(0,1,0);const p=oM(d);d=u_(d,1,p),h=u_(h,1,p),!o&&d[0]===0&&(d.push(a),h.push(h[0])),u.push(new Lo(".morphTargetInfluences["+t[c].name+"]",d,h).scale(1/i))}return new this(e,-1,u)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const o=e;i=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<i.length;o++)if(i[o].name===t)return i[o];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const o={},a=/^([\w-]*?)([\d]+)$/;for(let c=0,d=e.length;c<d;c++){const h=e[c],p=h.name.match(a);if(p&&p.length>1){const g=p[1];let _=o[g];_||(o[g]=_=[]),_.push(h)}}const u=[];for(const c in o)u.push(this.CreateFromMorphTargetSequence(c,o[c],t,i));return u}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,x,E,M){if(x.length!==0){const S=[],v=[];Hv(x,S,v,E),S.length!==0&&M.push(new g(_,S,v))}},o=[],a=e.name||"default",u=e.fps||30,c=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const _=h[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let E;for(E=0;E<_.length;E++)if(_[E].morphTargets)for(let M=0;M<_[E].morphTargets.length;M++)x[_[E].morphTargets[M]]=-1;for(const M in x){const S=[],v=[];for(let b=0;b!==_[E].morphTargets.length;++b){const L=_[E];S.push(L.time),v.push(L.morphTarget===M?1:0)}o.push(new Lo(".morphTargetInfluence["+M+"]",S,v))}d=x.length*u}else{const x=".bones["+t[g].name+"]";i(Io,x+".position",_,"pos",o),i(Do,x+".quaternion",_,"rot",o),i(Io,x+".scale",_,"scl",o)}}return o.length===0?null:new this(a,d,o,c)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,o=e.length;i!==o;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function dM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Lo;case"vector":case"vector2":case"vector3":case"vector4":return Io;case"color":return Vv;case"quaternion":return Do;case"bool":case"boolean":return Fo;case"string":return Oo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function hM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dM(s.type);if(s.times===void 0){const t=[],i=[];Hv(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Xr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class pM{constructor(e,t,i){const o=this;let a=!1,u=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){c++,a===!1&&o.onStart!==void 0&&o.onStart(p,u,c),a=!0},this.itemEnd=function(p){u++,o.onProgress!==void 0&&o.onProgress(p,u,c),u===c&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return h.push(p,g),this},this.removeHandler=function(p){const g=h.indexOf(p);return g!==-1&&h.splice(g,2),this},this.getHandler=function(p){for(let g=0,_=h.length;g<_;g+=2){const x=h[g],E=h[g+1];if(x.global&&(x.lastIndex=0),x.test(p))return E}return null}}}const mM=new pM;class As{constructor(e){this.manager=e!==void 0?e:mM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,a){i.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}As.DEFAULT_MATERIAL_NAME="__DEFAULT";const tr={};class gM extends Error{constructor(e,t){super(e),this.response=t}}class Gv extends As{constructor(e){super(e)}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Xr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(tr[e]!==void 0){tr[e].push({onLoad:t,onProgress:i,onError:o});return}tr[e]=[],tr[e].push({onLoad:t,onProgress:i,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,d=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=tr[e],g=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=_?parseInt(_):0,E=x!==0;let M=0;const S=new ReadableStream({start(v){b();function b(){g.read().then(({done:L,value:R})=>{if(L)v.close();else{M+=R.byteLength;const k=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:x});for(let F=0,N=p.length;F<N;F++){const W=p[F];W.onProgress&&W.onProgress(k)}v.enqueue(R),b()}},L=>{v.error(L)})}}});return new Response(S)}else throw new gM(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return h.json();default:if(c===void 0)return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(c),_=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(_);return h.arrayBuffer().then(E=>x.decode(E))}}}).then(h=>{Xr.add(e,h);const p=tr[e];delete tr[e];for(let g=0,_=p.length;g<_;g++){const x=p[g];x.onLoad&&x.onLoad(h)}}).catch(h=>{const p=tr[e];if(p===void 0)throw this.manager.itemError(e),h;delete tr[e];for(let g=0,_=p.length;g<_;g++){const x=p[g];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Wv extends As{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=Xr.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=Oa("img");function d(){p(),Xr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(g){p(),o&&o(g),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",d,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class Xv extends As{constructor(e){super(e)}load(e,t,i,o){const a=new Ah;a.colorSpace=dn;const u=new Wv(this.manager);u.setCrossOrigin(this.crossOrigin),u.setPath(this.path);let c=0;function d(h){u.load(e[h],function(p){a.images[h]=p,c++,c===6&&(a.needsUpdate=!0,t&&t(a))},void 0,o)}for(let h=0;h<e.length;++h)d(h);return a}}class _M extends As{constructor(e){super(e)}load(e,t,i,o){const a=new hn,u=new Wv(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},i,o),a}}class qu extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const sd=new ut,c_=new X,f_=new X;class Dh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bh,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;c_.setFromMatrixPosition(e.matrixWorld),t.position.copy(c_),f_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(f_),t.updateMatrixWorld(),sd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vM extends Dh{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=bo*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||o!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=o,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yM extends qu{constructor(e,t,i=0,o=Math.PI/3,a=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=o,this.penumbra=a,this.decay=u,this.map=null,this.shadow=new vM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const d_=new ut,Aa=new X,od=new X;class xM extends Dh{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,o=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Aa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Aa),od.copy(i.position),od.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(od),i.updateMatrixWorld(),o.makeTranslation(-Aa.x,-Aa.y,-Aa.z),d_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(d_)}}class SM extends qu{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new xM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ih extends Nv{constructor(e=-1,t=1,i=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class EM extends Dh{constructor(){super(new Ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nh extends qu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new EM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jv extends qu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Da{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,o=e.length;i<o;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class MM extends As{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=Xr.get(e);if(u!==void 0){if(a.manager.itemStart(e),u.then){u.then(h=>{t&&t(h),a.manager.itemEnd(e)}).catch(h=>{o&&o(h)});return}return setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const d=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return Xr.add(e,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){o&&o(h),Xr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Xr.add(e,d),a.manager.itemStart(e)}}class TM extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Uh="\\[\\]\\.:\\/",wM=new RegExp("["+Uh+"]","g"),Fh="[^"+Uh+"]",AM="[^"+Uh.replace("\\.","")+"]",RM=/((?:WC+[\/:])*)/.source.replace("WC",Fh),CM=/(WCOD+)?/.source.replace("WCOD",AM),bM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),PM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),LM=new RegExp("^"+RM+CM+bM+PM+"$"),DM=["material","materials","bones","map"];class IM{constructor(e,t,i){const o=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,o=this._bindings[i];o!==void 0&&o.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let o=this._targetGroup.nCachedObjects_,a=i.length;o!==a;++o)i[o].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Lt{constructor(e,t,i){this.path=t,this.parsedPath=i||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,i):new Lt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wM,"")}static parseTrackName(e){const t=LM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=i.nodeName&&i.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const a=i.nodeName.substring(o+1);DM.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,o),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let u=0;u<a.length;u++){const c=a[u];if(c.name===t||c.uuid===t)return c;const d=i(c.children);if(d)return d}return null},o=i(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)e[t++]=i[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,o=t.propertyName;let a=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[o];if(u===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+o+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=a}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=IM;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class h_{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class NM extends ws{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function p_(s,e,t,i){const o=UM(i);switch(t){case gv:return s*e;case vv:return s*e;case yv:return s*e*2;case Sh:return s*e/o.components*o.byteLength;case Eh:return s*e/o.components*o.byteLength;case xv:return s*e*2/o.components*o.byteLength;case Mh:return s*e*2/o.components*o.byteLength;case _v:return s*e*3/o.components*o.byteLength;case li:return s*e*4/o.components*o.byteLength;case Th:return s*e*4/o.components*o.byteLength;case Lu:case Du:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Iu:case Nu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:case Ud:return Math.max(s,16)*Math.max(e,8)/4;case Dd:case Nd:return Math.max(s,8)*Math.max(e,8)/2;case Fd:case Od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case jd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Uu:case Jd:case eh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Sv:case th:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nh:case ih:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function UM(s){switch(s){case cr:case hv:return{byteLength:1,components:1};case Na:case pv:case Ha:return{byteLength:2,components:1};case yh:case xh:return{byteLength:2,components:4};case Es:case vh:case xi:return{byteLength:4,components:1};case mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yv(){let s=null,e=!1,t=null,i=null;function o(a,u){t(a,u),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function FM(s){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,g=h.byteLength,_=s.createBuffer();s.bindBuffer(d,_),s.bufferData(d,h,p),c.onUploadCallback();let x;if(h instanceof Float32Array)x=s.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=s.SHORT;else if(h instanceof Uint32Array)x=s.UNSIGNED_INT;else if(h instanceof Int32Array)x=s.INT;else if(h instanceof Int8Array)x=s.BYTE;else if(h instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function i(c,d,h){const p=d.array,g=d.updateRanges;if(s.bindBuffer(h,c),g.length===0)s.bufferSubData(h,0,p);else{g.sort((x,E)=>x.start-E.start);let _=0;for(let x=1;x<g.length;x++){const E=g[_],M=g[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++_,g[_]=M)}g.length=_+1;for(let x=0,E=g.length;x<E;x++){const M=g[x];s.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(s.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:u}}var OM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$M=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,oT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hT="gl_FragColor = linearToOutputTexel( gl_FragColor );",pT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ST=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ET=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,UT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_w=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ew=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ww=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ow=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ww=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$w=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:OM,alphahash_pars_fragment:kM,alphamap_fragment:BM,alphamap_pars_fragment:zM,alphatest_fragment:HM,alphatest_pars_fragment:VM,aomap_fragment:GM,aomap_pars_fragment:WM,batching_pars_vertex:XM,batching_vertex:jM,begin_vertex:YM,beginnormal_vertex:qM,bsdfs:KM,iridescence_fragment:$M,bumpmap_pars_fragment:ZM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:eT,clipping_planes_vertex:tT,color_fragment:nT,color_pars_fragment:iT,color_pars_vertex:rT,color_vertex:sT,common:oT,cube_uv_reflection_fragment:aT,defaultnormal_vertex:lT,displacementmap_pars_vertex:uT,displacementmap_vertex:cT,emissivemap_fragment:fT,emissivemap_pars_fragment:dT,colorspace_fragment:hT,colorspace_pars_fragment:pT,envmap_fragment:mT,envmap_common_pars_fragment:gT,envmap_pars_fragment:_T,envmap_pars_vertex:vT,envmap_physical_pars_fragment:bT,envmap_vertex:yT,fog_vertex:xT,fog_pars_vertex:ST,fog_fragment:ET,fog_pars_fragment:MT,gradientmap_pars_fragment:TT,lightmap_pars_fragment:wT,lights_lambert_fragment:AT,lights_lambert_pars_fragment:RT,lights_pars_begin:CT,lights_toon_fragment:PT,lights_toon_pars_fragment:LT,lights_phong_fragment:DT,lights_phong_pars_fragment:IT,lights_physical_fragment:NT,lights_physical_pars_fragment:UT,lights_fragment_begin:FT,lights_fragment_maps:OT,lights_fragment_end:kT,logdepthbuf_fragment:BT,logdepthbuf_pars_fragment:zT,logdepthbuf_pars_vertex:HT,logdepthbuf_vertex:VT,map_fragment:GT,map_pars_fragment:WT,map_particle_fragment:XT,map_particle_pars_fragment:jT,metalnessmap_fragment:YT,metalnessmap_pars_fragment:qT,morphinstance_vertex:KT,morphcolor_vertex:$T,morphnormal_vertex:ZT,morphtarget_pars_vertex:QT,morphtarget_vertex:JT,normal_fragment_begin:ew,normal_fragment_maps:tw,normal_pars_fragment:nw,normal_pars_vertex:iw,normal_vertex:rw,normalmap_pars_fragment:sw,clearcoat_normal_fragment_begin:ow,clearcoat_normal_fragment_maps:aw,clearcoat_pars_fragment:lw,iridescence_pars_fragment:uw,opaque_fragment:cw,packing:fw,premultiplied_alpha_fragment:dw,project_vertex:hw,dithering_fragment:pw,dithering_pars_fragment:mw,roughnessmap_fragment:gw,roughnessmap_pars_fragment:_w,shadowmap_pars_fragment:vw,shadowmap_pars_vertex:yw,shadowmap_vertex:xw,shadowmask_pars_fragment:Sw,skinbase_vertex:Ew,skinning_pars_vertex:Mw,skinning_vertex:Tw,skinnormal_vertex:ww,specularmap_fragment:Aw,specularmap_pars_fragment:Rw,tonemapping_fragment:Cw,tonemapping_pars_fragment:bw,transmission_fragment:Pw,transmission_pars_fragment:Lw,uv_pars_fragment:Dw,uv_pars_vertex:Iw,uv_vertex:Nw,worldpos_vertex:Uw,background_vert:Fw,background_frag:Ow,backgroundCube_vert:kw,backgroundCube_frag:Bw,cube_vert:zw,cube_frag:Hw,depth_vert:Vw,depth_frag:Gw,distanceRGBA_vert:Ww,distanceRGBA_frag:Xw,equirect_vert:jw,equirect_frag:Yw,linedashed_vert:qw,linedashed_frag:Kw,meshbasic_vert:$w,meshbasic_frag:Zw,meshlambert_vert:Qw,meshlambert_frag:Jw,meshmatcap_vert:eA,meshmatcap_frag:tA,meshnormal_vert:nA,meshnormal_frag:iA,meshphong_vert:rA,meshphong_frag:sA,meshphysical_vert:oA,meshphysical_frag:aA,meshtoon_vert:lA,meshtoon_frag:uA,points_vert:cA,points_frag:fA,shadow_vert:dA,shadow_frag:hA,sprite_vert:pA,sprite_frag:mA},be={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ci={basic:{uniforms:In([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:In([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ot(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:In([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:In([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:In([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ot(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:In([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:In([be.points,be.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:In([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:In([be.common,be.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:In([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:In([be.sprite,be.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:In([be.common,be.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:In([be.lights,be.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ci.physical={uniforms:In([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Tu={r:0,b:0,g:0},ps=new Ii,gA=new ut;function _A(s,e,t,i,o,a,u){const c=new ot(0);let d=a===!0?0:1,h,p,g=null,_=0,x=null;function E(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?t:e).get(R)),R}function M(L){let R=!1;const k=E(L);k===null?v(c,d):k&&k.isColor&&(v(k,1),R=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,R){const k=E(R);k&&(k.isCubeTexture||k.mapping===Xu)?(p===void 0&&(p=new Jn(new Ga(1,1,1),new Kr({name:"BackgroundCubeMaterial",uniforms:Po(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,N,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),ps.copy(R.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),p.material.uniforms.envMap.value=k,p.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(gA.makeRotationFromEuler(ps)),p.material.toneMapped=Et.getTransfer(k.colorSpace)!==It,(g!==k||_!==k.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,g=k,_=k.version,x=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):k&&k.isTexture&&(h===void 0&&(h=new Jn(new Yu(2,2),new Kr({name:"BackgroundMaterial",uniforms:Po(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=k,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Et.getTransfer(k.colorSpace)!==It,k.matrixAutoUpdate===!0&&k.updateMatrix(),h.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||_!==k.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,g=k,_=k.version,x=s.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function v(L,R){L.getRGB(Tu,Iv(s)),i.buffers.color.setClear(Tu.r,Tu.g,Tu.b,R,u)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(L,R=1){c.set(L),d=R,v(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,v(c,d)},render:M,addToRenderList:S,dispose:b}}function vA(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=_(null);let a=o,u=!1;function c(C,z,ae,te,fe){let pe=!1;const oe=g(te,ae,z);a!==oe&&(a=oe,h(a.object)),pe=x(C,te,ae,fe),pe&&E(C,te,ae,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,R(C,z,ae,te),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function d(){return s.createVertexArray()}function h(C){return s.bindVertexArray(C)}function p(C){return s.deleteVertexArray(C)}function g(C,z,ae){const te=ae.wireframe===!0;let fe=i[C.id];fe===void 0&&(fe={},i[C.id]=fe);let pe=fe[z.id];pe===void 0&&(pe={},fe[z.id]=pe);let oe=pe[te];return oe===void 0&&(oe=_(d()),pe[te]=oe),oe}function _(C){const z=[],ae=[],te=[];for(let fe=0;fe<t;fe++)z[fe]=0,ae[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ae,attributeDivisors:te,object:C,attributes:{},index:null}}function x(C,z,ae,te){const fe=a.attributes,pe=z.attributes;let oe=0;const ue=ae.getAttributes();for(const H in ue)if(ue[H].location>=0){const re=fe[H];let U=pe[H];if(U===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;oe++}return a.attributesNum!==oe||a.index!==te}function E(C,z,ae,te){const fe={},pe=z.attributes;let oe=0;const ue=ae.getAttributes();for(const H in ue)if(ue[H].location>=0){let re=pe[H];re===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),fe[H]=U,oe++}a.attributes=fe,a.attributesNum=oe,a.index=te}function M(){const C=a.newAttributes;for(let z=0,ae=C.length;z<ae;z++)C[z]=0}function S(C){v(C,0)}function v(C,z){const ae=a.newAttributes,te=a.enabledAttributes,fe=a.attributeDivisors;ae[C]=1,te[C]===0&&(s.enableVertexAttribArray(C),te[C]=1),fe[C]!==z&&(s.vertexAttribDivisor(C,z),fe[C]=z)}function b(){const C=a.newAttributes,z=a.enabledAttributes;for(let ae=0,te=z.length;ae<te;ae++)z[ae]!==C[ae]&&(s.disableVertexAttribArray(ae),z[ae]=0)}function L(C,z,ae,te,fe,pe,oe){oe===!0?s.vertexAttribIPointer(C,z,ae,fe,pe):s.vertexAttribPointer(C,z,ae,te,fe,pe)}function R(C,z,ae,te){M();const fe=te.attributes,pe=ae.getAttributes(),oe=z.defaultAttributeValues;for(const ue in pe){const H=pe[ue];if(H.location>=0){let le=fe[ue];if(le===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const re=le.normalized,U=le.itemSize,ne=e.get(le);if(ne===void 0)continue;const Ue=ne.buffer,Q=ne.type,he=ne.bytesPerElement,Ee=Q===s.INT||Q===s.UNSIGNED_INT||le.gpuType===vh;if(le.isInterleavedBufferAttribute){const ye=le.data,we=ye.stride,Ne=le.offset;if(ye.isInstancedInterleavedBuffer){for(let Qe=0;Qe<H.locationSize;Qe++)v(H.location+Qe,ye.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Qe=0;Qe<H.locationSize;Qe++)S(H.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Qe=0;Qe<H.locationSize;Qe++)L(H.location+Qe,U/H.locationSize,Q,re,we*he,(Ne+U/H.locationSize*Qe)*he,Ee)}else{if(le.isInstancedBufferAttribute){for(let ye=0;ye<H.locationSize;ye++)v(H.location+ye,le.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<H.locationSize;ye++)S(H.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ye=0;ye<H.locationSize;ye++)L(H.location+ye,U/H.locationSize,Q,re,U*he,U/H.locationSize*ye*he,Ee)}}else if(oe!==void 0){const re=oe[ue];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(H.location,re);break;case 3:s.vertexAttrib3fv(H.location,re);break;case 4:s.vertexAttrib4fv(H.location,re);break;default:s.vertexAttrib1fv(H.location,re)}}}}b()}function k(){W();for(const C in i){const z=i[C];for(const ae in z){const te=z[ae];for(const fe in te)p(te[fe].object),delete te[fe];delete z[ae]}delete i[C]}}function F(C){if(i[C.id]===void 0)return;const z=i[C.id];for(const ae in z){const te=z[ae];for(const fe in te)p(te[fe].object),delete te[fe];delete z[ae]}delete i[C.id]}function N(C){for(const z in i){const ae=i[z];if(ae[C.id]===void 0)continue;const te=ae[C.id];for(const fe in te)p(te[fe].object),delete te[fe];delete ae[C.id]}}function W(){P(),u=!0,a!==o&&(a=o,h(a.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:W,resetDefaultState:P,dispose:k,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:S,disableUnusedAttributes:b}}function yA(s,e,t){let i;function o(h){i=h}function a(h,p){s.drawArrays(i,h,p),t.update(p,i,1)}function u(h,p,g){g!==0&&(s.drawArraysInstanced(i,h,p,g),t.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,g);let x=0;for(let E=0;E<g;E++)x+=p[E];t.update(x,i,1)}function d(h,p,g,_){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<h.length;E++)u(h[E],p[E],_[E]);else{x.multiDrawArraysInstancedWEBGL(i,h,0,p,0,_,0,g);let E=0;for(let M=0;M<g;M++)E+=p[M]*_[M];t.update(E,i,1)}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function xA(s,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(N){return!(N!==li&&i.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const W=N===Ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==cr&&i.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==xi&&!W)}function d(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:k,maxSamples:F}}function SA(s){const e=this;let t=null,i=0,o=!1,a=!1;const u=new Vr,c=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||i!==0||o;return o=_,i=g.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=p(g,_,0)},this.setState=function(g,_,x){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,v=s.get(g);if(!o||E===null||E.length===0||a&&!S)a?p(null):h();else{const b=a?0:i,L=b*4;let R=v.clippingState||null;d.value=R,R=p(E,_,L,x);for(let k=0;k!==L;++k)R[k]=t[k];v.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,_,x,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=d.value,E!==!0||S===null){const v=x+M*4,b=_.matrixWorldInverse;c.getNormalMatrix(b),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,R=x;L!==M;++L,R+=4)u.copy(g[L]).applyMatrix4(b,c),u.normal.toArray(S,R),S[R+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function EA(s){let e=new WeakMap;function t(u,c){return c===Pd?u.mapping=To:c===Ld&&(u.mapping=wo),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===Pd||c===Ld)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new XE(d.height);return h.fromEquirectangularTexture(s,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const _o=4,m_=[.125,.215,.35,.446,.526,.582],ys=20,ad=new Ih,g_=new ot;let ld=null,ud=0,cd=0,fd=!1;const _s=(1+Math.sqrt(5))/2,fo=1/_s,__=[new X(-_s,fo,0),new X(_s,fo,0),new X(-fo,0,_s),new X(fo,0,_s),new X(0,_s,-fo),new X(0,_s,fo),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class v_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,ud,cd),this._renderer.xr.enabled=fd,e.scissorTest=!1,wu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===To||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Ha,format:li,colorSpace:Fn,depthBuffer:!1},o=y_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y_(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MA(a)),this._blurMaterial=TA(a,e,t)}return o}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,ad)}_sceneToCubeUV(e,t,i,o){const c=new An(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,_=p.toneMapping;p.getClearColor(g_),p.toneMapping=Yr,p.autoClear=!1;const x=new xs({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),E=new Jn(new Ga,x);let M=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,M=!0):(x.color.copy(g_),M=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(c.up.set(0,d[v],0),c.lookAt(h[v],0,0)):b===1?(c.up.set(0,0,d[v]),c.lookAt(0,h[v],0)):(c.up.set(0,d[v],0),c.lookAt(0,0,h[v]));const L=this._cubeSize;wu(o,b*L,v>2?L:0,L,L),p.setRenderTarget(o),M&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=_,p.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===To||e.mapping===wo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=S_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x_());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new Jn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;wu(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,ad)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=__[(o-a-1)%__.length];this._blur(e,a-1,a,u,c)}t.autoClear=i}_blur(e,t,i,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",a),this._halfBlur(u,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Jn(this._lodPlanes[o],h),_=h.uniforms,x=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*ys-1),M=a/E,S=isFinite(a)?1+Math.floor(p*M):ys;S>ys&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ys}`);const v=[];let b=0;for(let N=0;N<ys;++N){const W=N/M,P=Math.exp(-W*W/2);v.push(P),N===0?b+=P:N<S&&(b+=2*P)}for(let N=0;N<v.length;N++)v[N]=v[N]/b;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=v,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-i;const R=this._sizeLods[o],k=3*R*(o>L-_o?o-L+_o:0),F=4*(this._cubeSize-R);wu(t,k,F,3*R,2*R),d.setRenderTarget(t),d.render(g,ad)}}function MA(s){const e=[],t=[],i=[];let o=s;const a=s-_o+1+m_.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>s-_o?d=m_[u-s+_o-1]:u===0&&(d=0),i.push(d);const h=1/(c-2),p=-h,g=1+h,_=[p,p,g,p,g,g,p,p,g,g,p,g],x=6,E=6,M=3,S=2,v=1,b=new Float32Array(M*E*x),L=new Float32Array(S*E*x),R=new Float32Array(v*E*x);for(let F=0;F<x;F++){const N=F%3*2/3-1,W=F>2?0:-1,P=[N,W,0,N+2/3,W,0,N+2/3,W+1,0,N,W,0,N+2/3,W+1,0,N,W+1,0];b.set(P,M*E*F),L.set(_,S*E*F);const C=[F,F,F,F,F,F];R.set(C,v*E*F)}const k=new Fi;k.setAttribute("position",new Un(b,M)),k.setAttribute("uv",new Un(L,S)),k.setAttribute("faceIndex",new Un(R,v)),e.push(k),o>_o&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function y_(s,e,t){const i=new Ms(s,e,t);return i.texture.mapping=Xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wu(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function TA(s,e,t){const i=new Float32Array(ys),o=new X(0,1,0);return new Kr({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function x_(){return new Kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function S_(){return new Kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wA(s){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const d=c.mapping,h=d===Pd||d===Ld,p=d===To||d===wo;if(h||p){let g=e.get(c);const _=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new v_(s)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return h&&x&&x.height>0||p&&x&&o(x)?(t===null&&(t=new v_(s)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function o(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function AA(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&mo("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function RA(s,e,t,i){const o={},a=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const x=a.get(_);x&&(e.remove(x),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(g,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const x in _)e.update(_[x],s.ARRAY_BUFFER)}function h(g){const _=[],x=g.index,E=g.attributes.position;let M=0;if(x!==null){const b=x.array;M=x.version;for(let L=0,R=b.length;L<R;L+=3){const k=b[L+0],F=b[L+1],N=b[L+2];_.push(k,F,F,N,N,k)}}else if(E!==void 0){const b=E.array;M=E.version;for(let L=0,R=b.length/3-1;L<R;L+=3){const k=L+0,F=L+1,N=L+2;_.push(k,F,F,N,N,k)}}else return;const S=new(Av(_)?Dv:Lv)(_,1);S.version=M;const v=a.get(g);v&&e.remove(v),a.set(g,S)}function p(g){const _=a.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&h(g)}else h(g);return a.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function CA(s,e,t){let i;function o(_){i=_}let a,u;function c(_){a=_.type,u=_.bytesPerElement}function d(_,x){s.drawElements(i,x,a,_*u),t.update(x,i,1)}function h(_,x,E){E!==0&&(s.drawElementsInstanced(i,x,a,_*u,E),t.update(x,i,E))}function p(_,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,_,0,E);let S=0;for(let v=0;v<E;v++)S+=x[v];t.update(S,i,1)}function g(_,x,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<_.length;v++)h(_[v]/u,x[v],M[v]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,a,_,0,M,0,E);let v=0;for(let b=0;b<E;b++)v+=x[b]*M[b];t.update(v,i,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function bA(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=c*(a/3);break;case s.LINES:t.lines+=c*(a/2);break;case s.LINE_STRIP:t.lines+=c*(a-1);break;case s.LINE_LOOP:t.lines+=c*a;break;case s.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function PA(s,e,t){const i=new WeakMap,o=new Rt;function a(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let _=i.get(c);if(_===void 0||_.count!==g){let C=function(){W.dispose(),i.delete(c),c.removeEventListener("dispose",C)};var x=C;_!==void 0&&_.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let R=0;E===!0&&(R=1),M===!0&&(R=2),S===!0&&(R=3);let k=c.attributes.position.count*R,F=1;k>e.maxTextureSize&&(F=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const N=new Float32Array(k*F*4*g),W=new Cv(N,k,F,g);W.type=xi,W.needsUpdate=!0;const P=R*4;for(let z=0;z<g;z++){const ae=v[z],te=b[z],fe=L[z],pe=k*F*4*z;for(let oe=0;oe<ae.count;oe++){const ue=oe*P;E===!0&&(o.fromBufferAttribute(ae,oe),N[pe+ue+0]=o.x,N[pe+ue+1]=o.y,N[pe+ue+2]=o.z,N[pe+ue+3]=0),M===!0&&(o.fromBufferAttribute(te,oe),N[pe+ue+4]=o.x,N[pe+ue+5]=o.y,N[pe+ue+6]=o.z,N[pe+ue+7]=0),S===!0&&(o.fromBufferAttribute(fe,oe),N[pe+ue+8]=o.x,N[pe+ue+9]=o.y,N[pe+ue+10]=o.z,N[pe+ue+11]=fe.itemSize===4?o.w:1)}}_={count:g,texture:W,size:new it(k,F)},i.set(c,_),c.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:a}}function LA(s,e,t,i){let o=new WeakMap;function a(d){const h=i.render.frame,p=d.geometry,g=e.get(d,p);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;o.get(_)!==h&&(_.update(),o.set(_,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}const qv=new hn,E_=new zv(1,1),Kv=new Cv,$v=new bE,Zv=new Ah,M_=[],T_=[],w_=new Float32Array(16),A_=new Float32Array(9),R_=new Float32Array(4);function ko(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let a=M_[o];if(a===void 0&&(a=new Float32Array(o),M_[o]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,s[u].toArray(a,c)}return a}function rn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function sn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Ku(s,e){let t=T_[e];t===void 0&&(t=new Int32Array(e),T_[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function DA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function IA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2fv(this.addr,e),sn(t,e)}}function NA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;s.uniform3fv(this.addr,e),sn(t,e)}}function UA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4fv(this.addr,e),sn(t,e)}}function FA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;R_.set(i),s.uniformMatrix2fv(this.addr,!1,R_),sn(t,i)}}function OA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;A_.set(i),s.uniformMatrix3fv(this.addr,!1,A_),sn(t,i)}}function kA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;w_.set(i),s.uniformMatrix4fv(this.addr,!1,w_),sn(t,i)}}function BA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function zA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2iv(this.addr,e),sn(t,e)}}function HA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3iv(this.addr,e),sn(t,e)}}function VA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4iv(this.addr,e),sn(t,e)}}function GA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function WA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2uiv(this.addr,e),sn(t,e)}}function XA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3uiv(this.addr,e),sn(t,e)}}function jA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4uiv(this.addr,e),sn(t,e)}}function YA(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let a;this.type===s.SAMPLER_2D_SHADOW?(E_.compareFunction=Tv,a=E_):a=qv,t.setTexture2D(e||a,o)}function qA(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||$v,o)}function KA(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||Zv,o)}function $A(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Kv,o)}function ZA(s){switch(s){case 5126:return DA;case 35664:return IA;case 35665:return NA;case 35666:return UA;case 35674:return FA;case 35675:return OA;case 35676:return kA;case 5124:case 35670:return BA;case 35667:case 35671:return zA;case 35668:case 35672:return HA;case 35669:case 35673:return VA;case 5125:return GA;case 36294:return WA;case 36295:return XA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return qA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return $A}}function QA(s,e){s.uniform1fv(this.addr,e)}function JA(s,e){const t=ko(e,this.size,2);s.uniform2fv(this.addr,t)}function eR(s,e){const t=ko(e,this.size,3);s.uniform3fv(this.addr,t)}function tR(s,e){const t=ko(e,this.size,4);s.uniform4fv(this.addr,t)}function nR(s,e){const t=ko(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function iR(s,e){const t=ko(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function rR(s,e){const t=ko(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function sR(s,e){s.uniform1iv(this.addr,e)}function oR(s,e){s.uniform2iv(this.addr,e)}function aR(s,e){s.uniform3iv(this.addr,e)}function lR(s,e){s.uniform4iv(this.addr,e)}function uR(s,e){s.uniform1uiv(this.addr,e)}function cR(s,e){s.uniform2uiv(this.addr,e)}function fR(s,e){s.uniform3uiv(this.addr,e)}function dR(s,e){s.uniform4uiv(this.addr,e)}function hR(s,e,t){const i=this.cache,o=e.length,a=Ku(t,o);rn(i,a)||(s.uniform1iv(this.addr,a),sn(i,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||qv,a[u])}function pR(s,e,t){const i=this.cache,o=e.length,a=Ku(t,o);rn(i,a)||(s.uniform1iv(this.addr,a),sn(i,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||$v,a[u])}function mR(s,e,t){const i=this.cache,o=e.length,a=Ku(t,o);rn(i,a)||(s.uniform1iv(this.addr,a),sn(i,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Zv,a[u])}function gR(s,e,t){const i=this.cache,o=e.length,a=Ku(t,o);rn(i,a)||(s.uniform1iv(this.addr,a),sn(i,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Kv,a[u])}function _R(s){switch(s){case 5126:return QA;case 35664:return JA;case 35665:return eR;case 35666:return tR;case 35674:return nR;case 35675:return iR;case 35676:return rR;case 5124:case 35670:return sR;case 35667:case 35671:return oR;case 35668:case 35672:return aR;case 35669:case 35673:return lR;case 5125:return uR;case 36294:return cR;case 36295:return fR;case 36296:return dR;case 35678:case 36198:case 36298:case 36306:case 35682:return hR;case 35679:case 36299:case 36307:return pR;case 35680:case 36300:case 36308:case 36293:return mR;case 36289:case 36303:case 36311:case 36292:return gR}}class vR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ZA(t.type)}}class yR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_R(t.type)}}class xR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],i)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function C_(s,e){s.seq.push(e),s.map[e.id]=e}function SR(s,e,t){const i=s.name,o=i.length;for(dd.lastIndex=0;;){const a=dd.exec(i),u=dd.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){C_(t,h===void 0?new vR(c,s,e):new yR(c,s,e));break}else{let g=t.map[c];g===void 0&&(g=new xR(c),C_(t,g)),t=g}}}class Fu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);SR(a,u,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function b_(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const ER=37297;let MR=0;function TR(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const P_=new lt;function wR(s){Et._getMatrix(P_,Et.workingColorSpace,s);const e=`mat3( ${P_.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case Bu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function L_(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+TR(s.getShaderSource(e),u)}else return o}function AR(s,e){const t=wR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function RR(s,e){let t;switch(e){case kS:t="Linear";break;case BS:t="Reinhard";break;case zS:t="Cineon";break;case HS:t="ACESFilmic";break;case GS:t="AgX";break;case WS:t="Neutral";break;case VS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Au=new X;function CR(){Et.getLuminanceCoefficients(Au);const s=Au.x.toFixed(4),e=Au.y.toFixed(4),t=Au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function PR(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function LR(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=s.getActiveAttrib(e,o),u=a.name;let c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:s.getAttribLocation(e,u),locationSize:c}}return t}function ba(s){return s!==""}function D_(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DR=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(s){return s.replace(DR,NR)}const IR=new Map;function NR(s,e){let t=ct[e];if(t===void 0){const i=IR.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lh(t)}const UR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N_(s){return s.replace(UR,FR)}function FR(s,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function U_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OR(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===uv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_S?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function kR(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case To:case wo:e="ENVMAP_TYPE_CUBE";break;case Xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BR(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wo:e="ENVMAP_MODE_REFRACTION";break}return e}function zR(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cv:e="ENVMAP_BLENDING_MULTIPLY";break;case FS:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function HR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function VR(s,e,t,i){const o=s.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=OR(t),h=kR(t),p=BR(t),g=zR(t),_=HR(t),x=bR(t),E=PR(a),M=o.createProgram();let S,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ba).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ba).join(`
`),v.length>0&&(v+=`
`)):(S=[U_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),v=[U_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yr?"#define TONE_MAPPING":"",t.toneMapping!==Yr?ct.tonemapping_pars_fragment:"",t.toneMapping!==Yr?RR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,AR("linearToOutputTexel",t.outputColorSpace),CR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ba).join(`
`)),u=lh(u),u=D_(u,t),u=I_(u,t),c=lh(c),c=D_(c,t),c=I_(c,t),u=N_(u),c=N_(c),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===Pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=b+S+u,R=b+v+c,k=b_(o,o.VERTEX_SHADER,L),F=b_(o,o.FRAGMENT_SHADER,R);o.attachShader(M,k),o.attachShader(M,F),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function N(z){if(s.debug.checkShaderErrors){const ae=o.getProgramInfoLog(M).trim(),te=o.getShaderInfoLog(k).trim(),fe=o.getShaderInfoLog(F).trim();let pe=!0,oe=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,M,k,F);else{const ue=L_(o,k,"vertex"),H=L_(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ae+`
`+ue+`
`+H)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(te===""||fe==="")&&(oe=!1);oe&&(z.diagnostics={runnable:pe,programLog:ae,vertexShader:{log:te,prefix:S},fragmentShader:{log:fe,prefix:v}})}o.deleteShader(k),o.deleteShader(F),W=new Fu(o,M),P=LR(o,M)}let W;this.getUniforms=function(){return W===void 0&&N(this),W};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(M,ER)),C},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MR++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=k,this.fragmentShader=F,this}let GR=0;class WR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new XR(e),t.set(e,i)),i}}class XR{constructor(e){this.id=GR++,this.code=e,this.usedTimes=0}}function jR(s,e,t,i,o,a,u){const c=new bv,d=new WR,h=new Set,p=[],g=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,C,z,ae,te){const fe=ae.fog,pe=te.geometry,oe=P.isMeshStandardMaterial?ae.environment:null,ue=(P.isMeshStandardMaterial?t:e).get(P.envMap||oe),H=ue&&ue.mapping===Xu?ue.image.height:null,le=E[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const re=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=re!==void 0?re.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Ue,Q,he,Ee;if(le){const Mt=Ci[le];Ue=Mt.vertexShader,Q=Mt.fragmentShader}else Ue=P.vertexShader,Q=P.fragmentShader,d.update(P),he=d.getVertexShaderID(P),Ee=d.getFragmentShaderID(P);const ye=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ne=te.isInstancedMesh===!0,Qe=te.isBatchedMesh===!0,Dt=!!P.map,vt=!!P.matcap,Ft=!!ue,B=!!P.aoMap,Rn=!!P.lightMap,gt=!!P.bumpMap,ht=!!P.normalMap,Ye=!!P.displacementMap,bt=!!P.emissiveMap,We=!!P.metalnessMap,D=!!P.roughnessMap,w=P.anisotropy>0,Z=P.clearcoat>0,me=P.dispersion>0,_e=P.iridescence>0,ce=P.sheen>0,Xe=P.transmission>0,Ae=w&&!!P.anisotropyMap,Fe=Z&&!!P.clearcoatMap,ft=Z&&!!P.clearcoatNormalMap,Me=Z&&!!P.clearcoatRoughnessMap,ke=_e&&!!P.iridescenceMap,Ke=_e&&!!P.iridescenceThicknessMap,et=ce&&!!P.sheenColorMap,Be=ce&&!!P.sheenRoughnessMap,pt=!!P.specularMap,rt=!!P.specularColorMap,Ct=!!P.specularIntensityMap,G=Xe&&!!P.transmissionMap,Re=Xe&&!!P.thicknessMap,ie=!!P.gradientMap,de=!!P.alphaMap,Le=P.alphaTest>0,Pe=!!P.alphaHash,st=!!P.extensions;let kt=Yr;P.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(kt=s.toneMapping);const Jt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:Q,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:Qe,batchingColor:Qe&&te._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&te.instanceColor!==null,instancingMorph:Ne&&te.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Fn,alphaToCoverage:!!P.alphaToCoverage,map:Dt,matcap:vt,envMap:Ft,envMapMode:Ft&&ue.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:Rn,bumpMap:gt,normalMap:ht,displacementMap:_&&Ye,emissiveMap:bt,normalMapObjectSpace:ht&&P.normalMapType===$S,normalMapTangentSpace:ht&&P.normalMapType===Mv,metalnessMap:We,roughnessMap:D,anisotropy:w,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Fe,clearcoatNormalMap:ft,clearcoatRoughnessMap:Me,dispersion:me,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:Ke,sheen:ce,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:pt,specularColorMap:rt,specularIntensityMap:Ct,transmission:Xe,transmissionMap:G,thicknessMap:Re,gradientMap:ie,opaque:P.transparent===!1&&P.blending===yo&&P.alphaToCoverage===!1,alphaMap:de,alphaTest:Le,alphaHash:Pe,combine:P.combine,mapUv:Dt&&M(P.map.channel),aoMapUv:B&&M(P.aoMap.channel),lightMapUv:Rn&&M(P.lightMap.channel),bumpMapUv:gt&&M(P.bumpMap.channel),normalMapUv:ht&&M(P.normalMap.channel),displacementMapUv:Ye&&M(P.displacementMap.channel),emissiveMapUv:bt&&M(P.emissiveMap.channel),metalnessMapUv:We&&M(P.metalnessMap.channel),roughnessMapUv:D&&M(P.roughnessMap.channel),anisotropyMapUv:Ae&&M(P.anisotropyMap.channel),clearcoatMapUv:Fe&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(P.sheenRoughnessMap.channel),specularMapUv:pt&&M(P.specularMap.channel),specularColorMapUv:rt&&M(P.specularColorMap.channel),specularIntensityMapUv:Ct&&M(P.specularIntensityMap.channel),transmissionMapUv:G&&M(P.transmissionMap.channel),thicknessMapUv:Re&&M(P.thicknessMap.channel),alphaMapUv:de&&M(P.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ht||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!pe.attributes.uv&&(Dt||de),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:we,skinning:te.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:Dt&&P.map.isVideoTexture===!0&&Et.getTransfer(P.map.colorSpace)===It,decodeVideoTextureEmissive:bt&&P.emissiveMap.isVideoTexture===!0&&Et.getTransfer(P.emissiveMap.colorSpace)===It,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===bi,flipSided:P.side===Xn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Jt.vertexUv1s=h.has(1),Jt.vertexUv2s=h.has(2),Jt.vertexUv3s=h.has(3),h.clear(),Jt}function v(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)C.push(z),C.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(b(C,P),L(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function b(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function L(P,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),P.push(c.mask)}function R(P){const C=E[P.type];let z;if(C){const ae=Ci[C];z=HE.clone(ae.uniforms)}else z=P.uniforms;return z}function k(P,C){let z;for(let ae=0,te=p.length;ae<te;ae++){const fe=p[ae];if(fe.cacheKey===C){z=fe,++z.usedTimes;break}}return z===void 0&&(z=new VR(s,C,P,a),p.push(z)),z}function F(P){if(--P.usedTimes===0){const C=p.indexOf(P);p[C]=p[p.length-1],p.pop(),P.destroy()}}function N(P){d.remove(P)}function W(){d.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:R,acquireProgram:k,releaseProgram:F,releaseShaderCache:N,programs:p,dispose:W}}function YR(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let c=s.get(u);return c===void 0&&(c={},s.set(u,c)),c}function i(u){s.delete(u)}function o(u,c,d){s.get(u)[c]=d}function a(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function qR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function F_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function O_(){const s=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function u(g,_,x,E,M,S){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:_,material:x,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},s[e]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=x,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=M,v.group=S),e++,v}function c(g,_,x,E,M,S){const v=u(g,_,x,E,M,S);x.transmission>0?i.push(v):x.transparent===!0?o.push(v):t.push(v)}function d(g,_,x,E,M,S){const v=u(g,_,x,E,M,S);x.transmission>0?i.unshift(v):x.transparent===!0?o.unshift(v):t.unshift(v)}function h(g,_){t.length>1&&t.sort(g||qR),i.length>1&&i.sort(_||F_),o.length>1&&o.sort(_||F_)}function p(){for(let g=e,_=s.length;g<_;g++){const x=s[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:c,unshift:d,finish:p,sort:h}}function KR(){let s=new WeakMap;function e(i,o){const a=s.get(i);let u;return a===void 0?(u=new O_,s.set(i,[u])):o>=a.length?(u=new O_,a.push(u)):u=a[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function $R(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ot};break;case"SpotLight":t={position:new X,direction:new X,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function ZR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let QR=0;function JR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function e1(s){const e=new $R,t=ZR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new X);const o=new X,a=new ut,u=new ut;function c(h){let p=0,g=0,_=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let x=0,E=0,M=0,S=0,v=0,b=0,L=0,R=0,k=0,F=0,N=0;h.sort(JR);for(let P=0,C=h.length;P<C;P++){const z=h[P],ae=z.color,te=z.intensity,fe=z.distance,pe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=ae.r*te,g+=ae.g*te,_+=ae.b*te;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)i.probe[oe].addScaledVector(z.sh.coefficients[oe],te);N++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ue=z.shadow,H=t.get(z);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,i.directionalShadow[x]=H,i.directionalShadowMap[x]=pe,i.directionalShadowMatrix[x]=z.shadow.matrix,b++}i.directional[x]=oe,x++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(ae).multiplyScalar(te),oe.distance=fe,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,i.spot[M]=oe;const ue=z.shadow;if(z.map&&(i.spotLightMap[k]=z.map,k++,ue.updateMatrices(z),z.castShadow&&F++),i.spotLightMatrix[M]=ue.matrix,z.castShadow){const H=t.get(z);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=pe,R++}M++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(ae).multiplyScalar(te),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=oe,S++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const ue=z.shadow,H=t.get(z);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,H.shadowCameraNear=ue.camera.near,H.shadowCameraFar=ue.camera.far,i.pointShadow[E]=H,i.pointShadowMap[E]=pe,i.pointShadowMatrix[E]=z.shadow.matrix,L++}i.point[E]=oe,E++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar(te),oe.groundColor.copy(z.groundColor).multiplyScalar(te),i.hemi[v]=oe,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=_;const W=i.hash;(W.directionalLength!==x||W.pointLength!==E||W.spotLength!==M||W.rectAreaLength!==S||W.hemiLength!==v||W.numDirectionalShadows!==b||W.numPointShadows!==L||W.numSpotShadows!==R||W.numSpotMaps!==k||W.numLightProbes!==N)&&(i.directional.length=x,i.spot.length=M,i.rectArea.length=S,i.point.length=E,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=R+k-F,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=N,W.directionalLength=x,W.pointLength=E,W.spotLength=M,W.rectAreaLength=S,W.hemiLength=v,W.numDirectionalShadows=b,W.numPointShadows=L,W.numSpotShadows=R,W.numSpotMaps=k,W.numLightProbes=N,i.version=QR++)}function d(h,p){let g=0,_=0,x=0,E=0,M=0;const S=p.matrixWorldInverse;for(let v=0,b=h.length;v<b;v++){const L=h[v];if(L.isDirectionalLight){const R=i.directional[g];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),g++}else if(L.isSpotLight){const R=i.spot[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const R=i.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),u.identity(),a.copy(L.matrixWorld),a.premultiply(S),u.extractRotation(a),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const R=i.point[_];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),_++}else if(L.isHemisphereLight){const R=i.hemi[M];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(S),M++}}}return{setup:c,setupView:d,state:i}}function k_(s){const e=new e1(s),t=[],i=[];function o(p){h.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function u(p){i.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function t1(s){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let c;return u===void 0?(c=new k_(s),e.set(o,[c])):a>=u.length?(c=new k_(s),u.push(c)):c=u[a],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const n1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r1(s,e,t){let i=new bh;const o=new it,a=new it,u=new Rt,c=new iM({depthPacking:KS}),d=new rM,h={},p=t.maxTextureSize,g={[ur]:Xn,[Xn]:ur,[bi]:bi},_=new Kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:n1,fragmentShader:i1}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new Fi;E.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Jn(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uv;let v=this.type;this.render=function(F,N,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(jr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const te=v!==nr&&this.type===nr,fe=v===nr&&this.type!==nr;for(let pe=0,oe=F.length;pe<oe;pe++){const ue=F[pe],H=ue.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const le=H.getFrameExtents();if(o.multiply(le),a.copy(H.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/le.x),o.x=a.x*le.x,H.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/le.y),o.y=a.y*le.y,H.mapSize.y=a.y)),H.map===null||te===!0||fe===!0){const U=this.type!==nr?{minFilter:Nn,magFilter:Nn}:{};H.map!==null&&H.map.dispose(),H.map=new Ms(o.x,o.y,U),H.map.texture.name=ue.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const re=H.getViewportCount();for(let U=0;U<re;U++){const ne=H.getViewport(U);u.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),ae.viewport(u),H.updateMatrices(ue,U),i=H.getFrustum(),R(N,W,H.camera,ue,this.type)}H.isPointLightShadow!==!0&&this.type===nr&&b(H,W),H.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(P,C,z)};function b(F,N){const W=e.update(M);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ms(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(N,null,W,_,M,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(N,null,W,x,M,null)}function L(F,N,W,P){let C=null;const z=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)C=z;else if(C=W.isPointLight===!0?d:c,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ae=C.uuid,te=N.uuid;let fe=h[ae];fe===void 0&&(fe={},h[ae]=fe);let pe=fe[te];pe===void 0&&(pe=C.clone(),fe[te]=pe,N.addEventListener("dispose",k)),C=pe}if(C.visible=N.visible,C.wireframe=N.wireframe,P===nr?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:g[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=s.properties.get(C);ae.light=W}return C}function R(F,N,W,P,C){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===nr)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const te=e.update(F),fe=F.material;if(Array.isArray(fe)){const pe=te.groups;for(let oe=0,ue=pe.length;oe<ue;oe++){const H=pe[oe],le=fe[H.materialIndex];if(le&&le.visible){const re=L(F,le,P,C);F.onBeforeShadow(s,F,N,W,te,re,H),s.renderBufferDirect(W,null,te,re,F,H),F.onAfterShadow(s,F,N,W,te,re,H)}}}else if(fe.visible){const pe=L(F,fe,P,C);F.onBeforeShadow(s,F,N,W,te,pe,null),s.renderBufferDirect(W,null,te,pe,F,null),F.onAfterShadow(s,F,N,W,te,pe,null)}}const ae=F.children;for(let te=0,fe=ae.length;te<fe;te++)R(ae[te],N,W,P,C)}function k(F){F.target.removeEventListener("dispose",k);for(const W in h){const P=h[W],C=F.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const s1={[Md]:Td,[wd]:Cd,[Ad]:bd,[Mo]:Rd,[Td]:Md,[Cd]:wd,[bd]:Ad,[Rd]:Mo};function o1(s,e){function t(){let G=!1;const Re=new Rt;let ie=null;const de=new Rt(0,0,0,0);return{setMask:function(Le){ie!==Le&&!G&&(s.colorMask(Le,Le,Le,Le),ie=Le)},setLocked:function(Le){G=Le},setClear:function(Le,Pe,st,kt,Jt){Jt===!0&&(Le*=kt,Pe*=kt,st*=kt),Re.set(Le,Pe,st,kt),de.equals(Re)===!1&&(s.clearColor(Le,Pe,st,kt),de.copy(Re))},reset:function(){G=!1,ie=null,de.set(-1,0,0,0)}}}function i(){let G=!1,Re=!1,ie=null,de=null,Le=null;return{setReversed:function(Pe){if(Re!==Pe){const st=e.get("EXT_clip_control");Re?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const kt=Le;Le=null,this.setClear(kt)}Re=Pe},getReversed:function(){return Re},setTest:function(Pe){Pe?ye(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!G&&(s.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Re&&(Pe=s1[Pe]),de!==Pe){switch(Pe){case Md:s.depthFunc(s.NEVER);break;case Td:s.depthFunc(s.ALWAYS);break;case wd:s.depthFunc(s.LESS);break;case Mo:s.depthFunc(s.LEQUAL);break;case Ad:s.depthFunc(s.EQUAL);break;case Rd:s.depthFunc(s.GEQUAL);break;case Cd:s.depthFunc(s.GREATER);break;case bd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Le!==Pe&&(Re&&(Pe=1-Pe),s.clearDepth(Pe),Le=Pe)},reset:function(){G=!1,ie=null,de=null,Le=null,Re=!1}}}function o(){let G=!1,Re=null,ie=null,de=null,Le=null,Pe=null,st=null,kt=null,Jt=null;return{setTest:function(Mt){G||(Mt?ye(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Mt){Re!==Mt&&!G&&(s.stencilMask(Mt),Re=Mt)},setFunc:function(Mt,On,Cn){(ie!==Mt||de!==On||Le!==Cn)&&(s.stencilFunc(Mt,On,Cn),ie=Mt,de=On,Le=Cn)},setOp:function(Mt,On,Cn){(Pe!==Mt||st!==On||kt!==Cn)&&(s.stencilOp(Mt,On,Cn),Pe=Mt,st=On,kt=Cn)},setLocked:function(Mt){G=Mt},setClear:function(Mt){Jt!==Mt&&(s.clearStencil(Mt),Jt=Mt)},reset:function(){G=!1,Re=null,ie=null,de=null,Le=null,Pe=null,st=null,kt=null,Jt=null}}}const a=new t,u=new i,c=new o,d=new WeakMap,h=new WeakMap;let p={},g={},_=new WeakMap,x=[],E=null,M=!1,S=null,v=null,b=null,L=null,R=null,k=null,F=null,N=new ot(0,0,0),W=0,P=!1,C=null,z=null,ae=null,te=null,fe=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ue=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(H)[1]),oe=ue>=1):H.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),oe=ue>=2);let le=null,re={};const U=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),Ue=new Rt().fromArray(U),Q=new Rt().fromArray(ne);function he(G,Re,ie,de){const Le=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(G,Pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<ie;st++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Re+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Pe}const Ee={};Ee[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ye(s.DEPTH_TEST),u.setFunc(Mo),gt(!1),ht(Sg),ye(s.CULL_FACE),B(jr);function ye(G){p[G]!==!0&&(s.enable(G),p[G]=!0)}function we(G){p[G]!==!1&&(s.disable(G),p[G]=!1)}function Ne(G,Re){return g[G]!==Re?(s.bindFramebuffer(G,Re),g[G]=Re,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Re),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Qe(G,Re){let ie=x,de=!1;if(G){ie=_.get(Re),ie===void 0&&(ie=[],_.set(Re,ie));const Le=G.textures;if(ie.length!==Le.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,st=Le.length;Pe<st;Pe++)ie[Pe]=s.COLOR_ATTACHMENT0+Pe;ie.length=Le.length,de=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,de=!0);de&&s.drawBuffers(ie)}function Dt(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const vt={[vs]:s.FUNC_ADD,[yS]:s.FUNC_SUBTRACT,[xS]:s.FUNC_REVERSE_SUBTRACT};vt[SS]=s.MIN,vt[ES]=s.MAX;const Ft={[MS]:s.ZERO,[TS]:s.ONE,[wS]:s.SRC_COLOR,[Sd]:s.SRC_ALPHA,[LS]:s.SRC_ALPHA_SATURATE,[bS]:s.DST_COLOR,[RS]:s.DST_ALPHA,[AS]:s.ONE_MINUS_SRC_COLOR,[Ed]:s.ONE_MINUS_SRC_ALPHA,[PS]:s.ONE_MINUS_DST_COLOR,[CS]:s.ONE_MINUS_DST_ALPHA,[DS]:s.CONSTANT_COLOR,[IS]:s.ONE_MINUS_CONSTANT_COLOR,[NS]:s.CONSTANT_ALPHA,[US]:s.ONE_MINUS_CONSTANT_ALPHA};function B(G,Re,ie,de,Le,Pe,st,kt,Jt,Mt){if(G===jr){M===!0&&(we(s.BLEND),M=!1);return}if(M===!1&&(ye(s.BLEND),M=!0),G!==vS){if(G!==S||Mt!==P){if((v!==vs||R!==vs)&&(s.blendEquation(s.FUNC_ADD),v=vs,R=vs),Mt)switch(G){case yo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Eg:s.blendFunc(s.ONE,s.ONE);break;case Mg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tg:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case yo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Eg:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Mg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tg:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}b=null,L=null,k=null,F=null,N.set(0,0,0),W=0,S=G,P=Mt}return}Le=Le||Re,Pe=Pe||ie,st=st||de,(Re!==v||Le!==R)&&(s.blendEquationSeparate(vt[Re],vt[Le]),v=Re,R=Le),(ie!==b||de!==L||Pe!==k||st!==F)&&(s.blendFuncSeparate(Ft[ie],Ft[de],Ft[Pe],Ft[st]),b=ie,L=de,k=Pe,F=st),(kt.equals(N)===!1||Jt!==W)&&(s.blendColor(kt.r,kt.g,kt.b,Jt),N.copy(kt),W=Jt),S=G,P=!1}function Rn(G,Re){G.side===bi?we(s.CULL_FACE):ye(s.CULL_FACE);let ie=G.side===Xn;Re&&(ie=!ie),gt(ie),G.blending===yo&&G.transparent===!1?B(jr):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const de=G.stencilWrite;c.setTest(de),de&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function ht(G){G!==mS?(ye(s.CULL_FACE),G!==z&&(G===Sg?s.cullFace(s.BACK):G===gS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),z=G}function Ye(G){G!==ae&&(oe&&s.lineWidth(G),ae=G)}function bt(G,Re,ie){G?(ye(s.POLYGON_OFFSET_FILL),(te!==Re||fe!==ie)&&(s.polygonOffset(Re,ie),te=Re,fe=ie)):we(s.POLYGON_OFFSET_FILL)}function We(G){G?ye(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function D(G){G===void 0&&(G=s.TEXTURE0+pe-1),le!==G&&(s.activeTexture(G),le=G)}function w(G,Re,ie){ie===void 0&&(le===null?ie=s.TEXTURE0+pe-1:ie=le);let de=re[ie];de===void 0&&(de={type:void 0,texture:void 0},re[ie]=de),(de.type!==G||de.texture!==Re)&&(le!==ie&&(s.activeTexture(ie),le=ie),s.bindTexture(G,Re||Ee[G]),de.type=G,de.texture=Re)}function Z(){const G=re[le];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(G){Ue.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function Be(G){Q.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function pt(G,Re){let ie=h.get(Re);ie===void 0&&(ie=new WeakMap,h.set(Re,ie));let de=ie.get(G);de===void 0&&(de=s.getUniformBlockIndex(Re,G.name),ie.set(G,de))}function rt(G,Re){const de=h.get(Re).get(G);d.get(Re)!==de&&(s.uniformBlockBinding(Re,de,G.__bindingPointIndex),d.set(Re,de))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},le=null,re={},g={},_=new WeakMap,x=[],E=null,M=!1,S=null,v=null,b=null,L=null,R=null,k=null,F=null,N=new ot(0,0,0),W=0,P=!1,C=null,z=null,ae=null,te=null,fe=null,Ue.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ye,disable:we,bindFramebuffer:Ne,drawBuffers:Qe,useProgram:Dt,setBlending:B,setMaterial:Rn,setFlipSided:gt,setCullFace:ht,setLineWidth:Ye,setPolygonOffset:bt,setScissorTest:We,activeTexture:D,bindTexture:w,unbindTexture:Z,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:ke,texImage3D:Ke,updateUBOMapping:pt,uniformBlockBinding:rt,texStorage2D:ft,texStorage3D:Me,texSubImage2D:ce,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:et,viewport:Be,reset:Ct}}function a1(s,e,t,i,o,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new it,p=new WeakMap;let g;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,w){return x?new OffscreenCanvas(D,w):Oa("canvas")}function M(D,w,Z){let me=1;const _e=We(D);if((_e.width>Z||_e.height>Z)&&(me=Z/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(me*_e.width),Xe=Math.floor(me*_e.height);g===void 0&&(g=E(ce,Xe));const Ae=w?E(ce,Xe):g;return Ae.width=ce,Ae.height=Xe,Ae.getContext("2d").drawImage(D,0,0,ce,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ce+"x"+Xe+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function S(D){return D.generateMipmaps}function v(D){s.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,w,Z,me,_e=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=w;if(w===s.RED&&(Z===s.FLOAT&&(ce=s.R32F),Z===s.HALF_FLOAT&&(ce=s.R16F),Z===s.UNSIGNED_BYTE&&(ce=s.R8)),w===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ce=s.R8UI),Z===s.UNSIGNED_SHORT&&(ce=s.R16UI),Z===s.UNSIGNED_INT&&(ce=s.R32UI),Z===s.BYTE&&(ce=s.R8I),Z===s.SHORT&&(ce=s.R16I),Z===s.INT&&(ce=s.R32I)),w===s.RG&&(Z===s.FLOAT&&(ce=s.RG32F),Z===s.HALF_FLOAT&&(ce=s.RG16F),Z===s.UNSIGNED_BYTE&&(ce=s.RG8)),w===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ce=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ce=s.RG16UI),Z===s.UNSIGNED_INT&&(ce=s.RG32UI),Z===s.BYTE&&(ce=s.RG8I),Z===s.SHORT&&(ce=s.RG16I),Z===s.INT&&(ce=s.RG32I)),w===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),Z===s.UNSIGNED_INT&&(ce=s.RGB32UI),Z===s.BYTE&&(ce=s.RGB8I),Z===s.SHORT&&(ce=s.RGB16I),Z===s.INT&&(ce=s.RGB32I)),w===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ce=s.RGBA32UI),Z===s.BYTE&&(ce=s.RGBA8I),Z===s.SHORT&&(ce=s.RGBA16I),Z===s.INT&&(ce=s.RGBA32I)),w===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),w===s.RGBA){const Xe=_e?Bu:Et.getTransfer(me);Z===s.FLOAT&&(ce=s.RGBA32F),Z===s.HALF_FLOAT&&(ce=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ce=Xe===It?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function R(D,w){let Z;return D?w===null||w===Es||w===Ro?Z=s.DEPTH24_STENCIL8:w===xi?Z=s.DEPTH32F_STENCIL8:w===Na&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Es||w===Ro?Z=s.DEPTH_COMPONENT24:w===xi?Z=s.DEPTH_COMPONENT32F:w===Na&&(Z=s.DEPTH_COMPONENT16),Z}function k(D,w){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Nn&&D.minFilter!==Qn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function F(D){const w=D.target;w.removeEventListener("dispose",F),W(w),w.isVideoTexture&&p.delete(w)}function N(D){const w=D.target;w.removeEventListener("dispose",N),C(w)}function W(D){const w=i.get(D);if(w.__webglInit===void 0)return;const Z=D.source,me=_.get(Z);if(me){const _e=me[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(D),Object.keys(me).length===0&&_.delete(Z)}i.remove(D)}function P(D){const w=i.get(D);s.deleteTexture(w.__webglTexture);const Z=D.source,me=_.get(Z);delete me[w.__cacheKey],u.memory.textures--}function C(D){const w=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let _e=0;_e<w.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(w.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)s.deleteFramebuffer(w.__webglFramebuffer[me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=D.textures;for(let me=0,_e=Z.length;me<_e;me++){const ce=i.get(Z[me]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),u.memory.textures--),i.remove(Z[me])}i.remove(D)}let z=0;function ae(){z=0}function te(){const D=z;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),z+=1,D}function fe(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function pe(D,w){const Z=i.get(D);if(D.isVideoTexture&&Ye(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,D,w);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+w)}function oe(D,w){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+w)}function ue(D,w){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,w);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+w)}function H(D,w){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){he(Z,D,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+w)}const le={[Ao]:s.REPEAT,[Wr]:s.CLAMP_TO_EDGE,[ku]:s.MIRRORED_REPEAT},re={[Nn]:s.NEAREST,[dv]:s.NEAREST_MIPMAP_NEAREST,[Ca]:s.NEAREST_MIPMAP_LINEAR,[Qn]:s.LINEAR,[Pu]:s.LINEAR_MIPMAP_NEAREST,[rr]:s.LINEAR_MIPMAP_LINEAR},U={[ZS]:s.NEVER,[iE]:s.ALWAYS,[QS]:s.LESS,[Tv]:s.LEQUAL,[JS]:s.EQUAL,[nE]:s.GEQUAL,[eE]:s.GREATER,[tE]:s.NOTEQUAL};function ne(D,w){if(w.type===xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Qn||w.magFilter===Pu||w.magFilter===Ca||w.magFilter===rr||w.minFilter===Qn||w.minFilter===Pu||w.minFilter===Ca||w.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,le[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,le[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,le[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,re[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Nn||w.minFilter!==Ca&&w.minFilter!==rr||w.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(D,w){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",F));const me=w.source;let _e=_.get(me);_e===void 0&&(_e={},_.set(me,_e));const ce=fe(w);if(ce!==D.__cacheKey){_e[ce]===void 0&&(_e[ce]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),_e[ce].usedTimes++;const Xe=_e[D.__cacheKey];Xe!==void 0&&(_e[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&P(w)),D.__cacheKey=ce,D.__webglTexture=_e[ce].texture}return Z}function Q(D,w,Z){let me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=s.TEXTURE_3D);const _e=Ue(D,w),ce=w.source;t.bindTexture(me,D.__webglTexture,s.TEXTURE0+Z);const Xe=i.get(ce);if(ce.version!==Xe.__version||_e===!0){t.activeTexture(s.TEXTURE0+Z);const Ae=Et.getPrimaries(Et.workingColorSpace),Fe=w.colorSpace===Gr?null:Et.getPrimaries(w.colorSpace),ft=w.colorSpace===Gr||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=M(w.image,!1,o.maxTextureSize);Me=bt(w,Me);const ke=a.convert(w.format,w.colorSpace),Ke=a.convert(w.type);let et=L(w.internalFormat,ke,Ke,w.colorSpace,w.isVideoTexture);ne(me,w);let Be;const pt=w.mipmaps,rt=w.isVideoTexture!==!0,Ct=Xe.__version===void 0||_e===!0,G=ce.dataReady,Re=k(w,Me);if(w.isDepthTexture)et=R(w.format===Co,w.type),Ct&&(rt?t.texStorage2D(s.TEXTURE_2D,1,et,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,ke,Ke,null));else if(w.isDataTexture)if(pt.length>0){rt&&Ct&&t.texStorage2D(s.TEXTURE_2D,Re,et,pt[0].width,pt[0].height);for(let ie=0,de=pt.length;ie<de;ie++)Be=pt[ie],rt?G&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,Ke,Be.data):t.texImage2D(s.TEXTURE_2D,ie,et,Be.width,Be.height,0,ke,Ke,Be.data);w.generateMipmaps=!1}else rt?(Ct&&t.texStorage2D(s.TEXTURE_2D,Re,et,Me.width,Me.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,Ke,Me.data)):t.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,ke,Ke,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,et,pt[0].width,pt[0].height,Me.depth);for(let ie=0,de=pt.length;ie<de;ie++)if(Be=pt[ie],w.format!==li)if(ke!==null)if(rt){if(G)if(w.layerUpdates.size>0){const Le=p_(Be.width,Be.height,w.format,w.type);for(const Pe of w.layerUpdates){const st=Be.data.subarray(Pe*Le/Be.data.BYTES_PER_ELEMENT,(Pe+1)*Le/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,Pe,Be.width,Be.height,1,ke,st)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Me.depth,ke,Be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,et,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Me.depth,ke,Ke,Be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,et,Be.width,Be.height,Me.depth,0,ke,Ke,Be.data)}else{rt&&Ct&&t.texStorage2D(s.TEXTURE_2D,Re,et,pt[0].width,pt[0].height);for(let ie=0,de=pt.length;ie<de;ie++)Be=pt[ie],w.format!==li?ke!==null?rt?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,et,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?G&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,Ke,Be.data):t.texImage2D(s.TEXTURE_2D,ie,et,Be.width,Be.height,0,ke,Ke,Be.data)}else if(w.isDataArrayTexture)if(rt){if(Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,et,Me.width,Me.height,Me.depth),G)if(w.layerUpdates.size>0){const ie=p_(Me.width,Me.height,w.format,w.type);for(const de of w.layerUpdates){const Le=Me.data.subarray(de*ie/Me.data.BYTES_PER_ELEMENT,(de+1)*ie/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,Me.width,Me.height,1,ke,Ke,Le)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,Ke,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,ke,Ke,Me.data);else if(w.isData3DTexture)rt?(Ct&&t.texStorage3D(s.TEXTURE_3D,Re,et,Me.width,Me.height,Me.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,Ke,Me.data)):t.texImage3D(s.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,ke,Ke,Me.data);else if(w.isFramebufferTexture){if(Ct)if(rt)t.texStorage2D(s.TEXTURE_2D,Re,et,Me.width,Me.height);else{let ie=Me.width,de=Me.height;for(let Le=0;Le<Re;Le++)t.texImage2D(s.TEXTURE_2D,Le,et,ie,de,0,ke,Ke,null),ie>>=1,de>>=1}}else if(pt.length>0){if(rt&&Ct){const ie=We(pt[0]);t.texStorage2D(s.TEXTURE_2D,Re,et,ie.width,ie.height)}for(let ie=0,de=pt.length;ie<de;ie++)Be=pt[ie],rt?G&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ke,Ke,Be):t.texImage2D(s.TEXTURE_2D,ie,et,ke,Ke,Be);w.generateMipmaps=!1}else if(rt){if(Ct){const ie=We(Me);t.texStorage2D(s.TEXTURE_2D,Re,et,ie.width,ie.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Ke,Me)}else t.texImage2D(s.TEXTURE_2D,0,et,ke,Ke,Me);S(w)&&v(me),Xe.__version=ce.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function he(D,w,Z){if(w.image.length!==6)return;const me=Ue(D,w),_e=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Z);const ce=i.get(_e);if(_e.version!==ce.__version||me===!0){t.activeTexture(s.TEXTURE0+Z);const Xe=Et.getPrimaries(Et.workingColorSpace),Ae=w.colorSpace===Gr?null:Et.getPrimaries(w.colorSpace),Fe=w.colorSpace===Gr||Xe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ft=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let de=0;de<6;de++)!ft&&!Me?ke[de]=M(w.image[de],!0,o.maxCubemapSize):ke[de]=Me?w.image[de].image:w.image[de],ke[de]=bt(w,ke[de]);const Ke=ke[0],et=a.convert(w.format,w.colorSpace),Be=a.convert(w.type),pt=L(w.internalFormat,et,Be,w.colorSpace),rt=w.isVideoTexture!==!0,Ct=ce.__version===void 0||me===!0,G=_e.dataReady;let Re=k(w,Ke);ne(s.TEXTURE_CUBE_MAP,w);let ie;if(ft){rt&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,pt,Ke.width,Ke.height);for(let de=0;de<6;de++){ie=ke[de].mipmaps;for(let Le=0;Le<ie.length;Le++){const Pe=ie[Le];w.format!==li?et!==null?rt?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,Pe.width,Pe.height,et,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,pt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,Pe.width,Pe.height,et,Be,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,pt,Pe.width,Pe.height,0,et,Be,Pe.data)}}}else{if(ie=w.mipmaps,rt&&Ct){ie.length>0&&Re++;const de=We(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,pt,de.width,de.height)}for(let de=0;de<6;de++)if(Me){rt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke[de].width,ke[de].height,et,Be,ke[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pt,ke[de].width,ke[de].height,0,et,Be,ke[de].data);for(let Le=0;Le<ie.length;Le++){const st=ie[Le].image[de].image;rt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,st.width,st.height,et,Be,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,pt,st.width,st.height,0,et,Be,st.data)}}else{rt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,et,Be,ke[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pt,et,Be,ke[de]);for(let Le=0;Le<ie.length;Le++){const Pe=ie[Le];rt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,et,Be,Pe.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,pt,et,Be,Pe.image[de])}}}S(w)&&v(s.TEXTURE_CUBE_MAP),ce.__version=_e.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Ee(D,w,Z,me,_e,ce){const Xe=a.convert(Z.format,Z.colorSpace),Ae=a.convert(Z.type),Fe=L(Z.internalFormat,Xe,Ae,Z.colorSpace),ft=i.get(w),Me=i.get(Z);if(Me.__renderTarget=w,!ft.__hasExternalTextures){const ke=Math.max(1,w.width>>ce),Ke=Math.max(1,w.height>>ce);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,ce,Fe,ke,Ke,w.depth,0,Xe,Ae,null):t.texImage2D(_e,ce,Fe,ke,Ke,0,Xe,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),ht(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Me.__webglTexture,0,gt(w)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Me.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(D,w,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){const me=w.depthTexture,_e=me&&me.isDepthTexture?me.type:null,ce=R(w.stencilBuffer,_e),Xe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=gt(w);ht(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,ce,w.width,w.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ce,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ce,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,D)}else{const me=w.textures;for(let _e=0;_e<me.length;_e++){const ce=me[_e],Xe=a.convert(ce.format,ce.colorSpace),Ae=a.convert(ce.type),Fe=L(ce.internalFormat,Xe,Ae,ce.colorSpace),ft=gt(w);Z&&ht(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Fe,w.width,w.height):ht(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const _e=me.__webglTexture,ce=gt(w);if(w.depthTexture.format===xo)ht(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(w.depthTexture.format===Co)ht(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ne(D){const w=i.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=me}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,D)}else if(Z){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=s.createRenderbuffer(),ye(w.__webglDepthbuffer[me],D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ye(w.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(D,w,Z){const me=i.get(D);w!==void 0&&Ee(me.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ne(D)}function Dt(D){const w=D.texture,Z=i.get(D),me=i.get(w);D.addEventListener("dispose",N);const _e=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=w.version,u.memory.textures++),ce){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)Z.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const ft=i.get(_e[Ae]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&ht(D)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];Z.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const ft=a.convert(Fe.format,Fe.colorSpace),Me=a.convert(Fe.type),ke=L(Fe.internalFormat,ft,Me,Fe.colorSpace,D.isXRRenderTarget===!0),Ke=gt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,ke,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ne(s.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee(Z.__webglFramebuffer[Ae][Fe],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else Ee(Z.__webglFramebuffer[Ae],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(w)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const ft=_e[Ae],Me=i.get(ft);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),ne(s.TEXTURE_2D,ft),Ee(Z.__webglFramebuffer,D,ft,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),S(ft)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,me.__webglTexture),ne(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee(Z.__webglFramebuffer[Fe],D,w,s.COLOR_ATTACHMENT0,Ae,Fe);else Ee(Z.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,Ae,0);S(w)&&v(Ae),t.unbindTexture()}D.depthBuffer&&Ne(D)}function vt(D){const w=D.textures;for(let Z=0,me=w.length;Z<me;Z++){const _e=w[Z];if(S(_e)){const ce=b(D),Xe=i.get(_e).__webglTexture;t.bindTexture(ce,Xe),v(ce),t.unbindTexture()}}}const Ft=[],B=[];function Rn(D){if(D.samples>0){if(ht(D)===!1){const w=D.textures,Z=D.width,me=D.height;let _e=s.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=i.get(D),Ae=w.length>1;if(Ae)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ft=i.get(w[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,Z,me,0,0,Z,me,_e,s.NEAREST),d===!0&&(Ft.length=0,B.length=0,Ft.push(s.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ft.push(ce),B.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ft=i.get(w[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function gt(D){return Math.min(o.maxSamples,D.samples)}function ht(D){const w=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(D){const w=u.render.frame;p.get(D)!==w&&(p.set(D,w),D.update())}function bt(D,w){const Z=D.colorSpace,me=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==Fn&&Z!==Gr&&(Et.getTransfer(Z)===It?(me!==li||_e!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function We(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=ae,this.setTexture2D=pe,this.setTexture2DArray=oe,this.setTexture3D=ue,this.setTextureCube=H,this.rebindTextures=Qe,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ht}function l1(s,e){function t(i,o=Gr){let a;const u=Et.getTransfer(o);if(i===cr)return s.UNSIGNED_BYTE;if(i===yh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===xh)return s.UNSIGNED_SHORT_5_5_5_1;if(i===mv)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===hv)return s.BYTE;if(i===pv)return s.SHORT;if(i===Na)return s.UNSIGNED_SHORT;if(i===vh)return s.INT;if(i===Es)return s.UNSIGNED_INT;if(i===xi)return s.FLOAT;if(i===Ha)return s.HALF_FLOAT;if(i===gv)return s.ALPHA;if(i===_v)return s.RGB;if(i===li)return s.RGBA;if(i===vv)return s.LUMINANCE;if(i===yv)return s.LUMINANCE_ALPHA;if(i===xo)return s.DEPTH_COMPONENT;if(i===Co)return s.DEPTH_STENCIL;if(i===Sh)return s.RED;if(i===Eh)return s.RED_INTEGER;if(i===xv)return s.RG;if(i===Mh)return s.RG_INTEGER;if(i===Th)return s.RGBA_INTEGER;if(i===Lu||i===Du||i===Iu||i===Nu)if(u===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Lu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Lu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Du)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Iu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dd||i===Id||i===Nd||i===Ud)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Dd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Id)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ud)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fd||i===Od||i===kd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Fd||i===Od)return u===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===kd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bd||i===zd||i===Hd||i===Vd||i===Gd||i===Wd||i===Xd||i===jd||i===Yd||i===qd||i===Kd||i===$d||i===Zd||i===Qd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Bd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$d)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qd)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uu||i===Jd||i===eh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Uu)return u===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sv||i===th||i===nh||i===ih)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Uu)return a.COMPRESSED_RED_RGTC1_EXT;if(i===th)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ih)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const u1={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),v=this._getHandJoint(h,M);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=p.position.distanceTo(g.position),x=.02,E=.005;h.inputState.pinching&&_>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(u1)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const c1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class d1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new hn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Kr({vertexShader:c1,fragmentShader:f1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new Yu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h1 extends ws{constructor(e,t){super();const i=this;let o=null,a=1,u=null,c="local-floor",d=1,h=null,p=null,g=null,_=null,x=null,E=null;const M=new d1,S=t.getContextAttributes();let v=null,b=null;const L=[],R=[],k=new it;let F=null;const N=new An;N.viewport=new Rt;const W=new An;W.viewport=new Rt;const P=[N,W],C=new TM;let z=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=L[Q];return he===void 0&&(he=new hd,L[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=L[Q];return he===void 0&&(he=new hd,L[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=L[Q];return he===void 0&&(he=new hd,L[Q]=he),he.getHandSpace()};function te(Q){const he=R.indexOf(Q.inputSource);if(he===-1)return;const Ee=L[he];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,h||u),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function fe(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",pe);for(let Q=0;Q<L.length;Q++){const he=R[Q];he!==null&&(R[Q]=null,L[Q].disconnect(he))}z=null,ae=null,M.reset(),e.setRenderTarget(v),x=null,_=null,g=null,o=null,b=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(k),o.enabledFeatures!==void 0&&o.enabledFeatures.includes("layers")){let Ee=null,ye=null,we=null;S.depth&&(we=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=S.stencil?Co:xo,ye=S.stencil?Ro:Es);const Ne={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};g=new XRWebGLBinding(o,t),_=g.createProjectionLayer(Ne),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),b=new Ms(_.textureWidth,_.textureHeight,{format:li,type:cr,depthTexture:new zv(_.textureWidth,_.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const Ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,Ee),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new Ms(x.framebufferWidth,x.framebufferHeight,{format:li,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}b.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Ue.setContext(o),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function pe(Q){for(let he=0;he<Q.removed.length;he++){const Ee=Q.removed[he],ye=R.indexOf(Ee);ye>=0&&(R[ye]=null,L[ye].disconnect(Ee))}for(let he=0;he<Q.added.length;he++){const Ee=Q.added[he];let ye=R.indexOf(Ee);if(ye===-1){for(let Ne=0;Ne<L.length;Ne++)if(Ne>=R.length){R.push(Ee),ye=Ne;break}else if(R[Ne]===null){R[Ne]=Ee,ye=Ne;break}if(ye===-1)break}const we=L[ye];we&&we.connect(Ee)}}const oe=new X,ue=new X;function H(Q,he,Ee){oe.setFromMatrixPosition(he.matrixWorld),ue.setFromMatrixPosition(Ee.matrixWorld);const ye=oe.distanceTo(ue),we=he.projectionMatrix.elements,Ne=Ee.projectionMatrix.elements,Qe=we[14]/(we[10]-1),Dt=we[14]/(we[10]+1),vt=(we[9]+1)/we[5],Ft=(we[9]-1)/we[5],B=(we[8]-1)/we[0],Rn=(Ne[8]+1)/Ne[0],gt=Qe*B,ht=Qe*Rn,Ye=ye/(-B+Rn),bt=Ye*-B;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(bt),Q.translateZ(Ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const We=Qe+Ye,D=Dt+Ye,w=gt-bt,Z=ht+(ye-bt),me=vt*Dt/D*We,_e=Ft*Dt/D*We;Q.projectionMatrix.makePerspective(w,Z,me,_e,We,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let he=Q.near,Ee=Q.far;M.texture!==null&&(M.depthNear>0&&(he=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),C.near=W.near=N.near=he,C.far=W.far=N.far=Ee,(z!==C.near||ae!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,ae=C.far),N.layers.mask=Q.layers.mask|2,W.layers.mask=Q.layers.mask|4,C.layers.mask=N.layers.mask|W.layers.mask;const ye=Q.parent,we=C.cameras;le(C,ye);for(let Ne=0;Ne<we.length;Ne++)le(we[Ne],ye);we.length===2?H(C,N,W):C.projectionMatrix.copy(N.projectionMatrix),re(Q,C,ye)};function re(Q,he,Ee){Ee===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=bo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(Q){d=Q,_!==null&&(_.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let U=null;function ne(Q,he){if(p=he.getViewerPose(h||u),E=he,p!==null){const Ee=p.views;x!==null&&(e.setRenderTargetFramebuffer(b,x.framebuffer),e.setRenderTarget(b));let ye=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,ye=!0);for(let Ne=0;Ne<Ee.length;Ne++){const Qe=Ee[Ne];let Dt=null;if(x!==null)Dt=x.getViewport(Qe);else{const Ft=g.getViewSubImage(_,Qe);Dt=Ft.viewport,Ne===0&&(e.setRenderTargetTextures(b,Ft.colorTexture,_.ignoreDepthValues?void 0:Ft.depthStencilTexture),e.setRenderTarget(b))}let vt=P[Ne];vt===void 0&&(vt=new An,vt.layers.enable(Ne),vt.viewport=new Rt,P[Ne]=vt),vt.matrix.fromArray(Qe.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Qe.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Ne===0&&(C.matrix.copy(vt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ye===!0&&C.cameras.push(vt)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ne=g.getDepthInformation(Ee[0]);Ne&&Ne.isValid&&Ne.texture&&M.init(e,Ne,o.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const ye=R[Ee],we=L[Ee];ye!==null&&we!==void 0&&we.update(ye,he,h||u)}U&&U(Q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),E=null}const Ue=new Yv;Ue.setAnimationLoop(ne),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const ms=new Ii,p1=new ut;function m1(s,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function i(S,v){v.color.getRGB(S.fogColor.value,Iv(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,b,L,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(S,v):v.isMeshToonMaterial?(a(S,v),g(S,v)):v.isMeshPhongMaterial?(a(S,v),p(S,v)):v.isMeshStandardMaterial?(a(S,v),_(S,v),v.isMeshPhysicalMaterial&&x(S,v,R)):v.isMeshMatcapMaterial?(a(S,v),E(S,v)):v.isMeshDepthMaterial?a(S,v):v.isMeshDistanceMaterial?(a(S,v),M(S,v)):v.isMeshNormalMaterial?a(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&c(S,v)):v.isPointsMaterial?d(S,v,b,L):v.isSpriteMaterial?h(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Xn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Xn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const b=e.get(v),L=b.envMap,R=b.envMapRotation;L&&(S.envMap.value=L,ms.copy(R),ms.x*=-1,ms.y*=-1,ms.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),S.envMapRotation.value.setFromMatrix4(p1.makeRotationFromEuler(ms)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function c(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function d(S,v,b,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*b,S.scale.value=L*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function g(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function _(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function x(S,v,b){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Xn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function M(S,v){const b=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function g1(s,e,t,i){let o={},a={},u=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,L){const R=L.program;i.uniformBlockBinding(b,R)}function h(b,L){let R=o[b.id];R===void 0&&(E(b),R=p(b),o[b.id]=R,b.addEventListener("dispose",S));const k=L.program;i.updateUBOMapping(b,k);const F=e.render.frame;a[b.id]!==F&&(_(b),a[b.id]=F)}function p(b){const L=g();b.__bindingPointIndex=L;const R=s.createBuffer(),k=b.__size,F=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,k,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function g(){for(let b=0;b<c;b++)if(u.indexOf(b)===-1)return u.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(b){const L=o[b.id],R=b.uniforms,k=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,N=R.length;F<N;F++){const W=Array.isArray(R[F])?R[F]:[R[F]];for(let P=0,C=W.length;P<C;P++){const z=W[P];if(x(z,F,P,k)===!0){const ae=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let fe=0;for(let pe=0;pe<te.length;pe++){const oe=te[pe],ue=M(oe);typeof oe=="number"||typeof oe=="boolean"?(z.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ae+fe,z.__data)):oe.isMatrix3?(z.__data[0]=oe.elements[0],z.__data[1]=oe.elements[1],z.__data[2]=oe.elements[2],z.__data[3]=0,z.__data[4]=oe.elements[3],z.__data[5]=oe.elements[4],z.__data[6]=oe.elements[5],z.__data[7]=0,z.__data[8]=oe.elements[6],z.__data[9]=oe.elements[7],z.__data[10]=oe.elements[8],z.__data[11]=0):(oe.toArray(z.__data,fe),fe+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(b,L,R,k){const F=b.value,N=L+"_"+R;if(k[N]===void 0)return typeof F=="number"||typeof F=="boolean"?k[N]=F:k[N]=F.clone(),!0;{const W=k[N];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return k[N]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function E(b){const L=b.uniforms;let R=0;const k=16;for(let N=0,W=L.length;N<W;N++){const P=Array.isArray(L[N])?L[N]:[L[N]];for(let C=0,z=P.length;C<z;C++){const ae=P[C],te=Array.isArray(ae.value)?ae.value:[ae.value];for(let fe=0,pe=te.length;fe<pe;fe++){const oe=te[fe],ue=M(oe),H=R%k,le=H%ue.boundary,re=H+le;R+=le,re!==0&&k-re<ue.storage&&(R+=k-re),ae.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=R,R+=ue.storage}}}const F=R%k;return F>0&&(R+=k-F),b.__size=R,b.__cache={},this}function M(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),L}function S(b){const L=b.target;L.removeEventListener("dispose",S);const R=u.indexOf(L.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function v(){for(const b in o)s.deleteBuffer(o[b]);u=[],o={},a={}}return{bind:d,update:h,dispose:v}}class Qv{constructor(e={}){const{canvas:t=xE(),context:i=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,v=null;const b=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=Yr,this.toneMappingExposure=1;const R=this;let k=!1,F=0,N=0,W=null,P=-1,C=null;const z=new Rt,ae=new Rt;let te=null;const fe=new ot(0);let pe=0,oe=t.width,ue=t.height,H=1,le=null,re=null;const U=new Rt(0,0,oe,ue),ne=new Rt(0,0,oe,ue);let Ue=!1;const Q=new bh;let he=!1,Ee=!1;this.transmissionResolutionScale=1;const ye=new ut,we=new ut,Ne=new X,Qe=new Rt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Ft(){return W===null?H:1}let B=i;function Rn(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_h}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),B===null){const j="webgl2";if(B=Rn(j,A),B===null)throw Rn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let gt,ht,Ye,bt,We,D,w,Z,me,_e,ce,Xe,Ae,Fe,ft,Me,ke,Ke,et,Be,pt,rt,Ct,G;function Re(){gt=new AA(B),gt.init(),rt=new l1(B,gt),ht=new xA(B,gt,e,rt),Ye=new o1(B,gt),ht.reverseDepthBuffer&&_&&Ye.buffers.depth.setReversed(!0),bt=new bA(B),We=new YR,D=new a1(B,gt,Ye,We,ht,rt,bt),w=new EA(R),Z=new wA(R),me=new FM(B),Ct=new vA(B,me),_e=new RA(B,me,bt,Ct),ce=new LA(B,_e,me,bt),et=new PA(B,ht,D),Me=new SA(We),Xe=new jR(R,w,Z,gt,ht,Ct,Me),Ae=new m1(R,We),Fe=new KR,ft=new t1(gt),Ke=new _A(R,w,Z,Ye,ce,x,d),ke=new r1(R,ce,ht),G=new g1(B,bt,ht,Ye),Be=new yA(B,gt,bt),pt=new CA(B,gt,bt),bt.programs=Xe.programs,R.capabilities=ht,R.extensions=gt,R.properties=We,R.renderLists=Fe,R.shadowMap=ke,R.state=Ye,R.info=bt}Re();const ie=new h1(R,B);this.xr=ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(oe,ue,!1))},this.getSize=function(A){return A.set(oe,ue)},this.setSize=function(A,j,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,ue=j,t.width=Math.floor(A*H),t.height=Math.floor(j*H),J===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(oe*H,ue*H).floor()},this.setDrawingBufferSize=function(A,j,J){oe=A,ue=j,H=J,t.width=Math.floor(A*J),t.height=Math.floor(j*J),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,j,J,K){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,j,J,K),Ye.viewport(z.copy(U).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,j,J,K){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,j,J,K),Ye.scissor(ae.copy(ne).multiplyScalar(H).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Ye.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,j=!0,J=!0){let K=0;if(A){let Y=!1;if(W!==null){const Se=W.texture.format;Y=Se===Th||Se===Mh||Se===Eh}if(Y){const Se=W.texture.type,Ce=Se===cr||Se===Es||Se===Na||Se===Ro||Se===yh||Se===xh,De=Ke.getClearColor(),ze=Ke.getClearAlpha(),tt=De.r,Je=De.g,Ve=De.b;Ce?(E[0]=tt,E[1]=Je,E[2]=Ve,E[3]=ze,B.clearBufferuiv(B.COLOR,0,E)):(M[0]=tt,M[1]=Je,M[2]=Ve,M[3]=ze,B.clearBufferiv(B.COLOR,0,M))}else K|=B.COLOR_BUFFER_BIT}j&&(K|=B.DEPTH_BUFFER_BIT),J&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ke.dispose(),Fe.dispose(),ft.dispose(),We.dispose(),w.dispose(),Z.dispose(),ce.dispose(),Ct.dispose(),G.dispose(),Xe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Rs),ie.removeEventListener("sessionend",hr),Bi.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=bt.autoReset,j=ke.enabled,J=ke.autoUpdate,K=ke.needsUpdate,Y=ke.type;Re(),bt.autoReset=A,ke.enabled=j,ke.autoUpdate=J,ke.needsUpdate=K,ke.type=Y}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const j=A.target;j.removeEventListener("dispose",st),kt(j)}function kt(A){Jt(A),We.remove(A)}function Jt(A){const j=We.get(A).programs;j!==void 0&&(j.forEach(function(J){Xe.releaseProgram(J)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,J,K,Y,Se){j===null&&(j=Dt);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,De=Ya(A,j,J,K,Y);Ye.setMaterial(K,Ce);let ze=J.index,tt=1;if(K.wireframe===!0){if(ze=_e.getWireframeAttribute(J),ze===void 0)return;tt=2}const Je=J.drawRange,Ve=J.attributes.position;let xt=Je.start*tt,at=(Je.start+Je.count)*tt;Se!==null&&(xt=Math.max(xt,Se.start*tt),at=Math.min(at,(Se.start+Se.count)*tt)),ze!==null?(xt=Math.max(xt,0),at=Math.min(at,ze.count)):Ve!=null&&(xt=Math.max(xt,0),at=Math.min(at,Ve.count));const Yt=at-xt;if(Yt<0||Yt===1/0)return;Ct.setup(Y,K,De,J,ze);let Ht,St=Be;if(ze!==null&&(Ht=me.get(ze),St=pt,St.setIndex(Ht)),Y.isMesh)K.wireframe===!0?(Ye.setLineWidth(K.wireframeLinewidth*Ft()),St.setMode(B.LINES)):St.setMode(B.TRIANGLES);else if(Y.isLine){let qe=K.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Ft()),Y.isLineSegments?St.setMode(B.LINES):Y.isLineLoop?St.setMode(B.LINE_LOOP):St.setMode(B.LINE_STRIP)}else Y.isPoints?St.setMode(B.POINTS):Y.isSprite&&St.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)St.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,qt=Y._multiDrawCounts,yt=Y._multiDrawCount,vn=ze?me.get(ze).bytesPerElement:1,mr=We.get(K).currentProgram.getUniforms();for(let bn=0;bn<yt;bn++)mr.setValue(B,"_gl_DrawID",bn),St.render(qe[bn]/vn,qt[bn])}else if(Y.isInstancedMesh)St.renderInstances(xt,Yt,Y.count);else if(J.isInstancedBufferGeometry){const qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,qt=Math.min(J.instanceCount,qe);St.renderInstances(xt,Yt,qt)}else St.render(xt,Yt)};function Mt(A,j,J){A.transparent===!0&&A.side===bi&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,Cs(A,j,J),A.side=ur,A.needsUpdate=!0,Cs(A,j,J),A.side=bi):Cs(A,j,J)}this.compile=function(A,j,J=null){J===null&&(J=A),v=ft.get(J),v.init(j),L.push(v),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),A!==J&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const K=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Se=Y.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const De=Se[Ce];Mt(De,J,Y),K.add(De)}else Mt(Se,J,Y),K.add(Se)}),L.pop(),v=null,K},this.compileAsync=function(A,j,J=null){const K=this.compile(A,j,J);return new Promise(Y=>{function Se(){if(K.forEach(function(Ce){We.get(Ce).currentProgram.isReady()&&K.delete(Ce)}),K.size===0){Y(A);return}setTimeout(Se,10)}gt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let On=null;function Cn(A){On&&On(A)}function Rs(){Bi.stop()}function hr(){Bi.start()}const Bi=new Yv;Bi.setAnimationLoop(Cn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(A){On=A,ie.setAnimationLoop(A),A===null?Bi.stop():Bi.start()},ie.addEventListener("sessionstart",Rs),ie.addEventListener("sessionend",hr),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(j),j=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,j,W),v=ft.get(A,L.length),v.init(j),L.push(v),we.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,he=Me.init(this.clippingPlanes,Ee),S=Fe.get(A,b.length),S.init(),b.push(S),ie.enabled===!0&&ie.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&zi(Se,j,-1/0,R.sortObjects)}zi(A,j,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(le,re),vt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,vt&&Ke.addToRenderList(S,A),this.info.render.frame++,he===!0&&Me.beginShadows();const J=v.state.shadowsArray;ke.render(J,A,j),he===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=S.opaque,Y=S.transmissive;if(v.setupLights(),j.isArrayCamera){const Se=j.cameras;if(Y.length>0)for(let Ce=0,De=Se.length;Ce<De;Ce++){const ze=Se[Ce];Zr(K,Y,A,ze)}vt&&Ke.render(A);for(let Ce=0,De=Se.length;Ce<De;Ce++){const ze=Se[Ce];$r(S,A,ze,ze.viewport)}}else Y.length>0&&Zr(K,Y,A,j),vt&&Ke.render(A),$r(S,A,j);W!==null&&N===0&&(D.updateMultisampleRenderTarget(W),D.updateRenderTargetMipmap(W)),A.isScene===!0&&A.onAfterRender(R,A,j),Ct.resetDefaultState(),P=-1,C=null,L.pop(),L.length>0?(v=L[L.length-1],he===!0&&Me.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,b.pop(),b.length>0?S=b[b.length-1]:S=null};function zi(A,j,J,K){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){K&&Qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Ce=ce.update(A),De=A.material;De.visible&&S.push(A,Ce,De,J,Qe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Ce=ce.update(A),De=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qe.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Qe.copy(Ce.boundingSphere.center)),Qe.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(De)){const ze=Ce.groups;for(let tt=0,Je=ze.length;tt<Je;tt++){const Ve=ze[tt],xt=De[Ve.materialIndex];xt&&xt.visible&&S.push(A,Ce,xt,J,Qe.z,Ve)}}else De.visible&&S.push(A,Ce,De,J,Qe.z,null)}}const Se=A.children;for(let Ce=0,De=Se.length;Ce<De;Ce++)zi(Se[Ce],j,J,K)}function $r(A,j,J,K){const Y=A.opaque,Se=A.transmissive,Ce=A.transparent;v.setupLightsView(J),he===!0&&Me.setGlobalState(R.clippingPlanes,J),K&&Ye.viewport(z.copy(K)),Y.length>0&&pr(Y,j,J),Se.length>0&&pr(Se,j,J),Ce.length>0&&pr(Ce,j,J),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Zr(A,j,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[K.id]===void 0&&(v.state.transmissionRenderTarget[K.id]=new Ms(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Ha:cr,minFilter:rr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Se=v.state.transmissionRenderTarget[K.id],Ce=K.viewport||z;Se.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);const De=R.getRenderTarget();R.setRenderTarget(Se),R.getClearColor(fe),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),vt&&Ke.render(J);const ze=R.toneMapping;R.toneMapping=Yr;const tt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),v.setupLightsView(K),he===!0&&Me.setGlobalState(R.clippingPlanes,K),pr(A,J,K),D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ve=0,xt=j.length;Ve<xt;Ve++){const at=j[Ve],Yt=at.object,Ht=at.geometry,St=at.material,qe=at.group;if(St.side===bi&&Yt.layers.test(K.layers)){const qt=St.side;St.side=Xn,St.needsUpdate=!0,Xa(Yt,J,K,Ht,St,qe),St.side=qt,St.needsUpdate=!0,Je=!0}}Je===!0&&(D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se))}R.setRenderTarget(De),R.setClearColor(fe,pe),tt!==void 0&&(K.viewport=tt),R.toneMapping=ze}function pr(A,j,J){const K=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Se=A.length;Y<Se;Y++){const Ce=A[Y],De=Ce.object,ze=Ce.geometry,tt=K===null?Ce.material:K,Je=Ce.group;De.layers.test(J.layers)&&Xa(De,j,J,ze,tt,Je)}}function Xa(A,j,J,K,Y,Se){A.onBeforeRender(R,j,J,K,Y,Se),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(R,j,J,K,A,Se),Y.transparent===!0&&Y.side===bi&&Y.forceSinglePass===!1?(Y.side=Xn,Y.needsUpdate=!0,R.renderBufferDirect(J,j,K,Y,A,Se),Y.side=ur,Y.needsUpdate=!0,R.renderBufferDirect(J,j,K,Y,A,Se),Y.side=bi):R.renderBufferDirect(J,j,K,Y,A,Se),A.onAfterRender(R,j,J,K,Y,Se)}function Cs(A,j,J){j.isScene!==!0&&(j=Dt);const K=We.get(A),Y=v.state.lights,Se=v.state.shadowsArray,Ce=Y.state.version,De=Xe.getParameters(A,Y.state,Se,j,J),ze=Xe.getProgramCacheKey(De);let tt=K.programs;K.environment=A.isMeshStandardMaterial?j.environment:null,K.fog=j.fog,K.envMap=(A.isMeshStandardMaterial?Z:w).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",st),tt=new Map,K.programs=tt);let Je=tt.get(ze);if(Je!==void 0){if(K.currentProgram===Je&&K.lightsStateVersion===Ce)return Ei(A,De),Je}else De.uniforms=Xe.getUniforms(A),A.onBeforeCompile(De,R),Je=Xe.acquireProgram(De,ze),tt.set(ze,Je),K.uniforms=De.uniforms;const Ve=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),Ei(A,De),K.needsLights=$u(A),K.lightsStateVersion=Ce,K.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=Je,K.uniformsList=null,Je}function ja(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Fu.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Ei(A,j){const J=We.get(A);J.outputColorSpace=j.outputColorSpace,J.batching=j.batching,J.batchingColor=j.batchingColor,J.instancing=j.instancing,J.instancingColor=j.instancingColor,J.instancingMorph=j.instancingMorph,J.skinning=j.skinning,J.morphTargets=j.morphTargets,J.morphNormals=j.morphNormals,J.morphColors=j.morphColors,J.morphTargetsCount=j.morphTargetsCount,J.numClippingPlanes=j.numClippingPlanes,J.numIntersection=j.numClipIntersection,J.vertexAlphas=j.vertexAlphas,J.vertexTangents=j.vertexTangents,J.toneMapping=j.toneMapping}function Ya(A,j,J,K,Y){j.isScene!==!0&&(j=Dt),D.resetTextureUnits();const Se=j.fog,Ce=K.isMeshStandardMaterial?j.environment:null,De=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Fn,ze=(K.isMeshStandardMaterial?Z:w).get(K.envMap||Ce),tt=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!J.morphAttributes.position,xt=!!J.morphAttributes.normal,at=!!J.morphAttributes.color;let Yt=Yr;K.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Yt=R.toneMapping);const Ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=Ht!==void 0?Ht.length:0,qe=We.get(K),qt=v.state.lights;if(he===!0&&(Ee===!0||A!==C)){const pn=A===C&&K.id===P;Me.setState(K,A,pn)}let yt=!1;K.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==qt.state.version||qe.outputColorSpace!==De||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==ze||K.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==Je||qe.morphTargets!==Ve||qe.morphNormals!==xt||qe.morphColors!==at||qe.toneMapping!==Yt||qe.morphTargetsCount!==St)&&(yt=!0):(yt=!0,qe.__version=K.version);let vn=qe.currentProgram;yt===!0&&(vn=Cs(K,j,Y));let mr=!1,bn=!1,Hi=!1;const Ut=vn.getUniforms(),yn=qe.uniforms;if(Ye.useProgram(vn.program)&&(mr=!0,bn=!0,Hi=!0),K.id!==P&&(P=K.id,bn=!0),mr||C!==A){Ye.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),EE(ye),ME(ye),Ut.setValue(B,"projectionMatrix",ye)):Ut.setValue(B,"projectionMatrix",A.projectionMatrix),Ut.setValue(B,"viewMatrix",A.matrixWorldInverse);const an=Ut.map.cameraPosition;an!==void 0&&an.setValue(B,Ne.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&Ut.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ut.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,bn=!0,Hi=!0)}if(Y.isSkinnedMesh){Ut.setOptional(B,Y,"bindMatrix"),Ut.setOptional(B,Y,"bindMatrixInverse");const pn=Y.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ut.setValue(B,"boneTexture",pn.boneTexture,D))}Y.isBatchedMesh&&(Ut.setOptional(B,Y,"batchingTexture"),Ut.setValue(B,"batchingTexture",Y._matricesTexture,D),Ut.setOptional(B,Y,"batchingIdTexture"),Ut.setValue(B,"batchingIdTexture",Y._indirectTexture,D),Ut.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ut.setValue(B,"batchingColorTexture",Y._colorsTexture,D));const on=J.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&et.update(Y,J,vn),(bn||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Ut.setValue(B,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(yn.envMap.value=ze,yn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&j.environment!==null&&(yn.envMapIntensity.value=j.environmentIntensity),bn&&(Ut.setValue(B,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&qa(yn,Hi),Se&&K.fog===!0&&Ae.refreshFogUniforms(yn,Se),Ae.refreshMaterialUniforms(yn,K,H,ue,v.state.transmissionRenderTarget[A.id]),Fu.upload(B,ja(qe),yn,D)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Fu.upload(B,ja(qe),yn,D),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ut.setValue(B,"center",Y.center),Ut.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Ut.setValue(B,"normalMatrix",Y.normalMatrix),Ut.setValue(B,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const pn=K.uniformsGroups;for(let an=0,Tt=pn.length;an<Tt;an++){const Mi=pn[an];G.update(Mi,vn),G.bind(Mi,vn)}}return vn}function qa(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function $u(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,j,J){We.get(A.texture).__webglTexture=j,We.get(A.depthTexture).__webglTexture=J;const K=We.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const J=We.get(A);J.__webglFramebuffer=j,J.__useDefaultFramebuffer=j===void 0};const Ka=B.createFramebuffer();this.setRenderTarget=function(A,j=0,J=0){W=A,F=j,N=J;let K=!0,Y=null,Se=!1,Ce=!1;if(A){const ze=We.get(A);if(ze.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(ze.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(ze.__hasExternalTextures)D.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ve=A.depthTexture;if(ze.__boundDepthTexture!==Ve){if(Ve!==null&&We.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);const Je=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[j])?Y=Je[j][J]:Y=Je[j],Se=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?Y=We.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[J]:Y=Je,z.copy(A.viewport),ae.copy(A.scissor),te=A.scissorTest}else z.copy(U).multiplyScalar(H).floor(),ae.copy(ne).multiplyScalar(H).floor(),te=Ue;if(J!==0&&(Y=Ka),Ye.bindFramebuffer(B.FRAMEBUFFER,Y)&&K&&Ye.drawBuffers(A,Y),Ye.viewport(z),Ye.scissor(ae),Ye.setScissorTest(te),Se){const ze=We.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze.__webglTexture,J)}else if(Ce){const ze=We.get(A.texture),tt=j;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.__webglTexture,J,tt)}else if(A!==null&&J!==0){const ze=We.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ze.__webglTexture,J)}P=-1},this.readRenderTargetPixels=function(A,j,J,K,Y,Se,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){Ye.bindFramebuffer(B.FRAMEBUFFER,De);try{const ze=A.texture,tt=ze.format,Je=ze.type;if(!ht.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-K&&J>=0&&J<=A.height-Y&&B.readPixels(j,J,K,Y,rt.convert(tt),rt.convert(Je),Se)}finally{const ze=W!==null?We.get(W).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,j,J,K,Y,Se,Ce){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){const ze=A.texture,tt=ze.format,Je=ze.type;if(!ht.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-K&&J>=0&&J<=A.height-Y){Ye.bindFramebuffer(B.FRAMEBUFFER,De);const Ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ve),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(j,J,K,Y,rt.convert(tt),rt.convert(Je),0);const xt=W!==null?We.get(W).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,xt);const at=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await SE(B,at,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.deleteBuffer(Ve),B.deleteSync(at),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,J=0){A.isTexture!==!0&&(mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-J),Y=Math.floor(A.image.width*K),Se=Math.floor(A.image.height*K),Ce=j!==null?j.x:0,De=j!==null?j.y:0;D.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Ce,De,Y,Se),Ye.unbindTexture()};const $a=B.createFramebuffer(),Za=B.createFramebuffer();this.copyTextureToTexture=function(A,j,J=null,K=null,Y=0,Se=null){A.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],j=arguments[2],Se=arguments[3]||0,J=null),Se===null&&(Y!==0?(mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Y,Y=0):Se=0);let Ce,De,ze,tt,Je,Ve,xt,at,Yt;const Ht=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(J!==null)Ce=J.max.x-J.min.x,De=J.max.y-J.min.y,ze=J.isBox3?J.max.z-J.min.z:1,tt=J.min.x,Je=J.min.y,Ve=J.isBox3?J.min.z:0;else{const on=Math.pow(2,-Y);Ce=Math.floor(Ht.width*on),De=Math.floor(Ht.height*on),A.isDataArrayTexture?ze=Ht.depth:A.isData3DTexture?ze=Math.floor(Ht.depth*on):ze=1,tt=0,Je=0,Ve=0}K!==null?(xt=K.x,at=K.y,Yt=K.z):(xt=0,at=0,Yt=0);const St=rt.convert(j.format),qe=rt.convert(j.type);let qt;j.isData3DTexture?(D.setTexture3D(j,0),qt=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),qt=B.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),qt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const yt=B.getParameter(B.UNPACK_ROW_LENGTH),vn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),mr=B.getParameter(B.UNPACK_SKIP_PIXELS),bn=B.getParameter(B.UNPACK_SKIP_ROWS),Hi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Je),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ve);const Ut=A.isDataArrayTexture||A.isData3DTexture,yn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const on=We.get(A),pn=We.get(j),an=We.get(on.__renderTarget),Tt=We.get(pn.__renderTarget);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,an.__webglFramebuffer),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Mi=0;Mi<ze;Mi++)Ut&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(A).__webglTexture,Y,Ve+Mi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(j).__webglTexture,Se,Yt+Mi)),B.blitFramebuffer(tt,Je,Ce,De,xt,at,Ce,De,B.DEPTH_BUFFER_BIT,B.NEAREST);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||We.has(A)){const on=We.get(A),pn=We.get(j);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,$a),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,Za);for(let an=0;an<ze;an++)Ut?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,on.__webglTexture,Y,Ve+an):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,on.__webglTexture,Y),yn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,Se,Yt+an):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,Se),Y!==0?B.blitFramebuffer(tt,Je,Ce,De,xt,at,Ce,De,B.COLOR_BUFFER_BIT,B.NEAREST):yn?B.copyTexSubImage3D(qt,Se,xt,at,Yt+an,tt,Je,Ce,De):B.copyTexSubImage2D(qt,Se,xt,at,tt,Je,Ce,De);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(qt,Se,xt,at,Yt,Ce,De,ze,St,qe,Ht.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(qt,Se,xt,at,Yt,Ce,De,ze,St,Ht.data):B.texSubImage3D(qt,Se,xt,at,Yt,Ce,De,ze,St,qe,Ht):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,xt,at,Ce,De,St,qe,Ht.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,xt,at,Ht.width,Ht.height,St,Ht.data):B.texSubImage2D(B.TEXTURE_2D,Se,xt,at,Ce,De,St,qe,Ht);B.pixelStorei(B.UNPACK_ROW_LENGTH,yt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,mr),B.pixelStorei(B.UNPACK_SKIP_ROWS,bn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Hi),Se===0&&j.generateMipmaps&&B.generateMipmap(qt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,j,J=null,K=null,Y=0){return A.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,K=arguments[1]||null,A=arguments[2],j=arguments[3],Y=arguments[4]||0),mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,J,K,Y)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){F=0,N=0,W=null,Ye.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}function B_(s,e){if(e===YS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===rh||e===Ev){let t=s.getIndex();if(t===null){const u=[],c=s.getAttribute("position");if(c!==void 0){for(let d=0;d<c.count;d++)u.push(d);s.setIndex(u),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,o=[];if(e===rh)for(let u=1;u<=i;u++)o.push(t.getX(0)),o.push(t.getX(u)),o.push(t.getX(u+1));else for(let u=0;u<i;u++)u%2===0?(o.push(t.getX(u)),o.push(t.getX(u+1)),o.push(t.getX(u+2))):(o.push(t.getX(u+2)),o.push(t.getX(u+1)),o.push(t.getX(u)));o.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(o),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Jv extends As{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new S1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new L1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new I1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new w1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new R1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new C1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new N1(t)}),this.register(function(t){return new U1(t)})}load(e,t,i,o){const a=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const h=Da.extractUrlBase(e);u=Da.resolveURL(h,this.path)}else u=Da.extractUrlBase(e);this.manager.itemStart(e);const c=function(h){o?o(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},d=new Gv(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{a.parse(h,u,function(p){t(p),a.manager.itemEnd(e)},c)}catch(p){c(p)}},i,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,o){let a;const u={},c={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===e0){try{u[_t.KHR_BINARY_GLTF]=new F1(e)}catch(g){o&&o(g);return}a=JSON.parse(u[_t.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new K1(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const g=this.pluginCallbacks[p](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[g.name]=g,u[g.name]=!0}if(a.extensionsUsed)for(let p=0;p<a.extensionsUsed.length;++p){const g=a.extensionsUsed[p],_=a.extensionsRequired||[];switch(g){case _t.KHR_MATERIALS_UNLIT:u[g]=new y1;break;case _t.KHR_DRACO_MESH_COMPRESSION:u[g]=new O1(a,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:u[g]=new k1;break;case _t.KHR_MESH_QUANTIZATION:u[g]=new B1;break;default:_.indexOf(g)>=0&&c[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(u),h.setPlugins(c),h.parse(i,o)}parseAsync(e,t){const i=this;return new Promise(function(o,a){i.parse(e,t,o,a)})}}function _1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class v1{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,o=t.length;i<o;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let o=t.cache.get(i);if(o)return o;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const p=new ot(16777215);d.color!==void 0&&p.setRGB(d.color[0],d.color[1],d.color[2],Fn);const g=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new Nh(p),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new SM(p),h.distance=g;break;case"spot":h=new yM(p),h.distance=g,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),h.decay=2,ir(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),o=Promise.resolve(h),t.cache.add(i,o),o}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],c=(a.extensions&&a.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(d){return i._getNodeRef(t.cache,c,d)})}}class y1{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return xs}extendParams(e,t,i){const o=[];e.color=new ot(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const u=a.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Fn),e.opacity=u[3]}a.baseColorTexture!==void 0&&o.push(i.assignTexture(e,"map",a.baseColorTexture,dn))}return Promise.all(o)}}class x1{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=o.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class S1{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const c=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(c,c)}return Promise.all(a)}}class E1{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=o.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class M1{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(a)}}class T1{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ot(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=o.extensions[this.name];if(u.sheenColorFactor!==void 0){const c=u.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],Fn)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",u.sheenColorTexture,dn)),u.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(a)}}class w1{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(a)}}class A1{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const c=u.attenuationColor||[1,1,1];return t.attenuationColor=new ot().setRGB(c[0],c[1],c[2],Fn),Promise.all(a)}}class R1{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=o.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class C1{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",u.specularTexture));const c=u.specularColorFactor||[1,1,1];return t.specularColor=new ot().setRGB(c[0],c[1],c[2],Fn),u.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",u.specularColorTexture,dn)),Promise.all(a)}}class b1{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(a)}}class P1{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(a)}}class L1{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,o=i.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const a=o.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,u)}}class D1{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,o=i.json,a=o.textures[e];if(!a.extensions||!a.extensions[t])return null;const u=a.extensions[t],c=o.images[u.source];let d=i.textureLoader;if(c.uri){const h=i.options.manager.getHandler(c.uri);h!==null&&(d=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,u.source,d);if(o.extensionsRequired&&o.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class I1{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,o=i.json,a=o.textures[e];if(!a.extensions||!a.extensions[t])return null;const u=a.extensions[t],c=o.images[u.source];let d=i.textureLoader;if(c.uri){const h=i.options.manager.getHandler(c.uri);h!==null&&(d=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,u.source,d);if(o.extensionsRequired&&o.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class N1{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const o=i.extensions[this.name],a=this.parser.getDependency("buffer",o.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(c){const d=o.byteOffset||0,h=o.byteLength||0,p=o.count,g=o.byteStride,_=new Uint8Array(c,d,h);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(p,g,_,o.mode,o.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(p*g);return u.decodeGltfBuffer(new Uint8Array(x),p,g,_,o.mode,o.filter),x})})}else return null}}class U1{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const o=t.meshes[i.mesh];for(const h of o.primitives)if(h.mode!==ai.TRIANGLES&&h.mode!==ai.TRIANGLE_STRIP&&h.mode!==ai.TRIANGLE_FAN&&h.mode!==void 0)return null;const u=i.extensions[this.name].attributes,c=[],d={};for(const h in u)c.push(this.parser.getDependency("accessor",u[h]).then(p=>(d[h]=p,d[h])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(h=>{const p=h.pop(),g=p.isGroup?p.children:[p],_=h[0].count,x=[];for(const E of g){const M=new ut,S=new X,v=new Di,b=new X(1,1,1),L=new ZE(E.geometry,E.material,_);for(let R=0;R<_;R++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,R),d.ROTATION&&v.fromBufferAttribute(d.ROTATION,R),d.SCALE&&b.fromBufferAttribute(d.SCALE,R),L.setMatrixAt(R,M.compose(S,v,b));for(const R in d)if(R==="_COLOR_0"){const k=d[R];L.instanceColor=new oh(k.array,k.itemSize,k.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&E.geometry.setAttribute(R,d[R]);jt.prototype.copy.call(L,E),this.parser.assignFinalMaterial(L),x.push(L)}return p.isGroup?(p.clear(),p.add(...x),p):x[0]}))}}const e0="glTF",Ra=12,z_={JSON:1313821514,BIN:5130562};class F1{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ra),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==e0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-Ra,a=new DataView(e,Ra);let u=0;for(;u<o;){const c=a.getUint32(u,!0);u+=4;const d=a.getUint32(u,!0);if(u+=4,d===z_.JSON){const h=new Uint8Array(e,Ra+u,c);this.content=i.decode(h)}else if(d===z_.BIN){const h=Ra+u;this.body=e.slice(h,h+c)}u+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class O1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,o=this.dracoLoader,a=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,c={},d={},h={};for(const p in u){const g=uh[p]||p.toLowerCase();c[g]=u[p]}for(const p in e.attributes){const g=uh[p]||p.toLowerCase();if(u[p]!==void 0){const _=i.accessors[e.attributes[p]],x=Eo[_.componentType];h[g]=x.name,d[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(p){return new Promise(function(g,_){o.decodeDracoFile(p,function(x){for(const E in x.attributes){const M=x.attributes[E],S=d[E];S!==void 0&&(M.normalized=S)}g(x)},c,h,Fn,_)})})}}class k1{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class B1{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class t0 extends Wa{constructor(e,t,i,o){super(e,t,i,o)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o*3+o;for(let u=0;u!==o;u++)t[u]=i[a+u];return t}interpolate_(e,t,i,o){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,d=c*2,h=c*3,p=o-t,g=(i-t)/p,_=g*g,x=_*g,E=e*h,M=E-h,S=-2*x+3*_,v=x-_,b=1-S,L=v-_+g;for(let R=0;R!==c;R++){const k=u[M+R+c],F=u[M+R+d]*p,N=u[E+R+c],W=u[E+R]*p;a[R]=b*k+L*F+S*N+v*W}return a}}const z1=new Di;class H1 extends t0{interpolate_(e,t,i,o){const a=super.interpolate_(e,t,i,o);return z1.fromArray(a).normalize().toArray(a),a}}const ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},H_={9728:Nn,9729:Qn,9984:dv,9985:Pu,9986:Ca,9987:rr},V_={33071:Wr,33648:ku,10497:Ao},pd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},V1={CUBICSPLINE:void 0,LINEAR:Fa,STEP:Ua},md={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function G1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Lh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ur})),s.DefaultMaterial}function gs(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ir(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function W1(s,e,t){let i=!1,o=!1,a=!1;for(let h=0,p=e.length;h<p;h++){const g=e[h];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(o=!0),g.COLOR_0!==void 0&&(a=!0),i&&o&&a)break}if(!i&&!o&&!a)return Promise.resolve(s);const u=[],c=[],d=[];for(let h=0,p=e.length;h<p;h++){const g=e[h];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):s.attributes.position;u.push(_)}if(o){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):s.attributes.normal;c.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):s.attributes.color;d.push(_)}}return Promise.all([Promise.all(u),Promise.all(c),Promise.all(d)]).then(function(h){const p=h[0],g=h[1],_=h[2];return i&&(s.morphAttributes.position=p),o&&(s.morphAttributes.normal=g),a&&(s.morphAttributes.color=_),s.morphTargetsRelative=!0,s})}function X1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,o=t.length;i<o;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function j1(s){let e;const t=s.extensions&&s.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gd(t.attributes):e=s.indices+":"+gd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,o=s.targets.length;i<o;i++)e+=":"+gd(s.targets[i]);return e}function gd(s){let e="";const t=Object.keys(s).sort();for(let i=0,o=t.length;i<o;i++)e+=t[i]+":"+s[t[i]]+";";return e}function ch(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Y1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const q1=new ut;class K1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new _1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,o=-1,a=!1,u=-1;if(typeof navigator<"u"){const c=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(c)===!0;const d=c.match(/Version\/(\d+)/);o=i&&d?parseInt(d[1],10):-1,a=c.indexOf("Firefox")>-1,u=a?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&o<17||a&&u<98?this.textureLoader=new _M(this.options.manager):this.textureLoader=new MM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,o=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(u){const c={scene:u[0][o.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:o.asset,parser:i,userData:{}};return gs(a,c,o),ir(c,o),Promise.all(i._invokeAll(function(d){return d.afterRoot&&d.afterRoot(c)})).then(function(){for(const d of c.scenes)d.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let o=0,a=t.length;o<a;o++){const u=t[o].joints;for(let c=0,d=u.length;c<d;c++)e[u[c]].isBone=!0}for(let o=0,a=e.length;o<a;o++){const u=e[o];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(i[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const o=i.clone(),a=(u,c)=>{const d=this.associations.get(u);d!=null&&this.associations.set(c,d);for(const[h,p]of u.children.entries())a(p,c.children[h])};return a(i,o),o.name+="_instance_"+e.uses[t]++,o}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const o=e(t[i]);if(o)return o}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let o=0;o<t.length;o++){const a=e(t[o]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let o=this.cache.get(i);if(!o){switch(e){case"scene":o=this.loadScene(t);break;case"node":o=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":o=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":o=this.loadAccessor(t);break;case"bufferView":o=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":o=this.loadBuffer(t);break;case"material":o=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":o=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":o=this.loadSkin(t);break;case"animation":o=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":o=this.loadCamera(t);break;default:if(o=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(i,o)}return o}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(o.map(function(a,u){return i.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(a,u){i.load(Da.resolveURL(t.uri,o.path),a,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const o=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+o)})}loadAccessor(e){const t=this,i=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const u=pd[o.type],c=Eo[o.componentType],d=o.normalized===!0,h=new c(o.count*u);return Promise.resolve(new Un(h,u,d))}const a=[];return o.bufferView!==void 0?a.push(this.getDependency("bufferView",o.bufferView)):a.push(null),o.sparse!==void 0&&(a.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(a).then(function(u){const c=u[0],d=pd[o.type],h=Eo[o.componentType],p=h.BYTES_PER_ELEMENT,g=p*d,_=o.byteOffset||0,x=o.bufferView!==void 0?i.bufferViews[o.bufferView].byteStride:void 0,E=o.normalized===!0;let M,S;if(x&&x!==g){const v=Math.floor(_/x),b="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+v+":"+o.count;let L=t.cache.get(b);L||(M=new h(c,v*x,o.count*x/p),L=new jE(M,x/p),t.cache.add(b,L)),S=new Rh(L,d,_%x/p,E)}else c===null?M=new h(o.count*d):M=new h(c,_,o.count*d),S=new Un(M,d,E);if(o.sparse!==void 0){const v=pd.SCALAR,b=Eo[o.sparse.indices.componentType],L=o.sparse.indices.byteOffset||0,R=o.sparse.values.byteOffset||0,k=new b(u[1],L,o.sparse.count*v),F=new h(u[2],R,o.sparse.count*d);c!==null&&(S=new Un(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let N=0,W=k.length;N<W;N++){const P=k[N];if(S.setX(P,F[N*d]),d>=2&&S.setY(P,F[N*d+1]),d>=3&&S.setZ(P,F[N*d+2]),d>=4&&S.setW(P,F[N*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=E}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,u=t.images[a];let c=this.textureLoader;if(u.uri){const d=i.manager.getHandler(u.uri);d!==null&&(c=d)}return this.loadTextureImage(e,a,c)}loadTextureImage(e,t,i){const o=this,a=this.json,u=a.textures[e],c=a.images[t],d=(c.uri||c.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,i).then(function(p){p.flipY=!1,p.name=u.name||c.name||"",p.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(p.name=c.uri);const _=(a.samplers||{})[u.sampler]||{};return p.magFilter=H_[_.magFilter]||Qn,p.minFilter=H_[_.minFilter]||rr,p.wrapS=V_[_.wrapS]||Ao,p.wrapT=V_[_.wrapT]||Ao,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==Nn&&p.minFilter!==Qn,o.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const i=this,o=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const u=o.images[e],c=self.URL||self.webkitURL;let d=u.uri||"",h=!1;if(u.bufferView!==void 0)d=i.getDependency("bufferView",u.bufferView).then(function(g){h=!0;const _=new Blob([g],{type:u.mimeType});return d=c.createObjectURL(_),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(d).then(function(g){return new Promise(function(_,x){let E=_;t.isImageBitmapLoader===!0&&(E=function(M){const S=new hn(M);S.needsUpdate=!0,_(S)}),t.load(Da.resolveURL(g,a.path),E,void 0,x)})}).then(function(g){return h===!0&&c.revokeObjectURL(d),ir(g,u),g.userData.mimeType=u.mimeType||Y1(u.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),g});return this.sourceCache[e]=p,p}assignTexture(e,t,i,o){const a=this;return this.getDependency("texture",i.index).then(function(u){if(!u)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(u=u.clone(),u.channel=i.texCoord),a.extensions[_t.KHR_TEXTURE_TRANSFORM]){const c=i.extensions!==void 0?i.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const d=a.associations.get(u);u=a.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(u,c),a.associations.set(u,d)}}return o!==void 0&&(u.colorSpace=o),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const o=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+i.uuid;let d=this.cache.get(c);d||(d=new Bv,Pi.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,d.sizeAttenuation=!1,this.cache.add(c,d)),i=d}else if(e.isLine){const c="LineBasicMaterial:"+i.uuid;let d=this.cache.get(c);d||(d=new kv,Pi.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,this.cache.add(c,d)),i=d}if(o||a||u){let c="ClonedMaterial:"+i.uuid+":";o&&(c+="derivative-tangents:"),a&&(c+="vertex-colors:"),u&&(c+="flat-shading:");let d=this.cache.get(c);d||(d=i.clone(),a&&(d.vertexColors=!0),u&&(d.flatShading=!0),o&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(c,d),this.associations.set(d,this.associations.get(i))),i=d}e.material=i}getMaterialType(){return Lh}loadMaterial(e){const t=this,i=this.json,o=this.extensions,a=i.materials[e];let u;const c={},d=a.extensions||{},h=[];if(d[_t.KHR_MATERIALS_UNLIT]){const g=o[_t.KHR_MATERIALS_UNLIT];u=g.getMaterialType(),h.push(g.extendParams(c,a,t))}else{const g=a.pbrMetallicRoughness||{};if(c.color=new ot(1,1,1),c.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;c.color.setRGB(_[0],_[1],_[2],Fn),c.opacity=_[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(c,"map",g.baseColorTexture,dn)),c.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,c.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(c,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(c,"roughnessMap",g.metallicRoughnessTexture))),u=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,c)})))}a.doubleSided===!0&&(c.side=bi);const p=a.alphaMode||md.OPAQUE;if(p===md.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,p===md.MASK&&(c.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&u!==xs&&(h.push(t.assignTexture(c,"normalMap",a.normalTexture)),c.normalScale=new it(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;c.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&u!==xs&&(h.push(t.assignTexture(c,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&u!==xs){const g=a.emissiveFactor;c.emissive=new ot().setRGB(g[0],g[1],g[2],Fn)}return a.emissiveTexture!==void 0&&u!==xs&&h.push(t.assignTexture(c,"emissiveMap",a.emissiveTexture,dn)),Promise.all(h).then(function(){const g=new u(c);return a.name&&(g.name=a.name),ir(g,a),t.associations.set(g,{materials:e}),a.extensions&&gs(o,g,a),g})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,o=this.primitiveCache;function a(c){return i[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(d){return G_(d,c,t)})}const u=[];for(let c=0,d=e.length;c<d;c++){const h=e[c],p=j1(h),g=o[p];if(g)u.push(g.promise);else{let _;h.extensions&&h.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?_=a(h):_=G_(new Fi,h,t),o[p]={primitive:h,promise:_},u.push(_)}}return Promise.all(u)}loadMesh(e){const t=this,i=this.json,o=this.extensions,a=i.meshes[e],u=a.primitives,c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d].material===void 0?G1(this.cache):this.getDependency("material",u[d].material);c.push(p)}return c.push(t.loadGeometries(u)),Promise.all(c).then(function(d){const h=d.slice(0,d.length-1),p=d[d.length-1],g=[];for(let x=0,E=p.length;x<E;x++){const M=p[x],S=u[x];let v;const b=h[x];if(S.mode===ai.TRIANGLES||S.mode===ai.TRIANGLE_STRIP||S.mode===ai.TRIANGLE_FAN||S.mode===void 0)v=a.isSkinnedMesh===!0?new qE(M,b):new Jn(M,b),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),S.mode===ai.TRIANGLE_STRIP?v.geometry=B_(v.geometry,Ev):S.mode===ai.TRIANGLE_FAN&&(v.geometry=B_(v.geometry,rh));else if(S.mode===ai.LINES)v=new eM(M,b);else if(S.mode===ai.LINE_STRIP)v=new Ph(M,b);else if(S.mode===ai.LINE_LOOP)v=new tM(M,b);else if(S.mode===ai.POINTS)v=new nM(M,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(v.geometry.morphAttributes).length>0&&X1(v,a),v.name=t.createUniqueName(a.name||"mesh_"+e),ir(v,a),S.extensions&&gs(o,v,S),t.assignFinalMaterial(v),g.push(v)}for(let x=0,E=g.length;x<E;x++)t.associations.set(g[x],{meshes:e,primitives:x});if(g.length===1)return a.extensions&&gs(o,g[0],a),g[0];const _=new Ss;a.extensions&&gs(o,_,a),t.associations.set(_,{meshes:e});for(let x=0,E=g.length;x<E;x++)_.add(g[x]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],o=i[i.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new An(wv.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):i.type==="orthographic"&&(t=new Ih(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ir(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let o=0,a=t.joints.length;o<a;o++)i.push(this._loadNodeShallow(t.joints[o]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(o){const a=o.pop(),u=o,c=[],d=[];for(let h=0,p=u.length;h<p;h++){const g=u[h];if(g){c.push(g);const _=new ut;a!==null&&_.fromArray(a.array,h*16),d.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Ch(c,d)})}loadAnimation(e){const t=this.json,i=this,o=t.animations[e],a=o.name?o.name:"animation_"+e,u=[],c=[],d=[],h=[],p=[];for(let g=0,_=o.channels.length;g<_;g++){const x=o.channels[g],E=o.samplers[x.sampler],M=x.target,S=M.node,v=o.parameters!==void 0?o.parameters[E.input]:E.input,b=o.parameters!==void 0?o.parameters[E.output]:E.output;M.node!==void 0&&(u.push(this.getDependency("node",S)),c.push(this.getDependency("accessor",v)),d.push(this.getDependency("accessor",b)),h.push(E),p.push(M))}return Promise.all([Promise.all(u),Promise.all(c),Promise.all(d),Promise.all(h),Promise.all(p)]).then(function(g){const _=g[0],x=g[1],E=g[2],M=g[3],S=g[4],v=[];for(let b=0,L=_.length;b<L;b++){const R=_[b],k=x[b],F=E[b],N=M[b],W=S[b];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const P=i._createAnimationTracks(R,k,F,N,W);if(P)for(let C=0;C<P.length;C++)v.push(P[C])}return new fM(a,void 0,v)})}createNodeMesh(e){const t=this.json,i=this,o=t.nodes[e];return o.mesh===void 0?null:i.getDependency("mesh",o.mesh).then(function(a){const u=i._getNodeRef(i.meshCache,o.mesh,a);return o.weights!==void 0&&u.traverse(function(c){if(c.isMesh)for(let d=0,h=o.weights.length;d<h;d++)c.morphTargetInfluences[d]=o.weights[d]}),u})}loadNode(e){const t=this.json,i=this,o=t.nodes[e],a=i._loadNodeShallow(e),u=[],c=o.children||[];for(let h=0,p=c.length;h<p;h++)u.push(i.getDependency("node",c[h]));const d=o.skin===void 0?Promise.resolve(null):i.getDependency("skin",o.skin);return Promise.all([a,Promise.all(u),d]).then(function(h){const p=h[0],g=h[1],_=h[2];_!==null&&p.traverse(function(x){x.isSkinnedMesh&&x.bind(_,q1)});for(let x=0,E=g.length;x<E;x++)p.add(g[x]);return p})}_loadNodeShallow(e){const t=this.json,i=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],u=a.name?o.createUniqueName(a.name):"",c=[],d=o._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&c.push(d),a.camera!==void 0&&c.push(o.getDependency("camera",a.camera).then(function(h){return o._getNodeRef(o.cameraCache,a.camera,h)})),o._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){c.push(h)}),this.nodeCache[e]=Promise.all(c).then(function(h){let p;if(a.isBone===!0?p=new Fv:h.length>1?p=new Ss:h.length===1?p=h[0]:p=new jt,p!==h[0])for(let g=0,_=h.length;g<_;g++)p.add(h[g]);if(a.name&&(p.userData.name=a.name,p.name=u),ir(p,a),a.extensions&&gs(i,p,a),a.matrix!==void 0){const g=new ut;g.fromArray(a.matrix),p.applyMatrix4(g)}else a.translation!==void 0&&p.position.fromArray(a.translation),a.rotation!==void 0&&p.quaternion.fromArray(a.rotation),a.scale!==void 0&&p.scale.fromArray(a.scale);return o.associations.has(p)||o.associations.set(p,{}),o.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],o=this,a=new Ss;i.name&&(a.name=o.createUniqueName(i.name)),ir(a,i),i.extensions&&gs(t,a,i);const u=i.nodes||[],c=[];for(let d=0,h=u.length;d<h;d++)c.push(o.getDependency("node",u[d]));return Promise.all(c).then(function(d){for(let p=0,g=d.length;p<g;p++)a.add(d[p]);const h=p=>{const g=new Map;for(const[_,x]of o.associations)(_ instanceof Pi||_ instanceof hn)&&g.set(_,x);return p.traverse(_=>{const x=o.associations.get(_);x!=null&&g.set(_,x)}),g};return o.associations=h(a),a})}_createAnimationTracks(e,t,i,o,a){const u=[],c=e.name?e.name:e.uuid,d=[];Hr[a.path]===Hr.weights?e.traverse(function(_){_.morphTargetInfluences&&d.push(_.name?_.name:_.uuid)}):d.push(c);let h;switch(Hr[a.path]){case Hr.weights:h=Lo;break;case Hr.rotation:h=Do;break;case Hr.position:case Hr.scale:h=Io;break;default:switch(i.itemSize){case 1:h=Lo;break;case 2:case 3:default:h=Io;break}break}const p=o.interpolation!==void 0?V1[o.interpolation]:Fa,g=this._getArrayFromAccessor(i);for(let _=0,x=d.length;_<x;_++){const E=new h(d[_]+"."+Hr[a.path],t.array,g,p);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),u.push(E)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ch(t.constructor),o=new Float32Array(t.length);for(let a=0,u=t.length;a<u;a++)o[a]=t[a]*i;t=o}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const o=this instanceof Do?H1:t0;return new o(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function $1(s,e,t){const i=e.attributes,o=new dr;if(i.POSITION!==void 0){const c=t.json.accessors[i.POSITION],d=c.min,h=c.max;if(d!==void 0&&h!==void 0){if(o.set(new X(d[0],d[1],d[2]),new X(h[0],h[1],h[2])),c.normalized){const p=ch(Eo[c.componentType]);o.min.multiplyScalar(p),o.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const c=new X,d=new X;for(let h=0,p=a.length;h<p;h++){const g=a[h];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],x=_.min,E=_.max;if(x!==void 0&&E!==void 0){if(d.setX(Math.max(Math.abs(x[0]),Math.abs(E[0]))),d.setY(Math.max(Math.abs(x[1]),Math.abs(E[1]))),d.setZ(Math.max(Math.abs(x[2]),Math.abs(E[2]))),_.normalized){const M=ch(Eo[_.componentType]);d.multiplyScalar(M)}c.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(c)}s.boundingBox=o;const u=new Ui;o.getCenter(u.center),u.radius=o.min.distanceTo(o.max)/2,s.boundingSphere=u}function G_(s,e,t){const i=e.attributes,o=[];function a(u,c){return t.getDependency("accessor",u).then(function(d){s.setAttribute(c,d)})}for(const u in i){const c=uh[u]||u.toLowerCase();c in s.attributes||o.push(a(i[u],c))}if(e.indices!==void 0&&!s.index){const u=t.getDependency("accessor",e.indices).then(function(c){s.setIndex(c)});o.push(u)}return Et.workingColorSpace!==Fn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),ir(s,e),$1(s,e,t),Promise.all(o).then(function(){return e.targets!==void 0?W1(s,e.targets,t):s})}const W_={type:"change"},kh={type:"start"},n0={type:"end"},Ru=new Va,X_=new Vr,Z1=Math.cos(70*wv.DEG2RAD),nn=new X,Wn=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_d=1e-6;class Q1 extends NM{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vo.ROTATE,MIDDLE:vo.DOLLY,RIGHT:vo.PAN},this.touches={ONE:go.ROTATE,TWO:go.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Di,this._lastTargetPosition=new X,this._quat=new Di().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new h_,this._sphericalDelta=new h_,this._scale=1,this._panOffset=new X,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new X,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eC.bind(this),this._onPointerDown=J1.bind(this),this._onPointerUp=tC.bind(this),this._onContextMenu=lC.bind(this),this._onMouseWheel=rC.bind(this),this._onKeyDown=sC.bind(this),this._onTouchStart=oC.bind(this),this._onTouchMove=aC.bind(this),this._onMouseDown=nC.bind(this),this._onMouseMove=iC.bind(this),this._interceptControlDown=uC.bind(this),this._interceptControlUp=cC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(W_),this.update(),this.state=Nt.NONE}update(e=null){const t=this.object.position;nn.copy(t).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=Wn:i>Math.PI&&(i-=Wn),o<-Math.PI?o+=Wn:o>Math.PI&&(o-=Wn),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=u!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),t.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=nn.length();u=this._clampDistance(c*this._scale);const d=c-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(c),this.object.updateMatrixWorld(),u=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Ru.origin.copy(this.object.position),Ru.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ru.direction))<Z1?this.object.lookAt(this.target):(X_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ru.intersectPlane(X_,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>_d||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_d||this._lastTargetPosition.distanceToSquared(this.target)>_d?(this.dispatchEvent(W_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wn/60*this.autoRotateSpeed*e:Wn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){nn.setFromMatrixColumn(t,0),nn.multiplyScalar(-e),this._panOffset.add(nn)}_panUp(e,t){this.screenSpacePanning===!0?nn.setFromMatrixColumn(t,1):(nn.setFromMatrixColumn(t,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(e),this._panOffset.add(nn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;nn.copy(o).sub(this.target);let a=nn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,a=t-i.top,u=i.width,c=i.height;this._mouse.x=o/u*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new it,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function J1(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function eC(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function tC(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(n0),this.state=Nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nC(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Nt.DOLLY;break;case vo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}break;case vo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(kh)}function iC(s){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function rC(s){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(s.preventDefault(),this.dispatchEvent(kh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(n0))}function sC(s){this.enabled!==!1&&this._handleKeyDown(s)}function oC(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case go.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Nt.TOUCH_ROTATE;break;case go.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case go.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Nt.TOUCH_DOLLY_PAN;break;case go.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(kh)}function aC(s){switch(this._trackPointer(s),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Nt.NONE}}function lC(s){this.enabled!==!1&&s.preventDefault()}function uC(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cC(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ho="/react-threejs-examples/pisa/",po=".png",i0=[ho+"px"+po,ho+"nx"+po,ho+"py"+po,ho+"ny"+po,ho+"pz"+po,ho+"nz"+po],r0="/react-threejs-examples/burger.glb",fC=()=>{const s=se.useRef(null),e=se.useRef(null),t=se.useRef(null),i=se.useRef(null),o=se.useRef(null);return se.useEffect(()=>{if(!s.current)return;const a=s.current,u=new Uv,c=new Xv().load(i0);u.background=c,u.fog=new ju(13421772,.02),i.current=u;const d=new Nh(16777215,1.75);d.position.set(10,10,10).normalize(),u.add(d);const h=new jv(16777215,.75);u.add(h);const p=new An(60,s.current.clientWidth/s.current.clientHeight,1,1e3);p.position.set(0,1,4),e.current=p;const g=new Qv;g.setPixelRatio(window.devicePixelRatio),g.setSize(s.current.clientWidth,s.current.clientHeight),a.appendChild(g.domElement),t.current=g;const _=new Q1(p,g.domElement);_.listenToKeyEvents(window),_.enableDamping=!0,_.dampingFactor=.05,_.screenSpacePanning=!1,_.minDistance=3,_.maxDistance=10,_.maxPolarAngle=Math.PI/2,o.current=_,window.addEventListener("resize",x);function x(){s.current&&(p.aspect=s.current.clientWidth/s.current.clientHeight,p.updateProjectionMatrix(),g.setSize(s.current.clientWidth,s.current.clientHeight))}return new Jv().load(r0,function(M){const S=M.scene;S.position.set(0,0,0),u.add(S)},void 0,function(M){console.error(M)}),()=>{g.dispose(),window.removeEventListener("resize",x),a.removeChild(g.domElement)}},[]),se.useEffect(()=>{const a=()=>{const u=e.current,c=i.current,d=t.current,h=o.current;requestAnimationFrame(a),h.update(),d.render(c,u)};a()},[]),_n.jsx("div",{ref:s,style:{width:"100%",height:"100vh"}})},dC=()=>{const s=se.useRef(null),e=se.useRef({x:0,y:0}),t=se.useRef(null),i=se.useRef(null),o=se.useRef(null),a=u=>{if(!s.current)return;const c=s.current.clientWidth/2,d=s.current.clientHeight/2;e.current.x=(u.clientX-c)/c,e.current.y=-(u.clientY-d)/d};return se.useEffect(()=>{if(!s.current)return;const u=s.current,c=new Uv,d=new Xv().load(i0);c.background=d,c.fog=new ju(13421772,.02),o.current=c;const h=new Nh(16777215,1.75);h.position.set(10,10,10).normalize(),c.add(h);const p=new jv(16777215,.75);c.add(p);const g=new An(60,s.current.clientWidth/s.current.clientHeight,1,1e3);g.position.set(0,1,4),t.current=g,new Jv().load(r0,M=>{const S=M.scene;S.position.set(0,0,0),c.add(S)},void 0,M=>{console.error("Error loading GLTF model:",M)});const x=new Qv;x.setPixelRatio(window.devicePixelRatio),x.setSize(s.current.clientWidth,s.current.clientHeight),u.appendChild(x.domElement),i.current=x;const E=()=>{if(!s.current)return;const M=s.current.clientWidth,S=s.current.clientHeight;g.aspect=M/S,g.updateProjectionMatrix(),x.setSize(M,S)};return window.addEventListener("resize",E),()=>{x.dispose(),u.removeChild(x.domElement),window.removeEventListener("resize",E)}},[]),se.useEffect(()=>{const u=()=>{const c=t.current,d=o.current,h=i.current;c.position.x+=(e.current.x*3-c.position.x)*.02,c.position.y+=(e.current.y*3-c.position.y)*.02,c.lookAt(d.position),h.render(d,c),requestAnimationFrame(u)};u()},[]),_n.jsx("div",{ref:s,style:{width:"100%",height:"100vh"},onMouseMove:u=>{a(u)}})},j_=()=>{const[s,e]=se.useState(!1);return _n.jsxs("div",{children:[_n.jsx("nav",{className:"navbar navbar-light bg-light",children:_n.jsxs("div",{className:"container-fluid justify-content-center",children:[_n.jsx("button",{className:"btn border-0",style:s?{fontWeight:"normal"}:{fontWeight:"bold"},onClick:()=>{e(!1)},children:"Mouse Control"}),_n.jsx("button",{className:"btn border-0",style:s?{fontWeight:"bold"}:{fontWeight:"normal"},onClick:()=>{e(!0)},children:"Dragable"})]})}),s?_n.jsx(fC,{}):_n.jsx(dC,{})]})};function hC(){return _n.jsxs(Ux,{children:[_n.jsx(yd,{path:"/",element:_n.jsx(j_,{})}),_n.jsx(yd,{path:"*",element:_n.jsx(j_,{})})]})}Wy.createRoot(document.getElementById("root")).render(_n.jsx(se.StrictMode,{children:_n.jsx(sS,{children:_n.jsx(hC,{})})}));
