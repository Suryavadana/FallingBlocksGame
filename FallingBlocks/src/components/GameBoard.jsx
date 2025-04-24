import React from 'react'
import '../styles/GameBoard.css';

const GameBoard = ({grid}) => {
  return (
    <div className='game-board'>
        {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) =>(
            <div
                key={`${rowIndex}-${colIndex}`}
                className={`cell ${cell ? 'filled' : ''}`}
                />
        )))}

      
    </div>
  )
}

export default GameBoard;