import useUser from 'hooks/useUser';
import { useEffect } from 'react';

function useDocuments(docId?: number) {
  const user = useUser();
  useEffect(() => {
    const start = async function () {
      if (docId) {
      }
    };
    start();
  }, [docId]);
}
export default useDocuments;
