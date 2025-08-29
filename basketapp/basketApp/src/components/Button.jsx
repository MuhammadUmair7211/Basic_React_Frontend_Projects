import React from "react";

function Button({ image, title, clickHandler }) {
	return (
		<button title={title} onClick={clickHandler}>
			<img src={image} alt="arrow" />
		</button>
	);
}

export default Button;
