import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC } from 'react';
import "./config/axios/config";
import { AuthProvider } from './pages/Auth/AuthContext';
import theme from './theme';

const queryClient = new QueryClient();
export const Provider: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ChakraProvider
        theme={theme}>
          {/* <ReactQueryDevtools initialIsOpen /> */}
          {children}

        </ChakraProvider>
      </AuthProvider>;
    </QueryClientProvider>
  )
};