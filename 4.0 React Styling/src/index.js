//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours();
const style = {
  color: "red",
};

var state;

if (time > 0 && time < 12) {
  state = "Good Morning";
} else if (time <= 18 && time >= 12) {
  state = "Good Afternoon";
  style.color = "green";
} else if (18 <= time) {
  state = "Good Night";
  style.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={style}>
      {state}
    </h1>
  </div>,
  document.getElementById("root")
);
