function AboutMe() {
  return (
    <div className="max-w-4xl mx-5 my-12 p-8 bg-gray-800 text-gray-100 shadow-lg rounded-lg flex flex-col md:flex-row items-center">
      {/* Placeholder for Profile Picture */}
      <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-700 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6">
        {/* Filler image */}
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* About Me Text */}
      <div>
        <h2 className="text-3xl font-bold mb-2 text-cyan-400">About Me</h2>
        <p className="text-gray-300 mb-4">
          Hi, I'm Sam Jones, a passionate Software Engineer based in Seattle, WA. I'm currently expanding my expertise in Computer Science, diving deep into coding, algorithms, and web development. With a love for problem-solving and a knack for creativity, I've embarked on this journey to turn complex problems into elegant solutions.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
