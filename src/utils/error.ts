export class APIError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly status?: number
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export function isQuotaError(error: unknown): boolean {
  return (
    error &&
    typeof error === 'object' &&
    'code' in error &&
    error.code === 'insufficient_quota'
  );
}

export function handleAPIError(error: unknown): never {
  console.error('API Error:', error);
  
  if (isQuotaError(error)) {
    throw new APIError(
      'API quota exceeded. Using demo mode with sample data.',
      'insufficient_quota',
      429
    );
  }

  if (error instanceof Error) {
    throw new APIError(error.message);
  }

  throw new APIError('An unexpected error occurred');
}