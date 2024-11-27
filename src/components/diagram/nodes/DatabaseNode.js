import React from 'react';
import BaseNode from './BaseNode';
import { Database, HardDrive, RefreshCw } from 'lucide-react';

const DatabaseNode = ({ data }) => {
  const dbData = {
    ...data,
    icon: Database,
    details: [
      'Oracle Enterprise Database',
      'Data Replication (GoldenGate)',
      'Backup & Recovery (RMAN)',
      'High Availability',
      'Performance Monitoring'
    ]
  };

  return <BaseNode data={dbData} type="database" />;
};

export default DatabaseNode;
