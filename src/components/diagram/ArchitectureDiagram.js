import React, { useCallback } from 'react';
import ReactFlow, {
  Controls,
  MiniMap,
  Background,
  useNodesState,
  useEdgesState,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge
} from 'reactflow';
import { SecurityNode, DatabaseNode, NetworkNode, MonitoringNode, CICDNode } from './nodes';
import { useNodeUpdates } from '../../hooks/useNodeUpdates';
import 'reactflow/dist/style.css';
import '../../styles/nodes.css';
import '../../styles/modals.css';
import '../../styles/diagram.css';

// Definir los nodos iniciales
const initialNodes = [
  {
    id: '1',
    type: 'security',
    position: { x: 250, y: 50 },
    data: { 
      label: 'Security Layer',
      description: 'Security & Auth Management',
      details: [
        'Web Application Firewall',
        'OAuth2/OIDC Authentication',
        'RBAC Controls'
      ]
    }
  },
  {
    id: '2',
    type: 'database',
    position: { x: 250, y: 200 },
    data: {
      label: 'Oracle Database',
      description: 'Enterprise Data Storage',
      details: [
        'High Availability',
        'Data Replication',
        'Backup & Recovery'
      ]
    }
  },
  // Puedes agregar más nodos aquí
];

// Definir las conexiones iniciales
const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
  },
];

const nodeTypes = {
  security: SecurityNode,
  database: DatabaseNode,
  network: NetworkNode,
  monitoring: MonitoringNode,
  cicd: CICDNode
};

function ArchitectureDiagram() {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const { updateNode } = useNodeUpdates(setNodes);

  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, [setNodes]);

  const onEdgesChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, [setEdges]);

  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  return (
    <div className="h-[800px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default ArchitectureDiagram;
