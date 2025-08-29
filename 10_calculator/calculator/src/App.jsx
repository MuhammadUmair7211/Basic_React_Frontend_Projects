import { useState } from "react";
import "./App.css";
import Button from "./assets/components/Button";
import Input from "./assets/components/Input";

function App() {
	const [input, setInput] = useState("");
	const buttonArray = [
		"C",
		"+",
		"%",
		"/",
		"7",
		"8",
		"9",
		"*",
		"4",
		"5",
		"6",
		"-",
		"1",
		"2",
		"3",
		".",
		"00",
		"0",
		"^",
		"=",
	];

	return (
		<div className="calculator">
			<Input input={input} setInput={setInput} />
			<Button number={buttonArray} input={input} setInput={setInput} />
		</div>
	);
}

export default App;
