import React from "react";
import { useParams } from "react-router-dom";
import windows from "../window";

function DoorProduct() {
  const { windowId } = useParams();
  const window = windows.find((door) => door.id === parseInt(windowId));

  return (
    <div className="door-product-background">
    <div className="door-product-container">
      <div className="door-product-image">
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

export default DoorProduct;
