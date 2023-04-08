import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Door from "./pages/Doors";
import Window from "./pages/Windows";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import DoorProduct from "./pages/DoorProduct";
import WindowProduct from "./pages/WindowProduct";
import GiljeSense from "./pages/GiljeSense";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <main>
        <header>
          <div className="logo">Dovrevinduer</div>
          <div className="nav-container">
            <Link style={{ color: "black", textDecoration: "none" }} to="/">
              Hjem
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/vinduer"
            >
              Vinduer
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/dorer"
            >
              Dører
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/gilje-sense"
            >
              Gilje Sense
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/omoss"
            >
              Om oss
            </Link>
          </div>
          <div>
            <button className="primaryButton">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/kontakt"
              >
                Kontakt
              </Link>
            </button>
          </div>
          <div className="hamburger-menu">
      {!isOpen && (<button className="hamburger-menu__button" onClick={toggleMenu}>
        <span className="hamburger-menu__icon"></span>
      </button>)}
      {isOpen && (
        <nav className="hamburger-menu__nav">
          <button className="hamburger-menu__close-button" onClick={toggleMenu}>
          <span className="hamburger-menu__close-icon"><FontAwesomeIcon icon={faX} size="lg" /></span>
          </button>
          <ul className="hamburger-menu__list">
            <button className="hamburger-menu__item" onClick={toggleMenu}><Link
                style={{ color: "#000", textDecoration: "none" }}
                to="/"
              >
                Hjem
              </Link></button>
            <button className="hamburger-menu__item" onClick={toggleMenu}><Link
                style={{ color: "#000", textDecoration: "none" }}
                to="/vinduer"
              >
                Vinduer
              </Link></button>
            <button className="hamburger-menu__item" onClick={toggleMenu}><Link
                style={{ color: "#000", textDecoration: "none" }}
                to="/dorer"
              >
                Dører
              </Link></button>
            <button className="hamburger-menu__item" onClick={toggleMenu}><Link
                style={{ color: "#000", textDecoration: "none" }}
                to="/gilje-sense"
              >
                Gilje Sense
              </Link></button>
            <button className="hamburger-menu__item" onClick={toggleMenu}><Link
                style={{ color: "#000",textDecoration: "none" }}
                to="/omoss"
              >
                Om Oss
              </Link></button>
            <button className="hamburger-menu__item" onClick={toggleMenu}><Link
                style={{ color: "#000", textDecoration: "none" }}
                to="/kontakt"
              >
                Kontakt
              </Link></button>
          </ul>
        </nav>
      )}
    </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dorer" element={<Door />} />
          <Route path="/dorer/:doorId" element={<DoorProduct />} />
          <Route path="/vinduer" element={<Window />} />
          <Route path="/vinduer/:windowId" element={<WindowProduct />} />
          <Route path="/gilje-sense" element={<GiljeSense />} />
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
            <p><a href="mailto:naeem@dovrevinduer.no">naeem@dovrevinduer.no</a> +47 90 76 15 78</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
