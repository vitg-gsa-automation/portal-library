import { getErrorMessage } from 'lib/helpers';
import { useEffect, useState } from 'react';
import useUser from './useUser';

interface UseFetchArgs {
  url: string;
  params?: any;
}
function useFetch<T = any>(args?: UseFetchArgs) {
  const user = useUser();
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!args) return;
    const start = async function () {
      setLoading(true);
      const { url, params } = args;
      try {
        if (!user?.AuthenticationCode) throw new Error('No authcode');
        const searchParams = new URLSearchParams(params);
        searchParams.append('_authcode', user.AuthenticationCode);
        const response = await fetch(`${url}?${searchParams.toString()}`);
        const data = (await response.json()) as T;
        setData(data);
      } catch (error) {
        const message = getErrorMessage(error);
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    start();
  }, [user, args]);

  return { data, loading, error };
}
export default useFetch;
