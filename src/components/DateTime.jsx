import { useEffect, useState } from 'react'

export default function DateTime({ locale }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30000)
    return () => clearInterval(timer)
  }, [])

  const time = now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })
  const date = now.toLocaleDateString(locale, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <div className="whitespace-nowrap text-right">
      <p className="text-lg font-bold leading-tight text-navy-900 md:text-xl xl:text-2xl">{time}</p>
      <p className="text-xs text-navy-700 md:text-sm">{date}</p>
    </div>
  )
}
