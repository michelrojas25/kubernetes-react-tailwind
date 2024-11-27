import React from 'react';
import BaseNode from './BaseNode';
import { Network, Globe, Share2 } from 'lucide-react';

const NetworkNode = ({ data }) => {
  const networkData = {
    ...data,
    icon: Network,
    details: [
      'Service Mesh (Istio/Linkerd)',
      'Ingress Controllers',
      'Load Balancing',
      'Network Policies',
      'Service Discovery'
    ]
  };

  return <BaseNode data={networkData} type="network" />;
};

export default NetworkNode;
