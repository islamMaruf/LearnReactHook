import React, {useState, useEffect} from "react";

function MouseMove() {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const logMousePosition = (e) => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        window.addEventListener('mousemove',logMousePosition)
    },[])
    return (
        <div>
            <p>Hooks X - {X} and Y - {Y} </p>
        </div>
    );
}

export default MouseMove;