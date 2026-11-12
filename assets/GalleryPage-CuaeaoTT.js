import{j as r,a as m,c as ge,d as X,r as l,u as xe,e as ye,f as Pe,g as _e,h as Be,i as Ae,k as ze,P as Ne,m as Ge,n as De,B as Ie,o as Ke,p as We,q as He,s as Ue,t as Ye,v as Xe,w as qe,S as Je,x as Qe,y as Ve}from"./index-DBvZCzBm.js";import{r as be}from"./base-url-DlJmJWiP.js";const Ze=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  padding: 3.5rem 1.5rem;
  text-align: center;
`,et=m.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${e=>ge(e.theme)};
  box-shadow: 0 0 0 0 ${e=>X(e.theme,55)};
  animation: pulse 2s ease-out infinite;

  @keyframes pulse {
    70% { box-shadow: 0 0 0 12px transparent; }
    100% { box-shadow: 0 0 0 0 transparent; }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,tt=m.p`
  margin: 0;
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 1.15rem;
  color: ${e=>e.theme.colors.text.primary};
`,rt=m.p`
  margin: 0;
  max-width: 34ch;
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${e=>e.theme.colors.text.secondary};
`,nt=m.button`
  margin-top: 0.5rem;
  padding: 0.6rem 1.4rem;
  font: inherit;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.text.primary};
  background: transparent;
  border: 1px solid ${e=>X(e.theme,45)};
  border-radius: 9999px;
  cursor: pointer;
  transition: border-color 160ms, background 160ms;

  &:hover,
  &:focus-visible {
    border-color: ${e=>ge(e.theme)};
    background: ${e=>X(e.theme,10)};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function ve({headline:e,children:t,action:n}){return r.jsxs(Ze,{role:"status","aria-live":"polite",children:[r.jsx(et,{"aria-hidden":"true"}),r.jsx(tt,{children:e}),r.jsx(rt,{children:t}),n?r.jsx(nt,{type:"button",onClick:n.onClick,children:n.label}):null]})}function ot({subject:e="page",onRetry:t}){const n=t??(()=>window.location.reload());return r.jsxs(ve,{headline:"Busy right now",action:{label:"Try again",onClick:n},children:["Too many people are here at once, so the ",e," could not load. It is still trying — this usually clears in a moment."]})}function at({subject:e="page"}){return r.jsxs(ve,{headline:"You're in line",children:["A lot of people are here at once. The ",e," is on its way and will appear by itself — no need to refresh."]})}function we({src:e,webpSrc:t,alt:n,objectFit:a="cover",borderRadius:o,loading:i="lazy",fetchPriority:s}){const c=s?{fetchpriority:s}:{},v=r.jsx("img",{src:e,alt:n,loading:i,...c,style:{width:"100%",height:"100%",objectFit:a,borderRadius:o,display:"block"}});return t?r.jsxs("picture",{children:[r.jsx("source",{srcSet:t,type:"image/webp"}),v]}):v}function h(e){return e.theme}var $e=["🔥","😍","💋","🥵","👅","🍑","🍆","💦","😈"],it=m.div`
  position: absolute;
  top: max(5.5rem, calc(env(safe-area-inset-top) + 4.75rem));
  ${e=>e.$side==="left"?"left: max(0.5rem, env(safe-area-inset-left));":"right: max(0.5rem, env(safe-area-inset-right));"}
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  max-height: min(40vh, 15rem);
  overflow-y: auto;
  padding: 0.55rem 0.4rem;
  border-radius: 1.25rem;
  background: ${e=>`color-mix(in srgb, ${h(e).colors.background.secondary} 60%, transparent)`};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid ${e=>`color-mix(in srgb, ${h(e).colors.primary} 18%, transparent)`};

  @media (max-width: 480px) {
    top: max(4.75rem, calc(env(safe-area-inset-top) + 4rem));
    ${e=>e.$side==="left"?"left: 0.25rem;":"right: 0.25rem;"}
    gap: 0.3rem;
    max-height: min(34vh, 12rem);
    padding: 0.4rem 0.3rem;
  }
`,st=m.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 44px;
  padding: 0.3rem 0.6rem;
  border: none;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.06);
  color: ${e=>h(e).colors.text.primary};
  font-size: 1.15rem;
  line-height: 1;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: transform 120ms ease, background 200ms ease;

  &:hover {
    background: ${e=>`color-mix(in srgb, ${h(e).colors.primary} 16%, transparent)`};
  }

  &:active {
    transform: scale(1.18);
  }
