import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
}

export function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center space-x-3 bg-red-50 text-red-700 p-4 rounded-lg border border-red-200">
        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}