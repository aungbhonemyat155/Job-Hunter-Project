import { HttpError } from "@/httpClass/HttpError";
import { HttpSuccess } from "@/httpClass/HttpSuccess";

const apiUrl = import.meta.env.VITE_API_URL;

export interface LoginData {
	email: string;
	password: string;
}

export interface RegisterData {
	name: string;
	email: string;
	password: string;
	role: string;
}

export async function postLogin(userData: LoginData) {
	const result = await fetch(`${apiUrl}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});

	if (result.ok) {
		return result.json();
	}

	const errorData = await result.json();
	throw new Error(errorData.message || "Login failed");
}

export async function postRegister(userData: RegisterData) {
	const result = await fetch(`${apiUrl}/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});

	if (!result.ok) {
		return new HttpError(500, "http error", result.json());
	}

	return new HttpSuccess(200, result.json());
}
