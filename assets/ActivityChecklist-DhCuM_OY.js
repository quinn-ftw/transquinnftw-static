import{b as i,a as t,r as b,j as s,l as I,Z as O,ax as se,x as ee,p as L}from"./index-DBvZCzBm.js";import{P as ce}from"./phone-BQxk50ay.js";var le=t.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.body};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all ${e=>e.theme.transitions.normal};
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  position: relative;
  overflow: hidden;

  /* Size variants */
  ${({$size:e,theme:o})=>{switch(e){case"sm":return i`
          padding: ${o.spacing.sm} ${o.spacing.md};
          font-size: ${o.typography.fontSize.sm};
          border-radius: ${o.borderRadius.md};
          min-height: 32px;
        `;case"md":return i`
          padding: ${o.spacing.md} ${o.spacing.lg};
          font-size: ${o.typography.fontSize.base};
          border-radius: ${o.borderRadius.lg};
          min-height: 40px;
        `;case"lg":return i`
          padding: ${o.spacing.lg} ${o.spacing.xl};
          font-size: ${o.typography.fontSize.lg};
          border-radius: ${o.borderRadius.lg};
          min-height: 48px;
        `;default:return i`
          padding: ${o.spacing.md} ${o.spacing.lg};
          font-size: ${o.typography.fontSize.base};
          border-radius: ${o.borderRadius.lg};
          min-height: 40px;
        `}}}

  /* Style variants */
  ${({$variant:e,theme:o})=>{var r,n,a,l,c,d,h,f,g;switch(e){case"primary":return i`
          background-color: ${o.colors.primary.main};
          color: ${o.colors.background};
          border-color: ${o.colors.primary.main};

          &:hover:not(:disabled) {
            background-color: ${o.colors.hover.primary};
            transform: translateY(-2px);
            box-shadow: ${o.shadows.md};

            ${((r=o.extensions)==null?void 0:r.cyberpunk)&&i`
              box-shadow: ${o.extensions.cyberpunk.neonGlow.magenta};
            `}
          }

          &:active:not(:disabled) {
            background-color: ${o.colors.active.primary};
            transform: translateY(0);
            box-shadow: ${o.shadows.sm};
          }
        `;case"secondary":return i`
          background-color: ${o.colors.secondary.main};
          color: ${o.colors.text.primary};
          border-color: ${o.colors.secondary.main};

          &:hover:not(:disabled) {
            background-color: ${o.colors.hover.secondary};
            transform: translateY(-2px);
            box-shadow: ${o.shadows.md};

            ${((n=o.extensions)==null?void 0:n.cyberpunk)&&i`
              box-shadow: ${o.extensions.cyberpunk.neonGlow.cyan};
            `}
          }

          &:active:not(:disabled) {
            background-color: ${o.colors.active.secondary};
            transform: translateY(0);
            box-shadow: ${o.shadows.sm};
          }
        `;case"accent":return i`
          background-color: ${o.colors.accent.main};
          color: ${o.colors.background};
          border-color: ${o.colors.accent.main};

          &:hover:not(:disabled) {
            opacity: 0.9;
            transform: translateY(-2px);
            box-shadow: ${o.shadows.md};

            ${((a=o.extensions)==null?void 0:a.cyberpunk)&&i`
              box-shadow: ${o.extensions.cyberpunk.neonGlow.green};
            `}
          }

          &:active:not(:disabled) {
            opacity: 0.8;
            transform: translateY(0);
            box-shadow: ${o.shadows.sm};
          }
        `;case"ghost":return i`
          background-color: transparent;
          color: ${o.colors.primary.main};
          border-color: transparent;

          &:hover:not(:disabled) {
            background-color: ${o.colors.hover.primary};
          }

          &:active:not(:disabled) {
            background-color: ${o.colors.active.primary};
          }
        `;case"danger":return i`
          background-color: ${o.colors.error.main};
          color: ${o.colors.text.primary};
          border-color: ${o.colors.error.main};

          ${((l=o.extensions)==null?void 0:l.cyberpunk)&&i`
            box-shadow: 0 0 10px ${o.colors.error.main}66;
          `}

          &:hover:not(:disabled) {
            opacity: 0.9;
            transform: translateY(-2px);
            box-shadow: ${o.shadows.md};

            ${((c=o.extensions)==null?void 0:c.cyberpunk)&&i`
              box-shadow: 0 0 15px ${o.colors.error.main};
            `}
          }

          &:active:not(:disabled) {
            opacity: 0.8;
            transform: translateY(0);
            box-shadow: ${o.shadows.sm};
          }
        `;case"success":return i`
          background-color: ${o.colors.success.main};
          color: ${o.colors.background.primary};
          border-color: ${o.colors.success.main};

          ${((d=o.extensions)==null?void 0:d.cyberpunk)&&i`
            box-shadow: 0 0 10px ${o.colors.success.main}66;
          `}

          &:hover:not(:disabled) {
            opacity: 0.9;
            transform: translateY(-2px);
            box-shadow: ${o.shadows.md};

            ${((h=o.extensions)==null?void 0:h.cyberpunk)&&i`
              box-shadow: 0 0 15px ${o.colors.success.main};
            `}
          }

          &:active:not(:disabled) {
            opacity: 0.8;
            transform: translateY(0);
            box-shadow: ${o.shadows.sm};
          }
        `;case"warning":return i`
          background-color: ${o.colors.warning.main};
          color: ${o.colors.background.primary};
          border-color: ${o.colors.warning.main};

          ${((f=o.extensions)==null?void 0:f.cyberpunk)&&i`
            box-shadow: 0 0 10px ${o.colors.warning.main}66;
          `}

          &:hover:not(:disabled) {
            opacity: 0.9;
            transform: translateY(-2px);
            box-shadow: ${o.shadows.md};

            ${((g=o.extensions)==null?void 0:g.cyberpunk)&&i`
              box-shadow: 0 0 15px ${o.colors.warning.main};
            `}
          }

          &:active:not(:disabled) {
            opacity: 0.8;
            transform: translateY(0);
            box-shadow: ${o.shadows.sm};
          }
        `;case"position":return i`
          background-color: ${o.colors.text.primary}0d; /* 5% opacity */
          color: ${o.colors.text.primary};
          border-color: ${o.colors.text.primary}33; /* 20% opacity */

          &:hover:not(:disabled) {
            background-color: ${o.colors.text.primary}1a; /* 10% opacity */
          }

          &:active:not(:disabled) {
            background-color: ${o.colors.text.primary}26; /* 15% opacity */
          }
        `;case"icon":return i`
          background-color: transparent;
          color: ${o.colors.text.primary};
          border-color: transparent;
          padding: ${o.spacing.sm};
          min-width: auto;

          &:hover:not(:disabled) {
            background-color: ${o.colors.text.primary}1a; /* 10% opacity */
          }

          &:active:not(:disabled) {
            background-color: ${o.colors.text.primary}26; /* 15% opacity */
          }
        `;default:return""}}}

  /* Active state enhancement */
  ${({$active:e,$variant:o,theme:r})=>e&&o&&i`
      ${o==="primary"&&i`
        box-shadow: 0 0 15px ${r.colors.primary.main};
      `}
      ${o==="secondary"&&i`
        box-shadow: 0 0 10px ${r.colors.secondary.main};
      `}
    ${o==="danger"&&i`
        box-shadow: 0 0 15px ${r.colors.error.main};
      `}
    ${o==="success"&&i`
        box-shadow: 0 0 15px ${r.colors.success.main};
      `}
    ${o==="warning"&&i`
        box-shadow: 0 0 15px ${r.colors.warning.main};
      `}
    `}

  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: ${e=>e.theme.colors.disabled.background};
    color: ${e=>e.theme.colors.disabled.text};
    border-color: ${e=>e.theme.colors.disabled.background};
  }

  /* Focus state */
  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary.main};
    outline-offset: 2px;
  }
