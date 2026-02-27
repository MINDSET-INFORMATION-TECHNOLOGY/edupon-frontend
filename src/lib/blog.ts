import { BlogPost } from '@/types/blog';

/**
 * Static blog posts data
 * Used as fallback when API endpoint is not available
 */
export const staticBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Transforming Business Performance with Cloud Architecture',
    slug: 'transforming-business-cloud-architecture',
    excerpt:
      "Discover how an optimized cloud architecture can boost scalability, security, and cost-efficiency. Empower your business to thrive in today's fast-evolving digital landscape.",
    content: '',
    featuredImage:
      'https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 'author-1',
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
    },
    publishedAt: '2025-01-25T10:00:00Z',
    tags: ['Technology', 'Cloud Computing'],
    category: 'Uncategorized',
    readTime: 5,
  },
  {
    id: '2',
    title: 'Bridging the Gap: How EduPons Connects Students with Real-World Opportunities',
    slug: 'bridging-gap-students-opportunities',
    excerpt:
      'Learn how EduPons platform is creating meaningful connections between students, educators, and companies to build career-ready professionals.',
    content: '',
    featuredImage:
      'https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 'author-2',
      name: 'Michael Chen',
      avatar: '/avatars/michael.jpg',
    },
    publishedAt: '2025-01-24T14:30:00Z',
    tags: ['Career Development', 'Students', 'Opportunities'],
    category: 'Students',
    readTime: 6,
  },
  {
    id: '3',
    title: 'The Future of Skills Development: Challenges, Portfolios, and Recognition',
    slug: 'future-skills-development',
    excerpt:
      'Explore how modern educational platforms are leveraging challenges and portfolio building to help students showcase their skills to potential employers.',
    content: '',
    featuredImage:
      'https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 'author-1',
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
    },
    publishedAt: '2025-01-23T09:15:00Z',
    tags: ['Skills', 'Portfolio', 'Career'],
    category: 'Students',
    readTime: 7,
  },
  {
    id: '4',
    title: 'Empowering Educators: Tools and Resources for Modern Teaching',
    slug: 'empowering-educators-modern-teaching',
    excerpt:
      'Discover the innovative tools and resources available to educators to enhance student engagement and track learning progress effectively.',
    content: '',
    featuredImage:
      'https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 'author-3',
      name: 'Dr. Amina Okafor',
      avatar: '/avatars/amina.jpg',
    },
    publishedAt: '2025-01-22T11:45:00Z',
    tags: ['Educators', 'Teaching', 'Tools'],
    category: 'Educators',
    readTime: 5,
  },
  {
    id: '5',
    title: 'From Classroom to Career: Success Stories from EduPons Community',
    slug: 'classroom-to-career-success-stories',
    excerpt:
      'Read inspiring success stories of students who transformed their learning journey into successful careers through the EduPons platform.',
    content: '',
    featuredImage:
      'https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 'author-2',
      name: 'Michael Chen',
      avatar: '/avatars/michael.jpg',
    },
    publishedAt: '2025-01-21T16:20:00Z',
    tags: ['Success Stories', 'Career', 'Students'],
    category: 'Students',
    readTime: 8,
  },
  {
    id: '6',
    title: 'Building a Strong Portfolio: Tips for Students to Stand Out',
    slug: 'building-strong-portfolio-tips',
    excerpt:
      'Learn essential strategies for creating a compelling portfolio that showcases your skills and attracts potential employers and internship opportunities.',
    content: '',
    featuredImage:
      'https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 'author-3',
      name: 'Dr. Amina Okafor',
      avatar: '/avatars/amina.jpg',
    },
    publishedAt: '2025-01-20T13:00:00Z',
    tags: ['Portfolio', 'Career Tips', 'Students'],
    category: 'Students',
    readTime: 6,
  },
  {
    id: '7',
    title: 'The Role of Companies in Shaping Future Talent Through Education',
    slug: 'companies-shaping-future-talent',
    excerpt:
      'Understand how forward-thinking companies are partnering with educational platforms to identify and nurture the next generation of talent.',
    content: '',
    featuredImage:
      'https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 'author-1',
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
    },
    publishedAt: '2025-01-19T10:30:00Z',
    tags: ['Companies', 'Talent', 'Partnership'],
    category: 'Companies',
    readTime: 7,
  },
  {
    id: '8',
    title: 'Navigating Internships: A Guide for Students in Nigeria',
    slug: 'navigating-internships-guide-nigeria',
    excerpt:
      "A comprehensive guide to finding, applying for, and succeeding in internships within Nigeria's growing tech and business sectors.",
    content: '',
    featuredImage:
      'https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 'author-2',
      name: 'Michael Chen',
      avatar: '/avatars/michael.jpg',
    },
    publishedAt: '2025-01-18T15:45:00Z',
    tags: ['Internships', 'Nigeria', 'Career Guide'],
    category: 'Students',
    readTime: 9,
  },
  {
    id: '9',
    title: 'Digital Transformation in Education: A Guide for Educators',
    slug: 'digital-transformation-education-guide',
    excerpt:
      'Explore how digital transformation is reshaping the educational landscape and what educators need to know to stay ahead.',
    content: '',
    featuredImage:
      'https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 'author-3',
      name: 'Dr. Amina Okafor',
      avatar: '/avatars/amina.jpg',
    },
    publishedAt: '2025-01-17T09:00:00Z',
    tags: ['Digital Transformation', 'Education', 'Technology'],
    category: 'Educators',
    readTime: 6,
  },
  {
    id: '10',
    title: 'How Companies Can Leverage EduPons for Talent Acquisition',
    slug: 'companies-leverage-edupons-talent',
    excerpt:
      'Discover how companies can use EduPons platform to find, engage, and recruit top talent from educational institutions.',
    content: '',
    featuredImage:
      'https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 'author-1',
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
    },
    publishedAt: '2025-01-16T14:00:00Z',
    tags: ['Recruitment', 'Talent Acquisition', 'Companies'],
    category: 'Companies',
    readTime: 7,
  },
  {
    id: '11',
    title: 'Student Engagement Strategies for Modern Classrooms',
    slug: 'student-engagement-strategies',
    excerpt:
      'Learn proven strategies to increase student engagement and participation in both physical and virtual classroom environments.',
    content: '',
    featuredImage:
      'https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 'author-3',
      name: 'Dr. Amina Okafor',
      avatar: '/avatars/amina.jpg',
    },
    publishedAt: '2025-01-15T11:30:00Z',
    tags: ['Engagement', 'Teaching', 'Educators'],
    category: 'Educators',
    readTime: 5,
  },
  {
    id: '12',
    title: 'Career Planning for Students: A Step-by-Step Guide',
    slug: 'career-planning-students-guide',
    excerpt:
      'A comprehensive guide to help students plan their career path, from choosing a field to landing their first job.',
    content: '',
    featuredImage:
      'https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      id: 'author-2',
      name: 'Michael Chen',
      avatar: '/avatars/michael.jpg',
    },
    publishedAt: '2025-01-14T10:15:00Z',
    tags: ['Career Planning', 'Students', 'Guide'],
    category: 'Students',
    readTime: 8,
  },
];

/**
 * Fetch blog posts from API with fallback to static data
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  // TODO: Uncomment when  backend is ready
  /*
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/posts`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    
    const data = await response.json();
    return data.posts || data;
  } catch (error) {
    console.error('Error fetching blog posts, using static data:', error);
    return staticBlogPosts;
  }
  */

  // Return static data for now
  return staticBlogPosts;
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}
