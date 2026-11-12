var A=Object.defineProperty;var C=(e,r,o)=>r in e?A(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;var j=(e,r,o)=>C(e,typeof r!="symbol"?r+"":r,o);import{q as I,p as d,D as z,s as E,g as M,e as P,r as U,j as t,S as Y,M as N,L as D,F as B,a as n,o as w}from"./index-DBvZCzBm.js";import{T as R}from"./TouringOptIn-5QarZln9.js";import{C as q}from"./ContactModal-Cqt7IcAj.js";import{A as G}from"./arrow-left-C_IAQEAv.js";import{P as k}from"./plane-BkwP_VVo.js";import"./client-Cjg1XvbA.js";import"./WriteOutageNotice-CT8Bjivk.js";import"./circle-alert-2nX0nLA0.js";import"./loader-DC59dBk5.js";import"./ActivityChecklist-DhCuM_OY.js";import"./phone-BQxk50ay.js";const v={A:{title:"One day, under six hours",detail:"Domestic airfare, two or more weeks of notice."},B:{title:"Two days, over six hours",detail:"Domestic airfare, booked inside two weeks. She arrives the night before."},C:{title:"Three days, three or more timezones",detail:"International airfare, two or more weeks of notice."},D:{title:"The same three-day trip, short notice",detail:"International airfare, booked inside two weeks. Isolates the lead-time line."}};class s extends Error{constructor(o){super(`fmty: malformed or missing ${o}`);j(this,"name","FmtyShapeError")}}function O(e){return!!e&&typeof e=="object"&&typeof e.min=="number"&&typeof e.max=="number"&&e.max>=e.min}function W(e){if(e.min===e.max)throw new s("MoneyRange with min === max (scalar collapse is forbidden)");return`$${e.min.toLocaleString("en-US")}–${e.max.toLocaleString("en-US")}`}function x(e,r,o){const i=e[r];if(typeof i!="number")throw new s(`${o}.${r}`);return i}function b(e,r,o){const i=e[r];if(!O(i))throw new s(`${o}.${r}`);return i}function S(e,r){if(!e||typeof e!="object")throw new s(r);const o=e;return{within_2wk:x(o,"within_2wk",r),two_plus_wk:x(o,"two_plus_wk",r)}}function H(e,r){const o=e.airfare;if(!o||typeof o!="object")throw new s(`${r}.airfare`);const i=o;return{domestic:S(i.domestic,`${r}.airfare.domestic`),international:S(i.international,`${r}.airfare.international`)}}function Q(e,r){const o=`examples.${r}`;if(!e||typeof e!="object")throw new s(o);const i=e;if(typeof i.formatted!="string"||!i.formatted.startsWith("$"))throw new s(`${o}.formatted`);if(typeof i.depositFormatted!="string")throw new s(`${o}.depositFormatted`);return{formatted:i.formatted,total:b(i,"total",o),deposit:b(i,"deposit",o),depositFormatted:i.depositFormatted}}function X(e){if(e==null)return null;if(typeof e!="object")throw new s("tariff payload");const r=e,o="tariff"in r&&r.tariff&&typeof r.tariff=="object"?r.tariff:r;return{perDay:x(o,"perDay","tariff"),perTravelDay:x(o,"perTravelDay","tariff"),perNight:b(o,"perNight","tariff"),airfare:H(o,"tariff")}}function V(e,r){const o=X(e);if(o===null||r==null)return null;if(typeof r!="object")throw new s("examples payload");const i=r,p=[];for(const l of["A","B","C","D"]){const c=Q(i[l],l);p.push({id:l,title:v[l].title,detail:v[l].detail,formatted:c.formatted,depositFormatted:c.depositFormatted,total:c.total,deposit:c.deposit})}return{examples:p,perDay:o.perDay,perTravelDay:o.perTravelDay,perNight:o.perNight,lodgingBand:W(o.perNight),deposit:"50% of the trip total",airfare:o.airfare}}const Z=n(D)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 2rem;
  transition: color 150ms;

  &:hover {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,J=n.div`
  ${w}
  display: flex;
  gap: 1rem;
  padding: 1rem 1.25rem;
  margin-bottom: 2rem;
  background: ${e=>`color-mix(in srgb, ${e.theme.colors.background.secondary} 50%, transparent)`};
  border: 1px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 12%, transparent)`};
  border-left: 3px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 40%, transparent)`};
  border-radius: 8px;
  align-items: flex-start;
`,K=n.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.6;
  margin: 0;

  a {
    color: ${e=>e.theme.colors.primary};
    &:hover { opacity: 0.8; }
  }
