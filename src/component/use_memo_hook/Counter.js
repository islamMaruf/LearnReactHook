import React, {useState, useMemo} from 'react';

function Counter(props) {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    const incCounterOne = () => {
        setCounterOne(counterOne + 1)
    };
    const incCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    };
    const isOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i++;
        return !!(counterOne % 2)
    }, [counterOne]);
    return (
        <div>
            <button onClick={incCounterOne}>inc</button>
            <span>count {counterOne} ----- {isOdd ? 'odd' : ''}</span> <br/>
            <button onClick={incCounterTwo}>inc</button>
            <span>count {counterTwo} </span>
        </div>
    );
}

export default Counter;