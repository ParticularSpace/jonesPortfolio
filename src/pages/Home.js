import Footer from "../components/Footer";
import ParticleSwirl from "../components/ParticleSwirl";

function Home(){


    return(
        <div className="flex flex-col min-h-screen">
            <ParticleSwirl />
        <div className="flex-grow flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Sam Jones</h1>
                <h2 className="text-2xl">Software Engineer</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Home</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Projects</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">About Me</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact</button>
            </div>
        </div>
        
        <Footer />
    </div>
    )
}

export default Home;