import { AxiosError } from 'axios';
import { integrationService } from 'services/integrationService';
import useSWR, { BareFetcher, Key } from 'swr';

interface SWRKey {
  url: string;
  params?: any;
}

function useIntegrationService<T>(swrKey?: SWRKey) {
  const fetcher: BareFetcher<T> = async ({ url, params }: SWRKey) => {
    const response = await integrationService.get<T>(url, {
      params,
    });
    return response.data;
  };

  return useSWR<T, AxiosError>(swrKey ?? null, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  // return useSWR<T, AxiosError>(key, fetcher, { revalidateOnFocus: false });
}

export default useIntegrationService;
