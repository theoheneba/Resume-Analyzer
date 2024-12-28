import React from 'react';
import { FileUpload } from '../components/FileUpload';
import { AnalysisResult } from '../components/AnalysisResult';
import { Welcome } from '../components/Welcome';
import { ErrorDisplay } from '../components/ErrorDisplay';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { analyzeResumeContent } from '../services/resume/analyze';
import { openAIConfig } from '../services/openai/config';
import type { ResumeAnalysis } from '../types/resume';

export default function Dashboard() {
  const [analysis, setAnalysis] = React.useState<ResumeAnalysis | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleFileSelect = async (file: File) => {
    setLoading(true);
    setError(null);
    
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const text = e.target?.result as string;
          const result = await analyzeResumeContent(text);
          setAnalysis(result);
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Failed to analyze resume';
          setError(errorMessage);
          console.error('Error analyzing resume:', err);
        }
      };
      reader.readAsText(file);
    } catch (err) {
      setError('Failed to read the file. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {openAIConfig.isDemoMode && (
            <ErrorDisplay
              type="info"
              message="Running in demo mode. Add your OpenAI API key to enable full functionality."
              className="mb-8"
            />
          )}

          {!analysis && !loading && !error && <Welcome />}
          {error && <ErrorDisplay message={error} />}
          
          {!analysis && !loading && (
            <div className="flex justify-center">
              <FileUpload onFileSelect={handleFileSelect} />
            </div>
          )}

          {loading && <LoadingSpinner />}

          {analysis && (
            <div className="flex flex-col items-center space-y-6">
              <AnalysisResult analysis={analysis} />
              <button
                onClick={() => {
                  setAnalysis(null);
                  setError(null);
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Analyze Another Resume
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}