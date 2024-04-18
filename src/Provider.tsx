import { ChakraProvider } from '@chakra-ui/react';
import { FC } from 'react';
import "./config/axios/config";
import { AuthProvider } from './pages/Auth/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Layout } from './layout/Layout';

const queryClient = new QueryClient();
export const Provider: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <Layout>
        <ChakraProvider>
          <ReactQueryDevtools initialIsOpen />
          {children}

        </ChakraProvider>
    </Layout>
      </AuthProvider>;
    </QueryClientProvider>
  )
};