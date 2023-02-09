import { Package } from 'types/packages';
declare function usePackages(): import("swr/_internal").SWRResponse<Package[], import("axios").AxiosError<unknown, any>, Partial<import("swr/_internal").PublicConfiguration<Package[], import("axios").AxiosError<unknown, any>, import("swr/_internal").BareFetcher<Package[]>>> | undefined>;
export default usePackages;
