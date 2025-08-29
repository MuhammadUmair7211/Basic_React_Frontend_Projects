import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import PostList from "./components/PostList";
import PostListContextProvider from "./store/postListContext";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<PostListContextProvider>
			<div className="app-container">
				<Sidebar />
				<div className="app-content">
					<Header />
					<Outlet />
				</div>
			</div>
		</PostListContextProvider>
	);
}

export default App;
