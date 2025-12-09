export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  date: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
    github: string;
    linkedin: string;
    email: string;
  };
  keywords: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'render-deployment',
    title: 'Deploying My Restaurant Management Backend on Render: My First Real Deployment Journey',
    description: 'A beginner-friendly guide to deploying a Node.js backend with image uploads on Render. Learn how I fixed CORS errors, disk storage issues, and Multer configuration problems.',
    content: '', // Full content will be in the component
    coverImage: '/assets/blog/render-deployment-cover.jpg',
    date: '2024-12-09',
    readTime: '8 min read',
    tags: [
      'Node.js',
      'Render',
      'Deployment',
      'Express',
      'MongoDB',
      'Backend',
      'DevOps',
      'CORS',
      'Multer',
      'Full-stack'
    ],
    author: {
      name: 'Athsara Bimalka',
      role: 'Software Engineering Student & Full-Stack Developer',
      bio: 'Passionate software engineering student specializing in full-stack web development with React, Node.js, and modern cloud deployment. Currently building scalable applications and sharing my learning journey.',
      avatar: '/assets/my7.png',
      github: 'https://github.com/athsarab',
      linkedin: 'https://linkedin.com/in/athsara-bimalka',
      email: 'athsarabimalka@gmail.com'
    },
    keywords: 'Node.js deployment, Render hosting, Backend development, Express backend, MongoDB deployment, CORS configuration, Multer file upload, Disk storage, Full-stack projects, Athsara Bimalka portfolio, Restaurant management system, DevOps, Image upload deployment, Production deployment, Render Disk, Static file serving'
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
