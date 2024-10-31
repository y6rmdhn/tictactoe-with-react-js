import React from "react";

export const Square = ({ value, onclick, index }) => {
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
