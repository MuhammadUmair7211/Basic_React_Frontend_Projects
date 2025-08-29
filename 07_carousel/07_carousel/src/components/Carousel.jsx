import React from "react";

function Carousel() {
	const imageArr = [
		"/images/apple.png",
		"/images/instagram.png",
		"/images/facebook.png",
		"/images/amazon.png",
		"/images/netflix.png",
		"/images/twitter.png",
		"/images/x.png",
	];

	const prevSlide = () => {
		console.log("prev");
	};

	const nextSlide = () => {
		console.log("next");
	};
	return (
		<>
			<div className="main">
				<div className="carousel">
					{imageArr.map((item, index) => {
						return (
							<div key={index}>
								<img src={item} />
							</div>
						);
					})}
				</div>
			</div>
			<button onClick={prevSlide}>Prev Slide</button>
			<button onClick={nextSlide}>Next Slide</button>
		</>
	);
}

export default Carousel;
