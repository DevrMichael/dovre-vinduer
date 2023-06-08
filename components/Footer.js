import React from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <main>
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
          <div className="footer-contact-section">
            <div className="footer-email-section">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: '#FFF' }} />
              <a className="footer-email" href="mailto:post@dovrevinduer.no">
                post@dovrevinduer.no
              </a>{' '}
            </div>
            <div className="footer-phone-section">
              <FontAwesomeIcon icon={faPhone} style={{ color: '#FFF' }} />
              <a className="footer-phone-number" href="tel:004790761578">
                +47 90761578
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
