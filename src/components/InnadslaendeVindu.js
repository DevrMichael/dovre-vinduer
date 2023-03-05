import windows from "../window";

function InnadslaendeVindu() {
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[2].title}</h2>
          <p>
            {windows[2].content}
          </p>
          <button className="primaryButton">CTA Button</button>
        </div>
        <div className="window-image">
          <img src={windows[2].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default InnadslaendeVindu