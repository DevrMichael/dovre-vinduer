import windows from "../window";
import React from 'react';

function InnadslaendeVindu() {
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[2].title}</h2>
          <p>
            {windows[2].content}
          </p>
          <button className="primaryButton">Les Mer</button>
        </div>
        <div className="window-image">
          <img src={windows[2].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default InnadslaendeVindu