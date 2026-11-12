import{a3 as be,g as ye,s as xe,e as ve,a4 as _e,p as n,r as b,j as t,f as $e,a,x as ke,l as ee,a5 as Se}from"./index-DBvZCzBm.js";import{E as je,P as De,A as we,i as Le,a as Ce}from"./ActivityChecklist-DhCuM_OY.js";import{F as ze,W as Pe,a as V}from"./WriteOutageNotice-CT8Bjivk.js";function Re(e,c,m,r){if(!e.trim())return m;const o=c.replace(/\D/g,"")||"1";return Ce(e,o)?void 0:r}function M(e){const c=e.getFullYear(),m=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${c}-${m}-${r}`}function Te(){return M(new Date)}function Ee(){const e=new Date;return e.setDate(e.getDate()+1),M(e)}function Ae(){const e=new Date;return e.setDate(e.getDate()+90),M(e)}function Fe(e,c){return e&&e.length>0?e:c&&c.length>0?[{category:"Interests",items:c}]:[]}function Ne({selected:e,onToggle:c,error:m}){const[r,o]=b.useState(0),h=n("booking_form","dates_clear","Clear"),p=new Date,v=new Date(p.getFullYear(),p.getMonth()+r,1),x=v.getFullYear(),f=v.getMonth(),_=v.toLocaleString("default",{month:"long",year:"numeric"}),C=v.getDay(),$=new Date(x,f+1,0).getDate(),g=Ee(),k=Ae(),y=[];for(let i=0;i<C;i++)y.push(null);for(let i=1;i<=$;i++){const S=String(f+1).padStart(2,"0"),P=String(i).padStart(2,"0"),j=`${x}-${S}-${P}`;y.push({day:i,dateStr:j,disabled:j<g||j>k})}const z=Te();return t.jsxs(Be,{$error:m,children:[t.jsxs(He,{children:[t.jsx(X,{type:"button",onClick:()=>o(i=>i-1),children:"‹"}),t.jsx(Ue,{children:_}),t.jsx(X,{type:"button",onClick:()=>o(i=>i+1),children:"›"})]}),t.jsxs(Ve,{children:[["Su","Mo","Tu","We","Th","Fr","Sa"].map(i=>t.jsx(Je,{children:i},i)),y.map((i,S)=>i===null?t.jsx(Z,{$empty:!0,$disabled:!1,$selected:!1,$today:!1},`e-${S}`):t.jsx(Z,{$empty:!1,$selected:e.includes(i.dateStr),$disabled:i.disabled,$today:i.dateStr===z,type:"button",disabled:i.disabled,onClick:()=>!i.disabled&&c(i.dateStr),children:i.day},i.dateStr))]}),e.length>0&&t.jsxs(Ke,{children:[e.sort().join(", "),t.jsx(Qe,{type:"button",onClick:()=>e.forEach(c),children:h})]})]})}function qe(e,c,m){const[r,o]=b.useState({name:"",email:"",countryCode:"+1",phone:"",preferSms:!0,serviceType:e??"",timePeriod:"",locationNote:c??"",selectedDates:[],selectedActivities:[],message:""}),[h,p]=b.useState({}),[v,x]=b.useState("idle"),[f,_]=b.useState(""),[C,$]=b.useState(!1),g=$e(),k=n("booking_form","error_name_required","Name is required"),y=n("booking_form","error_email_invalid","Enter a valid email address"),z=n("booking_form","error_phone_required","Phone is required"),i=n("booking_form","error_phone_invalid","Enter a valid phone number"),S=n("booking_form","error_service_type_required","Select a service type"),P=n("booking_form","error_dates_required","Select at least one date"),j=n("booking_form","error_submit_generic","Something went wrong. Please try again.");function T(l,d){g.form.input(),m==null||m(l),o(u=>({...u,[l]:d})),h[l]&&p(u=>({...u,[l]:void 0}))}function E(l){m==null||m("dates"),o(d=>({...d,selectedDates:d.selectedDates.includes(l)?d.selectedDates.filter(u=>u!==l):[...d.selectedDates,l]})),p(d=>({...d,selectedDates:void 0}))}function A(l){m==null||m("activities"),o(d=>({...d,selectedActivities:d.selectedActivities.includes(l)?d.selectedActivities.filter(u=>u!==l):[...d.selectedActivities,l]}))}function F(){const l={};(!r.name.trim()||r.name.trim().length<2)&&(l.name=k);const d=r.email.trim();d&&!Le(d)&&(l.email=y);const u=Re(r.phone,r.countryCode,z,i);return u&&(l.phone=u),r.serviceType||(l.serviceType=S),r.selectedDates.length===0&&(l.selectedDates=P),p(l),Object.keys(l).length>0?(g.form.error(),!1):!0}async function N(){if(!F())return;x("submitting"),_(""),$(!1);const l=r.serviceType==="outcall"||r.serviceType==="fmty",d=Se(),u=[];r.message.trim()&&u.push(r.message.trim()),l&&r.locationNote.trim()&&u.push(`Location: ${r.locationNote.trim()}`),r.timePeriod&&u.push(`Time: ${r.timePeriod}`),r.selectedActivities.length>0&&u.push(`Activities: ${r.selectedActivities.join(", ")}`),u.push(r.preferSms?"Prefer SMS":"Prefer phone call");try{const D=await fetch(`/entertainer/${encodeURIComponent(d)}/bookings/requests`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({org_id:d,source:"booking",service_type:r.serviceType,requested_dates:r.selectedDates.sort(),notes:u.join(`
`),contact:{name:r.name.trim(),email:r.email.trim(),phone:r.phone.trim()}})});if(!D.ok){const R=await D.json().catch(()=>({}));D.status>=400&&D.status<500&&D.status!==404?_(R.error??R.message??j):($(!0),_(V)),g.form.error(),x("error");return}g.form.success(),x("success")}catch{$(!0),_(V),g.form.error(),x("error")}}return{fields:r,errors:h,status:v,serverError:f,backendDown:C,setField:T,toggleDate:E,toggleActivity:A,submit:N}}function at({initialServiceType:e,initialLocationNote:c}={}){var U;const{touchField:m,buildSnapshot:r}=be(),{fields:o,errors:h,status:p,serverError:v,backendDown:x,setField:f,toggleDate:_,toggleActivity:C,submit:$}=qe(e,c,m),{trackInteraction:g}=ye(),k=xe(),y=ve(),z=_e("booking"),i=Fe(k.about.activities,k.about.availableFor),S=o.serviceType==="outcall"||o.serviceType==="fmty",P=n("booking_form","success_title","Request received"),j=n("booking_form","success_sms","Expect a reply via SMS within 24 hours."),T=n("booking_form","success_call","Expect a phone call within 24 hours."),E=n("booking_form","dates_label","Select dates *"),A=n("booking_form","time_period_label","Preferred time of day"),F=n("booking_form","service_type_label","Service type *"),N=n("booking_form","time_afternoon_label","Afternoon"),l=n("booking_form","time_afternoon_hint","noon–5pm"),d=n("booking_form","time_evening_label","Evening"),u=n("booking_form","time_evening_hint","5–10pm"),D=n("booking_form","time_late_night_label","Late night"),R=n("booking_form","time_late_night_hint","10pm+"),W=n("booking_form","time_overnight_label","Overnight"),te=n("booking_form","time_overnight_hint","stay"),oe=n("booking_form","time_flexible_label","Flexible"),re=n("booking_form","time_flexible_hint","any time"),ne=n("booking_form","service_incall_label","Incall"),ie=n("booking_form","service_outcall_label","Outcall"),se=n("booking_form","service_fmty_label","Fly Me To You"),ae=n("booking_form","location_city_label","Your city"),ce=n("booking_form","location_area_label","General area / neighborhood"),le=n("booking_form","name_label","Name *"),me=n("booking_form","email_label","Email (optional)"),de=n("booking_form","email_placeholder","your@email.com"),pe=n("booking_form","message_label","Anything else I should know? (optional)"),ue=n("booking_form","submit_label","Request booking"),he=[{value:"afternoon",label:N,hint:l},{value:"evening",label:d,hint:u},{value:"late-night",label:D,hint:R},{value:"overnight",label:W,hint:te},{value:"flexible",label:oe,hint:re}],fe=[{value:"incall",label:ne},{value:"outcall",label:ie},{value:"fmty",label:se}],q=b.useRef(g);q.current=g;const I=b.useRef(y);I.current=y;const Y=b.useRef(p);Y.current=p;const B=b.useRef(o);B.current=o;const H=b.useRef(r);return H.current=r,b.useEffect(()=>{const s=I.current??"default";return q.current({type:"click",data:{elementType:"form",eventName:"booking_form_open",eventLabel:e??"unset",pageUrl:window.location.href,segment:s}}),()=>{Y.current!=="success"&&q.current({type:"click",data:{elementType:"form",eventName:"booking_form_abandon",eventLabel:B.current.serviceType||"unset",pageUrl:window.location.href,segment:I.current??"default",formSnapshot:H.current()}})}},[]),b.useEffect(()=>{(p==="success"||p==="error")&&g({type:"click",data:{elementType:"form",eventName:`booking_form_${p}`,eventLabel:o.serviceType||"unset",pageUrl:window.location.href,...p==="success"?{conversionGoal:"booking"}:{},segment:y??"default"}})},[p,g,o.serviceType,y]),z.enabled?p==="success"?t.jsxs(tt,{children:[t.jsx(ot,{children:P}),t.jsxs(rt,{children:[o.preferSms?j:T,o.email.trim()&&t.jsxs(t.Fragment,{children:[" A confirmation has been sent to ",o.email.trim(),"."]})]})]}):t.jsxs(Ge,{noValidate:!0,onSubmit:s=>{s.preventDefault(),g({type:"click",data:{elementType:"form",eventName:"booking_form_submit",eventLabel:o.serviceType||"unset",pageUrl:window.location.href,segment:y??"default"}}),$()},children:[t.jsxs(w,{children:[t.jsx(L,{htmlFor:"bf-dates",children:E}),t.jsx(Ne,{selected:o.selectedDates,onToggle:_,error:!!h.selectedDates}),h.selectedDates&&t.jsx(G,{children:h.selectedDates})]}),t.jsxs(w,{children:[t.jsx(L,{children:A}),t.jsx(K,{children:he.map(({value:s,label:O,hint:ge})=>t.jsxs(Q,{$selected:o.timePeriod===s,children:[t.jsx("input",{type:"radio",name:"timePeriod",value:s,checked:o.timePeriod===s,onChange:()=>f("timePeriod",s)}),O," ",t.jsx(Ye,{children:ge})]},s))})]}),t.jsxs(w,{children:[t.jsx(L,{children:F}),t.jsx(K,{children:fe.map(({value:s,label:O})=>t.jsxs(Q,{$selected:o.serviceType===s,children:[t.jsx("input",{type:"radio",name:"serviceType",value:s,checked:o.serviceType===s,onChange:()=>f("serviceType",s)}),O]},s))}),h.serviceType&&t.jsx(G,{children:h.serviceType})]}),S&&t.jsxs(w,{children:[t.jsx(L,{htmlFor:"bf-location",children:o.serviceType==="fmty"?ae:ce}),t.jsx(J,{id:"bf-location",type:"text",value:o.locationNote,onChange:s=>f("locationNote",s.target.value)})]}),t.jsxs(Me,{children:[t.jsxs(w,{children:[t.jsx(L,{htmlFor:"bf-name",children:le}),t.jsx(J,{id:"bf-name",type:"text",value:o.name,onChange:s=>f("name",s.target.value),$error:!!h.name,autoComplete:"name"}),h.name&&t.jsx(G,{children:h.name})]}),t.jsx(je,{id:"bf-email",label:me,placeholder:de,value:o.email,onChange:s=>f("email",s),error:h.email})]}),t.jsx(De,{countryCode:o.countryCode,phone:o.phone,preferSms:o.preferSms,onCountryCodeChange:s=>f("countryCode",s),onPhoneChange:s=>f("phone",s),onPreferSmsChange:s=>f("preferSms",s),error:h.phone}),i.length>0&&t.jsx(w,{children:t.jsx(we,{groups:i,selected:o.selectedActivities,onToggle:C})}),t.jsxs(w,{children:[t.jsx(L,{htmlFor:"bf-message",children:pe}),t.jsx(We,{id:"bf-message",value:o.message,onChange:s=>f("message",s.target.value)})]}),p==="error"&&x&&t.jsx(Pe,{phone:((U=k.contact)==null?void 0:U.phone)??""}),p==="error"&&!x&&v&&t.jsx(Xe,{children:v}),t.jsx(Ze,{type:"submit",disabled:p==="submitting",children:p==="submitting"?t.jsx(et,{}):ue})]}):t.jsx(ze,{})}const Ie=ee`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,Oe=ee`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Ge=a.form`
  padding: ${e=>e.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,Me=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.md};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,w=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,L=a.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.primary};
