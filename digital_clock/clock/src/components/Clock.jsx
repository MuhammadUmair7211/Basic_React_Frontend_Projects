import React, { useEffect, useState } from "react";

function Clock() {
	const [dateTime, setDateTime] = useState(new Date());
	useEffect(() => {
		let intervalId = setInterval(() => {
			setDateTime(new Date());
		}, 1000);
		return () => {
			clearInterval(intervalId);
		};
	});
	return (
		<div className="clock">
			<h1>
				{dateTime.toDateString()} <br />
				{dateTime.toLocaleTimeString()}
			</h1>
		</div>
	);
}

export default Clock;
