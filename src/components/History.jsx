import React from "react";
import { Button } from "./Button";

export const History = ({ timeline, onclickHistory, currentStep }) => {
  return (
    <>
      <h2>History</h2>
      {timeline.map((_, index) => {
        let button = `Langkah ${index}`;

        if (index === 0) {
          button = "Mulai dari awal";
        }

        return (
          <Button
            key={index}
            value={button}
            onclick={() => onclickHistory(index)}
            active={currentStep === index}
          />
        );
      })}
    </>
  );
};
