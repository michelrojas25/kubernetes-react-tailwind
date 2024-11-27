import React from 'react';
import SecuritySection from './components/SecuritySection';
import OracleDatabaseSection from './components/OracleDatabaseSection';
import NetworkSection from './components/NetworkSection';
import ConnectivityFlow from './components/ConnectivityFlow';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <DarkModeToggle />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white
                       animate-fade-in">
          Secure Kubernetes Enterprise Architecture
        </h1>
        
        {/* Main Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="animate-slide-in" style={{ animationDelay: '100ms' }}>
            <SecuritySection />
          </div>
          <div className="animate-slide-in" style={{ animationDelay: '200ms' }}>
            <OracleDatabaseSection />
          </div>
          <div className="animate-slide-in" style={{ animationDelay: '300ms' }}>
            <NetworkSection />
          </div>
        </div>

        {/* Connectivity Flow Section */}
        <div className="animate-bounce-in" style={{ animationDelay: '400ms' }}>
          <ConnectivityFlow />
        </div>
      </div>
    </div>
  );
}

export default App;
