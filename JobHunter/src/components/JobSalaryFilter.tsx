import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function JobSalaryFilter() {
	const [toggle, setToggle] = useState<boolean>(false);

	return (
		<div>
			<div className="flex justify-between items-center">
				<h5 className="my-3 font-semibold">Minimum Salary</h5>
				{toggle ? (
					<ChevronDown
						className="cursor-pointer"
						size={17}
						onClick={() => {
							setToggle(false);
						}}
					/>
				) : (
					<ChevronUp
						className="cursor-pointer"
						size={17}
						onClick={() => {
							setToggle(true);
						}}
					/>
				)}
			</div>
			<div
				className={`transition-all duration-300 flex items-center  ${
					toggle
						? "opacity-0 max-h-0 overflow-hidden"
						: "opacity-100 max-h-screen"
				}`}>
				<input
					type="text"
					placeholder="Salary"
					className="p-1 rounded-md bg-slate-200"
				/>
				<span className="ms-1">MMK</span>
			</div>
		</div>
	);
}
