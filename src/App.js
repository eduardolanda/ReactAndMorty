import React from "react";
import "./App.css";

//Components
import Characters from "./components/Characters";

const App = () => {
  return (
    <div className="App">
      <h1 className="Title">React And Morty</h1>
      <Characters />
    </div>
  );
};

export default App;
