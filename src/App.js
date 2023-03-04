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
    </div>
  );
}

export default App;
