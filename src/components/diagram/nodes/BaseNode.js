import React, { useState } from 'react';
import { useTooltip } from '../../../hooks/useTooltip';
import NodeTooltip from '../tooltips/NodeTooltip';
import DetailModal from '../modals/DetailModal';
import ConfigModal from '../modals/ConfigModal';
import { NODE_COLORS } from '../../../config/nodeConfig';

const BaseNode = ({ data, type, onNodeUpdate }) => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const { showTooltip, tooltipPosition, handleMouseEnter, handleMouseLeave } = useTooltip();
  const colors = NODE_COLORS[type];

  const handleNodeClick = () => {
    setShowDetailModal(true);
  };

  const handleConfigClick = (e) => {
    e.stopPropagation();
    setShowConfigModal(true);
  };

  const handleUpdate = (newConfig) => {
    onNodeUpdate({ ...data, ...newConfig });
  };

  return (
    <>
      <div
        className={`relative px-4 py-2 rounded-lg shadow-md bg-white dark:bg-gray-800 
                    border-2 ${colors.border} transition-all duration-300 
                    hover:shadow-lg hover:scale-105`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleNodeClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {data.icon && (
              <data.icon className={`${colors.primary} w-5 h-5`} />
            )}
            <div>
              <h3 className="font-medium text-sm dark:text-white">{data.label}</h3>
              {data.shortDescription && (
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {data.shortDescription}
                </p>
              )}
            </div>
          </div>
          <button
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            onClick={handleConfigClick}
          >
            <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {showTooltip && (
          <NodeTooltip
            content={data.details}
            position={tooltipPosition}
            type={type}
          />
        )}
      </div>

      {showDetailModal && (
        <DetailModal
          node={{ data }}
          onClose={() => setShowDetailModal(false)}
        />
      )}

      {showConfigModal && (
        <ConfigModal
          node={{ data }}
          onClose={() => setShowConfigModal(false)}
          onUpdate={handleUpdate}
        />
      )}
    </>
  );
};

export default BaseNode;
