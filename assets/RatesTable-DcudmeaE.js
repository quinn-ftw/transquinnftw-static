import{j as n,a as i,c as h,d,l as L,r as p,a6 as w,a7 as _,a8 as $,a9 as z,y as x,m as B,n as C,o as G}from"./index-DBvZCzBm.js";const N=5;function D(e){return e.entries.length>=N}function M(e){return e.entries.length===0&&e.includeInSummary!==!0}function Re(e){const t=[],r=[];for(const o of e)M(o)?r.push(o):t.push(o);return{priced:t,answers:r}}function O(e,t){if(e.length===0)return t===void 0?{entries:e}:{entries:e,description:t};const r=e.map(a=>{var c;return((c=a.notes)==null?void 0:c.trim())??""}),o=r[0];if(!o||!r.every(a=>a===o))return t===void 0?{entries:e}:{entries:e,description:t};const s=e.map(a=>{const c={service:a.service,price:a.price};return a.duration!==void 0&&(c.duration=a.duration),a.priceMax!==void 0&&(c.priceMax=a.priceMax),a.description!==void 0&&(c.description=a.description),c}),l=t!=null&&t.trim()?t:o;return{entries:s,description:l}}const U={pg13:"PG13",r:"R",xxx:"XXX"};function f(e,t){return t.rating??e.rating}function v(e){return U[e]}function P(e){if(e.entries.length===0)return!0;const t=f(e,e.entries[0]);return e.entries.every(r=>f(e,r)===t)}function H(e){return`rate-${e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}`}const X=L`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`,F=i.header`
  margin: 0 0 3rem;
`,W=i.div`
  display: grid;
  /*
   * 1.25 / 0.75 is measured, not guessed: at the desktop content width the
   * headline's first line needs 656px and a 1.15 split gave it 635, so it
   * wrapped and left "and" hanging on its own. This clears it, and the right
   * column still holds a ~50-character measure for the body.
   */
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
  gap: 1.25rem 3rem;
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,q=i.p`
  margin: 0 0 1.25rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.text.muted};
`,V=i.h2`
  margin: 0;
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: clamp(1.5rem, 4.2vw, 2.6rem);
  line-height: 1.25;
  /* Any width where it DOES wrap, it wraps evenly rather than dropping a
     single word onto its own line. The pixel fix above only holds at one
     size; this holds at all of them. */
  text-wrap: balance;
  font-weight: 400;
  color: ${e=>e.theme.colors.text.primary};
`,K=i.span`
  display: block;
  color: ${e=>h(e.theme)};
  text-shadow: 0 0 18px ${e=>d(e.theme,45)};
