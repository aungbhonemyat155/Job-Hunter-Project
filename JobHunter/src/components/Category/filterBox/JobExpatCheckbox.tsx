import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function JobExpatCheckbox() {
	const [toggle, setToggle] = useState<boolean>(false);

	return (
		<div>
			<div className="flex items-center justify-between">
				<h5 className="font-semibold my-3">Repat / Expat</h5>
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
			<section
				className={`flex flex-col gap-3 transition-all duration-300 ${
					toggle
						? "opacity-0 max-h-0 overflow-hidden"
						: "opacity-100 max-h-screen"
				}`}>
				<div className="flex items-center space-x-2">
					<Checkbox id="repat" />
					<label
						htmlFor="repat"
						className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
						Repatriates Preferred
					</label>
				</div>

				<div className="flex items-center space-x-2">
					<Checkbox id="expat" />
					<label
						htmlFor="expat"
						className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
						Open to foreigners (Expats)
					</label>
				</div>
			</section>
		</div>
	);
}
