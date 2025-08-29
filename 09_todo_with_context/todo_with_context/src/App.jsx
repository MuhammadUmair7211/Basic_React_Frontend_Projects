import { useState } from "react";
import "./App.css";
import TodoContext from "./context/TodoContext";
import TodoForm from "./components/TodoForm";

function App() {
	const [todoText, setTodoText] = useState("");
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "learn React",
			completed: false,
		},
		{
			id: 2,
			text: "Sleep Early",
			completed: false,
		},
		{
			id: 3,
			text: "Eat healthy",
			completed: false,
		},
	]);
	const addTodo = (todo) => {
		setTodos((prev) => [{ ...todo, id: Date.now() }, ...prev]);
	};
	const removeTodo = (todo) => {
		const filteredArray = todos.filter((item) => item.id !== todo.id);
		setTodos(filteredArray);
	};
	const toggleComplete = (todoToToggle) => {
		setTodos((item) =>
			item.map((todo) =>
				todo.id === todoToToggle.id
					? { ...todo, completed: !todo.completed }
					: todo
			)
		);
	};
	const editTodo = (todo) => {
		const edited = todos.find((item) => item.id === todo.id);
		setTodoText(edited.text);
		const filteredArray = todos.filter((item) => item.id !== todo.id);
		setTodos(filteredArray);
	};
	return (
		<TodoContext.Provider
			value={{
				todos,
				addTodo,
				todoText,
				setTodoText,
				removeTodo,
				toggleComplete,
				editTodo,
			}}
		>
			<h1>Todo</h1>
			<TodoForm />
		</TodoContext.Provider>
	);
}

export default App;
