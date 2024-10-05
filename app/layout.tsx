import type { Metadata } from 'next';
import './globals.css';

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
      <body className='bg-background text-primary antialiased'>{children}</body>
    </html>
  );
}
