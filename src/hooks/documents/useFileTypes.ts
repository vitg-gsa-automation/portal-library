import { usePortalService } from 'hooks/services/usePortalService';
import { useUser } from 'hooks/useUser';
import { AcceptableFileType } from 'types/files';

export function useFileTypes() {
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
