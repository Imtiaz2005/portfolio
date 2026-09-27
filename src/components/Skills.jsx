import { skills } from '../data/data'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-ember text-sm mb-3">skills.json</p>
        <h2 className="font-display text-3xl md:text-4xl text-paper mb-12 max-w-lg">
          Tools I reach for most.
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-paper">{s.name}</span>
                <span className="font-mono text-mute">{s.level}%</span>
              </div>
              <div className="h-1.5 bg-line rounded-full overflow-hidden">
                <div
                  className="h-full bg-ember bar-fill"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
