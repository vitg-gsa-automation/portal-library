import usePortalService from 'hooks/services/usePortalService';
import useUser from 'hooks/useUser';
import { AcceptableFileType } from 'lib/types/documents';

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
