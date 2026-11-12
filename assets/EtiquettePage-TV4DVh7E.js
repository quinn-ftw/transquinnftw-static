import{r as F,aa as G,ab as P,ac as M,ad as H,j as e,ae as T,af as O,ag as z,ah as k,b as v,ai as W,aj as L,a,ak as B,l as p,al as ee,q as te,p as A,s as se,u as oe,S as re,W as ie,am as ne,an as E,M as ae,o as le,L as ce}from"./index-DBvZCzBm.js";import{M as de,C as he}from"./MessageCircleIcon-CaVWE6wK.js";const fe=p`
  0% {
    transform: scaleY(1);
    filter: drop-shadow(0 0 0 transparent);
  }
  30% {
    transform: scaleY(0.3);
    filter: drop-shadow(0 0 6px rgba(75, 0, 130, 0.6));
  }
  50% {
    transform: scaleY(0.1);
    filter: drop-shadow(0 0 8px rgba(75, 0, 130, 0.8));
  }
  100% {
    transform: scaleY(0.1);
    filter: drop-shadow(0 0 4px rgba(75, 0, 130, 0.4));
  }
`,ge=p`
  0% {
    opacity: 0;
    stroke-dashoffset: 30;
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    opacity: 1;
    stroke-dashoffset: 15;
    filter: drop-shadow(0 0 6px rgba(220, 20, 60, 0.8));
  }
  100% {
    opacity: 1;
    stroke-dashoffset: 0;
    filter: drop-shadow(0 0 3px rgba(220, 20, 60, 0.4));
  }
`,pe=p`
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0.2);
  }
`,me=p`
  0% {
    opacity: 0;
    stroke-dashoffset: 30;
  }
  100% {
    opacity: 1;
    stroke-dashoffset: 0;
  }
`,ue=a.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .eye-body {
    transform-origin: center;
  }

  .cross-line {
    stroke-dasharray: 30;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  /* Full animation on hover/focus when hoverEnabled */
  ${({$hoverEnabled:t,$isLuxe:s})=>t&&v`
      &:hover .eye-body,
      &:focus-visible .eye-body {
        animation: ${s?pe:fe} 0.6s
          ${k.easeOut} forwards;
      }

      &:hover .cross-line,
      &:focus-visible .cross-line {
        animation: ${s?me:ge} 0.5s
          ${k.easeOut} forwards;
        animation-delay: 0.2s;
      }
    `}

  /* Subtle animation when triggered by idle timer */
  ${({$subtlePlaying:t})=>t&&v`
      .eye-body {
        animation: ${W.pulse} ${L.pulse}
          ${k.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .eye-body,
    .cross-line {
      animation: none !important;
      transform: none !important;
    }
  }
`,_=F.forwardRef(({size:t=24,color:s,animated:c=!0,showFullAnimation:$,showSubtleAnimation:g,"aria-label":n,...S},j)=>{const{themeName:m}=G(),C=P(),r=c&&!C,o=m==="luxe",u=M({trigger:$,animationDurationMs:600,enabled:r}),x=parseInt(L.pulse,10)*1e3||400,I=M({trigger:g,animationDurationMs:x,enabled:r}),d=Math.random().toString(36).slice(2,9),y=`eyeoff-sphere-${d}`,f=`eyeoff-glow-${d}`,b=`eyeoff-clip-${d}`,h=O.purple,i=H({lightSource:"top-left"}),l=B("top-left",24),w=o?"none":s||`url(#${y})`,D=o?s||z.charcoal:s||`url(#${y})`;return e.jsxs(ue,{ref:j,width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$hoverEnabled:u.hoverEnabled,$subtlePlaying:I.isPlaying,$isLuxe:o,role:n?"img":"presentation","aria-label":n,"aria-hidden":!n,tabIndex:r?0:void 0,...S,children:[e.jsxs("defs",{children:[e.jsx("clipPath",{id:b,children:e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"})}),!o&&e.jsxs(e.Fragment,{children:[e.jsxs("radialGradient",{id:y,cx:i.cx,cy:i.cy,r:i.r,fx:i.fx,fy:i.fy,children:[e.jsx("stop",{offset:"0%",stopColor:T.highlightColor}),e.jsx("stop",{offset:"20%",stopColor:h.start}),e.jsx("stop",{offset:"60%",stopColor:h.mid}),e.jsx("stop",{offset:"100%",stopColor:h.end})]}),e.jsxs("filter",{id:f,children:[e.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"blur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"blur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})]}),e.jsxs("g",{className:"eye-body",filter:o?void 0:`url(#${f})`,children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24",fill:w,stroke:o?D:"none",strokeWidth:o?1.5:0,strokeLinecap:"round",strokeLinejoin:"round"}),!o&&!s&&e.jsx("g",{clipPath:`url(#${b})`,children:e.jsx("ellipse",{cx:l.cx+2,cy:l.cy+2,rx:l.rx*.8,ry:l.ry*.8,fill:"rgba(255, 255, 255, 0.6)"})})]}),e.jsx("line",{className:"cross-line",x1:"1",y1:"1",x2:"23",y2:"23",stroke:o?D:"rgba(220, 20, 60, 0.9)",strokeWidth:o?1.5:2,strokeLinecap:"round"})]})});_.displayName="EyeOffIcon";const xe=p`
  0%, 100% {
    transform: rotate(0deg) scale(1);
    filter: drop-shadow(0 0 0 transparent);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: rotate(-8deg) scale(1.05);
    filter: drop-shadow(0 0 8px rgba(220, 20, 60, 0.7));
  }
  20%, 40%, 60%, 80% {
    transform: rotate(8deg) scale(1.05);
    filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.8));
  }
`,ye=p`
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: scale(3) rotate(360deg);
    opacity: 0;
  }
`,be=p`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(6deg);
  }
  75% {
    transform: rotate(-6deg);
  }
`,$e=a.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .gift-body {
    transform-origin: center;
  }

  .confetti {
    opacity: 0;
    transform-origin: center;
  }

  /* Full animation on hover/focus when hoverEnabled */
  ${({$hoverEnabled:t,$isLuxe:s})=>t&&v`
      &:hover .gift-body,
      &:focus-visible .gift-body {
        animation: ${s?be:xe} 0.8s
          ${k.easeInOut};
      }

      ${!s&&v`
        &:hover .confetti,
        &:focus-visible .confetti {
          animation: ${ye} 0.6s ease-out;
        }
      `}
    `}

  /* Subtle animation when triggered by idle timer */
  ${({$subtlePlaying:t})=>t&&v`
      .gift-body {
        animation: ${W.wiggle} ${L.wiggle}
          ${k.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .gift-body,
    .confetti {
      animation: none !important;
    }
  }
`,Z=F.forwardRef(({size:t=24,color:s,animated:c=!0,showFullAnimation:$,showSubtleAnimation:g,"aria-label":n,...S},j)=>{const{themeName:m}=G(),C=P(),r=c&&!C,o=m==="luxe",u=M({trigger:$,animationDurationMs:800,enabled:r}),x=parseInt(L.wiggle,10)*1e3||300,I=M({trigger:g,animationDurationMs:x,enabled:r}),d=Math.random().toString(36).slice(2,9),y=`gift-gradient-${d}`,f=`gift-glow-${d}`,b=`gift-depth-shadow-${d}`,h=ee.crimson,i=O.crimson,l=o?"none":s||`url(#${y})`,w=o?s||z.gold:s||`url(#${y})`;return e.jsxs($e,{ref:j,width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$hoverEnabled:u.hoverEnabled,$subtlePlaying:I.isPlaying,$isLuxe:o,role:n?"img":"presentation","aria-label":n,"aria-hidden":!n,tabIndex:r?0:void 0,...S,children:[!o&&e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:y,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"24",y2:"24",children:[e.jsx("stop",{offset:"0%",stopColor:i.start}),e.jsx("stop",{offset:"50%",stopColor:i.mid}),e.jsx("stop",{offset:"100%",stopColor:i.end})]}),e.jsxs("filter",{id:f,children:[e.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"blur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"blur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),e.jsx("filter",{id:b,x:"-20%",y:"-20%",width:"140%",height:"140%",children:e.jsx("feDropShadow",{dx:"1.5",dy:"2",stdDeviation:"1.5",floodOpacity:"0.3",floodColor:"#2E1A47"})})]}),!o&&e.jsxs(e.Fragment,{children:[e.jsx("circle",{className:"confetti",cx:"12",cy:"8",r:"1",fill:"rgba(212, 175, 55, 0.8)"}),e.jsx("circle",{className:"confetti",cx:"8",cy:"10",r:"0.8",fill:"rgba(220, 20, 60, 0.8)"}),e.jsx("circle",{className:"confetti",cx:"16",cy:"10",r:"0.8",fill:"rgba(75, 0, 130, 0.8)"}),e.jsx("circle",{className:"confetti",cx:"10",cy:"6",r:"0.6",fill:"rgba(16, 185, 129, 0.8)"}),e.jsx("circle",{className:"confetti",cx:"14",cy:"6",r:"0.6",fill:"rgba(59, 130, 246, 0.8)"})]}),e.jsx("g",{className:"gift-body",filter:o?void 0:`url(#${b})`,children:o?e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"4",y:"10",width:"16",height:"11",rx:"1",fill:l,stroke:w,strokeWidth:1.5}),e.jsx("rect",{x:"11",y:"10",width:"2",height:"11",fill:"none",stroke:w,strokeWidth:1.2}),e.jsx("rect",{x:"4",y:"14",width:"16",height:"2",fill:"none",stroke:w,strokeWidth:1.2}),e.jsx("path",{d:"M8 10C8 8 10 7 12 7C14 7 16 8 16 10",fill:"none",stroke:w,strokeWidth:1.5,strokeLinecap:"round"}),e.jsx("circle",{cx:"8",cy:"9",r:"1.5",fill:l,stroke:w,strokeWidth:1.2}),e.jsx("circle",{cx:"16",cy:"9",r:"1.5",fill:l,stroke:w,strokeWidth:1.2})]}):e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 11 L12 18 L18 15 L18 8 Z",fill:h.right}),e.jsx("path",{d:"M6 8 L6 15 L12 18 L12 11 Z",fill:h.left}),e.jsx("path",{d:"M6 8 L12 5 L18 8 L12 11 Z",fill:h.top}),e.jsx("path",{d:"M11.5 5.5 L11.5 10.5 L12.5 10.5 L12.5 5.5 Z",fill:"rgba(255, 255, 255, 0.3)"}),e.jsx("path",{d:"M6.5 8 L17.5 8 L17.5 9 L6.5 9 Z",fill:"rgba(255, 255, 255, 0.25)"}),e.jsx("path",{d:"M11.5 11 L11.5 18 L12.5 17.5 L12.5 10.5 Z",fill:"rgba(255, 255, 255, 0.2)",opacity:"0.6"}),e.jsx("path",{d:"M12 11 L12 18 L12.5 17.75 L12.5 10.75 Z",fill:"rgba(0, 0, 0, 0.15)"}),e.jsx("ellipse",{cx:"9",cy:"7",rx:"2",ry:"1.2",fill:i.mid,filter:`url(#${f})`}),e.jsx("ellipse",{cx:"15",cy:"7",rx:"2",ry:"1.2",fill:i.mid,filter:`url(#${f})`}),e.jsx("circle",{cx:"12",cy:"5.5",r:"1",fill:i.start,filter:`url(#${f})`})]})})]})});Z.displayName="GiftIcon";const je=p`
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 transparent);
  }
  /* First beat (lub) */
  14% {
    transform: scale(1.25);
    filter: drop-shadow(0 0 12px rgba(220, 20, 60, 0.8));
  }
  /* Between beats */
  28% {
    transform: scale(0.95);
    filter: drop-shadow(0 0 4px rgba(220, 20, 60, 0.4));
  }
  /* Second beat (dub) */
  42% {
    transform: scale(1.15);
    filter: drop-shadow(0 0 10px rgba(220, 20, 60, 0.7));
  }
  /* Return to rest */
  70%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 2px rgba(220, 20, 60, 0.3));
  }
