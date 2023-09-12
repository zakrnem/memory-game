import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import CardsGrid from "./components/CardsGrid";
import Score from "./components/Score";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gridSize, setGridSize] = useState(10);

  return (
    <>
      <header>
        <Header setGridSize={setGridSize} />
        <Score score={score} bestScore={bestScore} />
      </header>
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
