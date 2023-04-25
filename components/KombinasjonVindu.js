import windows from "../data/window";
import React from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'

function KombinasjonVindu() {
  const router = useRouter();
  const redirectKombinasjon= () => {
    let path = `/windows/6`;
    router.push(path);
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
          <Image src={windows[5].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default KombinasjonVindu