import { useState } from 'react';
import { analyzeResumeContent, generateResume } from '../services/resume';
import { isQuotaError } from '../utils/error';
import type { ResumeAnalysis } from '../types/resume';

export function useResumeAnalysis() {
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [generatedResume, setGeneratedResume] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ message: string; type: 'error' | 'warning' } | null>(null);

  const analyzeResume = async (file: File) => {
    setLoading(true);
    setError(null);
    
    try {
      const content = await file.text();
      const result = await analyzeResumeContent(content);
      setAnalysis(result);
      
      if (isQuotaError(error)) {
        setError({
          message: 'Using demo mode with sample data due to API limitations.',
          type: 'warning'
        });
      }
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Failed to analyze resume',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const regenerateResume = async (originalContent: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await generateResume(originalContent);
      setGeneratedResume(result);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Failed to generate resume',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setAnalysis(null);
    setGeneratedResume(null);
    setError(null);
  };

  return {
    analysis,
    generatedResume,
    loading,
    error,
    analyzeResume,
    regenerateResume,
    reset
  };
}