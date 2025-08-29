import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Products from "./components/Products";
import Order from "./components/Order";
import Error from "./components/Error";
import Featured from "./components/Featured";
import New from "./components/New";
import { lazy, Suspense } from "react";
import Profile from "./components/Profile";
function App() {
	const About = lazy(() => import("./components/About"));
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="About" element={<About />} />
				<Route path="Contact" element={<Contact />} />
				<Route path="Services" element={<Services />} />
				<Route path="Order" element={<Order />} />
				<Route path="Profile" element={<Profile />} />
				<Route path="Products" element={<Products />}>
					<Route index element={<Featured />} />
					<Route path="featured" element={<Featured />} />
					<Route path="new" element={<New />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
