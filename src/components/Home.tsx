import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ExternalLink, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCursor from './CustomCursor';
import WebBackground from './WebBackground';
import Navbar from './navbar';
import pic1 from '../assets/my7.png';
import pic2 from '../assets/my2.png';
import dream from '../assets/dreem.png';
import shopping from '../assets/eStore.jpg';
import bus from '../assets/busi.jpeg';
import skillhive from '../assets/skillhive.png';
import { Home as HomeIcon, User, Book, Briefcase } from 'lucide-react';
import SocialCircle from './SocialCircle';

// Tech icons imports
import ReactIcon from '../icons/react.svg';
import DartIcon from '../icons/icons8-dart.svg';
import JavaScriptIcon from '../icons/icons8-javascript.svg';
import TypeScriptIcon from '../icons/typescript.svg';
import NodeJsIcon from '../icons/nodejs.svg';
import PythonIcon from '../icons/icons8-python.svg';
import JavaIcon from '../icons/icons8-java.svg';
import DockerIcon from '../icons/docker.svg';
import AzureIcon from '../icons/azure.svg';
import GitIcon from '../icons/git.svg';
import MySQLIcon from '../icons/mysql.svg';
import MongoDBIcon from '../icons/mongodb.svg';
import FlutterIcon from '../icons/flutter.svg';
import LinuxIcon from '../icons/spring.svg';
import HTML5Icon from '../icons/html.svg';
import CSS3Icon from '../icons/css.svg';

const techIcons = {
  React: ReactIcon,
  Dart: DartIcon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  'Node.js': NodeJsIcon,
  Python: PythonIcon,
  Java: JavaIcon,
  Docker: DockerIcon,
  Flutter: FlutterIcon,
  MySQL: MySQLIcon,
  MongoDB: MongoDBIcon,
  Git: GitIcon,
  Azure: AzureIcon,
  Springboot: LinuxIcon,
  HTML5: HTML5Icon,
  CSS3: CSS3Icon,
};

function TechIcon({ name, size = 32 }: { name: keyof typeof techIcons; size?: number }) {
  return (
    <div title={name} style={{ fontSize: size }}>
      <img src={techIcons[name]} alt={name} style={{ width: size, height: size }} />
    </div>
  );
}

// Project data array
const projects = [
  {
    title: 'DreamSpace Property Management',
    description: 'Full-stack property listing and management system with real-time messaging',
    image: dream,
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/athsarab',
    demo: 'https://dreamspace.demo',
  },
  {
    title: 'E-Store E-commerce Platform',
    description: 'Modern e-commerce platform with payment integration and admin dashboard',
    image: shopping,
    tags: ['React', 'Express', 'MySQL', 'Stripe'],
    github: 'https://github.com/athsarab',
    demo: 'https://estore.demo',
  },
  {
    title: 'Business Management Suite',
    description: 'Comprehensive business management tool with analytics and reporting',
    image: bus,
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/athsarab',
    demo: 'https://business.demo',
  },
  {
    title: 'SkillHive Learning Platform',
    description: 'Interactive learning platform with course management and progress tracking',
    image: skillhive,
    tags: ['React', 'Firebase', 'Tailwind', 'Redux'],
    github: 'https://github.com/athsarab',
    demo: 'https://skillhive.demo',
  },
];

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

  return (
    <>   
      <CustomCursor />
      <WebBackground />
      <Navbar/>
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col lg:flex-row items-center justify-between relative px-4 md:px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 animate-bounce"></div>
            <div className="absolute bottom-10 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl opacity-20 animate-bounce animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-20 animate-bounce animation-delay-4000"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left z-10 w-full lg:max-w-2xl mt-20 lg:mt-0 lg:mb-0 order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-gray-100">
              <TypeAnimation
                sequence={[
                  'Hi, I\'m Athsara',
                  1000,
                  'I Create Digital Magic',
                  1000,
                  'I Build Web Experiences',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-300 leading-relaxed">
              Software Engineering student passionate about building modern web applications
              and solving real-world problems with code.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-purple-600 rounded-full text-white font-semibold hover:bg-purple-600/20 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </motion.button>
            </div>

            <div className="flex gap-4 sm:gap-6 mt-6 md:mt-8 justify-start">
              <motion.a
                href="https://github.com/athsarab"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/athsara-bimalka"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href="mailto:athsarabimalka@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={28} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="z-10 order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={pic1}
                alt="Athsara Bimalka"
                className="relative w-full h-full object-cover rounded-full border-4 border-purple-600/30 shadow-2xl"
              />
            </div>
          </motion.div>

          <SocialCircle/>
        </section>

        {/* Blog CTA Section */}
        <section className="py-12 px-4 md:px-6 lg:px-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Check Out My Latest Blog Post
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Learn how I deployed my first Node.js backend with image uploads on Render, 
                fixing CORS errors, disk storage issues, and more.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                <Book size={20} />
                Read My Blog
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Rest of the sections would continue here - Projects, Skills, Education, Contact */}
        {/* For brevity, I'm showing the structure. Your existing App.tsx content goes here */}
        
        {/* Projects Section Placeholder */}
        <section id="projects" className="py-20 px-4 md:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
              Featured Projects
            </motion.h2>
            {/* Projects grid here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-600/20 rounded-full text-xs text-purple-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add your other sections here: Skills, Education, Contact */}
      </div>
    </>
  );
};

export default Home;
