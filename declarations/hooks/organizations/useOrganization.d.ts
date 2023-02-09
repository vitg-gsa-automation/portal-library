import { Organization } from 'types/organizations';
declare function useOrganization(organizationId?: string): import("swr/_internal").SWRResponse<[Organization], import("axios").AxiosError<unknown, any>, Partial<import("swr/_internal").PublicConfiguration<[Organization], import("axios").AxiosError<unknown, any>, import("swr/_internal").BareFetcher<[Organization]>>> | undefined>;
export default useOrganization;