`,lt=m.span`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${e=>h(e).colors.primary};
  min-width: 1ch;
  font-variant-numeric: tabular-nums;
`;function ke(e){return e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}k`:String(e)}function ne({side:e,emojis:t,counts:n,onReact:a}){return t.length===0?null:r.jsx(it,{$side:e,onClick:o=>o.stopPropagation(),role:"group","aria-label":"React to this photo",children:t.map(o=>{const i=n[o]??0;return r.jsxs(st,{type:"button","aria-label":`React ${o}${i?` — ${i}`:""}`,onClick:s=>{s.stopPropagation(),a(o)},children:[r.jsx("span",{"aria-hidden":"true",children:o}),i>0&&r.jsx(lt,{children:ke(i)})]},o)})})}function ct({order:e=$e,counts:t,onReact:n}){const a=Math.ceil(e.length/2),o=e.slice(0,a),i=e.slice(a);return r.jsxs(r.Fragment,{children:[r.jsx(ne,{side:"left",emojis:o,counts:t,onReact:n}),r.jsx(ne,{side:"right",emojis:i,counts:t,onReact:n})]})}var oe=m.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  background: ${e=>`color-mix(in srgb, ${h(e).colors.background.secondary} 60%, transparent)`};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: ${e=>h(e).colors.text.primary};
  font-size: 0.78rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  opacity: ${e=>e.$hint?.5:1};
`,dt=m.span`
  display: inline-flex;
  align-items: center;
  gap: 0.12rem;
  white-space: nowrap;
`,ae=3;function ut({counts:e,hintEmojis:t=$e}){const n=Object.entries(e).filter(a=>(a[1]??0)>0).sort((a,o)=>o[1]-a[1]).slice(0,ae);return n.length===0?r.jsx(oe,{$hint:!0,"aria-hidden":"true",children:t.slice(0,ae).map(a=>r.jsx("span",{children:a},a))}):r.jsx(oe,{"aria-hidden":"true",children:n.map(([a,o])=>r.jsxs(dt,{children:[r.jsx("span",{children:a}),r.jsx("span",{children:ke(o)})]},a))})}function N(e){return e.tags&&e.tags.length>0?e.tags:e.category?[e.category]:[]}function mt(e,t){return t==="all"?[...e]:e.filter(n=>N(n).includes(t))}function ie(e){return e.id??e.src}function H(e){var t;return((t=e.split("/").pop())==null?void 0:t.replace(/\.[^.]+$/,""))??e}function se(e){const t=document.createElement("textarea");t.value=e,t.style.cssText="position:fixed;opacity:0;pointer-events:none",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function le(e){navigator.clipboard?navigator.clipboard.writeText(e).catch(()=>se(e)):se(e)}function pt(e,t){navigator.share?navigator.share({url:e}).catch(()=>{le(e),t()}):(le(e),t())}function q(e){return e.colors.onPrimary??e.colors.text.primary}var ht=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  ${e=>e.$overlay?`
  position: absolute;
  left: 0.5rem;
  right: 3.75rem;
  bottom: 0.5rem;
  z-index: 3;
  justify-content: flex-start;
  `:`
  justify-content: center;
  `}
`,ft=(e,t)=>t?h(e).colors.primary:`color-mix(in srgb, ${h(e).colors.background.secondary} 60%, transparent)`,gt=m.span`
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.55rem;
  font-size: 0.65rem;
  font-weight: ${e=>e.$active?600:500};
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-radius: 9999px;
  border: 1px solid
    ${e=>e.$active?h(e).colors.primary:`color-mix(in srgb, ${h(e).colors.primary} 35%, transparent)`};
  background: ${e=>ft(e,e.$active)};
  color: ${e=>e.$active?q(h(e)):h(e).colors.text.primary};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  cursor: ${e=>e.$interactive?"pointer":"default"};
  user-select: none;
  transition: border-color 200ms, background 200ms, color 200ms;

  ${e=>e.$interactive?`
  &:hover {
    border-color: ${h(e).colors.primary};
    background: ${e.$active?h(e).colors.primary:`color-mix(in srgb, ${h(e).colors.primary} 30%, transparent)`};
  }
  `:""}
`;function je({tags:e,activeTag:t,onSelect:n,placement:a="inline"}){if(e.length===0)return null;const o=n!==void 0;return r.jsx(ht,{$overlay:a==="overlay","data-tag-pills":"",onClick:o?void 0:i=>i.stopPropagation(),children:e.map(i=>{const s=i===t,c=v=>{v.preventDefault(),v.stopPropagation(),n==null||n(i)};return r.jsx(gt,{as:o?"button":"span",type:o?"button":void 0,$active:s,$interactive:o,"aria-pressed":o?s:void 0,"aria-label":o?`Filter ${i}`:void 0,"data-tag-pill":i,onClick:o?c:void 0,children:i},i)})})}var xt=m.div`
  position: fixed;
  inset: 0;
  z-index: 1200;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
`,yt=m.div`
  position: absolute;
  top: max(1.5rem, env(safe-area-inset-top));
  left: max(1.5rem, env(safe-area-inset-left));
  right: max(1.5rem, env(safe-area-inset-right));
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1201;
`,ce=m.button`
  background: none;
  border: none;
  color: ${e=>h(e).colors.text.primary};
  cursor: pointer;
  padding: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  transition: opacity 200ms;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`,de=m.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${e=>e.$side==="left"?"left: 1.5rem;":"right: 1.5rem;"}
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: ${e=>h(e).colors.text.primary};
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 50%;
  z-index: 1201;
  transition: background 200ms;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 480px) {
    ${e=>e.$side==="left"?"left: max(0.5rem, env(safe-area-inset-left));":"right: max(0.5rem, env(safe-area-inset-right));"}
    padding: 0.875rem;
  }
