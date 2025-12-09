import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import SEO from './SEO';
import { getAllBlogPosts } from '../data/blogData';

const BlogList: React.FC = () => {
  const blogPosts = getAllBlogPosts();

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Athsara Bimalka's Tech Blog",
    "description": "Software engineering insights, deployment guides, and full-stack development tutorials by Athsara Bimalka",
    "url": "https://athsarab.me/blog",
    "author": {
      "@type": "Person",
      "name": "Athsara Bimalka",
      "url": "https://athsarab.me",
      "jobTitle": "Software Engineering Student",
      "alumniOf": "Software Engineering Program"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "image": `https://athsarab.me${post.coverImage}`,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author.name
      },
      "url": `https://athsarab.me/blog/${post.slug}`,
      "keywords": post.tags.join(', ')
    }))
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <SEO
        title="Tech Blog - Deployment Guides & Full-Stack Tutorials"
        description="Read about my journey in software engineering, deployment experiences, full-stack development tutorials, and technical insights. Learn Node.js deployment, Render hosting, MongoDB, Express, and more."
        keywords="Node.js deployment, Render hosting, Backend development, Full-stack projects, Athsara Bimalka portfolio, Restaurant management system, DevOps, Express backend, MongoDB deployment, Software engineering blog, React tutorials, Deployment guides"
        ogType="website"
        canonicalUrl="https://athsarab.me/blog"
        ogImage="https://athsarab.me/assets/blog/blog-og-image.jpg"
        schema={blogListSchema}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Tech Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insights from my software engineering journey — deployment guides, 
              full-stack tutorials, and lessons learned building real-world applications
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  {/* Cover Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback gradient if image doesn't load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20"
                        >
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="inline-flex items-center px-3 py-1 text-gray-400 text-xs">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
                      Read full article
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* Internal Links Section for SEO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">
              Want to learn more about my work?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700"
              >
                View Portfolio
              </Link>
              <Link
                to="/#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Explore Projects
              </Link>
              <Link
                to="/#contact"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
