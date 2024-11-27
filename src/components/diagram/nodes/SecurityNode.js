import React from 'react';
import BaseNode from './BaseNode';
import { Shield, Lock, Key, Users } from 'lucide-react';

const SecurityNode = ({ data }) => {
  const securityData = {
    ...data,
    icon: Shield,
    details: [
      'Web Application Firewall (WAF)',
      'OAuth2/OIDC Authentication',
      'Role-Based Access Control (RBAC)',
      'Service Mesh Security',
      'Network Policies'
    ]
  };

  return <BaseNode data={securityData} type="security" />;
};

export default SecurityNode;
