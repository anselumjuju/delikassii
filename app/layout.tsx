import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Delicio',
  description: 'A delicious recipe app.',
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
