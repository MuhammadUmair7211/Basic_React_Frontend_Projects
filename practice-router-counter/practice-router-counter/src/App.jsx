import { Outlet } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";

function App() {
	return (
		<>
			<Outlet />
			<Button />
		</>
	);
}

export default App;
