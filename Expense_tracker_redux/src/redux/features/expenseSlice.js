import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	user: { balance: 500, expense: 1000, income: 50000 },
	expenses: [
		{
			id: 1,
			type: "expense",
			title: "cooking",
			amount: 5000,
		},
		{
			id: 2,
			type: "expense",
			title: "education expenditure",
			amount: 3000,
		},
		{
			id: 3,
			type: "expense",
			title: "cooking",
			amount: 200,
		},
	],
};

const expenseSlice = createSlice({
	name: "expense",
	initialState,
	reducers: {
		addExpense: (state, action) => {
			const { type, amount } = action.payload;
			if (type === "expense") {
				state.user.expense += Number(amount);
				state.expenses.push(action.payload);
			} else if (type === "income") {
				state.user.income += Number(amount);
				state.expenses.push(action.payload);
			}
			state.user.balance = state.user.income - state.user.expense;
		},
		deleteExpense: (state, action) => {
			const { id } = action.payload.exp;
			console.log(id);
		},
	},
});
export const { addExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
