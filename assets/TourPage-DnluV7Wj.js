const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TourCalendar-BcQYiEAT.js","assets/index-DBvZCzBm.js","assets/index-CluiG4zC.css","assets/format-BShlYbJy.js","assets/tourColors-PTRzFvk1.js","assets/parseISO-DcdnS0v5.js","assets/TouringOptIn-5QarZln9.js","assets/client-Cjg1XvbA.js","assets/WriteOutageNotice-CT8Bjivk.js","assets/circle-alert-2nX0nLA0.js","assets/loader-DC59dBk5.js","assets/ContactModal-Cqt7IcAj.js","assets/ActivityChecklist-DhCuM_OY.js","assets/phone-BQxk50ay.js","assets/arrow-left-C_IAQEAv.js","assets/plane-BkwP_VVo.js","assets/TourMap-BhHu4ul3.js","assets/index.es-trzSlf0J.js","assets/TourSchedule-D_E6vCJ3.js","assets/calendar-DM8FF6sa.js"])))=>i.map(i=>d[i]);
import{C as N,q as Y,p,D as G,s as Q,z as V,u as q,g as W,e as Z,r as s,j as t,S as J,L as S,y as v,E as K,A as X,M as D,F as ee,a as r,_ as T,o as z}from"./index-DBvZCzBm.js";import{T as te}from"./TouringOptIn-5QarZln9.js";import{C as oe}from"./ContactModal-Cqt7IcAj.js";import{T as re}from"./tourColors-PTRzFvk1.js";import{t as ne,c as ae,f as x}from"./format-BShlYbJy.js";import{p as F}from"./parseISO-DcdnS0v5.js";import{P as j}from"./plane-BkwP_VVo.js";/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],ie=N("house",se);function M(e,c,l){const m=ne(e,l==null?void 0:l.in);return isNaN(c)?ae(e,NaN):(c&&m.setDate(m.getDate()+c),m)}function le(e,c,l){return M(e,-1,l)}const ce=s.lazy(()=>T(()=>import("./TourCalendar-BcQYiEAT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(e=>({default:e.TourCalendar}))),me=s.lazy(()=>T(()=>import("./TourMap-BhHu4ul3.js"),__vite__mapDeps([16,1,2,17,4,3])).then(e=>({default:e.TourMap}))),de=s.lazy(()=>T(()=>import("./TourSchedule-D_E6vCJ3.js"),__vite__mapDeps([18,1,2,19])).then(e=>({default:e.TourSchedule}))),pe=r.p`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 2rem;
  line-height: 1.6;
`,ue=r.div`
  ${z}
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  margin-top: -1rem;
  margin-bottom: 2rem;
  background: ${e=>`color-mix(in srgb, ${e.theme.colors.background.secondary} 50%, transparent)`};
  border: 1px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 15%, transparent)`};
  border-left: 3px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 50%, transparent)`};
  border-radius: 8px;
  flex-wrap: wrap;
`,ye=r.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.colors.primary};
  font-weight: 600;
`,he=r.span`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 1rem;
  color: ${e=>e.theme.colors.text.primary};
`,ge=r.span`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.muted};
`,xe=r.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,fe=r.div`
  overflow: hidden;
  /* Override TourCalendar's inner Wrapper margin-bottom */
  > * {
    margin-bottom: 0 !important;
  }

  @media (max-width: 900px) {
    order: 2;
  }
`,be=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 900px) {
    order: 1;
  }
`,$e=r.div`
  position: relative;
`,ke=r.div`
  background: rgba(12, 10, 22, 0.8);
  border: 1px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 8%, transparent)`};
  border-radius: 12px;
  padding: 0.875rem 1.125rem;
  max-height: 260px;
  overflow-y: auto;
  box-sizing: border-box;
`,ve=r.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3.5rem;
  border-radius: 0 0 12px 12px;
  background: linear-gradient(to bottom, transparent, rgba(12, 10, 22, 0.95));
  pointer-events: none;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 200ms;
`,je=r.div`
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 55%, transparent)`};
  margin-bottom: 0.5rem;
`,Se=r.button`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  padding: 0.35rem 0;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  cursor: pointer;
  text-align: left;

  &:last-child { border-bottom: none; }
  &:hover > span:nth-child(2) { color: ${e=>e.theme.colors.text.primary}; }
`,Te=r.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${e=>e.$color};
  flex-shrink: 0;
