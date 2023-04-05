import React from "react";
import doors from "../data/door.js";

function Door() {
  return (
    <div>
      <div className="door-intro-background">
        <div className="door-intro-section">
          <div className="door-intro-text">
            <h1>Dører</h1>
            <p>
              Vi har over 50 ulike dørstyper av høy kvalitet. Klikk på dørene under for å få mer informasjon.
            </p>
          </div>
          <div className="door-intro-image"></div>
        </div>
      </div>
      <div className="door-grid">
        {doors.map((door) => (
          <a key={door.id} href={'/dorer/' + door.id}>
            <img src={door.image} alt="door"/>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Door;
