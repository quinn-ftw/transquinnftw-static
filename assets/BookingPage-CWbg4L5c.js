import{C as w,G as v,p as n,j as t,M as p,H as b,r as C,g as S,a as o,o as _,x as z,I as u,J as P,W as T,K as f,q as I,s as N,S as $,L as j}from"./index-DBvZCzBm.js";import{M as F,C as L}from"./MessageCircleIcon-CaVWE6wK.js";import{B}from"./BookingForm-CeSxZfob.js";import"./ActivityChecklist-DhCuM_OY.js";import"./phone-BQxk50ay.js";import"./WriteOutageNotice-CT8Bjivk.js";import"./circle-alert-2nX0nLA0.js";/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],A=w("chevron-down",R);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],O=w("chevron-up",M),D=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-bottom: 3rem;
`,E=o.div`
  ${_}
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 60%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 8%, transparent);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
`,W=o.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>{var i,l;return((l=(i=e.theme.extensions)==null?void 0:i.luxe)==null?void 0:l.goldShimmer)??e.theme.colors.primary}};
  color: ${e=>z(e.theme)};
  font-weight: 700;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`,G=o.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 0.5rem;
`,q=o.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.5;
`,H=o.a`
  color: ${e=>e.theme.colors.primary};
`;function Y({phone:e}){const i=v(),l=[{title:n("booking","step_1_title","Text Quinn"),text:n("booking","step_1_body","Available 24/7 — typically booking about a week out, but same-day often works. Send a text with what you have in mind: date, time, how long, in or out. The more you share, the faster I can say yes.")},{title:n("booking","step_2_title","Send Deposit"),text:n("booking","step_2_body","Once we agree on details, a deposit locks it in. I don't start getting ready until it's received — so earlier is better.")},{title:n("booking","step_3_title","Get Confirmed"),text:n("booking","step_3_body","I confirm and share the location if it's incall. You're all set — straightforward, no hand-holding required.")},{title:n("booking","step_4_title","Enjoy"),text:n("booking","step_4_body","Show up. Relax. I'll handle the rest.")}];return t.jsx(D,{children:l.map((a,d)=>t.jsxs(p,{as:E,children:[t.jsx(W,{children:d+1}),t.jsx(G,{"data-magic-title":!0,children:a.title}),t.jsx(q,{children:d===0?t.jsxs(t.Fragment,{children:[a.text.replace("Quinn","")," ",t.jsx(H,{href:`sms:${e}`,onClick:()=>i("booking_link","sms","booking"),children:t.jsx(b,{children:e})})]}):a.text})]},a.title))})}const Q=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,U=o.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 60%, transparent);
  border: 1px solid ${e=>e.$open?`color-mix(in srgb, ${e.theme.colors.primary} 20%, transparent)`:`color-mix(in srgb, ${e.theme.colors.primary} 8%, transparent)`};
  border-radius: ${e=>e.$open?"12px 12px 0 0":"12px"};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 200ms;

  &:hover {
    border-color: color-mix(in srgb, ${e=>e.theme.colors.primary} 25%, transparent);
  }
`,J=o.div`
  padding: 0 1.25rem 1rem;
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 60%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 20%, transparent);
  border-top: none;
  border-radius: 0 0 12px 12px;
`,K=o.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 5%, transparent);

  &:last-child {
    border-bottom: none;
  }
`,V=o.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.primary};
  white-space: nowrap;
`,X=o.span`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`;function Z({policies:e}){const[i,l]=C.useState(new Set),{trackInteraction:a}=S();function d(s){!i.has(s)&&a({type:"click",data:{elementType:"button",eventName:"policy_expand",eventLabel:s,pageUrl:window.location.href}}),l(c=>{const m=new Set(c);return m.has(s)?m.delete(s):m.add(s),m})}return t.jsx(Q,{children:e.map(s=>{const r=i.has(s.title);return t.jsxs("div",{children:[t.jsxs(U,{$open:r,onClick:()=>d(s.title),children:[s.title,r?t.jsx(O,{size:18}):t.jsx(A,{size:18})]}),r&&t.jsx(J,{children:s.items.map(c=>t.jsxs(K,{children:[t.jsx(V,{children:c.label}),t.jsx(X,{children:c.detail})]},c.label))})]},s.title)})})}const ee=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
`,g=o.div`
  ${_}
  background: ${e=>e.theme.colors.background.secondary}99;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.lg};
  padding: ${e=>e.theme.spacing.lg};
`,x=o.h3`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: ${e=>e.theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
`,h=o.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.sm};
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.base};
`,y=o.a`
  color: ${e=>e.theme.colors.text.primary};
  transition: ${e=>e.theme.transitions.fast};

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,k=o.p`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  margin-top: ${e=>e.theme.spacing.xs};
  font-style: italic;
`,te=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.875rem;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  background: ${e=>e.theme.colors.primary}14;
  border: 1px solid ${e=>e.theme.colors.primary}26;
  border-radius: ${e=>e.theme.borderRadius.full};
  color: ${e=>e.theme.colors.text.secondary};
  margin: 0.25rem 0.25rem 0.25rem 0;
