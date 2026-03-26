import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import WebBackground from './components/WebBackground';
import Navbar from './components/navbar';
import pic1 from './assets/my7.png';
import pic2 from './assets/my2.png';
import shopping from './assets/eStore.jpg';
import busManagementSystem from './assets/bus managemnt system.png';
import cartEat from './assets/cart eat.png';
import dailyExpencesTrackingApp from './assets/daily expences tracking app.png';
import foodCatcherMobileGame from './assets/food catcher mobile game.png';
import hangManGame from './assets/hang man game.png';
import landBidAndSelling from './assets/land bid and selling.png';
import numberBook from './assets/number book.png';
import papayaPulze from './assets/papayapulze.png';
import preshadiDancingClass from './assets/preshadi dancing class.png';
import resipesManagementSystem from './assets/Resipes management system.png';
import selaniumTestCases from './assets/selanium test cases.png';
import skillShareingSystem from './assets/skill shareing system.png';
import travelManagementSystem from './assets/travel management system.png';
import trustWorkers from './assets/Trust workers.png';
import vehicleRentalSystem from './assets/vehicle rental system.png';
import vidunaClass from './assets/viduna class.png';

import { Home, User, Book, Briefcase } from 'lucide-react';
import SocialCircle from './components/SocialCircle';
import ProjectShowcase3D from './components/ProjectShowcase3D';


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
    img: busManagementSystem,
    title: 'Bus Managemnt System',
    tags: ['Web App', 'Management'],
    desc: 'Bus operations system for routes, schedules, and passenger workflow management.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: cartEat,
    title: 'Cart Eats',
    tags: ['Web App', 'Food'],
    desc: 'A mobile food discovery app built in Flutter, offering a smooth, interactive UI to locate and browse local street food carts.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: dailyExpencesTrackingApp,
    title: 'Daily Pay Track',
    tags: ['Productivity', 'Finance'],
    desc: 'A practical Flutter app empowering daily wage workers to easily manage their income, track daily expenses, and monitor their savings.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: foodCatcherMobileGame,
    title: 'Food Catcher Mobile Game',
    tags: ['Game', 'Mobile'],
    desc: 'An engaging Kotlin-based Android arcade game featuring a fruit-catching frog, obstacle avoidance mechanics, and high-score tracking.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: hangManGame,
    title: 'Python Hangman',
    tags: ['Game', 'Web'],
    desc: 'The classic word-guessing game built in Python, featuring a clean and interactive graphical user interface.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: landBidAndSelling,
    title: 'Land Bid System',
    tags: ['Marketplace', 'Web'],
    desc: 'An interactive real estate platform that connects buyers and sellers to place bids, negotiate, and finalize land auctions.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: numberBook,
    title: 'Number Book',
    tags: ['Mobile', 'Utility'],
    desc: 'Contact management app for storing and managing phone records.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: papayaPulze,
    title: 'Papaya Pulse',
    tags: ['Brand', 'Web'],
    desc: 'An advanced AI-powered app utilizing ViT image processing to help farmers diagnose papaya diseases, offering severity levels and weather-aware prevention strategies.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: preshadiDancingClass,
    title: 'Preshadi Dance',
    tags: ['Education', 'Web'],
    desc: 'A culturally rich, highly animated promotional website designed to beautifully showcase the traditions of a local Sri Lankan dance academy.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: resipesManagementSystem,
    title: 'Food Recipes Management',
    tags: ['Management', 'Web'],
    desc: 'A PHP-based culinary platform for easily discovering, organizing, and managing food recipes with a clean, user-friendly interface.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: selaniumTestCases,
    title: 'Production ERP Automation',
    tags: ['QA', 'Automation'],
    desc: 'A comprehensive, production-ready Selenium test suite engineered to validate critical business workflows and ensure system stability.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: skillShareingSystem,
    title: 'Skill Shareing System',
    tags: ['Learning', 'Platform'],
    desc: 'Skill sharing platform for learning collaboration and content exchange.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: travelManagementSystem,
    title: 'Dream-Destiny-Travels',
    tags: ['Travel', 'Management'],
    desc: 'A travel agency web portal featuring core CRUD management for tours and bookings, alongside a novel dashboard to enhance operational efficiency.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: trustWorkers,
    title: 'Trust Works',
    tags: ['Services', 'Web'],
    desc: 'A reliable service-hiring mobile application connecting users with trusted local professionals, like babysitters, plumbers, and carpenters, for quick booking.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: vehicleRentalSystem,
    title: 'Saara Vehicle Rental',
    tags: ['Rental', 'Management'],
    desc: 'A Java and HTML/CSS web application providing a robust admin dashboard for tracking fleets, handling rentals, and managing customer bookings.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: vidunaClass,
    title: 'Viduna Class',
    tags: ['Education', 'Web'],
    desc: 'Class website and student interaction portal for learning activities.',
    date: '2025',
    code: '#',
    demo: '#',
  },
  {
    img: shopping,
    title: 'KIYARAA store',
    tags: ['PHP', 'Javascript'],
    desc: 'A responsive online shopping store website with project showcase sections , buy items , add cart options and admin dashboard.',
    date: 'Jan 2024',
    code: '#',
    demo: '#',
  },
];

