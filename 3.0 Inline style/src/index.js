import React from "react";
import ReactDOM from "react-dom";

const style = { color: "red", fontSize: "250%", border: "1px solid black" };

style.color = "blue";

ReactDOM.render(
  <h1 style={style}>Hello World!</h1>,
  document.getElementById("root")
);
