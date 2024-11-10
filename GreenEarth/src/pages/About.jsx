// src/components/About.jsx

import React, { useState, useEffect } from "react";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      imageUrl: "/img/pohon1.png", // Replace with your image path
      title: "Make the switch to Ecosia",
      description: "Join the Ecosia community",
      text: "Make Ecosia your default search engine to be climate active every day (for free!)",
    },
    {
      id: 2,
      imageUrl: "/img/pohon2.png", // Replace with your image path
      title: "Support Reforestation",
      description: "Join the movement",
      text: "Every search helps plant trees and restore nature.",
    },
    {
      id: 3,
      imageUrl: "/img/pohon3.png", // Replace with your image path
      title: "Make a Difference",
      description: "Be part of the change",
      text: "Your searches can help create a greener planet.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change interval to 5000ms (5 seconds)
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="about section mt-10 py-5">
      <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center">
        {/* Slider Section */}
        <div className="w-full lg:w-6/12 mb-8 lg:mb-0">
          <div className="relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
            <img
              src={slides[currentSlide].imageUrl}
              alt={`Slide ${slides[currentSlide].id}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-6/12 lg:pl-10">
          <h2 className="text-2xl font-bold">{slides[currentSlide].title}</h2>
          <h3 className="text-lg">{slides[currentSlide].description}</h3>
          <p className="mt-2 text-gray-700">{slides[currentSlide].text}</p>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevSlide}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              &lt; Prev
            </button>
            <button
              onClick={nextSlide}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Next &gt;
            </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentSlide === index ? "bg-green-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