const heroWorkflowSteps = ['DISCOVER', 'CREATE', 'OPTIMIZE', 'DEPLOY'];

function HeroWorkflowRail() {
  const orbitRings = [52, 84, 116];
  const sideNodes = [
    { side: 'left', top: '34%', x: -20, color: 'from-fuchsia-400 to-purple-400' },
    { side: 'left', top: '52%', x: -34, color: 'from-indigo-400 to-fuchsia-400' },
    { side: 'left', top: '66%', x: -18, color: 'from-blue-400 to-indigo-400' },
    { side: 'right', top: '36%', x: 18, color: 'from-fuchsia-400 to-pink-400' },
    { side: 'right', top: '50%', x: 32, color: 'from-blue-400 to-indigo-400' },
    { side: 'right', top: '63%', x: 16, color: 'from-indigo-300 to-blue-400' },
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative z-10 order-2 mx-2 hidden h-[540px] w-[240px] items-center justify-center xl:flex xl:mx-8"
    >
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-2xl" />
        <div className="absolute left-1/2 top-[86px] h-[390px] w-24 -translate-x-1/2 bg-gradient-to-b from-fuchsia-500/10 via-indigo-500/10 to-blue-500/10 blur-3xl" />

        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-[18px] h-5 w-5 -translate-x-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_26px_rgba(217,70,239,0.95)]"
        />

        {orbitRings.map((size, ringIndex) => (
          <motion.div
            key={size}
            animate={{ opacity: [0.28, 0.62, 0.28], scale: [1, 1.05, 1] }}
            transition={{ duration: 2.8 + ringIndex * 0.35, repeat: Infinity, ease: 'easeInOut', delay: ringIndex * 0.18 }}
            className="absolute left-1/2 top-[2px] -translate-x-1/2 rounded-full border border-fuchsia-300/35"
            style={{ width: size, height: size }}
          />
        ))}

        <div className="absolute left-1/2 top-[96px] h-[360px] w-px -translate-x-1/2 bg-gradient-to-b from-fuchsia-300/75 via-indigo-300/60 to-blue-400/75" />
        <motion.div
          animate={{ y: [0, 334, 0], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-[106px] h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.95)]"
        />
        <div className="absolute left-[42px] top-[110px] h-[326px] w-[2px] rounded-full bg-gradient-to-b from-pink-400/90 via-fuchsia-400/55 to-transparent shadow-[0_0_20px_rgba(236,72,153,0.55)]" />
        <div className="absolute right-[42px] top-[110px] h-[326px] w-[2px] rounded-full bg-gradient-to-b from-blue-400/90 via-indigo-400/55 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.55)]" />

        {sideNodes.map((node, index) => (
          <motion.div
            key={`${node.side}-${node.top}`}
            animate={{ opacity: [0.45, 1, 0.45], scale: [1, 1.2, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.22, ease: 'easeInOut' }}
            className={`absolute ${node.side === 'left' ? 'left-1/2' : 'right-1/2'} h-3 w-3 rounded-full bg-gradient-to-br ${node.color} shadow-[0_0_16px_rgba(168,85,247,0.7)]`}
            style={{ top: node.top, transform: `translateX(${node.x}px)` }}
          />
        ))}

        <svg className="pointer-events-none absolute inset-0" viewBox="0 0 240 540" fill="none" aria-hidden="true">
          <path d="M66 180 L120 230" stroke="url(#railA)" strokeWidth="1.4" strokeOpacity="0.65" />
          <path d="M170 194 L120 258" stroke="url(#railB)" strokeWidth="1.4" strokeOpacity="0.65" />
          <path d="M82 314 L120 302" stroke="url(#railA)" strokeWidth="1.2" strokeOpacity="0.65" />
          <path d="M158 340 L120 338" stroke="url(#railB)" strokeWidth="1.2" strokeOpacity="0.65" />
          <defs>
            <linearGradient id="railA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="railB" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute left-1/2 top-[116px] flex h-[316px] w-[154px] -translate-x-1/2 flex-col items-center justify-between">
          {heroWorkflowSteps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: [0.72, 1, 0.72], y: [0, -3, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.23, ease: 'easeInOut' }}
              className="relative min-w-[132px] rounded-[12px] border border-fuchsia-300/35 bg-slate-900/80 px-4 py-[9px] text-center text-[22px] font-semibold tracking-[0.08em] text-fuchsia-100 shadow-[0_0_28px_rgba(168,85,247,0.22)] backdrop-blur-sm"
            >
              <span className="text-[0.9rem]">[{step}]</span>
              <div className="pointer-events-none absolute inset-0 rounded-[12px] bg-gradient-to-r from-fuchsia-500/10 via-transparent to-blue-500/10" />
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{ y: [0, -9, 0], rotate: [0, -5, 5, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2.9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[12px] left-1/2 -translate-x-1/2"
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M14.7 4.1c2.8 0 5 2.2 5 5v1.3l-2.2 2.2-3.5-3.5 2.2-2.2V4.1h-1.5z" fill="#f472b6" />
            <path d="M11.4 7.5l5.1 5.1-5.6 5.6H7.3v-3.6l4.1-4.1-2.1-2.1 2.1-0.9z" fill="#93c5fd" />
            <path d="M8.2 17.9l-1.8 2.8 2.8-1.8 1.2-1.2-1-1-1.2 1.2z" fill="#fcd34d" />
            <circle cx="14.6" cy="8.6" r="1.1" fill="#ffffff" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
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

  const featured3DProjects = projects
    .map((project) => ({
      title: project.title,
      image: project.img,
      description: project.desc,
      github: project.code,
      demo: project.demo,
    }));

  return (
    <>   
      <CustomCursor />
      <WebBackground />
      <Navbar/>
      <div className="relative min-h-screen pb-24 md:pb-0">
        {/* Hero Section */}
<section id="hero" className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden px-4 pb-12 pt-4 md:px-6 xl:flex-row xl:px-12">
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
    className="order-1 z-10 mt-20 w-full max-w-2xl text-left xl:mt-0 xl:max-w-2xl"
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

    <div className="flex flex-col gap-3 sm:flex-row md:gap-4">
      <button
        onClick={() => scrollToSection('projects')}
        className="magnetic-button w-full rounded-full bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-3 font-medium transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/30 sm:w-auto"
      >
        View Projects
      </button>
      <button
        onClick={() => scrollToSection('contact')}
        className="magnetic-button w-full rounded-full border-2 border-purple-400 bg-transparent px-6 py-3 font-medium text-purple-400 transition-all duration-300 hover:scale-105 hover:bg-purple-400 hover:text-white sm:w-auto"
      >
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

  <HeroWorkflowRail />

  <SocialCircle />

  {/* Image with floating animation - adjusted for mobile */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="relative order-2 z-10 mt-10 w-full max-w-[340px] sm:mt-12 sm:max-w-[420px] xl:order-3 xl:mt-0 xl:max-w-[520px]"
  >
    <div className="relative mx-auto w-full">
      <img
        src={pic1}
        alt="Athsara"
        className="h-auto w-full object-contain rounded-tl-3xl rounded-br-3xl border-4 border-purple-400 border-opacity-30 shadow-2xl transition-all duration-500 hover:shadow-purple-500/50"
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

      {/* Experience Item 1 - Ronan Group International */}
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
              <h3 className="text-2xl font-bold text-white">Lead / Main Developer (Fullstack)</h3>
              <p className="text-indigo-300">Ronan Group International — Remote</p>
            </div>
            <div className="mt-2 md:mt-0 px-3 py-1 bg-indigo-500/20 rounded-full">
              <p className="text-indigo-100 text-sm">Mar 2025 – Present</p>
            </div>
          </div>

          {/* Role Cards */}
          <div className="grid gap-4 mt-6">
            {/* Job Portal Card */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Job Portal Development (MERN)</h4>
                  <p className="text-gray-300 text-sm">Led development and production rollout with integrated payment gateway (PayPal), subscription and one-time payments</p>
                </div>
              </div>
            </motion.div>

            {/* CI/CD Card */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">DevOps & Infrastructure</h4>
                  <p className="text-gray-300 text-sm">Architected CI/CD pipelines (GitHub Actions, Docker), deployment automation and monitoring for production services</p>
                </div>
              </div>
            </motion.div>

            {/* Leadership Card */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Team Leadership & Mentorship</h4>
                  <p className="text-gray-300 text-sm">Managed stakeholder requirements, mentored junior developers, performed code reviews and handled production incidents</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Experience Item 2 - Hungarian Restaurant Management */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-12 pl-10 md:pl-0"
      >
        {/* Timeline dot */}
        <div className="absolute left-0 md:left-1/2 h-5 w-5 rounded-full bg-indigo-500 border-4 border-indigo-300 transform -translate-x-1/2 -translate-y-1 z-10"></div>

        {/* Animated card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border-l-4 border-indigo-500 md:mr-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Full-Stack Developer</h3>
              <p className="text-indigo-300">Hungarian Restaurant Management System</p>
            </div>
            <div className="mt-2 md:mt-0 px-3 py-1 bg-indigo-500/20 rounded-full">
              <p className="text-indigo-100 text-sm">Sep 2024 – Feb 2025</p>
            </div>
          </div>

          {/* Role Cards */}
          <div className="grid gap-4 mt-6">
            {/* Restaurant System Card */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Full-Stack Restaurant System</h4>
                  <p className="text-gray-300 text-sm">Developed customer ordering, kitchen/cashier dashboards, inventory control, menu recipe management and SMS notifications</p>
                </div>
              </div>
            </motion.div>

            {/* API Development Card */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">REST API & Security</h4>
                  <p className="text-gray-300 text-sm">Built secure REST APIs (Node.js + Express) with JWT authentication, file uploads (Multer), and MongoDB data modeling</p>
                </div>
              </div>
            </motion.div>

            {/* Deployment Card */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Deployment & Reliability</h4>
                  <p className="text-gray-300 text-sm">Automated deployment (Vercel, Render), added validation, logging, and health checks. Reduced order-processing time and improved stock accuracy</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Experience Item 3 - Cloud ARM */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
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

    <ProjectShowcase3D projects={featured3DProjects} />
  </div>
    {/* skill section */}
</section>

<section id="skill" className="py-12 px-4 overflow-hidden">

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="max-w-7xl mx-auto"
  >
    <h2 className="text-4xl font-bold mb-12 text-center glow-text">My Skills</h2>

    <div className=" p-8 relative overflow-hidden">

      {/* === MOVING BACKGROUND TECH ICONS === */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        {Object.keys(techIcons).map((name, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ x: -200, y: Math.random() * 500 }}
            animate={{ x: "110%" }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <TechIcon name={name as keyof typeof techIcons} size={32} />
          </motion.div>
        ))}
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10">
        <motion.h3
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-2xl font-semibold mb-8 text-center"
        >
          Technologies I Work With
        </motion.h3>

        {/* Horizontal Scrolling Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* First set of icons */}
            {Object.entries(techIcons).map(([name, icon]) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.2, y: -10 }}
                className="flex flex-col items-center justify-center p-6 rounded-xl  min-w-[140px]"
              >
                <TechIcon name={name as keyof typeof techIcons} size={48} />
                <p className="font-medium mt-3 text-sm text-center">{name}</p>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {Object.entries(techIcons).map(([name, icon]) => (
              <motion.div
                key={`${name}-duplicate`}
                whileHover={{ scale: 1.2, y: -10 }}
                className="flex flex-col items-center justify-center p-6 rounded-xl "
              >
                <TechIcon name={name as keyof typeof techIcons} size={48} />
                <p className="font-medium mt-3 text-sm text-center">{name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  </motion.div>

</section>

{/* Contact Section */}
<section id="contact" className="py-12 px-4 relative">
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
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:your@email.com"
              className="p-2 rounded-full bg-white/5"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
        <div>
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


