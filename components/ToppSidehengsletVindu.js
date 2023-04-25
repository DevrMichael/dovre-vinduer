import windows from "../data/window";
import React from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'

function ToppSidehengsletVindu() {
const router = useRouter();
  const redirectToppSidehengslet= () => {
    let path = `/windows/1`;
    router.push(path);
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
          <Image src={windows[0].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ToppSidehengsletVindu