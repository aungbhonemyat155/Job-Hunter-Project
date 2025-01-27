import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Name() {
	const firstNameInput = useRef<HTMLInputElement>(null);
	const secondNameInput = useRef<HTMLInputElement>(null);

	const navigate = useNavigate();

	const submit = () => {
		let name;
		let firstName = firstNameInput.current
			? firstNameInput.current.value
			: "";
		let secondName = secondNameInput.current
			? secondNameInput.current.value
			: "";

		firstName = firstName.trim();
		secondName = secondName.trim();

		if (!firstName) {
			return;
		} else if (secondName) {
			name = firstName + " " + secondName;
		} else {
			name = firstName;
		}

		sessionStorage.setItem("name", name);

		navigate("/register/email");
	};

	const back = () => {
		navigate("/register/role");
	};

	return (
		<section>
			<Card className="w-[550px] dark:bg-zinc-900 bg-white">
				<CardHeader>
					<CardTitle>Name</CardTitle>
					<CardDescription>Please Fill Your Name</CardDescription>
				</CardHeader>
				<CardContent>
					<section className="flex justify-between">
						<div className="flex-auto mr-4">
							<Label htmlFor="firstName">First Name</Label>
							<Input
								ref={firstNameInput}
								id="firstName"
								className="border-b w-full border-b-slate-400"
								placeholder="Enter your first name here..."
							/>
						</div>
						<div className="flex-auto">
							<Label htmlFor="secondName">
								Second Name (*optional)
							</Label>
							<Input
								ref={secondNameInput}
								id="secondName"
								className="border-b w-full border-b-slate-400"
								placeholder="Enter your second name here..."
							/>
						</div>
					</section>
				</CardContent>
				<CardFooter className="flex justify-between mx-2">
					<Button onClick={back}>Back</Button>
					<Button
						onClick={submit}
						className="bg-sky-700 text-white hover:bg-sky-600">
						Next
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
}
