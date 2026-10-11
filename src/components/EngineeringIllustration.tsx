/** A self-contained editorial schematic, intentionally not a specific board pinout. */
export default function EngineeringIllustration() {
  return (
    <div className="hero-visual" aria-label="Technical illustration connecting hardware, software and systems">
      <div className="illustration-heading"><span>FIGURE 01 / THE ENGINEERING STACK</span><span>LIB—001</span></div>
      <svg className="engineering-graphic" viewBox="0 0 580 560" role="img" aria-label="Illustrated circuit board connected to software, circuits and system design" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="drawing-grid" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="var(--diagram-grid)" strokeWidth=".65"/></pattern>
          <pattern id="chip-lines" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M8 0H0V8" fill="none" stroke="var(--diagram-grid)" strokeWidth=".5"/></pattern>
        </defs>
        <rect width="580" height="560" fill="url(#drawing-grid)" opacity=".72" />
        <circle cx="290" cy="286" r="213" fill="none" stroke="var(--diagram-line)" strokeWidth="1" strokeDasharray="3 7"/>
        <circle cx="290" cy="286" r="172" fill="none" stroke="var(--diagram-line)" strokeWidth="1" />
        <circle cx="290" cy="286" r="133" fill="var(--diagram-wash)" stroke="var(--diagram-line)" strokeWidth="1.25" />
        <g fill="none" stroke="var(--diagram-line)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M67 165h74l48 46h41M67 205h54l52 51h52M68 366h91l42-46h23M511 182h-62l-45 47h-40M511 370h-93l-44-43h-12M290 62v70m0 315v51"/>
          <path d="M87 143h50l30 30h73M483 407h-52l-44-46h-24" opacity=".6"/>
        </g>
        <g fill="var(--diagram-line)">
          {[[67,165],[67,205],[68,366],[511,182],[511,370],[290,62],[290,498],[87,143],[483,407]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="4" />)}
        </g>
        <g transform="translate(210 204)">
          <rect x="-12" y="-12" width="184" height="184" rx="16" fill="var(--diagram-shadow)"/>
          <rect x="0" y="0" width="160" height="160" rx="14" fill="var(--diagram-chip)" stroke="var(--diagram-chip-border)" strokeWidth="2"/>
          <rect x="16" y="16" width="128" height="128" rx="6" fill="url(#chip-lines)" stroke="var(--diagram-chip-fine)"/>
          {[0,1,2,3,4,5].map(i=><g key={i} fill="var(--diagram-contact)"><rect x={15+i*23} y="-10" width="11" height="12" rx="2"/><rect x={15+i*23} y="158" width="11" height="12" rx="2"/><rect x="-10" y={15+i*23} width="12" height="11" rx="2"/><rect x="158" y={15+i*23} width="12" height="11" rx="2"/></g>)}
          <g fill="none" stroke="var(--diagram-chip-mark)" strokeWidth="2.5" strokeLinejoin="round"><rect x="52" y="50" width="56" height="56" rx="9"/><path d="M66 69h28v18H66zM80 50V35M80 121v-15M52 78H37m86 0h-15"/></g>
          <circle cx="80" cy="79" r="7" fill="var(--signal)"/>
          <text x="80" y="130" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="var(--diagram-chip-mark)" letterSpacing="2">CORE / CPE</text>
        </g>
        <g fontFamily="monospace" fontSize="11" fill="var(--diagram-label)" letterSpacing=".9">
          <text x="36" y="126">INPUT / 01</text><text x="414" y="146">DESIGN / 02</text><text x="34" y="400">LOGIC / 03</text><text x="404" y="416">OUTPUT / 04</text>
          <text x="306" y="91">HARDWARE</text><text x="304" y="477">SOFTWARE</text>
        </g>
        <g fill="none" stroke="var(--signal)" strokeWidth="3"><path d="M199 286h25M356 286h25"/><circle cx="290" cy="135" r="5"/><circle cx="290" cy="446" r="5"/></g>
      </svg>
      <div className="illustration-footer"><span><span className="signal-square"/> HARDWARE + SOFTWARE</span><span>NOT TO SCALE</span></div>
    </div>
  );
}
