import React, { FC, useMemo, useState } from 'react';

import { Flex, useDisclosure } from '@chakra-ui/react';

import { Viewport } from '../components/Viewport';
import { LayoutContext } from '../components/Viewport/LayoutContext';
import { TopBar } from './TopBar';
import { useAuthContext } from '../pages/Auth/AuthContext';

export const Layout: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const [isFocusMode, setIsFocusMode] = useState(false);
  const nav = useDisclosure();
  const { isAuthenticated } = useAuthContext();

  const providerValue = useMemo(
    () => ({
      isFocusMode,
      setIsFocusMode,
      navIsOpen: nav.isOpen,
      navOnClose: nav.onClose,
      navOnOpen: nav.onOpen,
    }),
    [isFocusMode, nav.isOpen, nav.onClose, nav.onOpen]
  );

  return (
    <LayoutContext.Provider value={providerValue}>
      <Viewport>
        {isAuthenticated &&!isFocusMode && <TopBar />} 
        <Flex direction="column" flex="1" minW="0">
          {children}
        </Flex>
      </Viewport>
    </LayoutContext.Provider>
  );
};
