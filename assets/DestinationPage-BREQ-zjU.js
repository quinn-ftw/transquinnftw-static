import{C as Z,a0 as J,D as K,r as d,s as ee,p as i,q as te,g as oe,j as t,a1 as re,S as $,$ as j,M as g,U as _,A as ie,F as ne,a as r,a2 as ae,x as se,o as u,L as z}from"./index-DBvZCzBm.js";import{u as ce}from"./useDestinationsData-DqOIe6C9.js";import{T as le}from"./TouringOptIn-5QarZln9.js";import{B as me}from"./BookingForm-CeSxZfob.js";import{P as de}from"./PageIllustration-BELAFJXe.js";import{C as pe}from"./ContactModal-Cqt7IcAj.js";import{P as x}from"./plane-BkwP_VVo.js";import{C as he}from"./calendar-DM8FF6sa.js";import{P as T}from"./phone-BQxk50ay.js";import"./client-Cjg1XvbA.js";import"./WriteOutageNotice-CT8Bjivk.js";import"./circle-alert-2nX0nLA0.js";import"./loader-DC59dBk5.js";import"./ActivityChecklist-DhCuM_OY.js";import"./usePageIllustrations-D3P9Ia7w.js";import"./arrow-left-C_IAQEAv.js";/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],xe=Z("check",ge),ye={"west-coast":0,domestic:1,international:2},y=e=>ae(e,{style:"long"}),ue=r.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.875rem;
  margin-bottom: 2rem;
`,fe=r.div`
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
`,be=r.div`
  background: color-mix(in srgb, ${e=>e.theme.colors.primary} 6%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 25%, transparent);
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,ke=r.div`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;

  svg {
    flex-shrink: 0;
    margin-top: 0.15rem;
    color: ${e=>e.theme.colors.primary};
  }
`,ve=r.div`
  strong {
    display: block;
    color: ${e=>e.theme.colors.primary};
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.25rem;
  }

  span {
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 0.95rem;
  }
`,we=r(z)`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.5rem;
  background: ${e=>e.theme.colors.primary};
  color: ${e=>se(e.theme)};
  font-weight: 700;
  font-size: 0.875rem;
  border-radius: 6px;
  text-decoration: none;
  letter-spacing: 0.03em;
  transition: opacity 200ms;
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
  }
`,$e=r.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.625rem;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,je=r.div`
  ${u}
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 60%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 8%, transparent);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  line-height: 1.5;

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary};
    flex-shrink: 0;
    margin-top: 0.55rem;
  }
`,_e=r.div`
  ${u}
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 70%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 20%, transparent);
  border-left: 3px solid ${e=>e.theme.colors.primary};
  border-radius: 10px;
  padding: 1.75rem;
  margin-bottom: 2.5rem;
`,Te=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.625rem;
  }
`,Ce=r.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  svg {
    color: ${e=>e.theme.colors.primary};
    flex-shrink: 0;
  }
`,ze=r.div``,Se=r.h2`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.primary};
  margin: 0;
  line-height: 1.2;
`,Le=r.p`
  font-size: 0.78rem;
  color: ${e=>e.theme.colors.text.muted};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0.3rem 0 0;
`,Fe=r.div`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 2rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary};
  white-space: nowrap;
  flex-shrink: 0;
  line-height: 1;

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`,Pe=r.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.75;
  margin: 0 0 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 8%, transparent);
`,Ie=r.p`
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.theme.colors.text.muted};
  margin: 0 0 0.625rem;
`,De=r.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ne=r.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  line-height: 1.5;

  svg {
    color: ${e=>e.theme.colors.primary};
    flex-shrink: 0;
    margin-top: 0.15rem;
  }
`,Me=r.p`
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 60%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 8%, transparent);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.65;
  font-style: italic;
  margin-bottom: 2.5rem;
`,C=r.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
`,p=r.a`
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
`,Be=r.div`
  ${u}
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 1.25rem 1.5rem;
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 60%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 15%, transparent);
  border-left: 3px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 50%, transparent);
  border-radius: 8px;
  margin-bottom: 2rem;
`,Ae=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,Ue=r.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.colors.primary};
  font-weight: 600;
`,Ee=r.span`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.55;
`,Ge=r.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 35%, transparent);
  border-radius: 6px;
  color: ${e=>e.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  background: color-mix(in srgb, ${e=>e.theme.colors.primary} 8%, transparent);
  font-family: inherit;
  cursor: pointer;
  transition: border-color 200ms, background 200ms;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    background: color-mix(in srgb, ${e=>e.theme.colors.primary} 14%, transparent);
  }
