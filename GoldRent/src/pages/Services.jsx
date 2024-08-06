import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceHero from "../ServiceComponents/ServiceHero.jsx";
import ServiceSection from "../ServiceComponents/ServiceSection.jsx";
import obrazek3 from "/obrazek3.jpg";
import obrazek4 from "/obrazek4.jpg";
import obrazek5 from "/obrazek5.jpg";
import obrazek6 from "/obrazek6.jpg";
import obrazek7 from "/obrazek7.jpg";
import ServiceSectionReverse from "../ServiceComponents/ServiceSectionRevers.jsx";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Usługi</title>
      </Helmet>

      <ServiceHero />
      <div className="flex flex-col justify-center items-center my-24 md:space-y-0">
        <ServiceSection title="Opis klienta" image={obrazek3}>
          Nasi klienci, zarówno indywidualni właściciele nieruchomości, jak i
          inwestorzy oraz firmy, cenią sobie bezpieczeństwo i spokój ducha,
          maksymalizację zysków, profesjonalizm i rzetelność, a także osobisty i
          profesjonalny kontakt. Chcą mieć pewność, że ich nieruchomości są
          odpowiednio zarządzane, przynoszą maksymalne dochody i że mają stały
          kontakt z kompetentnymi menedżerami nieruchomości
        </ServiceSection>
        <ServiceSectionReverse
          title="Zarządzanie nieruchomościami"
          image={obrazek4}
        >
          Oferujemy kompleksowe usługi w zakresie poszukiwania i weryfikacji
          najemców, zarządzania umowami oraz ich obsługi. Znajdujemy najemców,
          sprawdzamy ich wiarygodność, przeprowadzamy selekcję, a także
          przygotowujemy, negocjujemy i nadzorujemy umowy najmu. Zapewniamy
          codzienne wsparcie, szybko reagując na zgłoszenia awarii i inne
          problemy.
        </ServiceSectionReverse>
        <ServiceSection title="Najem długoterminowy" image={obrazek5}>
          Świadczymy kompleksową obsługę nieruchomości, obejmującą konserwację,
          modernizację, administrację oraz finanse. Regularnie przeprowadzamy
          przeglądy techniczne, naprawy i modernizacje. Zarządzamy dokumentacją,
          korespondencją i administracją, a także prowadzimy pełną księgowość, w
          tym rozliczenia z dostawcami i monitorowanie płatności czynszowych.
        </ServiceSection>
        <ServiceSectionReverse title="Najem krótkoterminowy" image={obrazek6}>
          Zarządzamy rezerwacjami i aktywnie promujemy nieruchomości, aby
          zapewnić wysokie obłożenie. Zapewniamy profesjonalne przywitanie
          gości, check-in, check-out oraz całodobowe wsparcie podczas ich
          pobytu. Regularnie sprzątamy i dbamy o stan techniczny oraz estetyczny
          nieruchomości, aby spełniać oczekiwania gości.
        </ServiceSectionReverse>
        <ServiceSection title="Wynajem pojedynczych pokoi" image={obrazek7}>
          Oferujemy wynajem pojedynczych pokoi, weryfikujemy najemców i dbamy o
          dobrą atmosferę wśród lokatorów. Nadzorujemy przestrzenie wspólne,
          ustalamy zasady współnego życia, zapewniamy porządek i bezpieczeństwo.
          Prowadzimy umowy najmu, monitorujemy płatności i rozwiązujemy problemy
          zgłaszane przez najemców.
        </ServiceSection>
      </div>
    </div>
  );
};

export default Services;
