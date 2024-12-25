import type { ResumeAnalysis } from '../../types/resume';

export function parseAnalysisResponse(content: string): ResumeAnalysis {
  // In production, implement actual parsing logic here
  // For demo purposes, returning mock data
  return {
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
}