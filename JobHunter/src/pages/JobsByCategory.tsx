import { JobByCategoryHeader } from "@/components/Category/JobByCategoryHeader";
import { JobCardsWrapper } from "@/components/Category/JobCardsWrapper";
import { JobCategoryDetail } from "@/components/Category/JobCategoryDetail";
import { JobCategoryNav } from "@/components/Category/JobCategoryNav";
import { JobFilterBox } from "@/components/Category/filterBox/JobFilterBox";

export function JobsByCategory() {
	return (
		<section className="w-full flex flex-col items-center relative self-start">
			<JobCategoryNav />

			<JobByCategoryHeader />

			<JobCategoryDetail />

			<div className="flex">
				<span className="relative">
					<JobFilterBox />
				</span>
				<JobCardsWrapper />
			</div>
		</section>
	);
}
