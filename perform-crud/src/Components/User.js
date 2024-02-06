import React,{useEffect,useRef} from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function User(props) {

    let lastVal = useRef();

    useEffect(() => {
        lastVal.current=props.count
    })
    let la = lastVal.current;
    let params = useParams();
    let { name } = params;

    return (
        <div>
            {/* <h1>This is {name} page</h1> */}
            <h1>{la}USER Components{props.count}</h1>
        </div>
    );
}

export default User;
