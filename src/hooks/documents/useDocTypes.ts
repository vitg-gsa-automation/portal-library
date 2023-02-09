import usePortalService from 'hooks/services/usePortalService';
import useUser from 'hooks/useUser';
import { Organization } from 'lib/api/organizations';
import { Option } from 'lib/types';

function useDocTypes() {
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

export default useDocTypes;
