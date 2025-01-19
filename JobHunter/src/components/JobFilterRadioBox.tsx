import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface RadioObject {
	header: string;
	options: Array<string>;
}

export function JobFilterRadioBox({ header, options }: RadioObject) {
	const [toggle, setToggle] = useState<boolean>(false);

	return (
		<div>
			<div className="flex items-center justify-between">
				<h5 className="font-semibold my-3">{header}</h5>
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

			<RadioGroup
				className={`transition-all duration-300 ${
					toggle
						? "opacity-0 max-h-0 overflow-hidden"
						: "opacity-100 max-h-screen"
				}`}
				defaultValue={options[0]}>
				{options.map((option, index) => (
					<div key={index} className="flex items-center space-x-2">
						<RadioGroupItem value={option} id={`option-${index}`} />
						<Label
							className="text-slate-600"
							htmlFor={`option-${index}`}>
							{option}
						</Label>
					</div>
				))}
			</RadioGroup>
		</div>
	);
}
