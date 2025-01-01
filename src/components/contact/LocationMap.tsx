import { FadeIn } from '../animations/FadeIn';

export function LocationMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=shreebalkalyan+lamjung&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}