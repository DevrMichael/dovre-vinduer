import React from 'react'
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Slider } from "../slider";
import slides from "../door";
import Windows from "../pages/Windows";

function Home() {
  let navigate = useNavigate(); 
  const redirectGilje = () =>{ 
    let path = `/omoss`; 
    navigate(path);
    window.scrollTo(0, 0)
  }
  const redirectVinduer = () =>{ 
    let path = `/vinduer`; 
    navigate(path);
    window.scrollTo(0, 0)
  }
  const redirectDorer = () =>{ 
    let path = `/dorer`; 
    navigate(path);
    window.scrollTo(0, 0)
  }
  return (
    <div>
      <div className="hero">
        <div className="left-hero">
          <h1>Find the best fashion style for you</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            saepe fuga quidem error quae ducimus eaque. Sint voluptatem libero
            ullam.
          </p>
          <button className="primaryButton">CTA Button</button>
        </div>
        <div className="right-hero">
        </div>
      </div>
      <div className="features-background">
      <div className="features">
        <div className="top-features">
          <h2>New Collection</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            optio, porro deleniti earum dolore asperiores?
          </p>
        </div>
        <div className="bottom-features">
          <div>
            <button className="secondaryButton" onClick={redirectVinduer}>Vinduer</button>
          </div>
          <div>
            <button className="secondaryButton" onClick={redirectDorer}>Dører</button>
          </div>
          <div>
            <button className="secondaryButton" onClick={redirectGilje}>Gilje Sense</button>
          </div>
        </div>
      </div>
      </div>
      <div className="mini-hero">
        <div className="mini-hero-main">
          <div className="left-mini-hero"></div>
          <div className="right-mini-hero">
            <h2>Best fashion since 2014</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              placeat, qui quia voluptate aliquid sit laboriosam obcaecati
              aliquam reprehenderit, illo alias dignissimos nihil temporibus!
              Error, dolores! Unde quis magni perferendis voluptatem quos
              explicabo illum quisquam?
            </p>
          </div>
        </div>
        <div className="mini-hero-overflow-div">
          <div>
            <h3>2014</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h3>8900+</h3>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div>
            <h3>3103+</h3>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <h2>Our Doors</h2>
        <Slider slides={slides} />
      </div>
      <div className="window-container-header">
        <h2>Our Windows</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptas
          obcaecati cum doloremque quidem quibusdam.
        </p>
      </div>
        <Windows />
        <div className="showroom-container">
          <div className="hero">
            <div className="left-showroom">
              <h1>Our Showroom</h1>
              <p>Our showroom is centrally located in Lørenskog.</p>
            </div>
            <div className="right-showroom">
              <div className="homepage-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.9098922821365!2d10.72518285207197!3d59.91704278177933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd779ba357b%3A0x677038c9acc2591c!2sDet%20kongelige%20slott!5e0!3m2!1sno!2sno!4v1677587198537!5m2!1sno!2sno"
                  title="map"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home