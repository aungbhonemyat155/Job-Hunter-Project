import { Button } from "../../ui/button";

import { JobFilterRadioBox } from "./JobFilterRadioBox";
import { JobSalaryFilter } from "./JobSalaryFilter";
import { JobExpatCheckbox } from "./JobExpatCheckbox";

export function JobFilterBox() {
	return (
		<section className="w-72 h-[calc(100vh-90px)] flex flex-col sticky top-[90px]">
			<div className="flex-1">
				<h5 className="font-semibold py-2">Filters</h5>

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
			</div>

			<hr className="border border-slate-400" />

			<div className="overflow-y-scroll flex flex-col gap-3 mt-3 pb-3 my-scrollable-element">
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
			</div>
		</section>
	);
}
