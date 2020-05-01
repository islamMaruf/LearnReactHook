import React, {useContext} from 'react';
import {CounterContext} from "../../App";

function ComponentA() {
    const countContext = useContext(CounterContext);
    return (
        <div>
            Component A - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>inc</button>
            <button onClick={() => countContext.countDispatch('decrement')} >dec</button>
            <button onClick={() => countContext.countDispatch('reset')}>res</button>
        </div>
    );
}

export default ComponentA;