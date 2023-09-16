import CardInstance from "./CardInstance";
import "../styles/CardsGrid.css";

function CardsGrid({ imagesArray, handleCardClick }) {
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
