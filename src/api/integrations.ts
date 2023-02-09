import { User } from '../types/users';
import { integrationService } from '../services/integrationService';

export async function checkSchema(user: User, file: File) {
  if (!user?.AuthenticationCode) throw new Error('No authcode provided');
  const response = await integrationService.post(
    '/Check',
    {
      Attachment: file,
    },
    {
      params: {
        AuthCode: user.AuthenticationCode,
      },
    }
  );
  return response.data;
}
