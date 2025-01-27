import { ReactNode } from "react";

interface Category {
	label: string;
	value: string;
}

export function CategoryCard(category: Category, children: ReactNode) {
	return (
		<div
			className="w-[150px]  
        bg-slate-200 
        rounded 
        p-3 
        shadow 
        flex 
        flex-col 
        justify-center 
        items-center 
        relative">
			<span>
				<Handshake />
			</span>
			<span className="absolute top-3 right-3">count</span>
			<span>{category.label}</span>
		</div>
	);
}
