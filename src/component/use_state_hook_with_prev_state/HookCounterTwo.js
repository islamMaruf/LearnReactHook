import React, {useState} from 'react';

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    function incrementCount() {
        setCount(prevState => {
            return prevState + 1;
        })
    }

    function decrementCount() {
        setCount(prevState => {
            return prevState - 1;
        })
    }

    function reset() {
        setCount(initialCount)
    }

    return (
        <div>
            <p>Count- {count}</p>
            <button onClick={incrementCount}>Increase [+]</button>
            <button onClick={decrementCount}>Decrease [-]</button>
            <button onClick={reset}>Reset [0]</button>
        </div>
    )

}

export default HookCounterTwo;