import React from "react";
import '../components/css/cart.css'
import { useState } from "react";

function Cart(){
    const [cartItems, setCartItems] = useState([]);
    return(
        <div className="cart-items">
            <div className="cart-items-header">Cart Items</div>\
            {cartItems.length===0 && (
                <div className="cart-items-empty">No items in the cart</div>
            )}
            <div>
                {cartItems.map((item)=>(
                    <div key={item.id} className="cart-items-list">
                        <img className="cart-items-image" src={item.image} alt={item.name}></img>
                    </div>
                ))}
            </div>

        </div>
    );
}
export default Cart;