import React, {useReducer} from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value};
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value};
        case 'reset':
            return initialState;
        default:
            return ;

    }
};

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{count.firstCounter} - {count.secondCounter}</h1>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>IncrementBy5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>DecrementBy5</button>
            <button onClick={() => dispatch({type: 'increment2', value: 10})}>secondIncrementBy10</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 10})}>secondDecrementBy10</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo;