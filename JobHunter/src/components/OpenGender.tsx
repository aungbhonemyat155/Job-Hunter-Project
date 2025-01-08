import { CircleCheckBig } from "lucide-react";

export function OpenGender() {
	return (
		<div className="my-5">
			<h3 className="text-2xl">Open To</h3>
			<span className="flex gap-2">
				<CircleCheckBig color="green" size={25} /> <p>Male/ Female</p>
			</span>
		</div>
	);
}
