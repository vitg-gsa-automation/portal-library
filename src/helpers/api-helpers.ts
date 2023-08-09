export function validateResponse<T>(data: any, keys: (keyof T)[]): T {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Invalid response format');
  }

  for (const key of keys) {
    if (!(key in data)) {
      throw new Error(`Missing property ${String(key)}`);
    }
  }

  return data as T;
}
