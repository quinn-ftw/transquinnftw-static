import{j as e,a as i,q as et,s as st,r as it,p as s,S,P as at,M as _,L as M,z as rt,g as ot,A as k,o as R}from"./index-DBvZCzBm.js";import{u as nt}from"./useSpecialtiesData--QG6i0D4.js";const w=i.span`
  color: ${t=>t.theme.colors.primary};
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.82em;
  vertical-align: baseline;
  margin-right: 0.08em;
`,ct=i.span`
  color: ${t=>t.theme.colors.primary};
  font-weight: 600;
`,lt=i.span`
  font-size: 1.55em;
  font-weight: 700;
  color: ${t=>t.theme.colors.primary};
  line-height: 0.78;
  vertical-align: baseline;
  margin-right: 0.015em;
`,dt=/(\*\*[^*]+\*\*|\*[^*]+\*|==[^=]+==)/g,ht=/(\n\s*\n+)/;function ut(t){return/^\n\s*\n+$/.test(t)}function pt(t,o){const d=/==[^=]+==/.test(t);let c=!1;const r=t.split(dt).reduce((h,n,$)=>{if(n==="")return h;const p=`${o}-${$}`;if(n.startsWith("**")&&n.endsWith("**"))h.push(e.jsx("strong",{children:n.slice(2,-2)},p));else if(n.startsWith("==")&&n.endsWith("==")){const v=n.slice(2,-2);c?h.push(e.jsx(ct,{children:v},p)):(c=!0,h.push(e.jsx(w,{children:v},p)))}else n.startsWith("*")&&n.endsWith("*")?h.push(e.jsx("em",{children:n.slice(1,-1)},p)):h.push(n);return h},[]),f=o===0;if(typeof r[0]!="string")return r;const b=r[0],l=b.match(/^(\S+)(\s*)/);if(!l||!l[1])return r;const m=l[1],y=l[2]??"",j=b.slice(l[0].length);if(f){const h=m[0],n=m.slice(1);r[0]=e.jsxs(e.Fragment,{children:[e.jsx(lt,{children:h}),d?n:e.jsx(w,{children:n}),y,j]})}else d||(r[0]=e.jsxs(e.Fragment,{children:[e.jsx(w,{children:m}),y,j]}));return r}function mt(t){const o=t.split(ht),d=[];let c=0;for(const r of o)if(r!==void 0){if(ut(r)){d.push(r);continue}d.push(...pt(r,c)),c++}return d}const x=i.div`
  font-size: 0.7rem;
  color: ${t=>t.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
  padding-bottom: 0.375rem;
  border-bottom: 1px solid ${t=>t.theme.colors.border};
`,gt=i.div`
  display: grid;
  grid-template-columns: 55% 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,xt=i.div`
  font-size: 1rem;
  line-height: 1.8;
  color: ${t=>t.theme.colors.text.secondary};
  white-space: pre-line;
`,T=i.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${t=>t.theme.colors.text.secondary};
  margin: 1em 0 0;
`,A=i(M)`
  color: ${t=>t.theme.colors.primary};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,ft=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`,bt=i.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: ${t=>t.theme.typography.fontSize.xs};
  font-weight: 500;
  background: ${t=>t.theme.colors.secondary}1A;
  border: 1px solid ${t=>t.theme.colors.secondary}40;
  border-radius: ${t=>t.theme.borderRadius.full};
  color: ${t=>t.theme.colors.secondary};
`,yt=i.div`
  position: sticky;
  top: 88px; /* header height + margin */
  aspect-ratio: 3 / 4;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 900px) {
    position: static;
    max-width: 380px;
    aspect-ratio: 3 / 4;
  }
