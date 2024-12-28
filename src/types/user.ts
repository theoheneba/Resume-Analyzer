export interface User {
  id: string;
  email: string;
  role: 'user' | 'admin';
}

export interface ResumeHistory {
  id: string;
  userId: string;
  fileName: string;
  uploadDate: Date;
  analysis: ResumeAnalysis;
}