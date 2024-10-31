import React from "react";
import { History } from "./History";

export const GameInfor = ({
  winner,
  isNext,
  timeline,
  clickHistory,
  currentStep,
}) => {
  return (
    <div className="game-info">
      {winner ? (
        <h2>Winner Player: {winner}</h2>
      ) : (
        <h2>Next Player: {isNext ? "X" : "O"}</h2>
      )}
      <History
        timeline={timeline}
        onclickHistory={clickHistory}
        currentStep={currentStep}
      />
    </div>
  );
};
