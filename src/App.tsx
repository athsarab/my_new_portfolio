import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ExternalLink, GraduationCap } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import WebBackground from './components/WebBackground';
import Navbar from './components/navbar';
import pic1 from './assets/my7.png';
import pic2 from './assets/my2.png';
import dream from './assets/dreem.png';
import shopping from './assets/eStore.jpg';
import bus from './assets/busi.jpeg';
import skillhive from './assets/skillhive.png';

import { Home, User, Book, Briefcase } from 'lucide-react';
import SocialCircle from './components/SocialCircle';


// Tech icons data (place outside your component)
import ReactIcon from './icons/react.svg';
import DartIcon from './icons/icons8-dart.svg';
import JavaScriptIcon from './icons/icons8-javascript.svg';
import TypeScriptIcon from './icons/typescript.svg';
import NodeJsIcon from './icons/nodejs.svg';
import PythonIcon from './icons/icons8-python.svg';
import JavaIcon from './icons/icons8-java.svg';
import DockerIcon from './icons/docker.svg';
import AzureIcon from './icons/azure.svg';
import GitIcon from './icons/git.svg';
import MySQLIcon from './icons/mysql.svg';
import MongoDBIcon from './icons/mongodb.svg';
import FlutterIcon from './icons/flutter.svg';
import LinuxIcon from './icons/spring.svg';
import HTML5Icon from './icons/html.svg';
import CSS3Icon from './icons/css.svg';






