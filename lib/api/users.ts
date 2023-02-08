import authService from '../../services/authService';
import { User } from 'lib/types/users';

export interface Credentials {
  email: string;
  password: string;
}

export async function login(credentials: Credentials) {
  try {
    const user = await authService.get<[User]>(`/api/UserAuthentication`, {
      params: {
        loginid: credentials.email,
        passcode: credentials.password,
        logintype: 2,
      },
    });
    return user.data;
  } catch (error) {
    throw error;
  }
}
