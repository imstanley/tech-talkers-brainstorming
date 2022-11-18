import { useState } from "react";
import "./App.css";
import topics from "./assets/topics.json";

const App = () => {
  const [topicIndex, setTopicIndex] = useState(0);

  const handleClickNewTopic = () => {
    setTopicIndex(Math.floor(Math.random() * topics.length));
  };

  return (
    <div>
      {topics[topicIndex]}

      <button onClick={handleClickNewTopic}>New Topic</button>
    </div>
  );
};

export default App;
