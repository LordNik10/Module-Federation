import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrementCounter = () => {
    setCounter((prevValue) => prevValue + 1);
  };

  const handleDecrementCounter = () => {
    if (counter === 0) {
      alert("il counter è già a 0");
      return;
    }
    setCounter((prevValue) => prevValue - 1);
  };

  return (
    <div className="counter-container">
      <button
        type="button"
        onClick={handleDecrementCounter}
        className="counter-btn"
      >
        -
      </button>
      <span style={{ fontSize: "30px" }}>Valore counter: {counter}</span>
      <button
        type="button"
        onClick={handleIncrementCounter}
        className="counter-btn"
      >
        +
      </button>
    </div>
  );
}
