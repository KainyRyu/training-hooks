import React, { useState } from 'react';

export default function Hooks1() {
    const [counter, setCounter] = useState(0);

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
