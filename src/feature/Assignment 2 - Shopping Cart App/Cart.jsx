import React from "react";  
import { useDispatch, useSelector } from "react-redux";
import { updateItem, removeItem } from "./cartSlice";


function Cart () {
    const dispatch = useDispatch();
    const item = useSelector(state => state.cart.items)

    return (
        <div>
            <ol>
                {item.map(x=> <li> 
                    Name: {x.name} <p/>
                    Price: {x.price} <p/>
                    Quantity: {x.quantity} <p/>
                    Total: {x.price* x.quantity}  <p/>
                    <button onClick={() => dispatch(updateItem({id: x.id, type: "dec"}))}>-</button>
                    {x.quantity}
                    <button onClick={() => dispatch(updateItem({id: x.id, type: "inc"}))}>+</button>
                    <button onClick={() => dispatch(removeItem(x.id))}>Remove</button>
                </li>)}
            </ol>
        </div>
    )
}
export default Cart;