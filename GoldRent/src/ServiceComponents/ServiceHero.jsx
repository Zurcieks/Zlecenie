import React from "react";

const HomePageHero = () => {
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

      <h1 className="text-3xl md:text-6xl font-bold mb-4 text-center z-20 text-white">
        Nasze usługi
      </h1>
    </div>
  );
};

export default HomePageHero;
