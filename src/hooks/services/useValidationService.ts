import { AxiosError, AxiosRequestConfig } from 'axios';
import useSWR, { BareFetcher } from 'swr';
import { validationService } from '../../services/validationService';

interface SWRKey {
  url: string;
  config?: AxiosRequestConfig;
}

function useValidationService<T>(swrKey?: SWRKey) {
  const fetcher: BareFetcher<T> = async ({ url, config }: SWRKey) => {
    const response = await validationService.get<T>(url, config);
    return response.data;
  };

  return useSWR<T, AxiosError>(swrKey ?? null, fetcher, {
    revalidateOnFocus: false,
  });

  // return useSWR<T, AxiosError>(key, fetcher, { revalidateOnFocus: false });
}

export default useValidationService;
