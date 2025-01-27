import { Button } from "../ui/button";

export function JobCategoryDetail() {
	return (
		<section className="w-5/6">
			<h5 className="text-lg font-semibold my-2">
				Overview of IT and tech Jobs in Myanmar
			</h5>
			<p className="text-slate-700 dark:text-slate-300 text-[15px]">
				Computer systems have two major elements: the hardware and the
				software. Hardware is the parts that you can physically touch,
				for example the monitor, mouse, keypad, printer, and the hard
				drive. Jobs in hardware include anything to do with the design,
				production, transportation, installation and maintenance
			</p>
			<div className="text-end">
				<Button variant="link">View More</Button>
			</div>
		</section>
	);
}
