import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import topics from "./assets/topics.json";

console.log(topics);

function App() {
  return (
    <div>
      {topics.map((topic: string) => (
        <div>{topic}</div>
      ))}
    </div>
  );
}

export default App;
