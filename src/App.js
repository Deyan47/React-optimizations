import React, { useCallback, useMemo, useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import Demo from "./components/Demo/Demo";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  // now we'll not sort the list unnecessery again and again

  return (
    <div className="app">
      <Demo title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change Title</Button>
    </div>
  );
}
// Batching:
// React React groups multiple state updates into a single re-render for better performance
export default App;
