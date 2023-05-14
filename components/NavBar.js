import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
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
        <Image src={logo} width={100} height={100} alt="dovre vinduer logo" className='logo'/>
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
        </nav>
        <div>
          <button className="primaryButton">
            <Link
              style={{ color: 'white', textDecoration: 'none' }}
              href={'/kontakt'}
            >
              Kontakt
            </Link>
          </button>
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
                <button className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    style={{ color: '#000', textDecoration: 'none' }}
                    href="/"
                  >
                    Hjem
                  </Link>
                </button>
                <button className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    style={{ color: '#000', textDecoration: 'none' }}
                    href="/vinduer"
                  >
                    Vinduer
                  </Link>
                </button>
                <button className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    style={{ color: '#000', textDecoration: 'none' }}
                    href="/dorer"
                  >
                    Dører
                  </Link>
                </button>
                <button className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    style={{ color: '#000', textDecoration: 'none' }}
                    href="/giljesense"
                  >
                    Gilje Sense
                  </Link>
                </button>
                <button className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    style={{ color: '#000', textDecoration: 'none' }}
                    href="/omoss"
                  >
                    Om Oss
                  </Link>
                </button>
                <button className="hamburger-menu__item" onClick={toggleMenu}>
                  <Link
                    style={{ color: '#000', textDecoration: 'none' }}
                    href="/kontakt"
                  >
                    Kontakt
                  </Link>
                </button>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
}

export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
