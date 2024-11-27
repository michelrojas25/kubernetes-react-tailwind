import React from 'react';
import BaseNode from './BaseNode';
import { GitBranch, Settings, Boxes } from 'lucide-react';

const CICDNode = ({ data }) => {
  const cicdData = {
    ...data,
    icon: GitBranch,
    details: [
      'Jenkins Pipelines',
      'ArgoCD GitOps',
      'Continuous Integration',
      'Continuous Deployment',
      'Automated Testing'
    ]
  };

  return <BaseNode data={cicdData} type="cicd" />;
};

export default CICDNode;
