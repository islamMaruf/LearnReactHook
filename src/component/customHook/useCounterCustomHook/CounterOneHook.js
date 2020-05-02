import React from 'react';
import useCounter from '../hooks/useCounter'

function CounterOneHook(props) {
    const {initial, increment, decrement, reset} = useCounter()

    return (
        <div>
            <p>count {initial}</p>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>res</button>
        </div>
    );
}

export default CounterOneHook;