import React from 'react';
import { Users, GraduationCap, Globe2, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import OfficeRoomImage from '@/assets/images/officeroom-hd.jpeg';

interface StatItemProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

function StatItem({ icon, number, label }: StatItemProps) {
  return (
    <motion.div
      className="text-center transition-transform transform"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white text-blue-600 rounded-xl shadow-lg">
        {icon}
      </div>
      <div className="text-4xl font-extrabold text-white mb-2">{number}</div>
      <div className="text-base text-gray-200">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <motion.section
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: `url(${OfficeRoomImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <StatItem
            icon={<Users className="w-8 h-8" />}
            number="200+"
            label="Active Students"
          />
          <StatItem
            icon={<GraduationCap className="w-8 h-8" />}
            number="95%"
            label="Graduation Rate"
          />
          <StatItem
            icon={<Globe2 className="w-8 h-8" />}
            number="50+"
            label="Years Of Experience"
          />
          <StatItem
            icon={<Trophy className="w-8 h-8" />}
            number="100+"
            label="Awards Won"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
