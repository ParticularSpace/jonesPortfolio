import Footer from "../components/Footer";
import ParticleSwirl from "../components/ParticleSwirl";
import AboutMe from "../components/AboutMe";
import Weather from "../components/Weather";
import ProjectGallery from "../components/ProjectGallery";
import Spotify from "../components/Spotify";
import Xrp from "../components/Xrp";


function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <ParticleSwirl />
      
      <div className="flex-grow flex flex-col items-center mt-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-cyan-400">Sam Jones</h1>
          <h2 className="text-2xl text-pink-500">Software Engineer</h2>
        </div>

      
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button className="bg-gray-700 hover:bg-violet-800 hover:shadow-[0_0_15px_rgba(245,66,203,0.6)] text-white font-bold py-2 px-4 rounded transition duration-300">
            Home
          </button>
          <button className="bg-gray-700 hover:bg-violet-800 hover:shadow-[0_0_15px_rgba(245,66,203,0.6)] text-white font-bold py-2 px-4 rounded transition duration-300">
            Projects
          </button>
          <button className="bg-gray-700 hover:bg-violet-800 hover:shadow-[0_0_15px_rgba(245,66,203,0.6)] text-white font-bold py-2 px-4 rounded transition duration-300">
            About Me
          </button>
          <button className="bg-gray-700 hover:bg-violet-800 hover:shadow-[0_0_15px_rgba(245,66,203,0.6)] text-white font-bold py-2 px-4 rounded transition duration-300">
            Contact
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full max-w-6xl mx-auto px-4">
        <div className="col-span-2 row-span-2">
          <AboutMe />
        </div>
        <div className="col-span-1 row-span-1">
          <Spotify />
        </div>
        <div className="col-span-1 row-span-2">
          <Weather />
        </div>
        <div className="col-span-2 row-span-1">
          <ProjectGallery />
        </div>
        <div className="col-span-2 row-span-1">
          <Xrp />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
