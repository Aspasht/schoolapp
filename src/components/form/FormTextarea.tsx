import { motion } from 'framer-motion';

interface FormTextareaProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: string;
}

export function FormTextarea({
  id,
  label,
  placeholder,
  required = false,
  rows = 6,
  error
}: FormTextareaProps) {
  return (
    <div className="relative">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <motion.textarea
        whileFocus={{ scale: 1.01 }}
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={`
          w-full px-4 py-3 rounded-lg
          border ${error ? 'border-red-300' : 'border-gray-300'}
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-all duration-200
          placeholder:text-gray-400
          resize-none
          ${error ? 'bg-red-50' : 'bg-white'}
        `}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}