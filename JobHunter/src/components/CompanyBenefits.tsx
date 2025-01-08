import { ThumbsUp, Lightbulb, Star } from "lucide-react";

export function CompanyBenefits() {
	return (
		<div className="border-2 rounded-md p-5 border-sky-600 ">
			<h4 className="text-xl font-semibold lg:mb-3">What We Can Offer</h4>

			<ul className="flex flex-col lg:flex-row">
				<li className="flex-1 mt-4">
					<h5 className="text-lg font-semibold flex gap-2">
						<ThumbsUp className="text-blue-800 w-[30px] h-[30px]" />
						Benefits
					</h5>
					<ul className="text-sm text-slate-600 mt-3 ms-10 dark:text-slate-400 list-disc">
						{[...Array(4)].map((_, index) => (
							<li key={index}>some benefit {index}</li>
						))}
					</ul>
				</li>
				<li className="flex-1 mt-4 lg:border-l lg:border-l-blue-600 lg:ps-5">
					<h5 className="text-lg font-semibold flex gap-2">
						<Lightbulb className="text-blue-800 w-[30px] h-[30px]" />
						Hightlights
					</h5>
					<ul className="text-sm text-slate-600 mt-3 ms-10 dark:text-slate-400 list-disc">
						{[...Array(3)].map((_, index) => (
							<li key={index}>some hightlight {index}</li>
						))}
					</ul>
				</li>
				<li className="flex-1 mt-4 lg:border-l lg:border-l-blue-600 lg:ps-5">
					<h5 className="text-lg font-semibold flex gap-2">
						<Star className="text-blue-800 w-[30px] h-[30px]" />
						Career Opportunities
					</h5>
					<ul className="text-sm text-slate-600 mt-3 ms-10 dark:text-slate-400 list-disc">
						{[...Array(4)].map((_, index) => (
							<li key={index}>some opportunity {index}</li>
						))}
					</ul>
				</li>
			</ul>
		</div>
	);
}
