import React, { useState} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle.js'
function DocTitleOne(props) {
    const [count,setCount] = useState(0);
    useDocumentTitle(count);
    return (
        <div>
            <button onClick={() => {setCount(count +1)}}>inc-{count}</button>
        </div>
    );
}

export default DocTitleOne;