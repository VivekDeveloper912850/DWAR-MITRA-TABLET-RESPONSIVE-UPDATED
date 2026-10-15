import Header from '../components/Header.jsx'
import QuestionList from '../components/QuestionList.jsx'

export default function Questions({ questions, selectedId, onSelectQuestion, ...headerProps }) {
  const { ui, language } = headerProps

  return (
    <div className="flex h-full flex-col">
      <Header {...headerProps} />
      <main className="flex-1 overflow-y-auto px-4 pb-4 pt-4 md:px-8 xl:px-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white/70 shadow-lg">
          <div className="bg-navy-800 px-4 py-3 text-center text-white md:px-6">
            <h2 className="text-xl font-bold md:text-2xl xl:text-3xl">{ui.faqTitle}</h2>
            <p className="text-sm text-sky-200 md:text-base xl:text-lg">{ui.faqSubtitle}</p>
          </div>

          <div className="p-3">
            <QuestionList
              questions={questions}
              language={language}
              selectedId={selectedId}
              onSelect={onSelectQuestion}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
