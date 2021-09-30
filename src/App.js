import React, { useState } from "react";
import "./styles.css";
var foodDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot"
};

var foodWeKnow = Object.keys(foodDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function foodInputHandler(event) {
    var userInput = event.target.value;
    var meaning = foodDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Oops! we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function foodClickHandler(food) {
    var meaning = foodDictionary[food];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Food Emoji-Pedia</h1>
      <input onChange={foodInputHandler} placeholder="Enter Any Food Emoji" />
      <h2>{meaning}</h2>
      {foodWeKnow.map(function (food) {
        return (
          <span
            onClick={() => foodClickHandler(food)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={food}
          >
            {food}
          </span>
        );
      })}
    </div>
  );
}
