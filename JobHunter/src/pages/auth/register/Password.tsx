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
import { useRef, useState } from "react";

import { postRegister } from "@/api/fetcher";

export function Password() {
	const [validation, setValidation] = useState<boolean>(false);

	const pwdInput = useRef<HTMLInputElement>(null);
	const rPwdInput = useRef<HTMLInputElement>(null);

	const clearInputs = () => {
		if (pwdInput.current) {
			pwdInput.current.value = "";
		}
		if (rPwdInput.current) {
			rPwdInput.current.value = "";
		}
	};

	const submit = async () => {
		const password = pwdInput.current ? pwdInput.current.value : "";
		const rePassword = rPwdInput.current ? rPwdInput.current.value : "";

		if (!password || !rePassword) return;

		if (password !== rePassword) {
			setValidation(true);
			clearInputs();

			return;
		}

		const name = sessionStorage.getItem("name");
		const email = sessionStorage.getItem("email");
		const role = sessionStorage.getItem("role");

		if (name && email && role) {
			const result = await postRegister({
				name,
				email,
				password,
				role,
			});

			if (result) {
				console.log(result.error);
			}
		}
	};

	return (
		<section>
			<Card className="w-[550px] dark:bg-zinc-900 bg-white">
				<CardHeader>
					<CardTitle>Password</CardTitle>
					<CardDescription>
						Please Set Your Password
						{validation && (
							<span className="text-red-700 text-sm font-bold">
								*( Password not match )
							</span>
						)}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<section className="flex flex-col">
						<div className="flex-auto mb-4">
							<Label htmlFor="pwd">Password</Label>
							<Input
								ref={pwdInput}
								id="pwd"
								type="password"
								className="border-b w-full border-b-slate-400"
								placeholder="Enter your password here..."
							/>
						</div>
						<div className="flex-auto">
							<Label htmlFor="rpwd">Re-Enter Password</Label>
							<Input
								ref={rPwdInput}
								id="rpwd"
								type="password"
								className="border-b w-full border-b-slate-400"
								placeholder="Re-Enter your password here..."
							/>
						</div>
					</section>
				</CardContent>
				<CardFooter className="flex justify-between mx-2">
					<Button>Back</Button>
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
