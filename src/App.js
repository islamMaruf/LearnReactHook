import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from "./component/use_state/HookCounter";
import HookCounterTwo from "./component/use_state_hook_with_prev_state/HookCounterTwo";
import HookCounterThree from "./component/use_state_hook_with_object/HookCounterThree";
import HookCounterFour from "./component/use_state_with_array/HookCounterFour";
import HookCounterEffect from "./component/use_effect_after_render/HookCounterEffect";

function App() {
    return (
        <div className="App">
            {/*  lesson 01*/}
            {/*<HookCounter/>*/}
            {/*lesson 02*/}
            {/*<HookCounterTwo/>*/}
            {/*lesson 03*/}
            {/*<HookCounterThree/>*/}
            {/*lesson 04*/}
            {/*<HookCounterFour/>*/}
            {/*Lesson 05*/}
            <HookCounterEffect/>
        </div>
    );
}

export default App;
