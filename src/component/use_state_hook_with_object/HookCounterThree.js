import React, {useState} from "react";

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''});
    const handleFirstName = (e) => {
        setName({...name, firstName: e.target.value})
    }
    const handlelastName = (e) => {
        setName({...name, lastName: e.target.value})
    }
    const {firstName, lastName} = name;
    return (
        <div>
            <input type="text" placeholder="firstName" onChange={handleFirstName}/>
            <input type="text" placeholder="lastName" onChange={handlelastName}/>
            <p> firstName - <b> {firstName} </b> and last name - <b> {lastName}</b></p>
        </div>
    )


}

export default HookCounterThree;