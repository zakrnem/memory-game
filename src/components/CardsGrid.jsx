import { useState, useEffect } from "react";
import CardInstance from "./CardInstance";
import { v4 as uuidv4 } from "uuid";
import "../styles/CardsGrid.css";

function CardsGrid({
  gridSize,
  setScore,
  setBestScore,
  score,
  bestScore,
  setGridSize,
}) {
  const [imagesArray, setImagesArray] = useState({});
  const [selectedCountries, setSelectedCountries] = useState([]);

  const imagesObj = {
    1: {
      countryCode: "AR",
      countryName: "Argentina",
      key: uuidv4(),
    },
    2: {
      countryCode: "BR",
      countryName: "Brazil",
      key: uuidv4(),
    },
    3: {
      countryCode: "CA",
      countryName: "Canada",
      key: uuidv4(),
    },
    4: {
      countryCode: "CO",
      countryName: "Colombia",
      key: uuidv4(),
    },
    5: {
      countryCode: "DE",
      countryName: "Germany",
      key: uuidv4(),
    },
    6: {
      countryCode: "DK",
      countryName: "Denmark",
      key: uuidv4(),
    },
    7: {
      countryCode: "ES",
      countryName: "Spain",
      key: uuidv4(),
    },
    8: {
      countryCode: "GB",
      countryName: "United Kingdom",
      key: uuidv4(),
    },
    9: {
      countryCode: "FR",
      countryName: "France",
      key: uuidv4(),
    },
    10: {
      countryCode: "IT",
      countryName: "Italy",
      key: uuidv4(),
    },
    11: {
      countryCode: "PL",
      countryName: "Poland",
      key: uuidv4(),
    },
    12: {
      countryCode: "SV",
      countryName: "El Salvador",
      key: uuidv4(),
    },
    13: {
      countryCode: "US",
      countryName: "United States",
      key: uuidv4(),
    },
    14: {
      countryCode: "TR",
      countryName: "Turkey",
      key: uuidv4(),
    },
    15: {
      countryCode: "CN",
      countryName: "China",
      key: uuidv4(),
    },
    16: {
      countryCode: "JP",
      countryName: "Japan",
      key: uuidv4(),
    },
    17: {
      countryCode: "CL",
      countryName: "Chile",
      key: uuidv4(),
    },
    18: {
      countryCode: "BO",
      countryName: "Bolivia",
      key: uuidv4(),
    },
    19: {
      countryCode: "EG",
      countryName: "Egypt",
      key: uuidv4(),
    },
    20: {
      countryCode: "FI",
      countryName: "Finland",
      key: uuidv4(),
    },
    21: {
      countryCode: "MX",
      countryName: "Mexico",
      key: uuidv4(),
    },
    22: {
      countryCode: "PE",
      countryName: "Peru",
      key: uuidv4(),
    },
    23: {
      countryCode: "PT",
      countryName: "Portugal",
      key: uuidv4(),
    },
    24: {
      countryCode: "RU",
      countryName: "Russia",
      key: uuidv4(),
    },
    25: {
      countryCode: "SE",
      countryName: "Sweden",
      key: uuidv4(),
    },
    26: {
      countryCode: "UY",
      countryName: "Uruguay",
      key: uuidv4(),
    },
  };

  const buildImagesArray = () => {
    let updatedImagesArray = { ...imagesArray };
    let count = 0;
    let prevRandomIndexes = [];

    while (count < gridSize) {
      const randomIndex = Math.floor(Math.random() * 26) + 1;
      const currIndex = Object.keys(updatedImagesArray).length;
      const value = imagesObj[randomIndex];

      if (currIndex === gridSize) {
        updatedImagesArray = {};
        count--;
      }

      if (!prevRandomIndexes.includes(randomIndex)) {
        count++;
        prevRandomIndexes.push(randomIndex);

        if (currIndex < gridSize) {
          updatedImagesArray = {
            ...updatedImagesArray,
            [currIndex]: value,
          };
        }
      }
    }
    setImagesArray(updatedImagesArray);
  };

  useEffect(() => {
    buildImagesArray();
  }, [gridSize]);

  useEffect(() => {
    return () => {
      buildImagesArray();
    };
  }, [score]);

  const handleCardClick = (countryCode) => {
    const repeated = selectedCountries.includes(countryCode);
    if (!repeated) {
      setSelectedCountries((prevSelectedCountries) => [
        ...prevSelectedCountries,
        countryCode,
      ]);
      setScore(++score);
      if (score > bestScore) setBestScore(++bestScore);
    } else {
      setScore(0);
      setSelectedCountries([]);
    }
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
