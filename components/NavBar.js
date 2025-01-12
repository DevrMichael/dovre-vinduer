import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPhone } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import logo from '../public/dovre-vinduer-logo.png';
import Image from 'next/image';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <Link style={{ color: 'black', textDecoration: 'none' }} href={'/'}>
          <Image
            src={logo}
            width={100}
            height={100}
            alt="dovre vinduer logo"
            className="logo"
          />
        </Link>
        <nav className="nav-container">
          <Link style={{ color: 'black', textDecoration: 'none' }} href={'/'}>
            Hjem
          </Link>
          <Link
            style={{ color: 'black', textDecoration: 'none' }}
            href={'/vinduer'}
          >
            Vinduer
          </Link>
          <Link
            style={{ color: 'black', textDecoration: 'none' }}
            href={'/dorer'}
          >
            Dører
          </Link>
          <Link
            style={{ color: 'black', textDecoration: 'none' }}
            href={'/giljesense'}
          >
            Gilje Sense
          </Link>
          <Link
            style={{ color: 'black', textDecoration: 'none' }}
            href={'/omoss'}
          >
            Om oss
          </Link>
          <button className="primaryButton kontakt-button">
            <Link
              style={{ color: 'white', textDecoration: 'none' }}
              href={'/kontakt'}
            >
              Kontakt
            </Link>
          </button>
          <button className="secondaryButton mittanbud-button">
            <Link
              style={{ color: 'white', textDecoration: 'none' }}
              href={'https://mittanbud.no/bedrift/3550325'}
              target="_blank"
            >
              Mitt Anbud
            </Link>
          </button>
        </nav>
        <div className="nav-contact-section">
          <FontAwesomeIcon
            className="nav-phone-icon"
            icon={faPhone}
            style={{ color: '#94af9f' }}
          />
          <a className="nav-phone-number" href="tel:004790761578">
            +47 90761578
          </a>
        </div>
        <div className="hamburger-menu">
          {!isOpen && (
            <button className="hamburger-menu__button" onClick={toggleMenu}>
              <span className="hamburger-menu__icon"></span>
            </button>
          )}
          {isOpen && (
            <nav className="hamburger-menu__nav">
              <button
                className="hamburger-menu__close-button"
                onClick={toggleMenu}
              >
                <span className="hamburger-menu__close-icon">
                  <FontAwesomeIcon icon={faX} size="lg" />
                </span>
              </button>
              <ul className="hamburger-menu__list">
                <li className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    style={{ color: '#000', textDecoration: 'none' }}
                    href="/"
                  >
                    Hjem
                  </Link>
                </li>
                <li className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    style={{ color: '#000', textDecoration: 'none' }}
                    href="/vinduer"
                  >
                    Vinduer
                  </Link>
                </li>
                <li className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    style={{ color: '#000', textDecoration: 'none' }}
                    href="/dorer"
                  >
                    Dører
                  </Link>
                </li>
                <li className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    style={{ color: '#000', textDecoration: 'none' }}
                    href="/giljesense"
                  >
                    Gilje Sense
                  </Link>
                </li>
                <li className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    style={{ color: '#000', textDecoration: 'none' }}
                    href="/omoss"
                  >
                    Om oss
                  </Link>
                </li>
                <li className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    href="/kontakt"
                    style={{
                      backgroundColor: 'darkslategray',
                      color: 'white',
                      padding: '20px 20px',
                      marginTop: '20px',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    Kontakt
                  </Link>
                </li>
                <li className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    href="https://mittanbud.no/bedrift/3550325"
                    className="secondaryButton"
                    style={{
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    Mitt Anbud
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
}

export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