`,Z=i.div`
  height: 1px;
  margin: 2rem 0 0;
  transform-origin: left center;
  background: linear-gradient(
    to right,
    ${e=>h(e.theme)} 0%,
    ${e=>d(e.theme,25)} 45%,
    transparent 100%
  );
  /*
   * "backwards", not "both". With "both" the element's resting state is the
   * keyframe's start frame, scaleX(0), so anything that stops the animation from
   * running leaves the rule permanently invisible rather than merely
   * un-animated. Measured that exact state in a background tab, where the
   * browser suppresses the animation: width 0. "backwards" applies the start
   * frame only ahead of the run and hands the element back to its own style
   * afterwards, so "no animation" degrades to "drawn", which is the honest
   * default for a graphic element.
   */
  animation: ${X} 900ms cubic-bezier(0.2, 0.8, 0.2, 1) backwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,J=i.p`
  margin: 0;
  /* The column already sets the measure; this only guards very wide screens. */
  max-width: 52ch;
  font-size: 1rem;
  line-height: 1.75;
  color: ${e=>e.theme.colors.text.secondary};
`;function Se({eyebrow:e,headline:t,headlineAccent:r,body:o}){return!t.trim()&&!r.trim()&&!o.trim()?null:n.jsxs(F,{children:[e&&n.jsx(q,{children:e}),n.jsxs(W,{children:[n.jsxs(V,{children:[t,r&&n.jsx(K,{children:r})]}),n.jsx(J,{children:o})]}),n.jsx(Z,{})]})}const b=64,y=45,Q=`${b+y+16}px`;function Y(){return z-10}const ee=i.nav`
  position: sticky;
  top: ${b}px;
  /* Beneath the header, above the cards: the header must never be overlapped
     by the thing that hangs off it. */
  z-index: ${Y()};
  /*
   * FULL BLEED. Inside the page column the bar painted only as wide as the
   * column, so content scrolled visibly through the gutters either side of the
   * pinned strip — the operator's report, top left on a phone. Negative
   * margins pull it to the viewport edges and equal padding puts the labels
   * back on the content's own left edge.
   */
  margin: 0 -${w} 2.5rem;
  padding: 0.85rem ${w} 0.6rem;

  @media (max-width: ${_}) {
    margin: 0 -${$} 2.5rem;
    padding: 0.85rem ${$} 0.6rem;
  }
  /* Opaque and blurred like the header, so rows passing underneath do not
     read through it and the two bars look like one piece of chrome. */
  background: ${e=>`${e.theme.colors.background.primary}E6`};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${e=>d(e.theme,14)};
`,te=i.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  mask-image: linear-gradient(to right, #000 calc(100% - 3rem), transparent 100%);

  &::-webkit-scrollbar {
    display: none;
  }
`,re=i.a`
  flex: 0 0 auto;
  position: relative;
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: none;
  color: ${e=>e.$current?e.theme.colors.text.primary:e.theme.colors.text.muted};
  transition: color 160ms;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: ${e=>h(e.theme)};
    transform: scaleX(${e=>e.$current?1:0});
    transform-origin: left center;
    transition: transform 180ms ease;
  }

  &:hover,
  &:focus-visible {
    color: ${e=>e.theme.colors.text.primary};
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`;function ne(e){const[t,r]=p.useState(null),o=e.join("|");return p.useEffect(()=>{if(typeof IntersectionObserver>"u")return;const s=o?o.split("|"):[],l=s.map(m=>document.getElementById(m.slice(1))).filter(m=>m!==null);if(l.length===0)return;const a=new Set,c=new IntersectionObserver(m=>{for(const u of m)u.isIntersecting?a.add(u.target.id):a.delete(u.target.id);const g=s.filter(u=>a.has(u.slice(1)));r(g.length>0?g[g.length-1]??null:null)},{rootMargin:`-${b+y}px 0px -55% 0px`});for(const m of l)c.observe(m);return()=>c.disconnect()},[o]),t}function oe(e,t){p.useEffect(()=>{var a;const r=e.current;if(!r||!t)return;const o=r.querySelector(`a[href="${CSS.escape(t)}"]`);if(!o)return;const s=o.offsetLeft-r.offsetLeft-(r.clientWidth-o.offsetWidth)/2,l=((a=window.matchMedia)==null?void 0:a.call(window,"(prefers-reduced-motion: reduce)").matches)??!1;r.scrollTo({left:Math.max(0,s),behavior:l?"auto":"smooth"})},[e,t])}function Te({tabs:e}){const t=ne(e.map(o=>o.href)),r=p.useRef(null);return oe(r,t),e.length===0?null:n.jsx(ee,{"aria-label":"Jump to a section",children:n.jsx(te,{ref:r,children:e.map(o=>n.jsx(re,{href:o.href,$current:o.href===t,"aria-current":o.href===t?"true":void 0,children:o.label},o.href))})})}const ie="Visit me at my private location — discreet, comfortable, and no travel surcharge.",ae="I come to you — your hotel or residence within my travel radius.",j=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
  align-items: start;
  margin-bottom: 2.5rem;
`,k=i.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  /* Inside the card grid the gap does the spacing. A RateList rendered on its
     own is not in that grid, so without this the next group's heading lands
     directly against the previous group's last row. */
  ${e=>e.$standalone?"margin-bottom: 2.5rem;":""}
  /* A long section takes the whole row instead of towering over its
     neighbours. Its rungs then column up inside it (see RateGrid). */
  ${e=>e.$wide?"grid-column: 1 / -1;":""}
`,R=i.h2`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 1.5rem;
  color: ${e=>h(e.theme)};
  margin-bottom: 1rem;
  text-shadow: 0 0 8px ${e=>d(e.theme,40)};
`,S=i.h3`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 1.5rem;
  color: ${e=>h(e.theme)};
  margin-bottom: 1rem;
  text-shadow: 0 0 8px ${e=>d(e.theme,40)};
`,T=i.span`
  display: inline-block;
  flex: 0 0 auto;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1.5;
  white-space: nowrap;
  color: ${e=>h(e.theme)};
  border: 1px solid ${e=>d(e.theme,35)};
`,se=i.div`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  flex-wrap: wrap;
`,ce=i.p`
  margin: 0 0 1.25rem;
  padding: 0.875rem 1rem;
  min-height: 3.25rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${e=>e.theme.colors.text.secondary};
  background: ${e=>`color-mix(in srgb, ${e.theme.colors.background.secondary} 55%, transparent)`};
  border: 1px solid ${e=>d(e.theme,10)};
  border-radius: 8px;
`,E=i.div`
  display: grid;
  /* 20rem, not 17: at the full content width 17rem yielded four tracks of
     ~272px and a rung is service + description + duration + price on one
     line, which crushed at that size. 20rem yields three of ~380px. */
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  align-content: start;
  gap: 0.5rem;
  flex: 1;
`,le=i.div`
  ${G}
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: ${e=>`color-mix(in srgb, ${e.theme.colors.background.secondary} 60%, transparent)`};
  border: 1px solid ${e=>d(e.theme,8)};
  border-radius: 8px;
  align-items: center;
  transition: border-color 200ms, box-shadow 200ms;
  box-shadow: 0 0 12px ${e=>d(e.theme,15)};

  &:hover {
    border-color: ${e=>d(e.theme,20)};
    box-shadow: 0 0 20px ${e=>d(e.theme,25)};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
`,de=i.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,me=i.span`
  display: block;
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-top: 0.25rem;
`,he=i.span`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.muted};
  text-align: right;

  @media (max-width: 600px) {
    text-align: left;
  }
`,ue=i.span`
  font-weight: 600;
  color: ${e=>h(e.theme)};
  text-align: right;
  white-space: nowrap;

  @media (max-width: 600px) {
    text-align: left;
  }
`,pe=i.div`
  grid-column: 1 / -1;
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.muted};
  font-style: italic;