`,h=r(z)`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  transition: color 200ms;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,Qe=r.hr`
  border: none;
  border-top: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 8%, transparent);
  margin: 2.5rem 0;
`,Re=r.div`
  background: ${e=>e.theme.colors.background.secondary}99;
  border: 1px solid ${e=>e.theme.colors.border};
  border-top: 2px solid ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  margin-bottom: 2rem;
`,Ve=r.div`
  padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.xl};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,We=r.h3`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  color: ${e=>e.theme.colors.primary};
  margin: 0;
`;function ct(){const{city:e}=J(),m=K(),[S,f]=d.useState(!1),n=ee(),{data:b}=ce(),L=i("tour","tier_west_coast","West Coast / Vegas"),F=i("tour","tier_north_america","North America"),P=i("tour","tier_international","International"),I=i("destination","callout_visiting","Quinn is visiting"),D=i("destination","cta_make_appointment","Make an Appointment"),N=i("destination","experiences_heading","What a session in {city} looks like"),M=i("destination","includes_label","What's included"),B=i("destination","includes_flights","Business-class round-trip from SFO — you book, I send the details"),A=i("destination","includes_hotel","Four-star minimum hotel room — private, no shared suite situations"),U=i("destination","includes_time","My full attention for the duration — no clock-watching, no rushing out"),E=i("destination","includes_logistics","I handle everything once I land — itinerary, timing, all of it"),k=i("destination","cta_text_quinn","Text Quinn"),v=i("destination","cta_whatsapp","WhatsApp"),G=i("destination","cta_view_rates","View all rates →"),Q=i("destination","section_booking_title","Book Your Appointment"),R=i("destination","booking_text","Text to talk through city, dates, and availability. FMTY requires a 50% deposit to hold the dates — balance due on arrival. I respond quickly and don't leave people hanging."),V=i("destination","cta_view_policies","View booking policies →"),W=i("destination","cta_see_all_rates","See all rates →"),q=i("destination","cta_see_tour","View tour schedule →"),H={"west-coast":L,domestic:F,international:P},o=d.useMemo(()=>(b??[]).find(a=>a.slug===e),[b,e]),c=d.useMemo(()=>{if(o!=null&&o.linkedTourStop)return n.tour.find(a=>a.city===o.city)},[o,n.tour]),l=d.useMemo(()=>{if(o)return n.touringPackages.entries[ye[o.fmtyTier]]},[o,n.touringPackages.entries]),w=c?"incall":"fmty",Y=w==="fmty"?(o==null?void 0:o.city)??"":"";te(o?{title:o.metaTitle,description:o.metaDescription}:{title:"Quinn — Destinations",description:"Upscale trans escort — worldwide FMTY available."});const{trackInteraction:s}=oe();if(!o)return t.jsx(re,{to:"/tour",replace:!0});const O=o.intro.trim().split(/\n\n+/);return t.jsxs($,{title:o.headline,subtitle:`${o.city}${o.region?`, ${o.region}`:""} — ${o.country}`,headingLevel:1,id:"destination",children:[t.jsxs(ue,{children:[t.jsx(j,{size:14}),o.city,", ",o.country,t.jsx("span",{style:{margin:"0 0.375rem",opacity:.4},children:"·"}),t.jsx(x,{size:14}),H[o.fmtyTier]," — FMTY"]}),c&&t.jsxs(be,{children:[t.jsxs(ke,{children:[t.jsx(he,{size:18}),t.jsxs(ve,{children:[t.jsxs("strong",{children:[I," ",o.city]}),t.jsxs("span",{children:[c.endDate?`${y(c.startDate)} – ${y(c.endDate)}`:`${y(c.startDate)} onwards`,c.bookingStatus==="confirmed"?" · Confirmed":" · Deposit to confirm"]})]})]}),t.jsx(we,{to:"#book",onClick:()=>s({type:"click",data:{elementType:"link",eventName:"destination_cta",eventLabel:"book",pageUrl:window.location.href,conversionGoal:"booking"}}),children:D})]}),t.jsx(de,{slot:`destination:${o.slug}`,children:t.jsx(fe,{children:O.map((a,X)=>t.jsx("p",{children:a.trim()},X))})}),o.experiences&&o.experiences.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("h3",{style:{fontFamily:m.typography.fontFamily.heading,color:m.colors.primary.main,fontSize:"1.25rem",marginBottom:"1rem"},children:N.replace("{city}",o.city)}),t.jsx($e,{children:o.experiences.map(a=>t.jsx(g,{as:je,children:a},a))})]}),o.note&&t.jsx(Me,{children:o.note}),t.jsx(Qe,{}),o.relationship==="homebase"||o.relationship==="metro-neighbor"?t.jsxs(g,{as:Be,children:[t.jsx(j,{size:16,style:{color:m.colors.primary.main,flexShrink:0,marginTop:"2px"}}),t.jsxs(Ae,{children:[t.jsx(Ue,{"data-magic-title":!0,children:o.relationship==="homebase"?"Home base":"Nearby"}),t.jsx(Ee,{children:o.relationship==="homebase"?`${o.city} is where Quinn is based. Incall available — no travel surcharge, no flights required. Standard rates apply.`:`${o.city} is close to Quinn's base. Outcall available at standard rates — short drive, no FMTY needed.`})]})]}):l&&t.jsxs(g,{as:_e,children:[t.jsxs(Te,{children:[t.jsxs(Ce,{children:[t.jsx(x,{size:20}),t.jsxs(ze,{children:[t.jsxs(Se,{"data-magic-title":!0,children:["Fly Me To You — ",o.city]}),t.jsxs(Le,{children:[l.service," · ",l.description??l.duration??"All-inclusive with travel"]})]})]}),t.jsxs(Fe,{children:["$",l.price.toLocaleString()]})]}),t.jsx(Pe,{children:n.touringPackages.description}),t.jsx(Ie,{children:M}),t.jsx(De,{children:[B,A,U,E,...l.notes?[l.notes]:[]].map(a=>t.jsxs(Ne,{children:[t.jsx(xe,{size:14}),a]},a))}),t.jsxs(C,{children:[t.jsxs(Ge,{onClick:()=>{s({type:"click",data:{elementType:"button",eventName:"destination_fmty_cta",eventLabel:"bring_to_city",pageUrl:window.location.href,conversionGoal:"contact"}}),f(!0)},children:[t.jsx(x,{size:15}),"Bring Quinn to ",o.city]}),t.jsxs(p,{href:`sms:${n.contact.phone}`,onClick:()=>s({type:"click",data:{elementType:"link",eventName:"destination_fmty_cta",eventLabel:"sms",pageUrl:window.location.href,conversionGoal:"contact"}}),children:[t.jsx(T,{size:15}),k]}),n.contact.whatsapp&&t.jsxs(p,{href:`https://wa.me/${n.contact.whatsapp.replace(/[^0-9]/g,"")}`,target:"_blank",rel:"noopener noreferrer",onClick:()=>s({type:"click",data:{elementType:"link",eventName:"destination_fmty_cta",eventLabel:"whatsapp",pageUrl:window.location.href,conversionGoal:"contact"}}),children:[t.jsx(_,{size:15}),v]}),t.jsx(h,{to:"/rates",onClick:()=>s({type:"click",data:{elementType:"link",eventName:"destination_fmty_nav",eventLabel:"rates",pageUrl:window.location.href}}),children:G})]})]}),t.jsxs($,{title:Q,headingLevel:2,id:"book",children:[t.jsx("p",{style:{color:m.colors.text.secondary,fontSize:"0.95rem",lineHeight:1.7,marginBottom:"1.5rem"},children:R}),t.jsxs(Re,{children:[t.jsx(Ve,{children:t.jsx(We,{children:"Reserve a Date"})}),t.jsx(me,{initialServiceType:w,initialLocationNote:Y})]}),t.jsx(le,{source:"destination-page",sourceCity:o.slug}),t.jsxs(C,{children:[t.jsxs(p,{href:`sms:${n.contact.phone}`,onClick:()=>s({type:"click",data:{elementType:"link",eventName:"destination_contact",eventLabel:"sms",pageUrl:window.location.href,conversionGoal:"contact"}}),children:[t.jsx(T,{size:15}),k]}),n.contact.whatsapp&&t.jsxs(p,{href:`https://wa.me/${n.contact.whatsapp.replace(/[^0-9]/g,"")}`,target:"_blank",rel:"noopener noreferrer",onClick:()=>s({type:"click",data:{elementType:"link",eventName:"destination_contact",eventLabel:"whatsapp",pageUrl:window.location.href,conversionGoal:"contact"}}),children:[t.jsx(_,{size:15}),v]}),t.jsx(h,{to:"/booking",onClick:()=>s({type:"click",data:{elementType:"link",eventName:"destination_nav",eventLabel:"booking",pageUrl:window.location.href}}),children:V}),t.jsx(h,{to:"/rates",onClick:()=>s({type:"click",data:{elementType:"link",eventName:"destination_nav",eventLabel:"rates",pageUrl:window.location.href}}),children:W}),o.linkedTourStop&&t.jsx(h,{to:`/tour?city=${ie(o.city)}`,onClick:()=>s({type:"click",data:{elementType:"link",eventName:"destination_nav",eventLabel:"tour",pageUrl:window.location.href}}),children:q})]})]}),S&&ne.createPortal(t.jsx(pe,{onClose:()=>f(!1),presetInquiryType:"fmty",presetSubject:`I'd like to bring you to ${o.city}`}),document.body)]})}export{ct as default};
//# sourceMappingURL=DestinationPage-BREQ-zjU.js.map
