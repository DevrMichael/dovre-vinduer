import React from 'react';
import windows from '../data/window.js';
import Image from 'next/image';
import Head from 'next/head';

function Window() {
  return (
    <div>
      <Head>
        <title>Dovre Vinduer | Vinduer</title>
        <meta
          name="description"
          content="Vinduer for alle type fasader."
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
      <div className="window-intro-background">
        <div className="window-intro-section">
          <div className="window-intro-text">
            <h1>Vinduer</h1>
            <p>
              Klikk for å lese mer om de ulike vindustypene vi tilbyr under.
            </p>
          </div>
          <div className="window-intro-image"></div>
        </div>
      </div>
      <div className="window-grid">
        {windows.map((window) => (
          <div key={window.id}>
            <p>{window.title}</p>
            <a href={'/vinduer/' + window.id}>
              <Image src={window.image} alt="window" width={500} height={350} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Window;
