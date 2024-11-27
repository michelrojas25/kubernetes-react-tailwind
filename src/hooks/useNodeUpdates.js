import { useCallback } from 'react';

export const useNodeUpdates = (setNodes) => {
  const updateNode = useCallback((nodeId, newData) => {
    setNodes((nodes) =>
      nodes.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, ...newData } }
          : node
      )
    );
  }, [setNodes]);

  return { updateNode };
};
