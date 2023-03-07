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
      <div className="door-product-info">
        <div>
          <h3>Door info 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis, totam?
          </p>
        </div>
        <div>
          <h3>Door info 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            sit?
          </p>
        </div>
        <div>
          <h3>Door info 3</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            eaque!
          </p>
        </div>
        <div>
          <h3>Door info 4</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            illo.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default DoorProduct;
