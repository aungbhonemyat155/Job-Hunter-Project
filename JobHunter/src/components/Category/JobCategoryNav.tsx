import { useRef, useState, useEffect } from "react";

import { JobSelectBox } from "./filterBox/JobSelectBox";

import { Button } from "../ui/button";

import { Search } from "lucide-react";

import { jobCategory } from "@/testingData/category";
import { locations } from "@/testingData/locations";

export function JobCategoryNav() {
	const searchNav = useRef<HTMLDivElement>(null);

	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const element = searchNav.current;
			if (element) {
				const top = element.getBoundingClientRect().top;
				setIsSticky(top === 0); // Check if the top of the element is at the top of the viewport
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section
			ref={searchNav}
			className={`z-50 w-full sticky top-0 bg-slate-300 dark:bg-zinc-900 flex justify-center py-3 ${
				isSticky ? "shadow-md" : ""
			}`}>
			<div className="w-5/6 border border-sky-700 p-2 flex justify-around items-center">
				<span className="flex gap-3">
					<Search />
					<input
						className="bg-transparent border-none outline-none w-full"
						type="text"
						placeholder="All Positions, Companies, Keywords"
					/>
				</span>

				<JobSelectBox
					componentFor="Job Category"
					options={jobCategory}
				/>

				<JobSelectBox componentFor="Location" options={locations} />

				<Button className="bg-sky-800 hover:bg-sky-700 dark:text-white w-44 h-12 lg:text-lg font-semibold">
					Find Jobs
				</Button>
			</div>
		</section>
	);
}