`,fe=i.p`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.65;
  margin-bottom: 1.25rem;
`,ge=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
`,A=i.details`
  background: color-mix(in srgb, ${e=>e.theme.colors.background.secondary} 60%, transparent);
  border: 1px solid ${e=>d(e.theme,8)};
  border-radius: 12px;
  overflow: hidden;

  &[open] {
    border-color: ${e=>d(e.theme,20)};
  }
`,xe=i.summary`
  cursor: pointer;
  list-style: none;
  padding: 1rem 1.25rem;
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: 1.125rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    content: '+';
    float: right;
    color: ${e=>h(e.theme)};
  }

  ${A}[open] &::after {
    content: '–';
  }
`,be=i.p`
  margin: 0;
  padding: 0 1.25rem 1rem;
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${e=>e.theme.colors.text.secondary};
`;function we(e,t){const r=o=>`$${o.toLocaleString()}`;return t&&t!==e?`${r(e)}–${r(t)}`:r(e)}function $e(e){const t=e.toLowerCase();if(t.includes("incall")||t.includes("in-call")||t.includes("companionship"))return"incall";if(t.includes("outcall")||t.includes("out-call"))return"outcall"}function ve(e){if(e.description)return e.description;const t=e.sectionType??$e(e.title);if(t==="incall")return ie;if(t==="outcall")return ae}function I({entry:e,rating:t}){const r=B(),{surfaceProps:o}=C(r),{onMouseEnter:s,...l}=o,a=c=>{s==null||s(c)};return n.jsxs(le,{...l,"data-magic-card":r,onMouseEnter:a,onMouseOver:a,children:[n.jsxs(de,{"data-magic-title":!0,children:[e.service,t&&n.jsx(T,{children:v(t)}),e.description&&n.jsx(me,{children:e.description})]}),n.jsx(he,{children:e.duration}),n.jsx(ue,{children:we(e.price,e.priceMax)}),e.notes&&n.jsx(pe,{children:e.notes})]})}function Ee({entries:e,title:t,description:r,titleLevel:o=3}){const s=o===2?R:S,l=O(e,r);return n.jsxs(k,{$standalone:!0,children:[n.jsx(s,{children:t}),l.description&&n.jsx(fe,{children:l.description}),n.jsx(E,{children:l.entries.map(a=>n.jsx(I,{entry:a},`${a.service}-${a.price}`))})]})}function Ae({sections:e}){return e.length===0?null:n.jsx(ge,{children:e.map(t=>n.jsxs(A,{children:[n.jsx(xe,{children:t.title}),t.description&&n.jsx(be,{children:t.description})]},t.title))})}const ye=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,je=i(x)`
  width: 60%;
  margin-bottom: 0.5rem;
`;function Ie({rowsPerCard:e=[3,2,2]}){return n.jsx(j,{"aria-hidden":"true","data-testid":"rates-skeleton",children:e.map((t,r)=>n.jsxs(ye,{children:[n.jsx(je,{$height:"1.75rem",$radius:"6px"}),n.jsx(x,{$height:"3.25rem",$radius:"8px"}),Array.from({length:t},(o,s)=>n.jsx(x,{$height:"3.5rem",$radius:"8px"},s))]},r))})}function Le({sections:e,titleLevel:t=3}){return n.jsx(j,{children:e.map(r=>{const o=t===2?R:S,s=ve(r),l=P(r),a=r.entries[0]?f(r,r.entries[0]):r.rating;return n.jsxs(k,{id:H(r.title),$wide:D(r),style:{scrollMarginTop:Q},children:[n.jsxs(se,{children:[n.jsx(o,{children:r.title}),l&&a&&n.jsx(T,{children:v(a)})]}),s&&n.jsx(ce,{children:s}),n.jsx(E,{children:r.entries.map(c=>{const m=l?void 0:f(r,c);return n.jsx(I,{entry:c,...m?{rating:m}:{}},`${c.service}-${c.price}`)})})]},r.title)})})}export{Q as A,Ie as R,Te as a,Le as b,Ae as c,Ee as d,Se as e,H as r,Re as s};
//# sourceMappingURL=RatesTable-DcudmeaE.js.map
