import { AxiosError, AxiosRequestConfig } from 'axios';
import { BareFetcher } from 'swr';
interface SWRKey {
    url: string;
    config?: AxiosRequestConfig;
}
declare function useValidationService<T>(swrKey?: SWRKey): import("swr/_internal").SWRResponse<T, AxiosError<unknown, any>, Partial<import("swr/_internal").PublicConfiguration<T, AxiosError<unknown, any>, BareFetcher<T>>> | undefined>;
export default useValidationService;
