import cartReducer from '../feature/Assignment 2 - Shopping Cart App/cartSlice'
import { configureStore } from "@reduxjs/toolkit";
import { saveCart } from '../utils/localStorage';

const rootReducer = {
    cart: cartReducer
}
const store = configureStore({
    reducer: rootReducer,
})
store.subscribe(() => {
  saveCart(store.getState().cart.items);
});
export default store;