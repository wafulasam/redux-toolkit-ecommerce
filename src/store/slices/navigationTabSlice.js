import { createSlice } from "@reduxjs/toolkit";

export const navigationTabSlice = createSlice({
    name:'navigation-tabs',
    initialState: { value: 'shop' },
    reducers: {
        navigate: (state, action)=> { state.value = action.payload },
    }
})

export const { navigate } = navigationTabSlice.actions;
export default navigationTabSlice.reducer;