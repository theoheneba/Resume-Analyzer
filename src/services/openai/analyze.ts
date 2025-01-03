import { getOpenAIClient } from './config';
import { APIError } from '../../utils/error';
import type { ResumeAnalysis } from '../../types/resume';

const ANALYSIS_PROMPT = `Analyze this resume and provide:
1. Key skills and technologies
2. Formatting assessment
3. Specific improvement suggestions
4. Overall score (0-100)
Format the response as JSON.`;

export async function analyzeResume(content: string): Promise<ResumeAnalysis> {
  try {
    const openai = getOpenAIClient();
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: ANALYSIS_PROMPT },
        { role: "user", content }
      ],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(response.choices[0]?.message?.content || '{}');
    
    return {
      keywords: result.skills || [],
      formatting: {
        structure: result.formatting?.structure || '',
        readability: result.formatting?.readability || '',
        consistency: result.formatting?.consistency || ''
      },
      suggestions: result.suggestions || [],
      score: result.score || 0
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new APIError(error.message);
    }
    throw new APIError('Failed to analyze resume');
  }
}