import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
  type?: 'error' | 'warning' | 'info';
  className?: string;
}

export function ErrorDisplay({ message, type = 'error', className = '' }: ErrorDisplayProps) {
  const styles = {
    error: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200',
      icon: <AlertTriangle className="w-5 h-5 flex-shrink-0" />
    },
    warning: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-700',
      border: 'border-yellow-200',
      icon: <Info className="w-5 h-5 flex-shrink-0" />
    },
    info: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      icon: <Info className="w-5 h-5 flex-shrink-0" />
    }
  }[type];

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className={`flex items-center space-x-3 ${styles.bg} ${styles.text} p-4 rounded-lg border ${styles.border}`}>
        {styles.icon}
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}