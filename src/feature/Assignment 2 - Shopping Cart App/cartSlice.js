const { createSlice} = require('@reduxjs/toolkit')

const initialState = {
    items: JSON.parse(localStorage.getItem("cart")) || [] //[{id, name, price, quantity}]
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state,action) {
            const existing = state.items.find(x=> x.id === action.payload.id)
            
            if (existing) {
                existing.quantity +=1;
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeItem(state,action) {
            state.items = state.items.filter(x => x.id !== action.payload)
        },
        updateItem(state,action) {
            const { id, type} = action.payload
            const item = state.items.find(x=> x.id === id)

            if (type === 'inc') item.quantity +=1;
            if (type === 'dec') {
                if (item.quantity === 1) {
                    state.items=state.items.filter(x=> x.id !== item.id)
                } else {
                    item.quantity -=1;
                }
            }
        },

    }
});

const { actions, reducer } = cartSlice;
export const { addItem, removeItem, updateItem } = actions;
export default reducer;
