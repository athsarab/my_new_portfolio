import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Tag, 
  Share2, 
  Github, 
  Linkedin, 
  Mail,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import SEO from './SEO';
import { getBlogPostBySlug } from '../data/blogData';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }

    // Smooth scroll to section
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`,
      '_blank'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
      '_blank'
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
      '_blank'
    );
  };

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'why-render', title: 'Why Render?' },
    { id: 'problem-cors', title: 'Problem #1: CORS Blocking Images' },
    { id: 'problem-path', title: 'Problem #2: Image Path Not Found' },
    { id: 'problem-multer', title: 'Problem #3: Multer Wrong Location' },
    { id: 'problem-url', title: 'Problem #4: Wrong Image URL' },
    { id: 'final-result', title: 'Final Result' },
    { id: 'lessons-learned', title: 'Lessons Learned' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": `https://athsarab.me${post.coverImage}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "url": "https://athsarab.me"
    },
    "publisher": {
      "@type": "Person",
      "name": post.author.name,
      "logo": {
        "@type": "ImageObject",
        "url": `https://athsarab.me${post.author.avatar}`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://athsarab.me/blog/${post.slug}`
    },
    "keywords": post.keywords,
    "articleBody": "Complete guide to deploying Node.js backend with image uploads on Render"
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        keywords={post.keywords}
        author={post.author.name}
        ogImage={`https://athsarab.me${post.coverImage}`}
        ogType="article"
        canonicalUrl={`https://athsarab.me/blog/${post.slug}`}
        publishedTime={post.date}
        article={{
          author: post.author.name,
          tags: post.tags
        }}
        schema={blogPostSchema}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover opacity-30"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          
          <div className="relative h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Blog
              </Link>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-6">
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  {post.readTime}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-2 px-3 rounded-lg transition-all ${
                        activeSection === item.id
                          ? 'bg-blue-500/20 text-blue-400 border-l-4 border-blue-400'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                {/* Share Buttons */}
                <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <h4 className="text-sm font-bold mb-3 text-gray-300">Share this article</h4>
                  <div className="flex gap-3">
                    <button
                      onClick={shareOnTwitter}
                      className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Share2 size={18} />
                    </button>
                    <button
                      onClick={shareOnLinkedIn}
                      className="p-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={18} />
                    </button>
                    <button
                      onClick={shareOnFacebook}
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3 prose prose-invert prose-lg max-w-none"
            >
              <div className="bg-gray-800/30 rounded-2xl p-8 md:p-12 space-y-8">
                
                {/* Introduction */}
                <section id="introduction">
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    As a software engineering student, I recently completed my biggest project so far — 
                    a <strong>full-stack Hungarian Restaurant Management System</strong> with:
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                      <span>React + Vite frontend</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                      <span>Node.js + Express backend</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                      <span>MongoDB database</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                      <span>Image uploads for menu items, recipes, and inventory</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Everything worked fine locally, but once I deployed my backend to <strong>Render</strong>, 
                    I started facing real production problems — especially around <strong>image uploads, disk storage, 
                    and CORS</strong>.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    This is the story of what went wrong, how I fixed it, and what I learned. 
                    If you're a beginner deploying to Render for the first time — this will help you avoid hours of confusion.
                  </p>
                </section>

                {/* Why Render */}
                <section id="why-render">
                  <h2 className="text-3xl font-bold mb-6 text-blue-400">🚀 Why Render?</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    As a new learner, I chose <strong>Render</strong> because:
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                      <span>It's beginner-friendly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                      <span>Auto-deploys from GitHub</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                      <span>Supports persistent disks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                      <span>Great for hosting Express servers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                      <span>Affordable pricing (my setup costs around $7–$8)</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    My project needs to store a lot of images:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1 ml-4">
                    <li>Food photos</li>
                    <li>Inventory items</li>
                    <li>Recipe images</li>
                    <li>Customer uploads</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    So I enabled <strong>Render Disk</strong>, expecting everything to "just work."
                  </p>
                  <p className="text-xl font-semibold text-red-400 mt-4">
                    It didn't.
                  </p>
                </section>

                {/* Problem 1 */}
                <section id="problem-cors">
                  <h2 className="text-3xl font-bold mb-6 text-red-400">❌ Problem #1: Images Upload Successfully… but Don't Display</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Locally, the backend returned perfect URLs. But after deployment, every image request failed with:
                  </p>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
                    <code className="text-red-300">
                      Access to fetch at &lt;URL&gt; has been blocked by CORS policy
                    </code>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Even though the images were correctly saved inside Render Disk.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    This confused me for hours.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4 text-yellow-400">🔍 Root Cause: CORS Blocking Public Image Access</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    My frontend was deployed on:
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-4">
                    <code className="text-blue-300">https://my-frontend.vercel.app</code>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    My backend was:
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-6">
                    <code className="text-blue-300">https://my-backend.onrender.com</code>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Browsers block cross-origin image loading unless the backend explicitly allows it.
                  </p>

                  <h4 className="text-xl font-bold mb-4 text-green-400">Solution → Add correct CORS configuration</h4>
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-6 overflow-x-auto">
                    <pre className="text-sm">
<code className="text-gray-300"><span className="text-purple-400">import</span> cors <span className="text-purple-400">from</span> <span className="text-green-400">"cors"</span>;

app.<span className="text-yellow-400">use</span>(
  <span className="text-yellow-400">cors</span>({'{'}
    <span className="text-blue-400">origin</span>: [
      <span className="text-green-400">"http://localhost:5173"</span>,
      <span className="text-green-400">"https://my-frontend.vercel.app"</span>
    ],
    <span className="text-blue-400">credentials</span>: <span className="text-purple-400">true</span>,
  {'}'})
);
</code></pre>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Once I whitelisted my frontend domain, the CORS error disappeared — but the images still didn't show.
                  </p>
                  <p className="text-gray-400 italic mt-4">
                    Time for the next issue.
                  </p>
                </section>

                {/* Problem 2 */}
                <section id="problem-path">
                  <h2 className="text-3xl font-bold mb-6 text-red-400">❌ Problem #2: Image Path Exists but Browser Can't Find It</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    In Render logs, images were saved to:
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-4">
                    <code className="text-green-300">/var/data/uploads/image-123.jpg</code>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    But when my frontend tried to load:
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-4">
                    <code className="text-blue-300">https://my-backend.onrender.com/uploads/image-123.jpg</code>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    it returned:
                  </p>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
                    <code className="text-red-300">404 Not Found</code>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Why?
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Because <strong>Express wasn't serving uploaded images publicly</strong>.
                  </p>

                  <h4 className="text-xl font-bold mb-4 text-green-400">✔️ Fix: Serve Uploads Folder as Static</h4>
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-6 overflow-x-auto">
                    <pre className="text-sm">
<code className="text-gray-300">app.<span className="text-yellow-400">use</span>(<span className="text-green-400">"/uploads"</span>, express.<span className="text-yellow-400">static</span>(<span className="text-green-400">"/var/data/uploads"</span>));
</code></pre>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    This exposes uploaded files over HTTP.
                  </p>
                  <p className="text-green-400 font-semibold mt-4">
                    Now image URLs started working correctly.
                  </p>
                </section>

                {/* Problem 3 */}
                <section id="problem-multer">
                  <h2 className="text-3xl font-bold mb-6 text-red-400">❌ Problem #3: Multer Saving Files in Wrong Location</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Locally I used:
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-4">
                    <code className="text-gray-300">destination: <span className="text-green-400">"uploads/"</span></code>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    But Render Disk is mounted at:
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-6">
                    <code className="text-blue-300">/var/data</code>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    So my uploads folder must live inside that mount path.
                  </p>

                  <h4 className="text-xl font-bold mb-4 text-green-400">Fixed multer configuration:</h4>
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-6 overflow-x-auto">
                    <pre className="text-sm">
<code className="text-gray-300"><span className="text-purple-400">import</span> multer <span className="text-purple-400">from</span> <span className="text-green-400">"multer"</span>;
<span className="text-purple-400">import</span> path <span className="text-purple-400">from</span> <span className="text-green-400">"path"</span>;

<span className="text-purple-400">const</span> storage = multer.<span className="text-yellow-400">diskStorage</span>({'{'}
  <span className="text-blue-400">destination</span>: (req, file, cb) {'=> {'}
    cb(<span className="text-purple-400">null</span>, <span className="text-green-400">"/var/data/uploads"</span>);
  {'}'},
  <span className="text-blue-400">filename</span>: (req, file, cb) {'=> {'}
    cb(<span className="text-purple-400">null</span>, Date.<span className="text-yellow-400">now</span>() + path.<span className="text-yellow-400">extname</span>(file.originalname));
  {'}'},
{'}'});

<span className="text-purple-400">export const</span> upload = <span className="text-yellow-400">multer</span>({'{'} storage {'}'});
</code></pre>
                  </div>
                  <p className="text-green-400 font-semibold">
                    Now uploads persist even after Render restarts.
                  </p>
                </section>

                {/* Problem 4 */}
                <section id="problem-url">
                  <h2 className="text-3xl font-bold mb-6 text-red-400">❌ Problem #4: API Returning Wrong Image URL</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    My API responded with:
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-4">
                    <code className="text-gray-300">uploads/image-123.jpg</code>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    But the frontend needed:
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-6">
                    <code className="text-blue-300">https://my-backend.onrender.com/uploads/image-123.jpg</code>
                  </div>

                  <h4 className="text-xl font-bold mb-4 text-green-400">Final fix: return full absolute URL</h4>
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-6 overflow-x-auto">
                    <pre className="text-sm">
<code className="text-gray-300"><span className="text-purple-400">const</span> fullUrl = <span className="text-green-400">`$&#123;req.protocol&#125;://$&#123;req.get("host")&#125;/uploads/$&#123;filename&#125;`</span>;
res.<span className="text-yellow-400">json</span>({'{'} <span className="text-blue-400">imageUrl</span>: fullUrl {'}'});
</code></pre>
                  </div>
                  <p className="text-green-400 font-semibold text-xl">
                    Now everything worked.
                  </p>
                </section>

                {/* Final Result */}
                <section id="final-result">
                  <h2 className="text-3xl font-bold mb-6 text-green-400">🎉 Final Result: Fully Working Deployment</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    After these fixes:
                  </p>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={22} />
                      <span><strong>Images upload correctly</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={22} />
                      <span><strong>Images display instantly on frontend</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={22} />
                      <span><strong>Storage persists using Render Disk</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={22} />
                      <span><strong>No CORS issues</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={22} />
                      <span><strong>Backend works across restarts</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={22} />
                      <span><strong>Frontend loads full URLs properly</strong></span>
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    This deployment taught me how <strong>real servers work</strong>, not just local environments.
                  </p>
                </section>

                {/* Lessons Learned */}
                <section id="lessons-learned">
                  <h2 className="text-3xl font-bold mb-6 text-blue-400">📘 What I Learned (Beginner-Friendly Tips)</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-3 text-blue-300">1️⃣ CORS matters more than you think</h3>
                      <p className="text-gray-300">Always whitelist:</p>
                      <ul className="list-disc list-inside text-gray-300 mt-2 ml-4">
                        <li>localhost</li>
                        <li>your frontend domain</li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-3 text-purple-300">2️⃣ Render Disk is essential for file persistence</h3>
                      <p className="text-gray-300">Otherwise uploads disappear after redeploying.</p>
                    </div>

                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-3 text-green-300">3️⃣ Express must serve uploaded files</h3>
                      <p className="text-gray-300">Without static serving, images remain invisible.</p>
                    </div>

                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-3 text-yellow-300">4️⃣ Always return full URLs in response</h3>
                      <p className="text-gray-300">Relative paths break in production.</p>
                    </div>

                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-3 text-red-300">5️⃣ Logs are your best friend</h3>
                      <p className="text-gray-300">Render logs pointed me to the actual file paths.</p>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion">
                  <h2 className="text-3xl font-bold mb-6 text-purple-400">🏁 Conclusion</h2>
                  <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                    Deploying my backend for the first time wasn't easy.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    But fixing:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1 ml-4">
                    <li>CORS</li>
                    <li>Disk storage</li>
                    <li>Multer pathing</li>
                    <li>Static file serving</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    gave me a <strong>strong understanding of how real-world servers work</strong>.
                  </p>
                  <p className="text-xl text-gray-200 leading-relaxed font-medium">
                    If you're deploying a backend with file uploads on Render, I hope my experience saves you 
                    hours of frustration — and helps you deploy successfully.
                  </p>
                </section>

                {/* Author Bio */}
                <section className="mt-12 pt-8 border-t border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 text-blue-400">About the Author</h3>
                  <div className="flex flex-col md:flex-row gap-6 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">{post.author.name}</h4>
                      <p className="text-blue-400 mb-3">{post.author.role}</p>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {post.author.bio}
                      </p>
                      <div className="flex gap-4">
                        <a
                          href={post.author.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          <Github size={20} />
                          <span>GitHub</span>
                        </a>
                        <a
                          href={post.author.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          <Linkedin size={20} />
                          <span>LinkedIn</span>
                        </a>
                        <a
                          href={`mailto:${post.author.email}`}
                          className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          <Mail size={20} />
                          <span>Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Related Links */}
                <section className="mt-12 pt-8 border-t border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 text-blue-400">Explore More</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      to="/"
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-all group"
                    >
                      <span className="text-gray-300 group-hover:text-blue-400">View My Portfolio</span>
                      <ExternalLink size={18} className="text-gray-500 group-hover:text-blue-400" />
                    </Link>
                    <Link
                      to="/#projects"
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-all group"
                    >
                      <span className="text-gray-300 group-hover:text-blue-400">See All Projects</span>
                      <ExternalLink size={18} className="text-gray-500 group-hover:text-blue-400" />
                    </Link>
                    <a
                      href="https://render.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-all group"
                    >
                      <span className="text-gray-300 group-hover:text-blue-400">Learn More About Render</span>
                      <ExternalLink size={18} className="text-gray-500 group-hover:text-blue-400" />
                    </a>
                    <Link
                      to="/blog"
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-all group"
                    >
                      <span className="text-gray-300 group-hover:text-blue-400">Read More Articles</span>
                      <ExternalLink size={18} className="text-gray-500 group-hover:text-blue-400" />
                    </Link>
                  </div>
                </section>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
