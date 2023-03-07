import React from "react";
import { useParams } from "react-router-dom";
import windows from "../window";

function DoorProduct() {
  const { windowId } = useParams();
  const window = windows.find((door) => door.id === parseInt(windowId));

  return (
    <div>
      <img src={window.image} alt="" />
    </div>
  );
}

export default DoorProduct;
