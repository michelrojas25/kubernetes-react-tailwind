import React from 'react';

const DetailModal = ({ node, onClose }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <div className="modal-header">
        <h3>{node.data.label}</h3>
      </div>
      <div className="modal-body">
        <p className="modal-description">{node.data.description}</p>
        {node.data.details && (
          <div className="modal-details">
            <h4 className="text-lg font-semibold mb-2">Detalles Técnicos</h4>
            <ul className="modal-details-list">
              {node.data.details.map((detail, index) => (
                <li key={index} className="modal-details-item">{detail}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="modal-footer">
        <button
          onClick={onClose}
          className="modal-button modal-button-primary"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
);

export default DetailModal;
