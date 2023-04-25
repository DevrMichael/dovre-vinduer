import windows from "../data/window";
import React from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'

function InnadslaendeVindu() {
  const router = useRouter();
  const redirectInnadslaende= () => {
    let path = `/windows/3`;
    router.push(path);
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
          <Image src={windows[2].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default InnadslaendeVindu