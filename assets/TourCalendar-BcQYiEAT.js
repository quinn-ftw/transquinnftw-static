import{r as m,j as s,a as x,f as J,D as Q,g as X,A as V,E as ee}from"./index-DBvZCzBm.js";import{t as H,c as A,n as F,s as K,g as te,f as j,b as U}from"./format-BShlYbJy.js";import{a as re,H as ne}from"./TourPage-DnluV7Wj.js";import{H as Y,T as C}from"./tourColors-PTRzFvk1.js";import{p as S}from"./parseISO-DcdnS0v5.js";import"./TouringOptIn-5QarZln9.js";import"./client-Cjg1XvbA.js";import"./WriteOutageNotice-CT8Bjivk.js";import"./circle-alert-2nX0nLA0.js";import"./loader-DC59dBk5.js";import"./ContactModal-Cqt7IcAj.js";import"./ActivityChecklist-DhCuM_OY.js";import"./phone-BQxk50ay.js";import"./arrow-left-C_IAQEAv.js";import"./plane-BkwP_VVo.js";function L(e,t,r){const n=H(e,r==null?void 0:r.in);if(isNaN(t))return A(e,NaN);if(!t)return n;const a=n.getDate(),o=A(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const d=o.getDate();return a>=d?o:(n.setFullYear(o.getFullYear(),o.getMonth(),a),n)}function oe(e,t){let r,n=t==null?void 0:t.in;return e.forEach(a=>{!n&&typeof a=="object"&&(n=A.bind(null,a));const o=H(a,n);(!r||r<o||isNaN(+o))&&(r=o)}),A(n,r||NaN)}function T(e,t,r){const[n,a]=F(r==null?void 0:r.in,e,t);return+K(n)==+K(a)}function ae(e,t){const r=H(e,t==null?void 0:t.in),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function se(e,t){const[r,n]=F(e,t.start,t.end);return{start:r,end:n}}function P(e,t){const{start:r,end:n}=se(t==null?void 0:t.in,e);let a=+r>+n;const o=a?+r:+n,d=a?n:r;d.setHours(0,0,0,0);let p=1;const l=[];for(;+d<=o;)l.push(A(r,d)),d.setDate(d.getDate()+p),d.setHours(0,0,0,0);return a?l.reverse():l}function z(e,t){const r=H(e,t==null?void 0:t.in);return r.setDate(1),r.setHours(0,0,0,0),r}function ie(e,t){var p,l,v,f;const r=te(),n=(t==null?void 0:t.weekStartsOn)??((l=(p=t==null?void 0:t.locale)==null?void 0:p.options)==null?void 0:l.weekStartsOn)??r.weekStartsOn??((f=(v=r.locale)==null?void 0:v.options)==null?void 0:f.weekStartsOn)??0,a=H(e,t==null?void 0:t.in),o=a.getDay(),d=(o<n?-7:0)+6-(o-n);return a.setDate(a.getDate()+d),a.setHours(23,59,59,999),a}function ce(e,t){return H(e,t==null?void 0:t.in).getDay()}function de(e,t,r){const[n,a]=F(r==null?void 0:r.in,e,t);return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()}function G(e,t,r){return L(e,-1,r)}function le(e){const{itemCount:t,orientation:r="vertical",columns:n=1,loop:a=!0}=e,[o,d]=m.useState(0),p=m.useCallback(h=>{d(c=>{const u=c+h;return a?(u%t+t)%t:Math.max(0,Math.min(u,t-1))})},[t,a]),l=m.useCallback(h=>{const u={ArrowDown:()=>{(r==="vertical"||r==="grid")&&p(r==="grid"?n:1)},ArrowUp:()=>{(r==="vertical"||r==="grid")&&p(r==="grid"?-n:-1)},ArrowRight:()=>{(r==="horizontal"||r==="grid")&&p(1)},ArrowLeft:()=>{(r==="horizontal"||r==="grid")&&p(-1)},Home:()=>d(0),End:()=>d(t-1)}[h.key];u&&(h.preventDefault(),u())},[r,n,p,t]),v=m.useMemo(()=>({role:"listbox","aria-activedescendant":`item-${o}`,onKeyDown:l,tabIndex:0}),[o,l]),f=m.useCallback(h=>({id:`item-${h}`,role:"option","aria-selected":h===o,onClick:()=>d(h)}),[o]);return{activeIndex:o,setActiveIndex:d,containerProps:v,getItemProps:f}}function ue(e="polite"){const[t,r]=m.useState(""),[n,a]=m.useState(e),o=m.useCallback((p,l)=>{l&&a(l),r(""),requestAnimationFrame(()=>r(p))},[]),d=m.useMemo(()=>({role:"status","aria-live":n,"aria-atomic":!0,style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:t}),[n,t]);return{announce:o,liveRegionProps:d,announcement:t}}var ge=x.div`
  border: 1px solid ${({theme:e})=>e.colors.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.background.primary};
  position: relative;
  ${({$fillHeight:e})=>e?"flex: 1; display: flex; flex-direction: column; min-height: 0;":""}
`,pe=x.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: ${({theme:e})=>e.colors.background.secondary};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
`,fe=x.div`
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.colors.text.secondary};
  text-align: center;
`,me=x.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  outline: none;
  ${({$fillHeight:e,$rowCount:t})=>e?`flex: 1; min-height: 0; grid-template-rows: repeat(${t??5}, 1fr);`:""}
`,xe=x.div`
  min-height: ${({$minHeight:e})=>e}px;
  padding: ${({theme:e})=>e.spacing.sm};
  border-right: 1px solid ${({theme:e})=>e.colors.border.default};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.default};
  background: ${({$isCurrentMonth:e,$isToday:t,theme:r})=>t?`color-mix(in srgb, ${r.colors.primary.main} 3%, ${r.colors.background.primary})`:e?r.colors.background.primary:r.colors.background.secondary};
  opacity: ${({$isCurrentMonth:e})=>e?1:.5};
  cursor: ${({$clickable:e})=>e?"pointer":"default"};
  outline: ${({$focused:e,theme:t})=>e?`2px solid ${t.colors.primary.main}`:"none"};
  outline-offset: -2px;

  &:nth-child(7n) {
    border-right: none;
  }

  &:nth-last-child(-n + 7) {
    border-bottom: none;
  }

  ${({$clickable:e,theme:t})=>e?`&:hover {
          background: ${t.colors.background.tertiary};
        }`:""}
`,he=x.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 0.875rem;
  font-weight: ${({$isToday:e})=>e?700:400};
  background: ${({$isToday:e,theme:t})=>e?t.colors.primary.main:"transparent"};
  color: ${({$isToday:e,theme:t})=>e?t.colors.background.primary:t.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,ye=({month:e,weekStartsOn:t=0,minCellHeight:r=100,onDayClick:n,renderDay:a,locale:o,renderDayNumber:d,weekdayFormat:p="short",onMonthChange:l,fillHeight:v})=>{const f=m.useMemo(()=>{const i=z(e),g=ae(e),$=U(i,{weekStartsOn:t}),w=ie(g,{weekStartsOn:t});return P({start:$,end:w})},[e,t]),h=m.useMemo(()=>new Date,[]),c=m.useMemo(()=>{const i=U(new Date,{weekStartsOn:t,locale:o}),g=p==="narrow"?"EEEEE":p==="long"?"EEEE":"EEE";return Array.from({length:7},($,w)=>j(re(i,w),g,{locale:o}))},[t,o,p]),{activeIndex:u,setActiveIndex:y,containerProps:b,getItemProps:D}=le({itemCount:f.length,orientation:"grid",columns:7,loop:!1}),{announce:M,liveRegionProps:_}=ue();m.useEffect(()=>{M(j(e,"MMMM yyyy",{locale:o}))},[e,o,M]);const I=m.useCallback(i=>{var g;if((g=b.onKeyDown)==null||g.call(b,i),l&&i.key==="PageDown")i.preventDefault(),l(L(e,1));else if(l&&i.key==="PageUp")i.preventDefault(),l(G(e));else if(i.key==="Enter"||i.key===" "){i.preventDefault();const $=f[u];$&&n&&n($)}},[b,l,n,e,f,u]),k=Math.ceil(f.length/7);return s.jsxs(ge,{$fillHeight:v,children:[s.jsx("div",{..._}),s.jsx(pe,{role:"row","aria-hidden":"true",children:c.map((i,g)=>s.jsx(fe,{children:i},g))}),s.jsx(me,{role:"grid","aria-label":"Calendar","aria-activedescendant":b["aria-activedescendant"],tabIndex:b.tabIndex,onKeyDown:I,$fillHeight:v,$rowCount:k,children:f.map((i,g)=>{const $=de(i,e),w=T(i,h),E=ce(i),W={date:i,isCurrentMonth:$,isToday:w,isWeekend:E===0||E===6},q=D(g),Z=u===g;return s.jsxs(xe,{...q,role:"gridcell","aria-label":j(i,"EEEE, MMMM d, yyyy",{locale:o}),$isCurrentMonth:$,$isToday:w,$minHeight:r,$clickable:!!n,$focused:Z,onClick:()=>{y(g),n==null||n(i)},children:[d?d(W):s.jsx(he,{$isToday:w,children:j(i,"d")}),a==null?void 0:a(W)]},i.toISOString())})})]})},be=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,$e=x.span`
  font-size: 1.25rem;
  font-weight: 600;
  min-width: 180px;
  text-align: center;
  color: ${({theme:e})=>e.colors.text.primary};
`,R=x.button`
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
  border: 1px solid ${({theme:e})=>e.colors.border.hover};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.primary};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${({theme:e})=>e.colors.background.secondary};
  }
`,ve=({month:e,onPrev:t,onNext:r,locale:n,showToday:a,onToday:o})=>s.jsxs(be,{children:[s.jsx(R,{type:"button",onClick:t,"aria-label":"Previous month",children:"← Prev"}),a&&o&&s.jsx(R,{type:"button",onClick:o,"aria-label":"Go to today",children:"Today"}),s.jsx($e,{children:j(e,"MMMM yyyy",{locale:n})}),s.jsx(R,{type:"button",onClick:r,"aria-label":"Next month",children:"Next →"})]}),ke=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
  ${({$fillHeight:e})=>e?"flex: 1; min-height: 0;":""}
`,we=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Me=x.button`
  display: block;
  width: 100%;
  padding: 2px ${({theme:e})=>e.spacing.xs};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: transparent;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 0.7rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;

  &:hover {
    background: ${({theme:e})=>e.colors.background.tertiary};
  }
`,je=({month:e,onMonthChange:t,items:r,renderItem:n,onDayClick:a,weekStartsOn:o=0,minCellHeight:d=100,showNavigation:p=!0,headerContent:l,locale:v,maxVisibleItems:f,onOverflowClick:h,renderDayNumber:c,weekdayFormat:u,fillHeight:y})=>{const b=()=>t(G(e)),D=()=>t(L(e,1)),M=()=>t(new Date),_=m.useMemo(()=>{const k=new Map;if(!r)return k;for(const i of r){const g=j(i.date,"yyyy-MM-dd"),$=k.get(g);$?$.push(i):k.set(g,[i])}return k},[r]),I=k=>{const i=j(k.date,"yyyy-MM-dd"),g=_.get(i);if(!n||!g||g.length===0)return null;const $=f!=null?g.slice(0,f):g,w=f!=null?g.length-f:0;return s.jsxs(s.Fragment,{children:[$.map(E=>s.jsx(m.Fragment,{children:n(E,k.date)},E.id)),w>0&&s.jsxs(Me,{type:"button",onClick:E=>{E.stopPropagation(),h==null||h(k.date,g)},children:["+",w," more"]})]})};return s.jsxs(ke,{$fillHeight:y,children:[p&&s.jsxs(we,{children:[l,s.jsx(ve,{month:e,onPrev:b,onNext:D,locale:v,showToday:!0,onToday:M})]}),s.jsx(ye,{month:e,weekStartsOn:o,minCellHeight:d,onDayClick:a,renderDay:I,locale:v,renderDayNumber:c,weekdayFormat:u,onMonthChange:t,fillHeight:y})]})},De=x.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 2px ${({theme:e})=>e.spacing.xs};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: color-mix(in srgb, ${({$color:e})=>e} 8%, transparent);
  color: ${({$color:e})=>e};
  font-size: 0.7rem;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: background 0.1s;
  margin-bottom: 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    background: color-mix(in srgb, ${({$color:e})=>e} 15%, transparent);
  }
`,B=({onClick:e,children:t,color:r="#3b82f6"})=>s.jsx(De,{type:"button",$color:r,onClick:n=>{n.stopPropagation(),e==null||e()},children:t});function Ee(e){const t=S(e.startDate),r=e.endDate?S(e.endDate):t;return P({start:t,end:r}).map(n=>({kind:"stop",id:`${e.city}-${j(n,"yyyy-MM-dd")}`,date:n,stop:e,isStart:T(n,t),isEnd:T(n,r)}))}function Ce(e,t,r){const n=S(t),a=S(r);return P({start:n,end:a}).map(o=>({kind:"home",id:`home-${j(o,"yyyy-MM-dd")}`,date:o,city:e,isStart:T(o,n),isEnd:T(o,a)}))}const Se=x.div`
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 40%, transparent);
  border: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 8%, transparent);
  border-radius: 12px;
  padding: 1.5rem;

  .calendar-grid-cell {
    min-height: 64px;
  }
`,He=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid color-mix(in srgb, ${e=>e.theme.colors.primary} 8%, transparent);
`,N=x.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.7rem;
  color: ${e=>e.theme.colors.text.secondary};
`,O=x.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: ${e=>e.$color};
`;function Ge({stops:e,selectedCity:t,onSelect:r,homebasePeriods:n}){const a=J(),o=Q(),{trackInteraction:d}=X(),p=o.colors.primary.light,[l,v]=m.useState(()=>{const c=z(new Date),u=n==null?void 0:n[0],y=u?S(u.startDate):e.reduce((b,D)=>{const M=S(D.startDate);return b===null||M<b?M:b},null)??new Date;return oe([z(y),c])}),f=m.useMemo(()=>{const c=e.flatMap(Ee);return[...(n??[]).flatMap(y=>Ce(y.city,y.startDate,y.endDate)),...c]},[e,n]),h=m.useCallback((c,u)=>{a.button.click();const y={elementType:"button",eventName:"tour_chip",eventLabel:c,feature:"tour",action:u?"deselect":"select",resulting_state:u?"none":c,pageUrl:window.location.href};d({type:"click",data:y}),r==null||r(u?null:c)},[a,d,r]);return s.jsxs(Se,{children:[s.jsx(je,{month:l,onMonthChange:v,items:f,minCellHeight:60,weekdayFormat:"narrow",renderItem:c=>{if(c.kind==="home"){const M=c.isStart?s.jsxs(s.Fragment,{children:[s.jsx(ne,{size:13,style:{flexShrink:0}})," ",c.city]}):" ";return s.jsx(B,{color:Y,children:M})}const u=V(c.stop.city),y=t===u,b=y?p:c.stop.status==="upcoming"?C[c.stop.bookingStatus]??C.conditional:C[c.stop.status],D=c.isStart?`${c.stop.city}${c.isEnd?` · ${ee(c.stop.startDate,c.stop.endDate,{openEnded:"plus"})}`:""}`:" ";return s.jsx(B,{color:b,onClick:r?()=>h(u,y):void 0,children:D})}}),s.jsxs(He,{children:[s.jsxs(N,{children:[s.jsx(O,{$color:Y}),"Home Base"]}),s.jsxs(N,{children:[s.jsx(O,{$color:C.active}),"Active"]}),s.jsxs(N,{children:[s.jsx(O,{$color:C.confirmed}),"Confirmed"]}),s.jsxs(N,{children:[s.jsx(O,{$color:C.conditional}),"Unconfirmed"]}),s.jsxs(N,{children:[s.jsx(O,{$color:C.completed}),"Completed"]})]})]})}export{Ge as TourCalendar};
//# sourceMappingURL=TourCalendar-BcQYiEAT.js.map
