import React, {useState, useEffect} from "react";

const HookCounterConditional = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('updating dom');
        document.title = `you clicked ${count} times`;
    },[count]);
    return (
        <div>
            <p>{count}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => {
                setCount(count + 1)
            }}>click
            </button>
        </div>
    );
};

export default HookCounterConditional;