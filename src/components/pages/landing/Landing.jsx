import React from 'react'
import Header from '../../partials/header/Header'
import Footer from '../../partials/footer/Footer'
import HeroSection from './LandingSections/HeroSection'
import CategorySection from './LandingSections/CategorySection'

const Landing = () => {
  return (
    <div className='bg-[#F7F7F7]'>
      {/* <Header/> */}
      <HeroSection/>
      <CategorySection/>
      {/* <Footer/> */}
    </div>
  )
}

export default Landing
