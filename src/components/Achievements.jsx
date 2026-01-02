import {  Award } from 'lucide-react';

const Achievements = ({ achievements }) => {
  if (!achievements) return null;

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center">
            <Award className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold">
            <span className="text-white">Achievements & </span>
            <span className="text-orange-600">Badges</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all">
              <img 
                src={achievement.image || '/api/placeholder/600/400'} 
                alt={achievement.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {achievement.title}
                </h3>
                {achievement.description && (
                  <p className="text-gray-400 mb-4">
                    {achievement.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  {achievement.issuedBy && (
                    <span>Issued by: {achievement.issuedBy}</span>
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
export default Achievements;