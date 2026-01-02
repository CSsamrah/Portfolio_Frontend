import { Code } from 'lucide-react';
import { useState } from 'react';

const TechArsenal = ({ technologies }) => {
  const [imageErrors, setImageErrors] = useState({});

  if (!technologies) return null;

  const handleImageError = (techName) => {
    setImageErrors(prev => ({ ...prev, [techName]: true }));
  };

  // Fallback icon component
  const FallbackIcon = () => (
    <svg 
      className="w-10 h-10 mx-auto text-orange-600" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
      />
    </svg>
  );

  return (
    <div className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center">
            <Code className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold">
            <span className="text-white">Tech</span>
            <span className="text-orange-600"> Arsenal</span>
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, idx) => (
            <div 
              key={idx} 
              className="bg-orange-200 rounded-2xl p-6 hover:bg-orange-600 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-3 flex items-center justify-center h-10">
                {imageErrors[tech.name] ? (
                  <FallbackIcon />
                ) : (
                  <img 
                    src={tech.icon} 
                    alt={`${tech.name} icon`}
                    className="w-10 h-10 object-contain group-hover:brightness-0 transition-all duration-300 "
                    onError={() => handleImageError(tech.name)}
                    loading="lazy"
                  />
                )}
              </div>
              <p className="text-center text-black text-sm font-medium group-hover:text-white transition-colors duration-300">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default TechArsenal;