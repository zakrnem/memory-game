import { useState } from "react";
import CardInstance from "./CardInstance";
import { v4 as uuidv4 } from "uuid";
import "../styles/CardsGrid.css";

function CardsGrid({ gridSize }) {
  const [imagesArray, setImagesArray] = useState({
    1: {
      countryCode: "MZ",
      countryName: "Mozambique",
      key: uuidv4(),
    },
    2: {
      countryCode: "NA",
      countryName: "Namibia",
      key: uuidv4(),
    },
    3: {
      countryCode: "MW",
      countryName: "Malawi",
      key: uuidv4(),
    },
    4: {
      countryCode: "NE",
      countryName: "Niger",
      key: uuidv4(),
    },
  });

  const buildImagesArray = (gridSize) => {};

  const handleCardClick = (countryCode) => {
    console.log(countryCode);
  };
  return (
    <div className="cards-grid">
      {Object.keys(imagesArray).map((index) => {
        const countryCode = imagesArray[index].countryCode;
        const countryName = imagesArray[index].countryName;
        const key = imagesArray[index].key;
        return (
          <div key={key}>
            <CardInstance
              countryCode={countryCode}
              countryName={countryName}
              handleCardClick={handleCardClick}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardsGrid;
