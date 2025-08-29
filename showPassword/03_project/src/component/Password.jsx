import { useState } from "react";
const Password = () => {
	const [password, setPassword] = useState(true);
	const showPassword = () => {
		setPassword(!password);
	};
	return (
		<div className="password-field">
			<input
				type={password ? "password" : "text"}
				placeholder="Enter Password"
			/>
			{password ? (
				<i className="fa-solid fa-eye-slash" onClick={showPassword} />
			) : (
				<i className="fa-solid fa-eye" onClick={showPassword}></i>
			)}
		</div>
	);
};
export default Password;