`,oe=o.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.875rem;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  background: ${e=>e.theme.colors.primary}14;
  border: 1px solid ${e=>e.theme.colors.primary}26;
  border-radius: ${e=>e.theme.borderRadius.full};
  color: ${e=>e.theme.colors.text.secondary};
  margin: 0.25rem 0.25rem 0.25rem 0;
  text-decoration: none;
  transition: ${e=>e.theme.transitions.fast};

  &:hover {
    background: ${e=>e.theme.colors.primary}26;
    border-color: ${e=>e.theme.colors.primary}40;
    color: ${e=>e.theme.colors.primary};
  }
`;function re({contact:e}){const i=v(),l=n("contact","section_title","Contact"),a=n("contact","label_whatsapp","WhatsApp"),d=n("contact","label_availability","Availability"),s=n("contact","label_payment","Payment");return t.jsxs(ee,{children:[t.jsxs(p,{as:g,children:[t.jsxs(x,{"data-magic-title":!0,children:[t.jsx(u,{size:16})," ",l]}),t.jsxs(h,{children:[t.jsx(u,{size:16,color:"currentColor",style:{opacity:.4}}),t.jsx(y,{href:`sms:${e.phone}`,onClick:()=>i("contact_link","sms","contact"),children:t.jsx(b,{children:e.phone})})]}),e.whatsapp&&t.jsxs(h,{children:[t.jsx(F,{size:16,color:"currentColor",style:{opacity:.4}}),t.jsx(y,{href:`https://wa.me/${e.whatsapp.replace(/[^0-9]/g,"")}`,onClick:()=>i("contact_link","whatsapp","contact"),children:a})]}),e.instagram&&t.jsxs(h,{children:[t.jsx(P,{size:16,color:"currentColor",style:{opacity:.4}}),t.jsxs(y,{href:`https://instagram.com/${e.instagram.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:()=>i("contact_link","instagram"),children:["@",e.instagram.replace("@","")]})]}),t.jsx(k,{children:e.communicationNote})]}),t.jsxs(p,{as:g,children:[t.jsxs(x,{"data-magic-title":!0,children:[t.jsx(L,{size:16})," ",d]}),t.jsx(h,{children:e.responseTime}),e.availabilityNote&&t.jsx(k,{children:e.availabilityNote})]}),t.jsxs(p,{as:g,children:[t.jsxs(x,{"data-magic-title":!0,children:[t.jsx(T,{size:16})," ",s]}),t.jsx("div",{children:e.paymentMethods.map(r=>{const c=r.handle?t.jsxs(t.Fragment,{children:[" ",t.jsx(b,{children:r.handle})]}):null;return r.url?t.jsxs(oe,{href:r.url,target:"_blank",rel:"noopener noreferrer",onClick:()=>i("payment_link",r.method.toLowerCase(),"payment"),children:[f[r.method]??null,r.method,c]},r.method):t.jsxs(te,{children:[f[r.method]??null,r.method,c]},r.method)})})]})]})}const ne=o.div`
  max-width: 780px;
  margin: 0 auto;
`,ie=o.div`
  margin-bottom: 3rem;
  background: ${e=>e.theme.colors.background.secondary}99;
  border: 1px solid ${e=>e.theme.colors.border};
  border-top: 2px solid ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius.lg};
`,se=o.div`
  padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.xl};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,ae=o.h2`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  color: ${e=>e.theme.colors.primary};
  margin: 0;
`,le=o.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.65;
  margin-bottom: 2rem;

  a {
    color: ${e=>e.theme.colors.primary};
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;function ye(){I();const e=n("booking","section_title","Book an Appointment"),i=n("booking","subtitle","Four simple steps"),l=n("booking","section_contact","Contact"),a=N();return t.jsxs(t.Fragment,{children:[t.jsx($,{title:e,subtitle:i,headingLevel:1,id:"booking",children:t.jsxs(ne,{children:[t.jsxs(le,{children:["Not sure what fits your budget? ",t.jsx(j,{to:"/rates",children:"View the full rate card"})," first, or jump straight to the ",t.jsx(j,{to:"/rates#fmty",children:"FMTY section"})," if you're thinking about flying me to you."]}),t.jsx(Y,{phone:a.contact.phone}),t.jsxs(ie,{children:[t.jsx(se,{children:t.jsx(ae,{children:"Reserve a Date"})}),t.jsx(B,{})]}),t.jsx(Z,{policies:a.policies})]})}),t.jsx($,{title:l,id:"contact",children:t.jsx(re,{contact:a.contact})})]})}export{ye as default};
//# sourceMappingURL=BookingPage-CWbg4L5c.js.map
