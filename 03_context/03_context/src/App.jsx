import { createContext, useState } from "react";
import "./App.css";
import User1 from "./components/User1";
const UserContext = createContext();
const ThemeContext = createContext();
function App() {
	const [user, setUser] = useState("Umair");
	const [theme, setTheme] = useState("light");
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div
				id="container"
				style={{
					backgroundColor: theme === "light" ? "white" : "black",
					color: theme === "light" ? "black" : "white",
				}}
			>
				<UserContext.Provider value={user}>
					<User1 />
				</UserContext.Provider>
			</div>
		</ThemeContext.Provider>
	);
}
export { UserContext };
export { ThemeContext };
export default App;
