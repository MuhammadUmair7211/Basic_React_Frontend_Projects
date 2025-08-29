import { useState } from "react";
import "./App.css";
import Basket from "./components/Basket";
import Button from "./components/Button";

import leftArrow from "./images/left-arrow.png";
import rightArrow from "./images/right-arrow.png";
function App() {
	const [leftBasketCount, setLeftBasketCount] = useState(10);
	const [rightBasketCount, setRightBasketCount] = useState(0);
	const leftClickHandle = () => {
		if (rightBasketCount === 0) return;
		setRightBasketCount(rightBasketCount - 1);
		setLeftBasketCount(leftBasketCount + 1);
		console.log("Left clicked");
	};
	const rightClickHandle = () => {
		if (leftBasketCount === 0) return;
		setLeftBasketCount(leftBasketCount - 1);
		setRightBasketCount(rightBasketCount + 1);
		console.log("right clicked");
	};
	return (
		<div className="container">
			<Basket name="Basket 1" count={leftBasketCount} />
			<div className="button">
				<Button
					image={leftArrow}
					title="Left Arrow"
					clickHandler={leftClickHandle}
				/>
				<Button
					image={rightArrow}
					title="Right Arrow"
					clickHandler={rightClickHandle}
				/>
			</div>
			<Basket name="Basket 2" count={rightBasketCount} />
		</div>
	);
}

export default App;
