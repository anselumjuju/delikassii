'use client';

import { HeroUIProvider } from '@heroui/react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/utils/theme';
import { OnBoardingWrapper } from '@/utils/OnBoardingWrapper';
import { UserContextProvider } from '@/utils/UserContextProvider';
import ClientProvider from '@/utils/ClientProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <UserContextProvider>
            <OnBoardingWrapper>
              <ClientProvider>{children}</ClientProvider>
            </OnBoardingWrapper>
          </UserContextProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </HeroUIProvider>
  );
}
