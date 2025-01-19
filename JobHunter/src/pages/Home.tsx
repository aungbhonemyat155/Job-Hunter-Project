import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Search } from "lucide-react";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { JobFilterRadioBox } from "@/components/JobFilterRadioBox";
import { JobSalaryFilter } from "@/components/JobSalaryFilter";
import { JobExpatCheckbox } from "@/components/JobExpatCheckbox";

const jobCategory = [
	{
		value: "sales,business development",
		label: "Sales, Business Development",
	},
	{
		value: "finance,accounting,audit",
		label: "Finance, Accounting, Audit",
	},
	{
		value: "IT hardware,software",
		label: "IT Hardware, Software",
	},
	{
		value: "marketing,media,creative",
		label: "Marketing, Media, Creative",
	},
	{
		value: "engineering,technical,HSE",
		label: "Engineering, Technical, HSE",
	},
	{
		value: "hr,training and recruitment",
		label: "HR, Training and Recruitment",
	},
	{
		value: "administrative",
		label: "Administrative",
	},
	{
		value: "customer service,support",
		label: "Customer Service, Support",
	},
	{
		value: "logistics,warehousing,port",
		label: "Logistics, Warehousing, Port",
	},
	{
		value: "project,operations management",
		label: "Project, Operations Management",
	},
	{
		value: "education,teaching,childcare",
		label: "Education, Teaching, Childcare",
	},
	{
		value: "procurement,supply chain",
		label: "Procurement, Supply Chain",
	},
	{
		value: "legal,risk and compliance",
		label: "Legal, Risk and Compliance",
	},
	{
		value: "manufacturing,factory",
		label: "Manufacturing, Factory",
	},
	{
		value: "medical,nursing,pharmacy",
		label: "Medical, Nursing, Pharmacy",
	},
	{
		value: "quality assurance",
		label: "Quality Assurance",
	},
	{
		value: "architecture,design",
		label: "Architecture, Design",
	},
	{
		value: "food and beverage",
		label: "Food and Beverage",
	},
	{
		value: "translation",
		label: "Translation",
	},
	{
		value: "research and development",
		label: "Research and Development",
	},
	{
		value: "pr,communications",
		label: "PR, Communications",
	},
	{
		value: "hospitality,hotel,tourism",
		label: "Hospitality, Hotel, Tourism",
	},
	{
		value: "management",
		label: "Management",
	},
	{
		value: "strategy,planning",
		label: "Strategy, Planning",
	},
	{
		value: "writing,editing",
		label: "Writing, Editing",
	},
	{
		value: "science,laboratory",
		label: "Science, Laboratory",
	},
];

export function Home() {
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	return (
		<section className="h-full w-full">
			<div className="overflow-y-scroll h-full">
				<div className="border border-sky-700 p-3 flex sticky top-0 bg-slate-300">
					<span className="flex gap-3">
						<Search />
						<input
							className="bg-transparent border-none outline-none w-full"
							type="text"
							placeholder="All Positions, Companies, Keywords"
						/>
					</span>
					<span>
						<Popover open={open} onOpenChange={setOpen}>
							<PopoverTrigger asChild>
								<Button
									variant="link"
									role="combobox"
									aria-expanded={open}
									className="w-[200px] justify-between">
									{value
										? jobCategory.find(
												(jobCategory) =>
													jobCategory.value === value
										  )?.label
										: "Select Job Category..."}
									<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-[300px] p-0">
								<Command>
									<CommandInput placeholder="Search Job Category..." />
									<CommandList>
										<CommandEmpty>
											No Job Category found.
										</CommandEmpty>
										<CommandGroup>
											{jobCategory.map((category) => (
												<CommandItem
													key={category.value}
													value={category.value}
													onSelect={(
														currentValue
													) => {
														setValue(
															currentValue ===
																value
																? ""
																: currentValue
														);
														setOpen(false);
													}}>
													<Check
														className={cn(
															"mr-2 h-4 w-4",
															value ===
																category.value
																? "opacity-100"
																: "opacity-0"
														)}
													/>
													{category.label}
												</CommandItem>
											))}
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
					</span>
				</div>

				<div className="flex justify-center">
					<span className="w-72">
						<h5 className="font-semibold my-3">Filters</h5>

						<div className="my-2 flex justify-around">
							<Button
								className="text-blue-700 font-semibold"
								variant={"link"}>
								Clear All
							</Button>
							<Button className="bg-sky-800 hover:bg-sky-700 dark:text-white w-44">
								Apply
							</Button>
						</div>

						<hr className="border border-slate-400" />

						<JobFilterRadioBox
							header="Freshness"
							options={[
								"anydays",
								"today",
								"last7days",
								"last14days",
								"last30days",
							]}
						/>

						<JobFilterRadioBox
							header="Industries"
							options={[
								"Any",
								"Accounting/ Audit/ Tax Services",
								"Advertising/ PR/ Marketing",
								"Agriculture/ Forestry/ Fishing",
								"Airlines/ Aviation",
								"Automotive",
								"Banking/ Insurance/ Microfinance",
								"Biotechnology/ Pharmaceuticals",
							]}
						/>

						<JobFilterRadioBox
							header="Experience level"
							options={[
								"Any",
								"Entry Level",
								"Experienced Non-Manager",
								"Manager",
								"Director and Above",
							]}
						/>

						<JobSalaryFilter />

						<JobExpatCheckbox />
					</span>
					<span className="max-w-4xl">
						{[...Array(15)].map((_, index) => (
							<Card
								key={index}
								className="m-3"
								onClick={() => {
									navigate("/post/" + index);
								}}>
								<section className="flex justify-between">
									<div>
										<CardHeader>
											<CardTitle>
												Some working position{" "}
												{index + 1}
											</CardTitle>
											<CardDescription>
												Company Name {index + 1}
											</CardDescription>
										</CardHeader>
										<CardContent>
											<ul className="list-disc text-sm ms-5">
												<li>first option</li>
												<li>second option</li>
												<li>third optin</li>
											</ul>
										</CardContent>
									</div>
									<div>
										<img src="" alt="" />
									</div>
								</section>
								<CardFooter>
									<p className="text-sm text-slate-600">
										Some paragarph Lorem, ipsum dolor sit
										amet consectetur adipisicing elit.
										Delectus, laudantium adipisci nostrum
										distinctio sequi mollitia nulla enim in,
										repudiandae dicta possimus. Nihil sequi
										voluptatibus possimus, libero veritatis
										dolore neque numquam? {index + 1}
									</p>
								</CardFooter>
							</Card>
						))}
					</span>
				</div>
			</div>
		</section>
	);
}
