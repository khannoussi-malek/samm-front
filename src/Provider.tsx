import { ChakraProvider } from '@chakra-ui/react';
import { FC } from 'react';

export const Provider: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
