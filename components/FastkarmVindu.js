import windows from "../data/window";
import React from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'

function FastkarmVindu() {
  const router = useRouter();
  const redirectFastkarm= () => {
    let path = `/vinduer/2`;
    router.push(path);
    window.scrollTo(0, 0);
  };
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[1].title}</h2>
          <p>
            {windows[1].content}
          </p>
          <button className="primaryButton" onClick={redirectFastkarm}>Les Mer</button>
        </div>
        <div className="window-image">
          <Image src={windows[1].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default FastkarmVindu