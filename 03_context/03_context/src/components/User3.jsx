import React, { useContext } from "react";
import { ThemeContext, UserContext } from "../App";

function User3() {
	const { theme, setTheme } = useContext(ThemeContext);
	const user = useContext(UserContext);

	const handleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else setTheme("light");
	};
	return (
		<div>
			<h1>Hello, This is {user}</h1>
			<button onClick={handleTheme}>Change Theme</button>
		</div>
	);
}

export default User3;
