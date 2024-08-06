import React from "react";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { TbBuildingEstate } from "react-icons/tb";
import { FaClock } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { MdMeetingRoom } from "react-icons/md";

const ServiceHero = ({onArrowClick}) => {
  return (
    <div className="relative w-full h-[650px] flex flex-col justify-center items-center text-white">
      <div
        className="absolute inset-0 bg-black z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/kuchnia.jpg)`,

          backgroundSize: "cover",

          backgroundPosition: "center",
        }}
      ></div>
      <div className=" absolute text-3xl md:text-6xl font-bold mt-15 mb-4 text-center z-20 text-white">
        <h1>
          Nasze usługi
        </h1>
      </div>
    
      <div className="flex gap-16 md:text-7xl font-bold mt-48  z-20" >
        <PiPersonArmsSpreadFill  onClick={() => onArrowClick(1)}/>
        <TbBuildingEstate onClick={() => onArrowClick(2)}/>
        <FaClock onClick={() => onArrowClick(3)}/>
        <CgSandClock onClick={() => onArrowClick(4)}/>
        <MdMeetingRoom onClick={() => onArrowClick(5)}/>
      </div>



    </div>
  );
};

export default ServiceHero;
