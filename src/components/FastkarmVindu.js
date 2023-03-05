import windows from "../window";

function FastkarmVindu() {
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[1].title}</h2>
          <p>
            {windows[1].content}
          </p>
          <button className="primaryButton">CTA Button</button>
        </div>
        <div className="window-image">
          <img src={windows[1].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default FastkarmVindu