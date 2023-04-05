import React from 'react';
import { useState } from "react";
import ToppsvingVindu from "./ToppsvingVindu";
import InnadslaendeVindu from "./InnadslaendeVindu";
import ToppSidehengsletVindu from "./ToppSidehengsletVindu";
import FastkarmVindu from "./FastkarmVindu";
import KombinasjonVindu from "./KombinasjonVindu";
import SpesialVindu from "./SpesialVindu";

function Windows() {
const [activeWindowCard, setActiveWindowCard] = useState(0)

  return (
    <div className="window-container-nav">
      <nav>
        <button className={`underline ${activeWindowCard === 0 ? "bolded" : ""}`} onClick={() => setActiveWindowCard(0)}>Toppsving</button>
        <button className={`underline ${activeWindowCard === 1 ? "bolded" : ""}`} onClick={() => setActiveWindowCard(1)}>Innadslående</button>
        <button className={`underline ${activeWindowCard === 2 ? "bolded" : ""}`} onClick={() => setActiveWindowCard(2)}>Topp/sidehengslet</button>
        <button className={`underline ${activeWindowCard === 3 ? "bolded" : ""}`} onClick={() => setActiveWindowCard(3)}>Fastkarm</button>
        <button className={`underline ${activeWindowCard === 4 ? "bolded" : ""}`} onClick={() => setActiveWindowCard(4)}>Kombinasjon</button>
        <button className={`underline ${activeWindowCard === 5 ? "bolded" : ""}`} onClick={() => setActiveWindowCard(5)}>Spesial</button>
      </nav>
      {activeWindowCard === 0 && <ToppsvingVindu />}
      {activeWindowCard === 1 && <InnadslaendeVindu />}
      {activeWindowCard === 2 && <ToppSidehengsletVindu />}
      {activeWindowCard === 3 && <FastkarmVindu />}
      {activeWindowCard === 4 && <KombinasjonVindu />}
      {activeWindowCard === 5 && <SpesialVindu />}
    </div>
  );
}

export default Windows;
