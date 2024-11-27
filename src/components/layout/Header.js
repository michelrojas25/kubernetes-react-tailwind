import React from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from '../DarkModeToggle';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { title: 'Security', href: '#security' },
    { title: 'Database', href: '#database' },
    { title: 'Network', href: '#network' },
    { title: 'Kubernetes', href: '#kubernetes' },
    { title: 'Architecture', href: '#architecture' }
  ];

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/kubernetes-icon.svg" alt="K8s" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              K8s Architecture
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 
                         dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.title}
              </a>
            ))}
            <DarkModeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 
                     dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-blue-600 
                         dark:text-gray-300 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
