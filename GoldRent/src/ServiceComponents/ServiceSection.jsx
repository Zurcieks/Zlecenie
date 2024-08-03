import React from "react";
import obraz from "/obrazek3.jpg";

const ServiceSection = () => {
  return (
    <div className="flex bg-white  mx-6 mt-28">
      <div className="w-[100px] h-[1000px]">
      <div className="space-y-5">
        <h1 className="text-4xl">Opis klienta</h1>
        <p className="max-w-[600px]">
          Nasi klienci, zarówno indywidualni właściciele nieruchomości, jak i
          inwestorzy oraz firmy, poszukują profesjonalnej obsługi zarządzania
          nieruchomościami. Cenią sobie bezpieczeństwo i spokój ducha, mając
          pewność, że ich nieruchomości są w dobrych rękach. Oczekują
          maksymalizacji zysków poprzez efektywne zarządzanie wynajmem, a także
          profesjonalizmu i rzetelności w wykonywaniu działań. Doceniają
          indywidualne podejście i stały kontakt z menedżerami nieruchomości.
        </p>
      </div>
      <div
        className="w-48 h-48"
        style={{
          backgroundImage: `url(${obraz})`,
          backgroundSize: "cover",
        }}
      ></div>
      </div>
    </div>
  );
};

export default ServiceSection;
