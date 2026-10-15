// Soft, generic hospital-building illustration used behind the welcome screen.
export default function WelcomeBackdrop() {
  return (
    <svg
      viewBox="0 0 520 520"
      preserveAspectRatio="xMaxYMax meet"
      className="pointer-events-none absolute bottom-0 right-0 h-full w-[46%] opacity-60"
      aria-hidden="true"
    >
      <defs>
        <pattern id="backdropWindows" width="28" height="24" patternUnits="userSpaceOnUse">
          <rect x="2" y="2" width="22" height="16" rx="2" fill="#8fb8dc" />
        </pattern>
      </defs>
      <ellipse cx="300" cy="500" rx="260" ry="30" fill="#cfe2f3" />
      <polygon points="60,230 160,200 160,470 60,470" fill="#d8e6f3" />
      <rect x="60" y="230" width="100" height="240" fill="url(#backdropWindows)" opacity="0.8" />
      <rect x="160" y="150" width="270" height="330" fill="#cddff0" />
      <rect x="180" y="175" width="230" height="270" fill="url(#backdropWindows)" />
      <rect x="160" y="140" width="270" height="14" fill="#b4cde6" />
      <rect x="270" y="400" width="50" height="80" fill="#a9c8e4" />
      <circle cx="90" cy="450" r="34" fill="#c4dec9" />
      <circle cx="450" cy="455" r="30" fill="#c4dec9" />
      <circle cx="490" cy="470" r="22" fill="#b4d4bb" />
    </svg>
  )
}
