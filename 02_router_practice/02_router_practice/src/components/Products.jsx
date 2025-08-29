import { Link, Outlet } from "react-router-dom";
function Products() {
	return (
		<div>
			<input type="search" placeholder="search products" />
			<h1>This is Products page</h1>
			<nav style={{ display: "flex", gap: "20px" }}>
				<Link to="featured">Featured</Link>
				<Link to="new">New</Link>
			</nav>
			<Outlet/>
		</div>
	);
}

export default Products;
