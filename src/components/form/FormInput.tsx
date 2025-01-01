import { motion } from 'framer-motion';

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

export function FormInput({ 
  id, 
  label, 
  type = 'text', 
  placeholder, 
  required = false,
  error
}: FormInputProps) {
  return (
    <div className="relative">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <motion.input
        whileFocus={{ scale: 1.01 }}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        className={`
          w-full px-4 py-3 rounded-lg
          border ${error ? 'border-red-300' : 'border-gray-300'}
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-all duration-200
          placeholder:text-gray-400
          ${error ? 'bg-red-50' : 'bg-white'}
        `}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}