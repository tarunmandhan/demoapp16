import React from "react";
import SlotM from "./SlotMach";
// import "./App.css";

const items = ["🐇", "😨", "🥶", "😷", "🤠"];

const App = () => {
  return (
    <>
      <h1 className="Heading_style">
        🎰 Welcome to
        <span className=" head_design "> Slot machine game </span> 🎰
      </h1>

      <div className="roll">
        <SlotM x="😰" y="😰" z="😰" />
        <hr />
        <SlotM x="🐇" y="🐇" z="🐇" />
        <hr />
        <SlotM x="😰" y="🐤" z="🐤" />
        <hr />
        <SlotM x="🤠" y="🤠" z="🤠" />
        <hr />
      </div>

      <SlotM />
    </>
  );
};

export default App;