`,Q=t.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,de=b.forwardRef(({variant:e="primary",size:o="md",icon:r,iconPosition:n="left",active:a=!1,fullWidth:l=!1,disabled:c=!1,className:d,children:h,...f},g)=>s.jsxs(le,{ref:g,$variant:e,$size:o,$fullWidth:l,$active:a,disabled:c,className:d,...f,children:[r&&n==="left"&&s.jsx(Q,{children:r}),h,r&&n==="right"&&s.jsx(Q,{children:r})]}));de.displayName="Button";t.span`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.$size==="sm"?e.theme.spacing.xs:e.$size==="lg"?e.theme.spacing.sm:e.theme.spacing.xs};
  font-family: ${e=>e.theme.typography.fontFamily.mono||e.theme.typography.fontFamily.body};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  border-radius: ${e=>e.theme.borderRadius.sm};
  white-space: nowrap;
  letter-spacing: 0.05em; /* Acceptable: No theme equivalent */
  transition: all ${e=>e.theme.transitions.fast};
  backdrop-filter: blur(4px); /* Acceptable: No theme equivalent */
  cursor: ${e=>e.$clickable?"pointer":"default"};
  user-select: ${e=>e.$clickable?"none":"auto"};

  /* Size variants */
  ${({$size:e,theme:o})=>{switch(e){case"sm":return i`
          padding: calc(${o.spacing.xs} / 2) ${o.spacing.sm};
          font-size: ${o.typography.fontSize.xs};
          height: 18px; /* Acceptable: Component-specific constraint */
        `;case"lg":return i`
          padding: ${o.spacing.xs} calc(${o.spacing.sm} + ${o.spacing.xs} / 2);
          font-size: ${o.typography.fontSize.sm};
          height: 24px; /* Acceptable: Component-specific constraint */
        `;case"md":default:return i`
          padding: calc(${o.spacing.xs} * 0.75) ${o.spacing.sm};
          font-size: calc(${o.typography.fontSize.xs} * 0.92);
          height: 20px; /* Acceptable: Component-specific constraint */
        `}}}

  /* Color variants */
  ${({$variant:e,$outlined:o,$customColor:r,$glowing:n,theme:a})=>{var d,h;const c=(()=>{if(r)return r;switch(e){case"primary":return a.colors.primary.main;case"secondary":return a.colors.secondary.main;case"success":return a.colors.success.main;case"warning":return a.colors.warning.main;case"error":return a.colors.error.main;case"info":return a.colors.info.main||a.colors.secondary.main;case"default":default:return a.colors.text.secondary}})();return o?i`
        background: ${a.colors.background.primary}99; /* 60% opacity */
        border: 1px solid ${c};
        color: ${c};

        ${n&&i`
          box-shadow: 0 0 8px ${c}66;
          text-shadow: 0 0 4px ${c}88;
        `}

        ${((d=a.extensions)==null?void 0:d.cyberpunk)&&n&&i`
          box-shadow:
            0 0 8px ${c}66,
            inset 0 1px 0 ${a.colors.text.primary}33; /* 20% opacity */
        `}
      `:i`
      background: linear-gradient(45deg, ${c}dd, ${c}99);
      color: ${a.colors.text.primary};
      text-shadow: 0 1px 2px ${a.colors.background.primary}cc; /* 80% opacity */

      ${n&&i`
        box-shadow: 0 0 8px ${c}66;
        text-shadow: 0 0 4px ${c}88;
      `}

      ${((h=a.extensions)==null?void 0:h.cyberpunk)&&i`
        box-shadow: ${n?`0 0 8px ${c}66, inset 0 1px 0 ${a.colors.text.primary}33`:`inset 0 1px 0 ${a.colors.text.primary}33`}; /* 20% opacity */
      `}
    `}}

  /* Hover effect for clickable badges */
  ${({$clickable:e})=>e&&i`
      &:hover {
        transform: translateY(-1px);
        filter: brightness(1.1);
      }

      &:active {
        transform: translateY(0);
      }
    `}
`;t.span`
  display: inline-flex;
  align-items: center;
  font-size: ${e=>e.$size==="sm"?"11px":e.$size==="lg"?"14px":"12px"};
`;var me=t.div`
  display: flex;
  flex-direction: column;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  margin-bottom: ${e=>e.theme.spacing.md};
`,pe=t.label`
  font-family: ${e=>e.theme.typography.fontFamily.body};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,he=t.input`
  font-family: ${e=>e.theme.typography.fontFamily.body};
  font-size: ${e=>e.theme.typography.fontSize.base};
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.md};
  border: 2px solid
    ${e=>e.$hasError?e.theme.colors.error.main:e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.surface||e.theme.colors.background.secondary||"rgba(0, 0, 0, 0.3)"};
  color: ${e=>e.theme.colors.text.primary};
  transition: all ${e=>e.theme.transitions.normal};
  outline: none;

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }

  /* Hover state with variant-specific colors */
  &:hover:not(:disabled) {
    ${({$hasError:e,$variant:o,theme:r})=>{if(e)return i`
          border-color: ${r.colors.error.main};
        `;switch(o){case"secondary":return i`
            border-color: ${r.colors.secondary.main};
          `;case"danger":return i`
            border-color: ${r.colors.error.main};
          `;case"primary":default:return i`
            border-color: ${r.colors.primary.main};
          `}}}
  }

  /* Focus state with variant-specific glow */
  &:focus {
    ${({$hasError:e,$variant:o,theme:r})=>{var l,c,d,h,f,g,x,w,S,k,y;if(e)return i`
          border-color: ${r.colors.error.main};
          box-shadow: 0 0 0 3px ${r.colors.error.main}20;
        `;let n=r.colors.primary[500],a=(d=(c=(l=r.extensions)==null?void 0:l.cyberpunk)==null?void 0:c.neonGlow)==null?void 0:d.magenta;switch(o){case"secondary":n=((h=r.colors.secondary)==null?void 0:h[500])||r.colors.primary[500],a=(x=(g=(f=r.extensions)==null?void 0:f.cyberpunk)==null?void 0:g.neonGlow)==null?void 0:x.cyan;break;case"danger":n=r.colors.error[500],a=`0 0 10px ${r.colors.error[500]}66`;break;case"primary":default:n=r.colors.primary[500],a=(k=(S=(w=r.extensions)==null?void 0:w.cyberpunk)==null?void 0:S.neonGlow)==null?void 0:k.magenta;break}return i`
        border-color: ${n};
        box-shadow: 0 0 0 3px ${n}20;

        ${((y=r.extensions)==null?void 0:y.cyberpunk)&&i`
          box-shadow: ${a};
        `}
      `}}
  }

  &:disabled {
    background-color: ${e=>e.theme.colors.disabled.background};
    color: ${e=>e.theme.colors.disabled.text};
    cursor: not-allowed;
    opacity: 0.6;
  }
`,$e=t.span`
  font-family: ${e=>e.theme.typography.fontFamily.body};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.error.main};
  margin-top: ${e=>e.theme.spacing.sm};
`,T=b.forwardRef(({label:e,error:o,variant:r="primary",fullWidth:n=!1,className:a,id:l,...c},d)=>{const h=l||(e==null?void 0:e.toLowerCase().replace(/\s+/g,"-"));return s.jsxs(me,{$fullWidth:n,className:a,children:[e&&s.jsx(pe,{htmlFor:h,children:e}),s.jsx(he,{ref:d,$hasError:!!o,$variant:r,id:h,...c}),o&&s.jsx($e,{role:"alert",children:o})]})});T.displayName="Input";t.div`
  display: flex;
  flex-direction: column;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  margin-bottom: ${e=>e.theme.spacing.md};
`;t.label`
  font-family: ${e=>e.theme.typography.fontFamily.body};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;t.textarea`
  font-family: ${e=>e.theme.typography.fontFamily.body};
  font-size: ${e=>e.theme.typography.fontSize.base};
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.md};
  border: 2px solid
    ${e=>e.$hasError?e.theme.colors.error.main:e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text.primary};
  transition: all ${e=>e.theme.transitions.normal};
  outline: none;
  resize: vertical;
  min-height: 120px;

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }

  &:hover:not(:disabled) {
    border-color: ${e=>e.$hasError?e.theme.colors.error.main:e.theme.colors.primary.main};
  }

  &:focus {
    border-color: ${e=>e.$hasError?e.theme.colors.error.main:e.theme.colors.primary.main};
    box-shadow: 0 0 0 3px
      ${e=>e.$hasError?`${e.theme.colors.error.main}20`:`${e.theme.colors.primary.main}20`};

    ${e=>{var o;return((o=e.theme.extensions)==null?void 0:o.cyberpunk)&&!e.$hasError&&i`
        box-shadow: ${e.theme.extensions.cyberpunk.neonGlow.magenta};
      `}}
  }

  &:disabled {
    background-color: ${e=>e.theme.colors.disabled.background};
    color: ${e=>e.theme.colors.disabled.text};
    cursor: not-allowed;
    opacity: 0.6;
    resize: none;
  }
`;t.span`
  font-family: ${e=>e.theme.typography.fontFamily.body};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.error.main};
  margin-top: ${e=>e.theme.spacing.sm};
`;var U=t.div`
  background-color: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${e=>e.theme.transitions.normal};
  cursor: ${({$clickable:e})=>e?"pointer":"default"};

  ${({$hoverable:e,theme:o})=>{var r;return e&&i`
      &:hover {
        transform: translateY(-4px);
        box-shadow: ${o.shadows.lg};
        border-color: ${o.colors.primary.main};

        ${((r=o.extensions)==null?void 0:r.cyberpunk)&&i`
          box-shadow: ${o.extensions.cyberpunk.neonGlow.large};
        `}
      }
    `}}

  &:active {
    ${({$clickable:e,theme:o})=>e&&i`
        transform: translateY(-2px);
        box-shadow: ${o.shadows.md};
      `}
  }
