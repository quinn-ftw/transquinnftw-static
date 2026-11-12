import{r as s,j as u,Z as A,a as m,b as a,l as i}from"./index-DBvZCzBm.js";const $=[{id:"cosmic-nebula",name:"Cosmic Nebula",type:"gradient",colors:["#6B46C1","#4A5568","#B83280","#D946A6"],animation:{duration:20,keyframes:"nebulaDrift"}},{id:"ocean-waves",name:"Ocean Waves",type:"gradient",colors:["#0EA5E9","#06B6D4","#3B82F6","#2DD4BF"],animation:{duration:18,keyframes:"oceanFlow"}},{id:"sunset-fire",name:"Sunset Fire",type:"gradient",colors:["#F59E0B","#EF4444","#EC4899","#F97316"],animation:{duration:22,keyframes:"sunsetGlow"}},{id:"aurora-dreams",name:"Aurora Dreams",type:"aurora",colors:["#10B981","#3B82F6","#8B5CF6","#06B6D4"],animation:{duration:15,keyframes:"auroraShift"}},{id:"midnight-mesh",name:"Midnight Mesh",type:"mesh",colors:["#1E293B","#334155","#475569","#64748B"],animation:{duration:25,keyframes:"meshPulse"}}];function x(){const e=Math.floor(Math.random()*$.length);return $[e]}function Q(e){return $.find(n=>n.id===e)||x()}const C=i`
  0%, 100% {
    opacity: 0.7;
    transform: scale(1) rotate(0deg);
  }
  25% {
    opacity: 0.9;
    transform: scale(1.05) rotate(3deg);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.98) rotate(-2deg);
  }
  75% {
    opacity: 0.85;
    transform: scale(1.03) rotate(1deg);
  }
`,M=i`
  0%, 100% {
    transform: translateY(0) scaleX(1);
    opacity: 0.7;
  }
  33% {
    transform: translateY(-3%) scaleX(1.05);
    opacity: 0.85;
  }
  66% {
    transform: translateY(2%) scaleX(0.98);
    opacity: 0.6;
  }
`,R=i`
  0%, 100% {
    opacity: 0.75;
    transform: scale(1);
  }
  30% {
    opacity: 0.9;
    transform: scale(1.08);
  }
  60% {
    opacity: 0.65;
    transform: scale(0.95);
  }
`,L=i`
  0%, 100% {
    opacity: 0.7;
    transform: scale(1) rotate(0deg);
  }
  25% {
    opacity: 0.85;
    transform: scale(1.1) rotate(2deg);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.95) rotate(-1deg);
  }
  75% {
    opacity: 0.9;
    transform: scale(1.05) rotate(1deg);
  }
`,j=i`
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.02);
  }
`,G=m.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: ${A.base};
  opacity: ${e=>e.$loaded?e.$opacity:0};
  transition: opacity 1.2s ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.3s ease;
  }
