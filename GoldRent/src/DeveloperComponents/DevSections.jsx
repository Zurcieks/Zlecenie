import React from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import ForInvestorsTile from "../ForInvestorsComponents/ForInvestorsTile";

const ForInvestorsText = () => {
  return (
    <div id="devSection" className="bg-gray-50 py-12">
      <div className="mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Oferty dla deweloperów
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          GoldRent oferuje deweloperom kompleksowe usługi zarządzania
          nieruchomościami, które mogą zostać włączone do oferty sprzedażowej
          dla kupujących mieszkania i lokale komercyjne. Nasze rozwiązania
          obejmują zarządzanie najmem długoterminowym, krótkoterminowym, wynajem
          pojedynczych pokoi oraz wynajem lokali komercyjnych. Dzięki naszym
          usługom, deweloperzy mogą zwiększyć atrakcyjność swojej oferty,
          zapewniając klientom pełne wsparcie w zarządzaniu ich nowymi
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900">
          Korzyści dla deweloperów i ich klientów:
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          <ForInvestorsTile
            Icon={AiFillCustomerService}
            title="Atrakcyjnośc ofert"
          >
            Włączenie usług zarządzania nieruchomościami do oferty sprzedażowej
            podnosi jej wartość i przyciąga potencjalnych nabywców.
          </ForInvestorsTile>
          <ForInvestorsTile
            Icon={MdLocalOffer}
            title="Spokój i Wygoda dla Klientów"
          >
            Kupujący mogą liczyć na pełne wsparcie w zarządzaniu ich nowymi
            nieruchomościami, co zwiększa ich zadowolenie i lojalność.
          </ForInvestorsTile>
          <ForInvestorsTile
            Icon={MdManageSearch}
            title="Profesjonalne zarządzanie"
          >
            Doświadczenie i profesjonalizm Perfect Property Management
            zapewniają wysoki standard obsługi i minimalizację ryzyka związanego
            z wynajmem.
          </ForInvestorsTile>
          <ForInvestorsTile
            Icon={TbMoneybag}
            title="Zwiększenie Wartości Inwestycji"
          >
            Efektywne zarządzanie nieruchomościami przekłada się na wyższe
            przychody z wynajmu i wzrost wartości nieruchomości.
          </ForInvestorsTile>
          <ForInvestorsTile Icon={BiPhone} title="Kompleksowa Obsługa">
            Deweloperzy mogą oferować swoim klientom kompleksowe rozwiązania,
            obejmujące wszystkie aspekty zarządzania nieruchomościami.
          </ForInvestorsTile>
          <ForInvestorsTile Icon={IoPersonSharp} title="Elastyczność Usług">
            Dostosowywanie zakresu usług do indywidualnych potrzeb i oczekiwań
            klientów pozwala na lepsze zaspokojenie ich wymagań i zapewnia
            większą satysfakcję.
          </ForInvestorsTile>

  
        </div>
        <p className="mt-6 text-lg text-gray-500">
          <strong className="text-black">GoldRent</strong> to zaufany partner
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

export default ForInvestorsText;
