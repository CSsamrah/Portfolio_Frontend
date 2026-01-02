import HeroSection from './components/HeroSection ';
import Achievements from './components/Achievements';
import ProfessionalJourney from './components/ProfessionalJourney';
import ContactSection from './components/ContactSection';
import FeaturedProjects from './components/FeaturedProjects';
import TechArsenal from './components/TechArsenal';

import React, { useState, useEffect } from 'react';

// API Configuration
const API_BASE_URL = 'https://portfolio-backend-kappa-amber.vercel.app/api'; // Replace with your actual API base URL

const App = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      setLoading(true);
      // Replace these endpoints with your actual API endpoints
      const [heroRes, experiencesRes, technologiesRes, projectsRes, achievementsRes, contactRes] = await Promise.all([
        fetch(`${API_BASE_URL}/hero`),
        fetch(`${API_BASE_URL}/experiences`),
        fetch(`${API_BASE_URL}/technologies`),
        fetch(`${API_BASE_URL}/projects`),
        fetch(`${API_BASE_URL}/achievements`),
        fetch(`${API_BASE_URL}/contact`)
      ]);

      const hero = await heroRes.json();
      const experiences = await experiencesRes.json();
      const technologies = await technologiesRes.json();
      const projects = await projectsRes.json();
      const achievements = await achievementsRes.json();
      const contact = await contactRes.json();

      setPortfolioData({
        hero,
        experiences,
        technologies,
        projects,
        achievements,
        contact
      });
      setLoading(false);
    } catch (err) {
      console.error('Error fetching portfolio data:', err);
      setError(err.message);
      setLoading(false);

      // Fallback to demo data if API fails
      setPortfolioData({
        hero: {
          name: 'Samrah Fatima',
          title: 'Full-Stack Developer | MERN and PERN Stack',
          bio: 'Final Year Software Engineering student at NED University with hands-on experience in full-stack and backend development, specializing in scalable web applications and AI-driven systems.',
          location: 'Karachi, Pakistan',
          profileImage: 'https://res.cloudinary.com/ddpvorduw/image/upload/v1767286704/profile_e1mjdb.jpg',
          socialLinks: [
            { platform: 'github', url: 'https://github.com/CSsamrah' },
            { platform: 'linkedin', url: 'https://www.linkedin.com/in/samrah-fatima-/' }
          ]
        },

        experiences: [
          {
            title: 'Mazik Global Pakistan',
            role: 'Core Development Intern',
            period: 'June 2025 - August 2025',
            description:
              'Worked as a Core Development Intern focusing on Gen-AI systems, full-stack development, and scalable backend solutions for recruitment automation platforms.',
            responsibilities: [
              'Architected a Gen-AI pipeline using LangChain for automated resume parsing and job description analysis',
              'Led full-stack development of Smart Resume Matcher using React (TypeScript) and ASP.NET Core',
              'Conducted 10+ code reviews and managed GitHub workflows'
            ]
          },
          {
            title: 'Conceptzi',
            role: 'Backend Intern',
            period: 'Feb 2024 - May 2024',
            description:
              'Backend Intern responsible for API development, performance optimization, and large-scale data processing in an Agile environment.',
            responsibilities: [
              'Developed and deployed 10+ REST APIs using modular and scalable endpoint design',
              'Improved backend efficiency by 85% through optimized API architecture',
              'Reduced large dataset processing time from 7 minutes to 1 minute using efficient algorithms'
            ]
          }
        ],

        technologies: [
          { name: 'JavaScript' },
          { name: 'TypeScript' },
          { name: 'Tailwind' },
          { name: 'CSS' },
          { name: 'React' },
          { name: 'Node.js' },
          { name: 'Express' },
          { name: 'MongoDB' },
          { name: 'Supabase' },
          { name: 'Docker' },
          { name: 'Vercel' },
          { name: 'Git' },
          { name: 'Postman' },
          { name: 'Material-UI' },
          { name: 'Bootstrap' },
          { name: 'Shadcn' },
          { name: 'ASP.NET Core' },
          { name: 'RESTful APIs' },
          { name: 'PostgreSQL' },
          { name: 'Firebase' },
          { name: 'LangChain' },
          { name: 'Python' },
          { name: 'C++' }
        ],

        projects: [
          {
            name: 'Smart Resume Matcher',
            description:
              'AI-powered recruitment platform that automates resume screening and job matching using semantic search and large language models.',
            image: 'https://res.cloudinary.com/ddpvorduw/image/upload/v1767285734/SmartMatcher_ebw6nu.png',
            technologies: ['React', 'TypeScript', 'ASP.NET Core', 'LangChain', 'ChromaDB'],
            liveUrl: 'https://www.loom.com/share/b395a52f76004c1cb45781fe490423b4',
            githubUrl: ''
          },
          {
            name: 'Techware – IT Components Marketplace',
            description:
              'Full-featured PERN stack e-commerce marketplace for IT hardware, supporting verified sellers, secure payments, and product categorization.',
            image: 'https://res.cloudinary.com/ddpvorduw/image/upload/v1767284845/homepage_zcrfri.jpg',
            technologies: ['PostgreSQL', 'Express.js', 'React', 'Node.js'],
            liveUrl: '',
            githubUrl: 'https://github.com/CSsamrah/Ecommerce-project'
          },
          {
            name: 'Assignment Submission Portal',
            description:
              'Hackathon runner-up MERN stack platform enabling secure assignment submission with multi-format file uploads and JWT-based authentication.',
            image: 'https://res.cloudinary.com/ddpvorduw/image/upload/v1767285003/smit_portal_vkredh.jpg',
            technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Firebase', 'JWT'],
            liveUrl: 'https://hackathon-frontend-gules.vercel.app/',
            githubUrl: 'https://github.com/CSsamrah/Final-Hackathon.git'
          },
          {
            name: 'Glow Quester',
            description:
              'Personalized quiz-based recommendation platform with e-commerce functionality and a PostgreSQL-backed backend.',
            image: 'https://res.cloudinary.com/ddpvorduw/image/upload/v1767285143/glowQuester_psa2b6.jpg',
            technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
            liveUrl: 'https://you-care-client.vercel.app/',
            githubUrl: 'https://github.com/CSsamrah/Glow-Quester.git'
          },
          {
            name: 'Ocean Odyssey',
            description:
              'C++ fish survival game showcasing Object-Oriented Programming through modular design, strategic gameplay, and obstacle navigation.',
            image: 'https://res.cloudinary.com/ddpvorduw/image/upload/v1767286103/ocean_q9t4zt.png',
            technologies: ['C++', 'Tkinter', 'Object-Oriented Programming'],
            liveUrl: '',
            githubUrl: 'https://github.com/CSsamrah/ocean-odyssey.git'
          }
        ],

        achievements: [
          {
            title: 'AI Wrapper Competition – Regional 3rd Place',
            image: 'https://res.cloudinary.com/ddpvorduw/image/upload/v1767288801/AI_Wrapper_natxgy.jpg'
          },
          {
            title: 'MERN Stack Development Certification',
            image: 'https://res.cloudinary.com/ddpvorduw/image/upload/v1767280641/SMIT_dxtymh.png'
          },
          {
            title: 'ICAP Fully Funded Scholarship',
            image: 'https://res.cloudinary.com/ddpvorduw/image/upload/v1767280640/ICAP_Certificate_lnmady.jpg'
          }
        ],

        contact: {
          email: 'samra.fatima.790@gmail.com',
          sourceCodeUrl: '',
          message:
            "Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects and help transform your vision into reality."
        }
      });

  }};

      if (loading) {
        return (
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-orange-600"></div>
          </div>
        );
      }

      if (error && !portfolioData) {
        return (
          <div className="min-h-screen bg-black flex items-center justify-center text-white">
            <div className="text-center">
              <p className="text-red-500 mb-4">Error loading portfolio data</p>
              <button
                onClick={fetchPortfolioData}
                className="px-6 py-2 bg-orange-600 rounded-lg hover:bg-orange-700"
              >
                Retry
              </button>
            </div>
          </div>
        );
      }

      return (
        <div className="min-h-screen bg-black text-white">
          <HeroSection data={portfolioData?.hero} />
          <ProfessionalJourney experiences={portfolioData?.experiences} />
          <TechArsenal technologies={portfolioData?.technologies} />
          <FeaturedProjects projects={portfolioData?.projects} />
          <Achievements achievements={portfolioData?.achievements} />
          <ContactSection contact={portfolioData?.contact} />
        </div>
      );
    };

    export default App;
