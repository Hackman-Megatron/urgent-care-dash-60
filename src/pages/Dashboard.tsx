import React from 'react';
import { DashboardLayout } from '@/components/ui/DashboardLayout';

export const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page title */}
        <div>
          <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
        </div>

        {/* Main content placeholder */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center text-gray-500 italic">
            <div className="mb-4">
              <svg 
                className="mx-auto h-16 w-16 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1} 
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.678-2.153-1.415-3.414l5-5A2 2 0 009 9.172V5L8 4z" 
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Dashboard Module</h3>
            <p>Module under development...</p>
            <p className="text-sm mt-2">Analytics, statistics, and emergency overview will be displayed here.</p>
          </div>
        </div>

        {/* Quick stats cards placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Active Patients', value: '—', color: 'bg-blue-50 text-blue-600' },
            { title: 'Pending Consultations', value: '—', color: 'bg-yellow-50 text-yellow-600' },
            { title: 'Emergency Cases', value: '—', color: 'bg-red-50 text-red-600' },
            { title: 'Available Staff', value: '—', color: 'bg-green-50 text-green-600' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${stat.color} mb-3`}>
                {stat.title}
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-sm text-gray-500 mt-1">Coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};