`,Y=e=>{switch(e){case"cosmic-nebula":return a`
        background:
          radial-gradient(ellipse 80% 60% at 30% 40%, rgba(107, 70, 193, 0.25), transparent),
          radial-gradient(ellipse 60% 80% at 70% 60%, rgba(184, 50, 128, 0.2), transparent),
          radial-gradient(ellipse 70% 50% at 50% 80%, rgba(217, 70, 166, 0.15), transparent),
          radial-gradient(ellipse 50% 70% at 20% 20%, rgba(74, 85, 104, 0.2), transparent);
        animation: ${C} 20s ease-in-out infinite;
      `;case"ocean-waves":return a`
        background:
          linear-gradient(180deg, rgba(14, 165, 233, 0.2) 0%, transparent 50%),
          linear-gradient(0deg, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 100% 40% at 50% 30%, rgba(59, 130, 246, 0.2), transparent),
          radial-gradient(ellipse 80% 50% at 50% 70%, rgba(45, 212, 191, 0.15), transparent);
        animation: ${M} 18s ease-in-out infinite;
      `;case"sunset-fire":return a`
        background:
          radial-gradient(ellipse 90% 60% at 20% 30%, rgba(245, 158, 11, 0.2), transparent),
          radial-gradient(ellipse 70% 70% at 80% 50%, rgba(239, 68, 68, 0.18), transparent),
          radial-gradient(ellipse 60% 80% at 50% 70%, rgba(236, 72, 153, 0.15), transparent),
          radial-gradient(ellipse 50% 50% at 40% 20%, rgba(249, 115, 22, 0.22), transparent);
        animation: ${R} 22s ease-in-out infinite;
      `;case"aurora-dreams":return a`
        background:
          radial-gradient(ellipse 80% 50% at 20% 40%, rgba(16, 185, 129, 0.2), transparent),
          radial-gradient(ellipse 60% 60% at 80% 60%, rgba(59, 130, 246, 0.18), transparent),
          radial-gradient(ellipse 50% 80% at 40% 80%, rgba(139, 92, 246, 0.15), transparent),
          radial-gradient(ellipse 70% 50% at 60% 20%, rgba(6, 182, 212, 0.12), transparent);
        animation: ${L} 15s ease-in-out infinite;
      `;case"midnight-mesh":return a`
        background:
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 80px,
            rgba(71, 85, 105, 0.08) 80px,
            rgba(71, 85, 105, 0.08) 81px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 80px,
            rgba(100, 116, 139, 0.08) 80px,
            rgba(100, 116, 139, 0.08) 81px
          ),
          radial-gradient(ellipse 100% 100% at 50% 50%, rgba(30, 41, 59, 0.4), transparent),
          radial-gradient(ellipse 80% 60% at 30% 40%, rgba(51, 65, 85, 0.15), transparent);
        animation: ${j} 25s ease-in-out infinite;
      `;default:return a``}},I=m.div`
  position: absolute;
  inset: 0;
  will-change: transform, opacity;
  ${e=>Y(e.$presetId)}

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    will-change: auto;
    transform: none;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    animation-duration: 30s !important;
  }

  @media (max-width: 480px) and (prefers-reduced-motion: no-preference) {
    animation-duration: 40s !important;
  }
`,U=({presetId:e,disableParallax:n=!1,opacity:t=1})=>{const[d,g]=s.useState(null),[y,h]=s.useState(!1),l=s.useRef(null);return s.useEffect(()=>{const o=x();g(o);const r=setTimeout(()=>h(!0),100);return()=>clearTimeout(r)},[e]),s.useEffect(()=>{if(n||!l.current||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let r,c=!1;const f=()=>{c||(r=requestAnimationFrame(()=>{if(l.current){const{scrollY:D}=window,p=.5;l.current.style.transform=`translateY(${D*p}px)`}c=!1}),c=!0)};return window.addEventListener("scroll",f,{passive:!0}),()=>{window.removeEventListener("scroll",f),r&&cancelAnimationFrame(r)}},[n]),d?u.jsx(G,{ref:l,$loaded:y,$opacity:t,role:"presentation","aria-hidden":"true",children:u.jsx(I,{$presetId:d.id})}):null},v={"magenta-cyan":{id:"magenta-cyan",name:"Magenta Cyan",gradient:`
      radial-gradient(ellipse 80% 50% at 20% 30%, rgba(255, 0, 255, 0.08), transparent 60%),
      radial-gradient(ellipse 60% 60% at 80% 70%, rgba(0, 255, 255, 0.06), transparent 60%)
    `,animation:"sectionDrift",animationDuration:25},"deep-purple":{id:"deep-purple",name:"Deep Purple",gradient:`
      radial-gradient(ellipse 70% 60% at 30% 40%, rgba(139, 92, 246, 0.1), transparent 60%),
      radial-gradient(ellipse 50% 70% at 70% 60%, rgba(168, 85, 247, 0.07), transparent 60%)
    `,animation:"sectionPulse",animationDuration:20},ocean:{id:"ocean",name:"Ocean",gradient:`
      radial-gradient(ellipse 90% 50% at 50% 30%, rgba(6, 182, 212, 0.08), transparent 60%),
      radial-gradient(ellipse 60% 80% at 30% 70%, rgba(59, 130, 246, 0.06), transparent 60%)
    `,animation:"sectionWave",animationDuration:22},sunset:{id:"sunset",name:"Sunset",gradient:`
      radial-gradient(ellipse 70% 50% at 20% 40%, rgba(249, 115, 22, 0.08), transparent 60%),
      radial-gradient(ellipse 60% 60% at 80% 60%, rgba(239, 68, 68, 0.06), transparent 60%)
    `,animation:"sectionGlow",animationDuration:18},emerald:{id:"emerald",name:"Emerald",gradient:`
      radial-gradient(ellipse 80% 60% at 70% 30%, rgba(16, 185, 129, 0.08), transparent 60%),
      radial-gradient(ellipse 50% 70% at 30% 70%, rgba(34, 197, 94, 0.06), transparent 60%)
    `,animation:"sectionDrift",animationDuration:24},gold:{id:"gold",name:"Gold",gradient:`
      radial-gradient(ellipse 60% 50% at 40% 40%, rgba(251, 191, 36, 0.08), transparent 60%),
      radial-gradient(ellipse 70% 60% at 60% 60%, rgba(245, 158, 11, 0.06), transparent 60%)
    `,animation:"sectionPulse",animationDuration:20}};function X(e){return v[e]??v["magenta-cyan"]}function V(){return Object.keys(v)}const O=i`
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  33% {
    transform: translate(2%, 1%) scale(1.02);
    opacity: 0.9;
  }
  66% {
    transform: translate(-1%, -1%) scale(0.98);
    opacity: 1.1;
  }
