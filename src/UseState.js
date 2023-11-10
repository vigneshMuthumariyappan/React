import React from "react";
import { useState } from "react"

const array = ['Tamil', 'English', 'Match', 'Science', 'Social Science'];

const random = () => {
    return Math.floor(Math.random() * 5);
}
const UseStateExample = () => {

    const [name1, setName1] = useState("Tamil");

    const Message = (e) => {
        setName1(array[random()]);
    }
    
    return (
        <div className="App">
            <h1>{name1}</h1>
            <button onClick={(e) => Message(e)}>Fail</button>
        </div>
    );
}
export default UseStateExample;
