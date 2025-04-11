import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import WebBackground from './components/WebBackground';
import pic1 from './assets/my2.png';
import { Home, User, Book, Briefcase } from 'lucide-react';


// Tech icons data (place outside your component)
//import ReactIcon from './icons/react.svg';
import DartIcon from './icons/icons8-dart.svg';
import JavaScriptIcon from './icons/icons8-javascript.svg';
//import TypeScriptIcon from './icons/typescript.svg';
//import NodeJsIcon from './icons/nodejs.svg';
import PythonIcon from './icons/icons8-python.svg';
import JavaIcon from './icons/icons8-java.svg';
//import AndroidIcon from './icons/android.svg';
//import C from './icons/icons8-c++.svg';
/*
import ReactNativeIcon from './icons/react-native.svg';
import FlutterIcon from './icons/flutter.svg';
import AWSIcon from './icons/aws.svg';
import FirebaseIcon from './icons/firebase.svg';
import AzureIcon from './icons/azure.svg';
import DockerIcon from './icons/docker.svg';
import KubernetesIcon from './icons/kubernetes.svg';
import GitIcon from './icons/git.svg';
import HTML5Icon from './icons/icons8-html-5.svg';
import CSS3Icon from './icons/css3.svg';
import SassIcon from './icons/sass.svg';
import TailwindIcon from './icons/tailwind.svg';
import GraphQLIcon from './icons/graphql.svg';
import MySQLIcon from './icons/mysql.svg';
import MongoDBIcon from './icons/mongodb.svg';
import LinuxIcon from './icons/linux.svg';
*/
const techIcons = {
  //React: ReactIcon,
  Dart: DartIcon,
  
  JavaScript: JavaScriptIcon,
 // TypeScript: TypeScriptIcon,
 // 'Node.js': NodeJsIcon,
  Python: PythonIcon,
  Java: JavaIcon,
 // Android: AndroidIcon,
  //C++: C,
  /*
  'React Native': ReactNativeIcon,
  Flutter: FlutterIcon,
  AWS: AWSIcon,
  Firebase: FirebaseIcon,
  Azure: AzureIcon,
  Docker: DockerIcon,
  Kubernetes: KubernetesIcon,
  Git: GitIcon,
  HTML5: HTML5Icon,
  CSS3: CSS3Icon,
  Sass: SassIcon,
  Tailwind: TailwindIcon,
  GraphQL: GraphQLIcon,
  MySQL: MySQLIcon,
  MongoDB: MongoDBIcon,
  Linux: LinuxIcon,
  */
};

function TechIcon({ name, size = 32 }: { name: keyof typeof techIcons; size?: number }) {
  return (
    <div title={name} style={{ fontSize: size }}>
      <img src={techIcons[name]} alt={name} style={{ width: size, height: size }} />
    </div>
  );
}

