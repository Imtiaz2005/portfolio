import { stats } from '../data/data'

export default function StatsBar() {
  return (
    <section className="border-y border-line bg-panel">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-8 text-center">
            <p className="font-display text-3xl md:text-4xl text-ember">{s.value}</p>
            <p className="font-mono text-xs text-mute mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
