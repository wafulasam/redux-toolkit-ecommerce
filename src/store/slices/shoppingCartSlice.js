import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name:'shopping-cart',
    initialState: [],
    reducers: {
        addToCart: (state, action)=> {
            const itemInCart = state.find((item)=> item.id === action.payload.id);
            if(itemInCart){
                itemInCart.quantity++;
            } else{
                const newItem = {...action.payload, ...{ quantity: 1 }};
                return [...state, newItem]
            }
        },
    }
})

export const { addToCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;