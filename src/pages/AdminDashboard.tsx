import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Download } from 'lucide-react';
import { format } from 'date-fns';

const mockData = {
  usageStats: [
    { date: '2024-02-01', uploads: 45 },
    { date: '2024-02-02', uploads: 52 },
    { date: '2024-02-03', uploads: 38 },
    { date: '2024-02-04', uploads: 65 },
    { date: '2024-02-05', uploads: 48 },
  ],
  totalUsers: 256,
  totalUploads: 1234,
  averageScore: 82,
};

export default function AdminDashboard() {
  const exportData = () => {
    const csvContent = `Date,Uploads\n${mockData.usageStats
      .map((row) => `${row.date},${row.uploads}`)
      .join('\n')}`;
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resume-analyzer-stats-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Total Users', value: mockData.totalUsers },
            { label: 'Total Uploads', value: mockData.totalUploads },
            { label: 'Average Score', value: `${mockData.averageScore}%` },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Usage Statistics</h2>
          <button
            onClick={exportData}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export Data</span>
          </button>
        </div>
        
        <div className="w-full overflow-x-auto">
          <BarChart width={800} height={400} data={mockData.usageStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uploads" fill="#3B82F6" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}