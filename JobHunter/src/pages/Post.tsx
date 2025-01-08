import { useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { SimilarJobs } from "@/components/SimilarJobs";
import { BGImage } from "@/components/BGImage";
import { WorkPositionInfo } from "@/components/WorkPositionInfo";
import { JobDescription } from "@/components/JobDescription";
import { OpenGender } from "@/components/OpenGender";
import { JobRequirements } from "@/components/JobRequirements";
import { CompanyBenefits } from "@/components/CompanyBenefits";
import { JobInfo } from "@/components/JobInfo";
import { JobApplyButton } from "@/components/JobApplyButton";

export function Post() {
	const { id } = useParams();

	return (
		<section className="h-full w-full relative">
			<BGImage />

			<WorkPositionInfo />

			<div className="flex flex-col-reverse items-center lg:items-start lg:flex-row justify-around my-5">
				<div className="w-5/6 lg:w-7/12">
					<JobDescription />

					<hr className="border-slate-400" />

					<OpenGender />

					<hr className="border-slate-400" />

					<JobRequirements />

					<CompanyBenefits />

					<div className="my-5 flex flex-col lg:flex-row gap-3 lg:gap-5">
						<div>
							<JobApplyButton />
						</div>
						<div>
							<Button
								variant={"secondary"}
								size={"lg"}
								className="text-md w-full border border-black hover:border-0 dark:border-slate-300 dark:bg-zinc-900">
								More Jobs From This Employer
							</Button>
						</div>
					</div>

					<SimilarJobs className="flex lg:hidden" />
				</div>

				<div className="flex flex-col gap-5 lg:w-3/12 mb-10 w-5/6">
					<JobApplyButton />

					<JobInfo />

					<SimilarJobs className="hidden lg:flex" />
				</div>
			</div>
		</section>
	);
}
