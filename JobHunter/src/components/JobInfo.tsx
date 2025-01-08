import {
	TrendingUp,
	FolderClosed,
	Factory,
	BookOpenText,
	AlarmClockPlus,
} from "lucide-react";

export function JobInfo() {
	return (
		<div className="border border-blue-500 rounded-md p-5">
			<span className="flex items-center gap-5">
				<TrendingUp className="text-blue-800" />
				<span className="flex flex-col font-semibold">
					Experience level
					<span className="font-normal text-sm text-slate-600 dark:text-slate-400">
						Experienced Non-Manager
					</span>
				</span>
			</span>
			<span className="flex items-center gap-5 mt-3">
				<FolderClosed className="text-blue-800" />
				<span className="flex flex-col font-semibold">
					Job Function
					<span className="font-normal text-sm text-slate-600 dark:text-slate-400">
						IT, Software & Hardware
					</span>
				</span>
			</span>
			<span className="flex items-center gap-5 mt-3">
				<Factory className="text-blue-800" />
				<span className="flex flex-col font-semibold">
					Job Industry
					<span className="font-normal text-sm text-slate-600 dark:text-slate-400">
						Banking/ Insurance/ Microfinance
					</span>
				</span>
			</span>
			<span className="flex items-center gap-5 mt-3">
				<BookOpenText className="text-blue-800" />
				<span className="flex flex-col font-semibold">
					Min Education Level
					<span className="font-normal text-sm text-slate-600 dark:text-slate-400">
						Bachelor Degree
					</span>
				</span>
			</span>
			<span className="flex items-center gap-5 mt-3">
				<AlarmClockPlus className="text-blue-800" />
				<span className="flex flex-col font-semibold">
					Job Type
					<span className="font-normal text-sm text-slate-600 dark:text-slate-400">
						Full Time
					</span>
				</span>
			</span>
		</div>
	);
}
