import heroPhoto from '../assets/hero-cutout.png'
import { profile } from '../data/data'
import Typewriter from './Typewriter'

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="pb-10 md:pb-16">
            <p className="font-display text-3xl md:text-4xl text-paper font-semibold">
              Hello<span className="text-ember">.</span>
            </p>
            <div className="flex items-center gap-3 mt-3 mb-4 h-8 md:h-9">
              <span className="w-8 h-px bg-ember shrink-0" aria-hidden="true" />
              <p className="font-display text-xl md:text-2xl text-mute leading-none flex items-center">
                I'm&nbsp;<Typewriter text={profile.name} />
              </p>
            </div>
            <h1 className="font-display font-semibold text-4xl md:text-6xl leading-tight text-paper mb-6">
              {profile.role}
            </h1>
            <p className="text-mute max-w-md leading-relaxed mb-8">{profile.bio[0]}</p>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="bg-ember text-ink font-medium px-6 py-3 rounded-full hover:bg-emberDim transition-colors"
              >
                Got a project?
              </a>
              <a
                href={profile.resumeUrl}
                className="border border-ember text-paper px-6 py-3 rounded-full hover:bg-ember/10 transition-colors"
              >
                My resume
              </a>
            </div>
            <p className="font-mono text-xs text-mute mt-10">
              <span className="text-ember">● open to work</span>
              <span className="mx-2">·</span>
              {profile.location}
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-ember/25 blur-3xl" />
              <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-ember/70" />
            </div>
            <span
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 text-ember text-2xl select-none"
              aria-hidden="true"
            >
              ‹
            </span>
            <span
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 text-ember text-2xl select-none"
              aria-hidden="true"
            >
              ›
            </span>
            <img
              src={heroPhoto}
              alt={profile.name}
              className="relative z-10 w-full max-w-[280px] md:max-w-[340px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
