import {useState} from 'react';

function UseInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const resetValue = () => {
        setValue(initialValue)
    }
    const bind = {
        value,
        onChange : event => {
            setValue(event.target.value)
        }
    }

    return [value,bind,resetValue]

}

export default UseInput;