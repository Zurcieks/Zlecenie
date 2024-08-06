import React from "react";
import { RxHome } from "react-icons/rx";
import { AiFillCustomerService } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";

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
          <div className="bg-white shadow-lg rounded-lg p-6">
            <MdLocalOffer className="mx-auto size-8" />
            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Atrakcyjność oferty
            </h3>
            <p className="mt-4 text-gray-500">
              Włączenie usług zarządzania nieruchomościami do oferty
              sprzedażowej podnosi jej wartość i przyciąga potencjalnych
              nabywców.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <AiFillCustomerService className="mx-auto size-8" />
            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Spokój i Wygoda dla Klientów
            </h3>
            <p className="mt-4 text-gray-500">
              Kupujący mogą liczyć na pełne wsparcie w zarządzaniu ich nowymi
              nieruchomościami, co zwiększa ich zadowolenie i lojalność.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <MdManageSearch className="mx-auto size-8" />
            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Profesjonalne Zarządzanie
            </h3>
            <p className="mt-4 text-gray-500">
              Doświadczenie i profesjonalizm Perfect Property Management
              zapewniają wysoki standard obsługi i minimalizację ryzyka
              związanego z wynajmem.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <TbMoneybag className="mx-auto size-8" />
            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Zwiększenie Wartości Inwestycji
            </h3>
            <p className="mt-4 text-gray-500">
              Efektywne zarządzanie nieruchomościami przekłada się na wyższe
              przychody z wynajmu i wzrost wartości nieruchomości.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <BiPhone className="mx-auto size-8" />
            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Kompleksowa Obsługa
            </h3>
            <p className="mt-4 text-gray-500">
              Deweloperzy mogą oferować swoim klientom kompleksowe rozwiązania,
              obejmujące wszystkie aspekty zarządzania nieruchomościami.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <IoPersonSharp className="mx-auto size-8" />
            <h3 className="mt-6 text-xl font-bold text-gray-900">
              Elastyczność Usług
            </h3>
            <p className="mt-4 text-gray-500">
              Dostosowywanie zakresu usług do indywidualnych potrzeb i oczekiwań
              klientów pozwala na lepsze zaspokojenie ich wymagań i zapewnia
              większą satysfakcję.
            </p>
          </div>
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
