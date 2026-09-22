import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Goals from './components/Goals'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useApiData from './useApiData'
import { fetchProjects, fetchContactLinks } from './api'
import { INITIAL_PROJECTS, CONTACT_LINKS } from './data'

export default function App() {
  // Projets et liens de contact sont gérés depuis le back-office. Les données
  // de data.js ne servent plus que de secours si l'API est injoignable.
  const projects = useApiData(fetchProjects, INITIAL_PROJECTS)
  const links = useApiData(fetchContactLinks, CONTACT_LINKS)

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects.data} loading={projects.loading} />
      <Goals />
      <Contact links={links.data} loading={links.loading} />
      <Footer />
    </div>
  )
}
