import usePortalService from 'hooks/services/usePortalService';
import useUser from 'hooks/useUser';
import { Organization } from 'types/organizations';

function useOrganizations() {
  const user = useUser();
  return usePortalService<Organization[]>(
    user?.AuthenticationCode
      ? {
          url: '/GetOrgs',
          params: {
            _authcode: user.AuthenticationCode,
          },
        }
      : undefined
  );
}

export default useOrganizations;
