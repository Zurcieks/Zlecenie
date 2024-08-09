import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbClockHour7Filled } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { FaRestroom } from "react-icons/fa";
import { PiBuildings } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";
import ForInvestorsTile from "../ForInvestorsComponents/ForInvestorsTile";

const OwnerServices = () => {
  return (
    <div id="devSection" className="bg-gray-50 py-12">
      <div className="mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Usługi dla właścicieli
        </h2>
        <p className="font-semibold mt-4 text-lg text-gray-500">
        GoldRealEstate oferuje deweloperom kompleksowe usługi zarządzania
          nieruchomościami, które mogą zostać włączone do oferty sprzedażowej
          dla kupujących mieszkania i lokale komercyjne. Nasze rozwiązania
          obejmują zarządzanie najmem długoterminowym, krótkoterminowym, wynajem
          pojedynczych pokoi oraz wynajem lokali komercyjnych. Dzięki naszym
          usługom, deweloperzy mogą zwiększyć atrakcyjność swojej oferty,
          zapewniając klientom pełne wsparcie w zarządzaniu ich nowymi
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          <ForInvestorsTile
            Icon={FaPeopleGroup}
            title="Wyszukiwanie Najemców"
          >
            Skuteczna promocja mieszkań na popularnych platformach wynajmu i w
            mediach społecznościowych jest kluczowa dla dotarcia do szerokiego
            grona potencjalnych najemców. Równocześnie ważne jest
            przeprowadzenie dokładnej weryfikacji kandydatów, aby zapewnić
            bezpieczny i stabilny najem.
          </ForInvestorsTile>
          <ForInvestorsTile Icon={LuCalendarClock} title="Najem Długoterminowy">
            Profesjonalne przygotowanie umów najmu, negocjowanie warunków oraz
            monitorowanie ich przestrzegania, połączone z całodobowym wsparciem
            dla najemców, szybką reakcją na zgłoszenia awarii i regularnym
            monitorowaniem oraz egzekwowaniem płatności czynszu, zapewniają
            stabilny dochód z wynajmu oraz wysoką jakość obsługi najemców.
          </ForInvestorsTile>
          <ForInvestorsTile Icon={TbClockHour7Filled} title="Najem krótkoterminowy">
            Zarządzanie rezerwacjami na platformach takich jak Airbnb i
            Booking.com oraz profesjonalna obsługa gości, w tym check-in,
            check-out i całodobowe wsparcie podczas pobytu, są kluczowe dla
            zapewnienia wysokiego obłożenia i maksymalizacji przychodów.
            Regularne sprzątanie oraz dbanie o stan techniczny i estetyczny
            mieszkań utrzymuje wysokie standardy, spełniając oczekiwania gości.
          </ForInvestorsTile>
          <ForInvestorsTile
            Icon={FaRestroom}
            title="Wynajem Pojedynczych Pokoi"
          >
            Selekcja najemców gwarantuje komfort i bezpieczeństwo, zarządzanie
            przestrzeniami wspólnymi zapewnia porządek i organizację, a obsługa
            administracyjna obejmuje umowy, płatności i rozwiązywanie problemów.
          </ForInvestorsTile>
          <ForInvestorsTile
            Icon={PiBuildings}
            title="Najem Nieruchomości Komercyjnych"
          >
            Analiza rynku nieruchomości komercyjnych pozwala znaleźć najlepsze
            oferty wynajmu, a weryfikacja najemców zapewnia stabilne umowy.
            Przygotowywanie i nadzorowanie umów oraz doradztwo w zakresie
            optymalizacji przestrzeni zwiększa funkcjonalność i wartość rynkową
            nieruchomości.
          </ForInvestorsTile>
          <ForInvestorsTile
            Icon={IoPersonSharp}
            title="Monitorowanie Satysfakcji Gości"
          >
            Regularne zbieranie opinii od gości, aby monitorować ich zadowolenie
            oraz identyfikować obszary do poprawy, co pozwala na ciągłe
            doskonalenie oferty i usług.
          </ForInvestorsTile>
        </div>
        <p className="mt-6  text-lg text-gray-500">
          <strong className="text-black">GoldRealEstate</strong> to zaufany partner
          dla deweloperów, który pomaga zwiększyć atrakcyjność oferty
          sprzedażowej i zapewnia pełne wsparcie dla nowych właścicieli mieszkań
          i lokali komercyjnych. Dzięki naszym usługom, deweloperzy mogą
          wyróżnić się na rynku, a ich klienci mogą cieszyć się bezproblemowym
          zarządzaniem swoimi nieruchomościami.
        </p>
      </div>
    </div>
  );
};

export default OwnerServices;
