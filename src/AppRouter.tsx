import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OriginalApp from './OriginalApp';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Routes>
      <Route path="/" element={<OriginalApp />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default App;
