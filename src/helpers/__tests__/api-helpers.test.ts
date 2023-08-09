import { validateResponse } from '../api-helpers'; // Adjust the import path

type ExpectedResponseType = {
  file_name: string;
  file_uploaded: boolean;
  message: string;
  http_status: number;
};

describe('validateResponse', () => {
  // Test case for successful validation
  it('should validate and return the object if it contains the expected keys', () => {
    const data: ExpectedResponseType = {
      file_name: 'example.txt',
      file_uploaded: true,
      message: 'File uploaded successfully',
      http_status: 200,
    };

    const expectedKeys: (keyof ExpectedResponseType)[] = [
      'file_name',
      'file_uploaded',
      'message',
      'http_status',
    ];

    const result = validateResponse<ExpectedResponseType>(data, expectedKeys);

    expect(result).toEqual(data);
  });

  // Test case for unsuccessful validation (missing key)
  it('should throw an error if the object is missing one of the expected keys', () => {
    const data: Partial<ExpectedResponseType> = {
      file_name: 'example.txt',
      file_uploaded: true,
      http_status: 200,
    };

    const expectedKeys: (keyof ExpectedResponseType)[] = [
      'file_name',
      'file_uploaded',
      'message', // This key is missing from the data
      'http_status',
    ];

    expect(() =>
      validateResponse<ExpectedResponseType>(data as any, expectedKeys)
    ).toThrowError('Missing property message');
  });
});
