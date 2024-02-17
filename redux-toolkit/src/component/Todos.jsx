import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeToDo } from '../app/features/todo/todoSlice';

export default function Todos() {
   const todos =  useSelector(state => state.todos)
  //  console.log(todos)
   const dispatch = useDispatch();
  return (
    <div>
      <div>TODOS</div>
      <div>
  {todos?.map((todo, idx) => (
    <ul >
      <li key={idx}>
        <p>{todo.text}</p>
        <button onClick={() => dispatch(removeToDo(todo.id))}>x</button>
      </li>
    </ul>
  ))}
</div>

    </div>
  )
}
