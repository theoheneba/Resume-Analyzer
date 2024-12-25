export interface ResumeAnalysis {
  keywords: string[];
  formatting: FormattingFeedback;
  suggestions: string[];
  score: number;
}

export interface FormattingFeedback {
  structure: string;
  readability: string;
  consistency: string;
}