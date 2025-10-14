import { useDispatch, useSelector } from "react-redux";
import {
	deleteTodo,
	toggleComplete,
	updateTodo,
} from "../redux/features/todoSlice";
import { useState } from "react";

const TodoList = () => {
	const state = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const [editTodo, setEditTodo] = useState({ id: null, editText: "" });

	const handleUpdate = (todo) => {
		setEditTodo({ id: todo.id, editText: todo.text });
	};
	const handleSave = () => {
		dispatch(updateTodo(editTodo));
		setEditTodo({ id: null, editText: "" });
	};

	return (
		<>
			{state.map((todo) => {
				return (
					<div
						key={todo.id}
						className={`flex items-center gap-2 p-1 rounded-md justify-between mt-1.5 ${
							todo.completed ? "bg-gray-300" : ""
						}`}
					>
						<input
							type="checkbox"
							value={todo.completed}
							onChange={() => dispatch(toggleComplete(todo.id))}
							className="w-3 h-3 cursor-pointer accent-blue-600"
						/>
						{editTodo.id === todo.id ? (
							<>
								<input
									type="text"
									value={editTodo.editText}
									onChange={(e) =>
										setEditTodo({ ...editTodo, editText: e.target.value })
									}
									className="flex-1 outline-none border border-gray-700 p-1"
								/>
							</>
						) : (
							<li
								className={`flex-1 list-none cursor-pointer text-lg ${
									todo.completed ? "line-through text-gray-600" : ""
								}`}
							>
								{todo.text}
							</li>
						)}

						<div className="flex items-center gap-2">
							{editTodo.id === todo.id ? (
								<button
									onClick={handleSave}
									className="bg-yellow-600 px-2 py-1 hover:bg-yellow-700 duration-300 cursor-pointer"
								>
									save todo
								</button>
							) : !todo.completed ? (
								<button
									onClick={() => handleUpdate(todo)}
									className="bg-green-600 px-2 py-1 hover:bg-green-700 duration-300 cursor-pointer"
								>
									edit todo
								</button>
							) : (
								<button
									onClick={() => dispatch(deleteTodo(todo.id))}
									className="bg-red-600 px-2 py-1 hover:bg-red-700 duration-300 cursor-pointer"
								>
									delete todo
								</button>
							)}
						</div>
					</div>
				);
			})}
		</>
	);
};

export default TodoList;
