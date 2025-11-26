import React from "react";
import { ProjectsData } from "../assets/data/ProjectsData";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = React.useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-16 py-20 bg-linear-to-br from-gray-900 via-slate-900 to-slate-900 text-white"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A collection of my latest work and creative endeavors.  others are in progress youtube clone,...
        </p>
        <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      </div>

   
      <div className="project grid @min-[600px]:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {ProjectsData.map((project) => (
          <div
            key={project.id}
            className="group relative bg-linear-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-gray-700 hover:border-blue-500/30"
          >
           
            <div className="caards  absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
           
              <div className="absolute top-4 right-4 flex gap-2">
                {project.tech?.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-500/90 text-white text-xs rounded-full font-medium backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Content */}
            <div className="relative p-6 z-10">
             
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {project.name}
              </h3>

              {/* Description with Simple Tooltip */}
              <div className="relative mb-4">
                <button 
                  className="flex items-center gap-2 text-blue-400 hover:text-cyan-300 transition-colors duration-300"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <span className="font-semibold text-lg">View Details</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

              
                {hoveredProject === project.id && (
                  <div 
                    className="absolute bottom-full left-0 right-0 mb-3 p-4 bg-gray-800 border border-blue-500/30 rounded-xl shadow-2xl backdrop-blur-sm z-50 max-h-64 overflow-y-auto"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
                      {project.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="buttons flex gap-4 pt-4 border-t border-gray-700/50">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold sm:py-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base   flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-gray-500"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Code
                </a>
              </div>
            </div>

            
            <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
              <div className="absolute inset-px rounded-3xl bg-linear-to-br from-gray-800 to-gray-900"></div>
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
}