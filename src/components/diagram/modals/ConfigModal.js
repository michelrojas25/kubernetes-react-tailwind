import React, { useState } from 'react';

const ConfigModal = ({ node, onClose, onUpdate }) => {
  const [config, setConfig] = useState({
    label: node.data.label,
    description: node.data.description,
    details: node.data.details || []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(config);
    onClose();
  };

  const handleDetailChange = (index, value) => {
    const newDetails = [...config.details];
    newDetails[index] = value;
    setConfig({ ...config, details: newDetails });
  };

  const addDetail = () => {
    setConfig({ ...config, details: [...config.details, ''] });
  };

  const removeDetail = (index) => {
    const newDetails = config.details.filter((_, i) => i !== index);
    setConfig({ ...config, details: newDetails });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4">
        <h3 className="text-xl font-bold mb-4">Configurar Nodo</h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Etiqueta</label>
              <input
                type="text"
                value={config.label}
                onChange={(e) => setConfig({ ...config, label: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Descripción</label>
              <textarea
                value={config.description}
                onChange={(e) => setConfig({ ...config, description: e.target.value })}
                className="w-full p-2 border rounded"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Detalles Técnicos</label>
              {config.details.map((detail, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={detail}
                    onChange={(e) => handleDetailChange(index, e.target.value)}
                    className="flex-1 p-2 border rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeDetail(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addDetail}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Agregar Detalle
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfigModal;
