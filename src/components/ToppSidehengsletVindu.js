import windows from "../window";

function ToppSidehengsletVindu() {
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[0].title}</h2>
          <p>
            {windows[0].content}
          </p>
          <button className="primaryButton">Les Mer</button>
        </div>
        <div className="window-image">
          <img src={windows[0].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ToppSidehengsletVindu