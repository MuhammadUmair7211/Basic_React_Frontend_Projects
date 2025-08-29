import React from "react";
import style from "./input.module.css";

function Input({ input, setInput }) {
	const handleInput = (e) => {
		console.log(e.target.value);
		setInput(e.target.value);
	};
	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={handleInput}
				className={style.inputField}
				placeholder="00"
				readOnly
			/>
		</div>
	);
}

export default Input;
