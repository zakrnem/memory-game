import "../styles/Difficulty.css";

function Difficulty({ setGridSize, gridSize }) {
  const handleChange = (value) => {
    setGridSize(value);
  };
  return (
    <div className="difficulty">
      <p>Select game difficulty:</p>
      <select value={gridSize} onChange={(e) => handleChange(e.target.value)}>
        <option value={4}>Easy</option>
        <option value={6}>Medium</option>
        <option value={10}>Hard</option>
      </select>
    </div>
  );
}

export default Difficulty;
