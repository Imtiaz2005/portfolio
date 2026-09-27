import { competitiveProfiles } from '../data/data'

export default function CompetitiveProgramming() {
  return (
    <section id="cp" className="px-6 py-24 border-t border-line bg-panel">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-ember text-sm mb-3">competitive_programming</p>
        <h2 className="font-display text-3xl md:text-4xl text-paper mb-12 max-w-lg">
          When I'm not shipping features, I'm solving problems.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {competitiveProfiles.map((p) => (
            <a
              key={p.platform}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="block border border-line rounded-2xl p-6 hover:border-ember transition-colors group"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl text-paper">{p.platform}</h3>
                <span className="font-mono text-xs text-mute group-hover:text-ember transition-colors">
                  @{p.handle} ↗
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="font-display text-2xl text-ember">{p.rating}</p>
                  <p className="font-mono text-xs text-mute mt-1">rating</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-paper">{p.rank}</p>
                  <p className="font-mono text-xs text-mute mt-1">rank</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-paper">{p.solved}+</p>
                  <p className="font-mono text-xs text-mute mt-1">solved</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
