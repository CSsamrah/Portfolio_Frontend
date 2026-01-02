import { Rocket, Mail, ExternalLink } from 'lucide-react';

const ContactSection = ({ contact }) => {
  if (!contact) return null;

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-blue-900/30 rounded-xl flex items-center justify-center">
            <Rocket className="w-8 h-8 text-orange-600" />
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-6">
          <span className="text-white">Let's Build Something </span>
          <span className="text-orange-600">Amazing</span>
        </h2>

        <p className="text-xl text-gray-300 mb-12">
          {contact.message || "Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects and help transform your vision into reality."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {contact.email && (
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-400 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Mail className="w-5 h-5" />
              {contact.email}
            </a>
          )}
          {contact.sourceCodeUrl && (
            <a
              href={contact.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-black transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              Source code on Topmate
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ContactSection;