import { NavLink } from "react-router-dom";

function Navbar() {
	const activeHandler = ({ isActive }) => {
		return {
			fontWeight: isActive ? "bold" : "normal",
			color: isActive ? "darkblue" : "black",
			textDecoration: isActive ? "none" : "",
		};
	};
	return (
		<ul
			style={{
				display: "flex",
				listStyle: "none",
				backgroundColor: "skyblue",
				alignItems: "center",
				gap: "30px",
				height: "50px",
			}}
		>
			<NavLink to="/" style={activeHandler}>
				Home
			</NavLink>
			<NavLink to="/About" style={activeHandler}>
				About
			</NavLink>

			<NavLink to="/Contact" style={activeHandler}>
				Contact
			</NavLink>
			<NavLink to="/Services" style={activeHandler}>
				Services
			</NavLink>
			<NavLink to="/Products" style={activeHandler}>
				Products
			</NavLink>
			<NavLink to="/Profile" style={activeHandler}>
				Profile
			</NavLink>
		</ul>
	);
}

export default Navbar;
