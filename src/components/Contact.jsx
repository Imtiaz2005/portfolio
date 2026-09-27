import { profile } from '../data/data'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 border-t border-line text-center">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-ember text-sm mb-4">say hello</p>
        <h2 className="font-display text-3xl md:text-5xl text-paper mb-8">
          Got a project in mind, or just want to talk shop?
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 bg-ember text-ink font-medium px-8 py-4 rounded-full hover:bg-emberDim transition-colors"
        >
          {profile.email}
        </a>
        <div className="flex items-center justify-center gap-6 mt-10 font-mono text-sm text-mute">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">
            LinkedIn
          </a>
          <a href={profile.socials.codeforces} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">
            Codeforces
          </a>
        </div>
      </div>
    </section>
  )
}
