import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from "./component/use_state/HookCounter";
import HookCounterTwo from "./component/use_state_hook_with_prev_state/HookCounterTwo";
import HookCounterThree from "./component/use_state_hook_with_object/HookCounterThree";
import HookCounterFour from "./component/use_state_with_array/HookCounterFour";
import HookCounterEffect from "./component/use_effect_after_render/HookCounterEffect";
import HookCounterConditional from "./component/use_effect_conditional_run/HookCounterConditional";
import MouseMove from "./component/use_effect_only_once/MouseMove";
import MouseContainer from "./component/use_effect_cleanup/MouseContainer";
import IntervalHookCounter from "./component/use_effect_with_incorrect_dependence/IntervalHookCounter";
import DataFetching from "./component/use_effect_fetch_data/DataFetching";

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
            {/*<HookCounterEffect/>*/}
            {/*lesson 06*/}
            {/*<HookCounterConditional/>*/}
            {/*lesson 07*/}
            {/*<MouseMove/>*/}
            {/*lesson 08*/}
            {/*<MouseContainer/>*/}
            {/*lesson09*/}
            {/*<IntervalHookCounter/>*/}
            {/*lesson10*/}
            <DataFetching/>
        </div>
    );
}

export default App;
