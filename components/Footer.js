import React from 'react'
import dynamic from "next/dynamic";

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
        <p><a href="mailto:naeem@dovrevinduer.no">naeem@dovrevinduer.no</a> +47 90 76 15 78</p>
      </div>
    </footer>
  </main>
  )
}

export default dynamic (() => Promise.resolve(Footer), {ssr: false})
