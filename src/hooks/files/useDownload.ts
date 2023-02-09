import { getErrorMessage } from 'helpers';
import { useState } from 'react';
import useUser from 'hooks/useUser';
import { downloadFile } from 'api/documents';

interface DownloadParams {
  fileIdentifier: string;
  outputFileName: string;
}

function useDownload() {
  const user = useUser();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const download = async function ({
    fileIdentifier,
    outputFileName,
  }: DownloadParams) {
    try {
      if (!user?.AuthenticationCode) throw new Error('No authcode');
      setLoading(true);
      const blob = await downloadFile({
        AuthCode: user.AuthenticationCode,
        FileIdentifier: fileIdentifier,
      });
      // create file link in browser's memory
      const href = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', outputFileName); //or any other extension
      document.body.appendChild(link);
      link.click();
      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    } catch (error) {
      const message = getErrorMessage(error);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const downloadAll = async function (params: DownloadParams[]) {
    try {
      setLoading(true);
    } catch (error) {}
  };

  return {
    loading,
    error,
    download,
  };
}
export default useDownload;
