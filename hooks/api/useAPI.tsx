import { useState } from 'react';
import ApiClient from '@/api/middleware';
import { ApiResponse, ResponseData } from '@/dto/ApiDTO';
import { RequestHeaders, unionTypeFetchFunction } from '@/api/middleware/types';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const useAPI = <T,>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const callAPI = async (
    endpoint: string,
    method: HttpMethod = 'GET',
    body: FormData | object,
    headers: RequestHeaders = {},
    params: object = {},
    fetchFunction?: unionTypeFetchFunction,
    byPassFunction?: () => string
  ): Promise<ApiResponse<T> | undefined> => {
    setIsLoading(true);
    try {
      let responseApi;
      switch (method) {
        case 'POST':
          responseApi = await ApiClient.post(
            endpoint,
            headers,
            null,
            body,
            fetchFunction,
            byPassFunction,
            null
          );
          responseApi = responseApi?.data;
          break;
        case 'PUT':
          responseApi = await ApiClient.put(
            endpoint,
            headers,
            params,
            body,
            fetchFunction,
            byPassFunction,
            null
          );
          break;
        default:
          responseApi = await ApiClient.get(
            endpoint,
            headers,
            params,
            fetchFunction,
            byPassFunction,
            null
          );
      }

      if (responseApi === undefined) return;

      const isSuccess =
        responseApi?.status?.code === '000000' &&
        !responseApi?.data?.error_detail?.code &&
        !responseApi?.data?.error_detail?.http_code;
      return { data: responseApi, isError: !isSuccess };
    } catch (err: unknown) {
      throw { data: err as ResponseData<T>, isError: true };
    } finally {
      setIsLoading(false);
      setIsFetched(true);
    }
  };

  return { callAPI, isLoading, isFetched };
};
