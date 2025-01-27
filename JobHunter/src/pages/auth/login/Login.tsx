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

export function Login() {
	return (
		<section>
			<Card className="w-[450px] dark:bg-zinc-900 bg-white">
				<CardHeader>
					<CardTitle className="text-xl">Login</CardTitle>
					<CardDescription>
						Please Enter Your Email and Password
					</CardDescription>
				</CardHeader>
				<CardContent>
					<section className="flex flex-col">
						<div className="flex-auto mb-4">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								className="border-b w-full border-b-slate-400"
								placeholder="Enter your email here..."
							/>
						</div>
						<div className="flex-auto">
							<Label htmlFor="pwd">Password</Label>
							<Input
								id="pwd"
								type="password"
								className="border-b w-full border-b-slate-400"
								placeholder="Enter your password here..."
							/>
						</div>
					</section>
				</CardContent>
				<CardFooter className="flex justify-end mx-2">
					<Button className="bg-sky-700 text-white">Submit</Button>
				</CardFooter>
			</Card>
		</section>
	);
}
