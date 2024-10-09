import type { Metadata } from 'next';
import { Open_Sans, Raleway, Dancing_Script } from 'next/font/google';
import './globals.css';

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
  title: 'Delicio',
  description: 'Delicio is a delicious recipe app, that recommends recipes based on preferences.',
  openGraph: {
    url: 'https://delicioo.vercel.app/',
    type: 'website',
    title: 'Delicio',
    description: 'Delicio is a delicious recipe app, that recommends recipes based on preferences.',
    images: [
      {
        url: 'https://delicioo.vercel.app/og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://delicioo.vercel.app/',
    title: 'Delicio',
    description: 'Delicio is a delicious recipe app, that recommends recipes based on preferences.',
    images: [
      {
        url: 'https://delicioo.vercel.app/og.png',
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
      <body className={`bg-secondary-500 text-primary-900 ${openSans.variable} ${raleway.variable} ${dancingScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
