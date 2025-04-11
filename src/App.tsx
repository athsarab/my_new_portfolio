import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import WebBackground from './components/WebBackground';
import pic1 from './assets/my2.png';

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
  return (
    <>   
      <CustomCursor />
      <WebBackground />
      
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-between relative px-4 md:px-4 lg:px-12">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left z-100 max-w-xlg"
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
        <section className="min-h-screen py-20 px-4">
  {/* About Me Section */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="max-w-6xl mx-auto mb-20"
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

  {/* Skills Section */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="max-w-6xl mx-auto"
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
        <section className="min-h-screen py-20 px-4 relative">
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
                      href="mailto:contact@riva.dev"
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
    </>
  );
  
}

export default App;