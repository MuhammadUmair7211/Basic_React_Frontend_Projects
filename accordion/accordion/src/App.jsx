import { useState } from "react";
import "./App.css";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";

function App() {
	const items = [
		{
			title: "JavaScript Basics",
			content: "Learn variables, functions,and loops in JavaScript",
		},
		{
			title: "ReactJs Overview",
			content: "Understand components , state, and props in React.",
		},
		{
			title: "NodeJS",
			content: "Basics of server-side development with NodeJs.",
		},
		{
			title: "Full-Stack Development",
			content: "Build full-stack apps with React and NodeJs.",
		},
	];

	const [openIndex, setOpenIndex] = useState(null);
	const handleAccordion = (index) => {
		if (openIndex === index) {
			setOpenIndex(null);
		} else {
			setOpenIndex(index);
		}
	};
	return (
		<div className="accordion">
			{items.map((item, index) => {
				return (
					<div key={index} className="accordion-item">
						<button
							onClick={() => handleAccordion(index)}
							className="accordion-title"
						>
							{item.title}
							<span>
								{openIndex === index ? (
									<RiArrowUpWideFill />
								) : (
									<RiArrowDownWideFill />
								)}
							</span>
						</button>
						{openIndex === index && (
							<p className="accordion-content">{item.content}</p>
						)}
					</div>
				);
			})}
		</div>
	);
}

export default App;
