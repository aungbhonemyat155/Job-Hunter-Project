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
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Email() {
	const emailInput = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const back = () => {
		navigate("/register/name");
	};

	const submit = () => {
		const email = emailInput.current ? emailInput.current.value : "";

		if (!email) return;

		sessionStorage.setItem("email", email);

		navigate("/register/password");
	};

	return (
		<section>
			<Card className="w-[550px] dark:bg-zinc-900 bg-white">
				<CardHeader>
					<CardTitle>Email</CardTitle>
					<CardDescription>Please Fill Your email</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex-auto mr-4">
						<Input
							ref={emailInput}
							id="email"
							type="email"
							className="border-b w-full border-b-slate-400"
							placeholder="Enter your email here..."
						/>
					</div>
				</CardContent>
				<CardFooter className="flex justify-between mx-2">
					<Button onClick={back}>Back</Button>
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
