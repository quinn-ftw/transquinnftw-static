import{r as P,aa as E,ab as F,ac as y,ad as Y,j as e,af as T,ae as z,ag as m,ah as l,b,ai as L,aj as j,a as R,ak as W,l as u,ao as r,ap as q}from"./index-DBvZCzBm.js";const U=u`
  0% {
    transform: rotate(0deg);
    filter: drop-shadow(0 0 0 transparent);
  }
  15% {
    transform: rotate(30deg);
    filter: drop-shadow(0 0 8px rgba(75, 0, 130, 0.7));
  }
  30% {
    transform: rotate(60deg);
    filter: drop-shadow(0 0 6px rgba(75, 0, 130, 0.5));
  }
  45% {
    transform: rotate(90deg);
    filter: drop-shadow(0 0 10px rgba(75, 0, 130, 0.8));
  }
  60% {
    transform: rotate(120deg);
    filter: drop-shadow(0 0 6px rgba(75, 0, 130, 0.5));
  }
  75% {
    transform: rotate(150deg);
    filter: drop-shadow(0 0 8px rgba(75, 0, 130, 0.7));
  }
  90% {
    transform: rotate(180deg);
    filter: drop-shadow(0 0 4px rgba(75, 0, 130, 0.4));
  }
  100% {
    transform: rotate(180deg);
    filter: drop-shadow(0 0 2px rgba(75, 0, 130, 0.3));
  }
`,H=u`
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: scale(1.08);
    filter: drop-shadow(0 0 8px rgba(75, 0, 130, 0.6));
  }
`,J=u`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`,K=R.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .clock-hands {
    transform-origin: center;
  }

  .clock-face {
    transform-origin: center;
  }

  /* Full animation on hover/focus when hoverEnabled */
  ${({$hoverEnabled:a,$isLuxe:s})=>a&&b`
      &:hover .clock-hands,
      &:focus-visible .clock-hands {
        animation: ${s?J:U} 0.8s
          ${l.easeInOut};
      }

      ${!s&&b`
        &:hover .clock-face,
        &:focus-visible .clock-face {
          animation: ${H} 0.8s ${l.easeInOut};
        }
      `}
    `}

  /* Subtle animation when triggered by idle timer */
  ${({$subtlePlaying:a})=>a&&b`
      .clock-face {
        animation: ${L.pulse} ${j.pulse}
          ${l.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .clock-hands,
    .clock-face {
      animation: none !important;
    }
  }
`,Q=P.forwardRef(({size:a=24,color:s,animated:w=!0,showFullAnimation:$,showSubtleAnimation:v,"aria-label":c,...k},I)=>{const{themeName:M}=E(),C=F(),d=w&&!C,t=M==="luxe",S=y({trigger:$,animationDurationMs:800,enabled:d}),N=parseInt(j.pulse,10)*1e3||400,D=y({trigger:v,animationDurationMs:N,enabled:d}),o=Math.random().toString(36).slice(2,9),h=`clock-sphere-${o}`,g=`clock-glow-${o}`,x=`clock-clip-${o}`,p=T.purple,i=Y({lightSource:"top-left"}),n=W("top-left",24),f=t?s||m.gold:s||`url(#${h})`;return e.jsxs(K,{ref:I,width:a,height:a,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$hoverEnabled:S.hoverEnabled,$subtlePlaying:D.isPlaying,$isLuxe:t,role:c?"img":"presentation","aria-label":c,"aria-hidden":!c,tabIndex:d?0:void 0,...k,children:[e.jsxs("defs",{children:[e.jsx("clipPath",{id:x,children:e.jsx("circle",{cx:"12",cy:"12",r:"10"})}),!t&&e.jsxs(e.Fragment,{children:[e.jsxs("radialGradient",{id:h,cx:i.cx,cy:i.cy,r:i.r,fx:i.fx,fy:i.fy,children:[e.jsx("stop",{offset:"0%",stopColor:"rgba(200, 180, 255, 0.95)"}),e.jsx("stop",{offset:"15%",stopColor:p.mid}),e.jsx("stop",{offset:"50%",stopColor:p.start}),e.jsx("stop",{offset:"100%",stopColor:p.end})]}),e.jsxs("filter",{id:g,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[e.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"1",result:"blur"}),e.jsx("feFlood",{floodColor:z.sphereGlow.color,result:"glowColor"}),e.jsx("feComposite",{in:"glowColor",in2:"blur",operator:"in",result:"glow"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"glow"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})]}),e.jsxs("g",{className:"clock-face",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",fill:t?"none":s||`url(#${h})`,stroke:f,strokeWidth:t?1.5:2,filter:t?void 0:`url(#${g})`}),!t&&!s&&e.jsx("g",{clipPath:`url(#${x})`,children:e.jsx("ellipse",{cx:n.cx-1,cy:n.cy+1,rx:n.rx*.8,ry:n.ry*.7,fill:"rgba(255, 255, 255, 0.5)"})})]}),e.jsx("polyline",{className:"clock-hands",points:"12 6 12 12 16 14",fill:"none",stroke:f,strokeWidth:t?1.5:2,strokeLinecap:"round",strokeLinejoin:"round",filter:t?void 0:`url(#${g})`})]})});Q.displayName="ClockIcon";const O=u`
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-4px);
    opacity: 1;
    filter: drop-shadow(0 0 3px rgba(212, 175, 55, 0.8));
  }
`,V=u`
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 2px rgba(75, 0, 130, 0.3));
  }
  50% {
    transform: scale(1.05);
    filter: drop-shadow(0 0 6px rgba(75, 0, 130, 0.6));
  }
`,G=u`
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  30% {
    transform: translateY(-3px);
    opacity: 1;
  }
`,X=R.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .message-bubble {
    transform-origin: center;
  }

  .typing-dot {
    transform-origin: center;
    opacity: 0.4;
  }

  /* Full animation on hover/focus when hoverEnabled */
  ${({$hoverEnabled:a,$isLuxe:s})=>a&&b`
      &:hover .message-bubble,
      &:focus-visible .message-bubble {
        animation: ${V} 1s ${l.easeInOut};
      }

      &:hover .typing-dot:nth-child(1),
      &:focus-visible .typing-dot:nth-child(1) {
        animation: ${s?G:O} 1.2s
          ${l.easeInOut} infinite;
        animation-delay: 0s;
      }

      &:hover .typing-dot:nth-child(2),
      &:focus-visible .typing-dot:nth-child(2) {
        animation: ${s?G:O} 1.2s
          ${l.easeInOut} infinite;
        animation-delay: 0.2s;
      }

      &:hover .typing-dot:nth-child(3),
      &:focus-visible .typing-dot:nth-child(3) {
        animation: ${s?G:O} 1.2s
          ${l.easeInOut} infinite;
        animation-delay: 0.4s;
      }
    `}

  /* Subtle animation when triggered by idle timer */
  ${({$subtlePlaying:a})=>a&&b`
      .message-bubble {
        animation: ${L.bounce} ${j.bounce}
          ${l.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .message-bubble,
    .typing-dot {
      animation: none !important;
    }
  }
`,Z=P.forwardRef(({size:a=24,color:s,animated:w=!0,showFullAnimation:$,showSubtleAnimation:v,"aria-label":c,...k},I)=>{const{themeName:M}=E(),C=F(),d=w&&!C,t=M==="luxe",S=y({trigger:$,animationDurationMs:1200,enabled:d}),N=parseInt(j.bounce,10)*1e3||300,D=y({trigger:v,animationDurationMs:N,enabled:d}),o=Math.random().toString(36).slice(2,9),h=`message-circle-gradient-${o}`,g=`message-circle-glow-${o}`,x=`message-circle-shadow-1-${o}`,p=`message-circle-shadow-2-${o}`,i=`message-circle-shadow-3-${o}`,n=T.purple,f=t?"none":s||`url(#${h})`,B=t?s||m.charcoal:s||`url(#${h})`,A=q();return e.jsxs(X,{ref:I,width:a,height:a,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$hoverEnabled:S.hoverEnabled,$subtlePlaying:D.isPlaying,$isLuxe:t,role:c?"img":"presentation","aria-label":c,"aria-hidden":!c,tabIndex:d?0:void 0,...k,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:h,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"24",y2:"24",children:[e.jsx("stop",{offset:"0%",stopColor:n.start}),e.jsx("stop",{offset:"50%",stopColor:n.mid}),e.jsx("stop",{offset:"100%",stopColor:n.end})]}),!t&&e.jsxs(e.Fragment,{children:[e.jsxs("filter",{id:g,children:[e.jsx("feGaussianBlur",{stdDeviation:"1",result:"blur"}),e.jsx("feColorMatrix",{in:"blur",type:"matrix",values:`0.29 0 0 0 0
                          0 0 0 0 0
                          0.51 0 0 0 0
                          0 0 0 0.6 0`,result:"glow"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"glow"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),e.jsx("filter",{id:x,...A,children:e.jsx("feDropShadow",{dx:r.layer1.dx,dy:r.layer1.dy,stdDeviation:r.layer1.blur,floodColor:"rgba(46, 26, 71, 1)",floodOpacity:r.layer1.opacity})}),e.jsx("filter",{id:p,...A,children:e.jsx("feDropShadow",{dx:r.layer2.dx,dy:r.layer2.dy,stdDeviation:r.layer2.blur,floodColor:"rgba(46, 26, 71, 1)",floodOpacity:r.layer2.opacity})}),e.jsx("filter",{id:i,...A,children:e.jsx("feDropShadow",{dx:r.layer3.dx,dy:r.layer3.dy,stdDeviation:r.layer3.blur,floodColor:"rgba(46, 26, 71, 1)",floodOpacity:r.layer3.opacity})})]})]}),t?e.jsxs("g",{children:[e.jsx("path",{className:"message-bubble",d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",fill:"none",stroke:B,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsxs("g",{children:[e.jsx("circle",{className:"typing-dot",cx:"9",cy:"11.5",r:"1",fill:m.charcoal}),e.jsx("circle",{className:"typing-dot",cx:"12",cy:"11.5",r:"1",fill:m.charcoal}),e.jsx("circle",{className:"typing-dot",cx:"15",cy:"11.5",r:"1",fill:m.charcoal})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("g",{opacity:.3,children:e.jsx("path",{className:"message-bubble",d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",fill:f,filter:`url(#${i})`})}),e.jsx("g",{opacity:.5,children:e.jsx("path",{className:"message-bubble",d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",fill:f,filter:`url(#${p})`})}),e.jsx("g",{opacity:.7,children:e.jsx("path",{className:"message-bubble",d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",fill:f,filter:`url(#${x})`})}),e.jsxs("g",{filter:`url(#${g})`,children:[e.jsx("path",{className:"message-bubble",d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",fill:f}),e.jsxs("g",{children:[e.jsx("circle",{className:"typing-dot",cx:"9",cy:"11.5",r:"1",fill:"rgba(212, 175, 55, 0.8)"}),e.jsx("circle",{className:"typing-dot",cx:"12",cy:"11.5",r:"1",fill:"rgba(212, 175, 55, 0.8)"}),e.jsx("circle",{className:"typing-dot",cx:"15",cy:"11.5",r:"1",fill:"rgba(212, 175, 55, 0.8)"})]})]})]})]})});Z.displayName="MessageCircleIcon";export{Q as C,Z as M};
//# sourceMappingURL=MessageCircleIcon-CaVWE6wK.js.map
