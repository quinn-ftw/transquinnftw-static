import{h,j as e,P as d,a as r}from"./index-DBvZCzBm.js";import{u as f}from"./usePageIllustrations-D3P9Ia7w.js";const w=r.div`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`,j=r.div`
  flex-shrink: 0;

  @media (max-width: 700px) {
    order: -1;
  }
`;function b({slot:a,children:i}){const l=f(),{rewritePhotoSrc:c}=h(),t=l[a];if(!(t!=null&&t.image!==""))return i==null?null:e.jsx(e.Fragment,{children:i});const o=c??(x=>x),g=`/photos/${t.image.replace(/\.\w+$/,".webp")}`,m=o(`/photos/${t.image}`),p=o(g),u=a.replace(/:/g," ").replace(/\//g," "),s=e.jsx(j,{style:{opacity:t.opacity},children:e.jsx(d,{src:m,webpSrc:p,alt:u,intrinsicWidth:512,intrinsicHeight:768,width:"auto",height:t.height,objectFit:"contain",loading:"lazy"})});if(i==null)return s;const n=t.side==="left";return e.jsxs(w,{children:[n&&s,e.jsx("div",{style:{flex:1},children:i}),!n&&s]})}export{b as P};
//# sourceMappingURL=PageIllustration-BELAFJXe.js.map
