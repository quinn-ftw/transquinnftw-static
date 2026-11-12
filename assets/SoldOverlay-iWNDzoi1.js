import{au as i,b as n,j as o,a as r}from"./index-DBvZCzBm.js";const f={new:"New",like_new:"Like New",good:"Good",fair:"Fair"};function m(e){const t=e.trim();return t?`${t}'s Shop`:"Shop"}function h(e){return e===0?"No items available":`${e} ${e===1?"item":"items"} available`}const a="en-US";function u(e){return i(e.minor,e.currency,a)}const p=n`
  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary};
    outline-offset: 2px;
  }
`,s=r.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`;function d(){return o.jsx(s,{children:"No photo"})}const l=r.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.58);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>e.$large?"2rem":e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  letter-spacing: ${e=>e.$large?"0.15em":"0.1em"};
  text-transform: uppercase;
  color: ${e=>e.theme.colors.text.primary};
`;function g({large:e=!1}){return o.jsx(l,{$large:e,children:"Sold"})}export{f as C,d as N,g as S,u as a,h as b,p as f,m as s};
//# sourceMappingURL=SoldOverlay-iWNDzoi1.js.map
