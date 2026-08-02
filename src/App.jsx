import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Thinking from './components/Thinking'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Experience />
        <Projects />
        <Thinking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
