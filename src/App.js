import React, { useState } from "react";
import "./styles.css";
//var userName = prompt("Enter your name,please.");

//creating emoji dictonary object = dictionary in js
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

export default function App() {
  var [useroutput, setUseroutput] = useState("");
  const emojis = Object.keys(emojiDictionary);
  // var likeCounter = 0;
  // function likeEventHandler() {
  //   likeCounter += 1;
  //   console.log(likeCounter);
  // }
  function clickHandler(emoji) {
    setUseroutput(emojiDictionary[emoji]);
  }
  function inputChangeHandler(event) {
    //for every time a change is made this is encountered.
    //console.log(event.target.value);

    var emoji = event.target.value;
    setUseroutput(emojiDictionary[emoji]);
    console.log(useroutput);
    if (useroutput === undefined) {
      setUseroutput("we dont have this in our db");
    }
  }
  return (
    <div className="App">
      <h1> EMOJI DICTIONARY </h1>
      <input onChange={inputChangeHandler} />
      <div style={{ padding: "1rem", fontSize: "large" }}>
        <h2>{useroutput}</h2>
      </div>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
      ;
    </div>
  );
}
