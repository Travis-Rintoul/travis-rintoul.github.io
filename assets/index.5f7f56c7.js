(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function g(){}function Z(e){return e()}function J(){return Object.create(null)}function b(e){e.forEach(Z)}function le(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let A;function Q(e,t){return A||(A=document.createElement("a")),A.href=t,e===A.href}function ce(e){return Object.keys(e).length===0}function U(e){return e==null?"":e}function d(e,t){e.appendChild(t)}function D(e,t,n){e.insertBefore(t,n||null)}function H(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function ue(e){return document.createTextNode(e)}function N(){return ue(" ")}function S(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e){return Array.from(e.childNodes)}let F;function T(e){F=e}const L=[],V=[],z=[],X=[],de=Promise.resolve();let R=!1;function fe(){R||(R=!0,de.then(ee))}function B(e){z.push(e)}const M=new Set;let O=0;function ee(){const e=F;do{for(;O<L.length;){const t=L[O];O++,T(t),he(t.$$)}for(T(null),L.length=0,O=0;V.length;)V.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];M.has(n)||(M.add(n),n())}z.length=0}while(L.length);for(;X.length;)X.pop()();R=!1,M.clear(),T(e)}function he(e){if(e.fragment!==null){e.update(),b(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}const P=new Set;let pe;function te(e,t){e&&e.i&&(P.delete(e),e.i(t))}function me(e,t,n,i){if(e&&e.o){if(P.has(e))return;P.add(e),pe.c.push(()=>{P.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const _e=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ge(e){e&&e.c()}function ne(e,t,n,i){const{fragment:s,on_mount:o,on_destroy:a,after_update:u}=e.$$;s&&s.m(t,n),i||B(()=>{const l=o.map(Z).filter(le);a?a.push(...l):b(l),e.$$.on_mount=[]}),u.forEach(B)}function se(e,t){const n=e.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(e,t){e.$$.dirty[0]===-1&&(L.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(e,t,n,i,s,o,a,u=[-1]){const l=F;T(e);const r=e.$$={fragment:null,ctx:null,props:o,update:g,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:J(),dirty:u,skip_bound:!1,root:t.target||l.$$.root};a&&a(r.root);let m=!1;if(r.ctx=n?n(e,t.props||{},(h,p,...y)=>{const $=y.length?y[0]:p;return r.ctx&&s(r.ctx[h],r.ctx[h]=$)&&(!r.skip_bound&&r.bound[h]&&r.bound[h]($),m&&ve(e,h)),p}):[],r.update(),m=!0,b(r.before_update),r.fragment=i?i(r.ctx):!1,t.target){if(t.hydrate){const h=ae(t.target);r.fragment&&r.fragment.l(h),h.forEach(H)}else r.fragment&&r.fragment.c();t.intro&&te(e.$$.fragment),ne(e,t.target,t.anchor,t.customElement),ee()}T(l)}class re{$destroy(){se(this,1),this.$destroy=g}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function E(e,t,n){return e>t&&e<n}const v=[];function be(e,t=g){let n;const i=new Set;function s(u){if(I(e,u)&&(e=u,n)){const l=!v.length;for(const r of i)r[1](),v.push(r,e);if(l){for(let r=0;r<v.length;r+=2)v[r][0](v[r+1]);v.length=0}}}function o(u){s(u(e))}function a(u,l=g){const r=[u,l];return i.add(r),i.size===1&&(n=t(s)||g),u(e),()=>{i.delete(r),i.size===0&&(n(),n=null)}}return{set:s,update:o,subscribe:a}}const oe=be("d");function ye(){let e=window.innerWidth,t=null;switch(!0){case E(e,0,320):t="ms";break;case E(e,321,375):t="mm";break;case E(e,376,767):t="ml";break;case E(e,768,1023):t="t";break;case E(e,1024,1079):t="l";break;case e>1080:t="d";break}oe.set(t)}const{window:Y}=_e;function $e(e){let t,n,i,s,o,a,u,l,r,m,h,p,y,$,_,w,K,x,j,q,G;return{c(){t=f("div"),n=f("div"),i=f("div"),s=f("h1"),s.textContent=`${we}`,o=N(),a=f("div"),u=f("a"),l=f("img"),m=N(),h=f("a"),p=f("img"),$=N(),_=f("div"),w=f("div"),w.innerHTML=`<h1 id="name" class="svelte-uo05hn">Travis Rintoul</h1> 
            <h2 id="title" class="svelte-uo05hn">.NET Developer</h2> 
            <div id="contact" class="svelte-uo05hn">Contact Me</div>`,K=N(),x=f("div"),x.innerHTML='<img id="me" src="./me.png" alt="background" class="svelte-uo05hn"/>',c(s,"class","svelte-uo05hn"),c(i,"class","svelte-uo05hn"),Q(l.src,r="./github-w.png")||c(l,"src",r),c(l,"alt",""),c(l,"class","svelte-uo05hn"),c(u,"href",xe),c(u,"class","svelte-uo05hn"),Q(p.src,y="./linked-w.png")||c(p,"src",y),c(p,"alt",""),c(p,"class","svelte-uo05hn"),c(h,"href",ke),c(h,"class","svelte-uo05hn"),c(a,"id","socials"),c(a,"class","svelte-uo05hn"),c(n,"id","nav"),c(n,"class","svelte-uo05hn"),c(w,"id","info"),c(w,"class","svelte-uo05hn"),c(x,"id","picture"),c(x,"class","svelte-uo05hn"),c(_,"id","wrapper"),c(_,"class",j=U(e[0]?"compressed":"expanded")+" svelte-uo05hn"),c(t,"id","landing"),c(t,"class","svelte-uo05hn")},m(k,C){D(k,t,C),d(t,n),d(n,i),d(i,s),d(n,o),d(n,a),d(a,u),d(u,l),d(a,m),d(a,h),d(h,p),d(t,$),d(t,_),d(_,w),d(_,K),d(_,x),q||(G=[S(Y,"resize",e[2]),S(Y,"load",e[1])],q=!0)},p(k,[C]){C&1&&j!==(j=U(k[0]?"compressed":"expanded")+" svelte-uo05hn")&&c(_,"class",j)},i:g,o:g,d(k){k&&H(t),q=!1,b(G)}}}let we="Travis Rintoul",xe="https://github.com/Travis-Rintoul",ke="https://www.linkedin.com/in/travis-rintoul-615a861b1/",W=1200;function Ee(e,t,n){let i=window.innerWidth<W;function s(){n(0,i=window.innerWidth<W)}function o(){n(0,i=window.innerWidth<W)}return[i,s,o]}class Le extends re{constructor(t){super(),ie(this,t,Ee,$e,I,{})}}function Te(e){let t,n,i,s,o,a,u;return s=new Le({props:{active:e[0][0].active}}),{c(){t=f("div"),n=f("div"),i=f("section"),ge(s.$$.fragment),c(i,"class","svelte-1f50ijg"),c(t,"id","page"),c(t,"class","svelte-1f50ijg")},m(l,r){D(l,t,r),d(t,n),d(n,i),ne(s,i,null),o=!0,a||(u=[S(window,"resize",e[1]),S(window,"load",e[2])],a=!0)},p(l,[r]){const m={};r&1&&(m.active=l[0][0].active),s.$set(m)},i(l){o||(te(s.$$.fragment,l),o=!0)},o(l){me(s.$$.fragment,l),o=!1},d(l){l&&H(t),se(s),a=!1,b(u)}}}function je(e,t,n){var i;(function(u){u[u.up=0]="up",u[u.down=1]="down"})(i||(i={}));let s=[{name:"landing",active:!0}];function o(u){ye()}function a(){oe.subscribe(u=>{})}return[s,o,a]}class Ae extends re{constructor(t){super(),ie(this,t,je,Te,I,{})}}new Ae({target:document.getElementById("app")});