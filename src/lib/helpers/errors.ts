import { CheckFileSchemaResponse, CheckResult } from '../types/validations';
import { CustomFile, UploadResult } from '../types/files';

export class UploadError extends Error {
  public readonly result: UploadResult;
  constructor(message: string, file: CustomFile) {
    super(message);
    this.result = {
      file,
      status: 'error',
      uploaded: false,
    };
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, UploadError.prototype);
  }
}

export class CheckError extends Error {
  public readonly result: CheckResult;
  constructor(
    file: CustomFile,
    message: string,
    response?: CheckFileSchemaResponse
  ) {
    super(message);
    this.result = {
      file,
      status: 'error',
      passed: false,
      response,
    };
  }
}

export class PromiseSettledResultsError<T = any> extends Error {
  constructor(message: string, public results: PromiseSettledResult<T>[]) {
    super(message);
  }
}

export class CheckResultsError extends PromiseSettledResultsError<CheckResult> {
  public readonly name;
  constructor(message: string, results: PromiseSettledResult<CheckResult>[]) {
    super(message, results);
    this.name = 'CheckResultsError';
  }
}

export class UploadResultsError extends PromiseSettledResultsError<UploadResult> {
  public readonly name;
  constructor(message: string, results: PromiseSettledResult<UploadResult>[]) {
    super(message, results);
    this.name = 'UploadResultsError';
  }
}
