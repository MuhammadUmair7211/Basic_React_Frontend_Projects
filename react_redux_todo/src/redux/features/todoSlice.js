import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [
		{
			id: 1,
			text: "hey i am todo with redux",
			completed: false,
		},
	],
};
export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newTodo = {
				id: Date.now(),
				text: action.payload,
				completed: false,
			};
			state.todos.push(newTodo);
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		toggleComplete: (state, action) => {
			const findTodo = state.todos.find((todo) => todo.id === action.payload);
			if (findTodo) {
				findTodo.completed = !findTodo.completed;
			}
		},
		updateTodo: (state, action) => {
			console.log(action.payload);
			const findTodo = state.todos.find(
				(todo) => todo.id === action.payload.id
			);
			if (findTodo) {
				findTodo.text = action.payload.editText;
			}
		},
	},
});
export const { addTodo, deleteTodo, toggleComplete, updateTodo } =
	todoSlice.actions;
export default todoSlice.reducer;
