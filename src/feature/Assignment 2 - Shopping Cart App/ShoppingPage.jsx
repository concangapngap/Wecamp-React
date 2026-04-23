import React from "react";  
import './style.scss'
import Cart from "./Cart";
import { addItem } from "./cartSlice";
import { useDispatch } from "react-redux";
import CartSummary from "./CartSummary";

function ShoppingPage () {
    const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 200 },
    ]; 

    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="left">
                <h3>Products</h3>
                <ul>
                    {products.map(x=> <li key={x.id}>{x.name} - {x.price} <button onClick={() => dispatch(addItem(x))}>Add to cart</button></li>)}
                </ul>
            </div>
            <div className="right">
                <h3>Cart</h3>
                <Cart />
                <h4>Cart summary</h4>
                <CartSummary />

            </div>
        </div>
    )
}
export default ShoppingPage;