import { useState } from "react";
import "./App.css";

const Button = ({ value }) => {
  return <button className="btn">{value}</button>;
};

const Square = ({ value }) => {
  const [state, setState] = useState(null);

  const handleClick = () => {
    setState("X");
  };

  return (
    <div className="square" onClick={handleClick}>
      {state}
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <div className="board">
        <div className="row">
          <Square value={1} />
          <Square value={2} />
          <Square value={3} />
        </div>
        <div className="row">
          <Square value={4} />
          <Square value={5} />
          <Square value={6} />
        </div>
        <div className="row">
          <Square value={7} />
          <Square value={8} />
          <Square value={9} />
        </div>
      </div>

      <div className="game-info">
        <h2>Next Player: x</h2>
        <Button value={"Start Over"} />

        <h2>History</h2>
        <Button value={"langkah 1"} />
        <Button value={"langkah 2"} />
        <Button value={"langkah 3"} />
      </div>
    </div>
  );
}

export default App;
