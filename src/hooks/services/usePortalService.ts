import { AxiosError } from 'axios';
import useSWR, { BareFetcher, Key } from 'swr';
import portalService from '../../services/portalService';

interface SWRKey {
  url: string;
  params?: any;
}

function usePortalService<T>(swrKey?: SWRKey) {
  const fetcher: BareFetcher<T> = async ({ url, params }: SWRKey) => {
    const response = await portalService.get<T>(url, {
      params
    });
    return response.data;
  };

  return useSWR<T, AxiosError>(swrKey ?? null, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  // return useSWR<T, AxiosError>(key, fetcher, { revalidateOnFocus: false });
}

export default usePortalService;
