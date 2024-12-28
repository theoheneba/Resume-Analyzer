import React from 'react';
import { FileText, Sparkles, CheckCircle } from 'lucide-react';

export function Welcome() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-4xl font-bold text-gray-900">
        Enhance Your Resume with AI
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Upload your resume to get AI-powered insights and make it stand out to employers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
        {[
          {
            icon: <Sparkles className="w-6 h-6 text-blue-500" />,
            title: 'Smart Analysis',
            description: 'AI-powered feedback on content and structure'
          },
          {
            icon: <CheckCircle className="w-6 h-6 text-green-500" />,
            title: 'Instant Results',
            description: 'Get detailed insights in seconds'
          },
          {
            icon: <FileText className="w-6 h-6 text-purple-500" />,
            title: 'ATS Friendly',
            description: 'Optimize for applicant tracking systems'
          }
        ].map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center space-y-3">
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}