import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux"


let initialState = {
  countNum: 0,
  color: 'pink',
  boxColors: [null],
}

function countReducer (state=initialState,action){
  if(action.type === 'INCREMENT'){
  state.countNum ++;  
  
  }if(action.type === 'DECREMENT'){
    state.countNum --;  
    
  }if(action.type === 'RESET'){
  state.countNum = state.countNum - state.countNum;  
  
  }if(action.type === 'CHANGE_COLOR'){
    state.color = action.payload 
    }
    
  return state;
}


const store = createStore(countReducer)

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
