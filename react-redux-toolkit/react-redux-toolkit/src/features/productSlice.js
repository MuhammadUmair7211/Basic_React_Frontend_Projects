import { createSlice } from "@reduxjs/toolkit";
import { products } from "../ProductData/Products";

const productSlice = createSlice({
	name: "products",
	initialState: products,
	reducers: {},
});
export default productSlice.reducer;
