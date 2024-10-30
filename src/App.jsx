import { useState } from "react";
import "./App.css";

// Components
const Button = ({ value, onclick }) => {
  return (
    <button className="btn" onClick={onclick}>
      {value}
    </button>
  );
};

const Square = ({ value, onclick, index }) => {
  return (
    <div className="square" onClick={onclick}>
      <span
        style={{
          position: "absolute",
          color: "lightgray",
          fontSize: "20px",
          top: 3,
          left: 7,
        }}
      >
        {index}
      </span>
      {value}
    </div>
  );
};
// components end

const controlGame = (board) => {
  const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCondition.length; i++) {
    const [a, b, c] = winningCondition[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
};

function App() {
  const [isNext, setIsNext] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const winner = controlGame(board);

  const handleRestartGame = () => {
    setBoard(Array(9).fill(null));
    setIsNext(false);
  };

  const handleClick = (index) => {
    if (winner) return;
    setBoard((currBoard) => {
      const newBoard = [...currBoard];

      if (newBoard[index]) {
        return newBoard;
      }

      newBoard[index] = isNext ? "X" : "O";

      setIsNext(!isNext);
      return newBoard;
    });
  };

  return (
    <div className="container">
      <div className="board">
        <div className="row">
          <Square index={0} value={board[0]} onclick={() => handleClick(0)} />
          <Square index={1} value={board[1]} onclick={() => handleClick(1)} />
          <Square index={2} value={board[2]} onclick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square index={3} value={board[3]} onclick={() => handleClick(3)} />
          <Square index={4} value={board[4]} onclick={() => handleClick(4)} />
          <Square index={5} value={board[5]} onclick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square index={6} value={board[6]} onclick={() => handleClick(6)} />
          <Square index={7} value={board[7]} onclick={() => handleClick(7)} />
          <Square index={8} value={board[8]} onclick={() => handleClick(8)} />
        </div>
      </div>

      <div className="game-info">
        {winner ? (
          <h2>winner Player: {winner}</h2>
        ) : (
          <h2>Next Player: {isNext ? "X" : "O"}</h2>
        )}
        <Button value={"Start Over"} onclick={handleRestartGame} />

        <h2>History</h2>
        <Button value={"langkah 1"} />
        <Button value={"langkah 2"} />
        <Button value={"langkah 3"} />
      </div>
    </div>
  );
}

export default App;
