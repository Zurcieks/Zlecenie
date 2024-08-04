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
          Oferujemy pełne usługi związane z poszukiwaniem i weryfikacją
          najemców, zarządzaniem umowami oraz obsługą najemców. Aktywnie
          poszukujemy najemców, dokładnie sprawdzamy ich wiarygodność i
          przeprowadzamy proces selekcji. Zajmujemy się przygotowywaniem,
          negocjowaniem i nadzorowaniem umów najmu oraz dbamy o ich przedłużenie
          lub rozwiązanie. Zapewniamy codzienne wsparcie najemców, rozwiązujemy
          problemy i szybko reagujemy na zgłoszenia awarii oraz inne kwestie.
        </ServiceSectionReverse>
        <ServiceSection title="Najem długoterminowy" image={obrazek5}>
          Świadczymy pełną obsługę nieruchomości, obejmującą konserwację i
          modernizację, administrację oraz finanse i rozliczenia. Dbamy o
          regularne przeglądy techniczne, naprawy oraz modernizacje, aby
          utrzymać nieruchomości w najlepszym stanie. Zarządzamy dokumentacją,
          prowadzimy korespondencję i nadzorujemy operacje administracyjne.
          Oferujemy pełną księgowość, w tym rozliczenia z dostawcami usług i
          monitorowanie płatności czynszowych.
        </ServiceSection>
        <ServiceSectionReverse title="Najem krótkoterminowy" image={obrazek6}>
          Zarządzamy rezerwacjami i aktywnie promujemy nieruchomości, aby
          zapewnić wysokie obłożenie. Zapewniamy profesjonalne przywitanie
          gości, check-in, check-out oraz całodobowe wsparcie podczas ich
          pobytu. Regularnie sprzątamy i dbamy o stan techniczny oraz estetyczny
          nieruchomości, aby spełniać oczekiwania gości.
        </ServiceSectionReverse>
        <ServiceSection title="Wynajem pojedynczych pokoi" image={obrazek7}>
          Promujemy oferty wynajmu pojedynczych pokoi, weryfikujemy najemców i
          dbamy o odpowiednią atmosferę wśród lokatorów. Organizujemy i
          nadzorujemy przestrzenie wspólne, ustalamy zasady współżycia oraz
          dbamy o porządek i bezpieczeństwo. Prowadzimy umowy najmu,
          monitorujemy płatności i rozwiązujemy wszelkie problemy zgłaszane
          przez najemców.
        </ServiceSection>
      </div>
    </div>
  );
};

export default Services;
