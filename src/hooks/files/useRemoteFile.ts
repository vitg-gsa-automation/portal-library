import { useEffect, useState } from 'react';
import useUser from '../useUser';
import { downloadFile } from '../../api/documents';
import { CustomFile } from '../../types/files';

function useRemoteFile(fileName?: string, fileIdentifier?: string) {
  const user = useUser();
  const [file, setFile] = useState<CustomFile>();
  useEffect(() => {
    const download = async function () {
      if (!user?.AuthenticationCode) return;
      if (!fileIdentifier) return;
      if (!fileName) return;
      const blob = await downloadFile({
        AuthCode: user.AuthenticationCode,
        FileIdentifier: fileIdentifier,
      });
      const file = new File([blob], fileName);
      setFile(file);
    };
    download();
  }, [fileIdentifier, user, fileName]);
  return file;
}

export default useRemoteFile;
