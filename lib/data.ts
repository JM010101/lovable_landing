export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  date: string;
  views?: number;
}

export interface Download {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'template' | 'guide';
  icon: string;
  downloadUrl: string;
}

export interface SkoolPost {
  title: string;
  author: string;
  date: string;
}

export interface SkoolData {
  memberCount: number;
  featuredPosts: SkoolPost[];
  stats: {
    posts: number;
    members: number;
    engagement: string;
  };
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Getting Started with Modern Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop',
    duration: '12:34',
    date: '2024-01-15',
    views: 12500,
  },
  {
    id: '2',
    title: 'Advanced React Patterns and Best Practices',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
    duration: '18:22',
    date: '2024-01-12',
    views: 8900,
  },
  {
    id: '3',
    title: 'Building Scalable APIs with Next.js',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
    duration: '15:45',
    date: '2024-01-10',
    views: 11200,
  },
  {
    id: '4',
    title: 'UI/UX Design Principles for Developers',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    duration: '20:10',
    date: '2024-01-08',
    views: 15600,
  },
  {
    id: '5',
    title: 'Mastering TypeScript in 2024',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop',
    duration: '14:30',
    date: '2024-01-05',
    views: 9800,
  },
  {
    id: '6',
    title: 'Deployment Strategies for Modern Apps',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    duration: '16:55',
    date: '2024-01-03',
    views: 13400,
  },
];

export const downloads: Download[] = [
  {
    id: '1',
    title: 'Complete Design System Guide',
    description: 'A comprehensive guide to building and maintaining design systems for modern applications.',
    type: 'pdf',
    icon: '📘',
    downloadUrl: '#',
  },
  {
    id: '2',
    title: 'React Component Templates',
    description: 'Ready-to-use React component templates for common UI patterns and layouts.',
    type: 'template',
    icon: '⚛️',
    downloadUrl: '#',
  },
  {
    id: '3',
    title: 'API Integration Handbook',
    description: 'Best practices and patterns for integrating APIs in your Next.js applications.',
    type: 'guide',
    icon: '📚',
    downloadUrl: '#',
  },
  {
    id: '4',
    title: 'Performance Optimization Checklist',
    description: 'A detailed checklist for optimizing web application performance and Core Web Vitals.',
    type: 'pdf',
    icon: '⚡',
    downloadUrl: '#',
  },
  {
    id: '5',
    title: 'TypeScript Starter Templates',
    description: 'Production-ready TypeScript templates for various project types and frameworks.',
    type: 'template',
    icon: '📝',
    downloadUrl: '#',
  },
  {
    id: '6',
    title: 'SEO Best Practices Guide',
    description: 'Complete guide to implementing SEO best practices in modern web applications.',
    type: 'guide',
    icon: '🔍',
    downloadUrl: '#',
  },
];

export const skoolData: SkoolData = {
  memberCount: 12500,
  featuredPosts: [
    {
      title: 'How I Built My First SaaS Product',
      author: 'Sarah Chen',
      date: '2024-01-14',
    },
    {
      title: 'Tips for Landing Your First Dev Job',
      author: 'Mike Johnson',
      date: '2024-01-13',
    },
    {
      title: 'Building Accessible Web Applications',
      author: 'Alex Rivera',
      date: '2024-01-11',
    },
  ],
  stats: {
    posts: 3450,
    members: 12500,
    engagement: '98%',
  },
};
