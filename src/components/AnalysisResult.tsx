import React from 'react';
import { CheckCircle, AlertCircle, BarChart2 } from 'lucide-react';
import type { ResumeAnalysis } from '../types/resume';

interface AnalysisResultProps {
  analysis: ResumeAnalysis;
}

export function AnalysisResult({ analysis }: AnalysisResultProps) {
  return (
    <div className="w-full max-w-4xl space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Resume Analysis</h2>
        <div className="flex items-center space-x-2">
          <BarChart2 className="w-6 h-6 text-blue-500" />
          <span className="text-xl font-semibold">
            Score: {analysis.score}/100
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Key Findings
          </h3>
          <div className="space-y-2">
            {analysis.suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start space-x-2">
                {suggestion.includes('improve') || suggestion.includes('missing') ? (
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                )}
                <p className="text-gray-600">{suggestion}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Formatting Analysis
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700">Structure</h4>
              <p className="text-gray-600">{analysis.formatting.structure}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Readability</h4>
              <p className="text-gray-600">{analysis.formatting.readability}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Consistency</h4>
              <p className="text-gray-600">{analysis.formatting.consistency}</p>
            </div>
          </div>
        </section>
      </div>

      <section className="pt-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">
          Keywords Found
        </h3>
        <div className="flex flex-wrap gap-2">
          {analysis.keywords.map((keyword, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {keyword}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}