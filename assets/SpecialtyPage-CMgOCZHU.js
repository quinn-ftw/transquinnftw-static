import{a0 as P,s as B,D as M,g as R,p as s,r as m,q as N,j as t,a1 as I,S as y,U,a as n,L as g}from"./index-DBvZCzBm.js";import{u as D}from"./useSpecialtiesData--QG6i0D4.js";import{d as F}from"./RatesTable-DcudmeaE.js";import{P as Q}from"./PageIllustration-BELAFJXe.js";import{S as A}from"./sparkles-Bu3F7pi2.js";import{P as E}from"./phone-BQxk50ay.js";import"./usePageIllustrations-D3P9Ia7w.js";const O=n(g)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${e=>e.theme.colors.primary};
  font-size: 0.875rem;
  margin-bottom: 2rem;
  text-decoration: none;
  transition: opacity 200ms;

  &:hover {
    opacity: 0.8;
  }
`,G=n.div`
  margin-bottom: 2.5rem;

  p {
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 1.05rem;
    line-height: 1.8;
    margin: 0 0 1.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`,W=n.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,q=n.li`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.95rem;

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary};
    flex-shrink: 0;
  }
`,H=n.p`
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 60%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 8%, transparent);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.65;
  font-style: italic;
  margin-bottom: 2.5rem;
`,d=n.hr`
  border: none;
  border-top: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 8%, transparent);
  margin: 2.5rem 0;
`,Y=n.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
`,u=n.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 35%, transparent);
  border-radius: 6px;
  color: ${e=>e.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 200ms, background 200ms;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    background: color-mix(in srgb, ${e=>e.theme.colors.primary} 6%, transparent);
  }
`,f=n(g)`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  transition: color 200ms;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,b=n.h3`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  color: ${e=>e.theme.colors.primary};
  font-size: 1.15rem;
  margin-bottom: 1rem;
`,Z=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
`,J=n(g)`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.4rem 0.875rem;
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 12%, transparent);
  border-radius: 999px;
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.primary};
  text-decoration: none;
  transition: border-color 200ms, background 200ms;

  &:hover {
    border-color: color-mix(in srgb, ${e=>e.theme.colors.primary} 35%, transparent);
    background: color-mix(in srgb, ${e=>e.theme.colors.primary} 6%, transparent);
  }
`;function K(e,a){switch(a){case"incall":return e.rates[0]?{title:e.rates[0].title,entries:e.rates[0].entries}:void 0;case"outcall":return e.rates[1]?{title:e.rates[1].title,entries:e.rates[1].entries}:void 0;case"addon":return e.addOns.entries.length>0?{title:"Add-Ons",entries:e.addOns.entries}:void 0;case"touring":return e.touringPackages.entries.length>0?{title:"Fly Me To You",entries:e.touringPackages.entries}:void 0;case"online":return e.onlineServices.entries.length>0?{title:"Online Services",entries:e.onlineServices.entries}:void 0;default:return}}function ne(){const{category:e,item:a}=P(),c=B(),k=M(),{data:h}=D(),{trackInteraction:l}=R(),v=s("specialty","what_to_expect","What to expect"),j=s("specialty","book_title","Book This Experience"),w=s("specialty","book_body","Text Quinn directly to discuss availability and details. Mention what you're interested in — she appreciates specificity."),$=s("specialty","cta_text_quinn","Text Quinn"),_=s("specialty","cta_whatsapp","WhatsApp"),S=s("specialty","cta_see_rates","See all rates →"),T=s("specialty","cta_booking_policies","Booking policies →"),L=s("specialty","more_in_prefix","More in"),i=m.useMemo(()=>(h??[]).find(o=>o.slug===e),[h,e]),r=m.useMemo(()=>i==null?void 0:i.items.find(o=>o.slug===a),[i,a]),p=m.useMemo(()=>r?K(c,r.relatedRateType):void 0,[c,r]),x=m.useMemo(()=>(i==null?void 0:i.items.filter(o=>o.slug!==a))??[],[i,a]);if(N(r?{title:r.metaTitle,description:r.metaDescription}:{title:"Specialties — Quinn",description:"Browse Quinn's full service menu."}),!i||!r)return t.jsx(I,{to:"/specialties",replace:!0});const z=r.intro.trim().split(/\n\n+/);return t.jsxs(y,{title:r.headline,subtitle:i.name,headingLevel:1,id:"specialty",children:[t.jsxs(O,{to:`/specialties/${i.slug}`,onClick:()=>l({type:"click",data:{elementType:"link",eventName:"specialty_nav",eventLabel:`category:${i.slug}`,pageUrl:window.location.href}}),children:[t.jsx(A,{size:14}),i.name]}),t.jsx(Q,{slot:`specialty:${r.categorySlug}/${r.slug}`,children:t.jsx(G,{children:z.map((o,C)=>t.jsx("p",{children:o.trim()},C))})}),r.includes&&r.includes.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(b,{children:v}),t.jsx(W,{children:r.includes.map(o=>t.jsx(q,{children:o},o))})]}),r.note&&t.jsx(H,{children:r.note}),p&&t.jsxs(t.Fragment,{children:[t.jsx(d,{}),t.jsx("div",{style:{marginBottom:"2.5rem"},children:t.jsx(F,{title:p.title,entries:p.entries,titleLevel:2})})]}),t.jsx(d,{}),t.jsxs(y,{title:j,headingLevel:2,id:"book",children:[t.jsx("p",{style:{color:k.colors.text.secondary,fontSize:"0.95rem",lineHeight:1.7,marginBottom:"1.5rem"},children:w}),t.jsxs(Y,{children:[t.jsxs(u,{href:`sms:${c.contact.phone}`,onClick:()=>l({type:"click",data:{elementType:"link",eventName:"specialty_contact",eventLabel:"sms",pageUrl:window.location.href,conversionGoal:"contact"}}),children:[t.jsx(E,{size:15}),$]}),c.contact.whatsapp&&t.jsxs(u,{href:`https://wa.me/${c.contact.whatsapp.replace(/[^0-9]/g,"")}`,target:"_blank",rel:"noopener noreferrer",onClick:()=>l({type:"click",data:{elementType:"link",eventName:"specialty_contact",eventLabel:"whatsapp",pageUrl:window.location.href,conversionGoal:"contact"}}),children:[t.jsx(U,{size:15}),_]}),t.jsx(f,{to:"/rates",onClick:()=>l({type:"click",data:{elementType:"link",eventName:"specialty_nav",eventLabel:"rates",pageUrl:window.location.href}}),children:S}),t.jsx(f,{to:"/booking",onClick:()=>l({type:"click",data:{elementType:"link",eventName:"specialty_nav",eventLabel:"booking",pageUrl:window.location.href}}),children:T})]})]}),x.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(d,{}),t.jsxs(b,{children:[L," ",i.name]}),t.jsx(Z,{children:x.map(o=>t.jsx(J,{to:`/specialties/${i.slug}/${o.slug}`,onClick:()=>l({type:"click",data:{elementType:"link",eventName:"specialty_related_click",eventLabel:o.slug,pageUrl:window.location.href}}),children:o.name},o.slug))})]})]})}export{ne as default};
//# sourceMappingURL=SpecialtyPage-CMgOCZHU.js.map
