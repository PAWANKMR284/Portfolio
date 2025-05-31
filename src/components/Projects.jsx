import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Schedulize",
      link: "https://beta.leave.schedulize.co.uk/",
      description: "A scheduling management system",
    },
    {
      title: "PWN-Movies",
      link: "https://pwn-movies.vercel.app/",
      description: "Movie browsing application",
    },
    {
      title: "Tic Tac Toe",
      link: "https://tic-tac-toe-project-silk.vercel.app/",
      description: "Classic game implementation",
    },
    {
      title: "Liquor Management System (Positive)",
      link: "https://betaadmin.positiive.io/",
      description: "Liquor inventory and management solution",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-indigo-300">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-300">{project.description}</p>

              {/* Embed the project page */}
              <div className="w-full h-64 mb-4 border border-gray-700 rounded overflow-hidden">
                <iframe
                  src={project.link}
                  title={project.title}
                  className="w-full h-full"
                  frameBorder="0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                ></iframe>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Visit Project&nbsp;→
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