`,we=p`
  0%, 100% {
    transform: scale(1);
  }
  /* Gentle swell */
  25% {
    transform: scale(1.08);
  }
  50% {
    transform: scale(1.02);
  }
  75% {
    transform: scale(1.06);
  }
`,ke=a.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .heart-group {
    transform-origin: center;
  }

  /* Full animation on hover/focus when hoverEnabled */
  ${({$hoverEnabled:t,$isLuxe:s})=>t&&v`
      &:hover .heart-group,
      &:focus-visible .heart-group {
        animation: ${s?we:je} 0.8s
          ${k.easeInOut};
      }
    `}

  /* Subtle animation when triggered by idle timer */
  ${({$subtlePlaying:t})=>t&&v`
      .heart-group {
        animation: ${W.pulse} ${L.pulse}
          ${k.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .heart-group {
      animation: none !important;
    }
  }
`,V=F.forwardRef(({size:t=24,color:s,animated:c=!0,showFullAnimation:$,showSubtleAnimation:g,"aria-label":n,...S},j)=>{const{themeName:m}=G(),C=P(),r=c&&!C,o=m==="luxe",u=M({trigger:$,animationDurationMs:800,enabled:r}),x=parseInt(L.pulse,10)*1e3||400,I=M({trigger:g,animationDurationMs:x,enabled:r}),d=Math.random().toString(36).slice(2,9),y=`heart-sphere-${d}`,f=`heart-glow-${d}`,b=`heart-clip-${d}`,h=O.crimson,i=H({lightSource:"top-left"}),l=B("top-left",24),w=o?"none":s||`url(#${y})`,D=o?s||z.gold:"none";return e.jsxs(ke,{ref:j,width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$hoverEnabled:u.hoverEnabled,$subtlePlaying:I.isPlaying,$isLuxe:o,role:n?"img":"presentation","aria-label":n,"aria-hidden":!n,tabIndex:r?0:void 0,...S,children:[e.jsxs("defs",{children:[e.jsx("clipPath",{id:b,children:e.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),!o&&e.jsxs(e.Fragment,{children:[e.jsxs("radialGradient",{id:y,cx:i.cx,cy:i.cy,r:i.r,fx:i.fx,fy:i.fy,children:[e.jsx("stop",{offset:"0%",stopColor:"rgba(255, 200, 200, 0.95)"}),e.jsx("stop",{offset:"15%",stopColor:h.mid}),e.jsx("stop",{offset:"50%",stopColor:h.start}),e.jsx("stop",{offset:"100%",stopColor:h.end})]}),e.jsxs("filter",{id:f,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[e.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"1",result:"blur"}),e.jsx("feFlood",{floodColor:T.sphereGlow.color,result:"glowColor"}),e.jsx("feComposite",{in:"glowColor",in2:"blur",operator:"in",result:"glow"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"glow"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})]}),e.jsxs("g",{className:"heart-group",filter:o?void 0:`url(#${f})`,children:[e.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",fill:w,stroke:D,strokeWidth:o?1.5:0,strokeLinecap:"round",strokeLinejoin:"round"}),!o&&!s&&e.jsx("g",{clipPath:`url(#${b})`,children:e.jsx("ellipse",{cx:l.cx-1,cy:l.cy+1,rx:l.rx*.8,ry:l.ry*.7,fill:"rgba(255, 255, 255, 0.5)"})})]})]})});V.displayName="HeartIcon";const ve=p`
  0% {
    transform: scale(1) rotate(0deg);
    filter: drop-shadow(0 0 2px rgba(212, 175, 55, 0.4));
  }
  25% {
    transform: scale(1.08) rotate(8deg);
    filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.9));
  }
  50% {
    transform: scale(1.05) rotate(-5deg);
    filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.7));
  }
  75% {
    transform: scale(1.06) rotate(3deg);
    filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.8));
  }
  100% {
    transform: scale(1) rotate(0deg);
    filter: drop-shadow(0 0 2px rgba(212, 175, 55, 0.4));
  }
