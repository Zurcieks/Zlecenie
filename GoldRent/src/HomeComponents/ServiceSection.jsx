import React from "react";

const ServiceSection = () => {
  return (
    <div className="p-6 lg:p-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Zakres naszych działań
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Kompleksowa Obsługa
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                Zapewniamy pełną opiekę nad nieruchomościami, w tym konserwację,
                modernizację, a także monitorowanie stanu technicznego budynków.
              </li>
              <li>
                Prowadzimy administrację budynków, dbając o wszystkie aspekty
                związane z bieżącym utrzymaniem i funkcjonowaniem nieruchomości.
              </li>
              <li>
                Zarządzamy finansami nieruchomości, w tym windykacją należności,
                opłatami oraz rozliczeniami z dostawcami usług.
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Najem Długoterminowy
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                Aktywnie poszukujemy i weryfikujemy najemców, zapewniając
                odpowiedni dobór lokatorów.
              </li>
              <li>
                Przygotowujemy i nadzorujemy podpisanie umów najmu, dbając o
                interesy właścicieli nieruchomości.
              </li>
              <li>
                Zapewniamy pełne wsparcie dla najemców, rozwiązując wszelkie
                problemy i kwestie związane z wynajmem.
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Najem Krótkoterminowy
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                Zarządzamy rezerwacjami poprzez różne platformy, takie jak
                Airbnb, Booking.com, oraz inne, aby zapewnić maksymalne
                obłożenie.
              </li>
              <li>
                Zapewniamy profesjonalną obsługę gości, w tym check-in,
                check-out oraz wsparcie podczas pobytu.
              </li>
              <li>
                Organizujemy regularne sprzątanie i utrzymanie nieruchomości w
                najwyższym standardzie, aby sprostać oczekiwaniom gości.
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Wynajem Pojedynczych Pokoi
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                Skutecznie promujemy oferty wynajmu pojedynczych pokoi,
                docierając do szerokiego grona potencjalnych najemców.
              </li>
              <li>
                Przeprowadzamy dokładną weryfikację najemców, zapewniając
                bezpieczeństwo i komfort dla wszystkich mieszkańców.
              </li>
              <li>
                Organizujemy i nadzorujemy zasady współdzielenia przestrzeni
                wspólnych, dbając o porządek i harmonię wśród najemców.
              </li>
            </ul>
          </section>
        </div>

        <section className="bg-white text-center font-bold rounded-lg p-8 mt-12">
          <p className="text-xl leading-relaxed text-gray-700">
            GoldRent oferuje kompleksowe zarządzanie nieruchomościami i wynajem,
            zapewniając spokój właścicielom oraz komfort najemcom. Dzięki
            naszemu doświadczeniu i profesjonalizmowi, gwarantujemy
            bezpieczeństwo i wsparcie. Dodatkowo, oferujemy opcję ubezpieczenia
            najmu, co minimalizuje ryzyko szkód i opóźnień w płatnościach.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ServiceSection;
