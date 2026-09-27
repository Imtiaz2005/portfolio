import { projects } from '../data/data'

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-ember text-sm mb-3">projects/</p>
        <h2 className="font-display text-3xl md:text-4xl text-paper mb-12 max-w-lg">
          A few things I've built.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="border border-line rounded-2xl overflow-hidden flex flex-col hover:border-ember/60 transition-colors"
            >
              <div className="aspect-video bg-line/40 flex items-center justify-center">
                {proj.image ? (
                  <img src={proj.image} alt={proj.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-mono text-xs text-mute">screenshot here</span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg text-paper mb-2">{proj.name}</h3>
                <p className="text-sm text-mute mb-4 flex-1">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-mute border border-line rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ember hover:text-emberDim transition-colors"
                    >
                      Live ↗
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-paper hover:text-ember transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
