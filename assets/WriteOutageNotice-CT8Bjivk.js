import{s as m,p as a,j as t,a as i,x as u}from"./index-DBvZCzBm.js";import{C as n}from"./circle-alert-2nX0nLA0.js";const h=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  padding: 1.75rem 1.5rem;
  border: 1px solid ${e=>e.theme.colors.primary}33;
  border-radius: 12px;
  background: ${e=>e.theme.colors.primary}0d;
`,p=i.h3`
  margin: 0;
  font-size: 1.05rem;
  color: ${e=>e.theme.colors.primary};
`,g=i.p`
  margin: 0;
  max-width: 36ch;
  line-height: 1.5;
  opacity: 0.85;
`,f=i.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.25rem;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  color: ${e=>u(e.theme)};
  background: ${e=>e.theme.colors.primary};

  min-height: 44px;

  &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary};
    outline-offset: 2px;
  }
`;function k({titleId:e}={}){var o;const s=(o=m().contact)==null?void 0:o.phone,l=a("form_status","unavailable_title","This form is briefly unavailable"),d=a("form_status","unavailable_body","I'm having a brief connection issue on my end. Please reach me directly by text — I'll get right back to you."),c=a("form_status","unavailable_sms","Text me instead");return t.jsxs(h,{role:"status","aria-live":"polite",children:[t.jsx(n,{size:22,"aria-hidden":!0}),t.jsx(p,{id:e,children:l}),t.jsx(g,{children:d}),s?t.jsx(f,{href:`sms:${s}`,children:c}):null]})}const x="I can't take messages through the site right now.";function w(e){return/Request failed:\s*4\d\d/.test(e)||/validat/i.test(e)||/too many requests|rate limit/i.test(e)?!1:(/Request failed:\s*5\d\d/.test(e)||/Network error|Failed to fetch|ECONNREFUSED|ETIMEDOUT|timeout/i.test(e),!0)}const y=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 0.9rem 1rem;
  border: 1px solid ${e=>e.theme.colors.primary}33;
  border-radius: 10px;
  background: ${e=>e.theme.colors.primary}0d;
`,b=i.p`
  margin: 0;
  font-weight: 600;
  line-height: 1.4;
`,v=i.p`
  margin: 0;
  line-height: 1.45;
  opacity: 0.85;
`,$=i.a`
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
`;function E({phone:e}){const r=e.replace(/[^\d+]/g,"");return t.jsxs(y,{role:"alert","data-testid":"write-outage",children:[t.jsxs(b,{children:[t.jsx(n,{size:16,"aria-hidden":!0,style:{verticalAlign:"-2px",marginRight:6}}),x]}),t.jsx(v,{children:"Text first — same-day response. Copy your message and text me instead."}),r?t.jsx($,{href:`tel:${r}`,"data-testid":"write-outage-tel",children:e}):null]})}export{k as F,E as W,x as a,w as i};
//# sourceMappingURL=WriteOutageNotice-CT8Bjivk.js.map
