import { useState } from 'react'
import 'normalize.css'
import './App.css'
import Score from './components/Score'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <>
      <h1>Memory game</h1>
      <Score 
      score={score}
      bestScore={bestScore}
      />
    </>
  )
}

export default App
