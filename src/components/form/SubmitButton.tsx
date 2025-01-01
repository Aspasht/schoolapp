import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface SubmitButtonProps {
  loading?: boolean;
}

export function SubmitButton({ loading = false }: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      disabled={loading}
      className={`
        w-full py-3 px-6 rounded-lg
        bg-gradient-to-r from-blue-600 to-blue-700
        text-white font-medium
        flex items-center justify-center gap-2
        disabled:opacity-70 disabled:cursor-not-allowed
        transition-all duration-200
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {loading ? (
        <>
          <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
          <span>Sending...</span>
        </>
      ) : (
        <>
          <Send className="w-5 h-5" />
          <span>Send Message</span>
        </>
      )}
    </motion.button>
  );
}