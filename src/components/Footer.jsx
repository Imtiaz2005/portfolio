import { profile } from '../data/data'

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-line text-center font-mono text-xs text-mute">
      © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
    </footer>
  )
}
