import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Menu, X } from 'lucide-react';
import photo from './assets/image1.jpg'

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Aspiring Full Stack Developer | Passionate About Building Scalable Web Applications';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vignesh B
            </h1>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {['about', 'education', 'skills', 'projects', 'certificates', 'resume', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="hover:text-purple-400 transition-colors capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-purple-500/20">
              <ul className="space-y-2">
                {['about', 'education', 'skills', 'projects', 'certificates', 'resume', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left py-2 hover:text-purple-400 transition-colors capitalize"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Vignesh B
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 font-mono">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
          <div className="mt-8 space-x-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/20 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1">
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
              src={photo} 
              alt="Portrait of Vignesh B" 
              className="w-72 h-72 object-cover rounded-full"
            />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Hi! I'm <span className="text-purple-400 font-semibold">Vignesh B</span>, a passionate and dedicated Full Stack Developer with a strong foundation in both frontend and backend technologies. Currently pursuing my Bachelor's degree in ECE from SA Engineering College, I'm always curious to explore new ways to solve real-world problems through code.
              </p>
              <p>
                I specialize in building full-stack web applications using <span className="text-pink-400 font-semibold">HTML, CSS, JavaScript, React, Node.js, and MongoDB</span>. I've created projects like a construction website (Solid Build Construction) and an adventure travel agency website (Outdoor Adventures) using WordPress.
              </p>
              <p>
                I'm a fast learner and team player who loves coding clean, scalable, and efficient solutions. With certifications in Java from <span className="text-purple-400 font-semibold">NPTEL</span> and Full Stack Java from <span className="text-purple-400 font-semibold">Wipro</span>, I aim to contribute to impactful digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SSLC - 10th Grade",
                school: "JAYA MATRICULATION SCHOOL",
                year: "2019 - 2020",
                grade: "66%"
              },
              {
                title: "HSC - 12th Grade",
                school: "JAYA MATRICULATION SCHOOL",
                year: "2020 - 2021",
                grade: "77%"
              },
              {
                title: "Bachelor's Degree - B.E. ECE",
                school: "SA ENGINEERING COLLEGE",
                year: "2021 - 2025",
                grade: "7.7 CGPA"
              }
            ].map((edu, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{edu.title}</h3>
                <p className="text-gray-300 mb-2"><strong>School:</strong> {edu.school}</p>
                <p className="text-gray-300 mb-2"><strong>Year:</strong> {edu.year}</p>
                <p className="text-gray-300"><strong>Grade:</strong> {edu.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React"] },
              { category: "Backend", skills: ["Node.js", "Express"] },
              { category: "Database", skills: ["MongoDB", "MySQL"] },
              { category: "Tools", skills: ["Git", "GitHub", "VS Code", "WordPress"] }
            ].map((skillGroup, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Solid Build Construction",
                description: "A responsive front-end website for a construction company. Built with HTML, CSS, JavaScript. Features animation, showcase, testimonials.",
                tech: "HTML, CSS, JavaScript",
                github: "https://vignesh6381.github.io/project1/",
                live: null
              },
              {
                title: "Outdoor Adventures",
                description: "WordPress website for an adventure tourism agency with dynamic pages and a visual-focused design using Elementor.",
                tech: "WordPress, Elementor",
                github: null,
                live: "#"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-pink-400 font-semibold mb-6">Tech: {project.tech}</p>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github size={16} />
                      <span>View Project</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 border border-purple-500 hover:bg-purple-500/20 px-4 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certificates
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Programming in Java",
                issuer: "NPTEL",
                description: "This certification verifies a strong foundation in Java programming including OOP, data structures, and exception handling."
              },
              {
                title: "Java Full Stack Developer",
                issuer: "Wipro",
                description: "Training on full stack Java development using Spring Boot and front-end frameworks. Includes real-world project work."
              }
            ].map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold mb-2 text-purple-400">{cert.title}</h3>
                <p className="text-pink-400 font-semibold mb-4">Issued by: {cert.issuer}</p>
                <p className="text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg"
          >
            <Download size={20} />
            <span>Download My Resume</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="text-purple-400" size={20} />
                  <span>vigneshbala6381@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <Linkedin className="text-purple-400" size={20} />
                  <a href="https://linkedin.com/in/vignesh-b-030128276" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <Github className="text-purple-400" size={20} />
                  <a href="https://github.com/Vignesh6381" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-purple-900/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-purple-900/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-purple-900/50 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
              />
              <button
                onClick={() => window.open('mailto:vigneshbala6381@gmail.com')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 border-t border-purple-500/20">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2025 Vignesh B. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;