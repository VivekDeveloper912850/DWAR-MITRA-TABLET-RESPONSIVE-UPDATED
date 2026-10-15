import { MapPin, Volume2, RotateCcw } from 'lucide-react'

// Splits the answer so the floor/room part can be shown in bold.
// Works for any language because it searches for the floor text from the JSON.
function splitAnswer(answer, floor) {
  const index = floor ? answer.indexOf(floor) : -1
  if (index > 0) return [answer.slice(0, index).trimEnd(), answer.slice(index)]
  return [answer, '']
}

export default function AnswerPanel({
  ui,
  answer,
  floor,
  speaking,
  hasPlayed,
  supported,
  onListen,
}) {
  const [lead, emphasis] = splitAnswer(answer, floor)
  const label = speaking ? ui.speaking : hasPlayed ? ui.playAgain : ui.listen
  const ButtonIcon = !speaking && hasPlayed ? RotateCcw : Volume2

  return (
    <div className="flex h-full flex-col justify-between rounded-xl bg-white/90 p-5 shadow md:p-8">
      <div>
        <div className="mb-4 flex items-center gap-3 md:mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-care-500">
            <MapPin className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-care-500 md:text-3xl">{ui.answer}</h3>
        </div>

        <p className="break-words text-2xl leading-snug text-navy-800 md:text-3xl xl:text-4xl">
          {lead}
          {emphasis && <span className="mt-1 block font-extrabold text-navy-900">{emphasis}</span>}
        </p>
      </div>

      <div className="mt-6 flex justify-center md:mt-8">
        <button
          type="button"
          onClick={onListen}
          disabled={!supported}
          className={`flex min-h-[64px] w-full max-w-md items-center justify-center gap-3 rounded-full px-5 text-xl font-bold md:gap-4 md:px-6 xl:min-h-[72px] xl:text-2xl active:scale-95 disabled:opacity-60 ${
            speaking ? 'bg-care-100 text-care-500' : 'bg-sky-100 text-blue-600'
          }`}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow">
            <ButtonIcon className={`h-7 w-7 ${speaking ? 'animate-pulse' : ''}`} />
          </span>
          {supported ? label : ui.voiceUnavailable}
        </button>
      </div>
    </div>
  )
}
