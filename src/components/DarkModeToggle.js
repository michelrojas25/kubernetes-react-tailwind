import React from 'react';
import { Moon, Sun } from 'lucide-react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 
                 transition-all duration-300 hover:scale-110"
      title={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {darkMode ? (
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
}

export default DarkModeToggle;
