import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [values, setValues] = useState([
		"Category",
		"Customer",
		"Price",
		"Brand",
	]);
	let valuesIndex = 0;
	useEffect(() => {
		let intervalId = setInterval(() => {
			if (valuesIndex < values.length) {
				setValues(values[valuesIndex]);
				valuesIndex++;
			} else {
				valuesIndex = 0;
			}
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);
	return (
		<div className="container">
			<label htmlFor="">
				Search by <span>"{values}"</span>
			</label>
			<input type="text" />
		</div>
	);
}

export default App;
