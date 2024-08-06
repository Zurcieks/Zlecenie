import React from "react";
import { FaBuilding } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { RxHome } from "react-icons/rx";
import ForInvestorsTile from "./ForInvestorsTile";

const ForInvestorsText = () => {
  return (
    <div id="benefits-section" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Korzyści dla inwestorów
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          GoldRent oferuje kompleksowe usługi dla inwestorów w branży
          nieruchomości, obejmujące cały proces inwestycyjny: od wyszukiwania
          okazji inwestycyjnych, poprzez zarządzanie nieruchomościami, aż po
          wynajem lub dalszą sprzedaż. Naszym celem jest zapewnienie inwestorom
          maksymalnych zysków przy minimalnym zaangażowaniu z ich strony.
        </p>
        <p className="mt-4 text-lg text-gray-500">
          <strong className="text-black">GoldRent</strong> to partner, na
          którego możesz liczyć na każdym etapie inwestycji w nieruchomości.
          Dzięki naszemu doświadczeniu, profesjonalizmowi i indywidualnemu
          podejściu, pomagamy inwestorom osiągać ich cele finansowe i
          maksymalizować zyski z posiadanych nieruchomości
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 lg:mt-16">
          <ForInvestorsTile Icon={FaBuilding} title="Wyszukiwanie okazji inwestycyjnych">
            Monitorowanie rynku nieruchomości w celu identyfikacji najbardziej
            opłacalnych inwestycji, z uwzględnieniem lokalizacji, trendów
            rynkowych oraz potencjalnego zwrotu z inwestycji, wyszukiwanie
            nieruchomości o wysokim potencjale inwestycyjnym na rynku pierwotnym
            i wtórnym, a także oferowanie kompleksowych analiz finansowych i
            doradztwa w zakresie wyboru najkorzystniejszych opcji
            inwestycyjnych.
          </ForInvestorsTile>
          <ForInvestorsTile Icon={FaHandshake} title="Nadzór procesu budowlano-inwestycyjnego">
            Regularne przeglądy techniczne, naprawy oraz modernizacje, aby
            nieruchomości były zawsze w najlepszym stanie i generowały
            maksymalne zyski.
          </ForInvestorsTile>
          <ForInvestorsTile Icon={RxHome} title="Homestaging">
            Przygotowanie nieruchomości do sprzedaży poprzez modernizację i
            staging w celu zwiększenia jej wartości rynkowej, aktywna promocja
            nieruchomości z profesjonalnymi materiałami marketingowymi oraz
            organizacja dni otwartych, a także prowadzenie negocjacji,
            przygotowanie dokumentacji i finalizacja transakcji sprzedaży.
          </ForInvestorsTile>
        </div>
      </div>
    </div>
  );
};

export default ForInvestorsText;
