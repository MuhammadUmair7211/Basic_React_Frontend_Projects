import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
function Counter() {
	const count = useSelector((store) => store.count);
	const dispatch = useDispatch();
	const inputElement = useRef();
	const handleIncrement = () => {
		dispatch({ type: "INCREMENT" });
	};
	const handleDecrement = () => {
		dispatch({ type: "DECREMENT" });
	};
	const handleAdd = () => {
		dispatch({ type: "ADD", payload: { num: inputElement.current.value } });
		inputElement.current.value = "";
	};
	const handleSubtract = () => {
		dispatch({
			type: "SUBTRACT",
			payload: { num: inputElement.current.value },
		});
		inputElement.current.value = "";
	};
	return (
		<div className="counter-container">
			<h1>Counter</h1>
			<p>The value of Count : {count}</p>
			<div className="input-container">
				<input type="text" placeholder="Enter number" ref={inputElement} />
				<div>
					<button onClick={handleAdd} className="add-button">
						Add
					</button>
					<button onClick={handleSubtract} className="subtract-button">
						subtract
					</button>
				</div>
			</div>
			<div>
				<button onClick={handleIncrement}>+1</button>
				<button onClick={handleDecrement}>-1</button>
			</div>
		</div>
	);
}

export default Counter;
