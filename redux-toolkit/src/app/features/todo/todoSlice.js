import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello World" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDO: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeToDo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addToDO,removeToDo } = todoSlice.actions;

export default todoSlice.reducer