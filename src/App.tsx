import { Header } from './components/Header'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ImpactSection } from './sections/ImpactSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { TechnologiesSection } from './sections/TechnologiesSection'

function App() {
  return (
    <>
      <Header />

      <main className="overflow-x-clip pt-[4.75rem]">
        <HeroSection />
        <ImpactSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
