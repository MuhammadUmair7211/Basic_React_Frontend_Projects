import { useState } from "react";
import "./App.css";

function App() {
	const [otp, setOtp] = useState(new Array(4).fill(""));
	const handleEvent = (e, index) => {
		const value = e.target.value.replace(/[^0-9]/g, "");
		setOtp((prev) => {
			const arr = [...prev];
			arr[index] = value;
			return arr;
		});
		if (value && index < otp.length - 1) {
			e.target.nextSibling.focus();
		}
	};

	const handleBack = (e, index) => {
		if (e.key === "Backspace" && index > 0 && !e.target.value) {
			e.target.previousSibling.focus();
		}
	};
	return (
		<div className="container">
			<h3>Enter the code we just sent</h3>
			<p>We sent a sign-in code to +92-3239385125</p>
			<p>The code will expire in 15 minutes</p>
			<div className="otp-ctn">
				{otp.map((item, index) => {
					return (
						<input
							type="text"
							value={item}
							maxLength={1}
							key={index}
							onKeyDown={(e) => handleBack(e, index)}
							onChange={(e) => handleEvent(e, index)}
						/>
					);
				})}
			</div>
			<button>Sign in</button>
		</div>
	);
}

export default App;
