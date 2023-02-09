import { Organization } from 'types/organizations';
declare function useOrganizations(): import("swr/_internal").SWRResponse<Organization[], import("axios").AxiosError<unknown, any>, Partial<import("swr/_internal").PublicConfiguration<Organization[], import("axios").AxiosError<unknown, any>, import("swr/_internal").BareFetcher<Organization[]>>> | undefined>;
export default useOrganizations;
