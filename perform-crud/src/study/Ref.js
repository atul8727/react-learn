import React, { Component,createRef } from 'react';

class Ref extends Component {
    constructor() {
        super();
        this.inputRef = createRef();

    }
    getVal() {
        this.inputRef.current.value=1000
    }
    render() {
        return (
            <div>
                <h1>Ref</h1>
                <input type='text' ref={this.inputRef} />
                <button onClick={()=>this.getVal()}>useref</button>
            </div>
        );
    }
}

export default Ref;
