import React from 'react';
import { Server, Network, Database, Lock } from 'lucide-react';

function ConnectivityFlow() {
  const flowItems = [
    { Icon: Lock, color: 'red', label: 'Secure Token', delay: '0' },
    { Icon: Network, color: 'blue', label: 'Network Layer', delay: '150' },
    { Icon: Database, color: 'orange', label: 'Oracle DB', delay: '300' },
    { Icon: Server, color: 'green', label: 'K8s Cluster', delay: '450' }
  ];

  return (
    <div className="mt-8 bg-purple-100 p-8 rounded-xl shadow-custom hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-800">
        Architectural Connectivity Flow
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-8">
        {flowItems.map(({ Icon, color, label, delay }, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center animate-fade-in"
            style={{ animationDelay: `${delay}ms` }}
          >
            <div className={`bg-${color}-200 p-4 rounded-full mb-2 hover:bg-${color}-300 transition-colors duration-300`}>
              <Icon className={`text-${color}-600`} size={40} />
            </div>
            <p className="text-sm text-purple-700">{label}</p>
          </div>
        ))}
      </div>
      
      <p className="text-center mt-6 text-purple-600">
        Secure connections using JWT tokens, mTLS, and advanced encryption protocols
      </p>
    </div>
  );
}

export default ConnectivityFlow;
