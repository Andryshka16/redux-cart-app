import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../Components/Cart/cartItems';

const initialState = {
	cartItems,
	amount: cartItems.length,
    total: cartItems.reduce(
        (a, b) => (Number(a.price) || a) + Number(b.price)
    ),
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
			state.total = 0;
        },
        
        removeItem: (state, { payload }) => {
            const {cartItems} = state
            state.cartItems = cartItems.filter(({ id }) => id !== payload);
        },
        
		changeAmount: (state, { payload }) => {
			const { ID, sign } = payload;
			let item = state.cartItems.find(({ id }) => id === ID);
			item.amount = item.amount + sign;
        },
        
        updateTotal: (state) => {
            const {cartItems}  = state
            let total = 0
            cartItems.forEach(({ price, amount }) =>
                total += amount * Number(price))
            state.total = total.toFixed(2)
        }

	},
});

export const { clearCart, removeItem, changeAmount, updateTotal } = cartSlice.actions;

export default cartSlice.reducer