import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="bg-change-body" style={{ backgroundColor: color }}>
        <div className="bg-change-button">
          <button
            className="button"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="button"
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
          <button
            className="button"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="button"
            style={{ backgroundColor: "yellow" }}
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="button"
            style={{ backgroundColor: "Navy" }}
            onClick={() => {
              setColor("Navy");
            }}
          >
            Navy
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
