import React from "react";
import { useParams } from "react-router-dom";
import doors from "../door";

function DoorProduct() {
  const { doorId } = useParams();
  const door = doors.find((door) => door.id === parseInt(doorId));

  return (
    <div>
      <img src={door.image} alt="" />
    </div>
  );
}

export default DoorProduct;
