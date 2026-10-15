import { useCallback, useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import AnswerPanel from '../components/AnswerPanel.jsx'
import LocationVisual from '../components/LocationVisual.jsx'
import { speakText, stopSpeech, isSpeechSupported } from '../utils/speech.js'
import { pick } from '../utils/i18n.js'

export default function Answer({ item, number, ...headerProps }) {
  const { ui, language } = headerProps
  const [speaking, setSpeaking] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const supported = isSpeechSupported()

  const answerText = pick(item.answer, language)
  const floor = pick(item.floor, language)

  const play = useCallback(() => {
    setSpeaking(true)
    speakText(answerText, language, {
      onEnd: () => {
        setSpeaking(false)
        setHasPlayed(true)
      },
    })
  }, [answerText, language])

  // Speak automatically when the answer opens or the language changes.
  // The cleanup stops any previous speech before the next one starts.
  useEffect(() => {
    setHasPlayed(false)
    play()
    return () => stopSpeech()
  }, [play])

  return (
    <div className="flex h-full flex-col">
      <Header {...headerProps} />
      <main className="flex flex-1 flex-col overflow-y-auto px-4 pb-5 pt-4 md:px-8 xl:px-10">
        <div className="mx-auto flex w-full max-w-6xl shrink-0 grow flex-col overflow-hidden rounded-2xl bg-white/70 shadow-lg">
          <div className="flex items-center gap-3 bg-navy-800 px-4 py-3 text-white md:gap-5 md:px-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl md:h-12 md:w-12 md:text-2xl font-extrabold text-navy-800">
              {number}
            </span>
            <h2 className="min-w-0 break-words text-xl font-bold md:text-2xl xl:text-3xl">{pick(item.question, language)}</h2>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 p-4 md:landscape:grid-cols-2 md:p-5 lg:grid-cols-2">
            <LocationVisual
              department={pick(item.department, language)}
              icon={item.icon}
              color={item.color}
              building={pick(item.building, language)}
              floor={floor}
              room={pick(item.room, language)}
            />
            <AnswerPanel
              ui={ui}
              answer={answerText}
              floor={floor}
              speaking={speaking}
              hasPlayed={hasPlayed}
              supported={supported}
              onListen={play}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
