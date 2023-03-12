import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Door from "./pages/Door";
import Window from "./pages/Window";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import DoorProduct from "./pages/DoorProduct";
import WindowProduct from "./pages/WindowProduct"

function App() {
  return (
    <div>
      <main>
        <header>
          <div className="logo">
            Dovrevinduer
          </div>
          <div>
              <Link style={{color: 'black', textDecoration: 'none'}} to="/">Home</Link>
              <Link style={{color: 'black', textDecoration: 'none'}} to="/vinduer">Vinduer</Link>
              <Link style={{color: 'black', textDecoration: 'none'}} to="/dorer">Dører</Link>
              <Link style={{color: 'black', textDecoration: 'none'}} to="/omoss">Om oss</Link>
              <Link style={{color: 'black', textDecoration: 'none'}} to="/kontakt">Kontakt</Link>
          </div>
          <div>
            <button className="primaryButton">CTA Button</button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dorer" element={<Door />} />
          <Route path="/dorer/:doorId" element={<DoorProduct />} />
          <Route path="/vinduer" element={<Window />} />
          <Route path="/vinduer/:windowId" element={<WindowProduct />} />
          <Route path="/omoss" element={<AboutUs />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <div className="footer-top">
          <div className="footer-top-div"></div>
          <div className="footer-top-div"></div>
          <div className="footer-top-div"></div>
          <div className="footer-top-div"></div>
        </div>
        <footer>
          <div className="footer-nav">
            <a href="/">Hjem</a>
            <a href="/vinduer">Vinduer</a>
            <a href="/dorer">Dører</a>
            <a href="/omoss">Om Oss</a>
            <a href="/kontakt">Kontakt</a>
          </div>
          <div className="footer-info">
            <p>Dovre Vinduer AS 1475 Finstadjordet</p>
            <p>naeem@dovrevinduer.no +47 90 76 15 78</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
