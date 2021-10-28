import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./randombg.css";

const Index = () => {
	const [color, setColor] = useState("");
	// const [textColor, setTextColor] = useState("red");

	const generateColor = () => {
		const letters = "0123456789ABCDEF";
		let randomColor = "";
		let r;
		let g;
		let b;
		for (var i = 0; i < 6; i++) {
			randomColor += letters[Math.floor(Math.random() * 16)];
		}
		setColor(`#${randomColor}`);

		//todo create a random contrast color generator

		// r = (255 - parseInt(randomColor.substring(0, 2), 16)).toString(16);
		// g = (255 - parseInt(randomColor.substring(2, 4), 16)).toString(16);
		// b = (255 - parseInt(randomColor.substring(4, 6), 16)).toString(16);
		// const tc = `#${r}${g}${b}`;
		// setTextColor(tc);
		// console.log(textColor);
	};
	const copyColor = () => {
		navigator.clipboard.writeText(color).then(
			function () {
				toast.success(`${color} Copied Successfully`);
			},
			function () {
				console.log("failed");
			}
		);
	};

	return (
		<section className="random-bg" style={{ background: color }}>
			<div className="box">
				<h2 className="text-center">This color is random generated</h2>
				<input
					type="text"
					readOnly
					className="form-control my-3"
					value={color}
				/>
				<div className="btn-group">
					<button className="btn btn-primary" onClick={generateColor}>
						Generate
					</button>
					<button className="btn btn-dark" onClick={copyColor}>
						Copy
					</button>
				</div>
			</div>
			<ToastContainer position="bottom-center" />
		</section>
	);
};

export default Index;
