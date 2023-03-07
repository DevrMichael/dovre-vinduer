import React from "react";
import windows from "../window.js";

function Window() {
  return (
    <div>
      <div className="door-intro-background">
        <div className="door-intro-section">
          <div className="door-intro-text">
            <h1>Vinduer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam
              reiciendis quo quaerat quas!
            </p>
          </div>
          <div className="window-intro-image"></div>
        </div>
      </div>
      <div className="window-grid">
        {windows.map((window) => (
          <div>
            <p>{window.title}</p>
            <a href={"/vinduer/" + window.id}>
              <img src={window.image} alt="window" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Window;
