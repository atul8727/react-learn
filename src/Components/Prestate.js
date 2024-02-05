import React,{useState} from 'react';

function Prestate(props) {
    let [count, setCount] = useState(1);

    function updateCounter(e) {
        e.preventDefault();
        let rand = Math.floor(Math.random() * 10);
        setCount((pre) => {
            console.warn(pre)
            if ((pre - rand) < 5) {
                alert("ok");
            }
            return rand;
        });
    }
    return (
        <div>
            <h1>Prev</h1>
            <h1>count{count}</h1>
            <button onClick={updateCounter}>click</button>
        </div>
    );
}

export default Prestate;