`;t.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${e=>e.theme.transitions.slow};
  }

  ${({$overlay:e,theme:o})=>e&&i`
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: ${o.colors.background.primary}33; /* 20% opacity */
        transition: background ${o.transitions.normal};
      }
    `}

  ${U}:hover & img {
    transform: scale(1.05);
  }

  ${U}:hover &::after {
    ${({$overlay:e,theme:o})=>e&&i`
        background: ${o.colors.background.primary}66; /* 40% opacity */
      `}
  }
`;t.div`
  padding: ${({$padding:e,theme:o})=>{switch(e){case"none":return"0";case"sm":return o.spacing.md;case"md":return o.spacing.lg;case"lg":return o.spacing.xl;default:return o.spacing.lg}}};
`;t.div`
  margin-bottom: ${e=>e.theme.spacing.xl};
`;t.label`
  display: block;
  margin-bottom: ${e=>e.theme.spacing.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};

  /* Cyberpunk green label color */
  ${e=>{var o;return((o=e.theme.extensions)==null?void 0:o.cyberpunk)&&i`
      color: ${e.theme.colors.accent.main};
      font-weight: ${e.theme.typography.fontWeight.bold};
    `}}
`;t.span`
  color: ${e=>e.theme.colors.error.main};

  /* Cyberpunk danger glow */
  ${e=>{var o;return((o=e.theme.extensions)==null?void 0:o.cyberpunk)&&i`
      text-shadow: 0 0 5px ${e.theme.colors.error.main};
    `}}
`;t.div`
  margin-top: ${e=>e.theme.spacing.xs};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.4;
`;t.div`
  margin-top: ${e=>e.theme.spacing.xs};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.error.main};

  /* Cyberpunk danger glow */
  ${e=>{var o;return((o=e.theme.extensions)==null?void 0:o.cyberpunk)&&i`
      text-shadow: 0 0 5px ${e.theme.colors.error.main};
    `}}
`;var ue=t.select`
  background: ${e=>e.theme.colors.background};
  border: 2px solid ${e=>e.theme.colors.border.default};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.md};
  font-family: ${e=>e.theme.typography.fontFamily.body};
  font-size: ${e=>e.theme.typography.fontSize.base};
  outline: none;
  transition: all ${e=>e.theme.transitions.normal};
  width: ${e=>e.$fullWidth?"100%":"auto"};
  cursor: pointer;
  border-radius: ${e=>e.theme.borderRadius.md};

  /* Cyberpunk darker background */
  ${e=>{var o;return((o=e.theme.extensions)==null?void 0:o.cyberpunk)&&i`
      background: ${e.theme.colors.surface};
      color: ${e.theme.colors.primary.main};
    `}}

  /* Focus states per variant */
  &:focus {
    ${({$variant:e,theme:o})=>{var r,n,a;switch(e){case"primary":return i`
            border-color: ${o.colors.primary.main};
            box-shadow: 0 0 0 3px ${o.colors.primary.main}20;

            ${((r=o.extensions)==null?void 0:r.cyberpunk)&&i`
              box-shadow: 0 0 10px ${o.colors.primary.main};
            `}
          `;case"secondary":return i`
            border-color: ${o.colors.secondary.main};
            box-shadow: 0 0 0 3px ${o.colors.secondary.main}20;

            ${((n=o.extensions)==null?void 0:n.cyberpunk)&&i`
              box-shadow: 0 0 10px ${o.colors.secondary.main};
            `}
          `;case"danger":return i`
            border-color: ${o.colors.error.main};
            box-shadow: 0 0 0 3px ${o.colors.error.main}20;

            ${((a=o.extensions)==null?void 0:a.cyberpunk)&&i`
              box-shadow: 0 0 10px ${o.colors.error.main};
            `}
          `;default:return i`
            border-color: ${o.colors.primary.main};
            box-shadow: 0 0 0 3px ${o.colors.primary.main}20;
          `}}}
  }

  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${e=>e.theme.colors.disabled.background};
    color: ${e=>e.theme.colors.disabled.text};
  }

  /* Hover state */
  &:hover:not(:disabled) {
    border-color: ${e=>{switch(e.$variant){case"secondary":return e.theme.colors.secondary.main;case"danger":return e.theme.colors.error.main;default:return e.theme.colors.primary.main}}};
  }
`,oe=b.forwardRef(({variant:e="primary",fullWidth:o=!1,options:r,children:n,placeholder:a,...l},c)=>s.jsxs(ue,{ref:c,$variant:e,$fullWidth:o,...l,children:[a&&s.jsx("option",{value:"",disabled:!0,children:a}),r?r.map(d=>s.jsx("option",{value:d.value,disabled:d.disabled,children:d.label},d.value)):n]}));oe.displayName="Select";t.div`
  padding: ${e=>e.theme.spacing.md};
  border: 2px solid;
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.body};
  font-size: ${e=>e.theme.typography.fontSize.base};
  line-height: 1.5;

  /* Variant-specific colors */
  ${({$variant:e,theme:o})=>{var a;let r=o.colors.primary.main;const n="15";switch(e){case"success":r=o.colors.success.main;break;case"warning":r=o.colors.warning.main;break;case"error":r=o.colors.error.main;break;case"info":default:r=o.colors.secondary.main||o.colors.primary.main;break}return i`
      border-color: ${r};
      background: ${r}${n};
      color: ${r};

      ${((a=o.extensions)==null?void 0:a.cyberpunk)&&i`
        box-shadow: 0 0 10px ${r}33;
      `}
    `}}
`;var ge=I`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;t.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`;t.div`
  ${({$size:e})=>{const o={sm:"16px",md:"32px",lg:"48px"};return i`
      width: ${o[e||"md"]};
      height: ${o[e||"md"]};
    `}}

  ${({$variant:e,theme:o})=>{var n,a;let r=o.colors.primary[500];switch(e){case"secondary":r=((n=o.colors.secondary)==null?void 0:n[500])||o.colors.primary[500];break;case"success":r=o.colors.success[500];break;case"primary":default:r=o.colors.primary[500];break}return i`
      border: 3px solid ${r}30;
      border-top: 3px solid ${r};
      border-radius: 50%;
      animation: ${ge} 1s linear infinite;

      ${((a=o.extensions)==null?void 0:a.cyberpunk)&&i`
        box-shadow: 0 0 10px ${r}66;
      `}
    `}}
`;t.span`
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-family: ${e=>e.theme.typography.fontFamily.body};
  margin-top: ${e=>e.theme.spacing.xs};
`;t.div`
  position: relative;
  display: inline-block;
`;t.div`
  ${({$size:e,theme:o})=>{const r={sm:"32px",md:"40px",lg:"56px",xl:"72px"},n={sm:o.typography.fontSize.xs,md:o.typography.fontSize.sm,lg:o.typography.fontSize.base,xl:o.typography.fontSize.lg};return i`
      width: ${r[e||"md"]};
      height: ${r[e||"md"]};
      font-size: ${n[e||"md"]};
    `}}

  border-radius: 50%;
  border: 2px solid ${e=>e.theme.colors.secondary.main||e.theme.colors.primary.main};
  box-shadow: ${e=>e.theme.shadows.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.secondary.main||e.theme.colors.primary.main};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  overflow: hidden;
  user-select: none;

  ${e=>{var o;return((o=e.theme.extensions)==null?void 0:o.cyberpunk)&&i`
      box-shadow: 0 0 10px ${e.theme.colors.secondary.main||e.theme.colors.primary.main}50;
    `}}
`;t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;t.div`
  position: absolute;
  bottom: 0;
  right: 0;
  ${({$size:e})=>{const o={sm:"8px",md:"10px",lg:"12px",xl:"14px"};return i`
      width: ${o[e||"md"]};
      height: ${o[e||"md"]};
    `}}
  border-radius: 50%;
  border: 2px solid ${e=>e.theme.colors.background};

  ${({$status:e,theme:o})=>{var n,a,l,c,d,h,f,g,x,w;let r=o.colors.text.secondary;switch(e){case"online":r=((n=o.colors.success)==null?void 0:n[500])??((l=(a=o.colors)==null?void 0:a.success)==null?void 0:l.main)??o.colors.primary.main;break;case"away":r=((c=o.colors.warning)==null?void 0:c[500])??((h=(d=o.colors)==null?void 0:d.warning)==null?void 0:h.main)??o.colors.secondary.main;break;case"busy":r=((f=o.colors.error)==null?void 0:f[500])??((x=(g=o.colors)==null?void 0:g.error)==null?void 0:x.main)??o.colors.primary.main;break;case"offline":default:r=o.colors.text.secondary;break}return i`
      background-color: ${r};

      ${((w=o.extensions)==null?void 0:w.cyberpunk)&&e==="online"&&i`
        box-shadow: 0 0 5px ${r};
      `}
    `}}
`;var fe=t.label`
  display: inline-flex;
  align-items: center;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.$disabled?.5:1};
  user-select: none;
`,A=e=>{switch(e.$variant){case"secondary":return e.theme.colors.secondary.main;case"success":return e.theme.colors.success.main;case"primary":default:return e.theme.colors.primary.main}},be=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23fff' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' d='M3 8l3.5 3.5L13 5'/%3E%3C/svg%3E")`,re=t.input`
  appearance: none;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  min-width: 18px;
  border: 2px solid ${e=>e.theme.colors.border.default};
  border-radius: 3px;
  background-color: transparent;
  margin-right: ${e=>e.$hasLabel?e.theme.spacing.sm:"0"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  outline: none;
  transition: background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease;

  &:checked {
    background-color: ${A};
    border-color: ${A};
    background-image: ${be};
    background-size: 12px;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:hover:not(:disabled) {
    border-color: ${A};
  }

  &:focus-visible {
    outline: 2px solid ${A};
    outline-offset: 2px;
  }

  /* Cyberpunk glow effect on checked state */
  ${({$variant:e,theme:o,checked:r})=>{var n;return r&&((n=o.extensions)==null?void 0:n.cyberpunk)&&i`
      ${()=>{var l;let a=o.colors.primary[500];switch(e){case"secondary":a=((l=o.colors.secondary)==null?void 0:l[500])||o.colors.primary[500];break;case"success":a=o.colors.success[500];break}return i`
          box-shadow: 0 0 8px ${a}88;
        `}}
    `}}
`,xe=t.span`
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.base};
  font-family: ${e=>e.theme.typography.fontFamily.body};
  user-select: none;
`,ye=t(re)`
  margin-right: 0;
`,we=b.forwardRef(({label:e,variant:o="primary",className:r,style:n,...a},l)=>e?s.jsxs(fe,{$disabled:!!a.disabled,className:r,style:n,children:[s.jsx(re,{ref:l,type:"checkbox",$variant:o,$hasLabel:!0,...a}),s.jsx(xe,{children:e})]}):s.jsx(ye,{ref:l,type:"checkbox",$variant:o,$hasLabel:!1,className:r,style:n,...a}));we.displayName="Checkbox";t.span`
  display: inline-block;
  padding: ${e=>e.$size==="small"?`${e.theme.spacing.xs} ${e.theme.spacing.xs}`:`${e.theme.spacing.xs} ${e.theme.spacing.sm}`};
  border-radius: ${e=>e.theme.borderRadius.sm};
  font-size: ${e=>e.$size==="small"?e.theme.typography.fontSize.xs:e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-transform: capitalize;
  white-space: nowrap;
  border: 1px solid transparent;
  transition: all ${e=>e.theme.transitions.normal};

  ${e=>{const r={success:e.theme.colors.success.main,warning:e.theme.colors.warning.main,error:e.theme.colors.error.main,info:e.theme.colors.primary.main,neutral:e.theme.colors.text.secondary}[e.$variant];return e.$isActive?`
        background: ${r};
        color: ${e.theme.colors.background.primary};
        border-color: ${r};
      `:`
      background: ${r}20;
      color: ${r};
      border-color: ${r}66;
    `}}

  ${e=>e.$isClickable?`
        cursor: pointer;

        &:hover {
          background: ${(()=>{const r={success:e.theme.colors.success.main,warning:e.theme.colors.warning.main,error:e.theme.colors.error.main,info:e.theme.colors.primary.main,neutral:e.theme.colors.text.secondary}[e.$variant];return e.$isActive?r:`${r}30`})()};
          border-color: ${{success:e.theme.colors.success.main,warning:e.theme.colors.warning.main,error:e.theme.colors.error.main,info:e.theme.colors.primary.main,neutral:e.theme.colors.text.secondary}[e.$variant]}99;
        }

        &:active {
          transform: scale(0.98);
        }
      `:""}
`;t.div`
  display: inline-flex;
  align-items: stretch;
  border: 2px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
  background-color: ${e=>typeof e.theme.colors.background=="object"?e.theme.colors.background.secondary:e.theme.colors.surface};
  transition: border-color ${e=>e.theme.transitions.normal};

  &:focus-within {
    border-color: ${e=>e.theme.colors.primary.main};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary.main}33;
  }
`;t.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${e=>e.theme.typography.fontFamily.body};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-align: center;
  cursor: pointer;
  border: none;
  border-right: 1px solid ${e=>e.theme.colors.border.default};
  transition: all ${e=>e.theme.transitions.normal};
  white-space: nowrap;
  flex-shrink: 0;

  &:last-child {
    border-right: none;
  }

  /* Size variants */
  ${({$size:e,$hasIcon:o,theme:r})=>{switch(e){case"sm":return i`
          padding: ${o?`${r.spacing.xs} ${r.spacing.sm}`:`${r.spacing.xs} ${r.spacing.md}`};
          font-size: ${r.typography.fontSize.sm};
          gap: ${r.spacing.xs};
          min-height: 32px;
        `;case"md":return i`
          padding: ${o?`${r.spacing.sm} ${r.spacing.md}`:`${r.spacing.sm} ${r.spacing.lg}`};
          font-size: ${r.typography.fontSize.base};
          gap: ${r.spacing.sm};
          min-height: 40px;
        `;default:return i`
          padding: ${r.spacing.sm} ${r.spacing.md};
          font-size: ${r.typography.fontSize.base};
          gap: ${r.spacing.sm};
          min-height: 40px;
        `}}}

  /* Active/Inactive states */
  ${({$active:e,theme:o})=>{var r;return e?i`
          background-color: ${o.colors.primary.main};
          color: ${typeof o.colors.background=="object"?o.colors.background.primary:o.colors.text.primary};
          font-weight: ${o.typography.fontWeight.semibold};

          ${((r=o.extensions)==null?void 0:r.cyberpunk)&&i`
            box-shadow: inset 0 0 10px ${o.colors.primary.main}33;
          `}
        `:i`
          background-color: transparent;
          color: ${o.colors.text.secondary};

          &:hover:not(:disabled) {
            background-color: ${typeof o.colors.background=="object"?o.colors.background.tertiary:o.colors.hover.surface};
            color: ${o.colors.text.primary};
          }

          &:active:not(:disabled) {
            background-color: ${o.colors.hover.primary};
          }
        `}}

  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    color: ${e=>e.theme.colors.disabled.text};

    &:hover {
      background-color: transparent;
    }
  }

  /* Focus state (visible only for keyboard navigation) */
  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary.main};
    outline-offset: -2px;
    z-index: ${O.content};
  }

  /* Remove default focus outline (replaced by focus-visible) */
  &:focus {
    outline: none;
  }
`;t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({$size:e})=>e==="sm"?i`
          width: 16px;
          height: 16px;
        `:i`
          width: 20px;
          height: 20px;
        `}

  svg {
    width: 100%;
    height: 100%;
  }
