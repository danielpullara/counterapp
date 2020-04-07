import React from 'react';
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Bitna from './components/Bitna'

function App() {
  let countNum = useSelector(state => state.countNum);
  let dispatch = useDispatch();

  let incrementNumber = () => {
    dispatch({ type: 'INCREMENT', payload: { num: 1, name: "Bitna" } })
  }
  let decrementNumber = () => {
    dispatch({ type: 'DECREMENT', payload: { num: 1, name: "Bitna" } })
  }
  let resetNumber = () => {
    dispatch({ type: 'RESET', payload: { num: 1, name: "Bitna" } })
  }
  let changeColor = () => {
    dispatch({ type: 'CHANGE_COLOR', payload: { num: 1, name: "Bitna" } })
  }

  return (
    <div className="App">
      <h2>{countNum}</h2>
      <button onClick={() => incrementNumber()} >Increment</button>
      <button onClick={() => decrementNumber()} >Decrement</button>
      <button onClick={() => resetNumber()}>Reset</button>
      <input onChange={() => changeColor()} ></input>
      
      <Bitna countNum={countNum} />
    </div>
  );
}

export default App;
