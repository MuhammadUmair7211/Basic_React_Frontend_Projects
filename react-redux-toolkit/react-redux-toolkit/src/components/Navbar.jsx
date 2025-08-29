import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
	const item = useSelector((state) => state.cart.length);

	return (
		<div className="text-white fixed top-0 left-0 w-full bg-gray-300 z-50">
			<div className="flex items-center justify-around text-lg font-medium mx-auto h-20">
				<Link to="/" className="text-xl">
					Home
				</Link>
				<Link to="/cart">
					<span className="text-xs bg-red-500 px-2 py-1 text-white rounded-full mx-1">
						{item}
					</span>
					<FaCartShopping size={30} />
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