`,Se=p`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`,Ce=p`
  0% {
    transform: translateX(-100%) rotate(25deg);
  }
  100% {
    transform: translateX(100%) rotate(25deg);
  }
`,Ie=p`
  0%, 100% {
    filter: brightness(1);
    transform: scale(1);
  }
  50% {
    filter: brightness(1.2);
    transform: scale(1.04);
  }
`,Me=a.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
  overflow: visible;

  .star-body {
    transform-origin: center;
  }

  .shine-overlay {
    transform-origin: center;
    opacity: 0;
    pointer-events: none;
  }

  .star-point {
    transform-origin: center;
  }

  /* Full animation on hover/focus when hoverEnabled */
  ${({$hoverEnabled:t,$isLuxe:s})=>t&&v`
      &:hover .star-body,
      &:focus-visible .star-body {
        animation: ${s?Ie:ve} 0.7s
          ${k.easeInOut};
      }

      ${!s&&v`
        &:hover .shine-overlay,
        &:focus-visible .shine-overlay {
          opacity: 0.4;
          animation: ${Ce} 0.5s ${k.easeOut};
        }

        &:hover .star-point,
        &:focus-visible .star-point {
          animation: ${Se} 0.4s ${k.easeInOut};
        }

        &:hover .star-point:nth-child(2),
        &:focus-visible .star-point:nth-child(2) {
          animation-delay: 0.1s;
        }

        &:hover .star-point:nth-child(3),
        &:focus-visible .star-point:nth-child(3) {
          animation-delay: 0.2s;
        }
      `}
    `}

  /* Subtle animation when triggered by idle timer */
  ${({$subtlePlaying:t})=>t&&v`
      .star-body {
        animation: ${W.shimmer} ${L.shimmer}
          ${k.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .star-body,
    .shine-overlay,
    .star-point {
      animation: none !important;
    }
  }
`,q=F.forwardRef(({size:t=24,color:s,animated:c=!0,showFullAnimation:$,showSubtleAnimation:g,"aria-label":n,...S},j)=>{const{themeName:m}=G(),C=P(),r=c&&!C,o=m==="luxe",u=M({trigger:$,animationDurationMs:700,enabled:r}),x=parseInt(L.shimmer,10)*1e3||500,I=M({trigger:g,animationDurationMs:x,enabled:r}),d=Math.random().toString(36).slice(2,9),y=`star-sphere-${d}`,f=`star-shine-${d}`,b=`star-glow-${d}`,h=`star-clip-${d}`,i=O.gold,l=H({lightSource:"top-left"}),w=B("top-left",24),D=o?"none":s||`url(#${y})`,K=o?s||z.gold:"none";return e.jsxs(Me,{ref:j,width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$hoverEnabled:u.hoverEnabled,$subtlePlaying:I.isPlaying,$isLuxe:o,role:n?"img":"presentation","aria-label":n,"aria-hidden":!n,tabIndex:r?0:void 0,...S,children:[e.jsxs("defs",{children:[e.jsx("clipPath",{id:h,children:e.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),!o&&e.jsxs(e.Fragment,{children:[e.jsxs("radialGradient",{id:y,cx:l.cx,cy:l.cy,r:l.r,fx:l.fx,fy:l.fy,children:[e.jsx("stop",{offset:"0%",stopColor:"rgba(255, 245, 200, 0.95)"}),e.jsx("stop",{offset:"20%",stopColor:i.mid}),e.jsx("stop",{offset:"100%",stopColor:i.end})]}),e.jsxs("linearGradient",{id:f,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"24",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"transparent"}),e.jsx("stop",{offset:"40%",stopColor:"rgba(255,255,255,0.8)"}),e.jsx("stop",{offset:"60%",stopColor:"rgba(255,255,255,0.8)"}),e.jsx("stop",{offset:"100%",stopColor:"transparent"})]}),e.jsxs("filter",{id:b,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[e.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"1",result:"blur"}),e.jsx("feFlood",{floodColor:T.sphereGlow.color,result:"glowColor"}),e.jsx("feComposite",{in:"glowColor",in2:"blur",operator:"in",result:"glow"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"glow"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})]}),e.jsx("path",{className:"star-body",d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",fill:D,stroke:K,strokeWidth:o?1.5:0,strokeLinecap:"round",strokeLinejoin:"round",filter:o?void 0:`url(#${b})`}),!o&&!s&&e.jsx("g",{clipPath:`url(#${h})`,children:e.jsx("ellipse",{cx:w.cx,cy:w.cy,rx:w.rx,ry:w.ry,fill:"rgba(255, 255, 255, 0.7)"})}),!o&&e.jsx("rect",{className:"shine-overlay",x:"-2",y:"0",width:"10",height:"24",fill:`url(#${f})`,clipPath:`url(#${h})`}),!o&&e.jsxs(e.Fragment,{children:[e.jsx("circle",{className:"star-point",cx:"12",cy:"2",r:"0.5",fill:"#FFFFFF"}),e.jsx("circle",{className:"star-point",cx:"22",cy:"9.27",r:"0.5",fill:"#FFFFFF"}),e.jsx("circle",{className:"star-point",cx:"2",cy:"9.27",r:"0.5",fill:"#FFFFFF"})]})]})});q.displayName="StarIcon";const Le=p`
  0% {
    stroke-dashoffset: 1;
    filter: drop-shadow(0 0 0 transparent);
  }
  60% {
    stroke-dashoffset: 0;
    filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.8));
  }
  100% {
    stroke-dashoffset: 0;
    filter: drop-shadow(0 0 3px rgba(16, 185, 129, 0.4));
  }
