import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
const App = () => {
  return (
    <main className="h-full bg-bk-3 text-wt-3">
      <Navbar />
      <div className="h-full overflow-scroll pt-20 scroll-smooth scroll-padding-top-40">
        <Hero className />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

export default App
