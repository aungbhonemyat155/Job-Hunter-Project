import { Button } from "@/components/ui/button";

export function Testing() {
	const getUrl = async () => {
		const result = await fetch("127.0.0.1:3000/");
		const data = await result.json();
		console.log(data, result);
	};

	return (
		<>
			<section>
				<div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-4">
					<div className="bg-red-700 w-52">box1</div>
					<div className="bg-blue-700 w-52">box2</div>
					<div className="bg-green-700 w-52">box3</div>
					<div className="bg-yellow-700 w-52">box4</div>
				</div>
			</section>
		</>
	);
}
