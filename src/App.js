import React from 'react';
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from './components/Box'

function App() {
  let countNum = useSelector(state => state.countNum);
  let dispatch = useDispatch();
  let boxList = useSelector(state => state.boxList)

  let incrementNumber = () => {
    dispatch({ type: 'INCREMENT', payload: { num: 1, name: "Bitna" } })
  }
  let decrementNumber = () => {
    dispatch({ type: 'DECREMENT', payload: { num: 1, name: "Bitna" } })
  }
  let resetNumber = () => {
    dispatch({ type: 'RESET', payload: { num: 1, name: "Bitna" } })
  }
  let changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color })
  }
  let renderBox = () => {
    return boxList && boxList.map((item,index) => <Box id={index}/>)
  }


  return (
    <div className="App">
      <h2>{countNum}</h2>
      <button onClick={() => incrementNumber()} >Increment</button>
      <button onClick={() => decrementNumber()} >Decrement</button>
      <button onClick={() => resetNumber()}>Reset</button>
      <input onChange={(e) => changeColor(e.target.value )} ></input>
      <div>{renderBox()}</div>
    </div>
  );
}

export default App;
