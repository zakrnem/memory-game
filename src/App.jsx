import { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import CardsGrid from "./components/CardsGrid";
import Score from "./components/Score";
import Difficulty from "./components/Difficulty";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gridSize, setGridSize] = useState(6);
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
    27: {
      countryCode: "SY",
      countryName: "Syrian Arab Republic",
      key: uuidv4(),
    },
    28: {
      countryCode: "TT",
      countryName: "Trinidad and Tobago",
      key: uuidv4(),
    },
    29: {
      countryCode: "TW",
      countryName: "Taiwan",
      key: uuidv4(),
    },
    30: {
      countryCode: "SO",
      countryName: "Somalia",
      key: uuidv4(),
    },
    31: {
      countryCode: "SK",
      countryName: "Slovakia",
      key: uuidv4(),
    },
    32: {
      countryCode: "SI",
      countryName: "Slovenia",
      key: uuidv4(),
    },
    33: {
      countryCode: "SG",
      countryName: "Singapore",
      key: uuidv4(),
    },
    34: {
      countryCode: "RO",
      countryName: "Romania",
      key: uuidv4(),
    },
    35: {
      countryCode: "PR",
      countryName: "Puerto Rico",
      key: uuidv4(),
    },
    36: {
      countryCode: "PH",
      countryName: "Philippines",
      key: uuidv4(),
    },
    37: {
      countryCode: "PA",
      countryName: "Panama",
      key: uuidv4(),
    },
    38: {
      countryCode: "NL",
      countryName: "Netherlands",
      key: uuidv4(),
    },
    39: {
      countryCode: "MT",
      countryName: "Malta",
      key: uuidv4(),
    },
    40: {
      countryCode: "MN",
      countryName: "Mongolia",
      key: uuidv4(),
    },
    41: {
      countryCode: "MG",
      countryName: "Madagascar",
      key: uuidv4(),
    },
    42: {
      countryCode: "ML",
      countryName: "Mali",
      key: uuidv4(),
    },
    43: {
      countryCode: "ME",
      countryName: "Montenegro",
      key: uuidv4(),
    },
    44: {
      countryCode: "LI",
      countryName: "Liechtenstein",
      key: uuidv4(),
    },
    45: {
      countryCode: "LU",
      countryName: "Luxembourg",
      key: uuidv4(),
    },
    46: {
      countryCode: "LV",
      countryName: "Latvia",
      key: uuidv4(),
    },
    47: {
      countryCode: "LT",
      countryName: "Lithuania",
      key: uuidv4(),
    },
    48: {
      countryCode: "LB",
      countryName: "Lebanon",
      key: uuidv4(),
    },
    49: {
      countryCode: "KR",
      countryName: "South Korea",
      key: uuidv4(),
    },
    50: {
      countryCode: "KM",
      countryName: "Comoros",
      key: uuidv4(),
    },
    51: {
      countryCode: "IS",
      countryName: "Iceland",
      key: uuidv4(),
    },
    52: {
      countryCode: "JE",
      countryName: "Jersey",
      key: uuidv4(),
    },
  };

  const buildImagesArray = () => {
    let updatedImagesArray = { ...imagesArray };
    let count = 0;
    let prevRandomIndexes = [];

    while (count < gridSize) {
      const randomIndex = Math.floor(Math.random() * 51) + 1;
      const currIndex = Object.keys(updatedImagesArray).length;
      const value = imagesObj[randomIndex];


      if (currIndex - count < 0) {
        count = currIndex;
      }

      if (currIndex < gridSize) {
        if (!prevRandomIndexes.includes(randomIndex)) {
          count++;
          prevRandomIndexes.push(randomIndex);
          updatedImagesArray = {
            ...updatedImagesArray,
            [currIndex]: value,
          };
        }
      } else {
        updatedImagesArray = {};
        count--;
      }
    }

    setImagesArray(updatedImagesArray);
  };

  const handleCardClick = (countryCode) => {
    let currScore = score;
    let currBestScore = bestScore;
    const repeated = selectedCountries.includes(countryCode);
    if (!repeated) {
      setSelectedCountries((prevSelectedCountries) => [
        ...prevSelectedCountries,
        countryCode,
      ]);
      setScore(++currScore);
      if (score >= bestScore) setBestScore(++currBestScore);
    } else {
      setScore(0);
      setSelectedCountries([]);
    }
  };

  useEffect(() => {
    buildImagesArray();
  }, [gridSize]);

  useEffect(() => {
    buildImagesArray();
  }, [score]);

  return (
    <>
      <header>
        <Header setGridSize={setGridSize} />
        <Score score={score} bestScore={bestScore} />
        <Difficulty setGridSize={setGridSize} gridSize={gridSize}/>
      </header>
      <CardsGrid imagesArray={imagesArray} handleCardClick={handleCardClick} />
    </>
  );
}

export default App;
