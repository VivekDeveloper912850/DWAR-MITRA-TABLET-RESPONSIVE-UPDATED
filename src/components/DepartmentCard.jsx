import { ChevronRight } from 'lucide-react'
import { getDepartmentIcon, getDepartmentTheme } from '../utils/departmentStyle.js'

// compact: smaller tinted card used for the welcome-screen shortcuts.
export default function DepartmentCard({ name, icon, color, compact = false, onClick }) {
  const Icon = getDepartmentIcon(icon)
  const theme = getDepartmentTheme(color)

  if (compact) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`flex min-h-[80px] items-center gap-3 rounded-2xl p-3 text-left shadow active:scale-95 xl:min-h-[88px] ${theme.card}`}
      >
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full xl:h-14 xl:w-14 ${theme.soft}`}
        >
          <Icon className={`h-7 w-7 xl:h-8 xl:w-8 ${theme.text}`} strokeWidth={2} />
        </div>
        <span className="min-w-0 flex-1 break-words text-base font-bold leading-tight text-navy-900 md:text-lg">{name}</span>
        <ChevronRight className="h-5 w-5 shrink-0 text-slate-400" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-[96px] items-center gap-4 rounded-2xl bg-white/90 p-4 text-left shadow-md active:scale-95 active:bg-sky-100 xl:min-h-[112px] xl:gap-5 xl:p-5"
    >
      <div
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full xl:h-20 xl:w-20 ${theme.soft}`}
      >
        <Icon className={`h-8 w-8 xl:h-10 xl:w-10 ${theme.text}`} strokeWidth={2} />
      </div>
      <span className="min-w-0 flex-1 break-words text-xl font-bold leading-tight text-navy-900 xl:text-2xl">{name}</span>
      <ChevronRight className="h-7 w-7 shrink-0 text-slate-400" />
    </button>
  )
}
