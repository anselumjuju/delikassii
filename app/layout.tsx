import type { Metadata } from 'next';
import { Open_Sans, Raleway, Dancing_Script } from 'next/font/google';
import './globals.css';
import { Footer, Header, Navbar } from '@/components';
import { Analytics } from '@vercel/analytics/react';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
});

export const metadata: Metadata = {
  title: 'Delikassii',
  description: 'Find and explore delicious recipes with detailed instructions, nutrition info, and user ratings.',
  openGraph: {
    url: 'https://Delikassii.vercel.app/',
    type: 'website',
    title: 'Delikassii',
    description: 'Find and explore delicious recipes with detailed instructions, nutrition info, and user ratings.',
    siteName: 'Delikassii',
    images: [
      {
        url: 'https://Delikassii.vercel.app/og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://Delikassii.vercel.app/',
    title: 'Delikassii',
    description: 'Find and explore delicious recipes with detailed instructions, nutrition info, and user ratings.',
    images: [
      {
        url: 'https://Delikassii.vercel.app/og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`bg-secondary-500 text-primary-900 ${openSans.variable} ${raleway.variable} ${dancingScript.variable} antialiased font-openSans`}>
        <div className='w-full max-w-[1700px] px-2 py-3 lg:px-5 mx-auto overflow-x-hidden space-y-5'>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
