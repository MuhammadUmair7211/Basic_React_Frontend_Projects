import { useState } from "react";

const App = () => {
	const [color, setColor] = useState("black");
	return (
		<div
			className="w-full h-screen duration-200 flex flex-col justify-end pb-20"
			style={{ backgroundColor: color }}
		>
			{/* ------buttons */}

			<div className="flex flex-wrap justify-center pt-20 gap-3">
				<button
					onClick={function () {
						setColor("red");
					}}
					style={{ backgroundColor: "red" }}
					className="px-5 py-2 rounded-full text-white shadow-xl"
				>
					Red
				</button>

				<button
					onClick={() => setColor("green")}
					style={{ backgroundColor: "green" }}
					className="px-5 py-2 rounded-full text-white shadow-xl"
				>
					Green
				</button>

				<button
					onClick={() => setColor("yellow")}
					style={{ backgroundColor: "yellow" }}
					className="px-5 py-2 rounded-full text-black shadow-xl"
				>
					Yellow
				</button>

				<button
					onClick={() => setColor("blue")}
					style={{ backgroundColor: "blue" }}
					className="px-5 py-2 rounded-full text-white shadow-xl"
				>
					Blue
				</button>

				<button
					onClick={() => setColor("white")}
					style={{ backgroundColor: "white" }}
					className="px-5 py-2 rounded-full text-black shadow-xl"
				>
					White
				</button>

				<button
					onClick={() => setColor("lavender")}
					style={{ backgroundColor: "lavender" }}
					className="px-5 py-2 rounded-full text-black shadow-xl"
				>
					Lavender
				</button>

				<button
					onClick={() => setColor("pink")}
					style={{ backgroundColor: "pink" }}
					className="px-5 py-2 rounded-full text-black shadow-xl"
				>
					Pink
				</button>

				<button
					onClick={() => setColor("gray")}
					style={{ backgroundColor: "gray" }}
					className="px-5 py-2 rounded-full text-black shadow-xl"
				>
					Gray
				</button>

				<button
					onClick={() => setColor("olive")}
					style={{ backgroundColor: "olive" }}
					className="px-5 py-2 rounded-full text-black shadow-xl"
				>
					Olive
				</button>

				<button
					onClick={() => setColor("purple")}
					style={{ backgroundColor: "purple" }}
					className="px-5 py-2 rounded-full text-black shadow-xl"
				>
					Purple
				</button>

				<button
					onClick={() => setColor("orange")}
					style={{ backgroundColor: "orange" }}
					className="px-5 py-2 rounded-full text-black shadow-xl"
				>
					Orange
				</button>

				<button
					onClick={() => setColor("indigo")}
					style={{ backgroundColor: "indigo" }}
					className="px-5 py-2 rounded-full text-black shadow-xl"
				>
					Indigo
				</button>

				<button
					onClick={() => setColor("violet")}
					style={{ backgroundColor: "violet" }}
					className="px-5 py-2 rounded-full text-black shadow-xl"
				>
					Violet
				</button>

				<button
					onClick={() => setColor("brown")}
					style={{ backgroundColor: "brown" }}
					className="px-5 py-2 rounded-full text-black shadow-xl"
				>
					Brown
				</button>
			</div>
		</div>
	);
};

export default App;
