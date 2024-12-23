export class HttpSuccess {
	statusCode;
	responseData;

	constructor(statusCode: number, responseData: object | null) {
		this.statusCode = statusCode;
		this.responseData = responseData;
	}

	get() {
		return {
			statusCode: this.statusCode,
			responseData: this.responseData,
		};
	}
}
