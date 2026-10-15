import { useCallback, useEffect, useState } from 'react'
import { ChevronRight, MousePointerClick, Volume2 } from 'lucide-react'
import Header from '../components/Header.jsx'
import LanguageSelector from '../components/LanguageSelector.jsx'
import DepartmentCard from '../components/DepartmentCard.jsx'
import Mascot from '../components/Mascot.jsx'
import WelcomeBackdrop from '../components/WelcomeBackdrop.jsx'
import { speakText, stopSpeech, isSpeechSupported } from '../utils/speech.js'
import { pick } from '../utils/i18n.js'

export default function Welcome({
  questions,
  shortcutCount,
  onStart,
  onSelectDepartment,
  onMore,
  ...headerProps
}) {
  const { ui, language, languages, onLanguageChange } = headerProps
  const [speaking, setSpeaking] = useState(false)
  const supported = isSpeechSupported()

  const speakWelcome = useCallback(() => {
    setSpeaking(true)
    speakText(ui.welcomeSpeech, language, { onEnd: () => setSpeaking(false) })
  }, [ui.welcomeSpeech, language])

  // Speaks once when the screen opens and again only when the language changes.
  // Browsers may block this before the first touch, so the speaker button is the fallback.
  // Leaving the screen stops the greeting so it never overlaps with answer speech.
  useEffect(() => {
    speakWelcome()
    return () => stopSpeech()
  }, [speakWelcome])

  return (
    <div className="flex h-full flex-col">
      <Header {...headerProps} />

      <main className="relative flex-1 overflow-y-auto overflow-x-hidden">
        <WelcomeBackdrop />

        <div className="relative z-10 flex flex-col gap-3 px-4 pb-5 pt-4 md:px-8 xl:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-6">
            <div className="hidden h-[clamp(240px,50vh,390px)] w-[clamp(180px,37.2vh,290px)] shrink-0 lg:block">
              <Mascot label={ui.brandName} />
            </div>

            <div className="mx-auto flex w-full max-w-[780px] flex-col gap-3 md:gap-4 lg:mx-0">
              <div className="relative rounded-3xl bg-white/95 px-5 py-4 shadow-lg md:px-8">
                <button
                  type="button"
                  onClick={speakWelcome}
                  disabled={!supported}
                  aria-label={ui.playGreeting}
                  className={`absolute right-3 top-3 flex h-12 w-12 md:right-5 md:top-4 md:h-14 md:w-14 items-center justify-center rounded-full active:scale-95 disabled:opacity-50 ${
                    speaking ? 'bg-care-100 text-care-500' : 'bg-sky-100 text-blue-600'
                  }`}
                >
                  <Volume2 className={`h-7 w-7 md:h-8 md:w-8 ${speaking ? 'animate-pulse' : ''}`} />
                </button>

                <h2 className="break-words pr-16 text-2xl font-extrabold leading-tight text-navy-900 md:pr-20 md:text-3xl xl:text-4xl">
                  {ui.welcomeTitle}
                </h2>
                <p className="mt-1 pr-4 text-xl font-semibold leading-snug text-blue-600 md:text-2xl">
                  {ui.welcomeSubtitle}
                </p>
                <p className="mt-3 border-t border-slate-200 pt-3 text-base text-navy-700 md:text-lg">
                  {ui.welcomeInstruction}
                </p>
              </div>

              <div className="flex flex-col items-start gap-2">
                <p className="text-base font-medium text-navy-700 md:text-lg">{ui.languageLabel}</p>
                <LanguageSelector
                  size="large"
                  languages={languages}
                  language={language}
                  onChange={onLanguageChange}
                />
              </div>

              <button
                type="button"
                onClick={onStart}
                className="flex min-h-[72px] w-full items-center gap-3 rounded-2xl bg-green-700 px-5 text-white md:gap-5 md:px-8 xl:min-h-[88px] shadow-lg active:scale-[0.98] active:bg-green-800"
              >
                <MousePointerClick className="h-9 w-9 shrink-0 xl:h-12 xl:w-12" />
                <span className="min-w-0 flex-1 break-words text-center text-2xl font-bold xl:text-3xl">{ui.startButton}</span>
                <ChevronRight className="h-8 w-8 shrink-0 xl:h-10 xl:w-10" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 text-lg font-medium text-navy-700 md:gap-4 md:text-xl">
            <span className="h-px flex-1 bg-navy-700/40" />
            <span className="text-center">{ui.orTapDepartment}</span>
            <span className="h-px flex-1 bg-navy-700/40" />
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,220px),1fr))] gap-3 xl:grid-cols-5">
            {questions.slice(0, shortcutCount).map((item) => (
              <DepartmentCard
                key={item.id}
                compact
                name={pick(item.department, language)}
                icon={item.icon}
                color={item.color}
                onClick={() => onSelectDepartment(item)}
              />
            ))}
            <DepartmentCard
              compact
              name={ui.moreDepartments}
              icon="grid"
              color="slate"
              onClick={onMore}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
