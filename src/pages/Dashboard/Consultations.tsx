import React from 'react';
import { DashboardLayout } from '@/components/ui/DashboardLayout';

export const Consultations: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-xl font-semibold mb-4">Consultations</h1>
          <p className="text-gray-600">Medical Consultations & Communications</p>
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Consultations Module</h3>
            <p>Module under development...</p>
            <p className="text-sm mt-2">Doctor consultations, patient communications, and medical discussions will be managed here.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};