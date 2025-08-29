import React from "react";
import style from "./button.module.css";
function Button({ number, input, setInput }) {
	const handleButton = (buttonText) => {
		if (buttonText === "C") {
			setInput("");
			return;
		} else if (buttonText === "=") {
			const result = eval(input);
			setInput(result);
			return;
		}
		setInput((prev) => prev + buttonText);
	};
	return (
		<div className={style.buttonContainer}>
			{number.map((buttonText, index) => {
				return (
					<button
						key={index}
						className={style.button}
						onClick={() => handleButton(buttonText)}
					>
						{buttonText}
					</button>
				);
			})}
		</div>
	);
}

export default Button;
