import { Button } from "./ui/button";
import bg from "../image/bg.jpg";

import { Navigation } from "lucide-react";

interface SimilarJobsProps {
	className?: string; // className is optional
}
export function SimilarJobs({ className }: SimilarJobsProps) {
	return (
		<section className={`gap-5 flex-col ${className}`}>
			<h3 className="text-lg lg:text-xl lg:text-center">
				More Similar Jobs
			</h3>

			<section className="shadow-lg flex flex-col gap-3 p-3 bg-gray-200 dark:bg-zinc-900 rounded-md">
				{[...Array(12)].map((_, index) => (
					<div
						key={index}
						className="flex gap-2 transition hover:-translate-y-1">
						<img
							src={bg}
							alt=""
							className="w-[60px] h-[60px] rounded object-cover object-center"
						/>
						<ul>
							<li className="font-semibold text-blue-800">
								position {index}
							</li>
							<li className="text-sm">company</li>
							<li className="text-xs flex items-center gap-1 text-slate-600">
								<Navigation size={10} /> location
							</li>
						</ul>
					</div>
				))}
			</section>

			<Button className="w-full text-md bg-sky-800 hover:bg-sky-700 dark:text-white">
				See More Jobs
			</Button>
		</section>
	);
}
