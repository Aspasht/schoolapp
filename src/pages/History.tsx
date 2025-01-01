import React from "react";
import { Calendar, Award, Users } from "lucide-react";
import SchoolFront from '@/assets/images/school-front-hd.jpeg';

export function History() {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" 
        style={{
          backgroundImage:
            `url(${SchoolFront})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Our History</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the journey that has shaped our school since its establishment in 2029 B.S. 
            From humble beginnings to milestones of excellence, we’ve come a long way.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 px-10">
        <h2 className="text-4xl font-bold text-center mb-12">Milestones Through the Years</h2>
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="border-l-2 border-gray-500">
            {/* Event 1 */}
            <div className="mb-10 ml-6">
              <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3"></div>
              <h3 className="text-2xl font-bold">Established in 2029 B.S.</h3>
              <p className="text-gray-300 mt-2">
                The school was founded with the vision of providing quality education to students 
                in a nurturing and inclusive environment.
              </p>
            </div>
            {/* Event 2 */}
            <div className="mb-10 ml-6">
              <div className="absolute w-6 h-6 bg-green-500 rounded-full -left-3"></div>
              <h3 className="text-2xl font-bold">First Batch Graduates (2035 B.S.)</h3>
              <p className="text-gray-300 mt-2">
                Our first group of students graduated with exceptional academic and personal growth.
              </p>
            </div>
            {/* Event 3 */}
            <div className="mb-10 ml-6">
              <div className="absolute w-6 h-6 bg-yellow-500 rounded-full -left-3"></div>
              <h3 className="text-2xl font-bold">National Recognition (2040 B.S.)</h3>
              <p className="text-gray-300 mt-2">
                The school was recognized for excellence in academic results and holistic development.
              </p>
            </div>
            {/* Event 4 */}
            <div className="mb-10 ml-6">
              <div className="absolute w-6 h-6 bg-red-500 rounded-full -left-3"></div>
              <h3 className="text-2xl font-bold">Expanded Facilities (2050 B.S.)</h3>
              <p className="text-gray-300 mt-2">
                State-of-the-art facilities, including science labs, sports arenas, and libraries, 
                were introduced to meet growing student needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Principle 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500">
                <Award className="text-white" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-white mt-4">Excellence</h3>
              <p className="text-gray-300 mt-2">
                Striving for excellence in education and extracurricular activities.
              </p>
            </div>
            {/* Principle 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500">
                <Users className="text-white" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-white mt-4">Community</h3>
              <p className="text-gray-300 mt-2">
                Building a strong sense of belonging among students, parents, and teachers.
              </p>
            </div>
            {/* Principle 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500">
                <Calendar className="text-white" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-white mt-4">Tradition</h3>
              <p className="text-gray-300 mt-2">
                Honoring our legacy while embracing innovation to prepare students for the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
