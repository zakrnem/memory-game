import { useState } from "react";
import "./styles/App.css";
import Score from "./components/Score";
import Header from "./components/Header";
import CardsGrid from "./components/CardsGrid";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gridSize, setGridSize] = useState(4);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <CardsGrid gridSize={gridSize} />
    </>
  );
}

export default App;
