import React from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { motion } from "framer-motion";
import SchoolFromTop from "@/assets/images/school-hd.png";
import { Navbar } from "@/components/Navbar";
import { Stats } from "@/components/sections/Stats";
import { OurPhilosophy } from "@/components/about/OurPhilosophy";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${SchoolFromTop})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <SlideIn>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Shree Balkalyan
                <br />
                Secondary School
              </h1>
            </SlideIn>

            <FadeIn delay={0.3}>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                Empowering learners to thrive and succeed. Unlock endless
                possibilities in a vibrant community.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="space-x-4">
                <motion.button
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.button>
                <motion.button
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </FadeIn>
          </div>
        </div>

        <OurPhilosophy />
        <Stats />
        <ContactInfo />
      </div>
    </React.Fragment>
  );
};
