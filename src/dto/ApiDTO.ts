export interface ApiStatus {
	code: string;
	message: string;
	service: string;
	description?: {
		en: string;
		th: string;
	};
}

export interface ResponseData<T> {
	status: ApiStatus;
	data: T;
}

export interface ApiResponse<T> {
	data: ResponseData<T>;
	isError: boolean;
	isEmpty: boolean;
	timeStamp?: number;
}

export interface ErrorDetail {
	http_code: string;
	code: string;
	description: string;
}
