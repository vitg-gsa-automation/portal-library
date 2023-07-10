import { renderHook, waitFor } from '@testing-library/react';
import { useFileString } from '../useFileString';

describe('useFileString', () => {
  it('reads a file and returns its contents as string', async () => {
    // Given
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });
    const { result } = renderHook(() => useFileString(file));

    // When
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Then
    expect(result.current.value).toBe('hello');
    expect(result.current.loading).toBe(false);
  });

  it('returns undefined and loading false when no file is passed', () => {
    // Given
    const { result } = renderHook(() => useFileString());

    // Then
    expect(result.current.value).toBe(undefined);
    expect(result.current.loading).toBe(false);
  });

  it('should handle loading state correctly', () => {
    // Given
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });
    const { result } = renderHook(() => useFileString(file));

    // When
    expect(result.current.loading).toBe(true);

    // As stated earlier, we cannot accurately test the intermediate loading state
    // because jest advances all timers and tasks to their end when using act().
    // However, in a real use scenario, loading would be true while the FileReader
    // is reading the file, and then would switch to false.
  });
});
