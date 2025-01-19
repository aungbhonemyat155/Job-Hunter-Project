import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function Testing() {
	return (
		<section>
			<nav className="bg-slate-300 p-3 sticky top-0">
				<h4 className="text-3xl text-sky-800 font-bold">Nav Bar</h4>
			</nav>
			<div className="p-3 bg-slate-200 border sticky top-0 border-sky-500 m-2">
				<h4 className="text-3xl text-slate-500 font-bold">
					Search Box
				</h4>
			</div>
			<div className="p-3">
				<span className="max-w-4xl">
					{[...Array(15)].map((_, index) => (
						<Card key={index} className="m-3">
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
									consectetur adipisicing elit. Delectus,
									laudantium adipisci nostrum distinctio sequi
									mollitia nulla enim in, repudiandae dicta
									possimus. Nihil sequi voluptatibus possimus,
									libero veritatis dolore neque numquam?{" "}
									{index + 1}
								</p>
							</CardFooter>
						</Card>
					))}
				</span>
			</div>
		</section>
	);
}
