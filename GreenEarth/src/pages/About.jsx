import React, { useState, useEffect } from "react";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow data
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

  // Card data
  const cards = [
    {
      image: "/img/Sampah.jpg",
      title: "Brazil",
      description:
        "Planting projects in Brazil protect thousands of endangered plants and animals.",
      bgColor: "bg-yellow-300",
    },
    {
      image: "/img/pohon2.png",
      title: "Senegal",
      description:
        "Planting trees in Senegal helps restore desertified land to its former fertility.",
      bgColor: "bg-pink-200",
    },
    {
      image: "/img/pohon3.png",
      title: "Indonesia",
      description:
        "In Indonesia, we help restore forests on former palm oil plantations while creating alternative sources of income.",
      bgColor: "bg-green-300",
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

      {/* Cards Section */}
      <div className="container mx-auto mt-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden shadow-lg ${card.bgColor}`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
