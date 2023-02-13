import { useEffect } from 'react';
import { useUser } from 'hooks/useUser';

export function useDocuments(docId?: number) {
  const user = useUser();
  useEffect(() => {
    const start = async function () {
      if (docId) {
      }
    };
    start();
  }, [docId]);
}
