import React from 'react';
import windows from "../data/window";
import { useRouter } from 'next/router';
import Image from 'next/image'

function ToppsvingVindu() {
const router = useRouter();
  const redirectToppsving= () => {
    let path = `/vinduer/5`;
    router.push(path);
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
          <Image src={windows[4].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ToppsvingVindu