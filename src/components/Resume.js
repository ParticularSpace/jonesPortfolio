import React from 'react';

const Resume = () => {
    return (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center mt-10">
            <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Resume</h2>
            
            {/* Experience Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-pink-500 mb-4">Experience</h3>
                <div className="text-left space-y-4">
                    <div>
                        <h4 className="text-xl font-semibold text-gray-300">Software Engineer - Victrola Coffee</h4>
                        <p className="text-sm text-gray-400">Seattle, WA | 2023 - Present</p>
                        <p className="text-gray-300">
                            Developed and maintained web applications for customer and internal use, focusing on 
                            responsive design and clean code. Collaborated with cross-functional teams to enhance 
                            digital solutions in the coffee industry.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-300">Freelance Web Developer</h4>
                        <p className="text-sm text-gray-400">Remote | 2021 - 2023</p>
                        <p className="text-gray-300">
                            Created custom websites and web applications for clients, specializing in small 
                            businesses. Ensured high-quality design, functionality, and SEO optimization.
                        </p>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-pink-500 mb-4">Education</h3>
                <div className="text-left space-y-4">
                    <div>
                        <h4 className="text-xl font-semibold text-gray-300">Seattle Central Community College</h4>
                        <p className="text-sm text-gray-400">Seattle, WA | Computer Science Degree | 2021 - Present</p>
                        <p className="text-gray-300">
                            Studying computer science with a focus on software development, algorithms, and web 
                            technologies. Actively engaged in projects to apply classroom knowledge to real-world 
                            applications.
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-pink-500 mb-4">Skills</h3>
                <ul className="text-gray-300 flex flex-wrap justify-center space-x-4">
                    <li className="bg-gray-700 py-2 px-4 rounded-lg">JavaScript</li>
                    <li className="bg-gray-700 py-2 px-4 rounded-lg">React</li>
                    <li className="bg-gray-700 py-2 px-4 rounded-lg">Tailwind CSS</li>
                    <li className="bg-gray-700 py-2 px-4 rounded-lg">HTML/CSS</li>
                    <li className="bg-gray-700 py-2 px-4 rounded-lg">Python</li>
                    <li className="bg-gray-700 py-2 px-4 rounded-lg">Git</li>
                </ul>
            </div>

            {/* Download Resume Button */}
            <div className="mt-8">
                <a
                    href="/path/to/your-resume.pdf"
                    download
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default Resume;
