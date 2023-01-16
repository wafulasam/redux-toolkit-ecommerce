import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "../store/slices/navigationTabSlice"

const NavigationTabs = () => {
    const shoppingCart = useSelector((state)=> state.shoppingCart);
    const totalItemsInCart = shoppingCart.reduce((a, b) => a + b.quantity, 0);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=> dispatch(navigate('counter'))}>counter</button>
            <button onClick={()=> dispatch(navigate('todo'))}>todo</button>
            <button onClick={()=> dispatch(navigate('shop'))}>shop</button>
            <button onClick={()=> dispatch(navigate('cart'))}>cart {totalItemsInCart}</button>
        </div>
    )
}

export default NavigationTabs;