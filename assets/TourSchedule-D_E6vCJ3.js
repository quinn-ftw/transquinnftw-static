import{g as j,r as c,ay as v,A as T,j as i,M as k,at as y,E as C,$ as w,aA as z,o as N,a as t}from"./index-DBvZCzBm.js";import{C as S}from"./calendar-DM8FF6sa.js";const f=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
`,A=t.div`
  ${N}
  display: flex;
  flex-direction: column;
  background: color-mix(in srgb, ${r=>r.theme.colors.background.secondary} 60%, transparent);
  border: 1px solid ${r=>r.$selected?`color-mix(in srgb, ${r.theme.colors.primary} 55%, transparent)`:`color-mix(in srgb, ${r.theme.colors.primary} 8%, transparent)`};
  border-radius: 12px;
  padding: 1.5rem;
  transition: border-color 300ms, transform 300ms, box-shadow 300ms;
  ${r=>r.$selected&&`box-shadow: 0 0 0 1px color-mix(in srgb, ${r.theme.colors.primary} 20%, transparent), 0 4px 24px color-mix(in srgb, ${r.theme.colors.primary} 8%, transparent);`}
  ${r=>r.$interactive&&"cursor: pointer;"}
  scroll-margin-top: 100px;

  &:hover {
    border-color: ${r=>r.$selected?`color-mix(in srgb, ${r.theme.colors.primary} 70%, transparent)`:`color-mix(in srgb, ${r.theme.colors.primary} 25%, transparent)`};
    transform: translateY(-2px);
  }
`,D=t.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`,F=t.h3`
  font-family: ${r=>r.theme.typography.fontFamily.heading};
  font-size: 1.375rem;
  color: ${r=>r.theme.colors.text.primary};
`,$=t.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${r=>r.theme.colors.text.secondary};
  font-size: 0.875rem;
`,P=t.div`
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid color-mix(in srgb, ${r=>r.theme.colors.primary} 8%, transparent);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
`,l=t.div`
  font-size: 0.8rem;
  color: ${r=>r.theme.colors.text.muted};
  display: flex;
  flex-direction: column;
  gap: 1px;

  span {
    color: ${r=>r.theme.colors.primary};
    font-weight: 600;
  }
`,L=t.p`
  font-size: 0.8rem;
  color: ${r=>r.theme.colors.text.secondary};
  font-style: italic;
  margin-top: 0.5rem;
`,M=t.p`
  font-size: 0.8rem;
  color: ${r=>r.theme.colors.text.muted};
  font-style: italic;
  margin-top: 0.5rem;
`,b=t.h3`
  font-family: ${r=>r.theme.typography.fontFamily.heading};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${r=>r.theme.colors.text.secondary};
  margin: 0 0 1rem;

  &:not(:first-child) {
    margin-top: 2.5rem;
  }
`;function I({stops:r,contact:m,selectedCity:d,onSelect:a}){const{trackInteraction:g}=j(),{upcoming:x,past:h}=c.useMemo(()=>v(r),[r]),p=c.useCallback((e,o,n)=>{const s={elementType:"button",eventName:"tour_chip_click",eventLabel:o,feature:"tour_schedule",action:n?"deselect":"select",resulting_state:n?"none":e,pageUrl:window.location.href};g({type:"click",data:s}),a==null||a(n?null:e)},[g,a]),u=c.useCallback(e=>{const o=T(e.city),n=d===o;return i.jsxs(k,{as:A,id:o,$selected:n,$interactive:!!a,onClick:a?()=>p(o,e.city,n):void 0,children:[i.jsxs(D,{children:[i.jsxs(F,{"data-magic-title":!0,children:[e.city,e.state?`, ${e.state}`:""]}),e.status==="upcoming"?i.jsx(y,{variant:e.bookingStatus,children:e.bookingStatus==="conditional"?"unconfirmed":e.bookingStatus}):i.jsx(y,{variant:e.status,children:e.status})]}),i.jsxs($,{children:[i.jsx(S,{size:16}),C(e.startDate,e.endDate)]}),i.jsxs($,{children:[i.jsx(w,{size:16}),e.city,e.state?`, ${e.state}`:"",e.country&&e.country!=="USA"?`, ${e.country}`:""]}),e.availabilityNote&&i.jsx(L,{children:e.availabilityNote}),e.pricingTiers&&i.jsxs(P,{children:[e.pricingTiers.incall!==void 0&&i.jsxs(l,{children:[i.jsxs("span",{children:["$",e.pricingTiers.incall.toLocaleString()]}),"Incall"]}),e.pricingTiers.outcall!==void 0&&i.jsxs(l,{children:[i.jsxs("span",{children:["$",e.pricingTiers.outcall.toLocaleString()]}),"Outcall"]}),e.pricingTiers.overnight!==void 0&&i.jsxs(l,{children:[i.jsxs("span",{children:["$",e.pricingTiers.overnight.toLocaleString()]}),"Overnight"]})]}),e.notes&&i.jsx(M,{children:e.notes}),i.jsx("div",{style:{marginTop:"auto",paddingTop:"1rem"},onClick:s=>s.stopPropagation(),children:i.jsx(z,{stop:e,contact:m})})]},`${e.city}-${e.startDate}`)},[m,p,a,d]);return i.jsxs(i.Fragment,{children:[x.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(b,{children:"Upcoming"}),i.jsx(f,{children:x.map(u)})]}),h.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(b,{children:"Past Tour Stops"}),i.jsx(f,{children:h.map(u)})]})]})}export{I as TourSchedule};
//# sourceMappingURL=TourSchedule-D_E6vCJ3.js.map
