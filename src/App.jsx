import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Skills from './components/Skills'
import CompetitiveProgramming from './components/CompetitiveProgramming'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-ink min-h-screen font-body">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Skills />
      <CompetitiveProgramming />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
