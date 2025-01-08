export function JobRequirements() {
	return (
		<div className="my-5">
			<h3 className="text-2xl">Job Requirements</h3>
			<ul className=" list-disc m-5 flex flex-col gap-2 text-sm text-slate-900 dark:text-slate-300">
				{[...Array(8)].map((_, index) => (
					<li key={index}>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Velit similique rerum provident temporibus,
					</li>
				))}
			</ul>
		</div>
	);
}
