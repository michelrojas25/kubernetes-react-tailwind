import React from 'react';
import BaseNode from './BaseNode';
import { Monitor, Search, FileCode } from 'lucide-react';

const MonitoringNode = ({ data }) => {
  const monitoringData = {
    ...data,
    icon: Monitor,
    details: [
      'Prometheus Metrics',
      'Grafana Dashboards',
      'ELK Stack Logging',
      'Alerting Rules',
      'Performance Analytics'
    ]
  };

  return <BaseNode data={monitoringData} type="monitoring" />;
};

export default MonitoringNode;
