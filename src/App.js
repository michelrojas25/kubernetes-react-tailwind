import React from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import ArchitectureDiagram from './components/diagram/ArchitectureDiagram';
import SecuritySection from './components/SecuritySection';
import OracleDatabaseSection from './components/OracleDatabaseSection';
import NetworkSection from './components/NetworkSection';
import ConnectivityFlow from './components/ConnectivityFlow';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white animate-fade-in">
          Kubernetes Enterprise Architecture
        </h1>
        
        {/* Diagrama de Arquitectura */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-8 animate-fade-in">
          <ArchitectureDiagram />
        </div>

        {/* Secciones principales */}
        <div className="space-y-16">
          {/* Security Section */}
          <section id="security" className="scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
              Security & Authentication
            </h2>
            <div className="animate-slide-in" style={{ animationDelay: '100ms' }}>
              <SecuritySection />
            </div>
          </section>

          {/* Database Section */}
          <section id="database" className="scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
              Oracle Database
            </h2>
            <div className="animate-slide-in" style={{ animationDelay: '200ms' }}>
              <OracleDatabaseSection />
            </div>
          </section>

          {/* Network Section */}
          <section id="network" className="scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
              Network Connectivity
            </h2>
            <div className="animate-slide-in" style={{ animationDelay: '300ms' }}>
              <NetworkSection />
            </div>
          </section>

          {/* Architecture Flow */}
          <section id="architecture" className="scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
              Architecture Flow
            </h2>
            <div className="animate-bounce-in" style={{ animationDelay: '400ms' }}>
              <ConnectivityFlow />
            </div>
          </section>
        </div>
      </main>

      {/* Footer podría ir aquí si lo necesitas */}
    </div>
  );
}

export default App;
