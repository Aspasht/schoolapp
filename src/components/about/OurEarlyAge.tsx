import { Home, School, Lightbulb } from "lucide-react";
import ClassRoomImage from "@/assets/images/classroom-hd.jpeg";

export function OurEarlyAge() {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${ClassRoomImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Early Age</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A journey that began with visionaries, dedication, and a commitment
            to nurture young minds.
          </p>
        </div>
      </div>

      {/* Early Age Highlights */}
      <div className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          The Foundation Years
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          {/* Highlight 1 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500">
              <Home className="text-white" size={48} />
            </div>
            <h3 className="text-2xl font-bold mt-4">Humble Beginnings</h3>
            <p className="text-gray-300 mt-2">
              Our school started in a small building with a vision to transform
              education in the community.
            </p>
          </div>
          {/* Highlight 2 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500">
              <School className="text-white" size={48} />
            </div>
            <h3 className="text-2xl font-bold mt-4">First Students</h3>
            <p className="text-gray-300 mt-2">
              The first batch of students laid the foundation for the legacy of
              success we carry today.
            </p>
          </div>
          {/* Highlight 3 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500">
              <Lightbulb className="text-white" size={48} />
            </div>
            <h3 className="text-2xl font-bold mt-4">Visionaries</h3>
            <p className="text-gray-300 mt-2">
              Inspired by passionate educators, our school grew rapidly, fueled
              by creativity and dedication.
            </p>
          </div>
        </div>
      </div>

      {/* Early Memories Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Early Memories and Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Story 1 */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white">
                The First Classroom
              </h3>
              <p className="text-gray-300 mt-4">
                Our very first classroom, filled with eager students and
                passionate teachers, marked the start of a beautiful journey in
                2029 B.S.
              </p>
            </div>
            {/* Story 2 */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white">
                Celebrating the First Festival
              </h3>
              <p className="text-gray-300 mt-4">
                A school-wide celebration brought the community together,
                fostering a sense of belonging and joy among students and staff.
              </p>
            </div>
            {/* Story 3 */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white">
                Inspiring the First Leaders
              </h3>
              <p className="text-gray-300 mt-4">
                Students from the first batch demonstrated exceptional
                leadership skills, setting an example for generations to come.
              </p>
            </div>
            {/* Story 4 */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white">
                First Annual Day
              </h3>
              <p className="text-gray-300 mt-4">
                The first annual day was a momentous occasion, showcasing talent
                and achievement while strengthening the school spirit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-500 text-center text-white">
        <h2 className="text-3xl font-bold">Join Our Legacy</h2>
        <p className="text-lg mt-4">
          Be part of a journey that began decades ago and continues to inspire
          generations of learners and leaders.
        </p>
        <button className="mt-6 px-6 py-3 bg-gray-900 rounded-lg text-white font-semibold hover:bg-gray-800">
          Learn More About Us
        </button>
      </div>
    </div>
  );
}
