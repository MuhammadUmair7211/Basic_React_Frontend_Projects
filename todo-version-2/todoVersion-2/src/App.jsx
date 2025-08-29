import { useState } from "react";
import "./App.css";

function App() {
	const [input, setInput] = useState("");
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (input.trim() === "") return;
		const item = {
			id: todoList.length + 1,
			text: input,
			completed: false,
		};
		setTodoList((prevTodo) => [...prevTodo, item]);
		setInput("");
	};
	const [todoList, setTodoList] = useState([
		{
			id: 1,
			text: "Learning React",
			completed: false,
		},
		{
			id: 2,
			text: "I will go to gym",
			completed: false,
		},
	]);
	const toggleComplete = (todo) => {
		setTodoList(
			todoList.map((item) => {
				if (item.id === todo.id) {
					return { ...item, completed: !todo.completed };
				} else {
					return item;
				}
			})
		);
	};
	const handleDelete = (todo) => {
		const filteredItems = todoList.filter((items) => {
			return items.id !== todo.id;
		});
		alert(`${todo.text} is deleted`);
		setTodoList(filteredItems);
	};

	return (
		<form onSubmit={(e) => handleFormSubmit(e)}>
			<h1>Add Todo</h1>
			<div className="input-field">
				<input
					type="text"
					placeholder="Enter todo..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button type="submit">Add</button>
			</div>
			<ul>
				{todoList.map((todo) => {
					return (
						<li
							key={todo.id}
							className={todo.completed ? "completed-color" : ""}
						>
							<input
								type="checkbox"
								value={todo.completed}
								onChange={() => toggleComplete(todo)}
							/>
							<span className={todo.completed ? "line-through" : ""}>
								{todo.text}
							</span>
							<button
								className="delete-button"
								disabled={todo.completed ? false : true}
								onClick={() => handleDelete(todo)}
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul> 
		</form>
	);
}

export default App;
