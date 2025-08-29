import React, { useState } from "react";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { AddToCart } from "../store/store";
function Products() {
	const [product, setProduct] = useState(products);
	const dispatch = useDispatch();
	const handleAddToCart = () => {
		dispatch(AddToCart());
	};
	return (
		<div className="flex flex-wrap pt-16">
			{product.map((item) => {
				return (
					<div
						key={item.id}
						className="flex flex-col justify-between py-2 max-w-[300px] m-3 bg-white border border-gray-200 mx-auto rounded-lg shadow-sm"
					>
						<div>
							<a href="#">
								<img
									className="rounded-t-lg w-[150px] mx-auto"
									src={item.image}
									alt=""
								/>
							</a>
						</div>

						<div className="p-5">
							<a href="#">
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{item.title}
								</h5>
							</a>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{item.description}
							</p>
							<div>
								<p>Category: {item.category}</p>
								<h2>Price: ${item.price}</h2>
								<p>
									Rating:{" "}
									<span className="text-green-900">{item.rating.rate}</span>{" "}
									stars
								</p>
								<p>Count: {item.rating.count}</p>
							</div>
						</div>
						<button
							className="bg-blue-700 px-4 py-1 rounded-lg text-white"
							onClick={() => handleAddToCart(item)}
						>
							Add to Cart
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default Products;