`,Ne=p`
  0% {
    stroke-dashoffset: 1;
    filter: brightness(1);
  }
  60% {
    stroke-dashoffset: 0;
    filter: brightness(1.3);
  }
  100% {
    stroke-dashoffset: 0;
    filter: brightness(1);
  }
`,Fe="0.6s",Ae=a.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .clipboard-body {
    transform-origin: center;
  }

  .clipboard-check {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
  }

  /* Full animation: check draws in */
  ${({$fullPlaying:t,$isLuxe:s})=>t&&v`
      .clipboard-check {
        animation: ${s?Ne:Le}
          ${Fe} ${k.easeOut} both;
      }
    `}

  /* Subtle animation: body glow (only when full is NOT playing) */
  ${({$subtlePlaying:t,$fullPlaying:s})=>t&&!s&&v`
      .clipboard-body {
        animation: ${W.glow} ${L.glow}
          ${k.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .clipboard-body,
    .clipboard-check {
      animation: none !important;
    }
  }
`,Q=F.forwardRef(({size:t=24,color:s,animated:c=!0,showFullAnimation:$,showSubtleAnimation:g,"aria-label":n,...S},j)=>{const{themeName:m}=G(),C=P(),r=c&&!C,o=m==="luxe",u=M({trigger:$,animationDurationMs:600,enabled:r}),x=M({trigger:g,animationDurationMs:parseInt(L.glow,10)*1e3||300,enabled:r}),I=F.useMemo(()=>Math.random().toString(36).slice(2,9),[]),d=`clipboardcheck-gradient-${I}`,y=`clipboardcheck-glow-${I}`,f=O.success,b=o?s||z.success:s||`url(#${d})`,h=o?1.5:2,i=r?()=>{u.wantsHover&&u.trigger(),x.wantsHover&&x.trigger()}:void 0,l=r?()=>{u.wantsHover&&u.trigger(),x.wantsHover&&x.trigger()}:void 0;return e.jsxs(Ae,{ref:j,width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$fullPlaying:u.isPlaying,$subtlePlaying:x.isPlaying,$isLuxe:o,onMouseEnter:i,onFocus:l,role:"img","aria-label":n??"Clipboard checked",tabIndex:r?0:void 0,...S,children:[!o&&e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"24",y2:"24",children:[e.jsx("stop",{offset:"0%",stopColor:f.start}),e.jsx("stop",{offset:"50%",stopColor:f.mid}),e.jsx("stop",{offset:"100%",stopColor:f.end})]}),e.jsxs("filter",{id:y,children:[e.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"blur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"blur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsxs("g",{className:"clipboard-body",filter:o?void 0:`url(#${y})`,children:[e.jsxs("g",{className:"clipboard-container",children:[e.jsx("rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",fill:"none",stroke:b,strokeWidth:h,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",fill:"none",stroke:b,strokeWidth:h,strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("path",{className:"clipboard-check",d:"m9 14 2 2 4-4",pathLength:1,fill:"none",stroke:b,strokeWidth:h,strokeLinecap:"round",strokeLinejoin:"round"})]})]})});Q.displayName="ClipboardCheckIcon";const De=p`
  0% {
    stroke-dashoffset: 1;
    filter: drop-shadow(0 0 0 transparent);
  }
  60% {
    stroke-dashoffset: 0;
    filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.8));
  }
  100% {
    stroke-dashoffset: 0;
    filter: drop-shadow(0 0 3px rgba(16, 185, 129, 0.4));
  }
