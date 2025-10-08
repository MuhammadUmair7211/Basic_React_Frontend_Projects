import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	user: { balance: 50000, expense: 0, income: 50000 },
	expenses: [],
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
			const id = action.payload;
			const deletedExpense = state.expenses.find((exp) => exp.id === id);
			if (deletedExpense) {
				if (deletedExpense.type === "expense") {
					state.user.expense -= Number(deletedExpense.amount);
				} else if (deletedExpense.type === "income") {
					state.user.income -= Number(deletedExpense.amount);
				}

				// Recalculate balance
				state.user.balance = state.user.income - state.user.expense;
			}
			state.expenses = state.expenses.filter((exp) => exp.id !== id);
		},
	},
});
export const { addExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
