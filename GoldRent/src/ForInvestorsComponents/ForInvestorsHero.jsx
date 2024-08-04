import React from "react";
import { FaArrowDown } from "react-icons/fa";

const ForInvestorsHero = ({ onArrowClick }) => {
  return (
    <div className="relative w-full h-[650px] flex flex-col justify-center items-center text-white">
      <div
        className="absolute inset-0 bg-black z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Investors.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-4 text-center z-20 text-white">
        Usługi dla inwestorów
        <FaArrowDown
          className="text-white size-16 mt-10 md:size-16  mx-auto md:mt-20 cursor-pointer"
          onClick={onArrowClick}
        />
      </h1>
      
    </div>
  );
};

export default ForInvestorsHero;
