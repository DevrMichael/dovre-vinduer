import windows from "../window";

function SpesialVindu() {
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[3].title}</h2>
          <p>
            {windows[3].content}
          </p>
          <button className="primaryButton">CTA Button</button>
        </div>
        <div className="window-image">
          <img src={windows[3].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SpesialVindu