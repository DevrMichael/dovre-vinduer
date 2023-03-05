import windows from "../window";

function KombinasjonVindu() {
  return (
    <div className="window-container-nav">
      <div className="window-container">
        <div className="window-text">
          <h2>{windows[5].title}</h2>
          <p>
            {windows[5].content}
          </p>
          <button className="primaryButton">Les Mer</button>
        </div>
        <div className="window-image">
          <img src={windows[5].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default KombinasjonVindu