
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import PortfolioFooter from './components/PortfolioFooter'
import PortfolioNavbar from './components/PortfolioNavbar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ToTopButton from './components/ToTopButton'
import './App.css'

function App() {
  return (
    <div className="portfolio-page">
      <PortfolioNavbar />

      <main className="py-5">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      <PortfolioFooter />
      <ToTopButton />
    </div>
  )
}

export default App
