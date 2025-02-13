import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Quantities from '../Components/Quantities'
import Menu from '../Components/Menu'
import WhoWeAre from '../Components/WhoWeAre'
import Team from '../Components/Team'
import Reservation from '../Components/Reservation'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Quantities/>
      <Menu/>
      <WhoWeAre/>
      <Team/>
      <Reservation/>
      <Footer/>
    </div>
  )
}

export default Home
