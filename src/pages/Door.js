import React from "react";
import doors from "../door.js";

function Door() {
  return (
    <div>
      <div className="door-intro-background">
        <div className="door-intro-section">
          <div className="door-intro-text">
            <h1>Dører</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam
              reiciendis quo quaerat quas!
            </p>
          </div>
          <div className="door-intro-image"></div>
        </div>
      </div>
      <div className="door-grid">
        {doors.map((door) => (
          <a href={'/dorer/' + door.id}>
            <img src={door.image} alt="door"/>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Door;
