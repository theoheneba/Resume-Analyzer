import React from 'react';
import { FileText } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <FileText className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">AI Resume Analyzer</h1>
            <p className="text-sm text-blue-100">Powered by OpenAI</p>
          </div>
        </div>
      </div>
    </header>
  );
}