import "./App.css";
import ListItem from "./components/ListItem";
import NewItem from "./components/NewItem";
import React, { useState } from "react";

const dummyText = ["Learn React", "Do all Exercises!", "Finish the Course"];

function App() {
  return (
    <div className="App">
      <NewItem></NewItem>
      <br>New Change2</br>
      <br></br>
      {goals.map((goal, index) => {
        return <ListItem key={index} name={goal}></ListItem>;
      })}
    </div>
  );
}

export default App;
