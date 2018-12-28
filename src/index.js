import React from "react";
import ReactDOM from "react-dom";
import Rectangle from "./Rectangle";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Rectangle />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
