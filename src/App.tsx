import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { AnalysisResult } from './components/AnalysisResult';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { ErrorDisplay } from './components/ErrorDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { analyzeResume } from './services/openai';
import type { ResumeAnalysis } from './types/resume';

export default function App() {
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = async (file: File) => {
    setLoading(true);
    setError(null);
    
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const text = e.target?.result as string;
          const result = await analyzeResume(text);
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
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-12">
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
                Analyze Another Resume With AI
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="mt-auto py-6 bg-gray-800 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} AI Resume Analyzer. Powered by Celeteck.</p>
        </div>
      </footer>
    </div>
  );
}