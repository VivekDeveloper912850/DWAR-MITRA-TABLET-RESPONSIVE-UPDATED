import BackButton from './BackButton.jsx'
import LanguageSelector from './LanguageSelector.jsx'
import DateTime from './DateTime.jsx'
import igimsLogo from '../assets/igims-logo.jpg'

function Logo() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-10 w-10 shrink-0 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14"
      aria-hidden="true"
    >
      <rect x="17" y="3" width="14" height="42" rx="7" fill="#1d6fd6" />
      <rect x="3" y="17" width="42" height="14" rx="7" fill="#1d6fd6" />
      <path d="M24 24 C24 11 35 7 44 9 C44 20 35 26 24 24 Z" fill="#2bb673" />
    </svg>
  )
}

// One shared header for every screen, in three areas:
//   LEFT   official IGIMS logo (shown unchanged, natural proportions)
//   CENTER DWAR MITRA branding
//   RIGHT  time/date + language selector
//
// Responsive behaviour:
//   >= lg (1024px)  all three areas sit in one row.
//   <  lg           row 1 = logo + time/language, row 2 = DWAR MITRA branding,
//                   so nothing overlaps on 7"-10" tablets in portrait or landscape.
// The logo is sized with fluid widths and h-auto, so its aspect ratio never changes.
// On inner screens a slim strip with the Back button sits under the main row.
export default function Header({ ui, language, languages, onLanguageChange, onBack }) {
  const locale = languages.find((item) => item.code === language)?.locale

  return (
    <header className="bg-white shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2 md:px-6 md:py-3 lg:flex-nowrap lg:gap-x-0 xl:px-8">
        <div className="flex shrink-0 items-center lg:mr-6 lg:min-w-0 lg:max-w-[560px] lg:shrink lg:basis-[35%] xl:basis-[37%]">
          <img
            src={igimsLogo}
            alt={ui.logoAlt}
            className="h-auto w-[clamp(200px,40vw,300px)] object-contain lg:w-full"
          />
        </div>

        <div className="order-last flex w-full min-w-0 items-center justify-center gap-3 border-t border-slate-200 pt-2 lg:order-none lg:w-auto lg:flex-1 lg:border-l lg:border-t-0 lg:px-4 lg:pt-0 xl:px-6">
          <Logo />
          <div className="min-w-0">
            <h1 className="whitespace-nowrap text-2xl font-extrabold leading-none tracking-wide text-navy-800 md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              {ui.brandName}
            </h1>
            <p className="mt-1 text-sm font-medium text-navy-700 xl:text-base">{ui.subtitle}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 lg:border-l lg:border-slate-200 lg:pl-4 xl:gap-5 xl:pl-6">
          <DateTime locale={locale} />
          <LanguageSelector languages={languages} language={language} onChange={onLanguageChange} />
        </div>
      </div>

      {onBack && (
        <div className="border-t border-slate-200 bg-sky-50 px-4 py-2 md:px-6 xl:px-8">
          <BackButton label={ui.back} onClick={onBack} />
        </div>
      )}
    </header>
  )
}
