import{s as g,q as p,j as t,S as u,a as r,G as f,r as x,M as b,av as k,o as y}from"./index-DBvZCzBm.js";const j=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
`,v=r.div`
  ${y}
  background: ${e=>e.theme.colors.background.secondary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.lg};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,w=r.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,$=r.span`
  font-size: 0.75rem;
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.colors.primary};
`,P=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.7rem;
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.theme.colors.text.muted};
`,C=r.a`
  display: block;
  border: none;
  text-decoration: none;
  line-height: 0;
  border-radius: ${e=>e.theme.borderRadius.sm};
  overflow: hidden;
  transition: opacity 150ms;
  align-self: flex-start;

  &:hover {
    opacity: 0.9;
  }

  img {
    width: 300px;
    height: auto;
    max-width: 100%;
    display: block;
  }
`,R=r.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${e=>e.theme.colors.text.muted};
  margin: 0;
`,B=r.div`
  line-height: 0;
  align-self: flex-start;
  border-radius: ${e=>e.theme.borderRadius.sm};
  overflow: hidden;

  img {
    width: 300px;
    height: auto;
    max-width: 100%;
    display: block;
  }
`,S=r.div`
  align-self: flex-start;
  border-radius: ${e=>e.theme.borderRadius.sm};
  overflow: hidden;
  background: ${e=>e.theme.colors.background.primary};
  padding: 1rem;
  line-height: 0;
`,L=r.a`
  display: block;
  align-self: flex-start;
  border-radius: ${e=>e.theme.borderRadius.sm};
  overflow: hidden;
  background: ${e=>e.theme.colors.background.primary};
  padding: 1rem;
  line-height: 0;
  text-decoration: none;
  transition: opacity 150ms;

  &:hover {
    opacity: 0.9;
  }
`,m=r.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  display: block;
`;function z({profile:e}){const n=f(),a=x.useCallback(()=>{n("banner_click",e.platform,"verified_profile")},[n,e.platform]),d=e.href??e.url??"",s=typeof d=="string"?d.trim():"",l=(e.imgSrc??"").trim().length>0,c=s.length>0,h=(e.description??"").trim().length>0,o=l?e.imgSrc:"/icon-512.png",i=l?e.imgAlt:"Quinn logo";return t.jsxs(b,{as:v,children:[t.jsxs(w,{children:[t.jsx($,{"data-magic-title":!0,children:e.platform}),t.jsxs(P,{children:[t.jsx(k,{size:12}),"Verified"]})]}),l?c?t.jsx(C,{href:s,rel:"noopener",target:"_blank",title:i,onClick:a,children:t.jsx("img",{src:o,alt:i})}):t.jsx(B,{children:t.jsx("img",{src:o,alt:i})}):c?t.jsx(L,{href:s,rel:"noopener",target:"_blank",title:i,onClick:a,children:t.jsx(m,{src:o,alt:i})}):t.jsx(S,{children:t.jsx(m,{src:o,alt:i})}),h&&t.jsx(R,{children:e.description??""})]})}function _(){const e=g();p();const n=e.verifiedProfiles??[];return n.length===0?null:t.jsx(u,{title:"Verified Profiles",subtitle:"Quinn's verified profiles on trusted platforms.",headingLevel:1,children:t.jsx(j,{children:n.map(a=>t.jsx(z,{profile:a},a.platform))})})}export{_ as default};
//# sourceMappingURL=BannersPage-Bfy6f0QG.js.map
