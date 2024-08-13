
import Advantage from '../components/Advantage'
import BannerBottom from '../components/BannerBottom'
import Consultancy from '../components/Consultancy'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import TypesOfSolar from '../components/TypesOfSolar'

const Homepage = () => {
  return (
    <div className=''>
      <Header />
      <Hero />
      <TypesOfSolar />
      <Advantage />
      <Projects />
      <Consultancy />
      <BannerBottom />
      <Footer />
    </div>

  )
}

export default Homepage