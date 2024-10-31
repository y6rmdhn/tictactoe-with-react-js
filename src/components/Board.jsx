import React from "react";
import { Square } from "./Square";

export const Board = ({ board, onAction }) => {
  const handleClick = (index) => {
    onAction(index);
  };

  return (
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
  );
};
