import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { GameInfor } from "./components/GameInfor";
import { controlGame } from "./utils/calculateWinner";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [timeline, setTimeline] = useState([
    {
      isNext: false,
      board: Array(9).fill(null),
    },
  ]);

  const board = timeline[currentStep].board;
  const isNext = timeline[currentStep].isNext;
  const winner = controlGame(board);

  const handleClick = (index) => {
    if (winner) return;
    const newBoard = [...board];

    if (newBoard[index]) {
      return newBoard;
    }

    newBoard[index] = isNext ? "X" : "O";

    setTimeline([
      ...timeline.slice(0, currentStep + 1),
      {
        board: newBoard,
        isNext: !isNext,
      },
    ]);
    setCurrentStep(currentStep + 1);

    return newBoard;
  };

  const handleTimelineHistory = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="container">
      <Board board={board} onAction={handleClick} />
      <GameInfor
        winner={winner}
        isNext={isNext}
        timeline={timeline}
        clickHistory={handleTimelineHistory}
        currentStep={currentStep}
      />
    </div>
  );
}

export default App;