`;t.span`
  /* Text is always visible in SegmentedControl */
`;var H={CRITICAL:"#ef4444",HIGH:"#f97316",MEDIUM:"#eab308",LOW:"#22c55e"};t.span`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
  border-radius: ${e=>e.theme.borderRadius.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  padding: ${e=>{const o=e.theme;switch(e.$size){case"small":return`2px ${o.spacing.xs}`;case"large":return`${o.spacing.xs} ${o.spacing.md}`;default:return`${o.spacing.xs} ${o.spacing.sm}`}}};

  font-size: ${e=>{const o=e.theme;switch(e.$size){case"small":return"10px";case"large":return o.typography.fontSize.sm;default:return o.typography.fontSize.xs}}};

  background-color: ${e=>`${H[e.$severity]}20`};
  color: ${e=>H[e.$severity]};
  border: 1px solid ${e=>`${H[e.$severity]}40`};
`;t.span`
  display: inline-flex;
  align-items: center;
  font-size: ${e=>{switch(e.$size){case"small":return"8px";case"large":return"14px";default:return"10px"}}};
`;t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${e=>e.$minHeight};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.muted};
  font-family: ${e=>e.theme.typography.fontFamily.body};
`;t.div`
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
`;t.div`
  display: flex;
  background: ${e=>e.theme.colors.background.primary};
  border-bottom: 1px solid ${e=>e.theme.colors.border.default};
`;t.div`
  flex: 1;
  padding: ${e=>e.theme.spacing.md};
  text-align: center;
  position: relative;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.$active?e.theme.typography.fontWeight.semibold:"normal"};
  color: ${e=>e.$completed?e.theme.colors.success.main:e.$active?e.theme.colors.primary.main:e.theme.colors.text.secondary};
  background: ${e=>e.$active?`${e.theme.colors.primary.main}10`:"transparent"};

  &:not(:last-child)::after {
    content: '→';
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${e=>e.theme.colors.text.secondary};
  }
`;t.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${e=>e.$completed?e.theme.colors.success.main:e.$active?e.theme.colors.primary.main:e.theme.colors.surface};
  border: 2px solid
    ${e=>e.$completed?e.theme.colors.success.main:e.$active?e.theme.colors.primary.main:e.theme.colors.border.default};
  color: ${e=>e.$active||e.$completed?"white":e.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${e=>e.theme.spacing.xs};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`;t.div`
  padding: ${e=>e.theme.spacing.xl};
  min-height: 300px;
`;t.div`
  display: flex;
  justify-content: space-between;
  padding: ${e=>e.theme.spacing.lg};
  border-top: 1px solid ${e=>e.theme.colors.border.default};
  background: ${e=>e.theme.colors.background.primary};
`;t.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
`;t.div`
  width: 100%;
`;t(T)`
  &::-webkit-calendar-picker-indicator {
    filter: ${e=>e.theme.colors.text.primary==="#fff"?"invert(1)":"none"};
    cursor: pointer;
  }
`;t.div`
  width: 100%;
  padding: ${e=>e.theme.spacing.md} 0;
`;t.div`
  position: relative;
  height: 6px;
  background: ${e=>e.theme.colors.surface};
  border-radius: ${e=>e.theme.borderRadius.full};
  margin: ${e=>e.theme.spacing.md} 0;
`;t.div`
  position: absolute;
  height: 100%;
  background: ${e=>e.theme.colors.primary.main};
  border-radius: ${e=>e.theme.borderRadius.full};
  left: ${e=>e.$left}%;
  width: ${e=>e.$width}%;
`;t.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: ${e=>e.theme.colors.primary.main};
  border: 3px solid white;
  border-radius: 50%;
  top: 50%;
  left: ${e=>e.$position}%;
  transform: translate(-50%, -50%);
  cursor: ${e=>e.$disabled?"not-allowed":"grab"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }

  &:active {
    cursor: ${e=>e.$disabled?"not-allowed":"grabbing"};
    transform: translate(-50%, -50%) scale(1.15);
  }
`;t.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${e=>e.theme.spacing.sm};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`;t.div`
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  color: ${e=>e.theme.colors.text.primary};
`;t.div`
  width: 100%;
`;t.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
`;t.button`
  width: 48px;
  height: 48px;
  background: ${e=>e.$color};
  border: 2px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  position: relative;
  overflow: hidden;
  opacity: ${e=>e.$disabled?.5:1};

  &:hover {
    border-color: ${e=>!e.$disabled&&e.theme.colors.primary.main};
  }
`;t.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;t.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  flex-wrap: wrap;
  margin-top: ${e=>e.theme.spacing.md};
`;t.button`
  width: 32px;
  height: 32px;
  background: ${e=>e.$color};
  border: 2px solid
    ${e=>e.$selected?e.theme.colors.primary.main:e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    border-color: ${e=>e.theme.colors.primary.main};
  }
`;t.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing.xs};
  display: block;
`;function $(e,...o){const r=[];let n=0;for(const a of o){if(n>=e.length)break;r.push(e.slice(n,n+a)),n+=a}return r.join(" ")}const q={1:e=>e.length<=3?e:e.length<=6?`(${e.slice(0,3)}) ${e.slice(3)}`:`(${e.slice(0,3)}) ${e.slice(3,6)}-${e.slice(6,10)}`,44:e=>e.length<=5?e:`${e.slice(0,5)} ${e.slice(5,11)}`,33:e=>$(e,1,2,2,2,2),34:e=>$(e,3,3,3),39:e=>$(e,3,3,4),49:e=>$(e,3,4,4),31:e=>e.length<=2?e:`${e.slice(0,2)} ${e.slice(2,10)}`,32:e=>$(e,3,2,2,2),41:e=>$(e,3,3,2,2),43:e=>$(e,3,3,3),351:e=>$(e,3,3,3),352:e=>$(e,3,3,3),45:e=>$(e,4,4),46:e=>$(e,3,3,2,2),47:e=>$(e,4,4),358:e=>$(e,3,3,3),354:e=>$(e,3,4),353:e=>e.length<=2?e:`${e.slice(0,2)} ${e.slice(2,9)}`,48:e=>$(e,3,3,3),36:e=>$(e,2,3,4),40:e=>$(e,3,3,3),30:e=>$(e,3,3,4),420:e=>$(e,3,3,3),421:e=>$(e,3,3,3),61:e=>$(e,3,3,3),64:e=>$(e,2,3,4),81:e=>$(e,2,4,4),82:e=>$(e,2,4,4),86:e=>$(e,3,4,4),91:e=>$(e,5,5),55:e=>e.length<=2?e:`(${e.slice(0,2)}) ${$(e.slice(2),5,4)}`,52:e=>$(e,3,3,4),7:e=>e.length<=3?e:e.length<=6?`(${e.slice(0,3)}) ${e.slice(3)}`:`(${e.slice(0,3)}) ${e.slice(3,6)}-${e.slice(6,10)}`},ke={1:10,44:[9,10],33:9,34:9,39:[9,11],49:[10,12],31:9,32:9,41:9,43:[9,10],351:9,352:[8,9],45:8,46:[7,10],47:8,358:[8,9],354:7,353:[7,9],48:9,36:9,40:[9,10],30:10,420:9,421:9,61:9,64:[8,10],81:10,82:[9,11],86:11,91:10,55:[10,11],52:10,7:10};function Z(e,o){var a;const r=e.replace(/\D/g,""),n=o.replace(/\D/g,"");return((a=q[n])==null?void 0:a.call(q,r))??r}function bo(e,o){const r=e.replace(/\D/g,""),n=o.replace(/\D/g,""),a=ke[n];return a===void 0?r.length>=7&&r.length<=15:typeof a=="number"?r.length===a:r.length>=a[0]&&r.length<=a[1]}t.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
`;t(oe)`
  width: 140px;
  flex-shrink: 0;
`;t(T)`
  flex: 1;
`;const ve=t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,ze=t.label`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.text.muted};
`,Se=t.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
`,te=`
  box-sizing: border-box;
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid;
  border-radius: 6px;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
`,Ce=t.input`
  ${te}
  width: 80px;
  flex-shrink: 0;
  text-align: center;
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text.primary};
  border-color: ${e=>e.$error?"#e05c5c":e.theme.colors.border.default};

  &::placeholder { color: ${e=>e.theme.colors.text.muted}; }

  &:hover:not(:focus) {
    border-color: ${e=>e.$error?"#e05c5c":e.theme.colors.primary.main};
  }

  &:focus {
    border-color: ${e=>e.$error?"#e05c5c":e.theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${e=>e.$error?"#e05c5c20":`${e.theme.colors.primary.main}20`};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${e=>e.theme.colors.text.primary};
    box-shadow: 0 0 0 1000px ${e=>e.theme.colors.surface} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,je=t.input`
  ${te}
  flex: 1;
  min-width: 0;
  width: 100%;
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text.primary};
  border-color: ${e=>e.$error?"#e05c5c":e.theme.colors.border.default};

  &::placeholder { color: ${e=>e.theme.colors.text.muted}; }

  &:hover:not(:focus) {
    border-color: ${e=>e.$error?"#e05c5c":e.theme.colors.primary.main};
  }

  &:focus {
    border-color: ${e=>e.$error?"#e05c5c":e.theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${e=>e.$error?"#e05c5c20":`${e.theme.colors.primary.main}20`};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${e=>e.theme.colors.text.primary};
    box-shadow: 0 0 0 1000px ${e=>e.theme.colors.surface} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,Re=t.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: #e05c5c;
`;function Ee({value:e,onChange:o,countryCode:r,onCountryCodeChange:n,label:a,error:l,required:c=!1,placeholder:d="(555) 000-0000",id:h="phone",disabled:f=!1,trailing:g}){const x=r.replace(/\D/g,"")||"1";function w(y){const M=y.target.value;n(M),o(Z(e,M.replace(/\D/g,"")||"1"))}function S(y){o(Z(y.target.value,x))}const k=!!l;return s.jsxs(ve,{children:[a&&s.jsxs(ze,{htmlFor:h,children:[a,c&&" *"]}),s.jsxs(Se,{children:[s.jsx(Ce,{type:"tel",placeholder:"+1",value:r,onChange:w,"aria-label":"Country code",autoComplete:"tel-country-code",maxLength:6,disabled:f,$error:k}),s.jsx(je,{id:h,type:"tel",inputMode:"tel",placeholder:d,value:e,onChange:S,"aria-label":"Phone number",autoComplete:"tel-national",disabled:f,required:c,$error:k,"aria-invalid":k,"aria-required":c,"aria-describedby":l?`${h}-error`:void 0})]}),l&&s.jsx(Re,{id:`${h}-error`,role:"alert",children:l}),g]})}const Fe=t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,We=t.label`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.text.muted};
`,Le=t.input`
  width: 100%;
  box-sizing: border-box;
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid ${e=>e.$error?"#e05c5c":e.theme.colors.border.default};
  border-radius: 6px;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text.primary};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }

  &:hover:not(:focus) {
    border-color: ${e=>e.$error?"#e05c5c":e.theme.colors.primary.main};
  }

  &:focus {
    border-color: ${e=>e.$error?"#e05c5c":e.theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${e=>e.$error?"#e05c5c20":`${e.theme.colors.primary.main}20`};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${e=>e.theme.colors.text.primary};
    box-shadow: 0 0 0 1000px ${e=>e.theme.colors.surface} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ie=t.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: #e05c5c;
`;function xo({value:e,onChange:o,label:r,error:n,required:a=!1,placeholder:l="you@example.com",id:c="email",autoComplete:d="email",onBlur:h,disabled:f=!1}){return s.jsxs(Fe,{children:[r&&s.jsxs(We,{htmlFor:c,children:[r,a&&" *"]}),s.jsx(Le,{id:c,type:"email",inputMode:"email",value:e,onChange:g=>o(g.target.value),onBlur:h,placeholder:l,autoComplete:d,required:a,disabled:f,$error:!!n,"aria-invalid":!!n,"aria-required":a,"aria-describedby":n?`${c}-error`:void 0}),n&&s.jsx(Ie,{id:`${c}-error`,role:"alert",children:n})]})}const Me=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,De=/[\x00-\x1f]/;function yo(e){const o=e.trim();return!o||De.test(o)?!1:Me.test(o)}t.div`
  display: flex;
  flex-direction: ${e=>e.$variant==="vertical"?"column":"row"};
  gap: ${e=>e.$variant==="vertical"?e.theme.spacing.lg:0};
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing.lg};
  }
`;t.div`
  display: flex;
  flex-direction: ${e=>e.$variant==="vertical"?"row":"column"};
  align-items: center;
  flex: 1;
  position: relative;

  &:not(:last-child) {
    ${e=>e.$variant==="horizontal"&&i`
        &::after {
          content: '';
          position: absolute;
          top: 14px;
          left: calc(50% + 20px);
          right: calc(-50% + 20px);
          height: 2px;
          background: ${e.theme.colors.border.default};
          z-index: ${O.base};

          @media (max-width: 768px) {
            display: none;
          }
        }
      `}

    ${e=>e.$variant==="vertical"&&i`
        &::after {
          content: '';
          position: absolute;
          top: 32px;
          left: 14px;
          bottom: -${e.theme.spacing.lg};
          width: 2px;
          background: ${e.theme.colors.border.default};
          z-index: ${O.base};
        }
      `}
  }
`;t.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  position: relative;
  z-index: ${O.content};
  transition: all ${e=>e.theme.transitions.normal};
  cursor: ${e=>e.$clickable?"pointer":"default"};
  flex-shrink: 0;

  ${({$completed:e,$active:o,theme:r})=>{var n,a;return e?i`
        background: ${r.colors.success.main};
        border: 2px solid ${r.colors.success.main};
        color: #ffffff;

        ${((n=r.extensions)==null?void 0:n.cyberpunk)&&i`
          box-shadow: 0 0 10px ${r.colors.success.main}66;
        `}
      `:o?i`
        background: ${r.colors.primary.main};
        border: 2px solid ${r.colors.primary.main};
        color: #ffffff;

        ${((a=r.extensions)==null?void 0:a.cyberpunk)&&i`
          box-shadow: ${r.extensions.cyberpunk.neonGlow.magenta};
        `}
      `:i`
      background: ${r.colors.surface};
      border: 2px solid ${r.colors.border.default};
      color: ${r.colors.text.secondary};
    `}}

  &:hover {
    ${e=>e.$clickable&&i`
        transform: scale(1.1);
        box-shadow: ${e.theme.shadows.md};
      `}
  }
`;t.span`
  font-size: ${e=>e.theme.typography.fontSize.base};
  line-height: 1;
`;t.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.$active?e.theme.typography.fontWeight.semibold:e.theme.typography.fontWeight.normal};
  color: ${({$completed:e,$active:o,theme:r})=>e?r.colors.success.main:o?r.colors.primary.main:r.colors.text.secondary};
  text-align: ${e=>e.$variant==="vertical"?"left":"center"};
  margin: ${e=>e.$variant==="vertical"?`0 0 0 ${e.theme.spacing.md}`:`${e.theme.spacing.sm} 0 0 0`};
  transition: color ${e=>e.theme.transitions.normal};

  @media (max-width: 768px) {
    text-align: left;
    margin: 0 0 0 ${e=>e.theme.spacing.md};
  }
`;t.div`
  display: flex;
  flex-direction: ${e=>e.$variant==="vertical"?"row":"column"};
  align-items: ${e=>(e.$variant==="vertical","center")};

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;const Ye=I`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ae=I`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;t.div`
  overflow: hidden;
  transition: all ${e=>e.$duration}ms ease-in-out;

  ${e=>e.$isVisible&&!e.$isExiting&&i`
      animation: ${Ye} ${e.$duration}ms ease-in-out;
      max-height: 10000px;
      opacity: 1;
    `}

  ${e=>e.$isExiting&&i`
      animation: ${Ae} ${e.$duration}ms ease-in-out;
      max-height: 0;
      opacity: 0;
    `}

  ${e=>!e.$isVisible&&!e.$isExiting&&i`
      max-height: 0;
      opacity: 0;
      pointer-events: none;
    `}
`;t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  width: 100%;
`;t.div`
  position: relative;
  padding: ${e=>e.theme.spacing.lg};
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
  background: ${e=>e.theme.colors.surface};
  transition: all ${e=>e.theme.transitions.normal};

  &:hover {
    border-color: ${e=>e.theme.colors.primary.main};
    box-shadow: ${e=>e.theme.shadows.sm};
  }
`;t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`;t.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`;t.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  margin-top: ${e=>e.theme.spacing.lg};
`;t.div`
  padding: ${e=>e.theme.spacing.xl};
  text-align: center;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.base};
  border: 2px dashed ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.md};
