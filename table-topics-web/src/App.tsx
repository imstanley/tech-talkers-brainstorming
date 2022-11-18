import { useState } from "react";
import topics from "./assets/topics.json";

const App = () => {
  const [topicIndex, setTopicIndex] = useState(0);

  const handleClickNewTopic = () => {
    setTopicIndex(Math.floor(Math.random() * topics.length));
  };

  return (
    <div>
      <div className="underline mt-2">{topics[topicIndex]}</div>

      <button onClick={handleClickNewTopic}>New Topic</button>
    </div>
  );
};

export default App;
