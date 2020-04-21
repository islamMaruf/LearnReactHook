import React, {useEffect, useState} from "react";
import MouseMove from "../use_effect_only_once/MouseMove";

function MouseContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => {setDisplay(!display)}}>Toggle Display</button>
            {
                display && <MouseMove/>
            }
        </div>
    );
}

export default MouseContainer;