import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todoSlice";

const AddTodo = () => {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value || value.trim() == "") return;
		dispatch(addTodo(value));
		setValue("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center mt-8 border border-gray-200"
		>
			<input
				type="text"
				placeholder="Enter something..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="rounded-lg p-2 w-full outline-none"
			/>
			<button
				type="submit"
				className="bg-blue-500 duration-300 text-white px-4 py-2 cursor-pointer hover:bg-blue-600"
			>
				Submit
			</button>
		</form>
	);
};

export default AddTodo;
