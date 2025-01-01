import React from 'react';
import { MapPin, Phone, Mail, Clock, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  delay?: number;
}

function ContactItem({ icon, title, details, delay = 0 }: ContactItemProps) {
  return (
    <motion.div 
      className="bg-gradient-to-br from-white via-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <div className="flex gap-4 items-start">
        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-md">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          {details.map((detail, index) => (
            <p 
              key={index} 
              className="text-gray-700 leading-relaxed"
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      details: [
        "123 Education Street",
        "Kathmandu, Nepal 44600"
      ]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: [
        "Main: +977 1-4XXXXXX",
        "Admissions: +977 1-4XXXXXX"
      ] 
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: [
        "info@school.edu.np",
        "admissions@school.edu.np"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Office Hours",
      details: [
        "Sunday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: Closed"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Social Media",
      details: [
        "Facebook: @schoolname",
        "Instagram: @schoolname"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Admissions",
      details: [
        "Now accepting applications",
        "Schedule a campus tour"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-16">
      <FadeIn>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help! Choose the most convenient way to reach us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactDetails.map((item, index) => (
            <ContactItem 
              key={item.title} 
              {...item} 
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">
            Quick Response Guarantee
          </h3>
          <p className="text-lg">
            We aim to respond to all inquiries within 24 hours during business days.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
