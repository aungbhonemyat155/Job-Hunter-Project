interface testingType {
	className: string;
}

export function TestingComponent({ className }: testingType) {
	return (
		<section className={`${className} text-xl`}>
			Some testing component
		</section>
	);
}
