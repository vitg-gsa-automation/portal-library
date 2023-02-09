import { System } from 'types/systems';
interface UseSystemParams {
    _orgid: string;
    _systemid: number;
}
declare function useSystem(params?: UseSystemParams): import("swr/_internal").SWRResponse<[System], import("axios").AxiosError<unknown, any>, Partial<import("swr/_internal").PublicConfiguration<[System], import("axios").AxiosError<unknown, any>, import("swr/_internal").BareFetcher<[System]>>> | undefined>;
export default useSystem;
