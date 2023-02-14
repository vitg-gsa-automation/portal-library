import usePortalService from '../../hooks/services/usePortalService';
import useUser from '../../hooks/useUser';
import { Organization } from '../../types/organizations';

function useOrganization(organizationId?: string) {
  const user = useUser();
  return usePortalService<[Organization]>(
    user?.AuthenticationCode && organizationId
      ? {
          url: '/GetOrgsByID',
          params: {
            _id: organizationId,
            _authcode: user.AuthenticationCode,
          },
        }
      : undefined
  );
}
export default useOrganization;