function App() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100; // Offset for fixed nav bar
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>   
      <CustomCursor />
      <WebBackground />
      
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-between relative px-4 md:px-4 lg:px-12">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left z-100 max-w-xlg mb-52"
          >
            <h1 className="text-6xl font-bold mb-6 text-gray-100">
              <TypeAnimation
                sequence={[
                  'Hi, I\'m Athsara',
                  1000,
                  'I Create Digital Magic',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="glow-text"
              />
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Full Stack Developer | Android Enthusiast | UI Magician
            </p>
            <div className="flex gap-4">
              <button className="magnetic-button">View Projects</button>
              <button className="magnetic-button">Get in Touch</button>
            </div>
          </motion.div>

          {/* Add your picture here */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <img
              src={pic1}
              alt="Your Name"
              className="w-full h-auto max-w-lg object-contain" // Responsive and fits the page
              />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20 px-4">
  {/* About Me Section */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="max-w-6xl mx-auto mb-52" // mb-32 = 8rem
    >
    <h2 className="text-4xl font-bold mb-12 text-center glow-text">About Me</h2>
    
    <div className="glass-card p-8  relative overflow-hidden">
      {/* Decorative SVG elements */}
      <div className="absolute -top-20 -right-20 opacity-20">
        <svg width="300" height="300" viewBox="0 0 200 200">
          <path
            fill="#4F46E5"
            d="M45,-78.6C58.1,-71.4,68.4,-58.3,76.3,-43.8C84.2,-29.3,89.7,-13.6,89.5,0.1C89.3,13.8,83.3,27.6,74.4,39.8C65.5,52,53.7,62.5,40.1,71.2C26.5,79.9,11.3,86.8,-3.5,92.2C-18.3,97.6,-36.6,101.5,-50.8,94.1C-65,86.7,-75.1,68,-80.8,48.9C-86.5,29.8,-87.8,10.3,-84.8,-7.8C-81.8,-25.9,-74.5,-42.5,-63.1,-50.8C-51.7,-59.1,-36.2,-59.1,-22.8,-66.1C-9.5,-73.1,1.8,-87.1,15.4,-87.9C29,-88.7,45,-76.3,45,-78.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h3 
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-2xl font-semibold mb-4"
          >
            My Journey
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-300 leading-relaxed mb-6"
          >
            With over 5 years of experience in software development, I've worked on
            projects ranging from mobile apps to enterprise solutions. My passion
            lies in creating beautiful, intuitive interfaces that make complex
            problems simple.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-indigo-600/20 border border-indigo-500"
            >
              <span className="text-indigo-300">🏆 10+ Projects</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500"
            >
              <span className="text-purple-300">🚀 Fast Delivery</span>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/10">
              {/* Replace with your actual image or SVG */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <pattern id="image" x="0" y="0" width="1" height="1">
                    <image x="0" y="0" width="200" height="200" xlinkHref="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" />
                  </pattern>
                </defs>
                <circle cx="100" cy="100" r="90" fill="url(#image)" />
              </svg>
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 -z-10"
            >
              <svg width="120" height="120" viewBox="0 0 100 100">
                <path
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  d="M50,5 a45,45 0 0,1 0,90 a45,45 0 0,1 0,-90"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
  </section>

  {/* Experience Section */}
<section id="experience" className="min-h-screen py-20 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl font-bold mb-4 text-white">Work Experience</h2>
      <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
    </motion.div>

    {/* Experience Timeline */}
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-indigo-500/30 transform -translate-x-1/2 hidden md:block"></div>

      {/* Experience Item - Cloud ARM */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-12 pl-10 md:pl-0"
      >
        {/* Timeline dot */}
        <div className="absolute left-0 md:left-1/2 h-5 w-5 rounded-full bg-indigo-500 border-4 border-indigo-300 transform -translate-x-1/2 -translate-y-1 z-10"></div>

        {/* Animated card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border-l-4 border-indigo-500 md:ml-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Intern Software Engineer</h3>
              <p className="text-indigo-300">CLOUD ARM – Galle</p>
            </div>
            <div className="mt-2 md:mt-0 px-3 py-1 bg-indigo-500/20 rounded-full">
              <p className="text-indigo-100 text-sm">June 2024 – Feb 2025</p>
            </div>
          </div>

          {/* Role Cards */}
          <div className="grid gap-4 mt-6">
            {/* ERP Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-700/40 p-4 rounded-lg border border-gray-600/50"
            >
              <div className="flex items-start">
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                  className="bg-indigo-500/20 p-2 rounded-lg mr-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">ERP Systems</h4>
                  <p className="text-gray-300 text-sm">Implemented systems for 3 companies, managing complex business data</p>
                </div>
              </div>
            </motion.div>

            {/* Flutter Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-700/40 p-4 rounded-lg border border-gray-600/50"
            >
              <div className="flex items-start">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="bg-indigo-500/20 p-2 rounded-lg mr-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Flutter Development</h4>
                  <p className="text-gray-300 text-sm">Built user-friendly interfaces with innovative design solutions</p>
                </div>
              </div>
            </motion.div>

            {/* Testing Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-700/40 p-4 rounded-lg border border-gray-600/50"
            >
              <div className="flex items-start">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="bg-indigo-500/20 p-2 rounded-lg mr-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Automation Testing</h4>
                  <p className="text-gray-300 text-sm">Developed Selenium test cases ensuring system reliability</p>
                </div>
              </div>
            </motion.div>

            {/* Dashboard Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-700/40 p-4 rounded-lg border border-gray-600/50"
            >
              <div className="flex items-start">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="bg-indigo-500/20 p-2 rounded-lg mr-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Admin Dashboard</h4>
                  <p className="text-gray-300 text-sm">Built Next.js dashboard with real-time data monitoring</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Skills Cloud */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-16"
    >
      <h3 className="text-2xl font-semibold text-center text-white mb-8">Technologies Worked With</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {['ERP Systems', 'Flutter', 'Dart', 'Selenium', 'Next.js', 'React', 
          'System Integration', 'UI/UX Design', 'Automation', 'Data Management',
          'JavaScript', 'TypeScript', 'Testing', 'Mobile Development'].map((skill, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
            className="px-4 py-2 bg-gray-700/40 rounded-full border border-gray-600 text-sm cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>


{/* Education Section */}
<section id="education" className="min-h-screen py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16 text-center"
    >

      <h2 className="text-4xl font-bold mb-12 text-center glow-text">My Education</h2>
      <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
    </motion.div>

    {/* Timeline-style education entries */}
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 h-full w-1 bg-indigo-500/30 transform -translate-x-1/2 hidden md:block"></div>
      
      {/* Education Item 1 - SLIIT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:flex justify-center items-center w-full"
      >
        <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
          <div className="flex items-center md:justify-end">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="bg-indigo-600 p-3 rounded-full shadow-lg mr-4"
            >
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 3L1 9l11 6 9-4.91v5.41h2V9L12 3z" />
  <path d="M11 12.84L3.16 9 11 5.16 18.84 9 11 12.84zM11 14l-8-4v5h2v-2.24l6 3.27 6-3.27V15h2v-5l-8 4z" opacity=".3"/>
</svg>

            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-white">Bachelor of Science in IT</h3>
              <p className="text-indigo-300">2021 - Present</p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block w-1/2"></div>
        
        <div className="md:w-1/2 md:pl-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/70 p-6 rounded-lg border-l-4 border-indigo-500 shadow-lg backdrop-blur-sm"
          >
            <h4 className="text-lg font-medium text-white mb-2">Sri Lanka Institute of Information Technology (SLIIT)</h4>
            <p className="text-gray-300 mb-2">Specializing in Information Technology</p>
            <p className="text-gray-400">Full-stack development, project management, and advanced software engineering principles.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Education Item 2 - St. Thomas College */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 md:flex justify-center items-center w-full"
      >
        <div className="hidden md:block md:w-1/2 md:pr-12"></div>
        
        <div className="md:w-1/2 md:pl-12">
          <div className="flex items-center md:hidden mb-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="bg-indigo-600 p-3 rounded-full shadow-lg mr-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-white">Secondary Education</h3>
              <p className="text-indigo-300">2013 - 2021</p>
            </div>
          </div>
          
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/70 p-6 rounded-lg border-l-4 border-indigo-500 shadow-lg backdrop-blur-sm"
          >
            <h4 className="text-lg font-medium text-white mb-2">Thelijjawila Centrel Collage, Matara</h4>
            <p className="text-gray-300 mb-2">Advanced Level - Physical Science Stream</p>
            <p className="text-gray-400">Completed secondary education with focus on mathematics and science subjects.</p>
          </motion.div>
        </div>
        
        <div className="md:w-1/2 md:pr-12 md:text-right mt-4 md:mt-0 hidden md:block">
          <div className="flex items-center md:justify-end">
            <div>
              <h3 className="text-xl font-semibold text-white">Secondary Education</h3>
              <p className="text-indigo-300">2012 - 2020</p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="bg-indigo-600 p-3 rounded-full shadow-lg ml-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Additional decorative elements */}
    <motion.div 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.4 }}
      className="flex justify-center mt-12"
    >
      <div className="text-center max-w-md">
        <motion.div 
          whileHover={{ rotate: 10 }}
          className="bg-indigo-600/20 p-4 rounded-full inline-block mb-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </motion.div>
        <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
        <p className="text-gray-400">I'm constantly expanding my knowledge through online courses, workshops, and personal projects.</p>
      </div>
    </motion.div>
  </div>
</section>


  <section id="skill" className="min-h-screen py-20 px-4">


  {/* Skills Section */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="max-w-7xl mx-auto"
  >
    <h2 className="text-4xl font-bold mb-12 text-center glow-text">My Skills</h2>
    
    <div className="glass-card p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <TechIcon name={Object.keys(techIcons)[i % Object.keys(techIcons).length] as keyof typeof techIcons} size={24} />
          </motion.div>
        ))}
      </div>
      
      <div className="relative z-10">
        <motion.h3 
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-2xl font-semibold mb-8 text-center"
        >
          Technologies I Work With
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.entries(techIcons).map(([name, icon]) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
            >
              
              <div className="text-4xl mb-2">
                <img src={icon} alt={name} style={{ width: 32, height: 32 }} />
              </div>
              <p className="font-medium">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
  </motion.div>
  
</section>


        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center glow-text">Get in Touch</h2>
            <div className="glass-card p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                  <p className="text-gray-300 mb-6">
                    I'm always open to new opportunities and interesting projects.
                    Feel free to reach out!
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5"
                    >
                      <Mail className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-[rgb(var(--color-accent))] outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-[rgb(var(--color-accent))] outline-none"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-[rgb(var(--color-accent))] outline-none"
                  ></textarea>
                  <button className="magnetic-button w-full">Send Message</button>
                </form>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

       {/* Floating Icon Bar */}
       <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-lg py-4 px-6 rounded-full shadow-lg z-50">
        <div className="flex gap-6">
          <button onClick={() => scrollToSection('hero')} className="text-white flex flex-col items-center">
            <Home className="w-6 h-6" />
            <span className="text-sm">Home</span>
          </button>
          <button onClick={() => scrollToSection('about')} className="text-white flex flex-col items-center">
            <User className="w-6 h-6" />
            <span className="text-sm">About</span>
          </button>
          <button onClick={() => scrollToSection('skill')} className="text-white flex flex-col items-center">
            <Book className="w-6 h-6" />
            <span className="text-sm">Education</span>
          </button>
          <button onClick={() => scrollToSection('education')} className="text-white flex flex-col items-center">
            <Book className="w-6 h-6" />
            <span className="text-sm">Education</span>
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-white flex flex-col items-center">
            <Briefcase className="w-6 h-6" />
            <span className="text-sm">Projects</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-white flex flex-col items-center">
            <Mail className="w-6 h-6" />
            <span className="text-sm">Contact</span>
          </button>
        </div>
      </nav>
    </>
  );
  
}

export default App;