import React from 'react';

function User(props) {
    const name = {
        name: "aaa", email:"aadd"}
    return (
        <div>
            <h1>HEllo USers</h1>
            <button onClick={() => props.name(name)}>class call</button>
        </div>
    );
}

export default User;
