import Footer from "../components/Footer";
import ParticleSwirl from "../components/ParticleSwirl";
import AboutMe from "../components/AboutMe";
import Weather from "../components/Weather";
import ProjectGallery from "../components/ProjectGallery";
import Contact from "../components/Contact";
import Xrp from "../components/Xrp";
import Resume from "../components/Resume";

function Home() {
  return (
    <div className="relative min-h-screen text-gray-100 font-mono">
      <ParticleSwirl />

      {/* Header Section */}
      <div className="flex-grow flex flex-col items-center mt-10">
        <div className="text-center">
          <h1 className="text-5xl text-cyan-400">Sam Jones</h1>
          <h2 className="text-3xl text-pink-500">Software Engineer</h2>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
          <button className="bg-gray-800 hover:bg-violet-800 hover:shadow-[0_0_10px_rgba(245,66,203,0.6)] text-cyan-400 font-semibold py-2 px-3 rounded transition duration-300">
            Home
          </button>
          <button className="bg-gray-800 hover:bg-violet-800 hover:shadow-[0_0_10px_rgba(245,66,203,0.6)] text-cyan-400 font-semibold py-2 px-3 rounded transition duration-300">
            Projects
          </button>
          <button className="bg-gray-800 hover:bg-violet-800 hover:shadow-[0_0_10px_rgba(245,66,203,0.6)] text-cyan-400 font-semibold py-2 px-3 rounded transition duration-300">
            About Me
          </button>
          <button className="bg-gray-800 hover:bg-violet-800 hover:shadow-[0_0_10px_rgba(245,66,203,0.6)] text-cyan-400 font-semibold py-2 px-3 rounded transition duration-300">
            Contact
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-4 gap-4 mt-10 w-full max-w-7xl mx-auto px-4">
        {/* Panels with different sizes and spans for the desired layout */}
        <div className="col-span-4 sm:col-span-2 row-span-2 bg-gray-800 p-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300">
          <AboutMe />
        </div>
        <div className="col-span-4 sm:col-span-1 row-span-2 bg-gray-800 p-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300">
          <Contact />
        </div>
        <div className="col-span-4 sm:col-span-1 row-span-2 bg-gray-800 p-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300">
          <Weather />
        </div>
        <div className="col-span-4 sm:col-span-2 row-span-1 bg-gray-800 p-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300">
          <ProjectGallery />
        </div>
        <div className="col-span-4 sm:col-span-2 row-span-1 bg-gray-800 p-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300">
          <Xrp />
        </div>
        <div className="col-span-4 sm:col-span-4 row-span-1 bg-gray-800 p-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300">
          <Resume />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
