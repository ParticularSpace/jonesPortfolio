import React from 'react';

const AboutMe = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
            <img
                src="/images/photoofme.jpg " // Update this path to your photo location
                alt="Profile"
                className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mb-4 sm:mb-0 sm:mr-6 shadow-lg"
            />
            <div className="text-left">
                <h2 className="text-3xl font-semibold text-cyan-400 mb-2">Sam Jones</h2>
                <p className="text-gray-300">
                    Hello! I'm Sam, a passionate Software Engineer based in Seattle, WA. I'm currently pursuing a
                    degree in Computer Science and working on various projects to deepen my understanding of
                    software development.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
