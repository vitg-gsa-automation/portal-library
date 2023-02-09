import usePortalService from 'hooks/services/usePortalService';
import useUser from 'hooks/useUser';
import { Option } from 'types/misc';

function useSystemTypes() {
  const user = useUser();
  return usePortalService<Option[]>(
    user?.AuthenticationCode
      ? {
          url: '/GetSystemType',
          params: {
            _authcode: user.AuthenticationCode,
          },
        }
      : undefined
  );
}
export default useSystemTypes;
