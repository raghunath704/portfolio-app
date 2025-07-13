import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Server, Smartphone, ExternalLink, Star, GitFork, Calendar, User, BookOpen, Award, Coffee } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Java', level: 90, icon: '⚛️' },
    { name: 'SpringBoot', level: 80, icon: '⚛️' },
    { name: 'Microservices', level: 70, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'MongoDB', level: 70, icon: '🍃' },
    { name: 'SQL', level: 80, icon: '🗃️' },
    { name: 'Git', level: 85, icon: '📚' },
    { name: 'Docker', level: 65, icon: '🐳' }
  ];

  const projects = [
    {
      title: "SumAI - Article Summarizer",
      description: "An AI-powered web app that condenses lengthy articles into clear and concise summaries. Built with a modern React frontend and integrated with a summarization API.",
      tech: ["React", "Redux Toolkit", "Vite", "Tailwind CSS"],
      github: "https://github.com/raghunath704/SumAI",
      live: "#",
    },
    {
      title: "E-Commerce Backend",
      description: "A comprehensive backend system for an online store, featuring product and category management, shopping cart functionality, user authentication, and order processing.",
      tech: ["Spring Boot", "Java", "MySQL", "Spring Security", "JWT"],
      github: "https://github.com/raghunath704/backendproject",
      live: "#",
    },
    {
      title: "Blogging Platform API",
      description: "A robust RESTful API for a blogging application. Supports full CRUD operations for posts, user management with roles, and content categorization.",
      tech: ["Spring Boot", "Java", "MySQL", "Spring Security", "JWT"],
      github: "https://github.com/raghunath704/BlogApp",
      live: "#",
    },
    {
      title: "GymX - Gym Management System",
      description: "A backend service for a gym, designed to handle user registrations, manage memberships, and define user roles (admin, member) for secure access.",
      tech: ["Spring Boot", "Java", "MySQL", "Spring Security"],
      github: "https://github.com/raghunath704/GymX",
      live: "#",
    },
    {
      title: "Dating App Backend",
      description: "The server-side logic for a dating application, responsible for managing user profiles, handling matching algorithms, and facilitating user interactions.",
      tech: ["Spring Boot", "Java", "MySQL", "JPA"],
      github: "https://github.com/raghunath704/DatingApp",
      live: "#",
    }
  ];

  const experiences = [
    {
      title: "Softwere Engineer",
      company: "Capgemini",
      period: "2024 - Present",
      description: "Leading development of scalable web applications using React and Node.js"
    },
    {
      title: "Software Engineer Intern",
      company: "Desi QNA",
      period: "2023 - 2023",
      description: "Developed and maintained multiple client projects with modern web technologies"
    },
  ];

  const NavItem = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveSection(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeSection === id 
          ? 'bg-black/30 border border-white/20 text-white shadow-lg' 
          : 'text-white/70 hover:text-white hover:bg-black/20 hover:border hover:border-white/10'
      }`}
    >
      <Icon size={16} />
      <span className="hidden md:block">{label}</span>
    </button>
  );

  const GlassCard = ({ children, className = "", delay = 0 }) => (
    <div 
      className={`backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-6 shadow-2xl transition-all duration-700 hover:bg-black/30 hover:shadow-3xl hover:scale-105 hover:border-white/20 ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease-out',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }}
    >
      {children}
    </div>
  );

  const SkillBar = ({ skill, delay }) => (
    <div className="mb-4" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium flex items-center gap-2">
          <span>{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-white/70">{skill.level}%</span>
      </div>
      <div className="w-full bg-black/30 rounded-full h-2 border border-white/10">
        <div 
          className="bg-gradient-to-r from-white via-gray-300 to-gray-400 h-2 rounded-full transition-all duration-1000 ease-out shadow-lg"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
          }}
        />
      </div>
    </div>
  );

  const ProjectCard = ({ project, delay }) => (
    <GlassCard delay={delay} className="group flex flex-col h-full">
        <div className="flex-grow">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                        className="text-white/70 hover:text-white transition-colors">
                        <Github size={18} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" 
                        className="text-white/70 hover:text-white transition-colors">
                        <ExternalLink size={18} />
                    </a>
                </div>
            </div>
            <p className="text-white/80 mb-4">{project.description}</p>
        </div>
        <div className="flex-shrink-0">
            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-black/40 border border-white/20 rounded-full text-sm text-white">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </GlassCard>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-8">
            <GlassCard className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-black via-gray-800 to-gray-900 border-2 border-white/20 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                RD
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Raghunath Das
              </h1>
              <p className="text-xl text-white/80 mb-6">
                Backend Developer
              </p>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
                Passionate about creating innovative web solutions and turning ideas into reality. 
                Experienced in modern web technologies with a focus on user experience and performance.
              </p>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard delay={200} className="text-center group">
                <Code className="mx-auto mb-4 text-white group-hover:text-gray-300 transition-colors" size={48} />
                <h3 className="text-xl font-bold text-white mb-2">Frontend</h3>
                <p className="text-white/70">React, JavaScript</p>
              </GlassCard>
              <GlassCard delay={400} className="text-center group">
                <Server className="mx-auto mb-4 text-white group-hover:text-gray-300 transition-colors" size={48} />
                <h3 className="text-xl font-bold text-white mb-2">Backend</h3>
                <p className="text-white/70">SpringBoot, Node.js, Express</p>
              </GlassCard>
              <GlassCard delay={600} className="text-center group">
                <Database className="mx-auto mb-4 text-white group-hover:text-gray-300 transition-colors" size={48} />
                <h3 className="text-xl font-bold text-white mb-2">Database</h3>
                <p className="text-white/70">MongoDB, PostgreSQL, Azure</p>
              </GlassCard>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-8">
            <GlassCard>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Skills & Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, idx) => (
                  <SkillBar key={skill.name} skill={skill} delay={idx * 100} />
                ))}
              </div>
            </GlassCard>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Projects', value: '10+', icon: Code },
                { name: 'Experience', value: '1.5+ Years', icon: Calendar },
                { name: 'Certifications', value: '5+', icon: Award }
              ].map((stat, idx) => (
                <GlassCard key={stat.name} delay={idx * 150} className="text-center group">
                  <stat.icon className="mx-auto mb-2 text-white group-hover:text-gray-300 transition-colors" size={32} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/70">{stat.name}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        );

      case 'projects':
        return (
            <div className="space-y-8">
                <GlassCard>
                    <h2 className="text-3xl font-bold text-white mb-2 text-center">Featured Projects</h2>
                    <p className="text-white/70 text-center">A selection of my recent work and contributions.</p>
                </GlassCard>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.title} project={project} delay={idx * 150} />
                    ))}
                </div>
            </div>
        );

    case 'experience':
        return (
          <div className="space-y-8">
            <GlassCard>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Work Experience</h2>
            </GlassCard>
            
            <div className="relative border-l-2 border-white/10 pl-8 md:pl-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative mb-12">
                  <div className="absolute -left-[50px] md:-left-[66px] top-1 flex items-center justify-center">
                    <div className="absolute w-5 h-5 bg-white rounded-full opacity-20 animate-ping"></div>
                    <div className="w-4 h-4 bg-gray-900 rounded-full border-2 border-white"></div>
                  </div>

                  <GlassCard delay={idx * 150} className="ml-4">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-white/60 mt-1 sm:mt-0">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="font-semibold text-blue-300 mb-3 text-lg">{exp.company}</p>
                    <p className="text-white/80 leading-relaxed">
                      {exp.description}
                    </p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-8">
            <GlassCard>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Get In Touch</h2>
              <p className="text-white/70 text-center mb-8">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="mailto:raghunath.das@example.com" 
                   className="flex items-center gap-4 p-4 bg-black/30 border border-white/10 rounded-lg hover:bg-black/40 hover:border-white/20 transition-all">
                  <Mail className="text-white" size={24} />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-white/70">raghunathdas704@gmail.com</div>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/raghunathdas/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 bg-black/30 border border-white/10 rounded-lg hover:bg-black/40 hover:border-white/20 transition-all">
                  <Linkedin className="text-white" size={24} />
                  <div>
                    <div className="text-white font-medium">LinkedIn</div>
                    <div className="text-white/70">raghunathdas</div>
                  </div>
                </a>
                
                <a href="https://github.com/raghunath704" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 bg-black/30 border border-white/10 rounded-lg hover:bg-black/40 hover:border-white/20 transition-all">
                  <Github className="text-white" size={24} />
                  <div>
                    <div className="text-white font-medium">GitHub</div>
                    <div className="text-white/70">raghunath704</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-black/30 border border-white/10 rounded-lg">
                  <MapPin className="text-white" size={24} />
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-white/70">India</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden flex flex-col">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gray-400/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-white/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-300/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center justify-center md:justify-between">
              <div className="hidden md:block text-white font-bold text-xl">Portfolio</div>
              <div className="flex gap-2">
                <NavItem id="home" label="Home" icon={User} />
                <NavItem id="skills" label="Skills" icon={Code} />
                <NavItem id="projects" label="Projects" icon={BookOpen} />
                <NavItem id="experience" label="Experience" icon={Coffee} />
                <NavItem id="contact" label="Contact" icon={Mail} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {/* === CHANGE HERE (padding-bottom adjusted) === */}
      <main className="flex-grow pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      {/* === CHANGE HERE (removed 'fixed' and related classes) === */}
      <footer className="w-full p-6 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="text-white/70 text-sm">
                © 2025 Raghunath Das. All rights reserved.
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/raghunath704" target="_blank" rel="noopener noreferrer" 
                   className="text-white/70 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/raghunathdas/" target="_blank" rel="noopener noreferrer" 
                   className="text-white/70 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;