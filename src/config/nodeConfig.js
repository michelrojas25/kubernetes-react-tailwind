export const NODE_TYPES = {
  SECURITY: 'security',
  DATABASE: 'database',
  NETWORK: 'network',
  MONITORING: 'monitoring',
  CICD: 'cicd',
  KUBERNETES: 'kubernetes'
};

export const NODE_COLORS = {
  security: {
    primary: 'text-red-500',
    secondary: 'text-red-400',
    border: 'border-red-200'
  },
  database: {
    primary: 'text-yellow-500',
    secondary: 'text-yellow-400',
    border: 'border-yellow-200'
  },
  network: {
    primary: 'text-green-500',
    secondary: 'text-green-400',
    border: 'border-green-200'
  },
  monitoring: {
    primary: 'text-purple-500',
    secondary: 'text-purple-400',
    border: 'border-purple-200'
  },
  cicd: {
    primary: 'text-indigo-500',
    secondary: 'text-indigo-400',
    border: 'border-indigo-200'
  },
  kubernetes: {
    primary: 'text-blue-500',
    secondary: 'text-blue-400',
    border: 'border-blue-200'
  }
};
