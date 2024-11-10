// src/components/Home.jsx

import React from "react";

const Home = () => {
  return (
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
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
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
  );
};

export default Home;
