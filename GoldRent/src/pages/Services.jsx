import React from 'react'
import { Helmet } from 'react-helmet-async';
import ServiceHero from '../ServiceComponents/ServiceHero.jsx'
import  ServiceSection  from '../ServiceComponents/ServiceSection.jsx';


const Services = () => {
  return (
    <div> 
    <Helmet>
    <title>Usługi</title>
    </Helmet>
    
      <ServiceHero/>
      <ServiceSection/>

    </div>
    
  )
}

export default Services