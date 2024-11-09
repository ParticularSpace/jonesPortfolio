function AboutMe() {
  return (
    <div className="max-w-4xl mx-5 my-8 p-6 bg-gray-800 text-gray-100 shadow-lg rounded-lg flex flex-col md:flex-row items-center">
      {/* Profile Picture with Neon Border */}
      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 border-4 border-cyan-400">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* About Me Text */}
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-cyan-400 font-mono">About Me</h2>
        <p className="text-gray-300 mb-4 font-mono text-sm">
          Hi, I'm Sam Jones, a passionate Software Engineer based in Seattle, WA. I'm currently expanding my expertise in Computer Science, diving deep into coding, algorithms, and web development. With a love for problem-solving and a knack for creativity, I've embarked on this journey to turn complex problems into elegant solutions.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
