export class APIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'APIError';
  }
}

export function handleAPIError(error: unknown): Error {
  if (error instanceof Error) {
    if (error.message.includes('API key')) {
      return new APIError('Invalid or missing API key. Please check your OpenAI API key configuration.');
    }
    return error;
  }
  return new Error('An unexpected error occurred');
}