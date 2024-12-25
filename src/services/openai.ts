import OpenAI from 'openai';
import type { ResumeAnalysis } from '../types/resume';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error('OpenAI API key is not configured. Please set VITE_OPENAI_API_KEY in your environment variables.');
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for demo purposes
});

export async function analyzeResume(fileContent: string): Promise<ResumeAnalysis> {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured. Please set VITE_OPENAI_API_KEY in your environment variables.');
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a professional resume analyzer. Analyze the resume content and provide detailed feedback."
        },
        {
          role: "user",
          content: fileContent
        }
      ]
    });

    // Parse the response and extract relevant information
    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No analysis results received from OpenAI');
    }

    // For demo purposes, returning mock data
    // In production, you would parse the actual OpenAI response
    const analysis = {
      keywords: ['React', 'TypeScript', 'Leadership'],
      formatting: {
        structure: 'Well-structured with clear sections',
        readability: 'Good use of bullet points and spacing',
        consistency: 'Consistent formatting throughout'
      },
      suggestions: [
        'Add more quantifiable achievements',
        'Include a professional summary',
        'Strengthen action verbs'
      ],
      score: 85
    };

    return analysis;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        throw new Error('Invalid or missing API key. Please check your OpenAI API key configuration.');
      }
    }
    throw error;
  }
}