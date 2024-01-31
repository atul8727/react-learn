import React,{useRef} from 'react';

function Fref() {

    let inputRef = useRef(null)

    function handleInput(params) {
        alert("Cas")

    }
    return (
        <div>
            <h1>function ref</h1>
            <input type='text' ref={inputRef}></input>
            <button onClick={handleInput}>demno</button>

        </div>
    );
}

export default Fref;
