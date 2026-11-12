import{C as ye,a5 as be,r as m,g as te,f as ne,p as o,j as t,a3 as xe,s as ve,a4 as je,e as _e,aw as Se,a as T,av as Te,ar as Ce,l as se}from"./index-DBvZCzBm.js";import{i as Q,a as V,W as ae,F as ke}from"./WriteOutageNotice-CT8Bjivk.js";import{i as we,a as qe,F as I,L as P,I as Ee,b as R,P as $e,E as Le,c as Ae,d as Ie,T as Pe,C as Re,S as re,e as Fe,f as Ne,g as ze,h as Be,j as Oe,k as Ue,l as H,m as Ge,n as Me,o as J,p as F,q as K,A as Ye,B as De,r as We}from"./ActivityChecklist-DhCuM_OY.js";import{R as N}from"./client-Cjg1XvbA.js";import{C as oe}from"./circle-alert-2nX0nLA0.js";import{L as X}from"./loader-DC59dBk5.js";import{A as Qe}from"./arrow-left-C_IAQEAv.js";/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Z=ye("send",Ve);async function He(e){const s=be();try{const n=await fetch(`/entertainer/${encodeURIComponent(s)}/bookings/requests`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({org_id:s,source:"contact",service_type:e.subject,notes:e.body,contact:{name:e.name,email:e.email??"",phone:e.handle??"",channel:e.channel??""}})});if(n.status===429)throw new N;if(!n.ok){const h=await n.json().catch(()=>({}));return{success:!1,error:h.error??h.message??`Request failed: ${n.status}`}}const l=await n.json();return{success:!0,id:typeof l.id=="number"?l.id:0}}catch(n){if(n instanceof N)throw n;return n instanceof TypeError||n instanceof Error&&/Failed to fetch|NetworkError/i.test(n.message)?{success:!1,error:"Network error. Please check your connection and try again."}:{success:!1,error:n instanceof Error?n.message:"Something went wrong. Please try again."}}}const ce=[{value:"booking",label:"Booking Inquiry"},{value:"tour",label:"Tour / Visiting City"},{value:"fmty",label:"Fly Me To You (FMTY)"},{value:"general",label:"General Question"},{value:"media",label:"Press / Media"}],Je=new Set(["booking","tour","fmty"]),Ke={name:"",email:"",countryCode:"",phone:"",preferSms:!0,inquiryType:"",message:"",selectedActivities:[]};function Xe(e,s){if(!e.trim())return"Phone is required";const n=s.replace(/\D/g,"")||"1";return qe(e,n)?void 0:"Enter a valid phone number"}function ee(e){const s={};(!e.name.trim()||e.name.trim().length<2)&&(s.name="Name is required");const n=e.email.trim();n&&!we(n)&&(s.email="Enter a valid email address");const l=Xe(e.phone,e.countryCode);return l&&(s.phone=l),e.inquiryType||(s.inquiryType="Please select an inquiry type"),(!e.message.trim()||e.message.trim().length<20)&&(s.message="Message must be at least 20 characters"),s}function Ze(e){const s={...Ke,...e!=null&&e.presetInquiryType?{inquiryType:e.presetInquiryType}:{},...e!=null&&e.presetSubject?{message:e.presetSubject}:{}},[n,l]=m.useState(s),[h,y]=m.useState({}),[a,d]=m.useState("idle"),[r,u]=m.useState(""),[v,S]=m.useState(!1),{trackInteraction:C}=te(),b=ne();function k(i,f){var p;b.form.input(),(p=e==null?void 0:e.onFieldTouched)==null||p.call(e,i),l(j=>({...j,[i]:f})),h[i]&&y(j=>({...j,[i]:void 0}))}function x(i){var f;(f=e==null?void 0:e.onFieldTouched)==null||f.call(e,"activities"),l(p=>({...p,selectedActivities:p.selectedActivities.includes(i)?p.selectedActivities.filter(j=>j!==i):[...p.selectedActivities,i]}))}function _(){const i=ee(n);return Object.keys(i).length>0?(y(i),b.form.error(),!1):!0}async function c(){var q;const i=ee(n);if(Object.keys(i).length>0){y(i),b.form.error();return}d("submitting"),u(""),S(!1);const f=n.email.trim(),p=((q=ce.find(g=>g.value===n.inquiryType))==null?void 0:q.label)??"Contact form submission",j=n.selectedActivities.length>0?`

Activities of interest: ${n.selectedActivities.join(", ")}`:"",$=n.phone.trim()?`${n.countryCode.trim()?n.countryCode.trim()+" ":""}${n.phone.trim()}`:void 0;try{const g=await He({name:n.name.trim(),email:f||void 0,handle:$,channel:n.preferSms?"imessage":"email",subject:p,body:n.message.trim()+j});if(!g.success){Q(g.error)?(S(!0),u(V)):u(g.error),b.form.error(),d("error");return}C({type:"click",data:{elementType:"submit",eventName:"contact_submit",eventLabel:n.inquiryType||"general",pageUrl:window.location.href,conversionGoal:"contact"}}),b.form.success(),d("success")}catch(g){if(g instanceof N)u(g.message);else{const E=g instanceof Error?g.message:"Failed to fetch";Q(E)?(S(!0),u(V)):u(E)}b.form.error(),d("error")}}return{fields:n,errors:h,status:a,serverError:r,backendDown:v,setField:k,toggleActivity:x,advance:_,submit:c}}function et({fields:e,errors:s,status:n,serverError:l,backendDown:h,contactPhone:y,setField:a}){const d=e.message.trim().length,r=o("contact_form","name_label","Name *"),u=o("contact_form","name_placeholder","Your name"),v=o("contact_form","email_label","Email (optional)"),S=o("contact_form","email_placeholder","your@email.com"),C=o("contact_form","inquiry_type_label","Inquiry Type *"),b=o("contact_form","inquiry_type_aria_label","Inquiry type"),k=o("contact_form","message_label","Message *"),x=o("contact_form","message_placeholder","Tell Quinn what you have in mind…"),_=o("contact_form","message_char_min"," / 20 min");return t.jsxs(t.Fragment,{children:[t.jsxs(I,{children:[t.jsx(P,{htmlFor:"contact-name",children:r}),t.jsx(Ee,{id:"contact-name",type:"text",placeholder:u,value:e.name,onChange:c=>a("name",c.target.value),$error:!!s.name,autoComplete:"name"}),s.name&&t.jsx(R,{children:s.name})]}),t.jsx($e,{countryCode:e.countryCode,phone:e.phone,preferSms:e.preferSms,onCountryCodeChange:c=>a("countryCode",c),onPhoneChange:c=>a("phone",c),onPreferSmsChange:c=>a("preferSms",c),error:s.phone}),t.jsx(Le,{id:"contact-email",label:v,placeholder:S,value:e.email,onChange:c=>a("email",c),error:s.email}),t.jsxs(I,{children:[t.jsx(P,{children:C}),t.jsx(Ae,{role:"group","aria-label":b,children:ce.map(c=>t.jsx(Ie,{type:"button",$active:e.inquiryType===c.value,onClick:()=>a("inquiryType",c.value),"aria-pressed":e.inquiryType===c.value,children:c.label},c.value))}),s.inquiryType&&t.jsx(R,{children:s.inquiryType})]}),t.jsxs(I,{children:[t.jsx(P,{htmlFor:"contact-message",children:k}),t.jsx(Pe,{id:"contact-message",placeholder:x,value:e.message,onChange:c=>a("message",c.target.value),$error:!!s.message}),s.message?t.jsx(R,{children:s.message}):d<20&&t.jsxs(Re,{children:[d,_]})]}),n==="error"&&h&&t.jsx(ae,{phone:y}),n==="error"&&!h&&l&&t.jsxs(re,{children:[t.jsx(oe,{size:16,style:{flexShrink:0,marginTop:1}}),l]})]})}const tt=T(Te)`
  color: ${e=>e.theme.colors.primary};
`;function nt(e,s){return e&&e.length>0?e:s&&s.length>0?[{category:"Interests",items:s}]:[]}function st({onClose:e,presetInquiryType:s,presetSubject:n}){var D,W;const{touchField:l,reachStep:h,buildSnapshot:y}=xe(),{fields:a,errors:d,status:r,serverError:u,backendDown:v,setField:S,toggleActivity:C,advance:b,submit:k}=Ze({presetInquiryType:s,presetSubject:n,onFieldTouched:l}),{trackInteraction:x}=te(),_=ve(),c=je("contact"),i=_e(),[f,p]=m.useState(1),j=o("contact_form","success_title","Message Sent"),$=o("contact_form","success_body","Your inquiry has been received. Quinn will reply within 24–48 hours"),q=o("contact_form","success_reply_sms"," via SMS"),g=o("contact_form","success_reply_phone"," via phone call"),E=o("contact_form","success_email_confirmation"," A confirmation has been sent to your email."),ie=o("contact_form","close_label","Close"),le=o("contact_form","step1_label","Your Details"),ue=o("contact_form","step2_label","Select Activities"),me=o("contact_form","continue_label","Continue"),z=o("contact_form","sending_label","Sending…"),B=o("contact_form","send_label","Send Message"),de=o("contact_form","back_label","Back"),he=Je.has(a.inquiryType),O=nt(_.about.activities,_.about.availableFor),U=he&&O.length>0,L=m.useRef(x);L.current=x;const A=m.useRef(i);A.current=i;const G=m.useRef(r);G.current=r;const M=m.useRef(a);M.current=a;const Y=m.useRef(y);Y.current=y,m.useEffect(()=>{const w=A.current??"default";return h(1),L.current({type:"click",data:{elementType:"form",eventName:"contact_form_open",eventLabel:"unset",pageUrl:window.location.href,segment:w}}),()=>{G.current!=="success"&&L.current({type:"click",data:{elementType:"form",eventName:"contact_form_abandon",eventLabel:M.current.inquiryType||"unset",pageUrl:window.location.href,segment:A.current??"default",formSnapshot:Y.current()}})}},[]),m.useEffect(()=>{if(r==="success"||r==="error"){const w={elementType:"form",eventName:`contact_form_${r}`,eventLabel:a.inquiryType||"general",pageUrl:window.location.href,...r==="success"?{conversionGoal:"contact"}:{},segment:i??"default"};x({type:"click",data:w})}},[r,x,a.inquiryType,i]);function fe(){b()&&(h(2),x({type:"click",data:{elementType:"form",eventName:"contact_form_step2_shown",eventLabel:a.inquiryType||"unset",pageUrl:window.location.href,segment:i??"default"}}),p(2))}function pe(w){w.preventDefault();const ge={elementType:"form",eventName:"contact_form_submit",eventLabel:a.inquiryType||"unset",pageUrl:window.location.href,segment:i??"default"};x({type:"click",data:ge}),k()}return c.enabled?r==="success"?t.jsxs(Fe,{children:[t.jsx(tt,{size:48,strokeWidth:1.5}),t.jsx(Ne,{children:j}),t.jsxs(ze,{children:[$,a.preferSms?q:g,".",a.email.trim()&&E]}),e&&t.jsx(Be,{onClick:e,children:ie})]}):t.jsxs(Oe,{onSubmit:pe,noValidate:!0,children:[U&&t.jsxs(Ue,{children:[t.jsx(H,{$active:f===1,$done:f>1}),t.jsx(Ge,{}),t.jsx(H,{$active:f===2,$done:!1}),t.jsx(Me,{children:f===1?le:ue})]}),f===1&&t.jsxs(J,{children:[t.jsx(et,{fields:a,errors:d,status:r,serverError:u,backendDown:v,contactPhone:((D=_.contact)==null?void 0:D.phone)??"",setField:S}),U?t.jsxs(F,{as:"button",type:"button",onClick:fe,children:[me," ",t.jsx(Se,{size:16})]}):t.jsx(F,{type:"submit",$loading:r==="submitting",disabled:r==="submitting",children:r==="submitting"?t.jsxs(t.Fragment,{children:[t.jsx(K,{children:t.jsx(X,{size:16})})," ",z]}):t.jsxs(t.Fragment,{children:[t.jsx(Z,{size:16})," ",B]})})]}),f===2&&t.jsxs(J,{children:[t.jsx(Ye,{groups:O,selected:a.selectedActivities,onToggle:C}),r==="error"&&v&&t.jsx(ae,{phone:((W=_.contact)==null?void 0:W.phone)??""}),r==="error"&&!v&&u&&t.jsxs(re,{children:[t.jsx(oe,{size:16,style:{flexShrink:0,marginTop:1}}),u]}),t.jsxs(De,{children:[t.jsxs(We,{type:"button",onClick:()=>p(1),children:[t.jsx(Qe,{size:14})," ",de]}),t.jsx(F,{type:"submit",$loading:r==="submitting",disabled:r==="submitting",children:r==="submitting"?t.jsxs(t.Fragment,{children:[t.jsx(K,{children:t.jsx(X,{size:16})})," ",z]}):t.jsxs(t.Fragment,{children:[t.jsx(Z,{size:16})," ",B]})})]})]})]}):t.jsx(ke,{})}const at=se`
  from { opacity: 0; }
  to { opacity: 1; }
`,rt=se`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`,ot=T.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.spacing.lg};
  animation: ${at} 0.2s ease;

  @media (max-width: 768px) {
    align-items: flex-end;
    padding: 0;
  }
