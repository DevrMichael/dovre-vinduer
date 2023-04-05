import React from "react";
import { useParams } from "react-router-dom";
import windows from "../data/window";

function WindowProduct() {
  const { windowId } = useParams();
  const window = windows.find((door) => door.id === parseInt(windowId));

  return (
    <div>
    <div className="window-product-container">
      <div className="window-product-image">
        <img src={window.image} alt="" />
      </div>
      <div className="window-product-info">
        <div>
          <h3>{window.title}</h3>
          <br />
          <p>{window.content}</p>
          <br />
          <p>
            {window["page-content"]}
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default WindowProduct;
