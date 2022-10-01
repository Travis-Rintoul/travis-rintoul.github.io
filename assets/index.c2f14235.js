(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();function v(){}function Y(e){return e()}function G(){return Object.create(null)}function b(e){e.forEach(Y)}function ce(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let O;function J(e,t){return O||(O=document.createElement("a")),O.href=t,e===O.href}function le(e){return Object.keys(e).length===0}function Q(e){return e==null?"":e}function d(e,t){e.appendChild(t)}function Z(e,t,n){e.insertBefore(t,n||null)}function H(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function ue(e){return document.createTextNode(e)}function A(){return ue(" ")}function z(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e){return Array.from(e.childNodes)}let K;function N(e){K=e}const L=[],U=[],M=[],V=[],de=Promise.resolve();let I=!1;function fe(){I||(I=!0,de.then(ee))}function R(e){M.push(e)}const q=new Set;let j=0;function ee(){const e=K;do{for(;j<L.length;){const t=L[j];j++,N(t),pe(t.$$)}for(N(null),L.length=0,j=0;U.length;)U.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];q.has(n)||(q.add(n),n())}M.length=0}while(L.length);for(;V.length;)V.pop()();I=!1,q.clear(),N(e)}function pe(e){if(e.fragment!==null){e.update(),b(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(R)}}const S=new Set;let he;function te(e,t){e&&e.i&&(S.delete(e),e.i(t))}function me(e,t,n,o){if(e&&e.o){if(S.has(e))return;S.add(e),he.c.push(()=>{S.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}const ge=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ve(e){e&&e.c()}function ne(e,t,n,o){const{fragment:r,on_mount:s,on_destroy:a,after_update:u}=e.$$;r&&r.m(t,n),o||R(()=>{const c=s.map(Y).filter(ce);a?a.push(...c):b(c),e.$$.on_mount=[]}),u.forEach(R)}function oe(e,t){const n=e.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){e.$$.dirty[0]===-1&&(L.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,o,r,s,a,u=[-1]){const c=K;N(e);const i=e.$$={fragment:null,ctx:null,props:s,update:v,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:t.target||c.$$.root};a&&a(i.root);let m=!1;if(i.ctx=n?n(e,t.props||{},(p,h,...y)=>{const w=y.length?y[0]:h;return i.ctx&&r(i.ctx[p],i.ctx[p]=w)&&(!i.skip_bound&&i.bound[p]&&i.bound[p](w),m&&$e(e,p)),h}):[],i.update(),m=!0,b(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const p=ae(t.target);i.fragment&&i.fragment.l(p),p.forEach(H)}else i.fragment&&i.fragment.c();t.intro&&te(e.$$.fragment),ne(e,t.target,t.anchor,t.customElement),ee()}N(c)}class ie{$destroy(){oe(this,1),this.$destroy=v}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function E(e,t,n){return e>t&&e<n}const $=[];function be(e,t=v){let n;const o=new Set;function r(u){if(B(e,u)&&(e=u,n)){const c=!$.length;for(const i of o)i[1](),$.push(i,e);if(c){for(let i=0;i<$.length;i+=2)$[i][0]($[i+1]);$.length=0}}}function s(u){r(u(e))}function a(u,c=v){const i=[u,c];return o.add(i),o.size===1&&(n=t(r)||v),u(e),()=>{o.delete(i),o.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:a}}const se=be("d");function ye(){let e=window.innerWidth,t=null;switch(!0){case E(e,0,320):t="ms";break;case E(e,321,375):t="mm";break;case E(e,376,767):t="ml";break;case E(e,768,1023):t="t";break;case E(e,1024,1079):t="l";break;case e>1080:t="d";break}se.set(t)}const{window:X}=ge;function we(e){let t,n,o,r,s,a,u,c,i,m,p,h,y,w,g,_,D,x,T,P,F;return{c(){t=f("div"),n=f("div"),o=f("div"),r=f("h1"),r.textContent=`${_e}`,s=A(),a=f("div"),u=f("a"),c=f("img"),m=A(),p=f("a"),h=f("img"),w=A(),g=f("div"),_=f("div"),_.innerHTML=`<h1 id="name" class="svelte-uo05hn">Travis Rintoul</h1> 
            <h2 id="title" class="svelte-uo05hn">.NET Developer</h2> 
            <div id="contact" class="svelte-uo05hn">Contact Me</div>`,D=A(),x=f("div"),x.innerHTML='<img id="me" src="./me.png" alt="background" class="svelte-uo05hn"/>',l(r,"class","svelte-uo05hn"),l(o,"class","svelte-uo05hn"),J(c.src,i="./github-w.png")||l(c,"src",i),l(c,"alt",""),l(c,"class","svelte-uo05hn"),l(u,"href",xe),l(u,"class","svelte-uo05hn"),J(h.src,y="./linked-w.png")||l(h,"src",y),l(h,"alt",""),l(h,"class","svelte-uo05hn"),l(p,"href",ke),l(p,"class","svelte-uo05hn"),l(a,"id","socials"),l(a,"class","svelte-uo05hn"),l(n,"id","nav"),l(n,"class","svelte-uo05hn"),l(_,"id","info"),l(_,"class","svelte-uo05hn"),l(x,"id","picture"),l(x,"class","svelte-uo05hn"),l(g,"id","wrapper"),l(g,"class",T=Q(e[0]?"compressed":"expanded")+" svelte-uo05hn"),l(t,"id","landing"),l(t,"class","svelte-uo05hn")},m(k,W){Z(k,t,W),d(t,n),d(n,o),d(o,r),d(n,s),d(n,a),d(a,u),d(u,c),d(a,m),d(a,p),d(p,h),d(t,w),d(t,g),d(g,_),d(g,D),d(g,x),P||(F=[z(X,"resize",e[2]),z(X,"load",e[1])],P=!0)},p(k,[W]){W&1&&T!==(T=Q(k[0]?"compressed":"expanded")+" svelte-uo05hn")&&l(g,"class",T)},i:v,o:v,d(k){k&&H(t),P=!1,b(F)}}}let _e="Travis Rintoul",xe="https://github.com/Travis-Rintoul",ke="https://www.linkedin.com/in/travis-rintoul-615a861b1/",C=1200;function Ee(e,t,n){let o=window.innerWidth<C;function r(){n(0,o=window.innerWidth<C)}function s(){n(0,o=window.innerWidth<C)}return[o,r,s]}class Le extends ie{constructor(t){super(),re(this,t,Ee,we,B,{})}}function Ne(e){let t,n,o,r,s,a,u;return r=new Le({props:{active:e[0][0].active}}),{c(){t=f("div"),n=f("div"),o=f("section"),ve(r.$$.fragment),l(o,"class","svelte-1f50ijg"),l(t,"id","page"),l(t,"class","svelte-1f50ijg")},m(c,i){Z(c,t,i),d(t,n),d(n,o),ne(r,o,null),s=!0,a||(u=[z(window,"resize",e[1]),z(window,"load",e[2])],a=!0)},p(c,[i]){const m={};i&1&&(m.active=c[0][0].active),r.$set(m)},i(c){s||(te(r.$$.fragment,c),s=!0)},o(c){me(r.$$.fragment,c),s=!1},d(c){c&&H(t),oe(r),a=!1,b(u)}}}function Te(e,t,n){var o;(function(u){u[u.up=0]="up",u[u.down=1]="down"})(o||(o={}));let r=[{name:"landing",active:!0}];function s(u){ye()}function a(){se.subscribe(u=>{})}return[r,s,a]}class Oe extends ie{constructor(t){super(),re(this,t,Te,Ne,B,{})}}new Oe({target:document.getElementById("app")});
