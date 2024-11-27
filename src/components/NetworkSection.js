import React from 'react';
import { Network, Link2 } from 'lucide-react';

function NetworkSection() {
  return (
    <div className="bg-blue-100 p-6 rounded-xl shadow-custom hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Network className="mr-3 text-blue-600" size={32} />
        <h2 className="text-2xl font-bold text-blue-800">
          Network Connectivity
        </h2>
      </div>
      
      <div className="space-y-4">
        <div className="bg-blue-200 p-4 rounded-lg hover:bg-blue-300 transition-colors duration-300">
          <div className="flex items-center mb-2">
            <Link2 className="mr-2 text-blue-600" size={24} />
            <h3 className="font-semibold text-blue-900">
              Secure Connections
            </h3>
          </div>
          <ul className="text-blue-700 text-sm space-y-1 pl-6 list-disc">
            <li>mTLS Encryption</li>
            <li>VPN Tunneling</li>
            <li>Network Segmentation</li>
          </ul>
        </div>
        
        <div className="bg-blue-200 p-4 rounded-lg hover:bg-blue-300 transition-colors duration-300">
          <h3 className="font-semibold text-blue-900 mb-2">
            Connection Protocols
          </h3>
          <ul className="text-blue-700 text-sm space-y-1 pl-6 list-disc">
            <li>HTTPS/TLS 1.3</li>
            <li>IPSec</li>
            <li>Mutual Authentication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NetworkSection;
