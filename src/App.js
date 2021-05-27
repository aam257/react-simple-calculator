import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

import * as math from "mathjs";

function App() {
  const [cal, setCalState] = useState({ input: "" });

  const addToInput = (val) => {
    setCalState({ input: cal.input + val });
  };

  const handleEqual = () => {
    setCalState({ input: math.evaluate(cal.input) });
  };

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={cal.input}></Input>
        <div className="row">
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={() => handleEqual()}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setCalState({ input: "" })}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
