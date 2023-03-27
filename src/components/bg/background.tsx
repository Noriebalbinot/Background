import { useEffect, useState } from "react";
import "./background.css";

export function AnimatedBackground() {
	const [time, settime] = useState("");
	const numberformat = (n: number) => (n < 10 ? "0" + n : "" + n);
	const colorst = [
		"crimson",
		"steelblue",
		"#333",
		"#957D95",
		"#904c77",
		"#011638",
		"#9dacff",
	];
	const colors2 = [
		"crimson",
		"steelblue",
		"#333",
		"#957D95",
		"#904c77",
		"#011638",
		"#9dacff",
	];
	useEffect(() => {
		const time2 = setInterval(() => {
			document.body.style.setProperty(
				"--color1",
				colorst[Math.floor(Math.random() * 6) + 1]
			);
			document.body.style.setProperty(
				"--color2",
				colors2[Math.floor(Math.random() * 6) + 1]
			);
		}, 10000);
		const settimeout = setInterval(() => {
			const date = new Date();
			settime(
				numberformat(date.getHours()) +
					":" +
					numberformat(date.getMinutes()) +
					":" +
					numberformat(date.getSeconds())
			);
		}, 1000);
		return () => {
			clearTimeout(time2);
			clearTimeout(settimeout);
		};
	}, []);
	return (
		<div className="AnimatedBackground">
			<div className="hours"></div>
			{time}
		</div>
	);
}
