import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./randombg.css";

const Index = () => {
	const [color, setColor] = useState("");
	const [gradient, setGradient] = useState("");
	// const [textColor, setTextColor] = useState("red");

	const generateGradient = () => {
		const randomAngle = Math.floor(Math.random() * (360 - 1 + 1) + 1);
		let color1 = generateColor();
		let color2 = generateColor();
		let randomGradient = `linear-gradient(${randomAngle}deg, ${color1}, ${color2})`;
		setGradient(randomGradient);
		setColor("");
	};

	const generateColor = () => {
		const letters = "0123456789ABCDEF";
		let randomColor = "";
		for (var i = 0; i < 6; i++) {
			randomColor += letters[Math.floor(Math.random() * 16)];
		}
		let result = `#${randomColor}`;
		setColor(result);
		setGradient("");
		return result;
	};
	const copyColor = () => {
		navigator.clipboard.writeText(gradient !== "" ? gradient : color).then(
			function () {
				toast.success(
					`${gradient !== "" ? gradient : color} Copied Successfully`
				);
			},
			function () {
				console.log("failed");
			}
		);
	};

	return (
		<section
			className="random-bg"
			style={{ background: gradient !== "" ? gradient : color }}
		>
			<div className="box">
				<h2 className="text-center">This color is random generated</h2>
				<input
					type="text"
					readOnly
					className="form-control my-3"
					value={gradient !== "" ? gradient : color}
				/>
				<div className="btn-group">
					<button className="btn btn-info" onClick={generateColor}>
						Generate Color
					</button>
					<button className="btn btn-warning" onClick={generateGradient}>
						Generate Gradient
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
