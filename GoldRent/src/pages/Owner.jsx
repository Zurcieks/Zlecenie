import React from 'react'
import { Helmet } from 'react-helmet-async'
import OwnerHero from '../OwnerComponents/OwnerHero.jsx'
import OwnerServices from '../OwnerComponents/OwnerServices.jsx'

const Owner = () => {
    const handleArrowClick = () => {
        const section = document.getElementById("devSection");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div>
        <Helmet>
            <title>Dla właścicieli</title>
        </Helmet>
        <OwnerHero onArrowClick={handleArrowClick}/>
        <OwnerServices/>
    </div>
  )
}

export default Owner