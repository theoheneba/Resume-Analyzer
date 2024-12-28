import React from 'react';
import { FileText, Download, RefreshCw } from 'lucide-react';
import { PaymentModal } from '../components/payment/PaymentModal';
import { useAuth } from '../hooks/useAuth';
import { useResumeHistory } from '../hooks/useResumeHistory';

export default function UserDashboard() {
  const { user } = useAuth();
  const { resumes, loading } = useResumeHistory();
  const [showPayment, setShowPayment] = React.useState(false);

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="space-y-6">
            {resumes?.map((resume) => (
              <div
                key={resume.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{resume.fileName}</h3>
                    <p className="text-sm text-gray-500">
                      Score: {resume.analysis.score}/100
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowPayment(true)}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Regenerate</span>
                  </button>
                  
                  <button
                    className="p-2 text-gray-400 hover:text-blue-600"
                    title="Download Resume"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" />
              </div>
            )}
          </div>
        </div>
      </div>

      {showPayment && (
        <PaymentModal
          email={user.email}
          onClose={() => setShowPayment(false)}
          onSuccess={() => {
            // Handle successful payment
            setShowPayment(false);
          }}
        />
      )}
    </div>
  );
}