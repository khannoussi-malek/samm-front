import{ ReactElement } from 'react';

import { Center, Heading, Image, Stack, Text } from '@chakra-ui/react';


import { Illustration403 } from './Illustration403';
import { Illustration404 } from './Illustration404';
import { IllustrationDefault } from './IllustrationDefault';
import { Link } from 'react-router-dom';

const SupportedErrors: Record<
  'default' | 403 | 404,
  { illustration?: ReactElement }
> = {
  default: { illustration: <IllustrationDefault /> },
  403: { illustration: <Illustration403 /> },
  404: { illustration: <Illustration404 /> },
};

export const ErrorPage = ({ errorCode }: { errorCode?: number }) => {
  const errorType =
    errorCode && errorCode in SupportedErrors
      ? (errorCode as keyof typeof SupportedErrors)
      : 'default';
  const illustration =
    SupportedErrors[errorType].illustration ??
    SupportedErrors.default.illustration ??
    null;

  return (
    <Center flex="1" p="8" minH="90vh" >
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
        spacing={4}
      >
        {illustration}
        <Stack
          textAlign={{ base: 'center', md: 'left' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <Link href="/">
          <Image src="./images/logo.svg" />
          </Link>
          <Heading>Cant access this page</Heading>
          <Text>Pleas verify if you have the access to this page</Text>
          {!!errorCode && (
            <Text
              color="gray.800"
              _dark={{ color: 'gray.400' }}
              fontSize="sm"
              mt={4}
            >
              ERROR
            </Text>
          )}
        </Stack>
      </Stack>
    </Center>
  );
};
