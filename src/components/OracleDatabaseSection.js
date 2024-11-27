import React from 'react';
import { Database } from 'lucide-react';

function OracleDatabaseSection() {
  return (
    <div className="bg-orange-100 p-6 rounded-xl shadow-custom hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Database className="mr-3 text-orange-600" size={32} />
        <h2 className="text-2xl font-bold text-orange-800">
          Oracle Database
        </h2>
      </div>
      
      <div className="space-y-4">
        <div className="bg-orange-200 p-4 rounded-lg hover:bg-orange-300 transition-colors duration-300">
          <h3 className="font-semibold text-orange-900 mb-2">
            Enterprise Database
          </h3>
          <ul className="text-orange-700 text-sm space-y-1 pl-6 list-disc">
            <li>Oracle 19c / 21c</li>
            <li>Multitenant Architecture</li>
            <li>RAC Cluster Support</li>
          </ul>
        </div>
        
        <div className="bg-orange-200 p-4 rounded-lg hover:bg-orange-300 transition-colors duration-300">
          <h3 className="font-semibold text-orange-900 mb-2">
            Security Features
          </h3>
          <ul className="text-orange-700 text-sm space-y-1 pl-6 list-disc">
            <li>TDE (Transparent Data Encryption)</li>
            <li>Advanced Security Option</li>
            <li>Data Masking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OracleDatabaseSection;
