import usePortalService from '../services/usePortalService';
import useUser from '../useUser';
import { AcceptableFileType } from '../../types';

function useFileTypes() {
  const user = useUser();
  return usePortalService<AcceptableFileType[]>(
    user?.AuthenticationCode
      ? {
          url: '/GetUploadFileType',
          params: {
            _authcode: user.AuthenticationCode,
          },
        }
      : undefined
  );
}
export default useFileTypes;
