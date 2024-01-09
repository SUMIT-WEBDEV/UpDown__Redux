import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div onClick={() => dispatch(increment())}>+++++</div>

      <div>{myState}</div>
      
      <div onClick={() => dispatch(decrement())}>-----</div>
    </div>
  );
}

export default App;
