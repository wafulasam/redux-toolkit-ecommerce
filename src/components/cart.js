import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const shoppingCart = useSelector((state)=> state.shoppingCart);
    const totalCostPerItem = shoppingCart.map(item => item.price * item.quantity);
    const totalCostForAllItems = totalCostPerItem.reduce((a,b)=> a + b, 0);

    return (
        <div>
            <h2>cart</h2>
            <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
            {shoppingCart?.map(product => (
                    <div key={product.id} style={{border:'1px gray solid'}}>
                        <img src={product.image} alt={product.image} height={50}/>
                        <p>ksh {product.price} count: {product.quantity}</p>
                        <p>{(product.price * product.quantity)}</p>
                    </div>
                ))}
            </div>
            <p><b>total:</b>{totalCostForAllItems}</p>
        </div>
    )
}

export default Cart;