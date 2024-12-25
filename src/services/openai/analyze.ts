import { openai, OPENAI_API_KEY } from './config';
import { createAnalysisPrompt } from './prompts';
import { parseAnalysisResponse } from './parser';
import { APIError, handleAPIError } from '../../utils/error';
import type { ResumeAnalysis } from '../../types/resume';

export async function analyzeResume(fileContent: string): Promise<ResumeAnalysis> {
  if (!OPENAI_API_KEY) {
    throw new APIError('OpenAI API key is not configured. Please set VITE_OPENAI_API_KEY in your environment variables.');
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: createAnalysisPrompt(fileContent)
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new APIError('No analysis results received from OpenAI');
    }

    return parseAnalysisResponse(content);
  } catch (error) {
    throw handleAPIError(error);
  }
}