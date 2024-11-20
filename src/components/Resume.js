import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center mt-10">
      <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Resume</h2>

      {/* Experience Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-pink-500 mb-4">
          Experience
        </h3>
        <div className="text-left space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-300">
              Tutor - UC Berkeley Extension Coding Bootcamp
            </h4>
            <p className="text-sm text-gray-400">Remote | 2023 - 2024</p>
            <p className="text-gray-300">
              Returned as a tutor for future cohorts after completing the UC
              Berkeley Full Stack Bootcamp. Provided guidance on complex
              programming concepts, assisted with debugging, and supported
              students in their journey through the bootcamp. Developed strong
              communication skills while deepening my understanding of core
              programming principles.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-300">
              Victrola Coffe Roasters - Barista
            </h4>
            <p className="text-sm text-gray-400">2023 - 2024</p>
            <p className="text-gray-300">
              Provided exceptional customer service, enhancing my communication
              skills and ability to work efficiently under pressure. Gained
              hands-on experience in multitasking, problem-solving, and teamwork
              in a fast-paced environment while maintaining attention to detail
              in product preparation and quality control.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-pink-500 mb-4">Education</h3>
        <div className="text-left space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-300">
              Seattle Central Community College
            </h4>
            <p className="text-sm text-gray-400">
              Seattle, WA | Associates of Science | GPA: 4.0 | 2023 - Present
            </p>
            <p className="text-gray-300">
              Studying computer science with a focus on software development,
              algorithms, and web technologies. Actively engaged in projects to
              apply classroom knowledge to real-world applications.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-300">
              Full Stack Web Development Bootcamp - UC Berkeley Extension
            </h4>
            <p className="text-sm text-gray-400">Remote | Completed 2022</p>
            <p className="text-gray-300">
              Completed an intensive full stack development program covering
              HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React.
              Gained hands-on experience by developing various projects,
              following best practices for coding, debugging, and version
              control.
            </p>
          </div>

        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-pink-500 mb-4">Skills</h3>
        <ul className="text-gray-300 flex flex-wrap justify-center space-x-4">
          <li className="bg-gray-700 py-2 px-4 rounded-lg">JavaScript</li>
          <li className="bg-gray-700 py-2 px-4 rounded-lg">Java</li>
          <li className="bg-gray-700 py-2 px-4 rounded-lg">Python</li>
          <li className="bg-gray-700 py-2 px-4 rounded-lg">HTML/CSS</li>
          <li className="bg-gray-700 py-2 px-4 rounded-lg">Node.js</li>
          <li className="bg-gray-700 py-2 px-4 rounded-lg">React</li>
          <li className="bg-gray-700 py-2 px-4 rounded-lg">Tailwind CSS</li>
        </ul>
      </div>

      {/* Download Resume Button */}
      {/* <div className="mt-8">
        <a
          href="/path/to/your-resume.pdf"
          download
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Download Resume
        </a>
      </div> */}
    </div>
  );
};

export default Resume;
