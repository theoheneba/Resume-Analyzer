import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BarChart2, History } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your Resume with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Get instant feedback, professional analysis, and ATS-optimized formatting
            to make your resume stand out.
          </p>
          
          <div className="flex justify-center space-x-4 mb-16">
            <Link
              to="/dashboard"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Analyze Resume
            </Link>
            <Link
              to="/history"
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View History
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Smart Analysis",
                description: "Get detailed feedback on your resume's content and structure"
              },
              {
                icon: <BarChart2 className="w-8 h-8" />,
                title: "ATS Optimization",
                description: "Ensure your resume passes applicant tracking systems"
              },
              {
                icon: <History className="w-8 h-8" />,
                title: "Track Progress",
                description: "Monitor improvements and keep all versions in one place"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}