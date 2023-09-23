import PropTypes from 'prop-types';

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

CardInstance.propTypes = {
  countryCode: PropTypes.string,
  countryName: PropTypes.string,
  handleCardClick: PropTypes.func,
};

export default CardInstance;
