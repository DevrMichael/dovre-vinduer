import React from "react";

function AboutUs() {
  return (
    <div className="about-us__container">
      <div className="about-us__intro-background">
        <h1>Om Oss</h1>
        <p>Vår lidenskap er å levere høykvalitets vinduer og dører til alle våre kunder.</p>
      </div>
      <div className="about-us__container-hero">
        <div className="left-hero">
          <h1>Hvem er vi?</h1>
          <p>
          Dovre Vinduer AS er et selskap som selger høykvalitets vinduer og dører tilpasset til kundens behov. Selskapet er etablert av Naeem Siddiqi som har over 30 års erfaring fra bransjen og som har en personlig og engasjerende lidenskap for faget.
          </p>
        </div>
        <div className="about-us__right-hero"></div>
      </div>
      <div className="mini-hero-main">
        <div className="left-mini-hero"></div>
        <div className="right-mini-hero">
          <h2>Vår Visjon</h2>
          <p>
          Det er viktig for oss at alle våre produkter er av kvalitet som holder lenge. I tillegg gir vi våre kunder 20 års garanti på våre vinduer, balkongdører og skyverdører.
          </p>
        </div>
      </div>
      <div className="about-us__container-hero">
        <div className="left-hero">
          <h1>Ta kontakt</h1>
          <p>
            Ta kontakt med oss i dag for mer utfyllende informasjon om våre produkter og tjenester. Send oss en mail ved å klikke <a href="mailto:naeem@dovrevinduer.no">her</a> eller ring oss på tlf nr. 90 76 15 78.
          </p>
        </div>
        <div className="right-hero"></div>
      </div>
    </div>
  );
}

export default AboutUs;
