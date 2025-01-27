import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function JobByCategoryHeader() {
	return (
		<section className="flex justify-between items-center w-5/6 py-5 border-b border-b-slate-400">
			<h4 className="text-xl">
				<span className="font-bold">count </span>
				<span>IT, Hardware, Software Jobs </span>
				found
			</h4>
			<span className="flex items-center">
				<p className="me-2">Sort by : </p>
				<Select>
					<SelectTrigger className="w-[180px] font-bold">
						<SelectValue placeholder="Current Value" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Recommended</SelectItem>
						<SelectItem value="dark">Posted Date</SelectItem>
					</SelectContent>
				</Select>
			</span>
		</section>
	);
}
