import React from 'react';

function Project({ title, description, imageUrl, projectLink }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]">
      {/* Project Image */}
      <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-2xl font-bold text-cyan-400 mb-2">{title}</h3>

      {/* Project Description */}
      <p className="text-gray-300 mb-4">{description}</p>

      {/* View Project Button */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-violet-800 text-white font-bold py-2 px-4 rounded hover:bg-cyan-500 hover:text-gray-900 transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  );
}

export default Project;
