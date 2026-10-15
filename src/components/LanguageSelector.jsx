// size="compact": small segmented control used in the header.
// size="large": two big buttons with a letter badge, used on the welcome screen.
export default function LanguageSelector({ languages, language, onChange, size = 'compact' }) {
  if (size === 'large') {
    return (
      <div className="flex flex-wrap gap-3 xl:gap-4">
        {languages.map((item) => {
          const active = item.code === language
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => onChange(item.code)}
              aria-pressed={active}
              className={`flex min-h-[56px] min-w-[150px] items-center justify-center gap-3 rounded-full px-5 text-xl font-bold shadow-md active:scale-95 md:min-w-[170px] xl:min-h-[64px] xl:min-w-[190px] xl:px-6 xl:text-2xl ${
                active ? 'bg-navy-800 text-white' : 'bg-white text-navy-800'
              }`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-lg font-bold text-white xl:h-10 xl:w-10 xl:text-xl ${
                  active ? 'bg-blue-600' : 'bg-navy-800'
                }`}
              >
                {item.badge}
              </span>
              {item.label}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div className="flex rounded-full bg-sky-100 p-1">
      {languages.map((item) => {
        const active = item.code === language
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => onChange(item.code)}
            aria-pressed={active}
            className={`min-h-[44px] rounded-full px-3 text-base font-bold active:scale-95 md:px-4 xl:px-5 xl:text-lg ${
              active ? 'bg-navy-800 text-white shadow' : 'text-navy-800'
            }`}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