`,_e=r.span`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
  flex: 1;
  transition: color 120ms;
`,we=r.span`
  font-size: 0.7rem;
  color: ${e=>e.theme.colors.text.muted};
  white-space: nowrap;
`,Ce=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
`,De=r(S)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  margin: 2.5rem 0;
  background: ${e=>`color-mix(in srgb, ${e.theme.colors.background.secondary} 50%, transparent)`};
  border: 1px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 12%, transparent)`};
  border-left: 3px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 40%, transparent)`};
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 200ms, background 200ms;

  &:hover {
    background: ${e=>`color-mix(in srgb, ${e.theme.colors.background.secondary} 70%, transparent)`};
    border-color: ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 35%, transparent)`};
    border-left-color: ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 70%, transparent)`};
  }
`,Fe=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,ze=r.span`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 1rem;
  color: ${e=>e.theme.colors.primary};
  font-weight: 600;
`,Me=r.span`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.5;
`,Le=r.span`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.muted};
  margin-top: 0.2rem;
  white-space: nowrap;
  align-self: center;
  margin-left: auto;
`,Pe=r.div`
  ${z}
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  margin: 1rem 0 0;
  background: ${e=>`color-mix(in srgb, ${e.theme.colors.background.secondary} 60%, transparent)`};
  border: 1px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 15%, transparent)`};
  border-radius: 10px;
`,Ae=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`,Ee=r.span`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 1.1rem;
  color: ${e=>e.theme.colors.text.primary};
  font-weight: 600;
`,Be=r.span`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.55;
`,He=r.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  margin-top: 0.75rem;
  background: ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 8%, transparent)`};
  border: 1px solid ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 40%, transparent)`};
  border-radius: 6px;
  color: ${e=>e.theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: background 200ms, border-color 200ms;
  white-space: nowrap;
  align-self: flex-start;

  &:hover {
    background: ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 8%, transparent)`};
    border-color: ${e=>`color-mix(in srgb, ${e.theme.colors.primary} 70%, transparent)`};
  }
