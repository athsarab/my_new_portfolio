import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  article?: {
    author: string;
    tags: string[];
  };
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'Athsara Bimalka, Full-stack developer, React developer, Node.js, Portfolio, Software engineering',
  author = 'Athsara Bimalka',
  ogImage = 'https://athsarab.me/assets/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  publishedTime,
  modifiedTime,
  article,
  schema,
}) => {
  const siteUrl = 'https://athsarab.me';
  const fullTitle = `${title} | Athsara Bimalka - Software Engineer`;
  const fullCanonicalUrl = canonicalUrl || `${siteUrl}${window.location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Athsara Bimalka Portfolio" />

      {/* Article specific Open Graph */}
      {article && (
        <>
          <meta property="article:author" content={article.author} />
          {article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@athsarab" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