`,Ee=p`
  0% {
    stroke-dashoffset: 1;
    filter: brightness(1);
  }
  60% {
    stroke-dashoffset: 0;
    filter: brightness(1.3);
  }
  100% {
    stroke-dashoffset: 0;
    filter: brightness(1);
  }
`,Ge="0.6s",Pe=a.svg`
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;

  .shield-body {
    transform-origin: center;
  }

  .shield-check {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
  }

  /* Full animation: check draws in */
  ${({$fullPlaying:t,$isLuxe:s})=>t&&v`
      .shield-check {
        animation: ${s?Ee:De}
          ${Ge} ${k.easeOut} both;
      }
    `}

  /* Subtle animation: body glow (only when full is NOT playing) */
  ${({$subtlePlaying:t,$fullPlaying:s})=>t&&!s&&v`
      .shield-body {
        animation: ${W.glow} ${L.glow}
          ${k.easeInOut};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .shield-body,
    .shield-check {
      animation: none !important;
    }
  }
`,X=F.forwardRef(({size:t=24,color:s,animated:c=!0,showFullAnimation:$,showSubtleAnimation:g,"aria-label":n,...S},j)=>{const{themeName:m}=G(),C=P(),r=c&&!C,o=m==="luxe",u=M({trigger:$,animationDurationMs:600,enabled:r}),x=M({trigger:g,animationDurationMs:parseInt(L.glow,10)*1e3||300,enabled:r}),I=F.useMemo(()=>Math.random().toString(36).slice(2,9),[]),d=`shieldcheck-gradient-${I}`,y=`shieldcheck-glow-${I}`,f=O.success,b=o?s||z.success:s||`url(#${d})`,h=o?1.5:2,i=r?()=>{u.wantsHover&&u.trigger(),x.wantsHover&&x.trigger()}:void 0,l=r?()=>{u.wantsHover&&u.trigger(),x.wantsHover&&x.trigger()}:void 0;return e.jsxs(Pe,{ref:j,width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",$fullPlaying:u.isPlaying,$subtlePlaying:x.isPlaying,$isLuxe:o,onMouseEnter:i,onFocus:l,role:"img","aria-label":n??"Shield verified",tabIndex:r?0:void 0,...S,children:[!o&&e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:d,gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"24",y2:"24",children:[e.jsx("stop",{offset:"0%",stopColor:f.start}),e.jsx("stop",{offset:"50%",stopColor:f.mid}),e.jsx("stop",{offset:"100%",stopColor:f.end})]}),e.jsxs("filter",{id:y,children:[e.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"blur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"blur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsxs("g",{className:"shield-body",filter:o?void 0:`url(#${y})`,children:[e.jsx("g",{className:"shield-container",children:e.jsx("path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",fill:"none",stroke:b,strokeWidth:h,strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("path",{className:"shield-check",d:"m9 12 2 2 4-4",pathLength:1,fill:"none",stroke:b,strokeWidth:h,strokeLinecap:"round",strokeLinejoin:"round"})]})]})});X.displayName="ShieldCheckIcon";const Oe={Hygiene:E,Punctuality:he,Communication:de,Screening:Q,Arrival:ne,Discretion:_,Respect:X,Payment:ie,"Spoiling me":Z,Reputation:q};function J(t){return t.toLowerCase().replace(/\s+/g,"-")}const ze=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
  gap: 1.5rem;
  align-items: start;
`,We=a.article`
  ${le}
  background: ${t=>t.theme.colors.background.secondary}99;
  border: 1px solid ${t=>t.theme.colors.border};
  border-top: 2px solid ${t=>t.theme.colors.primary};
  border-radius: ${t=>t.theme.borderRadius.lg};
  padding: ${t=>t.theme.spacing.xl};
  scroll-margin-top: 5rem;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  @media (max-width: 480px) {
    padding: ${t=>t.theme.spacing.lg};
  }

  ${t=>t.$highlighted&&v`
    border-color: ${t.theme.colors.primary};
    box-shadow: 0 0 0 1px ${t.theme.colors.primary}40, 0 0 24px ${t.theme.colors.primary}1a;
  `}
`,Re=a.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1rem;
`,qe=a.h2`
  font-family: ${t=>t.theme.typography.fontFamily.heading};
  font-size: ${t=>t.theme.typography.fontSize.xl};
  font-weight: ${t=>t.theme.typography.fontWeight.semibold};
  color: ${t=>t.theme.colors.primary};
  margin: 0;
`,He=a.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`,Te=a.li`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Be=a.span`
  font-size: ${t=>t.theme.typography.fontSize.base};
  font-weight: ${t=>t.theme.typography.fontWeight.semibold};
  color: ${t=>t.theme.colors.text.primary};
`,Ue=a.p`
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.text.secondary};
  line-height: 1.6;
  margin: 0;
`,Ye=a(ce)`
  display: inline-block;
  margin-top: 0.25rem;
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.primary};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,_e=a.p`
  color: ${t=>t.theme.colors.text.muted};
  font-size: ${t=>t.theme.typography.fontSize.base};
`,N="var(--accent, #FF2E97)";function Ze(t){const s=/^#?([0-9a-f]{6})$/i.exec((t??"").trim());if(!s)return 0;const c=parseInt(s[1]??"0",16);return(.2126*(c>>16&255)+.7152*(c>>8&255)+.0722*(c&255))/255}const Y=t=>Ze(t.colors.background.secondary)>.5,U=t=>{var s;return((s=t.colors.secondary)==null?void 0:s.main)??N},Ve=p`
  0%, 100% { opacity: 0.25; transform: scale(0.82); }
  50% { opacity: 1; transform: scale(1.12); }
`,Qe=p`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`,Xe=p`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`,Je=a.aside`
  position: relative;
  overflow: hidden;
  margin-top: 3.5rem;
  padding: 3.25rem 2rem;
  text-align: center;
  border-radius: ${t=>t.theme.borderRadius.lg};
  border: 1px solid color-mix(in srgb, ${N} 30%, transparent);
  background:
    radial-gradient(80% 95% at 50% -8%, color-mix(in srgb, ${N} ${t=>Y(t.theme)?"9%":"20%"}, transparent) 0%, transparent 62%),
    ${t=>t.theme.colors.background.secondary}${t=>Y(t.theme)?"f2":"cc"};
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, ${N} 18%, transparent),
    ${t=>{var s;return((s=t.theme.shadows)==null?void 0:s.xl)??"0 24px 60px -28px rgba(120, 20, 70, 0.45)"}};

  @media (max-width: 480px) {
    padding: 2.5rem 1.25rem;
    margin-top: 2.5rem;
  }
`,R=a.span`
  position: absolute;
  top: ${t=>t.$top};
  left: ${t=>t.$left};
  line-height: 0;
  pointer-events: none;
  opacity: 0.85;
  color: ${t=>t.$tone==="sun"?U(t.theme):N};
  filter: drop-shadow(0 0 5px color-mix(in srgb, currentColor 55%, transparent));

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Ve} 3.6s ${t=>{var s;return((s=t.theme.easing)==null?void 0:s.easeInOut)??"cubic-bezier(0.4, 0, 0.2, 1)"}} infinite;
    animation-delay: ${t=>t.$delay};
  }
  @media (max-width: 600px) {
    display: none;
  }
`,Ke=a.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${N};
  margin-bottom: 1rem;

  & > *:nth-child(2) {
    color: ${t=>U(t.theme)};
    filter: drop-shadow(0 0 8px color-mix(in srgb, currentColor 60%, transparent));
  }
  & > *:first-child,
  & > *:last-child {
    opacity: 0.7;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Xe} 5s ${t=>{var s;return((s=t.theme.easing)==null?void 0:s.easeInOut)??"cubic-bezier(0.4, 0, 0.2, 1)"}} infinite;
  }
`,et=a.h2`
  font-family: ${t=>t.theme.typography.fontFamily.heading};
  font-size: ${t=>t.theme.typography.fontSize.xl};
  font-weight: ${t=>t.theme.typography.fontWeight.semibold};
  letter-spacing: 0.02em;
  margin: 0 0 1rem;
  background: linear-gradient(
    100deg,
    ${N} 0%,
    ${t=>U(t.theme)} 50%,
    ${N} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Qe} 7s ${t=>{var s;return((s=t.theme.easing)==null?void 0:s.linear)??"linear"}} infinite;
  }
`,tt=a.p`
  max-width: 38rem;
  margin: 0 auto;
  font-size: ${t=>t.theme.typography.fontSize.base};
  line-height: 1.8;
  color: ${t=>t.theme.colors.text.secondary};
`,st=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(60%, 20rem);
  margin: 1.75rem auto 1.25rem;
  color: ${N};

  &::before,
  &::after {
    content: '';
    height: 1px;
    flex: 1;
    background: linear-gradient(90deg, transparent, color-mix(in srgb, ${N} 55%, transparent), transparent);
  }
  & > svg {
    margin: 0 0.6rem;
  }
`,ot=a.p`
  font-family: ${t=>t.theme.typography.fontFamily.heading};
  font-size: ${t=>t.theme.typography.fontSize.lg};
  color: ${N};
  margin: 0 0 0.4rem;
`,rt=a.p`
  font-size: ${t=>t.theme.typography.fontSize.sm};
  font-style: italic;
  letter-spacing: 0.04em;
  color: ${t=>t.theme.colors.text.muted};
  margin: 0;
`;function it(){const t=A("etiquette","closing_title","Thank you for reading every word"),s=A("etiquette","closing_body","If you've wandered all the way down here, you're already the rare, thoughtful kind I adore. Bring a little of this care in person and you'll find me yours completely — pink hair, wandering heart, and all. Until we meet, sweet dreams."),c=A("etiquette","closing_signoff","With love, Quinn"),$=A("etiquette","closing_tagline","Don't fall in love!");return e.jsxs(Je,{"aria-label":"A note from Quinn",children:[e.jsx(R,{$top:"11%",$left:"6%",$delay:"0s",$tone:"accent",children:e.jsx(E,{size:15})}),e.jsx(R,{$top:"14%",$left:"89%",$delay:"0.9s",$tone:"sun",children:e.jsx(E,{size:13})}),e.jsx(R,{$top:"80%",$left:"8%",$delay:"1.4s",$tone:"sun",children:e.jsx(E,{size:13})}),e.jsx(R,{$top:"82%",$left:"90%",$delay:"0.5s",$tone:"accent",children:e.jsx(E,{size:15})}),e.jsxs(Ke,{children:[e.jsx(q,{size:15}),e.jsx(E,{size:26}),e.jsx(q,{size:15})]}),e.jsx(et,{children:t}),e.jsx(tt,{children:s}),e.jsx(st,{children:e.jsx(V,{size:14})}),e.jsx(ot,{children:c}),e.jsx(rt,{children:$})]})}function nt({section:t,highlighted:s}){if(t.items.length===0)return null;const c=Oe[t.title],$=J(t.title);return e.jsxs(ae,{as:We,id:$,$highlighted:s,children:[e.jsxs(Re,{children:[c&&e.jsx(c,{size:20}),e.jsx(qe,{"data-magic-title":!0,children:t.title})]}),e.jsx(He,{children:t.items.map((g,n)=>e.jsxs(Te,{children:[e.jsx(Be,{children:g.label}),g.detail&&e.jsx(Ue,{children:g.detail}),g.ctaHref&&g.ctaText&&e.jsx(Ye,{to:g.ctaHref,children:g.ctaText})]},n))})]})}function ct(){te();const t=A("etiquette","section_title","Etiquette"),s=A("etiquette","subtitle","Guidelines for a respectful experience"),c=A("etiquette","empty_text","Etiquette guidelines coming soon."),n=(se().etiquette??[]).filter(m=>m.items.length>0),[S]=oe(),j=S.get("section")??"";return F.useEffect(()=>{if(!j)return;const m=document.getElementById(j);m&&m.scrollIntoView({behavior:"smooth",block:"start"})},[j]),e.jsx(re,{title:t,subtitle:s,headingLevel:1,id:"etiquette",children:n.length===0?e.jsx(_e,{children:c}):e.jsxs(e.Fragment,{children:[e.jsx(ze,{children:n.map((m,C)=>e.jsx(nt,{section:m,highlighted:j===J(m.title)},C))}),e.jsx(it,{})]})})}export{ct as default};
//# sourceMappingURL=EtiquettePage-TV4DVh7E.js.map
