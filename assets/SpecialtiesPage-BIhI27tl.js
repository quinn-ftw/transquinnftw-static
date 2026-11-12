import{q as k,p as n,D as $,h as w,g as j,r as v,j as t,L as a,P as S,S as C,M as I,a as i,o as z}from"./index-DBvZCzBm.js";import{u as D}from"./useSpecialtiesData--QG6i0D4.js";import{u as P}from"./usePageIllustrations-D3P9Ia7w.js";import{S as _}from"./sparkles-Bu3F7pi2.js";const L=i.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: start;
  margin-bottom: 3rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,T=i.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.75;
  max-width: 640px;
`,E=i.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.75;
  max-width: 640px;
  margin-bottom: 2.5rem;
`,M=i.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,F=i(a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 1.35rem;
  color: ${e=>e.theme.colors.primary};
  font-weight: 600;
  margin-bottom: 0.375rem;
  text-decoration: none;
  transition: opacity 200ms;

  &:hover {
    opacity: 0.8;
  }
`,N=i.p`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  line-height: 1.65;
  margin-bottom: 1.25rem;
  max-width: 680px;
`,B=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 0.875rem;
`,H=i(a)`
  ${z}
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  background: ${e=>e.theme.colors.background.secondary}99;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 1.125rem 1.25rem;
  text-decoration: none;
  transition: border-color 200ms, background 200ms;

  &:hover {
    border-color: ${e=>e.theme.colors.border.hover};
    background: ${e=>e.theme.colors.background.secondary};
  }
`,R=i.span`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 1rem;
  color: ${e=>e.theme.colors.text.primary};
  font-weight: 600;
`,U=i.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;function W(){k();const e=n("specialties","section_title","Specialties"),u=n("specialties","subtitle","Full Service Menu"),c=n("specialties","intro_part1","Everything Quinn offers — from girlfriend experience to kink-friendly exploration. Each specialty page has details on what to expect and how to book."),m=n("specialties","intro_link_text","Book directly"),d=n("specialties","intro_part2","to discuss anything not listed."),p=$(),{data:h}=D(),{rewritePhotoSrc:y}=w(),{trackInteraction:g}=j(),r=P().specialties,x=y??(o=>o),f=v.useMemo(()=>h??[],[h]),b=t.jsxs(T,{children:[c," ",t.jsx(a,{to:"/booking",style:{color:"inherit",textDecoration:"underline",textDecorationColor:`color-mix(in srgb, ${p.colors.primary.main} 50%, transparent)`},children:m})," ",d]}),l=r!=null&&r.image?t.jsx(S,{src:x(`/photos/${r.image}`),webpSrc:x(`/photos/${r.image.replace(/\.\w+$/,".webp")}`),alt:"Specialties illustration",intrinsicWidth:600,intrinsicHeight:900,width:"auto",height:r.height,objectFit:"contain",loading:"eager",fetchPriority:"high"}):null;return t.jsxs(C,{title:e,subtitle:u,headingLevel:1,id:"specialties",children:[l?t.jsxs(L,{children:[r.side==="left"&&l,b,r.side==="right"&&l]}):t.jsxs(E,{children:[c," ",t.jsx(a,{to:"/booking",style:{color:"inherit",textDecoration:"underline",textDecorationColor:`color-mix(in srgb, ${p.colors.primary.main} 50%, transparent)`},children:m})," ",d]}),f.map(o=>t.jsxs(M,{children:[t.jsxs(F,{to:`/specialties/${o.slug}`,onClick:()=>g({type:"click",data:{elementType:"link",eventName:"specialties_category_click",eventLabel:o.slug,pageUrl:window.location.href}}),children:[t.jsx(_,{size:16}),o.name]}),o.intro&&t.jsx(N,{children:o.intro}),t.jsx(B,{children:o.items.map(s=>t.jsxs(I,{as:H,to:`/specialties/${o.slug}/${s.slug}`,onClick:()=>g({type:"click",data:{elementType:"link",eventName:"specialties_item_click",eventLabel:s.slug,pageUrl:window.location.href}}),children:[t.jsx(R,{"data-magic-title":!0,children:s.name}),s.metaDescription&&t.jsx(U,{children:s.metaDescription.split(". ")[0]})]},s.slug))})]},o.slug))]})}export{W as default};
//# sourceMappingURL=SpecialtiesPage-BIhI27tl.js.map
