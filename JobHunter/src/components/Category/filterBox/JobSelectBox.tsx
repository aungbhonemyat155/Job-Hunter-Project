import { useState } from "react";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../../ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

import { ChevronsUpDown, Check } from "lucide-react";

interface optionsObject {
	value: string;
	label: string;
}
interface SelectBoxArgs {
	componentFor: string;
	options: Array<optionsObject>;
}

export function JobSelectBox({ componentFor, options }: SelectBoxArgs) {
	const [value, setValue] = useState("");
	const [open, setOpen] = useState(false);

	return (
		<section>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="link"
						role="combobox"
						aria-expanded={open}
						className="w-[200px] text-base justify-between">
						{value
							? options.find((option) => option.value === value)
									?.label
							: `Select ${componentFor}...`}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[300px] p-0">
					<Command>
						<CommandInput
							placeholder={`Search ${componentFor}...`}
						/>
						<CommandList>
							<CommandEmpty>{`No ${componentFor} found.`}</CommandEmpty>
							<CommandGroup>
								{options.map((option) => (
									<CommandItem
										key={option.value}
										value={option.value}
										onSelect={(currentValue) => {
											setValue(
												currentValue === value
													? ""
													: currentValue
											);
											setOpen(false);
										}}>
										<Check
											className={cn(
												"mr-2 h-4 w-4",
												value === option.value
													? "opacity-100"
													: "opacity-0"
											)}
										/>
										{option.label}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</section>
	);
}
