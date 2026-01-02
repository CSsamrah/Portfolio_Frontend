
import { Calendar, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
const HeroSection = ({ data }) => {
  if (!data) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-600"></div></div>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img 
              src={data.profileImage || '/api/placeholder/300/300'} 
              alt={data.name}
              className="w-64 h-64 rounded-full object-cover border-4 border-orange-600"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            {/* <button className="mb-6 px-6 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-black transition-colors">
              <Calendar className="inline mr-2 w-4 h-4" />
              Schedule a call
            </button> */}
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{data.name}</h1>
            <p className="text-xl text-gray-400 mb-6">{data.title}</p>
            <p className="text-gray-300 leading-relaxed mb-8">{data.bio}</p>
            
            <div className="flex items-center gap-2 text-gray-400 mb-6 justify-center md:justify-start">
              <MapPin className="w-5 h-5" />
              <span>{data.location}</span>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start">
              {data.socialLinks?.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  {link.platform === 'github' && <Github className="w-6 h-6" />}
                  {link.platform === 'linkedin' && <Linkedin className="w-6 h-6" />}
                  {link.platform === 'twitter' && <Twitter className="w-6 h-6" />}
                  {link.platform === 'instagram' && <Instagram className="w-6 h-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;