import { useEffect, useState } from 'react'
import data from './data/hospitalQuestions.json'
import uiText from './data/uiText.json'
import Welcome from './pages/Welcome.jsx'
import Home from './pages/Home.jsx'
import Questions from './pages/Questions.jsx'
import Answer from './pages/Answer.jsx'
import { loadLanguage, saveLanguage } from './utils/i18n.js'

const questions = data.questions
const languages = uiText.languages
const languageCodes = languages.map((item) => item.code)

export default function App() {
  // Screen flow: welcome -> home (department selection) -> questions -> answer
  const [screen, setScreen] = useState('welcome')
  const [selected, setSelected] = useState(null)
  // Where the question list was opened from, so Back returns to the right screen.
  const [questionsFrom, setQuestionsFrom] = useState('home')
  // Single language state for the whole app; every screen reads it from here.
  const [language, setLanguage] = useState(() =>
    loadLanguage(languageCodes, uiText.defaultLanguage)
  )

  useEffect(() => {
    saveLanguage(language)
  }, [language])

  const ui = { brandName: uiText.brandName, ...uiText.text[language] }

  const shared = {
    ui,
    language,
    languages,
    onLanguageChange: setLanguage,
  }

  const openQuestions = (item, from) => {
    setSelected(item)
    setQuestionsFrom(from)
    setScreen('questions')
  }

  const openAnswer = (item) => {
    setSelected(item)
    setScreen('answer')
  }

  if (screen === 'answer' && selected) {
    const number = questions.findIndex((item) => item.id === selected.id) + 1
    return (
      <Answer
        key={selected.id}
        item={selected}
        number={number}
        onBack={() => setScreen('questions')}
        {...shared}
      />
    )
  }

  if (screen === 'questions') {
    return (
      <Questions
        questions={questions}
        selectedId={selected ? selected.id : null}
        onSelectQuestion={openAnswer}
        onBack={() => setScreen(questionsFrom)}
        {...shared}
      />
    )
  }

  if (screen === 'home') {
    return (
      <Home
        questions={questions}
        onSelectDepartment={(item) => openQuestions(item, 'home')}
        onBack={() => setScreen('welcome')}
        {...shared}
      />
    )
  }

  return (
    <Welcome
      questions={questions}
      shortcutCount={uiText.welcomeShortcutCount}
      onStart={() => setScreen('home')}
      onSelectDepartment={(item) => openQuestions(item, 'welcome')}
      onMore={() => setScreen('home')}
      {...shared}
    />
  )
}
