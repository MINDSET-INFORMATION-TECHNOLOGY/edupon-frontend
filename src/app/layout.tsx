import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'EduPons - Bridge to Your Next Stride',
    template: '%s | EduPons',
  },
  description:
    'A role-based platform designed to unify students, educators, and companies into a single ecosystem that promotes visibility, engagement, and career readiness.',
  keywords: [
    'education',
    'students',
    'educators',
    'companies',
    'challenges',
    'portfolio',
    'internships',
    'Nigeria',
  ],
  authors: [{ name: 'EduPons Team' }],
  creator: 'EduPons',
  publisher: 'EduPons',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'EduPons',
    title: 'EduPons - Bridge to Your Next Stride',
    description:
      'A role-based platform designed to unify students, educators, and companies into a single ecosystem that promotes visibility, engagement, and career readiness.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduPons - Bridge to Your Next Stride',
    description:
      'A role-based platform designed to unify students, educators, and companies into a single ecosystem.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