`;t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  width: 100%;
`;t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;t.div`
  width: 100%;
`;t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  width: 100%;
`;t.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: ${e=>e.theme.spacing.md};
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;t(T)`
  input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;function Oe(e){return e.map(o=>typeof o=="string"?{value:o,label:o}:o)}function Te(e,o){if(!o)return 1;if(!e)return 0;const r=e.toLowerCase(),n=o.toLowerCase();if(r===n)return 1;if(r.includes(n))return r.startsWith(n)?.95:r.includes(` ${n}`)||r.includes(`-${n}`)?.85:.7;let a=0,l=0,c=0,d=0;for(let g=0;g<r.length&&a<n.length;g++)r[g]===n[a]?(a++,d++,l++,c=Math.max(c,l)):l=0;if(a<n.length)return 0;const h=d/n.length,f=c/n.length;return Math.min(.6,h*.4+f*.2)}const Ge=t.div`
  position: relative;
  width: 100%;
`,Pe=t.label`
  display: block;
  font-size: ${e=>{var o,r;return((r=(o=e.theme.typography)==null?void 0:o.fontSize)==null?void 0:r.sm)||"14px"}};
  font-weight: 500;
  color: ${e=>{var o,r;return((r=(o=e.theme.colors)==null?void 0:o.text)==null?void 0:r.primary)||"#374151"}};
  margin-bottom: ${e=>{var o;return((o=e.theme.spacing)==null?void 0:o.xs)||"4px"}};
`,_e=t.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  min-height: 40px;
  padding: 6px 12px;
  background: ${e=>{var o;return((o=e.theme.colors)==null?void 0:o.background)||"white"}};
  border: 2px solid
    ${e=>{var o,r,n,a;return e.$focused?((r=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:r.main)||"#3b82f6":((a=(n=e.theme.colors)==null?void 0:n.border)==null?void 0:a.default)||"#d1d5db"}};
  border-radius: ${e=>{var o;return((o=e.theme.borderRadius)==null?void 0:o.md)||"8px"}};
  cursor: ${e=>e.$disabled?"not-allowed":"text"};
  opacity: ${e=>e.$disabled?.5:1};
  transition:
    border-color 0.15s,
    box-shadow 0.15s;

  ${e=>{var o,r;return e.$focused&&i`
      box-shadow: 0 0 0 3px ${((r=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:r.main)||"#3b82f6"}20;
    `}}
`,Be=t.input`
  flex: 1;
  min-width: 120px;
  border: none;
  outline: none;
  background: transparent;
  font-size: ${e=>{var o,r;return((r=(o=e.theme.typography)==null?void 0:o.fontSize)==null?void 0:r.sm)||"14px"}};
  color: ${e=>{var o,r;return((r=(o=e.theme.colors)==null?void 0:o.text)==null?void 0:r.primary)||"#374151"}};

  &::placeholder {
    color: ${e=>{var o,r;return((r=(o=e.theme.colors)==null?void 0:o.text)==null?void 0:r.secondary)||"#9ca3af"}};
  }

  &:disabled {
    cursor: not-allowed;
  }
`,V=t.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background: ${e=>{var o,r;return((r=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:r.main)||"#3b82f6"}}15;
  color: ${e=>{var o,r;return((r=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:r.main)||"#3b82f6"}};
  border-radius: ${e=>{var o;return((o=e.theme.borderRadius)==null?void 0:o.sm)||"4px"}};
  font-size: 12px;
  font-weight: 500;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,J=t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  line-height: 1;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`,Ne=t.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: ${se.overlay};
  margin-top: 4px;
  background: ${e=>{var o;return((o=e.theme.colors)==null?void 0:o.background)||"white"}};
  border: 1px solid ${e=>{var o,r;return((r=(o=e.theme.colors)==null?void 0:o.border)==null?void 0:r.default)||"#d1d5db"}};
  border-radius: ${e=>{var o;return((o=e.theme.borderRadius)==null?void 0:o.md)||"8px"}};
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-height: 300px;
  overflow-y: auto;
  display: ${e=>e.$visible?"block":"none"};
`,He=t.div`
  padding: 4px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${e=>{var o,r;return((r=(o=e.theme.colors)==null?void 0:o.border)==null?void 0:r.default)||"#e5e7eb"}};
  }
