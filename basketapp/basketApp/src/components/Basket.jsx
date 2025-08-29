import React from "react";

function Basket({ name, count }) {
	return (
		<div className="basket">
			<h2>{count} Apples</h2>
			<h1>{name}</h1>
		</div>
	);
}

export default Basket;
