import "./App.css";
import Windows from "./pages/Windows";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Door from "./pages/Door";
import Window from "./pages/Window";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <main>
        <header>
          <div>Logo</div>
          <div>
            <a href="/"><Link to="/">Home</Link></a>
            <a href="/vinduer"><Link to="/vinduer">Vinduer</Link></a>
            <a href="/dorer"><Link to="/dorer">Dører</Link></a>
            <a href="/omoss"><Link to="/omoss">Om oss</Link></a>
            <a href="/kontakt"><Link to="/kontakt">Kontakt</Link></a>
          </div>
          <div>
            <button className="primaryButton">CTA Button</button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dorer" element={<Door />} />
          <Route path="/vinduer" element={<Window />} />
          <Route path="/omoss" element={<AboutUs />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
