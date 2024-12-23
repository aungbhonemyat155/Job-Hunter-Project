import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Role() {
	const [role, setRole] = useState<string>("");
	const navigate = useNavigate();

	const submit = () => {
		if (!role) return;

		sessionStorage.setItem("role", role);

		navigate("/register/name");
	};

	return (
		<section>
			<Card className="w-[550px] dark:bg-zinc-900 bg-white">
				<CardHeader>
					<CardTitle>Role</CardTitle>
					<CardDescription>Please Select Your Role</CardDescription>
				</CardHeader>
				<CardContent>
					<section className="flex justify-between">
						<div
							className={`flex-auto flex justify-center bg-slate-200 dark:bg-zinc-800 rounded-xl text-xl font-bold items-center mr-4 h-[200px] ${
								role === "employee"
									? "border border-sky-600"
									: ""
							}`}
							onClick={() => setRole("employee")}>
							Employee
						</div>
						<div
							className={`flex-auto flex justify-center bg-slate-200 dark:bg-zinc-800 rounded-xl text-xl font-bold items-center ${
								role === "employer"
									? "border border-sky-600"
									: ""
							}`}
							onClick={() => setRole("employer")}>
							Employer
						</div>
					</section>
				</CardContent>
				<CardFooter className="flex justify-end mx-2">
					<Button
						onClick={submit}
						className="bg-sky-700 hover:bg-sky-600 text-white">
						Next
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
}
