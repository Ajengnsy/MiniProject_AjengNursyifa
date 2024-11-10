import React from "react";

const Home = () => {
  return (
    <div>
      {/* Home Section */}
      <section id="about" className="about section mt-10 py-20">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap justify-between items-center">
            {/* Static Image Section */}
            <div className="w-full lg:w-7/12 mb-8 lg:mb-0 order-last lg:order-first">
              <div className="relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
                <img
                  src="/img/Sampah.jpg" // Replace with your image path
                  alt="Static Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Welcome Text Section */}
            <div className="w-full lg:w-4/12">
              <span
                className="text-gray-500 uppercase tracking-wider"
                data-aos="fade-up"
              >
                Welcome
              </span>
              <h1 className="text-3xl font-bold mb-4" data-aos="fade-up">
                Excepteur sint occaecat cupidatat non proident
              </h1>
              <p className="text-gray-700 mb-5" data-aos="fade-up">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p className="mt-5" data-aos="fade-up">
                <a
                  href="#"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  Get Started
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Report Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-10 px-5 md:px-20 bg-gray-50">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h3 className="text-green-700 text-sm font-bold mb-2 uppercase">
            Monthly Financial Report
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ecosia’s revenue in September 2024
          </h2>
          <p className="text-gray-600 mb-6">
            We publish our financial reports every month so you can see exactly
            how much money we made, how we spent it, and how many trees we
            planted.
          </p>
          <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-all px-4 py-2 rounded-lg">
            See our financial reports
          </button>
        </div>

        {/* Donut Chart Section */}
        <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-green-700">
                €2,294,182
              </span>
            </div>
            <svg viewBox="0 0 36 36" className="w-full h-full">
              {/* Background Circle */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-300"
              />

              {/* Green Segment */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="green"
                strokeWidth="2"
                strokeDasharray="80 100"
                strokeLinecap="round"
                className="text-green-500"
              />

              {/* Blue Segment */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="blue"
                strokeWidth="2"
                strokeDasharray="20 100"
                strokeDashoffset="-80"
                strokeLinecap="round"
                className="text-blue-500"
              />

              {/* Yellow Segment */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="yellow"
                strokeWidth="2"
                strokeDasharray="30 100"
                strokeDashoffset="-100"
                strokeLinecap="round"
                className="text-yellow-500"
              />

              {/* Red Segment */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="red"
                strokeWidth="2"
                strokeDasharray="10 100"
                strokeDashoffset="-130"
                strokeLinecap="round"
                className="text-red-500"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
