import React from 'react'
import DevHero from '../DeveloperComponents/DevHero'
import { Helmet } from 'react-helmet-async'
import DevSections from '../DeveloperComponents/DevSections'

const Developers = () => {
    const handleArrowClick = () => {
        const section = document.getElementById("devSection");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div>
    <Helmet>
      <title>Dla deweloperów</title>
    </Helmet>
     <DevHero onArrowClick={handleArrowClick}/>
     <DevSections/>

  </div>
  )
}

export default Developers