import React from "react";

const HomePageHero = () => {
  return (
    <div className="relative w-full h-[800px] flex flex-col justify-center items-center text-white">
      <div
        className="absolute inset-0 bg-black z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/salon.jpg)`,

          backgroundSize: "cover",

          backgroundPosition: "center",
        }}
      >
      </div>
      <h1 className="text-4xl md:text-6xl  font-bold -mt-44 md:mb-4 md:mt-12 text-center z-20 text-white">
        O nas
      </h1>
      <p className="text-md p-1 md:text-xl mt-3 md:mb-8 text-center  max-w-2xl z-20 text-white">
        GoldRealEstate to lider w zarządzaniu nieruchomościami, oferujący kompleksową
        obsługę właścicieli i najemców. Naszą misją jest dostarczanie najwyższej
        jakości usług, dostosowanych do indywidualnych potrzeb klientów i
        maksymalizowanie zysków z inwestycji. Działamy z pasją i
        profesjonalizmem, zapewniając innowacyjne rozwiązania i pełne wsparcie
        na każdym etapie współpracy.
      </p>
      <a
        href="/Contact"
        className="px-6 py-3 bg-blue-500 mt-4 hover:bg-blue-600 text-white rounded-lg z-20 text-lg font-semibold"
      >
        Skontaktuj się z nami
      </a>
    </div>
  );
};

export default HomePageHero;
