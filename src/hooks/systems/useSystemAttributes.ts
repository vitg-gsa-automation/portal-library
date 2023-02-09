import usePortalService from 'hooks/services/usePortalService';
import useUser from 'hooks/useUser';
import { Option } from 'lib/types';

function useSystemAttributes() {
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
export default useSystemAttributes;
