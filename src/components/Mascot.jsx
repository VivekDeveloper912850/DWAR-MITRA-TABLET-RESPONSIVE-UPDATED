// Generic friendly helper-robot illustration (original artwork, not official branding).
export default function Mascot({ label }) {
  return (
    <svg viewBox="0 0 330 440" className="h-full w-full" role="img" aria-label={label}>
      <defs>
        <radialGradient id="mascotGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8cc4ff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#8cc4ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mascotBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbe8f7" />
        </linearGradient>
      </defs>

      <ellipse cx="160" cy="415" rx="115" ry="20" fill="url(#mascotGlow)" />
      <path d="M105 330 Q160 425 215 330 Z" fill="#dbe8f7" />

      {/* arm resting on hip */}
      <path d="M90 214 Q38 252 72 312" stroke="#e8f0fa" strokeWidth="30" strokeLinecap="round" fill="none" />
      <circle cx="74" cy="314" r="18" fill="#1e3a8a" />

      {/* body */}
      <rect x="85" y="180" width="150" height="160" rx="62" fill="url(#mascotBody)" stroke="#c5d6ea" strokeWidth="2" />
      <rect x="108" y="302" width="104" height="14" rx="7" fill="#2563eb" />
      <g transform="translate(160 232)">
        <rect x="-6" y="-20" width="12" height="40" rx="6" fill="#1d6fd6" />
        <rect x="-20" y="-6" width="40" height="12" rx="6" fill="#1d6fd6" />
        <path d="M0 0 C0 -12 10 -16 19 -14 C19 -4 10 2 0 0 Z" fill="#2bb673" />
      </g>
      <text x="160" y="276" textAnchor="middle" fontSize="15" fontWeight="800" fill="#1e3a8a" fontFamily="system-ui, sans-serif">
        DWAR MITRA
      </text>

      {/* shoulders and welcoming arm */}
      <circle cx="90" cy="208" r="24" fill="#1e3a8a" />
      <circle cx="232" cy="208" r="24" fill="#1e3a8a" />
      <path d="M238 206 Q278 198 298 162" stroke="#f4f8fd" strokeWidth="30" strokeLinecap="round" fill="none" />
      <ellipse cx="302" cy="150" rx="20" ry="27" fill="#1e3a8a" transform="rotate(25 302 150)" />

      {/* neck + head */}
      <rect x="135" y="168" width="50" height="22" rx="10" fill="#1e3a8a" />
      <circle cx="46" cy="96" r="24" fill="#2563eb" />
      <circle cx="274" cy="96" r="24" fill="#2563eb" />
      <rect x="52" y="14" width="216" height="162" rx="72" fill="url(#mascotBody)" stroke="#c5d6ea" strokeWidth="2" />
      <rect x="78" y="40" width="164" height="110" rx="50" fill="#0b1f44" />
      <path d="M112 92 Q128 70 144 92" stroke="#3fe0ff" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M176 92 Q192 70 208 92" stroke="#3fe0ff" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M138 116 Q160 138 182 116" stroke="#3fe0ff" strokeWidth="9" strokeLinecap="round" fill="none" />
    </svg>
  )
}