`,bt=m.div`
  max-width: min(90vw, 74vw);
  max-height: 85vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div,
  & img,
  & canvas,
  & picture {
    max-width: min(90vw, 74vw);
    max-height: 85vh;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    max-width: 74vw;
    & > div,
    & img,
    & canvas,
    & picture {
      max-width: 74vw;
    }
  }
`,vt=m.div`
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.35);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9);
  pointer-events: none;
  user-select: none;
  z-index: 10;
`,wt=m.div`
  position: absolute;
  bottom: max(3.25rem, calc(env(safe-area-inset-bottom) + 2.25rem));
  left: 50%;
  transform: translateX(-50%);
  max-width: min(90vw, 74vw);
  z-index: 1201;
`,$t=m.span`
  position: absolute;
  bottom: max(1.5rem, calc(env(safe-area-inset-bottom) + 0.5rem));
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.875rem;
  color: ${e=>h(e).colors.text.muted};
`,ue=()=>{};function kt({images:e,currentIndex:t,onClose:n,onNavigate:a,watermark:o,reactionCounts:i,reactionOrder:s,onReact:c,tags:v,PhotoImage:j=we,onInteraction:w=ue,onShared:p=ue}){const u=t>0,f=t<e.length-1,x=l.useCallback(g=>{g.key==="Escape"&&(w("close"),n()),g.key==="ArrowLeft"&&u&&(w("prev"),a(t-1)),g.key==="ArrowRight"&&f&&(w("next"),a(t+1))},[t,u,f,n,a,w]);l.useEffect(()=>(document.addEventListener("keydown",x),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",x),document.body.style.overflow=""}),[x]);const $=l.useCallback(()=>{w("share"),pt(window.location.href,p)},[w,p]),b=e[t];return b?r.jsxs(xt,{onClick:n,onContextMenu:g=>g.preventDefault(),children:[r.jsxs(yt,{children:[r.jsx(ce,{onClick:g=>{g.stopPropagation(),$()},"aria-label":"Share this photo",type:"button",children:r.jsx(Ct,{})}),r.jsx(ce,{onClick:()=>{w("close"),n()},"aria-label":"Close",children:r.jsx(jt,{})})]}),u&&r.jsx(de,{$side:"left",onClick:g=>{g.stopPropagation(),w("prev"),a(t-1)},"aria-label":"Previous",children:r.jsx(me,{direction:"left"})}),r.jsxs(bt,{onClick:g=>g.stopPropagation(),children:[r.jsx(j,{src:b.src,webpSrc:b.webpSrc,alt:b.alt,restoreKey:b.restoreKey,intrinsicWidth:b.intrinsicWidth,intrinsicHeight:b.intrinsicHeight,objectFit:"contain",borderRadius:"0",loading:"eager"}),o&&r.jsx(vt,{children:o})]}),f&&r.jsx(de,{$side:"right",onClick:g=>{g.stopPropagation(),w("next"),a(t+1)},"aria-label":"Next",children:r.jsx(me,{direction:"right"})}),i&&c&&r.jsx(ct,{order:s,counts:i,onReact:c}),v&&v.length>0&&r.jsx(wt,{onClick:g=>g.stopPropagation(),children:r.jsx(je,{tags:v,placement:"inline"})}),r.jsxs($t,{children:[t+1," / ",e.length]})]}):null}function jt(){return r.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r.jsx("path",{d:"M18 6 6 18M6 6l12 12"})})}function Ct(){return r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[r.jsx("circle",{cx:"18",cy:"5",r:"3"}),r.jsx("circle",{cx:"6",cy:"12",r:"3"}),r.jsx("circle",{cx:"18",cy:"19",r:"3"}),r.jsx("path",{d:"m8.59 13.51 6.83 3.98M15.41 6.51 8.59 10.49"})]})}function me({direction:e}){const t=e==="left"?"m15 18-6-6 6-6":"m9 18 6-6-6-6";return r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r.jsx("path",{d:t})})}var Tt=m.div`
  columns: ${e=>e.$columns};
  column-gap: 1rem;

  @media (max-width: 900px) {
    columns: 2;
  }

  @media (max-width: 480px) {
    columns: 1;
  }
