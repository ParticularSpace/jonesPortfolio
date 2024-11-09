import Project from "./Project";

function ProjectGallery() {
  const projectData = [
    {
      title: "Cyberpunk Portfolio",
      description: "A portfolio website with a cyberpunk theme.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
    },
    {
      title: "Weather App",
      description: "A weather app built using the OpenWeatherMap API.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
    },
    {
      title: "XRP Price Tracker",
      description: "A real-time tracker for XRP prices with cyberpunk style.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
    },
    {
      title: "E-commerce Platform",
      description: "A fully-featured e-commerce website.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
    },
    {
      title: "Todo List App",
      description: "A minimalist to-do list app with dark mode.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
    },
    {
      title: "Finance Dashboard",
      description: "A dashboard to visualize financial data.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-mono font-semibold text-cyan-400 mb-8 text-center">My Projects</h2>
      
      {/* Grid with consistent card sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
