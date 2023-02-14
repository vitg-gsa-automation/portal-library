import { usePortalService } from '../services/usePortalService';
import { useUser } from '../useUser';
import { Option } from '../../types';

export function useDocTypes() {
  const user = useUser();
  return usePortalService<Option[]>(
    user?.AuthenticationCode
      ? {
          url: '/GetDocObjectType',
          params: {
            _authcode: user.AuthenticationCode,
          },
        }
      : undefined
  );
}
