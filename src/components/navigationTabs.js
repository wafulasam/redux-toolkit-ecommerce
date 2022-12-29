import React from "react";
import { useDispatch } from "react-redux";
import { navigate } from "../store/slices/navigationTabSlice"

const NavigationTabs = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=> dispatch(navigate('counter'))}>counter</button>
            <button onClick={()=> dispatch(navigate('todo'))}>todo</button>
            <button onClick={()=> dispatch(navigate('shop'))}>shop</button>
        </div>
    )
}

export default NavigationTabs;