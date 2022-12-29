import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state)=> { state.value += 1 },
        decrement: (state)=> { state.value -= 1 },
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // this is for dispatch
export default counterSlice.reducer; // this is for configure store