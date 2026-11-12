import{a5 as Y,r as i,f as J,s as F,p as a,a4 as V,j as t,ar as X,a as n,x as Q,M as Z,as as ee,at as T,o as te,L as oe,g as re,q as ne,S as se,N as ie,F as ae}from"./index-DBvZCzBm.js";import{F as ce,a as _,W as le,i as de}from"./WriteOutageNotice-CT8Bjivk.js";import{s as N,f as v,N as me,S as he,a as ue,C as pe,b as fe}from"./SoldOverlay-iWNDzoi1.js";import"./circle-alert-2nX0nLA0.js";async function ge(e){const o=Y(),r=await fetch(`/entertainer/${encodeURIComponent(o)}/newsletter/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,source:"shop"})});if(!r.ok){const s=await r.json().catch(()=>({error:"Subscription failed"}));throw new Error(s.error??s.message??`Subscription failed: ${r.status}`)}}const be='a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function ye(e){i.useEffect(()=>{const o=document.activeElement instanceof HTMLElement?document.activeElement:null;function r(s){if(s.key!=="Tab")return;const d=e.current;if(!d)return;const m=Array.from(d.querySelectorAll(be));if(m.length===0){s.preventDefault();return}const u=m[0],p=m[m.length-1],h=document.activeElement;s.shiftKey&&(h===u||!d.contains(h))?(s.preventDefault(),p.focus()):!s.shiftKey&&(h===p||!d.contains(h))&&(s.preventDefault(),u.focus())}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r),o==null||o.focus()}},[e])}const xe=n.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.93);
  backdrop-filter: blur(12px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.spacing.xl};

  &:focus {
    outline: none;
  }
`,$e=n.button`
  position: absolute;
  top: ${e=>e.theme.spacing.lg};
  right: ${e=>e.theme.spacing.lg};
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.muted};
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
  justify-content: center;
  display: flex;
  align-items: center;
  transition: ${e=>e.theme.transitions.fast};

  &:hover {
    color: ${e=>e.theme.colors.text.primary};
  }

  ${v}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,ve=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.theme.spacing.xl};
  text-align: center;
  max-width: 440px;
  width: 100%;
`,we=n.p`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.primary};
  margin: 0;
`,Se=n.h1`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.primary};
  line-height: 1.1;
  margin: 0;
`,je=n.p`
  font-size: ${e=>e.theme.typography.fontSize.base};
  color: ${e=>e.theme.colors.text.secondary};
  margin: 0;
  line-height: 1.6;
`,Ee=n.form`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  width: 100%;
`,_e=n.input`
  width: 100%;
  padding: ${e=>e.theme.spacing.md};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.base};
  font-family: inherit;
  text-align: center;
  transition: ${e=>e.theme.transitions.fast};
  box-sizing: border-box;

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }

  &:focus {
    border-color: ${e=>e.theme.colors.primary};
    background: rgba(255, 255, 255, 0.09);
  }

  ${v}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,I=n.p`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.primary};
  margin: -${e=>e.theme.spacing.xs} 0 0;
`,ke=n.button`
  width: 100%;
  min-height: 44px;
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.primary};
  color: ${e=>Q(e.theme)};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: ${e=>e.theme.typography.fontSize.base};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  font-family: inherit;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${e=>e.theme.transitions.fast};

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  ${v}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled) {
      transform: none;
    }
  }
`,ze=n.h2`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${e=>e.theme.colors.primary};
  margin: 0;
`,Ce=n.p`
  font-size: ${e=>e.theme.typography.fontSize.base};
  color: ${e=>e.theme.colors.text.secondary};
  margin: 0;
  line-height: 1.6;
