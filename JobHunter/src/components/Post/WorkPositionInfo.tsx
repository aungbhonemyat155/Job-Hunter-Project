import fish from "../../image/fish.jpg";
import {
	MapPinned,
	CircleDollarSign,
	BadgeCheck,
	Calendar,
	Eye,
} from "lucide-react";

export function WorkPositionInfo() {
	return (
		<div className="h-[350px] lg:h-[250px] flex flex-col justify-end items-center lg:flex-row lg:items-end lg:justify-around relative">
			<div className="flex flex-col items-center w-full lg:justify-normal lg:items-start lg:flex-row lg:w-3/6 lg:gap-6 ">
				<img
					src={fish}
					alt=""
					className="w-[130px] h-[130px] lg:w-[180px] lg:h-[180px] object-cover object-center z-20 rounded-md"
				/>

				<div className="lg:text-white grow">
					<h3 className="text-2xl text-center lg:text-start lg:text-3xl font-semibold">
						Work Position
					</h3>
					<a
						href="#"
						className="text-center lg:text-start block underline text-blue-900 lg:text-white">
						Copany Name
					</a>

					<ul className="flex gap-2 text-slate-800 lg:text-white justify-around mt-2 lg:mt-6 w-full ">
						<li className="flex gap-1">
							<MapPinned className="w-[18px] h-[18px] lg:w-auto" />
							<span>location</span>
						</li>
						<li className="flex gap-1">
							<CircleDollarSign className="w-[18px] h-[18px] lg:w-auto" />
							<span>salary</span>
						</li>
						<li className="flex gap-1">
							<BadgeCheck className="w-[18px] h-[18px] lg:w-auto" />
							<span>verified</span>
						</li>
						<li className="flex gap-1">
							<Calendar className="w-[18px] h-[18px] lg:w-auto" />
							<span>date</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex mt-2 lg:mt-0 text-slate-500 lg:text-white self-center">
				<Eye />
				<span className="font-semibold">
					recruiter active{" "}
					<span className="font-normal">19 hours ago</span>
				</span>
			</div>

			<div className="bg-slate-100 hidden dark:bg-zinc-700 py-2 lg:flex justify-center gap-10 text-blue-600 dark:text-sky-500 font-semibold absolute bottom-0 w-full z-10">
				<a className="cursor-pointer">Copany Profile</a>
				<a className="cursor-pointer">Job From This Company</a>
				<span>Some Links</span>
			</div>
		</div>
	);
}
