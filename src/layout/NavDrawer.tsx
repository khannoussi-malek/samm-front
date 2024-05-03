import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRtl } from './hooks/useRtl';
import { useLayoutContext } from '../components/Viewport/LayoutContext';
import { MainMenu } from './MainMenu';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { AccountMenu } from './AccountMenu';


export const NavDrawer = ({ ...rest }) => {
  const { navIsOpen, navOnClose } = useLayoutContext();
  const { rtlValue } = useRtl();
  return (
    <Drawer
      isOpen={navIsOpen}
      placement={rtlValue('left', 'right')}
      onClose={() => navOnClose?.()}
      {...rest}
    >
      <DrawerOverlay>
        <DrawerContent
          bg="gray.50"
          color="white"
          pt="safe-top"
          pb="safe-bottom"
        >
          <DrawerCloseButton mt="safe-top" />
          <DrawerHeader justifyContent="center">
            <HStack as={Link}
              to="/"
              gap='4'
              alignItems="center">
              <Logo />
              <Text mt="4" color="#01427A" fontWeight="bold" fontSize="4xl">SAMM</Text>
            </HStack>
          </DrawerHeader>
          <DrawerBody p="2">
            <MainMenu direction="column" justifyContetn="center" />
          </DrawerBody>
          <DrawerFooter justifyContent="flex-start">
            <AccountMenu />

          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
