import usePortalService from '../../hooks/services/usePortalService';
import useUser from '../../hooks/useUser';
import { Package } from '../../types/packages';

function usePackages() {
  const user = useUser();
  return usePortalService<Package[]>(
    user?.UserID && user.AuthenticationCode
      ? {
          url: '/GetPkgsByID',
          params: {
            _authcode: user.AuthenticationCode,
            _id: user.UserID,
          },
        }
      : undefined
  );
}
export default usePackages;