`,qe=t.div`
  padding: 6px 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>{var o,r;return((r=(o=e.theme.colors)==null?void 0:o.text)==null?void 0:r.secondary)||"#6b7280"}};
`,Ve=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.$disabled?.5:1};
  background: ${e=>{var o,r,n;return e.$highlighted?(r=(o=e.theme.colors)==null?void 0:o.primary)!=null&&r.main?`${e.theme.colors.primary.main}10`:"#eff6ff":e.$selected?((n=e.theme.colors)==null?void 0:n.surface)||"#f9fafb":"transparent"}};
  color: ${e=>{var o,r,n,a;return e.$selected?((r=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:r.main)||"#3b82f6":((a=(n=e.theme.colors)==null?void 0:n.text)==null?void 0:a.primary)||"#374151"}};
  font-size: ${e=>{var o,r;return((r=(o=e.theme.typography)==null?void 0:o.fontSize)==null?void 0:r.sm)||"14px"}};

  &:hover:not([disabled]) {
    background: ${e=>{var o,r;return(r=(o=e.theme.colors)==null?void 0:o.primary)!=null&&r.main?`${e.theme.colors.primary.main}10`:"#eff6ff"}};
  }
`,Ke=t.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: 2px solid
    ${e=>{var o,r,n,a;return e.$checked?((r=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:r.main)||"#3b82f6":((a=(n=e.theme.colors)==null?void 0:n.border)==null?void 0:a.default)||"#d1d5db"}};
  border-radius: 3px;
  background: ${e=>{var o,r;return e.$checked?((r=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:r.main)||"#3b82f6":"transparent"}};
  color: white;
  font-size: 10px;
  transition: all 0.15s;

  &::after {
    content: '${e=>e.$checked?"\\2713":""}';
  }
`,Xe=t.div`
  padding: 16px 12px;
  text-align: center;
  color: ${e=>{var o,r;return((r=(o=e.theme.colors)==null?void 0:o.text)==null?void 0:r.secondary)||"#6b7280"}};
  font-size: ${e=>{var o,r;return((r=(o=e.theme.typography)==null?void 0:o.fontSize)==null?void 0:r.sm)||"14px"}};
`,Qe=t.span`
  font-size: 12px;
  color: ${e=>{var o,r;return((r=(o=e.theme.colors)==null?void 0:o.text)==null?void 0:r.secondary)||"#6b7280"}};
  margin-left: auto;
  padding-left: 8px;
`,Ue=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
`,Ze=t.button`
  padding: 2px 8px;
  background: none;
  border: none;
  color: ${e=>{var o,r;return((r=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:r.main)||"#3b82f6"}};
  font-size: 12px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Je=t.span`
  ${e=>{var o,r;return e.$highlight&&i`
      background: ${((r=(o=e.theme.colors)==null?void 0:o.warning)==null?void 0:r.main)||"#fef3c7"};
      font-weight: 500;
    `}}
`;function eo(e,o){if(!o)return e;const r=e.toLowerCase(),n=o.toLowerCase(),a=r.indexOf(n);return a===-1?e:s.jsxs(s.Fragment,{children:[e.slice(0,a),s.jsx(Je,{$highlight:!0,children:e.slice(a,a+o.length)}),e.slice(a+o.length)]})}const oo=b.forwardRef(({options:e,value:o=[],onChange:r,placeholder:n="Search...",label:a,disabled:l=!1,maxSelections:c=0,showChips:d=!0,showCount:h=!0,className:f,minSearchLength:g=1,groupBy:x=!1,noResultsMessage:w="No options found",closeOnSelect:S=!1,fuzzyThreshold:k=.3,id:y,"data-testid":M},D)=>{const[G,C]=b.useState(!1),[v,Y]=b.useState(""),[R,P]=b.useState(-1),_=b.useRef(null),X=b.useRef(null),E=b.useMemo(()=>Oe(e),[e]),B=b.useMemo(()=>v.length<g?E:E.map(p=>({option:p,score:Te(p.label,v)})).filter(p=>p.score>=k).sort((p,u)=>u.score-p.score).map(p=>p.option),[E,v,g,k]),N=b.useMemo(()=>x?B.reduce((m,p)=>{const u=p.group||"";return m[u]||(m[u]=[]),m[u].push(p),m},{}):{"":B},[B,x]),j=b.useMemo(()=>Object.values(N).flat(),[N]),F=b.useCallback(m=>{if(l)return;const p=o.includes(m);let u;if(p)u=o.filter(z=>z!==m);else{if(c>0&&o.length>=c)return;u=[...o,m]}r(u),S&&(C(!1),Y(""))},[o,r,l,c,S]),ae=b.useCallback(m=>{switch(m.key){case"ArrowDown":m.preventDefault(),C(!0),P(p=>p<j.length-1?p+1:0);break;case"ArrowUp":m.preventDefault(),P(p=>p>0?p-1:j.length-1);break;case"Enter":m.preventDefault(),R>=0&&j[R]&&F(j[R].value);break;case"Escape":C(!1),Y("");break;case"Backspace":!v&&o.length>0&&r(o.slice(0,-1));break}},[j,R,F,v,o,r]);b.useEffect(()=>{const m=p=>{_.current&&!_.current.contains(p.target)&&(C(!1),Y(""))};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]),b.useEffect(()=>{P(-1)},[v]);const W=b.useMemo(()=>o.map(m=>{const p=E.find(u=>u.value===m);return(p==null?void 0:p.label)||m}),[o,E]),ie=b.useCallback(()=>{r([])},[r]);return s.jsxs(Ge,{ref:_,className:f,"data-testid":M,children:[a&&s.jsx(Pe,{htmlFor:y,children:a}),s.jsxs(_e,{$focused:G,$disabled:l,onClick:()=>{var m;l||((m=X.current)==null||m.focus(),C(!0))},children:[d&&W.slice(0,3).map((m,p)=>s.jsxs(V,{children:[m,s.jsx(J,{type:"button",onClick:u=>{u.stopPropagation();const z=o[p];z&&F(z)},"aria-label":`Remove ${m}`,children:"×"})]},o[p])),W.length>3&&s.jsxs(V,{children:["+",W.length-3," more"]}),s.jsx(Be,{ref:m=>{X.current=m,typeof D=="function"?D(m):D&&(D.current=m)},id:y,type:"text",value:v,onChange:m=>{Y(m.target.value),C(!0)},onFocus:()=>C(!0),onKeyDown:ae,placeholder:o.length===0?n:"",disabled:l,"aria-expanded":G,"aria-haspopup":"listbox","aria-controls":`${y}-listbox`,role:"combobox"}),h&&o.length>0&&s.jsxs(Qe,{children:[o.length," selected"]})]}),s.jsx(Ne,{$visible:G,id:`${y}-listbox`,role:"listbox","aria-multiselectable":"true",children:j.length===0?s.jsx(Xe,{children:w}):Object.entries(N).map(([m,p])=>s.jsxs(He,{children:[x&&m&&s.jsx(qe,{children:m}),p.map(u=>{const z=o.includes(u.value),ne=j.indexOf(u)===R;return s.jsxs(Ve,{$highlighted:ne,$selected:z,$disabled:u.disabled||!1,onClick:()=>!u.disabled&&F(u.value),role:"option","aria-selected":z,children:[s.jsx(Ke,{$checked:z}),eo(u.label,v)]},u.value)})]},m||"default"))}),d&&W.length>3&&s.jsxs(Ue,{children:[W.map((m,p)=>{const u=o[p];return u?s.jsxs(V,{children:[m,s.jsx(J,{type:"button",onClick:()=>F(u),"aria-label":`Remove ${m}`,children:"×"})]},u):null}),s.jsx(Ze,{type:"button",onClick:ie,children:"Clear all"})]})]})});oo.displayName="SearchableMultiSelect";t.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  &.field-checkbox {
    flex-direction: row;
    align-items: flex-start;
  }
`;t.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);

  .required-marker {
    color: #ff4444;
  }
`;t.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.$hasError?"#ff4444":"rgba(255, 255, 255, 0.2)"};
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?"#ff4444":"rgba(255, 255, 255, 0.4)"};
    background: rgba(255, 255, 255, 0.08);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;t.textarea`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.$hasError?"#ff4444":"rgba(255, 255, 255, 0.2)"};
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?"#ff4444":"rgba(255, 255, 255, 0.4)"};
    background: rgba(255, 255, 255, 0.08);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;t.select`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.$hasError?"#ff4444":"rgba(255, 255, 255, 0.2)"};
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?"#ff4444":"rgba(255, 255, 255, 0.4)"};
    background: rgba(255, 255, 255, 0.08);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;t.label`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
