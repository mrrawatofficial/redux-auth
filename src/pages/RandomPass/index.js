import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./randomPass.css";

const Index = () => {
	const [password, setPassowrd] = useState("");
	const [passwordLength, setPasswordLength] = useState(6);

	const generatePassword = () => {
		let pass = "";
		let str =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
			"abcdefghijklmnopqrstuvwxyz0123456789@#$!~^&*()-+=";

		for (let i = 1; i <= passwordLength; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}
		setPassowrd(pass);
	};
	const copyPassword = () => {
		navigator.clipboard.writeText(password).then(
			function () {
				toast.success(`${password} Copied Successfully`);
			},
			function () {
				console.log("failed");
			}
		);
	};

	return (
		<section className="random-bg">
			<div className="box">
				<h2 className="text-center text-danger">Generate a random Password</h2>
				<label>How long password should be</label>
				<input
					type="number"
					min="1"
					className="form-control my-3"
					value={passwordLength}
					onChange={(e) => setPasswordLength(e.target.value)}
				/>
				<input
					type="text"
					readOnly
					className="form-control my-3"
					value={password}
				/>
				<div className="btn-group">
					<button className="btn btn-info" onClick={generatePassword}>
						Generate Password
					</button>
					<button className="btn btn-dark" onClick={copyPassword}>
						Copy
					</button>
				</div>
			</div>
			<ToastContainer position="bottom-center" />
		</section>
	);
};

export default Index;
