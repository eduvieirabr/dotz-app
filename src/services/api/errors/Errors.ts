export class RequestError extends Error {
  public message: string;
  public statusCode: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'RequestError';
    this.message = message;
    this.statusCode = status;
  }
}

export class ApiError extends RequestError {
  constructor(message: string, status: number) {
    super(message, status);
    this.name = 'ApiError';
  }
}
