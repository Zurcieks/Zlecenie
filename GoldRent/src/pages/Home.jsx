import React from 'react'
import HomePageHero from '../HomeComponents/HomePageHero'
import ServiceSection from '../HomeComponents/ServiceSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <HomePageHero/>
        <ServiceSection/>
        <hr/>
        <div>
        <Footer/>
        </div>
       
    </div>
   
    
  )
}

export default Home