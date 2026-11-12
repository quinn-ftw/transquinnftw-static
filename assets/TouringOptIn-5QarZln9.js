import{a5 as N,r as p,g as O,a4 as P,s as W,p as i,j as r,av as F,X as A,a as t,b as G,l as U}from"./index-DBvZCzBm.js";import{R as v}from"./client-Cjg1XvbA.js";import{F as B,a as x,W as D,i as Q}from"./WriteOutageNotice-CT8Bjivk.js";import{C as Y}from"./circle-alert-2nX0nLA0.js";import{L as q}from"./loader-DC59dBk5.js";async function J(e){var c;const g=N(),l=e.sourceCity??((c=e.citiesInterested)==null?void 0:c[0]);let s;try{s=await fetch(`/public/touring/subscribe?slug=${encodeURIComponent(g)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,city:l,source:e.source})})}catch(n){throw new Error(n instanceof Error?n.message:"Failed to fetch")}if(s.status===429)throw new v;if(!s.ok){const n=await s.json().catch(()=>({}));throw new Error(n.error??n.message??`Request failed: ${s.status}`)}return{id:0,status:"subscribed"}}const V=U`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,w=t.div`
  margin-top: 1.5rem;
  padding: 1.25rem 1.5rem;
  background: rgba(12, 10, 22, 0.7);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 10%, transparent);
  border-radius: 10px;
`,X=t.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: color-mix(in srgb, ${e=>e.theme.colors.primary} 70%, transparent);
  margin: 0 0 0.75rem;
`,H=t.div`
  display: flex;
  gap: 0.625rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,$=G`
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 80%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 15%, transparent);
  border-radius: 6px;
  padding: 0.6rem 0.875rem;
  font-size: 0.9rem;
  font-family: inherit;
  color: ${e=>e.theme.colors.text.primary};
  outline: none;
  transition: border-color 150ms;
  box-sizing: border-box;

  &::placeholder {
    color: color-mix(in srgb, ${e=>e.theme.colors.text.secondary} 50%, transparent);
  }

  &:focus {
    border-color: color-mix(in srgb, ${e=>e.theme.colors.primary} 45%, transparent);
  }
`,K=t.input`
  ${$}
  flex: 2;
  min-width: 180px;
`,Z=t.input`
  ${$}
  flex: 1;
  min-width: 120px;
`,ee=t.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.25rem;
  background: color-mix(in srgb, ${e=>e.theme.colors.primary} 12%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 35%, transparent);
  border-radius: 6px;
  color: ${e=>e.theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 600;
  font-family: inherit;
  cursor: ${e=>e.$loading?"not-allowed":"pointer"};
  opacity: ${e=>e.$loading?.6:1};
  white-space: nowrap;
  transition: background 150ms, border-color 150ms;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    background: color-mix(in srgb, ${e=>e.theme.colors.primary} 20%, transparent);
    border-color: color-mix(in srgb, ${e=>e.theme.colors.primary} 60%, transparent);
  }
`,re=t(q)`
  animation: ${V} 1s linear infinite;
`,te=t.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: color-mix(in srgb, ${e=>e.theme.colors.primary} 85%, transparent);
  font-size: 0.9rem;
`,oe=t.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.625rem;
  color: #e05c5c;
  font-size: 0.85rem;
`;function le({source:e,sourceCity:g}){var f;const[l,s]=p.useState(""),[c,n]=p.useState(""),[o,b]=p.useState("idle"),[m,d]=p.useState(""),{trackInteraction:j}=O(),_=P("touring"),k=W(),C=i("touring_optin","success_message","We'll let you know when Quinn is heading your way."),E=i("touring_optin","error_invalid_email","Please enter a valid email address."),S=i("touring_optin","error_network","Network error. Please check your connection and try again."),I=i("touring_optin","form_label","Get notified when Quinn is near you"),z=i("touring_optin","email_placeholder","your@email.com"),T=i("touring_optin","city_placeholder","Your city or region (optional)"),L=i("touring_optin","submitting_label","Saving…"),R=i("touring_optin","submit_label","Notify Me");if(!_.enabled)return r.jsx(B,{});if(o==="success")return r.jsx(w,{children:r.jsxs(te,{children:[r.jsx(F,{size:16}),C]})});async function M(a){a.preventDefault();const h=l.trim();if(!h||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h)){d(E);return}b("submitting"),d("");try{await J({email:h,citiesInterested:c.trim()?[c.trim()]:void 0,source:e,sourceCity:g||void 0}),j({type:"click",data:{elementType:"form",eventName:"touring_subscribe",eventLabel:e,pageUrl:window.location.href}}),b("success")}catch(u){if(u instanceof v)d(u.message);else{const y=u instanceof Error?u.message:S;d(Q(y)?x:y)}b("error")}}return r.jsxs(w,{children:[r.jsxs(X,{children:[r.jsx(A,{size:12,style:{verticalAlign:"middle",marginRight:"0.3rem"}}),I]}),r.jsxs("form",{onSubmit:a=>{M(a)},noValidate:!0,children:[r.jsxs(H,{children:[r.jsx(K,{type:"email",placeholder:z,value:l,onChange:a=>s(a.target.value),autoComplete:"email",disabled:o==="submitting"}),r.jsx(Z,{type:"text",placeholder:T,value:c,onChange:a=>n(a.target.value),autoComplete:"address-level2",disabled:o==="submitting"}),r.jsx(ee,{type:"submit",$loading:o==="submitting",disabled:o==="submitting",children:o==="submitting"?r.jsxs(r.Fragment,{children:[r.jsx(re,{size:14})," ",L]}):R})]}),o==="error"&&m===x&&r.jsx(D,{phone:((f=k.contact)==null?void 0:f.phone)??""}),o==="error"&&m&&m!==x&&r.jsxs(oe,{children:[r.jsx(Y,{size:14}),m]})]})]})}export{le as T};
//# sourceMappingURL=TouringOptIn-5QarZln9.js.map
