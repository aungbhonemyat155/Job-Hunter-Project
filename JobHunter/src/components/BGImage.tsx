import bg from "../image/bg.jpg";

export function BGImage() {
	return (
		<div className="absolute top-0 w-full">
			<img
				src={bg}
				alt=""
				className="h-[150px] lg:h-[250px] w-full object-cover object-center"
			/>
		</div>
	);
}
