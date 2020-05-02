import React from 'react';
import useInput from '../hooks/useInput'
function UserForm() {
    const [firsName, bindFirstName,resetFirstName] = useInput('');
   const [lastName, bindLastName,resetLastName] = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`hello ${firsName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" { ...bindFirstName }/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" { ...bindLastName} />
                </div>
                <input type="submit" value="submit"/>

            </form>
        </div>
    );
}

export default UserForm;