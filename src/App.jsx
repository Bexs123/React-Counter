import React, { useState } from "react";
import "./index.css";
import "./App.css"

function App() {
  const [counter, setCounter] = useState(0);
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="Counter">
      <React.Fragment>
        <section style={{textAlign: "center" }}>
          <h1>Counter</h1>
          <h1>{counter}</h1>
          <button className="btn" onClick={decreaseCounter}>
            Decrease
          </button>
          <button className="btn" onClick={resetCounter}>
            Reset
          </button>
          <button className="btn" onClick={increaseCounter}>
            Increase
          </button>
        </section>
      </React.Fragment>
    </div>
  );
}

export default App;