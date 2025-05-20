import { useState } from 'react';
import { ApiResponse, ResponseData } from '@/dto/ApiDTO';
import { RequestHeaders, unionTypeFetchFunction } from '@/api/middleware/types';
import { useAPI } from './useAPI';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const useApiWithStore = <T>(storeSetter: (data: T) => void) => {
	const [response, setResponse] = useState<ApiResponse<T>>({
		data: {} as ResponseData<T>,
		isError: false
	});

	const { callAPI, isLoading, isFetched } = useAPI<T>();

	const callAPIWithStore = async (
		endpoint: string,
		method: HttpMethod = 'GET',
		body: object = {},
		headers: RequestHeaders = {},
		params: object = {},
		fetchFunction?: unionTypeFetchFunction,
		byPassFunction?: () => string
	): Promise<void> => {
		try {
			const responseData: ApiResponse<T> | undefined = await callAPI(
				endpoint,
				method,
				body,
				headers,
				params,
				fetchFunction,
				byPassFunction
			);
			responseData && storeSetter(responseData.data.data);
			responseData && setResponse(responseData);
		} catch (err: unknown) {
			const errorResponse = err as ApiResponse<T>;
			setResponse(errorResponse);
			throw errorResponse;
		}
	};

	return { ...response, response, isLoading, isFetched, callAPIWithStore };
};
