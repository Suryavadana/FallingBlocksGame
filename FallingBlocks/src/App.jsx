import React, { useState } from 'react';
import GameBoard from './components/GameBoard';

const createEmptyGrid = () => {
  return Array.from({ length: 20 }, () => Array(10).fill(null));
};

const App = () => {
  const [grid, setGrid] = useState(createEmptyGrid());

  return (
    <div className="App">
      <h1>Falling Blocks Game</h1>
      <GameBoard grid={grid} />
    </div>
  );
};

export default App;