`;t.input`
  width: 18px;
  height: 18px;
  margin-top: 0.125rem;
  flex-shrink: 0;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;t.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;t.span`
  font-size: 0.85rem;
  color: #ff4444;
`;t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`;t.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`;t.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.secondary};
  min-width: 60px;

  &:last-of-type {
    text-align: right;
  }
`;t.input`
  flex: 1;
  height: 6px;
  -webkit-appearance: none;
  appearance: none;
  background: ${e=>{const o=e.theme.colors.primary.main,r=e.theme.colors.border.default;return`linear-gradient(to right, ${o} 0%, ${o} ${e.$fillPercent}%, ${r} ${e.$fillPercent}%, ${r} 100%)`}};
  border-radius: ${e=>e.theme.borderRadius.full};
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: ${e=>e.theme.colors.primary.main};
    border-radius: 50%;
    cursor: pointer;
    transition: transform ${e=>e.theme.transitions.fast};

    &:hover {
      transform: scale(1.1);
    }
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: ${e=>e.theme.colors.primary.main};
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;t.span`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.primary};
  min-width: 40px;
  text-align: center;
`;t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`;t.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`;t.span`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
  padding: ${e=>e.theme.spacing.xs}
    ${e=>e.theme.spacing.sm};
  background-color: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.full};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.primary};
`;t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  transition: color ${e=>e.theme.transitions.fast};

  &:hover {
    color: ${e=>e.theme.colors.error.main};
  }
`;t.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
`;t.input`
  flex: 1;
  padding: ${e=>e.theme.spacing.sm}
    ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.sm};
  border: 1px solid ${e=>e.theme.colors.border.default};
  background-color: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-family: ${e=>e.theme.typography.fontFamily.body};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.main};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.xs};
  padding: ${e=>e.theme.spacing.sm}
    ${e=>e.theme.spacing.md};
  background-color: ${e=>e.theme.colors.primary.main};
  color: ${e=>e.theme.colors.text.primary};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.sm};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-family: ${e=>e.theme.typography.fontFamily.body};
  cursor: pointer;
  transition: opacity ${e=>e.theme.transitions.fast};

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;t.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
`;t.button`
  padding: ${e=>e.theme.spacing.xs}
    ${e=>e.theme.spacing.sm};
  background-color: transparent;
  border: 1px dashed ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.full};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${e=>e.theme.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${e=>e.theme.colors.primary.main};
    color: ${e=>e.theme.colors.primary.main};
    border-style: solid;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;t.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`;t.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`;t.input`
  flex: 1;
  height: 6px;
  -webkit-appearance: none;
  appearance: none;
  background: ${e=>{const o=e.theme.colors.border.default;return`linear-gradient(to right, ${e.$color} 0%, ${e.$color} ${e.$fillPercent}%, ${o} ${e.$fillPercent}%, ${o} 100%)`}};
  border-radius: ${e=>e.theme.borderRadius.full};
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    background: ${e=>e.$color};
    border-radius: 50%;
    cursor: pointer;
    transition: transform ${e=>e.theme.transitions.fast};

    &:hover {
      transform: scale(1.1);
    }
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background: ${e=>e.$color};
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;t.span`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  color: ${e=>e.$color};
  min-width: 45px;
  text-align: center;
`;t.button`
  padding: ${e=>e.theme.spacing.xs}
    ${e=>e.theme.spacing.sm};
  background: transparent;
  border: 1px solid ${e=>e.theme.colors.border.default};
  border-radius: ${e=>e.theme.borderRadius.xs};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  opacity: ${e=>e.$visible?1:0};
  pointer-events: ${e=>e.$visible?"auto":"none"};
  transition: all ${e=>e.theme.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${e=>e.theme.colors.primary.main};
    color: ${e=>e.theme.colors.primary.main};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;const ro=I`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,to=I`
  from { opacity: 0; transform: translateX(12px); }
  to { opacity: 1; transform: translateX(0); }
`,wo=t.form`
  padding: ${e=>e.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,ko=t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  animation: ${to} 0.2s ease;
`,vo=t.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  padding: 0 0 ${e=>e.theme.spacing.xs};
`,zo=t.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.$done||e.$active?e.theme.colors.primary:e.theme.colors.border};
  transition: background 0.2s ease;
  flex-shrink: 0;
`,So=t.div`
  flex: 1;
  height: 1px;
  background: ${e=>e.theme.colors.border};
  max-width: 2rem;
`,Co=t.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
`,jo=t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Ro=t.label`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.text.muted};
`,K=`
  width: 100%;
  box-sizing: border-box;
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid;
  border-radius: 6px;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
