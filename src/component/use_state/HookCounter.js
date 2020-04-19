import React, {useState} from "react";

function HookCounter() {
    const [count, setCount] = useState(0);

    function increaseCounter() {
        setCount(count +1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increaseCounter}>Increase</button>
        </div>
    );
}

export default HookCounter