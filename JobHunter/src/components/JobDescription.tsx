export function JobDescription() {
	return (
		<div>
			<h3 className="text-2xl my-5">Job Description</h3>

			<p>A Great Opportunity for ...</p>

			<ul className=" list-disc m-5 flex flex-col gap-2 text-sm text-slate-900 dark:text-slate-300">
				{[...Array(8)].map((_, index) => (
					<li key={index}>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Aspernatur esse animi deleniti
					</li>
				))}
			</ul>
		</div>
	);
}
