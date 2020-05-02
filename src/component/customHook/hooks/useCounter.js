import {useState} from 'react';

function UseCounter(initialCount = 0,by = 1) {
    const [counter, setCounter] = useState(initialCount);
    const incCounter = () => {
        setCounter(prevCounter => prevCounter + by)
    }
    const decCounter = () => {
        setCounter(prevCounter => prevCounter - by)
    }
    const resCounter = () => {
        setCounter(0)
    }
    return {initial: counter, increment: incCounter, decrement: decCounter, reset: resCounter};
}

export default UseCounter;