`;function Le({onClose:e}){var P;const o=J(),r=i.useRef(o);r.current=o;const s=F(),d=a("shop_signup","close_label","Close"),m=a("shop_signup","success_heading","You're on the list."),u=a("shop_signup","success_message","I'll let you know the moment the shop opens. Pre-loved finds await."),p=a("shop_signup","eyebrow_label","Coming Soon"),h=a("shop_signup","headline_label",N(s.identity.name)),O=a("shop_signup","tagline","Pre-loved pieces — clothing, accessories, and more. Be first in line when the shop opens."),D=a("shop_signup","email_placeholder","your@email.com"),W=a("shop_signup","email_aria_label","Email address"),B=a("shop_signup","submitting_label","Saving your spot…"),M=a("shop_signup","submit_label","Notify Me"),A=a("shop_signup","error_required_email","Email is required"),q=a("shop_signup","error_invalid_email","Please enter a valid email address"),G=a("shop_signup","error_submit_fallback","Something went wrong. Please try again."),[f,H]=i.useState(""),[g,b]=i.useState(""),[l,w]=i.useState("idle"),[y,k]=i.useState(""),z=V("newsletter"),x=i.useId(),C=i.useId(),K=l==="success",S=i.useRef(null),j=i.useRef(null);ye(S),i.useEffect(()=>{var c;(c=j.current??S.current)==null||c.focus()},[K,z.enabled]),i.useEffect(()=>{var c;l==="error"&&((c=j.current)==null||c.focus())},[l]),i.useEffect(()=>{r.current.modal.open()},[]);const E=i.useCallback(()=>{o.modal.close(),e()},[o,e]);i.useEffect(()=>{function c($){$.key==="Escape"&&E()}return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[E]);function L(){return f.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f)?(b(""),!0):(b(q),!1):(b(A),!1)}async function U(c){if(c.preventDefault(),!!L()){w("submitting"),k("");try{await ge(f.trim()),w("success")}catch($){w("error");const R=$ instanceof Error?$.message:G;k(de(R)?_:R)}}}return t.jsxs(xe,{ref:S,role:"dialog","aria-modal":"true","aria-labelledby":x,tabIndex:-1,children:[t.jsx($e,{onClick:E,"aria-label":d,children:t.jsx(X,{size:20})}),t.jsx(ve,{children:z.enabled?l==="success"?t.jsxs(t.Fragment,{children:[t.jsx(ze,{id:x,children:m}),t.jsx(Ce,{children:u})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{children:[t.jsx(we,{children:p}),t.jsx(Se,{id:x,children:h})]}),t.jsx(je,{children:O}),t.jsxs(Ee,{onSubmit:U,noValidate:!0,children:[t.jsxs("div",{children:[t.jsx(_e,{type:"email",placeholder:D,value:f,onChange:c=>{H(c.target.value),b("")},onBlur:L,autoComplete:"email",disabled:l==="submitting","aria-label":W,"aria-invalid":g?!0:void 0,"aria-describedby":g?C:void 0,ref:j}),g&&t.jsx(I,{id:C,children:g})]}),l==="error"&&y===_&&t.jsx(le,{phone:((P=s.contact)==null?void 0:P.phone)??""}),l==="error"&&y&&y!==_&&t.jsx(I,{role:"alert",children:y}),t.jsx(ke,{type:"submit",disabled:l==="submitting",children:l==="submitting"?B:M})]})]}):t.jsx(ce,{titleId:x})})]})}const Pe=n(oe)`
  ${te}
  display: block;
  background: ${e=>e.theme.colors.background.secondary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
  text-decoration: none;
  transition: ${e=>e.theme.transitions.fast};

  &:hover {
    border-color: ${e=>e.theme.colors.primary}66;
    transform: translateY(-2px);
  }

  ${v}

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`,Re=n.div`
  position: relative;
  aspect-ratio: 4 / 5;
  background: ${e=>e.theme.colors.background.tertiary};
  overflow: hidden;
`,Te=n.div`
  padding: ${e=>e.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Ie=n.h2`
  font-size: ${e=>e.theme.typography.fontSize.base};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Fe=n.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.sm};
`,Ne=n.span`
  font-size: ${e=>e.theme.typography.fontSize.base};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  color: ${e=>e.theme.colors.primary};
`;function Oe({listing:e}){const o=e.photos[0];return t.jsxs(Z,{as:Pe,to:`/shop/${e.slug}`,children:[t.jsxs(Re,{children:[o?t.jsx(ee,{src:o.src,webpSrc:o.webpSrc,intrinsicWidth:o.width,intrinsicHeight:o.height,alt:"",objectFit:"cover",width:"100%",height:"100%",borderRadius:"0",noBorder:!0,loading:"lazy"}):t.jsx(me,{}),e.status==="sold"&&t.jsx(he,{})]}),t.jsxs(Te,{children:[t.jsx(Ie,{"data-magic-title":!0,children:e.title}),t.jsxs(Fe,{children:[t.jsx(Ne,{children:ue(e.price)}),t.jsx(T,{variant:"neutral",children:pe[e.condition]??e.condition}),e.status==="on_hold"&&t.jsx(T,{variant:"neutral",children:"On hold"})]})]})]})}const De=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${e=>e.theme.spacing.lg};

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${e=>e.theme.spacing.sm};
  }
`;function We({listings:e}){const o=[...e.filter(r=>r.status==="available"),...e.filter(r=>r.status==="on_hold"),...e.filter(r=>r.status==="sold")];return t.jsx(De,{children:o.map(r=>t.jsx(Oe,{listing:r},r.id))})}function Be(e){const{track:o}=re(),r=e&&e.length>0?JSON.stringify(e):"";i.useEffect(()=>{if(r==="")return;const s=JSON.parse(r);o("shop_rows_dropped",{count:s.length,rows:s})},[r,o])}function Me(){const e=ie();function o(){e("/")}return i.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),ae.createPortal(t.jsx(Le,{onClose:o}),document.body)}function Ke(){ne();const e=F(),o=e.shop??[];if(Be(e.shopDropped),o.length===0)return t.jsx(Me,{});const r=o.filter(s=>s.status==="available").length;return t.jsx(se,{title:N(e.identity.name),subtitle:fe(r),headingLevel:1,children:t.jsx(We,{listings:o})})}export{Ke as default};
//# sourceMappingURL=ShopPage-C5_Svdg_.js.map
