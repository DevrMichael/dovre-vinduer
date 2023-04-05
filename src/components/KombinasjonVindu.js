import windows from "../data/window";
import React from 'react';
import { useNavigate } from "react-router-dom";

function KombinasjonVindu() {
  let navigate = useNavigate();
  const redirectKombinasjon= () => {
    let path = `/vinduer/6`;
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[5].title}</h2>
          <p>
            {windows[5].content}
          </p>
          <button className="primaryButton" onClick={redirectKombinasjon}>Les Mer</button>
        </div>
        <div className="window-image">
          <img src={windows[5].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default KombinasjonVindu