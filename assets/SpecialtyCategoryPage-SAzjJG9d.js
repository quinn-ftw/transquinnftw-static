import{a0 as c,g as l,r as m,q as p,j as t,a1 as d,S as g,M as x,a as o,o as h,L as n}from"./index-DBvZCzBm.js";import{u}from"./useSpecialtiesData--QG6i0D4.js";import{S as y}from"./sparkles-Bu3F7pi2.js";const f=o.div`
  margin-bottom: 2.5rem;

  p {
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 1.05rem;
    line-height: 1.8;
    max-width: 640px;
    margin: 0;
  }
`,b=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
`,k=o(n)`
  ${h}
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 60%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 8%, transparent);
  border-radius: 10px;
  padding: 1.25rem 1.375rem;
  text-decoration: none;
  transition: border-color 200ms, background 200ms;

  &:hover {
    border-color: color-mix(in srgb, ${e=>e.theme.colors.primary} 30%, transparent);
    background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 85%, transparent);
  }
`,$=o.span`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 1.15rem;
  color: ${e=>e.theme.colors.text.primary};
  font-weight: 600;
`,j=o.span`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.5;
`,v=o(n)`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 1.5rem;
  transition: color 200ms;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,S=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
  background: color-mix(in srgb, ${e=>e.theme.colors.primary} 8%, transparent);
  color: ${e=>e.theme.colors.primary};
  width: fit-content;
`;function z(){const{category:e}=c(),{data:i}=u(),{trackInteraction:s}=l(),r=m.useMemo(()=>(i??[]).find(a=>a.slug===e),[i,e]);return p(r?{title:r.metaTitle,description:r.metaDescription}:{title:"Specialties — Quinn",description:"Browse Quinn's full service menu."}),r?t.jsxs(g,{title:r.name,subtitle:"Specialties",headingLevel:1,id:"category",children:[t.jsx(v,{to:"/specialties",onClick:()=>s({type:"click",data:{elementType:"link",eventName:"specialty_category_nav",eventLabel:"back_to_index",pageUrl:window.location.href}}),children:"← All specialties"}),t.jsx(f,{children:t.jsx("p",{children:r.intro})}),t.jsx(b,{children:r.items.map(a=>t.jsxs(x,{as:k,to:`/specialties/${r.slug}/${a.slug}`,onClick:()=>s({type:"click",data:{elementType:"link",eventName:"specialty_category_item_click",eventLabel:a.slug,pageUrl:window.location.href}}),children:[t.jsx($,{"data-magic-title":!0,children:a.name}),t.jsxs(j,{children:[a.metaDescription.slice(0,100),"…"]}),t.jsxs(S,{children:[t.jsx(y,{size:11}),"Learn more"]})]},a.slug))})]}):t.jsx(d,{to:"/specialties",replace:!0})}export{z as default};
//# sourceMappingURL=SpecialtyCategoryPage-SAzjJG9d.js.map
