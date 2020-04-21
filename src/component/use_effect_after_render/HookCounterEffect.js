import React, {useState, useEffect} from "react";

const HookCounterEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `you clicked ${count} times`;
    })
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>click
            </button>
        </div>
    );
};

export default HookCounterEffect;