`,ee=n.div`
  background: ${e=>`color-mix(in srgb, ${e.theme.colors.background.secondary} 60%, transparent)`};
  border: 1px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 8%, transparent)`};
  border-radius: 8px;
  padding: 1.5rem 1.75rem;
  margin-bottom: 2rem;

  p {
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 1rem;
    line-height: 1.75;
    margin: 0 0 0.75rem;

    &:last-child { margin-bottom: 0; }
  }

  strong {
    color: ${e=>e.theme.colors.primary};
    font-weight: 600;
  }
`,te=n.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  margin-top: 1.5rem;
  background: transparent;
  border: 1px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 40%, transparent)`};
  border-radius: 6px;
  color: ${e=>e.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 200ms, border-color 200ms;

  &:hover {
    background: ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 8%, transparent)`};
    border-color: ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 70%, transparent)`};
  }
`,re=n.div`
  margin: 2rem 0 0;
`,y=n.h2`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0 0 1rem;
`,oe=n.ol`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: grid;
  gap: 0.85rem;
`,ie=n.li`
  ${w}
  padding: 1rem 1.25rem;
  background: ${e=>`color-mix(in srgb, ${e.theme.colors.background.secondary} 50%, transparent)`};
  border: 1px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 10%, transparent)`};
  border-radius: 8px;
`,ne=n.p`
  margin: 0 0 0.25rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,T=n.p`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,ae=n.p`
  margin: 0;
  font-size: 1.05rem;
  color: ${e=>e.theme.colors.primary};
  font-weight: 600;
`,se=n.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.7;

  li { margin: 0 0 0.4rem; }
  strong { color: ${e=>e.theme.colors.text.primary}; font-weight: 600; }
`,le=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.85rem;
  margin: 1.25rem 0 0;
