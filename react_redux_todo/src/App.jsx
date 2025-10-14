import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
	return (
		<div className="max-w-5xl w-full mx-auto">
			<AddTodo />
			<TodoList />
		</div>
	);
};

export default App;
