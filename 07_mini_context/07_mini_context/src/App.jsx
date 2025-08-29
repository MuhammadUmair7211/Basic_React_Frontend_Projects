import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import UserContext from "./context/UserContext";
import Profile from "./components/Profile";

function App() {
	const [user, setUser] = useState("");
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Login />
			<Profile />
		</UserContext.Provider>
	);
}

export default App;