`,Eo=t.input`
  ${K}
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text.primary};
  border-color: ${e=>e.$error?e.theme.colors.error.main:e.theme.colors.border.default};
  &::placeholder { color: ${e=>e.theme.colors.text.muted}; }
  &:hover:not(:focus) { border-color: ${e=>e.$error?e.theme.colors.error.main:e.theme.colors.primary.main}; }
  &:focus {
    border-color: ${e=>e.$error?e.theme.colors.error.main:e.theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${e=>e.$error?`${e.theme.colors.error.main}20`:`${e.theme.colors.primary.main}20`};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${e=>e.theme.colors.text.primary};
    box-shadow: 0 0 0 1000px ${e=>e.theme.colors.surface} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;t.select`
  ${K}
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.$empty?e.theme.colors.text.muted:e.theme.colors.text.primary};
  border-color: ${e=>e.$error?e.theme.colors.error.main:e.theme.colors.border.default};
  cursor: pointer;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23${e.theme.colors.primary.main.replace("#","").toLowerCase()}' stroke-width='2'%3E%3Cpolyline points='6,9 12,15 18,9'%3E%3C/polyline%3E%3C/svg%3E")`};
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
  &:hover:not(:focus) { border-color: ${e=>e.$error?e.theme.colors.error.main:e.theme.colors.primary.main}; }
  &:focus {
    border-color: ${e=>e.$error?e.theme.colors.error.main:e.theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${e=>e.$error?`${e.theme.colors.error.main}20`:`${e.theme.colors.primary.main}20`};
  }
  option { background: ${e=>e.theme.colors.background.secondary}; color: ${e=>e.theme.colors.text.primary}; }
`;const Fo=t.textarea`
  ${K}
  background: ${e=>e.theme.colors.surface};
  color: ${e=>e.theme.colors.text.primary};
  border-color: ${e=>e.$error?e.theme.colors.error.main:e.theme.colors.border.default};
  resize: vertical;
  min-height: 120px;
  &::placeholder { color: ${e=>e.theme.colors.text.muted}; }
  &:hover:not(:focus) { border-color: ${e=>e.$error?e.theme.colors.error.main:e.theme.colors.primary.main}; }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${e=>e.theme.colors.text.primary};
    box-shadow: 0 0 0 1000px ${e=>e.theme.colors.surface} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  &:focus {
    border-color: ${e=>e.$error?e.theme.colors.error.main:e.theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${e=>e.$error?`${e.theme.colors.error.main}20`:`${e.theme.colors.primary.main}20`};
  }
`,Wo=t.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.error.main};
`,Lo=t.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  text-align: right;
`,Io=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
`,Mo=t.button`
  padding: 0.4rem 0.875rem;
  border-radius: 999px;
  border: 1.5px solid ${e=>e.$active?e.theme.colors.primary.main:e.theme.colors.border.default};
  background: ${e=>e.$active?e.theme.colors.primary.main:"transparent"};
  color: ${e=>e.$active?ee(e.theme):e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-family: inherit;
  font-weight: ${e=>e.$active?e.theme.typography.fontWeight.semibold:e.theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
  white-space: nowrap;
  ${e=>!e.$active&&`&:hover { border-color: ${e.theme.colors.primary.main}; color: ${e.theme.colors.text.primary}; }`}
`;t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.md};
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;const ao=t.div`
  display: flex;
  align-items: center;

  input[type='checkbox'] { display: none; }
`,io=t.label`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  border: 1.5px solid ${e=>e.$active?e.theme.colors.primary.main:e.theme.colors.border.default};
  background: ${e=>e.$active?`${e.theme.colors.primary.main}15`:"transparent"};
  color: ${e=>e.$active?e.theme.colors.primary.main:e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
  user-select: none;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.main};
    color: ${e=>e.theme.colors.primary.main};
  }
`,Do=t.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  align-items: center;
`,Yo=t.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.sm};
  padding: 0.875rem 2rem;
  background: ${e=>e.theme.colors.primary.main};
  color: ${e=>ee(e.theme)};
  border: none;
  border-radius: 8px;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: ${e=>e.$loading?"not-allowed":"pointer"};
  opacity: ${e=>e.$loading?.7:1};
  transition: filter 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  &:hover:not(:disabled) {
    filter: brightness(1.12);
    transform: translateY(-1px);
    box-shadow: 0 4px 20px ${e=>e.theme.colors.primary.main}60;
  }
`,Ao=t.button`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-family: inherit;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: color 0.15s ease;
  &:hover { color: ${e=>e.theme.colors.text.primary}; }
`,Oo=t.span`
  display: inline-flex;
  animation: ${ro} 1s linear infinite;
`,To=t.div`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.sm};
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>`${e.theme.colors.error.main}14`};
  border: 1px solid ${e=>`${e.theme.colors.error.main}40`};
  border-radius: 6px;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.error.main};
`,Go=t.div`
  padding: ${e=>e.theme.spacing.xxl} ${e=>e.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${e=>e.theme.spacing.md};
`,Po=t.h3`
  font-family: ${e=>e.theme.typography.fontFamily.heading};
  font-size: ${e=>e.theme.typography.fontSize["2xl"]};
  color: ${e=>e.theme.colors.primary};
  margin: 0;
`,_o=t.p`
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.6;
  margin: 0;
`,Bo=t.button`
  background: none;
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 6px;
  padding: 0.75rem 2rem;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  cursor: pointer;
  transition: ${e=>e.theme.transitions.fast};
  margin-top: ${e=>e.theme.spacing.sm};
  &:hover { border-color: ${e=>e.theme.colors.primary}; color: ${e=>e.theme.colors.primary}; }
`;function No({countryCode:e,phone:o,preferSms:r,onCountryCodeChange:n,onPhoneChange:a,onPreferSmsChange:l,error:c}){const d=!r,h=L("contact_form","phone_label","Phone"),f=L("contact_form","phone_reply_requested","Phone reply requested"),g=L("contact_form","phone_reply_request","Request phone reply");return s.jsx(Ee,{value:o,onChange:a,countryCode:e,onCountryCodeChange:n,label:h,required:!0,error:c,trailing:s.jsxs(ao,{children:[s.jsx("input",{type:"checkbox",id:"prefer-sms",checked:d,onChange:x=>l(!x.target.checked)}),s.jsxs(io,{htmlFor:"prefer-sms",$active:d,children:[s.jsx(ce,{size:13}),d?f:g]})]})})}const no=t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,so=t.span`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${e=>e.theme.colors.text.primary};
`,co=t.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  font-style: italic;
`,lo=t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`,mo=t.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,po=t.span`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${e=>e.theme.colors.primary};
`,ho=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`,$o=t.button`
  padding: 0.375rem 0.75rem;
  border-radius: ${e=>e.theme.borderRadius.full};
  border: 1px solid ${e=>e.$selected?e.theme.colors.primary:e.theme.colors.border};
  background: ${e=>e.$selected?`${e.theme.colors.primary}18`:"transparent"};
  color: ${e=>e.$selected?e.theme.colors.primary:e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
  white-space: nowrap;
  &:hover { border-color: ${e=>e.theme.colors.primary}; color: ${e=>e.theme.colors.primary}; }
`;function Ho({groups:e,selected:o,onToggle:r}){const n=e.length>1,a=L("contact_form","activities_title","What are you interested in?"),l=L("contact_form","activities_hint","Optional — check everything you'd like to explore");return s.jsxs(s.Fragment,{children:[s.jsxs(no,{children:[s.jsx(so,{children:a}),s.jsx(co,{children:l})]}),s.jsx(lo,{children:e.map(c=>s.jsxs(mo,{children:[n&&s.jsx(po,{children:c.category}),s.jsx(ho,{children:c.items.map(d=>s.jsx($o,{type:"button",$selected:o.includes(d),onClick:()=>r(d),children:d},d))})]},c.category))})]})}export{Ho as A,Do as B,Lo as C,xo as E,jo as F,Eo as I,Ro as L,No as P,To as S,Fo as T,bo as a,Wo as b,Io as c,Mo as d,Go as e,Po as f,_o as g,Bo as h,yo as i,wo as j,vo as k,zo as l,So as m,Co as n,ko as o,Yo as p,Oo as q,Ao as r};
//# sourceMappingURL=ActivityChecklist-DhCuM_OY.js.map
