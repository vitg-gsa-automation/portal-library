import { useEffect, useState } from 'react';
import useUser from 'hooks/useUser';
import { downloadFile } from 'lib/api/files';
import { CustomFile } from 'lib/types/files';

function useRemoteFile(fileName?: string, fileIdentifier?: string) {
  const user = useUser();
  const [file, setFile] = useState<CustomFile>();
  useEffect(() => {
    const download = async function () {
      if (!user) return;
      if (!fileIdentifier) return;
      if (!fileName) return;
      const blob = await downloadFile(user, fileIdentifier);
      const file = new File([blob], fileName);
      setFile(file);
    };
    download();
  }, [fileIdentifier, user, fileName]);
  return file;
}

export default useRemoteFile;
