import { useEffect, useState } from "react";
import "./background.css";

export function AnimatedBackground() {
	const [time, settime] = useState("");
	const numberformat = (n: number) => (n < 10 ? "0" + n : "" + n);
	useEffect(() => {
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
