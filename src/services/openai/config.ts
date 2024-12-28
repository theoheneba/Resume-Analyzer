import OpenAI from 'openai';
import { config } from '../../config/env';
import type { OpenAIConfig } from './types';

export const openAIConfig: OpenAIConfig = {
  apiKey: config.openai.apiKey,
  isDemoMode: !config.openai.apiKey
};

let client: OpenAI | null = null;

export function getOpenAIClient(): OpenAI | null {
  if (client) return client;
  
  if (!openAIConfig.apiKey) {
    return null;
  }

  try {
    client = new OpenAI({
      apiKey: openAIConfig.apiKey,
      dangerouslyAllowBrowser: true
    });
    return client;
  } catch (error) {
    console.warn('Failed to initialize OpenAI client:', error);
    return null;
  }
}