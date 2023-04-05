import windows from "../data/window";
import React from 'react';
import { useNavigate } from "react-router-dom";

function ToppSidehengsletVindu() {
  let navigate = useNavigate();
  const redirectToppSidehengslet= () => {
    let path = `/vinduer/1`;
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[0].title}</h2>
          <p>
            {windows[0].content}
          </p>
          <button className="primaryButton" onClick={redirectToppSidehengslet}>Les Mer</button>
        </div>
        <div className="window-image">
          <img src={windows[0].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ToppSidehengsletVindu