import { Metadata } from 'next';
import { Suspense } from 'react';
import { getBlogPosts } from '@/lib/blog';
import BlogContent from './components/BlogContent';
import { Box, Spinner, Center } from '@chakra-ui/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

// SEO Metadata for blog page
export const metadata: Metadata = {
  title: 'Blog - Latest Articles & Insights',
  description:
    'Read the latest articles about education, career development, technology, and student success from EduPons. Stay informed with expert insights and practical tips.',
  keywords: [
    'blog',
    'articles',
    'education blog',
    'career development',
    'student success',
    'technology in education',
    'learning resources',
    'career tips',
    'EduPons blog',
  ],
  openGraph: {
    title: 'Blog - Latest Articles & Insights | EduPons',
    description:
      'Explore articles about education, career development, and technology. Expert insights for students, educators, and companies.',
    type: 'website',
    url: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Latest Articles & Insights | EduPons',
    description: 'Explore articles about education, career development, and technology.',
  },
  alternates: {
    canonical: '/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * @route /blog
 */
export default async function BlogPage() {
  // Fetch blog posts (static for now, will use API when available)
  const posts = await getBlogPosts();

  return (
    <>
      {/* JSON-LD Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'EduPons Blog',
            description:
              'Latest articles and insights about education, career development, and technology',
            url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
            publisher: {
              '@type': 'Organization',
              name: 'EduPons',
              url: process.env.NEXT_PUBLIC_APP_URL,
            },
            blogPost: posts.slice(0, 5).map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              image: post.featuredImage,
              datePublished: post.publishedAt,
              author: {
                '@type': 'Person',
                name: post.author.name,
              },
            })),
          }),
        }}
      />

      <Box mt="100px">
        <Suspense
          fallback={
            <Center minH="100vh">
              <Spinner size="xl" color="brand.500" />
            </Center>
          }
        >
          <Navbar />
          <BlogContent initialPosts={posts} />
          <Footer />
        </Suspense>
      </Box>
    </>
  );
}
