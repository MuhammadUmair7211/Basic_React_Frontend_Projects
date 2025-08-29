import React, { useEffect, useState } from "react";

function Form() {
	const [todos, setTodos] = useState(() => {
		const savedTodos = localStorage.getItem("todos");
		if (savedTodos) {
			return JSON.parse(savedTodos);
		}
	});
	const [todoText, setTodoText] = useState("");
	const [date, setDate] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!todoText || !date) {
			alert("please enter something in the fields");
		} else {
			setTodos([...todos, { text: todoText, date: date }]);
			setTodoText("");
			setDate("");
		}
	};
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
	const handleDelete = (item) => {
		const newTodosUpdated = todos.filter((todo) => todo.text !== item.text);
		setTodos(newTodosUpdated);
	};
	return (
		<form onSubmit={handleFormSubmit}>
			<div className="input-fields">
				<input
					type="text"
					value={todoText}
					onChange={(e) => {
						setTodoText(e.target.value);
					}}
					placeholder="Enter your todo"
				/>
				<input
					type="date"
					value={date}
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>
				<button type="submit" className="add-button">
					Add Todo
				</button>
			</div>
			<p className="no-task-para">
				{todos.length === 0 && "Enjoy your day...!"}
			</p>
			<ol>
				{todos.map((item, index) => {
					return (
						<div className="todo-item" key={index}>
							<div className="todo-task">
								<li>{item.text}</li>
								<div>{item.date}</div>
							</div>
							<button
								className="delete-button"
								onClick={() => handleDelete(item)}
							>
								Delete
							</button>
						</div>
					);
				})}
			</ol>
		</form>
	);
}

export default Form;
