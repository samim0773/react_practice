import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            pink
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
