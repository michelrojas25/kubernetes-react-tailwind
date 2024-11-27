import React from 'react';
import { 
  Server, 
  Cloud, 
  Network, 
  Database, 
  Lock, 
  ShieldCheck, 
  Key, 
  Link2 
} from 'lucide-react';

function App() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Secure Kubernetes Enterprise Architecture
      </h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Sección de Seguridad */}
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

        {/* Sección de Base de Datos Oracle */}
        <div className="bg-orange-100 p-6 rounded-xl shadow-custom">
          <div className="flex items-center mb-4">
            <Database className="mr-3 text-orange-600" size={32} />
            <h2 className="text-2xl font-bold text-orange-800">
              Oracle Database
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-orange-200 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">
                Enterprise Database
              </h3>
              <ul className="text-orange-700 text-sm space-y-1 pl-6 list-disc">
                <li>Oracle 19c / 21c</li>
                <li>Multitenant Architecture</li>
                <li>RAC Cluster Support</li>
              </ul>
            </div>
            
            <div className="bg-orange-200 p-4 rounded-lg">
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

        {/* Sección de Networking */}
        <div className="bg-blue-100 p-6 rounded-xl shadow-custom">
          <div className="flex items-center mb-4">
            <Network className="mr-3 text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-blue-800">
              Network Connectivity
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-200 p-4 rounded-lg">
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
            
            <div className="bg-blue-200 p-4 rounded-lg">
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
      </div>

      {/* Flujo de Conectividad */}
      <div className="mt-8 bg-purple-100 p-8 rounded-xl shadow-custom">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-800">
          Architectural Connectivity Flow
        </h2>
        
        <div className="flex justify-center items-center space-x-8">
          {/* Iconos de flujo */}
          {[
            { Icon: Lock, color: 'red', label: 'Secure Token' },
            { Icon: Network, color: 'blue', label: 'Network Layer' },
            { Icon: Database, color: 'orange', label: 'Oracle DB' },
            { Icon: Server, color: 'green', label: 'K8s Cluster' }
          ].map(({ Icon, color, label }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`bg-${color}-200 p-4 rounded-full mb-2`}>
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
    </div>
  );
}

export default App;