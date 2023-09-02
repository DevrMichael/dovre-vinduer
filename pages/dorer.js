import React from 'react';
import doors from '../data/door.js';
import Image from 'next/image';
import Head from 'next/head.js';

function Door() {
  return (
    <div>
      <Head>
        <title>Dovre Vinduer | Dører</title>
        <meta
          name="description"
          content="Vårt utvalg består av over 50 unike dører."
          key="desc"
        />
      </Head>
      <div className="door-intro-background">
        <div className="door-intro-section">
          <div className="door-intro-text">
            <h1>Dører</h1>
            <p>
              Vi har over 50 ulike dørstyper av høy kvalitet. Klikk på dørene
              under for å få mer informasjon.
            </p>
          </div>
          <div className="door-intro-image"></div>
        </div>
      </div>
      <div className="door-grid">
        {doors.map((door) => (
          <a key={door.id} href={'/dorer/' + door.id} className="single-door">
            <h3>{door.title}</h3>
            <Image src={door.image} alt="door" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Door;
