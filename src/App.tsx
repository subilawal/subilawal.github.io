import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <main className="app-shell">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
