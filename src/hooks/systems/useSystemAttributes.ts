import { usePortalService } from '../../hooks/services/usePortalService';
import { useUser } from '../../hooks/useUser';
import { Option } from '../../types/misc';

export function useSystemAttributes() {
  const user = useUser();
  return usePortalService<Option[]>(
    user?.AuthenticationCode
      ? {
          url: '/GetSystemAttribute',
          params: {
            _authcode: user.AuthenticationCode,
          },
        }
      : undefined
  );
}
