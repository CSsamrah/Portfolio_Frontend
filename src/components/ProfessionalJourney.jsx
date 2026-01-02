import { Briefcase } from 'lucide-react';

const ProfessionalJourney = ({ experiences }) => {
  if (!experiences) return null;

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold">
            <span className="text-white">Professional</span>
            <span className="text-orange-600"> Journey</span>
          </h2>        
          </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-orange-600 font-medium">{exp.role}</p>
                </div>
                <p className="text-gray-400">{exp.period}</p>
              </div>
              <p className="text-gray-300 mb-6">{exp.description}</p>
              <ul className="space-y-3">
                {exp.responsibilities?.map((resp, respIdx) => (
                  <li key={respIdx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProfessionalJourney;