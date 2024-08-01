import React from 'react'
import { Helmet } from 'react-helmet-async';
import ServiceHero from '../ServiceComponents/ServiceHero.jsx'

const Services = () => {
  return (
    <div> 
    <Helmet>
    <title>Usługi</title>
    </Helmet>
    
      <ServiceHero/>
    </div>
    
  )
}

export default Services