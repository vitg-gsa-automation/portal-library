import { AxiosError, AxiosRequestConfig } from 'axios';
import { documentService } from 'services/documentService';
import useSWR, { BareFetcher } from 'swr';

interface SWRKey {
  url: string;
  config?: AxiosRequestConfig;
}

function useDocumentService<T>(swrKey?: SWRKey) {
  const fetcher: BareFetcher<T> = async ({ url, config }: SWRKey) => {
    const response = await documentService.get<T>(url, config);
    return response.data;
  };

  return useSWR<T, AxiosError>(swrKey ?? null, fetcher, {
    revalidateOnFocus: false,
  });

  // return useSWR<T, AxiosError>(key, fetcher, { revalidateOnFocus: false });
}

export default useDocumentService;
