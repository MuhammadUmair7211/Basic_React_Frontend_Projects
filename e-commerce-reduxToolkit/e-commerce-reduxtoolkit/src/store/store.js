import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
	name: "cartReducer",
	initialState: {
		cartItem: 0,
	},
	reducers: {
		AddToCart: (state, action) => {
			state.cartItem += 1;
		},
		RemoveFromCart: (state, action) => {
			return state;
		},
	},
});

const myStore = configureStore({
	reducer: {
		cartReducer: cartReducer.reducer,
	},
});
export const { AddToCart, RemoveFromCart } = cartReducer.actions;
console.log(cartReducer.actions);
export default myStore;
