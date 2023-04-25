import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
  

  return (
    <div>
    <header>
    <div className="logo">Dovrevinduer</div>
    <nav className="nav-container">
      <Link style={{ color: "black", textDecoration: "none" }} href={'/'}>
        Hjem
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        href={"/windows"}
      >
        Vinduer
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        href={"/doors"}
      >
        Dører
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        href={"/giljesense"}
      >
        Gilje Sense
      </Link>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        href={"/aboutus"}
      >
        Om oss
      </Link>
    </nav>
    <div>
      <button className="primaryButton">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          href={"/contact"}
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
          href="/"
        >
          Hjem
        </Link></button>
      <button className="hamburger-menu__item" onClick={toggleMenu}><Link
          style={{ color: "#000", textDecoration: "none" }}
          href="/windows"
        >
          Vinduer
        </Link></button>
      <button className="hamburger-menu__item" onClick={toggleMenu}><Link
          style={{ color: "#000", textDecoration: "none" }}
          href="/doors"
        >
          Dører
        </Link></button>
      <button className="hamburger-menu__item" onClick={toggleMenu}><Link
          style={{ color: "#000", textDecoration: "none" }}
          href="/giljesense"
        >
          Gilje Sense
        </Link></button>
      <button className="hamburger-menu__item" onClick={toggleMenu}><Link
          style={{ color: "#000",textDecoration: "none" }}
          href="/aboutus"
        >
          Om Oss
        </Link></button>
      <button className="hamburger-menu__item" onClick={toggleMenu}><Link
          style={{ color: "#000", textDecoration: "none" }}
          href="/contact"
        >
          Kontakt
        </Link></button>
    </ul>
  </nav>
)}
</div>
  </header>
  </div>
  )
}

export default dynamic (() => Promise.resolve(NavBar), {ssr: false})