`,f=n.figure`
  ${w}
  margin: 0;
  padding: 0.85rem 1rem;
  background: ${e=>`color-mix(in srgb, ${e.theme.colors.background.secondary} 50%, transparent)`};
  border: 1px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 10%, transparent)`};
  border-radius: 8px;
`,g=n.figcaption`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 0.35rem;
`,u=n.p`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
`;function $e(){I();const e=d("tour","fmty_section_title","Fly Me To You"),r=d("tour","fmty_subtitle","You book the flight. I show up."),o=d("tour","fmty_description_1","FMTY means I come to you — your city, your schedule. You book the flight (business class from LAX) and the hotel room (four-star, private), and I handle the rest. The figures below are derived from the current tariff — not a price list of rungs. No ambiguity about what is covered."),i=d("tour","fmty_description_2","Give enough lead time to block the dates and sort travel logistics so neither of us is scrambling. A deposit holds the dates; balance is due on arrival. Late cancellation forfeits the deposit — that is how I keep the calendar honest for both of us."),p=d("tour","fmty_description_3","FMTY works best as an overnight or multi-day arrangement. The pace is different when neither of us has somewhere to be — less transactional, more like actually spending time together. Text me with your city and dates to get the conversation started."),l=d("tour","cta_add_city","Add your city to my tour"),c=z(),h=E(),{trackInteraction:_}=M(),L=P(),[F,$]=U.useState(!1),a=V(h.fmtyTariff,h.fmtyExamples);return t.jsxs(t.Fragment,{children:[t.jsxs(Y,{title:e,subtitle:r,headingLevel:1,id:"fmty",children:[t.jsxs(Z,{to:"/tour",children:[t.jsx(G,{size:13}),"Tour schedule"]}),t.jsxs(N,{as:J,children:[t.jsx(k,{size:16,style:{color:c.colors.primary,flexShrink:0,marginTop:"2px"}}),t.jsxs(K,{children:["FMTY is a ",t.jsx("strong",{"data-magic-title":!0,children:"full-day private arrangement"})," — billed at a daily rate, not an hourly session. Your city, your dates. You handle flights and the hotel; Quinn arrives and stays."," ","If you're looking to catch Quinn on an existing scheduled stop, see the"," ",t.jsx(D,{to:"/tour",children:"tour schedule"})," instead."]})]}),t.jsx(y,{children:"Details"}),t.jsxs(ee,{children:[t.jsx("p",{children:o}),t.jsx("p",{children:i}),t.jsx("p",{children:p}),h.touringPackages.description&&t.jsx("p",{children:h.touringPackages.description})]}),a&&t.jsxs(re,{children:[t.jsx(y,{children:"Worked examples"}),t.jsx(oe,{children:a.examples.map(m=>t.jsxs(ie,{children:[t.jsx(ne,{children:m.title}),t.jsx(T,{children:m.detail}),t.jsx(ae,{children:m.formatted}),t.jsxs(T,{children:["Deposit ",m.depositFormatted," — half of that total."]})]},m.id))}),t.jsx(y,{children:"How it is priced"}),t.jsxs(se,{children:[t.jsxs("li",{children:[t.jsxs("strong",{children:["$",a.perDay.toLocaleString("en-US")]})," per day, plus"," ",t.jsxs("strong",{children:["$",a.perTravelDay.toLocaleString("en-US")]})," per travel day."]}),t.jsxs("li",{children:["Lodging is a firm ",t.jsx("strong",{children:a.lodgingBand})," per night."]}),t.jsx("li",{children:"Airfare is quoted per trip (domestic or international, by lead time)."}),t.jsxs("li",{children:["Deposit is ",t.jsx("strong",{children:a.deposit}),". When the total is a range, so is the deposit."]})]}),t.jsxs(le,{children:[t.jsxs(f,{children:[t.jsx(g,{children:"Domestic airfare — within 2 weeks"}),t.jsxs(u,{children:["$",a.airfare.domestic.within_2wk.toLocaleString("en-US")]})]}),t.jsxs(f,{children:[t.jsx(g,{children:"Domestic airfare — 2+ weeks out"}),t.jsxs(u,{children:["$",a.airfare.domestic.two_plus_wk.toLocaleString("en-US")]})]}),t.jsxs(f,{children:[t.jsx(g,{children:"International airfare — within 2 weeks"}),t.jsxs(u,{children:["$",a.airfare.international.within_2wk.toLocaleString("en-US")]})]}),t.jsxs(f,{children:[t.jsx(g,{children:"International airfare — 2+ weeks out"}),t.jsxs(u,{children:["$",a.airfare.international.two_plus_wk.toLocaleString("en-US")]})]})]})]}),t.jsxs(te,{onClick:()=>{_({type:"click",data:{elementType:"button",eventName:"fmty_cta",eventLabel:"open_contact",pageUrl:window.location.href,conversionGoal:"contact",segment:L??"default"}}),$(!0)},children:[t.jsx(k,{size:16}),l]}),t.jsx(R,{source:"fmty-page"})]}),F&&B.createPortal(t.jsx(q,{onClose:()=>$(!1),presetInquiryType:"fmty",presetSubject:"I'd like to bring you to [city]"}),document.body)]})}export{$e as default};
//# sourceMappingURL=FmtyPage-CJR1wLFi.js.map
