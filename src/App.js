import logo from "./logo.svg";
import "./App.css";

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
    </div>
  );
}

export default App;
