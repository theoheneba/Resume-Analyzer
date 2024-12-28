import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface UsageChartProps {
  data: Array<{
    date: string;
    uploads: number;
  }>;
}

export function UsageChart({ data }: UsageChartProps) {
  return (
    <div className="w-full overflow-x-auto">
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uploads" fill="#3B82F6" />
      </BarChart>
    </div>
  );
}