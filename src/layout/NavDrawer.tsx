import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
} from '@chakra-ui/react';
import { useRtl } from './hooks/useRtl';
import { useLayoutContext } from '../components/Viewport/LayoutContext';
import { MainMenu } from './MainMenu';


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
          bg="gray.800"
          color="white"
          pt="safe-top"
          pb="safe-bottom"
        >
          <DrawerCloseButton mt="safe-top" />
          <DrawerHeader justifyContent="center">
          <Image src="./images/logo.svg" h={{ base: '20', md: '40' }} mx="auto" />
          </DrawerHeader>
          <DrawerBody p="2">
            <MainMenu direction="column" justifyContetn="center" />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
