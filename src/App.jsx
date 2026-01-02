import HeroSection from './components/HeroSection ';
import Achievements from './components/Achievements';
import ProfessionalJourney from './components/ProfessionalJourney';
import ContactSection from './components/ContactSection';
import FeaturedProjects from './components/FeaturedProjects';
import TechArsenal from './components/TechArsenal';

import React, { useState, useEffect } from 'react';

// API Configuration
const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your actual API base URL

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
          name: 'Aditya Domle',
          title: 'Full-Stack Developer | Next.js, React, Node.js',
          bio: 'Self-taught Full-Stack Developer from India, specializing in modern web technologies and open-source development. Passionate about building scalable applications with Next.js and contributing to the developer community through open-source projects.',
          location: 'Ngp, Maharashtra, India',
          profileImage: '/api/placeholder/300/300',
          socialLinks: [
            { platform: 'github', url: 'https://github.com' },
            { platform: 'linkedin', url: 'https://linkedin.com' },
            { platform: 'twitter', url: 'https://twitter.com' },
            { platform: 'instagram', url: 'https://instagram.com' }
          ]
        },
        experiences: [
          {
            title: "GSSoC'25",
            role: 'Project Admin/Maintainer',
            period: 'Aug 2025 - Sept 2025',
            description: 'As a Project Admin, I reviewed code, merged pull requests, and communicated with developers, ensuring smooth project workflow and collaboration during GSSoC\'25. My full responsibilities included:',
            responsibilities: [
              'Reviewed code submissions and resolved technical blockers to maintain project quality',
              'Collaborated with fellow open-source developers on project planning and implementation',
              'Designed and implemented UI/UX solutions with modern animation libraries like Framer Motion and GSAP',
              'Managed API integrations and ensured smooth communication across the development team',
              'Mentored contributors and facilitated knowledge sharing within the community',
              'Coordinated pull request reviews and maintained high code quality standards'
            ]
          },
          {
            title: 'Sheryians Coding School',
            role: 'Trainee',
            period: 'May 2025 - Oct 2025',
            description: 'Trainee at Sheryians Coding School, where I learned full-stack technologies and DevOps practices.',
            responsibilities: []
          }
        ],
        technologies: [
          { name: 'JavaScript' },
          { name: 'TypeScript' },
          { name: 'Tailwind' },
          { name: 'SCSS' },
          { name: 'Framer' },
          { name: 'React' },
          { name: 'Redux' },
          { name: 'Next.js' },
          { name: 'Node.js' },
          { name: 'Express' },
          { name: 'MongoDB' },
          { name: 'Supabase' },
          { name: 'Sanity' },
          { name: 'Docker' },
          { name: 'Vercel' },
          { name: 'Git' },
          { name: 'Postman' },
          { name: 'Cloudflare' }
        ],
        projects: [
          {
            name: 'ResearchX',
            description: 'AI-powered research document generator that creates comprehensive research papers using advanced AI models. Features...',
            image: '/api/placeholder/600/300',
            technologies: ['TypeScript', 'Tailwind', 'Next.js'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com'
          },
          {
            name: 'Freshmart Store',
            description: 'Modern grocery store web application with a clean and responsive UI. Built with efficient state management using Redux, featuring...',
            image: '/api/placeholder/600/300',
            technologies: ['Tailwind', 'React', 'Redux'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com'
          }
        ],
        achievements: [
          { title: 'Job Ready Cohort', image: '/api/placeholder/600/400' },
          { title: 'JavaScript Intermediate', image: '/api/placeholder/600/400' }
        ],
        contact: {
          email: 'adityadomle14@gmail.com',
          sourceCodeUrl: 'https://topmate.io',
          message: "Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects and help transform your vision into reality."
        }
      });
    }
  };

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
