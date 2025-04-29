
import { CardHome } from '../components/CardHome'
import { Header } from '../components/Header'
import { AboutMe } from '../components/AboutMe'
import { JourneyCard } from '../components/JourneyCard/JourneyCard'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'

export  function HomePage() {
  return (
    <div>
      <Header />
      <CardHome />
      <AboutMe />
      <JourneyCard />
      <Projects/>
      <Contact/>
    </div>
  )
}
