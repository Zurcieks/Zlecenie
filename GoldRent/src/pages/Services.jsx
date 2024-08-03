import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceHero from "../ServiceComponents/ServiceHero.jsx";
import ServiceSection from "../ServiceComponents/ServiceSection.jsx";
import obrazek1 from "/obrazek3.jpg";
import ServiceSectionReverse from "../ServiceComponents/ServiceSectionRevers.jsx";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Usługi</title>
      </Helmet>

      <ServiceHero />
      <div className="flex flex-col justify-center items-center space-y-24 my-24 xl:space-y-16">
        <ServiceSection title="Opis klienta" image={obrazek1}>
          Nasi klienci, zarówno indywidualni właściciele nieruchomości, jak i
          inwestorzy oraz firmy, cenią sobie bezpieczeństwo i spokój ducha,
          maksymalizację zysków, profesjonalizm i rzetelność, a także osobisty i
          profesjonalny kontakt. Chcą mieć pewność, że ich nieruchomości są
          odpowiednio zarządzane, przynoszą maksymalne dochody i że mają stały
          kontakt z kompetentnymi menedżerami nieruchomości
        </ServiceSection>
        <ServiceSectionReverse
          title="Zarządzanie nieruchomościami"
          image={obrazek1}
        >
          Oferujemy pełne usługi związane z poszukiwaniem i weryfikacją
          najemców, zarządzaniem umowami oraz obsługą najemców. Aktywnie
          poszukujemy najemców, dokładnie sprawdzamy ich wiarygodność i
          przeprowadzamy proces selekcji. Zajmujemy się przygotowywaniem,
          negocjowaniem i nadzorowaniem umów najmu oraz dbamy o ich przedłużenie
          lub rozwiązanie. Zapewniamy codzienne wsparcie najemców, rozwiązujemy
          problemy i szybko reagujemy na zgłoszenia awarii oraz inne kwestie.
        </ServiceSectionReverse>
        <ServiceSection title="Najem długoterminowy" image={obrazek1}>
          Świadczymy pełną obsługę nieruchomości, obejmującą konserwację i
          modernizację, administrację oraz finanse i rozliczenia. Dbamy o
          regularne przeglądy techniczne, naprawy oraz modernizacje, aby
          utrzymać nieruchomości w najlepszym stanie. Zarządzamy dokumentacją,
          prowadzimy korespondencję i nadzorujemy operacje administracyjne.
          Oferujemy pełną księgowość, w tym rozliczenia z dostawcami usług i
          monitorowanie płatności czynszowych.
        </ServiceSection>
        <ServiceSectionReverse title="Najem krótkoterminowy" image={obrazek1}>
          gsddgs
        </ServiceSectionReverse>
        <ServiceSection title="Wynajem pojedynczych pokoi" image={obrazek1}>
          gsddgs
        </ServiceSection>
      </div>
    </div>
  );
};

export default Services;
