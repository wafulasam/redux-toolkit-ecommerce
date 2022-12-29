import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action)=> {
            const todo = { item: action.payload, time: new Date().getTime() };
            return [...state, todo]
        },
    }
})

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;