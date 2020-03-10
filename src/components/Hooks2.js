import React, { useState, useEffect } from 'react';

export default function Hooks2() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title=`count ${counter}`
        console.log(counter)
    },[counter])

    function increase() {
        setCounter(counter + 1);
    }
    
    function decrease() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increase}> + </button>
            <button onClick={decrease}> - </button>
        </div>
    )
}