`,z=i`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.03);
  }
`,W=i`
  0%, 100% {
    transform: translateY(0) scaleX(1);
  }
  50% {
    transform: translateY(-2%) scaleX(1.02);
  }
`,N=i`
  0%, 100% {
    opacity: 1;
    filter: brightness(1);
  }
  50% {
    opacity: 0.9;
    filter: brightness(1.1);
  }
`,q=(e,n)=>{if(n||!e.animation)return a``;const t=e.animationDuration??20;switch(e.animation){case"sectionDrift":return a`
        animation: ${O} ${t}s ease-in-out infinite;
      `;case"sectionPulse":return a`
        animation: ${z} ${t}s ease-in-out infinite;
      `;case"sectionWave":return a`
        animation: ${W} ${t}s ease-in-out infinite;
      `;case"sectionGlow":return a`
        animation: ${N} ${t}s ease-in-out infinite;
      `;default:return a``}},H=m.section`
  position: relative;
  overflow: hidden;
`,T=m.div`
  position: absolute;
  inset: -20%;
  pointer-events: none;
  z-index: 0;
  background: ${e=>e.$gradient};
  will-change: transform;
  ${e=>q(e.$preset,e.$disableAnimation)}

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    will-change: auto;
  }
`,Z=m.div`
  position: relative;
  z-index: 1;
`;function _(e){const[n,t]=e;return`
    radial-gradient(ellipse 80% 50% at 20% 30%, ${n}14, transparent 60%),
    radial-gradient(ellipse 60% 60% at 80% 70%, ${t}10, transparent 60%)
  `}function ee({preset:e="magenta-cyan",customGradient:n,colors:t,parallaxIntensity:d=.15,disableParallax:g=!1,disableAnimation:y=!1,className:h,children:l}){const o=s.useRef(null),r=s.useRef(null),c=X(e),f=n??(t?_(t):c.gradient);return s.useEffect(()=>{if(g||!o.current||!r.current||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let p,b=!1;const w=()=>{b||(p=requestAnimationFrame(()=>{if(!o.current||!r.current){b=!1;return}const k=o.current.getBoundingClientRect(),E=window.innerHeight,P=k.top+k.height/2,B=E/2,F=(P-B)/E,S=Math.max(-1,Math.min(1,F))*d*100;r.current.style.transform=`translateY(${S}px)`,b=!1}),b=!0)};return w(),window.addEventListener("scroll",w,{passive:!0}),()=>{window.removeEventListener("scroll",w),p&&cancelAnimationFrame(p)}},[g,d]),u.jsxs(H,{ref:o,className:h,children:[u.jsx(T,{ref:r,$gradient:f,$preset:c,$disableAnimation:y,"aria-hidden":"true"}),u.jsx(Z,{children:l})]})}export{U as AIBackground,ee as SectionBackground,$ as backgroundPresets,Q as getPresetById,x as getRandomPreset,X as getSectionPreset,V as getSectionPresetIds,v as sectionPresets};
//# sourceMappingURL=index-Dha_-kFy.js.map
