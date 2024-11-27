import React, { useState, useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel
} from 'reactflow';
import {
  Shield,
  Database,
  Network,
  Cloud,
  Server,
  Lock,
  Key,
  Globe,
  Monitor,
  GitBranch,
  AlertCircle,
  Layers,
  Share2,
  Users,
  FileCode,
  Cpu,
  HardDrive,
  Workflow,
  Settings,
  Search,
  Bell,
  RefreshCw,
  ShieldAlert,
  Radio,
  Boxes
} from 'lucide-react';
import 'reactflow/dist/style.css';

// Actualizar initialNodes con más componentes
const initialNodes = [
  // Kubernetes Core
  {
    id: 'k8s-core',
    type: 'custom',
    position: { x: 400, y: 250 },
    data: {
      label: 'Kubernetes Core',
      icon: Cloud,
      iconColor: 'text-blue-500',
      shortDescription: 'Enterprise Cluster Management',
      details: [
        'Control Plane Components',
        'Worker Nodes',
        'Pod Scheduling',
        'Service Discovery'
      ]
    }
  },

  // Security & Authentication
  {
    id: 'security',
    type: 'custom',
    position: { x: 100, y: 100 },
    data: {
      label: 'Security Layer',
      icon: Shield,
      iconColor: 'text-red-500',
      shortDescription: 'Security & Auth Management'
    }
  },
  {
    id: 'waf',
    type: 'custom',
    position: { x: 50, y: 200 },
    data: {
      label: 'WAF',
      icon: ShieldAlert,
      iconColor: 'text-red-400',
      shortDescription: 'Web Application Firewall',
      details: ['SQL Injection Protection', 'XSS Prevention', 'Rate Limiting']
    }
  },
  {
    id: 'auth-service',
    type: 'custom',
    position: { x: 150, y: 200 },
    data: {
      label: 'Authentication',
      icon: Key,
      iconColor: 'text-red-400',
      shortDescription: 'OAuth2/OIDC Service'
    }
  },
  {
    id: 'rbac',
    type: 'custom',
    position: { x: 100, y: 300 },
    data: {
      label: 'RBAC',
      icon: Users,
      iconColor: 'text-red-400',
      shortDescription: 'Role-Based Access Control'
    }
  },

  // Database Layer
  {
    id: 'database',
    type: 'custom',
    position: { x: 700, y: 100 },
    data: {
      label: 'Oracle Database',
      icon: Database,
      iconColor: 'text-yellow-500',
      shortDescription: 'Enterprise Data Storage'
    }
  },
  {
    id: 'data-replication',
    type: 'custom',
    position: { x: 650, y: 200 },
    data: {
      label: 'Data Replication',
      icon: RefreshCw,
      iconColor: 'text-yellow-400',
      shortDescription: 'GoldenGate/DataGuard'
    }
  },
  {
    id: 'backup-recovery',
    type: 'custom',
    position: { x: 750, y: 200 },
    data: {
      label: 'Backup & Recovery',
      icon: HardDrive,
      iconColor: 'text-yellow-400',
      shortDescription: 'RMAN/Backup Solutions'
    }
  },

  // Network Layer
  {
    id: 'network',
    type: 'custom',
    position: { x: 400, y: 100 },
    data: {
      label: 'Network Layer',
      icon: Network,
      iconColor: 'text-green-500',
      shortDescription: 'Network Management'
    }
  },
  {
    id: 'service-mesh',
    type: 'custom',
    position: { x: 350, y: 200 },
    data: {
      label: 'Service Mesh',
      icon: Workflow,
      iconColor: 'text-green-400',
      shortDescription: 'Istio/Linkerd'
    }
  },
  {
    id: 'ingress',
    type: 'custom',
    position: { x: 450, y: 200 },
    data: {
      label: 'Ingress Controller',
      icon: Globe,
      iconColor: 'text-green-400',
      shortDescription: 'NGINX/Traefik'
    }
  },

  // Monitoring & Observability
  {
    id: 'monitoring',
    type: 'custom',
    position: { x: 400, y: 400 },
    data: {
      label: 'Observability',
      icon: Monitor,
      iconColor: 'text-purple-500',
      shortDescription: 'Monitoring Stack'
    }
  },
  {
    id: 'prometheus',
    type: 'custom',
    position: { x: 350, y: 500 },
    data: {
      label: 'Metrics',
      icon: Search,
      iconColor: 'text-purple-400',
      shortDescription: 'Prometheus/Grafana'
    }
  },
  {
    id: 'logging',
    type: 'custom',
    position: { x: 450, y: 500 },
    data: {
      label: 'Logging',
      icon: FileCode,
      iconColor: 'text-purple-400',
      shortDescription: 'ELK Stack'
    }
  },

  // CI/CD Pipeline
  {
    id: 'cicd',
    type: 'custom',
    position: { x: 100, y: 400 },
    data: {
      label: 'CI/CD Pipeline',
      icon: GitBranch,
      iconColor: 'text-indigo-500',
      shortDescription: 'Continuous Integration'
    }
  },
  {
    id: 'jenkins',
    type: 'custom',
    position: { x: 50, y: 500 },
    data: {
      label: 'Jenkins',
      icon: Settings,
      iconColor: 'text-indigo-400',
      shortDescription: 'Build Automation'
    }
  },
  {
    id: 'argocd',
    type: 'custom',
    position: { x: 150, y: 500 },
    data: {
      label: 'ArgoCD',
      icon: Boxes,
      iconColor: 'text-indigo-400',
      shortDescription: 'GitOps Deployment'
    }
  }
];

