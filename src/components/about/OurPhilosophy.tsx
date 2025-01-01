import { FadeIn } from '../animations/FadeIn';
import { GraduationCap, Lightbulb, Heart } from 'lucide-react';
import SchoolFromTop from "@/assets/images/assembly.png";

export const OurPhilosophy = () => {
  return (
    <div className="relative min-h-screen h-auto py-20 flex flex-col items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${SchoolFromTop})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'blur(2px)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 drop-shadow-lg">
            Our Philosophy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Guided by tradition, driven by innovation, and committed to nurturing 
            the leaders of tomorrow through holistic education. We strive to 
            foster an environment where creativity, critical thinking, and compassion 
            thrive.
          </p>
        </FadeIn>

        {/* Philosophy Sections */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Section 1 */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Education for Empowerment</h3>
              <p className="text-gray-100">
                We believe in providing education that equips students with the 
                skills and confidence to shape their own futures and make meaningful 
                contributions to society.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Tradition Meets Innovation</h3>
              <p className="text-gray-100">
                Our approach blends timeless values with modern methodologies, 
                ensuring a rich learning experience that adapts to the needs of 
                a dynamic world.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Holistic Development</h3>
              <p className="text-gray-100">
                Beyond academics, we nurture character, creativity, and 
                community spirit, helping students become well-rounded individuals 
                prepared for life's challenges.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Decorative Icons */}
      <div className="relative z-10 flex justify-center mt-16">
        <FadeIn>
          <div className="grid grid-cols-3 gap-16">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-full shadow-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={48} />
              </div>
              <p className="text-gray-100 mt-4 text-lg">Education</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-full shadow-lg flex items-center justify-center">
                <Lightbulb className="text-white" size={48} />
              </div>
              <p className="text-gray-100 mt-4 text-lg">Innovation</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-full shadow-lg flex items-center justify-center">
                <Heart className="text-white" size={48} />
              </div>
              <p className="text-gray-100 mt-4 text-lg">Compassion</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
