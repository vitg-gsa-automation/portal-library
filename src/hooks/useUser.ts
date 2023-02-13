import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import useSWR from 'swr';

import { User } from '../types/users';
import { authService } from '../services/authService';

type SessionActiveResult = '200: Success' | '404: Not Active';

export default function useUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();

  const fetcher = async function (url: string, config: AxiosRequestConfig) {
    const response = await authService.get(url, config);
    return response.data;
  };

  const { data: sessionActiveResult } = useSWR<SessionActiveResult>(
    user && [
      '/GetSessionActiveResult',
      {
        params: {
          _authcode: user.AuthenticationCode,
        },
      },
    ],
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
    }
  );

  useEffect(() => {
    try {
      const userStorageVal = localStorage.getItem('user');
      if (!userStorageVal) throw new Error('No user storage value');
      const parsedUser: User = JSON.parse(userStorageVal);
      if (!parsedUser.AuthenticationCode) throw new Error('No auth code');
      setUser(parsedUser);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!sessionActiveResult) return;
    if (sessionActiveResult === '404: Not Active') navigate('/login');
  }, [sessionActiveResult, navigate]);

  return user;
}

// export default function useUser({
//   redirectTo = '',
//   redirectIfFound = false,
// } = {}) {
//   const navigate = useNavigate();
//   const fetcher = async function (url: string) {
//     const response = await authService.get(url);
//     return response.data;
//   };
//   const { data: user, mutate: mutateUser } = useSWR<User>(
//     '/api/login',
//     fetcher,
//     {
//       revalidateIfStale: true,
//       revalidateOnFocus: false,
//       revalidateOnReconnect: true,
//     }
//   );
//   useEffect(() => {
//     // if no redirect needed, just return (example: already on /dashboard)
//     // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
//     if (!redirectTo || !user) return;
//     if (
//       // If redirectTo is set, redirect if the user was not found.
//       (redirectTo && !redirectIfFound && !user?.RegUserId) ||
//       // If redirectIfFound is also set, redirect if the user was found
//       (redirectIfFound && user?.RegUserId)
//     ) {
//       navigate(redirectTo);
//     }
//   }, [user, redirectIfFound, redirectTo, navigate]);

//   return { user, mutateUser };
// }
