import React, { useState } from "react";
import Project from "./Project";

function ProjectGallery() {
  const projectData = [
    {
      title: "Cyberpunk Portfolio",
      description: "A portfolio website with a cyberpunk theme.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
    },
    {
      title: "Weather App",
      description: "A weather app built using the OpenWeatherMap API.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
    },
    {
      title: "XRP Price Tracker",
      description: "A real-time tracker for XRP prices with cyberpunk style.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
    },
    {
      title: "E-commerce Platform",
      description: "A fully-featured e-commerce website.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
    },
    {
      title: "Todo List App",
      description: "A minimalist to-do list app with dark mode.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
    },
    {
      title: "Finance Dashboard",
      description: "A dashboard to visualize financial data.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Helper functions for carousel navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-mono font-semibold text-cyan-400 mb-8 text-center">
        My Projects
      </h2>

      {/* Carousel Container */}
      <div className="relative">
        {/* Project Display */}
        <Project
          title={projectData[currentIndex].title}
          description={projectData[currentIndex].description}
          imageUrl={projectData[currentIndex].imageUrl}
          projectLink={projectData[currentIndex].projectLink}
          className="bg-gray-800 text-white p-8 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
        />
      </div>

      {/* Dots Indicator and Navigation Arrows */}
      <div className="flex justify-center items-center space-x-4 mt-6">
        {/* Previous Arrow */}
        <button
          onClick={handlePrev}
          className="bg-gray-700 hover:bg-cyan-600 text-white px-3 py-2 rounded-full focus:outline-none"
        >
          &lt;
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {projectData.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-cyan-400" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className="bg-gray-700 hover:bg-cyan-600 text-white px-3 py-2 rounded-full focus:outline-none"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default ProjectGallery;
