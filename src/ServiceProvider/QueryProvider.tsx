import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import type { ReactNode } from "react";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      retry: 3,
      retryDelay: (attempt) =>
        Math.min(1000 * 2 ** attempt, 30000),
      refetchOnWindowFocus: false,
    },
  },
});


interface QueryProviderProps {
  children: ReactNode;
}


export default function QueryProvider({
  children,
}: QueryProviderProps) {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );

}