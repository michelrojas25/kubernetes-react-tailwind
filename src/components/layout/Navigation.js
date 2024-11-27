import React from 'react';
import { Hash, Database, Shield, Network, Cloud } from 'lucide-react';

function Navigation() {
  const sections = [
    { icon: Shield, title: 'Security', id: 'security' },
    { icon: Database, title: 'Database', id: 'database' },
    { icon: Network, title: 'Network', id: 'network' },
    { icon: Cloud, title: 'Kubernetes', id: 'kubernetes' },
    { icon: Hash, title: 'Architecture', id: 'architecture' }
  ];

  return (
    <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 
                    hidden lg:block z-40">
      <div className="bg-white dark:bg-gray-800 rounded-r-lg shadow-lg p-2">
        {sections.map(({ icon: Icon, title, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex items-center space-x-2 p-3 hover:bg-gray-100 
                     dark:hover:bg-gray-700 rounded-lg group transition-colors 
                     duration-200"
            title={title}
          >
            <Icon size={20} className="text-gray-500 group-hover:text-blue-500" />
            <span className="hidden group-hover:block text-sm text-gray-600 
                         dark:text-gray-300">
              {title}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
