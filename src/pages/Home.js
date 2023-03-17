import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Slider } from "../slider";
import slides from "../door";
import Windows from "../pages/Windows";

function Home() {
  let navigate = useNavigate();
  const redirectGilje = () => {
    let path = `/omoss`;
    navigate(path);
    window.scrollTo(0, 0);
  };
  const redirectVinduer = () => {
    let path = `/vinduer`;
    navigate(path);
    window.scrollTo(0, 0);
  };
  const redirectDorer = () => {
    let path = `/dorer`;
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="hero">
        <div className="left-hero">
          <h1>Find the best fashion style for you</h1>
          <p>
          Riktig valg av dører og vinduer til hjemmet spiller en essensiell rolle i øking av trivsel, trygghet og velvære. Der kan vi hjelpe deg.
          </p>
          <button className="primaryButton">CTA Button</button>
        </div>
        <div className="right-hero"></div>
      </div>
      <div className="features-background">
        <div className="features">
          <div className="top-features">
            <h2>Vi tilbyr</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem optio, porro deleniti earum dolore asperiores?
            </p>
          </div>
          <div className="bottom-features">
            <div>
              <button className="secondaryButton" onClick={redirectVinduer}>
                Vinduer
              </button>
            </div>
            <div>
              <button className="secondaryButton" onClick={redirectDorer}>
                Dører
              </button>
            </div>
            <div>
              <button className="secondaryButton" onClick={redirectGilje}>
                Gilje Sense
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mini-hero">
        <div className="mini-hero-main">
          <div className="left-mini-hero"></div>
          <div className="right-mini-hero">
            <h2>Hvem er vi?</h2>
            <p>
              Med over 30 års erfaring i bransjen hjelper vi deg med å skreddersy løsninger
              tilpasset deg, og dine prosjekters behov. Vi tilbyr et bredt utvalg av vinduer og dører som passer for alle og enhver.
            </p>
          </div>
        </div>
        <div className="mini-hero-overflow-div">
          <div>
            <h3>30+</h3>
            <p>års erfaring i bransjen</p>
          </div>
          <div>
            <h3>6</h3>
            <p>vindustyper for alle fasader</p>
          </div>
          <div>
            <h3>50+</h3>
            <p>unike dører</p>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <h2>Dører</h2>
        <Slider slides={slides} />
      </div>
      <div className="window-container-header">
        <p>
        Visste du at du kan spare stort på strømregningen KUN ved å bytte ut enkelte av dine vinduer?
        </p>
      </div>
      <Windows />
      <div className="showroom-container">
        <div className="hero">
          <div className="left-showroom">
            <h1>Vårt Showroom</h1>
            <p>Vårt showroom er lokalisert sentralt i Lørenskog.</p>
          </div>
          <div className="right-showroom">
            <div className="homepage-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.9098922821365!2d10.72518285207197!3d59.91704278177933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd779ba357b%3A0x677038c9acc2591c!2sDet%20kongelige%20slott!5e0!3m2!1sno!2sno!4v1677587198537!5m2!1sno!2sno"
                title="map"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
