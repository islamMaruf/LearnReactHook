import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from "./component/use_state/HookCounter";
import HookCounterTwo from "./component/use_state_hook_with_prev_state/HookCounterTwo";

function App() {
  return (
    <div className="App">
      {/*  lesson 01*/}
      {/*<HookCounter/>*/}
      {/*lesson 02*/}
    <HookCounterTwo/>
    </div>
  );
}

export default App;
