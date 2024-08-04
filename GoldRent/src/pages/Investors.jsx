import React from "react";
import { Helmet } from "react-helmet-async";
import ForInvestorsHero from "../ForInvestorsComponents/ForInvestorsHero";
import ForInvestorsText from "../ForInvestorsComponents/ForInvestorsText";

const Investors = () => {
  const handleArrowClick = () => {
    const section = document.getElementById("benefits-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Dla inwestorów</title>
      </Helmet>
      <ForInvestorsHero onArrowClick={handleArrowClick} />
      <ForInvestorsText />
    </div>
  );
};

export default Investors;
