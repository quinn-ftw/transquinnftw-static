import{q as B,p as o,s as G,t as P,z as U,A as q,g as I,e as Y,j as e,S as d,a,L as _}from"./index-DBvZCzBm.js";import{R as E,s as J,r as K,a as Q,b as V,c as W,A as l,d as m,e as X}from"./RatesTable-DcudmeaE.js";const w=a(_)`
  color: ${t=>t.theme.colors.primary};
  font-size: 0.875rem;
  display: inline-block;
  margin-top: -1rem;
  margin-bottom: 2rem;
  transition: opacity 200ms;

  &:hover {
    opacity: 0.75;
  }
`,Z=a.div`
  margin-top: 1rem;
  padding-top: 2rem;
  border-top: 1px solid ${t=>t.theme.colors.border};
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`,c=a(_)`
  font-size: 0.9rem;
  color: ${t=>t.theme.colors.primary};
  font-weight: 500;
  transition: opacity 200ms;

  &:hover {
    opacity: 0.75;
  }
`,ee=a.div`
  padding: 2rem;
  background: ${t=>t.theme.colors.background.secondary}99;
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: ${t=>t.theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 480px;
`,te=a.p`
  font-size: 1rem;
  color: ${t=>t.theme.colors.text.secondary};
  line-height: 1.7;
  margin: 0;
`,se=a.h2`
  font-family: ${t=>t.theme.typography.fontFamily.heading};
  font-size: 1.5rem;
  color: ${t=>t.theme.colors.primary};
  margin-bottom: 1rem;
`,oe=a.p`
  margin: 0 0 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${t=>t.theme.colors.text.secondary};
`;function ie(){var j;B();const t=o("rates","section_title","Rates"),h=o("rates","subtitle","All prices in USD"),p=o("rates","label_addons","Add-Ons"),y=o("rates","label_travel_fees","Travel Fees"),b=o("rates","label_fmty","Fly Me To You (FMTY)"),v=o("rates","label_online_services","Online Services"),T=o("rates","cta_fmty","How Fly Me To You is priced →"),L=o("rates","cta_tour_schedule","See tour schedule →"),S=o("rates","cta_how_to_book","How to book →"),R=o("rates","cta_book_now","Book Now →"),F=o("rates","lede_eyebrow",""),A=o("rates","lede_headline",""),$=o("rates","lede_headline_accent",""),C=o("rates","lede_body",""),s=G(),M=P(),{activeStop:D,nextStop:O}=U(),u=D??O,N=u?`/tour?city=${q(u.city)}`:"/tour",{trackInteraction:i}=I(),r=Y(),g=((j=s.currentLocation)==null?void 0:j.city)??s.identity.incallCity,f=g?`${h} · ${g}`:h;if(r==="fans")return e.jsx(d,{title:t,subtitle:"Available on request",headingLevel:1,id:"rates",children:e.jsxs(ee,{children:[e.jsx(te,{children:"Rates are shared on request. If you'd like to explore booking or have questions, feel free to reach out directly — DM or text is always welcome."}),e.jsx(c,{to:"/contact",onClick:()=>{const n={elementType:"link",eventName:"rates_cta",eventLabel:"fans_contact",pageUrl:window.location.href,conversionGoal:"contact",segment:"fans"};i({type:"click",data:n})},children:"Get in touch →"})]})});const x=()=>e.jsx(X,{eyebrow:F,headline:A,headlineAccent:$,body:C});if(M)return e.jsxs(d,{title:t,subtitle:f,headingLevel:1,id:"rates",children:[x(),e.jsx(E,{})]});const{priced:k,answers:H}=J(s.rates),z=[...k.map(n=>({label:n.title,href:`#${K(n.title)}`})),...s.travelFees.entries.length>0?[{label:y,href:"#travel-fees"}]:[],...s.addOns.entries.length>0?[{label:p,href:"#add-ons"}]:[],{label:b,href:"#fmty"},...s.onlineServices.entries.length>0?[{label:v,href:"#online-services"}]:[]];return e.jsxs(d,{title:t,subtitle:f,headingLevel:1,id:"rates",children:[x(),e.jsx(Q,{tabs:z}),e.jsx(V,{sections:k,titleLevel:2}),e.jsx(W,{sections:H}),s.travelFees.entries.length>0&&e.jsx("div",{id:"travel-fees",style:{scrollMarginTop:l},children:e.jsx(m,{title:y,description:s.travelFees.description,entries:s.travelFees.entries,titleLevel:2})}),s.addOns.entries.length>0&&e.jsx("div",{id:"add-ons",style:{scrollMarginTop:l},children:e.jsx(m,{title:p,description:s.addOns.description,entries:s.addOns.entries,titleLevel:2})}),e.jsxs("div",{id:"fmty",style:{scrollMarginTop:l},children:[e.jsx(se,{children:b}),e.jsx(oe,{children:s.touringPackages.description}),e.jsx(w,{to:"/fmty",children:T}),e.jsx(w,{to:"/destinations",style:{marginLeft:"1.5rem"},children:"Browse destinations →"})]}),s.onlineServices.entries.length>0&&e.jsx("div",{id:"online-services",style:{scrollMarginTop:l},children:e.jsx(m,{title:v,description:s.onlineServices.description,entries:s.onlineServices.entries,titleLevel:2})}),e.jsxs(Z,{children:[e.jsx(c,{to:"/booking",onClick:()=>{const n={elementType:"link",eventName:"rates_cta",eventLabel:"book",pageUrl:window.location.href,conversionGoal:"booking",segment:r??"default"};i({type:"click",data:n})},children:S}),e.jsx(c,{to:N,onClick:()=>{const n={elementType:"link",eventName:"rates_cta",eventLabel:"tour",pageUrl:window.location.href,segment:r??"default"};i({type:"click",data:n})},children:L}),e.jsx(c,{to:"/booking",onClick:()=>{const n={elementType:"link",eventName:"rates_cta",eventLabel:"book_now",pageUrl:window.location.href,conversionGoal:"booking",segment:r??"default"};i({type:"click",data:n})},children:R})]})]})}export{ie as default};
//# sourceMappingURL=RatesPage-B8zzIF-7.js.map