`,Rt=m.div`
  break-inside: avoid;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: transform 300ms, box-shadow 300ms;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  position: relative;

  &:hover {
    box-shadow: 0 8px 30px ${e=>`color-mix(in srgb, ${h(e).colors.primary} 15%, transparent)`};
  }
`,St=m.div`
  filter: ${e=>e.$blurred?"blur(14px)":"none"};
  opacity: ${e=>e.$blurred?"0.7":"1"};
  transition: filter 300ms ease, opacity 300ms ease;
`,Et=m.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>`color-mix(in srgb, ${h(e).colors.background.secondary} 15%, transparent)`};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`,Ot=m.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,Ft=m.button`
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: ${e=>e.$active?600:500};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-radius: 9999px;
  border: 1px solid ${e=>e.$active?h(e).colors.primary:`color-mix(in srgb, ${h(e).colors.primary} 35%, transparent)`};
  background: ${e=>e.$active?h(e).colors.primary:`color-mix(in srgb, ${h(e).colors.primary} 8%, transparent)`};
  color: ${e=>e.$active?q(h(e)):h(e).colors.text.secondary};
  cursor: pointer;
  transition: border-color 200ms, background 200ms, color 200ms;

  &:hover {
    border-color: ${e=>h(e).colors.primary};
    background: ${e=>e.$active?h(e).colors.primary:`color-mix(in srgb, ${h(e).colors.primary} 14%, transparent)`};
    color: ${e=>e.$active?q(h(e)):h(e).colors.primary};
  }
`,pe=["new","glamour","casual","portrait","suggestive","headshot","lifestyle","pink-hair","nude"];function W(e){return e.reactionKey??e.src}function Lt(e){return[...e].sort((t,n)=>{const a=pe.indexOf(t),o=pe.indexOf(n);return a!==-1&&o!==-1?a-o:a!==-1?-1:o!==-1?1:t.localeCompare(n)})}function Mt({itemRef:e,onClick:t,children:n}){return r.jsx(Rt,{ref:e,onClick:t,children:n})}function Pt({renderTile:e,...t}){return e(t)}var G=()=>{},_t={revealed:!0,triggerReveal:G};function Bt({images:e,columns:t=3,initialCategory:n,initialSelectedSlug:a,watermark:o,PhotoImage:i=we,reactions:s,showFilter:c=!0,showTagPills:v=!1,blurReveal:j=_t,renderTile:w=Mt,onInteraction:p=G,onTrackInteraction:u=G,onSelectedSlugChange:f=G,onCategoryChange:x=G}){const $=a?e.findIndex(d=>H(d.src)===a):-1,[b,g]=l.useState($>=0?$:null),[C,P]=l.useState(n??(e.some(d=>N(d).includes("new"))?"new":"all")),[k,S]=l.useState(e),{revealed:O,triggerReveal:D,getStaggerDelay:_}=j,[I,B]=l.useState(()=>new Set),y=l.useRef(new Map),E=mt(e,C),V=l.useRef({filteredImages:E,getStaggerDelay:_});V.current={filteredImages:E,getStaggerDelay:_};const Z=l.useRef(O);l.useLayoutEffect(()=>{const d=O&&!Z.current;if(Z.current=O,!d)return;const{filteredImages:F,getStaggerDelay:T}=V.current,R=new Map;for(const z of F){const K=y.current.get(ie(z)),M=K&&T?T(K):0;M>0&&R.set(z.src,M)}if(R.size===0)return;B(new Set(R.keys()));const L=[...R].map(([z,K])=>setTimeout(()=>{B(M=>{if(!M.has(z))return M;const re=new Set(M);return re.delete(z),re})},K));return()=>{L.forEach(clearTimeout),B(new Set)}},[O]);const ee=l.useCallback(d=>{p("filter"),u({type:"click",data:{elementType:"button",eventName:"gallery_filter",eventLabel:d,feature:"gallery",action:"filter",default_state:C,resulting_state:d}}),P(d),x(d)},[p,C,u,x]),Oe=l.useCallback((d,F)=>{var R;p("open"),S(d),g(F);const T=(R=d[F])==null?void 0:R.src;if(T){const L=H(T);f(L),u({type:"click",data:{elementType:"other",eventName:"photo_open",eventLabel:L}})}},[p,f,u]),Fe=l.useCallback(()=>{g(null),f(null)},[f]),Le=l.useCallback(d=>{var T;g(d);const F=(T=k[d])==null?void 0:T.src;if(F){const R=H(F);f(R),u({type:"click",data:{elementType:"other",eventName:"gallery_navigate",eventLabel:R,feature:"gallery",action:"navigate",resulting_state:String(d)}})}},[k,f,u]),te=["all",...Lt(Array.from(new Set(e.flatMap(N))))],Me=Math.min(E.length,t),A=b!==null?k[b]:void 0;return r.jsxs(r.Fragment,{children:[c&&te.length>2&&r.jsx(Ot,{children:te.map(d=>r.jsx(Ft,{$active:C===d,onClick:()=>ee(d),children:d},d))}),r.jsx(Tt,{$columns:Me,children:E.map((d,F)=>{const T=!O||I.has(d.src),R=ie(d);return r.jsxs(Pt,{renderTile:w,image:d,index:F,itemRef:L=>{L?y.current.set(R,L):y.current.delete(R)},onClick:L=>{O?Oe(E,F):(L.preventDefault(),p("reveal-hover"),D())},children:[r.jsx(St,{$blurred:T,"data-blurred":T?"true":void 0,children:r.jsx(i,{src:d.src,webpSrc:d.webpSrc,alt:d.alt,restoreKey:d.restoreKey,intrinsicWidth:d.intrinsicWidth,intrinsicHeight:d.intrinsicHeight,borderRadius:"8px"})}),T&&r.jsx(Et,{children:r.jsx(At,{})}),!T&&s&&r.jsx(ut,{counts:s.countsFor(W(d))}),!T&&v&&r.jsx(je,{placement:"overlay",tags:N(d),activeTag:C,onSelect:c?ee:void 0})]},R)})}),A&&b!==null&&r.jsx(kt,{images:k,currentIndex:b,onClose:Fe,onNavigate:Le,watermark:o,reactionCounts:s==null?void 0:s.countsFor(W(A)),reactionOrder:s==null?void 0:s.orderFor(W(A)),tags:v?N(A):void 0,onReact:s?d=>s.react(W(A),d):void 0})]})}function At(){return r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",style:{opacity:.75},"aria-hidden":"true",children:[r.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),r.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}const U=["🔥","😍","💋","🥵","👅","🍑","🍆","💦","😈"],Ce=50;function zt(e){return`${be()}/www/gallery-reactions`}async function Nt(e){try{const t=await fetch(zt(e),{headers:{Accept:"application/json"}});return t.ok?(await t.json()).reactions??{}:{}}catch{return{}}}function Gt(e,t,n,a,o){const i=JSON.stringify({src:n,emoji:a,delta:o});if(typeof navigator<"u"&&typeof navigator.sendBeacon=="function"){const s=new Blob([i],{type:"application/json"});if(navigator.sendBeacon(e,s))return}fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:i,keepalive:!0}).catch(()=>{})}function Dt(e){const t=`${be()}/www/gallery-reactions`;let n=Math.floor(e.delta);if(!(!Number.isFinite(n)||n<1))for(;n>0;){const a=Math.min(n,Ce);Gt(t,e.provider,e.src,e.emoji,a),n-=a}}const It=900,Kt=(e,t)=>`${e} ${t}`;function Wt(e){const[t,n]=l.useState({}),[a,o]=l.useState({}),i=l.useRef(new Map),s=l.useRef(null);l.useEffect(()=>{let p=!0;return Nt(e).then(u=>{p&&n(u)}).catch(()=>{}),()=>{p=!1}},[e]);const c=l.useCallback(()=>{s.current&&(clearTimeout(s.current),s.current=null);const p=i.current;if(p.size!==0){for(const{src:u,emoji:f,delta:x}of p.values())x>0&&Dt({provider:e,src:u,emoji:f,delta:x});p.clear()}},[e]),v=l.useCallback((p,u)=>{o(b=>{const g={...b},C={...g[p]??{}};return C[u]=(C[u]??0)+1,g[p]=C,g});const f=Kt(p,u),x=i.current.get(f),$=((x==null?void 0:x.delta)??0)+1;if(i.current.set(f,{src:p,emoji:u,delta:$}),$>=Ce){c();return}s.current&&clearTimeout(s.current),s.current=setTimeout(c,It)},[c]);l.useEffect(()=>{const p=()=>c(),u=()=>{document.visibilityState==="hidden"&&c()};return window.addEventListener("pagehide",p),document.addEventListener("visibilitychange",u),()=>{window.removeEventListener("pagehide",p),document.removeEventListener("visibilitychange",u),c()}},[c]);const j=l.useCallback(p=>{const u=t[p],f=a[p];if(!u&&!f)return{};const x={...u};if(f)for(const[$,b]of Object.entries(f))x[$]=(x[$]??0)+b;return x},[t,a]),w=l.useCallback(p=>{const u=t[p]??{};return[...U].sort((f,x)=>{const $=(u[x]??0)-(u[f]??0);return $!==0?$:U.indexOf(f)-U.indexOf(x)})},[t]);return{countsFor:j,orderFor:w,react:v}}const Ht=m.div`
  ${Ke}
  break-inside: avoid;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: transform 300ms, box-shadow 300ms;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  position: relative;
  will-change: transform;

  &:hover {
    box-shadow: 0 8px 30px ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 15%, transparent)`};
  }
`;function Ut({image:e,itemRef:t,onClick:n,children:a}){const o=Ge(),{surfaceProps:i}=De(o),{onMouseEnter:s,...c}=i;return r.jsx(Ht,{ref:t,[Ie]:"",...c,"data-magic-card":o,onMouseEnter:s,onMouseOver:s,onClick:n,"data-gallery-src":e.src,children:a})}function Yt({images:e,columns:t=3,initialCategory:n,showFilter:a,showTagPills:o,ownsCategory:i=!1}){const[s,c]=xe(),v=ye(),j=Pe(),{trackInteraction:w}=_e(),{brand:p}=Be(),u=Wt(),f=Ae(),x=s.get("photo")??void 0,$=i?n:s.get("tag")??n??void 0,b=l.useCallback(k=>{k==="open"?j.quadrant.click():j.button.click()},[j]),g=l.useCallback(k=>{const S=k.data.elementType,O={...k.data,elementType:S,pageUrl:window.location.href,segment:v??"default"};w({type:k.type,data:O})},[w,v]),C=l.useCallback(k=>{c(S=>(k?S.set("photo",k):S.delete("photo"),S),{replace:!0})},[c]),P=l.useCallback(k=>{c(S=>(k==="all"?S.delete("tag"):S.set("tag",k),S),{replace:!0})},[c]);return r.jsx(Bt,{images:e,columns:t,initialCategory:$,initialSelectedSlug:x,watermark:p.domain,PhotoImage:Ne,reactions:u,showFilter:a,showTagPills:o,blurReveal:{revealed:f.revealed,triggerReveal:f.triggerReveal,getStaggerDelay:ze},renderTile:Ut,onInteraction:b,onTrackInteraction:g,onSelectedSlugChange:C,onCategoryChange:P})}function Xt(e,t="400px"){const[n,a]=l.useState(0);return l.useEffect(()=>{const o=e.current;if(!o||typeof IntersectionObserver>"u")return;const i=new IntersectionObserver(s=>{s.some(c=>c.isIntersecting)&&a(c=>c+1)},{rootMargin:t});return i.observe(o),()=>i.disconnect()},[e,t]),n}const qt=["new","glamour","casual","portrait","suggestive","headshot","lifestyle","pink-hair","nude"];function Te(e){return e.tags&&e.tags.length>0?e.tags:e.category?[e.category]:[]}function Q(e){var n;if(e.shootId!==void 0&&e.shootId!==null&&String(e.shootId)!=="")return`id:${e.shootId}`;const t=(n=e.shootTitle)==null?void 0:n.trim();return t?`title:${t}`:"ungrouped"}function Re(e){const t=[],n=new Map;for(const o of e){const i=Q(o),s=n.get(i);s?s.push(o):(n.set(i,[o]),t.push(i))}return t.map(o=>{var j;const i=n.get(o)??[];if(o==="ungrouped")return{key:o,title:null,shotOn:null,images:i};const s=i[0],c=((j=s==null?void 0:s.shootTitle)==null?void 0:j.trim())||null,v=(s==null?void 0:s.shotOn)??null;return{key:o,title:c,shotOn:v,images:i}}).sort((o,i)=>o.shotOn&&i.shotOn?i.shotOn.localeCompare(o.shotOn):o.shotOn&&!i.shotOn?-1:!o.shotOn&&i.shotOn?1:0)}const J="new",Jt=1,Y=12;function Qt(e){return e.reduce((t,n)=>t+n.images.length,0)}function Vt(e,t){const n=[];let a=Math.max(0,t);for(const o of e){if(a<=0)break;n.push({category:o.category,images:o.images.slice(0,a)}),a-=o.images.length}return n}function Se(e){const t=Re(e).filter(n=>n.shotOn!==null);return new Set(t.slice(0,Jt).map(n=>n.key))}function Zt(e){return Re(e).flatMap(t=>t.images)}function he(e){const t=qt.indexOf(e);return t===-1?Number.MAX_SAFE_INTEGER:t}function Ee(e){const t=Se(e),n=e.some(o=>t.has(Q(o))),a=[...new Set(e.flatMap(o=>[...Te(o)]))].filter(o=>o!==J).sort((o,i)=>he(o)-he(i)||o.localeCompare(i));return n?[J,...a]:a}function er(e,t){const n=Ee(e);if(t==="all")return n;const a=n.indexOf(t);return a===-1?n:n.slice(a)}function tr(e,t,n){return t===J?n.has(Q(e)):Te(e).includes(t)}function rr(e,t){const n=Se(e),a=new Set,o=[];for(const i of er(e,t)){const s=Zt(e.filter(c=>!a.has(c.src)&&tr(c,i,n)));if(s.length!==0){for(const c of s)a.add(c.src);o.push({category:i,images:s})}}return o}const nr=9,fe=["320px","240px","380px","280px","340px","220px","360px","260px","300px"],or=m.div`
  columns: 3;
  column-gap: 1rem;

  @media (max-width: 900px) { columns: 2; }
  @media (max-width: 480px) { columns: 1; }
`,ar=m(Ve)`
  break-inside: avoid;
  margin-bottom: 1rem;
  width: 100%;
`,ir=m.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,sr=m.button`
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: ${e=>e.$active?600:500};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-radius: 9999px;
  border: 1px solid ${e=>e.$active?e.theme.colors.primary:`color-mix(in srgb, ${e.theme.colors.primary} 35%, transparent)`};
  background: ${e=>e.$active?e.theme.colors.primary:`color-mix(in srgb, ${e.theme.colors.primary} 8%, transparent)`};
  color: ${e=>e.$active?Qe(e.theme):e.theme.colors.text.secondary};
  cursor: pointer;
`,lr=m.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,cr=m.header`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1.5rem;
  margin-bottom: 1.25rem;
`,dr=m.h2`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
  color: ${e=>e.theme.colors.primary};
  margin: 0;
`,ur=m.div`
  width: 100%;
  height: 1px;
`;function fr(){const e=We("gallery","section_title","Gallery");He();const t=Ue(),n=Ye(),a=Xe(),o=qe(),i=ye(),[s,c]=xe(),v=i==="clients"?"headshot":"all",j=s.get("tag"),[w,p]=l.useState(j??v),u=l.useMemo(()=>["all",...Ee(t.gallery)],[t.gallery]),f=l.useMemo(()=>w==="all"||u.includes(w)?w:"all",[w,u]),x=l.useMemo(()=>rr(t.gallery,f),[t.gallery,f]),$=l.useMemo(()=>Qt(x),[x]),[b,g]=l.useState(Y);l.useEffect(()=>{g(Y)},[f]);const C=l.useRef(null),P=b<$,k=Xt(C);l.useEffect(()=>{k!==0&&g(y=>Math.min(y+Y,$))},[k,$]);const S=l.useMemo(()=>Vt(x,b),[x,b]),O=l.useCallback(y=>{p(y),c(E=>(y==="all"?E.delete("tag"):E.set("tag",y),E),{replace:!0})},[c]),D=n&&t.gallery.length===0,_=!n&&a&&t.gallery.length===0,I=o&&!a&&t.gallery.length===0,B=D||I||_?"":`${$} photos`;return r.jsx(Je,{title:e,subtitle:B,headingLevel:1,children:I?r.jsx(at,{subject:"gallery"}):D?r.jsx(or,{"aria-busy":"true","aria-label":"Loading gallery",children:Array.from({length:nr},(y,E)=>r.jsx(ar,{$height:fe[E%fe.length],$radius:"8px"},E))}):_?r.jsx(ot,{subject:"gallery"}):r.jsxs(r.Fragment,{children:[u.length>2&&r.jsx(ir,{role:"group","aria-label":"Filter gallery",children:u.map(y=>r.jsx(sr,{type:"button",$active:f===y,"data-active":f===y?"true":void 0,"aria-label":y==="all"?"Show all photos":`Filter ${y}`,onClick:()=>O(y),children:y},y))}),S.map(y=>r.jsxs(lr,{"data-category":y.category,children:[r.jsx(cr,{children:r.jsx(dr,{children:y.category})}),r.jsx(Yt,{images:y.images,columns:3,showFilter:!1,showTagPills:!0,ownsCategory:!0,initialCategory:"all"})]},y.category)),P&&r.jsx(ur,{ref:C,"data-gallery-sentinel":!0,"aria-hidden":"true"})]})})}export{fr as default};
//# sourceMappingURL=GalleryPage-CuaeaoTT.js.map
