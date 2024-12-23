import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { MoonStar, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Layout() {
	const [theme, setTheme] = useState<string>("light");
	const navigate = useNavigate();

	const changeTheme = () => {
		const root = window.document.documentElement;

		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	};

	useEffect(changeTheme, [theme]);

	return (
		<section className="w-screen h-screen flex flex-col">
			<div className="basis-[8%] bg-slate-200 dark:bg-zinc-900 flex items-center px-3 justify-between">
				<h2 className="text-sky-800 dark:text-sky-600 text-3xl font-extrabold">
					Job Hunter
				</h2>
				<ul className="dark:text-white text-black flex items-center">
					<li className="me-3">
						<Button
							onClick={() => navigate("/login")}
							className="bg-white text-black dark:bg-zinc-900 dark:border dark:text-white dark:border-white hover:bg-sky-600 hover:text-white">
							Login
						</Button>
					</li>
					<li className="me-3">
						<Button
							onClick={() => navigate("/register/role")}
							className="bg-sky-700 hover:bg-sky-600 dark:text-white">
							Register
						</Button>
					</li>
					<li
						onClick={() =>
							setTheme(theme === "light" ? "dark" : "light")
						}>
						{theme === "light" ? <MoonStar /> : <Sun />}
					</li>
				</ul>
			</div>
			<div className="basis-[92%] bg-slate-300 dark:bg-zinc-800 flex justify-center items-center">
				<Outlet />
			</div>
		</section>
	);
}
