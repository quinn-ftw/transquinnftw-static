import{r as x,f as _,D as W,g as A,j as r,A as z,E as F,a as l}from"./index-DBvZCzBm.js";import{C as G,G as I,a as B,L as H,M as T}from"./index.es-trzSlf0J.js";import{H as d,T as h}from"./tourColors-PTRzFvk1.js";import{f as N}from"./format-BShlYbJy.js";const U=[-122.4194,37.7749],X={center:[-50,47],scale:240},Y=l.div`
  background: color-mix(in srgb, ${o=>o.theme.colors.background.secondary} 85%, transparent);
  border: 1px solid color-mix(in srgb, ${o=>o.theme.colors.primary} 8%, transparent);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  width: 100%;
  aspect-ratio: 800 / 380;
`,q=l.div`
  position: absolute;
  left: ${o=>o.$x}px;
  top: ${o=>o.$y}px;
  transform: translate(-50%, -130%);
  background: color-mix(in srgb, ${o=>o.theme.colors.background.tertiary} 85%, transparent);
  border: 1px solid color-mix(in srgb, ${o=>o.theme.colors.primary} 35%, transparent);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  pointer-events: none;
  white-space: nowrap;
  opacity: ${o=>o.$visible?1:0};
  transition: opacity 150ms;
  z-index: 10;
`,J=l.div`
  font-family: ${o=>o.theme.typography.fontFamily.heading};
  font-size: 0.875rem;
  color: ${o=>o.theme.colors.text.primary};
  font-weight: 600;
`,K=l.div`
  font-size: 0.75rem;
  color: ${o=>o.theme.colors.text.secondary};
  margin-top: 1px;
`,P=l.div`
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${d};
  opacity: 0.85;
`;function Z({stops:o,selectedCity:w,onSelect:n,homebaseCity:M}){const[i,f]=x.useState(null),p=_(),b=W(),{trackInteraction:k}=A(),m={fill:"rgba(35, 30, 55, 0.9)",stroke:`color-mix(in srgb, ${b.colors.primary} 7%, transparent)`,strokeWidth:.5,outline:"none"},O=x.useCallback((t,e)=>{p.quadrant.click();const c={elementType:"other",eventName:"tour_map",eventLabel:t,feature:"tour",action:e?"deselect":"select",resulting_state:e?"none":t,pageUrl:window.location.href};k({type:"click",data:c}),n==null||n(e?null:t)},[p,k,n]),u=N(new Date,"yyyy-MM-dd"),a=o.filter(t=>t.startDate<=u&&(t.endDate==null||t.endDate>=u)).sort((t,e)=>e.startDate.localeCompare(t.startDate))[0]??null,$=o.filter(t=>t.startDate>u).filter(t=>t.lat!=null&&t.lng!=null),j=a&&a.lat!=null&&a.lng!=null?[a.lng,a.lat]:U,S=a?`${a.city}${a.state?`, ${a.state}`:""}`:M??"San Francisco",v=[j,...$.map(t=>[t.lng,t.lat])];return r.jsxs(Y,{children:[r.jsxs(G,{projection:"geoNaturalEarth1",projectionConfig:X,style:{width:"100%",height:"100%"},width:800,height:380,children:[r.jsx(I,{geography:"/world-110m.json",children:({geographies:t})=>t.map(e=>r.jsx(B,{geography:e,style:{default:m,hover:m,pressed:m}},e.rsmKey))}),v.slice(0,-1).map((t,e)=>r.jsx(H,{from:t,to:v[e+1],stroke:`color-mix(in srgb, ${b.colors.primary} 25%, transparent)`,strokeWidth:1,strokeDasharray:"3 4"},e)),r.jsxs(T,{coordinates:j,children:[r.jsx("circle",{r:11,fill:d,opacity:.12}),r.jsx("circle",{r:7,fill:d,opacity:.35}),r.jsx("circle",{r:4,fill:d,stroke:"#fff",strokeWidth:1.5})]}),$.map(t=>{const e=[t.lng,t.lat],c=z(t.city),g=w===c,C=t.status==="upcoming"?h[t.bookingStatus]??h.conditional:h[t.status],E=g?6:4.5;return r.jsxs(T,{coordinates:e,onClick:()=>O(c,g),onMouseEnter:y=>{var D;p.button.hover();const s=(D=y.currentTarget.closest("svg"))==null?void 0:D.getBoundingClientRect(),L=y.clientX-((s==null?void 0:s.left)??0),R=y.clientY-((s==null?void 0:s.top)??0);f({x:L,y:R,city:`${t.city}, ${t.state}`,dates:F(t.startDate,t.endDate,{openEnded:"plus"})})},onMouseLeave:()=>f(null),style:{default:{cursor:n?"pointer":"default"}},children:[g&&r.jsx("circle",{r:10,fill:"none",stroke:C,strokeWidth:1,opacity:.5}),r.jsx("circle",{r:E,fill:C,stroke:"rgba(10,8,20,0.8)",strokeWidth:1})]},t.city)})]}),i&&r.jsxs(q,{$x:i.x,$y:i.y,$visible:!0,children:[r.jsx(J,{children:i.city}),r.jsx(K,{children:i.dates})]}),r.jsxs(P,{children:["◆ ",S," — Current Location"]})]})}const et=x.memo(Z);export{et as TourMap};
//# sourceMappingURL=TourMap-BhHu4ul3.js.map
