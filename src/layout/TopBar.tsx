
import {
  Box,
  Flex,
  HStack,
  IconButton,
  IconButtonProps,
  SlideFade,
  Stack,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';
import { LuMenu } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import { Logo } from '../components/Logo';
import { useLayoutContext } from '../components/Viewport/LayoutContext';
import { AccountMenu } from './AccountMenu';
import { MainMenu } from './MainMenu';
import { NavDrawer } from './NavDrawer';
import { dropPoint } from '@tiptap/pm/transform';

const MenuButton = (props: Partial<IconButtonProps>) => {
  const { navOnOpen,navOnClose, navIsOpen} = useLayoutContext();
  return (
    <IconButton
      aria-label="Navigation"
      icon={<LuMenu size="1.5em" />}
      onClick={!navIsOpen?navOnOpen:navOnClose}
      variant="unstyled"
      _active={{ bg: 'gray.700' }}
      _hover={{ bg: 'gray.900' }}
      borderRadius="0"
      borderBottomEndRadius="xl"
      {...props}
    />
  );
};

export const TopBar = () => {
  const { navIsOpen } = useLayoutContext();

  const showDrawer = useBreakpointValue(
    {
      base: true,
      lg: false,
    }
  );
  

  return showDrawer ?
( <> <MenuButton  bg="blue.600" pl="1" />
       <NavDrawer />
</>):
  (
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
          py="8"
          h="full"
          bg="#FAFBFB"
          boxShadow="2xl"
          w="20rem"
          _dark={{ bg: 'gray.900' }}
          direction="column"
          alignItems="stretch"
          justifyContent="space-between"
        >
      <Stack spacing={4}>  <HStack as={Link}
          to="/" 
          gap='4' 
          alignItems="center">
        <Logo />
          <Text color="#01427A" fontWeight="bold" fontSize="4xl">SAMM</Text>
          </HStack>
          <Box me="auto" ms="4" display={{ base: 'none', md: 'flex' }} />
           <MainMenu me="auto" ms="4" display={{ base: 'none', md: 'flex' }} /></Stack>
          <AccountMenu /> 
        </Flex>
      </SlideFade>
      <Box w={!navIsOpen?"20rem":"0rem"} />
    </>
  );
};
