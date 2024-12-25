import React from 'react';
import { Loader } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <Loader className="w-12 h-12 text-blue-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full" />
        </div>
      </div>
      <p className="text-lg text-gray-600">Analyzing your resume...</p>
    </div>
  );
}