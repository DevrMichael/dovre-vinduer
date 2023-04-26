import windows from "../data/window";
import React from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'

function SpesialVindu() {
const router = useRouter();
  const redirectSpesial= () => {
    let path = `/vinduer/4`;
    router.push(path);
    window.scrollTo(0, 0);
  };
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[3].title}</h2>
          <p>
            {windows[3].content}
          </p>
          <button className="primaryButton" onClick={redirectSpesial}>Les Mer</button>
        </div>
        <div className="window-image">
          <Image src={windows[3].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SpesialVindu