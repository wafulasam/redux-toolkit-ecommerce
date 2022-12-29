import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slices/counterSlice"

const Counter = () => {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=> dispatch(decrement())}>dec</button>
            <span>{count}</span>
            <button onClick={()=> dispatch(increment())}>inc</button>
        </div>
    )
}

export default Counter;