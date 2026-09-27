import aboutPhoto from '../assets/about.jpeg'
import { profile } from '../data/data'

export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-12 items-center">
        <div className="relative">
          <img
            src={aboutPhoto}
            alt={`${profile.name} working`}
            className="w-full aspect-[4/5] object-cover rounded-2xl grayscale"
          />
        </div>
        <div>
          <p className="font-mono text-ember text-sm mb-3">about.md</p>
          <h2 className="font-display text-3xl md:text-4xl text-paper mb-6">
            Two things I care about: clean code and hard problems.
          </h2>
          <div className="space-y-4 text-mute leading-relaxed max-w-xl">
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
