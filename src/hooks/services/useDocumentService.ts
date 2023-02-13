import { AxiosError, AxiosRequestConfig } from 'axios';
import useSWR, { BareFetcher } from 'swr';

import { documentService } from '../../services/documentService';

interface SWRKey {
  url: string;
  config?: AxiosRequestConfig;
}

export function useDocumentService<T>(swrKey?: SWRKey) {
  const fetcher: BareFetcher<T> = async ({ url, config }: SWRKey) => {
    const response = await documentService.get<T>(url, config);
    return response.data;
  };

  return useSWR<T, AxiosError>(swrKey ?? null, fetcher, {
    revalidateOnFocus: false,
  });

  // return useSWR<T, AxiosError>(key, fetcher, { revalidateOnFocus: false });
}
