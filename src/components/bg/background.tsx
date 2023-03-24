import { useEffect } from "react";
import "./background.css";

export function AnimatedBackground() {
	useEffect(() => {
		const setbounds = (e: MouseEvent) => {
			document.body.style.setProperty("--x", e.clientX + "px");
			document.body.style.setProperty("--y", e.clientY + "px");
		};
		window.addEventListener("mousemove", setbounds);
		return () => window.removeEventListener("mousemove", setbounds);
	}, []);
	return <div className="AnimatedBackground"></div>;
}
