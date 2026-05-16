import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Goals from './components/Goals'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { INITIAL_PROJECTS } from './data'

export default function App() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS)

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} setProjects={setProjects} />
      <Goals />
      <Contact />
      <Footer setProjects={setProjects} />
    </div>
  )
}
