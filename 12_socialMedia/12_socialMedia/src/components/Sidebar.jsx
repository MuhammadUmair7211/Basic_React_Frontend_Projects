import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
	return (
		<div
			className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
			style={{ width: "280px", height: "100vh" }}
		>
			<a
				href="/"
				className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
			>
				<span className="fs-4">Sidebar</span>
			</a>
			<hr />
			<ul className="nav nav-pills flex-column mb-auto">
				<li className="nav-item">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`nav-link text-white ${isActive ? "bg-primary" : ""}`
						}
					>
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						to="/create-post"
						className={({ isActive }) =>
							`nav-link text-white ${isActive ? "bg-primary" : ""}`
						}
					>
						Create Post
					</NavLink>
				</li>
			</ul>
			<hr />
		</div>
	);
}

export default Sidebar;
