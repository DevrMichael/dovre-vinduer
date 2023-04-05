import windows from "../data/window";
import React from 'react';
import { useNavigate } from "react-router-dom";

function InnadslaendeVindu() {
  let navigate = useNavigate();
  const redirectInnadslaende= () => {
    let path = `/vinduer/3`;
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[2].title}</h2>
          <p>
            {windows[2].content}
          </p>
          <button className="primaryButton" onClick={redirectInnadslaende}>Les Mer</button>
        </div>
        <div className="window-image">
          <img src={windows[2].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default InnadslaendeVindu