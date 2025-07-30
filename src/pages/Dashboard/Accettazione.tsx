import React from 'react';
import { DashboardLayout } from '@/components/ui/DashboardLayout';

export const Accettazione: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold mb-4">Accettazione</h1>
          <p className="text-gray-600">Patient Admission & Registration</p>
        </div>

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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Accettazione Module</h3>
            <p>Module under development...</p>
            <p className="text-sm mt-2">Patient admission, registration forms, and triage processing will be handled here.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};