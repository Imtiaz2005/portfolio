import { profile } from '../data/data'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'CP', href: '#cp' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-paper">
          <span className="text-ember">~/</span>{profile.name.split(' ')[0].toLowerCase()}
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-mute">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-paper transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeUrl}
          className="text-sm font-mono border border-line px-4 py-2 rounded-full hover:border-ember hover:text-ember transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}
