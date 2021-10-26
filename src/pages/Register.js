const Register = () => {
	return (
		<main className="form-container text-center">
			<form>
				<img
					className="mb-4"
					src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
					alt="logo"
					width={72}
					height={57}
				/>
				<h1 className="h3 mb-3 fw-normal">Please sign up</h1>
				<div className="form-floating">
					<input
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
					/>
					<label htmlFor="floatingInput">Email address</label>
				</div>
				<div className="form-floating my-2">
					<input
						type="text"
						className="form-control"
						id="floatingName"
						placeholder="Name"
					/>
					<label htmlFor="floatingName">Name</label>
				</div>
				<div className="form-floating my-2">
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Password"
					/>
					<label htmlFor="floatingPassword">Password</label>
				</div>
				<button className="w-100 btn btn-lg btn-primary" type="submit">
					Sign up
				</button>
			</form>
		</main>
	);
};

export default Register;
