(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function wa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const oe={},zt=[],je=()=>{},Pl=()=>!1,Ol=/^on[^a-z]/,ur=e=>Ol.test(e),Ea=e=>e.startsWith("onUpdate:"),pe=Object.assign,ka=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Sl=Object.prototype.hasOwnProperty,V=(e,t)=>Sl.call(e,t),H=Array.isArray,Dt=e=>dr(e)==="[object Map]",Fo=e=>dr(e)==="[object Set]",W=e=>typeof e=="function",ge=e=>typeof e=="string",Aa=e=>typeof e=="symbol",se=e=>e!==null&&typeof e=="object",jo=e=>se(e)&&W(e.then)&&W(e.catch),zo=Object.prototype.toString,dr=e=>zo.call(e),Cl=e=>dr(e).slice(8,-1),Do=e=>dr(e)==="[object Object]",Pa=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gn=wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Rl=/-(\w)/g,qe=mr(e=>e.replace(Rl,(t,n)=>n?n.toUpperCase():"")),Il=/\B([A-Z])/g,Qt=mr(e=>e.replace(Il,"-$1").toLowerCase()),hr=mr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cr=mr(e=>e?`on${hr(e)}`:""),gn=(e,t)=>!Object.is(e,t),Rr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},nr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Tl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let di;const Wr=()=>di||(di=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oa(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ge(r)?Fl(r):Oa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ge(e))return e;if(se(e))return e}}const Nl=/;(?![^(]*\))/g,Ml=/:([^]+)/,Ll=/\/\*[^]*?\*\//g;function Fl(e){const t={};return e.replace(Ll,"").split(Nl).forEach(n=>{if(n){const r=n.split(Ml);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Sa(e){let t="";if(ge(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=Sa(e[n]);r&&(t+=r+" ")}else if(se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const jl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zl=wa(jl);function $o(e){return!!e||e===""}const Dl=e=>ge(e)?e:e==null?"":H(e)||se(e)&&(e.toString===zo||!W(e.toString))?JSON.stringify(e,Ho,2):String(e),Ho=(e,t)=>t&&t.__v_isRef?Ho(e,t.value):Dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Fo(t)?{[`Set(${t.size})`]:[...t.values()]}:se(t)&&!H(t)&&!Do(t)?String(t):t;let Oe;class Uo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Bo(e){return new Uo(e)}function $l(e,t=Oe){t&&t.active&&t.effects.push(e)}function Wo(){return Oe}function Hl(e){Oe&&Oe.cleanups.push(e)}const Ca=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Yo=e=>(e.w&ht)>0,Ko=e=>(e.n&ht)>0,Ul=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ht},Bl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Yo(a)&&!Ko(a)?a.delete(e):t[n++]=a,a.w&=~ht,a.n&=~ht}t.length=n}},rr=new WeakMap;let an=0,ht=1;const Yr=30;let Me;const At=Symbol(""),Kr=Symbol("");class Ra{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$l(this,r)}run(){if(!this.active)return this.fn();let t=Me,n=dt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Me,Me=this,dt=!0,ht=1<<++an,an<=Yr?Ul(this):mi(this),this.fn()}finally{an<=Yr&&Bl(this),ht=1<<--an,Me=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Me===this?this.deferStop=!0:this.active&&(mi(this),this.onStop&&this.onStop(),this.active=!1)}}function mi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let dt=!0;const qo=[];function Jt(){qo.push(dt),dt=!1}function Zt(){const e=qo.pop();dt=e===void 0?!0:e}function ke(e,t,n){if(dt&&Me){let r=rr.get(e);r||rr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ca()),Vo(a)}}function Vo(e,t){let n=!1;an<=Yr?Ko(e)||(e.n|=ht,n=!Yo(e)):n=!e.has(Me),n&&(e.add(Me),Me.deps.push(e))}function Ze(e,t,n,r,a,i){const o=rr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?Pa(n)&&s.push(o.get("length")):(s.push(o.get(At)),Dt(e)&&s.push(o.get(Kr)));break;case"delete":H(e)||(s.push(o.get(At)),Dt(e)&&s.push(o.get(Kr)));break;case"set":Dt(e)&&s.push(o.get(At));break}if(s.length===1)s[0]&&qr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);qr(Ca(l))}}function qr(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&hi(r);for(const r of n)r.computed||hi(r)}function hi(e,t){(e!==Me||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Wl(e,t){var n;return(n=rr.get(e))==null?void 0:n.get(t)}const Yl=wa("__proto__,__v_isRef,__isVue"),Xo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Aa)),Kl=Ia(),ql=Ia(!1,!0),Vl=Ia(!0),pi=Xl();function Xl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)ke(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(q)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jt();const r=q(this)[t].apply(this,n);return Zt(),r}}),e}function Gl(e){const t=q(this);return ke(t,"has",e),t.hasOwnProperty(e)}function Ia(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?dc:es:t?Zo:Jo).get(r))return r;const o=H(r);if(!e){if(o&&V(pi,a))return Reflect.get(pi,a,i);if(a==="hasOwnProperty")return Gl}const s=Reflect.get(r,a,i);return(Aa(a)?Xo.has(a):Yl(a))||(e||ke(r,"get",a),t)?s:ce(s)?o&&Pa(a)?s:s.value:se(s)?e?ns(s):Rn(s):s}}const Ql=Go(),Jl=Go(!0);function Go(e=!1){return function(n,r,a,i){let o=n[r];if(Wt(o)&&ce(o)&&!ce(a))return!1;if(!e&&(!ar(a)&&!Wt(a)&&(o=q(o),a=q(a)),!H(n)&&ce(o)&&!ce(a)))return o.value=a,!0;const s=H(n)&&Pa(r)?Number(r)<n.length:V(n,r),l=Reflect.set(n,r,a,i);return n===q(i)&&(s?gn(a,o)&&Ze(n,"set",r,a):Ze(n,"add",r,a)),l}}function Zl(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ze(e,"delete",t,void 0),r}function ec(e,t){const n=Reflect.has(e,t);return(!Aa(t)||!Xo.has(t))&&ke(e,"has",t),n}function tc(e){return ke(e,"iterate",H(e)?"length":At),Reflect.ownKeys(e)}const Qo={get:Kl,set:Ql,deleteProperty:Zl,has:ec,ownKeys:tc},nc={get:Vl,set(e,t){return!0},deleteProperty(e,t){return!0}},rc=pe({},Qo,{get:ql,set:Jl}),Ta=e=>e,pr=e=>Reflect.getPrototypeOf(e);function Ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=q(e),i=q(t);n||(t!==i&&ke(a,"get",t),ke(a,"get",i));const{has:o}=pr(a),s=r?Ta:n?La:vn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Fn(e,t=!1){const n=this.__v_raw,r=q(n),a=q(e);return t||(e!==a&&ke(r,"has",e),ke(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function jn(e,t=!1){return e=e.__v_raw,!t&&ke(q(e),"iterate",At),Reflect.get(e,"size",e)}function gi(e){e=q(e);const t=q(this);return pr(t).has.call(t,e)||(t.add(e),Ze(t,"add",e,e)),this}function vi(e,t){t=q(t);const n=q(this),{has:r,get:a}=pr(n);let i=r.call(n,e);i||(e=q(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?gn(t,o)&&Ze(n,"set",e,t):Ze(n,"add",e,t),this}function bi(e){const t=q(this),{has:n,get:r}=pr(t);let a=n.call(t,e);a||(e=q(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ze(t,"delete",e,void 0),i}function yi(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Ze(e,"clear",void 0,void 0),n}function zn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=q(o),l=t?Ta:e?La:vn;return!e&&ke(s,"iterate",At),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Dn(e,t,n){return function(...r){const a=this.__v_raw,i=q(a),o=Dt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Ta:t?La:vn;return!t&&ke(i,"iterate",l?Kr:At),{next(){const{value:d,done:h}=f.next();return h?{value:d,done:h}:{value:s?[c(d[0]),c(d[1])]:c(d),done:h}},[Symbol.iterator](){return this}}}}function ot(e){return function(...t){return e==="delete"?!1:this}}function ac(){const e={get(i){return Ln(this,i)},get size(){return jn(this)},has:Fn,add:gi,set:vi,delete:bi,clear:yi,forEach:zn(!1,!1)},t={get(i){return Ln(this,i,!1,!0)},get size(){return jn(this)},has:Fn,add:gi,set:vi,delete:bi,clear:yi,forEach:zn(!1,!0)},n={get(i){return Ln(this,i,!0)},get size(){return jn(this,!0)},has(i){return Fn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:zn(!0,!1)},r={get(i){return Ln(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return Fn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:zn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Dn(i,!1,!1),n[i]=Dn(i,!0,!1),t[i]=Dn(i,!1,!0),r[i]=Dn(i,!0,!0)}),[e,n,t,r]}const[ic,oc,sc,lc]=ac();function Na(e,t){const n=t?e?lc:sc:e?oc:ic;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(V(n,a)&&a in r?n:r,a,i)}const cc={get:Na(!1,!1)},fc={get:Na(!1,!0)},uc={get:Na(!0,!1)},Jo=new WeakMap,Zo=new WeakMap,es=new WeakMap,dc=new WeakMap;function mc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hc(e){return e.__v_skip||!Object.isExtensible(e)?0:mc(Cl(e))}function Rn(e){return Wt(e)?e:Ma(e,!1,Qo,cc,Jo)}function ts(e){return Ma(e,!1,rc,fc,Zo)}function ns(e){return Ma(e,!0,nc,uc,es)}function Ma(e,t,n,r,a){if(!se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=hc(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Je(e){return Wt(e)?Je(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function ar(e){return!!(e&&e.__v_isShallow)}function rs(e){return Je(e)||Wt(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function gr(e){return nr(e,"__v_skip",!0),e}const vn=e=>se(e)?Rn(e):e,La=e=>se(e)?ns(e):e;function as(e){dt&&Me&&(e=q(e),Vo(e.dep||(e.dep=Ca())))}function is(e,t){e=q(e);const n=e.dep;n&&qr(n)}function ce(e){return!!(e&&e.__v_isRef===!0)}function Yt(e){return os(e,!1)}function pc(e){return os(e,!0)}function os(e,t){return ce(e)?e:new gc(e,t)}class gc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:vn(t)}get value(){return as(this),this._value}set value(t){const n=this.__v_isShallow||ar(t)||Wt(t);t=n?t:q(t),gn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:vn(t),is(this))}}function Ie(e){return ce(e)?e.value:e}const vc={get:(e,t,n)=>Ie(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ce(a)&&!ce(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ss(e){return Je(e)?e:new Proxy(e,vc)}function bc(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=ls(e,n);return t}class yc{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Wl(q(this._object),this._key)}}class xc{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function _c(e,t,n){return ce(e)?e:W(e)?new xc(e):se(e)&&arguments.length>1?ls(e,t,n):Yt(e)}function ls(e,t,n){const r=e[t];return ce(r)?r:new yc(e,t,n)}class wc{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ra(t,()=>{this._dirty||(this._dirty=!0,is(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=q(this);return as(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ec(e,t,n=!1){let r,a;const i=W(e);return i?(r=e,a=je):(r=e.get,a=e.set),new wc(r,a,i||!a,n)}function mt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){vr(i,t,n)}return a}function ze(e,t,n,r){if(W(e)){const i=mt(e,t,n,r);return i&&jo(i)&&i.catch(o=>{vr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ze(e[i],t,n,r));return a}function vr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){mt(l,null,10,[e,o,s]);return}}kc(e,n,a,r)}function kc(e,t,n,r=!0){console.error(e)}let bn=!1,Vr=!1;const xe=[];let We=0;const $t=[];let Ge=null,_t=0;const cs=Promise.resolve();let Fa=null;function ja(e){const t=Fa||cs;return e?t.then(this?e.bind(this):e):t}function Ac(e){let t=We+1,n=xe.length;for(;t<n;){const r=t+n>>>1;yn(xe[r])<e?t=r+1:n=r}return t}function za(e){(!xe.length||!xe.includes(e,bn&&e.allowRecurse?We+1:We))&&(e.id==null?xe.push(e):xe.splice(Ac(e.id),0,e),fs())}function fs(){!bn&&!Vr&&(Vr=!0,Fa=cs.then(ds))}function Pc(e){const t=xe.indexOf(e);t>We&&xe.splice(t,1)}function Oc(e){H(e)?$t.push(...e):(!Ge||!Ge.includes(e,e.allowRecurse?_t+1:_t))&&$t.push(e),fs()}function xi(e,t=bn?We+1:0){for(;t<xe.length;t++){const n=xe[t];n&&n.pre&&(xe.splice(t,1),t--,n())}}function us(e){if($t.length){const t=[...new Set($t)];if($t.length=0,Ge){Ge.push(...t);return}for(Ge=t,Ge.sort((n,r)=>yn(n)-yn(r)),_t=0;_t<Ge.length;_t++)Ge[_t]();Ge=null,_t=0}}const yn=e=>e.id==null?1/0:e.id,Sc=(e,t)=>{const n=yn(e)-yn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ds(e){Vr=!1,bn=!0,xe.sort(Sc);const t=je;try{for(We=0;We<xe.length;We++){const n=xe[We];n&&n.active!==!1&&mt(n,null,14)}}finally{We=0,xe.length=0,us(),bn=!1,Fa=null,(xe.length||$t.length)&&ds()}}function Cc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||oe;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[c]||oe;h&&(a=n.map(g=>ge(g)?g.trim():g)),d&&(a=n.map(Tl))}let s,l=r[s=Cr(t)]||r[s=Cr(qe(t))];!l&&i&&(l=r[s=Cr(Qt(t))]),l&&ze(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ze(f,e,6,a)}}function ms(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!W(e)){const l=f=>{const c=ms(f,t,!0);c&&(s=!0,pe(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(se(e)&&r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):pe(o,i),se(e)&&r.set(e,o),o)}function br(e,t){return!e||!ur(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,Qt(t))||V(e,t))}let Te=null,hs=null;function ir(e){const t=Te;return Te=e,hs=e&&e.type.__scopeId||null,t}function Xr(e,t=Te,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ii(-1);const i=ir(t);let o;try{o=e(...a)}finally{ir(i),r._d&&Ii(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ir(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:h,setupState:g,ctx:A,inheritAttrs:S}=e;let M,y;const _=ir(e);try{if(n.shapeFlag&4){const C=a||r;M=Be(c.call(C,C,d,i,g,h,A)),y=l}else{const C=t;M=Be(C.length>1?C(i,{attrs:l,slots:s,emit:f}):C(i,null)),y=t.props?l:Rc(l)}}catch(C){fn.length=0,vr(C,e,1),M=ve(_n)}let N=M;if(y&&S!==!1){const C=Object.keys(y),{shapeFlag:$}=N;C.length&&$&7&&(o&&C.some(Ea)&&(y=Ic(y,o)),N=Kt(N,y))}return n.dirs&&(N=Kt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),M=N,ir(_),M}const Rc=e=>{let t;for(const n in e)(n==="class"||n==="style"||ur(n))&&((t||(t={}))[n]=e[n]);return t},Ic=(e,t)=>{const n={};for(const r in e)(!Ea(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Tc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?_i(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const h=c[d];if(o[h]!==r[h]&&!br(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?_i(r,o,f):!0:!!o;return!1}function _i(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!br(n,i))return!0}return!1}function Nc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Mc=e=>e.__isSuspense;function Lc(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Oc(e)}const $n={};function Ht(e,t,n){return ps(e,t,n)}function ps(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=oe){var s;const l=Wo()===((s=he)==null?void 0:s.scope)?he:null;let f,c=!1,d=!1;if(ce(e)?(f=()=>e.value,c=ar(e)):Je(e)?(f=()=>e,r=!0):H(e)?(d=!0,c=e.some(C=>Je(C)||ar(C)),f=()=>e.map(C=>{if(ce(C))return C.value;if(Je(C))return Lt(C);if(W(C))return mt(C,l,2)})):W(e)?t?f=()=>mt(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return h&&h(),ze(e,l,3,[g])}:f=je,t&&r){const C=f;f=()=>Lt(C())}let h,g=C=>{h=_.onStop=()=>{mt(C,l,4)}},A;if(En)if(g=je,t?n&&ze(t,l,3,[f(),d?[]:void 0,g]):f(),a==="sync"){const C=If();A=C.__watcherHandles||(C.__watcherHandles=[])}else return je;let S=d?new Array(e.length).fill($n):$n;const M=()=>{if(_.active)if(t){const C=_.run();(r||c||(d?C.some(($,Z)=>gn($,S[Z])):gn(C,S)))&&(h&&h(),ze(t,l,3,[C,S===$n?void 0:d&&S[0]===$n?[]:S,g]),S=C)}else _.run()};M.allowRecurse=!!t;let y;a==="sync"?y=M:a==="post"?y=()=>Ee(M,l&&l.suspense):(M.pre=!0,l&&(M.id=l.uid),y=()=>za(M));const _=new Ra(f,y);t?n?M():S=_.run():a==="post"?Ee(_.run.bind(_),l&&l.suspense):_.run();const N=()=>{_.stop(),l&&l.scope&&ka(l.scope.effects,_)};return A&&A.push(N),N}function Fc(e,t,n){const r=this.proxy,a=ge(e)?e.includes(".")?gs(r,e):()=>r[e]:e.bind(r,r);let i;W(t)?i=t:(i=t.handler,n=t);const o=he;qt(this);const s=ps(a,i.bind(r),n);return o?qt(o):Pt(),s}function gs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Lt(e,t){if(!se(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ce(e))Lt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Lt(e[n],t);else if(Fo(e)||Dt(e))e.forEach(n=>{Lt(n,t)});else if(Do(e))for(const n in e)Lt(e[n],t);return e}function yt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Jt(),ze(l,n,8,[e.el,s,e,t]),Zt())}}function Da(e,t){return W(e)?(()=>pe({name:e.name},t,{setup:e}))():e}const Qn=e=>!!e.type.__asyncLoader,vs=e=>e.type.__isKeepAlive;function jc(e,t){bs(e,"a",t)}function zc(e,t){bs(e,"da",t)}function bs(e,t,n=he){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(yr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)vs(a.parent.vnode)&&Dc(r,t,n,a),a=a.parent}}function Dc(e,t,n,r){const a=yr(t,e,r,!0);xs(()=>{ka(r[t],a)},n)}function yr(e,t,n=he,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Jt(),qt(n);const s=ze(t,n,e,o);return Pt(),Zt(),s});return r?a.unshift(i):a.push(i),i}}const rt=e=>(t,n=he)=>(!En||e==="sp")&&yr(e,(...r)=>t(...r),n),$c=rt("bm"),ys=rt("m"),Hc=rt("bu"),Uc=rt("u"),Bc=rt("bum"),xs=rt("um"),Wc=rt("sp"),Yc=rt("rtg"),Kc=rt("rtc");function qc(e,t=he){yr("ec",e,t)}const _s="components";function Vc(e,t){return Gc(_s,e,!0,t)||e}const Xc=Symbol.for("v-ndc");function Gc(e,t,n=!0,r=!1){const a=Te||he;if(a){const i=a.type;if(e===_s){const s=Sf(i,!1);if(s&&(s===t||s===qe(t)||s===hr(qe(t))))return i}const o=wi(a[e]||i[e],t)||wi(a.appContext[e],t);return!o&&r?i:o}}function wi(e,t){return e&&(e[t]||e[qe(t)]||e[hr(qe(t))])}const Gr=e=>e?Is(e)?Ka(e)||e.proxy:Gr(e.parent):null,cn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gr(e.parent),$root:e=>Gr(e.root),$emit:e=>e.emit,$options:e=>$a(e),$forceUpdate:e=>e.f||(e.f=()=>za(e.update)),$nextTick:e=>e.n||(e.n=ja.bind(e.proxy)),$watch:e=>Fc.bind(e)}),Tr=(e,t)=>e!==oe&&!e.__isScriptSetup&&V(e,t),Qc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Tr(r,t))return o[t]=1,r[t];if(a!==oe&&V(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&V(f,t))return o[t]=3,i[t];if(n!==oe&&V(n,t))return o[t]=4,n[t];Qr&&(o[t]=0)}}const c=cn[t];let d,h;if(c)return t==="$attrs"&&ke(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==oe&&V(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,V(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Tr(a,t)?(a[t]=n,!0):r!==oe&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==oe&&V(e,o)||Tr(t,o)||(s=i[0])&&V(s,o)||V(r,o)||V(cn,o)||V(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ei(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Qr=!0;function Jc(e){const t=$a(e),n=e.proxy,r=e.ctx;Qr=!1,t.beforeCreate&&ki(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:h,beforeUpdate:g,updated:A,activated:S,deactivated:M,beforeDestroy:y,beforeUnmount:_,destroyed:N,unmounted:C,render:$,renderTracked:Z,renderTriggered:ee,errorCaptured:Y,serverPrefetch:B,expose:le,inheritAttrs:be,components:Ae,directives:Ce,filters:bt}=t;if(f&&Zc(f,r,null),o)for(const ne in o){const G=o[ne];W(G)&&(r[ne]=G.bind(n))}if(a){const ne=a.call(n,n);se(ne)&&(e.data=Rn(ne))}if(Qr=!0,i)for(const ne in i){const G=i[ne],Ve=W(G)?G.bind(n,n):W(G.get)?G.get.bind(n,n):je,it=!W(G)&&W(G.set)?G.set.bind(n):je,$e=me({get:Ve,set:it});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>$e.value,set:we=>$e.value=we})}if(s)for(const ne in s)ws(s[ne],r,n,ne);if(l){const ne=W(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(G=>{Jn(G,ne[G])})}c&&ki(c,e,"c");function X(ne,G){H(G)?G.forEach(Ve=>ne(Ve.bind(n))):G&&ne(G.bind(n))}if(X($c,d),X(ys,h),X(Hc,g),X(Uc,A),X(jc,S),X(zc,M),X(qc,Y),X(Kc,Z),X(Yc,ee),X(Bc,_),X(xs,C),X(Wc,B),H(le))if(le.length){const ne=e.exposed||(e.exposed={});le.forEach(G=>{Object.defineProperty(ne,G,{get:()=>n[G],set:Ve=>n[G]=Ve})})}else e.exposed||(e.exposed={});$&&e.render===je&&(e.render=$),be!=null&&(e.inheritAttrs=be),Ae&&(e.components=Ae),Ce&&(e.directives=Ce)}function Zc(e,t,n=je){H(e)&&(e=Jr(e));for(const r in e){const a=e[r];let i;se(a)?"default"in a?i=Ke(a.from||r,a.default,!0):i=Ke(a.from||r):i=Ke(a),ce(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ki(e,t,n){ze(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ws(e,t,n,r){const a=r.includes(".")?gs(n,r):()=>n[r];if(ge(e)){const i=t[e];W(i)&&Ht(a,i)}else if(W(e))Ht(a,e.bind(n));else if(se(e))if(H(e))e.forEach(i=>ws(i,t,n,r));else{const i=W(e.handler)?e.handler.bind(n):t[e.handler];W(i)&&Ht(a,i,e)}}function $a(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>or(l,f,o,!0)),or(l,t,o)),se(t)&&i.set(t,l),l}function or(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&or(e,i,n,!0),a&&a.forEach(o=>or(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=ef[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const ef={data:Ai,props:Pi,emits:Pi,methods:on,computed:on,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:on,directives:on,watch:nf,provide:Ai,inject:tf};function Ai(e,t){return t?e?function(){return pe(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function tf(e,t){return on(Jr(e),Jr(t))}function Jr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function on(e,t){return e?pe(Object.create(null),e,t):t}function Pi(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:pe(Object.create(null),Ei(e),Ei(t??{})):t}function nf(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function Es(){return{app:null,config:{isNativeTag:Pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rf=0;function af(e,t){return function(r,a=null){W(r)||(r=pe({},r)),a!=null&&!se(a)&&(a=null);const i=Es(),o=new Set;let s=!1;const l=i.app={_uid:rf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Tf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&W(f.install)?(o.add(f),f.install(l,...c)):W(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const h=ve(r,a);return h.appContext=i,c&&t?t(h,f):e(h,f,d),s=!0,l._container=f,f.__vue_app__=l,Ka(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l},runWithContext(f){xn=l;try{return f()}finally{xn=null}}};return l}}let xn=null;function Jn(e,t){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[e]=t}}function Ke(e,t,n=!1){const r=he||Te;if(r||xn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:xn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&W(t)?t.call(r&&r.proxy):t}}function of(){return!!(he||Te||xn)}function sf(e,t,n,r=!1){const a={},i={};nr(i,_r,1),e.propsDefaults=Object.create(null),ks(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ts(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function lf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=q(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let h=c[d];if(br(e.emitsOptions,h))continue;const g=t[h];if(l)if(V(i,h))g!==i[h]&&(i[h]=g,f=!0);else{const A=qe(h);a[A]=Zr(l,s,A,g,e,!1)}else g!==i[h]&&(i[h]=g,f=!0)}}}else{ks(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!V(t,d)&&((c=Qt(d))===d||!V(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=Zr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!V(t,d))&&(delete i[d],f=!0)}f&&Ze(e,"set","$attrs")}function ks(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Gn(l))continue;const f=t[l];let c;a&&V(a,c=qe(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:br(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=q(n),f=s||oe;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Zr(a,l,d,f[d],e,!V(f,d))}}return o}function Zr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=V(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&W(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(qt(a),r=f[n]=l.call(null,t),Pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function As(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!W(e)){const c=d=>{l=!0;const[h,g]=As(d,t,!0);pe(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return se(e)&&r.set(e,zt),zt;if(H(i))for(let c=0;c<i.length;c++){const d=qe(i[c]);Oi(d)&&(o[d]=oe)}else if(i)for(const c in i){const d=qe(c);if(Oi(d)){const h=i[c],g=o[d]=H(h)||W(h)?{type:h}:pe({},h);if(g){const A=Ri(Boolean,g.type),S=Ri(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||V(g,"default"))&&s.push(d)}}}const f=[o,s];return se(e)&&r.set(e,f),f}function Oi(e){return e[0]!=="$"}function Si(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ci(e,t){return Si(e)===Si(t)}function Ri(e,t){return H(t)?t.findIndex(n=>Ci(n,e)):W(t)&&Ci(t,e)?0:-1}const Ps=e=>e[0]==="_"||e==="$stable",Ha=e=>H(e)?e.map(Be):[Be(e)],cf=(e,t,n)=>{if(t._n)return t;const r=Xr((...a)=>Ha(t(...a)),n);return r._c=!1,r},Os=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Ps(a))continue;const i=e[a];if(W(i))t[a]=cf(a,i,r);else if(i!=null){const o=Ha(i);t[a]=()=>o}}},Ss=(e,t)=>{const n=Ha(t);e.slots.default=()=>n},ff=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),nr(t,"_",n)):Os(t,e.slots={})}else e.slots={},t&&Ss(e,t);nr(e.slots,_r,1)},uf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=oe;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Os(t,a)),o=t}else t&&(Ss(e,t),o={default:1});if(i)for(const s in a)!Ps(s)&&!(s in o)&&delete a[s]};function ea(e,t,n,r,a=!1){if(H(e)){e.forEach((h,g)=>ea(h,t&&(H(t)?t[g]:t),n,r,a));return}if(Qn(r)&&!a)return;const i=r.shapeFlag&4?Ka(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===oe?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(ge(f)?(c[f]=null,V(d,f)&&(d[f]=null)):ce(f)&&(f.value=null)),W(l))mt(l,s,12,[o,c]);else{const h=ge(l),g=ce(l);if(h||g){const A=()=>{if(e.f){const S=h?V(d,l)?d[l]:c[l]:l.value;a?H(S)&&ka(S,i):H(S)?S.includes(i)||S.push(i):h?(c[l]=[i],V(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,V(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,Ee(A,n)):A()}}}const Ee=Lc;function df(e){return mf(e)}function mf(e,t){const n=Wr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:h,setScopeId:g=je,insertStaticContent:A}=e,S=(u,m,p,v=null,x=null,w=null,R=!1,k=null,P=!!m.dynamicChildren)=>{if(u===m)return;u&&!nn(u,m)&&(v=b(u),we(u,x,w,!0),u=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:E,ref:z,shapeFlag:L}=m;switch(E){case xr:M(u,m,p,v);break;case _n:y(u,m,p,v);break;case Nr:u==null&&_(m,p,v,R);break;case Qe:Ae(u,m,p,v,x,w,R,k,P);break;default:L&1?$(u,m,p,v,x,w,R,k,P):L&6?Ce(u,m,p,v,x,w,R,k,P):(L&64||L&128)&&E.process(u,m,p,v,x,w,R,k,P,O)}z!=null&&x&&ea(z,u&&u.ref,w,m||u,!m)},M=(u,m,p,v)=>{if(u==null)r(m.el=s(m.children),p,v);else{const x=m.el=u.el;m.children!==u.children&&f(x,m.children)}},y=(u,m,p,v)=>{u==null?r(m.el=l(m.children||""),p,v):m.el=u.el},_=(u,m,p,v)=>{[u.el,u.anchor]=A(u.children,m,p,v,u.el,u.anchor)},N=({el:u,anchor:m},p,v)=>{let x;for(;u&&u!==m;)x=h(u),r(u,p,v),u=x;r(m,p,v)},C=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},$=(u,m,p,v,x,w,R,k,P)=>{R=R||m.type==="svg",u==null?Z(m,p,v,x,w,R,k,P):B(u,m,x,w,R,k,P)},Z=(u,m,p,v,x,w,R,k)=>{let P,E;const{type:z,props:L,shapeFlag:D,transition:U,dirs:K}=u;if(P=u.el=o(u.type,w,L&&L.is,L),D&8?c(P,u.children):D&16&&Y(u.children,P,null,v,x,w&&z!=="foreignObject",R,k),K&&yt(u,null,v,"created"),ee(P,u,u.scopeId,R,v),L){for(const te in L)te!=="value"&&!Gn(te)&&i(P,te,null,L[te],w,u.children,v,x,ye);"value"in L&&i(P,"value",null,L.value),(E=L.onVnodeBeforeMount)&&Ue(E,v,u)}K&&yt(u,null,v,"beforeMount");const re=(!x||x&&!x.pendingBranch)&&U&&!U.persisted;re&&U.beforeEnter(P),r(P,m,p),((E=L&&L.onVnodeMounted)||re||K)&&Ee(()=>{E&&Ue(E,v,u),re&&U.enter(P),K&&yt(u,null,v,"mounted")},x)},ee=(u,m,p,v,x)=>{if(p&&g(u,p),v)for(let w=0;w<v.length;w++)g(u,v[w]);if(x){let w=x.subTree;if(m===w){const R=x.vnode;ee(u,R,R.scopeId,R.slotScopeIds,x.parent)}}},Y=(u,m,p,v,x,w,R,k,P=0)=>{for(let E=P;E<u.length;E++){const z=u[E]=k?ft(u[E]):Be(u[E]);S(null,z,m,p,v,x,w,R,k)}},B=(u,m,p,v,x,w,R)=>{const k=m.el=u.el;let{patchFlag:P,dynamicChildren:E,dirs:z}=m;P|=u.patchFlag&16;const L=u.props||oe,D=m.props||oe;let U;p&&xt(p,!1),(U=D.onVnodeBeforeUpdate)&&Ue(U,p,m,u),z&&yt(m,u,p,"beforeUpdate"),p&&xt(p,!0);const K=x&&m.type!=="foreignObject";if(E?le(u.dynamicChildren,E,k,p,v,K,w):R||G(u,m,k,null,p,v,K,w,!1),P>0){if(P&16)be(k,m,L,D,p,v,x);else if(P&2&&L.class!==D.class&&i(k,"class",null,D.class,x),P&4&&i(k,"style",L.style,D.style,x),P&8){const re=m.dynamicProps;for(let te=0;te<re.length;te++){const ue=re[te],Ne=L[ue],It=D[ue];(It!==Ne||ue==="value")&&i(k,ue,Ne,It,x,u.children,p,v,ye)}}P&1&&u.children!==m.children&&c(k,m.children)}else!R&&E==null&&be(k,m,L,D,p,v,x);((U=D.onVnodeUpdated)||z)&&Ee(()=>{U&&Ue(U,p,m,u),z&&yt(m,u,p,"updated")},v)},le=(u,m,p,v,x,w,R)=>{for(let k=0;k<m.length;k++){const P=u[k],E=m[k],z=P.el&&(P.type===Qe||!nn(P,E)||P.shapeFlag&70)?d(P.el):p;S(P,E,z,null,v,x,w,R,!0)}},be=(u,m,p,v,x,w,R)=>{if(p!==v){if(p!==oe)for(const k in p)!Gn(k)&&!(k in v)&&i(u,k,p[k],null,R,m.children,x,w,ye);for(const k in v){if(Gn(k))continue;const P=v[k],E=p[k];P!==E&&k!=="value"&&i(u,k,E,P,R,m.children,x,w,ye)}"value"in v&&i(u,"value",p.value,v.value)}},Ae=(u,m,p,v,x,w,R,k,P)=>{const E=m.el=u?u.el:s(""),z=m.anchor=u?u.anchor:s("");let{patchFlag:L,dynamicChildren:D,slotScopeIds:U}=m;U&&(k=k?k.concat(U):U),u==null?(r(E,p,v),r(z,p,v),Y(m.children,p,z,x,w,R,k,P)):L>0&&L&64&&D&&u.dynamicChildren?(le(u.dynamicChildren,D,p,x,w,R,k),(m.key!=null||x&&m===x.subTree)&&Cs(u,m,!0)):G(u,m,p,z,x,w,R,k,P)},Ce=(u,m,p,v,x,w,R,k,P)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?x.ctx.activate(m,p,v,R,P):bt(m,p,v,x,w,R,P):Re(u,m,P)},bt=(u,m,p,v,x,w,R)=>{const k=u.component=Ef(u,v,x);if(vs(u)&&(k.ctx.renderer=O),kf(k),k.asyncDep){if(x&&x.registerDep(k,X),!u.el){const P=k.subTree=ve(_n);y(null,P,m,p)}return}X(k,u,m,p,x,w,R)},Re=(u,m,p)=>{const v=m.component=u.component;if(Tc(u,m,p))if(v.asyncDep&&!v.asyncResolved){ne(v,m,p);return}else v.next=m,Pc(v.update),v.update();else m.el=u.el,v.vnode=m},X=(u,m,p,v,x,w,R)=>{const k=()=>{if(u.isMounted){let{next:z,bu:L,u:D,parent:U,vnode:K}=u,re=z,te;xt(u,!1),z?(z.el=K.el,ne(u,z,R)):z=K,L&&Rr(L),(te=z.props&&z.props.onVnodeBeforeUpdate)&&Ue(te,U,z,K),xt(u,!0);const ue=Ir(u),Ne=u.subTree;u.subTree=ue,S(Ne,ue,d(Ne.el),b(Ne),u,x,w),z.el=ue.el,re===null&&Nc(u,ue.el),D&&Ee(D,x),(te=z.props&&z.props.onVnodeUpdated)&&Ee(()=>Ue(te,U,z,K),x)}else{let z;const{el:L,props:D}=m,{bm:U,m:K,parent:re}=u,te=Qn(m);if(xt(u,!1),U&&Rr(U),!te&&(z=D&&D.onVnodeBeforeMount)&&Ue(z,re,m),xt(u,!0),L&&Q){const ue=()=>{u.subTree=Ir(u),Q(L,u.subTree,u,x,null)};te?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=Ir(u);S(null,ue,p,v,u,x,w),m.el=ue.el}if(K&&Ee(K,x),!te&&(z=D&&D.onVnodeMounted)){const ue=m;Ee(()=>Ue(z,re,ue),x)}(m.shapeFlag&256||re&&Qn(re.vnode)&&re.vnode.shapeFlag&256)&&u.a&&Ee(u.a,x),u.isMounted=!0,m=p=v=null}},P=u.effect=new Ra(k,()=>za(E),u.scope),E=u.update=()=>P.run();E.id=u.uid,xt(u,!0),E()},ne=(u,m,p)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,lf(u,m.props,v,p),uf(u,m.children,p),Jt(),xi(),Zt()},G=(u,m,p,v,x,w,R,k,P=!1)=>{const E=u&&u.children,z=u?u.shapeFlag:0,L=m.children,{patchFlag:D,shapeFlag:U}=m;if(D>0){if(D&128){it(E,L,p,v,x,w,R,k,P);return}else if(D&256){Ve(E,L,p,v,x,w,R,k,P);return}}U&8?(z&16&&ye(E,x,w),L!==E&&c(p,L)):z&16?U&16?it(E,L,p,v,x,w,R,k,P):ye(E,x,w,!0):(z&8&&c(p,""),U&16&&Y(L,p,v,x,w,R,k,P))},Ve=(u,m,p,v,x,w,R,k,P)=>{u=u||zt,m=m||zt;const E=u.length,z=m.length,L=Math.min(E,z);let D;for(D=0;D<L;D++){const U=m[D]=P?ft(m[D]):Be(m[D]);S(u[D],U,p,null,x,w,R,k,P)}E>z?ye(u,x,w,!0,!1,L):Y(m,p,v,x,w,R,k,P,L)},it=(u,m,p,v,x,w,R,k,P)=>{let E=0;const z=m.length;let L=u.length-1,D=z-1;for(;E<=L&&E<=D;){const U=u[E],K=m[E]=P?ft(m[E]):Be(m[E]);if(nn(U,K))S(U,K,p,null,x,w,R,k,P);else break;E++}for(;E<=L&&E<=D;){const U=u[L],K=m[D]=P?ft(m[D]):Be(m[D]);if(nn(U,K))S(U,K,p,null,x,w,R,k,P);else break;L--,D--}if(E>L){if(E<=D){const U=D+1,K=U<z?m[U].el:v;for(;E<=D;)S(null,m[E]=P?ft(m[E]):Be(m[E]),p,K,x,w,R,k,P),E++}}else if(E>D)for(;E<=L;)we(u[E],x,w,!0),E++;else{const U=E,K=E,re=new Map;for(E=K;E<=D;E++){const Pe=m[E]=P?ft(m[E]):Be(m[E]);Pe.key!=null&&re.set(Pe.key,E)}let te,ue=0;const Ne=D-K+1;let It=!1,ci=0;const tn=new Array(Ne);for(E=0;E<Ne;E++)tn[E]=0;for(E=U;E<=L;E++){const Pe=u[E];if(ue>=Ne){we(Pe,x,w,!0);continue}let He;if(Pe.key!=null)He=re.get(Pe.key);else for(te=K;te<=D;te++)if(tn[te-K]===0&&nn(Pe,m[te])){He=te;break}He===void 0?we(Pe,x,w,!0):(tn[He-K]=E+1,He>=ci?ci=He:It=!0,S(Pe,m[He],p,null,x,w,R,k,P),ue++)}const fi=It?hf(tn):zt;for(te=fi.length-1,E=Ne-1;E>=0;E--){const Pe=K+E,He=m[Pe],ui=Pe+1<z?m[Pe+1].el:v;tn[E]===0?S(null,He,p,ui,x,w,R,k,P):It&&(te<0||E!==fi[te]?$e(He,p,ui,2):te--)}}},$e=(u,m,p,v,x=null)=>{const{el:w,type:R,transition:k,children:P,shapeFlag:E}=u;if(E&6){$e(u.component.subTree,m,p,v);return}if(E&128){u.suspense.move(m,p,v);return}if(E&64){R.move(u,m,p,O);return}if(R===Qe){r(w,m,p);for(let L=0;L<P.length;L++)$e(P[L],m,p,v);r(u.anchor,m,p);return}if(R===Nr){N(u,m,p);return}if(v!==2&&E&1&&k)if(v===0)k.beforeEnter(w),r(w,m,p),Ee(()=>k.enter(w),x);else{const{leave:L,delayLeave:D,afterLeave:U}=k,K=()=>r(w,m,p),re=()=>{L(w,()=>{K(),U&&U()})};D?D(w,K,re):re()}else r(w,m,p)},we=(u,m,p,v=!1,x=!1)=>{const{type:w,props:R,ref:k,children:P,dynamicChildren:E,shapeFlag:z,patchFlag:L,dirs:D}=u;if(k!=null&&ea(k,null,p,u,!0),z&256){m.ctx.deactivate(u);return}const U=z&1&&D,K=!Qn(u);let re;if(K&&(re=R&&R.onVnodeBeforeUnmount)&&Ue(re,m,u),z&6)Mn(u.component,p,v);else{if(z&128){u.suspense.unmount(p,v);return}U&&yt(u,null,m,"beforeUnmount"),z&64?u.type.remove(u,m,p,x,O,v):E&&(w!==Qe||L>0&&L&64)?ye(E,m,p,!1,!0):(w===Qe&&L&384||!x&&z&16)&&ye(P,m,p),v&&Ct(u)}(K&&(re=R&&R.onVnodeUnmounted)||U)&&Ee(()=>{re&&Ue(re,m,u),U&&yt(u,null,m,"unmounted")},p)},Ct=u=>{const{type:m,el:p,anchor:v,transition:x}=u;if(m===Qe){Rt(p,v);return}if(m===Nr){C(u);return}const w=()=>{a(p),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(u.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:k}=x,P=()=>R(p,w);k?k(u.el,w,P):P()}else w()},Rt=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},Mn=(u,m,p)=>{const{bum:v,scope:x,update:w,subTree:R,um:k}=u;v&&Rr(v),x.stop(),w&&(w.active=!1,we(R,u,m,p)),k&&Ee(k,m),Ee(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ye=(u,m,p,v=!1,x=!1,w=0)=>{for(let R=w;R<u.length;R++)we(u[R],m,p,v,x)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),T=(u,m,p)=>{u==null?m._vnode&&we(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,p),xi(),us(),m._vnode=u},O={p:S,um:we,m:$e,r:Ct,mt:bt,mc:Y,pc:G,pbc:le,n:b,o:e};let j,Q;return t&&([j,Q]=t(O)),{render:T,hydrate:j,createApp:af(T,j)}}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Cs(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ft(a[i]),s.el=o.el),n||Cs(o,s)),s.type===xr&&(s.el=o.el)}}function hf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const pf=e=>e.__isTeleport,Qe=Symbol.for("v-fgt"),xr=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),Nr=Symbol.for("v-stc"),fn=[];let Le=null;function Ua(e=!1){fn.push(Le=e?null:[])}function gf(){fn.pop(),Le=fn[fn.length-1]||null}let wn=1;function Ii(e){wn+=e}function vf(e){return e.dynamicChildren=wn>0?Le||zt:null,gf(),wn>0&&Le&&Le.push(e),e}function Ba(e,t,n,r,a,i){return vf(Ut(e,t,n,r,a,i,!0))}function ta(e){return e?e.__v_isVNode===!0:!1}function nn(e,t){return e.type===t.type&&e.key===t.key}const _r="__vInternal",Rs=({key:e})=>e??null,Zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||ce(e)||W(e)?{i:Te,r:e,k:t,f:!!n}:e:null);function Ut(e,t=null,n=null,r=0,a=null,i=e===Qe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Rs(t),ref:t&&Zn(t),scopeId:hs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Te};return s?(Wa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),wn>0&&!o&&Le&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Le.push(l),l}const ve=bf;function bf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Xc)&&(e=_n),ta(e)){const s=Kt(e,t,!0);return n&&Wa(s,n),wn>0&&!i&&Le&&(s.shapeFlag&6?Le[Le.indexOf(e)]=s:Le.push(s)),s.patchFlag|=-2,s}if(Cf(e)&&(e=e.__vccOpts),t){t=yf(t);let{class:s,style:l}=t;s&&!ge(s)&&(t.class=Sa(s)),se(l)&&(rs(l)&&!H(l)&&(l=pe({},l)),t.style=Oa(l))}const o=ge(e)?1:Mc(e)?128:pf(e)?64:se(e)?4:W(e)?2:0;return Ut(e,t,n,r,a,o,i,!0)}function yf(e){return e?rs(e)||_r in e?pe({},e):e:null}function Kt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?xf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Rs(s),ref:t&&t.ref?n&&a?H(a)?a.concat(Zn(t)):[a,Zn(t)]:Zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Qe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function na(e=" ",t=0){return ve(xr,null,e,t)}function Be(e){return e==null||typeof e=="boolean"?ve(_n):H(e)?ve(Qe,null,e.slice()):typeof e=="object"?ft(e):ve(xr,null,String(e))}function ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function Wa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Wa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(_r in t)?t._ctx=Te:a===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),r&64?(n=16,t=[na(t)]):n=8);e.children=t,e.shapeFlag|=n}function xf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Sa([t.class,r.class]));else if(a==="style")t.style=Oa([t.style,r.style]);else if(ur(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ue(e,t,n,r=null){ze(e,t,7,[n,r])}const _f=Es();let wf=0;function Ef(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||_f,i={uid:wf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Uo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:As(r,a),emitsOptions:ms(r,a),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Cc.bind(null,i),e.ce&&e.ce(i),i}let he=null,Ya,Tt,Ti="__VUE_INSTANCE_SETTERS__";(Tt=Wr()[Ti])||(Tt=Wr()[Ti]=[]),Tt.push(e=>he=e),Ya=e=>{Tt.length>1?Tt.forEach(t=>t(e)):Tt[0](e)};const qt=e=>{Ya(e),e.scope.on()},Pt=()=>{he&&he.scope.off(),Ya(null)};function Is(e){return e.vnode.shapeFlag&4}let En=!1;function kf(e,t=!1){En=t;const{props:n,children:r}=e.vnode,a=Is(e);sf(e,n,a,t),ff(e,r);const i=a?Af(e,t):void 0;return En=!1,i}function Af(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=gr(new Proxy(e.ctx,Qc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Of(e):null;qt(e),Jt();const i=mt(r,e,0,[e.props,a]);if(Zt(),Pt(),jo(i)){if(i.then(Pt,Pt),t)return i.then(o=>{Ni(e,o,t)}).catch(o=>{vr(o,e,0)});e.asyncDep=i}else Ni(e,i,t)}else Ts(e,t)}function Ni(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:se(t)&&(e.setupState=ss(t)),Ts(e,n)}let Mi;function Ts(e,t,n){const r=e.type;if(!e.render){if(!t&&Mi&&!r.render){const a=r.template||$a(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=pe(pe({isCustomElement:i,delimiters:s},o),l);r.render=Mi(a,f)}}e.render=r.render||je}qt(e),Jt(),Jc(e),Zt(),Pt()}function Pf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ke(e,"get","$attrs"),t[n]}}))}function Of(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Pf(e)},slots:e.slots,emit:e.emit,expose:t}}function Ka(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ss(gr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in cn)return cn[n](e)},has(t,n){return n in t||n in cn}}))}function Sf(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Cf(e){return W(e)&&"__vccOpts"in e}const me=(e,t)=>Ec(e,t,En);function qa(e,t,n){const r=arguments.length;return r===2?se(t)&&!H(t)?ta(t)?ve(e,null,[t]):ve(e,t):ve(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ta(n)&&(n=[n]),ve(e,t,n))}const Rf=Symbol.for("v-scx"),If=()=>Ke(Rf),Tf="3.3.4",Nf="http://www.w3.org/2000/svg",wt=typeof document<"u"?document:null,Li=wt&&wt.createElement("template"),Mf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?wt.createElementNS(Nf,e):wt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>wt.createTextNode(e),createComment:e=>wt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Li.innerHTML=r?`<svg>${e}</svg>`:e;const s=Li.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Lf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ff(e,t,n){const r=e.style,a=ge(n);if(n&&!a){if(t&&!ge(t))for(const i in t)n[i]==null&&ra(r,i,"");for(const i in n)ra(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Fi=/\s*!important$/;function ra(e,t,n){if(H(n))n.forEach(r=>ra(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=jf(e,t);Fi.test(n)?e.setProperty(Qt(r),n.replace(Fi,""),"important"):e[r]=n}}const ji=["Webkit","Moz","ms"],Mr={};function jf(e,t){const n=Mr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return Mr[t]=r;r=hr(r);for(let a=0;a<ji.length;a++){const i=ji[a]+r;if(i in e)return Mr[t]=i}return t}const zi="http://www.w3.org/1999/xlink";function zf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(zi,t.slice(6,t.length)):e.setAttributeNS(zi,t,n);else{const i=zl(t);n==null||i&&!$o(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Df(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,c=n??"";f!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=$o(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function $f(e,t,n,r){e.addEventListener(t,n,r)}function Hf(e,t,n,r){e.removeEventListener(t,n,r)}function Uf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Bf(t);if(r){const f=i[t]=Kf(r,a);$f(e,s,f,l)}else o&&(Hf(e,s,o,l),i[t]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;function Bf(e){let t;if(Di.test(e)){t={};let r;for(;r=e.match(Di);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Qt(e.slice(2)),t]}let Lr=0;const Wf=Promise.resolve(),Yf=()=>Lr||(Wf.then(()=>Lr=0),Lr=Date.now());function Kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(qf(r,n.value),t,5,[r])};return n.value=e,n.attached=Yf(),n}function qf(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const $i=/^on[a-z]/,Vf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Lf(e,r,a):t==="style"?Ff(e,n,r):ur(t)?Ea(t)||Uf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Xf(e,t,r,a))?Df(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),zf(e,t,r,a))};function Xf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&$i.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||$i.test(t)&&ge(n)?!1:t in e}const Gf=pe({patchProp:Vf},Mf);let Hi;function Qf(){return Hi||(Hi=df(Gf))}const Jf=(...e)=>{const t=Qf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Zf(r);if(!a)return;const i=t._component;!W(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Zf(e){return ge(e)?document.querySelector(e):e}var eu=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Ns;const wr=e=>Ns=e,Ms=Symbol();function aa(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var un;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(un||(un={}));function tu(){const e=Bo(!0),t=e.run(()=>Yt({}));let n=[],r=[];const a=gr({install(i){wr(a),a._a=i,i.provide(Ms,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!eu?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const Ls=()=>{};function Ui(e,t,n,r=Ls){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Wo()&&Hl(a),a}function Nt(e,...t){e.slice().forEach(n=>{n(...t)})}const nu=e=>e();function ia(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];aa(a)&&aa(r)&&e.hasOwnProperty(n)&&!ce(r)&&!Je(r)?e[n]=ia(a,r):e[n]=r}return e}const ru=Symbol();function au(e){return!aa(e)||!e.hasOwnProperty(ru)}const{assign:ct}=Object;function iu(e){return!!(ce(e)&&e.effect)}function ou(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function f(){s||(n.state.value[e]=a?a():{});const c=bc(n.state.value[e]);return ct(c,i,Object.keys(o||{}).reduce((d,h)=>(d[h]=gr(me(()=>{wr(n);const g=n._s.get(e);return o[h].call(g,g)})),d),{}))}return l=Fs(e,f,t,n,r,!0),l}function Fs(e,t,n={},r,a,i){let o;const s=ct({actions:{}},n),l={deep:!0};let f,c,d=[],h=[],g;const A=r.state.value[e];!i&&!A&&(r.state.value[e]={}),Yt({});let S;function M(Y){let B;f=c=!1,typeof Y=="function"?(Y(r.state.value[e]),B={type:un.patchFunction,storeId:e,events:g}):(ia(r.state.value[e],Y),B={type:un.patchObject,payload:Y,storeId:e,events:g});const le=S=Symbol();ja().then(()=>{S===le&&(f=!0)}),c=!0,Nt(d,B,r.state.value[e])}const y=i?function(){const{state:B}=n,le=B?B():{};this.$patch(be=>{ct(be,le)})}:Ls;function _(){o.stop(),d=[],h=[],r._s.delete(e)}function N(Y,B){return function(){wr(r);const le=Array.from(arguments),be=[],Ae=[];function Ce(X){be.push(X)}function bt(X){Ae.push(X)}Nt(h,{args:le,name:Y,store:$,after:Ce,onError:bt});let Re;try{Re=B.apply(this&&this.$id===e?this:$,le)}catch(X){throw Nt(Ae,X),X}return Re instanceof Promise?Re.then(X=>(Nt(be,X),X)).catch(X=>(Nt(Ae,X),Promise.reject(X))):(Nt(be,Re),Re)}}const C={_p:r,$id:e,$onAction:Ui.bind(null,h),$patch:M,$reset:y,$subscribe(Y,B={}){const le=Ui(d,Y,B.detached,()=>be()),be=o.run(()=>Ht(()=>r.state.value[e],Ae=>{(B.flush==="sync"?c:f)&&Y({storeId:e,type:un.direct,events:g},Ae)},ct({},l,B)));return le},$dispose:_},$=Rn(C);r._s.set(e,$);const Z=r._a&&r._a.runWithContext||nu,ee=r._e.run(()=>(o=Bo(),Z(()=>o.run(t))));for(const Y in ee){const B=ee[Y];if(ce(B)&&!iu(B)||Je(B))i||(A&&au(B)&&(ce(B)?B.value=A[Y]:ia(B,A[Y])),r.state.value[e][Y]=B);else if(typeof B=="function"){const le=N(Y,B);ee[Y]=le,s.actions[Y]=B}}return ct($,ee),ct(q($),ee),Object.defineProperty($,"$state",{get:()=>r.state.value[e],set:Y=>{M(B=>{ct(B,Y)})}}),r._p.forEach(Y=>{ct($,o.run(()=>Y({store:$,app:r._a,pinia:r,options:s})))}),A&&i&&n.hydrate&&n.hydrate($.$state,A),f=!0,c=!0,$}function su(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const f=of();return s=s||(f?Ke(Ms,null):null),s&&wr(s),s=Ns,s._s.has(r)||(i?Fs(r,t,a,s):ou(r,a,s)),s._s.get(r)}return o.$id=r,o}function js(e){{e=q(e);const t={};for(const n in e){const r=e[n];(ce(r)||Je(r))&&(t[n]=_c(e,n))}return t}}function Bi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bi(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sr(e){"@babel/helpers - typeof";return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr(e)}function lu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cu(e,t,n){return t&&Wi(e.prototype,t),n&&Wi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Va(e,t){return uu(e)||mu(e,t)||zs(e,t)||pu()}function In(e){return fu(e)||du(e)||zs(e)||hu()}function fu(e){if(Array.isArray(e))return oa(e)}function uu(e){if(Array.isArray(e))return e}function du(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function zs(e,t){if(e){if(typeof e=="string")return oa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oa(e,t)}}function oa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Yi=function(){},Xa={},Ds={},$s=null,Hs={mark:Yi,measure:Yi};try{typeof window<"u"&&(Xa=window),typeof document<"u"&&(Ds=document),typeof MutationObserver<"u"&&($s=MutationObserver),typeof performance<"u"&&(Hs=performance)}catch{}var gu=Xa.navigator||{},Ki=gu.userAgent,qi=Ki===void 0?"":Ki,pt=Xa,ie=Ds,Vi=$s,Hn=Hs;pt.document;var at=!!ie.documentElement&&!!ie.head&&typeof ie.addEventListener=="function"&&typeof ie.createElement=="function",Us=~qi.indexOf("MSIE")||~qi.indexOf("Trident/"),Un,Bn,Wn,Yn,Kn,et="___FONT_AWESOME___",sa=16,Bs="fa",Ws="svg-inline--fa",Ot="data-fa-i2svg",la="data-fa-pseudo-element",vu="data-fa-pseudo-element-pending",Ga="data-prefix",Qa="data-icon",Xi="fontawesome-i2svg",bu="async",yu=["HTML","HEAD","STYLE","SCRIPT"],Ys=function(){try{return!0}catch{return!1}}(),ae="classic",fe="sharp",Ja=[ae,fe];function Tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ae]}})}var kn=Tn((Un={},de(Un,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),de(Un,fe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Un)),An=Tn((Bn={},de(Bn,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(Bn,fe,{solid:"fass",regular:"fasr",light:"fasl"}),Bn)),Pn=Tn((Wn={},de(Wn,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(Wn,fe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Wn)),xu=Tn((Yn={},de(Yn,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(Yn,fe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Yn)),_u=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ks="fa-layers-text",wu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Eu=Tn((Kn={},de(Kn,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(Kn,fe,{900:"fass",400:"fasr",300:"fasl"}),Kn)),qs=[1,2,3,4,5,6,7,8,9,10],ku=qs.concat([11,12,13,14,15,16,17,18,19,20]),Au=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},On=new Set;Object.keys(An[ae]).map(On.add.bind(On));Object.keys(An[fe]).map(On.add.bind(On));var Pu=[].concat(Ja,In(On),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Et.GROUP,Et.SWAP_OPACITY,Et.PRIMARY,Et.SECONDARY]).concat(qs.map(function(e){return"".concat(e,"x")})).concat(ku.map(function(e){return"w-".concat(e)})),dn=pt.FontAwesomeConfig||{};function Ou(e){var t=ie.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Su(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ie&&typeof ie.querySelector=="function"){var Cu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Cu.forEach(function(e){var t=Va(e,2),n=t[0],r=t[1],a=Su(Ou(n));a!=null&&(dn[r]=a)})}var Vs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Bs,replacementClass:Ws,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};dn.familyPrefix&&(dn.cssPrefix=dn.familyPrefix);var Vt=I(I({},Vs),dn);Vt.autoReplaceSvg||(Vt.observeMutations=!1);var F={};Object.keys(Vs).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){Vt[e]=n,mn.forEach(function(r){return r(F)})},get:function(){return Vt[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(t){Vt.cssPrefix=t,mn.forEach(function(n){return n(F)})},get:function(){return Vt.cssPrefix}});pt.FontAwesomeConfig=F;var mn=[];function Ru(e){return mn.push(e),function(){mn.splice(mn.indexOf(e),1)}}var st=sa,Ye={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Iu(e){if(!(!e||!at)){var t=ie.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ie.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ie.head.insertBefore(t,r),e}}var Tu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sn(){for(var e=12,t="";e-- >0;)t+=Tu[Math.random()*62|0];return t}function en(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Za(e){return e.classList?en(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Nu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Xs(e[n]),'" ')},"").trim()}function Er(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ei(e){return e.size!==Ye.size||e.x!==Ye.x||e.y!==Ye.y||e.rotate!==Ye.rotate||e.flipX||e.flipY}function Mu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Lu(e){var t=e.transform,n=e.width,r=n===void 0?sa:n,a=e.height,i=a===void 0?sa:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Us?l+="translate(".concat(t.x/st-r/2,"em, ").concat(t.y/st-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/st,"em), calc(-50% + ").concat(t.y/st,"em)) "):l+="translate(".concat(t.x/st,"em, ").concat(t.y/st,"em) "),l+="scale(".concat(t.size/st*(t.flipX?-1:1),", ").concat(t.size/st*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Fu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Gs(){var e=Bs,t=Ws,n=F.cssPrefix,r=F.replacementClass,a=Fu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Gi=!1;function Fr(){F.autoAddCss&&!Gi&&(Iu(Gs()),Gi=!0)}var ju={mixout:function(){return{dom:{css:Gs,insertCss:Fr}}},hooks:function(){return{beforeDOMElementCreation:function(){Fr()},beforeI2svg:function(){Fr()}}}},tt=pt||{};tt[et]||(tt[et]={});tt[et].styles||(tt[et].styles={});tt[et].hooks||(tt[et].hooks={});tt[et].shims||(tt[et].shims=[]);var Fe=tt[et],Qs=[],zu=function e(){ie.removeEventListener("DOMContentLoaded",e),lr=1,Qs.map(function(t){return t()})},lr=!1;at&&(lr=(ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ie.readyState),lr||ie.addEventListener("DOMContentLoaded",zu));function Du(e){at&&(lr?setTimeout(e,0):Qs.push(e))}function Nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Xs(e):"<".concat(t," ").concat(Nu(r),">").concat(i.map(Nn).join(""),"</").concat(t,">")}function Qi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $u=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},jr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?$u(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Hu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ca(e){var t=Hu(e);return t.length===1?t[0].toString(16):null}function Uu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ji(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function fa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ji(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,Ji(t)):Fe.styles[e]=I(I({},Fe.styles[e]||{}),i),e==="fas"&&fa("fa",t)}var qn,Vn,Xn,Ft=Fe.styles,Bu=Fe.shims,Wu=(qn={},de(qn,ae,Object.values(Pn[ae])),de(qn,fe,Object.values(Pn[fe])),qn),ti=null,Js={},Zs={},el={},tl={},nl={},Yu=(Vn={},de(Vn,ae,Object.keys(kn[ae])),de(Vn,fe,Object.keys(kn[fe])),Vn);function Ku(e){return~Pu.indexOf(e)}function qu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ku(a)?a:null}var rl=function(){var t=function(i){return jr(Ft,function(o,s,l){return o[l]=jr(s,i,{}),o},{})};Js=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Zs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),nl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ft||F.autoFetchSvg,r=jr(Bu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});el=r.names,tl=r.unicodes,ti=kr(F.styleDefault,{family:F.familyDefault})};Ru(function(e){ti=kr(e.styleDefault,{family:F.familyDefault})});rl();function ni(e,t){return(Js[e]||{})[t]}function Vu(e,t){return(Zs[e]||{})[t]}function kt(e,t){return(nl[e]||{})[t]}function al(e){return el[e]||{prefix:null,iconName:null}}function Xu(e){var t=tl[e],n=ni("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return ti}var ri=function(){return{prefix:null,iconName:null,rest:[]}};function kr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ae:n,a=kn[r][e],i=An[r][e]||An[r][a],o=e in Fe.styles?e:null;return i||o||null}var Zi=(Xn={},de(Xn,ae,Object.keys(Pn[ae])),de(Xn,fe,Object.keys(Pn[fe])),Xn);function Ar(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},de(t,ae,"".concat(F.cssPrefix,"-").concat(ae)),de(t,fe,"".concat(F.cssPrefix,"-").concat(fe)),t),o=null,s=ae;(e.includes(i[ae])||e.some(function(f){return Zi[ae].includes(f)}))&&(s=ae),(e.includes(i[fe])||e.some(function(f){return Zi[fe].includes(f)}))&&(s=fe);var l=e.reduce(function(f,c){var d=qu(F.cssPrefix,c);if(Ft[c]?(c=Wu[s].includes(c)?xu[s][c]:c,o=c,f.prefix=c):Yu[s].indexOf(c)>-1?(o=c,f.prefix=kr(c,{family:s})):d?f.iconName=d:c!==F.replacementClass&&c!==i[ae]&&c!==i[fe]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var h=o==="fa"?al(f.iconName):{},g=kt(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Ft.far&&Ft.fas&&!F.autoFetchSvg&&(f.prefix="fas")}return f},ri());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===fe&&(Ft.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=kt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gt()||"fas"),l}var Gu=function(){function e(){lu(this,e),this.definitions={}}return cu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),fa(s,o[s]);var l=Pn[ae][s];l&&fa(l,o[s]),rl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),eo=[],jt={},Bt={},Qu=Object.keys(Bt);function Ju(e,t){var n=t.mixoutsTo;return eo=e,jt={},Object.keys(Bt).forEach(function(r){Qu.indexOf(r)===-1&&delete Bt[r]}),eo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),sr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){jt[o]||(jt[o]=[]),jt[o].push(i[o])})}r.provides&&r.provides(Bt)}),n}function ua(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=jt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function St(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=jt[e]||[];a.forEach(function(i){i.apply(null,n)})}function nt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bt[e]?Bt[e].apply(null,t):void 0}function da(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gt();if(t)return t=kt(n,t)||t,Qi(il.definitions,n,t)||Qi(Fe.styles,n,t)}var il=new Gu,Zu=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,St("noAuto")},ed={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return at?(St("beforeI2svg",t),nt("pseudoElements2svg",t),nt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Du(function(){nd({autoReplaceSvgRoot:n}),St("watch",t)})}},td={icon:function(t){if(t===null)return null;if(sr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=kr(t[0]);return{prefix:r,iconName:kt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.cssPrefix,"-"))>-1||t.match(_u))){var a=Ar(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||gt(),iconName:kt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=gt();return{prefix:i,iconName:kt(i,t)||t}}}},Se={noAuto:Zu,config:F,dom:ed,parse:td,library:il,findIconDefinition:da,toHtml:Nn},nd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ie:n;(Object.keys(Fe.styles).length>0||F.autoFetchSvg)&&at&&F.autoReplaceSvg&&Se.dom.i2svg({node:r})};function Pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(at){var r=ie.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function rd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ei(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Er(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ad(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(F.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function ai(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,A=r.found?r:n,S=A.width,M=A.height,y=a==="fak",_=[F.replacementClass,i?"".concat(F.cssPrefix,"-").concat(i):""].filter(function(B){return d.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(d.classes).join(" "),N={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(M)})},C=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/M*16*.0625,"em")}:{};g&&(N.attributes[Ot]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(c||Sn())},children:[l]}),delete N.attributes.title);var $=I(I({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},C),d.styles)}),Z=r.found&&n.found?nt("generateAbstractMask",$)||{children:[],attributes:{}}:nt("generateAbstractIcon",$)||{children:[],attributes:{}},ee=Z.children,Y=Z.attributes;return $.children=ee,$.attributes=Y,s?ad($):rd($)}function to(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Ot]="");var c=I({},o.styles);ei(a)&&(c.transform=Lu({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Er(c);d.length>0&&(f.style=d);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function id(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Er(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zr=Fe.styles;function ma(e){var t=e[0],n=e[1],r=e.slice(4),a=Va(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var od={found:!1,width:512,height:512};function sd(e,t){!Ys&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ha(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=gt()),new Promise(function(r,a){if(nt("missingIconAbstract"),n==="fa"){var i=al(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&zr[t]&&zr[t][e]){var o=zr[t][e];return r(ma(o))}sd(e,t),r(I(I({},od),{},{icon:F.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}}))})}var no=function(){},pa=F.measurePerformance&&Hn&&Hn.mark&&Hn.measure?Hn:{mark:no,measure:no},sn='FA "6.4.2"',ld=function(t){return pa.mark("".concat(sn," ").concat(t," begins")),function(){return ol(t)}},ol=function(t){pa.mark("".concat(sn," ").concat(t," ends")),pa.measure("".concat(sn," ").concat(t),"".concat(sn," ").concat(t," begins"),"".concat(sn," ").concat(t," ends"))},ii={begin:ld,end:ol},er=function(){};function ro(e){var t=e.getAttribute?e.getAttribute(Ot):null;return typeof t=="string"}function cd(e){var t=e.getAttribute?e.getAttribute(Ga):null,n=e.getAttribute?e.getAttribute(Qa):null;return t&&n}function fd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function ud(){if(F.autoReplaceSvg===!0)return tr.replace;var e=tr[F.autoReplaceSvg];return e||tr.replace}function dd(e){return ie.createElementNS("http://www.w3.org/2000/svg",e)}function md(e){return ie.createElement(e)}function sl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?dd:md:n;if(typeof e=="string")return ie.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(sl(o,{ceFn:r}))}),a}function hd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var tr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(sl(a),n)}),n.getAttribute(Ot)===null&&F.keepOriginalSource){var r=ie.createComment(hd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Za(n).indexOf(F.replacementClass))return tr.replace(t);var a=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===F.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Nn(s)}).join(`
`);n.setAttribute(Ot,""),n.innerHTML=o}};function ao(e){e()}function ll(e,t){var n=typeof t=="function"?t:er;if(e.length===0)n();else{var r=ao;F.mutateApproach===bu&&(r=pt.requestAnimationFrame||ao),r(function(){var a=ud(),i=ii.begin("mutate");e.map(a),i(),n()})}}var oi=!1;function cl(){oi=!0}function ga(){oi=!1}var cr=null;function io(e){if(Vi&&F.observeMutations){var t=e.treeCallback,n=t===void 0?er:t,r=e.nodeCallback,a=r===void 0?er:r,i=e.pseudoElementsCallback,o=i===void 0?er:i,s=e.observeMutationsRoot,l=s===void 0?ie:s;cr=new Vi(function(f){if(!oi){var c=gt();en(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ro(d.addedNodes[0])&&(F.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&F.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ro(d.target)&&~Au.indexOf(d.attributeName))if(d.attributeName==="class"&&cd(d.target)){var h=Ar(Za(d.target)),g=h.prefix,A=h.iconName;d.target.setAttribute(Ga,g||c),A&&d.target.setAttribute(Qa,A)}else fd(d.target)&&a(d.target)})}}),at&&cr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function pd(){cr&&cr.disconnect()}function gd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function vd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Ar(Za(e));return a.prefix||(a.prefix=gt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Vu(a.prefix,e.innerText)||ni(a.prefix,ca(e.innerText))),!a.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function bd(e){var t=en(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||Sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function yd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ye,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vd(e),r=n.iconName,a=n.prefix,i=n.rest,o=bd(e),s=ua("parseNodeAttributes",{},e),l=t.styleParser?gd(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ye,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var xd=Fe.styles;function fl(e){var t=F.autoReplaceSvg==="nest"?oo(e,{styleParser:!1}):oo(e);return~t.extra.classes.indexOf(Ks)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}var vt=new Set;Ja.map(function(e){vt.add("fa-".concat(e))});Object.keys(kn[ae]).map(vt.add.bind(vt));Object.keys(kn[fe]).map(vt.add.bind(vt));vt=In(vt);function so(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!at)return Promise.resolve();var n=ie.documentElement.classList,r=function(d){return n.add("".concat(Xi,"-").concat(d))},a=function(d){return n.remove("".concat(Xi,"-").concat(d))},i=F.autoFetchSvg?vt:Ja.map(function(c){return"fa-".concat(c)}).concat(Object.keys(xd));i.includes("fa")||i.push("fa");var o=[".".concat(Ks,":not([").concat(Ot,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=en(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ii.begin("onTree"),f=s.reduce(function(c,d){try{var h=fl(d);h&&c.push(h)}catch(g){Ys||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(h){ll(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),d(h)})})}function _d(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fl(e).then(function(n){n&&ll([n],t)})}function wd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:da(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:da(a||{})),e(r,I(I({},n),{},{mask:a}))}}var Ed=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ye:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,h=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,S=n.classes,M=S===void 0?[]:S,y=n.attributes,_=y===void 0?{}:y,N=n.styles,C=N===void 0?{}:N;if(t){var $=t.prefix,Z=t.iconName,ee=t.icon;return Pr(I({type:"icon"},t),function(){return St("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(h?_["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(A||Sn()):(_["aria-hidden"]="true",_.focusable="false")),ai({icons:{main:ma(ee),mask:l?ma(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:Z,transform:I(I({},Ye),a),symbol:o,title:h,maskId:c,titleId:A,extra:{attributes:_,styles:C,classes:M}})})}},kd={mixout:function(){return{icon:wd(Ed)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=so,n.nodeCallback=_d,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ie:r,i=n.callback,o=i===void 0?function(){}:i;return so(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,A){Promise.all([ha(a,s),c.iconName?ha(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var M=Va(S,2),y=M[0],_=M[1];g([n,ai({icons:{main:y,mask:_},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Er(s);l.length>0&&(a.style=l);var f;return ei(o)&&(f=nt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Ad={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Pr({type:"layer"},function(){St("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(In(i)).join(" ")},children:o}]})}}}},Pd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Pr({type:"counter",content:n},function(){return St("beforeDOMElementCreation",{content:n,params:r}),id({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(In(s))}})})}}}},Od={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ye:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Pr({type:"text",content:n},function(){return St("beforeDOMElementCreation",{content:n,params:r}),to({content:n,transform:I(I({},Ye),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(F.cssPrefix,"-layers-text")].concat(In(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Us){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return F.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,to({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Sd=new RegExp('"',"ug"),lo=[1105920,1112319];function Cd(e){var t=e.replace(Sd,""),n=Uu(t,0),r=n>=lo[0]&&n<=lo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ca(a?t[0]:t),isSecondary:r||a}}function co(e,t){var n="".concat(vu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=en(e.children),o=i.filter(function(ee){return ee.getAttribute(la)===t})[0],s=pt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(wu),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?fe:ae,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?An[h][l[2].toLowerCase()]:Eu[h][f],A=Cd(d),S=A.value,M=A.isSecondary,y=l[0].startsWith("FontAwesome"),_=ni(g,S),N=_;if(y){var C=Xu(S);C.iconName&&C.prefix&&(_=C.iconName,g=C.prefix)}if(_&&!M&&(!o||o.getAttribute(Ga)!==g||o.getAttribute(Qa)!==N)){e.setAttribute(n,N),o&&e.removeChild(o);var $=yd(),Z=$.extra;Z.attributes[la]=t,ha(_,g).then(function(ee){var Y=ai(I(I({},$),{},{icons:{main:ee,mask:ri()},prefix:g,iconName:N,extra:Z,watchable:!0})),B=ie.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(B,e.firstChild):e.appendChild(B),B.outerHTML=Y.map(function(le){return Nn(le)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Rd(e){return Promise.all([co(e,"::before"),co(e,"::after")])}function Id(e){return e.parentNode!==document.head&&!~yu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(la)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function fo(e){if(at)return new Promise(function(t,n){var r=en(e.querySelectorAll("*")).filter(Id).map(Rd),a=ii.begin("searchPseudoElements");cl(),Promise.all(r).then(function(){a(),ga(),t()}).catch(function(){a(),ga(),n()})})}var Td={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ie:r;F.searchPseudoElements&&fo(a)}}},uo=!1,Nd={mixout:function(){return{dom:{unwatch:function(){cl(),uo=!0}}}},hooks:function(){return{bootstrap:function(){io(ua("mutationObserverCallbacks",{}))},noAuto:function(){pd()},watch:function(n){var r=n.observeMutationsRoot;uo?ga():io(ua("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},mo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Md={mixout:function(){return{parse:{transform:function(n){return mo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=mo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:h};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Dr={x:0,y:0,width:"100%",height:"100%"};function ho(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ld(e){return e.tag==="g"?e.children:[e]}var Fd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Ar(a.split(" ").map(function(o){return o.trim()})):ri();return i.prefix||(i.prefix=gt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,h=o.icon,g=Mu({transform:l,containerWidth:d,iconWidth:f}),A={tag:"rect",attributes:I(I({},Dr),{},{fill:"white"})},S=c.children?{children:c.children.map(ho)}:{},M={tag:"g",attributes:I({},g.inner),children:[ho(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},S))]},y={tag:"g",attributes:I({},g.outer),children:[M]},_="mask-".concat(s||Sn()),N="clip-".concat(s||Sn()),C={tag:"mask",attributes:I(I({},Dr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,y]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Ld(h)},C]};return r.push($,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(_,")")},Dr)}),{children:r,attributes:a}}}},jd={provides:function(t){var n=!1;pt.matchMedia&&(n=pt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},zd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Dd=[ju,kd,Ad,Pd,Od,Td,Nd,Md,Fd,jd,zd];Ju(Dd,{mixoutsTo:Se});Se.noAuto;Se.config;var $d=Se.library;Se.dom;var Hd=Se.parse;Se.findIconDefinition;Se.toHtml;var Ud=Se.icon;Se.layer;Se.text;Se.counter;var Bd=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wd(e,t){return t={exports:{}},e(t,t.exports),t.exports}var Yd=Wd(function(e){(function(t){var n=function(y,_,N){if(!f(_)||d(_)||h(_)||g(_)||l(_))return _;var C,$=0,Z=0;if(c(_))for(C=[],Z=_.length;$<Z;$++)C.push(n(y,_[$],N));else{C={};for(var ee in _)Object.prototype.hasOwnProperty.call(_,ee)&&(C[y(ee,N)]=n(y,_[ee],N))}return C},r=function(y,_){_=_||{};var N=_.separator||"_",C=_.split||/(?=[A-Z])/;return y.split(C).join(N)},a=function(y){return A(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(_,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var _=a(y);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(y,_){return r(y,_).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},d=function(y){return s.call(y)=="[object Date]"},h=function(y){return s.call(y)=="[object RegExp]"},g=function(y){return s.call(y)=="[object Boolean]"},A=function(y){return y=y-0,y===y},S=function(y,_){var N=_&&"process"in _?_.process:_;return typeof N!="function"?y:function(C,$){return N(C,y,$)}},M={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,_){return n(S(a,_),y)},decamelizeKeys:function(y,_){return n(S(o,_),y,_)},pascalizeKeys:function(y,_){return n(S(i,_),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(Bd)}),Kd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ln=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},va=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qd=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n};function Vd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Yd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Xd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ul(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ul(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Xd(c);break;case"style":l.style=Vd(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=qd(n,["class","style"]);return qa(e.tag,va({},t,{class:a.class,style:va({},a.style,o)},a.attrs,s),r)}var dl=!1;try{dl=!0}catch{}function Gd(){if(!dl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function $r(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ln({},e,t):{}}function Qd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ln(t,"fa-"+e.size,e.size!==null),ln(t,"fa-rotate-"+e.rotation,e.rotation!==null),ln(t,"fa-pull-"+e.pull,e.pull!==null),ln(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function po(e){if(e===null)return null;if((typeof e>"u"?"undefined":Kd(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Jd=Da({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=me(function(){return po(t.icon)}),i=me(function(){return $r("classes",Qd(t))}),o=me(function(){return $r("transform",typeof t.transform=="string"?Hd.transform(t.transform):t.transform)}),s=me(function(){return $r("mask",po(t.mask))}),l=me(function(){return Ud(a.value,va({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});Ht(l,function(c){if(!c)return Gd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=me(function(){return l.value?ul(l.value.abstract[0],{},r):null});return function(){return f.value}}}),Zd={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},em={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mt=typeof window<"u";function tm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const J=Object.assign;function Hr(e,t){const n={};for(const r in t){const a=t[r];n[r]=De(a)?a.map(e):e(a)}return n}const hn=()=>{},De=Array.isArray,nm=/\/$/,rm=e=>e.replace(nm,"");function Ur(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=sm(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function am(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function go(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function im(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Xt(t.matched[r],n.matched[a])&&ml(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Xt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ml(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!om(e[n],t[n]))return!1;return!0}function om(e,t){return De(e)?vo(e,t):De(t)?vo(t,e):e===t}function vo(e,t){return De(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function sm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Cn;(function(e){e.pop="pop",e.push="push"})(Cn||(Cn={}));var pn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(pn||(pn={}));function lm(e){if(!e)if(Mt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),rm(e)}const cm=/^[^#]+#/;function fm(e,t){return e.replace(cm,"#")+t}function um(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Or=()=>({left:window.pageXOffset,top:window.pageYOffset});function dm(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=um(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function bo(e,t){return(history.state?history.state.position-t:-1)+e}const ba=new Map;function mm(e,t){ba.set(e,t)}function hm(e){const t=ba.get(e);return ba.delete(e),t}let pm=()=>location.protocol+"//"+location.host;function hl(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),go(l,"")}return go(n,e)+r+a}function gm(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=hl(e,location),A=n.value,S=t.value;let M=0;if(h){if(n.value=g,t.value=h,o&&o===A){o=null;return}M=S?h.position-S.position:0}else r(g);a.forEach(y=>{y(n.value,A,{delta:M,type:Cn.pop,direction:M?M>0?pn.forward:pn.back:pn.unknown})})};function l(){o=n.value}function f(h){a.push(h);const g=()=>{const A=a.indexOf(h);A>-1&&a.splice(A,1)};return i.push(g),g}function c(){const{history:h}=window;h.state&&h.replaceState(J({},h.state,{scroll:Or()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:d}}function yo(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Or():null}}function vm(e){const{history:t,location:n}=window,r={value:hl(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:pm()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(l,f){const c=J({},t.state,yo(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=J({},a.value,t.state,{forward:l,scroll:Or()});i(c.current,c,!0);const d=J({},yo(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function bm(e){e=lm(e);const t=vm(e),n=gm(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=J({location:"",base:e,go:r,createHref:fm.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function ym(e){return typeof e=="string"||e&&typeof e=="object"}function pl(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gl=Symbol("");var xo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(xo||(xo={}));function Gt(e,t){return J(new Error,{type:e,[gl]:!0},t)}function Xe(e,t){return e instanceof Error&&gl in e&&(t==null||!!(e.type&t))}const _o="[^/]+?",xm={sensitive:!1,strict:!1,start:!0,end:!0},_m=/[.+*?^${}()[\]/\\]/g;function wm(e,t){const n=J({},xm,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const h=f[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(_m,"\\$&"),g+=40;else if(h.type===1){const{value:A,repeatable:S,optional:M,regexp:y}=h;i.push({name:A,repeatable:S,optional:M});const _=y||_o;if(_!==_o){g+=10;try{new RegExp(`(${_})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${A}" (${_}): `+C.message)}}let N=S?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(N=M&&f.length<2?`(?:/${N})`:"/"+N),M&&(N+="?"),a+=N,g+=20,M&&(g+=-8),S&&(g+=-20),_===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",A=i[h-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const h of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:M}=g,y=A in f?f[A]:"";if(De(y)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const _=De(y)?y.join("/"):y;if(!_)if(M)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);c+=_}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Em(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function km(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Em(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(wo(r))return 1;if(wo(a))return-1}return a.length-r.length}function wo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Am={type:0,value:""},Pm=/[a-zA-Z0-9_]/;function Om(e){if(!e)return[[]];if(e==="/")return[[Am]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Pm.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function Sm(e,t,n){const r=wm(Om(e.path),n),a=J(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Cm(e,t){const n=[],r=new Map;t=Ao({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,h){const g=!h,A=Rm(c);A.aliasOf=h&&h.record;const S=Ao(t,c),M=[A];if("alias"in c){const N=typeof c.alias=="string"?[c.alias]:c.alias;for(const C of N)M.push(J({},A,{components:h?h.record.components:A.components,path:C,aliasOf:h?h.record:A}))}let y,_;for(const N of M){const{path:C}=N;if(d&&C[0]!=="/"){const $=d.record.path,Z=$[$.length-1]==="/"?"":"/";N.path=d.record.path+(C&&Z+C)}if(y=Sm(N,d,S),h?h.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),g&&c.name&&!ko(y)&&o(c.name)),A.children){const $=A.children;for(let Z=0;Z<$.length;Z++)i($[Z],y,h&&h.children[Z])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return _?()=>{o(_)}:hn}function o(c){if(pl(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&km(c,n[d])>=0&&(c.record.path!==n[d].record.path||!vl(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!ko(c)&&r.set(c.record.name,c)}function f(c,d){let h,g={},A,S;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Gt(1,{location:c});S=h.record.name,g=J(Eo(d.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),c.params&&Eo(c.params,h.keys.map(_=>_.name))),A=h.stringify(g)}else if("path"in c)A=c.path,h=n.find(_=>_.re.test(A)),h&&(g=h.parse(A),S=h.record.name);else{if(h=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!h)throw Gt(1,{location:c,currentLocation:d});S=h.record.name,g=J({},d.params,c.params),A=h.stringify(g)}const M=[];let y=h;for(;y;)M.unshift(y.record),y=y.parent;return{name:S,path:A,params:g,matched:M,meta:Tm(M)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Eo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Rm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Im(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Im(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ko(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Tm(e){return e.reduce((t,n)=>J(t,n.meta),{})}function Ao(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function vl(e,t){return t.children.some(n=>n===e||vl(e,n))}const bl=/#/g,Nm=/&/g,Mm=/\//g,Lm=/=/g,Fm=/\?/g,yl=/\+/g,jm=/%5B/g,zm=/%5D/g,xl=/%5E/g,Dm=/%60/g,_l=/%7B/g,$m=/%7C/g,wl=/%7D/g,Hm=/%20/g;function si(e){return encodeURI(""+e).replace($m,"|").replace(jm,"[").replace(zm,"]")}function Um(e){return si(e).replace(_l,"{").replace(wl,"}").replace(xl,"^")}function ya(e){return si(e).replace(yl,"%2B").replace(Hm,"+").replace(bl,"%23").replace(Nm,"%26").replace(Dm,"`").replace(_l,"{").replace(wl,"}").replace(xl,"^")}function Bm(e){return ya(e).replace(Lm,"%3D")}function Wm(e){return si(e).replace(bl,"%23").replace(Fm,"%3F")}function Ym(e){return e==null?"":Wm(e).replace(Mm,"%2F")}function fr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Km(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(yl," "),o=i.indexOf("="),s=fr(o<0?i:i.slice(0,o)),l=o<0?null:fr(i.slice(o+1));if(s in t){let f=t[s];De(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Po(e){let t="";for(let n in e){const r=e[n];if(n=Bm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&ya(i)):[r&&ya(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function qm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=De(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Vm=Symbol(""),Oo=Symbol(""),li=Symbol(""),El=Symbol(""),xa=Symbol("");function rn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ut(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Gt(4,{from:n,to:t})):d instanceof Error?s(d):ym(d)?s(Gt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Br(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Xm(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ut(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=tm(f)?f.default:f;i.components[o]=c;const h=(c.__vccOpts||c)[t];return h&&ut(h,n,r,i,o)()}))}}return a}function Xm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function So(e){const t=Ke(li),n=Ke(El),r=me(()=>t.resolve(Ie(e.to))),a=me(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const h=d.findIndex(Xt.bind(null,c));if(h>-1)return h;const g=Co(l[f-2]);return f>1&&Co(c)===g&&d[d.length-1].path!==g?d.findIndex(Xt.bind(null,l[f-2])):h}),i=me(()=>a.value>-1&&Jm(n.params,r.value.params)),o=me(()=>a.value>-1&&a.value===n.matched.length-1&&ml(n.params,r.value.params));function s(l={}){return Qm(l)?t[Ie(e.replace)?"replace":"push"](Ie(e.to)).catch(hn):Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Gm=Da({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:So,setup(e,{slots:t}){const n=Rn(So(e)),{options:r}=Ke(li),a=me(()=>({[Ro(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ro(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:qa("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),_a=Gm;function Qm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Jm(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!De(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Co(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ro=(e,t,n)=>e??t??n,Zm=Da({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ke(xa),a=me(()=>e.route||r.value),i=Ke(Oo,0),o=me(()=>{let f=Ie(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=me(()=>a.value.matched[o.value]);Jn(Oo,me(()=>o.value+1)),Jn(Vm,s),Jn(xa,a);const l=Yt();return Ht(()=>[l.value,s.value,e.name],([f,c,d],[h,g,A])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Xt(c,g)||!h)&&(c.enterCallbacks[d]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,h=d&&d.components[c];if(!h)return Io(n.default,{Component:h,route:f});const g=d.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,M=qa(h,J({},A,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Io(n.default,{Component:M,route:f})||M}}});function Io(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const kl=Zm;function eh(e){const t=Cm(e.routes,e),n=e.parseQuery||Km,r=e.stringifyQuery||Po,a=e.history,i=rn(),o=rn(),s=rn(),l=pc(lt);let f=lt;Mt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Hr.bind(null,b=>""+b),d=Hr.bind(null,Ym),h=Hr.bind(null,fr);function g(b,T){let O,j;return pl(b)?(O=t.getRecordMatcher(b),j=T):j=b,t.addRoute(j,O)}function A(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function S(){return t.getRoutes().map(b=>b.record)}function M(b){return!!t.getRecordMatcher(b)}function y(b,T){if(T=J({},T||l.value),typeof b=="string"){const p=Ur(n,b,T.path),v=t.resolve({path:p.path},T),x=a.createHref(p.fullPath);return J(p,v,{params:h(v.params),hash:fr(p.hash),redirectedFrom:void 0,href:x})}let O;if("path"in b)O=J({},b,{path:Ur(n,b.path,T.path).path});else{const p=J({},b.params);for(const v in p)p[v]==null&&delete p[v];O=J({},b,{params:d(p)}),T.params=d(T.params)}const j=t.resolve(O,T),Q=b.hash||"";j.params=c(h(j.params));const u=am(r,J({},b,{hash:Um(Q),path:j.path})),m=a.createHref(u);return J({fullPath:u,hash:Q,query:r===Po?qm(b.query):b.query||{}},j,{redirectedFrom:void 0,href:m})}function _(b){return typeof b=="string"?Ur(n,b,l.value.path):J({},b)}function N(b,T){if(f!==b)return Gt(8,{from:T,to:b})}function C(b){return ee(b)}function $(b){return C(J(_(b),{replace:!0}))}function Z(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let j=typeof O=="function"?O(b):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=_(j):{path:j},j.params={}),J({query:b.query,hash:b.hash,params:"path"in j?{}:b.params},j)}}function ee(b,T){const O=f=y(b),j=l.value,Q=b.state,u=b.force,m=b.replace===!0,p=Z(O);if(p)return ee(J(_(p),{state:typeof p=="object"?J({},Q,p.state):Q,force:u,replace:m}),T||O);const v=O;v.redirectedFrom=T;let x;return!u&&im(r,j,O)&&(x=Gt(16,{to:v,from:j}),$e(j,j,!0,!1)),(x?Promise.resolve(x):le(v,j)).catch(w=>Xe(w)?Xe(w,2)?w:it(w):G(w,v,j)).then(w=>{if(w){if(Xe(w,2))return ee(J({replace:m},_(w.to),{state:typeof w.to=="object"?J({},Q,w.to.state):Q,force:u}),T||v)}else w=Ae(v,j,!0,m,Q);return be(v,j,w),w})}function Y(b,T){const O=N(b,T);return O?Promise.reject(O):Promise.resolve()}function B(b){const T=Rt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function le(b,T){let O;const[j,Q,u]=th(b,T);O=Br(j.reverse(),"beforeRouteLeave",b,T);for(const p of j)p.leaveGuards.forEach(v=>{O.push(ut(v,b,T))});const m=Y.bind(null,b,T);return O.push(m),ye(O).then(()=>{O=[];for(const p of i.list())O.push(ut(p,b,T));return O.push(m),ye(O)}).then(()=>{O=Br(Q,"beforeRouteUpdate",b,T);for(const p of Q)p.updateGuards.forEach(v=>{O.push(ut(v,b,T))});return O.push(m),ye(O)}).then(()=>{O=[];for(const p of u)if(p.beforeEnter)if(De(p.beforeEnter))for(const v of p.beforeEnter)O.push(ut(v,b,T));else O.push(ut(p.beforeEnter,b,T));return O.push(m),ye(O)}).then(()=>(b.matched.forEach(p=>p.enterCallbacks={}),O=Br(u,"beforeRouteEnter",b,T),O.push(m),ye(O))).then(()=>{O=[];for(const p of o.list())O.push(ut(p,b,T));return O.push(m),ye(O)}).catch(p=>Xe(p,8)?p:Promise.reject(p))}function be(b,T,O){s.list().forEach(j=>B(()=>j(b,T,O)))}function Ae(b,T,O,j,Q){const u=N(b,T);if(u)return u;const m=T===lt,p=Mt?history.state:{};O&&(j||m?a.replace(b.fullPath,J({scroll:m&&p&&p.scroll},Q)):a.push(b.fullPath,Q)),l.value=b,$e(b,T,O,m),it()}let Ce;function bt(){Ce||(Ce=a.listen((b,T,O)=>{if(!Mn.listening)return;const j=y(b),Q=Z(j);if(Q){ee(J(Q,{replace:!0}),j).catch(hn);return}f=j;const u=l.value;Mt&&mm(bo(u.fullPath,O.delta),Or()),le(j,u).catch(m=>Xe(m,12)?m:Xe(m,2)?(ee(m.to,j).then(p=>{Xe(p,20)&&!O.delta&&O.type===Cn.pop&&a.go(-1,!1)}).catch(hn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),G(m,j,u))).then(m=>{m=m||Ae(j,u,!1),m&&(O.delta&&!Xe(m,8)?a.go(-O.delta,!1):O.type===Cn.pop&&Xe(m,20)&&a.go(-1,!1)),be(j,u,m)}).catch(hn)}))}let Re=rn(),X=rn(),ne;function G(b,T,O){it(b);const j=X.list();return j.length?j.forEach(Q=>Q(b,T,O)):console.error(b),Promise.reject(b)}function Ve(){return ne&&l.value!==lt?Promise.resolve():new Promise((b,T)=>{Re.add([b,T])})}function it(b){return ne||(ne=!b,bt(),Re.list().forEach(([T,O])=>b?O(b):T()),Re.reset()),b}function $e(b,T,O,j){const{scrollBehavior:Q}=e;if(!Mt||!Q)return Promise.resolve();const u=!O&&hm(bo(b.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return ja().then(()=>Q(b,T,u)).then(m=>m&&dm(m)).catch(m=>G(m,b,T))}const we=b=>a.go(b);let Ct;const Rt=new Set,Mn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:M,getRoutes:S,resolve:y,options:e,push:C,replace:$,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:X.add,isReady:Ve,install(b){const T=this;b.component("RouterLink",_a),b.component("RouterView",kl),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Ie(l)}),Mt&&!Ct&&l.value===lt&&(Ct=!0,C(a.location).catch(Q=>{}));const O={};for(const Q in lt)Object.defineProperty(O,Q,{get:()=>l.value[Q],enumerable:!0});b.provide(li,T),b.provide(El,ts(O)),b.provide(xa,l);const j=b.unmount;Rt.add(b),b.unmount=function(){Rt.delete(b),Rt.size<1&&(f=lt,Ce&&Ce(),Ce=null,l.value=lt,Ct=!1,ne=!1),j()}}};function ye(b){return b.reduce((T,O)=>T.then(()=>B(O)),Promise.resolve())}return Mn}function th(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Xt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Xt(f,l))||a.push(l))}return[n,r,a]}const To=e=>localStorage.getItem(e),No=(e,t)=>localStorage.setItem(e,t),Al=su("theme",()=>{const e=Yt(),t=Yt(),n="theme",r=s=>s||"auto",a=s=>s||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),i=()=>{const s=r(To(n)),l=a(To(n));e.value=s,t.value=l,No(n,s)},o=()=>{t.value=t.value==="dark"?"light":"dark",e.value=t.value,No(n,t.value)};return ys(()=>{i()}),{theme:e,button:t,changeTheme:o}});const nh={class:"asideTop"},rh={class:"asideBottom"},ah={__name:"Sidebar",setup(e){const t=Al(),{button:n}=js(t),{changeTheme:r}=t;return(a,i)=>{const o=Vc("font-awesome-icon");return Ua(),Ba("aside",null,[Ut("div",nh,[ve(Ie(_a),{to:"/"},{default:Xr(()=>[ve(o,{icon:["fas","house"]}),na(" Home ")]),_:1}),ve(Ie(_a),{to:"/github"},{default:Xr(()=>[ve(o,{icon:["fab","github"]}),na(" GitHub ")]),_:1})]),Ut("div",rh,[Ut("button",{type:"button",onClick:i[0]||(i[0]=s=>Ie(r)())},"Change Theme:"+Dl(Ie(n)),1)])])}}};const ih=["data-theme"],oh={__name:"App",setup(e){const t=Al(),{theme:n}=js(t);return(r,a)=>(Ua(),Ba("div",{class:"app","data-theme":Ie(n)},[ve(ah),ve(Ie(kl))],8,ih))}},sh="modulepreload",lh=function(e){return"/"+e},Mo={},Lo=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=lh(i),i in Mo)return;Mo[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const d=a[c];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":sh,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,d)=>{f.addEventListener("load",c),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},ch=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},fh={},uh={class:"home"},dh=Ut("h1",null,"This is an home page",-1),mh=[dh];function hh(e,t){return Ua(),Ba("div",uh,mh)}const ph=ch(fh,[["render",hh]]),gh=eh({history:bm("/"),routes:[{path:"/",name:"home",component:ph},{path:"/github",name:"github",component:()=>Lo(()=>import("./GitHubView-6f4d1e26.js"),[])},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Lo(()=>import("./NotFoundView-1e3ed4f2.js"),[])}]});$d.add(Zd,em);const Sr=Jf(oh);Sr.use(tu());Sr.use(gh);Sr.component("font-awesome-icon",Jd);Sr.mount("#app");export{ch as _,Ut as a,Ba as c,Ua as o};