//import AndroidIcon from './icons/android.svg';
//import C from './icons/icons8-c++.svg';
/*
import ReactNativeIcon from './icons/react-native.svg';
import AWSIcon from './icons/aws.svg';
import FirebaseIcon from './icons/firebase.svg';

import KubernetesIcon from './icons/kubernetes.svg';
import SassIcon from './icons/sass.svg';
import TailwindIcon from './icons/tailwind.svg';
import GraphQLIcon from './icons/graphql.svg';

*/
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

 // Android: AndroidIcon,
  //C++: C,
  /*
  'React Native': ReactNativeIcon,
  AWS: AWSIcon,
  Firebase: FirebaseIcon,
  Azure: AzureIcon,
  Kubernetes: KubernetesIcon,

  Sass: SassIcon,
  Tailwind: TailwindIcon,
  GraphQL: GraphQLIcon,

  */
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
    img: dream,
    title: 'Dream Destiny',
    tags: ['React', 'Node.js'],
    desc: 'A full-featured Travel management platform with Wether API, Simple chat bot, and user authentication.',
    date: 'April 2025',
    code: '#',
    demo: '#',
  },
  {
    img: skillhive,
    title: 'Skill Hive',
    tags: ['Springboot', 'React'],
    desc: 'A collaborative Post management application with real-time updates, Social media aplication, and team features.',
    date: 'Mar 2025',
    code: '#',
    demo: '#',
  },
  {
    img:shopping,
    title: 'KIYARAA store',
    tags: ['PHP', 'Javascript'],
    desc: 'A responsive online shopping store website with project showcase sections , buy items , add cart options and admin dashboard.',
    date: 'Jan 2024',
    code: '#',
    demo: '#',
  },
  {
    img: bus,
    title: 'Bus management system',
    tags: ['MERN', 'API'],
    desc: 'A web application that manage bus time table , sheet bookings , packages and drivers it helps to pasengers and drivers .',
    date: 'Nov 2024',
    code: '#',
    demo: '#',
  },
  {
    img: '/path-to-project5-image.jpg',
    title: 'Recipe Finder',
    tags: ['PHP', 'Javascript'],
    desc: 'An application that helps users find recipes based on ingredients they have, with nutritional information.',
    date: 'Aug 2023',
    code: '#',
    demo: '#',
  },
  {
    img: '/path-to-project6-image.jpg',
    title: 'SARAA Renters',
    tags: ['Java', 'MySql'],
    desc: 'A comprehensive Wehicle rent web application with tracking vehicles, progress visualization, and goal setting.',
    date: 'May 2024',
    code: '#',
    demo: '#',
  },
  {
    img: '/path-to-project6-image.jpg',
    title: 'Fruit catch game',
    tags: ['Kotlin', 'XML'],
    desc: 'That game developed using kotlin it easy to catch fruits and get scores.',
    date: 'May 2024',
    code: '#',
    demo: '#',
  },
    {
    img: '/path-to-project6-image.jpg',
    title: 'Phone Book',
    tags: ['Kotline', 'MySqlite'],
    desc: 'User can save their mobile numbers .',
    date: 'May 2024',
    code: '#',
    demo: '#',
  },
    {
    img: '/path-to-project6-image.jpg',
    title: 'Space Invaders',
    tags: ['Flutter', 'Dart'],
    desc: 'only mobile interface developed using flutter.',
    date: 'May 2024',
    code: '#',
    demo: '#',
  },
      {
    img: '/path-to-project6-image.jpg',
    title: 'Number Book',
    tags: ['Flutter', 'Dart'],
    desc: 'only mobile app with backend developed using flutter.',
    date: 'May 2024',
    code: '#',
    demo: '#',
  },
    {
    img: '/path-to-project6-image.jpg',
    title: 'Selenium test cases',
    tags: ['API', 'Python'],
    desc: 'Manually written test cases using python.',
    date: 'May 2024',
    code: '#',
    demo: '#',
  },
  
];

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
  {/* Animated background elements - Tailwind only */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 animate-bounce"></div>
    <div className="absolute bottom-10 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl opacity-20 animate-bounce animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-20 animate-bounce animation-delay-4000"></div>
  </div>

  {/* Text content - adjusted for mobile first */}
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
          'I Design Mobile Apps',
          1000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
      />
    </h1>
    <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300">
      Full Stack Developer | Android Enthusiast | UI Magician
    </p>

    <div className="flex flex-wrap gap-3 md:gap-4">
      <button className="magnetic-button bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30 px-6 py-3 rounded-full font-medium">
        View Projects
      </button>
      <button className="magnetic-button bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 px-6 py-3 rounded-full font-medium">
        Get in Touch
      </button>
    </div>
    
    {/* Tech stack badges */}
    <div className="mt-8 md:mt-10 flex flex-wrap gap-2 md:gap-3">
      {['React', 'Node.js', 'Flutter', 'Kotlin', 'TypeScript', 'Figma'].map((tech) => (
        <span key={tech} className="px-3 py-1 bg-gray-800 bg-opacity-60 rounded-full text-xs md:text-sm text-gray-300 border border-gray-700 hover:bg-purple-900 hover:border-purple-400 transition-all">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>

  <SocialCircle />

  {/* Image with floating animation - adjusted for mobile */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="z-10 relative w-full lg:w-auto mt-8 md:mt-12 lg:mt-0 order-3"
  >
    <div className="relative mx-auto w-64 sm:w-80 md:w-96 lg:w-full">
      <img
        src={pic1}
        alt="Athsara"
        className="w-full h-auto max-w-md object-contain rounded-tl-3xl rounded-br-3xl border-4 border-purple-400 border-opacity-30 shadow-2xl hover:shadow-purple-500/50 transition-all duration-500"
      />
      {/* Glow effect */}
      <div className="absolute inset-0 bg-purple-500 rounded-tl-3xl rounded-br-3xl opacity-0 hover:opacity-10 transition-opacity duration-300 -z-10"></div>
    </div>
    
    {/* Floating circles decoration */}
    <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-blue-500 opacity-20 blur-xl -z-10 animate-pulse"></div>
    <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-pink-500 opacity-20 blur-xl -z-10 animate-pulse animation-delay-1000"></div>
  </motion.div>
</section>

{/* About Section */}
<section id="about" className="min-h-screen py-16 px-4 flex items-center justify-center">
  {/* About Me Section */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="w-full max-w-7xl mx-auto" // Reduced from max-w-8xl to max-w-4xl
  >
    <h2 className="text-4xl font-bold mb-12 text-center glow-text">About Me</h2>
    
    <div className="bg-gradient-to-br from-900/30 to-indigo-900/20 backdrop-blur-sm p-8 rounded-xl border border-white/10 relative overflow-hidden shadow-2xl shadow-purple-500/10">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 opacity-20">
        <svg width="300" height="300" viewBox="0 0 200 200">
          <path
            fill="#4F46E5"
            d="M45,-78.6C58.1,-71.4,68.4,-58.3,76.3,-43.8C84.2,-29.3,89.7,-13.6,89.5,0.1C89.3,13.8,83.3,27.6,74.4,39.8C65.5,52,53.7,62.5,40.1,71.2C26.5,79.9,11.3,86.8,-3.5,92.2C-18.3,97.6,-36.6,101.5,-50.8,94.1C-65,86.7,-75.1,68,-80.8,48.9C-86.5,29.8,-87.8,10.3,-84.8,-7.8C-81.8,-25.9,-74.5,-42.5,-63.1,-50.8C-51.7,-59.1,-36.2,-59.1,-22.8,-66.1C-9.5,-73.1,1.8,-87.1,15.4,-87.9C29,-88.7,45,-76.3,45,-78.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h3 
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300"
          >
            My Journey
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base"
          >
Hi! I'm Athsara, a passionate and driven third-year Information Technology undergraduate at SLIIT, specializing in Android development and front-end web development. With a solid foundation in software engineering principles and hands-on experience in full-stack development, I strive to build impactful, user-focused applications that solve real-world problems.

            <br /><br />
Over the past few years, I’ve developed various web and mobile applications—notably, an Online Class Management System and a Task Management App—demonstrating my ability to deliver robust, scalable, and efficient solutions. I enjoy taking ideas from concept to production using modern tools and clean code practices.

            <br /><br />
I'm fluent in both Sinhala and English, allowing me to work seamlessly in multicultural environments and collaborate effectively with diverse teams.

<br /><br />
Currently, I'm actively seeking anouther internship opportunities where I can apply my skills, learn from real-world challenges, and contribute meaningfully to innovative projects. I’m eager to grow as a developer, take on new responsibilities, and be a part of dynamic teams that shape the future of technology.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-3 mt-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-indigo-600/30 border border-indigo-400/30 backdrop-blur-sm"
            >
              <span className="text-indigo-200 text-sm">🏆 10+ Projects</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-purple-600/30 border border-purple-400/30 backdrop-blur-sm"
            >
              <span className="text-purple-200 text-sm">🚀 Fast Learner</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-pink-600/30 border border-pink-400/30 backdrop-blur-sm"
            >
              <span className="text-pink-200 text-sm">💻 Full-Stack Skills</span>
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
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
              <img
                src={pic2}
                alt="Riva"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -left-6 -z-10 w-40 h-40 opacity-60"
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <path
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  d="M50,5 a45,45 0 0,1 0,90 a45,45 0 0,1 0,-90"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
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
          className="bg-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border-l-4 border-indigo-500 md:ml-8"
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

{/* Projects Section */}
<section id="projects" className="min-h-screen py-20 px-4 bg-to-b from-gray-900 to-gray-800">
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-center glow-text">My Projects</h2>
      <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Here are some of my notable projects. Each one represents a unique challenge and learning opportunity.
      </p>
    </motion.div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {visibleProjects.map((project, idx) => (
        <motion.div
          key={project.title + idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 * idx }}
          whileHover={{ y: -10 }}
          className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 backdrop-blur-sm"
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-indigo-600/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <a 
                href={project.code}
                className="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                View Code
              </a>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <div className="flex space-x-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-indigo-600/20 text-indigo-400 text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <p className="text-gray-400 mb-4">{project.desc}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <a href={project.demo} className="text-indigo-400 hover:text-indigo-300 text-sm">Live Demo</a>
              </div>
              <span className="text-xs text-gray-500">{project.date}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    {/* View More Button */}
    {projects.length > 6 && (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-16"
      >
        <motion.button
          onClick={() => setShowAllProjects((v) => !v)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-400 rounded-full hover:bg-indigo-600/20 transition-colors"
        >
          {showAllProjects ? 'Show Less' : 'View All Projects'}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.button>
      </motion.div>
    )}
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
              className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-sm"
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

{/* Enhanced Floating Navigation Bar */}
<nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-800/90 backdrop-blur-md py-3 px-4 rounded-full shadow-xl z-50 border border-gray-700/50 hover:shadow-2xl transition-all duration-300">
  <div className="flex gap-4 md:gap-6">
    <button 
      onClick={() => scrollToSection('hero')} 
      className="text-white/90 hover:text-white flex flex-col items-center group transition-all duration-200"
      aria-label="Home"
    >
      <div className="p-2 rounded-full group-hover:bg-indigo-500/20 transition-all duration-300">
        <Home className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-200" />
      </div>
      <span className="text-xs md:text-sm opacity-0 group-hover:opacity-100 mt-1 transition-opacity duration-300">Home</span>
    </button>
    
    <button 
      onClick={() => scrollToSection('about')} 
      className="text-white/90 hover:text-white flex flex-col items-center group transition-all duration-200"
      aria-label="About"
    >
      <div className="p-2 rounded-full group-hover:bg-blue-500/20 transition-all duration-300">
        <User className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-200" />
      </div>
      <span className="text-xs md:text-sm opacity-0 group-hover:opacity-100 mt-1 transition-opacity duration-300">About</span>
    </button>
    

    
    <button 
      onClick={() => scrollToSection('education')} 
      className="text-white/90 hover:text-white flex flex-col items-center group transition-all duration-200"
      aria-label="Education"
    >
      <div className="p-2 rounded-full group-hover:bg-purple-500/20 transition-all duration-300">
        <GraduationCap className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-200" />
      </div>
      <span className="text-xs md:text-sm opacity-0 group-hover:opacity-100 mt-1 transition-opacity duration-300">Education</span>
    </button>
    
    <button 
      onClick={() => scrollToSection('projects')} 
      className="text-white/90 hover:text-white flex flex-col items-center group transition-all duration-200"
      aria-label="Projects"
    >
      <div className="p-2 rounded-full group-hover:bg-amber-500/20 transition-all duration-300">
        <Briefcase className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-200" />
      </div>
      <span className="text-xs md:text-sm opacity-0 group-hover:opacity-100 mt-1 transition-opacity duration-300">Projects</span>
    </button>

        <button 
      onClick={() => scrollToSection('skill')} 
      className="text-white/90 hover:text-white flex flex-col items-center group transition-all duration-200"
      aria-label="Skills"
    >
      <div className="p-2 rounded-full group-hover:bg-emerald-500/20 transition-all duration-300">
        <Book className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-200" />
      </div>
      <span className="text-xs md:text-sm opacity-0 group-hover:opacity-100 mt-1 transition-opacity duration-300">Skills</span>
    </button>
    
    <button 
      onClick={() => scrollToSection('contact')} 
      className="text-white/90 hover:text-white flex flex-col items-center group transition-all duration-200"
      aria-label="Contact"
    >
      <div className="p-2 rounded-full group-hover:bg-rose-500/20 transition-all duration-300">
        <Mail className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-200" />
      </div>
      <span className="text-xs md:text-sm opacity-0 group-hover:opacity-100 mt-1 transition-opacity duration-300">Contact</span>
    </button>
  </div>
</nav>
    </>
  );
  
}

export default App;