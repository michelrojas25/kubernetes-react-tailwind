import React from 'react';
import { ShieldCheck, Key } from 'lucide-react';

function SecuritySection() {
  return (
    <div className="bg-red-100 p-6 rounded-xl shadow-custom">
      <div className="flex items-center mb-4">
        <ShieldCheck className="mr-3 text-red-600" size={32} />
        <h2 className="text-2xl font-bold text-red-800">
          Security & Authentication
        </h2>
      </div>
      
      <div className="space-y-4">
        <div className="bg-red-200 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Key className="mr-2 text-red-600" size={24} />
            <h3 className="font-semibold text-red-900">
              Secure Token Management
            </h3>
          </div>
          <ul className="text-red-700 text-sm space-y-1 pl-6 list-disc">
            <li>JWT Token Encryption</li>
            <li>OAuth 2.0 / OIDC</li>
            <li>AES-256 Encryption</li>
          </ul>
        </div>
        
        <div className="bg-red-200 p-4 rounded-lg">
          <h3 className="font-semibold text-red-900 mb-2">
            Access Control
          </h3>
          <ul className="text-red-700 text-sm space-y-1 pl-6 list-disc">
            <li>Role-Based Access</li>
            <li>Multi-Factor Auth</li>
            <li>Zero Trust Model</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SecuritySection;
