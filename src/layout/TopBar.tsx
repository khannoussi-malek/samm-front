
import {
  Box,
  Flex,
  IconButton,
  IconButtonProps,
  Image,
  SlideFade,
  useBreakpointValue
} from '@chakra-ui/react';
import { LuMenu } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import { useLayoutContext } from '../components/Viewport/LayoutContext';
import { MainMenu } from './MainMenu';
import { NavDrawer } from './NavDrawer';

const MenuButton = (props: Partial<IconButtonProps>) => {
  const { navOnOpen } = useLayoutContext();
  return (
    <IconButton
      aria-label="Navigation"
      icon={<LuMenu size="1.5em" />}
      onClick={navOnOpen}
      variant="unstyled"
      _active={{ bg: 'gray.700' }}
      _hover={{ bg: 'gray.900' }}
      {...props}
    />
  );
};

export const TopBar = () => {

  const showDrawer = useBreakpointValue(
    {
      base: true,
      md: false,
    },
    { ssr: false }
  );

  return (
    <>
      <SlideFade in offsetY={-40} style={{ zIndex: 2 }}>
        <Flex
          position="fixed"
          top="0"
          insetStart="0"
          insetEnd="0"
          color="gray.50"
          align="center"
          pt="safe-top"
          px="4"
          h="calc(4rem + env(safe-area-inset-top))"
          bg="gray.800"
          _dark={{ bg: 'gray.900' }}
        >
          {!!showDrawer && <MenuButton ms="-0.5rem" />}
          <Box
            as={Link}
            to="/"
            mx={{ base: 'auto',md: 0 }}
          >
          <Image src="./images/logo.svg" mt="4" h="4rem" />

          </Box>
          <Box me="auto" ms="4" display={{ base: 'none', md: 'flex' }} />
          <MainMenu me="auto" ms="4" display={{ base: 'none', md: 'flex' }} />
          {/* <AccountMenu /> */}
        </Flex>
      </SlideFade>
      <Box h="calc(4rem + env(safe-area-inset-top))" />
      {<NavDrawer />}
      {showDrawer && <NavDrawer />}
    </>
  );
};
