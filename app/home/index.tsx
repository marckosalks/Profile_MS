
import { CardHome } from '../components/CardHome'
import { Header } from '../components/Header'
import { AboutMe } from '../components/AboutMe'
import { JourneyCard } from '../components/JourneyCard/JourneyCard'

export default function HomePage() {
  return (

    <div>
      <Header />
      <CardHome />
      <AboutMe />
      <JourneyCard />
    </div>
  )
}
