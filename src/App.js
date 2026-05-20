export default function GaladimaFurnitureWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {" "}
      {/* Hero Section */}{" "}
      <section className="relative bg-gradient-to-b from-black to-gray-900 px-6 py-20 text-center">
        {" "}
        <div className="max-w-5xl mx-auto">
          {" "}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-6">
            {" "}
            GALADIMA FURNITURE GROUP{" "}
          </h1>{" "}
          <p className="text-lg md:text-2xl text-gray-300 mb-8">
            {" "}
            Premium Sofas, Dining Tables & Modern Furniture For Elegant Homes{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2348069153295"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Chat on WhatsApp
            </a>

            <a
              href="tel:08069153295"
              className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="px-6 py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-300 text-lg leading-8">
            At GALADIMA FURNITURE GROUP, we specialize in high-quality sofas,
            dining tables, TV stands, beds, office furniture and other modern
            home furnishings designed to give your space elegance, comfort and
            luxury.
          </p>
        </div>
      </section>
      {/* Products Section */}
      <section className="px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-3xl p-8 shadow-lg hover:scale-105 transition">
              <div className="text-5xl mb-4">🛋️</div>
              <h3 className="text-2xl font-bold mb-3">Luxury Sofas</h3>
              <p className="text-gray-400">
                Beautiful and durable sofas designed for comfort and elegance.
              </p>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 shadow-lg hover:scale-105 transition">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold mb-3">Dining Tables</h3>
              <p className="text-gray-400">
                Stylish dining sets perfect for modern homes and families.
              </p>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 shadow-lg hover:scale-105 transition">
              <div className="text-5xl mb-4">🛏️</div>
              <h3 className="text-2xl font-bold mb-3">Modern Furniture</h3>
              <p className="text-gray-400">
                Quality home and office furniture crafted with excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="px-6 py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-3">High Quality</h3>
              <p className="text-gray-400">
                We provide durable and premium-quality furniture.
              </p>
            </div>

            <div className="bg-black border border-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-3">Affordable Prices</h3>
              <p className="text-gray-400">
                Luxury furniture at customer-friendly prices.
              </p>
            </div>

            <div className="bg-black border border-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-3">Trusted Service</h3>
              <p className="text-gray-400">
                Fast response, customer satisfaction and reliable delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="px-6 py-20 bg-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-300 text-lg mb-8">
            Ready to furnish your home with elegance? Contact GALADIMA FURNITURE
            GROUP today.
          </p>

          <div className="bg-gray-900 rounded-3xl p-8 shadow-xl">
            <p className="text-xl mb-4">
              WhatsApp / Call: <span className="font-bold">08069153295</span>
            </p>

            <a
              href="https://wa.me/2348069153295"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Message Us Now
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © 2026 GALADIMA FURNITURE GROUP. All Rights Reserved.
      </footer>
    </div>
  );
}
