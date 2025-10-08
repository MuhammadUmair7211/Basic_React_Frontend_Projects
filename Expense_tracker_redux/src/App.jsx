import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, deleteExpense } from "./redux/features/expenseSlice";
const App = () => {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [expense, setExpense] = useState("");
	const dispatch = useDispatch();

	const expensesStateArray = useSelector((state) => state.expense.expenses);
	const totalBalance = useSelector((state) => state.expense.user.balance);
	const totalIncome = useSelector((state) => state.expense.user.income);
	const totalExpense = useSelector((state) => state.expense.user.expense);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!title || !amount || !expense) {
			alert("please enter all the fields");
			return;
		}
		dispatch(
			addExpense({
				id: Date.now(),
				type: expense,
				title: title,
				amount: amount,
			})
		);
	};
	return (
		<div className="min-h-screen bg-gray-900 text-center text-white p-4">
			<h1 className="text-xl md:text-3xl font-bold mb-8">💰 Expense Tracker</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div className="max-w-2xl w-full mx-auto">
					{/* Balance Summary */}
					<div className="bg-gray-800 p-6 text-center mb-8">
						<h2 className="text-lg text-gray-400">Your Balance</h2>
						<p
							className={`text-3xl font-semibold ${
								totalBalance >= 0 ? "text-green-400" : "text-red-400"
							}`}
						>
							Rs {totalBalance}
						</p>
						<div className="flex justify-between mt-4">
							<div>
								<p className="text-gray-400">Income</p>
								<p className="text-green-400">Rs {totalIncome}</p>
							</div>
							<div>
								<p className="text-gray-400">Expense</p>
								<p className="text-red-400">Rs {totalExpense}</p>
							</div>
						</div>
					</div>

					{/* Form */}
					<form
						onSubmit={handleFormSubmit}
						className="bg-gray-800 p-6 flex flex-col space-y-6"
					>
						<h3 className="text-xl mb-4 font-semibold">Add New Transaction</h3>
						<input
							type="text"
							placeholder="Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="w-full p-2 rounded bg-gray-700 text-white outline-none"
						/>
						<input
							type="number"
							placeholder="Amount"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							className="w-full p-2 rounded bg-gray-700 text-white outline-none"
						/>
						<select
							value={expense}
							onChange={(e) => setExpense(e.target.value)}
							className="w-full p-2 rounded bg-gray-700 text-gray-400"
						>
							<option hidden>Select</option>
							<option value="expense">Expense</option>
							<option value="income">Income</option>
						</select>
						<button
							type="submit"
							className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded font-semibold"
						>
							Add
						</button>
					</form>
				</div>

				{/* Expense List */}
				<div className="bg-gray-800 p-6 max-w-2xl text-center w-full mx-auto">
					<h3 className="text-xl mb-4 font-semibold">History</h3>
					{expensesStateArray.length === 0 ? (
						<p className="text-gray-500 text-center">No transactions yet.</p>
					) : (
						<ul className="space-y-2 max-h-60 overflow-y-auto">
							{expensesStateArray.map((exp) => (
								<li
									key={exp.id}
									className={`flex justify-between p-2 rounded-lg ${
										exp.type === "income" ? "bg-green-600/20" : "bg-red-600/20"
									}`}
								>
									<span>{exp.title}</span>
									<div className="flex items-center gap-6">
										<span>
											{exp.type === "income" ? "+" : "-"}Rs {exp.amount}
										</span>
										<button
											onClick={() => dispatch(deleteExpense({ exp }))}
											className="text-sm bg-red-500 hover:bg-red-600 cursor-pointer duration-300 py-1 px-2 rounded-md"
										>
											Delete
										</button>
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
