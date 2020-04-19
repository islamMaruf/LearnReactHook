import React, {useState} from "react";

function HookCounterFour() {
    const [items, setItem] = useState([]);

    function addItem() {
        setItem([
            ...items, {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }])
    }

    return (
        <div>
            <ul>
                {
                    items.map((item) => {
                        return <li key={item.id}>{item.value} </li>
                    })
                }
            </ul>
            <button onClick={addItem}>Add Item [+]</button>
        </div>
    )
}


export default HookCounterFour;