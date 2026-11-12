import About from './components/About'
import Challenges from './components/Challenges'
import Contact from './components/Contact'
import Differentials from './components/Differentials'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Method from './components/Method'
import Services from './components/Services'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Challenges />
        <Method />
        <Services />
        <Differentials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
