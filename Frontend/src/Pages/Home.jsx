import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Quantities from '../Components/Quantities'
import Menu from '../Components/Menu'
import WhoWeAre from '../Components/WhoWeAre'
import Team from '../Components/Team'
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Quantities/>
      <Menu/>
      <WhoWeAre/>
      <Team/>
    </div>
  )
}

export default Home
