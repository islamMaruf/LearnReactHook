import React from 'react';
import ComponentD from "./ComponentD";

function ComponentB(props) {
    return (
        <div>
            Component B
            <ComponentD/>
        </div>
    );
}

export default ComponentB;