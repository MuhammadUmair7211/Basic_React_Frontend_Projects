import React from "react";

function Loader() {
	return (
		<center className="mt-5 d-flex gap-2 align-items-start">
			<div className="spinner-border" role="status"></div>
			<h4 className="sr-only">Loading...</h4>
		</center>
	);
}

export default Loader;
