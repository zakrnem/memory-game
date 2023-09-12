import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import CardsGrid from "./components/CardsGrid";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gridSize, setGridSize] = useState(10);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <CardsGrid
        gridSize={gridSize}
        setScore={setScore}
        setBestScore={setBestScore}
        score={score}
        bestScore={bestScore}
        setGridSize={setGridSize}
      />
    </>
  );
}

export default App;
