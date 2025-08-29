import React from "react";

function ShoppingCart() {
	const handleRemoveFromCart = () => {};
	return (
		<div className="pt-16">
			<h1 className="text-center">My Shopping Cart</h1>
			<div className="flex flex-col justify-between py-2 max-w-[300px] m-3 bg-white border border-gray-200 mx-auto rounded-lg shadow-sm">
				<div>
					<a href="#">
						<img className="rounded-t-lg w-[150px] mx-auto" src="/" alt="" />
					</a>
				</div>

				<div className="p-5">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							title
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						description
					</p>
					<div>
						<p>Category: category</p>
						<h2>Price:price</h2>
						<p>
							Rating: <span className="text-green-900">rate</span> stars
						</p>
						<p>Count: count</p>
					</div>
				</div>
				<button
					className="bg-blue-700 px-4 py-1 text-white rounded-lg"
					onClick={handleRemoveFromCart}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
}

export default ShoppingCart;
