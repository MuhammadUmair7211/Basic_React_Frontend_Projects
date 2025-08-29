import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
	const cartItems = useSelector((state) => state.cartReducer.cartItem);
	return (
		<div className="flex items-center justify-between flex-wrap px-4 bg-blue-500 text-white fixed top-0 w-full">
			<a href="/" className="text-xl">
				Shopee
			</a>
			<div className="flex flex-col items-center cursor-pointer">
				<h1>{cartItems}</h1>
				<Link to="/shoppingCart">
					<CiShoppingCart size={30} />
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
