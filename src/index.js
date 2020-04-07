import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux"


let initialState = {
  countNum: 0,
  boxList: [],
  backgroundColor :''
}

function countReducer (state=initialState,action){
  if(action.type === 'INCREMENT'){
  state.countNum ++;  
  state.boxList.push('')
  
  }else if(action.type === 'DECREMENT'){
    if(state.countNum === 0){
      state.countNum = 0
    }else{
    state.countNum --;  
    state.boxList.pop();
    }
  
  }else if(action.type === 'RESET'){
        state.countNum = action.payload; 
  }else if(action.type === 'CHANGE_COLOR'){
    state.backgroundColor = action.payload 
  }else if(action.type === 'SINGLECOLOR'){
    state.boxList[action.payload.id] = action.payload.color 
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
