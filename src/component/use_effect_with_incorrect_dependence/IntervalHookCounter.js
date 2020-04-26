import React, {useState, useEffect} from "react";

function IntervalHookCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        //function used in used in use effect declare here
        const tick = () => {
            setCount(count + 1)
        };

        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval)
        }
        //add dependence
    }, [count]);

    return (
        <div>{count}</div>
    )

}

export default IntervalHookCounter;