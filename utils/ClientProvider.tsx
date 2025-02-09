'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000 * 12 * 24 * 10,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    },
  },
});

const ClientProvider = ({ children }: { children: React.ReactNode }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

export default ClientProvider;
