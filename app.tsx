import React, { useState } from 'react';
import JsonEditor from './JsonEditor';
import FormGenerator from './FormGenerator';

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState('');

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">JSON Schema Editor</h1>
        <JsonEditor onChange={setJsonSchema} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Form Preview</h1>
        {jsonSchema && <FormGenerator jsonSchema={jsonSchema} />}
      </div>
    </div>
  );
};

export default App;
