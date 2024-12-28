export interface OpenAIConfig {
  apiKey?: string;
  isDemoMode: boolean;
}

export interface OpenAIError {
  message: string;
  code: string;
}