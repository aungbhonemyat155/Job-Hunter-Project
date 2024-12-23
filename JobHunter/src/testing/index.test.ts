import { postRegister } from "@/api/fetcher";
import { it, expect } from "vitest";

it("should throw an error if the email is already exits", () => {
	const userData = {
		name: "Testing User",
		email: "testing@gmail.com",
		password: "password",
		role: "employee",
	};

	const result = postRegister(userData);

	expect(result).toThrow();
});
