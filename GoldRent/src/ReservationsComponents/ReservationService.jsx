import React from "react";
import { IoIosBuild } from "react-icons/io";

const ReservationService = () => {
  return (
    <div className=" w-full h-[300px] flex flex-col md:mx-auto items-center my-28 px-4 md:px-0">
        <h1 className="text-4xl p-5 md:mt-12 font-bold">
          Strona jest w trakcie realizacji!
        </h1>
        <div className="absolute mt-10 md:mt-36">
        <IoIosBuild className=" mt-24      md:mt-0 md:text-7xl text-7xl mx-auto"/>
        </div>
         

    </div>
  );
};

export default ReservationService;
