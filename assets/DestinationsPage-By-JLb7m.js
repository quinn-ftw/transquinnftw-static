const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DestinationMap-CohHhsD8.js","assets/index-DBvZCzBm.js","assets/index-CluiG4zC.css","assets/index.es-trzSlf0J.js"])))=>i.map(i=>d[i]);
import{q as D,p as n,D as S,s as C,h as M,g as z,r as c,j as e,S as E,P as y,L as m,M as L,$ as R,a as r,_ as A,o as B,y as O}from"./index-DBvZCzBm.js";import{u as W}from"./useDestinationsData-DqOIe6C9.js";import{u as F}from"./usePageIllustrations-D3P9Ia7w.js";import{P as N}from"./plane-BkwP_VVo.js";const Y=c.lazy(()=>A(()=>import("./DestinationMap-CohHhsD8.js"),__vite__mapDeps([0,1,2,3])).then(t=>({default:t.DestinationMap}))),H=r.div`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`,q=r.p`
  color: ${t=>t.theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.75;
  max-width: 640px;
  flex: 1;
  min-width: 0;
`,G=r.p`
  color: ${t=>t.theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.75;
  max-width: 640px;
  margin-bottom: 2rem;
`,f=r.div`
  flex-shrink: 0;

  @media (max-width: 700px) {
    order: -1;
  }
`,U=r.div`
  margin-bottom: 2.5rem;
  min-height: 420px;
`,V=r(O)`
  min-height: 420px;
  border-radius: 12px;
`,X=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.875rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.625rem;
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`,Z=r(m)`
  ${B}
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: ${t=>t.theme.colors.background.secondary}99;
  border: 1px solid ${t=>t.theme.colors.border.default};
  border-radius: 10px;
  padding: 1rem 1.125rem;
  text-decoration: none;
  transition: border-color 200ms, background 200ms;

  &:hover {
    border-color: ${t=>t.theme.colors.border.hover};
    background: ${t=>t.theme.colors.background.secondary}DD;
  }
`,J=r.span`
  font-family: ${t=>t.theme.typography.fontFamily.heading};
  font-size: 1.1rem;
  color: ${t=>t.theme.colors.text.primary};
  font-weight: 600;
`,K=r.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: ${t=>t.theme.colors.text.secondary};
  font-size: 0.8rem;
`,Q=r.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-top: auto;
`,tt=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.175rem 0.55rem;
  border-radius: 999px;
  font-size: 0.675rem;
  font-weight: 500;
  background: ${t=>t.$color};
  color: ${t=>t.$text};
`,et=r.span`
  display: inline-flex;
  align-items: center;
  padding: 0.175rem 0.55rem;
  border-radius: 999px;
  font-size: 0.675rem;
  font-weight: 500;
  background: color-mix(in srgb, ${t=>t.theme.colors.primary} 8%, transparent);
  color: ${t=>t.theme.colors.primary.main};
  border: 1px solid color-mix(in srgb, ${t=>t.theme.colors.primary} 20%, transparent);
`;function at(){D();const t=n("destinations","section_title","Destinations"),b=n("destinations","subtitle","You book the flight. I show up."),d=n("destinations","intro_part1","You book the flight, I show up. FMTY means I fly to wherever you are — you handle travel and hotel logistics, I bring my time and full attention. Browse the cities below, or"),h=n("destinations","intro_part2","if your city isn't here — reach out anyway."),p=n("destinations","intro_link_text","book directly"),w=n("tour","tier_west_coast","West Coast"),$=n("tour","tier_north_america","North America"),j=n("tour","tier_international","International"),k=n("destinations","badge_on_tour","On Tour"),a=S(),_={"west-coast":w,domestic:$,international:j},T={"west-coast":"rgba(100, 180, 120, 0.15)",domestic:"rgba(100, 140, 210, 0.15)",international:`color-mix(in srgb, ${a.colors.primary.main} 12%, transparent)`},v={"west-coast":"#7ec89a",domestic:"#82aee0",international:a.colors.primary.main},g=C(),{rewritePhotoSrc:I}=M(),{data:x}=W(),{trackInteraction:P}=z(),o=F().destinations,s=I??(i=>i),l=c.useMemo(()=>x??[],[x]),u=c.useMemo(()=>new Set(g.tour.map(i=>i.city)),[g.tour]);return e.jsxs(E,{title:t,subtitle:b,headingLevel:1,id:"destinations",children:[o!=null&&o.image?e.jsxs(H,{children:[o.side==="left"&&e.jsx(f,{style:{opacity:o.opacity},children:e.jsx(y,{src:s(`/photos/${o.image}`),webpSrc:s(`/photos/${o.image.replace(/\.\w+$/,".webp")}`),alt:"Destinations illustration",intrinsicWidth:600,intrinsicHeight:900,width:"auto",height:o.height,objectFit:"contain",loading:"eager",fetchPriority:"high"})}),e.jsxs(q,{children:[d," ",e.jsx(m,{to:"/booking",style:{color:a.colors.primary.main},children:p})," ",h]}),o.side==="right"&&e.jsx(f,{style:{opacity:o.opacity},children:e.jsx(y,{src:s(`/photos/${o.image}`),webpSrc:s(`/photos/${o.image.replace(/\.\w+$/,".webp")}`),alt:"Destinations illustration",intrinsicWidth:600,intrinsicHeight:900,width:"auto",height:o.height,objectFit:"contain",loading:"eager",fetchPriority:"high"})})]}):e.jsxs(G,{children:[d," ",e.jsx(m,{to:"/booking",style:{color:a.colors.primary.main},children:p})," ",h]}),l.length>0&&e.jsx(U,{children:e.jsx(c.Suspense,{fallback:e.jsx(V,{}),children:e.jsx(Y,{destinations:l,tourCities:u})})}),e.jsx(X,{children:l.map(i=>e.jsxs(L,{as:Z,to:`/destinations/${i.slug}`,onClick:()=>P({type:"click",data:{elementType:"link",eventName:"destination_click",eventLabel:i.city,pageUrl:window.location.href}}),children:[e.jsx(J,{"data-magic-title":!0,children:i.city}),e.jsxs(K,{children:[e.jsx(R,{size:11}),i.country,i.region?` · ${i.region}`:""]}),e.jsxs(Q,{children:[e.jsxs(tt,{$color:T[i.fmtyTier],$text:v[i.fmtyTier],children:[e.jsx(N,{size:10}),_[i.fmtyTier]]}),u.has(i.city)&&e.jsx(et,{children:k})]})]},i.slug))})]})}export{at as default};
//# sourceMappingURL=DestinationsPage-By-JLb7m.js.map
