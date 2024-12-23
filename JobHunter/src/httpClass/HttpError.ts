export class HttpError {
	statusCode;
	message;
	responseData;

	constructor(
		statusCode: number,
		message: string,
		responseData: object | null
	) {
		this.statusCode = statusCode;
		this.message = message;
		this.responseData = responseData;
	}

	get() {
		return {
			statusCode: this.statusCode,
			message: this.message,
			responseData: this.responseData,
		};
	}
}
