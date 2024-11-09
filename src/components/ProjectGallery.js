import Project from "./Project";

function ProjectGallery() {
  // Sample project data
  const projectData = [
    {
      title: "Cyberpunk Portfolio",
      description: "A portfolio website with a cyberpunk theme.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
      colSpan: 2,
      rowSpan: 2,
    },
    {
      title: "Weather App",
      description: "A weather app built using the OpenWeatherMap API.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "XRP Price Tracker",
      description: "A real-time tracker for XRP prices with cyberpunk style.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      title: "E-commerce Platform",
      description: "A fully-featured e-commerce website.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      title: "Todo List App",
      description: "A minimalist to-do list app with dark mode.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Finance Dashboard",
      description: "A dashboard to visualize financial data.",
      imageUrl: "https://via.placeholder.com/600x400",
      projectLink: "https://example.com",
      colSpan: 1,
      rowSpan: 1,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">My Projects</h2>
      
      {/* CSS Grid with various sizes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`col-span-${project.colSpan} row-span-${project.rowSpan}`}
          >
            <Project
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectLink={project.projectLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