`,jt=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,L=i.div`
  ${R}
  background: ${t=>t.theme.colors.background.secondary}99;
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
`,E=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem 1.25rem;
`,vt=i(E)`
  grid-template-columns: repeat(3, 1fr);
`,z=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,W=i.span`
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: ${t=>t.theme.colors.text.muted};
`,C=i.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${t=>t.theme.colors.text.primary};
`,_t=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,H=i.div`
  ${R}
  background: ${t=>t.theme.colors.background.secondary}99;
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
`,P=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,B=i.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: ${t=>t.theme.typography.fontSize.xs};
  background: ${t=>t.theme.colors.primary}14;
  border: 1px solid ${t=>t.theme.colors.primary}26;
  border-radius: ${t=>t.theme.borderRadius.full};
  color: ${t=>t.theme.colors.text.secondary};
`,$t=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,St=i.div`
  background: ${t=>t.theme.colors.background.secondary}99;
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
`,wt=i.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,kt=i.li`
  font-size: 0.875rem;
  color: ${t=>t.theme.colors.text.secondary};
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '·';
    position: absolute;
    left: 0;
    color: ${t=>t.theme.colors.text.muted};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 200ms;

    &:hover {
      color: ${t=>t.theme.colors.primary};
    }
  }
`;function Tt(){const{activeStop:t,nextStop:o}=rt(),{trackInteraction:d}=ot(),c=s("about","link_see_schedule","see where I'm headed →"),r=s("about","link_full_schedule","full schedule →");return t?e.jsxs(T,{children:["Currently in ",t.city,", ",t.state," —"," ",e.jsx(A,{to:`/tour?city=${k(t.city)}`,onClick:()=>d({type:"click",data:{elementType:"link",eventName:"about_tour_link",eventLabel:t.city,pageUrl:window.location.href}}),children:c})]}):o?e.jsxs(T,{children:["Heading to ",o.city,", ",o.state," soon —"," ",e.jsx(A,{to:`/tour?city=${k(o.city)}`,onClick:()=>d({type:"click",data:{elementType:"link",eventName:"about_tour_link",eventLabel:o.city,pageUrl:window.location.href}}),children:r})]}):null}function zt(){et();const t=st(),{physical:o,identity:d,about:c}=t,r=t.gallery.find(a=>a.featured),{data:f}=nt(),b=it.useMemo(()=>{const a=new Map;for(const u of f??[])for(const g of u.items)a.set(g.name,`/specialties/${u.slug}/${g.slug}`);return a},[f]),l=o.additional??{},m=s("about","section_title","About"),y=s("about","section_details","Details"),j=s("about","heading_physical","Physical"),h=s("about","heading_appearance","Appearance & Identity"),n=s("about","heading_available_for","Available For"),$=s("about","heading_available_to","Available To"),p=s("about","heading_menu","Menu"),v=s("about","stat_age","Age"),F=s("about","stat_height","Height"),D=s("about","stat_weight","Weight"),G=s("about","stat_body_type","Body Type"),I=s("about","stat_cup_size","Cup Size"),N=s("about","stat_bust","Bust"),U=s("about","stat_waist","Waist"),K=s("about","stat_hips","Hips"),O=s("about","stat_ethnicity","Ethnicity"),q=s("about","stat_hair","Hair"),V=s("about","stat_hair_length","Hair Length"),J=s("about","stat_eyes","Eyes"),Q=s("about","stat_tattoos","Tattoos"),X=s("about","stat_piercings","Piercings"),Y=s("about","stat_trans_status","Trans Status"),Z=s("about","stat_sexual_role","Sexual Role"),tt=s("about","stat_languages","Languages");return e.jsxs(e.Fragment,{children:[e.jsx(S,{title:m,headingLevel:1,id:"about",children:e.jsxs(gt,{children:[e.jsxs("div",{children:[e.jsx(xt,{children:mt(c.bio)}),e.jsx(Tt,{}),e.jsx(ft,{children:c.personality.map(a=>e.jsx(bt,{children:a},a))})]}),r&&e.jsx(yt,{children:e.jsx(at,{src:r.src,webpSrc:r.webpSrc,alt:r.alt,intrinsicWidth:r.intrinsicWidth,intrinsicHeight:r.intrinsicHeight,height:"100%",objectFit:"cover"})})]})}),e.jsxs(S,{title:y,id:"details",children:[e.jsxs(jt,{children:[e.jsxs(_,{as:L,children:[e.jsx(x,{"data-magic-title":!0,children:j}),e.jsx(E,{children:[[v,o.age],[F,o.height],[D,l.Weight],[G,o.bodyType],[I,o.cupSize],[N,l.Bust],[U,l.Waist],[K,l.Hips]].map(([a,u])=>e.jsxs(z,{children:[e.jsx(W,{children:a}),e.jsx(C,{children:u})]},a))})]}),e.jsxs(_,{as:L,children:[e.jsx(x,{"data-magic-title":!0,children:h}),e.jsx(vt,{children:[[O,o.ethnicity],[q,o.hairColor],[V,o.hairLength],[J,o.eyeColor],[Q,l.Tattoos],[X,l.Piercings],[Y,l["Trans Status"]],[Z,l["Sexual Role"]],[tt,d.languages.join(", ")]].map(([a,u])=>e.jsxs(z,{children:[e.jsx(W,{children:a}),e.jsx(C,{children:u})]},a))})]})]}),e.jsxs(_t,{children:[e.jsxs(_,{as:H,children:[e.jsx(x,{"data-magic-title":!0,children:n}),e.jsx(P,{children:c.availableFor.map(a=>e.jsx(B,{children:a},a))})]}),e.jsxs(_,{as:H,children:[e.jsx(x,{"data-magic-title":!0,children:$}),e.jsx(P,{children:c.availableTo.map(a=>e.jsx(B,{children:a},a))})]})]})]}),c.activities&&c.activities.length>0&&e.jsx(S,{title:p,id:"menu",children:e.jsx($t,{children:c.activities.map(a=>e.jsxs(St,{children:[e.jsx(x,{children:a.category}),e.jsx(wt,{children:a.items.map(u=>{const g=b.get(u);return e.jsx(kt,{children:g?e.jsx(M,{to:g,children:u}):u},u)})})]},a.category))})})]})}export{zt as default};
//# sourceMappingURL=AboutPage-DxxarOKJ.js.map
