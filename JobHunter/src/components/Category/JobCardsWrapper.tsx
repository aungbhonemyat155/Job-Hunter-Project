import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { useNavigate } from "react-router-dom";

export function JobCardsWrapper() {
	const navigate = useNavigate();

	return (
		<section className="max-w-4xl">
			{[...Array(15)].map((_, index) => (
				<Card
					key={index}
					className="m-3 dark:bg-zinc-900"
					onClick={() => {
						navigate("/post/" + index);
					}}>
					<section className="flex justify-between">
						<div>
							<CardHeader>
								<CardTitle>
									Some working position {index + 1}
								</CardTitle>
								<CardDescription>
									Company Name {index + 1}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="list-disc text-sm ms-5">
									<li>first option</li>
									<li>second option</li>
									<li>third optin</li>
								</ul>
							</CardContent>
						</div>
						<div>
							<img src="" alt="" />
						</div>
					</section>
					<CardFooter>
						<p className="text-sm text-slate-600">
							Some paragarph Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Delectus, laudantium
							adipisci nostrum distinctio sequi mollitia nulla
							enim in, repudiandae dicta possimus. Nihil sequi
							voluptatibus possimus, libero veritatis dolore neque
							numquam? {index + 1}
						</p>
					</CardFooter>
				</Card>
			))}
		</section>
	);
}
