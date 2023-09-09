import "../styles/Score.css";

function Score({ score, bestScore }) {
  return (
    <div className="score">
      <p>Current score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
}

export default Score;
