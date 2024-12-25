export const SYSTEM_PROMPT = `You are a professional resume analyzer. Analyze the resume content and provide detailed feedback focusing on:
1. Key skills and keywords
2. Formatting and structure
3. Specific improvement suggestions
4. Overall score based on industry standards`;

export function createAnalysisPrompt(resumeContent: string) {
  return [
    { role: "system" as const, content: SYSTEM_PROMPT },
    { role: "user" as const, content: resumeContent }
  ];
}