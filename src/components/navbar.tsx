import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - windowHeight;
      const progress = (scrollTop / totalScroll) * 100;
      
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Scroll progress bar */}
      <div 
        className="h-1 bg-gradient-to-r from-purple-500 to-blue-500" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Athsara Bimalka
            </span>
            <span className="hidden md:inline-block h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"></span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-300 hover:text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;