`;function Ie(){Y();const e=p("tour","section_title","Tour Schedule"),c=p("tour","subtitle","2026 World Tour"),l=p("tour","note_1","Dates shift based on bookings — text early if a city interests you."),m=p("tour","note_2","Deposits required for all touring bookings. Hotel provided as incall at each stop — book at standard rates."),L=p("tour","note_3","For international cities,"),P=p("tour","home_base_label","Current Location"),u=G(),n=Q(),{activeStop:A}=V(),[E,f]=q(),d=E.get("city")??void 0,{trackInteraction:b}=W(),$=Z(),[B,_]=s.useState(!1),H=s.useMemo(()=>{if(n.tour.length===0)return[];const o=n.identity.location,a=x(new Date,"yyyy-MM-dd"),R=[...n.tour].sort((i,g)=>i.startDate.localeCompare(g.startDate)),C=[];let h=a;for(const i of R){if(h<i.startDate&&C.push({city:o,startDate:h,endDate:x(le(F(i.startDate)),"yyyy-MM-dd")}),i.endDate==null)break;const g=x(M(F(i.endDate),1),"yyyy-MM-dd");g>h&&(h=g)}return C.filter(i=>i.startDate<=i.endDate)},[n.tour,n.identity.location]),y=s.useCallback(o=>{o?f(a=>(a.set("city",o),a),{replace:!0}):f(a=>(a.delete("city"),a),{replace:!0})},[f]),I=x(new Date,"yyyy-MM-dd"),k=n.tour.filter(o=>o.startDate>I),w=s.useRef(null),[O,U]=s.useState(!1);return s.useEffect(()=>{const o=w.current;if(!o)return;const a=()=>{U(o.scrollHeight>o.clientHeight+4&&o.scrollTop+o.clientHeight<o.scrollHeight-4)};return a(),o.addEventListener("scroll",a,{passive:!0}),()=>o.removeEventListener("scroll",a)},[k.length]),s.useEffect(()=>{if(!d)return;const o=document.getElementById(d);o&&o.scrollIntoView({behavior:"smooth",block:"center"})},[d]),t.jsxs(t.Fragment,{children:[t.jsxs(J,{title:e,subtitle:c,headingLevel:1,id:"tour",children:[$==="clients"&&t.jsx(S,{to:"/booking",style:{fontSize:"0.875rem",color:u.colors.primary,display:"inline-block",marginBottom:"1.5rem"},onClick:()=>{const o={elementType:"link",eventName:"tour_cta",eventLabel:"check_availability",pageUrl:window.location.href,conversionGoal:"booking",segment:"clients"};b({type:"click",data:o})},children:"Check availability →"}),t.jsxs(pe,{children:[l," ",m," ",L," ",t.jsx(S,{to:"/booking",children:"book directly"})," for availability and logistics."]}),n.tour.length>0&&t.jsxs(xe,{children:[t.jsx(fe,{children:t.jsx(s.Suspense,{fallback:t.jsx(v,{$height:"380px"}),children:t.jsx(ce,{stops:n.tour,selectedCity:d,onSelect:y,homebasePeriods:H})})}),t.jsxs(be,{children:[t.jsx(s.Suspense,{fallback:t.jsx(v,{$height:"210px"}),children:t.jsx(me,{stops:n.tour,selectedCity:d,onSelect:y,homebaseCity:n.identity.location})}),k.length>0&&t.jsxs($e,{children:[t.jsxs(ke,{ref:w,children:[t.jsx(je,{children:"Upcoming Stops"}),k.map((o,a)=>t.jsxs(Se,{onClick:()=>y(X(o.city)),children:[t.jsx(Te,{$color:re[o.status]}),t.jsxs(_e,{children:[o.city,o.state?`, ${o.state}`:""]}),t.jsx(we,{children:K(o.startDate,o.endDate)})]},a))]}),t.jsx(ve,{$visible:O})]})]})]}),!A&&t.jsxs(D,{as:ue,children:[t.jsx(ie,{size:16,style:{color:u.colors.primary,flexShrink:0}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx(ye,{children:P}),t.jsx(he,{"data-magic-title":!0,children:n.identity.location}),n.identity.incallCity&&t.jsxs(ge,{children:["Incall: ",n.identity.incallCity]})]})]}),t.jsx(s.Suspense,{fallback:t.jsx(Ce,{children:Array.from({length:6},(o,a)=>t.jsx(v,{$height:"180px"},a))}),children:t.jsx(de,{stops:n.tour,contact:n.contact,selectedCity:d,onSelect:y})})]}),t.jsxs(D,{as:Pe,children:[t.jsx(j,{size:18,style:{color:u.colors.primary,flexShrink:0,marginTop:"3px"}}),t.jsxs(Ae,{children:[t.jsx(Ee,{"data-magic-title":!0,children:"Bring Quinn to your city"}),t.jsx(Be,{children:"Your city isn't on the schedule — or you don't want to wait. FMTY is a private full-day arrangement: you handle flights and hotel, Quinn arrives and stays. Text to start the conversation."}),t.jsxs(He,{onClick:()=>{b({type:"click",data:{elementType:"button",eventName:"tour_fmty_action_cta",eventLabel:"open_contact",pageUrl:window.location.href,conversionGoal:"contact",segment:$??"default"}}),_(!0)},children:[t.jsx(j,{size:14}),"Bring Quinn to my city"]}),t.jsx(te,{source:"tour-page"})]})]}),t.jsxs(De,{to:"/fmty",onClick:()=>b({type:"click",data:{elementType:"link",eventName:"tour_fmty_crosslink",eventLabel:"fmty_page",pageUrl:window.location.href,segment:$??"default"}}),children:[t.jsx(j,{size:16,style:{color:u.colors.primary,flexShrink:0,marginTop:"3px"}}),t.jsxs(Fe,{children:[t.jsx(ze,{children:"Fly Me To You"}),t.jsx(Me,{children:"Tour stops fill based on confirmed bookings — your city may not make the schedule. FMTY is a different arrangement: you commission a private visit, you arrange travel, Quinn arrives on your timeline."})]}),t.jsx(Le,{children:"See FMTY →"})]}),B&&ee.createPortal(t.jsx(oe,{onClose:()=>_(!1),presetInquiryType:"fmty",presetSubject:"I'd like to bring you to [city]"}),document.body)]})}const Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"}));export{ie as H,Ve as T,M as a};
//# sourceMappingURL=TourPage-DnluV7Wj.js.map
