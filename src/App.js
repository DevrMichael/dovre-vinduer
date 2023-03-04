import "./App.css";
import { Slider } from "./slider";
import slides from "./door";
import windows from "./window"

function App() {
  return (
    <div>
      <header>
        <div>Logo</div>
        <div>
          <a href="/">Hjem</a>
          <a href="/vinduer">Vinduer</a>
          <a href="dorer">Dører</a>
          <a href="omoss">Om Oss</a>
          <a href="kontakt">Kontakt</a>
        </div>
        <div>
          <button className="primaryButton">CTA Button</button>
        </div>
      </header>
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
        <div className="right-hero"></div>
      </div>
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
            <button className="primaryButton">Feature1</button>
          </div>
          <div>
            <button className="primaryButton">Feature2</button>
          </div>
          <div>
            <button className="primaryButton">Feature3</button>
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

      <div className="window-container-nav">
        <nav>
          <li>Toppsving</li>
          <li>Innadslående</li>
          <li>Topp/sidehengslet</li>
          <li>Fastkarm</li>
          <li>Kombinasjon</li>
          <li>Spesial</li>
        </nav>
        <div className="window-container">
          <div className="window-text">
            <h2>Best seller product</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur nobis perferendis sint consequuntur corporis! Numquam
              debitis labore impedit quia facere nulla doloribus, neque illum
              nihil, maiores, est eum commodi cum!
            </p>
            <button className="primaryButton">CTA Button</button>
          </div>
          <div className="window-image">
            <img src={windows[1].image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
