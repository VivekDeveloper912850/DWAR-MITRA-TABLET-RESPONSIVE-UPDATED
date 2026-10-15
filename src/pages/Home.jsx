import Header from '../components/Header.jsx'
import DepartmentCard from '../components/DepartmentCard.jsx'
import { pick } from '../utils/i18n.js'

export default function Home({ questions, onSelectDepartment, ...headerProps }) {
  const { ui, language } = headerProps

  return (
    <div className="flex h-full flex-col">
      <Header {...headerProps} />
      <main className="flex-1 overflow-y-auto px-4 pb-8 pt-4 md:px-8 xl:px-10">
        <div className="mb-6 text-center md:mb-8">
          <h2 className="text-3xl font-extrabold text-navy-800 md:text-4xl xl:text-5xl">{ui.findYourWay}</h2>
          <p className="mt-2 text-lg text-navy-700 md:mt-3 md:text-xl xl:text-2xl">{ui.tapDepartment}</p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-4 xl:gap-6">
          {questions.map((item) => (
            <DepartmentCard
              key={item.id}
              name={pick(item.department, language)}
              icon={item.icon}
              color={item.color}
              onClick={() => onSelectDepartment(item)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
