import { usePortalService } from 'hooks/services/usePortalService';
import { useUser } from 'hooks/useUser';
import { Option } from 'types/misc';

export function useOrganizationTypes() {
  const user = useUser();
  return usePortalService<Option[]>(
    user?.AuthenticationCode
      ? {
          url: '/GetOrganizationType',
          params: {
            _authcode: user.AuthenticationCode,
          },
        }
      : undefined
  );
}
