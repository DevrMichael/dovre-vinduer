import React from "react";
import { useParams } from "react-router-dom";
import doors from "../door";

function DoorProduct() {
  const { doorId } = useParams();
  const door = doors.find((door) => door.id === parseInt(doorId));

  return (
    <div className="door-product-background">
      <div className="door-product-container">
        <div className="door-product-image">
          <img src={door.image} alt="" />
        </div>
        <div className="door-product-info">
          <div>
            <h3>Kvalitet</h3>
            <p>
              Giljes ytterdører er produsert for å tåle et skiftende norsk klima, og ikke minst hard bruk.
            </p>
          </div>
          <div>
            <h3>Kompaktlaminat</h3>
            <p>
              Kompaktlaminat er standard på alle våre ytterdører.
            </p>
          </div>
          <div>
            <h3>Bredde</h3>
            <p>
              Våre dører kan leveres inntil 129 cm bredde for enkeltdører og 239 cm bredde for to-fløyede dører.
            </p>
          </div>
          <div>
            <h3>Høyde</h3>
            <p>
              Høyde kan leveres inntil 239 cm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoorProduct;
