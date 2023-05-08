import React from 'react';
import Head from 'next/head';

function GiljeSense() {
  return (
    <div className="gilje-sense__container">
      <Head>
        <title>Dovre Vinduer | Gilje Sense</title>
        <meta
          name="description"
          content="Gilje Sense gir deg full kontroll over dine dører og vinduer."
          key="desc"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FCK1NSGY19"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-FCK1NSGY19');
        </script>
      </Head>
      <div className="gilje-sense-intro-background">
        <div className="gilje-sense-intro-section">
          <div className="gilje-sense-intro-text">
            <h1>Gilje Sense</h1>
            <p>
              Gilje Sense lar deg ha full kontroll over dine dører og vinduer
              fra din mobiltelefon.
            </p>
          </div>
          <div className="gilje-sense_intro-image"></div>
        </div>
      </div>
      <div className="gilje-sense__container-hero">
        <div className="left-hero">
          <h1>Hva er Gilje Sense?</h1>
          <p>
            Vi tilbyr Gilje Sense som gjør at du har full kontroll over dine
            dører og vinduer fra en enkel app på mobiltelefonen din. Appen
            sjekker om alle dine dører og vinduer er lukket og låst. <br />{' '}
            <br />
            Gilje Sense gir deg en indre rohet om at hjemmet ditt er trygt når
            du er på butikken, jobb eller på reise. <br /> <br />
            Kontakt oss for mer utfyllende informasjon.
          </p>
        </div>
        <div className="gilje-sense__container__right-hero">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/238541686?h=feab716ecf"
            width="640"
            height="360"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GiljeSense;
