import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="style" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        src="https://play-lh.googleusercontent.com/L6qehUCLcgG7W3cH1aBel04XKSp5GA9oX3NrUWgwaIwkiYWnhF-xJftIQz5m5Uy-0K67"
        alt="cats"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsK5NUgRsnxebj4h8Q_S9VeE_2MD4wbM2PNw&s"
        alt="cat"
      />
      <img
        src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="cat"
      />
    </div>
  </div>,
  document.getElementById("root")
);
