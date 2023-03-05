import windows from "../window";

function ToppsvingVindu() {
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[4].title}</h2>
          <p>
            {windows[4].content}
          </p>
          <button className="primaryButton">Les Mer</button>
        </div>
        <div className="window-image">
          <img src={windows[4].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ToppsvingVindu