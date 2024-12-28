import { openai } from '../openai/config';

const GENERATION_PROMPT = `Create a professional resume based on the following content.
Follow these guidelines:
1. Use clear, concise language
2. Include quantifiable achievements
3. Highlight key skills and technologies
4. Follow ATS-friendly formatting`;

export async function generateResume(content: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: GENERATION_PROMPT },
        { role: "user", content }
      ]
    });

    return response.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Resume generation error:', error);
    throw new Error('Failed to generate resume. Please try again.');
  }
}