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
		<section className="w-screen h-screen flex flex-col select-none">
			<div className="basis-[5%] lg:basis-[8%] bg-slate-200 dark:bg-zinc-900 flex items-center px-3 justify-between">
				<h2
					className="text-sky-800 dark:text-sky-600 text-2xl lg:text-3xl font-extrabold cursor-pointer"
					onClick={() => {
						navigate("/");
					}}>
					Job Hunter
				</h2>
				<ul className="dark:text-white text-black flex items-center">
					<li className="me-3">
						<Button
							onClick={() => navigate("/login")}
							className="h-8 rounded-md px-3 text-xs lg:h-9 lg:px-4 lg:py-2 lg:text-base bg-white text-black dark:bg-zinc-900 dark:border dark:text-white dark:border-white hover:bg-sky-600 hover:text-white">
							Login
						</Button>
					</li>
					<li className="me-3">
						<Button
							onClick={() => navigate("/register/role")}
							className="h-8 rounded-md px-3 text-xs lg:h-9 lg:px-4 lg:py-2 lg:text-base bg-sky-700 hover:bg-sky-600 dark:text-white">
							Register
						</Button>
					</li>
					<li
						className="cursor-pointer"
						onClick={() =>
							setTheme(theme === "light" ? "dark" : "light")
						}>
						{theme === "light" ? (
							<MoonStar className="w-[18px] lg:w-auto" />
						) : (
							<Sun className="w-[18px] lg:w-auto" />
						)}
					</li>
				</ul>
			</div>
			<div className="basis-[95%] lg:basis-[92%] bg-slate-300 dark:bg-zinc-800 flex justify-center items-center overflow-y-auto">
				<Outlet />
			</div>
		</section>
	);
}
