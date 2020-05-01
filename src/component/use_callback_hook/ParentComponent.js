import React, {useState, useCallback} from 'react';
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

function ParentComponent(props) {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(10000);
    const incAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);
    const incSalary = useCallback(() => {
        setSalary(salary + 1);
    }, [salary]);
    return (
        <div>
            <Title/>
            <Count text="age" count={age}/>
            <Button handleClick={incAge}>inc age</Button>
            <Count text="salary" count={salary}/>
            <Button handleClick={incSalary}>inc salary</Button>
        </div>
    );
}

export default ParentComponent;