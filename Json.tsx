import React, { useState } from 'react';

interface JsonEditorProps {
  onChange: (json: string) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onChange }) => {
  const [json, setJson] = useState('');
  const [error, setError] = useState('');

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newJson = e.target.value;
    try {
      JSON.parse(newJson);
      setError('');
      onChange(newJson);
    } catch {
      setError('Invalid JSON');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <textarea
        value={json}
        onChange={handleJsonChange}
        className="w-full h-full p-4 text-lg font-mono border border-gray-300"
        placeholder="Enter JSON schema"
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default JsonEditor;
