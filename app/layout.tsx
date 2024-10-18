import type { Metadata } from 'next';
import { NextUIProvider } from '@nextui-org/react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Dancing_Script, Open_Sans, Raleway } from 'next/font/google';
import { ThemeProvider } from '@mui/material';
import { Footer, Header, Navbar } from '@/components';
import { Analytics } from '@vercel/analytics/react';
import { theme } from '@/utils/theme';
import './globals.css';
import { OnBoardingWrapper } from '@/utils/OnBoardingWrapper';
import { UserContextProvider } from '@/utils/UserContextProvider';
import ClientProvider from '@/utils/ClientProvider';

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
    <html lang='en' className='bg-secondary-500 text-primary-900'>
      <body
        className={`w-full max-w-[1700px] min-h-screen mx-auto overflow-x-hidden ${openSans.variable} ${raleway.variable} ${dancingScript.variable} antialiased font-openSans`}>
        <NextUIProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <UserContextProvider>
                <OnBoardingWrapper>
                  <ClientProvider>
                    <div className='w-full space-y-6'>
                      <Header />
                      <Navbar />
                      {children}
                      <Footer />
                    </div>
                  </ClientProvider>
                </OnBoardingWrapper>
              </UserContextProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </NextUIProvider>
        <Analytics />
      </body>
    </html>
  );
}
