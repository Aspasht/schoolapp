import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { FormInput } from '../form/FormInput';
import { FormTextarea } from '../form/FormTextArea';
import { SubmitButton } from '../form/SubmitButton';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <FadeIn>
        <motion.div 
          className="bg-white p-8 rounded-xl shadow-lg text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your message has been received. We'll get back to you within 24 hours.
          </p>
          <motion.button
            onClick={() => setSubmitted(false)}
            className="text-blue-600 font-medium hover:text-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send another message
          </motion.button>
        </motion.div>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={0.2}>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
        <p className="text-gray-600 mb-8">
          We'd love to hear from you. Please fill out this form.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <FormInput
            id="email"
            type="email"
            label="Email"
            placeholder="john@example.com"
            required
          />

          <FormInput
            id="subject"
            label="Subject"
            placeholder="How can we help you?"
            required
          />

          <FormTextarea
            id="message"
            label="Message"
            placeholder="Tell us more about your inquiry..."
            required
          />

          <SubmitButton loading={loading} />
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}