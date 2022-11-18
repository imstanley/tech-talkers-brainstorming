import { useState } from "react";
import "./App.css";
import topics from "./assets/topics.json";

const App = () => {
  const [topicIndex, setTopicIndex] = useState(0);

  const handleClickNewTopic = () => {
    setTopicIndex(Math.floor(Math.random() * topics.length));
  };

  return (
    <div className="flex flex-row">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="underline">{topics[topicIndex]}</div>

      <button onClick={handleClickNewTopic}>New Topic</button>
    </div>
  );
};

export default App;
