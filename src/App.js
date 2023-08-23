import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import Demo from "./components/Demo/Demo";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App running"); // check re-evaluation

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => {
        return !prevState;
      });
    }
  }, [allowToggle]);
  // we know that this function will never change and we use useCallback to store it

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Show paragraph</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
    </div>
  );
}

export default App;
