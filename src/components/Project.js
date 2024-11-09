import React from 'react';
import { motion } from 'framer-motion';

function Project({ title, description, imageUrl, projectLink }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-4 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] border border-cyan-400"
    >
      {/* Project Image */}
      <div className="w-full h-48 bg-gray-700 rounded-md overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-lg font-semibold text-cyan-400 mb-2 font-mono">{title}</h3>

      {/* Project Description */}
      <p className="text-gray-300 mb-4 font-mono text-sm">{description}</p>

      {/* View Project Button */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-violet-800 text-white font-mono py-2 px-4 rounded hover:bg-cyan-500 hover:text-gray-900 transition-colors duration-300"
      >
        View Project
      </a>
    </motion.div>
  );
}

export default Project;
