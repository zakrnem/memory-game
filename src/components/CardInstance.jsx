function CardInstance({ countryCode, countryName, handleCardClick }) {
  return (
    <div className="card-instance">
      <button onClick={() => handleCardClick(countryCode)}>
        <img src={`https://flagsapi.com/${countryCode}/shiny/64.png`} />
        <p>{countryName}</p>
      </button>
    </div>
  );
}

export default CardInstance;