`,ct=T.div`
  background: ${e=>e.theme.colors.background.secondary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-top: 2px solid ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  width: 100%;
  max-width: 540px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${rt} 0.25s ease;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 92vh;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`,it=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.lg};
`,lt=T.h2`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: ${e=>e.theme.typography.fontSize["2xl"]};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  color: ${e=>e.theme.colors.primary};
  margin: 0;
`,ut=T.button`
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.muted};
  cursor: pointer;
  padding: ${e=>e.theme.spacing.xs};
  display: flex;
  align-items: center;
  transition: ${e=>e.theme.transitions.fast};

  &:hover {
    color: ${e=>e.theme.colors.text.primary};
    background: rgba(255, 255, 255, 0.06);
    border-radius: 50%;
  }
`;function bt({onClose:e,presetInquiryType:s,presetSubject:n}){const l=ne(),h=m.useRef(l);h.current=l;const y=o("contact_modal","title","Get in Touch"),a=o("contact_modal","close_aria_label","Close");m.useEffect(()=>{h.current.modal.open()},[]);const d=m.useCallback(()=>{l.modal.close(),e()},[l,e]);function r(u){u.target===u.currentTarget&&d()}return m.useEffect(()=>{function u(v){v.key==="Escape"&&d()}return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[d]),t.jsx(ot,{onClick:r,children:t.jsxs(ct,{children:[t.jsxs(it,{children:[t.jsx(lt,{children:y}),t.jsx(ut,{onClick:d,"aria-label":a,children:t.jsx(Ce,{size:20})})]}),t.jsx(st,{onClose:d,presetInquiryType:s,presetSubject:n})]})})}export{bt as C};
//# sourceMappingURL=ContactModal-Cqt7IcAj.js.map
