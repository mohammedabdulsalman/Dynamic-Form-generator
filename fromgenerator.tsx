import React from 'react';
import { useForm } from 'react-hook-form';

interface FormGeneratorProps {
  jsonSchema: string;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ jsonSchema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const schema = JSON.parse(jsonSchema);

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      {schema.fields.map((field: any, index: number) => (
        <div key={index} className="mb-4">
          <label htmlFor={field.id} className="block text-lg font-bold mb-2">
            {field.label}
          </label>
          {field.type === 'text' && (
            <input
              type="text"
              id={field.id}
              {...register(field.id, { required: field.required })}
              className="w-full p-4 text-lg border border-gray-300"
              placeholder={field.placeholder}
            />
          )}
          {field.type === 'email' && (
            <input
              type="email"
              id={field.id}
              {...register(field.id, { required: field.required })}
              className="w-full p-4 text-lg border border-gray-300"
              placeholder={field.placeholder}
            />
          )}
          {field.type === 'select' && (
            <select
              id={field.id}
              {...register(field.id, { required: field.required })}
              className="w-full p-4 text-lg border border-gray-300"
            >
              {field.options.map((option: any, optionIndex: number) => (
                <option key={optionIndex} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
          {errors[field.id] && (
            <span className="text-red-500">{field.label} is required</span>
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;