// Actualizar initialEdges con las nuevas conexiones
const initialEdges = [
  // ... (mantener las conexiones existentes y agregar las nuevas)
  // Conexiones de Security
  { id: 'e-security-auth', source: 'security', target: 'auth-service', animated: true },
  { id: 'e-security-rbac', source: 'security', target: 'rbac', animated: true },

  // Conexiones de Database
  { id: 'e-db-replication', source: 'database', target: 'data-replication', animated: true },
  { id: 'e-db-backup', source: 'database', target: 'backup-recovery', animated: true },

  // Conexiones de Network
  { id: 'e-network-mesh', source: 'network', target: 'service-mesh', animated: true },
  { id: 'e-network-ingress', source: 'network', target: 'ingress', animated: true },

  // Conexiones de Monitoring
  { id: 'e-monitoring-prometheus', source: 'monitoring', target: 'prometheus', animated: true },
  { id: 'e-monitoring-logging', source: 'monitoring', target: 'logging', animated: true },

  // Conexiones de CI/CD
  { id: 'e-cicd-jenkins', source: 'cicd', target: 'jenkins', animated: true },
  { id: 'e-cicd-argo', source: 'cicd', target: 'argocd', animated: true }
];

// Definir el nodo personalizado
const CustomNode = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const Icon = data.icon || Cloud;

  return (
    <div
      className="px-4 py-2 shadow-md rounded-md bg-white dark:bg-gray-800 border-2 
                 border-gray-200 dark:border-gray-700 cursor-pointer transform 
                 transition-all duration-300 hover:scale-105 hover:shadow-lg"
      onClick={() => setShowModal(true)}
    >
      <div className="flex items-center">
        <Icon className={`mr-2 ${data.iconColor || 'text-gray-500'}`} size={20} />
        <div className="ml-2">
          <div className="text-sm font-bold dark:text-white">{data.label}</div>
          {data.shortDescription && (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {data.shortDescription}
            </div>
          )}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md">
            <h3 className="text-lg font-bold mb-2">{data.label}</h3>
            <p className="text-sm mb-4">{data.description}</p>
            {data.details && (
              <ul className="list-disc pl-5 mb-4">
                {data.details.map((detail, index) => (
                  <li key={index} className="text-sm">{detail}</li>
                ))}
              </ul>
            )}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Definir los tipos de nodos
const nodeTypes = {
  custom: CustomNode
};

function ArchitectureDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}  // Agregar los tipos de nodos aquí
        fitView
        minZoom={0.5}
        maxZoom={2}
      >
        <Controls />
        <MiniMap />
        <Background color="#aaa" gap={16} />
        <Panel position="top-right">
          <div className="bg-white dark:bg-gray-800 p-2 rounded shadow">
            <p className="text-sm">
              • Haz clic en los nodos para ver detalles
              <br />
              • Arrastra entre nodos para crear conexiones
              <br />
              • Presiona Delete para eliminar conexiones
            </p>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default ArchitectureDiagram;
