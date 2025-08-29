import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			const exist = state.find((item) => item.id === action.payload.id);
			if (!exist) {
				state.push(action.payload);
			}
		},
		removeFromCart: (state, action) => {
			return state.filter((e) => e.id !== action.payload.id);
		},
	},
});
export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
