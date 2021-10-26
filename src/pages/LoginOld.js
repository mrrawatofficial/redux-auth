import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/Auth/userSlice";

const Login = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const submitLogin = (e) => {
		e.preventDefault();
		dispatch(
			login({
				email,
				password,
			})
		);
	};
	return (
		<main className="form-container text-center">
			<form onSubmit={submitLogin}>
				<img
					className="mb-4"
					src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
					alt="logo"
					width={72}
					height={57}
				/>
				<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
				<div className="form-floating">
					<input
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<label htmlFor="floatingInput">Email address</label>
				</div>
				<div className="form-floating my-2">
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					<label htmlFor="floatingPassword">Password</label>
				</div>
				<button
					className="w-100 btn btn-lg btn-primary"
					onClick={submitLogin}
					type="submit"
				>
					Sign in
				</button>
			</form>
		</main>
	);
};

export default Login;
