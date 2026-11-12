import{r as d,N as I,D as S,g as E,j as t,a as r}from"./index-DBvZCzBm.js";import{C as R,G as W,a as _,M as k}from"./index.es-trzSlf0J.js";const $={Paris:[2.3522,48.8566],London:[-.1278,51.5074],Venice:[12.3155,45.4408],Reykjavík:[-21.9426,64.1466],"New York City":[-74.006,40.7128],"Las Vegas":[-115.1398,36.1699],"Los Angeles":[-118.2437,34.0522],Chicago:[-87.6298,41.8781],Tokyo:[139.6917,35.6895],Kyoto:[135.7681,35.0116],Seoul:[126.978,37.5665],Ibiza:[1.4821,38.9067],Honolulu:[-157.8583,21.3069],Seattle:[-122.3321,47.6062],Vancouver:[-123.1216,49.2827],Anchorage:[-149.9003,61.2181],Glasgow:[-4.2518,55.8642],Dublin:[-6.2603,53.3498]},O=[-122.4194,37.7749],z={"west-coast":"#7ec89a",domestic:"#82aee0"},v={"west-coast":"West Coast",domestic:"Domestic",international:"International"},A=r.div`
  background: color-mix(in srgb, ${o=>o.theme.colors.background.secondary} 85%, transparent);
  border: 1px solid ${o=>o.theme.colors.border.default};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  height: 100%;
  min-height: 420px;
`,G=r.div`
  position: absolute;
  left: ${o=>o.$x}px;
  top: ${o=>o.$y}px;
  transform: translate(-50%, -130%);
  background: ${o=>o.theme.colors.surface}F7;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${o=>o.theme.colors.border.hover};
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  pointer-events: none;
  white-space: nowrap;
  opacity: ${o=>o.$visible?1:0};
  transition: opacity 150ms;
  z-index: 10;
`,N=r.div`
  font-family: ${o=>o.theme.typography.fontFamily.heading};
  font-size: 0.875rem;
  color: ${o=>o.theme.colors.text.primary};
  font-weight: 600;
`,Y=r.div`
  font-size: 0.75rem;
  color: ${o=>o.theme.colors.text.secondary};
  margin-top: 1px;
`,F=r.div`
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,V=r.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${o=>o.theme.colors.text.muted};
`,B=r.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${o=>o.$color};
`;function K({destinations:o,selectedSlug:j,tourCities:c}){const[a,m]=d.useState(null),g=I(),w=S(),{trackInteraction:h}=E(),n=w.colors.primary,y=e=>e==="international"?`${n}`:z[e],l={fill:"rgba(35, 30, 55, 0.9)",stroke:`color-mix(in srgb, ${n} 7%, transparent)`,strokeWidth:.5,outline:"none"},T=o.filter(e=>$[e.city]),C=d.useCallback(e=>{const s={elementType:"other",eventName:"destination_map_click",eventLabel:e.city,feature:"destination_map",action:"navigate",segment:e.fmtyTier,pageUrl:window.location.href};h({type:"click",data:s}),g(`/destinations/${e.slug}`)},[h,g]);return t.jsxs(A,{children:[t.jsxs(R,{projection:"geoEqualEarth",projectionConfig:{center:[-15,25],scale:160},style:{width:"100%",height:"100%"},width:900,height:420,children:[t.jsx(W,{geography:"/world-110m.json",children:({geographies:e})=>e.map(s=>t.jsx(_,{geography:s,style:{default:l,hover:l,pressed:l}},s.rsmKey))}),t.jsxs(k,{coordinates:O,children:[t.jsx("circle",{r:5,fill:`color-mix(in srgb, ${n} 20%, transparent)`,stroke:`color-mix(in srgb, ${n} 50%, transparent)`,strokeWidth:1}),t.jsx("circle",{r:2.5,fill:`${n}`,opacity:.6})]}),T.map(e=>{const s=$[e.city],x=j===e.slug,u=y(e.fmtyTier),L=(c==null?void 0:c.has(e.city))??!1,f=x?7:5;return t.jsxs(k,{coordinates:s,onClick:()=>C(e),onMouseEnter:p=>{var b;const i=(b=p.currentTarget.closest("svg"))==null?void 0:b.getBoundingClientRect(),D=p.clientX-((i==null?void 0:i.left)??0),M=p.clientY-((i==null?void 0:i.top)??0);m({x:D,y:M,city:e.city,country:`${e.country}${e.region?` · ${e.region}`:""}`,tier:v[e.fmtyTier]})},onMouseLeave:()=>m(null),style:{default:{cursor:"pointer"}},children:[x&&t.jsx("circle",{r:12,fill:"none",stroke:u,strokeWidth:1.5,opacity:.5}),t.jsx("circle",{r:f,fill:u,stroke:"rgba(10,8,20,0.8)",strokeWidth:1.5}),L&&t.jsx("circle",{r:f+4,fill:"none",stroke:`${n}`,strokeWidth:.75,opacity:.4,strokeDasharray:"2 2"})]},e.slug)})]}),a&&t.jsxs(G,{$x:a.x,$y:a.y,$visible:!0,children:[t.jsx(N,{children:a.city}),t.jsx(Y,{children:a.country})]}),t.jsx(F,{children:["west-coast","domestic","international"].map(e=>t.jsxs(V,{children:[t.jsx(B,{$color:y(e)}),v[e]]},e))})]})}const H=d.memo(K);export{H as DestinationMap};
//# sourceMappingURL=DestinationMap-CohHhsD8.js.map