`,J=a.input`
  width: 100%;
  padding: 12px 12px;
  min-height: 44px;
  background: ${e=>e.theme.colors.background.secondary};
  border: 1px solid ${e=>e.$error?e.theme.colors.error:e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-family: inherit;
  transition: border-color 0.15s;
  box-sizing: border-box;
  &:focus { outline: none; border-color: ${e=>e.theme.colors.primary}; }
`,We=a.textarea`
  width: 100%;
  padding: 10px 12px;
  background: ${e=>e.theme.colors.background.secondary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  transition: border-color 0.15s;
  box-sizing: border-box;
  &:focus { outline: none; border-color: ${e=>e.theme.colors.primary}; }
`,G=a.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.error};
`,K=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  flex-wrap: wrap;
`,Ye=a.span`
  font-size: 0.75rem;
  opacity: 0.6;
`,Q=a.label`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${e=>e.theme.borderRadius.full};
  border: 1px solid ${e=>e.$selected?e.theme.colors.primary:e.theme.colors.border};
  background: ${e=>e.$selected?`${e.theme.colors.primary}18`:"transparent"};
  color: ${e=>e.$selected?e.theme.colors.primary:e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.15s;

  input { display: none; }

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.primary};
  }
`,Be=a.div`
  border: 1px solid ${e=>e.$error?e.theme.colors.error:e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  overflow: hidden;
`,He=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: ${e=>e.theme.colors.background.secondary};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,X=a.button`
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1.125rem;
  cursor: pointer;
  padding: 2px 8px;
  border-radius: ${e=>e.theme.borderRadius.sm};
  &:hover { color: ${e=>e.theme.colors.text.primary}; }
`,Ue=a.span`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.primary};
`,Ve=a.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  padding: 8px;
  background: ${e=>e.theme.colors.background.primary};

  @media (max-width: 480px) {
    padding: 6px;
    gap: 4px;
  }
`,Je=a.div`
  text-align: center;
  font-size: 0.6875rem;
  color: ${e=>e.theme.colors.text.muted};
  padding: 4px 0;
`,Z=a.button`
  text-align: center;
  padding: 6px 4px;
  font-size: 0.8125rem;
  border-radius: ${e=>e.theme.borderRadius.sm};
  border: none;
  cursor: ${({$empty:e,$disabled:c})=>e||c?"default":"pointer"};
  color: ${({$empty:e,$disabled:c,$selected:m,$today:r,theme:o})=>e?"transparent":c?o.colors.text.muted:m?o.colors.primary:r?o.colors.text.primary:o.colors.text.secondary};
  background: ${({$selected:e,$today:c,theme:m})=>e?`${m.colors.primary}18`:c?m.colors.background.secondary:"transparent"};
  font-weight: ${({$selected:e,$today:c})=>e||c?"600":"400"};
  border: 1px solid ${({$selected:e,theme:c})=>e?c.colors.primary:"transparent"};
  opacity: ${({$disabled:e})=>e?.35:1};
  transition: background 0.12s, color 0.12s;

  &:not(:disabled):hover {
    background: ${e=>`${e.theme.colors.primary}10`};
    color: ${e=>e.theme.colors.primary};
  }

  @media (max-width: 480px) {
    min-height: 36px;
    padding: 4px 2px;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Ke=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  background: ${e=>`${e.theme.colors.primary}10`};
  border-top: 1px solid ${e=>e.theme.colors.border};
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.primary};
  flex-wrap: wrap;
  gap: 4px;
`,Qe=a.button`
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.muted};
  font-size: 0.75rem;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  &:hover { color: ${e=>e.theme.colors.text.primary}; }
`,Xe=a.div`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.xs};
  padding: 10px 12px;
  background: ${e=>e.theme.colors.error}18;
  border: 1px solid ${e=>e.theme.colors.error}40;
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.error};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Ze=a.button`
  width: 100%;
  padding: 12px;
  background: ${e=>e.theme.colors.primary};
  color: ${e=>ke(e.theme)};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: ${e=>e.theme.typography.fontSize.base};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  font-family: inherit;
  cursor: pointer;
  transition: opacity 0.15s;
  &:hover:not(:disabled) { opacity: 0.9; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,et=a.div`
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${Oe} 0.7s linear infinite;
  margin: 0 auto;
`,tt=a.div`
  padding: ${e=>e.theme.spacing.xl};
  text-align: center;
  animation: ${Ie} 0.3s ease;
`,ot=a.h3`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  color: ${e=>e.theme.colors.primary};
  margin: 0 0 ${e=>e.theme.spacing.sm};
`,rt=a.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  line-height: 1.6;
  margin: 0;
`;export{at as B};
//# sourceMappingURL=BookingForm-CeSxZfob.js.map
