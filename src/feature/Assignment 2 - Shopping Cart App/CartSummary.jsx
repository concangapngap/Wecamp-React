import React from "react";  
import { useSelector } from "react-redux";

function CartSummary () {
    const item = useSelector(state => state.cart.items)

    return (
        <div>
            <p>
            Total number of items: {item.reduce((sum,i) => sum += i.quantity ,0)}
            </p>
            <p>
            Total price of the cart : {item.reduce ((sum,i) => sum += i.price *i.quantity, 0)}
            </p>
        </div>
    )
}
export default CartSummary;