import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const decreaseValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Counter Project using vite</h1>

      <h3>Counter Value : {counter}</h3>

      <button onClick={increaseValue}>Increase value (+) </button>
      <br />
      <br />
      <button onClick={decreaseValue}>decreaseValue value (-) </button>
    </>
  );
}

export default App;
