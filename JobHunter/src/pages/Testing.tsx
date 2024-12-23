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
				<div>
					<Button onClick={getUrl}>GetURL</Button>
				</div>
			</section>
		</>
	);
}
