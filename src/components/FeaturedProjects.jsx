import { Code, ExternalLink, Github } from 'lucide-react';

const FeaturedProjects = ({ projects }) => {
  if (!projects) return null;

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center">
            <Code className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold">
            <span className="text-white">Featured </span>
            <span className="text-orange-600">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => {
                // Prioritize liveUrl, fallback to githubUrl
                const link = project.githubUrl || project.liveUrl;
                if (link) {
                  window.open(link, '_blank');
                }
              }}
              className="bg-gray-900 rounded-2xl overflow-hidden cursor-pointer
                         hover:scale-105 transition-all group"
            >
              <img
                src={project.image || '/api/placeholder/600/300'}
                alt={project.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <h3 className="text-2xl font-bold text-white">
                    {project.name}
                  </h3>

                  {project.technologies?.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>

                <div
                  className="flex gap-4"
                  onClick={(e) => e.stopPropagation()} // prevents card click
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-orange-500 hover:text-orange-300 text-lg font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-orange-500 hover:text-orange-300 text-lg font-medium"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
