import React, {useContext} from 'react';
import {CounterContext} from "../../App";

function ComponentF(props) {
    const countContext = useContext(CounterContext);
    return (
        <div>
            ComponentF - { countContext.countState }
            <button onClick={() => countContext.countDispatch('increment')}>inc</button>
            <button onClick={() => countContext.countDispatch('decrement')} >dec</button>
            <button onClick={() => countContext.countDispatch('reset')}>res</button>
        </div>
    );
}

export default ComponentF;