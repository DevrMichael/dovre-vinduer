import React from 'react';
import windows from "../data/window";
import { useNavigate } from 'react-router-dom';

function ToppsvingVindu() {
  let navigate = useNavigate();
  const redirectToppsving= () => {
    let path = `/vinduer/5`;
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[4].title}</h2>
          <p>
            {windows[4].content}
          </p>
          <button className="primaryButton" onClick={redirectToppsving}>Les Mer</button>
        </div>
        <div className="window-image">
          <img src={windows[4].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ToppsvingVindu