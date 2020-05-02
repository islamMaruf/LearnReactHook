import React from 'react';
import useCounter from '../hooks/useCounter'

function CounterTwoHook(props) {
    const {initial, increment, decrement, reset} = useCounter(10,2);



    return (
        <div>
            <p>count {initial}</p>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>res</button>
        </div>
    );
}

export default CounterTwoHook;