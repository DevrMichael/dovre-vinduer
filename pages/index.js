import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Slider } from '../components/Slider';
import slides from '../data/door.js';
import Windows from '../components/WindowsComponent';
import Head from 'next/head';

function Home() {
  const router = useRouter();

  const redirectGilje = () => {
    let path = `/giljesense`;
    router.push(path);
    window.scrollTo(0, 0);
  };

  const redirectVinduer = () => {
    let path = `/vinduer`;
    router.push(path);
    window.scrollTo(0, 0);
  };

  const redirectDorer = () => {
    let path = `/dorer`;
    router.push(path);
    window.scrollTo(0, 0);
  };
  // const redirectKontakt = () => {
  //   let path = `/kontakt`;
  //   navigate(path);
  //   window.scrollTo(0, 0);
  // };
  return (
    <div>
      <Head>
        <title>Dovre Vinduer</title>
        <meta
          name="description"
          content="Vinduer og dører av høy kvalitet."
          key="desc"
        />
      </Head>
      <div className="hero">
        <div className="left-hero">
          <h1>Vinduer og Dører som Forvandler Hjemmet Ditt</h1>
          <p>
            Valg av riktige dører og vinduer kan være avgjørende for hjemmets
            komfort, sikkerhet, og livskvalitet. La oss være din guide til et
            bedre hjem.
          </p>
          {/* <button className="primaryButton" onClick={redirectKontakt}>Kontakt Oss</button> */}
        </div>
        <div className="right-hero"></div>
      </div>
      <div className="features-background">
        <div className="features">
          <div className="top-features">
            <h2>Vi tilbyr</h2>
            <p>
              Vi leverer et omfattende utvalg av høykvalitets dører og vinduer
              tilpasset ulike arkitektoniske behov og estetiske preferanser.
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
              Med over 30 års erfaring i bransjen hjelper vi deg med å
              skreddersy løsninger tilpasset deg, og dine prosjekters behov. Vi
              tilbyr et bredt utvalg av vinduer og dører som passer for alle og
              enhver.
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
      {/* <div className="window-container-header">
        <FontAwesomeIcon icon={faInfoCircle} /> <br />
        <p>
          Visste du at du kan spare stort på strømregningen KUN ved å bytte ut
          enkelte av dine vinduer?
        </p>
      </div> */}
      <Windows />
      <div className="slider-container">
        <h2>Dører</h2>
        <Slider slides={slides} />
      </div>
      {/* <div className="showroom-container">
        <div className="showroom-hero">
          <div className="left-showroom">
            <h1>Vårt Showroom</h1>
            <p>Vårt showroom er lokalisert sentralt i Lørenskog.</p>
          </div>
          <div className="right-showroom">
            <div className="homepage-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7999.16456601887!2d10.963038206870166!3d59.919013545974245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464164c394b6a437%3A0x88feb36d7b578051!2zU8O4cmxpLCAxNDczIEzDuHJlbnNrb2csIE5vcmdl!5e0!3m2!1sno!2sus!4v1679138144514!5m2!1sno!2sus"
                title="map"
                width="600"
                height="500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
