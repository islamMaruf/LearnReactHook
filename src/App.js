import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from "./component/use_state/HookCounter";
import HookCounterTwo from "./component/use_state_hook_with_prev_state/HookCounterTwo";
import HookCounterThree from "./component/use_state_hook_with_object/HookCounterThree";

function App() {
    return (
        <div className="App">
            {/*  lesson 01*/}
            {/*<HookCounter/>*/}
            {/*lesson 02*/}
            {/*<HookCounterTwo/>*/}
            {/*lesson 03*/}
            <HookCounterThree/>
        </div>
    );
}

export default App;
