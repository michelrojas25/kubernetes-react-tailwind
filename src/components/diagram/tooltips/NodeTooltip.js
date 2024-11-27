import React from 'react';
import { NODE_COLORS } from '../../../config/nodeConfig';

const NodeTooltip = ({ content, position, type }) => {
  const colors = NODE_COLORS[type];

  return (
    <div
      className={`absolute z-50 p-3 rounded-lg shadow-lg bg-white dark:bg-gray-800 
                  ${colors.border} transform -translate-x-1/2 -translate-y-full`}
      style={{
        left: position.x,
        top: position.y - 10
      }}
    >
      <div className="max-w-xs">
        {Array.isArray(content) ? (
          <ul className="space-y-1">
            {content.map((item, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-300">
                • {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-300">{content}</p>
        )}
      </div>
    </div>
  );
};

export default NodeTooltip;
