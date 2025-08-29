import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoForm() {
	const {
		todos,
		addTodo,
		todoText,
		setTodoText,
		toggleComplete,
		removeTodo,
		editTodo,
	} = useContext(TodoContext);
	const handleFormSubmit = (e) => {
		e.preventDefault();
		addTodo({ text: todoText, completed: false });
		setTodoText("");
	};

	return (
		<>
			<form onSubmit={handleFormSubmit}>
				<input
					type="text"
					placeholder="write todos..."
					value={todoText}
					onChange={(e) => setTodoText(e.target.value)}
				/>
				<button type="submit">Add</button>
			</form>
			{todos.map((todo) => {
				return (
					<div key={todo.id}>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => toggleComplete(todo)}
						/>
						<span>{todo.text}</span>
						<button onClick={() => editTodo(todo)}>Edit</button>
						<button disabled={!todo.completed} onClick={() => removeTodo(todo)}>
							Remove
						</button>
					</div>
				);
			})}
		</>
	);
}

export default TodoForm;
