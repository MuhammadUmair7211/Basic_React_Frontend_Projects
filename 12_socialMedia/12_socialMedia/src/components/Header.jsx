import React from "react";

function Header() {
	return (
		<header className="p-3 text-bg-dark">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end">
					<div className="text-end">
						<button type="button" className="btn btn-outline-light me-2">
							Login
						</button>
						<button type="button" className="btn btn-warning">
							Sign-up
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
