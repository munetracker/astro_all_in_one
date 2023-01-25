import React, { useState } from 'react';

export default function HelloReact(){
    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <h1>Test React {counter}</h1>
            <button onClick={() => setCounter(s => s+1)}> Add </button>
            <button onClick={() => setCounter(s => s-1)}> Minus </button>
        </div>
    )
}