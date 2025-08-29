import React, { useEffect, useState } from "react";

let savedCount = 0;

function Counter() {
	const [count, setCount] = useState(savedCount);

	useEffect(() => {
		let intervalId = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);
		savedCount = count;
		return () => {
			clearInterval(intervalId);
		};
	}, [count]);
	return (
		<div>
			<h1>The Value is: {count}</h1>
		</div>
	);
}

export default Counter;
