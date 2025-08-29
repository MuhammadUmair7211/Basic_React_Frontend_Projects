import React from "react";
import { Link } from "react-router-dom";

function Button() {
	return (
		<div>
			<Link to="counter">
				<button>Click to go The Counter Page</button>
			</Link>
		</div>
	);
}

export default Button;
