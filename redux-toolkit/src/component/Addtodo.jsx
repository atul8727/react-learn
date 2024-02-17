import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDO } from '../app/features/todo/todoSlice';

export default function Addtodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addToDO(input))
        setInput('');
    }
    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <label>
                    Username:
                    <input type="text" name="username" value={input} onChange={(e)=> setInput(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>

        </div >
    )
}
