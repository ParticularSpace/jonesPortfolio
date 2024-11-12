import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaReddit } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8">Feel free to reach out through any of the following platforms:</p>
            
            <div className="space-y-4">
                <a
                    href="mailto:samejones2018@gmail.com"
                    className="flex items-center justify-center space-x-3 text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                    <FaEnvelope className="text-xl" />
                    <span>samejones2018@gmail.com</span>
                </a>

                <a
                    href="https://github.com/ParticularSpace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                </a>

                <a
                    href="https://linkedin.com/in/your-linkedin-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                </a>

                <a
                    href="https://reddit.com/user/your-reddit-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                    <FaReddit className="text-xl" />
                    <span>Reddit</span>
                </a>
            </div>
        </div>
    );
};

export default Contact;
