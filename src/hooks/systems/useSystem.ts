import usePortalService from 'hooks/services/usePortalService';
import useUser from 'hooks/useUser';
import { System } from 'types/systems';

interface UseSystemParams {
  _orgid: string;
  _systemid: number;
}

function useSystem(params?: UseSystemParams) {
  const user = useUser();
  return usePortalService<[System]>(
    params && user?.AuthenticationCode
      ? {
          url: '/GetSystemDetails',
          params: {
            _authcode: user.AuthenticationCode,
            _orgid: params._orgid,
            _systemid: params._systemid,
          },
        }
      : undefined
  );
}

export default useSystem;
