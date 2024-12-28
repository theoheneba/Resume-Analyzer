import React from 'react';
import { format } from 'date-fns';
import { FileText, Download, RefreshCw } from 'lucide-react';

const mockHistory = [
  {
    id: '1',
    fileName: 'resume-2024.pdf',
    uploadDate: new Date('2024-02-05'),
    score: 85,
  },
  {
    id: '2',
    fileName: 'resume-tech.pdf',
    uploadDate: new Date('2024-02-03'),
    score: 78,
  },
];

export default function HistoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Resume History</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="space-y-6">
            {mockHistory.map((resume) => (
              <div
                key={resume.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{resume.fileName}</h3>
                    <p className="text-sm text-gray-500">
                      Uploaded on {format(resume.uploadDate, 'MMM d, yyyy')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                    Score: {resume.score}
                  </span>
                  
                  <button
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    title="Download Resume"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                  
                  <button
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    title="Regenerate Resume"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}