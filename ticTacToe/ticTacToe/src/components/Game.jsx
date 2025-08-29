import { useState } from "react";
import Square from "./Square";

function Game() {
	const [state, setState] = useState(new Array(9).fill(null));
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const checkWinner = () => {
		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (const combination of winningCombinations) {
			const [a, b, c] = combination;
			if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
				return state[a];
			}
		}
		return null;
	};
	const isWinner = checkWinner();
	const handleClick = (index) => {
		if (state[index] !== null || isWinner) return;
		let newState = [...state];
		newState[index] = currentPlayer;
		setState(newState);
		setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
	};

	const handleReset = () => {
		setState(new Array(9).fill(null));
		setCurrentPlayer("X");
	};
	return (
		<>
			{isWinner ? (
				<div className="reset-container">
					<h1>{isWinner} has Won...!</h1>
					<button className="reset-button" onClick={handleReset}>
						Play Again
					</button>
				</div>
			) : (
				<div className="board">
					<div className="game-row">
						<Square value={state[0]} onClick={() => handleClick(0)} />
						<Square value={state[1]} onClick={() => handleClick(1)} />
						<Square value={state[2]} onClick={() => handleClick(2)} />
					</div>
					<div className="game-row">
						<Square value={state[3]} onClick={() => handleClick(3)} />
						<Square value={state[4]} onClick={() => handleClick(4)} />
						<Square value={state[5]} onClick={() => handleClick(5)} />
					</div>
					<div className="game-row">
						<Square value={state[6]} onClick={() => handleClick(6)} />
						<Square value={state[7]} onClick={() => handleClick(7)} />
						<Square value={state[8]} onClick={() => handleClick(8)} />
					</div>
				</div>
			)}
		</>
	);
}

export default Game;
