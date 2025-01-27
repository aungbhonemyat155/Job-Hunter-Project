import { useNavigate } from "react-router-dom";

export function JobCategories() {
	const navigate = useNavigate();

	return (
		<section className="h-full w-5/6 self-start">
			<h3 className="text-2xl font-semibold my-5">
				Top Job Categories to Work in Myanmar
			</h3>

			<div
				id="category-card-wrapper"
				className="flex justify-center flex-wrap gap-4">
				{[...Array(15)].map((_, index) => (
					<div
						onClick={() => {
							navigate("/category/categoryName");
						}}
						key={index}
						className="w-[150px]  bg-slate-200 rounded p-3 shadow flex flex-col justify-center items-center relative cursor-pointer">
						<span>icon</span>
						<span className="absolute top-3 right-3">count</span>
						<span>Sales, Business, Development</span>
					</div>
				))}
			</div>
		</section>
	);
}
